
# Email Address Schema

```
https://ns.adobe.com/xdm/context/emailaddress
```

A standard email address.

| [Abstract](../../abstract.md) | [Extensible](../../extensions.md) | [Status](../../status.md) | [Identifiable](../../id.md) | [Custom Properties](../../extensions.md) | [Additional Properties](../../extensions.md) | Defined In |
|-------------------------------|-----------------------------------|---------------------------|-----------------------------|------------------------------------------|----------------------------------------------|------------|
| Can be instantiated | Yes | Stabilizing | No | Forbidden | Permitted | [context/emailaddress.schema.json](context/emailaddress.schema.json) |

## Email Address Example
```json
{
  "xdm:primary": false,
  "xdm:address": "jsmith@xyzinc.com",
  "xdm:label": "John Smith",
  "xdm:type": "work",
  "xdm:status": "active"
}
```

# Email Address Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [xdm:address](#xdmaddress) | `string` | Optional | Email Address (this schema) |
| [xdm:label](#xdmlabel) | `string` | Optional | Email Address (this schema) |
| [xdm:primary](#xdmprimary) | `boolean` | Optional | Email Address (this schema) |
| [xdm:status](#xdmstatus) | `string` | Optional | Email Address (this schema) |
| [xdm:statusReason](#xdmstatusreason) | `string` | Optional | Email Address (this schema) |
| [xdm:type](#xdmtype) | `string` | Optional | Email Address (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## xdm:address
### Address

The technical address, e.g 'name@domain.com' as commonly defined in RFC2822 and subsequent standards.

`xdm:address`
* is optional
* type: `string`
* defined in this schema

### xdm:address Type


`string`
* format: `email` – email address (according to [RFC 5322, section 3.4.1](https://tools.ietf.org/html/rfc5322))






## xdm:label
### Label

Additional display information that maybe available, e.g MS Outlook rich address controls display 'John Smith smithjr@company.uk', the 'John Smith' part is data that would be placed in the label.

`xdm:label`
* is optional
* type: `string`
* defined in this schema

### xdm:label Type


`string`






## xdm:primary
### Primary

Primary email indicator.

A Profile can have only one `primary` email address at a given point of time.


`xdm:primary`
* is optional
* type: `boolean`
* defined in this schema

### xdm:primary Type


`boolean`





## xdm:status
### Status

An indication as to the ability to use the email address.

`xdm:status`
* is optional
* type: `string`
* defined in this schema

### xdm:status Type


`string`



### xdm:status Known Values
| Value | Description |
|-------|-------------|
| `active` | Active |
| `incomplete` | Incomplete |
| `pending_verification` | Pending Verification |
| `blacklisted` | Blacklisted |
| `blocked` | Blocked |




## xdm:statusReason
### Status Reason

A description of the current status.

`xdm:statusReason`
* is optional
* type: `string`
* defined in this schema

### xdm:statusReason Type


`string`






## xdm:type
### Type

The way the account relates to the person. e.g 'work' or 'personal'

`xdm:type`
* is optional
* type: `string`
* defined in this schema

### xdm:type Type


`string`



### xdm:type Known Values
| Value | Description |
|-------|-------------|
| `unknown` | Unknown |
| `personal` | Personal |
| `work` | Work |
| `education` | Education |



