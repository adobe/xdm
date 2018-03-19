#!/bin/bash 

# This is a helper script to quickly add jq-formatted content to all schemas matching a given pattern
# Usage:
#   $ sh add-content-to-schema.sh <schemas> <content>
#

SCHEMAS=$1
CONTENT=$2
echo -e "Adding:\n\tjson: ${CONTENT}\n\tto: ${SCHEMAS}"

for cur in $( find . -iname "${SCHEMAS}" ); do
  jq ". + ${CONTENT}" $cur > "${cur}.out"
  mv "${cur}.out" $cur
done
