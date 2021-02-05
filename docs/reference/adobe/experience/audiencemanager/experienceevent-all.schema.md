
# Adobe Audience Manager ExperienceEvent Full Extension Schema

```
https://ns.adobe.com/experience/audiencemanager/experienceevent-all
```

Adobe Audience Manager ExperienceEvent full extension. Contains all Solution added fields.

| [Abstract](../../../../abstract.md) | [Extensible](../../../../extensions.md) | [Status](../../../../status.md) | [Identifiable](../../../../id.md) | [Custom Properties](../../../../extensions.md) | [Additional Properties](../../../../extensions.md) | Defined In |
|-------------------------------------|-----------------------------------------|---------------------------------|-----------------------------------|------------------------------------------------|----------------------------------------------------|------------|
| Can be instantiated | Yes | Stable | No | Forbidden | Permitted | [adobe/experience/audiencemanager/experienceevent-all.schema.json](adobe/experience/audiencemanager/experienceevent-all.schema.json) |

# Adobe Audience Manager ExperienceEvent Full Extension Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [xdm:derivedSignals](#xdmderivedsignals) | `object` | Optional | Adobe Audience Manager ExperienceEvent Full Extension (this schema) |
| [xdm:overwriteTraits](#xdmoverwritetraits) | `boolean` | Optional | Adobe Audience Manager ExperienceEvent Full Extension (this schema) |
| [xdm:signals](#xdmsignals) | `object` | Optional | Adobe Audience Manager ExperienceEvent Full Extension (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## xdm:derivedSignals
### Derived Signals

Derived properties from event data

`xdm:derivedSignals`
* is optional
* type: `object`
* defined in this schema

### xdm:derivedSignals Type


`object` with following properties:


| Property | Type | Required |
|----------|------|----------|






## xdm:overwriteTraits
### Overwrite Traits

Flag highlighting that all the traits realized before this for this id and data source, need to be discarded.

`xdm:overwriteTraits`
* is optional
* type: `boolean`
* defined in this schema

### xdm:overwriteTraits Type


`boolean`





## xdm:signals
### Signals

Additional frequently changing properties captured with an event via request parameters or other means.

`xdm:signals`
* is optional
* type: `object`
* defined in this schema

### xdm:signals Type


`object` with following properties:


| Property | Type | Required |
|----------|------|----------|





