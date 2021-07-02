
# Adobe Advertising Cloud Profile Template Mixin Schema

```
https://ns.adobe.com/experience/adcloud-profile
```

Adobe Advertising Cloud profile mixin for use with schemas for Solution data ingestion. Includes the core and standard profile as well as the required Adobe Advertising Cloud profile mixins.

| [Abstract](../../../abstract.md) | [Extensible](../../../extensions.md) | [Status](../../../status.md) | [Identifiable](../../../id.md) | [Custom Properties](../../../extensions.md) | [Additional Properties](../../../extensions.md) | Defined In |
|----------------------------------|--------------------------------------|------------------------------|--------------------------------|---------------------------------------------|-------------------------------------------------|------------|
| Can be instantiated | Yes | Stable | No | Forbidden | Permitted | [adobe/experience/adcloud-profile.schema.json](adobe/experience/adcloud-profile.schema.json) |
## Schema Hierarchy

* Adobe Advertising Cloud Profile Template Mixin `https://ns.adobe.com/experience/adcloud-profile`
  * [Extensibility base schema](../../datatypes/extensible.schema.md) `https://ns.adobe.com/xdm/common/extensible`
  * [Segment Membership Details](../../fieldgroups/profile/profile-segmentation.schema.md) `https://ns.adobe.com/xdm/context/profile-segmentation`
  * [Adobe Advertising Cloud Profile Full Extension](adcloud/profile-all.schema.md) `https://ns.adobe.com/experience/adcloud/profile-all`


## Adobe Advertising Cloud Profile Template Mixin Example
```json
{
  "xdm:segments": [
    {
      "xdm:segmentID": {
        "@id": "https://data.adobe.io/entities/segmentidentity/04a81716-43d6-4e7a-a49c-f1d8b3129ba9",
        "xdm:namespace": {
          "xdm:code": "AAM"
        }
      },
      "xdm:version": "15",
      "xdm:timestamp": "2018-04-26T15:52:25+00:00",
      "xdm:validUntil": "2019-04-26T15:52:25+00:00",
      "xdm:status": "existing"
    },
    {
      "xdm:segmentID": {
        "@id": "https://data.adobe.io/entities/identity/53cba6b2-a23b-454a-8069-fc41308f1c0f",
        "xdm:namespace": {
          "xdm:code": "AAM"
        }
      },
      "xdm:version": "3",
      "xdm:lastQualificationTime": "2018-04-26T15:52:25+00:00",
      "xdm:validUntil": "2018-04-27T15:52:25+00:00",
      "xdm:status": "realized"
    }
  ],
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

# Adobe Advertising Cloud Profile Template Mixin Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [xdm:segmentMembership](#xdmsegmentmembership) | `object` | Optional | [Segment Membership Details](../../fieldgroups/profile/profile-segmentation.schema.md#xdmsegmentmembership) |
| [xdm:segments](#xdmsegments) | Segment membership | Optional | [Segment Membership Details](../../fieldgroups/profile/profile-segmentation.schema.md#xdmsegments) |
| [xdm:syncedRemarketingAudiences](#xdmsyncedremarketingaudiences) | Synchronized Remarketing Audiences | Optional | [Adobe Advertising Cloud Profile Full Extension](adcloud/profile-all.schema.md#xdmsyncedremarketingaudiences) |
| `*` | any | Additional | this schema *allows* additional properties |

## xdm:segmentMembership
### Segment membership map

`xdm:segmentMembership`
* is optional
* type: `object`
* defined in [Segment Membership Details](../../fieldgroups/profile/profile-segmentation.schema.md#xdmsegmentmembership)

### xdm:segmentMembership Type


`object` with following properties:


| Property | Type | Required |
|----------|------|----------|






## xdm:segments
### Segment membership

`xdm:segments`
* is optional
* type: Segment membership

* defined in [Segment Membership Details](../../fieldgroups/profile/profile-segmentation.schema.md#xdmsegments)

### xdm:segments Type


Array type: Segment membership

All items must be of the type:
* [Segment membership](../../datatypes/segmentmembership.schema.md) – `https://ns.adobe.com/xdm/context/segmentmembership`








## xdm:syncedRemarketingAudiences
### Synchronized Segments

List of search retargeting entities that have been synced with the Adobe Advertising Cloud partner to build audiences on the platform, e.g. RLSA for Google, WCA for Facebook.

`xdm:syncedRemarketingAudiences`
* is optional
* type: Synchronized Remarketing Audiences

* defined in [Adobe Advertising Cloud Profile Full Extension](adcloud/profile-all.schema.md#xdmsyncedremarketingaudiences)

### xdm:syncedRemarketingAudiences Type


Array type: Synchronized Remarketing Audiences

All items must be of the type:
* [Synchronized Remarketing Audiences](adcloud/syncedremarketingaudience.schema.md) – `https://ns.adobe.com/experience/adcloud/syncedremarketingaudience`







