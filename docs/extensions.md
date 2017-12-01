# Extending XDM

## Extending XDM Properties

XDM is extensible, which means that customers, partners, and system integrators can take an existing XDM schema and add custom properties. 
Although implementations should be lenient when encountering unknown properties, it is best practice to avoid using undeclared properties, because they might clash with future standard properties defined in XDM or with other undeclared properties.
Some XDM schemas might be declared non-extensible, which means that any property that is not defined in the JSON Schema will cause validation to fail.

XDM generally separates two kinds of properties:

1. Standard properties are part of the XDM specification, and follow a pattern of `prefix:name`. For instance, `xdm:asset_id` is the unique identifier of assets in XDM.
2. Extension properties are not part of the XDM specification and have been defined by a customer, a partner, or by Adobe for things that are specific to one implemenation. Extension property names are always URIs like `http://example.com/ns/xdm/my_property`

XDM comes with a small list of allowed prefixes that correspond to the namespace URIs of the standards that XDM is incorporating. 
Each of these namespaces prefixes and the corresponding namespace URI is listed in a JSON-LD context document.
JSON-LD stands for JSON for Linked Data and provides a way of expressing a mapping between a short (prefixed) property name and a globally unique property name that is defined through an IRI (Internationalized URI).
Consumers of XDM can use the JSON-LD context as part of their systems, but in practise everything will work just as well when treating everything simply as JSON.
Because all extension properties are full URIs, it is ensured that they are globally unique, without adding the overhead of namespace or prefix resolution.

The XDM reference documentation and the formal JSON Schemas for XDM define for each schema if extensions are permitted.
When extensions are permitted, the JSON Schema will include a reference to a global `extensibility` schema fragment.
This schema fragment ensures that:

1. Every property name uses a well-defined prefix like `xdm` or `xmp` (these are standard properties)
2. All other property names are URIs like `http://example.com/ns/xdm/my_property` (these are extension properties)

By default, all Adobe APIs that are using XDM are passing the JSON-LD `@context` (the mapping between namespace predix and URLs) through an HTTP `Link` header, as described in [section 4.9 of the JSON-LD specification: "Interpreting JSON as JSON-LD"](https://json-ld.org/spec/latest/json-ld/#interpreting-json-as-json-ld).
Because the JSON-LD `@context` of APIs that use XDM is only changing when a new version of XDM is released, passing it as a `Link` header means that XDM documents remain compact, and that XDM consumers can decide themselves if they want to retrieve it.
However, for XDM producers that do not use the `Link` header and instead embed a `@context` in the JSON document, additional rules apply. Through the `extensibility` schema fragemnt, XDM ensures that no prefix mappings can be established other than the prefix mappings that are part of the XDM standard.
This ensures that no matter who is generating an XDM document, or how the XDM document is being generated, that no conflicting properties can get introduced.

Users of XDM wishing to insert custom properties should select a namespace URI that is under their own control such as `https://ns.yourcompany.com`. Each namespace must be unique for a given resource, and using domain names that you own helps to avoid naming clashes with other users that are extending XDM as well.

## Extending XDM through new Schemas

In the future, XDM will allow the extension through the introduction of new schemas. 
This means that a new schema will be able to express that it is extending an existing standard schema and that an application that is able to process the parent schema should treat the extended schema as if it was the parent schema.

How this type of extensibility will work is not yet specified.

## What Cannot be Extended

XDM is using fixed lists of `enum` values in some schemas. These lists cannot be extended. 

## Versioning Extensions

TODO