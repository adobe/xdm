
# ExperienceEvent Profile Stitch Details Schema

```
https://ns.adobe.com/xdm/context/experienceevent-profile-stitch
```

ExperienceEvent profile stitch details.

| [Abstract](../../abstract.md) | [Extensible](../../extensions.md) | [Status](../../status.md) | [Identifiable](../../id.md) | [Custom Properties](../../extensions.md) | [Additional Properties](../../extensions.md) | Defined In |
|-------------------------------|-----------------------------------|---------------------------|-----------------------------|------------------------------------------|----------------------------------------------|------------|
| Can be instantiated | Yes | Stabilizing | No | Forbidden | Permitted | [context/experienceevent-profile-stitch.schema.json](context/experienceevent-profile-stitch.schema.json) |
## Schema Hierarchy

* ExperienceEvent Profile Stitch Details `https://ns.adobe.com/xdm/context/experienceevent-profile-stitch`
  * [Extensibility Base Schema](../common/extensible.schema.md) `https://ns.adobe.com/xdm/common/extensible`


## ExperienceEvent Profile Stitch Details Example
```json
{
  "xdm:profileStitch": [
    {
      "xdm:profileStitchID": {
        "@id": "https://data.adobe.io/entities/profileStitchIdentity/1",
        "xdm:namespace": {
          "xdm:code": "AAM"
        }
      },
      "xdm:version": "1.0",
      "xdm:identityMap": {
        "ECID": [
          {
            "xdm:id": "https://data.adobe.io/entities/identity/92312748749128"
          },
          {
            "xdm:id": "https://data.adobe.io/entities/identity/62312748749321"
          },
          {
            "xdm:id": "https://data.adobe.io/entities/identity/49312748749132"
          }
        ]
      }
    }
  ],
  "xdm:segmentMemberships": [
    {
      "xdm:segmentID": {
        "@id": "https://data.adobe.io/entities/identity/92312748749128",
        "xdm:namespace": {
          "xdm:code": "AAM"
        }
      },
      "xdm:profileStitchID": {
        "@id": "https://data.adobe.io/entities/profileStitchIdentity/1",
        "xdm:namespace": {
          "xdm:code": "AAM"
        },
        "xdm:lastQualificationTime": "2017-09-26T15:52:25+00:00",
        "xdm:version": "1.0",
        "xdm:validUntil": "2017-12-26T15:52:25+00:00",
        "xdm:status": "realized"
      }
    }
  ]
}
```

# ExperienceEvent Profile Stitch Details Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [xdm:profileStitch](#xdmprofilestitch) | Profile Stitch | Optional | ExperienceEvent Profile Stitch Details (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## xdm:profileStitch
### Profile Stitch

Details about the IDs that were joined by profile stitching.

`xdm:profileStitch`
* is optional
* type: Profile Stitch

* defined in this schema

### xdm:profileStitch Type


Array type: Profile Stitch

All items must be of the type:
* [Profile Stitch](profilestitch.schema.md) – `https://ns.adobe.com/xdm/context/profileStitch`







