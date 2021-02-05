
# Address Extensions for Adobe Campaign Schema

```
https://ns.adobe.com/experience/campaign/address
```

Address extension properties specific to Adobe Campaign.

| [Abstract](../../../../abstract.md) | [Extensible](../../../../extensions.md) | [Status](../../../../status.md) | [Identifiable](../../../../id.md) | [Custom Properties](../../../../extensions.md) | [Additional Properties](../../../../extensions.md) | Defined In |
|-------------------------------------|-----------------------------------------|---------------------------------|-----------------------------------|------------------------------------------------|----------------------------------------------------|------------|
| Can be instantiated | Yes | Stable | No | Forbidden | Permitted | [adobe/experience/campaign/address.schema.json](adobe/experience/campaign/address.schema.json) |

# Address Extensions for Adobe Campaign Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [https://ns.adobe.com/experience/campaign/addressErrorCount](#httpsnsadobecomexperiencecampaignaddresserrorcount) | `integer` | Optional | Address Extensions for Adobe Campaign (this schema) |
| [https://ns.adobe.com/experience/campaign/addressQuality](#httpsnsadobecomexperiencecampaignaddressquality) | `string` | Optional | Address Extensions for Adobe Campaign (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## https://ns.adobe.com/experience/campaign/addressErrorCount
### Address Error Count

Number of consecutive errors when sending to this address.

`https://ns.adobe.com/experience/campaign/addressErrorCount`
* is optional
* type: `integer`
* defined in this schema

### https://ns.adobe.com/experience/campaign/addressErrorCount Type


`integer`






## https://ns.adobe.com/experience/campaign/addressQuality
### Address Quality

Address quality rating.

`https://ns.adobe.com/experience/campaign/addressQuality`
* is optional
* type: `string`
* defined in this schema

### https://ns.adobe.com/experience/campaign/addressQuality Type


`string`



### https://ns.adobe.com/experience/campaign/addressQuality Known Values
| Value | Description |
|-------|-------------|
| `incomplete_address` | Incomplete address |
| `unknown_town_postal_code` | Unknown Town-Postal Code |
| `empty_street` | Empty street |
| `unknown_street` | Unknown street |
| `partially_recognized_street` | Partially-recognized street |
| `fully_recognized_street` | Fully-recognized street |



