
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
      },
      "meta:titleId": "merge-leads##xdm:sourceKeys##title##28741",
      "meta:descriptionId": "merge-leads##xdm:sourceKeys##description##44911"
    },
    "xdm:targetUpdated": {
      "title": "Target Updated",
      "type": "boolean",
      "description": "Boolean indicating if winning lead is updated after merge operation.",
      "meta:titleId": "merge-leads##xdm:targetUpdated##title##67271",
      "meta:descriptionId": "merge-leads##xdm:targetUpdated##description##71201"
    },
    "xdm:mergedInCRM": {
      "title": "Merged In CRM",
      "type": "boolean",
      "description": "Boolean indicating if leads were/should be merged in CRM.",
      "meta:titleId": "merge-leads##xdm:mergedInCRM##title##88831",
      "meta:descriptionId": "merge-leads##xdm:mergedInCRM##description##26161"
    },
    "xdm:mergeSource": {
      "title": "Merge Source",
      "type": "string",
      "description": "Source of merge operation.",
      "meta:titleId": "merge-leads##xdm:mergeSource##title##36391",
      "meta:descriptionId": "merge-leads##xdm:mergeSource##description##16671"
    }
  },
  "meta:titleId": "merge-leads##xdm:mergeLeads##title##29161",
  "simpletype": "`object`"
}
```









