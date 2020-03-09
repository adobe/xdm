
# Profile stitch Schema

```
https://ns.adobe.com/xdm/context/profileStitch
```

Details about the IDs that were joined by profile stitching.

| [Abstract](../../abstract.md) | [Extensible](../../extensions.md) | [Status](../../status.md) | [Identifiable](../../id.md) | [Custom Properties](../../extensions.md) | [Additional Properties](../../extensions.md) | Defined In |
|-------------------------------|-----------------------------------|---------------------------|-----------------------------|------------------------------------------|----------------------------------------------|------------|
| Can be instantiated | Yes | Experimental | No | Forbidden | Permitted | [context/profilestitch.schema.json](context/profilestitch.schema.json) |
## Schema Hierarchy

* Profile stitch `https://ns.adobe.com/xdm/context/profileStitch`
  * [IdentityMap](identitymap.schema.md) `https://ns.adobe.com/xdm/context/identitymap`
  * [Profile stitch identity](profilestitchidentity.schema.md) `https://ns.adobe.com/xdm/context/profileStitchIdentity`


## Profile stitch Example
```json
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
```

# Profile stitch Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [xdm:identityMap](#xdmidentitymap) | `object` | Optional | [IdentityMap](identitymap.schema.md#xdmidentitymap) |
| [xdm:profileStitchID](#xdmprofilestitchid) | Profile stitch identity | Optional | Profile stitch (this schema) |
| [xdm:version](#xdmversion) | `string` | Optional | Profile stitch (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## xdm:identityMap


`xdm:identityMap`
* is optional
* type: `object`
* defined in [IdentityMap](identitymap.schema.md#xdmidentitymap)

### xdm:identityMap Type


`object` with following properties:


| Property | Type | Required |
|----------|------|----------|






## xdm:profileStitchID
### Profile stitch ID

The identity of the segment or snapshot definition in with the domain of the specific system that processes that type of segment.

`xdm:profileStitchID`
* is optional
* type: Profile stitch identity
* defined in this schema

### xdm:profileStitchID Type


* [Profile stitch identity](profilestitchidentity.schema.md) – `https://ns.adobe.com/xdm/context/profileStitchIdentity`





## xdm:version
### Version

The version of the profile stitch definition used and is useful for debugging.

`xdm:version`
* is optional
* type: `string`
* defined in this schema

### xdm:version Type


`string`





