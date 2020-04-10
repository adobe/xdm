
# ExperienceEvent web details Schema

```
https://ns.adobe.com/xdm/context/experienceevent-web
```

This mixin is used to capture information regarding web details related to an ExperienceEvent, such as the interaction, page details, and referrer.

| [Abstract](../../abstract.md) | [Extensible](../../extensions.md) | [Status](../../status.md) | [Identifiable](../../id.md) | [Custom Properties](../../extensions.md) | [Additional Properties](../../extensions.md) | Defined In |
|-------------------------------|-----------------------------------|---------------------------|-----------------------------|------------------------------------------|----------------------------------------------|------------|
| Can be instantiated | Yes | Stabilizing | No | Forbidden | Permitted | [context/experienceevent-web.schema.json](context/experienceevent-web.schema.json) |
## Schema Hierarchy

* ExperienceEvent web details `https://ns.adobe.com/xdm/context/experienceevent-web`
  * [Extensibility base schema](../common/extensible.schema.md) `https://ns.adobe.com/xdm/common/extensible`
  * [Web information](webinfo.schema.md) `https://ns.adobe.com/xdm/context/webinfo`


## ExperienceEvent web details Example
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

# ExperienceEvent web details Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [xdm:web](#xdmweb) | Web information | Optional | ExperienceEvent web details (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## xdm:web
### Web

The information related to web page and link of the ExperienceEvent.

`xdm:web`
* is optional
* type: Web information
* defined in this schema

### xdm:web Type


* [Web information](webinfo.schema.md) – `https://ns.adobe.com/xdm/context/webinfo`




