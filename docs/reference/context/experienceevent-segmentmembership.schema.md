
# ExperienceEvent Segment Membership Details Schema

```
https://ns.adobe.com/xdm/context/experienceevent-segmentmembership
```

This mixin is used to capture information regarding ExperienceEvent segment membership, including which segments the individual belongs to, the last qualification time, and when the membership is valid until.

| [Abstract](../../abstract.md) | [Extensible](../../extensions.md) | [Status](../../status.md) | [Identifiable](../../id.md) | [Custom Properties](../../extensions.md) | [Additional Properties](../../extensions.md) | Defined In |
|-------------------------------|-----------------------------------|---------------------------|-----------------------------|------------------------------------------|----------------------------------------------|------------|
| Can be instantiated | Yes | Stabilizing | No | Forbidden | Permitted | [context/experienceevent-segmentmembership.schema.json](context/experienceevent-segmentmembership.schema.json) |
## Schema Hierarchy

* ExperienceEvent Segment Membership Details `https://ns.adobe.com/xdm/context/experienceevent-segmentmembership`
  * [Extensibility base schema](../common/extensible.schema.md) `https://ns.adobe.com/xdm/common/extensible`


## ExperienceEvent Segment Membership Details Example
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

# ExperienceEvent Segment Membership Details Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [xdm:segmentMembership](#xdmsegmentmembership) | `object` | Optional | ExperienceEvent Segment Membership Details (this schema) |
| [xdm:segmentMemberships](#xdmsegmentmemberships) | Segment membership item | Optional | ExperienceEvent Segment Membership Details (this schema) |
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






## xdm:segmentMemberships
### Segment Memberships

The segments associated with this ExperienceEvent. Deprecated, use `xdm:segmentMembership` instead.

`xdm:segmentMemberships`
* is optional
* type: Segment membership item

* defined in this schema

### xdm:segmentMemberships Type


Array type: Segment membership item

All items must be of the type:
* [Segment membership item](segmentmembershipitem.schema.md) – `https://ns.adobe.com/xdm/context/segmentmembershipitem`







