
# DSP Advertising Promoted Video Schema

```
https://ns.adobe.com/xdm/adcloud/dsp/promotedvideo
```

Adobe Advertising Cloud DSP Promoted Video Details.

| [Abstract](../../../../../abstract.md) | [Extensible](../../../../../extensions.md) | [Status](../../../../../status.md) | [Identifiable](../../../../../id.md) | [Custom Properties](../../../../../extensions.md) | [Additional Properties](../../../../../extensions.md) | Defined In |
|----------------------------------------|--------------------------------------------|------------------------------------|--------------------------------------|---------------------------------------------------|-------------------------------------------------------|------------|
| Can be instantiated | Yes | Stable | No | Forbidden | Permitted | [adobe/experience/adcloud/dsp/promotedvideo.schema.json](adobe/experience/adcloud/dsp/promotedvideo.schema.json) |
## Schema Hierarchy

* DSP Advertising Promoted Video `https://ns.adobe.com/xdm/adcloud/dsp/promotedvideo`
  * [Record Schema](../../../../behaviors/record.schema.md) `https://ns.adobe.com/xdm/data/record`
  * [Audit trail](../../../../datatypes/auditing/auditable.schema.md) `https://ns.adobe.com/xdm/common/auditable`


## DSP Advertising Promoted Video Example
```json
{
  "@id": "14",
  "dsp:promotedVideoKey": "pJw0SLRbgeIXbjsKEJsU",
  "dsp:campaignKey": "PIO446D9mff9OgS9YBY2",
  "dsp:promotedVideoName": "Karate Kid Long Form",
  "dsp:promoteVideoDuration": 30,
  "dsp:promotedVideoTags": "karate kid, new karate kid, karate kid soundtrack, jackie chan, jaden smith, karate kid trailer, karate kid movie",
  "dsp:promotedVideoDescription": "Visit http://www.karatekidmovie.com.au/ THE KARATE KID, starring Jaden Smith and Jackie Chan, is a story about a bullied boy who learns self-defense and much more under the tutelage of an unlikely kung-fu master - On July only at the movies!"
}
```

# DSP Advertising Promoted Video Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [@id](#id) | `string` | Optional | [Record Schema](../../../../behaviors/record.schema.md#id) |
| [dsp:campaignKey](#dspcampaignkey) | `string` | Optional | DSP Advertising Promoted Video (this schema) |
| [dsp:promoteVideoDuration](#dsppromotevideoduration) | `integer` | Optional | DSP Advertising Promoted Video (this schema) |
| [dsp:promotedVideoDescription](#dsppromotedvideodescription) | `string` | Optional | DSP Advertising Promoted Video (this schema) |
| [dsp:promotedVideoKey](#dsppromotedvideokey) | `string` | Optional | DSP Advertising Promoted Video (this schema) |
| [dsp:promotedVideoName](#dsppromotedvideoname) | `string` | Optional | DSP Advertising Promoted Video (this schema) |
| [dsp:promotedVideoTags](#dsppromotedvideotags) | `string` | Optional | DSP Advertising Promoted Video (this schema) |
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






## dsp:campaignKey
### campaignKey

Identifier for the campaign that belongs to the displayed video.

`dsp:campaignKey`
* is optional
* type: `string`
* defined in this schema

### dsp:campaignKey Type


`string`






## dsp:promoteVideoDuration
### promoteVideoDuration

The duration of the video.

`dsp:promoteVideoDuration`
* is optional
* type: `integer`
* defined in this schema

### dsp:promoteVideoDuration Type


`integer`






## dsp:promotedVideoDescription
### Promoted Video Description

Detailed description for this video.

`dsp:promotedVideoDescription`
* is optional
* type: `string`
* defined in this schema

### dsp:promotedVideoDescription Type


`string`






## dsp:promotedVideoKey
### promotedVideoKey

External unique identifier for a promoted video the ad is displaying.

`dsp:promotedVideoKey`
* is optional
* type: `string`
* defined in this schema

### dsp:promotedVideoKey Type


`string`






## dsp:promotedVideoName
### promotedVideoName

A name that uniquely identifies the promoted video within the campaign.

`dsp:promotedVideoName`
* is optional
* type: `string`
* defined in this schema

### dsp:promotedVideoName Type


`string`






## dsp:promotedVideoTags
### Promoted Video Tags

Labels describing ad categories for this video.

`dsp:promotedVideoTags`
* is optional
* type: `string`
* defined in this schema

### dsp:promotedVideoTags Type


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





