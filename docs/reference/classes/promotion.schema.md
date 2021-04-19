
# Promotion Schema

```
https://ns.adobe.com/xdm/classes/promotion
```

For promition information such as details, and start and end date.

| [Abstract](../../abstract.md) | [Extensible](../../extensions.md) | [Status](../../status.md) | [Identifiable](../../id.md) | [Custom Properties](../../extensions.md) | [Additional Properties](../../extensions.md) | Defined In |
|-------------------------------|-----------------------------------|---------------------------|-----------------------------|------------------------------------------|----------------------------------------------|------------|
| Can be instantiated | Yes | Stable | No | Forbidden | Permitted | [classes/promotion.schema.json](classes/promotion.schema.json) |
## Schema Hierarchy

* Promotion `https://ns.adobe.com/xdm/classes/promotion`
  * [Record Schema](../behaviors/record.schema.md) `https://ns.adobe.com/xdm/data/record`


## Promotion Example
```json
{
  "xdm:endDate": "2021-09-22T15:52:25+00:00",
  "xdm:promoCreative": "none",
  "xdm:promotionDetails": "10 Percent Off Campaign for Affiliate Referrers",
  "xdm:ID": "10OFF_FALL2021",
  "xdm:promoName": "10 Percent Off",
  "xdm:promoPosition": "top",
  "xdm:startDate": "2021-09-01T15:52:25+00:00"
}
```

# Promotion Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [@id](#id) | `string` | Optional | [Record Schema](../behaviors/record.schema.md#id) |
| [xdm:ID](#xdmid) | `string` | Optional | Promotion (this schema) |
| [xdm:endDate](#xdmenddate) | `string` | Optional | Promotion (this schema) |
| [xdm:promoCreative](#xdmpromocreative) | `string` | Optional | Promotion (this schema) |
| [xdm:promoName](#xdmpromoname) | `string` | Optional | Promotion (this schema) |
| [xdm:promoPosition](#xdmpromoposition) | `string` | Optional | Promotion (this schema) |
| [xdm:promotionDetails](#xdmpromotiondetails) | `string` | Optional | Promotion (this schema) |
| [xdm:startDate](#xdmstartdate) | `string` | Optional | Promotion (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## @id
### Identifier

A unique identifier for the record.

`@id`
* is optional
* type: `string`
* defined in [Record Schema](../behaviors/record.schema.md#id)

### @id Type


`string`
* format: `uri-reference` – URI Reference (according to [RFC3986](https://tools.ietf.org/html/rfc3986))






## xdm:ID
### Promotion ID

The ID associated with the promotion.

`xdm:ID`
* is optional
* type: `string`
* defined in this schema

### xdm:ID Type


`string`






## xdm:endDate
### End Date

Date on which the promotion ceases to be valid.

`xdm:endDate`
* is optional
* type: `string`
* defined in this schema

### xdm:endDate Type


`string`
* format: `date-time` – date and time (according to [RFC 3339, section 5.6](http://tools.ietf.org/html/rfc3339))






## xdm:promoCreative
### Promotion Creative

The text or creative variation associated with the promotion.

`xdm:promoCreative`
* is optional
* type: `string`
* defined in this schema

### xdm:promoCreative Type


`string`






## xdm:promoName
### Promotion Name

Promotion name

`xdm:promoName`
* is optional
* type: `string`
* defined in this schema

### xdm:promoName Type


`string`






## xdm:promoPosition
### Promotion Position

Promotion position on site.

`xdm:promoPosition`
* is optional
* type: `string`
* defined in this schema

### xdm:promoPosition Type


`string`






## xdm:promotionDetails
### Promotion Details

Details of the promotion such as percentage off, or other restrictions.

`xdm:promotionDetails`
* is optional
* type: `string`
* defined in this schema

### xdm:promotionDetails Type


`string`






## xdm:startDate
### Start Date

Date on which the promotion is valid.

`xdm:startDate`
* is optional
* type: `string`
* defined in this schema

### xdm:startDate Type


`string`
* format: `date-time` – date and time (according to [RFC 3339, section 5.6](http://tools.ietf.org/html/rfc3339))





