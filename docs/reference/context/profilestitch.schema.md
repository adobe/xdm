
# Profile Stitch Schema

```
https://ns.adobe.com/xdm/context/profileStitch
```

Details about the ids that were joined by profile stitching.

| [Abstract](../../abstract.md) | [Extensible](../../extensions.md) | [Status](../../status.md) | [Identifiable](../../id.md) | [Custom Properties](../../extensions.md) | [Additional Properties](../../extensions.md) | Defined In |
|-------------------------------|-----------------------------------|---------------------------|-----------------------------|------------------------------------------|----------------------------------------------|------------|
| Can be instantiated | Yes | Experimental | No | Forbidden | Permitted | [context/profilestitch.schema.json](context/profilestitch.schema.json) |
## Schema Hierarchy

* Profile Stitch `https://ns.adobe.com/xdm/context/profileStitch`
  * [Identity](profilestitchidentity.schema.md) `https://ns.adobe.com/xdm/context/profileStitchIdentity`


## Profile Stitch Example
```json
{
  "xdm:profileStitchID": {
    "@id": "https://data.adobe.io/entities/profileStitchIdentity/1",
    "xdm:namespace": {
      "xdm:code": "AAM"
    }
  },
  "xdm:version": "1.0",
  "xdm:endUserIds": {
    "https://ns.adobe.com/experience/mcid": {
      "xdm:id": "https://data.adobe.io/entities/identity/92312748749128",
      "additionalIDs": [
        "https://data.adobe.io/entities/identity/62312748749321",
        "https://data.adobe.io/entities/identity/49312748749132"
      ],
      "xdm:namespace": {
        "xdm:code": "ECID"
      }
    }
  }
}
```

# Profile Stitch Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [xdm:identities](#xdmidentities) | Identity | Optional | Profile Stitch (this schema) |
| [xdm:profileStitchID](#xdmprofilestitchid) | Identity | Optional | Profile Stitch (this schema) |
| [xdm:version](#xdmversion) | `string` | Optional | Profile Stitch (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## xdm:identities
### All User Identities

Array of Identities. Condensed, normalized encapsulation of all end user identifiers.

`xdm:identities`
* is optional
* type: Identity
* at least `1` items in the array
* defined in this schema

### xdm:identities Type


Array type: Identity

All items must be of the type:
* [Identity](identity.schema.md) – `https://ns.adobe.com/xdm/context/identity`








## xdm:profileStitchID
### Profile Stitch ID

The identity of the segment or snapshot definition in with the domain of the specific system that processes that type of segment.

`xdm:profileStitchID`
* is optional
* type: Identity
* defined in this schema

### xdm:profileStitchID Type


* [Identity](profilestitchidentity.schema.md) – `https://ns.adobe.com/xdm/context/profileStitchIdentity`





## xdm:version
### Version

The version of the profile stitch definition used. Useful for debugging.

`xdm:version`
* is optional
* type: `string`
* defined in this schema

### xdm:version Type


`string`





