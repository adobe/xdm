
# Appointment Request Steps Schema

```
https://ns.adobe.com/xdm/mixins/experienceevent-appointment-request-steps
```

Steps for setting up any type of appointment with a company.

| [Abstract](../../../abstract.md) | [Extensible](../../../extensions.md) | [Status](../../../status.md) | [Identifiable](../../../id.md) | [Custom Properties](../../../extensions.md) | [Additional Properties](../../../extensions.md) | Defined In |
|----------------------------------|--------------------------------------|------------------------------|--------------------------------|---------------------------------------------|-------------------------------------------------|------------|
| Can be instantiated | Yes | Experimental | No | Forbidden | Permitted | [mixins/experience-event/experienceevent-appointment-request-steps.schema.json](mixins/experience-event/experienceevent-appointment-request-steps.schema.json) |

## Appointment Request Steps Example
```json
{}
```

# Appointment Request Steps Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [xdm:userAccount](#xdmuseraccount) | `object` | Optional | Appointment Request Steps (this schema) |
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
| `xdm:appointmentRequestSteps`|  | Optional |



#### xdm:appointmentRequestSteps
##### Appointment Request Steps

Extension of toolUsage data type.

`xdm:appointmentRequestSteps`
* is optional
* type: reference

##### xdm:appointmentRequestSteps Type


* []() – `https://ns.adobe.com/xdm/datatypes/tool-usage`









