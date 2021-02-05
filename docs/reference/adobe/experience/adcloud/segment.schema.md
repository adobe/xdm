
# Adobe Advertising Cloud Segment Detail Schema

```
https://ns.adobe.com/experience/adcloud/segment
```

Adobe Advertising Cloud segmentation traits.

| [Abstract](../../../../abstract.md) | [Extensible](../../../../extensions.md) | [Status](../../../../status.md) | [Identifiable](../../../../id.md) | [Custom Properties](../../../../extensions.md) | [Additional Properties](../../../../extensions.md) | Defined In |
|-------------------------------------|-----------------------------------------|---------------------------------|-----------------------------------|------------------------------------------------|----------------------------------------------------|------------|
| Can be instantiated | Yes | Stable | No | Forbidden | Permitted | [adobe/experience/adcloud/segment.schema.json](adobe/experience/adcloud/segment.schema.json) |

## Adobe Advertising Cloud Segment Detail Example
```json
{
  "xdm:attributablePartnerId": "13",
  "xdm:attributableSegmentId": "123445",
  "xdm:segments": "AbbKlvGfgVH7WK2TH6jd,5lmd4aQCvvrv1yIhjlLQ,9uGk1eYROeHVWiGAOR4p"
}
```

# Adobe Advertising Cloud Segment Detail Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [xdm:attributablePartnerId](#xdmattributablepartnerid) | `string` | Optional | Adobe Advertising Cloud Segment Detail (this schema) |
| [xdm:attributableSegmentId](#xdmattributablesegmentid) | `string` | Optional | Adobe Advertising Cloud Segment Detail (this schema) |
| [xdm:segments](#xdmsegments) | `string` | Optional | Adobe Advertising Cloud Segment Detail (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## xdm:attributablePartnerId
### Attributable Partner ID

The segment provider who owns the attributableSegmentId.

`xdm:attributablePartnerId`
* is optional
* type: `string`
* defined in this schema

### xdm:attributablePartnerId Type


`string`






## xdm:attributableSegmentId
### Attributable Segment ID

The single segment accredit for user targeting among all the segments in the placement's targeting rule for the purposes of tracking costs and paying partners.

`xdm:attributableSegmentId`
* is optional
* type: `string`
* defined in this schema

### xdm:attributableSegmentId Type


`string`






## xdm:segments
### Segments

The intersection of the user segments that both: a) the user belonged to, and b) the ad was targeting. NOT the full list of segments that the user belonged to at the time of the auction.

`xdm:segments`
* is optional
* type: `string`
* defined in this schema

### xdm:segments Type


`string`





