
# Email Bounced Soft Schema

```
https://ns.adobe.com/xdm/mixins/events/emailbouncedsoft
```

Use for information regarding direct marketing email bounced soft events.

| [Abstract](../../../../abstract.md) | [Extensible](../../../../extensions.md) | [Status](../../../../status.md) | [Identifiable](../../../../id.md) | [Custom Properties](../../../../extensions.md) | [Additional Properties](../../../../extensions.md) | Defined In |
|-------------------------------------|-----------------------------------------|---------------------------------|-----------------------------------|------------------------------------------------|----------------------------------------------------|------------|
| Can be instantiated | Yes | Experimental | No | Forbidden | Permitted | [mixins/experience-event/events/emailbouncedsoft.schema.json](mixins/experience-event/events/emailbouncedsoft.schema.json) |

## Email Bounced Soft Example
```json
{}
```

# Email Bounced Soft Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [xdm:directMarketing](#xdmdirectmarketing) | `object` | Optional | Email Bounced Soft (this schema) |
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
| `xdm:email`| string | Optional |
| `xdm:emailBouncedCategory`| string | Optional |
| `xdm:emailBouncedDetails`| string | Optional |
| `xdm:emailBouncedSubcategory`| string | Optional |
| `xdm:mailingID`| string | Optional |
| `xdm:mailingName`| string | Optional |
| `xdm:testVariantID`| string | Optional |
| `xdm:testVariantName`| string | Optional |



#### xdm:email
##### email

visitor email ID.

`xdm:email`
* is optional
* type: `string`

##### xdm:email Type


`string`








#### xdm:emailBouncedCategory
##### Email Bounced Category

Category in which this email failure belongs.

`xdm:emailBouncedCategory`
* is optional
* type: `string`

##### xdm:emailBouncedCategory Type


`string`








#### xdm:emailBouncedDetails
##### Email Bounced Details

Email failure reason description message.

`xdm:emailBouncedDetails`
* is optional
* type: `string`

##### xdm:emailBouncedDetails Type


`string`








#### xdm:emailBouncedSubcategory
##### Email Bounced Subcategory

Subcategory this failure reason belongs to.

`xdm:emailBouncedSubcategory`
* is optional
* type: `string`

##### xdm:emailBouncedSubcategory Type


`string`








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










