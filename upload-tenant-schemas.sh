#!/bin/bash

# Script to upload tenant-specific schemas to Adobe Schema Registry API
# Usage: cd into the tenant-schemas directory and run ./upload-tenant-schemas.sh [OPTIONS]
#
# Options:
#   --skip-existing    Skip schemas that already exist instead of trying to update them
#   --delete-existing  Delete and recreate schemas that already exist
#
# Required environment variables:
# - CLIENT_ID: Adobe API client ID (used in x-api-key header)
# - ACCESS_TOKEN: Adobe access token
# - ORG_ID: Adobe organization ID
#
# Optional environment variables:
# - SANDBOX_NAME: Sandbox name (default: prod)
# - PLATFORM_URL: Platform URL (default: https://platform-stage.adobe.io)

set -e  # Exit on error

# Parse command line arguments
SKIP_EXISTING=false
DELETE_EXISTING=false
while [[ $# -gt 0 ]]; do
    case $1 in
        --skip-existing)
            SKIP_EXISTING=true
            shift
            ;;
        --delete-existing)
            DELETE_EXISTING=true
            shift
            ;;
        *)
            echo "Unknown option: $1"
            echo "Usage: $0 [--skip-existing|--delete-existing]"
            exit 1
            ;;
    esac
done

# Validate that both flags are not set
if [ "$SKIP_EXISTING" = true ] && [ "$DELETE_EXISTING" = true ]; then
    echo -e "${RED}Error: Cannot use both --skip-existing and --delete-existing${NC}"
    exit 1
fi

# Color codes for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Check required environment variables
echo -e "${BLUE}Checking required environment variables...${NC}"
MISSING_VARS=()

if [ -z "$CLIENT_ID" ]; then
    MISSING_VARS+=("CLIENT_ID")
fi

if [ -z "$ACCESS_TOKEN" ]; then
    MISSING_VARS+=("ACCESS_TOKEN")
fi

if [ -z "$ORG_ID" ]; then
    MISSING_VARS+=("ORG_ID")
fi

