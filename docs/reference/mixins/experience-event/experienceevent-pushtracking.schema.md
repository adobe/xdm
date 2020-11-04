
# Push notification tracking Schema

```
https://ns.adobe.com/xdm/context/experienceevent-pushtracking
```

push notification tracking details

| [Abstract](../../../abstract.md) | [Extensible](../../../extensions.md) | [Status](../../../status.md) | [Identifiable](../../../id.md) | [Custom Properties](../../../extensions.md) | [Additional Properties](../../../extensions.md) | Defined In |
|----------------------------------|--------------------------------------|------------------------------|--------------------------------|---------------------------------------------|-------------------------------------------------|------------|
| Can be instantiated | Yes | Stable | No | Forbidden | Permitted | [mixins/experience-event/experienceevent-pushtracking.schema.json](mixins/experience-event/experienceevent-pushtracking.schema.json) |
## Schema Hierarchy

* Push notification tracking `https://ns.adobe.com/xdm/context/experienceevent-pushtracking`
  * [Extensibility base schema](../../datatypes/extensible.schema.md) `https://ns.adobe.com/xdm/common/extensible`


## Push notification tracking Example
```json
{
  "xdm:pushProviderMessageID": "unique msgID from ios/android",
  "xdm:pushProvider": "apns",
  "xdm:customAction": {
    "xdm:actionID": "GAME_INVITATION",
    "xdm:value": 500
  }
}
```

# Push notification tracking Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [xdm:pushNotificationTracking](#xdmpushnotificationtracking) | `object` | Optional | Push notification tracking (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## xdm:pushNotificationTracking
### push notification tracking details

Describes interaction with a push notification.

`xdm:pushNotificationTracking`
* is optional
* type: `object`
* defined in this schema

### xdm:pushNotificationTracking Type


`object` with following properties:


| Property | Type | Required |
|----------|------|----------|
| `xdm:customAction`| object | Optional |
| `xdm:pushProvider`| string | Optional |
| `xdm:pushProviderMessageID`| string | Optional |



#### xdm:customAction
##### custom action

End user clicked custom action in the push notification

`xdm:customAction`
* is optional
* type: `object`

##### xdm:customAction Type

Unknown type `object`.

```json
{
  "title": "custom action",
  "type": "object",
  "description": "End user clicked custom action in the push notification",
  "properties": {
    "xdm:actionID": {
      "title": "action ID",
      "type": "string",
      "description": "user clicked custom action identifier"
    },
    "xdm:value": {
      "title": "value",
      "type": "number",
      "description": "value associated with the custom action, if any"
    }
  },
  "simpletype": "`object`"
}
```







#### xdm:pushProvider
##### Push Provider

Push provider, e.g. apns or fcm

`xdm:pushProvider`
* is optional
* type: `string`

##### xdm:pushProvider Type


`string`








#### xdm:pushProviderMessageID
##### Push Provider message ID

ID assigned to this notification as assigned by the push provider

`xdm:pushProviderMessageID`
* is optional
* type: `string`

##### xdm:pushProviderMessageID Type


`string`










