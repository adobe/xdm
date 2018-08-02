
# Web Information Schema

```
https://ns.adobe.com/xdm/context/webinfo
```

Information recorded via an `ExperienceEvent` that is specific to the World Wide Web channel, including the web page, referrer and/or link related to the on-page interaction.


| [Abstract](../../abstract.md) | [Extensible](../../extensions.md) | [Status](../../status.md) | [Identifiable](../../id.md) | [Custom Properties](../../extensions.md) | [Additional Properties](../../extensions.md) | Defined In |
|-------------------------------|-----------------------------------|---------------------------|-----------------------------|------------------------------------------|----------------------------------------------|------------|
| Can be instantiated | Yes | Stabilizing | No | Forbidden | Permitted | [context/webinfo.schema.json](context/webinfo.schema.json) |
## Schema Hierarchy

* Web Information `https://ns.adobe.com/xdm/context/webinfo`
  * [Extensibility base schema](../common/extensible.schema.md) `https://ns.adobe.com/xdm/common/extensible`
  * [Web Page Details](webpagedetails.schema.md) `https://ns.adobe.com/xdm/context/webpagedetails`
  * [Web Interaction](webinteraction.schema.md) `https://ns.adobe.com/xdm/context/webinteraction`
  * [Web Referrer](webreferrer.schema.md) `https://ns.adobe.com/xdm/context/webreferrer`


## Web Information Examples

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


# Web Information Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [xdm:webInteraction](#xdmwebinteraction) | Web Interaction | Optional | Web Information (this schema) |
| [xdm:webPageDetails](#xdmwebpagedetails) | Web Page Details | Optional | Web Information (this schema) |
| [xdm:webReferrer](#xdmwebreferrer) | Web Referrer | Optional | Web Information (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## xdm:webInteraction
### Web Interaction

Details about the web link (URL) that corresponds to where the interaction occurred.

`xdm:webInteraction`
* is optional
* type: Web Interaction
* defined in this schema

### xdm:webInteraction Type


* [Web Interaction](webinteraction.schema.md) – `https://ns.adobe.com/xdm/context/webinteraction`





## xdm:webPageDetails
### Web Page Details

Details about the web page where the web interaction occurred.

`xdm:webPageDetails`
* is optional
* type: Web Page Details
* defined in this schema

### xdm:webPageDetails Type


* [Web Page Details](webpagedetails.schema.md) – `https://ns.adobe.com/xdm/context/webpagedetails`





## xdm:webReferrer
### Web Referrer

The referrer of a web interaction, which is the URL a visitor came from immediately before the current web interaction was recorded.

`xdm:webReferrer`
* is optional
* type: Web Referrer
* defined in this schema

### xdm:webReferrer Type


* [Web Referrer](webreferrer.schema.md) – `https://ns.adobe.com/xdm/context/webreferrer`




