
# Many to Many Relationship Descriptor Schema

```
https://ns.adobe.com/xdm/common/descriptors/descriptorManyToMany
```

Describes many to many relationship descriptor.

| [Abstract](../../../abstract.md) | [Extensible](../../../extensions.md) | [Status](../../../status.md) | [Identifiable](../../../id.md) | [Custom Properties](../../../extensions.md) | [Additional Properties](../../../extensions.md) | Defined In |
|----------------------------------|--------------------------------------|------------------------------|--------------------------------|---------------------------------------------|-------------------------------------------------|------------|
| Can be instantiated | Yes | Deprecated | No | Forbidden | Permitted | [descriptors/relationship/descriptorManyToMany.schema.json](descriptors/relationship/descriptorManyToMany.schema.json) |
## Schema Hierarchy

* Many to Many Relationship Descriptor `https://ns.adobe.com/xdm/common/descriptors/descriptorManyToMany`
  * [Schema Descriptor](../schemadescriptor.schema.md) `https://ns.adobe.com/xdm/common/descriptors/schemadescriptor`
  * [Relationship Descriptor](../relationshipdescriptor.schema.md) `https://ns.adobe.com/xdm/common/descriptors/relationshipdescriptor`


## Many to Many Relationship Descriptor Example
```json
{
  "@id": "https://ns.adobe.com/example/descriptorManyToMany/1",
  "@type": "xdm:descriptorManyToMany",
  "xdm:sourceSchema": "https://ns.adobe.com/experience/aem/user",
  "xdm:sourceVersion": 1,
  "xdm:destinationSchema": "https://ns.adobe.com/xdm/context/profile",
  "xdm:destinationVersion": 1,
  "xdm:label": "UserProfile"
}
```

# Many to Many Relationship Descriptor Properties

