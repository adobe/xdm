#!/bin/bash

schemas=$(find schemas -name "*.schema.json")

append="-r $(echo $schemas | sed -e "s/ / -r /g")"

failures=0
examples=$(find schemas -name "*.example.*.json")
echo "Validating examples: each of these should be valid"
for example in $examples; do
  schema=$(echo $example | sed -e "s/\.example\..\./.schema./")
  echo "Validating $example against $schema"
  ./node_modules/.bin/ajv validate --errors=text --all-errors -s $schema -d $example $append

  if [ $? -ne 0 ]; then
    failures=$[failures + 1]
  fi
done

if [ $failures -ne 0 ]; then
  echo $failures schemas failed to validate
fi



falsepositives=0
invalid=$(find schemas -name "*.invalid.*.json")
echo "Validating invalid examples: each of these should be invalid"
for example in $invalid; do
  schema=$(echo $example | sed -e "s/\.invalid\..\./.schema./")
  echo "Validating $example against $schema"
  ./node_modules/.bin/ajv validate --errors=text --all-errors -s $schema -d $example $append

  if [ $? -eq 0 ]; then
    falsepositives=$[falsepositives + 1]
  fi
done

if [ $falsepositives -ne 0 ]; then
  echo $falsepositives schemas failed to validate
fi

for schema in $schemas; do
  pattern=$(echo $schema | sed -e "s/\.schema\./.example.*./")
  count=$(ls $pattern 2> /dev/null | wc -l)
  if [ "$count" == "0" ]; then
    echo "$schema has $count examples"
  fi
done

exit $failures