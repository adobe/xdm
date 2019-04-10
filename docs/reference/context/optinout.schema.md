
# OptInOut Schema

```
https://ns.adobe.com/xdm/context/optinout
```

Describes a users' communication preferences by channel. For each channel individually, which is a property of this object, a user's preference (opt-in, opt-out, pending) can be recorded. In addition, a global override opt-out is possible. Each property of this schema must be a valid and known URI for an XDM Channel.

| [Abstract](../../abstract.md) | [Extensible](../../extensions.md) | [Status](../../status.md) | [Identifiable](../../id.md) | [Custom Properties](../../extensions.md) | [Additional Properties](../../extensions.md) | Defined In |
|-------------------------------|-----------------------------------|---------------------------|-----------------------------|------------------------------------------|----------------------------------------------|------------|
| Can be instantiated | Yes | Experimental | No | Forbidden | Permitted | [context/optinout.schema.json](context/optinout.schema.json) |
## Schema Hierarchy

* OptInOut `https://ns.adobe.com/xdm/context/optinout`
  * [Extensibility base schema](../common/extensible.schema.md) `https://ns.adobe.com/xdm/common/extensible`


## OptInOut Example
```json
{
  "https://ns.adobe.com/xdm/channels/email": "pending",
  "https://ns.adobe.com/xdm/channels/phone": "out",
  "https://ns.adobe.com/xdm/channels/sms": "in",
  "https://ns.adobe.com/xdm/channels/fax": "not_provided",
  "https://ns.adobe.com/xdm/channels/direct-mail": "not_provided",
  "https://ns.adobe.com/xdm/channels/apns": "not_provided",
  "xdm:globalOptout": false
}
```

# OptInOut Properties

