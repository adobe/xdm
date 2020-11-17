
# Orchestration eventID Schema

```
https://ns.adobe.com/experience/campaign/orchestration/eventid
```

ID for a journey triggering event.

| [Abstract](../../../../../abstract.md) | [Extensible](../../../../../extensions.md) | [Status](../../../../../status.md) | [Identifiable](../../../../../id.md) | [Custom Properties](../../../../../extensions.md) | [Additional Properties](../../../../../extensions.md) | Defined In |
|----------------------------------------|--------------------------------------------|------------------------------------|--------------------------------------|---------------------------------------------------|-------------------------------------------------------|------------|
| Can be instantiated | Yes | Stable | No | Forbidden | Permitted | [adobe/experience/campaign/orchestration/eventid.schema.json](adobe/experience/campaign/orchestration/eventid.schema.json) |

# Orchestration eventID Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [https://ns.adobe.com/experience/campaign/orchestration](#httpsnsadobecomexperiencecampaignorchestration) | `object` | Optional | Orchestration eventID (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## https://ns.adobe.com/experience/campaign/orchestration
### Campaign Orchestration for creating user journey.

`https://ns.adobe.com/experience/campaign/orchestration`
* is optional
* type: `object`
* defined in this schema

### https://ns.adobe.com/experience/campaign/orchestration Type


`object` with following properties:


| Property | Type | Required |
|----------|------|----------|
| `xdm:eventID`| string | Optional |
| `xdm:originJourneyID`| string | Optional |



#### xdm:eventID
##### Event ID

ID that identifies the event sent by the data source. This is used by Campaign orchestration to identify the event without inspecting its payload to determine which action should be triggered when the event is received. The value is automatically generated in Campaign at event creation time, it is globally unique across organizations.

`xdm:eventID`
* is optional
* type: `string`

##### xdm:eventID Type


`string`








#### xdm:originJourneyID
##### Origin Journey ID

In case of jump between 2 journeys, ID of the journey where the event comes from.

`xdm:originJourneyID`
* is optional
* type: `string`

##### xdm:originJourneyID Type


`string`










