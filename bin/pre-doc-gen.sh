mkdir -p docs/reference
(rm -rf docsource; mkdir docsource)
cp -r schemas/* components/* docsource
node ./bin/doc-fix.js
