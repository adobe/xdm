
# Call Webhook Schema

```
https://ns.adobe.com/xdm/mixins/events/callwebhook
```

Use to capture details when Webhook is called for a person

| [Abstract](../../../../abstract.md) | [Extensible](../../../../extensions.md) | [Status](../../../../status.md) | [Identifiable](../../../../id.md) | [Custom Properties](../../../../extensions.md) | [Additional Properties](../../../../extensions.md) | Defined In |
|-------------------------------------|-----------------------------------------|---------------------------------|-----------------------------------|------------------------------------------------|----------------------------------------------------|------------|
| Can be instantiated | Yes | Experimental | No | Forbidden | Permitted | [fieldgroups/experience-event/events/callwebhook.schema.json](fieldgroups/experience-event/events/callwebhook.schema.json) |

## Call Webhook Example
```json
{}
```

# Call Webhook Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [xdm:leadOperation](#xdmleadoperation) | `object` | Optional | Call Webhook (this schema) |
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
| `xdm:callWebhook`| object | Optional |



#### xdm:callWebhook
##### Call Webhook

undefined

`xdm:callWebhook`
* is optional
* type: `object`

##### xdm:callWebhook Type

Unknown type `object`.

```json
{
  "title": "Call Webhook",
  "type": "object",
  "properties": {
    "xdm:webhookID": {
      "title": "Webhook ID (deprecated)",
      "type": "string",
      "description": "Webhook ID is going to depreciate soon. Please use Webhook Key."
    },
    "xdm:webhookKey": {
      "title": "Webhook Key",
      "description": "Unique composite identifier of the Webhook.",
      "$ref": "https://ns.adobe.com/xdm/datatypes/b2b-source"
    },
    "xdm:webhookName": {
      "title": "Webhook Name",
      "type": "string",
      "description": "Name of the Webhook."
    },
    "xdm:responseCode": {
      "title": "Response Code",
      "type": "integer",
      "description": "HTTP response code from Webhook request."
    }
  },
  "simpletype": "`object`"
}
```









