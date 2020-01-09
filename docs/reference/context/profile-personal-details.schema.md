
# Profile personal details Schema

```
https://ns.adobe.com/xdm/context/profile-personal-details
```

This mixin is used to capture information regarding home address, home phone, mobile phone, fax, and personal email.

| [Abstract](../../abstract.md) | [Extensible](../../extensions.md) | [Status](../../status.md) | [Identifiable](../../id.md) | [Custom Properties](../../extensions.md) | [Additional Properties](../../extensions.md) | Defined In |
|-------------------------------|-----------------------------------|---------------------------|-----------------------------|------------------------------------------|----------------------------------------------|------------|
| Can be instantiated | Yes | Experimental | No | Forbidden | Permitted | [context/profile-personal-details.schema.json](context/profile-personal-details.schema.json) |
## Schema Hierarchy

* Profile personal details `https://ns.adobe.com/xdm/context/profile-personal-details`
  * [Extensibility base schema](../common/extensible.schema.md) `https://ns.adobe.com/xdm/common/extensible`
  * [Postal address](../common/address.schema.md) `https://ns.adobe.com/xdm/common/address`
  * [Email address](emailaddress.schema.md) `https://ns.adobe.com/xdm/context/emailaddress`
  * [Phone number](phonenumber.schema.md) `https://ns.adobe.com/xdm/context/phonenumber`


## Profile personal details Example
```json
{
  "xdm:mobilePhone": {
    "xdm:primary": true,
    "xdm:number": "1-408-888-8888",
    "xdm:status": "active"
  }
}
```

# Profile personal details Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [xdm:faxPhone](#xdmfaxphone) | Phone number | Optional | Profile personal details (this schema) |
| [xdm:homeAddress](#xdmhomeaddress) | Postal address | Optional | Profile personal details (this schema) |
| [xdm:homePhone](#xdmhomephone) | Phone number | Optional | Profile personal details (this schema) |
| [xdm:mobilePhone](#xdmmobilephone) | Phone number | Optional | Profile personal details (this schema) |
| [xdm:personalEmail](#xdmpersonalemail) | Email address | Optional | Profile personal details (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## xdm:faxPhone
### Fax phone

Fax phone number.

`xdm:faxPhone`
* is optional
* type: Phone number
* defined in this schema

### xdm:faxPhone Type


* [Phone number](phonenumber.schema.md) – `https://ns.adobe.com/xdm/context/phonenumber`





## xdm:homeAddress
### Home address

A home postal address.

`xdm:homeAddress`
* is optional
* type: Postal address
* defined in this schema

### xdm:homeAddress Type


* [Postal address](../common/address.schema.md) – `https://ns.adobe.com/xdm/common/address`





## xdm:homePhone
### Home phone

Home phone number.

`xdm:homePhone`
* is optional
* type: Phone number
* defined in this schema

### xdm:homePhone Type


* [Phone number](phonenumber.schema.md) – `https://ns.adobe.com/xdm/context/phonenumber`





## xdm:mobilePhone
### Mobile phone

Mobile phone number.

`xdm:mobilePhone`
* is optional
* type: Phone number
* defined in this schema

### xdm:mobilePhone Type


* [Phone number](phonenumber.schema.md) – `https://ns.adobe.com/xdm/context/phonenumber`





## xdm:personalEmail
### Personal email

A personal email address.

`xdm:personalEmail`
* is optional
* type: Email address
* defined in this schema

### xdm:personalEmail Type


* [Email address](emailaddress.schema.md) – `https://ns.adobe.com/xdm/context/emailaddress`




