# Contributing to XDM

The Experience Data Model (XDM) project is developed as an Open Standard driven by Adobe. We welcome contributions from everyone who is interested in advancing digital experiences.

## Public GitHub Ground Rules

We are in the process of increasing the visibility of XDM to partners and to invite them to contribute and give feedback.
For this purpose, we will move the XDM repository to [https://github.com/adobe/xdm](https://github.com/adobe/xdm).
For Adobe employees, following ground rules apply:

* Like everyone, follow the [Code of Conduct](CODE_OF_CONDUCT.md)
* Like everyone, follow these [Contributing](CONTRIBUTING.md) guides
* Like always, don't share credentials, API keys, or other secrets in issues or in code
* Focus on standardizing the category, not your specific product

## Things to Keep in Mind

XDM uses a **review then commit** process, which means that no changes are being made without an _editor_ approving the change.

## Before you Contribute

XDM is driven by Adobe, but it is not specific to Adobe products.
This means that models should capture the universal concepts of digital experiences, not specific implementations, no matter if they are part of an Adobe product or not.
If you need to express a concept that is specific to an Adobe (or other) product, that is not universal, it should be formulated in an XDM extension instead.

## Copyright and Licensing

XDM is an Open Standard with appropriate open licensing. The [License](LICENSE) is the Creative Commons 4.0 Attribution International license. 

Adobe does not require you to assign to Adobe the copyright of your contribution. Contributions must be made by copyright owners, or individuals with the rights to assign the licensing of the contribution on behalf of the copyright owner.

Where possible, include the Creative Commons Attribution 4.0 International (CC BY 4.0) license summary at the top of each file along with the copyright info. 

### License Inclusion
You can include the Creative Commons Attribution 4.0 International (CC BY 4.0) license summary from below, ensure to update the copyright details.

 ```
 "meta:license": [
    "->Your copyright statement here<-",
    "This work is licensed under a Creative Commons Attribution 4.0 International (CC BY 4.0) license",
    "you may not use this file except in compliance with the License. You may obtain a copy",
    "of the License at https://creativecommons.org/licenses/by/4.0/"
  ],
```

## How to Contribute

1. Go to the [list of open issues](https://git.corp.adobe.com/AdobeCloudPlatform/xdm/issues?q=is%3Aissue+is%3Aopen+sort%3Aupdated-desc) and pick an issue you want to work on. If you don't see the appropriate issue, [create a new issue in GitHub](https://git.corp.adobe.com/AdobeCloudPlatform/xdm/issues/new)
2. If you haven't done so yet, [fork the XDM repository into your private GitHub organization](https://git.corp.adobe.com/AdobeCloudPlatform/xdm/fork). If your fork exists, merge the latest updates from `AdobeCloudPlatform/xdm` into `yourname/xdm`, so that you don't start from an outdated code tree
3. In `yourname/xdm` create a new branch from `master`. Your branch name should either refer the issue number like `bug-42` or `feature-23` or have a descriptive name like `fix-layer-group-references`
4. Make add edits that apply to the given feature or bug against this new branch. Commit and push in frequent intervals
5. If you are working on the branch for more than a day, make sure to occasionally (at least once per day) to merge the latest updates from `AdobeCloudPlatform/xdm#master` into your branch, so that you won't get surprised when it's time to merge the pull request. Resolve any conflicts to make life easier for the XDM editors
6. Once you are done, create a pull request from your branch against `AdobeCloudPlatform/xdm#master`.

Every pull request should specify:

* What the change intends to do
* If there are breaking changes
* Link to the Github issue in the format `#42`

For every update to the schema, make sure

* `npm test` validates all example files
* There are `schemas/*/*.example.*.json` files for each newly created schema

Furthermore, a pull request that modifies the schema must also include accompanying documentation. Pull requests with missing documentation will be rejected.

Each commit message that is not part of a pull request:

* Should contain the issue ID like `#42`
* Can contain the tag `[trivial]` for trivial changes that don't relate to an issue

## Design Guidelines

The target consumers of the data model are developers building applications using services from Adobe, our partners, and their customers. These design guidelines help:

* **Longevity**: consuming applications rarely need to be changed.
* **Clarity**: concepts are self-explanatory.
* **Continuity**: existing knowledge can be re-applied.
* **Compatibility**: implementations can easily cross between products.
* **Consumability**: systems based on the data model are easy to build, understand, and use.

### Design for Longevity

Our goal is to establish a universal standard for the experience business. As such, this standard's lifetime will be comparable to standards like PDF (24 years old), EXIF (22 years old), or HTML (24 years old).

The design decisions made today will impact future developers, who will have only limited understanding, patience, or sympathy for constraints dictated by current Adobe implementations. While future requirements cannot be predicted in detail, it is important to accomodate requirements and industry trends.

### Design for Clarity

XDM will be consumed and implemented by many highly different applications, which in turn will be used by digital experience professionals such as marketers, designers, advertisers, or digital analysts, which will be exposed to names and concepts introduced and solidified in XDM.

When names can refer to a business concept or a lower-level technical concept, save the shorter, simpler name for the high-level business concept.

For example, for a marketer, an _event_ is something that happens or takes place, or a planned public or social occasion. For a developer, an _event_ in event-driven programming is a low level user- or system action. As the term event is highly relevant to experiences in the more general sense, the shorter, unqualified term shall be used for the business concept.

### Design for Continuity

XDM is not an isolated standard, but incorporates and builds on standards. Whenever possible, use existing standards, or "borrow" concepts from existing standards. See (and update!) [Standards Used by XDM](docs/standards.md).

### Design for Compatibility

Interoperability with [Microsoft's Common Data Model (CDM)](https://docs.microsoft.com/en-us/common-data-service/entity-reference/common-data-model)is a top priority. This means that definitions that are present in CDM should be used or extended, where appropriate, by XDM. XDM should not attempt to duplicate definitions that are present in CDM.

Where appropriate, we can 'lead' CDM, extend it to meet other requirements.
Another good source of data model elements is [schema.org](http://schema.org).

### Design for Consumability

While there will be almost certainly multiple implementations of parts of XDM across Adobe (sometimes sequentially, sometimes in parallel), the number of internal implementations (producers) will be massively outstripped by the number of external, consuming implementations of XDM.

Additional aspects of standard design that aid with consumability are:

* principle of least astonishment: don't surprise the consumer
* avoid unnecessary complexity: don't introduce indirections that are not needed
* the principle of minimal verbosity: make keep things as short as possible, but not shorter

### Design for the Cloud

The experience business is a global business, therefore XDM needs to meet the needs of consumers and creators world-wide.
Desktop and Enterprise applications are often built to be localized, adapted to the customer environment.
But XDM will form the "glue" that puts together widely distributed components which may have different internal data models.
In general we want to avoid the necessity of converters, with some exceptions:

Some values require context to interpret – for example, a phone number without a county code. Include the context in XDM.
However, for values that need no context to convert, put off conversion by allowing alternatives: writing XDM data will require no conversion, while consuming XDM data only requires conversion in cases where conversion is necessary.

Avoid non-semantic limits – don’t put current resource limits in the data model. Limits (number ranges, choices, string length) should be based on business constraints or expressed independently.

## Coding Styleguides

* file names for schema files should be lower case and end with `.schema.json`
* include an `"$id"` with a value like `"https://ns.adobe.com/xdm/assets/image"` in the schema (but leave out the `.schema.json`)
* when referencing schemas, use the absolute `$id`, don't use relative references like `../content/content.schema.json`
* don't nest schemas too deeply. Break inline type definitions into separate `*.schema.json` files if they have properties with object types themselves.
* don't make schemas too fine-grained, only create schemas for `object`s not for simple types like patterned strings
* ensure that there is a `meta:license` at the top of the schema
* use JSON Schema `draft-6`
* provide a `description` and `title` for each schema and each property
* have the `title` at the top of the schema, so that it can be found without scrolling
* make sure you have an example for every schema
* run `npm test` before you make a pull request
* convention is that property names are in camelCase, when they appear in JSON
* Acronyms in camelCase like ID, API, JSON are also capitalized in camelCase, such as `assetID`
* When combining two acronyms, use lowercase for the first and uppercase for the second, such as `dmaID`
* don't invent your own `ID` attributes, use the `@id` convention
* don't invent your own `type` attributes, use the `@type` convention

Run `npm run lint` before committing. The `lint` command is able to fix some easy styling issues, including:

* intent: 2 spaces
* line breaks
* spaces around delimiters

### Re-Use and Modularity

In order to encourage re-use of definitions and modularity of schema files, avoid putting all property declarations into the root of the schema, instead use a `definitions` object with one sub-key for each semantic unit. Then, at the bottom of your schema definition, `$ref`erence them using the `allOf` construct.

```json
"allOf":[
    {"$ref": "#/definitions/mydefinition"},
    {"$ref": "#/definitions/myotherdefinition"},
    {"$ref": "https://ns.adobe.com/xdm/assets/image#/definitions/someotherdefinition"},
  ]
```

In this example, the definitions `mydefinition` and `myotherdefinition` are pulled from the current schema, while `someotherdefinition` is pulled from `https://ns.adobe.com/xdm/assets/image`

JSON Schema [does not have a built-in inheritance mechanism](https://github.com/json-schema-org/json-schema-spec/issues/348#issuecomment-322940347), so the use of `definitions` is considered [best practice in structuring complex schemas](https://spacetelescope.github.io/understanding-json-schema/structuring.html).

### Extensibility

We use built-in JSON Schema capabilities to provide extensibility.
These capabilities are augmented by some JSON LD-inspired extensions, without requiring consumers to become full-blown JSON LD processors.
There are two modes of making XDM extensible: through custom properties and through new schemas.
Custom properties and deriving new schemas from existing schemas are discussed in the next two sections

#### Custom Properties

In order to allow custom properties, use the `https://ns.adobe.com/xdm/common/extensible` schema as a `$ref` reference to the schema in question. This will make sure validation will mark any extension that uses ad-hoc, unregistered properties that potentially overwrites existing or future XDM core properties, as invalid.

In detail, this schema fragment:

1. disallows the use of `@context` to define custom namespace prefixes
2. if `@context` is used, it enforces the namespace prefix mapping that XDM uses
3. it forbids the use of any property name prefix that is not listed in `schemas/common/context.jsonld`
4. it allows `patternProperties` that are full URIs, so that customers can add their own extensions, as explained in [the extensibility docs](docs/extensibility.md)

XDM provides this JSON Schema fragment to that express these constraints. The schema fragment that can be added to a given schema, allowing you to validate example documents with extensions.

##### Example

In order to make a schema extensible, add the `https://ns.adobe.com/xdm/common/extensible#/definitions/@context` schema fragment reference to your schema definition.

```json
"allOf":[
    {"$ref": "https://ns.adobe.com/xdm/common/extensible#/definitions/@context"},
    {"$ref": "#/definitions/…"}
  ]
```

#### New Schemas

When it comes to expressing parent-child relationships between schemas, e.g. in order to create a new schema that inherits definitions from an existing schema, XDM distinguishes two things:

1. How inheritance relationships are expressed
2. How inheritance relationships are implemented

JSON Schema does not have a built-in concept of schema inheritance, so XDM is using a set of custom properties and conventions to achieve the same semantics.

##### Declaring a Schema to be Extensible

Unless explicitly declared otherwise, XDM schemas cannot be extended.
The author of a given schema has to declare the ability to extend a schema using the `meta:extensible` property at the root of the schema.
`meta:extensible` is a `boolean` property, and only the value `true` is of any consequence, as the assumed default is `false`.
If a schema is not extensible, the `meta:extensible` property can be omitted.

In addition to **declaring** the extensibility, the schema author has to make sure that all properties that constitute the schema are defined in a child node of `definitions`.
As you can see in the next section, the presence of a `definitions` object is expected, and will be validated by running `npm run lint`.
The co-occurrence of `"meta:extensible": true` and `definitions` is enforced through rules in the meta-schema under `meta.schema.json`.

##### Extending a Schema with a new Schema

A schema must express that it is extending one or multiple other schemas through the `meta:extends` property.
This property can be either a `string`, containing the `uri` of the schema that is being extended.
This `uri` is the value of the `$id` property of the extended schema, and is for XDM typically a fully qualified URI that does _not_ end with `.schema.json`.
Alternatively, `meta:extends` can be an `array` of schmema `uri`s.
JSON Schema does not resolve multiple levels of inheritance, so when extending a schema that is extending another schema, list both schemas in the `meta:extends` array. A list of extensions will looks something like this:

```json
"meta:extends": [
  "https://ns.adobe.com/firstschema",
  "https://ns.adobe.com/secondschema",
]
```

In addition to **declaring** the intent to extend, the schema author has to make sure to actually include the schema definitions in an `allOf` object at the root of the schema. This `allOf` object will look something like this:

```json
"allOf":[
    {"$ref": "https://ns.adobe.com/firstschema#/definitions/first"},
    {"$ref": "https://ns.adobe.com/secondschema#/definitions/second"},
    {"$ref": "#/definitions/myowndefinitions"}
  ]
```

Note that the first and second schema are referred to not just by their base path, but also by the fragment identifier `#/definitions/first` and `#/definitions/second`, respectively.
The schema's own definitions are kept and imported from the `definitions.myowndefinitions` object.
This keeps the schema compact and readable.

##### Example

The root schema is `first.schema.json`. It is extensible.

```json
{
  "$schema": "http://json-schema.org/draft-06/schema#",
  "$id": "https://ns.adobe.com/xdm/example/first",
  "title": "First",
  "type": "object",
  "meta:extensible": true,
  "definitions": {
    "first": {
      "properties": {
        "foo": {
          "type": "string"
        }
      }
    }
  },
  "allOf": [
    {
      "$ref": "#/definitions/first"
    }
  ]
}
```

The second schema is `second.schema.json`, it is both extending and extensible.

```json
{
  "$schema": "http://json-schema.org/draft-06/schema#",
  "$id": "https://ns.adobe.com/xdm/example/second",
  "title": "Second",
  "type": "object",
  "meta:extensible": true,
  "meta:extends": "https://ns.adobe.com/xdm/example/first",
  "definitions": {
    "second": {
      "properties": {
        "bar": {
          "type": "string"
        }
      }
    }
  },
  "allOf": [
    {
      "$ref": "https://ns.adobe.com/xdm/example/first#/definitions/first"
    },
    {
      "$ref": "#/definitions/second"
    }
  ]
}
```

The third schema is `third.schema.json`, it extends both `second`, and transitively `first` (although this needs to be expressed explicitly)

```json
{
  "$schema": "http://json-schema.org/draft-06/schema#",
  "$id": "https://ns.adobe.com/xdm/example/third",
  "title": "Second",
  "type": "object",
  "meta:extensible": false,
  "meta:extends": [
    "https://ns.adobe.com/xdm/example/first",
    "https://ns.adobe.com/xdm/example/second"
  ],
  "definitions": {
    "third": {
      "properties": {
        "baz": {
          "type": "string"
        }
      }
    }
  },
  "allOf": [
    {
      "$ref": "https://ns.adobe.com/xdm/example/first#/definitions/first"
    },
    {
      "$ref": "https://ns.adobe.com/xdm/example/first#/definitions/second"
    },
    {
      "$ref": "#/definitions/third"
    }
  ]
}
```

### Other Schema Extensions

XDM is using a couple of custom keywords that are not part of the JSON Schema standard. These include:

* `meta:extensible`: see above, to describe schemas that allow custom properties
* `meta:auditable`: for schemas that have created and last modified dates
* `meta:enum`: for known values in enums, strings, and as property keys

## Writing Styleguides

For all writing, please follow the [Adobe I/O style guide](https://www.adobe.io/about/contributing/doc-style_master.html).

## How Contributions get Reviewed

The XDM project differentiates between major and minor contributions.

* Minor contributions: contributions that do not change the meaning of the standard, such as corrections to typos, word order or formatting. Contributions to the project's `README.md` or `CONTRIBUTING.md` are also minor contributions.
* Major contributions: all other contributions.

### Minor Contributions

One of the editors will look at the pull request within one week and flag it as `minor`. The editor will then either merge or reject the pull request. If you haven't heard back from the editors within a week, it is not impolite to send a reminder to [Grp-XDM-API-WGs](mailto:Grp-XDM-API-WGs@adobe.com).

Feedback on the pull request will be given in writing, in GitHub.

### Major Contributions

One of the editors will look at the pull request within one week and flag it as `major`. The editor will then provide feedback on the pull request in GitHub.

Every week, during the XDM working group meeting, all open pull requests will be reviewed and discussed. All feedback given in the meeting will be logged in GitHub. This real-time discussion will make sure all open pull requests will get attention.

When the editors agree on the pull request, the pull request will either be merged or rejected. Until this is the case, the pull request will remain open. Editors are operating under the assumption of agreement, so that a single editor can authorize a merge.
