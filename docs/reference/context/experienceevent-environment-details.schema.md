
# ExperienceEvent environment details Schema

```
https://ns.adobe.com/xdm/context/experienceevent-environment-details
```

This mixin is used to capture information regarding environment details related to an ExperienceEvent, such as device details, browser information, local time, and other geographical information.

| [Abstract](../../abstract.md) | [Extensible](../../extensions.md) | [Status](../../status.md) | [Identifiable](../../id.md) | [Custom Properties](../../extensions.md) | [Additional Properties](../../extensions.md) | Defined In |
|-------------------------------|-----------------------------------|---------------------------|-----------------------------|------------------------------------------|----------------------------------------------|------------|
| Can be instantiated | Yes | Stabilizing | No | Forbidden | Permitted | [context/experienceevent-environment-details.schema.json](context/experienceevent-environment-details.schema.json) |
## Schema Hierarchy

* ExperienceEvent environment details `https://ns.adobe.com/xdm/context/experienceevent-environment-details`
  * [Extensibility base schema](../common/extensible.schema.md) `https://ns.adobe.com/xdm/common/extensible`
  * [Environment](environment.schema.md) `https://ns.adobe.com/xdm/context/environment`
  * [Device](device.schema.md) `https://ns.adobe.com/xdm/context/device`
  * [Place context](placecontext.schema.md) `https://ns.adobe.com/xdm/context/placecontext`


## ExperienceEvent environment details Example
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

# ExperienceEvent environment details Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [xdm:device](#xdmdevice) | Device | Optional | ExperienceEvent environment details (this schema) |
| [xdm:environment](#xdmenvironment) | Environment | Optional | ExperienceEvent environment details (this schema) |
| [xdm:placeContext](#xdmplacecontext) | Place context | Optional | ExperienceEvent environment details (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## xdm:device
### Device

An identified device, application or device browser instance that is trackable across sessions, normally by cookies.

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
### Place context

The transient circumstances related to the observation. Examples include locale specific information such as weather, local time, traffic, day of the week, workday vs. holiday, and working hours.

`xdm:placeContext`
* is optional
* type: Place context
* defined in this schema

### xdm:placeContext Type


* [Place context](placecontext.schema.md) – `https://ns.adobe.com/xdm/context/placecontext`




