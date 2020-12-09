
# Tool Usage Schema

```
https://ns.adobe.com/xdm/datatypes/tool-usage
```

Tool usage comprises the most common steps used in a site tool or utility, such as calculators, registrations, and requests for more information.

| [Abstract](../../abstract.md) | [Extensible](../../extensions.md) | [Status](../../status.md) | [Identifiable](../../id.md) | [Custom Properties](../../extensions.md) | [Additional Properties](../../extensions.md) | Defined In |
|-------------------------------|-----------------------------------|---------------------------|-----------------------------|------------------------------------------|----------------------------------------------|------------|
| Can be instantiated | Yes | Experimental | No | Forbidden | Permitted | [datatypes/tool-usage.schema.json](datatypes/tool-usage.schema.json) |
## Schema Hierarchy

* Tool Usage `https://ns.adobe.com/xdm/datatypes/tool-usage`
  * [Measure](data/measure.schema.md) `https://ns.adobe.com/xdm/data/measure`
  * [Transaction](transaction.schema.md) `https://ns.adobe.com/xdm/datatypes/transaction`


## Tool Usage Example
```json
{}
```

# Tool Usage Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [xdm:toolUsageCancelled](#xdmtoolusagecancelled) | Measure | Optional | Tool Usage (this schema) |
| [xdm:toolUsageComplete](#xdmtoolusagecomplete) | Measure | Optional | Tool Usage (this schema) |
| [xdm:toolUsageFailure](#xdmtoolusagefailure) | Measure | Optional | Tool Usage (this schema) |
| [xdm:toolUsageID](#xdmtoolusageid) | `string` | Optional | Tool Usage (this schema) |
| [xdm:toolUsageName](#xdmtoolusagename) | `string` | Optional | Tool Usage (this schema) |
| [xdm:toolUsageSaved](#xdmtoolusagesaved) | Measure | Optional | Tool Usage (this schema) |
| [xdm:toolUsageStart](#xdmtoolusagestart) | Measure | Optional | Tool Usage (this schema) |
| [xdm:toolUsageStep](#xdmtoolusagestep) | Measure | Optional | Tool Usage (this schema) |
| [xdm:toolUsageStepName](#xdmtoolusagestepname) | `string` | Optional | Tool Usage (this schema) |
| [xdm:toolUsageSubmitted](#xdmtoolusagesubmitted) | Measure | Optional | Tool Usage (this schema) |
| [xdm:toolUsageTransaction](#xdmtoolusagetransaction) | Transaction | Optional | Tool Usage (this schema) |
| [xdm:toolUsageType](#xdmtoolusagetype) | `string` | Optional | Tool Usage (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## xdm:toolUsageCancelled
### Tool Usage Cancelled

Captured when a visitor cancels out of a tool usage process.

`xdm:toolUsageCancelled`
* is optional
* type: Measure
* defined in this schema

### xdm:toolUsageCancelled Type


* [Measure](data/measure.schema.md) – `https://ns.adobe.com/xdm/data/measure`





## xdm:toolUsageComplete
### Tool Usage Complete

Captured when a visitor successfully finishes using any type of tool or utility on the site/app.

`xdm:toolUsageComplete`
* is optional
* type: Measure
* defined in this schema

### xdm:toolUsageComplete Type


* [Measure](data/measure.schema.md) – `https://ns.adobe.com/xdm/data/measure`





## xdm:toolUsageFailure
### Tool Usage Failed

Captured when a step in the tool usage process fails.

`xdm:toolUsageFailure`
* is optional
* type: Measure
* defined in this schema

### xdm:toolUsageFailure Type


* [Measure](data/measure.schema.md) – `https://ns.adobe.com/xdm/data/measure`





## xdm:toolUsageID
### Tool Usage ID

Captures the ID of the tool process utilized, if applicable.  For example, this could be a claim, application, or booking ID, etc.

`xdm:toolUsageID`
* is optional
* type: `string`
* defined in this schema

### xdm:toolUsageID Type


`string`






## xdm:toolUsageName
### Tool Usage Name

Tracks the name of the tool in use.

`xdm:toolUsageName`
* is optional
* type: `string`
* defined in this schema

### xdm:toolUsageName Type


`string`






## xdm:toolUsageSaved
### Tool Usage Saved

Captured when a visitor saves and exits a tool usage process.

`xdm:toolUsageSaved`
* is optional
* type: Measure
* defined in this schema

### xdm:toolUsageSaved Type


* [Measure](data/measure.schema.md) – `https://ns.adobe.com/xdm/data/measure`





## xdm:toolUsageStart
### Tool Usage Start

Captured when a visitor initializes using any type of tool or utility on the site/app.

`xdm:toolUsageStart`
* is optional
* type: Measure
* defined in this schema

### xdm:toolUsageStart Type


* [Measure](data/measure.schema.md) – `https://ns.adobe.com/xdm/data/measure`





## xdm:toolUsageStep
### Tool Usage Step

Captured when any intermediary tool step is started on the site/app.

`xdm:toolUsageStep`
* is optional
* type: Measure
* defined in this schema

### xdm:toolUsageStep Type


* [Measure](data/measure.schema.md) – `https://ns.adobe.com/xdm/data/measure`





## xdm:toolUsageStepName
### Tool Usage Step Name

Tracks the name of the tool step in use.

`xdm:toolUsageStepName`
* is optional
* type: `string`
* defined in this schema

### xdm:toolUsageStepName Type


`string`






## xdm:toolUsageSubmitted
### Tool Usage Submitted

Captured when a visitor submits data during a tool step.  Not necessarily synonymous with a successful event.

`xdm:toolUsageSubmitted`
* is optional
* type: Measure
* defined in this schema

### xdm:toolUsageSubmitted Type


* [Measure](data/measure.schema.md) – `https://ns.adobe.com/xdm/data/measure`





## xdm:toolUsageTransaction
### Tool Usage Transaction

Extension of Transaction Data Type

`xdm:toolUsageTransaction`
* is optional
* type: Transaction
* defined in this schema

### xdm:toolUsageTransaction Type


* [Transaction](transaction.schema.md) – `https://ns.adobe.com/xdm/datatypes/transaction`





## xdm:toolUsageType
### Tool Usage Type

Tracks the type or category of the tool in use.

`xdm:toolUsageType`
* is optional
* type: `string`
* defined in this schema

### xdm:toolUsageType Type


`string`





