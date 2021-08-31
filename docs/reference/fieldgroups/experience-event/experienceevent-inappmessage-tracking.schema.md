
# Inapp message tracking Schema

```
https://ns.adobe.com/xdm/context/experienceevent-inappmessage-tracking
```

Inapp message interaction tracking details

| [Abstract](../../../abstract.md) | [Extensible](../../../extensions.md) | [Status](../../../status.md) | [Identifiable](../../../id.md) | [Custom Properties](../../../extensions.md) | [Additional Properties](../../../extensions.md) | Defined In |
|----------------------------------|--------------------------------------|------------------------------|--------------------------------|---------------------------------------------|-------------------------------------------------|------------|
| Can be instantiated | Yes | Stable | No | Forbidden | Permitted | [fieldgroups/experience-event/experienceevent-inappmessage-tracking.schema.json](fieldgroups/experience-event/experienceevent-inappmessage-tracking.schema.json) |
## Schema Hierarchy

* Inapp message tracking `https://ns.adobe.com/xdm/context/experienceevent-inappmessage-tracking`
  * [Extensibility base schema](../../datatypes/extensible.schema.md) `https://ns.adobe.com/xdm/common/extensible`


## Inapp message tracking Example
```json
{
  "xdm:action": "button3"
}
```

# Inapp message tracking Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [xdm:inappMessageTracking](#xdminappmessagetracking) | `object` | Optional | Inapp message tracking (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## xdm:inappMessageTracking
### Inapp Message Interaction Tracking Details

Describes interaction with an inapp message.

`xdm:inappMessageTracking`
* is optional
* type: `object`
* defined in this schema

### xdm:inappMessageTracking Type


`object` with following properties:


| Property | Type | Required |
|----------|------|----------|
| `xdm:action`| string | Optional |



#### xdm:action
##### Custom Action

Identifier for custom action that the user triggered while interacting with the inapp message.

`xdm:action`
* is optional
* type: `string`

##### xdm:action Type


`string`










