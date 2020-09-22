
# external event received Schema

```
https://ns.adobe.com/experience/campaign/orchestration/reportingexternalevent
```

This is the schema for the external event received, triggering the state transition in the journey version for the user
The transition is reported by the reportingevent and the information of the external event triggering journey state change is embedded within the reportingevent
For example, an external event can be a user entering the lobby of a hotel captured by a lobby beacon. Such event is received to trigger the state change.

| [Abstract](../../../../../abstract.md) | [Extensible](../../../../../extensions.md) | [Status](../../../../../status.md) | [Identifiable](../../../../../id.md) | [Custom Properties](../../../../../extensions.md) | [Additional Properties](../../../../../extensions.md) | Defined In |
|----------------------------------------|--------------------------------------------|------------------------------------|--------------------------------------|---------------------------------------------------|-------------------------------------------------------|------------|
| Can be instantiated | Yes | Stable | No | Forbidden | Permitted | [adobe/experience/campaign/orchestration/reportingexternalevent.schema.json](adobe/experience/campaign/orchestration/reportingexternalevent.schema.json) |

## external event received Example
```json
{
  "https://ns.adobe.com/experience/campaign/orchestrationExternalEvent": {
    "@id": "https://ns.adobe.com/experience/campaign/orchestration/externalevent/1234",
    "xdm:eventType": "http"
  }
}
```

# external event received Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [xdm:eventType](#xdmeventtype) | `string` | Optional | external event received (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## xdm:eventType
### Type of the event received

The type for the external event received

`xdm:eventType`
* is optional
* type: `string`
* defined in this schema

### xdm:eventType Type


`string`



### xdm:eventType Known Values
| Value | Description |
|-------|-------------|
| `http` | The external event recieved on http endpoint |



