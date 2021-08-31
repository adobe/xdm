
# New Lead Schema

```
https://ns.adobe.com/xdm/mixins/events/new-lead
```

Use to record the creation and details of a new marketing lead.

| [Abstract](../../../../abstract.md) | [Extensible](../../../../extensions.md) | [Status](../../../../status.md) | [Identifiable](../../../../id.md) | [Custom Properties](../../../../extensions.md) | [Additional Properties](../../../../extensions.md) | Defined In |
|-------------------------------------|-----------------------------------------|---------------------------------|-----------------------------------|------------------------------------------------|----------------------------------------------------|------------|
| Can be instantiated | Yes | Experimental | No | Forbidden | Permitted | [fieldgroups/experience-event/events/new-lead.schema.json](fieldgroups/experience-event/events/new-lead.schema.json) |

## New Lead Example
```json
{}
```

# New Lead Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [xdm:leadOperation](#xdmleadoperation) | `object` | Optional | New Lead (this schema) |
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
| `xdm:newLead`| object | Optional |



#### xdm:newLead
##### New Lead

undefined

`xdm:newLead`
* is optional
* type: `object`

##### xdm:newLead Type

Unknown type `object`.

```json
{
  "title": "New Lead",
  "type": "object",
  "properties": {
    "xdm:sourceType": {
      "title": "Source Type",
      "type": "string",
      "description": "Type of lead source.",
      "meta:titleId": "new-lead##xdm:sourceType##title##75381",
      "meta:descriptionId": "new-lead##xdm:sourceType##description##89511"
    },
    "xdm:formName": {
      "title": "Form Name",
      "type": "string",
      "description": "Name of the form.",
      "meta:titleId": "new-lead##xdm:formName##title##8861",
      "meta:descriptionId": "new-lead##xdm:formName##description##891"
    },
    "xdm:listName": {
      "title": "List Name",
      "type": "string",
      "description": "Name of marketing list.",
      "meta:titleId": "new-lead##xdm:listName##title##9091",
      "meta:descriptionId": "new-lead##xdm:listName##description##32211"
    },
    "xdm:sfdcType": {
      "title": "SFDC Type",
      "type": "string",
      "description": "Lead type in SFDC.",
      "meta:titleId": "new-lead##xdm:sfdcType##title##14271",
      "meta:descriptionId": "new-lead##xdm:sfdcType##description##85511"
    },
    "xdm:leadSource": {
      "title": "Lead Source",
      "type": "string",
      "description": "Source of lead.",
      "meta:titleId": "new-lead##xdm:leadSource##title##64471",
      "meta:descriptionId": "new-lead##xdm:leadSource##description##70371"
    },
    "xdm:createdDate": {
      "title": "Created Date",
      "type": "string",
      "format": "date-time",
      "description": "Lead creation date.",
      "meta:titleId": "new-lead##xdm:createdDate##title##85001",
      "meta:descriptionId": "new-lead##xdm:createdDate##description##22381"
    }
  },
  "meta:titleId": "new-lead##xdm:newLead##title##72931",
  "simpletype": "`object`"
}
```









