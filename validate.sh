#!/bin/bash

examples=$(find schemas -name "*.example.*.json")
schemas=$(find schemas -name "*.schema.json")
invalid=$(find schemas -name "*.invalid.*.json")

append="-r $(echo $schemas | sed -e "s/ / -r /g")"
failures=0

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

for example in $invalid; do
  schema=$(echo $example | sed -e "s/\.invalid\..\./.schema./")
  echo "Validating $example against $schema"
  ./node_modules/.bin/ajv validate --errors=text --all-errors -s $schema -d $example $append

  if [ $? -e 0 ]; then
    falsepositives=$[falsepositives + 1]
  fi
done


if [ $falsepositives -ne 0 ]; then
  echo $falsepositives schemas failed to validate
fi

exit $failures