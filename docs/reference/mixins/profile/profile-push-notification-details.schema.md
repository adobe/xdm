
# Push notification details Schema

```
https://ns.adobe.com/xdm/context/profile-push-notification-details
```

Use for information regarding push notifications, such as mobile application and device details.

| [Abstract](../../../abstract.md) | [Extensible](../../../extensions.md) | [Status](../../../status.md) | [Identifiable](../../../id.md) | [Custom Properties](../../../extensions.md) | [Additional Properties](../../../extensions.md) | Defined In |
|----------------------------------|--------------------------------------|------------------------------|--------------------------------|---------------------------------------------|-------------------------------------------------|------------|
| Can be instantiated | Yes | Stable | No | Forbidden | Permitted | [mixins/profile/profile-push-notification-details.schema.json](mixins/profile/profile-push-notification-details.schema.json) |
## Schema Hierarchy

* Push notification details `https://ns.adobe.com/xdm/context/profile-push-notification-details`
  * [Extensibility base schema](../../datatypes/extensible.schema.md) `https://ns.adobe.com/xdm/common/extensible`


## Push notification details Example
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

# Push notification details Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [xdm:pushNotificationDetails](#xdmpushnotificationdetails) | Push notification detail | Optional | Push notification details (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## xdm:pushNotificationDetails
### Push details

Push details array containing notification info required to send mobile push notification to a specific mobile application on a given device.

`xdm:pushNotificationDetails`
* is optional
* type: Push notification detail

* defined in this schema

### xdm:pushNotificationDetails Type


Array type: Push notification detail

All items must be of the type:
* [Push notification detail](../../datatypes/pushdetail.schema.md) – `https://ns.adobe.com/xdm/context/pushdetail`







