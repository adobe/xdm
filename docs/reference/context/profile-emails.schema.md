
# Profile Emails Schema

```
https://ns.adobe.com/xdm/context/profile-emails
```

Contains the various email types a single profile can contain

| [Abstract](../../abstract.md) | [Extensible](../../extensions.md) | [Status](../../status.md) | [Identifiable](../../id.md) | [Custom Properties](../../extensions.md) | [Additional Properties](../../extensions.md) | Defined In |
|-------------------------------|-----------------------------------|---------------------------|-----------------------------|------------------------------------------|----------------------------------------------|------------|
| Can be instantiated | Yes | Experimental | No | Forbidden | Permitted | [context/profile-emails.schema.json](context/profile-emails.schema.json) |
## Schema Hierarchy

* Profile Emails `https://ns.adobe.com/xdm/context/profile-emails`
  * [Extensibility base schema](../common/extensible.schema.md) `https://ns.adobe.com/xdm/common/extensible`
  * [Email address](emailaddress.schema.md) `https://ns.adobe.com/xdm/context/emailaddress`


## Profile Emails Example
```json
{
  "xdm:personalEmail": {
    "xdm:primary": false,
    "xdm:address": "jsmith@xyzinc.com",
    "xdm:label": "John Smith",
    "xdm:type": "work",
    "xdm:status": "active"
  },
  "xdm:workEmail": {
    "xdm:primary": false,
    "xdm:address": "jsmith@xyzinc.com",
    "xdm:label": "John Smith",
    "xdm:type": "work",
    "xdm:status": "active"
  }
}
```

# Profile Emails Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [xdm:personalEmail](#xdmpersonalemail) | Email address | Optional | Profile Emails (this schema) |
| [xdm:workEmail](#xdmworkemail) | Email address | Optional | Profile Emails (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## xdm:personalEmail
### Personal Email

A personal email address.

`xdm:personalEmail`
* is optional
* type: Email address
* defined in this schema

### xdm:personalEmail Type


* [Email address](emailaddress.schema.md) – `https://ns.adobe.com/xdm/context/emailaddress`





## xdm:workEmail
### Work Email

A work email address.

`xdm:workEmail`
* is optional
* type: Email address
* defined in this schema

### xdm:workEmail Type


* [Email address](emailaddress.schema.md) – `https://ns.adobe.com/xdm/context/emailaddress`




