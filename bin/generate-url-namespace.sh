#!/bin/sh

# Generate master list of URL namespaces found within the project. 
# Steps:
#   (1) Find all http/https URLs in the project, stripping extraneous characters + adjacent formatting, 
#   (2) Cut out the filename where it is found,
#   (3) Sort resulting entries and ensure uniqueness
#

find schemas -path ./node_modules -prune -o -type f -exec egrep -o 'https?://[^][ `)"]+' /dev/null {} \; \
  | awk '{sub(/:http/," http");$1=$1;print $2}' \
  | sort -u
