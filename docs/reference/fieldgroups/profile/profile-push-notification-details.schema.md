
# Push Notification Details Schema

```
https://ns.adobe.com/xdm/context/profile-push-notification-details
```

Information regarding push notifications, such as mobile application and device details.

| [Abstract](../../../abstract.md) | [Extensible](../../../extensions.md) | [Status](../../../status.md) | [Identifiable](../../../id.md) | [Custom Properties](../../../extensions.md) | [Additional Properties](../../../extensions.md) | Defined In |
|----------------------------------|--------------------------------------|------------------------------|--------------------------------|---------------------------------------------|-------------------------------------------------|------------|
| Can be instantiated | Yes | Stable | No | Forbidden | Permitted | [fieldgroups/profile/profile-push-notification-details.schema.json](fieldgroups/profile/profile-push-notification-details.schema.json) |
## Schema Hierarchy

* Push Notification Details `https://ns.adobe.com/xdm/context/profile-push-notification-details`
  * [Extensibility base schema](../../datatypes/extensible.schema.md) `https://ns.adobe.com/xdm/common/extensible`


## Push Notification Details Example
```json
{
  "xdm:pushNotificationDetails": [
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
  ]
}
```

# Push Notification Details Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [xdm:pushNotificationDetails](#xdmpushnotificationdetails) | `object[]` | Optional | Push Notification Details (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## xdm:pushNotificationDetails
### Push details

Push details array containing notification info required to send mobile push notification to a specific mobile application on a given device.

`xdm:pushNotificationDetails`
* is optional
* type: `object[]`

* defined in this schema

### xdm:pushNotificationDetails Type


Array type: `object[]`

All items must be of the type:
`object` with following properties:


| Property | Type | Required |
|----------|------|----------|
| `xdm:appID`| string | Optional |
| `xdm:blacklisted`| boolean | Optional |
| `xdm:blocklisted`| boolean | Optional |
| `xdm:denylisted`| boolean | Optional |
| `xdm:identity`|  | Optional |
| `xdm:identiy`|  | Optional |
| `xdm:platform`| string | Optional |
| `xdm:token`| string | Optional |



#### xdm:appID
##### Application Identifier

Unique Identifier for the mobile application.

`xdm:appID`
* is optional
* type: `string`

##### xdm:appID Type


`string`








#### xdm:blacklisted
##### Blacklist Flag

Indicates whether the push token is blacklisted. Deprecated due to new guidance on key names, use blocklisted instead.

`xdm:blacklisted`
* is optional
* type: `boolean`

##### xdm:blacklisted Type


`boolean`







#### xdm:blocklisted
##### Blocklist Flag

Indicates whether the push token is blocked by the push provider. Deprecated due to new guidance on key names, use denylisted instead.

`xdm:blocklisted`
* is optional
* type: `boolean`

##### xdm:blocklisted Type


`boolean`







#### xdm:denylisted
##### Denylist Flag

Indicates whether the push token is blocked by the push provider.

`xdm:denylisted`
* is optional
* type: `boolean`

##### xdm:denylisted Type


`boolean`







#### xdm:identity
##### Identity associated with this token

The identity associated with this token before profile stitching.

`xdm:identity`
* is optional
* type: reference

##### xdm:identity Type


* []() – `https://ns.adobe.com/xdm/context/identity`







#### xdm:identiy
##### Identity associated with this token

The identity associated with this token before profile stitching. Deprecated due to typo, use xdm:identity instead.

`xdm:identiy`
* is optional
* type: reference

##### xdm:identiy Type


* []() – `https://ns.adobe.com/xdm/context/identity`







#### xdm:platform
##### Push Platform

Push provider, e.g. apns or fcm

`xdm:platform`
* is optional
* type: `string`

##### xdm:platform Type


`string`








#### xdm:token
##### Push Token

Valid push token for the given push platform.

`xdm:token`
* is optional
* type: `string`

##### xdm:token Type


`string`













