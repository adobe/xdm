
# measured-muted Schema

```
https://ns.adobe.com/xdm/data/measuredmuted
```

The advertising/viewability metric measured-muted describes whether the ad was measured to be muted at event time.

| [Abstract](../../abstract.md) | [Extensible](../../extensions.md) | [Status](../../status.md) | [Identifiable](../../id.md) | [Custom Properties](../../extensions.md) | [Additional Properties](../../extensions.md) | Defined In |
|-------------------------------|-----------------------------------|---------------------------|-----------------------------|------------------------------------------|----------------------------------------------|------------|
| Can be instantiated | Yes | Stabilizing | No | Forbidden | Permitted | [data/measuredmuted.schema.json](data/measuredmuted.schema.json) |

## measured-muted Example
```json
{
  "schema:name": "advertising/viewability metric: measuredMuted",
  "@id": "xdm:measuredMuted",
  "xdm:measurement": "count",
  "xdm:unit": null
}
```

# measured-muted Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [@id](#@id) | `const` | **Required** | measured-muted (this schema) |
| [schema:name](#schemaname) | `const` | **Required** | measured-muted (this schema) |
| [xdm:measurement](#xdmmeasurement) | `const` | **Required** | measured-muted (this schema) |
| [xdm:unit](#xdmunit) | `const` | **Required** | measured-muted (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## @id

The unique identifier of this metric.

`@id`
* is **required**
* type: `const`
* defined in this schema

The value of this property **must** be equal to:

```json
"xdm:measuredMuted"
```





## schema:name

The advertising/viewability metric measured-muted describes whether the ad was measured to be muted at event time.

`schema:name`
* is **required**
* type: `const`
* defined in this schema

The value of this property **must** be equal to:

```json
"advertising/viewability metric: measuredMuted"
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




