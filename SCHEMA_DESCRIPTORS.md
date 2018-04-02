# Schema Descriptors

## Overview

XDM allows for additional metadata about a schema to be described using a "schema descriptor". A schema descriptor is applied to a schema using the "meta:descriptors" property. Descriptors may be embedded directly in the schema document, or may be described as independent external entities. The ability to define descriptors outside of a schema is useful for, among other things, annotating schemas that are not under an application's direct control with additional metadata. See examples below.

Schema descriptors are extensible, and new descriptors may be created by defining a new URI value and using it in
the `@type` property of the descriptor object. Readers should ignore descriptors they do not understand.

Schema descriptors are defined in XDM using the `SchemaDescriptor` schema.

## Defining Schema Relationships

While schema descriptors can be used to define metadata about a single schema, they are also common used to describe relationships between schemas. This mechanism can be used to link schemas together at the property level, defining the equivalent of "foreign key" relationships in a relational database.

The following relationship types are defined by XDM:

* `xdm:descriptorOneToOne`: describes a 1:1 relationship between a source schema and a destination schema
* `xdm:descriptorOneToMany`: describes a 1:m relationship between a source schema and a destination schema
* `xdm:descriptorManyToMany`: describes an m:n relationship between a source schema and a destination schema

These relationships are defined in XDM using the `RelationshipDescriptor` schema.

## Update Policies

Data described by an XDM schema may change over time, and as such a data object may reflect an update of a previous instance of that object. There are different ways that an update may be handled, and this way depends both on the nature of the data and the specific application it is being used for.

XDM defines a schema descriptor of type `xdm:descriptorUpdatePolicy`, which describes several common methods of handling an update:

* `xdm:updateMerge`: the data in the new object should be merged into the existing object; the method by which a merge is applied is defined by the application
* `xdm:updateReplace`: the new data object should replace the existing data object
* `xdm:updateTimeSeries`: the data is time series data, and the new object should be logged/collected without changing any existing data

Update policies are defined using the `UpdatePolicyDescriptor` schema.

## Other Supported Schema Descriptors

A number of additional schema descriptors are defined by XDM:

