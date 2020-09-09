
# Adobe Advertising Cloud Profile Full Extension Schema

```
https://ns.adobe.com/experience/adcloud/profile-all
```

Details related to Adobe Advertising Cloud ExperienceEvent full extension. Contains all Solution added fields.

| [Abstract](../../../../abstract.md) | [Extensible](../../../../extensions.md) | [Status](../../../../status.md) | [Identifiable](../../../../id.md) | [Custom Properties](../../../../extensions.md) | [Additional Properties](../../../../extensions.md) | Defined In |
|-------------------------------------|-----------------------------------------|---------------------------------|-----------------------------------|------------------------------------------------|----------------------------------------------------|------------|
| Can be instantiated | Yes | Stable | No | Forbidden | Permitted | [adobe/experience/adcloud/profile-all.schema.json](adobe/experience/adcloud/profile-all.schema.json) |

## Adobe Advertising Cloud Profile Full Extension Example
```json
{
  "xdm:syncedRemarketingAudiences": [
    {
      "xdm:segmentID": "https://data.adobe.io/entities/segmentidentity/04a81716-43d6-4e7a-a49c-f1d8b3129ba9",
      "xdm:segmentType": 3,
      "xdm:timestamp": "2018-08-07T08:06:34.672Z",
      "xdm:partnerDetails": [
        {
          "xdm:id": "2",
          "xdm:data": "sample-conversion-id-123"
        },
        {
          "xdm:id": "1",
          "xdm:data": "sample-conversion-id-124"
        }
      ]
    },
    {
      "xdm:segmentID": "https://data.adobe.io/entities/segmentidentity/53cba6b2-a23b-454a-8069-fc41308f1c0f",
      "xdm:segmentType": 3,
      "xdm:timestamp": "2018-08-07T08:06:34.672Z",
      "xdm:partnerDetails": [
        {
          "xdm:id": "2",
          "xdm:data": "sample-conversion-id-125"
        },
        {
          "xdm:id": "1",
          "xdm:data": "sample-conversion-id-126"
        }
      ]
    }
  ]
}
```

# Adobe Advertising Cloud Profile Full Extension Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [xdm:syncedRemarketingAudiences](#xdmsyncedremarketingaudiences) | Synchronized Remarketing Audiences | Optional | Adobe Advertising Cloud Profile Full Extension (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## xdm:syncedRemarketingAudiences
### Synchronized Segments

List of search retargeting entities that have been synced with the Adobe Advertising Cloud partner to build audiences on the platform, e.g. RLSA for Google, WCA for Facebook.

`xdm:syncedRemarketingAudiences`
* is optional
* type: Synchronized Remarketing Audiences

* defined in this schema

### xdm:syncedRemarketingAudiences Type


Array type: Synchronized Remarketing Audiences

All items must be of the type:
* [Synchronized Remarketing Audiences](syncedremarketingaudience.schema.md) – `https://ns.adobe.com/experience/adcloud/syncedremarketingaudience`







