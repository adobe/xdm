
# One to Many Relationship Descriptor Schema

```
https://ns.adobe.com/xdm/common/descriptors/descriptorOneToMany
```

Describes one to many relationship descriptor.

| [Abstract](../../../abstract.md) | [Extensible](../../../extensions.md) | [Status](../../../status.md) | [Identifiable](../../../id.md) | [Custom Properties](../../../extensions.md) | [Additional Properties](../../../extensions.md) | Defined In |
|----------------------------------|--------------------------------------|------------------------------|--------------------------------|---------------------------------------------|-------------------------------------------------|------------|
| Can be instantiated | Yes | Stable | No | Forbidden | Permitted | [descriptors/relationship/descriptorOneToMany.schema.json](descriptors/relationship/descriptorOneToMany.schema.json) |
## Schema Hierarchy

* One to Many Relationship Descriptor `https://ns.adobe.com/xdm/common/descriptors/descriptorOneToMany`
  * [Schema Descriptor](../schemadescriptor.schema.md) `https://ns.adobe.com/xdm/common/descriptors/schemadescriptor`
  * [Relationship Descriptor](../relationshipdescriptor.schema.md) `https://ns.adobe.com/xdm/common/descriptors/relationshipdescriptor`


## One to Many Relationship Descriptor Example
```json
{
  "@id": "https://ns.adobe.com/example/descriptorOneToMany/1",
  "@type": "xdm:descriptorOneToMany",
  "xdm:sourceSchema": "https://ns.adobe.com/experience/aem/user",
  "xdm:sourceVersion": 1,
  "xdm:destinationSchema": "https://ns.adobe.com/xdm/context/profile",
  "xdm:destinationVersion": 1,
  "xdm:label": "UserProfile"
}
```

