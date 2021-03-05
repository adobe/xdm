# Contributing to XDM

The Experience Data Model (XDM) project is developed as an Open Standard driven by Adobe. We welcome contributions from everyone who is interested in advancing digital experiences.

## Public GitHub Ground Rules

We are in the process of increasing the visibility of XDM to partners and to invite them to contribute and give feedback.
For this purpose, we have moved the XDM repository to [https://github.com/adobe/xdm](https://github.com/adobe/xdm).
For Adobe employees, following ground rules apply:

- Like everyone, follow the [Code of Conduct](CODE_OF_CONDUCT.md)
- Like everyone, follow these [Contributing](CONTRIBUTING.md) guides
- Like always, don't share credentials, API keys, or other secrets in issues or in code
- Focus on standardizing the category, not your specific product

## Things to Keep in Mind

XDM uses a **review then commit** process, which means that no changes are being made without an _editor_ approving the change.

## Before you Contribute

XDM is driven by Adobe, but it is not specific to Adobe products.
This means that models should capture the universal concepts of digital experiences, not specific implementations, no matter if they are part of an Adobe product or not.
If you need to express a concept that is specific to an Adobe (or other) product, that is not universal, it should be formulated in an XDM extension instead.

## How to Contribute

0.  If you haven't done so, sign the [Adobe CLA](http://opensource.adobe.com/cla.html)
1.  Go to the [list of open issues](https://github.com/adobe/xdm/issues?q=is%3Aissue+is%3Aopen+sort%3Aupdated-desc) and pick an issue you want to work on. If you don't see the appropriate issue, [create a new issue in GitHub](https://github.com/adobe/xdm/issues/new)
1.  If you haven't done so yet, [fork the XDM repository into your private GitHub organization](https://github.com/adobe/xdm/fork). If your fork exists, merge the latest updates from `adobe/xdm` into `yourname/xdm`, so that you don't start from an outdated code tree
1.  In `yourname/xdm` create a new branch from `master`. Your branch name should refer the issue number like `bug-42` or `feature-23` where one exists and have a descriptive name like `fix-layer-group-references`
1.  Make add edits that apply to the given feature or bug against this new branch. Commit and push in frequent intervals
1.  If you are working on the branch for more than a day, make sure to occasionally (at least once per day) to merge the latest updates from `adobe/xdm#master` into your branch, so that you won't get surprised when it's time to merge the pull request. Resolve any conflicts to make life easier for the XDM editors
1.  Once you are done, create a pull request from your branch against `adobe/xdm#master`.

Every pull request should specify:

- What the change intends to do
- If there are breaking changes (in case there are, list them in [CHANGELOG.md](CHANGELOG.md), too)
- Link to the Github issue in the format `#42`

For every update to the schema, make sure

- `npm test` validates all example files, see [README.md](README.md)
- There are `schemas/*/*.example.*.json` files for each newly created or changed schema

Furthermore, a pull request that modifies the schema must also include accompanying documentation. Pull requests with missing documentation will be rejected.

All changes to the adobe/xdm repository now require an associated pull request.

## Design Guidelines

The target consumers of the data model are developers building applications using services from Adobe, our partners, and their customers. These design guidelines help:

- **Longevity**: consuming applications rarely need to be changed.
- **Clarity**: concepts are self-explanatory.
- **Continuity**: existing knowledge can be re-applied.
- **Compatibility**: implementations can easily cross between products.
- **Consumability**: systems based on the data model are easy to build, understand, and use.

### Design for Longevity

Our goal is to establish a universal standard for the experience business. As such, this standard's lifetime will be comparable to standards like PDF (24 years old), EXIF (22 years old), or HTML (24 years old).

The design decisions made today will impact future developers, who will have only limited understanding, patience, or sympathy for constraints dictated by current Adobe implementations. While future requirements cannot be predicted in detail, it is important to accommodate requirements and industry trends.

### Design for Clarity

XDM will be consumed and implemented by many highly different applications, which in turn will be used by digital experience professionals such as marketers, designers, advertisers, or digital analysts, which will be exposed to names and concepts introduced and solidified in XDM.

When names can refer to a business concept or a lower-level technical concept, save the shorter, simpler name for the high-level business concept.

For example, for a marketer, an _event_ is something that happens or takes place, or a planned public or social occasion. For a developer, an _event_ in event-driven programming is a low level user- or system action. As the term event is highly relevant to experiences in the more general sense, the shorter, unqualified term shall be used for the business concept.

### Design for Continuity

XDM is not an isolated standard, but incorporates and builds on standards. Whenever possible, use existing standards, or "borrow" concepts from existing standards. See (and update!) [Standards Used by XDM](docs/standards.md).

### Design for Compatibility

Interoperability with [Microsoft's Common Data Model (CDM)](https://github.com/Microsoft/CDM) is a top priority. This means that definitions that are present in CDM should be used or extended, where appropriate, by XDM. XDM should not attempt to duplicate definitions that are present in CDM.

Where appropriate, we can 'lead' CDM, extend it to meet other requirements.
Another good source of data model elements is [schema.org](http://schema.org).

### Design for Consumability

While there will be almost certainly multiple implementations of parts of XDM across Adobe (sometimes sequentially, sometimes in parallel), the number of internal implementations (producers) will be massively outstripped by the number of external, consuming implementations of XDM.

Additional aspects of standard design that aid with consumability are:

- principle of least astonishment: don't surprise the consumer
- avoid unnecessary complexity: don't introduce indirections that are not needed
- the principle of minimal verbosity: make keep things as short as possible, but not shorter
- avoid unnecessary polymorphism that is hard to consume, e.g. offering both singular and array notations, or introducing type variants that don't provide a common discriminator property.

### Design for the Cloud

The experience business is a global business, therefore XDM needs to meet the needs of consumers and creators world-wide.
Desktop and Enterprise applications are often built to be localized, adapted to the customer environment.
But XDM will form the "glue" that puts together widely distributed components which may have different internal data models.
In general we want to avoid the necessity of converters, with some exceptions:

Some values require context to interpret – for example, a phone number without a county code. Include the context in XDM.
However, for values that need no context to convert, put off conversion by allowing alternatives: writing XDM data will require no conversion, while consuming XDM data only requires conversion in cases where conversion is necessary.

Avoid non-semantic limits – don’t put current resource limits in the data model. Limits (number ranges, choices, string length) should be based on business constraints or expressed independently.

### Json file location guidelines.

- All the XDM standard JSON files should be placed under their respective directories on GITHUB.
- Classes should be placed under xdm/components/classes/
- Mixins should be placed under xdm/components/mixins/<ClassName>/. If a mixin is extending more than one class then the should be under xdm/components/mixins/shared/
- Data Types should be placed under components/datatypes/
- Any global Schemas which are not extendable should be under xdm/schemas/
- Any internal solution specific schemas should be defined under xdm/extensions/

### Schema design general guidelines

- Always start introducing new properties by mapping them to the existing set of Classes, Mixins and Data types.
- See if you can enhance existing Mixins and Data types by adding the un-mapped properties from the above step.
- To itroduce a new entity in XDM, only add a new class if the new business concept could not be added by existing set of XDM classes.
- If you have to add a new class, then keep all the properties in the class which will always be required. Then start putting mixins for different use cases.
- Always keep in mind the uber schema of the class when you create mixins and the way you define properties.
- Think about wrapping the root level attributes in a MIXIN with in some business context/category.

#### No categorization example (Not recommended)

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
        "xdm:campaignName": {
          "title": "Campaign name",
          "type": "string",
          "description": "Name of the campaign used to identify marketing campaign like '50%_DISCOUNT_USA' or '50%_DISCOUNT_ASIA'."
        },
        "xdm:campaignGroup": {
          "title": "Campaign group",
          "type": "string",
          "description": "Name of the campaign group where multiple campaigns are grouped together like '50%_DISCOUNT'."
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

#### With categorization (Recommended)

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
	    "xdm:marketing": {
		  "properties": {
			"xdm:campaignName": {
			  "title": "Campaign name",
			  "type": "string",
			  "description": "Name of the campaign used to identify marketing campaign like '50%_DISCOUNT_USA' or '50%_DISCOUNT_ASIA'."
			},
			"xdm:campaignGroup": {
			  "title": "Campaign group",
			  "type": "string",
			  "description": "Name of the campaign group where multiple campaigns are grouped together like '50%_DISCOUNT'."
			}
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

- Create Data Types only for the cases where you see re-usability of the properties in multiple MIXINS else, define those properties inline within the MIXINs.
- If a certain data type you create will always be used inside only one MIXIN, then inline the data type properties within the MIXIN itself.

### XDM Json Schema structure - General guidelines

You would generally create following types of JSON schemas while creating pull requests on GITHUB.

- CLASS
- MIXIN
- DATA TYPE
- GLOBAL SCHEMA

In general, all the above XDM schemas are mostly similar in structure with a difference of certain "meta" key words which distinguish one from the another.
The following sections compose an XDM JSON schema

#### Copyright and Licensing

XDM is an Open Standard with appropriate open licensing. The [License](LICENSE) is the Creative Commons 4.0 Attribution International license.

Adobe does not require you to assign to Adobe the copyright of your contribution. Contributions must be made by copyright owners, or individuals with the rights to assign the licensing of the contribution on behalf of the copyright owner.

Where possible, include the Creative Commons Attribution 4.0 International (CC BY 4.0) license summary at the top of each file along with the copyright info.

##### Contributor License Agreement

All third-party contributions to this project must be accompanied by a signed contributor license. This gives Adobe permission to redistribute your contributions as part of the project. Sign our CLA at [http://opensource.adobe.com/cla.html](http://opensource.adobe.com/cla.html). You only need to submit an [Adobe CLA](http://opensource.adobe.com/cla.html) one time.

##### License Inclusion

You can include the Creative Commons Attribution 4.0 International (CC BY 4.0) license summary from below, ensure to update the copyright details.

```
"meta:license": [
   "->Your copyright statement here<-",
   "This work is licensed under a Creative Commons Attribution 4.0 International (CC BY 4.0) license",
   "you may not use this file except in compliance with the License. You may obtain a copy",
   "of the License at https://creativecommons.org/licenses/by/4.0/"
 ],
```

#### Define the following Schema Properties

- Schema ID - This is a unique ID given to an XDM schema which will never change for the lifetime of the schema.
- Draft version of the JSON Schema specifications
- Title - A Short title for the schema. This is apprears on the UI when you compose schemas.
- type - "object"
- Description - This should be detailed enough so that the users know when to use these schemas.

```json
  "$id": "https://ns.adobe.com/xdm/classes/class-name",
  "$schema": "http://json-schema.org/draft-06/schema#",
  "title": "Schema Title goes here",
  "type": "object",
  "description": "A detailed description of the schema goes here.",
```

#### Define the "meta:" keywords

- To make a schema extendable, set the below meta keyword to "true"

```json
  "meta:abstract": true
```

- To make a schema not extendable, set the below meta keyword to "false"

```json
  "meta:abstract": false
```

- To define a CLASS, set the below meta keyword to extend one of the XDM behaviors (record/timeseries)

```json
  "meta:extends": ["https://ns.adobe.com/xdm/data/record"]
```

- To define a MIXIN, set the below meta keyword to extend one or more XDM Classes

```json
  "meta:intendedToExtend": ["https://ns.adobe.com/xdm/classes/class-name"]
```

- Any JSON schema which does not fall in any onf the above categories is considered a data type.

#### Define Schema properties

- Properties can either be defined inline to this schema or they could also be defined as refrence to an external schema (genrally a data type).
- Its always recommended to have meta:enums defined for string properties. If required, do specify a pattern as well for string properties.
- All array properties should have a well defined type of each element of the array.

```json
  "definitions": {
    "foo": {
      "properties": {
        "xdm:propertyA": {
          "title": "Tile",
          "description": "Description",
          "type": "string"
        },
        "xdm:propertyB": {
          "title": "Tile",
          "description": "Description",
          "type": "number"
        },
	"xdm:propertyC": {
          "title": "Tile",
          "description": "Description",
          "type": "integer"
        },
	"xdm:propertyD": {
          "title": "Tile",
          "description": "Description",
          "type": "boolean"
        },
        "xdm:propertyE": {
          "title": "Tile",
          "description": "Description",
          "$ref": "https://ns.adobe.com/xdm/datatypes/datatype-name"
        },
        "xdm:propertyArray": {
          "type": "array",
          "title": "Title",
          "description": "Description",
          "items": {
            "type": "string",
          }
        },
        "xdm:propertyNested": {
          "title": "Tile",
          "description": "Description",
          "type": "object",
	  "properties": {
	    "xdm:nestedPropertyA": {
	      "title": "Title",
	      "description": "Description",
	      "type": "string"
	    },
	    "xdm:nestedPropertyB": {
	      "title": "Title",
	      "description": "Description",
	      "type": "integer"
	    }
	  }
        }
      }
    }
  },
```

#### Define the allOF section

- The allOF section should specify the local definition from the schema as well as any other external schema which needs to be combined with this.

```json
  "allOf": [
    {
      "$ref": "https://ns.adobe.com/xdm/data/record"
    },
    {
      "$ref": "#/definitions/foo"
    }
  ],
```

#### Specify the meta:status

Each schema should contain the enum property `meta:status` that designates it's stability. The value should be one of the following enumerations:

- `stable` : No open issues and has been in `stabilizing` for 1 month without major changes
- `experimental` : Major changes can be expected
- `deprecated` : Schema is no longer maintained, supported or is superceded by another schema/set of schemas

```json
  "meta:status": "experimental"
}
```

## Coding Styleguides

- File names for schema files should be lower case and end with `.schema.json`
- Include an `"$id"` with a value like `"https://ns.adobe.com/xdm/assets/image"` in the schema (but leave out the `.schema.json`)
- When referencing schemas, use the absolute `$id`, don't use relative references like `../repo/asset.schema.json`
- Don't nest schemas too deeply. Break inline type definitions into separate `*.schema.json` files if they have properties with object types themselves.
- Don't make schemas too fine-grained, only create schemas for `object`s not for simple types like patterned strings
- Ensure that there is a `meta:license` at the top of the schema
- Use JSON Schema `draft-6`
- Provide a `description` and `title` for each schema and each property
- Have the `title` at the top of the schema, so that it can be found without scrolling
- Make sure you have an example for every schema
- All properties must have a specific type, while JSON-Schema does allow variability in types in cases like enumerations, concrete types are required in XDM
- All properties should be defined as singular unless they have an array type(listItems[]) or have a need to have a plural name ("noOfClicks").
- All boolean properties should be prefixed with "is"/"has" as appropriate and if it gramatically makes sense. Exceptions will be reviewed on case by case basis.
- Convention is that property names are in camelCase, when they appear in JSON
- Restrict the values of `string` properties as much as appropriate for the domain. `minLength`, `maxLength`, `pattern`, and `format` all can help with that.
- Don't restrict values of `string` properties beyond the constraints of the domain, e.g. don't set a `maxLength` of 255, just because your current database uses a `VARCHAR(255)` default
- Run `npm test` before you make a pull request
- Acronyms and abbreviations in camelCase like ID, API, JSON are also capitalized in camelCase, such as `documentID`
- When combining two acronyms, use lowercase for the first and uppercase for the second, such as `dmaID`
- Only add your `ID` attributes if neccessary, use the `@id` convention otherwise from the class.
- When using `enum` in JSON schema, document all values using `meta:enum`
- When working with "soft enums" or "open enumerations", use `meta:enum` to document all known values

Run `npm run lint` before committing. The `lint` command is able to fix some easy styling issues, including:

- intent: 2 spaces
- line breaks
- spaces around delimiters
- breaks long lines where possible

`npm lint` uses [Prettier](https://prettier.io), which offers integrations for consistent formatting for many editors and IDEs.

### Re-Use and Modularity

In order to encourage re-use of definitions and modularity of schema files, avoid putting all property declarations into the root of the schema, instead use a `definitions` object with one sub-key for each semantic unit. Then, at the bottom of your schema definition, `$ref`erence them using the `allOf` construct.

In this example, the definitions `mydefinition` and `myotherdefinition` are pulled from the current schema, while `someotherdefinition` is pulled from `https://ns.adobe.com/xdm/assets/image`

JSON Schema [does not have a built-in inheritance mechanism](https://github.com/json-schema-org/json-schema-spec/issues/348#issuecomment-322940347), so the use of `definitions` is considered [best practice in structuring complex schemas](https://spacetelescope.github.io/understanding-json-schema/structuring.html).

#### New Schemas

When it comes to expressing parent-child relationships between schemas, e.g. in order to create a new schema that inherits definitions from an existing schema, XDM distinguishes two things:

1.  How inheritance relationships are expressed
2.  How inheritance relationships are implemented

JSON Schema does not have a built-in concept of schema inheritance, so XDM is using a set of custom properties and conventions to achieve the same semantics.

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

### Schema Descriptors

Schema descriptors are an extensible mechanism for providing additional metadata about an XDM schema. For example, schema descriptors can be used to define relationships between schemas or to annotate schema properties with additional metadata. Schema descriptors may be used when certain properties of a schema are not static (which could usually be described in the schema directly) but may vary from usage to usage.

Details on using and defining schema descriptors may be found in the section [Schema Descriptors](./docs/descriptors.md) of the specification.

Schema descriptors are extensible, and new descriptors may be creating by defining a new URI value and using it in
the `@type` property of the descriptor object. Readers should ignore descriptors they do not understand.

Schema descriptors are defined in XDM using the `SchemaDescriptor` schema.

### Structuring Schemas - Nesting versus Namespaces

The use of JSON-LD namespaces in XDM means that schema definitions are organized around two axes. The first is the structure of the JSON, which may be nested to an arbitrary depth. The second is the orthogonal layer created by each independent namespace. While both organizing axes are available, it is important to use each for its intended purpose.

Namespaces should be used to allow organizations to develop XDM-based grammars independently of each other, without fear of conflict and without a need to coordinate. In general, it is desirable to have the smallest set of namespaces possible while meeting the above goals.

Namespaces _should not_ be used to organize or group concepts within a grammar. When organizing concepts, schema authors should either define sub-objects for each concept, or consider breaking out the concept into an independent schema, as described in "Re-use and Modularity".

### Other Schema Extensions

XDM is using a couple of custom keywords that are not part of the JSON Schema standard. These include:

- `meta:enum`: Its recommended to define these for known values in enums, strings, These are also used in the UI for segmentation purpose.
- `meta:tags`: to tag a Class/Mixin to a industry vertical.

##### Soft and Hard Enumerations

XDM uses the notion of hard and soft enumerations.

A **hard enum** is enforced though JSON Schema's `enum` keyword. Only the values listed in the `enum` array are valid.
All values should be documented in addition using `meta:enum`

A **soft enum** can be any string property. Soft enums consist of a number of known and documented values (using `meta:enum`), but any `string` that matches the type's constraints is a valid value.
This means, soft enums are open enumerations that can be extended ad-hoc by XDM users. XDM authors should be aware that just using `meta:enum` is not adding any enforcment logic.

## Writing Styleguides

For all writing, please follow the [Adobe I/O style guide](https://github.com/adobeio/styleguide/blob/master/opensource/doc-style.md).

## How Contributions get Reviewed

Every week, the PRs posted on github are reviewed by the XDM team. They are either proved to comments are posted for further clarifications.
