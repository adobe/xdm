#!/bin/bash
# This script checks for disallowed changes to certain properties in schema files.

schemaChangesLog=$1  # Path to the schema changes log file

restrictedProps=("minimum" "maximum" "minLength" "maxLength")
for prop in "${restrictedProps[@]}"; do
  # Look for additions or modifications of restricted properties
  if grep -E "^\+.*\"$prop\":" $schemaChangesLog; then
    echo "Error: PR contains disallowed changes to $prop property!"
    exit 1
  fi
done