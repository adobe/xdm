
# ATM Schema

```
https://ns.adobe.com/xdm/classes/fsi/atm
```

For ATM information such as active status, addrerss, ID and name. 

| [Abstract](../../../abstract.md) | [Extensible](../../../extensions.md) | [Status](../../../status.md) | [Identifiable](../../../id.md) | [Custom Properties](../../../extensions.md) | [Additional Properties](../../../extensions.md) | Defined In |
|----------------------------------|--------------------------------------|------------------------------|--------------------------------|---------------------------------------------|-------------------------------------------------|------------|
| Can be instantiated | Yes | Stable | No | Forbidden | Permitted | [classes/fsi/atm.schema.json](classes/fsi/atm.schema.json) |
## Schema Hierarchy

* ATM `https://ns.adobe.com/xdm/classes/fsi/atm`
  * [Record Schema](../../behaviors/record.schema.md) `https://ns.adobe.com/xdm/data/record`
  * [Postal address](../../datatypes/demographic/address.schema.md) `https://ns.adobe.com/xdm/common/address`


## ATM Example
```json
{}
```

# ATM Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [@id](#id) | `string` | Optional | [Record Schema](../../behaviors/record.schema.md#id) |
| [xdm:atmAddress](#xdmatmaddress) | Postal address | Optional | ATM (this schema) |
| [xdm:atmID](#xdmatmid) | `string` | Optional | ATM (this schema) |
| [xdm:atmName](#xdmatmname) | `string` | Optional | ATM (this schema) |
| [xdm:isAtmActive](#xdmisatmactive) | `boolean` | Optional | ATM (this schema) |
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






## xdm:atmAddress
### ATM Address

Physicial address where the ATM is located.

`xdm:atmAddress`
* is optional
* type: Postal address
* defined in this schema

### xdm:atmAddress Type


* [Postal address](../../datatypes/demographic/address.schema.md) – `https://ns.adobe.com/xdm/common/address`





## xdm:atmID
### ATM ID

ID associated with the ATM.

`xdm:atmID`
* is optional
* type: `string`
* defined in this schema

### xdm:atmID Type


`string`






## xdm:atmName
### ATM Name

Name associated with the ATM.

`xdm:atmName`
* is optional
* type: `string`
* defined in this schema

### xdm:atmName Type


`string`






## xdm:isAtmActive
### Is ATM Active

Yes/no if the ATM is currently active.

`xdm:isAtmActive`
* is optional
* type: `boolean`
* defined in this schema

### xdm:isAtmActive Type


`boolean`




