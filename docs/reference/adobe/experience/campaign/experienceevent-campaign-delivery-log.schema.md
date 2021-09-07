
# Campaign Delivery Logs Schema

```
https://ns.adobe.com/experience/campaign/experienceevent-campaign-delivery-log
```

Campaign Delivery Events such as sent, bounces, failures.

| [Abstract](../../../../abstract.md) | [Extensible](../../../../extensions.md) | [Status](../../../../status.md) | [Identifiable](../../../../id.md) | [Custom Properties](../../../../extensions.md) | [Additional Properties](../../../../extensions.md) | Defined In |
|-------------------------------------|-----------------------------------------|---------------------------------|-----------------------------------|------------------------------------------------|----------------------------------------------------|------------|
| Can be instantiated | Yes | Stable | No | Forbidden | Permitted | [adobe/experience/campaign/experienceevent-campaign-delivery-log.schema.json](adobe/experience/campaign/experienceevent-campaign-delivery-log.schema.json) |

## Campaign Delivery Logs Example
```json
{
  "https://ns.adobe.com/experience/campaign/campaignID": "100",
  "https://ns.adobe.com/experience/campaign/campaignName": "JS - Offer Management",
  "https://ns.adobe.com/experience/campaign/broadlogID": "102",
  "https://ns.adobe.com/experience/campaign/deliveryID": "103",
  "https://ns.adobe.com/experience/campaign/recipientID": "3",
  "https://ns.adobe.com/experience/campaign/channel": "Email",
  "https://ns.adobe.com/experience/campaign/deliveryName": "JS - Offer Management Delivery",
  "https://ns.adobe.com/experience/campaign/quarantine": false,
  "https://ns.adobe.com/experience/campaign/controlGroupMember": true
}
```

