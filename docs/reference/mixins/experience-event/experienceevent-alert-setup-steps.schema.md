
# Alert Setup Steps Schema

```
https://ns.adobe.com/xdm/mixins/experienceevent-alert-setup-steps
```

Alert steps such as start, save, failure, and complete.

| [Abstract](../../../abstract.md) | [Extensible](../../../extensions.md) | [Status](../../../status.md) | [Identifiable](../../../id.md) | [Custom Properties](../../../extensions.md) | [Additional Properties](../../../extensions.md) | Defined In |
|----------------------------------|--------------------------------------|------------------------------|--------------------------------|---------------------------------------------|-------------------------------------------------|------------|
| Can be instantiated | Yes | Experimental | No | Forbidden | Permitted | [mixins/experience-event/experienceevent-alert-setup-steps.schema.json](mixins/experience-event/experienceevent-alert-setup-steps.schema.json) |

## Alert Setup Steps Example
```json
{}
```

# Alert Setup Steps Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [xdm:alerts](#xdmalerts) | `object` | Optional | Alert Setup Steps (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## xdm:alerts


`xdm:alerts`
* is optional
* type: `object`
* defined in this schema

### xdm:alerts Type


`object` with following properties:


| Property | Type | Required |
|----------|------|----------|
| `xdm:alertSetup`|  | Optional |



#### xdm:alertSetup
##### Alert Setup

Extension of toolUsage data type.

`xdm:alertSetup`
* is optional
* type: reference

##### xdm:alertSetup Type


* []() – `https://ns.adobe.com/xdm/datatypes/tool-usage`









