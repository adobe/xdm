
# Email Delivered Schema

```
https://ns.adobe.com/xdm/mixins/events/emaildelivered
```

Use for information regarding direct marketing email delivered events.

| [Abstract](../../../../abstract.md) | [Extensible](../../../../extensions.md) | [Status](../../../../status.md) | [Identifiable](../../../../id.md) | [Custom Properties](../../../../extensions.md) | [Additional Properties](../../../../extensions.md) | Defined In |
|-------------------------------------|-----------------------------------------|---------------------------------|-----------------------------------|------------------------------------------------|----------------------------------------------------|------------|
| Can be instantiated | Yes | Experimental | No | Forbidden | Permitted | [mixins/experience-event/events/emaildelivered.schema.json](mixins/experience-event/events/emaildelivered.schema.json) |

## Email Delivered Example
```json
{}
```

# Email Delivered Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [xdm:directMarketing](#xdmdirectmarketing) | `object` | Optional | Email Delivered (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## xdm:directMarketing
### Direct marketing

`xdm:directMarketing`
* is optional
* type: `object`
* defined in this schema

### xdm:directMarketing Type


`object` with following properties:


| Property | Type | Required |
|----------|------|----------|
| `xdm:mailingID`| string | Optional |
| `xdm:mailingName`| string | Optional |
| `xdm:testVariantID`| string | Optional |
| `xdm:testVariantName`| string | Optional |



#### xdm:mailingID
##### Mailing ID

Unique identifier of the mailing.

`xdm:mailingID`
* is optional
* type: `string`

##### xdm:mailingID Type


`string`








#### xdm:mailingName
##### Mailing Name

Friendly name for the mailing.

`xdm:mailingName`
* is optional
* type: `string`

##### xdm:mailingName Type


`string`








#### xdm:testVariantID
##### Test Variant ID

Unique identifier for the test variant.

`xdm:testVariantID`
* is optional
* type: `string`

##### xdm:testVariantID Type


`string`








#### xdm:testVariantName
##### Test Variant Name

Friendly name for the test variant.

`xdm:testVariantName`
* is optional
* type: `string`

##### xdm:testVariantName Type


`string`










