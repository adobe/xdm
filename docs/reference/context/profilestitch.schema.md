
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
  * [Profile Stitch Identity](profilestitchidentity.schema.md) `https://ns.adobe.com/xdm/context/profileStitchIdentity`
  * [End User IDs](enduserids.schema.md) `https://ns.adobe.com/xdm/context/enduserids`


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
| [xdm:endUserIDs](#xdmenduserids) | End User IDs | Optional | Profile Stitch (this schema) |
| [xdm:identities](#xdmidentities) | Identity | Optional | Profile Stitch (this schema) |
| [xdm:profileStitchID](#xdmprofilestitchid) | Profile Stitch Identity | Optional | Profile Stitch (this schema) |
| [xdm:version](#xdmversion) | `string` | Optional | Profile Stitch (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## xdm:endUserIDs
### End User IDs

Condensed, normalized encapsulation of all end user identifiers. Deprecated

`xdm:endUserIDs`
* is optional
* type: End User IDs
* defined in this schema

### xdm:endUserIDs Type


* [End User IDs](enduserids.schema.md) – `https://ns.adobe.com/xdm/context/enduserids`





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
* type: Profile Stitch Identity
* defined in this schema

### xdm:profileStitchID Type


* [Profile Stitch Identity](profilestitchidentity.schema.md) – `https://ns.adobe.com/xdm/context/profileStitchIdentity`





## xdm:version
### Version

The version of the profile stitch definition used. Useful for debugging.

`xdm:version`
* is optional
* type: `string`
* defined in this schema

### xdm:version Type


`string`





