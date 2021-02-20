
# XDM Business Account Person Relation Components Schema

```
https://ns.adobe.com/xdm/mixins/account-person-components
```

XDM business account person relation component details.

| [Abstract](../../../abstract.md) | [Extensible](../../../extensions.md) | [Status](../../../status.md) | [Identifiable](../../../id.md) | [Custom Properties](../../../extensions.md) | [Additional Properties](../../../extensions.md) | Defined In |
|----------------------------------|--------------------------------------|------------------------------|--------------------------------|---------------------------------------------|-------------------------------------------------|------------|
| Can be instantiated | Yes | Deprecated | No | Forbidden | Permitted | [mixins/account/account-person-components.schema.json](mixins/account/account-person-components.schema.json) |

## XDM Business Account Person Relation Components Example
```json
{}
```

# XDM Business Account Person Relation Components Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [xdm:accountPersonComponents](#xdmaccountpersoncomponents) | `object[]` | Optional | XDM Business Account Person Relation Components (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## xdm:accountPersonComponents


`xdm:accountPersonComponents`
* is optional
* type: `object[]`

* defined in this schema

### xdm:accountPersonComponents Type


Array type: `object[]`

All items must be of the type:
`object` with following properties:


| Property | Type | Required |
|----------|------|----------|
| `xdm:personRole`| string | Optional |
| `xdm:sourceAccountID`|  | Optional |
| `xdm:sourceAccountPersonID`|  | Optional |
| `xdm:sourceExternalID`|  | Optional |
| `xdm:sourcePersonID`|  | Optional |



#### xdm:personRole
##### Person Role

Role of the person pertaining to this account.

`xdm:personRole`
* is optional
* type: `string`

##### xdm:personRole Type


`string`








#### xdm:sourceAccountID
##### Source Account ID

Account unique identifier at the source.

`xdm:sourceAccountID`
* is optional
* type: reference

##### xdm:sourceAccountID Type


* []() – `https://ns.adobe.com/xdm/datatypes/b2b-source`







#### xdm:sourceAccountPersonID
##### Source Account Person ID

Account person relationship unique identifier at the source.

`xdm:sourceAccountPersonID`
* is optional
* type: reference

##### xdm:sourceAccountPersonID Type


* []() – `https://ns.adobe.com/xdm/datatypes/b2b-source`







#### xdm:sourceExternalID
##### Source External ID

External unique identifer at the source.

`xdm:sourceExternalID`
* is optional
* type: reference

##### xdm:sourceExternalID Type


* []() – `https://ns.adobe.com/xdm/datatypes/b2b-source`







#### xdm:sourcePersonID
##### Source Person ID

Person unique identifer at the source.

`xdm:sourcePersonID`
* is optional
* type: reference

##### xdm:sourcePersonID Type


* []() – `https://ns.adobe.com/xdm/datatypes/b2b-source`











