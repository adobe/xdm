
# Schema Descriptor Schema

```
https://ns.adobe.com/xdm/common/descriptors/schemadescriptor
```

A descriptor that contains metadata about an XDM schema, including an optional property and array item selector, used to address the descriptor to a specific property or item.

| [Abstract](../../../abstract.md) | [Extensible](../../../extensions.md) | [Status](../../../status.md) | [Identifiable](../../../id.md) | [Custom Properties](../../../extensions.md) | [Additional Properties](../../../extensions.md) | Defined In |
|----------------------------------|--------------------------------------|------------------------------|--------------------------------|---------------------------------------------|-------------------------------------------------|------------|
| Can be instantiated | Yes | Stabilizing | No | Forbidden | Permitted | [common/descriptors/schemadescriptor.schema.json](common/descriptors/schemadescriptor.schema.json) |
## Schema Hierarchy

* Schema Descriptor `https://ns.adobe.com/xdm/common/descriptors/schemadescriptor`
  * [Extensibility base schema](../extensible.schema.md) `https://ns.adobe.com/xdm/common/extensible`
  * [Item Selector](itemselector.schema.md) `https://ns.adobe.com/xdm/common/descriptors/itemselector`


## Schema Descriptor Example
```json
{
  "@id": "https://example.com/descriptors/1",
  "@type": "xdm:descriptorPrimaryKey",
  "xdm:sourceSchema": "https://ns.adobe.com/xdm/context/profile",
  "xdm:sourceProperty": "xdm:identities",
  "xdm:sourceVersion": 1,
  "xdm:sourceItem": {
    "xdm:type": "https://ns.adobe.com/experience/mcid"
  }
}
```

# Schema Descriptor Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [@id](#id) | `string` | Optional | Schema Descriptor (this schema) |
| [@type](#type) | `string` | Optional | Schema Descriptor (this schema) |
| [xdm:sourceItem](#xdmsourceitem) | complex | Optional | Schema Descriptor (this schema) |
| [xdm:sourceProperty](#xdmsourceproperty) | `string` | Optional | Schema Descriptor (this schema) |
| [xdm:sourceSchema](#xdmsourceschema) | `string` | Optional | Schema Descriptor (this schema) |
| [xdm:sourceVersion](#xdmsourceversion) | `number` | Optional | Schema Descriptor (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## @id
### Identifier

The unique identifier for the schema descriptor. This property is required when the descriptor is defined outside of the applicable schema, but is optional when applied via 'meta:descriptors'.

`@id`
* is optional
* type: `string`
* defined in this schema

### @id Type


`string`
* format: `uri-reference` – URI Reference (according to [RFC3986](https://tools.ietf.org/html/rfc3986))






## @type
### Type

The type of descriptor this object represents.

`@type`
* is optional
* type: `string`
* defined in this schema

### @type Type


`string`



### @type Known Values
| Value | Description |
|-------|-------------|




## xdm:sourceItem
### Source Item

When present, the selector used to match a specific item in the array pointed to by `sourceProperty`.

`xdm:sourceItem`
* is optional
* type: complex
* defined in this schema

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
* defined in this schema

### xdm:sourceProperty Type


`string`






## xdm:sourceSchema
### Source Schema

The source schema this descriptor applies to. This property is required when the descriptor is defined outside of the applicable schema, but is optional when applied via 'meta:descriptors'

`xdm:sourceSchema`
* is optional
* type: `string`
* defined in this schema

### xdm:sourceSchema Type


`string`
* format: `uri` – Uniformous Resource Identifier (according to [RFC3986](http://tools.ietf.org/html/rfc3986))






## xdm:sourceVersion
### Source Version

Major version being referenced.

`xdm:sourceVersion`
* is optional
* type: `number`
* defined in this schema

### xdm:sourceVersion Type


`number`





