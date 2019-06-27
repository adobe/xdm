
# Profile Segmentation Schema

```
https://ns.adobe.com/xdm/context/profile-segmentation
```

Profile segmentation.

| [Abstract](../../abstract.md) | [Extensible](../../extensions.md) | [Status](../../status.md) | [Identifiable](../../id.md) | [Custom Properties](../../extensions.md) | [Additional Properties](../../extensions.md) | Defined In |
|-------------------------------|-----------------------------------|---------------------------|-----------------------------|------------------------------------------|----------------------------------------------|------------|
| Can be instantiated | Yes | Experimental | No | Forbidden | Permitted | [context/profile-segmentation.schema.json](context/profile-segmentation.schema.json) |
## Schema Hierarchy

* Profile Segmentation `https://ns.adobe.com/xdm/context/profile-segmentation`
  * [Extensibility Base Schema](../common/extensible.schema.md) `https://ns.adobe.com/xdm/common/extensible`


## Profile Segmentation Example
```json
{
  "xdm:segmentMembership": {
    "AAM": {
      "04a81716-43d6-4e7a-a49c-f1d8b3129ba9": {
        "xdm:version": "15",
        "xdm:timestamp": "2018-04-26T15:52:25+00:00",
        "xdm:validUntil": "2019-04-26T15:52:25+00:00",
        "xdm:status": "existing"
      },
      "53cba6b2-a23b-454a-8069-fc41308f1c0f": {
        "xdm:version": "3",
        "xdm:lastQualificationTime": "2018-04-26T15:52:25+00:00",
        "xdm:validUntil": "2018-04-27T15:52:25+00:00",
        "xdm:status": "realized"
      }
    },
    "Email": {
      "abcd@adobe.com": {
        "xdm:version": "1",
        "xdm:lastQualificationTime": "2017-09-26T15:52:25+00:00",
        "xdm:validUntil": "2017-12-26T15:52:25+00:00",
        "xdm:status": "exited"
      }
    }
  }
}
```

# Profile Segmentation Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [xdm:segmentMembership](#xdmsegmentmembership) | `object` | Optional | Profile Segmentation (this schema) |
| [xdm:segments](#xdmsegments) | Segment Membership | Optional | Profile Segmentation (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## xdm:segmentMembership
### Segment Membership Map

`xdm:segmentMembership`
* is optional
* type: `object`
* defined in this schema

### xdm:segmentMembership Type


`object` with following properties:


| Property | Type | Required |
|----------|------|----------|






## xdm:segments
### Segment Membership

`xdm:segments`
* is optional
* type: Segment Membership

* defined in this schema

### xdm:segments Type


Array type: Segment Membership

All items must be of the type:
* [Segment Membership](segmentmembership.schema.md) – `https://ns.adobe.com/xdm/context/segmentmembership`







