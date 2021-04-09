
# Ad Campaign Detail Schema

```
https://ns.adobe.com/experience/adcloud/campaign
```

Adobe Advertising Cloud ad campaign hierarchy details such as, account, package, advertiser, and campaign IDs.

| [Abstract](../../../../abstract.md) | [Extensible](../../../../extensions.md) | [Status](../../../../status.md) | [Identifiable](../../../../id.md) | [Custom Properties](../../../../extensions.md) | [Additional Properties](../../../../extensions.md) | Defined In |
|-------------------------------------|-----------------------------------------|---------------------------------|-----------------------------------|------------------------------------------------|----------------------------------------------------|------------|
| Can be instantiated | Yes | Stable | No | Forbidden | Permitted | [adobe/experience/adcloud/campaign.schema.json](adobe/experience/adcloud/campaign.schema.json) |

## Ad Campaign Detail Examples

```json
{
  "xdm:accountId": "123456",
  "xdm:dspId": "2",
  "xdm:campaignId": "987654",
  "xdm:placementId": "7656467",
  "xdm:packageId": "98766172",
  "xdm:advertiserId": "87612391",
  "xdm:experimentId": "9812987",
  "xdm:sampleGroupId": "8676378",
  "xdm:currency": "USD"
}
```

```json
{
  "@id": "100001061",
  "searchads:campaignId": "10001234",
  "searchads:accountId": "10001456",
  "searchads:campaignName": "My First Campaign",
  "searchads:campaignDescription": "Branded Mobile Campaign",
  "searchads:campaignStatus": "Active",
  "searchads:channelType": "Search",
  "searchads:budget": 123.45,
  "searchads:budgetType": "Monthly",
  "searchads.adDeliveryType": "Standard",
  "searchads.CampaignObjective": "visit_web",
  "repo:createDate": "2019-04-26T14:00:00+00:00",
  "repo:modifyDate": "2019-04-26T14:00:00+00:00"
}
```

```json
{
  "@id": "12",
  "dsp:campaignKey": "QEr8RnlYHwnG4KbFSQor",
  "dsp:campaignName": "News At Cisco",
  "dsp:campaignStatus": "Active",
  "dsp:timezone": "America/New_York",
  "dsp:type": "Media",
  "dsp:userId": 495991,
  "dsp:accountId": "1",
  "dsp:advertiserId": "3",
  "dsp:campaignStartTime": "2019-01-09 00:00:00",
  "dsp:campaignEndTime": "2019-01-11 00:00:00",
  "repo:createDate": "2019-04-26T14:00:00+00:00",
  "repo:modifyDate": "2019-04-26T14:00:00+00:00"
}
```

```json
{
  "xdm:id": "100001061",
  "xdm:campaignId": "10001234",
  "xdm:campaignName": "My First Campaign",
  "xdm:campaignDescription": "Branded Mobile Campaign",
  "xdm:campaignStatus": "Active",
  "xdm:channelType": "Search",
  "xdm:budget": 123.45,
  "xdm:budgetType": "Monthly",
  "xdm.adDeliveryType": "Standard",
  "xdm.CampaignObjective": "visit_web",
  "repo:createDate": "2019-04-26T14:00:00+00:00",
  "repo:modifyDate": "2019-04-26T14:00:00+00:00"
}
```


# Ad Campaign Detail Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [xdm:accountId](#xdmaccountid) | `string` | Optional | Ad Campaign Detail (this schema) |
| [xdm:advertiserId](#xdmadvertiserid) | `string` | Optional | Ad Campaign Detail (this schema) |
| [xdm:campaignId](#xdmcampaignid) | `string` | Optional | Ad Campaign Detail (this schema) |
| [xdm:currency](#xdmcurrency) | `string` | Optional | Ad Campaign Detail (this schema) |
| [xdm:dspId](#xdmdspid) | `string` | Optional | Ad Campaign Detail (this schema) |
| [xdm:experimentId](#xdmexperimentid) | `string` | Optional | Ad Campaign Detail (this schema) |
| [xdm:packageId](#xdmpackageid) | `string` | Optional | Ad Campaign Detail (this schema) |
| [xdm:placementId](#xdmplacementid) | `string` | Optional | Ad Campaign Detail (this schema) |
| [xdm:sampleGroupId](#xdmsamplegroupid) | `string` | Optional | Ad Campaign Detail (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## xdm:accountId
### Account Identifier

Identifier for the account.

`xdm:accountId`
* is optional
* type: `string`
* defined in this schema

### xdm:accountId Type


`string`






## xdm:advertiserId
### Advertiser Identifier

Identifier for the advertiser.

`xdm:advertiserId`
* is optional
* type: `string`
* defined in this schema

### xdm:advertiserId Type


`string`






## xdm:campaignId
### Campaign Identifier

Identifier for the campaign.

`xdm:campaignId`
* is optional
* type: `string`
* defined in this schema

### xdm:campaignId Type


`string`






## xdm:currency
### Account Currency

The ISO 4217 billing currency code for the account.

`xdm:currency`
* is optional
* type: `string`
* defined in this schema

### xdm:currency Type


`string`


All instances must conform to this regular expression 
```regex
^[A-Z]{3}$
```

* test example: [USD](https://regexr.com/?expression=%5E%5BA-Z%5D%7B3%7D%24&text=USD)
* test example: [EUR](https://regexr.com/?expression=%5E%5BA-Z%5D%7B3%7D%24&text=EUR)




### xdm:currency Examples

```json
"USD"
```

```json
"EUR"
```



## xdm:dspId
### Demand Side Platform(DSP) Identifier

Identifier for the Demand Side Platform where the campaign is defined. Usually, is the id of Adobe Advertising Cloud DSP.

`xdm:dspId`
* is optional
* type: `string`
* defined in this schema

### xdm:dspId Type


`string`






## xdm:experimentId
### Experiment Identifier

Identifier for the experiment.

`xdm:experimentId`
* is optional
* type: `string`
* defined in this schema

### xdm:experimentId Type


`string`






## xdm:packageId
### Package Identifier

Identifier for the package.

`xdm:packageId`
* is optional
* type: `string`
* defined in this schema

### xdm:packageId Type


`string`






## xdm:placementId
### Placement Identifier

Identifier for the placement.

`xdm:placementId`
* is optional
* type: `string`
* defined in this schema

### xdm:placementId Type


`string`






## xdm:sampleGroupId
### Sample Group Identifier

Identifier for the sample group.

`xdm:sampleGroupId`
* is optional
* type: `string`
* defined in this schema

### xdm:sampleGroupId Type


`string`





