
# Generic Marketing Preference Field Schema

```
https://ns.adobe.com/xdm/datatype/marketing-preference-field
```

This schema specifies the fields in a basic marketing preference object.

| [Abstract](../../../abstract.md) | [Extensible](../../../extensions.md) | [Status](../../../status.md) | [Identifiable](../../../id.md) | [Custom Properties](../../../extensions.md) | [Additional Properties](../../../extensions.md) | Defined In |
|----------------------------------|--------------------------------------|------------------------------|--------------------------------|---------------------------------------------|-------------------------------------------------|------------|
| Can be instantiated | Yes | Stable | No | Forbidden | Permitted | [datatypes/consent/marketing-field-basic.schema.json](datatypes/consent/marketing-field-basic.schema.json) |
## Schema Hierarchy

* Generic Marketing Preference Field `https://ns.adobe.com/xdm/datatype/marketing-preference-field`
  * [Consent for Privacy, Personalization and Marketing Preferences](consent-preferences.schema.md) `https://ns.adobe.com/xdm/datatypes/consents-and-preferences`


## Generic Marketing Preference Field Example
```json
{
  "xdm:val": "y",
  "xdm:time": "2019-01-01T15:52:25+00:00",
  "xdm:reason": "Too Frequent"
}
```

# Generic Marketing Preference Field Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [xdm:reason](#xdmreason) | `string` | Optional | [Consent for Privacy, Personalization and Marketing Preferences](consent-preferences.schema.md#xdmreason) |
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



