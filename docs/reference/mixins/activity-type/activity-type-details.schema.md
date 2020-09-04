
# XDM Activity Type Details Schema

```
https://ns.adobe.com/xdm/context/activity-type-details
```

An XDM Activity representing task or a business event

| [Abstract](../../../abstract.md) | [Extensible](../../../extensions.md) | [Status](../../../status.md) | [Identifiable](../../../id.md) | [Custom Properties](../../../extensions.md) | [Additional Properties](../../../extensions.md) | Defined In |
|----------------------------------|--------------------------------------|------------------------------|--------------------------------|---------------------------------------------|-------------------------------------------------|------------|
| Can be instantiated | Yes | Experimental | No | Forbidden | Permitted | [mixins/activity-type/activity-type-details.schema.json](mixins/activity-type/activity-type-details.schema.json) |
## Schema Hierarchy

* XDM Activity Type Details `https://ns.adobe.com/xdm/context/activity-type-details`
  * [Extensibility base schema](../../datatypes/extensible.schema.md) `https://ns.adobe.com/xdm/common/extensible`
  * [XDM Activity](../../datatypes/activity-type-reference-details.schema.md) `https://ns.adobe.com/xdm/common/activity-type-reference-details`


## XDM Activity Type Details Example
```json
{
  "xdm:activityType": {
    "xdm:name": "Send Email",
    "xdm:description": "Send Marketo Email to a person",
    "xdm:type": "task",
    "xdm:area": "Email",
    "xdm:category": "Marketing Mail",
    "xdm:isDeleted": false,
    "xdm:isActive": true
  }
}
```

# XDM Activity Type Details Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [xdm:activityType](#xdmactivitytype) | XDM Activity | Optional | XDM Activity Type Details (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## xdm:activityType
### Activity Type Details

Additional properties for Activity type

`xdm:activityType`
* is optional
* type: XDM Activity
* defined in this schema

### xdm:activityType Type


* [XDM Activity](../../datatypes/activity-type-reference-details.schema.md) – `https://ns.adobe.com/xdm/common/activity-type-reference-details`




