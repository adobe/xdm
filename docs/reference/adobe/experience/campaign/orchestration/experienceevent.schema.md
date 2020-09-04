
# Journey experience event Schema

```
https://ns.adobe.com/experience/campaign/orchestration/experienceevent
```

Orchestration extension to ExperienceEvent

| [Abstract](../../../../../abstract.md) | [Extensible](../../../../../extensions.md) | [Status](../../../../../status.md) | [Identifiable](../../../../../id.md) | [Custom Properties](../../../../../extensions.md) | [Additional Properties](../../../../../extensions.md) | Defined In |
|----------------------------------------|--------------------------------------------|------------------------------------|--------------------------------------|---------------------------------------------------|-------------------------------------------------------|------------|
| Can be instantiated | Yes | Stable | No | Forbidden | Permitted | [adobe/experience/campaign/orchestration/experienceevent.schema.json](adobe/experience/campaign/orchestration/experienceevent.schema.json) |

# Journey experience event Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [@id](#id) | `string` | Optional | Journey experience event (this schema) |
| [xdm:actionID](#xdmactionid) | `string` | Optional | Journey experience event (this schema) |
| [xdm:actionType](#xdmactiontype) | `string` | Optional | Journey experience event (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## @id
### Journey version identifier

The unique identifier denoting the version of journey on which the entity is active.

`@id`
* is optional
* type: `string`
* defined in this schema

### @id Type


`string`
* format: `uri-reference` – URI Reference (according to [RFC3986](https://tools.ietf.org/html/rfc3986))






## xdm:actionID
### Action identifier

Unique identifier denoting the associated action.

`xdm:actionID`
* is optional
* type: `string`
* defined in this schema

### xdm:actionID Type


`string`
* format: `uri-reference` – URI Reference (according to [RFC3986](https://tools.ietf.org/html/rfc3986))






## xdm:actionType
### Action Type

The type of action to be performed.

`xdm:actionType`
* is optional
* type: `string`
* defined in this schema

### xdm:actionType Type


`string`



### xdm:actionType Known Values
| Value | Description |
|-------|-------------|
| `scheduled_notification` | This action type allows to specify scheduled notifications and wait for the notifications as incoming events for steps |
| `http_request` | This action type is for a HTTP call on an external system |
| `personalized_action` | This action type describes an action with personalization that will be resolved at runtime for each voyager instance |
| `parameterized_action` | This action type describes an action with parameterization |
| `journey_notification` | This action type is to send notification for another journey |
| `campaign_request` | This action performs REST calls to a campaign instance to write data |
| `messageService_request` | The message service action performs REST calls to campaign instance to send messages with messaging service |



