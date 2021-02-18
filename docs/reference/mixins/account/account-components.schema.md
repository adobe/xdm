
# XDM Business Account Components Schema

```
https://ns.adobe.com/xdm/mixins/account-components
```

XDM Business Account relationships for one data source.

| [Abstract](../../../abstract.md) | [Extensible](../../../extensions.md) | [Status](../../../status.md) | [Identifiable](../../../id.md) | [Custom Properties](../../../extensions.md) | [Additional Properties](../../../extensions.md) | Defined In |
|----------------------------------|--------------------------------------|------------------------------|--------------------------------|---------------------------------------------|-------------------------------------------------|------------|
| Can be instantiated | Yes | Deprecated | No | Forbidden | Permitted | [mixins/account/account-components.schema.json](mixins/account/account-components.schema.json) |

## XDM Business Account Components Example
```json
{}
```

# XDM Business Account Components Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [xdm:accountComponents](#xdmaccountcomponents) | `object[]` | Optional | XDM Business Account Components (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## xdm:accountComponents


`xdm:accountComponents`
* is optional
* type: `object[]`

* defined in this schema

### xdm:accountComponents Type


Array type: `object[]`

All items must be of the type:
`object` with following properties:


| Property | Type | Required |
|----------|------|----------|
| `xdm:segmentationAttributes`|  | Optional |
| `xdm:sourceAccountID`|  | Optional |
| `xdm:sourceAccountOwnerID`|  | Optional |
| `xdm:sourceAccountParentID`|  | Optional |
| `xdm:sourceExternalID`|  | Optional |
| `xdm:sourcePartnerAccountID`|  | Optional |



#### xdm:segmentationAttributes
##### Account Segmentation Properties

undefined

`xdm:segmentationAttributes`
* is optional
* type: reference

##### xdm:segmentationAttributes Type


* []() – `https://ns.adobe.com/xdm/datatypes/b2b-account#/definitions/b2b-account-segmentation`







#### xdm:sourceAccountID
##### Source Account ID

Source account ID.

`xdm:sourceAccountID`
* is optional
* type: reference

##### xdm:sourceAccountID Type


* []() – `https://ns.adobe.com/xdm/datatypes/b2b-source`







#### xdm:sourceAccountOwnerID
##### Account Owner Id

Account owner ID.

`xdm:sourceAccountOwnerID`
* is optional
* type: reference

##### xdm:sourceAccountOwnerID Type


* []() – `https://ns.adobe.com/xdm/datatypes/b2b-source`







#### xdm:sourceAccountParentID
##### Source Parent Account

Parent company for companies that are subsidiaries of a larger company or organization. The parent account must be an existing account in salesforce. You can enter the account name, or select (or optionally, create) the account using the lookup icon.

`xdm:sourceAccountParentID`
* is optional
* type: reference

##### xdm:sourceAccountParentID Type


* []() – `https://ns.adobe.com/xdm/datatypes/b2b-source`







#### xdm:sourceExternalID
##### Source External ID

External ID.

`xdm:sourceExternalID`
* is optional
* type: reference

##### xdm:sourceExternalID Type


* []() – `https://ns.adobe.com/xdm/datatypes/b2b-source`







#### xdm:sourcePartnerAccountID
##### Source Partner Account Id

Partner accounts are accounts that a channel manager uses to manage partner organizations, partner users, and activities when using a partner community or partner portal.

`xdm:sourcePartnerAccountID`
* is optional
* type: reference

##### xdm:sourcePartnerAccountID Type


* []() – `https://ns.adobe.com/xdm/datatypes/b2b-source`











