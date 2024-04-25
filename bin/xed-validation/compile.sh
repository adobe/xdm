#!/bin/bash
##Please run from the root of branch
echo $SHELL
xdms=$(find xed -name "*.schema.json" -print)
if [ $? -ne 0 ]; then
  echo "Error finding schemas!"
  exit 1
fi
schema="schema.json"
schemaChanges="schemaChanges.log"
references=$(find xed -name "*.schema.json")
append="-r $(echo $references | sed -e "s/ / -r /g")"
failures=0
declare -a array
xdmFormats=(int8 int16 int32 int64 float date-only datetime-only)
opt="--unknownFormats="
validFormats=""

for xdmFormat in ${xdmFormats[@]}; do #make xdm formats valid formats
  validFormats="$validFormats $opt$xdmFormat ";
done

for xdm in $xdms; do #compile xdm schemas
  #echo "Compiling---> $xdm"
  #only compile the delta
  if grep -q $xdm $schemaChanges; then
  ../../node_modules/.bin/ajv compile -s $xdm -m $schema $append $validFormats
  fi

  if [ $? -ne 0 ]; then #log the invalid schemas to array
    array[$failures]=$xdm
    failures=$[failures + 1]
  fi
done

if [ $failures -ne 0 ]; then
  echo $failures schemas below failed to validate, please check above logs for detailed error
  for i in ${array[@]}
  do
  echo $i
  done
else
  echo "All schemas are valid"
fi

exit $failures
