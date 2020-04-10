
# Direct marketing postal address Schema

```
https://ns.adobe.com/xdm/context/directmarketing-address
```

Postal address information used to contact a user.

| [Abstract](../../abstract.md) | [Extensible](../../extensions.md) | [Status](../../status.md) | [Identifiable](../../id.md) | [Custom Properties](../../extensions.md) | [Additional Properties](../../extensions.md) | Defined In |
|-------------------------------|-----------------------------------|---------------------------|-----------------------------|------------------------------------------|----------------------------------------------|------------|
| Can be instantiated | Yes | Experimental | No | Forbidden | Permitted | [context/directmarketing-address.schema.json](context/directmarketing-address.schema.json) |
## Schema Hierarchy

* Direct marketing postal address `https://ns.adobe.com/xdm/context/directmarketing-address`
  * [Postal address](../common/address.schema.md) `https://ns.adobe.com/xdm/common/address`


## Direct marketing postal address Example
```json
{
  "@id": "https://data.adobe.io/entities/address/123",
  "xdm:primary": false,
  "xdm:street1": "345 Park Ave",
  "xdm:city": "San Jose",
  "xdm:stateProvince": "US-CA",
  "xdm:postalCode": "95110",
  "xdm:country": "United States",
  "xdm:countryCode": "US",
  "schema:latitude": 37.3382,
  "schema:longitude": 121.8863,
  "xdm:status": "active",
  "xdm:lastVerifiedDate": "2018-01-02",
  "xdm:errorCount": 0,
  "xdm:quality": "Fully-recognized street"
}
```

# Direct marketing postal address Properties

