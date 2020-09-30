
# XDM Business Account Person Relation Schema

```
https://ns.adobe.com/xdm/classes/account-person
```

This class is used to capture XDM business account person relationship attributes.

| [Abstract](../../abstract.md) | [Extensible](../../extensions.md) | [Status](../../status.md) | [Identifiable](../../id.md) | [Custom Properties](../../extensions.md) | [Additional Properties](../../extensions.md) | Defined In |
|-------------------------------|-----------------------------------|---------------------------|-----------------------------|------------------------------------------|----------------------------------------------|------------|
| Can be instantiated | Yes | Experimental | No | Forbidden | Permitted | [classes/account-person.schema.json](classes/account-person.schema.json) |
## Schema Hierarchy

* XDM Business Account Person Relation `https://ns.adobe.com/xdm/classes/account-person`
  * [Record Schema](../behaviors/record.schema.md) `https://ns.adobe.com/xdm/data/record`
  * [External Source System Audit Details Mixin](../mixins/shared/external-source-system-audit-details.schema.md) `https://ns.adobe.com/xdm/common/external-source-system-audit-details`


## XDM Business Account Person Relation Example
```json
{
  "xdm:accountPersonID": "AAAPPP111"
}
```

# XDM Business Account Person Relation Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [@id](#id) | `string` | Optional | [Record Schema](../behaviors/record.schema.md#id) |
| [xdm:accountID](#xdmaccountid) | `string` | Optional | XDM Business Account Person Relation (this schema) |
| [xdm:accountPersonID](#xdmaccountpersonid) | `string` | **Required** | XDM Business Account Person Relation (this schema) |
| [xdm:currencyCode](#xdmcurrencycode) | `string` | Optional | XDM Business Account Person Relation (this schema) |
| [xdm:extSourceSystemAudit](#xdmextsourcesystemaudit) | External Source System Audit Attributes | Optional | [External Source System Audit Details Mixin](../mixins/shared/external-source-system-audit-details.schema.md#xdmextsourcesystemaudit) |
| [xdm:isActive](#xdmisactive) | `boolean` | Optional | XDM Business Account Person Relation (this schema) |
| [xdm:isDirect](#xdmisdirect) | `boolean` | Optional | XDM Business Account Person Relation (this schema) |
| [xdm:isPrimary](#xdmisprimary) | `boolean` | Optional | XDM Business Account Person Relation (this schema) |
| [xdm:personID](#xdmpersonid) | `string` | Optional | XDM Business Account Person Relation (this schema) |
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
* defined in [Record Schema](../behaviors/record.schema.md#id)

### @id Type


`string`
* format: `uri-reference` – URI Reference (according to [RFC3986](https://tools.ietf.org/html/rfc3986))






## xdm:accountID
### Account ID

Account unique identifier reference.

`xdm:accountID`
* is optional
* type: `string`
* defined in this schema

### xdm:accountID Type


`string`






## xdm:accountPersonID
### Account Person ID

Account person relation unique identifer.

`xdm:accountPersonID`
* is **required**
* type: `string`
* defined in this schema

### xdm:accountPersonID Type


`string`






## xdm:currencyCode
### Currency Code

The ISO 4217 currency code used for this relation.

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
* defined in [External Source System Audit Details Mixin](../mixins/shared/external-source-system-audit-details.schema.md#xdmextsourcesystemaudit)

### xdm:extSourceSystemAudit Type


* [External Source System Audit Attributes](../datatypes/external-source-system-audit.schema.md) – `https://ns.adobe.com/xdm/common/external-source-system-audit`





## xdm:isActive
### Active Flag

A flag to signify that this relation is active or not.

`xdm:isActive`
* is optional
* type: `boolean`
* defined in this schema

### xdm:isActive Type


`boolean`





## xdm:isDirect
### Direct Flag

A flag to signify that this is the direct account contact.

`xdm:isDirect`
* is optional
* type: `boolean`
* defined in this schema

### xdm:isDirect Type


`boolean`





## xdm:isPrimary
### Primary Flag

A flag to signify that this relation is primary or not.

`xdm:isPrimary`
* is optional
* type: `boolean`
* defined in this schema

### xdm:isPrimary Type


`boolean`





## xdm:personID
### Person ID

Person unique identifier reference.

`xdm:personID`
* is optional
* type: `string`
* defined in this schema

### xdm:personID Type


`string`






## xdm:personRole
### Person Role

Role of the person/contact for this account.

`xdm:personRole`
* is optional
* type: `string`
* defined in this schema

### xdm:personRole Type


`string`






## xdm:relationEndDate
### Relationship End Date

The date when this account person relationship was discontinued.

`xdm:relationEndDate`
* is optional
* type: `string`
* defined in this schema

### xdm:relationEndDate Type


`string`
* format: `date-time` – date and time (according to [RFC 3339, section 5.6](http://tools.ietf.org/html/rfc3339))






## xdm:relationStartDate
### Relationship Start Date

The date when this account person relationship was established.

`xdm:relationStartDate`
* is optional
* type: `string`
* defined in this schema

### xdm:relationStartDate Type


`string`
* format: `date-time` – date and time (according to [RFC 3339, section 5.6](http://tools.ietf.org/html/rfc3339))





