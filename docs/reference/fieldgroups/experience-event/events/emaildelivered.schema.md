
# Email Delivered Schema

```
https://ns.adobe.com/xdm/mixins/events/emaildelivered
```

Use to capture details when an email is successfully delivered to a person.

| [Abstract](../../../../abstract.md) | [Extensible](../../../../extensions.md) | [Status](../../../../status.md) | [Identifiable](../../../../id.md) | [Custom Properties](../../../../extensions.md) | [Additional Properties](../../../../extensions.md) | Defined In |
|-------------------------------------|-----------------------------------------|---------------------------------|-----------------------------------|------------------------------------------------|----------------------------------------------------|------------|
| Can be instantiated | Yes | Stable | No | Forbidden | Permitted | [fieldgroups/experience-event/events/emaildelivered.schema.json](fieldgroups/experience-event/events/emaildelivered.schema.json) |

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
| `xdm:automationRunID`| string | Optional |
| `xdm:mailingID`| string | Optional |
| `xdm:mailingKey`|  | Optional |
| `xdm:mailingName`| string | Optional |
| `xdm:testVariantID`| string | Optional |
| `xdm:testVariantName`| string | Optional |



#### xdm:automationRunID
##### Automation Run ID

Automation Run ID

`xdm:automationRunID`
* is optional
* type: `string`

##### xdm:automationRunID Type


`string`








#### xdm:mailingID
##### Mailing ID (deprecated)

Mailing ID is going to depreciate soon. Please use Mailing Key.

`xdm:mailingID`
* is optional
* type: `string`

##### xdm:mailingID Type


`string`








#### xdm:mailingKey
##### Mailing Key

Unique key of the email asset.

`xdm:mailingKey`
* is optional
* type: reference

##### xdm:mailingKey Type


* []() – `https://ns.adobe.com/xdm/datatypes/b2b-source`







#### xdm:mailingName
##### Mailing Name

Name of the email asset.

`xdm:mailingName`
* is optional
* type: `string`

##### xdm:mailingName Type


`string`








#### xdm:testVariantID
##### Test Variant ID

Unique ID of the test variant of the email asset.

`xdm:testVariantID`
* is optional
* type: `string`

##### xdm:testVariantID Type


`string`








#### xdm:testVariantName
##### Test Variant Name

Friendly name of the test variant of the email asset.

`xdm:testVariantName`
* is optional
* type: `string`

##### xdm:testVariantName Type


`string`