| Property | Type | Required | Default | Defined by |
|----------|------|----------|---------|------------|
| [@id](#id) | `string` | Optional |  | [Schema Descriptor](../schemadescriptor.schema.md#id) |
| [@type](#type) | `const` | Optional |  | Many to Many Relationship Descriptor (this schema) |
| [xdm:cardinality](#xdmcardinality) | `enum` | Optional | `"M:1"` | [Relationship Descriptor](../relationshipdescriptor.schema.md#xdmcardinality) |
| [xdm:destinationItem](#xdmdestinationitem) | complex | Optional |  | [Relationship Descriptor](../relationshipdescriptor.schema.md#xdmdestinationitem) |
| [xdm:destinationNamespace](#xdmdestinationnamespace) | `string` | Optional |  | [Relationship Descriptor](../relationshipdescriptor.schema.md#xdmdestinationnamespace) |
| [xdm:destinationProperty](#xdmdestinationproperty) | complex | Optional |  | [Relationship Descriptor](../relationshipdescriptor.schema.md#xdmdestinationproperty) |
| [xdm:destinationSchema](#xdmdestinationschema) | `string` | Optional |  | [Relationship Descriptor](../relationshipdescriptor.schema.md#xdmdestinationschema) |
| [xdm:destinationToSourceTitle](#xdmdestinationtosourcetitle) | `string` | Optional |  | [Relationship Descriptor](../relationshipdescriptor.schema.md#xdmdestinationtosourcetitle) |
| [xdm:destinationVersion](#xdmdestinationversion) | `number` | Optional |  | [Relationship Descriptor](../relationshipdescriptor.schema.md#xdmdestinationversion) |
| [xdm:sourceItem](#xdmsourceitem) | complex | Optional |  | [Schema Descriptor](../schemadescriptor.schema.md#xdmsourceitem) |
| [xdm:sourceNamespace](#xdmsourcenamespace) | `string` | Optional |  | [Relationship Descriptor](../relationshipdescriptor.schema.md#xdmsourcenamespace) |
| [xdm:sourceProperty](#xdmsourceproperty) | complex | Optional |  | [Schema Descriptor](../schemadescriptor.schema.md#xdmsourceproperty) |
| [xdm:sourceSchema](#xdmsourceschema) | `string` | Optional |  | [Schema Descriptor](../schemadescriptor.schema.md#xdmsourceschema) |
| [xdm:sourceToDestinationTitle](#xdmsourcetodestinationtitle) | `string` | Optional |  | [Relationship Descriptor](../relationshipdescriptor.schema.md#xdmsourcetodestinationtitle) |
| [xdm:sourceValue](#xdmsourcevalue) | `string` | Optional |  | [Relationship Descriptor](../relationshipdescriptor.schema.md#xdmsourcevalue) |
| [xdm:sourceVersion](#xdmsourceversion) | `number` | Optional |  | [Schema Descriptor](../schemadescriptor.schema.md#xdmsourceversion) |
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
"xdm:descriptorManyToMany"
```





## xdm:cardinality
### Relationship Cardinality

Source to Destination cardinality

`xdm:cardinality`
* is optional
* type: `enum`
* default: `"M:1"`
* defined in [Relationship Descriptor](../relationshipdescriptor.schema.md#xdmcardinality)

The value of this property **must** be equal to one of the [known values below](#xdmcardinality-known-values).

### xdm:cardinality Known Values
| Value | Description |
|-------|-------------|
| `M:1` |  |




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







## xdm:destinationNamespace
### Source Property Namespace

Identity Service namespace associated with the source property

`xdm:destinationNamespace`
* is optional
* type: `string`
* defined in [Relationship Descriptor](../relationshipdescriptor.schema.md#xdmdestinationnamespace)

### xdm:destinationNamespace Type


`string`






## xdm:destinationProperty
### Destination Property

When present, the property of the destination schema to which this descriptor applies. This value is a JSON Pointer, applied to an instance of an object described by 'xdm:destSchema'

`xdm:destinationProperty`
* is optional
* type: complex
* defined in [Relationship Descriptor](../relationshipdescriptor.schema.md#xdmdestinationproperty)

### xdm:destinationProperty Type


**One** of the following *conditions* need to be fulfilled.


#### Condition 1


`string`



#### Condition 2


Array type: 

All items must be of the type:
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






## xdm:destinationToSourceTitle
### Destination to Source Title

Provides a user friendly title for the destination->source edge

`xdm:destinationToSourceTitle`
* is optional
* type: `string`
* defined in [Relationship Descriptor](../relationshipdescriptor.schema.md#xdmdestinationtosourcetitle)

### xdm:destinationToSourceTitle Type


`string`

* maximum length: 35 characters





## xdm:destinationVersion
### Destination Version

Major version being referenced.

`xdm:destinationVersion`
* is optional
* type: `number`
* defined in [Relationship Descriptor](../relationshipdescriptor.schema.md#xdmdestinationversion)

### xdm:destinationVersion Type


`number`






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







## xdm:sourceNamespace
### Source Property Namespace

Identity Service namespace associated with the source property

`xdm:sourceNamespace`
* is optional
* type: `string`
* defined in [Relationship Descriptor](../relationshipdescriptor.schema.md#xdmsourcenamespace)

### xdm:sourceNamespace Type


`string`






## xdm:sourceProperty
### Source Property

When present, the property of the source schema to which this descriptor applies. This value is a JSON Pointer, applied to an instance of an object described by `xdm:sourceSchema`.

`xdm:sourceProperty`
* is optional
* type: complex
* defined in [Schema Descriptor](../schemadescriptor.schema.md#xdmsourceproperty)

### xdm:sourceProperty Type


**One** of the following *conditions* need to be fulfilled.


#### Condition 1


`string`



#### Condition 2


Array type: 

All items must be of the type:
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






## xdm:sourceToDestinationTitle
### Source to Destination Title

Provides a user friendly title for the source->destination edge

`xdm:sourceToDestinationTitle`
* is optional
* type: `string`
* defined in [Relationship Descriptor](../relationshipdescriptor.schema.md#xdmsourcetodestinationtitle)

### xdm:sourceToDestinationTitle Type


`string`

* maximum length: 35 characters





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





