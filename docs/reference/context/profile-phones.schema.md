
# Profile Phones Schema

```
https://ns.adobe.com/xdm/context/profile-phones
```

Contains the various phone numbers a single profile can contain

| [Abstract](../../abstract.md) | [Extensible](../../extensions.md) | [Status](../../status.md) | [Identifiable](../../id.md) | [Custom Properties](../../extensions.md) | [Additional Properties](../../extensions.md) | Defined In |
|-------------------------------|-----------------------------------|---------------------------|-----------------------------|------------------------------------------|----------------------------------------------|------------|
| Can be instantiated | Yes | Experimental | No | Forbidden | Permitted | [context/profile-phones.schema.json](context/profile-phones.schema.json) |
## Schema Hierarchy

* Profile Phones `https://ns.adobe.com/xdm/context/profile-phones`
  * [Extensibility base schema](../common/extensible.schema.md) `https://ns.adobe.com/xdm/common/extensible`
  * [Phone number](phonenumber.schema.md) `https://ns.adobe.com/xdm/context/phonenumber`


## Profile Phones Example
```json
{
  "xdm:homePhone": {
    "xdm:primary": true,
    "xdm:number": "1-408-888-8888",
    "xdm:status": "active"
  },
  "xdm:mobilePhone": {
    "xdm:primary": true,
    "xdm:number": "1-408-888-8888",
    "xdm:status": "active"
  },
  "xdm:workPhone": {
    "xdm:primary": true,
    "xdm:number": "1-408-888-8888",
    "xdm:status": "active"
  },
  "xdm:faxPhone": {
    "xdm:primary": true,
    "xdm:number": "1-408-888-8888",
    "xdm:status": "active"
  }
}
```

# Profile Phones Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [xdm:faxPhone](#xdmfaxphone) | Phone number | Optional | Profile Phones (this schema) |
| [xdm:homePhone](#xdmhomephone) | Phone number | Optional | Profile Phones (this schema) |
| [xdm:mobilePhone](#xdmmobilephone) | Phone number | Optional | Profile Phones (this schema) |
| [xdm:workPhone](#xdmworkphone) | Phone number | Optional | Profile Phones (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## xdm:faxPhone
### Fax Phone

Fax phone number.

`xdm:faxPhone`
* is optional
* type: Phone number
* defined in this schema

### xdm:faxPhone Type


* [Phone number](phonenumber.schema.md) – `https://ns.adobe.com/xdm/context/phonenumber`





## xdm:homePhone
### Home Phone

Home phone number.

`xdm:homePhone`
* is optional
* type: Phone number
* defined in this schema

### xdm:homePhone Type


* [Phone number](phonenumber.schema.md) – `https://ns.adobe.com/xdm/context/phonenumber`





## xdm:mobilePhone
### Mobile Phone

Mobile phone number.

`xdm:mobilePhone`
* is optional
* type: Phone number
* defined in this schema

### xdm:mobilePhone Type


* [Phone number](phonenumber.schema.md) – `https://ns.adobe.com/xdm/context/phonenumber`





## xdm:workPhone
### Work Phone

Work phone number.

`xdm:workPhone`
* is optional
* type: Phone number
* defined in this schema

### xdm:workPhone Type


* [Phone number](phonenumber.schema.md) – `https://ns.adobe.com/xdm/context/phonenumber`




