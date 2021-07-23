
# XDM Business Opportunity Person Relation Components Schema

```
https://ns.adobe.com/xdm/mixins/opportunity-person-components
```

XDM business opportunity person relation component details.

| [Abstract](../../../abstract.md) | [Extensible](../../../extensions.md) | [Status](../../../status.md) | [Identifiable](../../../id.md) | [Custom Properties](../../../extensions.md) | [Additional Properties](../../../extensions.md) | Defined In |
|----------------------------------|--------------------------------------|------------------------------|--------------------------------|---------------------------------------------|-------------------------------------------------|------------|
| Can be instantiated | Yes | Deprecated | No | Forbidden | Permitted | [fieldgroups/opportunity/opportunity-person-components.schema.json](fieldgroups/opportunity/opportunity-person-components.schema.json) |

## XDM Business Opportunity Person Relation Components Example
```json
{}
```

# XDM Business Opportunity Person Relation Components Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [xdm:opportunityPersonComponents](#xdmopportunitypersoncomponents) | `object[]` | Optional | XDM Business Opportunity Person Relation Components (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## xdm:opportunityPersonComponents


`xdm:opportunityPersonComponents`
* is optional
* type: `object[]`

* defined in this schema

### xdm:opportunityPersonComponents Type


Array type: `object[]`

All items must be of the type:
`object` with following properties:


| Property | Type | Required |
|----------|------|----------|
| `xdm:personRole`| string | Optional |
| `xdm:sourceExternalID`|  | Optional |
| `xdm:sourceOpportunityID`|  | Optional |
| `xdm:sourceOpportunityPersonID`|  | Optional |
| `xdm:sourcePersonID`|  | Optional |



#### xdm:personRole
##### Person Role

Role of the person pertaining to this opportunity

`xdm:personRole`
* is optional
* type: `string`

##### xdm:personRole Type


`string`








#### xdm:sourceExternalID
##### Source External ID

External source unique identifier at the source.

`xdm:sourceExternalID`
* is optional
* type: reference

##### xdm:sourceExternalID Type


* []() – `https://ns.adobe.com/xdm/datatypes/b2b-source`







#### xdm:sourceOpportunityID
##### Source Opportunity ID

Opportunity unique identifier at the source.

`xdm:sourceOpportunityID`
* is optional
* type: reference

##### xdm:sourceOpportunityID Type


* []() – `https://ns.adobe.com/xdm/datatypes/b2b-source`







#### xdm:sourceOpportunityPersonID
##### Source Opportunity Person ID

Opportunity person relationship unique identifier at the source.

`xdm:sourceOpportunityPersonID`
* is optional
* type: reference

##### xdm:sourceOpportunityPersonID Type


* []() – `https://ns.adobe.com/xdm/datatypes/b2b-source`







#### xdm:sourcePersonID
##### Source Person ID

Person unique identifer at the source .

`xdm:sourcePersonID`
* is optional
* type: reference

##### xdm:sourcePersonID Type


* []() – `https://ns.adobe.com/xdm/datatypes/b2b-source`











