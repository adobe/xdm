#!/bin/bash 

schemas=$1
newcontent=$2
echo -e "Adding:\n\tjson: ${newcontent}\n\tto: ${schemas}"

for cur in $( find . -iname "${schemas}" ); do
  jq ". + ${newcontent}" $cur > "${cur}.out"
  mv "${cur}.out" $cur
done