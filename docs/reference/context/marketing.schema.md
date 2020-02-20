
# Marketing Schema

```
https://ns.adobe.com/xdm/context/marketing
```

The information related to marketing activities that are active with the touchpoint.

| [Abstract](../../abstract.md) | [Extensible](../../extensions.md) | [Status](../../status.md) | [Identifiable](../../id.md) | [Custom Properties](../../extensions.md) | [Additional Properties](../../extensions.md) | Defined In |
|-------------------------------|-----------------------------------|---------------------------|-----------------------------|------------------------------------------|----------------------------------------------|------------|
| Can be instantiated | Yes | Stabilizing | No | Forbidden | Permitted | [context/marketing.schema.json](context/marketing.schema.json) |
## Schema Hierarchy

* Marketing `https://ns.adobe.com/xdm/context/marketing`
  * [Extensibility base schema](../common/extensible.schema.md) `https://ns.adobe.com/xdm/common/extensible`


## Marketing Example
```json
{
  "xdm:trackingCode": "marketingcampaign111"
}
```

# Marketing Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [xdm:campaignGroup](#xdmcampaigngroup) | `string` | Optional | Marketing (this schema) |
| [xdm:campaignName](#xdmcampaignname) | `string` | Optional | Marketing (this schema) |
| [xdm:trackingCode](#xdmtrackingcode) | `string` | Optional | Marketing (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## xdm:campaignGroup
### Campaign group

Name of the campaign group where multiple campaigns are grouped together like '50%_DISCOUNT'.

`xdm:campaignGroup`
* is optional
* type: `string`
* defined in this schema

### xdm:campaignGroup Type


`string`






## xdm:campaignName
### Campaign name

Name of the campaign used to identify marketing campaign like '50%_DISCOUNT_USA' or '50%_DISCOUNT_ASIA'.

`xdm:campaignName`
* is optional
* type: `string`
* defined in this schema

### xdm:campaignName Type


`string`






## xdm:trackingCode
### Tracking code

Tracking code that can be used to identify the marketing campaign the event is associated with.

`xdm:trackingCode`
* is optional
* type: `string`
* defined in this schema

### xdm:trackingCode Type


`string`





