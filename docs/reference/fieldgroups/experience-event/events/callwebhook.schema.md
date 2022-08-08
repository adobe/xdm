
# Call Webhook Schema

```
https://ns.adobe.com/xdm/mixins/events/callwebhook
```

Use to capture details when Webhook is called for a person

| [Abstract](../../../../abstract.md) | [Extensible](../../../../extensions.md) | [Status](../../../../status.md) | [Identifiable](../../../../id.md) | [Custom Properties](../../../../extensions.md) | [Additional Properties](../../../../extensions.md) | Defined In |
|-------------------------------------|-----------------------------------------|---------------------------------|-----------------------------------|------------------------------------------------|----------------------------------------------------|------------|
| Can be instantiated | Yes | Stable | No | Forbidden | Permitted | [fieldgroups/experience-event/events/callwebhook.schema.json](fieldgroups/experience-event/events/callwebhook.schema.json) |

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
      "description": "Webhook ID is going to depreciate soon. Please use Webhook Key.",
      "meta:titleId": "callwebhook##xdm:webhookID##title##45001",
      "meta:descriptionId": "callwebhook##xdm:webhookID##description##3851"
    },
    "xdm:webhookKey": {
      "title": "Webhook Key",
      "description": "Unique composite identifier of the Webhook.",
      "$ref": "https://ns.adobe.com/xdm/datatypes/b2b-source",
      "meta:titleId": "callwebhook##xdm:webhookKey##title##37211",
      "meta:descriptionId": "callwebhook##xdm:webhookKey##description##51371"
    },
    "xdm:webhookName": {
      "title": "Webhook Name",
      "type": "string",
      "description": "Name of the Webhook.",
      "meta:titleId": "callwebhook##xdm:webhookName##title##15441",
      "meta:descriptionId": "callwebhook##xdm:webhookName##description##81481"
    },
    "xdm:responseCode": {
      "title": "Response Code",
      "type": "integer",
      "description": "HTTP response code from Webhook request.",
      "meta:titleId": "callwebhook##xdm:responseCode##title##89381",
      "meta:descriptionId": "callwebhook##xdm:responseCode##description##3901"
    }
  },
  "meta:titleId": "callwebhook##xdm:callWebhook##title##45641",
  "simpletype": "`object`"
}
```









