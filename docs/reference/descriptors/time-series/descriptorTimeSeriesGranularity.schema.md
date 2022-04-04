
# Time-series Granularity Descriptor Schema

```
https://ns.adobe.com/xdm/descriptors/descriptorTimeSeriesGranularity
```

Defines the granularity of time-series/summary data.

| [Abstract](../../../abstract.md) | [Extensible](../../../extensions.md) | [Status](../../../status.md) | [Identifiable](../../../id.md) | [Custom Properties](../../../extensions.md) | [Additional Properties](../../../extensions.md) | Defined In |
|----------------------------------|--------------------------------------|------------------------------|--------------------------------|---------------------------------------------|-------------------------------------------------|------------|
| Can be instantiated | Yes | Experimental | No | Forbidden | Permitted | [descriptors/time-series/descriptorTimeSeriesGranularity.schema.json](descriptors/time-series/descriptorTimeSeriesGranularity.schema.json) |
## Schema Hierarchy

* Time-series Granularity Descriptor `https://ns.adobe.com/xdm/descriptors/descriptorTimeSeriesGranularity`
  * [Schema Descriptor](../schemadescriptor.schema.md) `https://ns.adobe.com/xdm/common/descriptors/schemadescriptor`


## Time-series Granularity Descriptor Example
```json
{
  "@type": "xdm:descriptorTimeSeriesGranularity",
  "xdm:sourceSchema": "https://ns.adobe.com/tenant/myIMSid/12343aasd4321",
  "xdm:sourceVersion": 1,
  "xdm:granularity": "day"
}
```

# Time-series Granularity Descriptor Properties

| Property | Type | Required | Default | Defined by |
|----------|------|----------|---------|------------|
| [@id](#id) | `string` | Optional |  | [Schema Descriptor](../schemadescriptor.schema.md#id) |
| [@type](#type) | `string` | Optional |  | [Schema Descriptor](../schemadescriptor.schema.md#type) |
| [xdm:granularity](#xdmgranularity) | `enum` | Optional | `"day"` | Time-series Granularity Descriptor (this schema) |
| [xdm:sourceItem](#xdmsourceitem) | complex | Optional |  | [Schema Descriptor](../schemadescriptor.schema.md#xdmsourceitem) |
| [xdm:sourceProperty](#xdmsourceproperty) | complex | Optional |  | [Schema Descriptor](../schemadescriptor.schema.md#xdmsourceproperty) |
| [xdm:sourceSchema](#xdmsourceschema) | `string` | Optional |  | [Schema Descriptor](../schemadescriptor.schema.md#xdmsourceschema) |
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
### Type

The type of descriptor this object represents.

`@type`
* is optional
* type: `string`
* defined in [Schema Descriptor](../schemadescriptor.schema.md#type)

### @type Type


`string`



### @type Known Values
| Value | Description |
|-------|-------------|




## xdm:granularity
### Granularity

Granularity of the time-series / summary data.  The schema's `xdm:timestamp` field is the first timestamp in a period of this granularity.

`xdm:granularity`
* is optional
* type: `enum`
* default: `"day"`
* defined in this schema

The value of this property **must** be equal to one of the [known values below](#xdmgranularity-known-values).

### xdm:granularity Known Values
| Value | Description |
|-------|-------------|
| `hour` | Hourly data |
| `day` | Daily data |
| `week` | Weekly data |
| `month` | Monthly data |
| `quarter` | Quarterly data |
| `year` | Yearly data |




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






## xdm:sourceVersion
### Source Version

Major version being referenced.

`xdm:sourceVersion`
* is optional
* type: `number`
* defined in [Schema Descriptor](../schemadescriptor.schema.md#xdmsourceversion)

### xdm:sourceVersion Type


`number`





