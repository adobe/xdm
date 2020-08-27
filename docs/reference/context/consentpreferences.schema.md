
# Privacy/Marketing Preferences (Consent) Schema

```
https://ns.adobe.com/xdm/context/consent-preferences
```

This schema captures privacy, personalization and marketing preferences (consents).

| [Abstract](../../abstract.md) | [Extensible](../../extensions.md) | [Status](../../status.md) | [Identifiable](../../id.md) | [Custom Properties](../../extensions.md) | [Additional Properties](../../extensions.md) | Defined In |
|-------------------------------|-----------------------------------|---------------------------|-----------------------------|------------------------------------------|----------------------------------------------|------------|
| Can be instantiated | Yes | Experimental | No | Forbidden | Permitted | [context/consentpreferences.schema.json](context/consentpreferences.schema.json) |
## Schema Hierarchy

* Privacy/Marketing Preferences (Consent) `https://ns.adobe.com/xdm/context/consent-preferences`
  * [Extensibility base schema](../common/extensible.schema.md) `https://ns.adobe.com/xdm/common/extensible`


## Privacy/Marketing Preferences (Consent) Example
```json
{
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
        "xdm:basisOfProcessing": "legitimate_interest",
        "xdm:timestamp": "2019-01-01T15:52:25+00:00"
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
}
```

