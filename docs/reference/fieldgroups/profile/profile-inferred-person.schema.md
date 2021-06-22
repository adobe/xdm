
# XDM Inferred Person Schema

```
https://ns.adobe.com/xdm/mixins/profile-inferred-person
```

This mixin is used to capture inferred details about a person where they are not directly avaialble.

| [Abstract](../../../abstract.md) | [Extensible](../../../extensions.md) | [Status](../../../status.md) | [Identifiable](../../../id.md) | [Custom Properties](../../../extensions.md) | [Additional Properties](../../../extensions.md) | Defined In |
|----------------------------------|--------------------------------------|------------------------------|--------------------------------|---------------------------------------------|-------------------------------------------------|------------|
| Can be instantiated | Yes | Deprecated | No | Forbidden | Permitted | [fieldgroups/profile/profile-inferred-person.schema.json](fieldgroups/profile/profile-inferred-person.schema.json) |
## Schema Hierarchy

* XDM Inferred Person `https://ns.adobe.com/xdm/mixins/profile-inferred-person`
  * [Postal address](../../datatypes/demographic/address.schema.md) `https://ns.adobe.com/xdm/common/address`


## XDM Inferred Person Example
```json
{}
```

# XDM Inferred Person Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [xdm:anonymousHostname](#xdmanonymoushostname) | `string` | Optional | XDM Inferred Person (this schema) |
| [xdm:inferredAddress](#xdminferredaddress) | Postal address | Optional | XDM Inferred Person (this schema) |
| [xdm:inferredCompany](#xdminferredcompany) | `string` | Optional | XDM Inferred Person (this schema) |
| [xdm:inferredCompanyStatus](#xdminferredcompanystatus) | `string` | Optional | XDM Inferred Person (this schema) |
| [xdm:inferredMetropolitanArea](#xdminferredmetropolitanarea) | `string` | Optional | XDM Inferred Person (this schema) |
| [xdm:inferredPhoneAreaCode](#xdminferredphoneareacode) | `string` | Optional | XDM Inferred Person (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## xdm:anonymousHostname
### Anonymous Hostname

Anonymous hostname.

`xdm:anonymousHostname`
* is optional
* type: `string`
* defined in this schema

### xdm:anonymousHostname Type


`string`






## xdm:inferredAddress
### Inferred Address

Address details inferred by reverse IP lookup of the lead’s first recorded web visit.

`xdm:inferredAddress`
* is optional
* type: Postal address
* defined in this schema

### xdm:inferredAddress Type


* [Postal address](../../datatypes/demographic/address.schema.md) – `https://ns.adobe.com/xdm/common/address`





## xdm:inferredCompany
### Inferred Company

Company name inferred by reverse IP lookup of the lead’s first recorded web visit.

`xdm:inferredCompany`
* is optional
* type: `string`
* defined in this schema

### xdm:inferredCompany Type


`string`






## xdm:inferredCompanyStatus
### Inferred Company Status

Status of the company name inferred by reverse IP lookup of the lead’s first recorded web visit.

`xdm:inferredCompanyStatus`
* is optional
* type: `string`
* defined in this schema

### xdm:inferredCompanyStatus Type


`string`






## xdm:inferredMetropolitanArea
### Inferred Metropolitan Area

Metropolitan area inferred by reverse IP lookup of lead’s first recorded web visit.

`xdm:inferredMetropolitanArea`
* is optional
* type: `string`
* defined in this schema

### xdm:inferredMetropolitanArea Type


`string`






## xdm:inferredPhoneAreaCode
### Inferred Phone Area Code

Phone area code inferred by reverse IP lookup of lead’s first recorded web visit.

`xdm:inferredPhoneAreaCode`
* is optional
* type: `string`
* defined in this schema

### xdm:inferredPhoneAreaCode Type


`string`





