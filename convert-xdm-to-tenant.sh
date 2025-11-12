#!/bin/bash

# Script to convert XDM paid media schemas to tenant-specific schemas
# Usage: ./convert-xdm-to-tenant.sh <TENANT_ID> [output_dir]
#
# This script:
# - Takes all *.schema.json files from paid-media directories
# - Replaces /xdm/ with /${TENANT_ID}/ in top-level $id
# - Replaces /xdm/datatypes/paid-media with /${TENANT_ID}/datatypes/paid-media in $ref
# - Replaces /xdm/mixins/paid-media with /${TENANT_ID}/mixins/paid-media in $ref
# - Outputs modified files to a new directory structure

set -e  # Exit on error

# Color codes for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Check if TENANT_ID is provided
if [ -z "$1" ]; then
    echo -e "${RED}Error: TENANT_ID is required${NC}"
    echo "Usage: $0 <TENANT_ID> [output_dir]"
    echo "Example: $0 _mycompany123"
    exit 1
fi

TENANT_ID="$1"
OUTPUT_DIR="${2:-tenant-schemas}"

# Source directories
DATATYPES_DIR="components/datatypes/paid-media"
FIELDGROUPS_DIR="components/fieldgroups/paid-media"
SCHEMAS_DIR="schemas/paid-media"

# Output directories
OUTPUT_DATATYPES_DIR="${OUTPUT_DIR}/components/datatypes/paid-media"
OUTPUT_FIELDGROUPS_DIR="${OUTPUT_DIR}/components/fieldgroups/paid-media"
OUTPUT_SCHEMAS_DIR="${OUTPUT_DIR}/schemas/paid-media"

echo -e "${GREEN}Converting XDM schemas to tenant-specific schemas${NC}"
echo -e "Tenant ID: ${YELLOW}${TENANT_ID}${NC}"
echo -e "Output directory: ${YELLOW}${OUTPUT_DIR}${NC}"
echo ""

# Create output directories
mkdir -p "${OUTPUT_DIR}/components/classes"
mkdir -p "${OUTPUT_DATATYPES_DIR}"
mkdir -p "${OUTPUT_FIELDGROUPS_DIR}"
mkdir -p "${OUTPUT_SCHEMAS_DIR}"

# Create the paid-media-lookup class (needed for tenant schemas)
echo -e "${GREEN}Creating paid-media-lookup class...${NC}"
cat > "${OUTPUT_DIR}/components/classes/paid-media-lookup.schema.json" << EOF
{
  "meta:license": [
    "Copyright 2025 Adobe Systems Incorporated. All rights reserved.",
    "This work is licensed under a Creative Commons Attribution 4.0 International (CC BY 4.0) license",
    "you may not use this file except in compliance with the License. You may obtain a copy",
    "of the License at https://creativecommons.org/licenses/by/4.0/"
  ],
  "\$id": "https://ns.adobe.com/${TENANT_ID}/classes/paid-media-lookup",
  "\$schema": "http://json-schema.org/draft-06/schema#",
  "title": "Paid Media Lookup",
  "type": "object",
  "meta:extensible": true,
  "meta:abstract": true,
  "description": "Base class for paid media lookup records containing metadata about accounts, campaigns, ad groups, ads, creatives, and other paid media entities.",
  "definitions": {
    "paid-media-lookup": {
      "properties": {}
    }
  },
  "allOf": [
    {
      "\$ref": "https://ns.adobe.com/xdm/data/record"
    },
    {
      "\$ref": "#/definitions/paid-media-lookup"
    }
  ],
  "meta:status": "experimental"
}
EOF
echo -e "  ${GREEN}✓${NC} Created: ${OUTPUT_DIR}/components/classes/paid-media-lookup.schema.json"
echo ""

