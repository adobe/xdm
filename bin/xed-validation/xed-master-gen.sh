#!/usr/bin/env bash
##This script is for creating xed from master branch of public repo for comparison purposes.

(rm -rf tempinput; mkdir tempinput)
cp -r ../../schemas ./tempinput/
cp -r ../../components ./tempinput/
cp -r ../../extensions ./tempinput/

(echo "++++++++++Start clean-up for master branch XED conversion of platform schemas only.....++++++++++"; sleep 1)
./cleaninput.sh #cleanup non-platform central repo xdms

(echo "++++++++++Start master branch XED conversion pre-processing.....++++++++++"; sleep 1)
node schemaLocGen.js
node tempGen.js -i tempinput/schemas -j xdm
node tempGen.js -i tempinput/components -j xdm
node tempGen.js -i tempinput/extensions -j xdm-extensions

(echo "++++++++++Start master branch XED conversion processing++++++++++....."; sleep 1)
node xedGen.js -i xdm -j tempxed
node xedGen.js -i xdm-extensions -j tempxed

(echo "++++++++++Start master branch XED schemas field tagging..... ++++++++++"; sleep 1)
echo "{}" > tags.json
node tag4xed.js -i tempxed -j xed
(rm -rf tempinput xdm xdm-extensions tempxed tags.json schemaLoc.json) #cleanup temp folders and keep xed only
(echo "++++++++++End master branch XED conversion..... ++++++++++"; sleep 1)