if [ ${#MISSING_VARS[@]} -gt 0 ]; then
    echo -e "${RED}Error: Missing required environment variables:${NC}"
    for var in "${MISSING_VARS[@]}"; do
        echo -e "  ${RED}✗${NC} $var"
    done
    echo ""
    echo "Please set the following environment variables:"
    echo "  export CLIENT_ID=<your-client-id>"
    echo "  export ACCESS_TOKEN=<your-access-token>"
    echo "  export ORG_ID=<your-org-id>"
    echo ""
    echo "Optional:"
    echo "  export SANDBOX_NAME=<sandbox-name>  (default: prod)"
    echo "  export PLATFORM_URL=<platform-url>  (default: https://platform-stage.adobe.io)"
    exit 1
fi

echo -e "  ${GREEN}✓${NC} CLIENT_ID is set"
echo -e "  ${GREEN}✓${NC} ACCESS_TOKEN is set"
echo -e "  ${GREEN}✓${NC} ORG_ID is set"
echo ""

# Set optional variables with defaults
SANDBOX_NAME="${SANDBOX_NAME:-prod}"
PLATFORM_URL="${PLATFORM_URL:-https://platform-stage.adobe.io}"

echo -e "${BLUE}Configuration:${NC}"
echo -e "  Platform URL: ${YELLOW}${PLATFORM_URL}${NC}"
echo -e "  Sandbox: ${YELLOW}${SANDBOX_NAME}${NC}"
echo ""

# Check if we're in the right directory structure
if [ ! -d "components/datatypes/paid-media" ] && [ ! -d "components/fieldgroups/paid-media" ] && [ ! -d "schemas/paid-media" ]; then
    echo -e "${RED}Error: Expected directory structure not found${NC}"
    echo "Please run this script from the tenant-schemas directory that contains:"
    echo "  - components/datatypes/paid-media/"
    echo "  - components/fieldgroups/paid-media/"
    echo "  - schemas/paid-media/"
    exit 1
fi

# Function to upload a schema file
upload_schema() {
    local file_path="$1"
    local endpoint="$2"
    local file_name=$(basename "$file_path")

    echo -e "  Uploading: ${YELLOW}${file_name}${NC}"

    # Extract the $id from the schema file to use for PUT if needed
    local schema_id=$(jq -r '.["$id"]' "$file_path")

    # Make the initial POST API call
    response=$(curl -s -w "\n%{http_code}" -X POST \
        "${PLATFORM_URL}/data/foundation/schemaregistry/tenant/${endpoint}" \
        -H 'Content-Type: application/json' \
        -H "Authorization: Bearer ${ACCESS_TOKEN}" \
        -H "x-api-key: ${CLIENT_ID}" \
        -H "x-gw-ims-org-id: ${ORG_ID}" \
        -H "x-sandbox-name: ${SANDBOX_NAME}" \
        -d @"${file_path}")

    # Extract HTTP status code (last line)
    http_code=$(echo "$response" | tail -n1)
    # Extract response body (everything except last line)
    response_body=$(echo "$response" | sed '$d')

    # Check if the request was successful (2xx status code)
    if [[ "$http_code" =~ ^2[0-9][0-9]$ ]]; then
        echo -e "    ${GREEN}✓${NC} Created (HTTP ${http_code})"
        # Extract and display the $id if present
        schema_id=$(echo "$response_body" | grep -o '"$id":"[^"]*"' | cut -d'"' -f4)
        if [ -n "$schema_id" ]; then
            echo -e "    ${BLUE}ID:${NC} ${schema_id}"
        fi
        return 0
    # Check if it's a 400 error indicating the resource already exists or has merge conflicts
    elif [ "$http_code" = "400" ] && echo "$response_body" | grep -q -E "(already exists|duplicate|conflict|Merge Schema Error|Cannot merge)"; then
        if [ "$SKIP_EXISTING" = true ]; then
            echo -e "    ${YELLOW}⚠${NC} Already exists, skipping (--skip-existing flag set)"
            return 0
        fi

        if [ "$DELETE_EXISTING" = true ]; then
            echo -e "    ${YELLOW}⚠${NC} Already exists, deleting and recreating (--delete-existing flag set)..."

            # URL-encode the schema $id for use in the DELETE endpoint
            local encoded_id=$(printf '%s' "$schema_id" | jq -sRr @uri)

            # Delete the existing resource
            delete_response=$(curl -s -w "\n%{http_code}" -X DELETE \
                "${PLATFORM_URL}/data/foundation/schemaregistry/tenant/${endpoint}/${encoded_id}" \
                -H "Authorization: Bearer ${ACCESS_TOKEN}" \
                -H "x-api-key: ${CLIENT_ID}" \
                -H "x-gw-ims-org-id: ${ORG_ID}" \
                -H "x-sandbox-name: ${SANDBOX_NAME}")

            delete_http_code=$(echo "$delete_response" | tail -n1)
            delete_response_body=$(echo "$delete_response" | sed '$d')

            if [[ "$delete_http_code" =~ ^2[0-9][0-9]$ ]]; then
                echo -e "    ${GREEN}✓${NC} Deleted (HTTP ${delete_http_code})"
            elif [ "$delete_http_code" = "404" ]; then
                echo -e "    ${YELLOW}⚠${NC} Not found for deletion (HTTP 404), will try to create anyway"
            else
                echo -e "    ${RED}✗${NC} Delete failed (HTTP ${delete_http_code})"
                echo -e "${RED}Response:${NC}"
                echo "$delete_response_body" | jq '.' 2>/dev/null || echo "$delete_response_body"
                return 1
            fi

            # Now try to create it (again) with POST
            response=$(curl -s -w "\n%{http_code}" -X POST \
                "${PLATFORM_URL}/data/foundation/schemaregistry/tenant/${endpoint}" \
                -H 'Content-Type: application/json' \
                -H "Authorization: Bearer ${ACCESS_TOKEN}" \
                -H "x-api-key: ${CLIENT_ID}" \
                -H "x-gw-ims-org-id: ${ORG_ID}" \
                -H "x-sandbox-name: ${SANDBOX_NAME}" \
                -d @"${file_path}")

            http_code=$(echo "$response" | tail -n1)
            response_body=$(echo "$response" | sed '$d')

            if [[ "$http_code" =~ ^2[0-9][0-9]$ ]]; then
                echo -e "    ${GREEN}✓${NC} Recreated (HTTP ${http_code})"
                schema_id=$(echo "$response_body" | grep -o '"$id":"[^"]*"' | cut -d'"' -f4)
                if [ -n "$schema_id" ]; then
                    echo -e "    ${BLUE}ID:${NC} ${schema_id}"
                fi
                return 0
            else
                echo -e "    ${RED}✗${NC} Recreate failed (HTTP ${http_code})"
                echo -e "${RED}Response:${NC}"
                echo "$response_body" | jq '.' 2>/dev/null || echo "$response_body"
                return 1
            fi
        fi

        echo -e "    ${YELLOW}⚠${NC} Already exists, attempting to update with PUT..."

        # URL-encode the schema $id for use in the PUT endpoint
        # The $id is already extracted from the file at the beginning of the function
        local encoded_id=$(printf '%s' "$schema_id" | jq -sRr @uri)

        # Try PUT to update the existing resource using the URL-encoded $id
        response=$(curl -s -w "\n%{http_code}" -X PUT \
            "${PLATFORM_URL}/data/foundation/schemaregistry/tenant/${endpoint}/${encoded_id}" \
            -H 'Content-Type: application/json' \
            -H "Authorization: Bearer ${ACCESS_TOKEN}" \
            -H "x-api-key: ${CLIENT_ID}" \
            -H "x-gw-ims-org-id: ${ORG_ID}" \
            -H "x-sandbox-name: ${SANDBOX_NAME}" \
            -d @"${file_path}")

        # Extract HTTP status code (last line)
        http_code=$(echo "$response" | tail -n1)
        # Extract response body (everything except last line)
        response_body=$(echo "$response" | sed '$d')

        # Check if PUT was successful
        if [[ "$http_code" =~ ^2[0-9][0-9]$ ]]; then
            echo -e "    ${GREEN}✓${NC} Updated (HTTP ${http_code})"
            # Extract and display the $id if present
            updated_id=$(echo "$response_body" | grep -o '"$id":"[^"]*"' | cut -d'"' -f4)
            if [ -n "$updated_id" ]; then
                echo -e "    ${BLUE}ID:${NC} ${updated_id}"
            fi
            return 0
        else
            echo -e "    ${RED}✗${NC} Update failed (HTTP ${http_code})"
            echo -e "${RED}Response:${NC}"
            echo "$response_body" | jq '.' 2>/dev/null || echo "$response_body"
            return 1
        fi
    else
        echo -e "    ${RED}✗${NC} Failed (HTTP ${http_code})"
        echo -e "${RED}Response:${NC}"
        echo "$response_body" | jq '.' 2>/dev/null || echo "$response_body"
        return 1
    fi
}

# Upload classes first (needed by fieldgroups and schemas)
if [ -d "components/classes" ]; then
    echo -e "${GREEN}Uploading classes...${NC}"
    class_count=0
    for file in components/classes/*.schema.json; do
        if [ -f "$file" ]; then
            if ! upload_schema "$file" "classes"; then
                echo -e "${RED}Upload failed. Exiting.${NC}"
                exit 1
            fi
            ((class_count++))
            echo ""
        fi
    done
    echo -e "  Uploaded ${GREEN}${class_count}${NC} class files"
    echo ""
else
    echo -e "${YELLOW}Warning: Classes directory not found${NC}"
    echo ""
fi

# Upload datatypes
if [ -d "components/datatypes/paid-media" ]; then
    echo -e "${GREEN}Uploading datatypes...${NC}"
    file_count=0
    for file in components/datatypes/paid-media/*.schema.json; do
        if [ -f "$file" ]; then
            if ! upload_schema "$file" "datatypes"; then
                echo -e "${RED}Upload failed. Exiting.${NC}"
                exit 1
            fi
            ((file_count++))
            echo ""
        fi
    done
    echo -e "  Uploaded ${GREEN}${file_count}${NC} datatype files"
    echo ""
else
    echo -e "${YELLOW}Warning: Datatypes directory not found${NC}"
    echo ""
fi

# Upload fieldgroups
if [ -d "components/fieldgroups/paid-media" ]; then
    echo -e "${GREEN}Uploading fieldgroups...${NC}"
    file_count=0
    for file in components/fieldgroups/paid-media/*.schema.json; do
        if [ -f "$file" ]; then
            if ! upload_schema "$file" "fieldgroups"; then
                echo -e "${RED}Upload failed. Exiting.${NC}"
                exit 1
            fi
            ((file_count++))
            echo ""
        fi
    done
    echo -e "  Uploaded ${GREEN}${file_count}${NC} fieldgroup files"
    echo ""
else
    echo -e "${YELLOW}Warning: Fieldgroups directory not found${NC}"
    echo ""
fi

# Upload schemas
if [ -d "schemas/paid-media" ]; then
    echo -e "${GREEN}Uploading schemas...${NC}"
    file_count=0
    for file in schemas/paid-media/*.schema.json; do
        if [ -f "$file" ]; then
            if ! upload_schema "$file" "schemas"; then
                echo -e "${RED}Upload failed. Exiting.${NC}"
                exit 1
            fi
            ((file_count++))
            echo ""
        fi
    done
    echo -e "  Uploaded ${GREEN}${file_count}${NC} schema files"
    echo ""
else
    echo -e "${YELLOW}Warning: Schemas directory not found${NC}"
    echo ""
fi

echo -e "${GREEN}✓ All schemas uploaded successfully!${NC}"

