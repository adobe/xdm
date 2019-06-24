
# Direct Marketing Email Address Schema

```
https://ns.adobe.com/xdm/context/directmarketing-emailaddress
```

Direct marketing email address.

| [Abstract](../../abstract.md) | [Extensible](../../extensions.md) | [Status](../../status.md) | [Identifiable](../../id.md) | [Custom Properties](../../extensions.md) | [Additional Properties](../../extensions.md) | Defined In |
|-------------------------------|-----------------------------------|---------------------------|-----------------------------|------------------------------------------|----------------------------------------------|------------|
| Can be instantiated | Yes | Experimental | No | Forbidden | Permitted | [context/directmarketing-emailaddress.schema.json](context/directmarketing-emailaddress.schema.json) |
## Schema Hierarchy

* Direct Marketing Email Address `https://ns.adobe.com/xdm/context/directmarketing-emailaddress`
  * [Email Address](emailaddress.schema.md) `https://ns.adobe.com/xdm/context/emailaddress`


## Direct Marketing Email Address Example
```json
{
  "xdm:primary": false,
  "xdm:address": "jsmith@xyzinc.com",
  "xdm:label": "John Smith",
  "xdm:type": "work",
  "xdm:status": "active",
  "xdm:errorCount": 0
}
```

# Direct Marketing Email Address Properties

| Property | Type | Required | Default | Defined by |
|----------|------|----------|---------|------------|
| [xdm:address](#xdmaddress) | `string` | Optional |  | [Email Address](emailaddress.schema.md#xdmaddress) |
| [xdm:errorCount](#xdmerrorcount) | `integer` | Optional |  | Direct Marketing Email Address (this schema) |
| [xdm:label](#xdmlabel) | `string` | Optional |  | [Email Address](emailaddress.schema.md#xdmlabel) |
| [xdm:primary](#xdmprimary) | `boolean` | Optional |  | [Email Address](emailaddress.schema.md#xdmprimary) |
| [xdm:quality](#xdmquality) | `string` | Optional |  | Direct Marketing Email Address (this schema) |
| [xdm:status](#xdmstatus) | `string` | Optional | `"active"` | [Email Address](emailaddress.schema.md#xdmstatus) |
| [xdm:statusReason](#xdmstatusreason) | `string` | Optional |  | [Email Address](emailaddress.schema.md#xdmstatusreason) |
| [xdm:type](#xdmtype) | `string` | Optional |  | [Email Address](emailaddress.schema.md#xdmtype) |
| `*` | any | Additional | this schema *allows* additional properties |

## xdm:address
### Address

The technical address, e.g 'name@domain.com' as commonly defined in RFC2822 and subsequent standards.

`xdm:address`
* is optional
* type: `string`
* defined in [Email Address](emailaddress.schema.md#xdmaddress)

### xdm:address Type


`string`
* format: `email` – email address (according to [RFC 5322, section 3.4.1](https://tools.ietf.org/html/rfc5322))






## xdm:errorCount
### Error Count

Number of consecutive errors when sending to this email address.

`xdm:errorCount`
* is optional
* type: `integer`
* defined in this schema

### xdm:errorCount Type


`integer`






## xdm:label
### Label

Additional display information that maybe available, e.g MS Outlook rich address controls display 'John Smith smithjr@company.uk', the 'John Smith' part is data that would be placed in the label.

`xdm:label`
* is optional
* type: `string`
* defined in [Email Address](emailaddress.schema.md#xdmlabel)

### xdm:label Type


`string`






## xdm:primary
### Primary

Primary email indicator.

A Profile can have only one `primary` email address at a given point of time.


`xdm:primary`
* is optional
* type: `boolean`
* defined in [Email Address](emailaddress.schema.md#xdmprimary)

### xdm:primary Type


`boolean`





## xdm:quality
### Quality

Quality rating.

`xdm:quality`
* is optional
* type: `string`
* defined in this schema

### xdm:quality Type


`string`






## xdm:status
### Status

An indication as to the ability to use the email address.

`xdm:status`
* is optional
* type: `string`
* default: `"active"`
* defined in [Email Address](emailaddress.schema.md#xdmstatus)

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
* defined in [Email Address](emailaddress.schema.md#xdmstatusreason)

### xdm:statusReason Type


`string`






## xdm:type
### Type

The way the account relates to the person. e.g 'work' or 'personal'

`xdm:type`
* is optional
* type: `string`
* defined in [Email Address](emailaddress.schema.md#xdmtype)

### xdm:type Type


`string`



### xdm:type Known Values
| Value | Description |
|-------|-------------|
| `unknown` | Unknown |
| `personal` | Personal |
| `work` | Work |
| `education` | Education |



