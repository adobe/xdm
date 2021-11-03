
# XDM Business Account Person Relation Schema

```
https://ns.adobe.com/xdm/classes/account-person
```

This class is used to capture XDM business account person relationship attributes.

| [Abstract](../../../abstract.md) | [Extensible](../../../extensions.md) | [Status](../../../status.md) | [Identifiable](../../../id.md) | [Custom Properties](../../../extensions.md) | [Additional Properties](../../../extensions.md) | Defined In |
|----------------------------------|--------------------------------------|------------------------------|--------------------------------|---------------------------------------------|-------------------------------------------------|------------|
| Can be instantiated | Yes | Stable | No | Forbidden | Permitted | [classes/b2b/account-person.schema.json](classes/b2b/account-person.schema.json) |
## Schema Hierarchy

* XDM Business Account Person Relation `https://ns.adobe.com/xdm/classes/account-person`
  * [Record Schema](../../behaviors/record.schema.md) `https://ns.adobe.com/xdm/data/record`
  * [B2B Source](../../datatypes/b2b/b2b-source.schema.md) `https://ns.adobe.com/xdm/datatypes/b2b-source`
  * [External Source System Audit Details](../../fieldgroups/shared/external-source-system-audit-details.schema.md) `https://ns.adobe.com/xdm/common/external-source-system-audit-details`


## XDM Business Account Person Relation Example
```json
{
  "xdm:accountPersonID": "AAAPPP111"
}
```

