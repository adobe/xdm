
# Merge Leads Schema

```
https://ns.adobe.com/xdm/mixins/events/merge-leads
```

Use to capture details when two or more leads are merged.

| [Abstract](../../../../abstract.md) | [Extensible](../../../../extensions.md) | [Status](../../../../status.md) | [Identifiable](../../../../id.md) | [Custom Properties](../../../../extensions.md) | [Additional Properties](../../../../extensions.md) | Defined In |
|-------------------------------------|-----------------------------------------|---------------------------------|-----------------------------------|------------------------------------------------|----------------------------------------------------|------------|
| Can be instantiated | Yes | Experimental | No | Forbidden | Permitted | [fieldgroups/experience-event/events/merge-leads.schema.json](fieldgroups/experience-event/events/merge-leads.schema.json) |

## Merge Leads Example
```json
{}
```

# Merge Leads Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [xdm:leadOperation](#xdmleadoperation) | `object` | Optional | Merge Leads (this schema) |
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
| `xdm:mergeLeads`| object | Optional |



#### xdm:mergeLeads
##### Merge Leads

undefined

`xdm:mergeLeads`
* is optional
* type: `object`

##### xdm:mergeLeads Type

Unknown type `object`.

```json
{
  "title": "Merge Leads",
  "type": "object",
  "properties": {
    "xdm:sourceKeys": {
      "title": "Source Keys",
      "type": "array",
      "description": "A list of unique composite identifier of losing leads.",
      "items": {
        "$ref": "https://ns.adobe.com/xdm/datatypes/b2b-source"
      }
    },
    "xdm:targetUpdated": {
      "title": "Target Updated",
      "type": "boolean",
      "description": "Boolean indicating if winning lead is updated after merge operation."
    },
    "xdm:mergedInCRM": {
      "title": "Merged In CRM",
      "type": "boolean",
      "description": "Boolean indicating if leads were/should be merged in CRM."
    },
    "xdm:mergeSource": {
      "title": "Merge Source",
      "type": "string",
      "description": "Source of merge operation."
    }
  },
  "simpletype": "`object`"
}
```