# Privacy/Marketing Preferences (Consent) Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [xdm:localeSource](#xdmlocalesource) | `enum` | Optional | Privacy/Marketing Preferences (Consent) (this schema) |
| [xdm:marketingPreferences](#xdmmarketingpreferences) | `object` | Optional | Privacy/Marketing Preferences (Consent) (this schema) |
| [xdm:personalizationPreferences](#xdmpersonalizationpreferences) | `object` | Optional | Privacy/Marketing Preferences (Consent) (this schema) |
| [xdm:privacyOptOuts](#xdmprivacyoptouts) | `object[]` | Optional | Privacy/Marketing Preferences (Consent) (this schema) |
| [xdm:timestamp](#xdmtimestamp) | `string` | Optional | Privacy/Marketing Preferences (Consent) (this schema) |
| [xdm:userLocale](#xdmuserlocale) | `string` | Optional | Privacy/Marketing Preferences (Consent) (this schema) |
| [xdm:version](#xdmversion) | `string` | Optional | Privacy/Marketing Preferences (Consent) (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## xdm:localeSource
### Locale Source

Method used to determine the user's locale

`xdm:localeSource`
* is optional
* type: `enum`
* defined in this schema

The value of this property **must** be equal to one of the [known values below](#xdmlocalesource-known-values).

### xdm:localeSource Known Values
| Value | Description |
|-------|-------------|
| `ip` | IP Address |
| `gps` | Device GPS |
| `user_provided` | User Provided |
| `website_location` | Website eTDL |
| `inferred` | Inferred |
| `other` | Other |




## xdm:marketingPreferences
### Marketing Preferences

User's Direct Marketing Preferences

`xdm:marketingPreferences`
* is optional
* type: `object`
* defined in this schema

### xdm:marketingPreferences Type


`object` with following properties:


| Property | Type | Required |
|----------|------|----------|
| `xdm:default`| object | Optional |
| `xdm:details`| array | Optional |



#### xdm:default
##### Default Direct Marketing Preference

User's Default Marketing Preference

`xdm:default`
* is optional
* type: `object`

##### xdm:default Type

Unknown type `object`.

```json
{
  "title": "Default Direct Marketing Preference",
  "description": "User's Default Marketing Preference",
  "type": "object",
  "properties": {
    "xdm:choice": {
      "title": "Default Marketing Preferences Value",
      "description": "The default value for direct marketing preferences",
      "$ref": "#/definitions/consentValue"
    },
    "xdm:basisOfProcessing": {
      "$ref": "#/definitions/basisOfProcessing"
    },
    "xdm:timestamp": {
      "$ref": "#/definitions/timestamp"
    }
  },
  "simpletype": "`object`"
}
```







#### xdm:details
##### Itemized Direct Marketing Preferences

Preferences for specific types of direct marketing

`xdm:details`
* is optional
* type: `object[]`


##### xdm:details Type


Array type: `object[]`

All items must be of the type:
`object` with following properties:


| Property | Type | Required |
|----------|------|----------|
| `xdm:basisOfProcessing`|  | Optional |
| `xdm:choice`|  | Optional |
| `xdm:subscriptions`| object | Optional |
| `xdm:timestamp`|  | Optional |
| `xdm:type`| string | Optional |



#### xdm:basisOfProcessing

undefined

`xdm:basisOfProcessing`
* is optional
* type: reference

##### xdm:basisOfProcessing Type


* []() – `#/definitions/basisOfProcessing`







#### xdm:choice
##### Marketing Preference Value

The value for this specific marketing preference

`xdm:choice`
* is optional
* type: reference

##### xdm:choice Type


* []() – `#/definitions/consentValue`







#### xdm:subscriptions
##### Company-specific subscriptions

Company-specific subscriptions, such as mailing lists or newsletters

`xdm:subscriptions`
* is optional
* type: `object`

##### xdm:subscriptions Type

Unknown type `object`.

```json
{
  "title": "Company-specific subscriptions",
  "description": "Company-specific subscriptions, such as mailing lists or newsletters",
  "type": "object",
  "meta:xdmType": "map",
  "additionalProperties": {
    "xdm:choice": {
      "title": "Marketing Preference Value",
      "description": "The value for this specific marketing preference",
      "$ref": "#/definitions/consentValue"
    },
    "xdm:timestamp": {
      "$ref": "#/definitions/timestamp"
    }
  },
  "simpletype": "`object`"
}
```







#### xdm:timestamp

undefined

`xdm:timestamp`
* is optional
* type: reference

##### xdm:timestamp Type


* []() – `#/definitions/timestamp`







#### xdm:type
##### Marketing Preference

The specific marketing preference.

`xdm:type`
* is optional
* type: `enum`

The value of this property **must** be equal to one of the [known values below](#xdmmarketingpreferences-known-values).

##### xdm:type Known Values
| Value | Description |
|-------|-------------|
| `email` | Receive eMail |
| `push_notifications` | Receive Push Notifications |
| `in_app_messages` | Receive In App Messages |
| `sms` | Receive SMS |
| `phone_calls` | Receive Phone Calls |
| `snail_mail` | Receive Regular Mail |
| `in_vehicle_messages` | Receive In Vehicle Messages |
| `in_home_messages` | Receive In Home Messages |
| `iot` | Receive IoT Notifications |
| `social_media` | Receive Social Media Messages |

















## xdm:personalizationPreferences
### Personalization Preferences

User's Personalization Preferences

`xdm:personalizationPreferences`
* is optional
* type: `object`
* defined in this schema

### xdm:personalizationPreferences Type


`object` with following properties:


| Property | Type | Required |
|----------|------|----------|
| `xdm:default`| object | Optional |
| `xdm:details`| array | Optional |



#### xdm:default
##### Global Personalization Preferences

User's Default Personalization Preference

`xdm:default`
* is optional
* type: `object`

##### xdm:default Type

Unknown type `object`.

```json
{
  "title": "Global Personalization Preferences",
  "description": "User's Default Personalization Preference",
  "type": "object",
  "properties": {
    "xdm:choice": {
      "title": "Default Personalization Preferences Value",
      "description": "The default value for personalization",
      "$ref": "#/definitions/consentValue"
    },
    "xdm:basisOfProcessing": {
      "$ref": "#/definitions/basisOfProcessing"
    },
    "xdm:timestamp": {
      "$ref": "#/definitions/timestamp"
    }
  },
  "simpletype": "`object`"
}
```







#### xdm:details
##### Itemized Personalization Preferences

Preferences for specific types of personalization

`xdm:details`
* is optional
* type: `object[]`


##### xdm:details Type


Array type: `object[]`

All items must be of the type:
`object` with following properties:


| Property | Type | Required |
|----------|------|----------|
| `xdm:basisOfProcessing`|  | Optional |
| `xdm:choice`|  | Optional |
| `xdm:timestamp`|  | Optional |
| `xdm:type`| string | Optional |



#### xdm:basisOfProcessing

undefined

`xdm:basisOfProcessing`
* is optional
* type: reference

##### xdm:basisOfProcessing Type


* []() – `#/definitions/basisOfProcessing`







#### xdm:choice
##### Personalization Preference Value

The value for this specific personalization preference

`xdm:choice`
* is optional
* type: reference

##### xdm:choice Type


* []() – `#/definitions/consentValue`







#### xdm:timestamp

undefined

`xdm:timestamp`
* is optional
* type: reference

##### xdm:timestamp Type


* []() – `#/definitions/timestamp`







#### xdm:type
##### Personalization Preference

The specific personalization preference.

`xdm:type`
* is optional
* type: `enum`

The value of this property **must** be equal to one of the [known values below](#xdmpersonalizationpreferences-known-values).

##### xdm:type Known Values
| Value | Description |
|-------|-------------|
| `content` | Personalize Content |
| `in_app` | Personalize In App Messages |
| `offers` | Personalize Offers |
| `email` | Personalize eMail |
| `snail_mail` | Personalize Regular Mail |
| `phone_calls` | Personalize Phone Calls |
| `push_notifications` | Personalize Push Notifications |
| `sms` | Personalize SMS |
| `customer_support` | Personalize Customer Support |
| `in_store` | Personalize In Store |
| `in_vehicle` | Personalize In Vehicle |
| `in_home` | Personalize In Home |
| `iot` | Personalize IoT |
| `social_media` | Personalize Social Media |
| `third_party_offers` | Personalize Third-party Offers displayed on my site |
| `third_party_content` | Personalize Third-party Content displayed on my site |
| `ads` | Personalize My Business&#39;s Ads on Other Sites |
| `in_app_messages` |  |

















## xdm:privacyOptOuts
### Privacy Preferences

Encapsulates data privacy preferences.

`xdm:privacyOptOuts`
* is optional
* type: `object[]`

* defined in this schema

### xdm:privacyOptOuts Type


Array type: `object[]`

All items must be of the type:
`object` with following properties:


| Property | Type | Required |
|----------|------|----------|
| `xdm:basisOfProcessing`|  | Optional |
| `xdm:optOutType`| string | Optional |
| `xdm:optOutValue`|  | Optional |
| `xdm:timestamp`|  | Optional |



#### xdm:basisOfProcessing

undefined

`xdm:basisOfProcessing`
* is optional
* type: reference

##### xdm:basisOfProcessing Type


* []() – `#/definitions/basisOfProcessing`







#### xdm:optOutType
##### Opt-out type

The type of user permission.

`xdm:optOutType`
* is optional
* type: `enum`

The value of this property **must** be equal to one of the [known values below](#xdmprivacyoptouts-known-values).

##### xdm:optOutType Known Values
| Value | Description |
|-------|-------------|
| `general_opt_out` | General opt-out |
| `sales_sharing_opt_out` | Sales/sharing opt-out |
| `anonymous_analysis` | Anonymous Analysis |
| `pseudonymous_analysis` | Pseudonymous Analysis |
| `device_linking` | Device Linking |






#### xdm:optOutValue
##### Opt Out Value

The value of the specific opt out.

`xdm:optOutValue`
* is optional
* type: reference

##### xdm:optOutValue Type


* []() – `#/definitions/consentValue`







#### xdm:timestamp

undefined

`xdm:timestamp`
* is optional
* type: reference

##### xdm:timestamp Type


* []() – `#/definitions/timestamp`












## xdm:timestamp
### Consent Preferences timestamp

Timestamp of the complete set of user consent preferences.

`xdm:timestamp`
* is optional
* type: `string`
* defined in this schema

### xdm:timestamp Type


`string`
* format: `date-time` – date and time (according to [RFC 3339, section 5.6](http://tools.ietf.org/html/rfc3339))






## xdm:userLocale
### User Locale

User location or jurisdiction that applies to the consents for this user

`xdm:userLocale`
* is optional
* type: `string`
* defined in this schema

### xdm:userLocale Type


`string`






## xdm:version
### Preferences Version

Version of the Privacy Preferences Standard

`xdm:version`
* is optional
* type: `string`
* defined in this schema

### xdm:version Type


`string`





