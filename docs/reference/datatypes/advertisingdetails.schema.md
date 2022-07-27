
# Advertising details information Schema

```
https://ns.adobe.com/xdm/datatypes/advertisingDetails
```

Advertising details information.

| [Abstract](../../abstract.md) | [Extensible](../../extensions.md) | [Status](../../status.md) | [Identifiable](../../id.md) | [Custom Properties](../../extensions.md) | [Additional Properties](../../extensions.md) | Defined In |
|-------------------------------|-----------------------------------|---------------------------|-----------------------------|------------------------------------------|----------------------------------------------|------------|
| Can be instantiated | Yes | Experimental | No | Forbidden | Permitted | [datatypes/advertisingdetails.schema.json](datatypes/advertisingdetails.schema.json) |

## Advertising details information Example
```json
{
  "xdm:ID": "123456789",
  "xdm:length": 100,
  "xdm:podPosition": 1,
  "xdm:playerName": "playerName",
  "xdm:isCompleted": false,
  "xdm:isStarted": false,
  "xdm:timePlayed": 50,
  "xdm:adBreakID": "123"
}
```

# Advertising details information Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [xdm:ID](#xdmid) | `string` | Optional | Advertising details information (this schema) |
| [xdm:adBreakID](#xdmadbreakid) | `string` | Optional | Advertising details information (this schema) |
| [xdm:advertiser](#xdmadvertiser) | `string` | Optional | Advertising details information (this schema) |
| [xdm:campaignID](#xdmcampaignid) | `string` | Optional | Advertising details information (this schema) |
| [xdm:creativeID](#xdmcreativeid) | `string` | Optional | Advertising details information (this schema) |
| [xdm:creativeURL](#xdmcreativeurl) | `string` | Optional | Advertising details information (this schema) |
| [xdm:isCompleted](#xdmiscompleted) | `boolean` | Optional | Advertising details information (this schema) |
| [xdm:isStarted](#xdmisstarted) | `boolean` | Optional | Advertising details information (this schema) |
| [xdm:length](#xdmlength) | `integer` | Optional | Advertising details information (this schema) |
| [xdm:name](#xdmname) | `string` | Optional | Advertising details information (this schema) |
| [xdm:placementID](#xdmplacementid) | `string` | Optional | Advertising details information (this schema) |
| [xdm:playerName](#xdmplayername) | `string` | Optional | Advertising details information (this schema) |
| [xdm:podPosition](#xdmpodposition) | `integer` | Optional | Advertising details information (this schema) |
| [xdm:siteID](#xdmsiteid) | `string` | Optional | Advertising details information (this schema) |
| [xdm:timePlayed](#xdmtimeplayed) | `integer` | Optional | Advertising details information (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## xdm:ID
### Ad ID

Identifier of the ad asset provided by media analytics customers. Following the Ad-ID standard [https://www.ad-id.org].

`xdm:ID`
* is optional
* type: `string`
* defined in this schema

### xdm:ID Type


`string`


All instances must conform to this regular expression 
(test examples [here](https://regexr.com/?expression=%5E.%7B1%2C%7D%24)):
```regex
^.{1,}$
```






## xdm:adBreakID
### Ad Break ID

The ID of the ad.

`xdm:adBreakID`
* is optional
* type: `string`
* defined in this schema

### xdm:adBreakID Type


`string`






## xdm:advertiser
### Ad Advertiser

Company/Brand whose product is featured in the ad.

`xdm:advertiser`
* is optional
* type: `string`
* defined in this schema

### xdm:advertiser Type


`string`






## xdm:campaignID
### Ad Campaign

ID of the ad campaign.

`xdm:campaignID`
* is optional
* type: `string`
* defined in this schema

### xdm:campaignID Type


`string`






## xdm:creativeID
### Ad Creative ID

The ID of the ad creative.

`xdm:creativeID`
* is optional
* type: `string`
* defined in this schema

### xdm:creativeID Type


`string`






## xdm:creativeURL
### Ad Creative URL

The URL of the ad creative.

`xdm:creativeURL`
* is optional
* type: `string`
* defined in this schema

### xdm:creativeURL Type


`string`
* format: `uri` – Uniformous Resource Identifier (according to [RFC3986](http://tools.ietf.org/html/rfc3986))






## xdm:isCompleted
### Ad Completed

Ad is completed.

`xdm:isCompleted`
* is optional
* type: `boolean`
* defined in this schema

### xdm:isCompleted Type


`boolean`





## xdm:isStarted
### Ad Started

Ad is started.

`xdm:isStarted`
* is optional
* type: `boolean`
* defined in this schema

### xdm:isStarted Type


`boolean`





## xdm:length
### Ad Length Or Duration

Length or duration of ad asset in seconds.

`xdm:length`
* is optional
* type: `integer`
* defined in this schema

### xdm:length Type


`integer`






## xdm:name
### Ad Name

The friendly and human-readable name of the ad asset.

`xdm:name`
* is optional
* type: `string`
* defined in this schema

### xdm:name Type


`string`






## xdm:placementID
### Ad Placement ID

Placement ID of the ad.

`xdm:placementID`
* is optional
* type: `string`
* defined in this schema

### xdm:placementID Type


`string`






## xdm:playerName
### Ad Player Name

The name of the player responsible for rendering the ad.

`xdm:playerName`
* is optional
* type: `string`
* defined in this schema

### xdm:playerName Type


`string`






## xdm:podPosition
### Ad In Pod Position (Ad Start)

The index of the ad inside the parent ad start, for example, the first ad has index 0 and the second ad has index 1.

`xdm:podPosition`
* is optional
* type: `integer`
* defined in this schema

### xdm:podPosition Type


`integer`
* minimum value: `0`






## xdm:siteID
### Ad Site ID

ID of the ad site.

`xdm:siteID`
* is optional
* type: `string`
* defined in this schema

### xdm:siteID Type


`string`






## xdm:timePlayed
### Ad Time Played

The total amount of time, in seconds, spent watching the ad (i.e., the number of seconds played).

`xdm:timePlayed`
* is optional
* type: `integer`
* defined in this schema

### xdm:timePlayed Type


`integer`





