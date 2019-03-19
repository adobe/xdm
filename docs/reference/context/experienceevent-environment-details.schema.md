
# ExperienceEvent Environment Details Schema

```
https://ns.adobe.com/xdm/context/experienceevent-environment-details
```

ExperienceEvent Environment Details.

| [Abstract](../../abstract.md) | [Extensible](../../extensions.md) | [Status](../../status.md) | [Identifiable](../../id.md) | [Custom Properties](../../extensions.md) | [Additional Properties](../../extensions.md) | Defined In |
|-------------------------------|-----------------------------------|---------------------------|-----------------------------|------------------------------------------|----------------------------------------------|------------|
| Can be instantiated | Yes | Stabilizing | No | Forbidden | Permitted | [context/experienceevent-environment-details.schema.json](context/experienceevent-environment-details.schema.json) |
## Schema Hierarchy

* ExperienceEvent Environment Details `https://ns.adobe.com/xdm/context/experienceevent-environment-details`
  * [Extensibility base schema](../common/extensible.schema.md) `https://ns.adobe.com/xdm/common/extensible`
  * [Environment](environment.schema.md) `https://ns.adobe.com/xdm/context/environment`
  * [Device](device.schema.md) `https://ns.adobe.com/xdm/context/device`
  * [Place Context](placecontext.schema.md) `https://ns.adobe.com/xdm/context/placecontext`


## ExperienceEvent Environment Details Example
```json
{
  "xdm:environment": {
    "xdm:type": "browser",
    "xdm:browserDetails": {
      "xdm:name": "Chrome",
      "xdm:version": "63.0.3239",
      "xdm:acceptLanguage": "en",
      "xdm:cookiesEnabled": true,
      "xdm:javaScriptEnabled": true,
      "xdm:javaScriptVersion": "1.8.5",
      "xdm:javaEnabled": true,
      "xdm:javaVersion": "Java SE 8",
      "xdm:viewportHeight": 900,
      "xdm:viewportWidth": 1680
    },
    "xdm:operatingSystem": "MAC OS",
    "xdm:operatingSystemVersion": "10.13",
    "xdm:connectionType": "cable"
  },
  "xdm:placeContext": {
    "xdm:localTime": "2017-09-26T15:52:25+13:00",
    "xdm:geo": {
      "@id": "https://data.adobe.io/entities/geo/tokyo",
      "xdm:countryCode": "JP",
      "xdm:stateProvince": "JP-13",
      "xdm:city": "Tōkyō",
      "xdm:postalCode": "141-0032",
      "schema:latitude": 35.6185,
      "schema:longitude": 139.73237
    }
  }
}
```

# ExperienceEvent Environment Details Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [xdm:device](#xdmdevice) | Device | Optional | ExperienceEvent Environment Details (this schema) |
| [xdm:environment](#xdmenvironment) | Environment | Optional | ExperienceEvent Environment Details (this schema) |
| [xdm:placeContext](#xdmplacecontext) | Place Context | Optional | ExperienceEvent Environment Details (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## xdm:device
### Device

An identified Device/Application or Device/Browser instance that is trackable across sessions, normally by cookies.

`xdm:device`
* is optional
* type: Device
* defined in this schema

### xdm:device Type


* [Device](device.schema.md) – `https://ns.adobe.com/xdm/context/device`





## xdm:environment
### Environment

Information about the surrounding situation the event observation occurred in, specifically detailing transitory information such as the network or software versions.

`xdm:environment`
* is optional
* type: Environment
* defined in this schema

### xdm:environment Type


* [Environment](environment.schema.md) – `https://ns.adobe.com/xdm/context/environment`





## xdm:placeContext
### Place Context

The transient circumstances related to the observation. Examples include locale specific information such as weather, local time, traffic, day of the week, workday vs. holiday, working hours.

`xdm:placeContext`
* is optional
* type: Place Context
* defined in this schema

### xdm:placeContext Type


* [Place Context](placecontext.schema.md) – `https://ns.adobe.com/xdm/context/placecontext`