# Function to process a schema file
process_schema_file() {
    local input_file="$1"
    local output_file="$2"
    local file_type="$3"  # datatype, fieldgroup, or schema
    
    echo -e "  Processing: ${YELLOW}$(basename "$input_file")${NC}"
    
    # Use jq to process the JSON file
    # 1. Replace /xdm/ with /${TENANT_ID}/ in top-level $id
    # 2. Replace /xdm/datatypes/paid-media with /${TENANT_ID}/datatypes/paid-media in all $ref
    # 3. Replace /xdm/mixins/paid-media with /${TENANT_ID}/mixins/paid-media in all $ref
    # 4. Strip "xdm:" namespace from property keys
    # 5. Remove meta:intendedToExtend from fieldgroups (not needed for tenant schemas)

    jq --arg tenant_id "$TENANT_ID" '
        # Function to recursively update all $ref values and replace xdm: with tenant: in property keys
        def update_refs_and_keys:
            if type == "object" then
                # First handle $ref if present
                (if has("$ref") then
                    .["$ref"] |= (
                        gsub("https://ns\\.adobe\\.com/xdm/datatypes/paid-media"; "https://ns.adobe.com/\($tenant_id)/datatypes/paid-media") |
                        gsub("https://ns\\.adobe\\.com/xdm/mixins/paid-media"; "https://ns.adobe.com/\($tenant_id)/mixins/paid-media")
                    )
                else . end) |
                # Then recursively process all values and rename keys
                to_entries |
                map(
                    # Replace "xdm:" prefix with tenant ID prefix for custom fields
                    if .key | startswith("xdm:") then
                        .key |= gsub("^xdm:"; "\($tenant_id):")
                    else . end |
                    # Recursively process the value
                    .value |= update_refs_and_keys
                ) |
                from_entries
            elif type == "array" then
                # For arrays, check if they contain strings that need replacement (like in "required" arrays)
                map(
                    if type == "string" and startswith("xdm:") then
                        gsub("^xdm:"; "\($tenant_id):")
                    elif type == "object" or type == "array" then
                        update_refs_and_keys
                    else
                        .
                    end
                )
            else
                .
            end;

        # Update top-level $id
        if has("$id") then
            .["$id"] |= gsub("https://ns\\.adobe\\.com/xdm/"; "https://ns.adobe.com/\($tenant_id)/")
        else . end |

        # Update meta:intendedToExtend to support both record and time-series classes
        # Replace record behavior with tenant class, and add summarymetrics class for time-series support
        if has("meta:intendedToExtend") then
            .["meta:intendedToExtend"] = (
                (.["meta:intendedToExtend"] | map(
                    gsub("https://ns\\.adobe\\.com/xdm/data/record"; "https://ns.adobe.com/\($tenant_id)/classes/paid-media-lookup")
                )) + ["https://ns.adobe.com/xdm/classes/summarymetrics"]
            )
        else . end |

        # Update meta:class to use the tenant-specific paid-media-lookup class instead of record behavior
        if has("meta:class") then
            .["meta:class"] |= gsub("https://ns\\.adobe\\.com/xdm/data/record"; "https://ns.adobe.com/\($tenant_id)/classes/paid-media-lookup")
        else . end |

        # Update meta:extends array if it exists
        if has("meta:extends") then
            .["meta:extends"] |= map(
                gsub("https://ns\\.adobe\\.com/xdm/data/record"; "https://ns.adobe.com/\($tenant_id)/classes/paid-media-lookup") |
                gsub("https://ns\\.adobe\\.com/xdm/datatypes/paid-media"; "https://ns.adobe.com/\($tenant_id)/datatypes/paid-media") |
                gsub("https://ns\\.adobe\\.com/xdm/mixins/paid-media"; "https://ns.adobe.com/\($tenant_id)/mixins/paid-media")
            )
        else . end |

        # Update allOf array if it exists (for schemas)
        if has("allOf") then
            .["allOf"] |= map(
                if has("$ref") then
                    .["$ref"] |= (
                        gsub("https://ns\\.adobe\\.com/xdm/data/record"; "https://ns.adobe.com/\($tenant_id)/classes/paid-media-lookup") |
                        gsub("https://ns\\.adobe\\.com/xdm/datatypes/paid-media"; "https://ns.adobe.com/\($tenant_id)/datatypes/paid-media") |
                        gsub("https://ns\\.adobe\\.com/xdm/mixins/paid-media"; "https://ns.adobe.com/\($tenant_id)/mixins/paid-media")
                    )
                else . end
            )
        else . end |

        # Recursively update all $ref values and strip xdm: from property keys throughout the document
        update_refs_and_keys
    ' "$input_file" > "$output_file"
    
    if [ $? -eq 0 ]; then
        echo -e "    ${GREEN}✓${NC} Created: $output_file"
    else
        echo -e "    ${RED}✗${NC} Failed to process: $input_file"
        return 1
    fi
}

# Process datatypes
if [ -d "$DATATYPES_DIR" ]; then
    echo -e "${GREEN}Processing datatypes...${NC}"
    file_count=0
    for file in "$DATATYPES_DIR"/*.schema.json; do
        if [ -f "$file" ]; then
            output_file="${OUTPUT_DATATYPES_DIR}/$(basename "$file")"
            process_schema_file "$file" "$output_file" "datatype"
            ((file_count++))
        fi
    done
    echo -e "  Processed ${GREEN}${file_count}${NC} datatype files"
    echo ""
else
    echo -e "${YELLOW}Warning: Datatypes directory not found: $DATATYPES_DIR${NC}"
    echo ""
fi

# Process fieldgroups
if [ -d "$FIELDGROUPS_DIR" ]; then
    echo -e "${GREEN}Processing fieldgroups...${NC}"
    file_count=0
    for file in "$FIELDGROUPS_DIR"/*.schema.json; do
        if [ -f "$file" ]; then
            output_file="${OUTPUT_FIELDGROUPS_DIR}/$(basename "$file")"
            process_schema_file "$file" "$output_file" "fieldgroup"
            ((file_count++))
        fi
    done
    echo -e "  Processed ${GREEN}${file_count}${NC} fieldgroup files"
    echo ""
else
    echo -e "${YELLOW}Warning: Fieldgroups directory not found: $FIELDGROUPS_DIR${NC}"
    echo ""
fi

# Process schemas
if [ -d "$SCHEMAS_DIR" ]; then
    echo -e "${GREEN}Processing schemas...${NC}"
    file_count=0
    for file in "$SCHEMAS_DIR"/*.schema.json; do
        if [ -f "$file" ]; then
            output_file="${OUTPUT_SCHEMAS_DIR}/$(basename "$file")"
            process_schema_file "$file" "$output_file" "schema"
            ((file_count++))
        fi
    done
    echo -e "  Processed ${GREEN}${file_count}${NC} schema files"
    echo ""
else
    echo -e "${YELLOW}Warning: Schemas directory not found: $SCHEMAS_DIR${NC}"
    echo ""
fi

echo -e "${GREEN}✓ Conversion complete!${NC}"
echo -e "Tenant-specific schemas have been written to: ${YELLOW}${OUTPUT_DIR}${NC}"
echo ""
echo -e "${YELLOW}Note:${NC} The original XDM schemas remain unchanged."
echo -e "You can now use the tenant-specific schemas from the ${YELLOW}${OUTPUT_DIR}${NC} directory."

