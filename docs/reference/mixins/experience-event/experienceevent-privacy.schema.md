
# Experience event privacy mixin Schema

```
https://ns.adobe.com/xdm/context/experienceevent-privacy
```

Use for consent information such as consent format and consent to personal data.

| [Abstract](../../../abstract.md) | [Extensible](../../../extensions.md) | [Status](../../../status.md) | [Identifiable](../../../id.md) | [Custom Properties](../../../extensions.md) | [Additional Properties](../../../extensions.md) | Defined In |
|----------------------------------|--------------------------------------|------------------------------|--------------------------------|---------------------------------------------|-------------------------------------------------|------------|
| Can be instantiated | Yes | Stable | No | Forbidden | Permitted | [mixins/experience-event/experienceevent-privacy.schema.json](mixins/experience-event/experienceevent-privacy.schema.json) |
## Schema Hierarchy

* Experience event privacy mixin `https://ns.adobe.com/xdm/context/experienceevent-privacy`
  * [Extensibility base schema](../../datatypes/extensible.schema.md) `https://ns.adobe.com/xdm/common/extensible`


## Experience event privacy mixin Example
```json
{
  "xdm:consentStrings": [
    {
      "xdm:consentStandard": "IAB TCF",
      "xdm:consentStandardVersion": "2.0",
      "xdm:consentStringValue": "BObdrPUOevsguAfDqFENCNAAAAAmeAAA.PVAfDObdrA.DqFENCAmeAENCDA",
      "xdm:gdprApplies": true,
      "xdm:containsPersonalData": false
    }
  ]
}
```

# Experience event privacy mixin Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [xdm:consentStrings](#xdmconsentstrings) | Consent String | Optional | Experience event privacy mixin (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## xdm:consentStrings
### Identity level consent information

`xdm:consentStrings`
* is optional
* type: Consent String

* defined in this schema

### xdm:consentStrings Type


Array type: Consent String

All items must be of the type:
* [Consent String](../../datatypes/consentstring.schema.md) – `https://ns.adobe.com/xdm/context/consentstring`







