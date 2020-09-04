
# Adobe Advertising Cloud Creative Management Platform Event Extension Schema

```
https://ns.adobe.com/experience/adcloud/creative-event
```

Adobe Advertising Cloud Creative Management Platform Event extension.

| [Abstract](../../../../abstract.md) | [Extensible](../../../../extensions.md) | [Status](../../../../status.md) | [Identifiable](../../../../id.md) | [Custom Properties](../../../../extensions.md) | [Additional Properties](../../../../extensions.md) | Defined In |
|-------------------------------------|-----------------------------------------|---------------------------------|-----------------------------------|------------------------------------------------|----------------------------------------------------|------------|
| Can be instantiated | Yes | Stable | No | Forbidden | Permitted | [adobe/experience/adcloud/creative-event.schema.json](adobe/experience/adcloud/creative-event.schema.json) |
## Schema Hierarchy

* Adobe Advertising Cloud Creative Management Platform Event Extension `https://ns.adobe.com/experience/adcloud/creative-event`
  * [XDM ExperienceEvent](../../../classes/experienceevent.schema.md) `https://ns.adobe.com/xdm/context/experienceevent`
  * [Advertising Creative Management Platform Details](creative.schema.md) `https://ns.adobe.com/experience/adcloud/creative`


## Adobe Advertising Cloud Creative Management Platform Event Extension Example
```json
{
  "https://ns.adobe.com/experience/adcloud/creative": {
    "xdm:experienceId": "1001",
    "xdm:targetingBranchId": "4001",
    "xdm:adThemeCreativeId": "3001",
    "xdm:segments": [
      {
        "xdm:identityMap": {
          "AdCloudSegments": [
            {
              "xdm:id": "112233",
              "xdm:primary": true
            }
          ]
        },
        "xdm:segmentName": "Users with TV segment",
        "xdm:description": "Segment is about users who have TV",
        "xdm:segmentStatus": "ACTIVE",
        "repo:createDate": "2018-10-23T12:00:00-06:00",
        "repo:modifyDate": "2019-03-21T12:00:00-06:00",
        "xdm:targeted": true,
        "xdm:partnerId": "10"
      }
    ]
  }
}
```

# Adobe Advertising Cloud Creative Management Platform Event Extension Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [https://ns.adobe.com/experience/adcloud/creative](#httpsnsadobecomexperienceadcloudcreative) | Advertising Creative Management Platform Details | Optional | Adobe Advertising Cloud Creative Management Platform Event Extension (this schema) |
| [xdm:eventMergeId](#xdmeventmergeid) | `string` | Optional | [XDM ExperienceEvent](../../../classes/experienceevent.schema.md#xdmeventmergeid) |
| `*` | any | Additional | this schema *allows* additional properties |

## https://ns.adobe.com/experience/adcloud/creative
### Advertising Creative Management Platform Details

Advertising Creative Management Platform Details.

`https://ns.adobe.com/experience/adcloud/creative`
* is optional
* type: Advertising Creative Management Platform Details
* defined in this schema

### https://ns.adobe.com/experience/adcloud/creative Type


* [Advertising Creative Management Platform Details](creative.schema.md) – `https://ns.adobe.com/experience/adcloud/creative`





## xdm:eventMergeId
### ExperienceEvent merge ID

An ID to correlate or merge multiple Experience events together that are essentially the same event or should be merged. This is intended to be populated by the data producer prior to ingestion.

`xdm:eventMergeId`
* is optional
* type: `string`
* defined in [XDM ExperienceEvent](../../../classes/experienceevent.schema.md#xdmeventmergeid)

### xdm:eventMergeId Type


`string`





