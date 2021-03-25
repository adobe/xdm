
# User Account Details Schema

```
https://ns.adobe.com/xdm/mixins/profile/profile-user-account-details
```



| [Abstract](../../../abstract.md) | [Extensible](../../../extensions.md) | [Status](../../../status.md) | [Identifiable](../../../id.md) | [Custom Properties](../../../extensions.md) | [Additional Properties](../../../extensions.md) | Defined In |
|----------------------------------|--------------------------------------|------------------------------|--------------------------------|---------------------------------------------|-------------------------------------------------|------------|
| Can be instantiated | Yes | Experimental | No | Forbidden | Permitted | [mixins/profile/profile-user-account-details.schema.json](mixins/profile/profile-user-account-details.schema.json) |

## User Account Details Example
```json
{
  "xdm:userAccount": {
    "xdm:ID": "X87321",
    "xdm:accountType": "personal"
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
| `xdm:ID`| string | Optional |
| `xdm:accountType`| string | Optional |
| `xdm:contactDetails`|  | Optional |
| `xdm:preferences`| array | Optional |
| `xdm:startDate`| string | Optional |
| `xdm:status`| string | Optional |



#### xdm:ID
##### ID

Captures the user account ID.

`xdm:ID`
* is optional
* type: `string`

##### xdm:ID Type


`string`








#### xdm:accountType
##### Account Type

Captures the user account type, if applicable.

`xdm:accountType`
* is optional
* type: `string`

##### xdm:accountType Type


`string`








#### xdm:contactDetails
##### Contact Details

Extension of the Personal Profile data type.

`xdm:contactDetails`
* is optional
* type: reference

##### xdm:contactDetails Type


* []() – `https://ns.adobe.com/xdm/context/profile-personal-details`







#### xdm:preferences
##### Preferences

M/F, other shopping preferences. Preferences in personal profile is already captured- things like perferred method of contact, not shopping prefs. 

`xdm:preferences`
* is optional
* type: `string[]`


##### xdm:preferences Type


Array type: `string[]`

All items must be of the type:
`string`











#### xdm:startDate
##### Start Date

Date when the account was opened.

`xdm:startDate`
* is optional
* type: `string`

##### xdm:startDate Type


`string`
* format: `date-time` – date and time (according to [RFC 3339, section 5.6](http://tools.ietf.org/html/rfc3339))








#### xdm:status
##### Status

This should describe the current status of the account

`xdm:status`
* is optional
* type: `enum`

The value of this property **must** be equal to one of the [known values below](#xdmuseraccount-known-values).

##### xdm:status Known Values
| Value | Description |
|-------|-------------|
| `active` |  |
| `inactive` |  |
| `disabled` |  |
| `other` |  |








