
# Relationship Descriptor Schema

```
https://ns.adobe.com/xdm/common/descriptors/relationshipdescriptor
```

A descriptor that describes a relationship between two schemas, a 'source' and a 'destination'.

This relationship may be directly between the schemas, or between specific properties of the schemas. Relationship descriptors may be used to describe foreign key relationships between schemas, defining a relational model or star schema.

While schema descriptors can be used to define metadata about a single schema, they are also commonly used to describe relationships between schemas. This mechanism can be used to link schemas together at the property level, defining the equivalent of "foreign key" relationships in a relational database.

The following relationship types are defined by XDM:

- `xdm:oneToOne`: describes a 1:1 relationship between a source schema and a destination schema
- `xdm:oneToMany`: describes a 1:m relationship between a source schema and a destination schema
- `xdm:manyToOne`: describes a m:1 relationship between a source schema and a destination schema
- `xdm:manyToMany`: describes an m:n relationship between a source schema and a destination schema

## Arrays and Denormalized Links

The interpretation of the relationship descriptor is modified slightly when the descriptor is applied to an array property. When the source property is an array, this indicates that the array contains a set of values, each of which reference an instance of the destination schema type based on the provided destination property.

For example, if a relationship of type `xdm:oneToMany` is applied with a source property that is an array, this is to be interpreted to mean that the items in the array each represent a value that can be linked to the corresponding property in the destination schema (either 1:1 or 1:m) and therefore the overall relationship being defined is 1:m.

## Example Relationship Descriptor

We have two schemas, which form a parent/child relationship. The first is parent.json:

```json
{
  "$schema": "http://json-schema.org/draft-06/schema#",
  "$id": "https://ns.adobe.com/xdm/example/parent",
  "title": "Parent",
  "type": "object",
  "properties": {
    "@id": {
      "meta:descriptors": [
        {
          "@type": "xdm:oneToMany",
          "xdm:destinationSchema": "https://ns.adobe.com/xdm/example/child",
          "xdm:destinationProperty": "xdm:parent"
        }
      ],
      "type": "string"
    }
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
    "xdm:parent": {
      "meta:descriptors": [
        {
          "@type": "xdm:manyToOne",
          "xdm:destinationSchema": "https://ns.adobe.com/xdm/example/parent",
          "xdm:destinationProperty": "@id"
        }
      ],
      "type": "string",
      "format": "uri"
    }
  }
}
```

The source schema in this example is Parent, which contains a single relationship descriptor describing a one-to-many relationship between objects of schema Parent to objects of schema Child.

The above example shows how a descriptor may be embedded in the schema being described, directly on the property where it applies. The example also shows the reciprocal relationship between the parent and child entities. If we were to define this as a stand-alone descriptor, it would look like this:

```json
{
  "@id": "https://example.com/descriptors/1",
  "@type": "xdm:oneToMany",
  "xdm:sourceSchema": "https://ns.adobe.com/xdm/example/parent",
  "xdm:sourcePropery": "@id",
  "xdm:destinationSchema": "https://ns.adobe.com/xdm/example/child",
  "xdm:destinationProperty": "xdm:parent"
}
```

This highlights the ability to use schema descriptors both directly in schemas and also as independent entities.

## Example Relationship Descriptor using an Array

We can also model the above parent/child relationship using a denormalized array from. The denormalized parent.json:

```json
{
  "$schema": "http://json-schema.org/draft-06/schema#",
  "$id": "https://ns.adobe.com/xdm/example/parent",
  "title": "Parent",
  "type": "object",
  "properties": {
    "@id": {
      "type": "string"
    },
    "children": {
      "meta:descriptors": [
        {
          "@type": "xdm:oneToMany",
          "xdm:destinationSchema": "https://ns.adobe.com/xdm/example/child",
          "xdm:destinationProperty": "@id"
        }
      ],
      "type": "array",
      "items": {
        "type": "string",
        "format": "uri"
      }
    }
  }
}
```

This changes child.json to:

