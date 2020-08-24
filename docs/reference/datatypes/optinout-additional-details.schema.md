
# OptOut Additional Details Schema

```
https://ns.adobe.com/xdm/common/optinout-additional-details
```

Describes user communication preferences by channel. For each channel individually, which is a property of this object, a user's preference such as opt-in, opt-out, or pending can be recorded. In addition, a global override opt-out is possible. Each property of this schema must be a valid and known URI for an XDM Channel.

| [Abstract](../../abstract.md) | [Extensible](../../extensions.md) | [Status](../../status.md) | [Identifiable](../../id.md) | [Custom Properties](../../extensions.md) | [Additional Properties](../../extensions.md) | Defined In |
|-------------------------------|-----------------------------------|---------------------------|-----------------------------|------------------------------------------|----------------------------------------------|------------|
| Can be instantiated | Yes | Experimental | No | Forbidden | Permitted | [datatypes/optinout-additional-details.schema.json](datatypes/optinout-additional-details.schema.json) |
## Schema Hierarchy

* OptOut Additional Details `https://ns.adobe.com/xdm/common/optinout-additional-details`
  * [Extensibility base schema](extensible.schema.md) `https://ns.adobe.com/xdm/common/extensible`


## OptOut Additional Details Example
```json
{
  "xdm:optOutReason": "Reason here",
  "xdm:optOutDate": "2018-01-20T15:52:25+00:00"
}
```

# OptOut Additional Details Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [xdm:optOutDate](#xdmoptoutdate) | `string` | Optional | OptOut Additional Details (this schema) |
| [xdm:optOutReason](#xdmoptoutreason) | `string` | Optional | OptOut Additional Details (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## xdm:optOutDate
### Opt Out Date

Date of opting out for a notification.

`xdm:optOutDate`
* is optional
* type: `string`
* defined in this schema

### xdm:optOutDate Type


`string`
* format: `date-time` – date and time (according to [RFC 3339, section 5.6](http://tools.ietf.org/html/rfc3339))






## xdm:optOutReason
### Opt Out Reason

Reason for opting out for a notification.

`xdm:optOutReason`
* is optional
* type: `string`
* defined in this schema

### xdm:optOutReason Type


`string`