* `xdm:descriptorIdentity`: allows a property in a schema to be used as an [Identity](https://github.com/adobe/xdm/blob/master/docs/reference/context/identity.schema.md), even if it does not conform to the Identity schema.
* `xdm:descriptorPrimaryKey`: allows a property other than `@id` to be flagged as the primary key for a schema
* `xdm:descriptorInstantiable`: allows a schema to be flagged as 'instantiable', which may be used to differentiate schemas that define primary business objects versus supporting schemas intended to be embedded in another schema.

## Schema Descriptor Examples

### Example Relationship Descriptor

We have two schemas, which form a parent/child relationship. The first is parent.json:

```json
{
  "$schema": "http://json-schema.org/draft-06/schema#",
  "$id": "https://ns.adobe.com/xdm/example/parent",
  "title": "Parent",
  "type": "object",
  "meta:descriptors": {
    "@type": "xdm:descriptorOneToMany",
    "xdm:sourcePropery": "@id",
    "xdm:destSchema": "https://ns.adobe.com/xdm/example/child",
    "xdm:destProperty": "xdm:parent"
  },
  "properties": {
    "@id": { "type": "string" }
  }
}
```

The second is child.json:

```json
{
  "$schema": "http://json-schema.org/draft-06/schema#",
  "$id": "https://ns.adobe.com/xdm/example/child",
  "title": "Child",
  "type": "object",
  "properties": {
    "@id": { "type": "string" },
    "xdm:parent": { "type": "string" }
  }
}
```

The source schema in this example is Parent, which contains a single relationship descriptor describing a one-to-many relationship between objects of schema Parent to objects of schema Child.

Note that the descriptor does not contain an `@id` or `xdm:sourceSchema property`, which are optional when the descriptor is embedded directly in the schema. If the relationship descriptor were to be written externally, it would look like this:

```json
{
  "@id": "https://example.com/descriptors/1",
  "@type": "xdm:descriptorOneToMany",
  "xdm:sourceSchema": "https://ns.adobe.com/xdm/example/parent",
  "xdm:sourcePropery": "@id",
  "xdm:destSchema": "https://ns.adobe.com/xdm/example/child",
  "xdm:destProperty": "xdm:parent"
}
```

This highlights the ability to use schema descriptors both directly in schemas and also as independent entities.

### Example Identity Descriptor

We have a schema that describes a customer record, which contains an customer ID as a property:

```json
{
  "$schema": "http://json-schema.org/draft-06/schema#",
  "$id": "https://ns.example.com/xdm/customerrecord",
  "title": "CustomerRecord",
  "type": "object",
  "properties": {
    "@id": { "type": "string" },
    "https://ns.example.com/xdm/customerID": { "type": "string" }
  }
}
```

The customer ID is present, but does not contain other information needed to ensure the identity is fully described, such as the ID namespace, or whether this value represents the application's native ID for this customer or if this is an ID given my some external system. We can use an identity descriptor to provide the additional details:

```json
{
  "@id": "https://example.com/descriptors/2",
  "@type": "xdm:descriptorIdentity",
  "xdm:sourceSchema": "https://ns.example.com/xdm/customerrecord",
  "xdm:sourcePropery": "https://ns.example.com/xdm/customerID",
  "xdm:namespace": "https://id-server.adobe.com/1234",
  "xdm:property": "code"
}
```

The descriptor signals the namespace the ID is managed under (in this case, a fictitious service at id-server.adobe.com), and also signals that the value is a "code", meaning it is the externally managed handle for some ID managed by the namespace.

### Example Primary Key Descriptor

We have a schema that describes a sales order taken from an external sales management system. As this schema is directly transcribed from the external system's data schema, it does not follow the XDM best practice of using @id as the primary key:

```json
{
  "$schema": "http://json-schema.org/draft-06/schema#",
  "$id": "https://ns.example.com/xdm/salesorder",
  "title": "SalesOrder",
  "type": "object",
  "properties": {
    "https://ns.example.com/xdm/txID": { "type": "string" },
    "https://ns.example.com/xdm/confirmationNum": { "type": "string" },
    "https://ns.example.com/xdm/customerID": { "type": "string" },
    "https://ns.example.com/xdm/productID": { "type": "string" }
  }
}
```

It is not obvious which field is best suited to be the primary key for this data. We can use a primary key descriptor to clear this up:

```json
{
  "@id": "https://example.com/descriptors/3",
  "@type": "xdm:descriptorPrimaryKey",
  "xdm:sourceSchema": "https://ns.example.com/xdm/salesorder",
  "xdm:sourcePropery": "https://ns.example.com/xdm/txID"
}
```

The descriptor signals that the transaction identifier at 'txID' is the appropriate key to be used for this data.

### Example of Defining a New Schema Descriptor

Let's say Example.com would like to annotate their schemas with information on whether they are actively being used in their application, a cloud service. They'd like to know if the schema is being used in production, in staging, or is unused.

They need to do two things to define the new descriptor. First, they create a new URI to define the type of the descriptor: 'https://ns.example.com/descriptors/inuse'.

Next, they define an extension to `SchemaDescriptor` containing the in-use flag:

```json
{
  "$id": "https://ns.example.com/xdm/inusedescriptor",
  "$schema": "http://json-schema.org/draft-06/schema#",
  "title": "In Use Descriptor",
  "meta:extends": [
    "https://ns.adobe.com/xdm/common/schemadescriptor#/definitions/descriptor"
  ],
  "meta:abstract": false,
  "type": "object",
  "description": "where is this schema being used?",
  "definitions": {
    "inusedescriptor": {
      "properties": {
        "xdm:usage": {
          "title": "Usage",
          "type": "string",
          "description": "the usage state of the schema",
          "enum": ["production", "stage", "none"]
        }
      },
      "required": ["xdm:usage"]
    }
  },
  "allOf": [
    {
      "$ref":
        "https://ns.adobe.com/xdm/common/schemadescriptor#/definitions/descriptor"
    },
    {
      "$ref": "#/definitions/inuseydescriptor"
    }
  ]
}
```

Applying this descriptor might look like:

```json
{
  "@id": "https://example.com/descriptors/4",
  "@type": "https://ns.example.com/descriptors/inuse",
  "xdm:sourceSchema": "https://ns.example.com/xdm/salesorder",
  "xdm:usage": "production"
}
```
