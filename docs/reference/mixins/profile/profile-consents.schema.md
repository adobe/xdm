
# Privacy/Personalization/Marketing Preferences (Consents) Schema

```
https://ns.adobe.com/xdm/mixins/profile-consents
```

This schema captures privacy, personalization and marketing preferences (consents).

| [Abstract](../../../abstract.md) | [Extensible](../../../extensions.md) | [Status](../../../status.md) | [Identifiable](../../../id.md) | [Custom Properties](../../../extensions.md) | [Additional Properties](../../../extensions.md) | Defined In |
|----------------------------------|--------------------------------------|------------------------------|--------------------------------|---------------------------------------------|-------------------------------------------------|------------|
| Can be instantiated | Yes | Experimental | No | Forbidden | Permitted | [mixins/profile/profile-consents.schema.json](mixins/profile/profile-consents.schema.json) |
## Schema Hierarchy

* Privacy/Personalization/Marketing Preferences (Consents) `https://ns.adobe.com/xdm/mixins/profile-consents`
  * [Consent for Privacy, Personalization and Marketing Preferences](../../datatypes/consent-preferences.schema.md) `https://ns.adobe.com/xdm/datatypes/consents-and-preferences`


## Privacy/Personalization/Marketing Preferences (Consents) Example
```json
{
  "xdm:consents": {
    "xdm:collect": {
      "xdm:val": "VI"
    },
    "xdm:share": {
      "xdm:val": "y"
    },
    "xdm:personalize": {
      "xdm:content": {
        "xdm:val": "y"
      }
    },
    "xdm:marketing": {
      "xdm:preferred": "email",
      "xdm:any": {
        "xdm:val": "y"
      },
      "xdm:email": {
        "xdm:val": "y"
      }
    },
    "xdm:idSpecific": {
      "ECID": {
        "12345678-abcdef09-87654321-fedcba90": {
          "xdm:share": {
            "xdm:val": "n"
          },
          "xdm:marketing": {
            "xdm:push": {
              "xdm:val": "n",
              "xdm:time": "2020-09-30T01:02:33+00:00",
              "xdm:reason": "not relevant"
            }
          }
        },
        "11112222-33334444-55556666-77778888": {
          "xdm:adID": {
            "xdm:val": "n"
          },
          "xdm:personalize": {
            "xdm:content": {
              "xdm:val": "n"
            }
          },
          "xdm:marketing": {
            "xdm:push": {
              "xdm:val": "y"
            }
          }
        }
      },
      "email": {
        "john@xyz.com": {
          "xdm:marketing": {
            "xdm:email": {
              "xdm:val": "y"
            }
          }
        }
      }
    },
    "xdm:metadata": {
      "xdm:time": "2019-01-01T15:52:25+00:00"
    }
  }
}
```

# Privacy/Personalization/Marketing Preferences (Consents) Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [xdm:consents](#xdmconsents) | complex | Optional | [Consent for Privacy, Personalization and Marketing Preferences](../../datatypes/consent-preferences.schema.md#xdmconsents) |
| `*` | any | Additional | this schema *allows* additional properties |

## xdm:consents
### Consents and Preferences

Specific Consent and Preference Options

`xdm:consents`
* is optional
* type: complex
* defined in [Consent for Privacy, Personalization and Marketing Preferences](../../datatypes/consent-preferences.schema.md#xdmconsents)

### xdm:consents Type


**All** of the following *requirements* need to be fulfilled.


#### Requirement 1


* []() – `#/definitions/choices`


#### Requirement 2



#### Requirement 3






