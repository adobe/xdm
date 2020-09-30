
# Adobe Advertising Cloud Ad Details Schema

```
https://ns.adobe.com/experience/adcloud/advertisement
```

Adobe Advertising Cloud Ad Details.

| [Abstract](../../../../abstract.md) | [Extensible](../../../../extensions.md) | [Status](../../../../status.md) | [Identifiable](../../../../id.md) | [Custom Properties](../../../../extensions.md) | [Additional Properties](../../../../extensions.md) | Defined In |
|-------------------------------------|-----------------------------------------|---------------------------------|-----------------------------------|------------------------------------------------|----------------------------------------------------|------------|
| Can be instantiated | Yes | Experimental | No | Forbidden | Permitted | [adobe/experience/adcloud/advertisement.schema.json](adobe/experience/adcloud/advertisement.schema.json) |

## Adobe Advertising Cloud Ad Details Examples

```json
{
  "xdm:adId": "4116904851",
  "xdm:runtime": "HTML5",
  "xdm:adClass": "video",
  "xdm:adUnitType": "HTML5",
  "xdm:promotedAssetId": "4116761052"
}
```

```json
{
  "xdm:creativeID": "301404063528",
  "xdm:keywordID": "147741280",
  "xdm:audienceID": "257600311580",
  "xdm:adGroupID": "32345812783",
  "xdm:campaignID": "663049855",
  "xdm:networkType": "search",
  "xdm:matchType": "broad"
}
```

```json
{
  "@id": "14",
  "dsp:adKey": "yyyy029YLCDvseo8QhTE",
  "dsp:adStatus": "Active",
  "dsp:adClass": "inbanner",
  "dsp:adUnitType": "Flash",
  "dsp:externalCreativeId": "5121209",
  "dsp:promotedVideoId": "14",
  "dsp:adServerId": "2",
  "dsp:placementIds": [
    "1"
  ]
}
```


