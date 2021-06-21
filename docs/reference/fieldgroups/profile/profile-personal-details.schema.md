
# Personal Contact Details Schema

```
https://ns.adobe.com/xdm/context/profile-personal-details
```

Contact information for an individual person such as home address, phone number, fax, and email.

| [Abstract](../../../abstract.md) | [Extensible](../../../extensions.md) | [Status](../../../status.md) | [Identifiable](../../../id.md) | [Custom Properties](../../../extensions.md) | [Additional Properties](../../../extensions.md) | Defined In |
|----------------------------------|--------------------------------------|------------------------------|--------------------------------|---------------------------------------------|-------------------------------------------------|------------|
| Can be instantiated | Yes | Stable | No | Forbidden | Permitted | [fieldgroups/profile/profile-personal-details.schema.json](fieldgroups/profile/profile-personal-details.schema.json) |
## Schema Hierarchy

* Personal Contact Details `https://ns.adobe.com/xdm/context/profile-personal-details`
  * [Extensibility base schema](../../datatypes/extensible.schema.md) `https://ns.adobe.com/xdm/common/extensible`
  * [Postal address](../../datatypes/demographic/address.schema.md) `https://ns.adobe.com/xdm/common/address`
  * [Email address](../../datatypes/demographic/emailaddress.schema.md) `https://ns.adobe.com/xdm/context/emailaddress`
  * [Phone number](../../datatypes/demographic/phonenumber.schema.md) `https://ns.adobe.com/xdm/context/phonenumber`


## Personal Contact Details Example
```json
{
  "xdm:mobilePhone": {
    "xdm:primary": true,
    "xdm:number": "1-408-888-8888",
    "xdm:status": "active"
  }
}
```

# Personal Contact Details Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [xdm:faxPhone](#xdmfaxphone) | Phone number | Optional | Personal Contact Details (this schema) |
| [xdm:homeAddress](#xdmhomeaddress) | Postal address | Optional | Personal Contact Details (this schema) |
| [xdm:homePhone](#xdmhomephone) | Phone number | Optional | Personal Contact Details (this schema) |
| [xdm:mobilePhone](#xdmmobilephone) | Phone number | Optional | Personal Contact Details (this schema) |
| [xdm:personalEmail](#xdmpersonalemail) | Email address | Optional | Personal Contact Details (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## xdm:faxPhone
### Fax phone

Fax phone number.

`xdm:faxPhone`
* is optional
* type: Phone number
* defined in this schema

### xdm:faxPhone Type


* [Phone number](../../datatypes/demographic/phonenumber.schema.md) – `https://ns.adobe.com/xdm/context/phonenumber`





## xdm:homeAddress
### Home address

A home postal address.

`xdm:homeAddress`
* is optional
* type: Postal address
* defined in this schema

### xdm:homeAddress Type


* [Postal address](../../datatypes/demographic/address.schema.md) – `https://ns.adobe.com/xdm/common/address`





## xdm:homePhone
### Home phone

Home phone number.

`xdm:homePhone`
* is optional
* type: Phone number
* defined in this schema

### xdm:homePhone Type


* [Phone number](../../datatypes/demographic/phonenumber.schema.md) – `https://ns.adobe.com/xdm/context/phonenumber`





## xdm:mobilePhone
### Mobile phone

Mobile phone number.

`xdm:mobilePhone`
* is optional
* type: Phone number
* defined in this schema

### xdm:mobilePhone Type


* [Phone number](../../datatypes/demographic/phonenumber.schema.md) – `https://ns.adobe.com/xdm/context/phonenumber`





## xdm:personalEmail
### Personal email

A personal email address.

`xdm:personalEmail`
* is optional
* type: Email address
* defined in this schema

### xdm:personalEmail Type


* [Email address](../../datatypes/demographic/emailaddress.schema.md) – `https://ns.adobe.com/xdm/context/emailaddress`




