
# Application Schema

```
https://ns.adobe.com/xdm/context/application
```

Details related to the application generated interactions. Application refers to a software experience, such as a mobile or desktop application that can be installed, run, closed, or uninstalled by an end user. Details are not intended to describe agents such as chatbots, browser-based plugins, or other experiences that do not apply to applications.

| [Abstract](../../abstract.md) | [Extensible](../../extensions.md) | [Status](../../status.md) | [Identifiable](../../id.md) | [Custom Properties](../../extensions.md) | [Additional Properties](../../extensions.md) | Defined In |
|-------------------------------|-----------------------------------|---------------------------|-----------------------------|------------------------------------------|----------------------------------------------|------------|
| Can be instantiated | Yes | Stabilizing | No | Forbidden | Permitted | [context/application.schema.json](context/application.schema.json) |
## Schema Hierarchy

* Application `https://ns.adobe.com/xdm/context/application`
  * [Extensibility base schema](../common/extensible.schema.md) `https://ns.adobe.com/xdm/common/extensible`
  * [Measure](../data/measure.schema.md) `https://ns.adobe.com/xdm/data/measure`


## Application Example
```json
{
  "xdm:id": "A123",
  "xdm:name": "Myapp",
  "xdm:version": "1.0.1",
  "xdm:launches": {
    "xdm:value": 1
  }
}
```

# Application Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [xdm:applicationCloses](#xdmapplicationcloses) | Measure | Optional | Application (this schema) |
| [xdm:crashes](#xdmcrashes) | Measure | Optional | Application (this schema) |
| [xdm:featureUsages](#xdmfeatureusages) | Measure | Optional | Application (this schema) |
| [xdm:firstLaunches](#xdmfirstlaunches) | Measure | Optional | Application (this schema) |
| [xdm:id](#xdmid) | `string` | Optional | Application (this schema) |
| [xdm:installs](#xdminstalls) | Measure | Optional | Application (this schema) |
| [xdm:launches](#xdmlaunches) | Measure | Optional | Application (this schema) |
| [xdm:name](#xdmname) | `string` | Optional | Application (this schema) |
| [xdm:upgrades](#xdmupgrades) | Measure | Optional | Application (this schema) |
| [xdm:version](#xdmversion) | `string` | Optional | Application (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## xdm:applicationCloses

Graceful termination of an application.

`xdm:applicationCloses`
* is optional
* type: Measure
* defined in this schema

### xdm:applicationCloses Type


* [Measure](../data/measure.schema.md) – `https://ns.adobe.com/xdm/data/measure`





## xdm:crashes

Triggered when the application does not exit gracefully. Event is sent on application launch after a crash.

`xdm:crashes`
* is optional
* type: Measure
* defined in this schema

### xdm:crashes Type


* [Measure](../data/measure.schema.md) – `https://ns.adobe.com/xdm/data/measure`





## xdm:featureUsages

Activation of an application feature that is being measured.

`xdm:featureUsages`
* is optional
* type: Measure
* defined in this schema

### xdm:featureUsages Type


* [Measure](../data/measure.schema.md) – `https://ns.adobe.com/xdm/data/measure`





## xdm:firstLaunches

Triggered on first launch after install.

`xdm:firstLaunches`
* is optional
* type: Measure
* defined in this schema

### xdm:firstLaunches Type


* [Measure](../data/measure.schema.md) – `https://ns.adobe.com/xdm/data/measure`





## xdm:id
### Application identifier

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


* [Measure](../data/measure.schema.md) – `https://ns.adobe.com/xdm/data/measure`





## xdm:launches

Launch of an application. Triggered on every run, including crashes and installs. Also triggered on a resume from background when the session timeout has been exceeded.

`xdm:launches`
* is optional
* type: Measure
* defined in this schema

### xdm:launches Type


* [Measure](../data/measure.schema.md) – `https://ns.adobe.com/xdm/data/measure`





## xdm:name
### Name

Name of the application.

`xdm:name`
* is optional
* type: `string`
* defined in this schema

### xdm:name Type


`string`






## xdm:upgrades

Upgrade of an application that has previously been installed. Triggered on first launch after upgrade.

`xdm:upgrades`
* is optional
* type: Measure
* defined in this schema

### xdm:upgrades Type


* [Measure](../data/measure.schema.md) – `https://ns.adobe.com/xdm/data/measure`





## xdm:version
### Version

Version of the application.

`xdm:version`
* is optional
* type: `string`
* defined in this schema

### xdm:version Type


`string`





