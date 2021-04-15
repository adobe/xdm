
# Reservation Search Schema

```
https://ns.adobe.com/xdm/mixins/experience-event/industry-verticals/experienceevent-reservation-search
```

Reservation search details such as flexibility, product code, rate type, and internal search information.

| [Abstract](../../../../abstract.md) | [Extensible](../../../../extensions.md) | [Status](../../../../status.md) | [Identifiable](../../../../id.md) | [Custom Properties](../../../../extensions.md) | [Additional Properties](../../../../extensions.md) | Defined In |
|-------------------------------------|-----------------------------------------|---------------------------------|-----------------------------------|------------------------------------------------|----------------------------------------------------|------------|
| Can be instantiated | Yes | Stable | No | Forbidden | Permitted | [mixins/experience-event/industry-verticals/experienceevent-reservation-search.schema.json](mixins/experience-event/industry-verticals/experienceevent-reservation-search.schema.json) |

## Reservation Search Example
```json
{}
```

# Reservation Search Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [xdm:reservationSearch](#xdmreservationsearch) | `object` | Optional | Reservation Search (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## xdm:reservationSearch


`xdm:reservationSearch`
* is optional
* type: `object`
* defined in this schema

### xdm:reservationSearch Type


`object` with following properties:


| Property | Type | Required |
|----------|------|----------|
| `xdm:couponCode`| string | Optional |
| `xdm:endDate`| string | Optional |
| `xdm:groupCode`| string | Optional |
| `xdm:isFlexible`| boolean | Optional |
| `xdm:productCode`| string | Optional |
| `xdm:rateType`| string | Optional |
| `xdm:reservationSearch`|  | Optional |
| `xdm:startDate`| string | Optional |



#### xdm:couponCode
##### Coupon Code

Coupon/promo code string used in a reservation search.

`xdm:couponCode`
* is optional
* type: `string`

##### xdm:couponCode Type


`string`








#### xdm:endDate
##### End Date

The end drop-off/return/check-out date of the reservation search.

`xdm:endDate`
* is optional
* type: `string`

##### xdm:endDate Type


`string`
* format: `date-time` – date and time (according to [RFC 3339, section 5.6](http://tools.ietf.org/html/rfc3339))








#### xdm:groupCode
##### Group Code

Group code string used in a reservation search.

`xdm:groupCode`
* is optional
* type: `string`

##### xdm:groupCode Type


`string`








#### xdm:isFlexible
##### Reservation Search Is Flexibile

Tracks if a visitor selects a flexible date option for their reservation search.

`xdm:isFlexible`
* is optional
* type: `boolean`

##### xdm:isFlexible Type


`boolean`







#### xdm:productCode
##### Corporate Code

Corporate code string used in a reservation search.

`xdm:productCode`
* is optional
* type: `string`

##### xdm:productCode Type


`string`








#### xdm:rateType
##### Rate Type

Type of rate included in a reservation search.

`xdm:rateType`
* is optional
* type: `enum`

The value of this property **must** be equal to one of the [known values below](#xdmreservationsearch-known-values).

##### xdm:rateType Known Values
| Value | Description |
|-------|-------------|
| `aaa` |  |
| `aarp` |  |
| `senior` |  |
| `government` |  |
| `corporate` |  |






#### xdm:reservationSearch
##### Site Search

Extension of internalSearch data type.

`xdm:reservationSearch`
* is optional
* type: reference

##### xdm:reservationSearch Type


* []() – `https://ns.adobe.com/xdm/datatypes/internal-site-search`







#### xdm:startDate
##### Start Date

The start pick-up/outbound/check-in date of the reservation search.

`xdm:startDate`
* is optional
* type: `string`

##### xdm:startDate Type


`string`
* format: `date-time` – date and time (according to [RFC 3339, section 5.6](http://tools.ietf.org/html/rfc3339))