# Adobe Advertising Cloud Ad Details Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [xdm:adClass](#xdmadclass) | `string` | Optional | Adobe Advertising Cloud Ad Details (this schema) |
| [xdm:adGroupID](#xdmadgroupid) | `string` | Optional | Adobe Advertising Cloud Ad Details (this schema) |
| [xdm:adId](#xdmadid) | `string` | Optional | Adobe Advertising Cloud Ad Details (this schema) |
| [xdm:adUnitType](#xdmadunittype) | `string` | Optional | Adobe Advertising Cloud Ad Details (this schema) |
| [xdm:audienceID](#xdmaudienceid) | `string` | Optional | Adobe Advertising Cloud Ad Details (this schema) |
| [xdm:campaignID](#xdmcampaignid) | `string` | Optional | Adobe Advertising Cloud Ad Details (this schema) |
| [xdm:creativeID](#xdmcreativeid) | `string` | Optional | Adobe Advertising Cloud Ad Details (this schema) |
| [xdm:isDynamicSearchAd](#xdmisdynamicsearchad) | `boolean` | Optional | Adobe Advertising Cloud Ad Details (this schema) |
| [xdm:keyword](#xdmkeyword) | `string` | Optional | Adobe Advertising Cloud Ad Details (this schema) |
| [xdm:keywordID](#xdmkeywordid) | `string` | Optional | Adobe Advertising Cloud Ad Details (this schema) |
| [xdm:matchType](#xdmmatchtype) | `string` | Optional | Adobe Advertising Cloud Ad Details (this schema) |
| [xdm:networkType](#xdmnetworktype) | `string` | Optional | Adobe Advertising Cloud Ad Details (this schema) |
| [xdm:promotedAssetId](#xdmpromotedassetid) | `string` | Optional | Adobe Advertising Cloud Ad Details (this schema) |
| [xdm:runtime](#xdmruntime) | `string` | Optional | Adobe Advertising Cloud Ad Details (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## xdm:adClass
### Ad Class

Ad class of driving event.

`xdm:adClass`
* is optional
* type: `string`
* defined in this schema

### xdm:adClass Type


`string`



### xdm:adClass Known Values
| Value | Description |
|-------|-------------|
| `display` | Display |
| `video` | Video |
| `social` | Social |




## xdm:adGroupID
### Ad Group Identifier

Identifier for the adGroup which ad is displayed and triggered this click event.

`xdm:adGroupID`
* is optional
* type: `string`
* defined in this schema

### xdm:adGroupID Type


`string`






## xdm:adId
### Ad Identifier

Identifier for the ad this event is associated with. Not related to the Ad-ID standard.

`xdm:adId`
* is optional
* type: `string`
* defined in this schema

### xdm:adId Type


`string`






## xdm:adUnitType
### Ad Unit Type

Identifier for the literal piece of code driving display of the ad in a browser/device.

`xdm:adUnitType`
* is optional
* type: `string`
* defined in this schema

### xdm:adUnitType Type


`string`



### xdm:adUnitType Known Values
| Value | Description |
|-------|-------------|
| `linearVideo` | Linear video |
| `interactiveVideo` | Interactive video |
| `banner` | Banner |
| `richMediaBanner` | Rich media banner |
| `newsFeedVideo` | News feed video |
| `newsFeedDisplay` | News feed display |
| `HTML5` | HTML5 |
| `inPageVideo` | In page video |
| `inPageDisplay` | In page display |
| `facebook` | Facebook |
| `twitter` | Twitter |
| `linearTv` | Linear TV |
| `vod` | Video on Demand |




## xdm:audienceID
### Audience Identifier

Identifier for the audience segment for which the ad is targeted.

`xdm:audienceID`
* is optional
* type: `string`
* defined in this schema

### xdm:audienceID Type


`string`






## xdm:campaignID
### Campaign Identifier

Identifier for the campaign that belongs to the current displayed advertisement which triggers this click event.

`xdm:campaignID`
* is optional
* type: `string`
* defined in this schema

### xdm:campaignID Type


`string`






## xdm:creativeID
### Creative Identifier

Identifier for the creative which this event is associated with.

`xdm:creativeID`
* is optional
* type: `string`
* defined in this schema

### xdm:creativeID Type


`string`






## xdm:isDynamicSearchAd
### Is Dynamic Search Advertisement

Indicates if the click comes from a dynamic search advertisement.

`xdm:isDynamicSearchAd`
* is optional
* type: `boolean`
* defined in this schema

### xdm:isDynamicSearchAd Type


`boolean`





## xdm:keyword
### Keyword

Listing keyword for which customer is bidding 

`xdm:keyword`
* is optional
* type: `string`
* defined in this schema

### xdm:keyword Type


`string`






## xdm:keywordID
### Keyword Identifier

Identifier for the keyword that the surfer used to search, which triggered this click event.

`xdm:keywordID`
* is optional
* type: `string`
* defined in this schema

### xdm:keywordID Type


`string`






## xdm:matchType
### matchType

Match type used to match keyword.

`xdm:matchType`
* is optional
* type: `string`
* defined in this schema

### xdm:matchType Type


`string`



### xdm:matchType Known Values
| Value | Description |
|-------|-------------|
| `exact` | Exact Match of the keyword |
| `broad` | Broad Match of the keyword |
| `phrase` | Phrase Match of the keyword |




## xdm:networkType
### Network Type

Network type the click event came from a search advertisement or content advertisement.

`xdm:networkType`
* is optional
* type: `string`
* defined in this schema

### xdm:networkType Type


`string`



### xdm:networkType Known Values
| Value | Description |
|-------|-------------|
| `search` | Advertisement is displayed in Search Network |
| `content` | Advertisement is displayed in Content Network |




## xdm:promotedAssetId
### Promoted Asset Identifier

Identifier for the underlying asset being promoted in the ad which this event is associated with.

`xdm:promotedAssetId`
* is optional
* type: `string`
* defined in this schema

### xdm:promotedAssetId Type


`string`






## xdm:runtime
### Runtime Type

Runtime of the ad unit itself. Not the runtime of the browser or the operating system.

`xdm:runtime`
* is optional
* type: `string`
* defined in this schema

### xdm:runtime Type


`string`



### xdm:runtime Known Values
| Value | Description |
|-------|-------------|
| `unknown` | Unknown |
| `HTML5` | HTML5 |



