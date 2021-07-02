
# XDM Business Campaign Member Components Schema

```
https://ns.adobe.com/xdm/mixins/campaign-member-components
```

This mixin is used to capture B2B campaign member specific relationship attributes that are represented as it is in source and also used for merge/unmerge rules analysis if and when needed.

| [Abstract](../../../abstract.md) | [Extensible](../../../extensions.md) | [Status](../../../status.md) | [Identifiable](../../../id.md) | [Custom Properties](../../../extensions.md) | [Additional Properties](../../../extensions.md) | Defined In |
|----------------------------------|--------------------------------------|------------------------------|--------------------------------|---------------------------------------------|-------------------------------------------------|------------|
| Can be instantiated | Yes | Deprecated | No | Forbidden | Permitted | [fieldgroups/campaign-member/campaign-member-components.schema.json](fieldgroups/campaign-member/campaign-member-components.schema.json) |

## XDM Business Campaign Member Components Example
```json
{}
```

# XDM Business Campaign Member Components Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [xdm:campaignMemberComponents](#xdmcampaignmembercomponents) | `object[]` | Optional | XDM Business Campaign Member Components (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## xdm:campaignMemberComponents


`xdm:campaignMemberComponents`
* is optional
* type: `object[]`

* defined in this schema

### xdm:campaignMemberComponents Type


Array type: `object[]`

All items must be of the type:
`object` with following properties:


| Property | Type | Required |
|----------|------|----------|
| `xdm:hasReachedSuccess`| boolean | Optional |
| `xdm:memberStatus`| string | Optional |
| `xdm:memberStatusReason`| string | Optional |
| `xdm:reachedSuccessDate`| string | Optional |
| `xdm:sourceAcquiredByCampaignID`|  | Optional |
| `xdm:sourceCampaignID`|  | Optional |
| `xdm:sourceCampaignMemberID`|  | Optional |
| `xdm:sourceExternalID`|  | Optional |
| `xdm:sourcePersonID`|  | Optional |



#### xdm:hasReachedSuccess
##### Source Has Reached Success


`xdm:hasReachedSuccess`
* is optional
* type: `boolean`

##### xdm:hasReachedSuccess Type


`boolean`







#### xdm:memberStatus
##### Source Campaign Member Status


`xdm:memberStatus`
* is optional
* type: `string`

##### xdm:memberStatus Type


`string`








#### xdm:memberStatusReason
##### Source Status Reason


`xdm:memberStatusReason`
* is optional
* type: `string`

##### xdm:memberStatusReason Type


`string`








#### xdm:reachedSuccessDate
##### Source Reached Success Date


`xdm:reachedSuccessDate`
* is optional
* type: `string`

##### xdm:reachedSuccessDate Type


`string`
* format: `date-time` – date and time (according to [RFC 3339, section 5.6](http://tools.ietf.org/html/rfc3339))








#### xdm:sourceAcquiredByCampaignID
##### Source Acquired By CampaignID


`xdm:sourceAcquiredByCampaignID`
* is optional
* type: reference

##### xdm:sourceAcquiredByCampaignID Type


* []() – `https://ns.adobe.com/xdm/datatypes/b2b-source`







#### xdm:sourceCampaignID
##### Source Campaign ID

Campaign unique identifier at the source.

`xdm:sourceCampaignID`
* is optional
* type: reference

##### xdm:sourceCampaignID Type


* []() – `https://ns.adobe.com/xdm/datatypes/b2b-source`







#### xdm:sourceCampaignMemberID
##### Source Campaign Member ID

Campaign member unique identifier at source.

`xdm:sourceCampaignMemberID`
* is optional
* type: reference

##### xdm:sourceCampaignMemberID Type


* []() – `https://ns.adobe.com/xdm/datatypes/b2b-source`







#### xdm:sourceExternalID
##### Source External ID

External unique identifier at the source.

`xdm:sourceExternalID`
* is optional
* type: reference

##### xdm:sourceExternalID Type


* []() – `https://ns.adobe.com/xdm/datatypes/b2b-source`







#### xdm:sourcePersonID
##### Source Person ID

Campaign owner unique identifier at the source.

`xdm:sourcePersonID`
* is optional
* type: reference

##### xdm:sourcePersonID Type


* []() – `https://ns.adobe.com/xdm/datatypes/b2b-source`











