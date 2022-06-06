
# XDM Business Campaign Details Schema

```
https://ns.adobe.com/xdm/mixins/campaign-details
```

Captures properties related to business campaign details.

| [Abstract](../../../abstract.md) | [Extensible](../../../extensions.md) | [Status](../../../status.md) | [Identifiable](../../../id.md) | [Custom Properties](../../../extensions.md) | [Additional Properties](../../../extensions.md) | Defined In |
|----------------------------------|--------------------------------------|------------------------------|--------------------------------|---------------------------------------------|-------------------------------------------------|------------|
| Can be instantiated | Yes | Stable | No | Forbidden | Permitted | [fieldgroups/campaign/campaign-details.schema.json](fieldgroups/campaign/campaign-details.schema.json) |
## Schema Hierarchy

* XDM Business Campaign Details `https://ns.adobe.com/xdm/mixins/campaign-details`
  * [B2B Source](../../datatypes/b2b/b2b-source.schema.md) `https://ns.adobe.com/xdm/datatypes/b2b-source`
  * [Currency](../../datatypes/currency.schema.md) `https://ns.adobe.com/xdm/datatypes/currency`
  * [Record Status](../shared/record-status.schema.md) `https://ns.adobe.com/xdm/mixins/record-status`


## XDM Business Campaign Details Example
```json
{}
```

