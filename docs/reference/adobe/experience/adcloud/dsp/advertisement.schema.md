
# DSP Advertising Advertisement Schema

```
https://ns.adobe.com/xdm/adcloud/dsp/advertisement
```

Adobe Advertising Cloud DSP Advertisement Details.

| [Abstract](../../../../../abstract.md) | [Extensible](../../../../../extensions.md) | [Status](../../../../../status.md) | [Identifiable](../../../../../id.md) | [Custom Properties](../../../../../extensions.md) | [Additional Properties](../../../../../extensions.md) | Defined In |
|----------------------------------------|--------------------------------------------|------------------------------------|--------------------------------------|---------------------------------------------------|-------------------------------------------------------|------------|
| Can be instantiated | Yes | Stable | No | Forbidden | Permitted | [adobe/experience/adcloud/dsp/advertisement.schema.json](adobe/experience/adcloud/dsp/advertisement.schema.json) |
## Schema Hierarchy

* DSP Advertising Advertisement `https://ns.adobe.com/xdm/adcloud/dsp/advertisement`
  * [Record Schema](../../../../behaviors/record.schema.md) `https://ns.adobe.com/xdm/data/record`
  * [Audit trail](../../../../datatypes/auditing/auditable.schema.md) `https://ns.adobe.com/xdm/common/auditable`


## DSP Advertising Advertisement Example
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

