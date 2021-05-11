
# Implementation Details Schema

```
https://ns.adobe.com/xdm/context/experienceevent-implementation-details
```

Information related to the software used to collect an ExperienceEvent such as environment, name, and version.

| [Abstract](../../../abstract.md) | [Extensible](../../../extensions.md) | [Status](../../../status.md) | [Identifiable](../../../id.md) | [Custom Properties](../../../extensions.md) | [Additional Properties](../../../extensions.md) | Defined In |
|----------------------------------|--------------------------------------|------------------------------|--------------------------------|---------------------------------------------|-------------------------------------------------|------------|
| Can be instantiated | Yes | Stable | No | Forbidden | Permitted | [mixins/experience-event/experienceevent-implementation-details.schema.json](mixins/experience-event/experienceevent-implementation-details.schema.json) |
## Schema Hierarchy

* Implementation Details `https://ns.adobe.com/xdm/context/experienceevent-implementation-details`
  * [Extensibility base schema](../../datatypes/extensible.schema.md) `https://ns.adobe.com/xdm/common/extensible`
  * [Implementation details](../../datatypes/industry-verticals/implementationdetails.schema.md) `https://ns.adobe.com/xdm/context/implementationdetails`


## Implementation Details Example
```json
{
  "xdm:implementationDetails": {
    "xdm:name": "https://ns.adobe.com/experience/alloy",
    "xdm:version": "0.11.0",
    "xdm:environment": "browser"
  }
}
```

# Implementation Details Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [xdm:implementationDetails](#xdmimplementationdetails) | Implementation details | Optional | Implementation Details (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## xdm:implementationDetails
### Implementation details

Accomodates tracking versioning details for the Adobe Experience Cloud solutions deployed.

`xdm:implementationDetails`
* is optional
* type: Implementation details
* defined in this schema

### xdm:implementationDetails Type


* [Implementation details](../../datatypes/industry-verticals/implementationdetails.schema.md) – `https://ns.adobe.com/xdm/context/implementationdetails`