# XDM Business Campaign Details Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [xdm:actualCost](#xdmactualcost) | Currency | Optional | XDM Business Campaign Details (this schema) |
| [xdm:b2b](#xdmb2b) | `object` | Optional | XDM Business Campaign Details (this schema) |
| [xdm:budgetedCost](#xdmbudgetedcost) | Currency | Optional | XDM Business Campaign Details (this schema) |
| [xdm:campaignEndDate](#xdmcampaignenddate) | `string` | Optional | XDM Business Campaign Details (this schema) |
| [xdm:campaignProgressionName](#xdmcampaignprogressionname) | `string` | Optional | XDM Business Campaign Details (this schema) |
| [xdm:campaignStartDate](#xdmcampaignstartdate) | `string` | Optional | XDM Business Campaign Details (this schema) |
| [xdm:campaignStatus](#xdmcampaignstatus) | `string` | Optional | XDM Business Campaign Details (this schema) |
| [xdm:channelName](#xdmchannelname) | `string` | Optional | XDM Business Campaign Details (this schema) |
| [xdm:expectedResponse](#xdmexpectedresponse) | `string` | Optional | XDM Business Campaign Details (this schema) |
| [xdm:expectedRevenue](#xdmexpectedrevenue) | Currency | Optional | XDM Business Campaign Details (this schema) |
| [xdm:integrationPartnerName](#xdmintegrationpartnername) | `string` | Optional | XDM Business Campaign Details (this schema) |
| [xdm:isActive](#xdmisactive) | `boolean` | Optional | XDM Business Campaign Details (this schema) |
| [xdm:isDeleted](#xdmisdeleted) | `boolean` | Optional | [Record Status](../shared/record-status.schema.md#xdmisdeleted) |
| [xdm:lastActivityDate](#xdmlastactivitydate) | `string` | Optional | XDM Business Campaign Details (this schema) |
| [xdm:parentCampaignID](#xdmparentcampaignid) | `string` | Optional | XDM Business Campaign Details (this schema) |
| [xdm:parentCampaignKey](#xdmparentcampaignkey) | B2B Source | Optional | XDM Business Campaign Details (this schema) |
| [xdm:timeZone](#xdmtimezone) | `string` | Optional | XDM Business Campaign Details (this schema) |
| [xdm:timeZoneDelivery](#xdmtimezonedelivery) | `string` | Optional | XDM Business Campaign Details (this schema) |
| [xdm:timezoneName](#xdmtimezonename) | `string` | Optional | XDM Business Campaign Details (this schema) |
| [xdm:webinarHistorySyncDate](#xdmwebinarhistorysyncdate) | `string` | Optional | XDM Business Campaign Details (this schema) |
| [xdm:webinarHistorySyncStatus](#xdmwebinarhistorysyncstatus) | `string` | Optional | XDM Business Campaign Details (this schema) |
| [xdm:webinarSessionDescription](#xdmwebinarsessiondescription) | `string` | Optional | XDM Business Campaign Details (this schema) |
| [xdm:webinarSessionName](#xdmwebinarsessionname) | `string` | Optional | XDM Business Campaign Details (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## xdm:actualCost
### Actual Cost

`xdm:actualCost`
* is optional
* type: Currency
* defined in this schema

### xdm:actualCost Type


* [Currency](../../datatypes/currency.schema.md) – `https://ns.adobe.com/xdm/datatypes/currency`





## xdm:b2b


`xdm:b2b`
* is optional
* type: `object`
* defined in this schema

### xdm:b2b Type


`object` with following properties:


| Property | Type | Required |
|----------|------|----------|
| `xdm:personType`| string | Optional |



#### xdm:personType
##### Person Type

Use this property to map this campaign to the respective measure, eg. Marketo Measure.

`xdm:personType`
* is optional
* type: `string`

##### xdm:personType Type


`string`











## xdm:budgetedCost
### Budgeted Cost

`xdm:budgetedCost`
* is optional
* type: Currency
* defined in this schema

### xdm:budgetedCost Type


* [Currency](../../datatypes/currency.schema.md) – `https://ns.adobe.com/xdm/datatypes/currency`





## xdm:campaignEndDate
### Campaign End Date

`xdm:campaignEndDate`
* is optional
* type: `string`
* defined in this schema

### xdm:campaignEndDate Type


`string`
* format: `date-time` – date and time (according to [RFC 3339, section 5.6](http://tools.ietf.org/html/rfc3339))






## xdm:campaignProgressionName
### Campaign Progression Name

`xdm:campaignProgressionName`
* is optional
* type: `string`
* defined in this schema

### xdm:campaignProgressionName Type


`string`






## xdm:campaignStartDate
### Campaign Start Date

`xdm:campaignStartDate`
* is optional
* type: `string`
* defined in this schema

### xdm:campaignStartDate Type


`string`
* format: `date-time` – date and time (according to [RFC 3339, section 5.6](http://tools.ietf.org/html/rfc3339))






## xdm:campaignStatus
### Campaign Status

`xdm:campaignStatus`
* is optional
* type: `string`
* defined in this schema

### xdm:campaignStatus Type


`string`






## xdm:channelName
### Channel Name

`xdm:channelName`
* is optional
* type: `string`
* defined in this schema

### xdm:channelName Type


`string`






## xdm:expectedResponse
### Expected Response

`xdm:expectedResponse`
* is optional
* type: `string`
* defined in this schema

### xdm:expectedResponse Type


`string`






## xdm:expectedRevenue
### Expected Revenue

`xdm:expectedRevenue`
* is optional
* type: Currency
* defined in this schema

### xdm:expectedRevenue Type


* [Currency](../../datatypes/currency.schema.md) – `https://ns.adobe.com/xdm/datatypes/currency`





## xdm:integrationPartnerName
### Integration Partner Name

`xdm:integrationPartnerName`
* is optional
* type: `string`
* defined in this schema

### xdm:integrationPartnerName Type


`string`






## xdm:isActive
### Is Active

`xdm:isActive`
* is optional
* type: `boolean`
* defined in this schema

### xdm:isActive Type


`boolean`





## xdm:isDeleted
### Soft Delete Flag

Soft delete flag to indicate if the record is marked for deletion.

`xdm:isDeleted`
* is optional
* type: `boolean`
* defined in [Record Status](../shared/record-status.schema.md#xdmisdeleted)

### xdm:isDeleted Type


`boolean`





## xdm:lastActivityDate
### last Activity Date

`xdm:lastActivityDate`
* is optional
* type: `string`
* defined in this schema

### xdm:lastActivityDate Type


`string`
* format: `date-time` – date and time (according to [RFC 3339, section 5.6](http://tools.ietf.org/html/rfc3339))






## xdm:parentCampaignID
### Parent Campaign ID

Member type and associated reference ID.

`xdm:parentCampaignID`
* is optional
* type: `string`
* defined in this schema

### xdm:parentCampaignID Type


`string`






## xdm:parentCampaignKey
### Parent Campaign Key

Unique composite identifier of the Parent Campaign of the campaign, used to show hierarchies.

`xdm:parentCampaignKey`
* is optional
* type: B2B Source
* defined in this schema

### xdm:parentCampaignKey Type


* [B2B Source](../../datatypes/b2b/b2b-source.schema.md) – `https://ns.adobe.com/xdm/datatypes/b2b-source`





## xdm:timeZone
### Timezone

`xdm:timeZone`
* is optional
* type: `string`
* defined in this schema

### xdm:timeZone Type


`string`






## xdm:timeZoneDelivery
### TimeZone Delivery

`xdm:timeZoneDelivery`
* is optional
* type: `string`
* defined in this schema

### xdm:timeZoneDelivery Type


`string`






## xdm:timezoneName
### Timezone Name

`xdm:timezoneName`
* is optional
* type: `string`
* defined in this schema

### xdm:timezoneName Type


`string`






## xdm:webinarHistorySyncDate
### Webinar History Sync Date

`xdm:webinarHistorySyncDate`
* is optional
* type: `string`
* defined in this schema

### xdm:webinarHistorySyncDate Type


`string`
* format: `date-time` – date and time (according to [RFC 3339, section 5.6](http://tools.ietf.org/html/rfc3339))






## xdm:webinarHistorySyncStatus
### Webinar History Sync Status

`xdm:webinarHistorySyncStatus`
* is optional
* type: `string`
* defined in this schema

### xdm:webinarHistorySyncStatus Type


`string`






## xdm:webinarSessionDescription
### Webinar Session Description

`xdm:webinarSessionDescription`
* is optional
* type: `string`
* defined in this schema

### xdm:webinarSessionDescription Type


`string`






## xdm:webinarSessionName
### Webinar Session Name

`xdm:webinarSessionName`
* is optional
* type: `string`
* defined in this schema

### xdm:webinarSessionName Type


`string`





