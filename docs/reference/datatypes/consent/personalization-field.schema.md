
# Generic Personalization Preference Field Schema

```
https://ns.adobe.com/xdm/datatype/personalization-preference-field
```

This schema specifies the fields in a basic personalization preference object.

| [Abstract](../../../abstract.md) | [Extensible](../../../extensions.md) | [Status](../../../status.md) | [Identifiable](../../../id.md) | [Custom Properties](../../../extensions.md) | [Additional Properties](../../../extensions.md) | Defined In |
|----------------------------------|--------------------------------------|------------------------------|--------------------------------|---------------------------------------------|-------------------------------------------------|------------|
| Can be instantiated | Yes | Stable | No | Forbidden | Permitted | [datatypes/consent/personalization-field.schema.json](datatypes/consent/personalization-field.schema.json) |
## Schema Hierarchy

* Generic Personalization Preference Field `https://ns.adobe.com/xdm/datatype/personalization-preference-field`
  * [Consent for Privacy, Personalization and Marketing Preferences](consent-preferences.schema.md) `https://ns.adobe.com/xdm/datatypes/consents-and-preferences`


## Generic Personalization Preference Field Example
```json
{
  "xdm:val": "y"
}
```

# Generic Personalization Preference Field Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [xdm:val](#xdmval) | `enum` | Optional | [Consent for Privacy, Personalization and Marketing Preferences](consent-preferences.schema.md#xdmval) |
| `*` | any | Additional | this schema *allows* additional properties |

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



