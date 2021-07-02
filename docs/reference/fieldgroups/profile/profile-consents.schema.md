
# Consents and Preferences Schema

```
https://ns.adobe.com/xdm/mixins/profile-consents
```

This schema captures privacy, personalization and marketing preferences (consents).

| [Abstract](../../../abstract.md) | [Extensible](../../../extensions.md) | [Status](../../../status.md) | [Identifiable](../../../id.md) | [Custom Properties](../../../extensions.md) | [Additional Properties](../../../extensions.md) | Defined In |
|----------------------------------|--------------------------------------|------------------------------|--------------------------------|---------------------------------------------|-------------------------------------------------|------------|
| Can be instantiated | Yes | Stable | No | Forbidden | Permitted | [fieldgroups/profile/profile-consents.schema.json](fieldgroups/profile/profile-consents.schema.json) |
## Schema Hierarchy

* Consents and Preferences `https://ns.adobe.com/xdm/mixins/profile-consents`
  * [Consent for Privacy, Personalization and Marketing Preferences](../../datatypes/consent/consent-preferences.schema.md) `https://ns.adobe.com/xdm/datatypes/consents-and-preferences`


## Consents and Preferences Example
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

# Consents and Preferences Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [xdm:consents](#xdmconsents) | `object` | Optional | [Consent for Privacy, Personalization and Marketing Preferences](../../datatypes/consent/consent-preferences.schema.md#xdmconsents) |
| `*` | any | Additional | this schema *allows* additional properties |

## xdm:consents
### Consents and Preferences

Specific Consent and Preference Options

`xdm:consents`
* is optional
* type: `object`
* defined in [Consent for Privacy, Personalization and Marketing Preferences](../../datatypes/consent/consent-preferences.schema.md#xdmconsents)

### xdm:consents Type


`object` with following properties:


| Property | Type | Required |
|----------|------|----------|
| `xdm:collect`|  | Optional |
| `xdm:idSpecific`| object | Optional |
| `xdm:marketing`|  | Optional |
| `xdm:metadata`|  | Optional |
| `xdm:personalize`|  | Optional |
| `xdm:share`|  | Optional |



#### xdm:collect
##### Data Collection

Data collection is permitted

`xdm:collect`
* is optional
* type: reference

##### xdm:collect Type


* []() – `#/definitions/consent-field`







#### xdm:idSpecific
##### Identifier specific

Identifier specific consents and preferences

`xdm:idSpecific`
* is optional
* type: `object`

##### xdm:idSpecific Type

Unknown type `object`.

```json
{
  "title": "Identifier specific",
  "description": "Identifier specific consents and preferences",
  "type": "object",
  "meta:xdmType": "map",
  "additionalProperties": {
    "title": "Identifier Type",
    "type": "object",
    "meta:xdmType": "map",
    "additionalProperties": {
      "type": "object",
      "title": "Identifier",
      "properties": {
        "xdm:collect": {
          "title": "Data Collection",
          "description": "Data collection is permitted",
          "$ref": "#/definitions/consent-field"
        },
        "xdm:share": {
          "title": "Share Data",
          "description": "Sharing of user's data with 2nd or 3rd parties is permitted",
          "$ref": "#/definitions/consent-field"
        },
        "xdm:adID": {
          "title": "Use Advertiser ID",
          "description": "The Advertiser ID (IDFA / AAID) can be used to link user across apps on this device",
          "$ref": "#/definitions/consent-field"
        },
        "xdm:personalize": {
          "$ref": "#/definitions/base-personalization"
        },
        "xdm:marketing": {
          "$ref": "#/definitions/idSpecific-marketing"
        }
      }
    }
  },
  "xdm:metadata": {
    "title": "Consent and Preference Metadata",
    "description": "Metadata that applies to all consents and preferences that don't specify a different value",
    "$ref": "#/definitions/metadata"
  },
  "simpletype": "`object`"
}
```







#### xdm:marketing

undefined

`xdm:marketing`
* is optional
* type: reference

##### xdm:marketing Type


* []() – `#/definitions/base-marketing-with-subscriptions`







#### xdm:metadata
##### Consent and Preference Metadata

Metadata that applies to all consents and preferences that don't specify a different value

`xdm:metadata`
* is optional
* type: reference

##### xdm:metadata Type


* []() – `#/definitions/metadata`







#### xdm:personalize

undefined

`xdm:personalize`
* is optional
* type: reference

##### xdm:personalize Type


* []() – `#/definitions/base-personalization`







#### xdm:share
##### Share Data

Sharing of user's data with 2nd or 3rd parties is permitted

`xdm:share`
* is optional
* type: reference

##### xdm:share Type


* []() – `#/definitions/consent-field`









