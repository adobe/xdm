
# Profile Stitch Details Schema

```
https://ns.adobe.com/xdm/context/experienceevent-profile-stitch
```

Profile stitching details such as identity and profile IDs.

| [Abstract](../../../abstract.md) | [Extensible](../../../extensions.md) | [Status](../../../status.md) | [Identifiable](../../../id.md) | [Custom Properties](../../../extensions.md) | [Additional Properties](../../../extensions.md) | Defined In |
|----------------------------------|--------------------------------------|------------------------------|--------------------------------|---------------------------------------------|-------------------------------------------------|------------|
| Can be instantiated | Yes | Stable | No | Forbidden | Permitted | [mixins/experience-event/experienceevent-profile-stitch.schema.json](mixins/experience-event/experienceevent-profile-stitch.schema.json) |
## Schema Hierarchy

* Profile Stitch Details `https://ns.adobe.com/xdm/context/experienceevent-profile-stitch`
  * [Extensibility base schema](../../datatypes/extensible.schema.md) `https://ns.adobe.com/xdm/common/extensible`


## Profile Stitch Details Example
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

# Profile Stitch Details Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [xdm:profileStitch](#xdmprofilestitch) | Profile stitch | Optional | Profile Stitch Details (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## xdm:profileStitch
### Profile stitch

Details about the IDs that were joined by profile stitching.

`xdm:profileStitch`
* is optional
* type: Profile stitch

* defined in this schema

### xdm:profileStitch Type


Array type: Profile stitch

All items must be of the type:
* [Profile stitch](../../datatypes/profilestitch.schema.md) – `https://ns.adobe.com/xdm/context/profileStitch`







