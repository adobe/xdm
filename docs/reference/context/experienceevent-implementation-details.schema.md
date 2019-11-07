
# ExperienceEvent Implementation Details Schema

```
https://ns.adobe.com/xdm/context/experienceevent-implementation-details
```

Field to capture the details of the software used to collect the ExperienceEvent.

| [Abstract](../../abstract.md) | [Extensible](../../extensions.md) | [Status](../../status.md) | [Identifiable](../../id.md) | [Custom Properties](../../extensions.md) | [Additional Properties](../../extensions.md) | Defined In |
|-------------------------------|-----------------------------------|---------------------------|-----------------------------|------------------------------------------|----------------------------------------------|------------|
| Can be instantiated | Yes | Stabilizing | No | Forbidden | Permitted | [context/experienceevent-implementation-details.schema.json](context/experienceevent-implementation-details.schema.json) |
## Schema Hierarchy

* ExperienceEvent Implementation Details `https://ns.adobe.com/xdm/context/experienceevent-implementation-details`
  * [Extensibility Base Schema](../common/extensible.schema.md) `https://ns.adobe.com/xdm/common/extensible`
  * [Implementation Details](implementationdetails.schema.md) `https://ns.adobe.com/xdm/context/implementationdetails`


## ExperienceEvent Implementation Details Example
```json
{
  "xdm:implementationDetails": {
    "xdm:name": "https://ns.adobe.com/experience/alloy",
    "xdm:version": "0.11.0"
  }
}
```

# ExperienceEvent Implementation Details Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [xdm:implementationDetails](#xdmimplementationdetails) | Implementation Details | Optional | ExperienceEvent Implementation Details (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## xdm:implementationDetails
### Implementation Details

The details of the software used to collect the ExperienceEvent.

`xdm:implementationDetails`
* is optional
* type: Implementation Details
* defined in this schema

### xdm:implementationDetails Type


* [Implementation Details](implementationdetails.schema.md) – `https://ns.adobe.com/xdm/context/implementationdetails`




