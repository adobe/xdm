
# Application Schema

```
https://ns.adobe.com/xdm/context/application
```

Details related to the application generated interactions. Application refers to a software experience, such as a mobile or desktop application that can be installed, run, closed, or uninstalled by an end user. Details are not intended to describe agents such as chatbots, browser-based plugins, or other experiences that do not apply to applications.

| [Abstract](../../abstract.md) | [Extensible](../../extensions.md) | [Status](../../status.md) | [Identifiable](../../id.md) | [Custom Properties](../../extensions.md) | [Additional Properties](../../extensions.md) | Defined In |
|-------------------------------|-----------------------------------|---------------------------|-----------------------------|------------------------------------------|----------------------------------------------|------------|
| Can be instantiated | Yes | Stable | No | Forbidden | Permitted | [datatypes/application.schema.json](datatypes/application.schema.json) |
## Schema Hierarchy

* Application `https://ns.adobe.com/xdm/context/application`
  * [Extensibility base schema](extensible.schema.md) `https://ns.adobe.com/xdm/common/extensible`
  * [Measure](data/measure.schema.md) `https://ns.adobe.com/xdm/data/measure`


## Application Examples

```json
{
  "xdm:id": "A123",
  "xdm:name": "Myapp",
  "xdm:version": "1.0.1",
  "xdm:isClose": true,
  "xdm:closeType": "close",
  "xdm:sessionlength": 5030
}
```

```json
{
  "xdm:id": "A123",
  "xdm:name": "Myapp",
  "xdm:version": "1.0.1",
  "xdm:isLaunch": true,
  "xdm:userPerspective": "foreground"
}
```

```json
{
  "xdm:id": "A123",
  "xdm:name": "Myapp",
  "xdm:version": "1.0.1"
}
```


