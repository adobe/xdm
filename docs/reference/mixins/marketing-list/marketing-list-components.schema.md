
# XDM Business Marketing List Components Schema

```
https://ns.adobe.com/xdm/mixins/marketing-list-components
```

Marketing list relationship attributes form a single data source. This is the place to add attributes if there is a need to do any kind of segmentation in future.

| [Abstract](../../../abstract.md) | [Extensible](../../../extensions.md) | [Status](../../../status.md) | [Identifiable](../../../id.md) | [Custom Properties](../../../extensions.md) | [Additional Properties](../../../extensions.md) | Defined In |
|----------------------------------|--------------------------------------|------------------------------|--------------------------------|---------------------------------------------|-------------------------------------------------|------------|
| Can be instantiated | Yes | Deprecated | No | Forbidden | Permitted | [mixins/marketing-list/marketing-list-components.schema.json](mixins/marketing-list/marketing-list-components.schema.json) |
## Schema Hierarchy

* XDM Business Marketing List Components `https://ns.adobe.com/xdm/mixins/marketing-list-components`
  * [Extensibility base schema](../../datatypes/extensible.schema.md) `https://ns.adobe.com/xdm/common/extensible`


## XDM Business Marketing List Components Example
```json
{}
```

# XDM Business Marketing List Components Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [xdm:marketingListComponents](#xdmmarketinglistcomponents) | `object[]` | Optional | XDM Business Marketing List Components (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## xdm:marketingListComponents


`xdm:marketingListComponents`
* is optional
* type: `object[]`

* defined in this schema

### xdm:marketingListComponents Type


Array type: `object[]`

All items must be of the type:
`object` with following properties:


| Property | Type | Required |
|----------|------|----------|
| `xdm:sourceExternalID`|  | Optional |
| `xdm:sourceMarketingListID`|  | Optional |



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











