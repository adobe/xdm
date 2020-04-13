
# Profile Addresses Schema

```
https://ns.adobe.com/xdm/context/profile-addresses
```

Contains the various addresses a single profile can contain

| [Abstract](../../abstract.md) | [Extensible](../../extensions.md) | [Status](../../status.md) | [Identifiable](../../id.md) | [Custom Properties](../../extensions.md) | [Additional Properties](../../extensions.md) | Defined In |
|-------------------------------|-----------------------------------|---------------------------|-----------------------------|------------------------------------------|----------------------------------------------|------------|
| Can be instantiated | Yes | Experimental | No | Forbidden | Permitted | [context/profile-addresses.schema.json](context/profile-addresses.schema.json) |
## Schema Hierarchy

* Profile Addresses `https://ns.adobe.com/xdm/context/profile-addresses`
  * [Extensibility base schema](../common/extensible.schema.md) `https://ns.adobe.com/xdm/common/extensible`
  * [Postal address](../common/address.schema.md) `https://ns.adobe.com/xdm/common/address`


## Profile Addresses Example
```json
{
  "xdm:homeAddress": {
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
    "xdm:lastVerifiedDate": "2018-01-02"
  },
  "xdm:workAddress": {
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
    "xdm:lastVerifiedDate": "2018-01-02"
  },
  "xdm:shippingAddress": {
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
    "xdm:lastVerifiedDate": "2018-01-02"
  }
}
```

# Profile Addresses Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [xdm:homeAddress](#xdmhomeaddress) | Postal address | Optional | Profile Addresses (this schema) |
| [xdm:shippingAddress](#xdmshippingaddress) | Postal address | Optional | Profile Addresses (this schema) |
| [xdm:workAddress](#xdmworkaddress) | Postal address | Optional | Profile Addresses (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## xdm:homeAddress
### Home Address

A home postal address.

`xdm:homeAddress`
* is optional
* type: Postal address
* defined in this schema

### xdm:homeAddress Type


* [Postal address](../common/address.schema.md) – `https://ns.adobe.com/xdm/common/address`





## xdm:shippingAddress
### Shipping Address

A mailing postal address.

`xdm:shippingAddress`
* is optional
* type: Postal address
* defined in this schema

### xdm:shippingAddress Type


* [Postal address](../common/address.schema.md) – `https://ns.adobe.com/xdm/common/address`





## xdm:workAddress
### Work Address

A work postal address.

`xdm:workAddress`
* is optional
* type: Postal address
* defined in this schema

### xdm:workAddress Type


* [Postal address](../common/address.schema.md) – `https://ns.adobe.com/xdm/common/address`




