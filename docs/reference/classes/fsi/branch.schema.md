
# Branch Schema

```
https://ns.adobe.com/xdm/classes/fsi/branch
```

For branch information such as ID, name, and open and close times.

| [Abstract](../../../abstract.md) | [Extensible](../../../extensions.md) | [Status](../../../status.md) | [Identifiable](../../../id.md) | [Custom Properties](../../../extensions.md) | [Additional Properties](../../../extensions.md) | Defined In |
|----------------------------------|--------------------------------------|------------------------------|--------------------------------|---------------------------------------------|-------------------------------------------------|------------|
| Can be instantiated | Yes | Stable | No | Forbidden | Permitted | [classes/fsi/branch.schema.json](classes/fsi/branch.schema.json) |
## Schema Hierarchy

* Branch `https://ns.adobe.com/xdm/classes/fsi/branch`
  * [Record Schema](../../behaviors/record.schema.md) `https://ns.adobe.com/xdm/data/record`
  * [Postal address](../../datatypes/demographic/address.schema.md) `https://ns.adobe.com/xdm/common/address`


## Branch Example
```json
{}
```

# Branch Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [@id](#id) | `string` | Optional | [Record Schema](../../behaviors/record.schema.md#id) |
| [xdm:branchAddress](#xdmbranchaddress) | Postal address | Optional | Branch (this schema) |
| [xdm:branchCloseTime](#xdmbranchclosetime) | `string` | Optional | Branch (this schema) |
| [xdm:branchID](#xdmbranchid) | `string` | Optional | Branch (this schema) |
| [xdm:branchName](#xdmbranchname) | `string` | Optional | Branch (this schema) |
| [xdm:branchOpenTime](#xdmbranchopentime) | `string` | Optional | Branch (this schema) |
| [xdm:isBranchActive](#xdmisbranchactive) | `boolean` | Optional | Branch (this schema) |
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






## xdm:branchAddress
### Branch Address

Physical address where the branch is located.

`xdm:branchAddress`
* is optional
* type: Postal address
* defined in this schema

### xdm:branchAddress Type


* [Postal address](../../datatypes/demographic/address.schema.md) – `https://ns.adobe.com/xdm/common/address`





## xdm:branchCloseTime
### Branch Close Time

Time of day the branch closes.

`xdm:branchCloseTime`
* is optional
* type: `string`
* defined in this schema

### xdm:branchCloseTime Type


`string`
* format: `date-time` – date and time (according to [RFC 3339, section 5.6](http://tools.ietf.org/html/rfc3339))






## xdm:branchID
### Branch ID

ID associated with the branch. 

`xdm:branchID`
* is optional
* type: `string`
* defined in this schema

### xdm:branchID Type


`string`






## xdm:branchName
### Branch Name

Name of the branch.

`xdm:branchName`
* is optional
* type: `string`
* defined in this schema

### xdm:branchName Type


`string`






## xdm:branchOpenTime
### Brancn Open Time

Time of day the branch opens.

`xdm:branchOpenTime`
* is optional
* type: `string`
* defined in this schema

### xdm:branchOpenTime Type


`string`
* format: `date-time` – date and time (according to [RFC 3339, section 5.6](http://tools.ietf.org/html/rfc3339))






## xdm:isBranchActive
### Is Branch Active

Yes/no if the branch is currently active.

`xdm:isBranchActive`
* is optional
* type: `boolean`
* defined in this schema

### xdm:isBranchActive Type


`boolean`




