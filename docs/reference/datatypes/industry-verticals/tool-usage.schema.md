
# Tool Usage Schema

```
https://ns.adobe.com/xdm/datatypes/tool-usage
```

Tool usage comprises the most common steps used in a site tool or utility, such as calculators, registrations, and requests for more information.

| [Abstract](../../../abstract.md) | [Extensible](../../../extensions.md) | [Status](../../../status.md) | [Identifiable](../../../id.md) | [Custom Properties](../../../extensions.md) | [Additional Properties](../../../extensions.md) | Defined In |
|----------------------------------|--------------------------------------|------------------------------|--------------------------------|---------------------------------------------|-------------------------------------------------|------------|
| Can be instantiated | Yes | Experimental | No | Forbidden | Permitted | [datatypes/industry-verticals/tool-usage.schema.json](datatypes/industry-verticals/tool-usage.schema.json) |
## Schema Hierarchy

* Tool Usage `https://ns.adobe.com/xdm/datatypes/tool-usage`
  * [Transaction](transaction.schema.md) `https://ns.adobe.com/xdm/datatypes/transaction`


## Tool Usage Example
```json
{}
```

# Tool Usage Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [xdm:ID](#xdmid) | `string` | Optional | Tool Usage (this schema) |
| [xdm:cancelled](#xdmcancelled) | `integer` | Optional | Tool Usage (this schema) |
| [xdm:complete](#xdmcomplete) | `integer` | Optional | Tool Usage (this schema) |
| [xdm:failure](#xdmfailure) | `integer` | Optional | Tool Usage (this schema) |
| [xdm:name](#xdmname) | `string` | Optional | Tool Usage (this schema) |
| [xdm:saved](#xdmsaved) | `integer` | Optional | Tool Usage (this schema) |
| [xdm:start](#xdmstart) | `integer` | Optional | Tool Usage (this schema) |
| [xdm:step](#xdmstep) | `integer` | Optional | Tool Usage (this schema) |
| [xdm:stepName](#xdmstepname) | `string` | Optional | Tool Usage (this schema) |
| [xdm:submitted](#xdmsubmitted) | `integer` | Optional | Tool Usage (this schema) |
| [xdm:transaction](#xdmtransaction) | Transaction | Optional | Tool Usage (this schema) |
| [xdm:type](#xdmtype) | `string` | Optional | Tool Usage (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## xdm:ID
### ID

Captures the ID of the tool process utilized, if applicable.  For example, this could be a claim, application, or booking ID, etc.

`xdm:ID`
* is optional
* type: `string`
* defined in this schema

### xdm:ID Type


`string`






## xdm:cancelled
### Cancelled

Captured when a visitor cancels out of a tool usage process.

`xdm:cancelled`
* is optional
* type: `integer`
* defined in this schema

### xdm:cancelled Type


`integer`






## xdm:complete
### Complete

Captured when a visitor successfully finishes using any type of tool or utility on the site/app.

`xdm:complete`
* is optional
* type: `integer`
* defined in this schema

### xdm:complete Type


`integer`






## xdm:failure
### Failed

Captured when a step in the tool usage process fails.

`xdm:failure`
* is optional
* type: `integer`
* defined in this schema

### xdm:failure Type


`integer`






## xdm:name
### Name

Tracks the name of the tool in use.

`xdm:name`
* is optional
* type: `string`
* defined in this schema

### xdm:name Type


`string`






## xdm:saved
### Saved

Captured when a visitor saves and exits a tool usage process.

`xdm:saved`
* is optional
* type: `integer`
* defined in this schema

### xdm:saved Type


`integer`






## xdm:start
### Start

Captured when a visitor initializes using any type of tool or utility on the site/app.

`xdm:start`
* is optional
* type: `integer`
* defined in this schema

### xdm:start Type


`integer`






## xdm:step
### Step

Captured when any intermediary tool step is started on the site/app.

`xdm:step`
* is optional
* type: `integer`
* defined in this schema

### xdm:step Type


`integer`






## xdm:stepName
### Step Name

Tracks the name of the tool step in use.

`xdm:stepName`
* is optional
* type: `string`
* defined in this schema

### xdm:stepName Type


`string`






## xdm:submitted
### Submitted

Captured when a visitor submits data during a tool step.  Not necessarily synonymous with a successful event.

`xdm:submitted`
* is optional
* type: `integer`
* defined in this schema

### xdm:submitted Type


`integer`






## xdm:transaction
### Transaction

Extension of Transaction Data Type

`xdm:transaction`
* is optional
* type: Transaction
* defined in this schema

### xdm:transaction Type


* [Transaction](transaction.schema.md) – `https://ns.adobe.com/xdm/datatypes/transaction`





## xdm:type
### Type

Tracks the type or category of the tool in use.

`xdm:type`
* is optional
* type: `string`
* defined in this schema

### xdm:type Type


`string`