| Property | Type | Required | Default | Defined by |
|----------|------|----------|---------|------------|
| [https://ns.adobe.com/xdm/channels/adm](#httpsnsadobecomxdmchannelsadm) | `enum` | Optional | `"not_provided"` | OptInOut (this schema) |
| [https://ns.adobe.com/xdm/channels/apns](#httpsnsadobecomxdmchannelsapns) | `enum` | Optional | `"not_provided"` | OptInOut (this schema) |
| [https://ns.adobe.com/xdm/channels/baidu](#httpsnsadobecomxdmchannelsbaidu) | `enum` | Optional | `"not_provided"` | OptInOut (this schema) |
| [https://ns.adobe.com/xdm/channels/direct-mail](#httpsnsadobecomxdmchannelsdirect-mail) | `enum` | Optional | `"not_provided"` | OptInOut (this schema) |
| [https://ns.adobe.com/xdm/channels/email](#httpsnsadobecomxdmchannelsemail) | `enum` | Optional | `"not_provided"` | OptInOut (this schema) |
| [https://ns.adobe.com/xdm/channels/fax](#httpsnsadobecomxdmchannelsfax) | `enum` | Optional | `"not_provided"` | OptInOut (this schema) |
| [https://ns.adobe.com/xdm/channels/gcm](#httpsnsadobecomxdmchannelsgcm) | `enum` | Optional | `"not_provided"` | OptInOut (this schema) |
| [https://ns.adobe.com/xdm/channels/line](#httpsnsadobecomxdmchannelsline) | `enum` | Optional | `"not_provided"` | OptInOut (this schema) |
| [https://ns.adobe.com/xdm/channels/mpns](#httpsnsadobecomxdmchannelsmpns) | `enum` | Optional | `"not_provided"` | OptInOut (this schema) |
| [https://ns.adobe.com/xdm/channels/phone](#httpsnsadobecomxdmchannelsphone) | `enum` | Optional | `"not_provided"` | OptInOut (this schema) |
| [https://ns.adobe.com/xdm/channels/sms](#httpsnsadobecomxdmchannelssms) | `enum` | Optional | `"not_provided"` | OptInOut (this schema) |
| [https://ns.adobe.com/xdm/channels/wechat](#httpsnsadobecomxdmchannelswechat) | `enum` | Optional | `"not_provided"` | OptInOut (this schema) |
| [https://ns.adobe.com/xdm/channels/wns](#httpsnsadobecomxdmchannelswns) | `enum` | Optional | `"not_provided"` | OptInOut (this schema) |
| [xdm:globalOptout](#xdmglobaloptout) | `boolean` | Optional | `false` | OptInOut (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## https://ns.adobe.com/xdm/channels/adm

Communication preference for the outbound channel identified through its URL by the name of the property.

`https://ns.adobe.com/xdm/channels/adm`
* is optional
* type: `enum`
* default: `"not_provided"`
* defined in this schema

The value of this property **must** be equal to one of the [known values below](#httpsnsadobecomxdmchannelsadm-known-values).

### https://ns.adobe.com/xdm/channels/adm Known Values
| Value | Description |
|-------|-------------|
| `not_provided` | Not Provided |
| `pending` | Pending Verification |
| `in` | Opt-In: the user explicitly consents to receiving messages. |
| `out` | Opt-Out: the user declines to receive any messages on this channel |




## https://ns.adobe.com/xdm/channels/apns

Communication preference for the outbound channel identified through its URL by the name of the property.

`https://ns.adobe.com/xdm/channels/apns`
* is optional
* type: `enum`
* default: `"not_provided"`
* defined in this schema

The value of this property **must** be equal to one of the [known values below](#httpsnsadobecomxdmchannelsapns-known-values).

### https://ns.adobe.com/xdm/channels/apns Known Values
| Value | Description |
|-------|-------------|
| `not_provided` | Not Provided |
| `pending` | Pending Verification |
| `in` | Opt-In: the user explicitly consents to receiving messages. |
| `out` | Opt-Out: the user declines to receive any messages on this channel |




## https://ns.adobe.com/xdm/channels/baidu

Communication preference for the outbound channel identified through its URL by the name of the property.

`https://ns.adobe.com/xdm/channels/baidu`
* is optional
* type: `enum`
* default: `"not_provided"`
* defined in this schema

The value of this property **must** be equal to one of the [known values below](#httpsnsadobecomxdmchannelsbaidu-known-values).

### https://ns.adobe.com/xdm/channels/baidu Known Values
| Value | Description |
|-------|-------------|
| `not_provided` | Not Provided |
| `pending` | Pending Verification |
| `in` | Opt-In: the user explicitly consents to receiving messages. |
| `out` | Opt-Out: the user declines to receive any messages on this channel |




## https://ns.adobe.com/xdm/channels/direct-mail

Communication preference for the outbound channel identified through its URL by the name of the property.

`https://ns.adobe.com/xdm/channels/direct-mail`
* is optional
* type: `enum`
* default: `"not_provided"`
* defined in this schema

The value of this property **must** be equal to one of the [known values below](#httpsnsadobecomxdmchannelsdirect-mail-known-values).

### https://ns.adobe.com/xdm/channels/direct-mail Known Values
| Value | Description |
|-------|-------------|
| `not_provided` | Not Provided |
| `pending` | Pending Verification |
| `in` | Opt-In: the user explicitly consents to receiving messages. |
| `out` | Opt-Out: the user declines to receive any messages on this channel |




## https://ns.adobe.com/xdm/channels/email

Communication preference for the outbound channel identified through its URL by the name of the property.

`https://ns.adobe.com/xdm/channels/email`
* is optional
* type: `enum`
* default: `"not_provided"`
* defined in this schema

The value of this property **must** be equal to one of the [known values below](#httpsnsadobecomxdmchannelsemail-known-values).

### https://ns.adobe.com/xdm/channels/email Known Values
| Value | Description |
|-------|-------------|
| `not_provided` | Not Provided |
| `pending` | Pending Verification |
| `in` | Opt-In: the user explicitly consents to receiving messages. |
| `out` | Opt-Out: the user declines to receive any messages on this channel |




## https://ns.adobe.com/xdm/channels/fax

Communication preference for the outbound channel identified through its URL by the name of the property.

`https://ns.adobe.com/xdm/channels/fax`
* is optional
* type: `enum`
* default: `"not_provided"`
* defined in this schema

The value of this property **must** be equal to one of the [known values below](#httpsnsadobecomxdmchannelsfax-known-values).

### https://ns.adobe.com/xdm/channels/fax Known Values
| Value | Description |
|-------|-------------|
| `not_provided` | Not Provided |
| `pending` | Pending Verification |
| `in` | Opt-In: the user explicitly consents to receiving messages. |
| `out` | Opt-Out: the user declines to receive any messages on this channel |




## https://ns.adobe.com/xdm/channels/gcm

Communication preference for the outbound channel identified through its URL by the name of the property.

`https://ns.adobe.com/xdm/channels/gcm`
* is optional
* type: `enum`
* default: `"not_provided"`
* defined in this schema

The value of this property **must** be equal to one of the [known values below](#httpsnsadobecomxdmchannelsgcm-known-values).

### https://ns.adobe.com/xdm/channels/gcm Known Values
| Value | Description |
|-------|-------------|
| `not_provided` | Not Provided |
| `pending` | Pending Verification |
| `in` | Opt-In: the user explicitly consents to receiving messages. |
| `out` | Opt-Out: the user declines to receive any messages on this channel |




## https://ns.adobe.com/xdm/channels/line

Communication preference for the outbound channel identified through its URL by the name of the property.

`https://ns.adobe.com/xdm/channels/line`
* is optional
* type: `enum`
* default: `"not_provided"`
* defined in this schema

The value of this property **must** be equal to one of the [known values below](#httpsnsadobecomxdmchannelsline-known-values).

### https://ns.adobe.com/xdm/channels/line Known Values
| Value | Description |
|-------|-------------|
| `not_provided` | Not Provided |
| `pending` | Pending Verification |
| `in` | Opt-In: the user explicitly consents to receiving messages. |
| `out` | Opt-Out: the user declines to receive any messages on this channel |




## https://ns.adobe.com/xdm/channels/mpns

Communication preference for the outbound channel identified through its URL by the name of the property.

`https://ns.adobe.com/xdm/channels/mpns`
* is optional
* type: `enum`
* default: `"not_provided"`
* defined in this schema

The value of this property **must** be equal to one of the [known values below](#httpsnsadobecomxdmchannelsmpns-known-values).

### https://ns.adobe.com/xdm/channels/mpns Known Values
| Value | Description |
|-------|-------------|
| `not_provided` | Not Provided |
| `pending` | Pending Verification |
| `in` | Opt-In: the user explicitly consents to receiving messages. |
| `out` | Opt-Out: the user declines to receive any messages on this channel |




## https://ns.adobe.com/xdm/channels/phone

Communication preference for the outbound channel identified through its URL by the name of the property.

`https://ns.adobe.com/xdm/channels/phone`
* is optional
* type: `enum`
* default: `"not_provided"`
* defined in this schema

The value of this property **must** be equal to one of the [known values below](#httpsnsadobecomxdmchannelsphone-known-values).

### https://ns.adobe.com/xdm/channels/phone Known Values
| Value | Description |
|-------|-------------|
| `not_provided` | Not Provided |
| `pending` | Pending Verification |
| `in` | Opt-In: the user explicitly consents to receiving messages. |
| `out` | Opt-Out: the user declines to receive any messages on this channel |




## https://ns.adobe.com/xdm/channels/sms

Communication preference for the outbound channel identified through its URL by the name of the property.

`https://ns.adobe.com/xdm/channels/sms`
* is optional
* type: `enum`
* default: `"not_provided"`
* defined in this schema

The value of this property **must** be equal to one of the [known values below](#httpsnsadobecomxdmchannelssms-known-values).

### https://ns.adobe.com/xdm/channels/sms Known Values
| Value | Description |
|-------|-------------|
| `not_provided` | Not Provided |
| `pending` | Pending Verification |
| `in` | Opt-In: the user explicitly consents to receiving messages. |
| `out` | Opt-Out: the user declines to receive any messages on this channel |




## https://ns.adobe.com/xdm/channels/wechat

Communication preference for the outbound channel identified through its URL by the name of the property.

`https://ns.adobe.com/xdm/channels/wechat`
* is optional
* type: `enum`
* default: `"not_provided"`
* defined in this schema

The value of this property **must** be equal to one of the [known values below](#httpsnsadobecomxdmchannelswechat-known-values).

### https://ns.adobe.com/xdm/channels/wechat Known Values
| Value | Description |
|-------|-------------|
| `not_provided` | Not Provided |
| `pending` | Pending Verification |
| `in` | Opt-In: the user explicitly consents to receiving messages. |
| `out` | Opt-Out: the user declines to receive any messages on this channel |




## https://ns.adobe.com/xdm/channels/wns

Communication preference for the outbound channel identified through its URL by the name of the property.

`https://ns.adobe.com/xdm/channels/wns`
* is optional
* type: `enum`
* default: `"not_provided"`
* defined in this schema

The value of this property **must** be equal to one of the [known values below](#httpsnsadobecomxdmchannelswns-known-values).

### https://ns.adobe.com/xdm/channels/wns Known Values
| Value | Description |
|-------|-------------|
| `not_provided` | Not Provided |
| `pending` | Pending Verification |
| `in` | Opt-In: the user explicitly consents to receiving messages. |
| `out` | Opt-Out: the user declines to receive any messages on this channel |




## xdm:globalOptout
### Global Opt-out

Do not contact this profile on any outbound channel.

`xdm:globalOptout`
* is optional
* type: `boolean`
* default: `false`
* defined in this schema

### xdm:globalOptout Type


`boolean`




