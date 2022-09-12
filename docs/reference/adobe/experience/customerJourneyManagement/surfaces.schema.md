
# Adobe CJM ExperienceEvent - Surfaces Schema

```
https://ns.adobe.com/experience/customerJourneyManagement/surfaces
```

Surfaces for the Adobe CJM ExperienceEvent.

| [Abstract](../../../../abstract.md) | [Extensible](../../../../extensions.md) | [Status](../../../../status.md) | [Identifiable](../../../../id.md) | [Custom Properties](../../../../extensions.md) | [Additional Properties](../../../../extensions.md) | Defined In |
|-------------------------------------|-----------------------------------------|---------------------------------|-----------------------------------|------------------------------------------------|----------------------------------------------------|------------|
| Can be instantiated | Yes | Stable | No | Forbidden | Permitted | [adobe/experience/customerJourneyManagement/surfaces.schema.json](adobe/experience/customerJourneyManagement/surfaces.schema.json) |
## Schema Hierarchy

* Adobe CJM ExperienceEvent - Surfaces `https://ns.adobe.com/experience/customerJourneyManagement/surfaces`
  * [Extensibility base schema](../../../datatypes/extensible.schema.md) `https://ns.adobe.com/xdm/common/extensible`


## Adobe CJM ExperienceEvent - Surfaces Example
```json
{
  "https://ns.adobe.com/experience/customerJourneyManagement/surfaces": [
    "web://adobe.com/"
  ]
}
```

# Adobe CJM ExperienceEvent - Surfaces Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [https://ns.adobe.com/experience/customerJourneyManagement/surfaces](#httpsnsadobecomexperiencecustomerjourneymanagementsurfaces) | `string[]` | **Required** | Adobe CJM ExperienceEvent - Surfaces (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## https://ns.adobe.com/experience/customerJourneyManagement/surfaces
### Surfaces

Array of Surface for AJO Inbound channel delivery

`https://ns.adobe.com/experience/customerJourneyManagement/surfaces`
* is **required**
* type: `string[]`

* defined in this schema

### https://ns.adobe.com/experience/customerJourneyManagement/surfaces Type


Array type: `string[]`

All items must be of the type:
`string`








