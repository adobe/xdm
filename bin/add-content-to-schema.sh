#!/bin/bash 

# This is a helper script to quickly add jq-formatted content to all schemas matching a given pattern
# Usage:
#   $ sh add-content-to-schema.sh <schemas> <content>
# Example:
#   $ ./bin/add-content-to-schema.sh '*.schema.json' '{ "foobar": "zipzop" }'
#

SCHEMA_PATTERN=$1
SCHEMA_LOCATION=`dirname $0`/../schemas
CONTENT=$2
echo -e "Adding:\n\tjson: ${CONTENT}\n\tto: ${SCHEMA_PATTERN}"

for cur in $( find ${SCHEMA_LOCATION} -iname "${SCHEMA_PATTERN}" ); do
  jq ". + ${CONTENT}" $cur > "${cur}.out"
  mv "${cur}.out" $cur
done
