
# Phone Responses (Experimental, please expect breaking changes) Schema

```
https://ns.adobe.com/xdm/mixins/profile-responses
```

Use this to add various profile responses like email, postal mail etc(Experimental, please expect breaking changes).

| [Abstract](../../../abstract.md) | [Extensible](../../../extensions.md) | [Status](../../../status.md) | [Identifiable](../../../id.md) | [Custom Properties](../../../extensions.md) | [Additional Properties](../../../extensions.md) | Defined In |
|----------------------------------|--------------------------------------|------------------------------|--------------------------------|---------------------------------------------|-------------------------------------------------|------------|
| Can be instantiated | Yes | Experimental | No | Forbidden | Permitted | [fieldgroups/profile/profile-responses.schema.json](fieldgroups/profile/profile-responses.schema.json) |

## Phone Responses (Experimental, please expect breaking changes) Example
```json
{
  "xdm:emailResponse": {
    "xdm:emailBouncedDate": "2020-04-11T05:05:05Z",
    "xdm:emailBouncedReason": "Mail Does not exist"
  }
}
```

# Phone Responses (Experimental, please expect breaking changes) Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [xdm:emailResponse](#xdmemailresponse) | `object` | Optional | Phone Responses (Experimental, please expect breaking changes) (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## xdm:emailResponse
### Email responses

`xdm:emailResponse`
* is optional
* type: `object`
* defined in this schema

### xdm:emailResponse Type


`object` with following properties:


| Property | Type | Required |
|----------|------|----------|
| `xdm:emailBouncedDate`| string | Optional |
| `xdm:emailBouncedReason`| string | Optional |
| `xdm:isEmailBounced`| boolean | Optional |



#### xdm:emailBouncedDate
##### Email Bounced Date

Email bounced date.

`xdm:emailBouncedDate`
* is optional
* type: `string`

##### xdm:emailBouncedDate Type


`string`
* format: `date-time` – date and time (according to [RFC 3339, section 5.6](http://tools.ietf.org/html/rfc3339))








#### xdm:emailBouncedReason
##### Email Bounced Reason

Email bounced reason.

`xdm:emailBouncedReason`
* is optional
* type: `string`

##### xdm:emailBouncedReason Type


`string`








#### xdm:isEmailBounced
##### Email Bounced Indicator

Email bounced Indicator.

`xdm:isEmailBounced`
* is optional
* type: `boolean`

##### xdm:isEmailBounced Type


`boolean`









