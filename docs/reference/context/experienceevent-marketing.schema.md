
# ExperienceEvent details for marketing Schema

```
https://ns.adobe.com/xdm/context/experienceevent-marketing
```

This mixin is used to capture information regarding marketing campaigns details related to an ExperienceEvent, including campaign group, campaign name, and tracking code.

| [Abstract](../../abstract.md) | [Extensible](../../extensions.md) | [Status](../../status.md) | [Identifiable](../../id.md) | [Custom Properties](../../extensions.md) | [Additional Properties](../../extensions.md) | Defined In |
|-------------------------------|-----------------------------------|---------------------------|-----------------------------|------------------------------------------|----------------------------------------------|------------|
| Can be instantiated | Yes | Stabilizing | No | Forbidden | Permitted | [context/experienceevent-marketing.schema.json](context/experienceevent-marketing.schema.json) |
## Schema Hierarchy

* ExperienceEvent details for marketing `https://ns.adobe.com/xdm/context/experienceevent-marketing`
  * [Extensibility base schema](../common/extensible.schema.md) `https://ns.adobe.com/xdm/common/extensible`
  * [Marketing](marketing.schema.md) `https://ns.adobe.com/xdm/context/marketing`


## ExperienceEvent details for marketing Example
```json
{
  "xdm:marketing": {
    "xdm:trackingCode": "marketingcampaign111"
  }
}
```

# ExperienceEvent details for marketing Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [xdm:marketing](#xdmmarketing) | Marketing | Optional | ExperienceEvent details for marketing (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## xdm:marketing
### Marketing

The information related to marketing activities that are active with the touchpoint.

`xdm:marketing`
* is optional
* type: Marketing
* defined in this schema

### xdm:marketing Type


* [Marketing](marketing.schema.md) – `https://ns.adobe.com/xdm/context/marketing`




