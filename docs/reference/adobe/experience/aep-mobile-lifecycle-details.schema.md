
# AEP Mobile Lifecycle Details Schema

```
https://ns.adobe.com/experience/aep-mobile-lifecycle-details
```

Application lifecycle information recorded via an ExperienceEvent that is specific to the Mobile channel. Includes field definitions for automatically collected data by the AEP Edge mobile extension library.

| [Abstract](../../../abstract.md) | [Extensible](../../../extensions.md) | [Status](../../../status.md) | [Identifiable](../../../id.md) | [Custom Properties](../../../extensions.md) | [Additional Properties](../../../extensions.md) | Defined In |
|----------------------------------|--------------------------------------|------------------------------|--------------------------------|---------------------------------------------|-------------------------------------------------|------------|
| Can be instantiated | Yes | Stable | No | Forbidden | Permitted | [adobe/experience/aep-mobile-lifecycle-details.schema.json](adobe/experience/aep-mobile-lifecycle-details.schema.json) |
## Schema Hierarchy

* AEP Mobile Lifecycle Details `https://ns.adobe.com/experience/aep-mobile-lifecycle-details`
  * [Application](../../datatypes/application.schema.md) `https://ns.adobe.com/xdm/context/application`
  * [Environment](../../datatypes/environment.schema.md) `https://ns.adobe.com/xdm/context/environment`
  * [Device](../../datatypes/device.schema.md) `https://ns.adobe.com/xdm/context/device`


## AEP Mobile Lifecycle Details Examples

```json
{
  "xdm:application": {
    "xdm:id": "A123",
    "xdm:name": "Myapp",
    "xdm:version": "1.0.1 (5)",
    "xdm:isLaunch": true,
    "xdm:isInstall": true
  },
  "xdm:environment": {
    "xdm:type": "application",
    "xdm:carrier": "Verizon",
    "xdm:operatingSystem": "iOS",
    "xdm:operatingSystemVersion": "14",
    "dc:language": "en-US"
  },
  "xdm:device": {
    "xdm:type": "mobile",
    "xdm:manufacturer": "apple",
    "xdm:model": "iPhone 6",
    "xdm:modelNumber": "A1586",
    "xdm:screenHeight": 667,
    "xdm:screenWidth": 375
  }
}
```

```json
{
  "xdm:application": {
    "xdm:isClose": true,
    "xdm:closeType": "close",
    "xdm:sessionLength": 5030
  }
}
```


# AEP Mobile Lifecycle Details Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [xdm:application](#xdmapplication) | complex | Optional | AEP Mobile Lifecycle Details (this schema) |
| [xdm:device](#xdmdevice) | complex | Optional | AEP Mobile Lifecycle Details (this schema) |
| [xdm:environment](#xdmenvironment) | complex | Optional | AEP Mobile Lifecycle Details (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## xdm:application


`xdm:application`
* is optional
* type: complex
* defined in this schema

### xdm:application Type

Unknown type ``.

```json
{
  "properties": {
    "xdm:sessionLength": {
      "title": "Session Length",
      "type": "integer",
      "minimum": 0,
      "description": "Length of the application session in seconds. Usually referred as the time the application was in foreground."
    }
  },
  "simpletype": "complex"
}
```





## xdm:device


`xdm:device`
* is optional
* type: complex
* defined in this schema

### xdm:device Type

Unknown type ``.

```json
{
  "properties": {
    "xdm:screenHeight": {
      "title": "Screen height",
      "type": "integer",
      "description": "The number of vertical pixels of the device's active display in the default orientation.",
      "meta:titleId": "device##xdm:screenHeight##title##17711",
      "meta:descriptionId": "device##xdm:screenHeight##description##7571"
    },
    "xdm:screenWidth": {
      "title": "Screen width",
      "type": "integer",
      "description": "The number of horizontal pixels of the device's active display in the default orientation.",
      "meta:titleId": "device##xdm:screenWidth##title##82981",
      "meta:descriptionId": "device##xdm:screenWidth##description##43911"
    }
  },
  "simpletype": "complex"
}
```





## xdm:environment


`xdm:environment`
* is optional
* type: complex
* defined in this schema

### xdm:environment Type

Unknown type ``.

```json
{
  "properties": {
    "dc:language": {
      "meta:usereditable": false,
      "title": "Language",
      "type": "string",
      "pattern": "^(((([A-Za-z]{2,3}(-([A-Za-z]{3}(-[A-Za-z]{3}){0,2}))?)|[A-Za-z]{4}|[A-Za-z]{5,8})(-([A-Za-z]{4}))?(-([A-Za-z]{2}|[0-9]{3}))?(-([A-Za-z0-9]{5,8}|[0-9][A-Za-z0-9]{3}))*(-([0-9A-WY-Za-wy-z](-[A-Za-z0-9]{2,8})+))*(-(x(-[A-Za-z0-9]{1,8})+))?)|(x(-[A-Za-z0-9]{1,8})+)|((en-GB-oed|i-ami|i-bnn|i-default|i-enochian|i-hak|i-klingon|i-lux|i-mingo|i-navajo|i-pwn|i-tao|i-tay|i-tsu|sgn-BE-FR|sgn-BE-NL|sgn-CH-DE)|(art-lojban|cel-gaulish|no-bok|no-nyn|zh-guoyu|zh-hakka|zh-min|zh-min-nan|zh-xiang)))$",
      "description": "The language of the environment to represent the user's linguistic, geographical, or cultural preferences for data presentation.\nLanguages are specified in language code as defined in [IETF RFC 3066](https://www.ietf.org/rfc/rfc3066.txt), which is part of BCP 47, which is used elsewhere in XDM.",
      "examples": [
        "en-US",
        "pt-BR",
        "es-ES"
      ],
      "meta:titleId": "environment##dc:language##title##85111",
      "meta:descriptionId": "environment##dc:language##description##68251"
    }
  },
  "simpletype": "complex"
}
```




