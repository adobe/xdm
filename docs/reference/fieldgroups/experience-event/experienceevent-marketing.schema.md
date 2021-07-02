
# Campaign Marketing Details Schema

```
https://ns.adobe.com/xdm/context/experienceevent-marketing
```

Marketing campaign information such as campaign group, name, and tracking code.

| [Abstract](../../../abstract.md) | [Extensible](../../../extensions.md) | [Status](../../../status.md) | [Identifiable](../../../id.md) | [Custom Properties](../../../extensions.md) | [Additional Properties](../../../extensions.md) | Defined In |
|----------------------------------|--------------------------------------|------------------------------|--------------------------------|---------------------------------------------|-------------------------------------------------|------------|
| Can be instantiated | Yes | Stable | No | Forbidden | Permitted | [fieldgroups/experience-event/experienceevent-marketing.schema.json](fieldgroups/experience-event/experienceevent-marketing.schema.json) |
## Schema Hierarchy

* Campaign Marketing Details `https://ns.adobe.com/xdm/context/experienceevent-marketing`
  * [Extensibility base schema](../../datatypes/extensible.schema.md) `https://ns.adobe.com/xdm/common/extensible`
  * [Marketing](../../datatypes/marketing/marketing.schema.md) `https://ns.adobe.com/xdm/context/marketing`


## Campaign Marketing Details Example
```json
{
  "xdm:marketing": {
    "xdm:trackingCode": "marketingcampaign111"
  }
}
```

# Campaign Marketing Details Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [xdm:marketing](#xdmmarketing) | Marketing | Optional | Campaign Marketing Details (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## xdm:marketing
### Marketing

Tracks offer impression and social network interactions.

`xdm:marketing`
* is optional
* type: Marketing
* defined in this schema

### xdm:marketing Type


* [Marketing](../../datatypes/marketing/marketing.schema.md) – `https://ns.adobe.com/xdm/context/marketing`




