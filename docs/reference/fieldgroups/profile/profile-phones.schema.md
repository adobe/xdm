
# Phone Number Details Schema

```
https://ns.adobe.com/xdm/context/profile-phones
```

Phone number such as fax, mobile, home, and work.

| [Abstract](../../../abstract.md) | [Extensible](../../../extensions.md) | [Status](../../../status.md) | [Identifiable](../../../id.md) | [Custom Properties](../../../extensions.md) | [Additional Properties](../../../extensions.md) | Defined In |
|----------------------------------|--------------------------------------|------------------------------|--------------------------------|---------------------------------------------|-------------------------------------------------|------------|
| Can be instantiated | Yes | Experimental | No | Forbidden | Permitted | [fieldgroups/profile/profile-phones.schema.json](fieldgroups/profile/profile-phones.schema.json) |
## Schema Hierarchy

* Phone Number Details `https://ns.adobe.com/xdm/context/profile-phones`
  * [Extensibility base schema](../../datatypes/extensible.schema.md) `https://ns.adobe.com/xdm/common/extensible`
  * [Phone number](../../datatypes/demographic/phonenumber.schema.md) `https://ns.adobe.com/xdm/context/phonenumber`


## Phone Number Details Example
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

# Phone Number Details Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [xdm:faxPhone](#xdmfaxphone) | Phone number | Optional | Phone Number Details (this schema) |
| [xdm:homePhone](#xdmhomephone) | Phone number | Optional | Phone Number Details (this schema) |
| [xdm:mobilePhone](#xdmmobilephone) | Phone number | Optional | Phone Number Details (this schema) |
| [xdm:workPhone](#xdmworkphone) | Phone number | Optional | Phone Number Details (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## xdm:faxPhone
### Fax Phone

Fax phone number.

`xdm:faxPhone`
* is optional
* type: Phone number
* defined in this schema

### xdm:faxPhone Type


* [Phone number](../../datatypes/demographic/phonenumber.schema.md) – `https://ns.adobe.com/xdm/context/phonenumber`





## xdm:homePhone
### Home Phone

Home phone number.

`xdm:homePhone`
* is optional
* type: Phone number
* defined in this schema

### xdm:homePhone Type


* [Phone number](../../datatypes/demographic/phonenumber.schema.md) – `https://ns.adobe.com/xdm/context/phonenumber`





## xdm:mobilePhone
### Mobile Phone

Mobile phone number.

`xdm:mobilePhone`
* is optional
* type: Phone number
* defined in this schema

### xdm:mobilePhone Type


* [Phone number](../../datatypes/demographic/phonenumber.schema.md) – `https://ns.adobe.com/xdm/context/phonenumber`





## xdm:workPhone
### Work Phone

Work phone number.

`xdm:workPhone`
* is optional
* type: Phone number
* defined in this schema

### xdm:workPhone Type


* [Phone number](../../datatypes/demographic/phonenumber.schema.md) – `https://ns.adobe.com/xdm/context/phonenumber`




