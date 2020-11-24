
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
| `xdm:personSegmentTraits`|  | Optional |
| `xdm:sourceAccountID`|  | Optional |
| `xdm:sourceConvertedAccountID`|  | Optional |
| `xdm:sourceConvertedContactID`|  | Optional |
| `xdm:sourceConvertedOpportunityID`|  | Optional |
| `xdm:sourceExternalID`|  | Optional |
| `xdm:sourcePersonID`|  | Optional |
| `xdm:sourcePersonOwnerID`|  | Optional |
| `xdm:workEmail`|  | Optional |



#### xdm:personSegmentTraits
##### Person Segmentation Attributes

These attributes are required to build predicates for person segmentation.

`xdm:personSegmentTraits`
* is optional
* type: complex

##### xdm:personSegmentTraits Type


**All** of the following *requirements* need to be fulfilled.


#### Requirement 1


* []() – `https://ns.adobe.com/xdm/mixins/b2b-person-details#/definitions/b2b-person-segment-traits`


#### Requirement 2


* []() – `https://ns.adobe.com/xdm/mixins/profile-inferred-person#/definitions/profile-inferred-person`








#### xdm:sourceAccountID
##### Source Account ID

Source account ID.

`xdm:sourceAccountID`
* is optional
* type: reference

##### xdm:sourceAccountID Type


* []() – `https://ns.adobe.com/xdm/datatypes/b2b-source`







#### xdm:sourceConvertedAccountID
##### Source Converted Account ID

Source converted account ID.

`xdm:sourceConvertedAccountID`
* is optional
* type: reference

##### xdm:sourceConvertedAccountID Type


* []() – `https://ns.adobe.com/xdm/datatypes/b2b-source`







#### xdm:sourceConvertedContactID
##### Source Converted Contact ID

Source converted contact ID.

`xdm:sourceConvertedContactID`
* is optional
* type: reference

##### xdm:sourceConvertedContactID Type


* []() – `https://ns.adobe.com/xdm/datatypes/b2b-source`







#### xdm:sourceConvertedOpportunityID
##### Source Converted Opportunity ID

Source converted opportunity ID.

`xdm:sourceConvertedOpportunityID`
* is optional
* type: reference

##### xdm:sourceConvertedOpportunityID Type


* []() – `https://ns.adobe.com/xdm/datatypes/b2b-source`







#### xdm:sourceExternalID
##### Source External ID

External source unique identifier at the source.

`xdm:sourceExternalID`
* is optional
* type: reference

##### xdm:sourceExternalID Type


* []() – `https://ns.adobe.com/xdm/datatypes/b2b-source`







#### xdm:sourcePersonID
##### Source Person ID

Source person ID.

`xdm:sourcePersonID`
* is optional
* type: reference

##### xdm:sourcePersonID Type


* []() – `https://ns.adobe.com/xdm/datatypes/b2b-source`







#### xdm:sourcePersonOwnerID
##### Source Person Owner ID

Source person owner identifier.

`xdm:sourcePersonOwnerID`
* is optional
* type: reference

##### xdm:sourcePersonOwnerID Type


* []() – `https://ns.adobe.com/xdm/datatypes/b2b-source`







#### xdm:workEmail
##### Email ID of B2B Person

undefined

`xdm:workEmail`
* is optional
* type: reference

##### xdm:workEmail Type


* []() – `https://ns.adobe.com/xdm/context/emailaddress`











