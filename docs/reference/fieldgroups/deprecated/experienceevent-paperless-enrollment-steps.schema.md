
# Paperless Enrollment Steps Schema

```
https://ns.adobe.com/xdm/mixins/experienceevent-paperless-enrollment-steps
```

Paperless enrollment steps such as start, save, failure, and complete. 

| [Abstract](../../../abstract.md) | [Extensible](../../../extensions.md) | [Status](../../../status.md) | [Identifiable](../../../id.md) | [Custom Properties](../../../extensions.md) | [Additional Properties](../../../extensions.md) | Defined In |
|----------------------------------|--------------------------------------|------------------------------|--------------------------------|---------------------------------------------|-------------------------------------------------|------------|
| Can be instantiated | Yes | Deprecated | No | Forbidden | Permitted | [fieldgroups/deprecated/experienceevent-paperless-enrollment-steps.schema.json](fieldgroups/deprecated/experienceevent-paperless-enrollment-steps.schema.json) |

## Paperless Enrollment Steps Example
```json
{
  "xdm:userAccount": {
    "xdm:paperlessEnrollment": {
      "xdm:tool-usage": {
        "xdm:toolUsageCancelled": 1,
        "xdm:toolUsageComplete": 1,
        "xdm:toolUsageFailure": 1,
        "xdm:toolUsageID": "T421",
        "xdm:toolUsageName": "calculator",
        "xdm:toolUsageSaved": 1,
        "xdm:toolUsageStart": 1,
        "xdm:toolUsageStep": 1,
        "xdm:toolUsageStepName": "enter parameters",
        "xdm:toolUsageSubmitted": 1,
        "xdm:toolUsageType": "generic"
      }
    }
  }
}
```

# Paperless Enrollment Steps Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [xdm:userAccount](#xdmuseraccount) | `object` | Optional | Paperless Enrollment Steps (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## xdm:userAccount


`xdm:userAccount`
* is optional
* type: `object`
* defined in this schema

### xdm:userAccount Type


`object` with following properties:


| Property | Type | Required |
|----------|------|----------|
| `xdm:paperlessEnrollment`|  | Optional |



#### xdm:paperlessEnrollment
##### Paperless Enrollment

Extension of toolUsage data type.

`xdm:paperlessEnrollment`
* is optional
* type: reference

##### xdm:paperlessEnrollment Type


* []() – `https://ns.adobe.com/xdm/datatypes/tool-usage`









