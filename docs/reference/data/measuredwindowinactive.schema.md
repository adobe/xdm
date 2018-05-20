
# measured-window-inactive Schema

```
https://ns.adobe.com/xdm/data/measuredwindowinactive
```

The advertising/viewability metric measured-window-inactive describes whether the ad was displayed in a window not active by the user at event time.

| [Abstract](../../abstract.md) | [Extensible](../../extensions.md) | [Status](../../status.md) | [Identifiable](../../id.md) | [Custom Properties](../../extensions.md) | [Additional Properties](../../extensions.md) | Defined In |
|-------------------------------|-----------------------------------|---------------------------|-----------------------------|------------------------------------------|----------------------------------------------|------------|
| Can be instantiated | Yes | Experimental | No | Forbidden | Permitted | [data/measuredwindowinactive.schema.json](data/measuredwindowinactive.schema.json) |

## measured-window-inactive Example
```json
{
  "schema:name": "advertising/viewability metric: measuredWindowInactive",
  "@id": "xdm:measuredWindowInactive",
  "xdm:measurement": "count",
  "xdm:unit": null
}
```

# measured-window-inactive Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [@id](#@id) | `const` | **Required** | measured-window-inactive (this schema) |
| [schema:name](#schemaname) | `const` | **Required** | measured-window-inactive (this schema) |
| [xdm:measurement](#xdmmeasurement) | `const` | **Required** | measured-window-inactive (this schema) |
| [xdm:unit](#xdmunit) | `const` | **Required** | measured-window-inactive (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## @id

The unique identifier of this metric.

`@id`
* is **required**
* type: `const`
* defined in this schema

The value of this property **must** be equal to:

```json
"xdm:measuredWindowInactive"
```





## schema:name

The advertising/viewability metric measured-window-inactive describes whether the ad was displayed in a window not active by the user at event time.

`schema:name`
* is **required**
* type: `const`
* defined in this schema

The value of this property **must** be equal to:

```json
"advertising/viewability metric: measuredWindowInactive"
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




