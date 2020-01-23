
# Direct marketing phone number Schema

```
https://ns.adobe.com/xdm/context/directmarketing-phonenumber
```

Phone number used to contact a user.

| [Abstract](../../abstract.md) | [Extensible](../../extensions.md) | [Status](../../status.md) | [Identifiable](../../id.md) | [Custom Properties](../../extensions.md) | [Additional Properties](../../extensions.md) | Defined In |
|-------------------------------|-----------------------------------|---------------------------|-----------------------------|------------------------------------------|----------------------------------------------|------------|
| Can be instantiated | Yes | Experimental | No | Forbidden | Permitted | [context/directmarketing-phonenumber.schema.json](context/directmarketing-phonenumber.schema.json) |
## Schema Hierarchy

* Direct marketing phone number `https://ns.adobe.com/xdm/context/directmarketing-phonenumber`
  * [Phone number](phonenumber.schema.md) `https://ns.adobe.com/xdm/context/phonenumber`


## Direct marketing phone number Example
```json
{
  "xdm:primary": true,
  "xdm:number": "1-408-888-8888",
  "xdm:status": "active",
  "xdm:errorCount": 0
}
```

# Direct marketing phone number Properties

| Property | Type | Required | Default | Defined by |
|----------|------|----------|---------|------------|
| [xdm:errorCount](#xdmerrorcount) | `integer` | Optional |  | Direct marketing phone number (this schema) |
| [xdm:extension](#xdmextension) | `string` | Optional |  | [Phone number](phonenumber.schema.md#xdmextension) |
| [xdm:number](#xdmnumber) | `string` | Optional |  | [Phone number](phonenumber.schema.md#xdmnumber) |
| [xdm:primary](#xdmprimary) | `boolean` | Optional |  | [Phone number](phonenumber.schema.md#xdmprimary) |
| [xdm:quality](#xdmquality) | `string` | Optional |  | Direct marketing phone number (this schema) |
| [xdm:status](#xdmstatus) | `string` | Optional | `"active"` | [Phone number](phonenumber.schema.md#xdmstatus) |
| [xdm:statusReason](#xdmstatusreason) | `string` | Optional |  | [Phone number](phonenumber.schema.md#xdmstatusreason) |
| [xdm:validity](#xdmvalidity) | `string` | Optional |  | [Phone number](phonenumber.schema.md#xdmvalidity) |
| `*` | any | Additional | this schema *allows* additional properties |

## xdm:errorCount
### Error count

Number of consecutive errors when calling this phone number.

`xdm:errorCount`
* is optional
* type: `integer`
* defined in this schema

### xdm:errorCount Type


`integer`






## xdm:extension
### Extension

The internal dialing number used to call from a private exchange, operator, or switchboard.

`xdm:extension`
* is optional
* type: `string`
* defined in [Phone number](phonenumber.schema.md#xdmextension)

### xdm:extension Type


`string`






## xdm:number
### Number

The phone number. Note the phone number is a string and may include meaningful characters such as brackets '()', hyphens '-', or characters to indicate sub-dialing identifiers like extensions 'x' for example,  1-353(0)18391111 or +613 9403600x1234.

`xdm:number`
* is optional
* type: `string`
* defined in [Phone number](phonenumber.schema.md#xdmnumber)

### xdm:number Type


`string`






## xdm:primary
### Primary

Primary phone number indicator. Unlike address or email address, there can be multiple primary phone numbers; one per communication channel. The communication channel is defined by the type: `textMessaging`, `mobile`, `phone`, `home`, `work`, `unknown`, and `fax`.

`xdm:primary`
* is optional
* type: `boolean`
* defined in [Phone number](phonenumber.schema.md#xdmprimary)

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

An indication as to the ability to use the phone number.

`xdm:status`
* is optional
* type: `string`
* default: `"active"`
* defined in [Phone number](phonenumber.schema.md#xdmstatus)

### xdm:status Type


`string`



### xdm:status Known Values
| Value | Description |
|-------|-------------|
| `active` | Active |
| `incomplete` | Incomplete |
| `blacklisted` | Blacklisted |
| `blocked` | Blocked |




## xdm:statusReason
### Status reason

A description of the current status.

`xdm:statusReason`
* is optional
* type: `string`
* defined in [Phone number](phonenumber.schema.md#xdmstatusreason)

### xdm:statusReason Type


`string`






## xdm:validity
### Validity

A level of technical correctness of the phone number.

`xdm:validity`
* is optional
* type: `string`
* defined in [Phone number](phonenumber.schema.md#xdmvalidity)

### xdm:validity Type


`string`



### xdm:validity Known Values
| Value | Description |
|-------|-------------|
| `consistent` | Consistent |
| `inconsistent` | Inconsistent |
| `incomplete` | Incomplete |
| `successfullyUsed` | Successfully used |