# XDM Business Account Person Relation Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [@id](#id) | `string` | Optional | [Record Schema](../../behaviors/record.schema.md#id) |
| [xdm:accountID](#xdmaccountid) | `string` | Optional | XDM Business Account Person Relation (this schema) |
| [xdm:accountKey](#xdmaccountkey) | B2B Source | Optional | XDM Business Account Person Relation (this schema) |
| [xdm:accountPersonID](#xdmaccountpersonid) | `string` | Optional | XDM Business Account Person Relation (this schema) |
| [xdm:accountPersonKey](#xdmaccountpersonkey) | B2B Source | Optional | XDM Business Account Person Relation (this schema) |
| [xdm:currencyCode](#xdmcurrencycode) | `string` | Optional | XDM Business Account Person Relation (this schema) |
| [xdm:extSourceSystemAudit](#xdmextsourcesystemaudit) | External Source System Audit Attributes | Optional | [External Source System Audit Details](../../fieldgroups/shared/external-source-system-audit-details.schema.md#xdmextsourcesystemaudit) |
| [xdm:isActive](#xdmisactive) | `boolean` | Optional | XDM Business Account Person Relation (this schema) |
| [xdm:isDirect](#xdmisdirect) | `boolean` | Optional | XDM Business Account Person Relation (this schema) |
| [xdm:isPrimary](#xdmisprimary) | `boolean` | Optional | XDM Business Account Person Relation (this schema) |
| [xdm:personID](#xdmpersonid) | `string` | Optional | XDM Business Account Person Relation (this schema) |
| [xdm:personKey](#xdmpersonkey) | B2B Source | Optional | XDM Business Account Person Relation (this schema) |
| [xdm:personRole](#xdmpersonrole) | `string` | Optional | XDM Business Account Person Relation (this schema) |
| [xdm:relationEndDate](#xdmrelationenddate) | `string` | Optional | XDM Business Account Person Relation (this schema) |
| [xdm:relationStartDate](#xdmrelationstartdate) | `string` | Optional | XDM Business Account Person Relation (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## @id
### Identifier

A unique identifier for the record.

`@id`
* is optional
* type: `string`
* defined in [Record Schema](../../behaviors/record.schema.md#id)

### @id Type


`string`
* format: `uri-reference` – URI Reference (according to [RFC3986](https://tools.ietf.org/html/rfc3986))






## xdm:accountID
### Account ID

Unique identifier for the account in this account person relationship.

`xdm:accountID`
* is optional
* type: `string`
* defined in this schema

### xdm:accountID Type


`string`






## xdm:accountKey
### Account Key

Unique composite identifier for the account in this account person relationship.

`xdm:accountKey`
* is optional
* type: B2B Source
* defined in this schema

### xdm:accountKey Type


* [B2B Source](../../datatypes/b2b/b2b-source.schema.md) – `https://ns.adobe.com/xdm/datatypes/b2b-source`





## xdm:accountPersonID
### Account Person ID

Unique identifier for this relationship between an account and a person.

`xdm:accountPersonID`
* is optional
* type: `string`
* defined in this schema

### xdm:accountPersonID Type


`string`






## xdm:accountPersonKey
### Account Person Key

Unique composite identifier for this relationship between an account and a person.

`xdm:accountPersonKey`
* is optional
* type: B2B Source
* defined in this schema

### xdm:accountPersonKey Type


* [B2B Source](../../datatypes/b2b/b2b-source.schema.md) – `https://ns.adobe.com/xdm/datatypes/b2b-source`





## xdm:currencyCode
### Currency Code

The ISO 4217 currency code used for the relationship between the account and the person.

`xdm:currencyCode`
* is optional
* type: `string`
* defined in this schema

### xdm:currencyCode Type


`string`


All instances must conform to this regular expression 
```regex
^[A-Z]{3}$
```

* test example: [USD](https://regexr.com/?expression=%5E%5BA-Z%5D%7B3%7D%24&text=USD)
* test example: [EUR](https://regexr.com/?expression=%5E%5BA-Z%5D%7B3%7D%24&text=EUR)




### xdm:currencyCode Examples

```json
"USD"
```

```json
"EUR"
```



## xdm:extSourceSystemAudit
### External Source System Audit Properties

Audit attributes for external sources.

`xdm:extSourceSystemAudit`
* is optional
* type: External Source System Audit Attributes
* defined in [External Source System Audit Details](../../fieldgroups/shared/external-source-system-audit-details.schema.md#xdmextsourcesystemaudit)

### xdm:extSourceSystemAudit Type


* [External Source System Audit Attributes](../../datatypes/auditing/external-source-system-audit.schema.md) – `https://ns.adobe.com/xdm/common/external-source-system-audit`





## xdm:isActive
### Active Flag

Boolean to indicate if this relationship between the account and the person is active.

`xdm:isActive`
* is optional
* type: `boolean`
* defined in this schema

### xdm:isActive Type


`boolean`





## xdm:isDirect
### Direct Flag

Boolean to indicate if this is a direct relationship between the account and the person.

`xdm:isDirect`
* is optional
* type: `boolean`
* defined in this schema

### xdm:isDirect Type


`boolean`





## xdm:isPrimary
### Primary Flag

Boolean to indicate if the person is the primary contact on the account.

`xdm:isPrimary`
* is optional
* type: `boolean`
* defined in this schema

### xdm:isPrimary Type


`boolean`





## xdm:personID
### Person ID

Unique identifier for the person in this account person relationship.

`xdm:personID`
* is optional
* type: `string`
* defined in this schema

### xdm:personID Type


`string`






## xdm:personKey
### Person Key

Unique composite identifier for the person in this account person relationship.

`xdm:personKey`
* is optional
* type: B2B Source
* defined in this schema

### xdm:personKey Type


* [B2B Source](../../datatypes/b2b/b2b-source.schema.md) – `https://ns.adobe.com/xdm/datatypes/b2b-source`





## xdm:personRole
### Person Role

Role of the person on this account.

`xdm:personRole`
* is optional
* type: `string`
* defined in this schema

### xdm:personRole Type


`string`






## xdm:relationEndDate
### Relationship End Date

The date when the relationship between the account and the person ended.

`xdm:relationEndDate`
* is optional
* type: `string`
* defined in this schema

### xdm:relationEndDate Type


`string`
* format: `date-time` – date and time (according to [RFC 3339, section 5.6](http://tools.ietf.org/html/rfc3339))






## xdm:relationStartDate
### Relationship Start Date

The date when the relationship between the account and the person started.

`xdm:relationStartDate`
* is optional
* type: `string`
* defined in this schema

### xdm:relationStartDate Type


`string`
* format: `date-time` – date and time (according to [RFC 3339, section 5.6](http://tools.ietf.org/html/rfc3339))





