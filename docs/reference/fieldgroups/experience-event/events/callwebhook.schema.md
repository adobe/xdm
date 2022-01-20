
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
| `xdm:responseCode`| integer | Optional |
| `xdm:webhookID`| string | Optional |
| `xdm:webhookName`| string | Optional |



#### xdm:responseCode
##### Response Code

HTTP response code from Webhook request.

`xdm:responseCode`
* is optional
* type: `integer`

##### xdm:responseCode Type


`integer`








#### xdm:webhookID
##### Webhook ID

Unique ID of the Webhook called.

`xdm:webhookID`
* is optional
* type: `string`

##### xdm:webhookID Type


`string`








#### xdm:webhookName
##### Webhook Name

Name of the Webhook.

`xdm:webhookName`
* is optional
* type: `string`

##### xdm:webhookName Type


`string`










