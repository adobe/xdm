
# IAB TCF 2.0 Consent Schema

```
https://ns.adobe.com/xdm/context/experienceevent-privacy
```

Include the IAB TCF 2.0 string in experience events.

| [Abstract](../../../abstract.md) | [Extensible](../../../extensions.md) | [Status](../../../status.md) | [Identifiable](../../../id.md) | [Custom Properties](../../../extensions.md) | [Additional Properties](../../../extensions.md) | Defined In |
|----------------------------------|--------------------------------------|------------------------------|--------------------------------|---------------------------------------------|-------------------------------------------------|------------|
| Can be instantiated | Yes | Stable | No | Forbidden | Permitted | [fieldgroups/experience-event/experienceevent-privacy.schema.json](fieldgroups/experience-event/experienceevent-privacy.schema.json) |
## Schema Hierarchy

* IAB TCF 2.0 Consent `https://ns.adobe.com/xdm/context/experienceevent-privacy`
  * [Extensibility base schema](../../datatypes/extensible.schema.md) `https://ns.adobe.com/xdm/common/extensible`


## IAB TCF 2.0 Consent Example
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

# IAB TCF 2.0 Consent Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [xdm:consentStrings](#xdmconsentstrings) | Consent String | Optional | IAB TCF 2.0 Consent (this schema) |
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
* [Consent String](../../datatypes/consent/consentstring.schema.md) – `https://ns.adobe.com/xdm/context/consentstring`







