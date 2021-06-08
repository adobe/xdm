
# XDM Buying Group Additional Properties Schema

```
https://ns.adobe.com/xdm/context/opportunity-contact-role-details
```

Opportunity Contact Role additional properties

| [Abstract](../../../abstract.md) | [Extensible](../../../extensions.md) | [Status](../../../status.md) | [Identifiable](../../../id.md) | [Custom Properties](../../../extensions.md) | [Additional Properties](../../../extensions.md) | Defined In |
|----------------------------------|--------------------------------------|------------------------------|--------------------------------|---------------------------------------------|-------------------------------------------------|------------|
| Can be instantiated | Yes | Experimental | No | Forbidden | Permitted | [mixins/opportunity-contact-role/opportunity-contact-role-details.schema.json](mixins/opportunity-contact-role/opportunity-contact-role-details.schema.json) |

## XDM Buying Group Additional Properties Example
```json
{
  "xdm:roleID": "1234",
  "xdm:role": "finance",
  "xdm:isPrimary": false,
  "xdm:isDeleted": false
}
```

# XDM Buying Group Additional Properties Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [xdm:isDeleted](#xdmisdeleted) | `boolean` | Optional | XDM Buying Group Additional Properties (this schema) |
| [xdm:isPrimary](#xdmisprimary) | `boolean` | Optional | XDM Buying Group Additional Properties (this schema) |
| [xdm:opportunityContactRole](#xdmopportunitycontactrole) | `string` | Optional | XDM Buying Group Additional Properties (this schema) |
| [xdm:roleID](#xdmroleid) | `string` | Optional | XDM Buying Group Additional Properties (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## xdm:isDeleted
### Deleted Flag

A flag to signify that this opportunity is in deleted state.

`xdm:isDeleted`
* is optional
* type: `boolean`
* defined in this schema

### xdm:isDeleted Type


`boolean`





## xdm:isPrimary
### Primary Flag

A flag to signify that this is the primary opportunity contact

`xdm:isPrimary`
* is optional
* type: `boolean`
* defined in this schema

### xdm:isPrimary Type


`boolean`





## xdm:opportunityContactRole
### Opportunity Contact Role

Role of the opportunity contact like finance , sales .

`xdm:opportunityContactRole`
* is optional
* type: `string`
* defined in this schema

### xdm:opportunityContactRole Type


`string`






## xdm:roleID
### Contact Role ID

Contact role unique identifier.

`xdm:roleID`
* is optional
* type: `string`
* defined in this schema

### xdm:roleID Type


`string`





