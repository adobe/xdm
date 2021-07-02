
# XDM Business Campaign Components Schema

```
https://ns.adobe.com/xdm/mixins/campaign-components
```

This mixin is used to capture b2b campaign specific relationship attributes that are represented as it is in source and also used for merge/unmerge rules analysis if and when needed.

| [Abstract](../../../abstract.md) | [Extensible](../../../extensions.md) | [Status](../../../status.md) | [Identifiable](../../../id.md) | [Custom Properties](../../../extensions.md) | [Additional Properties](../../../extensions.md) | Defined In |
|----------------------------------|--------------------------------------|------------------------------|--------------------------------|---------------------------------------------|-------------------------------------------------|------------|
| Can be instantiated | Yes | Deprecated | No | Forbidden | Permitted | [fieldgroups/campaign/campaign-components.schema.json](fieldgroups/campaign/campaign-components.schema.json) |

## XDM Business Campaign Components Example
```json
{}
```

# XDM Business Campaign Components Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [xdm:campaignComponents](#xdmcampaigncomponents) | `object[]` | Optional | XDM Business Campaign Components (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## xdm:campaignComponents


`xdm:campaignComponents`
* is optional
* type: `object[]`

* defined in this schema

### xdm:campaignComponents Type


Array type: `object[]`

All items must be of the type:
`object` with following properties:


| Property | Type | Required |
|----------|------|----------|
| `xdm:sourceCampaignID`|  | Optional |
| `xdm:sourceCampaignOwnerID`|  | Optional |
| `xdm:sourceExternalID`|  | Optional |
| `xdm:sourceParentCampaignID`|  | Optional |



#### xdm:sourceCampaignID
##### Source Campaign ID

Campaign unique identifier at source.

`xdm:sourceCampaignID`
* is optional
* type: reference

##### xdm:sourceCampaignID Type


* []() – `https://ns.adobe.com/xdm/datatypes/b2b-source`







#### xdm:sourceCampaignOwnerID
##### Source Campaign Owner ID

Campaign owner unique identifier at the source.

`xdm:sourceCampaignOwnerID`
* is optional
* type: reference

##### xdm:sourceCampaignOwnerID Type


* []() – `https://ns.adobe.com/xdm/datatypes/b2b-source`







#### xdm:sourceExternalID
##### Source External ID

External unique identifier at the source.

`xdm:sourceExternalID`
* is optional
* type: reference

##### xdm:sourceExternalID Type


* []() – `https://ns.adobe.com/xdm/datatypes/b2b-source`







#### xdm:sourceParentCampaignID
##### Source Parent Campaign ID

Account unique identifier at the source.

`xdm:sourceParentCampaignID`
* is optional
* type: reference

##### xdm:sourceParentCampaignID Type


* []() – `https://ns.adobe.com/xdm/datatypes/b2b-source`