# One to Many Relationship Descriptor Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [@id](#id) | `string` | Optional | [Schema Descriptor](../schemadescriptor.schema.md#id) |
| [@type](#type) | `const` | Optional | One to Many Relationship Descriptor (this schema) |
| [xdm:apiLabel](#xdmapilabel) | `string` | Optional | [Relationship Descriptor](../relationshipdescriptor.schema.md#xdmapilabel) |
| [xdm:description](#xdmdescription) | `string` | Optional | [Relationship Descriptor](../relationshipdescriptor.schema.md#xdmdescription) |
| [xdm:destinationItem](#xdmdestinationitem) | complex | Optional | [Relationship Descriptor](../relationshipdescriptor.schema.md#xdmdestinationitem) |
| [xdm:destinationProperty](#xdmdestinationproperty) | `string` | Optional | [Relationship Descriptor](../relationshipdescriptor.schema.md#xdmdestinationproperty) |
| [xdm:destinationSchema](#xdmdestinationschema) | `string` | Optional | [Relationship Descriptor](../relationshipdescriptor.schema.md#xdmdestinationschema) |
| [xdm:destinationVersion](#xdmdestinationversion) | `number` | Optional | [Relationship Descriptor](../relationshipdescriptor.schema.md#xdmdestinationversion) |
| [xdm:label](#xdmlabel) | `string` | Optional | [Relationship Descriptor](../relationshipdescriptor.schema.md#xdmlabel) |
| [xdm:sourceItem](#xdmsourceitem) | complex | Optional | [Schema Descriptor](../schemadescriptor.schema.md#xdmsourceitem) |
| [xdm:sourceProperty](#xdmsourceproperty) | `string` | Optional | [Schema Descriptor](../schemadescriptor.schema.md#xdmsourceproperty) |
| [xdm:sourceSchema](#xdmsourceschema) | `string` | Optional | [Schema Descriptor](../schemadescriptor.schema.md#xdmsourceschema) |
| [xdm:sourceValue](#xdmsourcevalue) | `string` | Optional | [Relationship Descriptor](../relationshipdescriptor.schema.md#xdmsourcevalue) |
| [xdm:sourceVersion](#xdmsourceversion) | `number` | Optional | [Schema Descriptor](../schemadescriptor.schema.md#xdmsourceversion) |
| `*` | any | Additional | this schema *allows* additional properties |

## @id
### Identifier

The unique identifier for the schema descriptor. This property is required when the descriptor is defined outside of the applicable schema, but is optional when applied via 'meta:descriptors'.

`@id`
* is optional
* type: `string`
* defined in [Schema Descriptor](../schemadescriptor.schema.md#id)

### @id Type


`string`
* format: `uri-reference` – URI Reference (according to [RFC3986](https://tools.ietf.org/html/rfc3986))






## @type


`@type`
* is optional
* type: `const`
* defined in this schema

The value of this property **must** be equal to:

```json
"xdm:descriptorOneToMany"
```





## xdm:apiLabel
### API Label

Provides a user friendly name or label which is used in PQL/SQL or other needs

`xdm:apiLabel`
* is optional
* type: `string`
* defined in [Relationship Descriptor](../relationshipdescriptor.schema.md#xdmapilabel)

### xdm:apiLabel Type


`string`






## xdm:description
### Relationship Description

Provides a user friendly description of this relationship

`xdm:description`
* is optional
* type: `string`
* defined in [Relationship Descriptor](../relationshipdescriptor.schema.md#xdmdescription)

### xdm:description Type


`string`






## xdm:destinationItem
### Destination Item

When present, the selector used to match a specific item in the array pointed to by destProperty

`xdm:destinationItem`
* is optional
* type: complex
* defined in [Relationship Descriptor](../relationshipdescriptor.schema.md#xdmdestinationitem)

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
* defined in [Relationship Descriptor](../relationshipdescriptor.schema.md#xdmdestinationproperty)

### xdm:destinationProperty Type


`string`






## xdm:destinationSchema
### Destination Schema

The destination schema this descriptor applies to

`xdm:destinationSchema`
* is optional
* type: `string`
* defined in [Relationship Descriptor](../relationshipdescriptor.schema.md#xdmdestinationschema)

### xdm:destinationSchema Type


`string`
* format: `uri` – Uniformous Resource Identifier (according to [RFC3986](http://tools.ietf.org/html/rfc3986))






## xdm:destinationVersion
### Destination Version

Major version being referenced.

`xdm:destinationVersion`
* is optional
* type: `number`
* defined in [Relationship Descriptor](../relationshipdescriptor.schema.md#xdmdestinationversion)

### xdm:destinationVersion Type


`number`






## xdm:label
### Label

Provides a user friendly name or label to this relationship

`xdm:label`
* is optional
* type: `string`
* defined in [Relationship Descriptor](../relationshipdescriptor.schema.md#xdmlabel)

### xdm:label Type


`string`






## xdm:sourceItem
### Source Item

When present, the selector used to match a specific item in the array pointed to by `sourceProperty`.

`xdm:sourceItem`
* is optional
* type: complex
* defined in [Schema Descriptor](../schemadescriptor.schema.md#xdmsourceitem)

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
* defined in [Schema Descriptor](../schemadescriptor.schema.md#xdmsourceproperty)

### xdm:sourceProperty Type


`string`






## xdm:sourceSchema
### Source Schema

The source schema this descriptor applies to. This property is required when the descriptor is defined outside of the applicable schema, but is optional when applied via 'meta:descriptors'

`xdm:sourceSchema`
* is optional
* type: `string`
* defined in [Schema Descriptor](../schemadescriptor.schema.md#xdmsourceschema)

### xdm:sourceSchema Type


`string`
* format: `uri` – Uniformous Resource Identifier (according to [RFC3986](http://tools.ietf.org/html/rfc3986))






## xdm:sourceValue
### Source Value

When present, provides additional information about the values in that field. Descriptor producer and consumer should coordinate on how to use this field, e.g. defining rules on formats, values, and operations.

`xdm:sourceValue`
* is optional
* type: `string`
* defined in [Relationship Descriptor](../relationshipdescriptor.schema.md#xdmsourcevalue)

### xdm:sourceValue Type


`string`






## xdm:sourceVersion
### Source Version

Major version being referenced.

`xdm:sourceVersion`
* is optional
* type: `number`
* defined in [Schema Descriptor](../schemadescriptor.schema.md#xdmsourceversion)

### xdm:sourceVersion Type


`number`





