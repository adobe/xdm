
# Activity Segment Event Schema

```
https://ns.adobe.com/experience/target/activity/activityevent/segmentevent
```

Represents activity segment event.

| [Abstract](../../../../../../abstract.md) | [Extensible](../../../../../../extensions.md) | [Status](../../../../../../status.md) | [Identifiable](../../../../../../id.md) | [Custom Properties](../../../../../../extensions.md) | [Additional Properties](../../../../../../extensions.md) | Defined In |
|-------------------------------------------|-----------------------------------------------|---------------------------------------|-----------------------------------------|------------------------------------------------------|----------------------------------------------------------|------------|
| Can be instantiated | Yes | Stable | No | Forbidden | Permitted | [adobe/experience/target/activity/activityevent/segmentevent.schema.json](adobe/experience/target/activity/activityevent/segmentevent.schema.json) |
## Schema Hierarchy

* Activity Segment Event `https://ns.adobe.com/experience/target/activity/activityevent/segmentevent`
  * [Segment identity](../../../../../datatypes/segmentidentity.schema.md) `https://ns.adobe.com/xdm/context/segmentidentity`
  * [Event Scope](eventscope.schema.md) `https://ns.adobe.com/experience/target/activity/activityevent/eventscope`


# Activity Segment Event Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [xdm:eventScope](#xdmeventscope) | `enum` | Optional | Activity Segment Event (this schema) |
| [xdm:segmentID](#xdmsegmentid) | Segment identity | Optional | Activity Segment Event (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

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




## xdm:segmentID
### Segment Identifier

Activity segment event.

`xdm:segmentID`
* is optional
* type: Segment identity
* defined in this schema

### xdm:segmentID Type


* [Segment identity](../../../../../datatypes/segmentidentity.schema.md) – `https://ns.adobe.com/xdm/context/segmentidentity`




