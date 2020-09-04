
# Consent String Schema

```
https://ns.adobe.com/xdm/context/consentstring
```

Consent String as presented by user along with standard information to help consent enforcer to parse the String.

| [Abstract](../../abstract.md) | [Extensible](../../extensions.md) | [Status](../../status.md) | [Identifiable](../../id.md) | [Custom Properties](../../extensions.md) | [Additional Properties](../../extensions.md) | Defined In |
|-------------------------------|-----------------------------------|---------------------------|-----------------------------|------------------------------------------|----------------------------------------------|------------|
| Can be instantiated | Yes | Stable | No | Forbidden | Permitted | [datatypes/consentstring.schema.json](datatypes/consentstring.schema.json) |
## Schema Hierarchy

* Consent String `https://ns.adobe.com/xdm/context/consentstring`
  * [Extensibility base schema](extensible.schema.md) `https://ns.adobe.com/xdm/common/extensible`


## Consent String Example
```json
{
  "xdm:consentStandard": "IAB TCF",
  "xdm:consentStandardVersion": "2.0",
  "xdm:consentStringValue": "BObdrPUOevsguAfDqFENCNAAAAAmeAAA.PVAfDObdrA.DqFENCAmeAENCDA",
  "xdm:gdprApplies": true,
  "xdm:containsPersonalData": false
}
```

# Consent String Properties

| Property | Type | Required | Default | Defined by |
|----------|------|----------|---------|------------|
| [xdm:consentStandard](#xdmconsentstandard) | `string` | Optional |  | Consent String (this schema) |
| [xdm:consentStandardVersion](#xdmconsentstandardversion) | `string` | Optional |  | Consent String (this schema) |
| [xdm:consentStringValue](#xdmconsentstringvalue) | `string` | Optional |  | Consent String (this schema) |
| [xdm:containsPersonalData](#xdmcontainspersonaldata) | `boolean` | Optional |  | Consent String (this schema) |
| [xdm:gdprApplies](#xdmgdprapplies) | `boolean` | Optional | `false` | Consent String (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## xdm:consentStandard
### Standard for the consent

This helps determine the format of the consent string as set by consent management services.

`xdm:consentStandard`
* is optional
* type: `string`
* defined in this schema

### xdm:consentStandard Type


`string`






## xdm:consentStandardVersion
### Standards Version

Standards version to accurately define the format of the consent string as set by consent management services.

`xdm:consentStandardVersion`
* is optional
* type: `string`
* defined in this schema

### xdm:consentStandardVersion Type


`string`






## xdm:consentStringValue
### Consent String

Full consent string as provided by consent management services. Standard and Version help define how to parse this string.

`xdm:consentStringValue`
* is optional
* type: `string`
* defined in this schema

### xdm:consentStringValue Type


`string`






## xdm:containsPersonalData
### Contains personal data

If this is true, it means consent is coming with personal data.

`xdm:containsPersonalData`
* is optional
* type: `boolean`
* defined in this schema

### xdm:containsPersonalData Type


`boolean`





## xdm:gdprApplies
### GDPR Applies

If this is true, it means this consent string needs to be processed for consent enforcement.

`xdm:gdprApplies`
* is optional
* type: `boolean`
* default: `false`
* defined in this schema

### xdm:gdprApplies Type


`boolean`




