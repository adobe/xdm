
# Chapter details information Schema

```
https://ns.adobe.com/xdm/datatypes/chapterDetails
```

Chapter details information.

| [Abstract](../../abstract.md) | [Extensible](../../extensions.md) | [Status](../../status.md) | [Identifiable](../../id.md) | [Custom Properties](../../extensions.md) | [Additional Properties](../../extensions.md) | Defined In |
|-------------------------------|-----------------------------------|---------------------------|-----------------------------|------------------------------------------|----------------------------------------------|------------|
| Can be instantiated | Yes | Experimental | No | Forbidden | Permitted | [datatypes/chapterdetails.schema.json](datatypes/chapterdetails.schema.json) |

## Chapter details information Example
```json
{
  "xdm:length": 100,
  "xdm:offset": 50,
  "xdm:index": 2,
  "xdm:isStarted": false,
  "xdm:isCompleted": false,
  "xdm:timePlayed": 70
}
```

# Chapter details information Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [xdm:chapterID](#xdmchapterid) | `string` | Optional | Chapter details information (this schema) |
| [xdm:friendlyName](#xdmfriendlyname) | `string` | Optional | Chapter details information (this schema) |
| [xdm:index](#xdmindex) | `integer` | Optional | Chapter details information (this schema) |
| [xdm:isCompleted](#xdmiscompleted) | `boolean` | Optional | Chapter details information (this schema) |
| [xdm:isStarted](#xdmisstarted) | `boolean` | Optional | Chapter details information (this schema) |
| [xdm:length](#xdmlength) | `integer` | Optional | Chapter details information (this schema) |
| [xdm:offset](#xdmoffset) | `integer` | Optional | Chapter details information (this schema) |
| [xdm:timePlayed](#xdmtimeplayed) | `integer` | Optional | Chapter details information (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## xdm:chapterID
### Chapter ID

The auto-generated ID of the chapter.

`xdm:chapterID`
* is optional
* type: `string`
* defined in this schema

### xdm:chapterID Type


`string`






## xdm:friendlyName
### Chapter Name

The friendly name of the chapter and or segment.

`xdm:friendlyName`
* is optional
* type: `string`
* defined in this schema

### xdm:friendlyName Type


`string`






## xdm:index
### Chapter Position

The index of the chapter inside the content.

`xdm:index`
* is optional
* type: `integer`
* defined in this schema

### xdm:index Type


`integer`






## xdm:isCompleted
### Chapter Completed

Chapter is completed.

`xdm:isCompleted`
* is optional
* type: `boolean`
* defined in this schema

### xdm:isCompleted Type


`boolean`





## xdm:isStarted
### Chapter Started

Chapter is started.

`xdm:isStarted`
* is optional
* type: `boolean`
* defined in this schema

### xdm:isStarted Type


`boolean`





## xdm:length
### Chapter Length Or Duration

The length of the chapter, in seconds.

`xdm:length`
* is optional
* type: `integer`
* defined in this schema

### xdm:length Type


`integer`






## xdm:offset
### Chapter Offset

The offset of the chapter, in seconds, inside the content from the start.

`xdm:offset`
* is optional
* type: `integer`
* defined in this schema

### xdm:offset Type


`integer`






## xdm:timePlayed
### Chapter Time Played

The time spent on the chapter. The value will be displayed in the time format (HH:MM:SS) in Analysis Workspace and Reports & Analytics. In Data Feeds, Data Warehouse, and Reporting APIs the values will be displayed in seconds.

`xdm:timePlayed`
* is optional
* type: `integer`
* defined in this schema

### xdm:timePlayed Type


`integer`





