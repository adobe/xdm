
# Profile Work Details Schema

```
https://ns.adobe.com/xdm/context/profile-work-details
```

This mixin is used to capture information regarding work-related details of the individual such as work address, work email, work phone number, and organizations to which the profile belongs.

| [Abstract](../../abstract.md) | [Extensible](../../extensions.md) | [Status](../../status.md) | [Identifiable](../../id.md) | [Custom Properties](../../extensions.md) | [Additional Properties](../../extensions.md) | Defined In |
|-------------------------------|-----------------------------------|---------------------------|-----------------------------|------------------------------------------|----------------------------------------------|------------|
| Can be instantiated | Yes | Experimental | No | Forbidden | Permitted | [context/profile-work-details.schema.json](context/profile-work-details.schema.json) |
## Schema Hierarchy

* Profile Work Details `https://ns.adobe.com/xdm/context/profile-work-details`
  * [Extensibility Base Schema](../common/extensible.schema.md) `https://ns.adobe.com/xdm/common/extensible`
  * [Postal Address](../common/address.schema.md) `https://ns.adobe.com/xdm/common/address`
  * [Email Address](emailaddress.schema.md) `https://ns.adobe.com/xdm/context/emailaddress`
  * [Phone Number](phonenumber.schema.md) `https://ns.adobe.com/xdm/context/phonenumber`


## Profile Work Details Example
```json
{
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
  "xdm:workEmail": {
    "xdm:primary": false,
    "xdm:address": "jsmith@xyzinc.com",
    "xdm:label": "John Smith",
    "xdm:type": "work",
    "xdm:status": "active"
  },
  "xdm:workPhone": {
    "xdm:primary": true,
    "xdm:number": "1-408-888-8888",
    "xdm:status": "active"
  }
}
```

# Profile Work Details Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [xdm:organizations](#xdmorganizations) | `string[]` | Optional | Profile Work Details (this schema) |
| [xdm:workAddress](#xdmworkaddress) | Postal Address | Optional | Profile Work Details (this schema) |
| [xdm:workEmail](#xdmworkemail) | Email Address | Optional | Profile Work Details (this schema) |
| [xdm:workPhone](#xdmworkphone) | Phone Number | Optional | Profile Work Details (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## xdm:organizations
### Organizations

`xdm:organizations`
* is optional
* type: `string[]`

* defined in this schema

### xdm:organizations Type


Array type: `string[]`

All items must be of the type:
`string`









## xdm:workAddress
### Work Address

A work postal address.

`xdm:workAddress`
* is optional
* type: Postal Address
* defined in this schema

### xdm:workAddress Type


* [Postal Address](../common/address.schema.md) – `https://ns.adobe.com/xdm/common/address`





## xdm:workEmail
### Work Email

A work email address.

`xdm:workEmail`
* is optional
* type: Email Address
* defined in this schema

### xdm:workEmail Type


* [Email Address](emailaddress.schema.md) – `https://ns.adobe.com/xdm/context/emailaddress`





## xdm:workPhone
### Work Phone

Work phone number.

`xdm:workPhone`
* is optional
* type: Phone Number
* defined in this schema

### xdm:workPhone Type


* [Phone Number](phonenumber.schema.md) – `https://ns.adobe.com/xdm/context/phonenumber`




