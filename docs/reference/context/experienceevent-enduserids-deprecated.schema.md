
# ExperienceEvent endUserIDs (deprecated) Schema

```
https://ns.adobe.com/xdm/context/experienceevent-enduserids-deprecated
```

ExperienceEvent endUserIDs (deprecated).

| [Abstract](../../abstract.md) | [Extensible](../../extensions.md) | [Status](../../status.md) | [Identifiable](../../id.md) | [Custom Properties](../../extensions.md) | [Additional Properties](../../extensions.md) | Defined In |
|-------------------------------|-----------------------------------|---------------------------|-----------------------------|------------------------------------------|----------------------------------------------|------------|
| Can be instantiated | Yes | Deprecated | No | Forbidden | Permitted | [context/experienceevent-enduserids-deprecated.schema.json](context/experienceevent-enduserids-deprecated.schema.json) |
## Schema Hierarchy

* ExperienceEvent endUserIDs (deprecated) `https://ns.adobe.com/xdm/context/experienceevent-enduserids-deprecated`
  * [Extensibility base schema](../common/extensible.schema.md) `https://ns.adobe.com/xdm/common/extensible`
  * [End user IDs](enduserids.schema.md) `https://ns.adobe.com/xdm/context/enduserids`


## ExperienceEvent endUserIDs (deprecated) Example
```json
{
  "xdm:endUserIDs": {
    "https://ns.adobe.com/experience/mcid": {
      "@id": "https://data.adobe.io/entities/identity/92312748749128",
      "xdm:namespace": {
        "xdm:code": "ECID"
      }
    },
    "https://ns.adobe.com/experience/aaid": {
      "@id": "https://data.adobe.io/entities/identity/2394509340-30453470347",
      "xdm:namespace": {
        "xdm:code": "AVID"
      }
    },
    "https://ns.adobe.com/experience/tntid": {
      "@id": "https://data.adobe.io/entities/identity/1233ce17-20e0-4a2c-8198-2a77fd60cf4d",
      "xdm:namespace": {
        "xdm:code": "tnt0051"
      }
    }
  }
}
```

# ExperienceEvent endUserIDs (deprecated) Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [xdm:endUserIDs](#xdmenduserids) | End user IDs | Optional | ExperienceEvent endUserIDs (deprecated) (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## xdm:endUserIDs
### End-User IDs

Condensed, normalized encapsulation of all end-user identifiers. Deprecated, use `xdm:identityMap` instead.

`xdm:endUserIDs`
* is optional
* type: End user IDs
* defined in this schema

### xdm:endUserIDs Type


* [End user IDs](enduserids.schema.md) – `https://ns.adobe.com/xdm/context/enduserids`




