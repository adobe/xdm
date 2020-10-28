
# Application Details Schema

```
https://ns.adobe.com/xdm/context/experienceevent-application
```

Application related data such as crashes, feature usage, launches, and upgrades.

| [Abstract](../../../abstract.md) | [Extensible](../../../extensions.md) | [Status](../../../status.md) | [Identifiable](../../../id.md) | [Custom Properties](../../../extensions.md) | [Additional Properties](../../../extensions.md) | Defined In |
|----------------------------------|--------------------------------------|------------------------------|--------------------------------|---------------------------------------------|-------------------------------------------------|------------|
| Can be instantiated | Yes | Stable | No | Forbidden | Permitted | [mixins/experience-event/experienceevent-application.schema.json](mixins/experience-event/experienceevent-application.schema.json) |
## Schema Hierarchy

* Application Details `https://ns.adobe.com/xdm/context/experienceevent-application`
  * [Extensibility base schema](../../datatypes/extensible.schema.md) `https://ns.adobe.com/xdm/common/extensible`
  * [Application](../../datatypes/application.schema.md) `https://ns.adobe.com/xdm/context/application`


## Application Details Example
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

# Application Details Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [xdm:application](#xdmapplication) | Application | Optional | Application Details (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## xdm:application
### Application

This mixin is used to capture application information related to an ExperienceEvent, including the name of the application, app version, installs, launches, crashes, and closures. It could be either the application targeted by the event like the send of a push notification or the application originating the event such as a click, or a login.

`xdm:application`
* is optional
* type: Application
* defined in this schema

### xdm:application Type


* [Application](../../datatypes/application.schema.md) – `https://ns.adobe.com/xdm/context/application`




