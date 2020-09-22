
# XDM Business Campaign workflow Schema

```
https://ns.adobe.com/xdm/context/campaign-workflow-details
```

An XDM campaign workflow

| [Abstract](../../../abstract.md) | [Extensible](../../../extensions.md) | [Status](../../../status.md) | [Identifiable](../../../id.md) | [Custom Properties](../../../extensions.md) | [Additional Properties](../../../extensions.md) | Defined In |
|----------------------------------|--------------------------------------|------------------------------|--------------------------------|---------------------------------------------|-------------------------------------------------|------------|
| Can be instantiated | Yes | Experimental | No | Forbidden | Permitted | [mixins/campaign-workflow/campaign-workflow-details.schema.json](mixins/campaign-workflow/campaign-workflow-details.schema.json) |
## Schema Hierarchy

* XDM Business Campaign workflow `https://ns.adobe.com/xdm/context/campaign-workflow-details`
  * [Extensibility base schema](../../datatypes/extensible.schema.md) `https://ns.adobe.com/xdm/common/extensible`


## XDM Business Campaign workflow Example
```json
{
  "xdm:campaignName": "Direct Marketing on Financials",
  "xdm:campaignDescription": "Campaign to attract individuals topurchase financial product",
  "xdm:campaignStartDate": "2018-01-19T15:52:25+00:00",
  "xdm:campaignEndDate": "2018-01-26T15:52:25+00:00",
  "xdm:ownerID": "34567",
  "xdm:timezoneName": "America/Los_Angeles",
  "xdm:parentCampaignID": "12",
  "xdm:campaignProgram": {
    "xdm:ID": "1",
    "xdm:type": "Webinar"
  },
  "xdm:channelType": "Direct Mail",
  "xdm:sourceType": "salesforce",
  "xdm:campaignStatus": "In Progress",
  "xdm:isDeleted": false,
  "xdm:isActive": true,
  "xdm:currencyCode": "USD",
  "xdm:budgetedCost": 50000,
  "xdm:actualCost": 46756,
  "xdm:webinarSession": {
    "xdm:ID": "12345",
    "xdm:name": "Financial discipline",
    "xdm:description": "Webinar for well being on finances"
  },
  "xdm:expectedParticipation": {
    "xdm:numberOfResponses": 243,
    "xdm:revenue": 60000
  },
  "xdm:participation": {
    "xdm:numberOfRequestsSent": 300,
    "xdm:numberOfResponses": 276,
    "xdm:numberOfLeads": 235,
    "xdm:numberOfConvertedLeads": 200,
    "xdm:numberOfContacts": 35
  },
  "xdm:opportunity": {
    "xdm:numberOfOpportunities": 48,
    "xdm:amountOfAllOpportunities": 500000,
    "xdm:numberOfWonOpportunities": 34,
    "xdm:amountOFWonOpportunities": 349850
  },
  "xdm:hierarchy": {
    "xdm:budgetedCost": 50000,
    "xdm:actualCost": 46756,
    "xdm:numberOfRequestsSent": 300,
    "xdm:numberOfResponses": 276,
    "xdm:numberOfLeads": 235,
    "xdm:numberOfConvertedLeads": 200,
    "xdm:numberOfContacts": 35,
    "xdm:numberOfOpportunities": 48,
    "xdm:amountOfAllOpportunities": 500000,
    "xdm:numberOfWonOpportunities": 34,
    "xdm:amountOFWonOpportunities": 349850
  }
}
```

