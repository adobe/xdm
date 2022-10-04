
# XDM Business Campaign Member Details Schema

```
https://ns.adobe.com/xdm/context/campaign-member-details
```

An XDM Business Campaign Member.

| [Abstract](../../../abstract.md) | [Extensible](../../../extensions.md) | [Status](../../../status.md) | [Identifiable](../../../id.md) | [Custom Properties](../../../extensions.md) | [Additional Properties](../../../extensions.md) | Defined In |
|----------------------------------|--------------------------------------|------------------------------|--------------------------------|---------------------------------------------|-------------------------------------------------|------------|
| Can be instantiated | Yes | Stable | No | Forbidden | Permitted | [fieldgroups/campaign-member/campaign-member-details.schema.json](fieldgroups/campaign-member/campaign-member-details.schema.json) |
## Schema Hierarchy

* XDM Business Campaign Member Details `https://ns.adobe.com/xdm/context/campaign-member-details`
  * [B2B Source](../../datatypes/b2b/b2b-source.schema.md) `https://ns.adobe.com/xdm/datatypes/b2b-source`
  * [Record Status](../shared/record-status.schema.md) `https://ns.adobe.com/xdm/mixins/record-status`


## XDM Business Campaign Member Details Example
```json
{
  "xdm:campaignMember": {
    "xdm:type": "Lead",
    "xdm:ID": "18765386"
  },
  "xdm:response": {
    "xdm:hasResponded": true,
    "xdm:respondDate": "2020-05-19T00:00:00+00:00"
  },
  "xdm:campaignProgram": {
    "xdm:ID": "1",
    "xdm:type": "Webinar",
    "xdm:step": {
      "xdm:number": 10,
      "xdm:status": "Invited"
    }
  },
  "xdm:sourceType": "salesforce",
  "xdm:isDeleted": false
}
```

