#!/bin/bash
for ex in $(ls -1 *.example.*.json)
do
   schema=${ex/example.*./schema.}
   echo "--------"
   echo "checking example $ex against schema $schema"
   ajv -d "$ex" -s "$schema" -r "*.schema.json" -r "filter-expression/*.schema.json" -r "/Users/jbeckert/Projects/gits/xdm/xdm/schemas/**/*.schema.json" 
done
echo "--------"
