
# Push notification detail Schema

```
https://ns.adobe.com/xdm/context/pushdetail
```

Push notification detail required to send mobile push notification to a specific mobile application on a given device.

| [Abstract](../../abstract.md) | [Extensible](../../extensions.md) | [Status](../../status.md) | [Identifiable](../../id.md) | [Custom Properties](../../extensions.md) | [Additional Properties](../../extensions.md) | Defined In |
|-------------------------------|-----------------------------------|---------------------------|-----------------------------|------------------------------------------|----------------------------------------------|------------|
| Can be instantiated | Yes | Deprecated | No | Forbidden | Permitted | [datatypes/pushdetail.schema.json](datatypes/pushdetail.schema.json) |
## Schema Hierarchy

* Push notification detail `https://ns.adobe.com/xdm/context/pushdetail`
  * [Extensibility base schema](extensible.schema.md) `https://ns.adobe.com/xdm/common/extensible`
  * [Identity](identity.schema.md) `https://ns.adobe.com/xdm/context/identity`


## Push notification detail Example
```json
{
  "xdm:appID": "75eafb7e-fa44-4514-86fc-221e32c5aef9",
  "xdm:token": "99156313-c9df-4e54-9c6c-5740f940c3ca",
  "xdm:platform": "apns",
  "xdm:denylisted": false,
  "xdm:identity": {
    "xdm:namespace": {
      "xdm:code": "ECID"
    },
    "xdm:id": "92312748749128"
  }
}
```

# Push notification detail Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [xdm:appID](#xdmappid) | `string` | Optional | Push notification detail (this schema) |
| [xdm:blacklisted](#xdmblacklisted) | `boolean` | Optional | Push notification detail (this schema) |
| [xdm:blocklisted](#xdmblocklisted) | `boolean` | Optional | Push notification detail (this schema) |
| [xdm:denylisted](#xdmdenylisted) | `boolean` | Optional | Push notification detail (this schema) |
| [xdm:identity](#xdmidentity) | Identity | Optional | Push notification detail (this schema) |
| [xdm:identiy](#xdmidentiy) | Identity | Optional | Push notification detail (this schema) |
| [xdm:platform](#xdmplatform) | `string` | Optional | Push notification detail (this schema) |
| [xdm:token](#xdmtoken) | `string` | Optional | Push notification detail (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## xdm:appID
### Application Identifier

Unique Identifier for the mobile application.

`xdm:appID`
* is optional
* type: `string`
* defined in this schema

### xdm:appID Type


`string`






## xdm:blacklisted
### Blacklist Flag

Indicates whether the push token is blacklisted. Deprecated due to new guidance on key names, use blocklisted instead.

`xdm:blacklisted`
* is optional
* type: `boolean`
* defined in this schema

### xdm:blacklisted Type


`boolean`





## xdm:blocklisted
### Blocklist Flag

Indicates whether the push token is blocked by the push provider. Deprecated due to new guidance on key names, use denylisted instead.

`xdm:blocklisted`
* is optional
* type: `boolean`
* defined in this schema

### xdm:blocklisted Type


`boolean`





## xdm:denylisted
### Denylist Flag

Indicates whether the push token is blocked by the push provider.

`xdm:denylisted`
* is optional
* type: `boolean`
* defined in this schema

### xdm:denylisted Type


`boolean`





## xdm:identity
### Identity associated with this token

The identity associated with this token before profile stitching.

`xdm:identity`
* is optional
* type: Identity
* defined in this schema

### xdm:identity Type


* [Identity](identity.schema.md) – `https://ns.adobe.com/xdm/context/identity`





## xdm:identiy
### Identity associated with this token

The identity associated with this token before profile stitching. Deprecated due to typo, use xdm:identity instead.

`xdm:identiy`
* is optional
* type: Identity
* defined in this schema

### xdm:identiy Type


* [Identity](identity.schema.md) – `https://ns.adobe.com/xdm/context/identity`





## xdm:platform
### Push Platform

Push provider, e.g. apns or fcm

`xdm:platform`
* is optional
* type: `string`
* defined in this schema

### xdm:platform Type


`string`






## xdm:token
### Push Token

Valid push token for the given push platform.

`xdm:token`
* is optional
* type: `string`
* defined in this schema

### xdm:token Type


`string`





