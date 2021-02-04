# Experience Data Model (XDM) Schema

[![CircleCI](https://circleci.com/gh/adobe/xdm.svg?style=svg)](https://circleci.com/gh/adobe/xdm) [![Greenkeeper badge](https://badges.greenkeeper.io/adobe/xdm.svg)](https://greenkeeper.io/)

The [Experience Data Model](https://www.adobe.io/open/standards/xdm) (XDM) is the language of digital experiences.
XDM is a publicly documented specification, driven by Adobe to improve the interoperability, expressiveness, and power of digital experiences.
This repository contains the source code for the formal specification of the XDM model, using the JSON Schema language.

## Current Version

XDM is at version `1.13.3`.

You can find more about our versioning in [docs/introduction.md](docs/introduction.md#versioning)

## XDM Visualization

See [visualization of the master branch](https://opensource.adobe.com/xdmVisualization/prod/master/), which is refreshed every 12 hours.

## Read the XDM Spec

- [Chapter 1: Introduction](docs/introduction.md)
- [Chapter 2: Related Standards](docs/standards.md)
- [Chapter 3: Terminology](docs/terminology.md)
- [Chapter 4: Extending XDM](docs/extensions.md)
- [Appendix A: Reference](docs/reference/README.md) – this contains all the schemas defined by XDM

## Project Layout

The project is laid out in the following way:

- `docs`: Markdown files that contain front-matter, introduction, and non-normative parts of XDM
- `schemas`: JSON schema files that define out of the box cross user schemas
- `components`: JSON schema files that define the AEP components used in the composition model to create schemas usable within UPS
- `extensions`: JSON schema files that define vendor or solution specific components used within the composition model of AEP
- `package.json`: a build file for `npm` that allows the generation of Markdown from the JSON Schema source files and (later) the generation of an AEM package to be deployed on the Adobe I/O Website
- `README.md`: this file
- `CONTRIBUTING.md`: guidelines for contributors, covering process, conventions and design guidelines

## File Types

- `*.schema.json` is the schema file, e.g. `profile.schema.json` – we pick the `.json` file extension for easy syntax highlighting in editors
- `*.example.*.json` is an example file that will be validated against the `*.schema.json` file, and if successful, merged into the `*.schema.json` file as an `"example"` field at the root of the schema before it is converted into Markdown or published
- `*.invalid.*.json` is an invalid example file that will be validated against the `*.schema.json` file. If the `invalid` file validates (false positive), the schema is too lax and the overall build will fail. `invalid` files will not be merged into documentation.

## Tooling

The tooling project (e.g. for generating Markdown documentation, example validation, JSON Schema documentation inlining) is located in the [adobe/jsonschema2md](https://github.com/adobe/jsonschema2md) git repository.

### Dependencies

You need:

1.  Node.js and `npm`
2.  `curl`

### Validation of local changes prior to creating any Pull Requests to adobe/xdm

This project contains a minimal validation script that depends on [NPM](https://www.npmjs.com). You can use it to validate the JSON example files against the JSON Schema files after making changes to either.

From the root directory of the local repository run:

```bash
$ npm install
$ npm test

> xdm@0.9.3 test /Users/fmeschbe/src/platform/xdm
> mocha
...

$ npm run lint
...
```

If you see warnings or error messages (or an non-zero exit code), fix them before making a pull request.

## Naming Conventions

- see the [Contributor's guide](CONTRIBUTING.md)

### AEM Package Generation (optional)

With all dependencies installed, run the following commands from the root directory of the local repository:

```bash
$ npm install
$ npm run package
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
$ npm test
$ npm run package
$ npm run upload
$ npm run activate
```

This will generate documentation, create an AEM package, install it on (stage) author, and activate it from there, so that visitors can read the documentation.

#### A Note on Dependencies

The `package.json` script will fetch a released version of the AEM Markdown Importer JAR using curl.

## Links

### Specifications

- [JSON Schema](http://json-schema.org/)
- [JSON-LD 1.0](https://www.w3.org/TR/json-ld/)
- [XMP SPECIFICATION PART 1 DATA MODEL, SERIALIZATION, AND CORE PROPERTIES](http://wwwimages.adobe.com/content/dam/Adobe/en/devnet/xmp/pdfs/XMP%20SDK%20Release%20cc-2014-12/XMPSpecificationPart1.pdf)

### Vocabularies/Ontologies

- [schema.org](http://schema.org)
- [Dublin Core](http://dublincore.org/)
- [OWL](http://www.w3.org/TR/2009/REC-owl2-overview-20091027/)
- [SKOS Core](http://www.w3.org/TR/2009/REC-skos-reference-20090818/)

## License/Copyright

Copyright 2017 Adobe Systems Incorporated. All rights reserved.
This work is licensed under a [Creative Commons Attribution 4.0 International (CC BY 4.0)](https://creativecommons.org/licenses/by/4.0/) license.

### You are free to:

- Share — copy and redistribute the material in any medium or format.
- Adapt — remix, transform, and build upon the material for any purpose, even commercially.

This license is acceptable for Free Cultural Works.

The licensor cannot revoke these freedoms as long as you follow the license terms.

### Under the following terms:

- Attribution — You must give appropriate credit, provide a link to the license, and indicate if changes were made. You may do so in any reasonable manner, but not in any way that suggests the licensor endorses you or your use.
- No additional restrictions — You may not apply legal terms or technological measures that legally restrict others from doing anything the license permits.
