
# Advertising Creative Management Platform Details Schema

```
https://ns.adobe.com/experience/adcloud/creative
```

Advertising Creative Management Platform details.

| [Abstract](../../../../abstract.md) | [Extensible](../../../../extensions.md) | [Status](../../../../status.md) | [Identifiable](../../../../id.md) | [Custom Properties](../../../../extensions.md) | [Additional Properties](../../../../extensions.md) | Defined In |
|-------------------------------------|-----------------------------------------|---------------------------------|-----------------------------------|------------------------------------------------|----------------------------------------------------|------------|
| Can be instantiated | Yes | Stable | No | Forbidden | Permitted | [adobe/experience/adcloud/creative.schema.json](adobe/experience/adcloud/creative.schema.json) |

## Advertising Creative Management Platform Details Example
```json
{
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
```

# Advertising Creative Management Platform Details Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [xdm:adThemeCreativeId](#xdmadthemecreativeid) | `string` | Optional | Advertising Creative Management Platform Details (this schema) |
| [xdm:experienceId](#xdmexperienceid) | `string` | Optional | Advertising Creative Management Platform Details (this schema) |
| [xdm:segments](#xdmsegments) | Adobe Advertising Cloud Audience Segment Details | Optional | Advertising Creative Management Platform Details (this schema) |
| [xdm:targetingBranchId](#xdmtargetingbranchid) | `string` | Optional | Advertising Creative Management Platform Details (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## xdm:adThemeCreativeId
### Ad Theme Creative Identifier

Identifier for the ad theme creative.

`xdm:adThemeCreativeId`
* is optional
* type: `string`
* defined in this schema

### xdm:adThemeCreativeId Type


`string`






## xdm:experienceId
### Experience Identifier

Identifier for the Creative experience.

`xdm:experienceId`
* is optional
* type: `string`
* defined in this schema

### xdm:experienceId Type


`string`






## xdm:segments
### Audience Segments Details

`xdm:segments`
* is optional
* type: Adobe Advertising Cloud Audience Segment Details

* defined in this schema

### xdm:segments Type


Array type: Adobe Advertising Cloud Audience Segment Details

All items must be of the type:
* [Adobe Advertising Cloud Audience Segment Details](adcloudsegment.schema.md) – `https://ns.adobe.com/experience/adcloud/adcloudsegment`








## xdm:targetingBranchId
### Targeting Branch Identifier

Identifier for the targeting branch.

`xdm:targetingBranchId`
* is optional
* type: `string`
* defined in this schema

### xdm:targetingBranchId Type


`string`