```json
{
  "$schema": "http://json-schema.org/draft-06/schema#",
  "$id": "https://ns.adobe.com/xdm/example/child",
  "title": "Child",
  "type": "object",
  "properties": {
    "@id": {
      "meta:descriptors": [
        {
          "@type": "xdm:manyToOne",
          "xdm:destinationSchema": "https://ns.adobe.com/xdm/example/parent",
          "xdm:destinationProperty": "children"
        }
      ],
      "type": "string"
    }
  }
}
```


| [Abstract](../../abstract.md) | [Extensible](../../extensions.md) | [Status](../../status.md) | [Identifiable](../../id.md) | [Custom Properties](../../extensions.md) | [Additional Properties](../../extensions.md) | Defined In |
|-------------------------------|-----------------------------------|---------------------------|-----------------------------|------------------------------------------|----------------------------------------------|------------|
| Can be instantiated | Yes | Stable | No | Forbidden | Permitted | [descriptors/relationshipdescriptor.schema.json](descriptors/relationshipdescriptor.schema.json) |
## Schema Hierarchy

* Relationship Descriptor `https://ns.adobe.com/xdm/common/descriptors/relationshipdescriptor`
  * [Schema Descriptor](schemadescriptor.schema.md) `https://ns.adobe.com/xdm/common/descriptors/schemadescriptor`
  * [Item Selector](itemselector.schema.md) `https://ns.adobe.com/xdm/common/descriptors/itemselector`


## Relationship Descriptor Example
```json
{
  "@id": "https://example.com/descriptors/1",
  "@type": "xdm:descriptorOneToOne",
  "xdm:sourceSchema": "https://ns.adobe.com/xdm/context/profile",
  "xdm:sourceProperty": "/xdm:identities",
  "xdm:sourceVersion": 1,
  "xdm:sourceItem": {
    "xdm:type": "https://example.com/crmID"
  },
  "xdm:destinationSchema": "https://ns.adobe.com/extensions/12345678/customers",
  "xdm:destinationProperty": "/xdm:crmID",
  "xdm:destinationVersion": 1
}
```

