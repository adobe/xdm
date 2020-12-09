
# Dispute Steps Schema

```
https://ns.adobe.com/xdm/mixins/experienceevent-dispute-steps
```

Dispute steps such as start, save, failure, and complete.

| [Abstract](../../../abstract.md) | [Extensible](../../../extensions.md) | [Status](../../../status.md) | [Identifiable](../../../id.md) | [Custom Properties](../../../extensions.md) | [Additional Properties](../../../extensions.md) | Defined In |
|----------------------------------|--------------------------------------|------------------------------|--------------------------------|---------------------------------------------|-------------------------------------------------|------------|
| Can be instantiated | Yes | Experimental | No | Forbidden | Permitted | [mixins/experience-event/experienceevent-dispute-steps.schema.json](mixins/experience-event/experienceevent-dispute-steps.schema.json) |

## Dispute Steps Example
```json
{}
```

# Dispute Steps Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [xdm:disputes](#xdmdisputes) | `object` | Optional | Dispute Steps (this schema) |
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
| `xdm:disputeSteps`| object | Optional |



#### xdm:disputeSteps

undefined

`xdm:disputeSteps`
* is optional
* type: `object`

##### xdm:disputeSteps Type

Unknown type `object`.

```json
{
  "type": "object",
  "properties": {
    "xdm:dispute": {
      "title": "Dispute",
      "$ref": "https://ns.adobe.com/xdm/datatypes/tool-usage",
      "description": "Extension of toolUsage data type."
    }
  },
  "simpletype": "`object`"
}
```