# XDM Business Campaign workflow Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [xdm:actualCost](#xdmactualcost) | `number` | Optional | XDM Business Campaign workflow (this schema) |
| [xdm:budgetedCost](#xdmbudgetedcost) | `number` | Optional | XDM Business Campaign workflow (this schema) |
| [xdm:campaignDescription](#xdmcampaigndescription) | `string` | Optional | XDM Business Campaign workflow (this schema) |
| [xdm:campaignEndDate](#xdmcampaignenddate) | `string` | Optional | XDM Business Campaign workflow (this schema) |
| [xdm:campaignName](#xdmcampaignname) | `string` | Optional | XDM Business Campaign workflow (this schema) |
| [xdm:campaignProgram](#xdmcampaignprogram) | `object` | Optional | XDM Business Campaign workflow (this schema) |
| [xdm:campaignStartDate](#xdmcampaignstartdate) | `string` | Optional | XDM Business Campaign workflow (this schema) |
| [xdm:campaignStatus](#xdmcampaignstatus) | `string` | Optional | XDM Business Campaign workflow (this schema) |
| [xdm:channelType](#xdmchanneltype) | `string` | Optional | XDM Business Campaign workflow (this schema) |
| [xdm:currencyCode](#xdmcurrencycode) | `string` | Optional | XDM Business Campaign workflow (this schema) |
| [xdm:expectedParticipation](#xdmexpectedparticipation) | `object` | Optional | XDM Business Campaign workflow (this schema) |
| [xdm:hierarchy](#xdmhierarchy) | `object` | Optional | XDM Business Campaign workflow (this schema) |
| [xdm:isActive](#xdmisactive) | `boolean` | Optional | XDM Business Campaign workflow (this schema) |
| [xdm:isDeleted](#xdmisdeleted) | `boolean` | Optional | XDM Business Campaign workflow (this schema) |
| [xdm:opportunity](#xdmopportunity) | `object` | Optional | XDM Business Campaign workflow (this schema) |
| [xdm:ownerID](#xdmownerid) | `string` | Optional | XDM Business Campaign workflow (this schema) |
| [xdm:parentCampaignID](#xdmparentcampaignid) | `string` | Optional | XDM Business Campaign workflow (this schema) |
| [xdm:participation](#xdmparticipation) | `object` | Optional | XDM Business Campaign workflow (this schema) |
| [xdm:sourceType](#xdmsourcetype) | `string` | Optional | XDM Business Campaign workflow (this schema) |
| [xdm:timezoneName](#xdmtimezonename) | `string` | Optional | XDM Business Campaign workflow (this schema) |
| [xdm:webinarSession](#xdmwebinarsession) | `object` | Optional | XDM Business Campaign workflow (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## xdm:actualCost
### Actual cost

Actual cost spent for the campaign

`xdm:actualCost`
* is optional
* type: `number`
* defined in this schema

### xdm:actualCost Type


`number`






## xdm:budgetedCost
### Budgeted Cost

Cost for which the campaign has been budgeted

`xdm:budgetedCost`
* is optional
* type: `number`
* defined in this schema

### xdm:budgetedCost Type


`number`






## xdm:campaignDescription
### Campaign description

Detailed description of the campaign

`xdm:campaignDescription`
* is optional
* type: `string`
* defined in this schema

### xdm:campaignDescription Type


`string`






## xdm:campaignEndDate
### Campaign End date time

The date and time by which the campaign should end

`xdm:campaignEndDate`
* is optional
* type: `string`
* defined in this schema

### xdm:campaignEndDate Type


`string`
* format: `date-time` – date and time (according to [RFC 3339, section 5.6](http://tools.ietf.org/html/rfc3339))






## xdm:campaignName
### Campaign Name

Name of the campaign

`xdm:campaignName`
* is optional
* type: `string`
* defined in this schema

### xdm:campaignName Type


`string`






## xdm:campaignProgram
### Campaign&#39;s Program

The ID and the type of the program with which the campaign is associated, eg, 'Tradeshow'->'Event'

`xdm:campaignProgram`
* is optional
* type: `object`
* defined in this schema

### xdm:campaignProgram Type


`object` with following properties:


| Property | Type | Required |
|----------|------|----------|
| `xdm:ID`| string | **Required** |
| `xdm:type`| string | **Required** |



#### xdm:ID
##### Program ID

Program ID associated with the Campaign

`xdm:ID`
* is **required**
* type: `string`

##### xdm:ID Type


`string`








#### xdm:type
##### Program Type

Program's Type of the Program ID

`xdm:type`
* is **required**
* type: `string`

##### xdm:type Type


`string`











## xdm:campaignStartDate
### Campaign Start date time

The date and time when the campaign started

`xdm:campaignStartDate`
* is optional
* type: `string`
* defined in this schema

### xdm:campaignStartDate Type


`string`
* format: `date-time` – date and time (according to [RFC 3339, section 5.6](http://tools.ietf.org/html/rfc3339))






## xdm:campaignStatus
### Campaign Status

Current Status of the campaign. eg. 'Active','Disabled' etc.

`xdm:campaignStatus`
* is optional
* type: `string`
* defined in this schema

### xdm:campaignStatus Type


`string`






## xdm:channelType
### Channel Type

The type of the channel

`xdm:channelType`
* is optional
* type: `string`
* defined in this schema

### xdm:channelType Type


`string`






## xdm:currencyCode
### Currency code

Standard ISO code(ISO 4217) for currency.

`xdm:currencyCode`
* is optional
* type: `string`
* defined in this schema

### xdm:currencyCode Type


`string`


All instances must conform to this regular expression 
(test examples [here](https://regexr.com/?expression=%5E(%5BA-Z%5D%7B3%7D)%24)):
```regex
^([A-Z]{3})$
```






## xdm:expectedParticipation
### Expected Participation

Metrics expected out of this campaign

`xdm:expectedParticipation`
* is optional
* type: `object`
* defined in this schema

### xdm:expectedParticipation Type


`object` with following properties:


| Property | Type | Required |
|----------|------|----------|
| `xdm:numberOfResponses`| integer | Optional |
| `xdm:revenue`| number | Optional |



#### xdm:numberOfResponses
##### Responses expected

Capture how many responses are expected for this campaign

`xdm:numberOfResponses`
* is optional
* type: `integer`

##### xdm:numberOfResponses Type


`integer`








#### xdm:revenue
##### Revenue Expected

Campaign's expected revenue

`xdm:revenue`
* is optional
* type: `number`

##### xdm:revenue Type


`number`











## xdm:hierarchy
### Hierarcy Metrics captured

Metrics captured at each hierarchy of the campaign, provided there are sub-campaigns

`xdm:hierarchy`
* is optional
* type: `object`
* defined in this schema

### xdm:hierarchy Type


`object` with following properties:


| Property | Type | Required |
|----------|------|----------|
| `xdm:actualCost`| number | Optional |
| `xdm:amountOFWonOpportunities`| number | Optional |
| `xdm:amountOfAllOpportunities`| number | Optional |
| `xdm:budgetedCost`| number | Optional |
| `xdm:numberOfContacts`| integer | Optional |
| `xdm:numberOfConvertedLeads`| integer | Optional |
| `xdm:numberOfLeads`| integer | Optional |
| `xdm:numberOfOpportunities`| integer | Optional |
| `xdm:numberOfRequestsSent`| integer | Optional |
| `xdm:numberOfResponses`| integer | Optional |
| `xdm:numberOfWonOpportunities`| integer | Optional |



#### xdm:actualCost
##### Actual Cost

Actual cost spent for the campaign

`xdm:actualCost`
* is optional
* type: `number`

##### xdm:actualCost Type


`number`








#### xdm:amountOFWonOpportunities
##### Amount of Won Opportunities

Sum amount of the converted opportunities

`xdm:amountOFWonOpportunities`
* is optional
* type: `number`

##### xdm:amountOFWonOpportunities Type


`number`








#### xdm:amountOfAllOpportunities
##### Amount for all opportunities

Sum amount associated with all opportunities

`xdm:amountOfAllOpportunities`
* is optional
* type: `number`

##### xdm:amountOfAllOpportunities Type


`number`








#### xdm:budgetedCost
##### Budgeted cost

Cost for which the Campaign has been budgeted for

`xdm:budgetedCost`
* is optional
* type: `number`

##### xdm:budgetedCost Type


`number`








#### xdm:numberOfContacts
##### Number of Contacts

Number to indicate that the request was sent to how many contacts

`xdm:numberOfContacts`
* is optional
* type: `integer`

##### xdm:numberOfContacts Type


`integer`








#### xdm:numberOfConvertedLeads
##### Converted Leads

Number to indicate that how many leads got converted by this campaign

`xdm:numberOfConvertedLeads`
* is optional
* type: `integer`

##### xdm:numberOfConvertedLeads Type


`integer`








#### xdm:numberOfLeads
##### Number of leads

Number of leads to whom the requests have sent

`xdm:numberOfLeads`
* is optional
* type: `integer`

##### xdm:numberOfLeads Type


`integer`








#### xdm:numberOfOpportunities
##### Number of Opportunities

Total number of opportunities associated with the campaign

`xdm:numberOfOpportunities`
* is optional
* type: `integer`

##### xdm:numberOfOpportunities Type


`integer`








#### xdm:numberOfRequestsSent
##### Number of Requests sent

Number of Requests sent to participants at each level

`xdm:numberOfRequestsSent`
* is optional
* type: `integer`

##### xdm:numberOfRequestsSent Type


`integer`








#### xdm:numberOfResponses
##### Number of responses

Number of responses recieved by the participants at each level of the hierarchy

`xdm:numberOfResponses`
* is optional
* type: `integer`

##### xdm:numberOfResponses Type


`integer`








#### xdm:numberOfWonOpportunities
##### Number of won Opportunities

Number of converted opportunities

`xdm:numberOfWonOpportunities`
* is optional
* type: `integer`

##### xdm:numberOfWonOpportunities Type


`integer`











## xdm:isActive
### Campaign Active status 

A flag to indicate if the campaign is currently in the running/completed state

`xdm:isActive`
* is optional
* type: `boolean`
* defined in this schema

### xdm:isActive Type


`boolean`





## xdm:isDeleted
### Campaign soft delete status

A boolean flag which indicates whether the campaign is soft deleted in the system

`xdm:isDeleted`
* is optional
* type: `boolean`
* defined in this schema

### xdm:isDeleted Type


`boolean`





## xdm:opportunity
### Opportunity details for the campaign

Opportunity related metrics captured for the campaign

`xdm:opportunity`
* is optional
* type: `object`
* defined in this schema

### xdm:opportunity Type


`object` with following properties:


| Property | Type | Required |
|----------|------|----------|
| `xdm:amountOFWonOpportunities`| number | Optional |
| `xdm:amountOfAllOpportunities`| number | Optional |
| `xdm:numberOfOpportunities`| integer | Optional |
| `xdm:numberOfWonOpportunities`| integer | Optional |



#### xdm:amountOFWonOpportunities
##### Amount of Won Opportunities

Sum amount of the converted opportunities

`xdm:amountOFWonOpportunities`
* is optional
* type: `number`

##### xdm:amountOFWonOpportunities Type


`number`








#### xdm:amountOfAllOpportunities
##### Amount for all opportunities

Sum amount associated with all opportunities

`xdm:amountOfAllOpportunities`
* is optional
* type: `number`

##### xdm:amountOfAllOpportunities Type


`number`








#### xdm:numberOfOpportunities
##### Number of Opportunities

Total number of opportunities associated with the campaign

`xdm:numberOfOpportunities`
* is optional
* type: `integer`

##### xdm:numberOfOpportunities Type


`integer`








#### xdm:numberOfWonOpportunities
##### Number of won Opportunities

Number of converted opportunities

`xdm:numberOfWonOpportunities`
* is optional
* type: `integer`

##### xdm:numberOfWonOpportunities Type


`integer`











## xdm:ownerID
### Campaign Owner

The owner of the campaign

`xdm:ownerID`
* is optional
* type: `string`
* defined in this schema

### xdm:ownerID Type


`string`






## xdm:parentCampaignID
### Parent Campaign

The parent of the campaignID

`xdm:parentCampaignID`
* is optional
* type: `string`
* defined in this schema

### xdm:parentCampaignID Type


`string`






## xdm:participation
### Campaign participation

Capture metrics related to what actually happenedfor the campaign

`xdm:participation`
* is optional
* type: `object`
* defined in this schema

### xdm:participation Type


`object` with following properties:


| Property | Type | Required |
|----------|------|----------|
| `xdm:numberOfContacts`| integer | Optional |
| `xdm:numberOfConvertedLeads`| integer | Optional |
| `xdm:numberOfLeads`| integer | Optional |
| `xdm:numberOfRequestsSent`| integer | Optional |
| `xdm:numberOfResponses`| integer | Optional |



#### xdm:numberOfContacts
##### Number of Contacts

Number to indicate that the request was sent to how many contacts

`xdm:numberOfContacts`
* is optional
* type: `integer`

##### xdm:numberOfContacts Type


`integer`








#### xdm:numberOfConvertedLeads
##### Converted Leads

Number to indicate that how many leads got converted by this campaign

`xdm:numberOfConvertedLeads`
* is optional
* type: `integer`

##### xdm:numberOfConvertedLeads Type


`integer`








#### xdm:numberOfLeads
##### Number of leads

Number of leads to whom the requests have sent

`xdm:numberOfLeads`
* is optional
* type: `integer`

##### xdm:numberOfLeads Type


`integer`








#### xdm:numberOfRequestsSent
##### Number of Requests sent

Number of requests sent to persons for participation

`xdm:numberOfRequestsSent`
* is optional
* type: `integer`

##### xdm:numberOfRequestsSent Type


`integer`








#### xdm:numberOfResponses
##### Recieved Responses

Number of responses recieved out of number of requests sent

`xdm:numberOfResponses`
* is optional
* type: `integer`

##### xdm:numberOfResponses Type


`integer`











## xdm:sourceType
### Campaign Source Type

The upstream source from where the campaign record has been syncronized

`xdm:sourceType`
* is optional
* type: `string`
* defined in this schema

### xdm:sourceType Type


`string`






## xdm:timezoneName
### Timezone Name

Name of the timezone 'Pacific Time','Eastern time' etc.

`xdm:timezoneName`
* is optional
* type: `string`
* defined in this schema

### xdm:timezoneName Type


`string`






## xdm:webinarSession
### Webinar details

Webinar details captured if the campaign type is Webinar

`xdm:webinarSession`
* is optional
* type: `object`
* defined in this schema

### xdm:webinarSession Type


`object` with following properties:


| Property | Type | Required |
|----------|------|----------|
| `xdm:ID`| string | Optional |
| `xdm:description`| string | Optional |
| `xdm:name`| string | Optional |



#### xdm:ID
##### Webinar session ID

Detail description of the Webinar session.

`xdm:ID`
* is optional
* type: `string`

##### xdm:ID Type


`string`








#### xdm:description
##### Webinar detail description

Detail description of the Webinar session

`xdm:description`
* is optional
* type: `string`

##### xdm:description Type


`string`








#### xdm:name
##### Webinar session name

Name of Webinar session.

`xdm:name`
* is optional
* type: `string`

##### xdm:name Type


`string`










