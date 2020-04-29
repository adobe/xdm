
# Identity Descriptor Schema

```
https://ns.adobe.com/xdm/common/descriptors/descriptorIdentity
```

Used to mark a field as an identity.

| [Abstract](../../../../abstract.md) | [Extensible](../../../../extensions.md) | [Status](../../../../status.md) | [Identifiable](../../../../id.md) | [Custom Properties](../../../../extensions.md) | [Additional Properties](../../../../extensions.md) | Defined In |
|-------------------------------------|-----------------------------------------|---------------------------------|-----------------------------------|------------------------------------------------|----------------------------------------------------|------------|
| Can be instantiated | Yes | Stabilizing | No | Forbidden | Permitted | [common/descriptors/identity/descriptorIdentity.schema.json](common/descriptors/identity/descriptorIdentity.schema.json) |
## Schema Hierarchy

* Identity Descriptor `https://ns.adobe.com/xdm/common/descriptors/descriptorIdentity`
  * [Schema Descriptor](../schemadescriptor.schema.md) `https://ns.adobe.com/xdm/common/descriptors/schemadescriptor`


## Identity Descriptor Examples

```json
{
  "@type": "xdm:descriptorIdentity",
  "xdm:sourceSchema": "https://ns.adobe.com/xdm/context/profile",
  "xdm:sourceVersion": 1,
  "xdm:sourceProperty": "/orgUnitId",
  "xdm:namespace": "12345",
  "xdm:property": "xdm:id"
}
```

```json
{
  "@type": "xdm:descriptorIdentity",
  "xdm:sourceSchema": "https://ns.adobe.com/xdm/context/profile",
  "xdm:sourceVersion": 1,
  "xdm:sourceProperty": "/orgUnitId",
  "xdm:namespace": "AAM",
  "xdm:property": "xdm:code",
  "xdm:isPrimary": true
}
```


# Identity Descriptor Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [@id](#id) | `string` | Optional | [Schema Descriptor](../schemadescriptor.schema.md#id) |
| [@type](#type) | `const` | Optional | Identity Descriptor (this schema) |
| [xdm:isPrimary](#xdmisprimary) | `boolean` | Optional | Identity Descriptor (this schema) |
| [xdm:namespace](#xdmnamespace) | `string` | Optional | Identity Descriptor (this schema) |
| [xdm:property](#xdmproperty) | `enum` | Optional | Identity Descriptor (this schema) |
| [xdm:sourceItem](#xdmsourceitem) | complex | Optional | [Schema Descriptor](../schemadescriptor.schema.md#xdmsourceitem) |
| [xdm:sourceProperty](#xdmsourceproperty) | `string` | Optional | [Schema Descriptor](../schemadescriptor.schema.md#xdmsourceproperty) |
| [xdm:sourceSchema](#xdmsourceschema) | `string` | Optional | [Schema Descriptor](../schemadescriptor.schema.md#xdmsourceschema) |
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
### Type

`@type`
* is optional
* type: `const`
* defined in this schema

The value of this property **must** be equal to:

```json
"xdm:descriptorIdentity"
```





## xdm:isPrimary
### Is primary key or not

When present, only one field should be marked as the primary. Default is false.

`xdm:isPrimary`
* is optional
* type: `boolean`
* defined in this schema

### xdm:isPrimary Type


`boolean`





## xdm:namespace
### Namespace

Identity ID or Code.

`xdm:namespace`
* is optional
* type: `string`
* defined in this schema

### xdm:namespace Type


`string`






## xdm:property
### Property

Property of the `xdm:namespace` field.

`xdm:property`
* is optional
* type: `enum`
* defined in this schema

The value of this property **must** be equal to one of the [known values below](#xdmproperty-known-values).

### xdm:property Known Values
| Value | Description |
|-------|-------------|
| `xdm:id` |  |
| `xdm:code` |  |




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






## xdm:sourceVersion
### Source Version

Major version being referenced.

`xdm:sourceVersion`
* is optional
* type: `number`
* defined in [Schema Descriptor](../schemadescriptor.schema.md#xdmsourceversion)

### xdm:sourceVersion Type


`number`





