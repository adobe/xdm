
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
| [https://ns.adobe.com/xdm/channels/agency](#httpsnsadobecomxdmchannelsagency) | `enum` | Optional | `"not_provided"` | OptInOut (this schema) |
| [https://ns.adobe.com/xdm/channels/apns](#httpsnsadobecomxdmchannelsapns) | `enum` | Optional | `"not_provided"` | OptInOut (this schema) |
| [https://ns.adobe.com/xdm/channels/application](#httpsnsadobecomxdmchannelsapplication) | `enum` | Optional | `"not_provided"` | OptInOut (this schema) |
| [https://ns.adobe.com/xdm/channels/baidu](#httpsnsadobecomxdmchannelsbaidu) | `enum` | Optional | `"not_provided"` | OptInOut (this schema) |
| [https://ns.adobe.com/xdm/channels/channel](#httpsnsadobecomxdmchannelschannel) | `enum` | Optional | `"not_provided"` | OptInOut (this schema) |
| [https://ns.adobe.com/xdm/channels/direct-mail](#httpsnsadobecomxdmchannelsdirect-mail) | `enum` | Optional | `"not_provided"` | OptInOut (this schema) |
| [https://ns.adobe.com/xdm/channels/email](#httpsnsadobecomxdmchannelsemail) | `enum` | Optional | `"not_provided"` | OptInOut (this schema) |
| [https://ns.adobe.com/xdm/channels/facebook-feed](#httpsnsadobecomxdmchannelsfacebook-feed) | `enum` | Optional | `"not_provided"` | OptInOut (this schema) |
| [https://ns.adobe.com/xdm/channels/fax](#httpsnsadobecomxdmchannelsfax) | `enum` | Optional | `"not_provided"` | OptInOut (this schema) |
| [https://ns.adobe.com/xdm/channels/gcm](#httpsnsadobecomxdmchannelsgcm) | `enum` | Optional | `"not_provided"` | OptInOut (this schema) |
| [https://ns.adobe.com/xdm/channels/line](#httpsnsadobecomxdmchannelsline) | `enum` | Optional | `"not_provided"` | OptInOut (this schema) |
| [https://ns.adobe.com/xdm/channels/mobile-app](#httpsnsadobecomxdmchannelsmobile-app) | `enum` | Optional | `"not_provided"` | OptInOut (this schema) |
| [https://ns.adobe.com/xdm/channels/mpns](#httpsnsadobecomxdmchannelsmpns) | `enum` | Optional | `"not_provided"` | OptInOut (this schema) |
| [https://ns.adobe.com/xdm/channels/phone](#httpsnsadobecomxdmchannelsphone) | `enum` | Optional | `"not_provided"` | OptInOut (this schema) |
| [https://ns.adobe.com/xdm/channels/sms](#httpsnsadobecomxdmchannelssms) | `enum` | Optional | `"not_provided"` | OptInOut (this schema) |
| [https://ns.adobe.com/xdm/channels/twitter-feed](#httpsnsadobecomxdmchannelstwitter-feed) | `enum` | Optional | `"not_provided"` | OptInOut (this schema) |
| [https://ns.adobe.com/xdm/channels/web](#httpsnsadobecomxdmchannelsweb) | `enum` | Optional | `"not_provided"` | OptInOut (this schema) |
| [https://ns.adobe.com/xdm/channels/webpage](#httpsnsadobecomxdmchannelswebpage) | `enum` | Optional | `"not_provided"` | OptInOut (this schema) |
| [https://ns.adobe.com/xdm/channels/wechat](#httpsnsadobecomxdmchannelswechat) | `enum` | Optional | `"not_provided"` | OptInOut (this schema) |
| [https://ns.adobe.com/xdm/channels/wns](#httpsnsadobecomxdmchannelswns) | `enum` | Optional | `"not_provided"` | OptInOut (this schema) |
| [xdm:globalOptout](#xdmglobaloptout) | `boolean` | Optional | `false` | OptInOut (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## https://ns.adobe.com/xdm/channels/adm
### ADM

Amazon Device Messaging channel OptInOut.

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




## https://ns.adobe.com/xdm/channels/agency
### Agency

External Agency channel OptInOut.

`https://ns.adobe.com/xdm/channels/agency`
* is optional
* type: `enum`
* default: `"not_provided"`
* defined in this schema

The value of this property **must** be equal to one of the [known values below](#httpsnsadobecomxdmchannelsagency-known-values).

### https://ns.adobe.com/xdm/channels/agency Known Values
| Value | Description |
|-------|-------------|
| `not_provided` | Not Provided |
| `pending` | Pending Verification |
| `in` | Opt-In: the user explicitly consents to receiving messages. |
| `out` | Opt-Out: the user declines to receive any messages on this channel |




## https://ns.adobe.com/xdm/channels/apns
### APNS

Apple Push Notification Service channel OptInOut.

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




## https://ns.adobe.com/xdm/channels/application
### Application

Application channel OptInOut.

`https://ns.adobe.com/xdm/channels/application`
* is optional
* type: `enum`
* default: `"not_provided"`
* defined in this schema

The value of this property **must** be equal to one of the [known values below](#httpsnsadobecomxdmchannelsapplication-known-values).

### https://ns.adobe.com/xdm/channels/application Known Values
| Value | Description |
|-------|-------------|
| `not_provided` | Not Provided |
| `pending` | Pending Verification |
| `in` | Opt-In: the user explicitly consents to receiving messages. |
| `out` | Opt-Out: the user declines to receive any messages on this channel |




## https://ns.adobe.com/xdm/channels/baidu
### Baidu

Baidu Cloud Push Service channel OptInOut.

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




## https://ns.adobe.com/xdm/channels/channel
### Experience Channel

Experience channel OptInOut.

`https://ns.adobe.com/xdm/channels/channel`
* is optional
* type: `enum`
* default: `"not_provided"`
* defined in this schema

The value of this property **must** be equal to one of the [known values below](#httpsnsadobecomxdmchannelschannel-known-values).

### https://ns.adobe.com/xdm/channels/channel Known Values
| Value | Description |
|-------|-------------|
| `not_provided` | Not Provided |
| `pending` | Pending Verification |
| `in` | Opt-In: the user explicitly consents to receiving messages. |
| `out` | Opt-Out: the user declines to receive any messages on this channel |




## https://ns.adobe.com/xdm/channels/direct-mail
### Direct Mail

Mail delivered by a postal service channel OptInOut.

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
### E-Mail

E-Mail messages, delivered via SMTP to list subscribers channel OptInOut.

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




## https://ns.adobe.com/xdm/channels/facebook-feed
### Facebook News Feed

The Facebook News Feed channel OptInOut.

`https://ns.adobe.com/xdm/channels/facebook-feed`
* is optional
* type: `enum`
* default: `"not_provided"`
* defined in this schema

The value of this property **must** be equal to one of the [known values below](#httpsnsadobecomxdmchannelsfacebook-feed-known-values).

### https://ns.adobe.com/xdm/channels/facebook-feed Known Values
| Value | Description |
|-------|-------------|
| `not_provided` | Not Provided |
| `pending` | Pending Verification |
| `in` | Opt-In: the user explicitly consents to receiving messages. |
| `out` | Opt-Out: the user declines to receive any messages on this channel |




## https://ns.adobe.com/xdm/channels/fax
### Fax

Telefacsimile channel OptInOut.

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
### GCM

Google Cloud Messaging channel OptInOut.

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
### LINE

Line Platform Notification channel OptInOut.

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




## https://ns.adobe.com/xdm/channels/mobile-app
### Web

Native mobile applications that are installed through an app store channel OptInOut.

`https://ns.adobe.com/xdm/channels/mobile-app`
* is optional
* type: `enum`
* default: `"not_provided"`
* defined in this schema

The value of this property **must** be equal to one of the [known values below](#httpsnsadobecomxdmchannelsmobile-app-known-values).

### https://ns.adobe.com/xdm/channels/mobile-app Known Values
| Value | Description |
|-------|-------------|
| `not_provided` | Not Provided |
| `pending` | Pending Verification |
| `in` | Opt-In: the user explicitly consents to receiving messages. |
| `out` | Opt-Out: the user declines to receive any messages on this channel |




## https://ns.adobe.com/xdm/channels/mpns
### MPNS

Microsoft Push Notification Service channel OptInOut.

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
### Phone

The telephone channel OptInOut.

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
### SMS

Short Message Service delivered to a mobile phone channel OptInOut.

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




## https://ns.adobe.com/xdm/channels/twitter-feed
### Twitter Feed

Twitter Feed channel OptInOut.

`https://ns.adobe.com/xdm/channels/twitter-feed`
* is optional
* type: `enum`
* default: `"not_provided"`
* defined in this schema

The value of this property **must** be equal to one of the [known values below](#httpsnsadobecomxdmchannelstwitter-feed-known-values).

### https://ns.adobe.com/xdm/channels/twitter-feed Known Values
| Value | Description |
|-------|-------------|
| `not_provided` | Not Provided |
| `pending` | Pending Verification |
| `in` | Opt-In: the user explicitly consents to receiving messages. |
| `out` | Opt-Out: the user declines to receive any messages on this channel |




## https://ns.adobe.com/xdm/channels/web
### Web

World Wide Web and mobile web channel OptInOut.

`https://ns.adobe.com/xdm/channels/web`
* is optional
* type: `enum`
* default: `"not_provided"`
* defined in this schema

The value of this property **must** be equal to one of the [known values below](#httpsnsadobecomxdmchannelsweb-known-values).

### https://ns.adobe.com/xdm/channels/web Known Values
| Value | Description |
|-------|-------------|
| `not_provided` | Not Provided |
| `pending` | Pending Verification |
| `in` | Opt-In: the user explicitly consents to receiving messages. |
| `out` | Opt-Out: the user declines to receive any messages on this channel |




## https://ns.adobe.com/xdm/channels/webpage
### Web Page

Web Page channel OptInOut.

`https://ns.adobe.com/xdm/channels/webpage`
* is optional
* type: `enum`
* default: `"not_provided"`
* defined in this schema

The value of this property **must** be equal to one of the [known values below](#httpsnsadobecomxdmchannelswebpage-known-values).

### https://ns.adobe.com/xdm/channels/webpage Known Values
| Value | Description |
|-------|-------------|
| `not_provided` | Not Provided |
| `pending` | Pending Verification |
| `in` | Opt-In: the user explicitly consents to receiving messages. |
| `out` | Opt-Out: the user declines to receive any messages on this channel |




## https://ns.adobe.com/xdm/channels/wechat
### WeChat

WeChat Platform Notification channel OptInOut.

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
### WNS

Windows Push Notification Service channel OptInOut.

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




