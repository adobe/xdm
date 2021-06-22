
# XDM Business Opportunity Components Schema

```
https://ns.adobe.com/xdm/mixins/opportunity-components
```

This Mixin is used to capture B2B Opportunity specific relationship attributes that are represented as it is in source and also used for merge/unmerge rules analysis if and when needed 

| [Abstract](../../../abstract.md) | [Extensible](../../../extensions.md) | [Status](../../../status.md) | [Identifiable](../../../id.md) | [Custom Properties](../../../extensions.md) | [Additional Properties](../../../extensions.md) | Defined In |
|----------------------------------|--------------------------------------|------------------------------|--------------------------------|---------------------------------------------|-------------------------------------------------|------------|
| Can be instantiated | Yes | Deprecated | No | Forbidden | Permitted | [fieldgroups/opportunity/opportunity-components.schema.json](fieldgroups/opportunity/opportunity-components.schema.json) |

## XDM Business Opportunity Components Example
```json
{
  "xdm:sourceOpportunityID": "1234trbkg8",
  "xdm:sourceAccountID": "A669790t",
  "xdm:sourceExternalID": "uu89073",
  "xdm:sourceOpportunityOwnerID": "uhhlkbt49",
  "xdm:sourceCampaignID": "0098hodw"
}
```

# XDM Business Opportunity Components Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [xdm:opportunityComponents](#xdmopportunitycomponents) | `object[]` | Optional | XDM Business Opportunity Components (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## xdm:opportunityComponents


`xdm:opportunityComponents`
* is optional
* type: `object[]`

* defined in this schema

### xdm:opportunityComponents Type


Array type: `object[]`

All items must be of the type:
`object` with following properties:


| Property | Type | Required |
|----------|------|----------|
| `xdm:sourceAccountID`|  | Optional |
| `xdm:sourceCampaignID`|  | Optional |
| `xdm:sourceExternalID`|  | Optional |
| `xdm:sourceOpportunityID`|  | Optional |
| `xdm:sourceOpportunityOwnerID`|  | Optional |



#### xdm:sourceAccountID
##### Source Account ID

Account unique identifier at the source.

`xdm:sourceAccountID`
* is optional
* type: reference

##### xdm:sourceAccountID Type


* []() – `https://ns.adobe.com/xdm/datatypes/b2b-source`







#### xdm:sourceCampaignID
##### Source Campaign ID

Campaign unique identifier at the source.

`xdm:sourceCampaignID`
* is optional
* type: reference

##### xdm:sourceCampaignID Type


* []() – `https://ns.adobe.com/xdm/datatypes/b2b-source`







#### xdm:sourceExternalID
##### Source External ID

External unique identifier at the source.

`xdm:sourceExternalID`
* is optional
* type: reference

##### xdm:sourceExternalID Type


* []() – `https://ns.adobe.com/xdm/datatypes/b2b-source`







#### xdm:sourceOpportunityID
##### Source Opportunity ID

Opportunity unique identifier at source.

`xdm:sourceOpportunityID`
* is optional
* type: reference

##### xdm:sourceOpportunityID Type


* []() – `https://ns.adobe.com/xdm/datatypes/b2b-source`







#### xdm:sourceOpportunityOwnerID
##### Source Opportunity Owner ID

Opportunity owner unique identifier at the source.

`xdm:sourceOpportunityOwnerID`
* is optional
* type: reference

##### xdm:sourceOpportunityOwnerID Type


* []() – `https://ns.adobe.com/xdm/datatypes/b2b-source`











