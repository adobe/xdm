
# Web information Schema

```
https://ns.adobe.com/xdm/context/webinfo
```

Information recorded via an `ExperienceEvent` that is specific to the World Wide Web channel, including the web page, referrer and/or link related to the on-page interaction.


| [Abstract](../../abstract.md) | [Extensible](../../extensions.md) | [Status](../../status.md) | [Identifiable](../../id.md) | [Custom Properties](../../extensions.md) | [Additional Properties](../../extensions.md) | Defined In |
|-------------------------------|-----------------------------------|---------------------------|-----------------------------|------------------------------------------|----------------------------------------------|------------|
| Can be instantiated | Yes | Stabilizing | No | Forbidden | Permitted | [context/webinfo.schema.json](context/webinfo.schema.json) |
## Schema Hierarchy

* Web information `https://ns.adobe.com/xdm/context/webinfo`
  * [Extensibility base schema](../common/extensible.schema.md) `https://ns.adobe.com/xdm/common/extensible`
  * [Web page details](webpagedetails.schema.md) `https://ns.adobe.com/xdm/context/webpagedetails`
  * [Web interaction](webinteraction.schema.md) `https://ns.adobe.com/xdm/context/webinteraction`
  * [Web referrer](webreferrer.schema.md) `https://ns.adobe.com/xdm/context/webreferrer`


## Web information Examples

```json
{
  "xdm:webPageDetails": {
    "xdm:siteSection": "Product section",
    "xdm:server": "example.com",
    "xdm:name": "product home",
    "xdm:URL": "https://www.example.com/products",
    "xdm:errorPage": false,
    "xdm:homePage": true,
    "xdm:pageViews": {
      "xdm:value": 1
    }
  },
  "xdm:webReferrer": {
    "xdm:URL": "https://www.some-adserver.com",
    "xdm:referrerType": "external"
  }
}
```

```json
{
  "xdm:webPageDetails": {
    "xdm:siteSection": "Product section",
    "xdm:server": "example.com",
    "xdm:name": "product home",
    "xdm:URL": "https://www.example.com/products",
    "xdm:errorPage": false,
    "xdm:homePage": true
  },
  "xdm:webInteraction": {
    "xdm:type": "other",
    "xdm:URL": "#stores",
    "xdm:name": "product store",
    "xdm:linkClicks": {
      "xdm:value": 1
    }
  },
  "xdm:webReferrer": {
    "xdm:URL": "https://www.example.com/products",
    "xdm:type": "internal"
  }
}
```


# Web information Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [xdm:webInteraction](#xdmwebinteraction) | Web interaction | Optional | Web information (this schema) |
| [xdm:webPageDetails](#xdmwebpagedetails) | Web page details | Optional | Web information (this schema) |
| [xdm:webReferrer](#xdmwebreferrer) | Web referrer | Optional | Web information (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## xdm:webInteraction
### Web interaction

Details about the web link or URL that corresponds to where the interaction occurred.

`xdm:webInteraction`
* is optional
* type: Web interaction
* defined in this schema

### xdm:webInteraction Type


* [Web interaction](webinteraction.schema.md) – `https://ns.adobe.com/xdm/context/webinteraction`





## xdm:webPageDetails
### Web page details

Details about the web page where the web interaction occurred.

`xdm:webPageDetails`
* is optional
* type: Web page details
* defined in this schema

### xdm:webPageDetails Type


* [Web page details](webpagedetails.schema.md) – `https://ns.adobe.com/xdm/context/webpagedetails`





## xdm:webReferrer
### Web referrer

The referrer of a web interaction, which is the URL a visitor came from immediately before the current web interaction was recorded.

`xdm:webReferrer`
* is optional
* type: Web referrer
* defined in this schema

### xdm:webReferrer Type


* [Web referrer](webreferrer.schema.md) – `https://ns.adobe.com/xdm/context/webreferrer`