# XDM Business Campaign Member Details Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [xdm:acquiredByCampaignID](#xdmacquiredbycampaignid) | `string` | Optional | XDM Business Campaign Member Details (this schema) |
| [xdm:acquiredByCampaignKey](#xdmacquiredbycampaignkey) | B2B Source | Optional | XDM Business Campaign Member Details (this schema) |
| [xdm:b2b](#xdmb2b) | `object` | Optional | XDM Business Campaign Member Details (this schema) |
| [xdm:firstRespondedDate](#xdmfirstrespondeddate) | `string` | Optional | XDM Business Campaign Member Details (this schema) |
| [xdm:hasReachedSuccess](#xdmhasreachedsuccess) | `boolean` | Optional | XDM Business Campaign Member Details (this schema) |
| [xdm:hasResponded](#xdmhasresponded) | `boolean` | Optional | XDM Business Campaign Member Details (this schema) |
| [xdm:isDeleted](#xdmisdeleted) | `boolean` | Optional | [Record Status](../shared/record-status.schema.md#xdmisdeleted) |
| [xdm:isExhausted](#xdmisexhausted) | `boolean` | Optional | XDM Business Campaign Member Details (this schema) |
| [xdm:lastStatus](#xdmlaststatus) | `string` | Optional | XDM Business Campaign Member Details (this schema) |
| [xdm:memberStatus](#xdmmemberstatus) | `string` | Optional | XDM Business Campaign Member Details (this schema) |
| [xdm:memberStatusReason](#xdmmemberstatusreason) | `string` | Optional | XDM Business Campaign Member Details (this schema) |
| [xdm:membershipDate](#xdmmembershipdate) | `string` | Optional | XDM Business Campaign Member Details (this schema) |
| [xdm:nurtureCadence](#xdmnurturecadence) | `string` | Optional | XDM Business Campaign Member Details (this schema) |
| [xdm:nurtureTrackName](#xdmnurturetrackname) | `string` | Optional | XDM Business Campaign Member Details (this schema) |
| [xdm:reachedSuccessDate](#xdmreachedsuccessdate) | `string` | Optional | XDM Business Campaign Member Details (this schema) |
| [xdm:webinarConfirmationUrl](#xdmwebinarconfirmationurl) | `string` | Optional | XDM Business Campaign Member Details (this schema) |
| [xdm:webinarRegistrationID](#xdmwebinarregistrationid) | `string` | Optional | XDM Business Campaign Member Details (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## xdm:acquiredByCampaignID
### Acquired By CampaignID

`xdm:acquiredByCampaignID`
* is optional
* type: `string`
* defined in this schema

### xdm:acquiredByCampaignID Type


`string`






## xdm:acquiredByCampaignKey
### Acquired By Campaign Key

Unique composite identifier of the campaign where the person became a member

`xdm:acquiredByCampaignKey`
* is optional
* type: B2B Source
* defined in this schema

### xdm:acquiredByCampaignKey Type


* [B2B Source](../../datatypes/b2b/b2b-source.schema.md) – `https://ns.adobe.com/xdm/datatypes/b2b-source`





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











## xdm:firstRespondedDate
### First Responded Date

Date captured on which response was submitted

`xdm:firstRespondedDate`
* is optional
* type: `string`
* defined in this schema

### xdm:firstRespondedDate Type


`string`
* format: `date-time` – date and time (according to [RFC 3339, section 5.6](http://tools.ietf.org/html/rfc3339))






## xdm:hasReachedSuccess
### Has Reached Success

`xdm:hasReachedSuccess`
* is optional
* type: `boolean`
* defined in this schema

### xdm:hasReachedSuccess Type


`boolean`





## xdm:hasResponded
### Has Responded

Record whether the member has responded to the workflow stage

`xdm:hasResponded`
* is optional
* type: `boolean`
* defined in this schema

### xdm:hasResponded Type


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





## xdm:isExhausted
### isExhausted

`xdm:isExhausted`
* is optional
* type: `boolean`
* defined in this schema

### xdm:isExhausted Type


`boolean`





## xdm:lastStatus
### Last Status

`xdm:lastStatus`
* is optional
* type: `string`
* defined in this schema

### xdm:lastStatus Type


`string`






## xdm:memberStatus
### Campaign Member Status

`xdm:memberStatus`
* is optional
* type: `string`
* defined in this schema

### xdm:memberStatus Type


`string`






## xdm:memberStatusReason
### Campaign Member Status Reason

`xdm:memberStatusReason`
* is optional
* type: `string`
* defined in this schema

### xdm:memberStatusReason Type


`string`






## xdm:membershipDate
### Membership Date

`xdm:membershipDate`
* is optional
* type: `string`
* defined in this schema

### xdm:membershipDate Type


`string`
* format: `date-time` – date and time (according to [RFC 3339, section 5.6](http://tools.ietf.org/html/rfc3339))






## xdm:nurtureCadence
### Nurture Cadence

`xdm:nurtureCadence`
* is optional
* type: `string`
* defined in this schema

### xdm:nurtureCadence Type


`string`






## xdm:nurtureTrackName
### Nurture Track Name

`xdm:nurtureTrackName`
* is optional
* type: `string`
* defined in this schema

### xdm:nurtureTrackName Type


`string`






## xdm:reachedSuccessDate
### Reached Success Date

`xdm:reachedSuccessDate`
* is optional
* type: `string`
* defined in this schema

### xdm:reachedSuccessDate Type


`string`
* format: `date-time` – date and time (according to [RFC 3339, section 5.6](http://tools.ietf.org/html/rfc3339))






## xdm:webinarConfirmationUrl
### Webinar Confirmation Url

`xdm:webinarConfirmationUrl`
* is optional
* type: `string`
* defined in this schema

### xdm:webinarConfirmationUrl Type


`string`






## xdm:webinarRegistrationID
### Webinar Registration ID

`xdm:webinarRegistrationID`
* is optional
* type: `string`
* defined in this schema

### xdm:webinarRegistrationID Type


`string`





