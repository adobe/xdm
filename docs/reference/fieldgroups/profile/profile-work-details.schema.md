
# Work Contact Details Schema

```
https://ns.adobe.com/xdm/context/profile-work-details
```

Work-related details of a person such as work address, work email, work phone number, and organizations to which the person belongs.

| [Abstract](../../../abstract.md) | [Extensible](../../../extensions.md) | [Status](../../../status.md) | [Identifiable](../../../id.md) | [Custom Properties](../../../extensions.md) | [Additional Properties](../../../extensions.md) | Defined In |
|----------------------------------|--------------------------------------|------------------------------|--------------------------------|---------------------------------------------|-------------------------------------------------|------------|
| Can be instantiated | Yes | Stable | No | Forbidden | Permitted | [fieldgroups/profile/profile-work-details.schema.json](fieldgroups/profile/profile-work-details.schema.json) |
## Schema Hierarchy

* Work Contact Details `https://ns.adobe.com/xdm/context/profile-work-details`
  * [Extensibility base schema](../../datatypes/extensible.schema.md) `https://ns.adobe.com/xdm/common/extensible`
  * [Postal address](../../datatypes/demographic/address.schema.md) `https://ns.adobe.com/xdm/common/address`
  * [Email address](../../datatypes/demographic/emailaddress.schema.md) `https://ns.adobe.com/xdm/context/emailaddress`
  * [Phone number](../../datatypes/demographic/phonenumber.schema.md) `https://ns.adobe.com/xdm/context/phonenumber`


## Work Contact Details Example
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
    "schema:longitude": -121.8863,
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
  },
  "xdm:assistantDetails": {
    "xdm:name": {
      "xdm:firstName": "John",
      "xdm:middleName": "S",
      "xdm:lastName": "Doe",
      "xdm:fullName": "John S. Doe"
    },
    "xdm:phone": {
      "xdm:primary": true,
      "xdm:number": "1-408-888-7777",
      "xdm:status": "active"
    }
  },
  "xdm:reportsToID": "RPT10000",
  "xdm:departments": [
    "Finance",
    "Marketing"
  ],
  "xdm:jobTitle": "Account manager"
}
```

# Work Contact Details Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [xdm:organizations](#xdmorganizations) | `string[]` | Optional | Work Contact Details (this schema) |
| [xdm:workAddress](#xdmworkaddress) | Postal address | Optional | Work Contact Details (this schema) |
| [xdm:workEmail](#xdmworkemail) | Email address | Optional | Work Contact Details (this schema) |
| [xdm:workPhone](#xdmworkphone) | Phone number | Optional | Work Contact Details (this schema) |
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
* type: Postal address
* defined in this schema

### xdm:workAddress Type


* [Postal address](../../datatypes/demographic/address.schema.md) – `https://ns.adobe.com/xdm/common/address`





## xdm:workEmail
### Work Email

A work email address.

`xdm:workEmail`
* is optional
* type: Email address
* defined in this schema

### xdm:workEmail Type


* [Email address](../../datatypes/demographic/emailaddress.schema.md) – `https://ns.adobe.com/xdm/context/emailaddress`





## xdm:workPhone
### Work Phone

Work phone number.

`xdm:workPhone`
* is optional
* type: Phone number
* defined in this schema

### xdm:workPhone Type


* [Phone number](../../datatypes/demographic/phonenumber.schema.md) – `https://ns.adobe.com/xdm/context/phonenumber`




