#!/bin/bash

if [ -e ".failed" ]; then
  echo "Previous run failed, re-running failed tests first"
  sh .failed
  if [ $? -eq 0 ]; then
    echo "Ok, continuing with normal tests."
  else
    exit 1
  fi
fi

schemas=$(find schemas -name "*.schema.json")

append="-r $(echo $schemas | sed -e "s/ / -r /g")"

echo "#!/bin/bash" > .failed
failures=0
examples=$(find schemas -name "*.example.*.json")
echo "Validating examples: each of these should be valid"
for example in $examples; do
  schema=$(echo $example | sed -e "s/\.example\..\./.schema./")
  last=$(./node_modules/.bin/ajv validate --errors=text --all-errors -s $schema -d $example $append 2>&1)

  if [ $? -ne 0 ]; then
    echo "   Validating $example against $schema"
    echo "$last" | sed -e "s/^/   /"
    echo "./node_modules/.bin/ajv validate --errors=text --all-errors -s $schema -d $example $append" >> .failed
    let "failures++"
  fi
done

if [ $failures -ne 0 ]; then
  echo -e "   \033[31m$failures schemas failed to validate\033[0m"
else
  rm .failed
fi



falsepositives=0
invalid=$(find schemas -name "*.invalid.*.json")
echo ""
echo "Validating invalid examples: each of these should be invalid"
for example in $invalid; do
  schema=$(echo $example | sed -e "s/\.invalid\..\./.schema./")
  last=$(./node_modules/.bin/ajv validate --errors=text --all-errors -s $schema -d $example $append 2> /dev/null)

  if [ $? -eq 0 ]; then
    echo "Validating $example against $schema"
    echo "   $last"
    let "falsepositives++"
  fi
done

if [ $falsepositives -ne 0 ]; then
  echo -e "   \033[31m$falsepositives schemas validated against invalid examples\033[0m"
else
  echo "  All OK. Or not ok. But that's a good thing."
fi

echo ""
echo "Finding schemas without examples"

for schema in $schemas; do
  pattern=$(echo $schema | sed -e "s/\.schema\./.example.*./")
  count=$(ls $pattern 2> /dev/null | wc -l)
  if [ "$count" == "0" ]; then
    echo "   $schema has $count examples"
  fi
done

exit $failures