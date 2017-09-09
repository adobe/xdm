# Experience Data Model (XDM) Schema

Machine readable semantic data model schemas for the [unified Adobe Cloud API](https://wiki.corp.adobe.com/display/ctooperations/Content+and+Data+Workstream).

## Project Layout

The project is laid out in the following way:

- `docs`: Markdown files that contain front-matter, introduction, and non-normative parts of XDM
- `schemas`: JSON schema files constituting the normative part of XDM
  - `*.schema.json` is the schema file, e.g. `event-envelope.schema.json` – we pick the `.json` file extension for easy syntax highlighting in editors
  - `*.example.*.json` is an example file that will be validated against the `*.schema.json` file, and if successful, merged into the `*.schema.json` file as an `"example"` field at the root of the schema before its converted into Markdown or published
  - `*.description.md` is a description file that will be merged into the `"description"` field at the root of the schema, allowing the authoring of longer descriptions. The merge happens before publishing the schema file or creating a joint Markdown file
- `*.ttl`: legacy schema files in Turtle Syntax that have not yet been converted into JSON Schema
- `package.json`: a build file for `npm` that allows the generation of Markdown from the JSON Schema source files and (later) the generation of an AEM package to be deployed on the Adobe I/O Website
- `README.md`: this file
- `CONTRIBUTING.md`: guidelines for contributors, covering process, conventions and design guidelines

## Schema files

The machine readable schema source files ([RDF/S](https://www.w3.org/TR/rdf-schema/) in [Turtle Syntax](https://www.w3.org/TR/turtle/)) are located in the root directory of this project.

## Tooling

The tooling project (e.g. for generating HTML documentation, Turtle-to-JSON-LD conversion) is located in the [AdobeCloudPlatform/machinery](https://git.corp.adobe.com/AdobeCloudPlatform/machinery) git repository. 

### Dependencies

You need:

1. The `models` project. Clone `https://git.corp.adobe.com/ankaur/machinery.git`, revert to commit `32ba91cfc07b05b1132206173c39b06cec56a9ac` and keep it in the `../models` directory
2. The AEM Standalone importer. Clone `https://git.corp.adobe.com/adobe-io/unified-dev-portal.git`, use branch `standalone-importer` and build using `mvn clean install`

### AEM Package Generation

When all dependencies are installed, simply run

```bash
$ npm install
```

This will fetch all dependencies, then generate Markdown in the `docs/reference` directory and then generate an AEM package under `xdm-docs.zip`. The package can be uploaded using the command

```bash
$ npm run upload
```

`upload` will upload to the Adobe I/O Staging instance. To upload to production, use `upload:prod` instead.

The AEM password is not saved in this repository (of course), but you can set it using this command:

```bash
$ npm config set xdm-models:aem_password $AEM_PASSWORD
```

This is assuming `$AEM_PASSWORD` has been provided to your Continuous Integration system or set on the command line beforehand.

Running `upload` will only make the documentation visible on the "author" instance, this means visitors to the site cannot see any of the documentation. To publish it, run the `npm run activate` or `npm run activate:prod` commands.

A full process would then look like this:

```bash
$ npm config set xdm-models:aem_password $AEM_PASSWORD
$ npm install
$ npm run upload
$ npm run activate
```
This will generate documentation, create an AEM package, install it on (stage) author, and activate it from there, so that visitors can read the documentation.

### Validation (deprecated)

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
