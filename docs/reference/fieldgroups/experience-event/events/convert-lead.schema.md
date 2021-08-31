
# Convert Lead Schema

```
https://ns.adobe.com/xdm/mixins/events/convert-lead
```

Use when a marketing lead is converted into a sales-qualified contact that is assigned to a sales user.

| [Abstract](../../../../abstract.md) | [Extensible](../../../../extensions.md) | [Status](../../../../status.md) | [Identifiable](../../../../id.md) | [Custom Properties](../../../../extensions.md) | [Additional Properties](../../../../extensions.md) | Defined In |
|-------------------------------------|-----------------------------------------|---------------------------------|-----------------------------------|------------------------------------------------|----------------------------------------------------|------------|
| Can be instantiated | Yes | Experimental | No | Forbidden | Permitted | [fieldgroups/experience-event/events/convert-lead.schema.json](fieldgroups/experience-event/events/convert-lead.schema.json) |

## Convert Lead Example
```json
{}
```

# Convert Lead Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [xdm:leadOperation](#xdmleadoperation) | `object` | Optional | Convert Lead (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## xdm:leadOperation
### Lead Operation

`xdm:leadOperation`
* is optional
* type: `object`
* defined in this schema

### xdm:leadOperation Type


`object` with following properties:


| Property | Type | Required |
|----------|------|----------|
| `xdm:convertLead`| object | Optional |



#### xdm:convertLead
##### Convert Lead

undefined

`xdm:convertLead`
* is optional
* type: `object`

##### xdm:convertLead Type

Unknown type `object`.

```json
{
  "title": "Convert Lead",
  "type": "object",
  "properties": {
    "xdm:assignTo": {
      "title": "Assign To",
      "type": "string",
      "description": "Sales user converted lead is assigned to.",
      "meta:titleId": "convert-lead##xdm:assignTo##title##38391",
      "meta:descriptionId": "convert-lead##xdm:assignTo##description##42551"
    },
    "xdm:isSentNotificationEmail": {
      "title": "Is Sent Notification Email",
      "type": "boolean",
      "description": "Indicates whether assigned sales user received email notification of the converted lead.",
      "meta:titleId": "convert-lead##xdm:isSentNotificationEmail##title##56291",
      "meta:descriptionId": "convert-lead##xdm:isSentNotificationEmail##description##50331"
    },
    "xdm:convertedStatus": {
      "title": "Converted Status",
      "type": "string",
      "description": "Converted status of lead.",
      "meta:titleId": "convert-lead##xdm:convertedStatus##title##77381",
      "meta:descriptionId": "convert-lead##xdm:convertedStatus##description##13181"
    }
  },
  "meta:titleId": "convert-lead##xdm:convertLead##title##22301",
  "simpletype": "`object`"
}
```









