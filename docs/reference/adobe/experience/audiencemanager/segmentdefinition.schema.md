
# Adobe Audience Manager Segment Definition Mixin Schema

```
https://ns.adobe.com/experience/audiencemanager/segmentdefinition
```

This mixin captures Adobe Audience Manager-specific segment definition fields like the identity of the folder this segment belongs to and Audience Manager type for the segment.

| [Abstract](../../../../abstract.md) | [Extensible](../../../../extensions.md) | [Status](../../../../status.md) | [Identifiable](../../../../id.md) | [Custom Properties](../../../../extensions.md) | [Additional Properties](../../../../extensions.md) | Defined In |
|-------------------------------------|-----------------------------------------|---------------------------------|-----------------------------------|------------------------------------------------|----------------------------------------------------|------------|
| Can be instantiated | Yes | Stable | No | Forbidden | Permitted | [adobe/experience/audiencemanager/segmentdefinition.schema.json](adobe/experience/audiencemanager/segmentdefinition.schema.json) |
## Schema Hierarchy

* Adobe Audience Manager Segment Definition Mixin `https://ns.adobe.com/experience/audiencemanager/segmentdefinition`
  * [Segment Expression Details ](../../../fieldgroups/segment-definition/segmentdefinition-expression.schema.md) `https://ns.adobe.com/xdm/context/segmentdefinition-expression`
  * [Identity](../../../datatypes/identity.schema.md) `https://ns.adobe.com/xdm/context/identity`


## Adobe Audience Manager Segment Definition Mixin Example
```json
{
  "xdm:segmentExpression": {
    "xdm:expressionType": "AAM",
    "xdm:mimeType": "text/plain",
    "xdm:value": "c_contextdata.catname matchesregex \"\"^sony -.+\"\""
  },
  "xdm:segmentFolderId": "1123",
  "xdm:segmentSubType": "SEGMENT",
  "https://ns.adobe.com/experience/audiencemanager/segmentFolderIdentity": {
    "xdm:id": "1123",
    "xdm:namespace": {
      "xdm:code": "AAMSegments"
    }
  }
}
```

# Adobe Audience Manager Segment Definition Mixin Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [https://ns.adobe.com/experience/audiencemanager/segmentFolderIdentity](#httpsnsadobecomexperienceaudiencemanagersegmentfolderidentity) | Identity | Optional | Adobe Audience Manager Segment Definition Mixin (this schema) |
| [xdm:segmentExpression](#xdmsegmentexpression) | `object` | Optional | [Segment Expression Details ](../../../fieldgroups/segment-definition/segmentdefinition-expression.schema.md#xdmsegmentexpression) |
| [xdm:segmentFolderId](#xdmsegmentfolderid) | `string` | Optional | Adobe Audience Manager Segment Definition Mixin (this schema) |
| [xdm:segmentSubType](#xdmsegmentsubtype) | `string` | Optional | Adobe Audience Manager Segment Definition Mixin (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## https://ns.adobe.com/experience/audiencemanager/segmentFolderIdentity
### Parent folder identity

Identity of the parent folder of current folder

`https://ns.adobe.com/experience/audiencemanager/segmentFolderIdentity`
* is optional
* type: Identity
* defined in this schema

### https://ns.adobe.com/experience/audiencemanager/segmentFolderIdentity Type


* [Identity](../../../datatypes/identity.schema.md) – `https://ns.adobe.com/xdm/context/identity`





## xdm:segmentExpression
### Segment expression

`xdm:segmentExpression`
* is optional
* type: `object`
* defined in [Segment Expression Details ](../../../fieldgroups/segment-definition/segmentdefinition-expression.schema.md#xdmsegmentexpression)

### xdm:segmentExpression Type


`object` with following properties:


| Property | Type | Required |
|----------|------|----------|
| `xdm:expressionType`| string | Optional |
| `xdm:mimeType`| string | Optional |
| `xdm:value`| string | Optional |



#### xdm:expressionType
##### Type

Type of expression, for example, PQL, Query Service, or Adobe Audience Manager.

`xdm:expressionType`
* is optional
* type: `string`

##### xdm:expressionType Type


`string`



##### xdm:expressionType Known Values
| Value | Description |
|-------|-------------|
| `0` | PQL |
| `1` | AAM |
| `2` | QUERYSERVICE |






#### xdm:mimeType
##### Expression mime type

Mime type of the expression. For example, pql/text or application/sql.

`xdm:mimeType`
* is optional
* type: `string`

##### xdm:mimeType Type


`string`


All instances must conform to this regular expression 
(test examples [here](https://regexr.com/?expression=%5Cw%2B%2F%5B-.%5Cw%5D%2B(%3F%3A%5C%2B%5B-.%5Cw%5D%2B)%3F)):
```regex
\w+/[-.\w]+(?:\+[-.\w]+)?
```








#### xdm:value
##### Value

Actual expression string. The syntax of expression will depend upon specified mime type.

`xdm:value`
* is optional
* type: `string`

##### xdm:value Type


`string`











## xdm:segmentFolderId
### Folder Id

id of parent folder if present

`xdm:segmentFolderId`
* is optional
* type: `string`
* defined in this schema

### xdm:segmentFolderId Type


`string`






## xdm:segmentSubType
### Sub Type

Further classification of AAM Entity

`xdm:segmentSubType`
* is optional
* type: `string`
* defined in this schema

### xdm:segmentSubType Type


`string`



### xdm:segmentSubType Known Values
| Value | Description |
|-------|-------------|
| `0` | FOLDER |
| `1` | FOLDER_TRAIT |
| `2` | SEGMENT |
| `3` | UNDEFINED |
| `4` | RULE_BASED_TRAIT |
| `5` | NON_ALGO_TRAIT |
| `6` | TEST_SEGMENT |
| `7` | COMPANY_ACTIVITY_TRAIT |
| `8` | ALGO_TRAIT |
| `9` | ON_BOARDED_TRAIT |



