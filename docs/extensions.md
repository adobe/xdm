---
xdm:navOrder: 4
---

# Extending XDM

XDM is a JSON-based standard and there are three ways how JSON data models can be extended:

1.  through the introduction of new properties
2.  through the introduction of new values for existing properties
3.  through the introduction of new schemas

XDM only supports (1) and (3), because the introduction of new values for existing properties can cause challenges for implementers of XDM and increases the difficulty of adhering of XDM's purely additive versioning requirement.

The following sections will describe how each of these extension mechanisms can be used by XDM providers that are seeking to extend XDM.

## Extending XDM Properties

XDM is extensible, which means that customers, partners, and system integrators can take an existing XDM schema and add custom properties.
Although implementations should be lenient when encountering unknown properties, it is best practice to avoid using undeclared properties, because they might clash with future standard properties defined in XDM or with other undeclared properties.
Some XDM schemas might be declared non-extensible, which means that any property that is not defined in the JSON Schema will cause validation to fail.

XDM generally separates two kinds of properties:

1.  Standard properties are part of the XDM specification, and follow a pattern of `prefix:name`. For instance, `repo:id` is the unique identifier of assets in a repository.
2.  Extension properties are not part of the XDM specification and have been defined by a customer, a partner, or by Adobe for things that are specific to one implementation. Extension property names are always URIs like `http://example.com/ns/xdm/my_property`

XDM comes with a small list of allowed prefixes that correspond to the namespace URIs of the standards that XDM is incorporating.
Each of these namespaces prefixes and the corresponding namespace URI is listed in a JSON-LD context document.
JSON-LD stands for JSON for Linked Data and provides a way of expressing a mapping between a short (prefixed) property name and a globally unique property name that is defined through an IRI (Internationalized URI).
Consumers of XDM can use the JSON-LD context as part of their systems, but in practice everything will work just as well when treating everything simply as JSON.
Because all extension properties are full URIs, it is ensured that they are globally unique, without adding the overhead of namespace or prefix resolution.

The XDM reference documentation and the formal JSON Schemas for XDM define for each schema if extensions are permitted.
When extensions are permitted, the JSON Schema will include a reference to a global `extensibility` schema fragment.
This schema fragment ensures that:

1.  Every property name uses a well-defined prefix like `xdm` or `xmp` (these are standard properties)
2.  All other property names are URIs like `http://example.com/ns/xdm/my_property` (these are extension properties)

By default, all Adobe APIs that are using XDM are passing the JSON-LD `@context` (the mapping between namespace prefix and URLs) through an HTTP `Link` header, as described in [section 4.9 of the JSON-LD specification: "Interpreting JSON as JSON-LD"](https://json-ld.org/spec/latest/json-ld/#interpreting-json-as-json-ld).
Because the JSON-LD `@context` of APIs that use XDM is only changing when a new version of XDM is released, passing it as a `Link` header means that XDM documents remain compact and that XDM consumers can decide themselves if they want to retrieve it.
However, for XDM producers that do not use the `Link` header and instead embed a `@context` in the JSON document, additional rules apply. Through the `extensibility` schema fragment, XDM ensures that no prefix mappings can be established other than the prefix mappings that are part of the XDM standard.
This ensures that no matter who is generating an XDM document, or how the XDM document is being generated, conflicting properties can not be introduced.

> An example of an XDM Asset, extended with the property `asset_name` (fully qualified name is `https://ns.example.com/asset_name`)

```json
{
  "https://ns.example.com/asset_name": "custom_asset_1",
  "repo:id": "urn:aaid:a:b:01234578-0123-ABCD-abcd-0123456789ab",
  "xmp:createDate": "2017-09-26T15:52:25+00:00",
  "repo:createDate": "2017-09-26T15:52:25+00:00",
  "xdm:repositoryCreatedBy": "lars",
  "xmp:modifyDate": "2017-09-26T15:52:25+00:00",
  "repo:modifyDate": "2017-09-26T15:52:25+00:00",
  "xdm:repositoryLastModifiedBy": "chris",
  "repo:version": "15",
  "repo:size": 1632418,
  "repo:path": "here",
  "repo:etag": "15",
  "repo:name": "example.pdf",
  "dc:format": "application/pdf"
}
```

Users of XDM wishing to insert custom properties should select a namespace URI that is under their own control such as `https://ns.yourcompany.com`. Each namespace must be unique for a given resource and using domain names that you own helps to avoid naming clashes with other users that are extending XDM as well.

## Extending XDM through new Schemas

XDM also allows the extension through the introduction of new schemas.
This means that a new schema will be able to express that it is extending an existing standard schema and that an application that is able to process the parent schema should treat the extended schema as if it was the parent schema.

Not all XDM schemas are extensible and allow new derivative schemas.
If a schema has been declared extensible, the XDM reference documentation for that schema will show that derivative schemas are permitted.
The JSON Schema also includes a formal declaration of extensibility in the form of the `meta:extensible` property.
This property will be `true` for schemas that are extensible, and `false` or be absent for all other schemas.
If a schema is extensible, the JSON Schema file will also include one or more usable schema fragments that are named child properties of the `definitions` property of the schema.
These schema fragments can be included by schemas that are extending an existing schema.

An XDM producer that wishes to extend an existing XDM schema has to adhere to the following steps:

1.  Only extend schemas that are `meta:extensible`
2.  Create a new JSON Schema file
3.  Add a property `meta:extends` that is either a `string`, pointing to the schema URI of the schema to extend, or an `array`, listing all schemas' URIs that the schema is extending
4.  Merge the schema fragments of the schemas that are being extended into the current schema using the `allOf` keyword

> Example: here a schema (`third`) is extending the schema `second`, which is extending the schema `first`. In order to express the transitive dependency chain, both `first` and `second` need to be listed under `meta:extends`. The `allOf` node shows how to include schema fragments using `$ref` and the JSON Pointer path to the `#/definitions/…` fragment.

```json
{
  "$schema": "http://json-schema.org/draft-06/schema#",
  "$id": "https://ns.adobe.com/xdm/example/third",
  "title": "Third",
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

Any XDM consumer or producer that is processing instances of schemas that allow extensibility must treat every instance of an extending schema as if it was an instance of the extended schema.
There is no obligation to treat the inheriting schema in any way different, or to attempt to understand or process any of the properties that have been added in the extension, all of this is completely optional.

## What Cannot be Extended

XDM is using fixed lists of `enum` values in some schemas. These lists cannot be extended.

In many places, XDM is using a pattern called "soft enums". Soft enums are `string` properties that include a number of known values in the specification.
This allows for a simple and lightweight way of adding values ad-hoc.

## Versioning Extensions

TODO