# DSP Advertising Advertisement Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [@id](#id) | `string` | Optional | [Record Schema](../../../../behaviors/record.schema.md#id) |
| [dsp:adClass](#dspadclass) | `string` | Optional | DSP Advertising Advertisement (this schema) |
| [dsp:adKey](#dspadkey) | `string` | Optional | DSP Advertising Advertisement (this schema) |
| [dsp:adName](#dspadname) | `string` | Optional | DSP Advertising Advertisement (this schema) |
| [dsp:adServerId](#dspadserverid) | `string` | Optional | DSP Advertising Advertisement (this schema) |
| [dsp:adStatus](#dspadstatus) | `enum` | Optional | DSP Advertising Advertisement (this schema) |
| [dsp:adUnitType](#dspadunittype) | `enum` | Optional | DSP Advertising Advertisement (this schema) |
| [dsp:externalCreativeId](#dspexternalcreativeid) | `string` | Optional | DSP Advertising Advertisement (this schema) |
| [dsp:placementIds](#dspplacementids) | `string[]` | Optional | DSP Advertising Advertisement (this schema) |
| [dsp:promotedVideoId](#dsppromotedvideoid) | `string` | Optional | DSP Advertising Advertisement (this schema) |
| [repo:createDate](#repocreatedate) | `string` | Optional | [Audit trail](../../../../datatypes/auditing/auditable.schema.md#repocreatedate) |
| [repo:modifyDate](#repomodifydate) | `string` | Optional | [Audit trail](../../../../datatypes/auditing/auditable.schema.md#repomodifydate) |
| [xdm:createdByBatchID](#xdmcreatedbybatchid) | `string` | Optional | [Audit trail](../../../../datatypes/auditing/auditable.schema.md#xdmcreatedbybatchid) |
| [xdm:modifiedByBatchID](#xdmmodifiedbybatchid) | `string` | Optional | [Audit trail](../../../../datatypes/auditing/auditable.schema.md#xdmmodifiedbybatchid) |
| [xdm:repositoryCreatedBy](#xdmrepositorycreatedby) | `string` | Optional | [Audit trail](../../../../datatypes/auditing/auditable.schema.md#xdmrepositorycreatedby) |
| [xdm:repositoryLastModifiedBy](#xdmrepositorylastmodifiedby) | `string` | Optional | [Audit trail](../../../../datatypes/auditing/auditable.schema.md#xdmrepositorylastmodifiedby) |
| `*` | any | Additional | this schema *allows* additional properties |

## @id
### Identifier

A unique identifier for the record.

`@id`
* is optional
* type: `string`
* defined in [Record Schema](../../../../behaviors/record.schema.md#id)

### @id Type


`string`
* format: `uri-reference` – URI Reference (according to [RFC3986](https://tools.ietf.org/html/rfc3986))






## dsp:adClass
### Ad Class

Ad class of driving event.

`dsp:adClass`
* is optional
* type: `string`
* defined in this schema

### dsp:adClass Type


`string`






## dsp:adKey
### Ad Key

Ad external unique identifier.

`dsp:adKey`
* is optional
* type: `string`
* defined in this schema

### dsp:adKey Type


`string`






## dsp:adName
### Ad Name

Ad name.

`dsp:adName`
* is optional
* type: `string`
* defined in this schema

### dsp:adName Type


`string`






## dsp:adServerId
### Ad Server Identifier

Identifier for the Ad Server providing this Ad.

`dsp:adServerId`
* is optional
* type: `string`
* defined in this schema

### dsp:adServerId Type


`string`






## dsp:adStatus
### Ad Status

Ad Status indicates if it is eligible to be served.

`dsp:adStatus`
* is optional
* type: `enum`
* defined in this schema

The value of this property **must** be equal to one of the [known values below](#dspadstatus-known-values).

### dsp:adStatus Known Values
| Value | Description |
|-------|-------------|
| `Active` | Active |
| `Inactive` | Inactive |
| `Deleted` | Deleted |




## dsp:adUnitType
### Ad Unit Type

Identifier for the literal piece of code driving display of the ad in a browser/device.

`dsp:adUnitType`
* is optional
* type: `enum`
* defined in this schema

The value of this property **must** be equal to one of the [known values below](#dspadunittype-known-values).

### dsp:adUnitType Known Values
| Value | Description |
|-------|-------------|
| `Onsite` | Onsite |
| `Flash` | Flash |
| `Embed` | Embed |
| `YouTube` | YouTube |
| `New Flash` | New Flash |
| `HTML5` | HTML5 |
| `instream` | instream |
| `vast_proxy` | vast_proxy |
| `external_instream` | external_instream |
| `instream_selector` | instream_selector |
| `inbanner_3rd_party` | inbanner_3rd_party |
| `external_inbanner` | external_inbanner |
| `mraid_3rd_party` | mraid_3rd_party |
| `dooh` | dooh |
| `standard_display` | standard_display |
| `fb_news_feed_post` | fb_news_feed_post |
| `fb_news_feed` | fb_news_feed |




## dsp:externalCreativeId
### External Creative Identifier

Identifier for the creative which this ad is associated with.

`dsp:externalCreativeId`
* is optional
* type: `string`
* defined in this schema

### dsp:externalCreativeId Type


`string`






## dsp:placementIds
### Placement Ids

List of Placement Ids where this Ad is used.

`dsp:placementIds`
* is optional
* type: `string[]`

* defined in this schema

### dsp:placementIds Type


Array type: `string[]`

All items must be of the type:
`string`









## dsp:promotedVideoId
### Promoted Video Identifier

Promoted video Identifier contained in this Ad.

`dsp:promotedVideoId`
* is optional
* type: `string`
* defined in this schema

### dsp:promotedVideoId Type


`string`






## repo:createDate

The server date and time when the resource was created in the repository, such as when an asset file is first uploaded or a directory is created by the server as the parent of a new asset. The date time property should conform to ISO 8601 standard. An example form is "2004-10-23T12:00:00-06:00".

`repo:createDate`
* is optional
* type: `string`
* defined in [Audit trail](../../../../datatypes/auditing/auditable.schema.md#repocreatedate)

### repo:createDate Type


`string`
* format: `date-time` – date and time (according to [RFC 3339, section 5.6](http://tools.ietf.org/html/rfc3339))




### repo:createDate Example

```json
"2004-10-23T12:00:00-06:00"
```


## repo:modifyDate

The server date and time when the resource was last modified in the repository, such as when a new version of an asset is uploaded or a directory's child resource is added or removed. The date time property should conform to ISO 8601 standard. An example form is "2004-10-23T12:00:00-06:00".

`repo:modifyDate`
* is optional
* type: `string`
* defined in [Audit trail](../../../../datatypes/auditing/auditable.schema.md#repomodifydate)

### repo:modifyDate Type


`string`
* format: `date-time` – date and time (according to [RFC 3339, section 5.6](http://tools.ietf.org/html/rfc3339))




### repo:modifyDate Example

```json
"2004-10-23T12:00:00-06:00"
```


## xdm:createdByBatchID
### Created by batch identifier

The dataset files in Catalog which has been originating the creation of the record.

`xdm:createdByBatchID`
* is optional
* type: `string`
* defined in [Audit trail](../../../../datatypes/auditing/auditable.schema.md#xdmcreatedbybatchid)

### xdm:createdByBatchID Type


`string`
* format: `uri-reference` – URI Reference (according to [RFC3986](https://tools.ietf.org/html/rfc3986))






## xdm:modifiedByBatchID
### Modified by batch identifier

The last dataset files in Catalog which has modified the record. At creation time, `modifiedByBatchID` is set as `createdByBatchID`.

`xdm:modifiedByBatchID`
* is optional
* type: `string`
* defined in [Audit trail](../../../../datatypes/auditing/auditable.schema.md#xdmmodifiedbybatchid)

### xdm:modifiedByBatchID Type


`string`
* format: `uri-reference` – URI Reference (according to [RFC3986](https://tools.ietf.org/html/rfc3986))






## xdm:repositoryCreatedBy
### Created by user identifier

User ID of who created the record.

`xdm:repositoryCreatedBy`
* is optional
* type: `string`
* defined in [Audit trail](../../../../datatypes/auditing/auditable.schema.md#xdmrepositorycreatedby)

### xdm:repositoryCreatedBy Type


`string`






## xdm:repositoryLastModifiedBy
### Modified by user identifier

User ID of who last modified the record. At creation time, `modifiedByUser` is set as `createdByUser`.

`xdm:repositoryLastModifiedBy`
* is optional
* type: `string`
* defined in [Audit trail](../../../../datatypes/auditing/auditable.schema.md#xdmrepositorylastmodifiedby)

### xdm:repositoryLastModifiedBy Type


`string`





