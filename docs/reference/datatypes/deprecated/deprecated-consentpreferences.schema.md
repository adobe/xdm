
# Privacy/Marketing Preferences (Consent) Schema

```
https://ns.adobe.com/xdm/datatypes/consent-preferences
```

This schema captures privacy, personalization and marketing preferences (consents).

| [Abstract](../../../abstract.md) | [Extensible](../../../extensions.md) | [Status](../../../status.md) | [Identifiable](../../../id.md) | [Custom Properties](../../../extensions.md) | [Additional Properties](../../../extensions.md) | Defined In |
|----------------------------------|--------------------------------------|------------------------------|--------------------------------|---------------------------------------------|-------------------------------------------------|------------|
| Can be instantiated | Yes | Deprecated | No | Forbidden | Permitted | [datatypes/deprecated/deprecated-consentpreferences.schema.json](datatypes/deprecated/deprecated-consentpreferences.schema.json) |

## Privacy/Marketing Preferences (Consent) Example
```json
{
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
        "xdm:choice": "unknown",
        "xdm:timestamp": "2019-01-01T15:52:25+00:00",
        "xdm:basisOfProcessing": "consent"
      },
      "xdm:email": {
        "xdm:choice": "yes"
      },
      "xdm:pushNotifications": {
        "xdm:choice": "no",
        "xdm:basisOfProcessing": "legitimate_interest",
        "xdm:timestamp": "2019-01-01T15:52:25+00:00"
      }
    },
    "xdm:marketingPreferences": {
      "xdm:preferredChannel": "email",
      "xdm:anyMarketing": {
        "xdm:choice": "yes"
      },
      "xdm:email": {
        "xdm:choice": "yes"
      },
      "xdm:pushNotifications": {
        "xdm:choice": "no",
        "xdm:reason": "not relevant"
      },
      "xdm:iot": {
        "xdm:choice": "yes",
        "xdm:timestamp": "2019-01-01T15:52:25+00:00",
        "xdm:basisOfProcessing": "legitimate_interest"
      }
    }
  },
  "xdm:choicesMetadata": {
    "xdm:version": "1.0.0",
    "xdm:timestamp": "2019-01-01T15:52:25+00:00",
    "xdm:source": "BestCMP",
    "xdm:userIDfromSource": "12F5B902C89EA592",
    "xdm:userCountryRegionCode": "US-CA",
    "xdm:countryRegionSource": "ip"
  }
}
```

