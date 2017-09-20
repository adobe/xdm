#!/bin/bash

examples=$(find schemas -name "*.example.*.json")
schemas=$(find schemas -name "*.schema.json")
append="-r $(echo $schemas | sed -e "s/ / -r /g")"
failures=0

for example in $examples; do
  schema=$(echo $example | sed -e "s/\.example\..\./.schema./")
  echo "Validating $example against $schema"
  ./node_modules/.bin/ajv validate -s $schema -d $example $append
  exit 1
  if [ $? -ne 0 ]; then
    failures=$[failures + 1]
  fi
done

if [ $failures -ne 0 ]; then
  echo $failures schemas failed to validate
fi

exit $failures