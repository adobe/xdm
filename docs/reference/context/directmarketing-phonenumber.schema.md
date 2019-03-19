
# Direct Marketing Phone Number Schema

```
https://ns.adobe.com/xdm/context/directmarketing-phonenumber
```

Direct Marketing Phone Number.

| [Abstract](../../abstract.md) | [Extensible](../../extensions.md) | [Status](../../status.md) | [Identifiable](../../id.md) | [Custom Properties](../../extensions.md) | [Additional Properties](../../extensions.md) | Defined In |
|-------------------------------|-----------------------------------|---------------------------|-----------------------------|------------------------------------------|----------------------------------------------|------------|
| Can be instantiated | Yes | Experimental | No | Forbidden | Permitted | [context/directmarketing-phonenumber.schema.json](context/directmarketing-phonenumber.schema.json) |
## Schema Hierarchy

* Direct Marketing Phone Number `https://ns.adobe.com/xdm/context/directmarketing-phonenumber`
  * [Phone Number](phonenumber.schema.md) `https://ns.adobe.com/xdm/context/phonenumber`


## Direct Marketing Phone Number Example
```json
{
  "xdm:primary": true,
  "xdm:number": "1-408-888-8888",
  "xdm:status": "active",
  "xdm:errorCount": 0
}
```

# Direct Marketing Phone Number Properties

| Property | Type | Required | Default | Defined by |
|----------|------|----------|---------|------------|
| [xdm:errorCount](#xdmerrorcount) | `integer` | Optional |  | Direct Marketing Phone Number (this schema) |
| [xdm:extension](#xdmextension) | `string` | Optional |  | [Phone Number](phonenumber.schema.md#xdmextension) |
| [xdm:number](#xdmnumber) | `string` | Optional |  | [Phone Number](phonenumber.schema.md#xdmnumber) |
| [xdm:primary](#xdmprimary) | `boolean` | Optional |  | [Phone Number](phonenumber.schema.md#xdmprimary) |
| [xdm:quality](#xdmquality) | `string` | Optional |  | Direct Marketing Phone Number (this schema) |
| [xdm:status](#xdmstatus) | `string` | Optional | `"active"` | [Phone Number](phonenumber.schema.md#xdmstatus) |
| [xdm:statusReason](#xdmstatusreason) | `string` | Optional |  | [Phone Number](phonenumber.schema.md#xdmstatusreason) |
| [xdm:validity](#xdmvalidity) | `string` | Optional |  | [Phone Number](phonenumber.schema.md#xdmvalidity) |
| `*` | any | Additional | this schema *allows* additional properties |

## xdm:errorCount
### Error Count

Number of consecutive errors when calling this phone number.

`xdm:errorCount`
* is optional
* type: `integer`
* defined in this schema

### xdm:errorCount Type


`integer`






## xdm:extension
### Extension

The internal dialing number used to call from a private exchange, operator or switchboard.

`xdm:extension`
* is optional
* type: `string`
* defined in [Phone Number](phonenumber.schema.md#xdmextension)

### xdm:extension Type


`string`






## xdm:number
### Number

The phone number. Note the phone number is a string and may include meaningful characters such as brackets (), hyphens - or characters to indicate sub dialing identifiers like extensions x. E.g 1-353(0)18391111 or +613 9403600x1234.

`xdm:number`
* is optional
* type: `string`
* defined in [Phone Number](phonenumber.schema.md#xdmnumber)

### xdm:number Type


`string`






## xdm:primary
### Primary

Primary phone number indicator.

Unlike for Address or EmailAddress, there can be multiple primary phone numbers; one per communication channel.
The communication channel is defined by the type:

* `textMessaging`: type = `mobile`
* `phone`: type = `home` | `work` | `unknown`
* `fax`: type = `fax`


`xdm:primary`
* is optional
* type: `boolean`
* defined in [Phone Number](phonenumber.schema.md#xdmprimary)

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
* defined in [Phone Number](phonenumber.schema.md#xdmstatus)

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
### Status Reason

A description of the current status.

`xdm:statusReason`
* is optional
* type: `string`
* defined in [Phone Number](phonenumber.schema.md#xdmstatusreason)

### xdm:statusReason Type


`string`






## xdm:validity
### Validity

A level of technical correctness of the phone number.

`xdm:validity`
* is optional
* type: `string`
* defined in [Phone Number](phonenumber.schema.md#xdmvalidity)

### xdm:validity Type


`string`



### xdm:validity Known Values
| Value | Description |
|-------|-------------|
| `consistent` | Consistent |
| `inconsistent` | Inconsistent |
| `incomplete` | Incomplete |
| `successfullyUsed` | Successfully Used |



