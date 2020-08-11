
# XDM Business Campaign Member Details Schema

```
https://ns.adobe.com/xdm/context/campaign-member-details
```

An XDM Business Campaign Member

| [Abstract](../../abstract.md) | [Extensible](../../extensions.md) | [Status](../../status.md) | [Identifiable](../../id.md) | [Custom Properties](../../extensions.md) | [Additional Properties](../../extensions.md) | Defined In |
|-------------------------------|-----------------------------------|---------------------------|-----------------------------|------------------------------------------|----------------------------------------------|------------|
| Can be instantiated | Yes | Experimental | No | Forbidden | Permitted | [context/campaign-member-details.schema.json](context/campaign-member-details.schema.json) |
## Schema Hierarchy

* XDM Business Campaign Member Details `https://ns.adobe.com/xdm/context/campaign-member-details`
  * [Extensibility base schema](../common/extensible.schema.md) `https://ns.adobe.com/xdm/common/extensible`


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
| [xdm:campaignMember](#xdmcampaignmember) | complex | Optional | XDM Business Campaign Member Details (this schema) |
| [xdm:campaignProgram](#xdmcampaignprogram) | complex | Optional | XDM Business Campaign Member Details (this schema) |
| [xdm:isDeleted](#xdmisdeleted) | `boolean` | Optional | XDM Business Campaign Member Details (this schema) |
| [xdm:response](#xdmresponse) | complex | Optional | XDM Business Campaign Member Details (this schema) |
| [xdm:sourceType](#xdmsourcetype) | `string` | Optional | XDM Business Campaign Member Details (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## xdm:campaignMember
### Campaign Member

Member type and associated reference ID

`xdm:campaignMember`
* is optional
* type: complex
* defined in this schema

### xdm:campaignMember Type

Unknown type ``.

```json
{
  "title": "Campaign Member",
  "description": "Member type and associated reference ID",
  "properties": {
    "xdm:type": {
      "title": "Member type",
      "description": "Member's type e.g. lead or contact",
      "type": "string"
    },
    "xdm:ID": {
      "title": "Member ID",
      "description": "Member Unique Identifier",
      "type": "string"
    }
  },
  "required": [
    "xdm:type",
    "xdm:ID"
  ],
  "simpletype": "complex"
}
```





## xdm:campaignProgram
### Campaign&#39;s Program

The name and the type of the program with which the campaign is associated, eg, 'Tradeshow'->'Event'

`xdm:campaignProgram`
* is optional
* type: complex
* defined in this schema

### xdm:campaignProgram Type

Unknown type ``.

```json
{
  "title": "Campaign's Program",
  "description": "The name and the type of the program with which the campaign is associated, eg, 'Tradeshow'->'Event'",
  "properties": {
    "xdm:ID": {
      "title": "Campaign Program ID",
      "description": "Program ID with which the campaign is associated",
      "type": "string"
    },
    "xdm:type": {
      "title": "Campaign Program Type",
      "description": "Program Type with which the campaign is associated",
      "type": "string"
    },
    "xdm:step": {
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
      ]
    }
  },
  "required": [
    "xdm:ID",
    "xdm:type"
  ],
  "simpletype": "complex"
}
```





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
* type: complex
* defined in this schema

### xdm:response Type

Unknown type ``.

```json
{
  "title": "Response of the Member",
  "description": "Record whether the member has responded to the workflow stage",
  "properties": {
    "xdm:hasResponded": {
      "title": "Response of the Member",
      "description": "Record whether the member has responded to the workflow stage",
      "type": "boolean"
    },
    "xdm:respondDate": {
      "title": "Date captured on which response was submitted",
      "description": "Date of the response by the Member",
      "type": "string",
      "format": "date-time"
    }
  },
  "simpletype": "complex"
}
```





## xdm:sourceType
### Campaign Source Type

The upstream source from where the campaign record has been syncronized

`xdm:sourceType`
* is optional
* type: `string`
* defined in this schema

### xdm:sourceType Type


`string`





