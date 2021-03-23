
# Privacy/Personalization/Marketing Preferences (Consents) Schema

```
https://ns.adobe.com/xdm/mixins/profile-consents
```

This schema captures privacy, personalization and marketing preferences (consents).

| [Abstract](../../../abstract.md) | [Extensible](../../../extensions.md) | [Status](../../../status.md) | [Identifiable](../../../id.md) | [Custom Properties](../../../extensions.md) | [Additional Properties](../../../extensions.md) | Defined In |
|----------------------------------|--------------------------------------|------------------------------|--------------------------------|---------------------------------------------|-------------------------------------------------|------------|
| Can be instantiated | Yes | Stable | No | Forbidden | Permitted | [mixins/profile/profile-consents.schema.json](mixins/profile/profile-consents.schema.json) |
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
        "xdm:val": "y",
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
              "xdm:val": "y",
              "xdm:time": "2019-01-01T15:52:25+00:00"
            }
          }
        }
      },
      "sms": {
        "408-555-1234": {
          "xdm:marketing": {
            "xdm:sms": {
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
| [xdm:consents](#xdmconsents) | `object` | Optional | [Consent for Privacy, Personalization and Marketing Preferences](../../datatypes/consent-preferences.schema.md#xdmconsents) |
| `*` | any | Additional | this schema *allows* additional properties |

## xdm:consents
### Consents and Preferences

Specific Consent and Preference Options

`xdm:consents`
* is optional
* type: `object`
* defined in [Consent for Privacy, Personalization and Marketing Preferences](../../datatypes/consent-preferences.schema.md#xdmconsents)

### xdm:consents Type


`object` with following properties:


| Property | Type | Required |
|----------|------|----------|





