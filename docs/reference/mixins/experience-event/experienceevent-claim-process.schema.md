
# Claim Process Schema

```
https://ns.adobe.com/xdm/mixins/experienceevent-claim-process
```

Claim details such as claim policy ID and claim creation steps.

| [Abstract](../../../abstract.md) | [Extensible](../../../extensions.md) | [Status](../../../status.md) | [Identifiable](../../../id.md) | [Custom Properties](../../../extensions.md) | [Additional Properties](../../../extensions.md) | Defined In |
|----------------------------------|--------------------------------------|------------------------------|--------------------------------|---------------------------------------------|-------------------------------------------------|------------|
| Can be instantiated | Yes | Experimental | No | Forbidden | Permitted | [mixins/experience-event/experienceevent-claim-process.schema.json](mixins/experience-event/experienceevent-claim-process.schema.json) |

## Claim Process Example
```json
{}
```

# Claim Process Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [xdm:disputes](#xdmdisputes) | `object` | Optional | Claim Process (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## xdm:disputes


`xdm:disputes`
* is optional
* type: `object`
* defined in this schema

### xdm:disputes Type


`object` with following properties:


| Property | Type | Required |
|----------|------|----------|
| `xdm:claimProcess`| object | Optional |



#### xdm:claimProcess

undefined

`xdm:claimProcess`
* is optional
* type: `object`

##### xdm:claimProcess Type

Unknown type `object`.

```json
{
  "type": "object",
  "properties": {
    "xdm:claimID": {
      "title": "Claim ID",
      "type": "string",
      "description": "ID of the claim being submitted."
    },
    "xdm:claimStartDate": {
      "title": "Claim Start Date",
      "type": "string",
      "format": "date-time",
      "description": "Date the claim was successfully submitted."
    },
    "xdm:claimStatus": {
      "title": "Claim Status",
      "type": "string",
      "enum": [
        "initiated",
        "in progress",
        "approved",
        "declined"
      ],
      "description": "Captures the status of the claim for any given point in the application process."
    },
    "xdm:claimSteps": {
      "title": "Claim Steps",
      "$ref": "https://ns.adobe.com/xdm/datatypes/tool-usage",
      "description": "Extension of toolUsage data type."
    },
    "xdm:claimType": {
      "title": "Claim Type",
      "type": "string",
      "description": "Type of claim submitted."
    },
    "xdm:policy": {
      "title": "Policy",
      "$ref": "https://ns.adobe.com/xdm/datatypes/policy-details",
      "description": "Extension of Policy data type."
    }
  },
  "simpletype": "`object`"
}
```









