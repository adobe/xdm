
# Test Mobile Lifecycle Details Schema

```
https://ns.adobe.com/xdm/mixins/mobile-lifecycle-details-test
```

Application lifecycle information recorded via an ExperienceEvent that is specific to the Mobile channel. Includes field definitions for automatically collected data by the AEP Edge mobile extension library.

| [Abstract](../../../abstract.md) | [Extensible](../../../extensions.md) | [Status](../../../status.md) | [Identifiable](../../../id.md) | [Custom Properties](../../../extensions.md) | [Additional Properties](../../../extensions.md) | Defined In |
|----------------------------------|--------------------------------------|------------------------------|--------------------------------|---------------------------------------------|-------------------------------------------------|------------|
| Can be instantiated | Yes | Experimental | No | Forbidden | Permitted | [adobe/experience/mobile-lifecycle-details-test.schema.json](adobe/experience/mobile-lifecycle-details-test.schema.json) |
## Schema Hierarchy

* Test Mobile Lifecycle Details `https://ns.adobe.com/xdm/mixins/mobile-lifecycle-details-test`
  * [Environment Details](../../fieldgroups/experience-event/experienceevent-environment-details.schema.md) `https://ns.adobe.com/xdm/context/experienceevent-environment-details`


## Test Mobile Lifecycle Details Example
```json
{
  "xdm:application": {
    "xdm:id": "A123",
    "xdm:name": "Myapp",
    "xdm:version": "1.0.1",
    "xdm:isLaunch": true,
    "xdm:isInstall": true,
    "xdm:installDate": "2020-10-21"
  },
  "xdm:environment": {
    "xdm:type": "browser",
    "xdm:operatingSystem": "MAC OS",
    "xdm:operatingSystemVersion": "10.13",
    "xdm:connectionType": "cable"
  },
  "xdm:device": {
    "xdm:typeID": "TypeIdentifier-111",
    "xdm:typeIDService": "https://ns.adobe.com/xdm/external/deviceatlas",
    "xdm:type": "mobile",
    "xdm:manufacturer": "Apple",
    "xdm:model": "iPhone 6",
    "xdm:modelNumber": "A1586",
    "xdm:screenHeight": 667,
    "xdm:screenWidth": 375,
    "xdm:colorDepth": 16777216,
    "xdm:screenOrientation": "portrait"
  }
}
```

