
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
| `xdm:personSegmentTraits`| object | Optional |
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
* type: `object`

##### xdm:personSegmentTraits Type

Unknown type `object`.

```json
{
  "title": "Person Segmentation Attributes",
  "description": "These attributes are required to build predicates for person segmentation.",
  "type": "object",
  "properties": {
    "xdm:personType": {
      "title": "Person Type",
      "description": "Type of the B2B person.",
      "type": "string"
    },
    "xdm:personStatus": {
      "title": "Person Status",
      "description": "Field recording the current marketing/sales status of the Person.",
      "type": "string"
    },
    "xdm:personSource": {
      "title": "Person Source",
      "description": "Source from where the information regarding the person was received.",
      "type": "string"
    },
    "xdm:personScore": {
      "title": "Person Score",
      "description": "A Score generated for a person by the CRM system.",
      "type": "number"
    },
    "xdm:personGroupID": {
      "title": "Person Group ID",
      "description": "Group identifier for the person.",
      "type": "string"
    },
    "xdm:leadOrganization": {
      "title": "Lead Organization Properties",
      "$ref": "https://ns.adobe.com/xdm/datatypes/b2b-account-organization"
    },
    "xdm:anonymousHostname": {
      "title": "Anonymous Hostname",
      "description": "Anonymous hostname.",
      "type": "string"
    },
    "xdm:inferredAddress": {
      "title": "Inferred Address",
      "description": "Address details inferred by reverse IP lookup of the lead’s first recorded web visit.",
      "$ref": "https://ns.adobe.com/xdm/common/address"
    },
    "xdm:inferredCompany": {
      "title": "Inferred Company",
      "description": "Company name inferred by reverse IP lookup of the lead’s first recorded web visit.",
      "type": "string"
    },
    "xdm:inferredCompanyStatus": {
      "title": "Inferred Company Status",
      "description": "Status of the company name inferred by reverse IP lookup of the lead’s first recorded web visit.",
      "type": "string"
    },
    "xdm:inferredMetropolitanArea": {
      "title": "Inferred Metropolitan Area",
      "description": "Metropolitan area inferred by reverse IP lookup of lead’s first recorded web visit.",
      "type": "string"
    },
    "xdm:inferredPhoneAreaCode": {
      "title": "Inferred Phone Area Code",
      "description": "Phone area code inferred by reverse IP lookup of lead’s first recorded web visit.",
      "type": "string"
    }
  },
  "simpletype": "`object`"
}
```







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