# Relationship Descriptor Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [@id](#id) | `string` | Optional | [Schema Descriptor](schemadescriptor.schema.md#id) |
| [@type](#type) | `string` | Optional | [Schema Descriptor](schemadescriptor.schema.md#type) |
| [xdm:apiLabel](#xdmapilabel) | `string` | Optional | Relationship Descriptor (this schema) |
| [xdm:description](#xdmdescription) | `string` | Optional | Relationship Descriptor (this schema) |
| [xdm:destinationItem](#xdmdestinationitem) | complex | Optional | Relationship Descriptor (this schema) |
| [xdm:destinationProperty](#xdmdestinationproperty) | `string` | Optional | Relationship Descriptor (this schema) |
| [xdm:destinationSchema](#xdmdestinationschema) | `string` | Optional | Relationship Descriptor (this schema) |
| [xdm:destinationVersion](#xdmdestinationversion) | `number` | Optional | Relationship Descriptor (this schema) |
| [xdm:label](#xdmlabel) | `string` | Optional | Relationship Descriptor (this schema) |
| [xdm:sourceItem](#xdmsourceitem) | complex | Optional | [Schema Descriptor](schemadescriptor.schema.md#xdmsourceitem) |
| [xdm:sourceProperty](#xdmsourceproperty) | `string` | Optional | [Schema Descriptor](schemadescriptor.schema.md#xdmsourceproperty) |
| [xdm:sourceSchema](#xdmsourceschema) | `string` | Optional | [Schema Descriptor](schemadescriptor.schema.md#xdmsourceschema) |
| [xdm:sourceValue](#xdmsourcevalue) | `string` | Optional | Relationship Descriptor (this schema) |
| [xdm:sourceVersion](#xdmsourceversion) | `number` | Optional | [Schema Descriptor](schemadescriptor.schema.md#xdmsourceversion) |
| `*` | any | Additional | this schema *allows* additional properties |

## @id
### Identifier

The unique identifier for the schema descriptor. This property is required when the descriptor is defined outside of the applicable schema, but is optional when applied via 'meta:descriptors'.

`@id`
* is optional
* type: `string`
* defined in [Schema Descriptor](schemadescriptor.schema.md#id)

### @id Type


`string`
* format: `uri-reference` – URI Reference (according to [RFC3986](https://tools.ietf.org/html/rfc3986))






## @type
### Type

The type of descriptor this object represents.

`@type`
* is optional
* type: `string`
* defined in [Schema Descriptor](schemadescriptor.schema.md#type)

### @type Type


`string`



### @type Known Values
| Value | Description |
|-------|-------------|




## xdm:apiLabel
### API Label

Provides a user friendly name or label which is used in PQL/SQL or other needs

`xdm:apiLabel`
* is optional
* type: `string`
* defined in this schema

### xdm:apiLabel Type


`string`






## xdm:description
### Relationship Description

Provides a user friendly description of this relationship

`xdm:description`
* is optional
* type: `string`
* defined in this schema

### xdm:description Type


`string`






## xdm:destinationItem
### Destination Item

When present, the selector used to match a specific item in the array pointed to by destProperty

`xdm:destinationItem`
* is optional
* type: complex
* defined in this schema

### xdm:destinationItem Type


**One** of the following *conditions* need to be fulfilled.


#### Condition 1



#### Condition 2



#### Condition 3



#### Condition 4







## xdm:destinationProperty
### Destination Property

When present, the property of the destination schema to which this descriptor applies. This value is a JSON Pointer, applied to an instance of an object described by 'xdm:destSchema'

`xdm:destinationProperty`
* is optional
* type: `string`
* defined in this schema

### xdm:destinationProperty Type


`string`






## xdm:destinationSchema
### Destination Schema

The destination schema this descriptor applies to

`xdm:destinationSchema`
* is optional
* type: `string`
* defined in this schema

### xdm:destinationSchema Type


`string`
* format: `uri` – Uniformous Resource Identifier (according to [RFC3986](http://tools.ietf.org/html/rfc3986))






## xdm:destinationVersion
### Destination Version

Major version being referenced.

`xdm:destinationVersion`
* is optional
* type: `number`
* defined in this schema

### xdm:destinationVersion Type


`number`






## xdm:label
### Label

Provides a user friendly name or label to this relationship

`xdm:label`
* is optional
* type: `string`
* defined in this schema

### xdm:label Type


`string`






## xdm:sourceItem
### Source Item

When present, the selector used to match a specific item in the array pointed to by `sourceProperty`.

`xdm:sourceItem`
* is optional
* type: complex
* defined in [Schema Descriptor](schemadescriptor.schema.md#xdmsourceitem)

### xdm:sourceItem Type


**One** of the following *conditions* need to be fulfilled.


#### Condition 1



#### Condition 2



#### Condition 3



#### Condition 4







## xdm:sourceProperty
### Source Property

When present, the property of the source schema to which this descriptor applies. This value is a JSON Pointer, applied to an instance of an object described by `xdm:sourceSchema`.

`xdm:sourceProperty`
* is optional
* type: `string`
* defined in [Schema Descriptor](schemadescriptor.schema.md#xdmsourceproperty)

### xdm:sourceProperty Type


`string`






## xdm:sourceSchema
### Source Schema

The source schema this descriptor applies to. This property is required when the descriptor is defined outside of the applicable schema, but is optional when applied via 'meta:descriptors'

`xdm:sourceSchema`
* is optional
* type: `string`
* defined in [Schema Descriptor](schemadescriptor.schema.md#xdmsourceschema)

### xdm:sourceSchema Type


`string`
* format: `uri` – Uniformous Resource Identifier (according to [RFC3986](http://tools.ietf.org/html/rfc3986))






## xdm:sourceValue
### Source Value

When present, provides additional information about the values in that field. Descriptor producer and consumer should coordinate on how to use this field, e.g. defining rules on formats, values, and operations.

`xdm:sourceValue`
* is optional
* type: `string`
* defined in this schema

### xdm:sourceValue Type


`string`






## xdm:sourceVersion
### Source Version

Major version being referenced.

`xdm:sourceVersion`
* is optional
* type: `number`
* defined in [Schema Descriptor](schemadescriptor.schema.md#xdmsourceversion)

### xdm:sourceVersion Type


`number`





