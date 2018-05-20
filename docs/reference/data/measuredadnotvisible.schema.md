
# measured-ad-not-visible Schema

```
https://ns.adobe.com/xdm/data/measuredadnotvisible
```

The advertising/viewability metric measured-ad-not-visible describes whether < 51% of pixels on an ad where visible at event time.

| [Abstract](../../abstract.md) | [Extensible](../../extensions.md) | [Status](../../status.md) | [Identifiable](../../id.md) | [Custom Properties](../../extensions.md) | [Additional Properties](../../extensions.md) | Defined In |
|-------------------------------|-----------------------------------|---------------------------|-----------------------------|------------------------------------------|----------------------------------------------|------------|
| Can be instantiated | Yes | Experimental | No | Forbidden | Permitted | [data/measuredadnotvisible.schema.json](data/measuredadnotvisible.schema.json) |

## measured-ad-not-visible Example
```json
{
  "schema:name": "advertising/viewability metric: measuredAdNotVisible",
  "@id": "xdm:measuredAdNotVisible",
  "xdm:measurement": "count",
  "xdm:unit": null
}
```

# measured-ad-not-visible Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [@id](#@id) | `const` | **Required** | measured-ad-not-visible (this schema) |
| [schema:name](#schemaname) | `const` | **Required** | measured-ad-not-visible (this schema) |
| [xdm:measurement](#xdmmeasurement) | `const` | **Required** | measured-ad-not-visible (this schema) |
| [xdm:unit](#xdmunit) | `const` | **Required** | measured-ad-not-visible (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## @id

The unique identifier of this metric.

`@id`
* is **required**
* type: `const`
* defined in this schema

The value of this property **must** be equal to:

```json
"xdm:measuredAdNotVisible"
```





## schema:name

The advertising/viewability metric measured-ad-not-visible describes whether < 51% of pixels on an ad where visible at event time.

`schema:name`
* is **required**
* type: `const`
* defined in this schema

The value of this property **must** be equal to:

```json
"advertising/viewability metric: measuredAdNotVisible"
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




