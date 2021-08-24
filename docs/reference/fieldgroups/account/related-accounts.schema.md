
# XDM Related Business Accounts Schema

```
https://ns.adobe.com/xdm/mixins/related-accounts
```

An array of all related accounts linked to the primary account.

| [Abstract](../../../abstract.md) | [Extensible](../../../extensions.md) | [Status](../../../status.md) | [Identifiable](../../../id.md) | [Custom Properties](../../../extensions.md) | [Additional Properties](../../../extensions.md) | Defined In |
|----------------------------------|--------------------------------------|------------------------------|--------------------------------|---------------------------------------------|-------------------------------------------------|------------|
| Can be instantiated | Yes | Experimental | No | Forbidden | Permitted | [fieldgroups/account/related-accounts.schema.json](fieldgroups/account/related-accounts.schema.json) |
## Schema Hierarchy

* XDM Related Business Accounts `https://ns.adobe.com/xdm/mixins/related-accounts`
  * [Extensibility base schema](../../datatypes/extensible.schema.md) `https://ns.adobe.com/xdm/common/extensible`


## XDM Related Business Accounts Example
```json
{
  "xdm:relatedAccounts": [
    "AAAA1111",
    "BBBB2222"
  ]
}
```

# XDM Related Business Accounts Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [xdm:relatedAccountKeys](#xdmrelatedaccountkeys) | B2B Source | Optional | XDM Related Business Accounts (this schema) |
| [xdm:relatedAccounts](#xdmrelatedaccounts) | `string[]` | Optional | XDM Related Business Accounts (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## xdm:relatedAccountKeys
### Related Account Keys

An array of unique identifiers to any related accounts.

`xdm:relatedAccountKeys`
* is optional
* type: B2B Source

* defined in this schema

### xdm:relatedAccountKeys Type


Array type: B2B Source

All items must be of the type:
* [B2B Source](../../datatypes/b2b/b2b-source.schema.md) – `https://ns.adobe.com/xdm/datatypes/b2b-source`








## xdm:relatedAccounts
### Related Accounts

Related accounts which are linked to a primary Business Account. This is an array of Account IDs.

`xdm:relatedAccounts`
* is optional
* type: `string[]`

* defined in this schema

### xdm:relatedAccounts Type


Array type: `string[]`

All items must be of the type:
`string`