| Property | Type | Required | Default | Defined by |
|----------|------|----------|---------|------------|
| [xdm:country](#xdmcountry) | `string` | Optional |  | [Postal address](../common/address.schema.md#xdmcountry) |
| [xdm:errorCount](#xdmerrorcount) | `integer` | Optional |  | Direct marketing postal address (this schema) |
| [xdm:label](#xdmlabel) | `string` | Optional |  | [Postal address](../common/address.schema.md#xdmlabel) |
| [xdm:lastVerifiedDate](#xdmlastverifieddate) | `string` | Optional |  | [Postal address](../common/address.schema.md#xdmlastverifieddate) |
| [xdm:postOfficeBox](#xdmpostofficebox) | `string` | Optional |  | [Postal address](../common/address.schema.md#xdmpostofficebox) |
| [xdm:primary](#xdmprimary) | `boolean` | Optional |  | [Postal address](../common/address.schema.md#xdmprimary) |
| [xdm:quality](#xdmquality) | `string` | Optional |  | Direct marketing postal address (this schema) |
| [xdm:region](#xdmregion) | `string` | Optional |  | [Postal address](../common/address.schema.md#xdmregion) |
| [xdm:status](#xdmstatus) | `string` | Optional | `"active"` | [Postal address](../common/address.schema.md#xdmstatus) |
| [xdm:statusReason](#xdmstatusreason) | `string` | Optional |  | [Postal address](../common/address.schema.md#xdmstatusreason) |
| [xdm:street1](#xdmstreet1) | `string` | Optional |  | [Postal address](../common/address.schema.md#xdmstreet1) |
| [xdm:street2](#xdmstreet2) | `string` | Optional |  | [Postal address](../common/address.schema.md#xdmstreet2) |
| [xdm:street3](#xdmstreet3) | `string` | Optional |  | [Postal address](../common/address.schema.md#xdmstreet3) |
| [xdm:street4](#xdmstreet4) | `string` | Optional |  | [Postal address](../common/address.schema.md#xdmstreet4) |
| `*` | any | Additional | this schema *allows* additional properties |

## xdm:country
### Country

The name of the government-administered territory. Other than `xdm:countryCode`, this is a free-form field that can have the country name in any language.

`xdm:country`
* is optional
* type: `string`
* defined in [Postal address](../common/address.schema.md#xdmcountry)

### xdm:country Type


`string`






## xdm:errorCount
### Address error count

Number of consecutive errors when sending to this address.

`xdm:errorCount`
* is optional
* type: `integer`
* defined in this schema

### xdm:errorCount Type


`integer`






## xdm:label
### Label

Free form name of the address.

`xdm:label`
* is optional
* type: `string`
* defined in [Postal address](../common/address.schema.md#xdmlabel)

### xdm:label Type


`string`






## xdm:lastVerifiedDate
### Last verified date

The date that the address was last verified as still associated to the person.

`xdm:lastVerifiedDate`
* is optional
* type: `string`
* defined in [Postal address](../common/address.schema.md#xdmlastverifieddate)

### xdm:lastVerifiedDate Type


`string`
* format: `date` – date, without time (according to [RFC 3339, section 5.6](http://tools.ietf.org/html/rfc3339))






## xdm:postOfficeBox
### Post office box

Post office box of the address.

`xdm:postOfficeBox`
* is optional
* type: `string`
* defined in [Postal address](../common/address.schema.md#xdmpostofficebox)

### xdm:postOfficeBox Type


`string`

* maximum length: 20 characters





## xdm:primary
### Primary

Primary address indicator. A profile can have only one `primary` address at a given point of time.

`xdm:primary`
* is optional
* type: `boolean`
* defined in [Postal address](../common/address.schema.md#xdmprimary)

### xdm:primary Type


`boolean`





## xdm:quality
### Address quality

Address quality rating.

`xdm:quality`
* is optional
* type: `string`
* defined in this schema

### xdm:quality Type


`string`



### xdm:quality Known Values
| Value | Description |
|-------|-------------|
| `incomplete_address` | Incomplete address |
| `unknown_town_postal_code` | Unknown town or postal code |
| `empty_street` | Empty street |
| `unknown_street` | Unknown street |
| `partially_recognized_street` | Partially recognized street |
| `fully_recognized_street` | Fully recognized street |




## xdm:region
### Region

The region, county, or district portion of the address.

`xdm:region`
* is optional
* type: `string`
* defined in [Postal address](../common/address.schema.md#xdmregion)

### xdm:region Type


`string`






## xdm:status
### Status

An indication as to the ability to use the address.

`xdm:status`
* is optional
* type: `string`
* default: `"active"`
* defined in [Postal address](../common/address.schema.md#xdmstatus)

### xdm:status Type


`string`



### xdm:status Known Values
| Value | Description |
|-------|-------------|
| `active` | Active |
| `incomplete` | Incomplete |
| `pending_verification` | Pending verification |
| `blacklisted` | Blacklisted |
| `blocked` | Blocked |




## xdm:statusReason
### Status reason

A description of the current status.

`xdm:statusReason`
* is optional
* type: `string`
* defined in [Postal address](../common/address.schema.md#xdmstatusreason)

### xdm:statusReason Type


`string`






## xdm:street1
### Street 1

Primary street level information, apartment number, street number, and street name.

`xdm:street1`
* is optional
* type: `string`
* defined in [Postal address](../common/address.schema.md#xdmstreet1)

### xdm:street1 Type


`string`






## xdm:street2
### Street 2

Optional street information second line.

`xdm:street2`
* is optional
* type: `string`
* defined in [Postal address](../common/address.schema.md#xdmstreet2)

### xdm:street2 Type


`string`






## xdm:street3
### Street 3

Optional street information third line.

`xdm:street3`
* is optional
* type: `string`
* defined in [Postal address](../common/address.schema.md#xdmstreet3)

### xdm:street3 Type


`string`






## xdm:street4
### Street 4

Optional street information fourth line.

`xdm:street4`
* is optional
* type: `string`
* defined in [Postal address](../common/address.schema.md#xdmstreet4)

### xdm:street4 Type


`string`





