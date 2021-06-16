
# Generic Marketing Preference Field with Subscriptions Schema

```
https://ns.adobe.com/xdm/datatype/marketing-preference-with-subscriptions
```

This schema specifies the fields in a marketing preference object that includes subscriptions.

| [Abstract](../../../abstract.md) | [Extensible](../../../extensions.md) | [Status](../../../status.md) | [Identifiable](../../../id.md) | [Custom Properties](../../../extensions.md) | [Additional Properties](../../../extensions.md) | Defined In |
|----------------------------------|--------------------------------------|------------------------------|--------------------------------|---------------------------------------------|-------------------------------------------------|------------|
| Can be instantiated | Yes | Stable | No | Forbidden | Permitted | [datatypes/consent/marketing-field-subscription.schema.json](datatypes/consent/marketing-field-subscription.schema.json) |
## Schema Hierarchy

* Generic Marketing Preference Field with Subscriptions `https://ns.adobe.com/xdm/datatype/marketing-preference-with-subscriptions`
  * [Consent for Privacy, Personalization and Marketing Preferences](consent-preferences.schema.md) `https://ns.adobe.com/xdm/datatypes/consents-and-preferences`


## Generic Marketing Preference Field with Subscriptions Example
```json
{
  "xdm:val": "y",
  "xdm:time": "2019-01-01T15:52:25+00:00",
  "xdm:reason": "Too Frequent",
  "xdm:subscriptions": {
    "daily-mail": {
      "xdm:val": "y",
      "xdm:type": "paid",
      "xdm:subscribers": {
        "john@xyz.com": {
          "xdm:time": "2019-01-01T15:52:25+00:00",
          "xdm:source": "website"
        }
      }
    },
    "shipped": {
      "xdm:val": "y",
      "xdm:subscribers": {
        "john@xyz.com": {
          "xdm:time": "2021-01-01T08:32:53+07:00",
          "xdm:source": "website"
        },
        "jane@xyz.com": {
          "xdm:time": "2020-02-03T07:54:21+07:00",
          "xdm:source": "call center"
        }
      }
    }
  }
}
```

# Generic Marketing Preference Field with Subscriptions Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [xdm:reason](#xdmreason) | `string` | Optional | [Consent for Privacy, Personalization and Marketing Preferences](consent-preferences.schema.md#xdmreason) |
| [xdm:subscriptions](#xdmsubscriptions) | `object` | Optional | [Consent for Privacy, Personalization and Marketing Preferences](consent-preferences.schema.md#xdmsubscriptions) |
| [xdm:time](#xdmtime) | `string` | Optional | [Consent for Privacy, Personalization and Marketing Preferences](consent-preferences.schema.md#xdmtime) |
| [xdm:val](#xdmval) | `enum` | Optional | [Consent for Privacy, Personalization and Marketing Preferences](consent-preferences.schema.md#xdmval) |
| `*` | any | Additional | this schema *allows* additional properties |

## xdm:reason
### Opt-out reason

Reason for opting out

`xdm:reason`
* is optional
* type: `string`
* defined in [Consent for Privacy, Personalization and Marketing Preferences](consent-preferences.schema.md#xdmreason)

### xdm:reason Type


`string`

* maximum length: 16 characters





## xdm:subscriptions
### Subscriptions

A set of notifications, newsletters, etc. to which the user subscribes

`xdm:subscriptions`
* is optional
* type: `object`
* defined in [Consent for Privacy, Personalization and Marketing Preferences](consent-preferences.schema.md#xdmsubscriptions)

### xdm:subscriptions Type


`object` with following properties:


| Property | Type | Required |
|----------|------|----------|






## xdm:time
### Preference timestamp

Date and time this specific preference was collected. This value should conform to ISO 8601 standard. An example form is "2004-10-23T12:00:00-06:00".

`xdm:time`
* is optional
* type: `string`
* defined in [Consent for Privacy, Personalization and Marketing Preferences](consent-preferences.schema.md#xdmtime)

### xdm:time Type


`string`
* format: `date-time` – date and time (according to [RFC 3339, section 5.6](http://tools.ietf.org/html/rfc3339))






## xdm:val
### Choice Value

The value specified by the user as their preference or the basis of processing that precludes the need for user consent

`xdm:val`
* is optional
* type: `enum`
* defined in [Consent for Privacy, Personalization and Marketing Preferences](consent-preferences.schema.md#xdmval)

The value of this property **must** be equal to one of the [known values below](#xdmval-known-values).

### xdm:val Known Values
| Value | Description |
|-------|-------------|
| `y` | Yes (opt-in) |
| `n` | No (opt-out) |
| `p` | Pending verification |
| `u` | Unknown |
| `dy` | Default of Yes (opt-in) |
| `dn` | Default of No (opt-out) |
| `LI` | Legitimate Interest |
| `CT` | Contract |
| `CP` | Compliance with a Legal Obligation |
| `VI` | Vital Interest of the Individual |
| `PI` | Public Interest |



