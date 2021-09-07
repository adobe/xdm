
# Campaign Tracking Logs Schema

```
https://ns.adobe.com/experience/campaign/experienceevent-campaign-tracking-log
```

Campaign marketing events such as opens, clicks,links and impressions.

| [Abstract](../../../../abstract.md) | [Extensible](../../../../extensions.md) | [Status](../../../../status.md) | [Identifiable](../../../../id.md) | [Custom Properties](../../../../extensions.md) | [Additional Properties](../../../../extensions.md) | Defined In |
|-------------------------------------|-----------------------------------------|---------------------------------|-----------------------------------|------------------------------------------------|----------------------------------------------------|------------|
| Can be instantiated | Yes | Stable | No | Forbidden | Permitted | [adobe/experience/campaign/experienceevent-campaign-tracking-log.schema.json](adobe/experience/campaign/experienceevent-campaign-tracking-log.schema.json) |
## Schema Hierarchy

* Campaign Tracking Logs `https://ns.adobe.com/experience/campaign/experienceevent-campaign-tracking-log`
  * [Campaign Delivery Logs](experienceevent-campaign-delivery-log.schema.md) `https://ns.adobe.com/experience/campaign/experienceevent-campaign-delivery-log`


## Campaign Tracking Logs Example
```json
{
  "https://ns.adobe.com/experience/campaign/campaignID": "100",
  "https://ns.adobe.com/experience/campaign/campaignName": "JS - Offer Management",
  "https://ns.adobe.com/experience/campaign/trackinglogID": "102",
  "https://ns.adobe.com/experience/campaign/deliveryID": "103",
  "https://ns.adobe.com/experience/campaign/recipientID": "3",
  "https://ns.adobe.com/experience/campaign/channel": "Email",
  "https://ns.adobe.com/experience/campaign/deliveryName": "JS - Offer Management Delivery"
}
```

