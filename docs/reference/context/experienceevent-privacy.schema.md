
# Experience event privacy mixin Schema

```
https://ns.adobe.com/xdm/context/experienceevent-privacy
```

Experience event privacy schema captures consent information on the hit.

| [Abstract](../../abstract.md) | [Extensible](../../extensions.md) | [Status](../../status.md) | [Identifiable](../../id.md) | [Custom Properties](../../extensions.md) | [Additional Properties](../../extensions.md) | Defined In |
|-------------------------------|-----------------------------------|---------------------------|-----------------------------|------------------------------------------|----------------------------------------------|------------|
| Can be instantiated | Yes | Stable | No | Forbidden | Permitted | [context/experienceevent-privacy.schema.json](context/experienceevent-privacy.schema.json) |
## Schema Hierarchy

* Experience event privacy mixin `https://ns.adobe.com/xdm/context/experienceevent-privacy`
  * [Extensibility base schema](../common/extensible.schema.md) `https://ns.adobe.com/xdm/common/extensible`


## Experience event privacy mixin Example
```json
{
  "xdm:consentsAndPreferences": {
    "xdm:privacyOptOuts": [
      {
        "xdm:optOutType": "general_opt_out",
        "xdm:optOutValue": "in",
        "xdm:timestamp": "2019-01-01T15:52:25+00:00",
        "xdm:basisOfProcessing": "legitimate_interest"
      }
    ],
    "xdm:personalizationPreferences": {
      "xdm:default": {
        "xdm:choice": "unknown",
        "xdm:timestamp": "2019-01-01T15:52:25+00:00",
        "xdm:basisOfProcessing": "consent"
      },
      "xdm:details": [
        {
          "xdm:type": "email",
          "xdm:choice": "in"
        }
      ]
    },
    "xdm:marketingPreferences": {
      "xdm:default": {
        "xdm:choice": "unknown"
      },
      "xdm:details": [
        {
          "xdm:type": "email",
          "xdm:choice": "in",
          "xdm:subscriptions": {
            "weekly_mailer": {
              "xdm:choice": "out",
              "xdm:timestamp": "2019-02-03T15:52:25+00:00"
            },
            "daily_newsletter": {
              "xdm:choice": "in"
            }
          }
        },
        {
          "xdm:type": "iot",
          "xdm:choice": "out",
          "xdm:timestamp": "2019-01-01T15:52:25+00:00",
          "xdm:basisOfProcessing": "legitimate_interest",
          "xdm:subscriptions": {
            "out_of_milk": {
              "xdm:choice": "in"
            }
          }
        }
      ]
    }
  },
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
| [xdm:consentsAndPreferences](#xdmconsentsandpreferences) | complex | Optional | Experience event privacy mixin (this schema) |
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
* [Consent String](consentstring.schema.md) – `https://ns.adobe.com/xdm/context/consentstring`








## xdm:consentsAndPreferences
### Consents, Personalization and Marketing Preferences

`xdm:consentsAndPreferences`
* is optional
* type: complex
* defined in this schema

### xdm:consentsAndPreferences Type

Unknown type ``.

```json
{
  "title": "Consents, Personalization and Marketing Preferences",
  "ref": "https://ns.adobe.com/xdm/context/consentpreferences",
  "simpletype": "complex"
}
```




