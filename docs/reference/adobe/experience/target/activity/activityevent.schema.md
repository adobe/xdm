
# Adobe Target Activity Event Schema

```
https://ns.adobe.com/experience/target/activity/activityevent
```

Represents executed Adobe Target activity and activity events.

| [Abstract](../../../../../abstract.md) | [Extensible](../../../../../extensions.md) | [Status](../../../../../status.md) | [Identifiable](../../../../../id.md) | [Custom Properties](../../../../../extensions.md) | [Additional Properties](../../../../../extensions.md) | Defined In |
|----------------------------------------|--------------------------------------------|------------------------------------|--------------------------------------|---------------------------------------------------|-------------------------------------------------------|------------|
| Can be instantiated | Yes | Stable | No | Forbidden | Permitted | [adobe/experience/target/activity/activityevent.schema.json](adobe/experience/target/activity/activityevent.schema.json) |
## Schema Hierarchy

* Adobe Target Activity Event `https://ns.adobe.com/experience/target/activity/activityevent`
  * [Event Context](activityevent/context.schema.md) `https://ns.adobe.com/experience/target/activity/activityevent/context`
  * [Measure](../../../../datatypes/data/measure.schema.md) `https://ns.adobe.com/xdm/data/measure`
  * [Event Scope](activityevent/eventscope.schema.md) `https://ns.adobe.com/experience/target/activity/activityevent/eventscope`


# Adobe Target Activity Event Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [https://ns.adobe.com/experience/target/activity/activityevent/context](#httpsnsadobecomexperiencetargetactivityactivityeventcontext) | Event Context | Optional | Adobe Target Activity Event (this schema) |
| [xdm:eventScope](#xdmeventscope) | `enum` | Optional | Adobe Target Activity Event (this schema) |
| [xdm:optionEvents](#xdmoptionevents) | Activity Option Event | Optional | Adobe Target Activity Event (this schema) |
| [xdm:score](#xdmscore) | Measure | Optional | Adobe Target Activity Event (this schema) |
| [xdm:segmentEvents](#xdmsegmentevents) | Activity Segment Event | Optional | Adobe Target Activity Event (this schema) |
| [xdm:strategy](#xdmstrategy) | `enum` | Optional | Adobe Target Activity Event (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## https://ns.adobe.com/experience/target/activity/activityevent/context


`https://ns.adobe.com/experience/target/activity/activityevent/context`
* is optional
* type: Event Context
* defined in this schema

### https://ns.adobe.com/experience/target/activity/activityevent/context Type


* [Event Context](activityevent/context.schema.md) – `https://ns.adobe.com/experience/target/activity/activityevent/context`





## xdm:eventScope


`xdm:eventScope`
* is optional
* type: `enum`
* defined in this schema

The value of this property **must** be equal to one of the [known values below](#xdmeventscope-known-values).

### xdm:eventScope Known Values
| Value | Description |
|-------|-------------|
| `visitor` | Activity got a new visitor. |
| `visit` | Activity got a new visit. |
| `impression` | Activity got a new impression. |




## xdm:optionEvents


`xdm:optionEvents`
* is optional
* type: Activity Option Event

* defined in this schema

### xdm:optionEvents Type


Array type: Activity Option Event

All items must be of the type:
* [Activity Option Event](activityevent/optionevent.schema.md) – `https://ns.adobe.com/experience/target/activity/activityevent/optionevent`








## xdm:score
### Engagement Metric Score

The capture score engagement metric calculates an aggregated score based on the value assigned to pages visited on the site, from the point the visitor first sees the campaign's first display mbox.

`xdm:score`
* is optional
* type: Measure
* defined in this schema

### xdm:score Type


* [Measure](../../../../datatypes/data/measure.schema.md) – `https://ns.adobe.com/xdm/data/measure`





## xdm:segmentEvents


`xdm:segmentEvents`
* is optional
* type: Activity Segment Event

* defined in this schema

### xdm:segmentEvents Type


Array type: Activity Segment Event

All items must be of the type:
* [Activity Segment Event](activityevent/segmentevent.schema.md) – `https://ns.adobe.com/experience/target/activity/activityevent/segmentevent`








## xdm:strategy
### Activity Event Strategy

Custom behavior strategy for both content viewing and counting when visiting a success metric.

`xdm:strategy`
* is optional
* type: `enum`
* defined in this schema

The value of this property **must** be equal to one of the [known values below](#xdmstrategy-known-values).

### xdm:strategy Known Values
| Value | Description |
|-------|-------------|
| `none` | Continue to display content from the same experience. Never count the visitor more than once. |
| `reconvert` | Continue to display content from the same experience. Count the visitor again if they visit any other mbox before visiting this success metric again. |
| `alwaysConvert` | Continue to display content from the same experience. Count the visitor again every time they visit this success metric |
| `restartSameExperience` | Continue to display content from the same experience. Count the visitor again if they re-fulfill the campaign entry conditions. |
| `restartRandomExperience` | Run experience selection again to determine the content to display. Count the visitor again if they re-fulfill the campaign entry conditions. |
| `restartNewExperience` | Run experience selection again to determine the content to display, but exclude any experiences the visitor has already seen. Count the visitor again if they re-fulfill the campaign entry conditions. |
| `excludeSameExperience` | Continue to display content from the same experience. Never count the visitor more than once. |
| `ban` | Ban user from campaign. |
| `excludeDefaultContent` | Display default content. Never count the visitor again. |
| `experienceFrequencyCapping` | Cap experience by frequency. |



