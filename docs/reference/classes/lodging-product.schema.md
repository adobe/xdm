
# Lodging Product Schema

```
https://ns.adobe.com/xdm/classes/lodging-product
```

For hotel product information such as ID, rooms, ownership, and type.

| [Abstract](../../abstract.md) | [Extensible](../../extensions.md) | [Status](../../status.md) | [Identifiable](../../id.md) | [Custom Properties](../../extensions.md) | [Additional Properties](../../extensions.md) | Defined In |
|-------------------------------|-----------------------------------|---------------------------|-----------------------------|------------------------------------------|----------------------------------------------|------------|
| Can be instantiated | Yes | Stable | No | Forbidden | Permitted | [classes/lodging-product.schema.json](classes/lodging-product.schema.json) |
## Schema Hierarchy

* Lodging Product `https://ns.adobe.com/xdm/classes/lodging-product`
  * [Record Schema](../behaviors/record.schema.md) `https://ns.adobe.com/xdm/data/record`
  * [Postal address](../datatypes/demographic/address.schema.md) `https://ns.adobe.com/xdm/common/address`


## Lodging Product Example
```json
{
  "xdm:ownership": "Select Properties",
  "xdm:serviceLevel": "Premium",
  "xdm:starRating": 5,
  "xdm:totalRooms": 180,
  "xdm:type": "hotel"
}
```

# Lodging Product Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [@id](#id) | `string` | Optional | [Record Schema](../behaviors/record.schema.md#id) |
| [xdm:location](#xdmlocation) | Postal address | Optional | Lodging Product (this schema) |
| [xdm:ownership](#xdmownership) | `string` | Optional | Lodging Product (this schema) |
| [xdm:propertyID](#xdmpropertyid) | `string` | Optional | Lodging Product (this schema) |
| [xdm:serviceLevel](#xdmservicelevel) | `string` | Optional | Lodging Product (this schema) |
| [xdm:starRating](#xdmstarrating) | `integer` | Optional | Lodging Product (this schema) |
| [xdm:totalRooms](#xdmtotalrooms) | `integer` | Optional | Lodging Product (this schema) |
| [xdm:type](#xdmtype) | `string` | Optional | Lodging Product (this schema) |
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






## xdm:location
### Location

Lodging property location.

`xdm:location`
* is optional
* type: Postal address
* defined in this schema

### xdm:location Type


* [Postal address](../datatypes/demographic/address.schema.md) – `https://ns.adobe.com/xdm/common/address`





## xdm:ownership
### Ownership

Parent company of the lodging property.

`xdm:ownership`
* is optional
* type: `string`
* defined in this schema

### xdm:ownership Type


`string`






## xdm:propertyID
### Property ID

Identifier for the lodging property.

`xdm:propertyID`
* is optional
* type: `string`
* defined in this schema

### xdm:propertyID Type


`string`






## xdm:serviceLevel
### Service Level

Service level associated with the lodging property such as luxury, budget, mid-range, etc.

`xdm:serviceLevel`
* is optional
* type: `string`
* defined in this schema

### xdm:serviceLevel Type


`string`






## xdm:starRating
### Star Rating

Star rating associated with the lodging property.

`xdm:starRating`
* is optional
* type: `integer`
* defined in this schema

### xdm:starRating Type


`integer`






## xdm:totalRooms
### Total Rooms

Total rooms in the lodging property.

`xdm:totalRooms`
* is optional
* type: `integer`
* defined in this schema

### xdm:totalRooms Type


`integer`






## xdm:type
### Type

Type of lodging property such as homestay, resort, capsule, lodge, service apartment, boathouse, etc.

`xdm:type`
* is optional
* type: `string`
* defined in this schema

### xdm:type Type


`string`





