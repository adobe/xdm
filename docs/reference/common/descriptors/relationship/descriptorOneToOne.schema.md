
# One to One Relationship Descriptor Schema

```
https://ns.adobe.com/xdm/common/descriptors/descriptorOneToOne
```

Describes one to one relationship descriptor.

| [Abstract](../../../../abstract.md) | [Extensible](../../../../extensions.md) | [Status](../../../../status.md) | [Identifiable](../../../../id.md) | [Custom Properties](../../../../extensions.md) | [Additional Properties](../../../../extensions.md) | Defined In |
|-------------------------------------|-----------------------------------------|---------------------------------|-----------------------------------|------------------------------------------------|----------------------------------------------------|------------|
| Can be instantiated | Yes | Experimental | No | Forbidden | Permitted | [common/descriptors/relationship/descriptorOneToOne.schema.json](common/descriptors/relationship/descriptorOneToOne.schema.json) |
## Schema Hierarchy

* One to One Relationship Descriptor `https://ns.adobe.com/xdm/common/descriptors/descriptorOneToOne`
  * [Schema Descriptor](../schemadescriptor.schema.md) `https://ns.adobe.com/xdm/common/descriptors/schemadescriptor`
  * [Relationship Descriptor](../relationshipdescriptor.schema.md) `https://ns.adobe.com/xdm/common/descriptors/relationshipdescriptor`


## One to One Relationship Descriptor Example
```json
{
  "@id": "https://ns.adobe.com/example/descriptorOneToOne/1",
  "@type": "xdm:descriptorOneToOne",
  "xdm:sourceSchema": "https://ns.adobe.com/experience/aem/user",
  "xdm:destinationSchema": "https://ns.adobe.com/xdm/context/profile",
  "xdm:label": "UserProfile"
}
```

# One to One Relationship Descriptor Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [@id](#id) | `string` | Optional | [Schema Descriptor](../schemadescriptor.schema.md#id) |
| [@type](#type) | `const` | Optional | One to One Relationship Descriptor (this schema) |
| [xdm:destinationItem](#xdmdestinationitem) | complex | Optional | [Relationship Descriptor](../relationshipdescriptor.schema.md#xdmdestinationitem) |
| [xdm:destinationProperty](#xdmdestinationproperty) | `string` | Optional | [Relationship Descriptor](../relationshipdescriptor.schema.md#xdmdestinationproperty) |
| [xdm:destinationSchema](#xdmdestinationschema) | `string` | Optional | [Relationship Descriptor](../relationshipdescriptor.schema.md#xdmdestinationschema) |
| [xdm:sourceItem](#xdmsourceitem) | complex | Optional | [Schema Descriptor](../schemadescriptor.schema.md#xdmsourceitem) |
| [xdm:sourceProperty](#xdmsourceproperty) | `string` | Optional | [Schema Descriptor](../schemadescriptor.schema.md#xdmsourceproperty) |
| [xdm:sourceSchema](#xdmsourceschema) | `string` | Optional | [Schema Descriptor](../schemadescriptor.schema.md#xdmsourceschema) |
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
"xdm:descriptorOneToOne"
```





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





