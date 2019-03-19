
# ExperienceEvent Web Details Schema

```
https://ns.adobe.com/xdm/context/experienceevent-web
```

The web details for ExperienceEvents.

| [Abstract](../../abstract.md) | [Extensible](../../extensions.md) | [Status](../../status.md) | [Identifiable](../../id.md) | [Custom Properties](../../extensions.md) | [Additional Properties](../../extensions.md) | Defined In |
|-------------------------------|-----------------------------------|---------------------------|-----------------------------|------------------------------------------|----------------------------------------------|------------|
| Can be instantiated | Yes | Stabilizing | No | Forbidden | Permitted | [context/experienceevent-web.schema.json](context/experienceevent-web.schema.json) |
## Schema Hierarchy

* ExperienceEvent Web Details `https://ns.adobe.com/xdm/context/experienceevent-web`
  * [Extensibility base schema](../common/extensible.schema.md) `https://ns.adobe.com/xdm/common/extensible`
  * [Web Information](webinfo.schema.md) `https://ns.adobe.com/xdm/context/webinfo`


## ExperienceEvent Web Details Example
```json
{
  "xdm:web": {
    "xdm:webPageDetails": {
      "xdm:siteSection": "Shopping Cart",
      "xdm:server": "example.com",
      "xdm:name": "Purchase Confirmation",
      "xdm:URL": "https://www.example.com/orderConf",
      "xdm:errorPage": false,
      "xdm:homePage": false,
      "xdm:pageViews": {
        "xdm:value": 1
      }
    },
    "xdm:webReferrer": {
      "xdm:URL": "https://www.example.com/checkout",
      "xdm:referrerType": "internal"
    }
  }
}
```

# ExperienceEvent Web Details Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [xdm:web](#xdmweb) | Web Information | Optional | ExperienceEvent Web Details (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## xdm:web
### Web

The information related to web page and link of the ExperienceEvent.

`xdm:web`
* is optional
* type: Web Information
* defined in this schema

### xdm:web Type


* [Web Information](webinfo.schema.md) – `https://ns.adobe.com/xdm/context/webinfo`




