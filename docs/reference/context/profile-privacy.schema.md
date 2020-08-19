
# Privacy/Marketing Preferences (Consent) Schema

```
https://ns.adobe.com/xdm/context/profile-privacy
```

This schema captures privacy, personalization and marketing preferences (consents).

| [Abstract](../../abstract.md) | [Extensible](../../extensions.md) | [Status](../../status.md) | [Identifiable](../../id.md) | [Custom Properties](../../extensions.md) | [Additional Properties](../../extensions.md) | Defined In |
|-------------------------------|-----------------------------------|---------------------------|-----------------------------|------------------------------------------|----------------------------------------------|------------|
| Can be instantiated | Yes | Stable | No | Forbidden | Permitted | [context/profile-privacy.schema.json](context/profile-privacy.schema.json) |
## Schema Hierarchy

* Privacy/Marketing Preferences (Consent) `https://ns.adobe.com/xdm/context/profile-privacy`
  * [Extensibility base schema](../common/extensible.schema.md) `https://ns.adobe.com/xdm/common/extensible`
  * [Privacy/Marketing Preferences (Consent)](consentpreferences.schema.md) `https://ns.adobe.com/xdm/context/consent-preferences`


## Privacy/Marketing Preferences (Consent) Example
```json
{
  "xdm:optOutConsentLevel": {
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
        },
        {
          "xdm:type": "push_notifications",
          "xdm:choice": "out",
          "xdm:basisOfProcessing": "legitimate_interest"
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
              "xdm:choice": "pending"
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
    },
    "xdm:version": "1.0.0",
    "xdm:timestamp": "2019-01-01T15:52:25+00:00",
    "xdm:userLocale": "UK",
    "xdm:localeSource": "ip"
  },
  "xdm:identityPrivacyInfo": {
    "ECID": {
      "11112222233333444": {
        "xdm:consentsAndPreferences": {
          "xdm:privacyOptOuts": [
            {
              "xdm:optOutType": "general_opt_out",
              "xdm:optOutValue": "in",
              "xdm:timestamp": "2019-01-01T15:52:25+00:00",
              "xdm:basisOfProcessing": "legitimate_interest"
            },
            {
              "xdm:optOutType": "device_linking",
              "xdm:optOutValue": "not_provided",
              "xdm:basisOfProcessing": "vital_interest"
            },
            {
              "xdm:optOutType": "anonymous_analysis",
              "xdm:optOutValue": "out"
            }
          ],
          "xdm:personalizationPreferences": {
            "xdm:details": [
              {
                "xdm:type": "content",
                "xdm:choice": "in"
              }
            ]
          }
        },
        "xdm:identityIABConsent": {
          "xdm:consentTimestamp": "2020-04-11T05:05:05Z",
          "xdm:consentString": {
            "xdm:consentStandard": "IAB TCF",
            "xdm:consentStandardVersion": "2.0",
            "xdm:consentStringValue": "BObdrPUOevsguAfDqFENCNAAAAAmeAAA.PVAfDObdrA.DqFENCAmeAENCDA",
            "xdm:gdprApplies": true,
            "xdm:containsPersonalData": false
          }
        }
      }
    }
  }
}
```

# Privacy/Marketing Preferences (Consent) Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [xdm:identityPrivacyInfo](#xdmidentityprivacyinfo) | `object` | Optional | Privacy/Marketing Preferences (Consent) (this schema) |
| [xdm:optOutConsentLevel](#xdmoptoutconsentlevel) | Privacy/Marketing Preferences (Consent) | Optional | Privacy/Marketing Preferences (Consent) (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## xdm:identityPrivacyInfo
### Identity level privacy information

Captured privacy information for identities in profile.

`xdm:identityPrivacyInfo`
* is optional
* type: `object`
* defined in this schema

### xdm:identityPrivacyInfo Type


`object` with following properties:


| Property | Type | Required |
|----------|------|----------|






## xdm:optOutConsentLevel
### Global Privacy/Marketing Preference Values

Global (User/Profile-level) Privacy/Personalization/Marketing Preferences.

`xdm:optOutConsentLevel`
* is optional
* type: Privacy/Marketing Preferences (Consent)
* defined in this schema

### xdm:optOutConsentLevel Type


`object` with following properties:


| Property | Type | Required |
|----------|------|----------|





