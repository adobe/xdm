
# File Transfer Schema

```
https://ns.adobe.com/xdm/datatypes/file-transfer
```



| [Abstract](../../abstract.md) | [Extensible](../../extensions.md) | [Status](../../status.md) | [Identifiable](../../id.md) | [Custom Properties](../../extensions.md) | [Additional Properties](../../extensions.md) | Defined In |
|-------------------------------|-----------------------------------|---------------------------|-----------------------------|------------------------------------------|----------------------------------------------|------------|
| Can be instantiated | Yes | Experimental | No | Forbidden | Permitted | [datatypes/file-transfer.schema.json](datatypes/file-transfer.schema.json) |
## Schema Hierarchy

* File Transfer `https://ns.adobe.com/xdm/datatypes/file-transfer`
  * [Measure](data/measure.schema.md) `https://ns.adobe.com/xdm/data/measure`


## File Transfer Example
```json
{}
```

# File Transfer Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [xdm:fileName](#xdmfilename) | `string` | Optional | File Transfer (this schema) |
| [xdm:fileSize](#xdmfilesize) | `number` | Optional | File Transfer (this schema) |
| [xdm:fileTransferComplete](#xdmfiletransfercomplete) | `integer` | Optional | File Transfer (this schema) |
| [xdm:fileTransferError](#xdmfiletransfererror) | Measure | Optional | File Transfer (this schema) |
| [xdm:fileTransferStart](#xdmfiletransferstart) | `integer` | Optional | File Transfer (this schema) |
| [xdm:fileTransferType](#xdmfiletransfertype) | `string` | Optional | File Transfer (this schema) |
| [xdm:fileType](#xdmfiletype) | `string` | Optional | File Transfer (this schema) |
| [xdm:fileURL](#xdmfileurl) | `string` | Optional | File Transfer (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## xdm:fileName
### File Name

Friendly name of the file being up/downloaded by the visitor.

`xdm:fileName`
* is optional
* type: `string`
* defined in this schema

### xdm:fileName Type


`string`






## xdm:fileSize
### File Size

File size of file being up/downloaded by the visitor.

`xdm:fileSize`
* is optional
* type: `number`
* defined in this schema

### xdm:fileSize Type


`number`






## xdm:fileTransferComplete
### File Transfer Complete

Captured when a file transfer is successfully completed.

`xdm:fileTransferComplete`
* is optional
* type: `integer`
* defined in this schema

### xdm:fileTransferComplete Type


`integer`






## xdm:fileTransferError
### File Transfer Error

Captured when an error occurs during the  file transfer process.

`xdm:fileTransferError`
* is optional
* type: Measure
* defined in this schema

### xdm:fileTransferError Type


* [Measure](data/measure.schema.md) – `https://ns.adobe.com/xdm/data/measure`





## xdm:fileTransferStart
### File Transfer Start

Captured when a file transfer is initiated.

`xdm:fileTransferStart`
* is optional
* type: `integer`
* defined in this schema

### xdm:fileTransferStart Type


`integer`






## xdm:fileTransferType
### File Transfer Type

Type of the file transfer, if applicable.

`xdm:fileTransferType`
* is optional
* type: `string`
* defined in this schema

### xdm:fileTransferType Type


`string`






## xdm:fileType
### File Type

Type or category of file being up/downloaded by the visitor.

`xdm:fileType`
* is optional
* type: `string`
* defined in this schema

### xdm:fileType Type


`string`






## xdm:fileURL
### File URL

URL of file being up/downloaded by the visitor.

`xdm:fileURL`
* is optional
* type: `string`
* defined in this schema

### xdm:fileURL Type


`string`
* format: `uri` – Uniformous Resource Identifier (according to [RFC3986](http://tools.ietf.org/html/rfc3986))





