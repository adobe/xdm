
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
      "description": "Type of lead source."
    },
    "xdm:formName": {
      "title": "Form Name",
      "type": "string",
      "description": "Name of the form."
    },
    "xdm:listName": {
      "title": "List Name",
      "type": "string",
      "description": "Name of marketing list."
    },
    "xdm:sfdcType": {
      "title": "SFDC Type",
      "type": "string",
      "description": "Lead type in SFDC."
    },
    "xdm:leadSource": {
      "title": "Lead Source",
      "type": "string",
      "description": "Source of lead."
    },
    "xdm:createdDate": {
      "title": "Created Date",
      "type": "string",
      "format": "date-time",
      "description": "Lead creation date."
    }
  },
  "simpletype": "`object`"
}
```









