
# Site Search Schema

```
https://ns.adobe.com/xdm/datatypes/sitesearch
```

Information about site content search activity.

| [Abstract](../../abstract.md) | [Extensible](../../extensions.md) | [Status](../../status.md) | [Identifiable](../../id.md) | [Custom Properties](../../extensions.md) | [Additional Properties](../../extensions.md) | Defined In |
|-------------------------------|-----------------------------------|---------------------------|-----------------------------|------------------------------------------|----------------------------------------------|------------|
| Can be instantiated | Yes | Experimental | No | Forbidden | Permitted | [datatypes/sitesearch.schema.json](datatypes/sitesearch.schema.json) |
## Schema Hierarchy

* Site Search `https://ns.adobe.com/xdm/datatypes/sitesearch`
  * [Extensibility base schema](extensible.schema.md) `https://ns.adobe.com/xdm/common/extensible`


## Site Search Examples

```json
{
  "xdm:query": "Iphone 13",
  "xdm:suggestions": [
    "iphone 11",
    "iphone 12",
    "airpods"
  ],
  "xdm:numberOfResults": 35
}
```

```json
{
  "xdm:filter": [
    {
      "xdm:attribute": "Device",
      "xdm:value": [
        "Mobile",
        "Phone"
      ],
      "xdm:isRange": false
    },
    {
      "xdm:attribute": "Price",
      "xdm:value": [
        "900",
        "1000"
      ],
      "xdm:isRange": true
    },
    {
      "xdm:attribute": "price",
      "xdm:value": [
        "800",
        "1000"
      ],
      "xdm:isRange": true
    }
  ],
  "xdm:sort": [
    {
      "xdm:attribute": "price",
      "xdm:order": "DESC"
    },
    {
      "xdm:attribute": "relevance",
      "xdm:order": "ASC"
    }
  ],
  "xdm:query": "Iphone 13"
}
```


# Site Search Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [xdm:filter](#xdmfilter) | reference | Optional | Site Search (this schema) |
| [xdm:numberOfResults](#xdmnumberofresults) | `integer` | Optional | Site Search (this schema) |
| [xdm:query](#xdmquery) | `string` | Optional | Site Search (this schema) |
| [xdm:sort](#xdmsort) | reference | Optional | Site Search (this schema) |
| [xdm:suggestions](#xdmsuggestions) | `string[]` | Optional | Site Search (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## xdm:filter
### Filter

Filters applied to limit search results.

`xdm:filter`
* is optional
* type: reference

* defined in this schema

### xdm:filter Type


Array type: reference

All items must be of the type:
* []() – `#/definitions/filterItem`








## xdm:numberOfResults
### Number of Results

Number of search results.

`xdm:numberOfResults`
* is optional
* type: `integer`
* defined in this schema

### xdm:numberOfResults Type


`integer`






## xdm:query
### Query

The terms searched for.

`xdm:query`
* is optional
* type: `string`
* defined in this schema

### xdm:query Type


`string`






## xdm:sort
### Sort

Specification for how search results should be sorted.

`xdm:sort`
* is optional
* type: reference

* defined in this schema

### xdm:sort Type


Array type: reference

All items must be of the type:
* []() – `#/definitions/sortItem`








## xdm:suggestions
### Suggestions

Suggested search terms.

`xdm:suggestions`
* is optional
* type: `string[]`

* defined in this schema

### xdm:suggestions Type


Array type: `string[]`

All items must be of the type:
`string`









# Site Search Definitions

| Property | Type | Group |
|----------|------|-------|
| [xdm:attribute](#xdmattribute) | `string` | `https://ns.adobe.com/xdm/datatypes/sitesearch#/definitions/sortItem` |
| [xdm:isRange](#xdmisrange) | `boolean` | `https://ns.adobe.com/xdm/datatypes/sitesearch#/definitions/filterItem` |
| [xdm:order](#xdmorder) | `enum` | `https://ns.adobe.com/xdm/datatypes/sitesearch#/definitions/sortItem` |
| [xdm:value](#xdmvalue) | `string[]` | `https://ns.adobe.com/xdm/datatypes/sitesearch#/definitions/filterItem` |

## xdm:attribute
### Attribute

An attribute used to sort items in search results.

`xdm:attribute`
* is optional
* type: `string`
* defined in this schema

### xdm:attribute Type


`string`






## xdm:isRange
### Is Range

When true, values indicate endpoints of an acceptable range of values.

`xdm:isRange`
* is optional
* type: `boolean`
* defined in this schema

### xdm:isRange Type


`boolean`





## xdm:order
### Order

The order in which to return search results

`xdm:order`
* is optional
* type: `enum`
* defined in this schema

The value of this property **must** be equal to one of the [known values below](#xdmorder-known-values).

### xdm:order Known Values
| Value | Description |
|-------|-------------|
| `ASC` | Ascending order |
| `DESC` | Descending order |
| `RELEVANCE` | Sort items by relevance |




## xdm:value
### Value

Attribute values used to determine which items will be included in search results.

`xdm:value`
* is optional
* type: `string[]`

* defined in this schema

### xdm:value Type


Array type: `string[]`

All items must be of the type:
`string`








