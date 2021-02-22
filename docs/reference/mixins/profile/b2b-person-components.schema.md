
# XDM Business Person Components Schema

```
https://ns.adobe.com/xdm/mixins/b2b-person-components
```

This Mixin is used to capture B2B Person specific relationship attributes and other attributes which are required for person segmentation.

| [Abstract](../../../abstract.md) | [Extensible](../../../extensions.md) | [Status](../../../status.md) | [Identifiable](../../../id.md) | [Custom Properties](../../../extensions.md) | [Additional Properties](../../../extensions.md) | Defined In |
|----------------------------------|--------------------------------------|------------------------------|--------------------------------|---------------------------------------------|-------------------------------------------------|------------|
| Can be instantiated | Yes | Experimental | No | Forbidden | Permitted | [mixins/profile/b2b-person-components.schema.json](mixins/profile/b2b-person-components.schema.json) |
## Schema Hierarchy

* XDM Business Person Components `https://ns.adobe.com/xdm/mixins/b2b-person-components`
  * [Extensibility base schema](../../datatypes/extensible.schema.md) `https://ns.adobe.com/xdm/common/extensible`


## XDM Business Person Components Example
```json
{}
```

# XDM Business Person Components Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [xdm:personComponents](#xdmpersoncomponents) | `object[]` | Optional | XDM Business Person Components (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## xdm:personComponents


`xdm:personComponents`
* is optional
* type: `object[]`

* defined in this schema

### xdm:personComponents Type


Array type: `object[]`

All items must be of the type:
`object` with following properties:


| Property | Type | Required |
|----------|------|----------|
| `xdm:personGroupID`| string | Optional |
| `xdm:personScore`| number | Optional |
| `xdm:personSource`| string | Optional |
| `xdm:personStatus`| string | Optional |
| `xdm:personType`| string | Optional |
| `xdm:sourceAccountID`| string | Optional |
| `xdm:sourceConvertedContactID`| string | Optional |
| `xdm:sourceExternalID`| string | Optional |
| `xdm:sourcePersonID`| string | Optional |
| `xdm:workEmail`|  | Optional |



#### xdm:personGroupID
##### Person Group ID

Group identifier for the person.

`xdm:personGroupID`
* is optional
* type: `string`

##### xdm:personGroupID Type


`string`








#### xdm:personScore
##### Person Score

A Score generated for a person by the CRM system.

`xdm:personScore`
* is optional
* type: `number`

##### xdm:personScore Type


`number`








#### xdm:personSource
##### Person Source

Source from where the information regarding the person was received.

`xdm:personSource`
* is optional
* type: `string`

##### xdm:personSource Type


`string`








#### xdm:personStatus
##### Person Status

Field recording the current marketing/sales status of the Person.

`xdm:personStatus`
* is optional
* type: `string`

##### xdm:personStatus Type


`string`








#### xdm:personType
##### Person Type

Type of the B2B person.

`xdm:personType`
* is optional
* type: `string`

##### xdm:personType Type


`string`








#### xdm:sourceAccountID
##### Source Account ID

Source account ID.

`xdm:sourceAccountID`
* is optional
* type: `string`

##### xdm:sourceAccountID Type


`string`








#### xdm:sourceConvertedContactID
##### Source Converted Contact ID

Source converted contact ID.

`xdm:sourceConvertedContactID`
* is optional
* type: `string`

##### xdm:sourceConvertedContactID Type


`string`








#### xdm:sourceExternalID
##### Source External ID

External source unique identifier at the source.

`xdm:sourceExternalID`
* is optional
* type: `string`

##### xdm:sourceExternalID Type


`string`








#### xdm:sourcePersonID
##### Source Person ID

Source person ID.

`xdm:sourcePersonID`
* is optional
* type: `string`

##### xdm:sourcePersonID Type


`string`








#### xdm:workEmail
##### Work Email ID of B2B Person

undefined

`xdm:workEmail`
* is optional
* type: reference

##### xdm:workEmail Type


* []() – `https://ns.adobe.com/xdm/context/emailaddress`











