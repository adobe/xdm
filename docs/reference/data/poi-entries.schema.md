
# poi-entries Schema

```
https://ns.adobe.com/xdm/data/metrics/placecontext/poi-entries
```

The place context metric poi-entries describes the number of times a person has left a Point of Interest (POI).

| [Abstract](../../abstract.md) | [Extensible](../../extensions.md) | [Status](../../status.md) | [Identifiable](../../id.md) | [Custom Properties](../../extensions.md) | [Additional Properties](../../extensions.md) | Defined In |
|-------------------------------|-----------------------------------|---------------------------|-----------------------------|------------------------------------------|----------------------------------------------|------------|
| Can be instantiated | Yes | Experimental | Yes | Forbidden | Permitted | [data/poi-entries.schema.json](data/poi-entries.schema.json) |

## poi-entries Example
```json
{
  "schema:name": "placecontext: poiEntries",
  "@id": "xdm:poiEntries",
  "xdm:measurement": "count",
  "xdm:unit": null
}
```

# poi-entries Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [@id](#@id) | `const` | **Required** | poi-entries (this schema) |
| [schema:name](#schemaname) | `const` | **Required** | poi-entries (this schema) |
| [xdm:measurement](#xdmmeasurement) | `const` | **Required** | poi-entries (this schema) |
| [xdm:unit](#xdmunit) | `const` | **Required** | poi-entries (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## @id

The unique identifier of this metric.

`@id`
* is **required**
* type: `const`
* defined in this schema

The value of this property **must** be equal to:

```json
"xdm:poiEntries"
```





## schema:name

The human-readable name of the metric. The name can be used in user interfaces and does not have to be unique.

`schema:name`
* is **required**
* type: `const`
* defined in this schema

The value of this property **must** be equal to:

```json
"placecontext: poiEntries"
```





## xdm:measurement

How to take measures of this metric.

`xdm:measurement`
* is **required**
* type: `const`
* defined in this schema

The value of this property **must** be equal to:

```json
"count"
```





## xdm:unit


`xdm:unit`
* is **required**
* type: `const`
* defined in this schema

The value of this property **must** be equal to:

```json
null
```