# Campaign Tracking Logs Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [https://ns.adobe.com/experience/campaign/broadlogID](#httpsnsadobecomexperiencecampaignbroadlogid) | `string` | Optional | [Campaign Delivery Logs](experienceevent-campaign-delivery-log.schema.md#httpsnsadobecomexperiencecampaignbroadlogid) |
| [https://ns.adobe.com/experience/campaign/campaignID](#httpsnsadobecomexperiencecampaigncampaignid) | `string` | Optional | [Campaign Delivery Logs](experienceevent-campaign-delivery-log.schema.md#httpsnsadobecomexperiencecampaigncampaignid) |
| [https://ns.adobe.com/experience/campaign/campaignLabel](#httpsnsadobecomexperiencecampaigncampaignlabel) | `string` | Optional | [Campaign Delivery Logs](experienceevent-campaign-delivery-log.schema.md#httpsnsadobecomexperiencecampaigncampaignlabel) |
| [https://ns.adobe.com/experience/campaign/campaignName](#httpsnsadobecomexperiencecampaigncampaignname) | `string` | Optional | [Campaign Delivery Logs](experienceevent-campaign-delivery-log.schema.md#httpsnsadobecomexperiencecampaigncampaignname) |
| [https://ns.adobe.com/experience/campaign/channel](#httpsnsadobecomexperiencecampaignchannel) | `string` | Optional | [Campaign Delivery Logs](experienceevent-campaign-delivery-log.schema.md#httpsnsadobecomexperiencecampaignchannel) |
| [https://ns.adobe.com/experience/campaign/deliveryID](#httpsnsadobecomexperiencecampaigndeliveryid) | `string` | Optional | [Campaign Delivery Logs](experienceevent-campaign-delivery-log.schema.md#httpsnsadobecomexperiencecampaigndeliveryid) |
| [https://ns.adobe.com/experience/campaign/deliveryLabel](#httpsnsadobecomexperiencecampaigndeliverylabel) | `string` | Optional | [Campaign Delivery Logs](experienceevent-campaign-delivery-log.schema.md#httpsnsadobecomexperiencecampaigndeliverylabel) |
| [https://ns.adobe.com/experience/campaign/deliveryMode](#httpsnsadobecomexperiencecampaigndeliverymode) | `string` | Optional | [Campaign Delivery Logs](experienceevent-campaign-delivery-log.schema.md#httpsnsadobecomexperiencecampaigndeliverymode) |
| [https://ns.adobe.com/experience/campaign/deliveryName](#httpsnsadobecomexperiencecampaigndeliveryname) | `string` | Optional | [Campaign Delivery Logs](experienceevent-campaign-delivery-log.schema.md#httpsnsadobecomexperiencecampaigndeliveryname) |
| [https://ns.adobe.com/experience/campaign/externalID](#httpsnsadobecomexperiencecampaignexternalid) | `string` | Optional | [Campaign Delivery Logs](experienceevent-campaign-delivery-log.schema.md#httpsnsadobecomexperiencecampaignexternalid) |
| [https://ns.adobe.com/experience/campaign/recipientID](#httpsnsadobecomexperiencecampaignrecipientid) | `string` | Optional | [Campaign Delivery Logs](experienceevent-campaign-delivery-log.schema.md#httpsnsadobecomexperiencecampaignrecipientid) |
| [https://ns.adobe.com/experience/campaign/serviceID](#httpsnsadobecomexperiencecampaignserviceid) | `string` | Optional | [Campaign Delivery Logs](experienceevent-campaign-delivery-log.schema.md#httpsnsadobecomexperiencecampaignserviceid) |
| [https://ns.adobe.com/experience/campaign/trackinglogID](#httpsnsadobecomexperiencecampaigntrackinglogid) | `string` | Optional | Campaign Tracking Logs (this schema) |
| [https://ns.adobe.com/experience/campaign/url](#httpsnsadobecomexperiencecampaignurl) | `string` | Optional | Campaign Tracking Logs (this schema) |
| [https://ns.adobe.com/experience/campaign/urlCategory](#httpsnsadobecomexperiencecampaignurlcategory) | `string` | Optional | Campaign Tracking Logs (this schema) |
| [https://ns.adobe.com/experience/campaign/visitorID](#httpsnsadobecomexperiencecampaignvisitorid) | `string` | Optional | [Campaign Delivery Logs](experienceevent-campaign-delivery-log.schema.md#httpsnsadobecomexperiencecampaignvisitorid) |
| `*` | any | Additional | this schema *allows* additional properties |

## https://ns.adobe.com/experience/campaign/broadlogID
### Delivery Log Identifier

Identifier of the marketing campaign delivery log this event belongs to.

`https://ns.adobe.com/experience/campaign/broadlogID`
* is optional
* type: `string`
* defined in [Campaign Delivery Logs](experienceevent-campaign-delivery-log.schema.md#httpsnsadobecomexperiencecampaignbroadlogid)

### https://ns.adobe.com/experience/campaign/broadlogID Type


`string`






## https://ns.adobe.com/experience/campaign/campaignID
### Campaign Identifier

Identifier of the marketing campaign to which activity originating this message belongs to.

`https://ns.adobe.com/experience/campaign/campaignID`
* is optional
* type: `string`
* defined in [Campaign Delivery Logs](experienceevent-campaign-delivery-log.schema.md#httpsnsadobecomexperiencecampaigncampaignid)

### https://ns.adobe.com/experience/campaign/campaignID Type


`string`






## https://ns.adobe.com/experience/campaign/campaignLabel
### Campaign Label

A human-friendly label of the marketing campaign which is originating this message.

`https://ns.adobe.com/experience/campaign/campaignLabel`
* is optional
* type: `string`
* defined in [Campaign Delivery Logs](experienceevent-campaign-delivery-log.schema.md#httpsnsadobecomexperiencecampaigncampaignlabel)

### https://ns.adobe.com/experience/campaign/campaignLabel Type


`string`






## https://ns.adobe.com/experience/campaign/campaignName
### Campaign Name

Internal Name that uniquely identifies the Campaign.

`https://ns.adobe.com/experience/campaign/campaignName`
* is optional
* type: `string`
* defined in [Campaign Delivery Logs](experienceevent-campaign-delivery-log.schema.md#httpsnsadobecomexperiencecampaigncampaignname)

### https://ns.adobe.com/experience/campaign/campaignName Type


`string`






## https://ns.adobe.com/experience/campaign/channel
### Channel

Channel of the delivery.

`https://ns.adobe.com/experience/campaign/channel`
* is optional
* type: `string`
* defined in [Campaign Delivery Logs](experienceevent-campaign-delivery-log.schema.md#httpsnsadobecomexperiencecampaignchannel)

### https://ns.adobe.com/experience/campaign/channel Type


`string`






## https://ns.adobe.com/experience/campaign/deliveryID
### Delivery Identifier

The delivery originating this message.

`https://ns.adobe.com/experience/campaign/deliveryID`
* is optional
* type: `string`
* defined in [Campaign Delivery Logs](experienceevent-campaign-delivery-log.schema.md#httpsnsadobecomexperiencecampaigndeliveryid)

### https://ns.adobe.com/experience/campaign/deliveryID Type


`string`






## https://ns.adobe.com/experience/campaign/deliveryLabel
### Delivery Label

A human-friendly label of the delivery which is originating this message.

`https://ns.adobe.com/experience/campaign/deliveryLabel`
* is optional
* type: `string`
* defined in [Campaign Delivery Logs](experienceevent-campaign-delivery-log.schema.md#httpsnsadobecomexperiencecampaigndeliverylabel)

### https://ns.adobe.com/experience/campaign/deliveryLabel Type


`string`






## https://ns.adobe.com/experience/campaign/deliveryMode
### Delivery Mode

Mode of delivery for the messages sent.

`https://ns.adobe.com/experience/campaign/deliveryMode`
* is optional
* type: `string`
* defined in [Campaign Delivery Logs](experienceevent-campaign-delivery-log.schema.md#httpsnsadobecomexperiencecampaigndeliverymode)

### https://ns.adobe.com/experience/campaign/deliveryMode Type


`string`






## https://ns.adobe.com/experience/campaign/deliveryName
### Delivery Name

Internal Name that uniquely identifies the delivery.

`https://ns.adobe.com/experience/campaign/deliveryName`
* is optional
* type: `string`
* defined in [Campaign Delivery Logs](experienceevent-campaign-delivery-log.schema.md#httpsnsadobecomexperiencecampaigndeliveryname)

### https://ns.adobe.com/experience/campaign/deliveryName Type


`string`






## https://ns.adobe.com/experience/campaign/externalID
### External Identifier

External Identifier that defines the primary identity value for profile and audience.

`https://ns.adobe.com/experience/campaign/externalID`
* is optional
* type: `string`
* defined in [Campaign Delivery Logs](experienceevent-campaign-delivery-log.schema.md#httpsnsadobecomexperiencecampaignexternalid)

### https://ns.adobe.com/experience/campaign/externalID Type


`string`






## https://ns.adobe.com/experience/campaign/recipientID
### Recipient Identifer

Recipient that was targeted as part of this delivery.

`https://ns.adobe.com/experience/campaign/recipientID`
* is optional
* type: `string`
* defined in [Campaign Delivery Logs](experienceevent-campaign-delivery-log.schema.md#httpsnsadobecomexperiencecampaignrecipientid)

### https://ns.adobe.com/experience/campaign/recipientID Type


`string`






## https://ns.adobe.com/experience/campaign/serviceID
### Service Identifier

Subscribed Service that targeted this delivery.

`https://ns.adobe.com/experience/campaign/serviceID`
* is optional
* type: `string`
* defined in [Campaign Delivery Logs](experienceevent-campaign-delivery-log.schema.md#httpsnsadobecomexperiencecampaignserviceid)

### https://ns.adobe.com/experience/campaign/serviceID Type


`string`






## https://ns.adobe.com/experience/campaign/trackinglogID
### Tracking Log Identifier

Primary Key of the tracking log.

`https://ns.adobe.com/experience/campaign/trackinglogID`
* is optional
* type: `string`
* defined in this schema

### https://ns.adobe.com/experience/campaign/trackinglogID Type


`string`






## https://ns.adobe.com/experience/campaign/url
### URL

Unique Identifier of the Link.

`https://ns.adobe.com/experience/campaign/url`
* is optional
* type: `string`
* defined in this schema

### https://ns.adobe.com/experience/campaign/url Type


`string`






## https://ns.adobe.com/experience/campaign/urlCategory
### URL Category

The category of the link. It may be `subscription`, or a user-defined category.

`https://ns.adobe.com/experience/campaign/urlCategory`
* is optional
* type: `string`
* defined in this schema

### https://ns.adobe.com/experience/campaign/urlCategory Type


`string`






## https://ns.adobe.com/experience/campaign/visitorID
### Visitor Identifier

Visitor that was targeted as part of the delivery.

`https://ns.adobe.com/experience/campaign/visitorID`
* is optional
* type: `string`
* defined in [Campaign Delivery Logs](experienceevent-campaign-delivery-log.schema.md#httpsnsadobecomexperiencecampaignvisitorid)

### https://ns.adobe.com/experience/campaign/visitorID Type


`string`





