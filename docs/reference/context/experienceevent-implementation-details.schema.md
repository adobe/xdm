
# ExperienceEvent implementation details Schema

```
https://ns.adobe.com/xdm/context/experienceevent-implementation-details
```

Field to capture the details of the software used to collect the ExperienceEvent.

| [Abstract](../../abstract.md) | [Extensible](../../extensions.md) | [Status](../../status.md) | [Identifiable](../../id.md) | [Custom Properties](../../extensions.md) | [Additional Properties](../../extensions.md) | Defined In |
|-------------------------------|-----------------------------------|---------------------------|-----------------------------|------------------------------------------|----------------------------------------------|------------|
| Can be instantiated | Yes | Stabilizing | No | Forbidden | Permitted | [context/experienceevent-implementation-details.schema.json](context/experienceevent-implementation-details.schema.json) |
## Schema Hierarchy

* ExperienceEvent implementation details `https://ns.adobe.com/xdm/context/experienceevent-implementation-details`
  * [Extensibility base schema](../common/extensible.schema.md) `https://ns.adobe.com/xdm/common/extensible`
  * [Implementation details](implementationdetails.schema.md) `https://ns.adobe.com/xdm/context/implementationdetails`


## ExperienceEvent implementation details Example
```json
{
  "xdm:implementationDetails": {
    "xdm:name": "https://ns.adobe.com/experience/alloy",
    "xdm:version": "0.11.0"
  }
}
```

# ExperienceEvent implementation details Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [xdm:implementationDetails](#xdmimplementationdetails) | Implementation details | Optional | ExperienceEvent implementation details (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## xdm:implementationDetails
### Implementation details

The details of the software used to collect the ExperienceEvent.

`xdm:implementationDetails`
* is optional
* type: Implementation details
* defined in this schema

### xdm:implementationDetails Type


* [Implementation details](implementationdetails.schema.md) – `https://ns.adobe.com/xdm/context/implementationdetails`




