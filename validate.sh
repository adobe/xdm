#!/bin/bash

examples=$(find schemas -name "*.example.*.json")
schemas=$(find schemas -name "*.schema.json")
for example in $examples; do
  echo $example
  echo $example | sed -e "s/\.example\..\./.schema./"
  exit 1
done