# Test Mobile Lifecycle Details Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [xdm:application](#xdmapplication) | `object` | Optional | Test Mobile Lifecycle Details (this schema) |
| [xdm:device](#xdmdevice) | Device | Optional | [Environment Details](../../fieldgroups/experience-event/experienceevent-environment-details.schema.md#xdmdevice) |
| [xdm:environment](#xdmenvironment) | Environment | Optional | [Environment Details](../../fieldgroups/experience-event/experienceevent-environment-details.schema.md#xdmenvironment) |
| [xdm:placeContext](#xdmplacecontext) | Place context | Optional | [Environment Details](../../fieldgroups/experience-event/experienceevent-environment-details.schema.md#xdmplacecontext) |
| `*` | any | Additional | this schema *allows* additional properties |

## xdm:application


`xdm:application`
* is optional
* type: `object`
* defined in this schema

### xdm:application Type


`object` with following properties:


| Property | Type | Required |
|----------|------|----------|
| `xdm:closeType`| string | Optional |
| `xdm:id`| string | Optional |
| `xdm:installDate`| string | Optional |
| `xdm:isClose`| boolean | Optional |
| `xdm:isInstall`| boolean | Optional |
| `xdm:isLaunch`| boolean | Optional |
| `xdm:isUpgrade`| boolean | Optional |
| `xdm:name`| string | Optional |
| `xdm:sessionLength`| integer | Optional |
| `xdm:userPerspective`| string | Optional |
| `xdm:version`| string | Optional |



#### xdm:closeType

The type of the close event. A value of 'close' indicates the application signaled the close event. A value of 'unknown' indicates the application was launched without previously signaling it closed.

`xdm:closeType`
* is optional
* type: `enum`

The value of this property **must** be equal to one of the [known values below](#xdmapplication-known-values).

##### xdm:closeType Known Values
| Value | Description |
|-------|-------------|
| `close` | Close |
| `unknown` | Unknown |






#### xdm:id
##### Application identifier

Identifier of the application.

`xdm:id`
* is optional
* type: `string`

##### xdm:id Type


`string`








#### xdm:installDate
##### Install Date

Date of first launch after installation. Format: full-date without time (according to RFC 3339, section 5.6)

`xdm:installDate`
* is optional
* type: `string`

##### xdm:installDate Type


`string`
* format: `date` – date, without time (according to [RFC 3339, section 5.6](http://tools.ietf.org/html/rfc3339))








#### xdm:isClose
##### Is Close

Indicates whether or not this is an application close event.

`xdm:isClose`
* is optional
* type: `boolean`

##### xdm:isClose Type


`boolean`







#### xdm:isInstall
##### Is Install

Indicates whether or not this is an application install event.

`xdm:isInstall`
* is optional
* type: `boolean`

##### xdm:isInstall Type


`boolean`







#### xdm:isLaunch
##### Is Launch

Indicates whether or not this is an application launch event.

`xdm:isLaunch`
* is optional
* type: `boolean`

##### xdm:isLaunch Type


`boolean`







#### xdm:isUpgrade
##### Is Upgrade

Indicates whether or not this is an application upgrade event.

`xdm:isUpgrade`
* is optional
* type: `boolean`

##### xdm:isUpgrade Type


`boolean`







#### xdm:name
##### Name

Name of the application.

`xdm:name`
* is optional
* type: `string`

##### xdm:name Type


`string`








#### xdm:sessionLength
##### Session Length

Reports the number of seconds that a previous application session lasted based on how long the application was open and in the foreground. Session length is a positive value with no max bound (no max session length)

`xdm:sessionLength`
* is optional
* type: `integer`

##### xdm:sessionLength Type


`integer`








#### xdm:userPerspective

The perspective/physical relationship between the user and the app/brand at the time the event happened.  The most common are the app being in the foreground with the user directly interacting with it vs the app being in the background and still generating events.  Detached means the event was related to the app but didn't come directly from the app like the sending of an email or push notification from an external system.  Understanding the perspective of the user in relation to the app helps with accuratly generating sessions as the majority of the time you will not want to include background and detached events as part of an active session.

`xdm:userPerspective`
* is optional
* type: `enum`

The value of this property **must** be equal to one of the [known values below](#xdmapplication-known-values).

##### xdm:userPerspective Known Values
| Value | Description |
|-------|-------------|
| `foreground` | Foreground |
| `background` | Background |
| `detached` | Detached |






#### xdm:version
##### Version

Version of the application.

`xdm:version`
* is optional
* type: `string`

##### xdm:version Type


`string`











## xdm:device
### Device

An identified device, application or device browser instance that is trackable across sessions, normally by cookies.

`xdm:device`
* is optional
* type: Device
* defined in [Environment Details](../../fieldgroups/experience-event/experienceevent-environment-details.schema.md#xdmdevice)

### xdm:device Type


* [Device](../../datatypes/device.schema.md) – `https://ns.adobe.com/xdm/context/device`





## xdm:environment
### Environment

Information about the surrounding situation the event observation occurred in, specifically detailing transitory information such as the network or software versions.

`xdm:environment`
* is optional
* type: Environment
* defined in [Environment Details](../../fieldgroups/experience-event/experienceevent-environment-details.schema.md#xdmenvironment)

### xdm:environment Type


* [Environment](../../datatypes/environment.schema.md) – `https://ns.adobe.com/xdm/context/environment`





## xdm:placeContext
### Place context

The transient circumstances related to the observation. Examples include locale specific information such as weather, local time, traffic, day of the week, workday vs. holiday, and working hours.

`xdm:placeContext`
* is optional
* type: Place context
* defined in [Environment Details](../../fieldgroups/experience-event/experienceevent-environment-details.schema.md#xdmplacecontext)

### xdm:placeContext Type


* [Place context](../../datatypes/placecontext.schema.md) – `https://ns.adobe.com/xdm/context/placecontext`