# Campaign Delivery Logs Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [https://ns.adobe.com/experience/campaign/broadlogID](#httpsnsadobecomexperiencecampaignbroadlogid) | `string` | Optional | Campaign Delivery Logs (this schema) |
| [https://ns.adobe.com/experience/campaign/campaignID](#httpsnsadobecomexperiencecampaigncampaignid) | `string` | Optional | Campaign Delivery Logs (this schema) |
| [https://ns.adobe.com/experience/campaign/campaignLabel](#httpsnsadobecomexperiencecampaigncampaignlabel) | `string` | Optional | Campaign Delivery Logs (this schema) |
| [https://ns.adobe.com/experience/campaign/campaignName](#httpsnsadobecomexperiencecampaigncampaignname) | `string` | Optional | Campaign Delivery Logs (this schema) |
| [https://ns.adobe.com/experience/campaign/channel](#httpsnsadobecomexperiencecampaignchannel) | `string` | Optional | Campaign Delivery Logs (this schema) |
| [https://ns.adobe.com/experience/campaign/controlGroupMember](#httpsnsadobecomexperiencecampaigncontrolgroupmember) | `boolean` | Optional | Campaign Delivery Logs (this schema) |
| [https://ns.adobe.com/experience/campaign/deliveryID](#httpsnsadobecomexperiencecampaigndeliveryid) | `string` | Optional | Campaign Delivery Logs (this schema) |
| [https://ns.adobe.com/experience/campaign/deliveryLabel](#httpsnsadobecomexperiencecampaigndeliverylabel) | `string` | Optional | Campaign Delivery Logs (this schema) |
| [https://ns.adobe.com/experience/campaign/deliveryMode](#httpsnsadobecomexperiencecampaigndeliverymode) | `string` | Optional | Campaign Delivery Logs (this schema) |
| [https://ns.adobe.com/experience/campaign/deliveryName](#httpsnsadobecomexperiencecampaigndeliveryname) | `string` | Optional | Campaign Delivery Logs (this schema) |
| [https://ns.adobe.com/experience/campaign/externalID](#httpsnsadobecomexperiencecampaignexternalid) | `string` | Optional | Campaign Delivery Logs (this schema) |
| [https://ns.adobe.com/experience/campaign/proofMember](#httpsnsadobecomexperiencecampaignproofmember) | `boolean` | Optional | Campaign Delivery Logs (this schema) |
| [https://ns.adobe.com/experience/campaign/quarantine](#httpsnsadobecomexperiencecampaignquarantine) | `boolean` | Optional | Campaign Delivery Logs (this schema) |
| [https://ns.adobe.com/experience/campaign/reason](#httpsnsadobecomexperiencecampaignreason) | `string` | Optional | Campaign Delivery Logs (this schema) |
| [https://ns.adobe.com/experience/campaign/reasonMessage](#httpsnsadobecomexperiencecampaignreasonmessage) | `string` | Optional | Campaign Delivery Logs (this schema) |
| [https://ns.adobe.com/experience/campaign/recipientID](#httpsnsadobecomexperiencecampaignrecipientid) | `string` | Optional | Campaign Delivery Logs (this schema) |
| [https://ns.adobe.com/experience/campaign/seedMember](#httpsnsadobecomexperiencecampaignseedmember) | `boolean` | Optional | Campaign Delivery Logs (this schema) |
| [https://ns.adobe.com/experience/campaign/serviceID](#httpsnsadobecomexperiencecampaignserviceid) | `string` | Optional | Campaign Delivery Logs (this schema) |
| [https://ns.adobe.com/experience/campaign/status](#httpsnsadobecomexperiencecampaignstatus) | `string` | Optional | Campaign Delivery Logs (this schema) |
| [https://ns.adobe.com/experience/campaign/visitorID](#httpsnsadobecomexperiencecampaignvisitorid) | `string` | Optional | Campaign Delivery Logs (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## https://ns.adobe.com/experience/campaign/broadlogID
### Delivery Log Identifier

Identifier of the marketing campaign delivery log this event belongs to.

`https://ns.adobe.com/experience/campaign/broadlogID`
* is optional
* type: `string`
* defined in this schema

### https://ns.adobe.com/experience/campaign/broadlogID Type


`string`






## https://ns.adobe.com/experience/campaign/campaignID
### Campaign Identifier

Identifier of the marketing campaign to which activity originating this message belongs to.

`https://ns.adobe.com/experience/campaign/campaignID`
* is optional
* type: `string`
* defined in this schema

### https://ns.adobe.com/experience/campaign/campaignID Type


`string`






## https://ns.adobe.com/experience/campaign/campaignLabel
### Campaign Label

A human-friendly label of the marketing campaign which is originating this message.

`https://ns.adobe.com/experience/campaign/campaignLabel`
* is optional
* type: `string`
* defined in this schema

### https://ns.adobe.com/experience/campaign/campaignLabel Type


`string`






## https://ns.adobe.com/experience/campaign/campaignName
### Campaign Name

Internal Name that uniquely identifies the Campaign.

`https://ns.adobe.com/experience/campaign/campaignName`
* is optional
* type: `string`
* defined in this schema

### https://ns.adobe.com/experience/campaign/campaignName Type


`string`






## https://ns.adobe.com/experience/campaign/channel
### Channel

Channel of the delivery.

`https://ns.adobe.com/experience/campaign/channel`
* is optional
* type: `string`
* defined in this schema

### https://ns.adobe.com/experience/campaign/channel Type


`string`






## https://ns.adobe.com/experience/campaign/controlGroupMember
### Control Group Member

The recipient of this message is a member of a control group for this campaign activity. A control group is a population which will not receive the delivery; it is used to track post-delivery behavior and campaign impact by making a comparison between the control group (or hold out group) with the behavior of target population, which has received the delivery.

`https://ns.adobe.com/experience/campaign/controlGroupMember`
* is optional
* type: `boolean`
* defined in this schema

### https://ns.adobe.com/experience/campaign/controlGroupMember Type


`boolean`





## https://ns.adobe.com/experience/campaign/deliveryID
### Delivery Identifier

The delivery originating this message.

`https://ns.adobe.com/experience/campaign/deliveryID`
* is optional
* type: `string`
* defined in this schema

### https://ns.adobe.com/experience/campaign/deliveryID Type


`string`






## https://ns.adobe.com/experience/campaign/deliveryLabel
### Delivery Label

A human-friendly label of the delivery which is originating this message.

`https://ns.adobe.com/experience/campaign/deliveryLabel`
* is optional
* type: `string`
* defined in this schema

### https://ns.adobe.com/experience/campaign/deliveryLabel Type


`string`






## https://ns.adobe.com/experience/campaign/deliveryMode
### Delivery Mode

Mode of delivery for the messages sent.

`https://ns.adobe.com/experience/campaign/deliveryMode`
* is optional
* type: `string`
* defined in this schema

### https://ns.adobe.com/experience/campaign/deliveryMode Type


`string`






## https://ns.adobe.com/experience/campaign/deliveryName
### Delivery Name

Internal Name that uniquely identifies the delivery.

`https://ns.adobe.com/experience/campaign/deliveryName`
* is optional
* type: `string`
* defined in this schema

### https://ns.adobe.com/experience/campaign/deliveryName Type


`string`






## https://ns.adobe.com/experience/campaign/externalID
### External Identifier

External Identifier that defines the primary identity value for profile and audience.

`https://ns.adobe.com/experience/campaign/externalID`
* is optional
* type: `string`
* defined in this schema

### https://ns.adobe.com/experience/campaign/externalID Type


`string`






## https://ns.adobe.com/experience/campaign/proofMember
### Proof Member

The recipient of this message is a member of the proof group for this campaign activity. The proof is a special message that lets you test a delivery before sending to the main target. Proof recipients are responsible for approving both the form and content of the message. It is a pre-delivery target.

`https://ns.adobe.com/experience/campaign/proofMember`
* is optional
* type: `boolean`
* defined in this schema

### https://ns.adobe.com/experience/campaign/proofMember Type


`boolean`





## https://ns.adobe.com/experience/campaign/quarantine
### Quarantine

Address moved to quarantine. The quarantine is set to `true` when the message failed to deliver in a way that indicates that no future messages will be deliverable either to this address.

`https://ns.adobe.com/experience/campaign/quarantine`
* is optional
* type: `boolean`
* defined in this schema

### https://ns.adobe.com/experience/campaign/quarantine Type


`boolean`





## https://ns.adobe.com/experience/campaign/reason
### Reason

The reason why the message could/would not be delivered.

`https://ns.adobe.com/experience/campaign/reason`
* is optional
* type: `string`
* defined in this schema

### https://ns.adobe.com/experience/campaign/reason Type


`string`






## https://ns.adobe.com/experience/campaign/reasonMessage
### Reason Message

Reason of message delivery failure.

`https://ns.adobe.com/experience/campaign/reasonMessage`
* is optional
* type: `string`
* defined in this schema

### https://ns.adobe.com/experience/campaign/reasonMessage Type


`string`






## https://ns.adobe.com/experience/campaign/recipientID
### Recipient Identifer

Recipient that was targeted as part of this delivery.

`https://ns.adobe.com/experience/campaign/recipientID`
* is optional
* type: `string`
* defined in this schema

### https://ns.adobe.com/experience/campaign/recipientID Type


`string`






## https://ns.adobe.com/experience/campaign/seedMember
### Seed Member

The recipient of this message is a member of a seed list for this campaign activity. Seed addresses are used to include recipients who do not match the defined target criteria. Seed members could be your marketing team or other stakeholders who are interested in tracking/measuring the quality of the campaign. SeedMembers get the actual message, at the same time with regular recipients, even when the seedMember does not qualify to be a regular recipient.

`https://ns.adobe.com/experience/campaign/seedMember`
* is optional
* type: `boolean`
* defined in this schema

### https://ns.adobe.com/experience/campaign/seedMember Type


`boolean`





## https://ns.adobe.com/experience/campaign/serviceID
### Service Identifier

Subscribed Service that targeted this delivery.

`https://ns.adobe.com/experience/campaign/serviceID`
* is optional
* type: `string`
* defined in this schema

### https://ns.adobe.com/experience/campaign/serviceID Type


`string`






## https://ns.adobe.com/experience/campaign/status
### Message Status

Indicates status of the message that is being delivered.

`https://ns.adobe.com/experience/campaign/status`
* is optional
* type: `string`
* defined in this schema

### https://ns.adobe.com/experience/campaign/status Type


`string`






## https://ns.adobe.com/experience/campaign/visitorID
### Visitor Identifier

Visitor that was targeted as part of the delivery.

`https://ns.adobe.com/experience/campaign/visitorID`
* is optional
* type: `string`
* defined in this schema

### https://ns.adobe.com/experience/campaign/visitorID Type


`string`





