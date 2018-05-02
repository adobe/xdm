
# Phone Number Schema

```
https://ns.adobe.com/xdm/context/phonenumber
```

Information that allows the phone calling of a person. Typically an alphanumeric number, 1-222-333 4444 in North America, but can have a wide range of formats.

| Abstract | Extensible | Status | Identifiable | Custom Properties | Additional Properties | Defined In |
|----------|------------|--------|--------------|-------------------|-----------------------|------------|
| Can be instantiated | Yes | Stabilizing | No | Forbidden | Permitted | [context/phonenumber.schema.json](context/phonenumber.schema.json) |

## Phone Number Example
```json
{
  "xdm:primary": true,
  "xdm:number": "1-408-888-8888",
  "xdm:status": "active"
}
```

# Phone Number Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [xdm:extension](#xdmextension) | `string` | Optional | Phone Number (this schema) |
| [xdm:number](#xdmnumber) | `string` | Optional | Phone Number (this schema) |
| [xdm:primary](#xdmprimary) | `boolean` | Optional | Phone Number (this schema) |
| [xdm:status](#xdmstatus) | `string` | Optional | Phone Number (this schema) |
| [xdm:statusReason](#xdmstatusreason) | `string` | Optional | Phone Number (this schema) |
| [xdm:validity](#xdmvalidity) | `string` | Optional | Phone Number (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## xdm:extension
### Extension

The internal dialing number used to call from a private exchange, operator or switchboard.

`xdm:extension`
* is optional
* type: `string`
* defined in this schema

### xdm:extension Type


`string`






## xdm:number
### Number

The phone number. Note the phone number is a string and may include meaningful characters such as brackets (), hyphens - or characters to indicate sub dialing identifiers like extensions x. E.g 1-353(0)18391111 or +613 9403600x1234.

`xdm:number`
* is optional
* type: `string`
* defined in this schema

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
* defined in this schema

### xdm:primary Type


`boolean`





## xdm:status
### Status

An indication as to the ability to use the phone number.

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






## xdm:validity
### Validity

A level of technical correctness of the phone number.

`xdm:validity`
* is optional
* type: `string`
* defined in this schema

### xdm:validity Type


`string`



### xdm:validity Known Values
| Value | Description |
|-------|-------------|
| `consistent` | Consistent |
| `inconsistent` | Inconsistent |
| `incomplete` | Incomplete |
| `successfullyUsed` | Successfully Used |



