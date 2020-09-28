
# Activity Option Event Schema

```
https://ns.adobe.com/experience/target/activity/activityevent/optionevent
```

Represents the option and its that was displayed during the activity processing.

| [Abstract](../../../../../../abstract.md) | [Extensible](../../../../../../extensions.md) | [Status](../../../../../../status.md) | [Identifiable](../../../../../../id.md) | [Custom Properties](../../../../../../extensions.md) | [Additional Properties](../../../../../../extensions.md) | Defined In |
|-------------------------------------------|-----------------------------------------------|---------------------------------------|-----------------------------------------|------------------------------------------------------|----------------------------------------------------------|------------|
| Can be instantiated | Yes | Stable | No | Forbidden | Permitted | [adobe/experience/target/activity/activityevent/optionevent.schema.json](adobe/experience/target/activity/activityevent/optionevent.schema.json) |
## Schema Hierarchy

* Activity Option Event `https://ns.adobe.com/experience/target/activity/activityevent/optionevent`
  * [Event Scope](eventscope.schema.md) `https://ns.adobe.com/experience/target/activity/activityevent/eventscope`


# Activity Option Event Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [https://ns.adobe.com/experience/target/activity/activityevent/optionevent/activityLocation](#httpsnsadobecomexperiencetargetactivityactivityeventoptioneventactivitylocation) | `object` | Optional | Activity Option Event (this schema) |
| [https://ns.adobe.com/experience/target/activity/activityevent/optionevent/targetOption](#httpsnsadobecomexperiencetargetactivityactivityeventoptioneventtargetoption) | `object` | Optional | Activity Option Event (this schema) |
| [xdm:eventScope](#xdmeventscope) | `enum` | Optional | Activity Option Event (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## https://ns.adobe.com/experience/target/activity/activityevent/optionevent/activityLocation
### Activity Location

A location is a page on your website. It could also refer to a place in a mobile app, an email, or any other place where you run an optimization.

`https://ns.adobe.com/experience/target/activity/activityevent/optionevent/activityLocation`
* is optional
* type: `object`
* defined in this schema

### https://ns.adobe.com/experience/target/activity/activityevent/optionevent/activityLocation Type


`object` with following properties:


| Property | Type | Required |
|----------|------|----------|
| `xdm:locationID`| string | **Required** |
| `xdm:selector`| string | Optional |



#### xdm:locationID
##### Location Identifier

The local location identifier.

`xdm:locationID`
* is **required**
* type: `string`

##### xdm:locationID Type


`string`








#### xdm:selector
##### Selector

A CSS selector in a html page.

`xdm:selector`
* is optional
* type: `string`

##### xdm:selector Type


`string`











## https://ns.adobe.com/experience/target/activity/activityevent/optionevent/targetOption
### Activity Option

An option is the displayed content on your web pages during activities.

`https://ns.adobe.com/experience/target/activity/activityevent/optionevent/targetOption`
* is optional
* type: `object`
* defined in this schema

### https://ns.adobe.com/experience/target/activity/activityevent/optionevent/targetOption Type


`object` with following properties:


| Property | Type | Required |
|----------|------|----------|
| `xdm:offerID`| string | Optional |
| `xdm:optionID`| string | **Required** |
| `xdm:version`| string | Optional |



#### xdm:offerID
##### Offer Identifier

An offer is the content displayed on your web pages during campaigns or activities.

`xdm:offerID`
* is optional
* type: `string`

##### xdm:offerID Type


`string`








#### xdm:optionID
##### Option Identifier

Unique activity option identifier.

`xdm:optionID`
* is **required**
* type: `string`

##### xdm:optionID Type


`string`








#### xdm:version
##### Offer Version

Version of the offer that was displayed.

`xdm:version`
* is optional
* type: `string`

##### xdm:version Type


`string`











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



