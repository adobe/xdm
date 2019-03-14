
# Profile Direct Marketing Schema

```
https://ns.adobe.com/xdm/context/profile-directmarketing
```

Direct Marketing addressing for profiles.

| [Abstract](../../abstract.md) | [Extensible](../../extensions.md) | [Status](../../status.md) | [Identifiable](../../id.md) | [Custom Properties](../../extensions.md) | [Additional Properties](../../extensions.md) | Defined In |
|-------------------------------|-----------------------------------|---------------------------|-----------------------------|------------------------------------------|----------------------------------------------|------------|
| Can be instantiated | Yes | Experimental | No | Forbidden | Permitted | [context/profile-directmarketing.schema.json](context/profile-directmarketing.schema.json) |
## Schema Hierarchy

* Profile Direct Marketing `https://ns.adobe.com/xdm/context/profile-directmarketing`
  * [Extensibility base schema](../common/extensible.schema.md) `https://ns.adobe.com/xdm/common/extensible`
  * [Direct Marketing Address](directmarketing-address.schema.md) `https://ns.adobe.com/xdm/context/directmarketing-address`
  * [Direct Marketing Email Address](directmarketing-emailaddress.schema.md) `https://ns.adobe.com/xdm/context/directmarketing-emailaddress`
  * [Direct Marketing Phone Number](directmarketing-phonenumber.schema.md) `https://ns.adobe.com/xdm/context/directmarketing-phonenumber`


## Profile Direct Marketing Example
```json
{
  "xdm:directMarketingPhone": {
    "xdm:primary": true,
    "xdm:number": "1-408-888-8888",
    "xdm:status": "active",
    "xdm:errorCount": 0
  },
  "xdm:directMarketingAddress": {
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
  },
  "xdm:directMarketingEmail": {
    "xdm:primary": false,
    "xdm:address": "jsmith@xyzinc.com",
    "xdm:label": "John Smith",
    "xdm:type": "work",
    "xdm:status": "active",
    "xdm:errorCount": 0
  }
}
```

# Profile Direct Marketing Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [xdm:directMarketingAddress](#xdmdirectmarketingaddress) | Direct Marketing Address | Optional | Profile Direct Marketing (this schema) |
| [xdm:directMarketingEmail](#xdmdirectmarketingemail) | Direct Marketing Email Address | Optional | Profile Direct Marketing (this schema) |
| [xdm:directMarketingPhone](#xdmdirectmarketingphone) | Direct Marketing Phone Number | Optional | Profile Direct Marketing (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## xdm:directMarketingAddress
### Direct Marketing Address

Direct Marketing postal address.

`xdm:directMarketingAddress`
* is optional
* type: Direct Marketing Address
* defined in this schema

### xdm:directMarketingAddress Type


* [Direct Marketing Address](directmarketing-address.schema.md) – `https://ns.adobe.com/xdm/context/directmarketing-address`





## xdm:directMarketingEmail
### Direct Marketing Email

Direct Marketing email address.

`xdm:directMarketingEmail`
* is optional
* type: Direct Marketing Email Address
* defined in this schema

### xdm:directMarketingEmail Type


* [Direct Marketing Email Address](directmarketing-emailaddress.schema.md) – `https://ns.adobe.com/xdm/context/directmarketing-emailaddress`





## xdm:directMarketingPhone
### Direct Marketing Phone

Direct Marketing phone number.

`xdm:directMarketingPhone`
* is optional
* type: Direct Marketing Phone Number
* defined in this schema

### xdm:directMarketingPhone Type


* [Direct Marketing Phone Number](directmarketing-phonenumber.schema.md) – `https://ns.adobe.com/xdm/context/directmarketing-phonenumber`




