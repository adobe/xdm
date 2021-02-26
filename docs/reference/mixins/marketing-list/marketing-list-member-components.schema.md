
# XDM Business Marketing List Member Components Schema

```
https://ns.adobe.com/xdm/mixins/marketing-list-member-components
```

Relationship attributes for a marketing list and its members from a single data source. This is also the place to add attributes if there is a need to do any kind of segmentation in future.

| [Abstract](../../../abstract.md) | [Extensible](../../../extensions.md) | [Status](../../../status.md) | [Identifiable](../../../id.md) | [Custom Properties](../../../extensions.md) | [Additional Properties](../../../extensions.md) | Defined In |
|----------------------------------|--------------------------------------|------------------------------|--------------------------------|---------------------------------------------|-------------------------------------------------|------------|
| Can be instantiated | Yes | Deprecated | No | Forbidden | Permitted | [mixins/marketing-list/marketing-list-member-components.schema.json](mixins/marketing-list/marketing-list-member-components.schema.json) |
## Schema Hierarchy

* XDM Business Marketing List Member Components `https://ns.adobe.com/xdm/mixins/marketing-list-member-components`
  * [Extensibility base schema](../../datatypes/extensible.schema.md) `https://ns.adobe.com/xdm/common/extensible`


## XDM Business Marketing List Member Components Example
```json
{}
```

# XDM Business Marketing List Member Components Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [xdm:marketingListMemberComponents](#xdmmarketinglistmembercomponents) | `object[]` | Optional | XDM Business Marketing List Member Components (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## xdm:marketingListMemberComponents


`xdm:marketingListMemberComponents`
* is optional
* type: `object[]`

* defined in this schema

### xdm:marketingListMemberComponents Type


Array type: `object[]`

All items must be of the type:
`object` with following properties:


| Property | Type | Required |
|----------|------|----------|
| `xdm:sourceExternalID`|  | Optional |
| `xdm:sourceMarketingListID`|  | Optional |
| `xdm:sourceMarketingListMemberID`|  | Optional |
| `xdm:sourcePersonID`|  | Optional |



#### xdm:sourceExternalID
##### Source External Identifier

undefined

`xdm:sourceExternalID`
* is optional
* type: reference

##### xdm:sourceExternalID Type


* []() – `https://ns.adobe.com/xdm/datatypes/b2b-source`







#### xdm:sourceMarketingListID
##### Source Marketing List Identifier

undefined

`xdm:sourceMarketingListID`
* is optional
* type: reference

##### xdm:sourceMarketingListID Type


* []() – `https://ns.adobe.com/xdm/datatypes/b2b-source`







#### xdm:sourceMarketingListMemberID
##### Source Marketing List Identifier

undefined

`xdm:sourceMarketingListMemberID`
* is optional
* type: reference

##### xdm:sourceMarketingListMemberID Type


* []() – `https://ns.adobe.com/xdm/datatypes/b2b-source`







#### xdm:sourcePersonID
##### Source Person Identifier

undefined

`xdm:sourcePersonID`
* is optional
* type: reference

##### xdm:sourcePersonID Type


* []() – `https://ns.adobe.com/xdm/datatypes/b2b-source`











