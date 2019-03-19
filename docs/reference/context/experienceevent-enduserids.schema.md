
# ExperienceEvent endUserIDs Schema

```
https://ns.adobe.com/xdm/context/experienceevent-enduserids
```

Condensed, normalized encapsulation of end user identifiers asserted for this ExperienceEvent.

| [Abstract](../../abstract.md) | [Extensible](../../extensions.md) | [Status](../../status.md) | [Identifiable](../../id.md) | [Custom Properties](../../extensions.md) | [Additional Properties](../../extensions.md) | Defined In |
|-------------------------------|-----------------------------------|---------------------------|-----------------------------|------------------------------------------|----------------------------------------------|------------|
| Can be instantiated | Yes | Stabilizing | No | Forbidden | Permitted | [context/experienceevent-enduserids.schema.json](context/experienceevent-enduserids.schema.json) |
## Schema Hierarchy

* ExperienceEvent endUserIDs `https://ns.adobe.com/xdm/context/experienceevent-enduserids`
  * [Extensibility base schema](../common/extensible.schema.md) `https://ns.adobe.com/xdm/common/extensible`
  * [End User IDs](enduserids.schema.md) `https://ns.adobe.com/xdm/context/enduserids`


## ExperienceEvent endUserIDs Example
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

# ExperienceEvent endUserIDs Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [xdm:endUserIDs](#xdmenduserids) | End User IDs | Optional | ExperienceEvent endUserIDs (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## xdm:endUserIDs
### End User IDs

Condensed, normalized encapsulation of end user identifiers asserted for this ExperienceEvent.

`xdm:endUserIDs`
* is optional
* type: End User IDs
* defined in this schema

### xdm:endUserIDs Type


* [End User IDs](enduserids.schema.md) – `https://ns.adobe.com/xdm/context/enduserids`




