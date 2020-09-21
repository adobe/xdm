
# XDM Business Campaign Member Details Schema

```
https://ns.adobe.com/xdm/context/campaign-member-details
```

An XDM Business Campaign Member

| [Abstract](../../../abstract.md) | [Extensible](../../../extensions.md) | [Status](../../../status.md) | [Identifiable](../../../id.md) | [Custom Properties](../../../extensions.md) | [Additional Properties](../../../extensions.md) | Defined In |
|----------------------------------|--------------------------------------|------------------------------|--------------------------------|---------------------------------------------|-------------------------------------------------|------------|
| Can be instantiated | Yes | Experimental | No | Forbidden | Permitted | [mixins/campaign-member/campaign-member-details.schema.json](mixins/campaign-member/campaign-member-details.schema.json) |
## Schema Hierarchy

* XDM Business Campaign Member Details `https://ns.adobe.com/xdm/context/campaign-member-details`
  * [Extensibility base schema](../../datatypes/extensible.schema.md) `https://ns.adobe.com/xdm/common/extensible`


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
| [xdm:campaignMember](#xdmcampaignmember) | `object` | Optional | XDM Business Campaign Member Details (this schema) |
| [xdm:campaignProgram](#xdmcampaignprogram) | `object` | Optional | XDM Business Campaign Member Details (this schema) |
| [xdm:isDeleted](#xdmisdeleted) | `boolean` | Optional | XDM Business Campaign Member Details (this schema) |
| [xdm:response](#xdmresponse) | `object` | Optional | XDM Business Campaign Member Details (this schema) |
| [xdm:sourceType](#xdmsourcetype) | `string` | Optional | XDM Business Campaign Member Details (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## xdm:campaignMember
### Campaign Member

Member type and associated reference ID

`xdm:campaignMember`
* is optional
* type: `object`
* defined in this schema

### xdm:campaignMember Type


`object` with following properties:


| Property | Type | Required |
|----------|------|----------|
| `xdm:ID`| string | **Required** |
| `xdm:type`| string | **Required** |



#### xdm:ID
##### Member ID

Member Unique Identifier

`xdm:ID`
* is **required**
* type: `string`

##### xdm:ID Type


`string`








#### xdm:type
##### Member type

Member's type e.g. lead or contact

`xdm:type`
* is **required**
* type: `string`

##### xdm:type Type


`string`











## xdm:campaignProgram
### Campaign&#39;s Program

The name and the type of the program with which the campaign is associated, eg, 'Tradeshow'->'Event'

`xdm:campaignProgram`
* is optional
* type: `object`
* defined in this schema

### xdm:campaignProgram Type


`object` with following properties:


| Property | Type | Required |
|----------|------|----------|
| `xdm:ID`| string | **Required** |
| `xdm:step`| object | Optional |
| `xdm:type`| string | **Required** |



#### xdm:ID
##### Campaign Program ID

Program ID with which the campaign is associated

`xdm:ID`
* is **required**
* type: `string`

##### xdm:ID Type


`string`








#### xdm:step

undefined

`xdm:step`
* is optional
* type: `object`

##### xdm:step Type

Unknown type `object`.

```json
{
  "type": "object",
  "properties": {
    "xdm:number": {
      "title": "Campaign Program's control workflow step number",
      "description": "Program's workflow step number with which the campaign is associated",
      "type": "integer"
    },
    "xdm:status": {
      "title": "Campaign Program Step Status Name",
      "description": "Program Step Status Name based on Step number with which the campaign is associated",
      "type": "string"
    }
  },
  "required": [
    "xdm:number",
    "xdm:status"
  ],
  "simpletype": "`object`"
}
```







#### xdm:type
##### Campaign Program Type

Program Type with which the campaign is associated

`xdm:type`
* is **required**
* type: `string`

##### xdm:type Type


`string`











## xdm:isDeleted
### Campaign soft delete status

A boolean flag which indicates whether the campaign is soft deleted in the system

`xdm:isDeleted`
* is optional
* type: `boolean`
* defined in this schema

### xdm:isDeleted Type


`boolean`





## xdm:response
### Response of the Member

Record whether the member has responded to the workflow stage

`xdm:response`
* is optional
* type: `object`
* defined in this schema

### xdm:response Type


`object` with following properties:


| Property | Type | Required |
|----------|------|----------|
| `xdm:hasResponded`| boolean | Optional |
| `xdm:respondDate`| string | Optional |



#### xdm:hasResponded
##### Response of the Member

Record whether the member has responded to the workflow stage

`xdm:hasResponded`
* is optional
* type: `boolean`

##### xdm:hasResponded Type


`boolean`







#### xdm:respondDate
##### Date captured on which response was submitted

Date of the response by the Member

`xdm:respondDate`
* is optional
* type: `string`

##### xdm:respondDate Type


`string`
* format: `date-time` – date and time (according to [RFC 3339, section 5.6](http://tools.ietf.org/html/rfc3339))











## xdm:sourceType
### Campaign Source Type

The upstream source from where the campaign record has been syncronized

`xdm:sourceType`
* is optional
* type: `string`
* defined in this schema

### xdm:sourceType Type


`string`





