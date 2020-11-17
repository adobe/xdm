
# Web Details Schema

```
https://ns.adobe.com/xdm/context/experienceevent-web
```

Use for information regarding web details events such as interaction, page details, and referrer.

| [Abstract](../../../abstract.md) | [Extensible](../../../extensions.md) | [Status](../../../status.md) | [Identifiable](../../../id.md) | [Custom Properties](../../../extensions.md) | [Additional Properties](../../../extensions.md) | Defined In |
|----------------------------------|--------------------------------------|------------------------------|--------------------------------|---------------------------------------------|-------------------------------------------------|------------|
| Can be instantiated | Yes | Stable | No | Forbidden | Permitted | [mixins/experience-event/experienceevent-web.schema.json](mixins/experience-event/experienceevent-web.schema.json) |
## Schema Hierarchy

* Web Details `https://ns.adobe.com/xdm/context/experienceevent-web`
  * [Extensibility base schema](../../datatypes/extensible.schema.md) `https://ns.adobe.com/xdm/common/extensible`
  * [Web information](../../datatypes/webinfo.schema.md) `https://ns.adobe.com/xdm/context/webinfo`


## Web Details Example
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

# Web Details Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [xdm:web](#xdmweb) | Web information | Optional | Web Details (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## xdm:web
### Web

The information related to web page and link of the ExperienceEvent.

`xdm:web`
* is optional
* type: Web information
* defined in this schema

### xdm:web Type


* [Web information](../../datatypes/webinfo.schema.md) – `https://ns.adobe.com/xdm/context/webinfo`




