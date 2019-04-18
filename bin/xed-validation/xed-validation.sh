#!/usr/bin/env bash

(rm -rf tempinput; mkdir tempinput)
cp -r ../../schemas ./tempinput/
cp -r ../../extensions ./tempinput/

(echo "++++++++++Start clean-up for xed conversion of platform schemas only.....++++++++++"; sleep 2)
./cleaninput.sh #cleanup non-platform central repo xdms

(echo "++++++++++Start XED conversion pre-processing.....++++++++++"; sleep 2)
node tempGen.js -i tempinput/schemas -j xdm
node tempGen.js -i tempinput/extensions -j xdm-extensions

(echo "++++++++++Start XED conversion processing++++++++++....."; sleep 2)
node xedGen.js -i xdm -j tempxed
node xedGen.js -i xdm-extensions -j tempxed

(echo "++++++++++Start XED schemas field tagging..... ++++++++++"; sleep 2)
echo "{}" > tags.json
node tag4xed.js -i tempxed -j xed

(echo "++++++++++Start XED schema validation..... ++++++++++"; sleep 2)
./compile.sh
returnCode=$?

if [ $returnCode -ne 0 ]; then
  echo "There are schema validation errors!"
  (rm -rf tempinput xdm xdm-extensions tempxed xed tags.json) #cleanup temp folders
  exit 1
else
  echo "All good"
  (rm -rf tempinput xdm xdm-extensions tempxed xed tags.json) #cleanup temp folders
fi
