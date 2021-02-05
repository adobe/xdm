
# User Account Details Schema

```
https://ns.adobe.com/xdm/mixins/experienceevent-user-account-details
```



| [Abstract](../../../abstract.md) | [Extensible](../../../extensions.md) | [Status](../../../status.md) | [Identifiable](../../../id.md) | [Custom Properties](../../../extensions.md) | [Additional Properties](../../../extensions.md) | Defined In |
|----------------------------------|--------------------------------------|------------------------------|--------------------------------|---------------------------------------------|-------------------------------------------------|------------|
| Can be instantiated | Yes | Experimental | No | Forbidden | Permitted | [mixins/experience-event/experienceevent-user-account-details.schema.json](mixins/experience-event/experienceevent-user-account-details.schema.json) |

## User Account Details Example
```json
{
  "xdm:userAccount": {
    "xdm:userAccountID": "X87321",
    "xdm:userAccountType": "personal",
    "xdm:userAccountRegistration": {
      "xdm:tool-usage": {
        "xdm:toolUsageCancelled": 1,
        "xdm:toolUsageComplete": 1,
        "xdm:toolUsageFailure": 1,
        "xdm:toolUsageID": "T421",
        "xdm:toolUsageName": "calculator",
        "xdm:toolUsageSaved": 1,
        "xdm:toolUsageStart": 1,
        "xdm:toolUsageStep": 1,
        "xdm:toolUsageStepName": "enter parameters",
        "xdm:toolUsageSubmitted": 1,
        "xdm:toolUsageType": "generic"
      }
    }
  }
}
```

# User Account Details Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [xdm:userAccount](#xdmuseraccount) | `object` | Optional | User Account Details (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## xdm:userAccount


`xdm:userAccount`
* is optional
* type: `object`
* defined in this schema

### xdm:userAccount Type


`object` with following properties:


| Property | Type | Required |
|----------|------|----------|
| `xdm:userAccountID`| string | Optional |
| `xdm:userAccountPersonalDetails`|  | Optional |
| `xdm:userAccountPreferences`| array | Optional |
| `xdm:userAccountRegistration`|  | Optional |
| `xdm:userAccountStart`| string | Optional |
| `xdm:userAccountStatus`| string | Optional |
| `xdm:userAccountSwitch`| integer | Optional |
| `xdm:userAccountType`| string | Optional |



#### xdm:userAccountID
##### User Account ID

Captures the user account ID.

`xdm:userAccountID`
* is optional
* type: `string`

##### xdm:userAccountID Type


`string`








#### xdm:userAccountPersonalDetails
##### User Account Personal Details

Extension of the Personal Profile data type.

`xdm:userAccountPersonalDetails`
* is optional
* type: reference

##### xdm:userAccountPersonalDetails Type


* []() – `https://ns.adobe.com/xdm/context/profile-personal-details`







#### xdm:userAccountPreferences
##### User Account Preferences

M/F, other shopping preferences. Preferences in personal profile is already captured- things like perferred method of contact, not shopping prefs. 

`xdm:userAccountPreferences`
* is optional
* type: `string[]`


##### xdm:userAccountPreferences Type


Array type: `string[]`

All items must be of the type:
`string`











#### xdm:userAccountRegistration
##### User Account Registration

Extension of toolUsage data type.

`xdm:userAccountRegistration`
* is optional
* type: reference

##### xdm:userAccountRegistration Type


* []() – `https://ns.adobe.com/xdm/datatypes/tool-usage`







#### xdm:userAccountStart
##### User Account Start Date

Date when the account was opened.

`xdm:userAccountStart`
* is optional
* type: `string`

##### xdm:userAccountStart Type


`string`
* format: `date-time` – date and time (according to [RFC 3339, section 5.6](http://tools.ietf.org/html/rfc3339))








#### xdm:userAccountStatus
##### User Account Status

This should describe the current status of the account

`xdm:userAccountStatus`
* is optional
* type: `enum`

The value of this property **must** be equal to one of the [known values below](#xdmuseraccount-known-values).

##### xdm:userAccountStatus Known Values
| Value | Description |
|-------|-------------|
| `active` |  |
| `inactive` |  |
| `disabled` |  |
| `other` |  |






#### xdm:userAccountSwitch
##### Switch User Accounts

Captures when a visitor switches their account during a visit.

`xdm:userAccountSwitch`
* is optional
* type: `integer`

##### xdm:userAccountSwitch Type


`integer`








#### xdm:userAccountType
##### User Account Type

Captures the user account type, if applicable.

`xdm:userAccountType`
* is optional
* type: `string`

##### xdm:userAccountType Type


`string`










