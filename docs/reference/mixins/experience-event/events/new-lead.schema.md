
# New Lead Schema

```
https://ns.adobe.com/xdm/mixins/events/new-lead
```

Use for information regarding lead operation new lead events.

| [Abstract](../../../../abstract.md) | [Extensible](../../../../extensions.md) | [Status](../../../../status.md) | [Identifiable](../../../../id.md) | [Custom Properties](../../../../extensions.md) | [Additional Properties](../../../../extensions.md) | Defined In |
|-------------------------------------|-----------------------------------------|---------------------------------|-----------------------------------|------------------------------------------------|----------------------------------------------------|------------|
| Can be instantiated | Yes | Experimental | No | Forbidden | Permitted | [mixins/experience-event/events/new-lead.schema.json](mixins/experience-event/events/new-lead.schema.json) |

## New Lead Example
```json
{}
```

# New Lead Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [xdm:leadOpearation](#xdmleadopearation) | `object` | Optional | New Lead (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## xdm:leadOpearation
### Lead Operation

`xdm:leadOpearation`
* is optional
* type: `object`
* defined in this schema

### xdm:leadOpearation Type


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
      "description": "Type of the source."
    },
    "xdm:formName": {
      "title": "Form Name",
      "type": "string",
      "description": "Friendly name to form."
    },
    "xdm:listName": {
      "title": "List Name",
      "type": "string",
      "description": "Name of the list."
    },
    "xdm:sfdcType": {
      "title": "SFDC Type",
      "type": "string",
      "description": "Type defined in salesforce source."
    },
    "xdm:leadSource": {
      "title": "Lead Source",
      "type": "string",
      "description": "Source from where this perticlar lead come from."
    },
    "xdm:createdDate": {
      "title": "Created Date",
      "type": "string",
      "format": "date-time",
      "description": "Date when this lead is created."
    }
  },
  "simpletype": "`object`"
}
```









