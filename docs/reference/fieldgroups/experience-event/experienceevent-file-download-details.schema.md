
# File Download Details Schema

```
https://ns.adobe.com/xdm/mixins/experienceevent-file-download-details
```

File download details such as file name, size, and transfer status.

| [Abstract](../../../abstract.md) | [Extensible](../../../extensions.md) | [Status](../../../status.md) | [Identifiable](../../../id.md) | [Custom Properties](../../../extensions.md) | [Additional Properties](../../../extensions.md) | Defined In |
|----------------------------------|--------------------------------------|------------------------------|--------------------------------|---------------------------------------------|-------------------------------------------------|------------|
| Can be instantiated | Yes | Stable | No | Forbidden | Permitted | [fieldgroups/experience-event/experienceevent-file-download-details.schema.json](fieldgroups/experience-event/experienceevent-file-download-details.schema.json) |

## File Download Details Example
```json
{
  "xdm:fileTransfer": {
    "xdm:fileDownload": {
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

# File Download Details Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [xdm:fileTransfer](#xdmfiletransfer) | `object` | Optional | File Download Details (this schema) |
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
| `xdm:fileDownload`|  | Optional |



#### xdm:fileDownload
##### File Download

Tracks all details of a file download. Extension of file transfer data type.

`xdm:fileDownload`
* is optional
* type: reference

##### xdm:fileDownload Type


* []() – `https://ns.adobe.com/xdm/datatypes/file-transfer`









