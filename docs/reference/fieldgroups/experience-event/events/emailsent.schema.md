
# Email Sent Schema

```
https://ns.adobe.com/xdm/mixins/events/emailsent
```

Use to capture details when sending emails to people.

| [Abstract](../../../../abstract.md) | [Extensible](../../../../extensions.md) | [Status](../../../../status.md) | [Identifiable](../../../../id.md) | [Custom Properties](../../../../extensions.md) | [Additional Properties](../../../../extensions.md) | Defined In |
|-------------------------------------|-----------------------------------------|---------------------------------|-----------------------------------|------------------------------------------------|----------------------------------------------------|------------|
| Can be instantiated | Yes | Stable | No | Forbidden | Permitted | [fieldgroups/experience-event/events/emailsent.schema.json](fieldgroups/experience-event/events/emailsent.schema.json) |

## Email Sent Example
```json
{}
```

# Email Sent Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [xdm:directMarketing](#xdmdirectmarketing) | `object` | Optional | Email Sent (this schema) |
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
| `xdm:emailSent`| object | Optional |



#### xdm:emailSent
##### Email Sent

undefined

`xdm:emailSent`
* is optional
* type: `object`

##### xdm:emailSent Type

Unknown type `object`.

```json
{
  "title": "Email Sent",
  "type": "object",
  "properties": {
    "xdm:mailingKey": {
      "title": "Mailing Key",
      "description": "Unique composite identifier of the email asset.",
      "$ref": "https://ns.adobe.com/xdm/datatypes/b2b-source",
      "meta:titleId": "emailsent##xdm:mailingKey##title##61031",
      "meta:descriptionId": "emailsent##xdm:mailingKey##description##91801"
    },
    "xdm:mailingName": {
      "title": "Mailing Name",
      "type": "string",
      "description": "Name of the email asset.",
      "meta:titleId": "emailsent##xdm:mailingName##title##85571",
      "meta:descriptionId": "emailsent##xdm:mailingName##description##71351"
    },
    "xdm:testVariantID": {
      "title": "Test Variant ID",
      "type": "string",
      "description": "Unique ID of the test variant of the email asset.",
      "meta:titleId": "emailsent##xdm:testVariantID##title##88571",
      "meta:descriptionId": "emailsent##xdm:testVariantID##description##43451"
    },
    "xdm:testVariantName": {
      "title": "Test Variant Name",
      "type": "string",
      "description": "Name of the test variant of the email asset.",
      "meta:titleId": "emailsent##xdm:testVariantName##title##36121",
      "meta:descriptionId": "emailsent##xdm:testVariantName##description##34381"
    },
    "xdm:automationRunID": {
      "title": "Automation Run ID",
      "type": "string",
      "description": "Unique ID of the automation run.",
      "meta:titleId": "emailsent##xdm:automationRunID##title##72971",
      "meta:descriptionId": "emailsent##xdm:automationRunID##description##71141"
    }
  },
  "meta:titleId": "emailsent##xdm:emailSent##title##64981",
  "simpletype": "`object`"
}
```









