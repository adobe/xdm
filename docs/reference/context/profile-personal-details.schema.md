
# Profile Personal Details Schema

```
https://ns.adobe.com/xdm/context/profile-personal-details
```

Personal related end user profile details.

| [Abstract](../../abstract.md) | [Extensible](../../extensions.md) | [Status](../../status.md) | [Identifiable](../../id.md) | [Custom Properties](../../extensions.md) | [Additional Properties](../../extensions.md) | Defined In |
|-------------------------------|-----------------------------------|---------------------------|-----------------------------|------------------------------------------|----------------------------------------------|------------|
| Can be instantiated | Yes | Experimental | No | Forbidden | Permitted | [context/profile-personal-details.schema.json](context/profile-personal-details.schema.json) |
## Schema Hierarchy

* Profile Personal Details `https://ns.adobe.com/xdm/context/profile-personal-details`
  * [Extensibility base schema](../common/extensible.schema.md) `https://ns.adobe.com/xdm/common/extensible`
  * [Address](../common/address.schema.md) `https://ns.adobe.com/xdm/common/address`
  * [Email Address](emailaddress.schema.md) `https://ns.adobe.com/xdm/context/emailaddress`
  * [Phone Number](phonenumber.schema.md) `https://ns.adobe.com/xdm/context/phonenumber`


## Profile Personal Details Example
```json
{
  "xdm:mobilePhone": {
    "xdm:primary": true,
    "xdm:number": "1-408-888-8888",
    "xdm:status": "active"
  }
}
```

# Profile Personal Details Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [xdm:faxPhone](#xdmfaxphone) | Phone Number | Optional | Profile Personal Details (this schema) |
| [xdm:homeAddress](#xdmhomeaddress) | Address | Optional | Profile Personal Details (this schema) |
| [xdm:homePhone](#xdmhomephone) | Phone Number | Optional | Profile Personal Details (this schema) |
| [xdm:mobilePhone](#xdmmobilephone) | Phone Number | Optional | Profile Personal Details (this schema) |
| [xdm:personalEmail](#xdmpersonalemail) | Email Address | Optional | Profile Personal Details (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## xdm:faxPhone
### Fax Phone

Fax phone number.

`xdm:faxPhone`
* is optional
* type: Phone Number
* defined in this schema

### xdm:faxPhone Type


* [Phone Number](phonenumber.schema.md) – `https://ns.adobe.com/xdm/context/phonenumber`





## xdm:homeAddress
### Home Address

A home postal address.

`xdm:homeAddress`
* is optional
* type: Address
* defined in this schema

### xdm:homeAddress Type


* [Address](../common/address.schema.md) – `https://ns.adobe.com/xdm/common/address`





## xdm:homePhone
### Home Phone

Home phone number.

`xdm:homePhone`
* is optional
* type: Phone Number
* defined in this schema

### xdm:homePhone Type


* [Phone Number](phonenumber.schema.md) – `https://ns.adobe.com/xdm/context/phonenumber`





## xdm:mobilePhone
### Mobile Phone

Mobile phone number.

`xdm:mobilePhone`
* is optional
* type: Phone Number
* defined in this schema

### xdm:mobilePhone Type


* [Phone Number](phonenumber.schema.md) – `https://ns.adobe.com/xdm/context/phonenumber`





## xdm:personalEmail
### Personal Email

A personal email address.

`xdm:personalEmail`
* is optional
* type: Email Address
* defined in this schema

### xdm:personalEmail Type


* [Email Address](emailaddress.schema.md) – `https://ns.adobe.com/xdm/context/emailaddress`




