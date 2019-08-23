
# ExperienceEvent Application Details Schema

```
https://ns.adobe.com/xdm/context/experienceevent-application
```

ExperienceEvent application details.

| [Abstract](../../abstract.md) | [Extensible](../../extensions.md) | [Status](../../status.md) | [Identifiable](../../id.md) | [Custom Properties](../../extensions.md) | [Additional Properties](../../extensions.md) | Defined In |
|-------------------------------|-----------------------------------|---------------------------|-----------------------------|------------------------------------------|----------------------------------------------|------------|
| Can be instantiated | Yes | Stabilizing | No | Forbidden | Permitted | [context/experienceevent-application.schema.json](context/experienceevent-application.schema.json) |
## Schema Hierarchy

* ExperienceEvent Application Details `https://ns.adobe.com/xdm/context/experienceevent-application`
  * [Extensibility Base Schema](../common/extensible.schema.md) `https://ns.adobe.com/xdm/common/extensible`
  * [Application](application.schema.md) `https://ns.adobe.com/xdm/context/application`


## ExperienceEvent Application Details Example
```json
{
  "xdm:application": {
    "xdm:id": "A123",
    "xdm:name": "Myapp",
    "xdm:version": "1.0.1",
    "xdm:launches": {
      "xdm:value": 1
    }
  }
}
```

# ExperienceEvent Application Details Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [xdm:application](#xdmapplication) | Application | Optional | ExperienceEvent Application Details (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## xdm:application
### Application

Application related data from  ExperienceEvent observations. It could be either the application targeted by the event like the send of a push notification or the application originating the event such as a click, or a login.

`xdm:application`
* is optional
* type: Application
* defined in this schema

### xdm:application Type


* [Application](application.schema.md) – `https://ns.adobe.com/xdm/context/application`




