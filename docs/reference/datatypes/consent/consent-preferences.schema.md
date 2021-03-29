
# Consent for Privacy, Personalization and Marketing Preferences Schema

```
https://ns.adobe.com/xdm/datatypes/consents-and-preferences
```

This mixin captures consumer consent for collection and use of data related to privacy, personalization and marketing preferences.

| [Abstract](../../../abstract.md) | [Extensible](../../../extensions.md) | [Status](../../../status.md) | [Identifiable](../../../id.md) | [Custom Properties](../../../extensions.md) | [Additional Properties](../../../extensions.md) | Defined In |
|----------------------------------|--------------------------------------|------------------------------|--------------------------------|---------------------------------------------|-------------------------------------------------|------------|
| Can be instantiated | Yes | Stable | No | Forbidden | Permitted | [datatypes/consent/consent-preferences.schema.json](datatypes/consent/consent-preferences.schema.json) |

## Consent for Privacy, Personalization and Marketing Preferences Example
```json
{
  "xdm:consents": {
    "xdm:collect": {
      "xdm:val": "y"
    },
    "xdm:adID": {
      "xdm:val": "VI"
    },
    "xdm:share": {
      "xdm:val": "n"
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
      },
      "xdm:push": {
        "xdm:val": "n",
        "xdm:reason": "Too Frequent"
      }
    },
    "xdm:metadata": {
      "xdm:time": "2019-01-01T15:52:25+00:00"
    }
  }
}
```

# Consent for Privacy, Personalization and Marketing Preferences Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [xdm:consents](#xdmconsents) | `object` | Optional | Consent for Privacy, Personalization and Marketing Preferences (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## xdm:consents
### Consents and Preferences

Specific Consent and Preference Options

`xdm:consents`
* is optional
* type: `object`
* defined in this schema

### xdm:consents Type


`object` with following properties:


| Property | Type | Required |
|----------|------|----------|
| `xdm:adID`|  | Optional |
| `xdm:collect`|  | Optional |
| `xdm:marketing`|  | Optional |
| `xdm:metadata`|  | Optional |
| `xdm:personalize`|  | Optional |
| `xdm:share`|  | Optional |



#### xdm:adID
##### Use Advertiser ID

The Advertiser ID (IDFA / AAID) can be used to link user across apps on this device

`xdm:adID`
* is optional
* type: reference

##### xdm:adID Type


* []() – `#/definitions/consent-field`







#### xdm:collect
##### Data Collection

Data collection is permitted

`xdm:collect`
* is optional
* type: reference

##### xdm:collect Type


* []() – `#/definitions/consent-field`







#### xdm:marketing

undefined

`xdm:marketing`
* is optional
* type: reference

##### xdm:marketing Type


* []() – `#/definitions/base-marketing`







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










# Consent for Privacy, Personalization and Marketing Preferences Definitions

| Property | Type | Group |
|----------|------|-------|
| [xdm:any](#xdmany) | reference | `https://ns.adobe.com/xdm/datatypes/consents-and-preferences#/definitions/base-marketing-with-subscriptions` |
| [xdm:content](#xdmcontent) | reference | `https://ns.adobe.com/xdm/datatypes/consents-and-preferences#/definitions/base-personalization` |
| [xdm:email](#xdmemail) | reference | `https://ns.adobe.com/xdm/datatypes/consents-and-preferences#/definitions/idSpecific-marketing` |
| [xdm:preferred](#xdmpreferred) | `enum` | `https://ns.adobe.com/xdm/datatypes/consents-and-preferences#/definitions/base-marketing-with-subscriptions` |
| [xdm:push](#xdmpush) | reference | `https://ns.adobe.com/xdm/datatypes/consents-and-preferences#/definitions/idSpecific-marketing` |
| [xdm:reason](#xdmreason) | reference | `https://ns.adobe.com/xdm/datatypes/consents-and-preferences#/definitions/marketing-with-subscriptions` |
| [xdm:sms](#xdmsms) | reference | `https://ns.adobe.com/xdm/datatypes/consents-and-preferences#/definitions/idSpecific-marketing` |
| [xdm:subscriptions](#xdmsubscriptions) | reference | `https://ns.adobe.com/xdm/datatypes/consents-and-preferences#/definitions/marketing-with-subscriptions` |
| [xdm:time](#xdmtime) | `string` | `https://ns.adobe.com/xdm/datatypes/consents-and-preferences#/definitions/metadata` |
| [xdm:val](#xdmval) | reference | `https://ns.adobe.com/xdm/datatypes/consents-and-preferences#/definitions/marketing-with-subscriptions` |

## xdm:any
### General Direct Marketing Preference

Does user permit any type of direct marketing

`xdm:any`
* is optional
* type: reference
* defined in this schema

### xdm:any Type


* []() – `#/definitions/marketing-field`





## xdm:content
### Personalize Content

Allow personalization of the content on my site or in my apps

`xdm:content`
* is optional
* type: reference
* defined in this schema

### xdm:content Type


* []() – `#/definitions/personalization-field`





## xdm:email
### Receive email

User agrees to receive email

`xdm:email`
* is optional
* type: reference
* defined in this schema

### xdm:email Type


* []() – `#/definitions/marketing-field`





## xdm:preferred
### Preferred Channel

User's preferred channel for receiving communications

`xdm:preferred`
* is optional
* type: `enum`
* defined in this schema

The value of this property **must** be equal to one of the [known values below](#xdmpreferred-known-values).

### xdm:preferred Known Values
| Value | Description |
|-------|-------------|
| `email` | email |
| `push` | Push Notifications |
| `inApp` | In-app Messages |
| `sms` | SMS (Text Messages) |
| `phone` | Phone Calls |
| `phyMail` | Physical Mail |
| `inVehicle` | In-vehicle Messages |
| `inHome` | In-home Messages |
| `iot` | IoT Messages |
| `social` | Social Media |
| `other` | Other |
| `none` | No Preferred Channel |
| `unknown` | Unknown |




## xdm:push
### Receive push notifications

User permits receiving push notifications

`xdm:push`
* is optional
* type: reference
* defined in this schema

### xdm:push Type


* []() – `#/definitions/marketing-field`





## xdm:reason


`xdm:reason`
* is optional
* type: reference
* defined in this schema

### xdm:reason Type


* []() – `#/definitions/reason`





## xdm:sms
### Receive SMS

User agrees to receive text messages

`xdm:sms`
* is optional
* type: reference
* defined in this schema

### xdm:sms Type


* []() – `#/definitions/marketing-field`





## xdm:subscriptions


`xdm:subscriptions`
* is optional
* type: reference
* defined in this schema

### xdm:subscriptions Type


* []() – `#/definitions/subscriptions`





## xdm:time
### Consent/Preferences timestamp

Timestamp of this complete set of user consents and preferences. This value should conform to ISO 8601 standard. An example form is "2004-10-23T12:00:00-06:00".

`xdm:time`
* is optional
* type: `string`
* defined in this schema

### xdm:time Type


`string`
* format: `date-time` – date and time (according to [RFC 3339, section 5.6](http://tools.ietf.org/html/rfc3339))






## xdm:val


`xdm:val`
* is optional
* type: reference
* defined in this schema

### xdm:val Type


* []() – `#/definitions/choice-value`