# Privacy/Marketing Preferences (Consent) Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [xdm:choices](#xdmchoices) | complex | Optional | Privacy/Marketing Preferences (Consent) (this schema) |
| [xdm:choicesMetadata](#xdmchoicesmetadata) | complex | Optional | Privacy/Marketing Preferences (Consent) (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## xdm:choices
### Consent and Preference Choices

Specific Consent and Preference Options

`xdm:choices`
* is optional
* type: complex
* defined in this schema

### xdm:choices Type

Unknown type ``.

```json
{
  "properties": {
    "xdm:consents": {
      "title": "Consents",
      "description": "Encapsulates user consents.",
      "type": "object",
      "properties": {
        "xdm:dataCollection": {
          "title": "Data Collection",
          "description": "Data collection is permitted",
          "$ref": "#/definitions/consent-fields"
        },
        "xdm:sellData": {
          "title": "Sell Data",
          "description": "Selling of user's Data to 2nd or 3rd parties is permitted",
          "$ref": "#/definitions/consent-fields"
        },
        "xdm:shareData": {
          "title": "Share Data",
          "description": "Sharing of user's Data with 2nd or 3rd parties is permitted",
          "$ref": "#/definitions/consent-fields"
        },
        "xdm:pseudonymousAnalysis": {
          "title": "Pseudonymous Analysis",
          "description": "Data can be used for analysis that may include an ID that may or may not be tied to an actual person",
          "$ref": "#/definitions/consent-fields"
        },
        "xdm:deviceLinking": {
          "title": "Device Linking",
          "description": "Attempts to link multiple devices belonging to an individual or household are permitted",
          "$ref": "#/definitions/consent-fields"
        }
      }
    },
    "xdm:personalizationPreferences": {
      "title": "Personalization Preferences",
      "description": "User's Personalization Preferences",
      "type": "object",
      "properties": {
        "xdm:anyPersonalization": {
          "title": "General Personalization Preference",
          "description": "Is permission granted to perform any type of personalization",
          "$ref": "#/definitions/personalization-fields"
        },
        "xdm:email": {
          "title": "Personalize email",
          "description": "Allow personalization of emails sent to the user",
          "$ref": "#/definitions/personalization-fields"
        },
        "xdm:physicalMail": {
          "title": "Personalize physical mail",
          "description": "Allow personalization of offers sent via traditional/physical mail",
          "$ref": "#/definitions/personalization-fields"
        },
        "xdm:pushNotifications": {
          "title": "Personalize push notifications",
          "description": "Personalization of push notifications is permitted",
          "$ref": "#/definitions/personalization-fields"
        },
        "xdm:sms": {
          "title": "Personalize SMS",
          "description": "Personalization of text messages is permitted",
          "$ref": "#/definitions/personalization-fields"
        },
        "xdm:phoneCalls": {
          "title": "Personalize phone calls",
          "description": "Allow phone calls that the brand initiates to be personalized based on the user's interests or behavior",
          "$ref": "#/definitions/personalization-fields"
        },
        "xdm:iotDevices": {
          "title": "Personalize IoT Devices",
          "description": "Personalization of interactions with IoT devices is permitted",
          "$ref": "#/definitions/personalization-fields"
        },
        "xdm:socialMedia": {
          "title": "Personalize Social Media",
          "description": "Personalization of interactions on Social Media sites/apps is permitted",
          "$ref": "#/definitions/personalization-fields"
        },
        "xdm:inAppMessages": {
          "title": "Personalize in-app messages",
          "description": "Allow personalization of messages displayed within my apps",
          "$ref": "#/definitions/personalization-fields"
        },
        "xdm:inVehicle": {
          "title": "Personalize in-vehicle",
          "description": "Personalization of in-vehicle experiences is permitted",
          "$ref": "#/definitions/personalization-fields"
        },
        "xdm:inHome": {
          "title": "Personalize in-home",
          "description": "Personalization of in-home experiences is permitted",
          "$ref": "#/definitions/personalization-fields"
        },
        "xdm:inStore": {
          "title": "Personalize in-store",
          "description": "Personalization of in-store experiences is permitted",
          "$ref": "#/definitions/personalization-fields"
        },
        "xdm:content": {
          "title": "Personalize content",
          "description": "Allow personalization of the content on my site or in my apps",
          "$ref": "#/definitions/personalization-fields"
        },
        "xdm:offers": {
          "title": "Personalize Offers",
          "description": "Allow personalization of 1st-party offers displayed on this site or with this app",
          "$ref": "#/definitions/personalization-fields"
        },
        "xdm:customerSupport": {
          "title": "Personalize customer support",
          "description": "Allow customer support to personalize responses/suggestions based on user's interests or behavior",
          "$ref": "#/definitions/personalization-fields"
        },
        "xdm:thirdPartyOffers": {
          "title": "Personalize ",
          "description": "Personalization of third-party offers/ads displayed on this brand's sites or apps is permitted",
          "$ref": "#/definitions/personalization-fields"
        },
        "xdm:thirdPartyContent": {
          "title": "Personalize ",
          "description": "Personalization of third-party content displayed on this brand's sites or apps is permitted",
          "$ref": "#/definitions/personalization-fields"
        },
        "xdm:advertising": {
          "title": "Personalize Ads",
          "description": "Personalization of this brand's ads on third-party sites/apps is permitted",
          "$ref": "#/definitions/personalization-fields"
        }
      }
    },
    "xdm:marketingPreferences": {
      "title": "Marketing Preferences",
      "description": "User's Direct Marketing Preferences",
      "type": "object",
      "properties": {
        "xdm:preferredChannel": {
          "title": "Preferred Channel",
          "description": "User's preferred channel for receiving communications",
          "type": "string",
          "enum": [
            "email",
            "push_notifications",
            "in_app_messages",
            "sms",
            "phone_calls",
            "physical_mail",
            "inVehicle_messages",
            "in_home_messages",
            "iot_messages",
            "social_media",
            "other",
            "none",
            "unknown"
          ],
          "meta:enum": {
            "email": "email",
            "push_notifications": "Push Notifications",
            "in_app_messages": "In-app Messages",
            "sms": "SMS (Text Messages)",
            "phone_calls": "Phone Calls",
            "physical_mail": "Physical Mail",
            "inVehicle_messages": "In-vehicle Messages",
            "in_home_messages": "In-home Messages",
            "iot": "IoT Messages",
            "social_media": "Social Media",
            "other": "Other",
            "no_preferred": "No Preferred Channel",
            "unknown": "Unknown"
          }
        },
        "xdm:anyMarketing": {
          "title": "General Direct Marketing Preference",
          "description": "Does user permit any type of direct marketing",
          "$ref": "#/definitions/marketing-fields"
        },
        "xdm:email": {
          "title": "Receive email",
          "description": "User agrees to receive email",
          "$ref": "#/definitions/marketing-fields"
        },
        "xdm:physicalMail": {
          "title": "Receive physical mail",
          "description": "User agrees to being contacted via traditional/physical mail.",
          "$ref": "#/definitions/marketing-fields"
        },
        "xdm:pushNotifications": {
          "title": "Receive push notifications",
          "description": "User permits receiving push notifications",
          "$ref": "#/definitions/marketing-fields"
        },
        "xdm:sms": {
          "title": "Receive SMS",
          "description": "User agrees to receive text messages",
          "$ref": "#/definitions/marketing-fields"
        },
        "xdm:phoneCalls": {
          "title": "Receive phone calls",
          "description": "The brand may contact the user via phone",
          "$ref": "#/definitions/marketing-fields"
        },
        "xdm:iotMessages": {
          "title": "Receive IoT messages",
          "description": "It is okay to interact with the user via IoT devices",
          "$ref": "#/definitions/marketing-fields"
        },
        "xdm:socialMedia": {
          "title": "Receive Social Media Messages",
          "description": "It is okay to send messages to the user on their social media accounts",
          "$ref": "#/definitions/marketing-fields"
        },
        "xdm:inAppMessages": {
          "title": "Receive in-app messages",
          "description": "User permits messages to be shown within the brands's apps",
          "$ref": "#/definitions/marketing-fields"
        },
        "xdm:inVehicleMessages": {
          "title": "Receive in-vehicle messages",
          "description": "It is okay to interact with the user via technology installed in the user's vehicle",
          "$ref": "#/definitions/marketing-fields"
        },
        "xdm:inHomeMessages": {
          "title": "Receive in-home messages",
          "description": "It is okay to interact with the user via technology installed in the user's home",
          "$ref": "#/definitions/marketing-fields"
        }
      }
    }
  },
  "title": "Consent and Preference Choices",
  "description": "Specific Consent and Preference Options",
  "simpletype": "complex"
}
```





## xdm:choicesMetadata
### Consent and Preference Metadata

Metadata that applies to all consents and preferences that don't specify a different value

`xdm:choicesMetadata`
* is optional
* type: complex
* defined in this schema

### xdm:choicesMetadata Type

Unknown type ``.

```json
{
  "properties": {
    "xdm:version": {
      "title": "Consent Schema Version",
      "description": "Version of the Consents and Preferences Schema",
      "type": "string",
      "pattern": "^[0-9]{1,2}\\.[0-9]{1,2}\\.[0-9]{1,4}$",
      "default": "1.0.0"
    },
    "xdm:timestamp": {
      "title": "Consent/Preferences timestamp",
      "description": "Timestamp of this complete set of user consents and preferences",
      "type": "string",
      "format": "date-time"
    },
    "xdm:source": {
      "title": "Consent/Preferences source",
      "description": "Through which interface did the user provide their choices for this complete set of user consents and preferences",
      "$ref": "#/definitions/source"
    },
    "xdm:userIDfromSource": {
      "title": "Source's ID for the user",
      "description": "Source's ID for the user",
      "type": "string",
      "maxLength": 20
    },
    "xdm:userCountryRegionCode": {
      "title": "User Country (and optionally Region) Code",
      "description": "ISO 3166 alpha2 country code or ISO 3166-2 country plus state/province code for use in helping to determine how to interpret consent values",
      "type": "string",
      "maxLength": 6,
      "pattern": "^[A-Z]{2}(-[A-Z0-9]{1,3}){0,1}$"
    },
    "xdm:countryRegionSource": {
      "title": "Country/Region Source",
      "description": "Method used to determine the user's country/region",
      "type": "string",
      "enum": [
        "ip",
        "gps",
        "user_provided",
        "website_location",
        "inferred",
        "other"
      ],
      "meta:enum": {
        "ip": "IP Address",
        "gps": "Device GPS",
        "user_provided": "User Provided",
        "website_location": "Website location or eTLD",
        "inferred": "Inferred",
        "other": "Other"
      }
    }
  },
  "title": "Consent and Preference Metadata",
  "description": "Metadata that applies to all consents and preferences that don't specify a different value",
  "simpletype": "complex"
}
```





# Privacy/Marketing Preferences (Consent) Definitions

| Property | Type | Group |
|----------|------|-------|
| [xdm:basisOfProcessing](#xdmbasisofprocessing) | reference | `https://ns.adobe.com/xdm/datatypes/consent-preferences#/definitions/marketing-fields` |
| [xdm:choice](#xdmchoice) | reference | `https://ns.adobe.com/xdm/datatypes/consent-preferences#/definitions/marketing-fields` |
| [xdm:consents](#xdmconsents) | `object` | `https://ns.adobe.com/xdm/datatypes/consent-preferences#/definitions/choices` |
| [xdm:countryRegionSource](#xdmcountryregionsource) | `enum` | `https://ns.adobe.com/xdm/datatypes/consent-preferences#/definitions/metadata` |
| [xdm:marketingPreferences](#xdmmarketingpreferences) | `object` | `https://ns.adobe.com/xdm/datatypes/consent-preferences#/definitions/choices` |
| [xdm:personalizationPreferences](#xdmpersonalizationpreferences) | `object` | `https://ns.adobe.com/xdm/datatypes/consent-preferences#/definitions/choices` |
| [xdm:reason](#xdmreason) | `string` | `https://ns.adobe.com/xdm/datatypes/consent-preferences#/definitions/marketing-fields` |
| [xdm:source](#xdmsource) | reference | `https://ns.adobe.com/xdm/datatypes/consent-preferences#/definitions/metadata` |
| [xdm:timestamp](#xdmtimestamp) | `string` | `https://ns.adobe.com/xdm/datatypes/consent-preferences#/definitions/metadata` |
| [xdm:userCountryRegionCode](#xdmusercountryregioncode) | `string` | `https://ns.adobe.com/xdm/datatypes/consent-preferences#/definitions/metadata` |
| [xdm:userIDfromSource](#xdmuseridfromsource) | `string` | `https://ns.adobe.com/xdm/datatypes/consent-preferences#/definitions/metadata` |
| [xdm:version](#xdmversion) | `string` | `https://ns.adobe.com/xdm/datatypes/consent-preferences#/definitions/metadata` |

## xdm:basisOfProcessing


`xdm:basisOfProcessing`
* is optional
* type: reference
* defined in this schema

### xdm:basisOfProcessing Type


* []() – `#/definitions/basis-of-processing`





## xdm:choice


`xdm:choice`
* is optional
* type: reference
* defined in this schema

### xdm:choice Type


* []() – `#/definitions/choice-value`





## xdm:consents
### Consents

Encapsulates user consents.

`xdm:consents`
* is optional
* type: `object`
* defined in this schema

### xdm:consents Type


`object` with following properties:


| Property | Type | Required |
|----------|------|----------|
| `xdm:dataCollection`|  | Optional |
| `xdm:deviceLinking`|  | Optional |
| `xdm:pseudonymousAnalysis`|  | Optional |
| `xdm:sellData`|  | Optional |
| `xdm:shareData`|  | Optional |



#### xdm:dataCollection
##### Data Collection

Data collection is permitted

`xdm:dataCollection`
* is optional
* type: reference

##### xdm:dataCollection Type


* []() – `#/definitions/consent-fields`







#### xdm:deviceLinking
##### Device Linking

Attempts to link multiple devices belonging to an individual or household are permitted

`xdm:deviceLinking`
* is optional
* type: reference

##### xdm:deviceLinking Type


* []() – `#/definitions/consent-fields`







#### xdm:pseudonymousAnalysis
##### Pseudonymous Analysis

Data can be used for analysis that may include an ID that may or may not be tied to an actual person

`xdm:pseudonymousAnalysis`
* is optional
* type: reference

##### xdm:pseudonymousAnalysis Type


* []() – `#/definitions/consent-fields`







#### xdm:sellData
##### Sell Data

Selling of user's Data to 2nd or 3rd parties is permitted

`xdm:sellData`
* is optional
* type: reference

##### xdm:sellData Type


* []() – `#/definitions/consent-fields`







#### xdm:shareData
##### Share Data

Sharing of user's Data with 2nd or 3rd parties is permitted

`xdm:shareData`
* is optional
* type: reference

##### xdm:shareData Type


* []() – `#/definitions/consent-fields`










## xdm:countryRegionSource
### Country/Region Source

Method used to determine the user's country/region

`xdm:countryRegionSource`
* is optional
* type: `enum`
* defined in this schema

The value of this property **must** be equal to one of the [known values below](#xdmcountryregionsource-known-values).

### xdm:countryRegionSource Known Values
| Value | Description |
|-------|-------------|
| `ip` | IP Address |
| `gps` | Device GPS |
| `user_provided` | User Provided |
| `website_location` | Website location or eTLD |
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
| `xdm:anyMarketing`|  | Optional |
| `xdm:email`|  | Optional |
| `xdm:inAppMessages`|  | Optional |
| `xdm:inHomeMessages`|  | Optional |
| `xdm:inVehicleMessages`|  | Optional |
| `xdm:iotMessages`|  | Optional |
| `xdm:phoneCalls`|  | Optional |
| `xdm:physicalMail`|  | Optional |
| `xdm:preferredChannel`| string | Optional |
| `xdm:pushNotifications`|  | Optional |
| `xdm:sms`|  | Optional |
| `xdm:socialMedia`|  | Optional |



#### xdm:anyMarketing
##### General Direct Marketing Preference

Does user permit any type of direct marketing

`xdm:anyMarketing`
* is optional
* type: reference

##### xdm:anyMarketing Type


* []() – `#/definitions/marketing-fields`







#### xdm:email
##### Receive email

User agrees to receive email

`xdm:email`
* is optional
* type: reference

##### xdm:email Type


* []() – `#/definitions/marketing-fields`







#### xdm:inAppMessages
##### Receive in-app messages

User permits messages to be shown within the brands's apps

`xdm:inAppMessages`
* is optional
* type: reference

##### xdm:inAppMessages Type


* []() – `#/definitions/marketing-fields`







#### xdm:inHomeMessages
##### Receive in-home messages

It is okay to interact with the user via technology installed in the user's home

`xdm:inHomeMessages`
* is optional
* type: reference

##### xdm:inHomeMessages Type


* []() – `#/definitions/marketing-fields`







#### xdm:inVehicleMessages
##### Receive in-vehicle messages

It is okay to interact with the user via technology installed in the user's vehicle

`xdm:inVehicleMessages`
* is optional
* type: reference

##### xdm:inVehicleMessages Type


* []() – `#/definitions/marketing-fields`







#### xdm:iotMessages
##### Receive IoT messages

It is okay to interact with the user via IoT devices

`xdm:iotMessages`
* is optional
* type: reference

##### xdm:iotMessages Type


* []() – `#/definitions/marketing-fields`







#### xdm:phoneCalls
##### Receive phone calls

The brand may contact the user via phone

`xdm:phoneCalls`
* is optional
* type: reference

##### xdm:phoneCalls Type


* []() – `#/definitions/marketing-fields`







#### xdm:physicalMail
##### Receive physical mail

User agrees to being contacted via traditional/physical mail.

`xdm:physicalMail`
* is optional
* type: reference

##### xdm:physicalMail Type


* []() – `#/definitions/marketing-fields`







#### xdm:preferredChannel
##### Preferred Channel

User's preferred channel for receiving communications

`xdm:preferredChannel`
* is optional
* type: `enum`

The value of this property **must** be equal to one of the [known values below](#xdmmarketingpreferences-known-values).

##### xdm:preferredChannel Known Values
| Value | Description |
|-------|-------------|
| `email` | email |
| `push_notifications` | Push Notifications |
| `in_app_messages` | In-app Messages |
| `sms` | SMS (Text Messages) |
| `phone_calls` | Phone Calls |
| `physical_mail` | Physical Mail |
| `inVehicle_messages` | In-vehicle Messages |
| `in_home_messages` | In-home Messages |
| `iot` | IoT Messages |
| `social_media` | Social Media |
| `other` | Other |
| `no_preferred` | No Preferred Channel |
| `unknown` | Unknown |
| `iot_messages` |  |
| `none` |  |






#### xdm:pushNotifications
##### Receive push notifications

User permits receiving push notifications

`xdm:pushNotifications`
* is optional
* type: reference

##### xdm:pushNotifications Type


* []() – `#/definitions/marketing-fields`







#### xdm:sms
##### Receive SMS

User agrees to receive text messages

`xdm:sms`
* is optional
* type: reference

##### xdm:sms Type


* []() – `#/definitions/marketing-fields`







#### xdm:socialMedia
##### Receive Social Media Messages

It is okay to send messages to the user on their social media accounts

`xdm:socialMedia`
* is optional
* type: reference

##### xdm:socialMedia Type


* []() – `#/definitions/marketing-fields`










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
| `xdm:advertising`|  | Optional |
| `xdm:anyPersonalization`|  | Optional |
| `xdm:content`|  | Optional |
| `xdm:customerSupport`|  | Optional |
| `xdm:email`|  | Optional |
| `xdm:inAppMessages`|  | Optional |
| `xdm:inHome`|  | Optional |
| `xdm:inStore`|  | Optional |
| `xdm:inVehicle`|  | Optional |
| `xdm:iotDevices`|  | Optional |
| `xdm:offers`|  | Optional |
| `xdm:phoneCalls`|  | Optional |
| `xdm:physicalMail`|  | Optional |
| `xdm:pushNotifications`|  | Optional |
| `xdm:sms`|  | Optional |
| `xdm:socialMedia`|  | Optional |
| `xdm:thirdPartyContent`|  | Optional |
| `xdm:thirdPartyOffers`|  | Optional |



#### xdm:advertising
##### Personalize Ads

Personalization of this brand's ads on third-party sites/apps is permitted

`xdm:advertising`
* is optional
* type: reference

##### xdm:advertising Type


* []() – `#/definitions/personalization-fields`







#### xdm:anyPersonalization
##### General Personalization Preference

Is permission granted to perform any type of personalization

`xdm:anyPersonalization`
* is optional
* type: reference

##### xdm:anyPersonalization Type


* []() – `#/definitions/personalization-fields`







#### xdm:content
##### Personalize content

Allow personalization of the content on my site or in my apps

`xdm:content`
* is optional
* type: reference

##### xdm:content Type


* []() – `#/definitions/personalization-fields`







#### xdm:customerSupport
##### Personalize customer support

Allow customer support to personalize responses/suggestions based on user's interests or behavior

`xdm:customerSupport`
* is optional
* type: reference

##### xdm:customerSupport Type


* []() – `#/definitions/personalization-fields`







#### xdm:email
##### Personalize email

Allow personalization of emails sent to the user

`xdm:email`
* is optional
* type: reference

##### xdm:email Type


* []() – `#/definitions/personalization-fields`







#### xdm:inAppMessages
##### Personalize in-app messages

Allow personalization of messages displayed within my apps

`xdm:inAppMessages`
* is optional
* type: reference

##### xdm:inAppMessages Type


* []() – `#/definitions/personalization-fields`







#### xdm:inHome
##### Personalize in-home

Personalization of in-home experiences is permitted

`xdm:inHome`
* is optional
* type: reference

##### xdm:inHome Type


* []() – `#/definitions/personalization-fields`







#### xdm:inStore
##### Personalize in-store

Personalization of in-store experiences is permitted

`xdm:inStore`
* is optional
* type: reference

##### xdm:inStore Type


* []() – `#/definitions/personalization-fields`







#### xdm:inVehicle
##### Personalize in-vehicle

Personalization of in-vehicle experiences is permitted

`xdm:inVehicle`
* is optional
* type: reference

##### xdm:inVehicle Type


* []() – `#/definitions/personalization-fields`







#### xdm:iotDevices
##### Personalize IoT Devices

Personalization of interactions with IoT devices is permitted

`xdm:iotDevices`
* is optional
* type: reference

##### xdm:iotDevices Type


* []() – `#/definitions/personalization-fields`







#### xdm:offers
##### Personalize Offers

Allow personalization of 1st-party offers displayed on this site or with this app

`xdm:offers`
* is optional
* type: reference

##### xdm:offers Type


* []() – `#/definitions/personalization-fields`







#### xdm:phoneCalls
##### Personalize phone calls

Allow phone calls that the brand initiates to be personalized based on the user's interests or behavior

`xdm:phoneCalls`
* is optional
* type: reference

##### xdm:phoneCalls Type


* []() – `#/definitions/personalization-fields`







#### xdm:physicalMail
##### Personalize physical mail

Allow personalization of offers sent via traditional/physical mail

`xdm:physicalMail`
* is optional
* type: reference

##### xdm:physicalMail Type


* []() – `#/definitions/personalization-fields`







#### xdm:pushNotifications
##### Personalize push notifications

Personalization of push notifications is permitted

`xdm:pushNotifications`
* is optional
* type: reference

##### xdm:pushNotifications Type


* []() – `#/definitions/personalization-fields`







#### xdm:sms
##### Personalize SMS

Personalization of text messages is permitted

`xdm:sms`
* is optional
* type: reference

##### xdm:sms Type


* []() – `#/definitions/personalization-fields`







#### xdm:socialMedia
##### Personalize Social Media

Personalization of interactions on Social Media sites/apps is permitted

`xdm:socialMedia`
* is optional
* type: reference

##### xdm:socialMedia Type


* []() – `#/definitions/personalization-fields`







#### xdm:thirdPartyContent
##### Personalize 

Personalization of third-party content displayed on this brand's sites or apps is permitted

`xdm:thirdPartyContent`
* is optional
* type: reference

##### xdm:thirdPartyContent Type


* []() – `#/definitions/personalization-fields`







#### xdm:thirdPartyOffers
##### Personalize 

Personalization of third-party offers/ads displayed on this brand's sites or apps is permitted

`xdm:thirdPartyOffers`
* is optional
* type: reference

##### xdm:thirdPartyOffers Type


* []() – `#/definitions/personalization-fields`










## xdm:reason
### Opt out reason

Reason for opting out

`xdm:reason`
* is optional
* type: `string`
* defined in this schema

### xdm:reason Type


`string`

* maximum length: 20 characters





## xdm:source
### Consent/Preferences source

Through which interface did the user provide their choices for this complete set of user consents and preferences

`xdm:source`
* is optional
* type: reference
* defined in this schema

### xdm:source Type


* []() – `#/definitions/source`





## xdm:timestamp
### Consent/Preferences timestamp

Timestamp of this complete set of user consents and preferences

`xdm:timestamp`
* is optional
* type: `string`
* defined in this schema

### xdm:timestamp Type


`string`
* format: `date-time` – date and time (according to [RFC 3339, section 5.6](http://tools.ietf.org/html/rfc3339))






## xdm:userCountryRegionCode
### User Country (and optionally Region) Code

ISO 3166 alpha2 country code or ISO 3166-2 country plus state/province code for use in helping to determine how to interpret consent values

`xdm:userCountryRegionCode`
* is optional
* type: `string`
* defined in this schema

### xdm:userCountryRegionCode Type


`string`

* maximum length: 6 characters
All instances must conform to this regular expression 
(test examples [here](https://regexr.com/?expression=%5E%5BA-Z%5D%7B2%7D(-%5BA-Z0-9%5D%7B1%2C3%7D)%7B0%2C1%7D%24)):
```regex
^[A-Z]{2}(-[A-Z0-9]{1,3}){0,1}$
```






## xdm:userIDfromSource
### Source&#39;s ID for the user

Source's ID for the user

`xdm:userIDfromSource`
* is optional
* type: `string`
* defined in this schema

### xdm:userIDfromSource Type


`string`

* maximum length: 20 characters





## xdm:version
### Consent Schema Version

Version of the Consents and Preferences Schema

`xdm:version`
* is optional
* type: `string`
* default: `"1.0.0"`
* defined in this schema

### xdm:version Type


`string`


All instances must conform to this regular expression 
(test examples [here](https://regexr.com/?expression=%5E%5B0-9%5D%7B1%2C2%7D%5C.%5B0-9%5D%7B1%2C2%7D%5C.%5B0-9%5D%7B1%2C4%7D%24)):
```regex
^[0-9]{1,2}\.[0-9]{1,2}\.[0-9]{1,4}$
```





