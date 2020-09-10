
# Adobe Target Activity Schema

```
https://ns.adobe.com/experience/target/activity
```

An Adobe Target activity compares two or more experiences against the success metrics that are specified for choosing the experience that is most likely to provide the optimal results.

| [Abstract](../../../../abstract.md) | [Extensible](../../../../extensions.md) | [Status](../../../../status.md) | [Identifiable](../../../../id.md) | [Custom Properties](../../../../extensions.md) | [Additional Properties](../../../../extensions.md) | Defined In |
|-------------------------------------|-----------------------------------------|---------------------------------|-----------------------------------|------------------------------------------------|----------------------------------------------------|------------|
| Can be instantiated | Yes | Stable | No | Forbidden | Permitted | [adobe/experience/target/activity.schema.json](adobe/experience/target/activity.schema.json) |
## Schema Hierarchy

* Adobe Target Activity `https://ns.adobe.com/experience/target/activity`
  * [Activity Preview Parameters](activity/preview.schema.md) `https://ns.adobe.com/experience/target/activity/preview`


# Adobe Target Activity Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [https://ns.adobe.com/experience/target/activity/preview](#httpsnsadobecomexperiencetargetactivitypreview) | Activity Preview Parameters | Optional | Adobe Target Activity (this schema) |
| [xdm:activityEvents](#xdmactivityevents) | Adobe Target Activity Event | Optional | Adobe Target Activity (this schema) |
| [xdm:activityID](#xdmactivityid) | `string` | Optional | Adobe Target Activity (this schema) |
| [xdm:version](#xdmversion) | `string` | Optional | Adobe Target Activity (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## https://ns.adobe.com/experience/target/activity/preview


`https://ns.adobe.com/experience/target/activity/preview`
* is optional
* type: Activity Preview Parameters
* defined in this schema

### https://ns.adobe.com/experience/target/activity/preview Type


* [Activity Preview Parameters](activity/preview.schema.md) – `https://ns.adobe.com/experience/target/activity/preview`





## xdm:activityEvents


`xdm:activityEvents`
* is optional
* type: Adobe Target Activity Event

* defined in this schema

### xdm:activityEvents Type


Array type: Adobe Target Activity Event

All items must be of the type:
* [Adobe Target Activity Event](activity/activityevent.schema.md) – `https://ns.adobe.com/experience/target/activity/activityevent`








## xdm:activityID
### Activity Identifier

Unique identity of an Adobe Target activity. This identifier can be used in activity APIs offered by Adobe Target.

`xdm:activityID`
* is optional
* type: `string`
* defined in this schema

### xdm:activityID Type


`string`






## xdm:version
### Activity Version

Version of the activity that processed this given experience event.

`xdm:version`
* is optional
* type: `string`
* defined in this schema

### xdm:version Type


`string`





