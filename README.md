# Experience Data Model (XDM) Schema

Machine readable semantic data model schemas for the [unified Adobe Cloud API](https://wiki.corp.adobe.com/display/ctooperations/Content+and+Data+Workstream).

## Schema files

The machine readable schema source files ([RDF/S](https://www.w3.org/TR/rdf-schema/) in [Turtle Syntax](https://www.w3.org/TR/turtle/)) are located in the root directory of this project.

## Tooling

The tooling project (e.g. for generating HTML documentation, Turtle-to-JSON-LD conversion) is located in the [AdobeCloudPlatform/machinery](https://git.corp.adobe.com/AdobeCloudPlatform/machinery) git repository. 

### Validation

This project contains a minimal validation script that depends on [NPM](https://www.npmjs.com). You can use it to validate the TTL syntax after making changes to any of the `.ttl` files.

```bash
$ npm install
$ npm test

Validator finished with 0 warnings and 0 errors.
Validator finished with 0 warnings and 0 errors.

```

If you see warnings or error messages, fix them before making a pull request.

## Naming Conventions

* Names of Classes, Types and Stricts use CamelCase notation (i.e. they start with a capital letter), e.g. `Asset`
* Names of Properties use mixedCase notation (i.e. they begin with lower case but still capitalize thereafter), e.g. `core:assetName`
* **Exception:** Names of Properties, Classes and Types defined in other ontologies/vocabularies are used _as-is_. e.g. `dc:title`, `xmp:CreateDate`

## Links

### Specifications

* [RDF](https://www.w3.org/RDF/)
* [RDF Schema (RDF/S) 1.1](https://www.w3.org/TR/rdf-schema/)
* [RDF 1.1 Turtle](https://www.w3.org/TR/turtle/)
* [JSON-LD 1.0](https://www.w3.org/TR/json-ld/)
* [XMP SPECIFICATION PART 1 DATA MODEL, SERIALIZATION, AND CORE PROPERTIES](http://wwwimages.adobe.com/content/dam/Adobe/en/devnet/xmp/pdfs/XMP%20SDK%20Release%20cc-2014-12/XMPSpecificationPart1.pdf)

### Vocabularies / Ontologies

* [schema.org](http://schema.org)
* [Dublin Core](http://dublincore.org/)
* [OWL](http://www.w3.org/TR/2009/REC-owl2-overview-20091027/)
* [SKOS Core](http://www.w3.org/TR/2009/REC-skos-reference-20090818/)

### Tools

* [TextMate N3/Turtle Bundle](https://github.com/peta/turtle.tmbundle)
* [Online RDF Converter](http://www.easyrdf.org/converter)