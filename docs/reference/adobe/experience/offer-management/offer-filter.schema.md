
# Offer Filter (deprecated) Schema

```
https://ns.adobe.com/experience/offer-management/offer-filter
```

Filters are used to specify criteria for offer selection by topic or theme. The most common filter mechanism is by the tags that are associated with an offer. In general the offer filter selects a subset of offers from the overall inventory, not based on the use case for the decisioning. (deprecated)

| [Abstract](../../../../abstract.md) | [Extensible](../../../../extensions.md) | [Status](../../../../status.md) | [Identifiable](../../../../id.md) | [Custom Properties](../../../../extensions.md) | [Additional Properties](../../../../extensions.md) | Defined In |
|-------------------------------------|-----------------------------------------|---------------------------------|-----------------------------------|------------------------------------------------|----------------------------------------------------|------------|
| Can be instantiated | Yes | Deprecated | No | Forbidden | Permitted | [adobe/experience/offer-management/offer-filter.schema.json](adobe/experience/offer-management/offer-filter.schema.json) |
## Schema Hierarchy

* Offer Filter (deprecated) `https://ns.adobe.com/experience/offer-management/offer-filter`
  * [Filter Expression Tree](filter-expression/filter-expression.schema.md) `https://ns.adobe.com/experience/offer-management/filter-expression`


# Offer Filter (deprecated) Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [@id](#id) | `string` | Optional | Offer Filter (deprecated) (this schema) |
| [xdm:name](#xdmname) | `string` | **Required** | Offer Filter (deprecated) (this schema) |
| [xdm:value](#xdmvalue) | Filter Expression Tree | **Required** | Offer Filter (deprecated) (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## @id
### ID

The unique identifier of the filter. This @id must be unique within a repository container for objects that are not the same, otherwise it is interpreted as referring to the same object.

`@id`
* is optional
* type: `string`
* defined in this schema

### @id Type


`string`
* format: `uri-reference` – URI Reference (according to [RFC3986](https://tools.ietf.org/html/rfc3986))






## xdm:name
### Name

Filter name

`xdm:name`
* is **required**
* type: `string`
* defined in this schema

### xdm:name Type


`string`






## xdm:value
### Expression taking offer XDM instances (list of trees) as input

Contains the condition that is used to select offers based on a combination of tags or, directly, using the @id of offers.

`xdm:value`
* is **required**
* type: Filter Expression Tree
* defined in this schema

### xdm:value Type


* [Filter Expression Tree](filter-expression/filter-expression.schema.md) – `https://ns.adobe.com/experience/offer-management/filter-expression`




