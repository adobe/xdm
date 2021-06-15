
# Restaurant Schema

```
https://ns.adobe.com/xdm/classes/restaurant
```

For restaurant information such as address, cuisine, ID and name.

| [Abstract](../../abstract.md) | [Extensible](../../extensions.md) | [Status](../../status.md) | [Identifiable](../../id.md) | [Custom Properties](../../extensions.md) | [Additional Properties](../../extensions.md) | Defined In |
|-------------------------------|-----------------------------------|---------------------------|-----------------------------|------------------------------------------|----------------------------------------------|------------|
| Can be instantiated | Yes | Stable | No | Forbidden | Permitted | [classes/restaurant.schema.json](classes/restaurant.schema.json) |
## Schema Hierarchy

* Restaurant `https://ns.adobe.com/xdm/classes/restaurant`
  * [Record Schema](../behaviors/record.schema.md) `https://ns.adobe.com/xdm/data/record`
  * [Postal address](../datatypes/demographic/address.schema.md) `https://ns.adobe.com/xdm/common/address`


## Restaurant Example
```json
{
  "xdm:acceptsReservations": true,
  "xdm:restaurantName": "Sugarfire",
  "xdm:restaurantID": "SFSC63301",
  "xdm:cuisine": [
    "barbecue"
  ],
  "xdm:deliveryPartners": [
    "grubhub",
    "doordash"
  ],
  "xdm:diningOptions": [
    "delivery",
    "takeout"
  ]
}
```

# Restaurant Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [@id](#id) | `string` | Optional | [Record Schema](../behaviors/record.schema.md#id) |
| [xdm:acceptsReservations](#xdmacceptsreservations) | `boolean` | Optional | Restaurant (this schema) |
| [xdm:address](#xdmaddress) | Postal address | Optional | Restaurant (this schema) |
| [xdm:cuisine](#xdmcuisine) | `enum[]` | Optional | Restaurant (this schema) |
| [xdm:deliveryPartners](#xdmdeliverypartners) | `enum[]` | Optional | Restaurant (this schema) |
| [xdm:diningOptions](#xdmdiningoptions) | `enum[]` | Optional | Restaurant (this schema) |
| [xdm:restaurantID](#xdmrestaurantid) | `string` | Optional | Restaurant (this schema) |
| [xdm:restaurantName](#xdmrestaurantname) | `string` | Optional | Restaurant (this schema) |
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






## xdm:acceptsReservations
### Accepts Reservations

Flags if the restaurant accepts reservations.

`xdm:acceptsReservations`
* is optional
* type: `boolean`
* defined in this schema

### xdm:acceptsReservations Type


`boolean`





## xdm:address
### Address

Physicial address where the restaurant is located.

`xdm:address`
* is optional
* type: Postal address
* defined in this schema

### xdm:address Type


* [Postal address](../datatypes/demographic/address.schema.md) – `https://ns.adobe.com/xdm/common/address`





## xdm:cuisine
### Cuisine

Type of restaurant cuisine(s).

`xdm:cuisine`
* is optional
* type: `enum[]`

* defined in this schema

### xdm:cuisine Type


Array type: `enum[]`

All items must be of the type:
`string`









## xdm:deliveryPartners
### Delivery Partners

Delivery partners available from the restaurant.

`xdm:deliveryPartners`
* is optional
* type: `enum[]`

* defined in this schema

### xdm:deliveryPartners Type


Array type: `enum[]`

All items must be of the type:
`string`









## xdm:diningOptions
### Dining Options

Delivery and dining options available from the restaurant.

`xdm:diningOptions`
* is optional
* type: `enum[]`

* defined in this schema

### xdm:diningOptions Type


Array type: `enum[]`

All items must be of the type:
`string`









## xdm:restaurantID
### Restaurant ID

ID associated with the restaurant.

`xdm:restaurantID`
* is optional
* type: `string`
* defined in this schema

### xdm:restaurantID Type


`string`






## xdm:restaurantName
### Restaurant Name

Name associated with the restaurant.

`xdm:restaurantName`
* is optional
* type: `string`
* defined in this schema

### xdm:restaurantName Type


`string`





