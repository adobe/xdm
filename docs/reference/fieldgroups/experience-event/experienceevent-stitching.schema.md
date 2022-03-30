
# Stitching Fields Schema

```
https://ns.adobe.com/xdm/context/experienceevent-stitching
```

Values computed by the Stitching service, which are meant to provide a more accurate customer journey.

| [Abstract](../../../abstract.md) | [Extensible](../../../extensions.md) | [Status](../../../status.md) | [Identifiable](../../../id.md) | [Custom Properties](../../../extensions.md) | [Additional Properties](../../../extensions.md) | Defined In |
|----------------------------------|--------------------------------------|------------------------------|--------------------------------|---------------------------------------------|-------------------------------------------------|------------|
| Can be instantiated | Yes | Stable | No | Forbidden | Permitted | [fieldgroups/experience-event/experienceevent-stitching.schema.json](fieldgroups/experience-event/experienceevent-stitching.schema.json) |
## Schema Hierarchy

* Stitching Fields `https://ns.adobe.com/xdm/context/experienceevent-stitching`
  * [Extensibility base schema](../../datatypes/extensible.schema.md) `https://ns.adobe.com/xdm/common/extensible`
  * [Identity](../../datatypes/identity.schema.md) `https://ns.adobe.com/xdm/context/identity`


## Stitching Fields Examples

```json
{
  "xdm:stitchedID": {
    "xdm:id": "5D0CC0572CE5A754-7164B1DCC49F9A5B",
    "xdm:namespace": {
      "xdm:code": "AVID"
    }
  }
}
```

```json
{
  "xdm:stitchedID": {
    "xdm:id": "john.doe@mail.com",
    "xdm:namespace": {
      "xdm:code": "EMAIL"
    }
  }
}
```


# Stitching Fields Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [xdm:stitchedID](#xdmstitchedid) | Identity | Optional | Stitching Fields (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## xdm:stitchedID
### Stitched ID

Identifier computed by the Stitching service, containing a pair of (id, namespace) that uniquely identifies an individual to which this event belongs.

`xdm:stitchedID`
* is optional
* type: Identity
* defined in this schema

### xdm:stitchedID Type


* [Identity](../../datatypes/identity.schema.md) – `https://ns.adobe.com/xdm/context/identity`




