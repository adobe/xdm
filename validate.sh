#!/bin/bash

examples=$(find schemas -name "*.example.*.json")
schemas=$(find schemas -name "*.schema.json")
for example in $examples; do
  schema=$(echo $example | sed -e "s/\.example\..\./.schema./")
  echo "Validating $example against $schema"
  exit 1
done
