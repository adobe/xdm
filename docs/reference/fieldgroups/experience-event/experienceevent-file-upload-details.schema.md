
# File Upload Details Schema

```
https://ns.adobe.com/xdm/mixins/experienceevent-file-upload-details
```

File upload details such as file name, size, and transfer status.

| [Abstract](../../../abstract.md) | [Extensible](../../../extensions.md) | [Status](../../../status.md) | [Identifiable](../../../id.md) | [Custom Properties](../../../extensions.md) | [Additional Properties](../../../extensions.md) | Defined In |
|----------------------------------|--------------------------------------|------------------------------|--------------------------------|---------------------------------------------|-------------------------------------------------|------------|
| Can be instantiated | Yes | Stable | No | Forbidden | Permitted | [fieldgroups/experience-event/experienceevent-file-upload-details.schema.json](fieldgroups/experience-event/experienceevent-file-upload-details.schema.json) |

## File Upload Details Example
```json
{
  "xdm:fileTransfer": {
    "xdm:fileUpload": {
      "xdm:file-transfer": {
        "xdm:fileName": "4",
        "xdm:fileSize": "1024",
        "xdm:fileTransferComplete": 1,
        "xdm:fileTransferStart": 1,
        "xdm:fileTransferError": "1",
        "xdm:fileTransferType": "catalog download",
        "xdm:fileType": "PDF",
        "xdm:fileURL": "https://adobe.com/catalog.pdf"
      }
    }
  }
}
```

# File Upload Details Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [xdm:fileTransfer](#xdmfiletransfer) | `object` | Optional | File Upload Details (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## xdm:fileTransfer

Information for file download or file upload activities.

`xdm:fileTransfer`
* is optional
* type: `object`
* defined in this schema

### xdm:fileTransfer Type


`object` with following properties:


| Property | Type | Required |
|----------|------|----------|
| `xdm:fileUpload`|  | Optional |



#### xdm:fileUpload
##### File Upload

Tracks all details of a file upload. Extension of file transfer data type.

`xdm:fileUpload`
* is optional
* type: reference

##### xdm:fileUpload Type


* []() – `https://ns.adobe.com/xdm/datatypes/file-transfer`