# Application Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [xdm:applicationCloses](#xdmapplicationcloses) | Measure | Optional | Application (this schema) |
| [xdm:closeType](#xdmclosetype) | `enum` | Optional | Application (this schema) |
| [xdm:crashes](#xdmcrashes) | Measure | Optional | Application (this schema) |
| [xdm:featureUsages](#xdmfeatureusages) | Measure | Optional | Application (this schema) |
| [xdm:firstLaunches](#xdmfirstlaunches) | Measure | Optional | Application (this schema) |
| [xdm:id](#xdmid) | `string` | Optional | Application (this schema) |
| [xdm:installs](#xdminstalls) | Measure | Optional | Application (this schema) |
| [xdm:isClose](#xdmisclose) | `boolean` | Optional | Application (this schema) |
| [xdm:isInstall](#xdmisinstall) | `boolean` | Optional | Application (this schema) |
| [xdm:isLaunch](#xdmislaunch) | `boolean` | Optional | Application (this schema) |
| [xdm:isUpgrade](#xdmisupgrade) | `boolean` | Optional | Application (this schema) |
| [xdm:launches](#xdmlaunches) | Measure | Optional | Application (this schema) |
| [xdm:name](#xdmname) | `string` | Optional | Application (this schema) |
| [xdm:sessionLength](#xdmsessionlength) | `integer` | Optional | Application (this schema) |
| [xdm:upgrades](#xdmupgrades) | Measure | Optional | Application (this schema) |
| [xdm:userPerspective](#xdmuserperspective) | `enum` | Optional | Application (this schema) |
| [xdm:version](#xdmversion) | `string` | Optional | Application (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## xdm:applicationCloses

Graceful termination of an application.

`xdm:applicationCloses`
* is optional
* type: Measure
* defined in this schema

### xdm:applicationCloses Type


* [Measure](data/measure.schema.md) – `https://ns.adobe.com/xdm/data/measure`





## xdm:closeType
### Close Type

Type of application close, sent on application isClose. Type is 'close' on graceful termination of an application, or 'unknown' when application termination source is unknown.

`xdm:closeType`
* is optional
* type: `enum`
* defined in this schema

The value of this property **must** be equal to one of the [known values below](#xdmclosetype-known-values).

### xdm:closeType Known Values
| Value | Description |
|-------|-------------|
| `close` | Close |
| `unknown` | Unknown |




## xdm:crashes

Triggered when the application does not exit gracefully. Event is sent on application launch after a crash.

`xdm:crashes`
* is optional
* type: Measure
* defined in this schema

### xdm:crashes Type


* [Measure](data/measure.schema.md) – `https://ns.adobe.com/xdm/data/measure`





## xdm:featureUsages

Activation of an application feature that is being measured.

`xdm:featureUsages`
* is optional
* type: Measure
* defined in this schema

### xdm:featureUsages Type


* [Measure](data/measure.schema.md) – `https://ns.adobe.com/xdm/data/measure`





## xdm:firstLaunches

Triggered on first launch after install.

`xdm:firstLaunches`
* is optional
* type: Measure
* defined in this schema

### xdm:firstLaunches Type


* [Measure](data/measure.schema.md) – `https://ns.adobe.com/xdm/data/measure`





## xdm:id
### Application Identifier

Identifier of the application.

`xdm:id`
* is optional
* type: `string`
* defined in this schema

### xdm:id Type


`string`






## xdm:installs

Install of an application on a device where the specific install event is available.

`xdm:installs`
* is optional
* type: Measure
* defined in this schema

### xdm:installs Type


* [Measure](data/measure.schema.md) – `https://ns.adobe.com/xdm/data/measure`





## xdm:isClose
### Is Close

Close of an application.

`xdm:isClose`
* is optional
* type: `boolean`
* defined in this schema

### xdm:isClose Type


`boolean`





## xdm:isInstall
### Is Install

Install of an application.

`xdm:isInstall`
* is optional
* type: `boolean`
* defined in this schema

### xdm:isInstall Type


`boolean`





## xdm:isLaunch
### Is Launch

Launch of an application.

`xdm:isLaunch`
* is optional
* type: `boolean`
* defined in this schema

### xdm:isLaunch Type


`boolean`





## xdm:isUpgrade
### Is Upgrade

Upgrade of an application.

`xdm:isUpgrade`
* is optional
* type: `boolean`
* defined in this schema

### xdm:isUpgrade Type


`boolean`





## xdm:launches

Launch of an application. Triggered on every run, including crashes and installs. Also triggered on a resume from background when the session timeout has been exceeded.

`xdm:launches`
* is optional
* type: Measure
* defined in this schema

### xdm:launches Type


* [Measure](data/measure.schema.md) – `https://ns.adobe.com/xdm/data/measure`





## xdm:name
### Name

Name of the application.

`xdm:name`
* is optional
* type: `string`
* defined in this schema

### xdm:name Type


`string`






## xdm:sessionLength
### Session Length

Length of the application session in seconds. Usually referred as the time the application was in foreground.

`xdm:sessionLength`
* is optional
* type: `integer`
* defined in this schema

### xdm:sessionLength Type


`integer`
* minimum value: `0`






## xdm:upgrades

Upgrade of an application that has previously been installed. Triggered on first launch after upgrade.

`xdm:upgrades`
* is optional
* type: Measure
* defined in this schema

### xdm:upgrades Type


* [Measure](data/measure.schema.md) – `https://ns.adobe.com/xdm/data/measure`





## xdm:userPerspective
### User Perspective

The perspective/physical relationship between the user and the app/brand at the time the event happened.  The most common are the app being in the foreground with the user directly interacting with it vs the app being in the background and still generating events.  Detached means the event was related to the app but didn't come directly from the app like the sending of an email or push notification from an external system.  Understanding the perspective of the user in relation to the app helps with accuratly generating sessions as the majority of the time you will not want to include background and detached events as part of an active session.

`xdm:userPerspective`
* is optional
* type: `enum`
* defined in this schema

The value of this property **must** be equal to one of the [known values below](#xdmuserperspective-known-values).

### xdm:userPerspective Known Values
| Value | Description |
|-------|-------------|
| `foreground` | Foreground |
| `background` | Background |
| `detached` | Detached |




## xdm:version
### Version

Version of the application.

`xdm:version`
* is optional
* type: `string`
* defined in this schema

### xdm:version Type


`string`





