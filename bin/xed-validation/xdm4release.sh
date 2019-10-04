#!/usr/bin/env bash
# this script is for registry INT release purpose and should be called only from registry api publish call
(rm -rf tempinput; mkdir tempinput)
(cp -r ../../schemas ./tempinput/; cp -r ../../extensions ./tempinput/)
./cleaninput.sh #cleanup non-platform central repo xdms
(rm -rf ../../json; mkdir ../../json; mkdir ../../json/release)
(cp -r ./tempinput/schemas ../../json/release; cp -r ./tempinput/extensions ../../json/release)
(rm -rf tempinput; mkdir tempinput)
