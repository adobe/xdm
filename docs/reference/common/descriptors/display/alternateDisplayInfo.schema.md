
# Friendly Name Descriptor Schema

```
https://ns.adobe.com/xdm/common/descriptors/alternateDisplayInfo
```

Allows to modify the "title" and "description" values of the core library schema fields. UI can use these to show a more friendly name for a standard field or to only show fields that have friendly names.

| [Abstract](../../../../abstract.md) | [Extensible](../../../../extensions.md) | [Status](../../../../status.md) | [Identifiable](../../../../id.md) | [Custom Properties](../../../../extensions.md) | [Additional Properties](../../../../extensions.md) | Defined In |
|-------------------------------------|-----------------------------------------|---------------------------------|-----------------------------------|------------------------------------------------|----------------------------------------------------|------------|
| Can be instantiated | Yes | Stabilizing | No | Forbidden | Permitted | [common/descriptors/display/alternateDisplayInfo.schema.json](common/descriptors/display/alternateDisplayInfo.schema.json) |
## Schema Hierarchy

* Friendly Name Descriptor `https://ns.adobe.com/xdm/common/descriptors/alternateDisplayInfo`
  * [Schema Descriptor](../schemadescriptor.schema.md) `https://ns.adobe.com/xdm/common/descriptors/schemadescriptor`


## Friendly Name Descriptor Examples

```json
{
  "@type": "xdm:alternateDisplayInfo",
  "xdm:sourceSchema": "https://ns.adobe.com/xdm/context/environment",
  "xdm:sourceVersion": 1,
  "xdm:sourceProperty": "/browserDetails",
  "xdm:title": {
    "en_us": "friendly title for browser details",
    "fr_ca": "titre convivial pour les détails du navigateur"
  }
}
```

```json
{
  "@type": "xdm:alternateDisplayInfo",
  "xdm:sourceSchema": "https://ns.adobe.com/xdm/context/environment",
  "xdm:sourceVersion": 1,
  "xdm:sourceProperty": "/browserDetails",
  "xdm:title": {
    "en_us": "friendly title for browser details"
  },
  "xdm:description": {
    "en_us": "friendly description for browser details"
  }
}
```

```json
{
  "@type": "xdm:alternateDisplayInfo",
  "xdm:sourceSchema": "https://ns.adobe.com/xdm/context/environment",
  "xdm:sourceVersion": 1,
  "xdm:sourceProperty": "/browserDetails",
  "xdm:description": {
    "en_us": "friendly description for browser details",
    "fr_ca": "description conviviale pour les détails du navigateur"
  }
}
```


# Friendly Name Descriptor Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [@id](#id) | `string` | Optional | [Schema Descriptor](../schemadescriptor.schema.md#id) |
| [@type](#type) | `const` | Optional | Friendly Name Descriptor (this schema) |
| [xdm:description](#xdmdescription) | `object` | Optional | Friendly Name Descriptor (this schema) |
| [xdm:sourceItem](#xdmsourceitem) | complex | Optional | [Schema Descriptor](../schemadescriptor.schema.md#xdmsourceitem) |
| [xdm:sourceProperty](#xdmsourceproperty) | `string` | Optional | [Schema Descriptor](../schemadescriptor.schema.md#xdmsourceproperty) |
| [xdm:sourceSchema](#xdmsourceschema) | `string` | Optional | [Schema Descriptor](../schemadescriptor.schema.md#xdmsourceschema) |
| [xdm:sourceVersion](#xdmsourceversion) | `number` | Optional | [Schema Descriptor](../schemadescriptor.schema.md#xdmsourceversion) |
| [xdm:title](#xdmtitle) | `object` | Optional | Friendly Name Descriptor (this schema) |
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
"xdm:alternateDisplayInfo"
```





## xdm:description
### Description

When present, user friendly description to display.

`xdm:description`
* is optional
* type: `object`
* defined in this schema

### xdm:description Type


`object` with following properties:


| Property | Type | Required |
|----------|------|----------|






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






## xdm:title
### Title

When present, user friendly title to display.

`xdm:title`
* is optional
* type: `object`
* defined in this schema

### xdm:title Type


`object` with following properties:


| Property | Type | Required |
|----------|------|----------|





