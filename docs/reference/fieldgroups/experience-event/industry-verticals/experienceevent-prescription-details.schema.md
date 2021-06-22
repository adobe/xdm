
# Prescription Details Schema

```
https://ns.adobe.com/xdm/mixins/industry-verticals/experienceevent-prescription-details
```



| [Abstract](../../../../abstract.md) | [Extensible](../../../../extensions.md) | [Status](../../../../status.md) | [Identifiable](../../../../id.md) | [Custom Properties](../../../../extensions.md) | [Additional Properties](../../../../extensions.md) | Defined In |
|-------------------------------------|-----------------------------------------|---------------------------------|-----------------------------------|------------------------------------------------|----------------------------------------------------|------------|
| Can be instantiated | Yes | Stable | No | Forbidden | Permitted | [fieldgroups/experience-event/industry-verticals/experienceevent-prescription-details.schema.json](fieldgroups/experience-event/industry-verticals/experienceevent-prescription-details.schema.json) |

## Prescription Details Example
```json
{
  "xdm:prescriptions": {
    "xdm:prescriptionDeliveryEligible": true,
    "xdm:prescriptionID": "",
    "xdm:prescriptionRefill": true,
    "xdm:prescriptionRefillsRemaining": 2,
    "xdm:prescriptionUpload": {
      "xdm:file-transfer": {
        "xdm:fileName": "4",
        "xdm:fileSize": "1024",
        "xdm:fileTransferComplete": 1,
        "xdm:fileTransferError": "1",
        "xdm:fileTransferStart": 1,
        "xdm:fileTransferType": "rx upload",
        "xdm:fileType": "PDF"
      }
    }
  }
}
```

# Prescription Details Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [xdm:prescription](#xdmprescription) | `object` | Optional | Prescription Details (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## xdm:prescription


`xdm:prescription`
* is optional
* type: `object`
* defined in this schema

### xdm:prescription Type


`object` with following properties:


| Property | Type | Required |
|----------|------|----------|
| `xdm:ID`| string | Optional |
| `xdm:deliveryEligible`| boolean | Optional |
| `xdm:refill`| boolean | Optional |
| `xdm:refillsRemaining`| integer | Optional |
| `xdm:steps`|  | Optional |
| `xdm:upload`|  | Optional |



#### xdm:ID
##### ID

ID for the prescription being filled.

`xdm:ID`
* is optional
* type: `string`

##### xdm:ID Type


`string`








#### xdm:deliveryEligible
##### Delivery Eligible

Indicates if the prescription available to be delivered.

`xdm:deliveryEligible`
* is optional
* type: `boolean`

##### xdm:deliveryEligible Type


`boolean`







#### xdm:refill
##### Refill

Indicates if the prescription is new or being refilled.

`xdm:refill`
* is optional
* type: `boolean`

##### xdm:refill Type


`boolean`







#### xdm:refillsRemaining
##### Refills Remaining

Count of the remaining prescription refills available.

`xdm:refillsRemaining`
* is optional
* type: `integer`

##### xdm:refillsRemaining Type


`integer`








#### xdm:steps
##### Steps

Extension of toolUsage data type.

`xdm:steps`
* is optional
* type: reference

##### xdm:steps Type


* []() – `https://ns.adobe.com/xdm/datatypes/tool-usage`







#### xdm:upload
##### Upload

Extension of the File Transfer data type.

`xdm:upload`
* is optional
* type: reference

##### xdm:upload Type


* []() – `https://ns.adobe.com/xdm/datatypes/file-transfer`









