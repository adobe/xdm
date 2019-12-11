
# Profile direct marketing Schema

```
https://ns.adobe.com/xdm/context/profile-directmarketing
```

This mixin is used to capture information regarding addresses, emails, and phone numbers to be used for direct marketing activities.

| [Abstract](../../abstract.md) | [Extensible](../../extensions.md) | [Status](../../status.md) | [Identifiable](../../id.md) | [Custom Properties](../../extensions.md) | [Additional Properties](../../extensions.md) | Defined In |
|-------------------------------|-----------------------------------|---------------------------|-----------------------------|------------------------------------------|----------------------------------------------|------------|
| Can be instantiated | Yes | Experimental | No | Forbidden | Permitted | [context/profile-directmarketing.schema.json](context/profile-directmarketing.schema.json) |
## Schema Hierarchy

* Profile direct marketing `https://ns.adobe.com/xdm/context/profile-directmarketing`
  * [Extensibility base schema](../common/extensible.schema.md) `https://ns.adobe.com/xdm/common/extensible`
  * [Direct marketing postal address](directmarketing-address.schema.md) `https://ns.adobe.com/xdm/context/directmarketing-address`
  * [Direct marketing email address](directmarketing-emailaddress.schema.md) `https://ns.adobe.com/xdm/context/directmarketing-emailaddress`
  * [Direct marketing phone number](directmarketing-phonenumber.schema.md) `https://ns.adobe.com/xdm/context/directmarketing-phonenumber`


## Profile direct marketing Example
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

# Profile direct marketing Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [xdm:directMarketingAddress](#xdmdirectmarketingaddress) | Direct marketing postal address | Optional | Profile direct marketing (this schema) |
| [xdm:directMarketingEmail](#xdmdirectmarketingemail) | Direct marketing email address | Optional | Profile direct marketing (this schema) |
| [xdm:directMarketingPhone](#xdmdirectmarketingphone) | Direct marketing phone number | Optional | Profile direct marketing (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## xdm:directMarketingAddress
### Direct marketing address

Direct marketing postal address.

`xdm:directMarketingAddress`
* is optional
* type: Direct marketing postal address
* defined in this schema

### xdm:directMarketingAddress Type


* [Direct marketing postal address](directmarketing-address.schema.md) – `https://ns.adobe.com/xdm/context/directmarketing-address`





## xdm:directMarketingEmail
### Direct marketing email

Direct marketing email address.

`xdm:directMarketingEmail`
* is optional
* type: Direct marketing email address
* defined in this schema

### xdm:directMarketingEmail Type


* [Direct marketing email address](directmarketing-emailaddress.schema.md) – `https://ns.adobe.com/xdm/context/directmarketing-emailaddress`





## xdm:directMarketingPhone
### Direct marketing phone

Direct marketing phone number.

`xdm:directMarketingPhone`
* is optional
* type: Direct marketing phone number
* defined in this schema

### xdm:directMarketingPhone Type


* [Direct marketing phone number](directmarketing-phonenumber.schema.md) – `https://ns.adobe.com/xdm/context/directmarketing-phonenumber`




