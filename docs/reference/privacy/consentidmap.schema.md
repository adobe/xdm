
# Consent ID Map Schema Schema

```
https://ns.adobe.com/xdm/schemas/consentidmap
```

The schema is placeholder for Consent ID Map which is dynamically generated and exported.

| [Abstract](../../abstract.md) | [Extensible](../../extensions.md) | [Status](../../status.md) | [Identifiable](../../id.md) | [Custom Properties](../../extensions.md) | [Additional Properties](../../extensions.md) | Defined In |
|-------------------------------|-----------------------------------|---------------------------|-----------------------------|------------------------------------------|----------------------------------------------|------------|
| Can be instantiated | Yes | Stable | No | Forbidden | Permitted | [privacy/consentidmap.schema.json](privacy/consentidmap.schema.json) |
## Schema Hierarchy

* Consent ID Map Schema `https://ns.adobe.com/xdm/schemas/consentidmap`
  * [XDM Individual Profile](../classes/profile.schema.md) `https://ns.adobe.com/xdm/context/profile`
  * [IdentityMap](../fieldgroups/shared/identitymap.schema.md) `https://ns.adobe.com/xdm/context/identitymap`
  * [Consent policies evaluation results map](../fieldgroups/profile/profile-consentResults.schema.md) `https://ns.adobe.com/xdm/mixins/profile-consentResults`


## Consent ID Map Schema Example
```json
{}
```

# Consent ID Map Schema Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [xdm:consentPoliciesIDMap](#xdmconsentpoliciesidmap) | `object` | Optional | [Consent policies evaluation results map](../fieldgroups/profile/profile-consentResults.schema.md#xdmconsentpoliciesidmap) |
| [xdm:identityMap](#xdmidentitymap) | `object` | Optional | [IdentityMap](../fieldgroups/shared/identitymap.schema.md#xdmidentitymap) |
| [xdm:personID](#xdmpersonid) | `string` | Optional | [XDM Individual Profile](../classes/profile.schema.md#xdmpersonid) |
| `*` | any | Additional | this schema *allows* additional properties |

## xdm:consentPoliciesIDMap
### consent policies map

`xdm:consentPoliciesIDMap`
* is optional
* type: `object`
* defined in [Consent policies evaluation results map](../fieldgroups/profile/profile-consentResults.schema.md#xdmconsentpoliciesidmap)

### xdm:consentPoliciesIDMap Type


`object` with following properties:


| Property | Type | Required |
|----------|------|----------|






## xdm:identityMap


`xdm:identityMap`
* is optional
* type: `object`
* defined in [IdentityMap](../fieldgroups/shared/identitymap.schema.md#xdmidentitymap)

### xdm:identityMap Type


`object` with following properties:


| Property | Type | Required |
|----------|------|----------|






## xdm:personID
### Person ID

Unique identifier of Person/Profile fragment.

`xdm:personID`
* is optional
* type: `string`
* defined in [XDM Individual Profile](../classes/profile.schema.md#xdmpersonid)

### xdm:personID Type


`string`





