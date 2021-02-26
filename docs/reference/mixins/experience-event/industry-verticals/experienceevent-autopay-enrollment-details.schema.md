
# Autopay Enrollment Details Schema

```
https://ns.adobe.com/xdm/mixins/experienceevent-autopay-enrollment-details
```

Autopay enrollment details such as autopay status, start, save, and failure.

| [Abstract](../../../../abstract.md) | [Extensible](../../../../extensions.md) | [Status](../../../../status.md) | [Identifiable](../../../../id.md) | [Custom Properties](../../../../extensions.md) | [Additional Properties](../../../../extensions.md) | Defined In |
|-------------------------------------|-----------------------------------------|---------------------------------|-----------------------------------|------------------------------------------------|----------------------------------------------------|------------|
| Can be instantiated | Yes | Experimental | No | Forbidden | Permitted | [mixins/experience-event/industry-verticals/experienceevent-autopay-enrollment-details.schema.json](mixins/experience-event/industry-verticals/experienceevent-autopay-enrollment-details.schema.json) |

## Autopay Enrollment Details Example
```json
{
  "xdm:autopayEnrollment": {
    "xdm:autoPayEnrollment": {
      "xdm:tool-usage": {
        "xdm:toolUsageCancelled": 1,
        "xdm:toolUsageComplete": 1,
        "xdm:toolUsageFailure": 1,
        "xdm:toolUsageID": "T421",
        "xdm:toolUsageName": "autopay enrollment",
        "xdm:toolUsageSaved": 1,
        "xdm:toolUsageStart": 1,
        "xdm:toolUsageStep": 1,
        "xdm:toolUsageStepName": "select account",
        "xdm:toolUsageSubmitted": 1,
        "xdm:toolUsageType": "self service"
      }
    },
    "xdm:autoPayEnrollmentStatus": true
  }
}
```

# Autopay Enrollment Details Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [xdm:autopayEnrollment](#xdmautopayenrollment) | `object` | Optional | Autopay Enrollment Details (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## xdm:autopayEnrollment


`xdm:autopayEnrollment`
* is optional
* type: `object`
* defined in this schema

### xdm:autopayEnrollment Type


`object` with following properties:


| Property | Type | Required |
|----------|------|----------|
| `xdm:autoPayEnrollment`|  | Optional |
| `xdm:autoPayEnrollmentStatus`| boolean | Optional |



#### xdm:autoPayEnrollment
##### Autopay Enrollment

Extension of toolUsage data type.

`xdm:autoPayEnrollment`
* is optional
* type: reference

##### xdm:autoPayEnrollment Type


* []() – `https://ns.adobe.com/xdm/datatypes/tool-usage`







#### xdm:autoPayEnrollmentStatus
##### Autopay Status

Tracks the visitor's autopay enrollment status.

`xdm:autoPayEnrollmentStatus`
* is optional
* type: `boolean`

##### xdm:autoPayEnrollmentStatus Type


`boolean`









