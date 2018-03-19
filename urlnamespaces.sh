#!/bin/bash

# Find and strip all http/https URLs in the project, then sort resulting entries by uniqueness

find . -path ./node_modules -prune -o -type f -a -exec egrep -o 'https?://[^ \"\)"]+' /dev/null {} \; | awk '{sub(/:/," ");$1=$1;print $2}' | sort -u
