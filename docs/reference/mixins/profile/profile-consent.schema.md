
# Privacy/Marketing Preferences (Consent) Schema

```
https://ns.adobe.com/xdm/mixins/profile-consent
```

This schema captures privacy, personalization and marketing preferences (consents).

| [Abstract](../../../abstract.md) | [Extensible](../../../extensions.md) | [Status](../../../status.md) | [Identifiable](../../../id.md) | [Custom Properties](../../../extensions.md) | [Additional Properties](../../../extensions.md) | Defined In |
|----------------------------------|--------------------------------------|------------------------------|--------------------------------|---------------------------------------------|-------------------------------------------------|------------|
| Can be instantiated | Yes | Experimental | No | Forbidden | Permitted | [mixins/profile/profile-consent.schema.json](mixins/profile/profile-consent.schema.json) |
## Schema Hierarchy

* Privacy/Marketing Preferences (Consent) `https://ns.adobe.com/xdm/mixins/profile-consent`
  * [Privacy/Marketing Preferences (Consent)](../../datatypes/consentpreferences.schema.md) `https://ns.adobe.com/xdm/datatypes/consent-preferences`


## Privacy/Marketing Preferences (Consent) Example
```json
{
  "xdm:consentsAndPreferences": {
    "xdm:choices": {
      "xdm:consents": {
        "xdm:dataCollection": {
          "xdm:choice": "yes",
          "xdm:timestamp": "2019-01-01T15:52:25+00:00",
          "xdm:basisOfProcessing": "consent"
        },
        "xdm:deviceLinking": {
          "xdm:basisOfProcessing": "vital_interest"
        },
        "xdm:pseudonymousAnalysis": {
          "xdm:choice": "no"
        }
      },
      "xdm:personalizationPreferences": {
        "xdm:anyPersonalization": {
          "xdm:choice": "yes",
          "xdm:timestamp": "2019-01-01T15:52:25+00:00",
          "xdm:basisOfProcessing": "consent"
        }
      },
      "xdm:marketingPreferences": {
        "xdm:preferredChannel": "email",
        "xdm:anyMarketing": {
          "xdm:choice": "unknown"
        },
        "xdm:iotMessages": {
          "xdm:choice": "yes",
          "xdm:timestamp": "2019-01-01T15:52:25+00:00",
          "xdm:basisOfProcessing": "legitimate_interest"
        },
        "xdm:pushNotifications": {
          "xdm:choice": "yes",
          "xdm:source": "OurApp"
        },
        "xdm:email": {
          "xdm:choice": "no",
          "xdm:reason": "Too Frequent"
        }
      }
    },
    "xdm:choicesMetadata": {
      "xdm:version": "1.0.0",
      "xdm:timestamp": "2019-01-01T15:52:25+00:00",
      "xdm:userCountryRegionCode": "US",
      "xdm:countryRegionSource": "ip",
      "xdm:source": "CJM"
    }
  }
}
```

# Privacy/Marketing Preferences (Consent) Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [xdm:consentsAndPreferences](#xdmconsentsandpreferences) | Privacy/Marketing Preferences (Consent) | Optional | Privacy/Marketing Preferences (Consent) (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## xdm:consentsAndPreferences
### Global Privacy/Marketing Preference Values

Global (User/Profile-level) Privacy/Personalization/Marketing Preferences.

`xdm:consentsAndPreferences`
* is optional
* type: Privacy/Marketing Preferences (Consent)
* defined in this schema

### xdm:consentsAndPreferences Type


* [Privacy/Marketing Preferences (Consent)](../../datatypes/consentpreferences.schema.md) – `https://ns.adobe.com/xdm/datatypes/consent-preferences`




