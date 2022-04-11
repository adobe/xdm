
# Work Task Attributes Schema

```
https://ns.adobe.com/experience/workfront/optask
```

Operational Task related fields

| [Abstract](../../../../abstract.md) | [Extensible](../../../../extensions.md) | [Status](../../../../status.md) | [Identifiable](../../../../id.md) | [Custom Properties](../../../../extensions.md) | [Additional Properties](../../../../extensions.md) | Defined In |
|-------------------------------------|-----------------------------------------|---------------------------------|-----------------------------------|------------------------------------------------|----------------------------------------------------|------------|
| Can be instantiated | Yes | Experimental | No | Forbidden | Permitted | [adobe/experience/workfront/opTask.schema.json](adobe/experience/workfront/opTask.schema.json) |

## Work Task Attributes Example
```json
{
  "workfront:opTask": {
    "workfront:opTaskType": "ISSUE",
    "workfront:storyPoints": 5
  }
}
```

# Work Task Attributes Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [workfront:opTask](#workfrontoptask) | `object` | Optional | Work Task Attributes (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## workfront:opTask
### Operational Task Attributes

`workfront:opTask`
* is optional
* type: `object`
* defined in this schema

### workfront:opTask Type


`object` with following properties:


| Property | Type | Required |
|----------|------|----------|
| `workfront:actualCompletionTimestamp`| string | Optional |
| `workfront:actualDurMinutes`| number | Optional |
| `workfront:actualStartTimestamp`| string | Optional |
| `workfront:assignedToEmployeeID`| string | Optional |
| `workfront:condition`| string | Optional |
| `workfront:description`| string | Optional |
| `workfront:iterationID`| string | Optional |
| `workfront:opTaskType`| string | Optional |
| `workfront:ownerEmployeeID`| string | Optional |
| `workfront:percentComplete`| number | Optional |
| `workfront:plannedCompletionTimestamp`| string | Optional |
| `workfront:plannedStartTimestamp`| string | Optional |
| `workfront:priority`| string | Optional |
| `workfront:status`| string | Optional |
| `workfront:storyPoints`| number | Optional |
| `workfront:teamID`| string | Optional |



#### workfront:actualCompletionTimestamp
##### OpTask Actual Completion Timestamp


`workfront:actualCompletionTimestamp`
* is optional
* type: `string`

##### workfront:actualCompletionTimestamp Type


`string`
* format: `date-time` – date and time (according to [RFC 3339, section 5.6](http://tools.ietf.org/html/rfc3339))








#### workfront:actualDurMinutes
##### OpTask Actual Duration Minutes


`workfront:actualDurMinutes`
* is optional
* type: `number`

##### workfront:actualDurMinutes Type


`number`








#### workfront:actualStartTimestamp
##### OpTask Actual Start Timestamp


`workfront:actualStartTimestamp`
* is optional
* type: `string`

##### workfront:actualStartTimestamp Type


`string`
* format: `date-time` – date and time (according to [RFC 3339, section 5.6](http://tools.ietf.org/html/rfc3339))








#### workfront:assignedToEmployeeID
##### OpTask Assigned To Employee ID


`workfront:assignedToEmployeeID`
* is optional
* type: `string`

##### workfront:assignedToEmployeeID Type


`string`








#### workfront:condition
##### OpTask Condition


`workfront:condition`
* is optional
* type: `string`

##### workfront:condition Type


`string`








#### workfront:description
##### OpTask Description


`workfront:description`
* is optional
* type: `string`

##### workfront:description Type


`string`








#### workfront:iterationID
##### OpTask Iteration ID


`workfront:iterationID`
* is optional
* type: `string`

##### workfront:iterationID Type


`string`








#### workfront:opTaskType
##### Operational Task Type


`workfront:opTaskType`
* is optional
* type: `string`

##### workfront:opTaskType Type


`string`








#### workfront:ownerEmployeeID
##### OpTask Owner Employee ID


`workfront:ownerEmployeeID`
* is optional
* type: `string`

##### workfront:ownerEmployeeID Type


`string`








#### workfront:percentComplete
##### OpTask Percent Complete


`workfront:percentComplete`
* is optional
* type: `number`

##### workfront:percentComplete Type


`number`








#### workfront:plannedCompletionTimestamp
##### OpTask Planned Completion Timestamp


`workfront:plannedCompletionTimestamp`
* is optional
* type: `string`

##### workfront:plannedCompletionTimestamp Type


`string`
* format: `date-time` – date and time (according to [RFC 3339, section 5.6](http://tools.ietf.org/html/rfc3339))








#### workfront:plannedStartTimestamp
##### OpTask Planned Start Timestamp


`workfront:plannedStartTimestamp`
* is optional
* type: `string`

##### workfront:plannedStartTimestamp Type


`string`
* format: `date-time` – date and time (according to [RFC 3339, section 5.6](http://tools.ietf.org/html/rfc3339))








#### workfront:priority
##### OpTask Priority


`workfront:priority`
* is optional
* type: `string`

##### workfront:priority Type


`string`








#### workfront:status
##### OpTask Status


`workfront:status`
* is optional
* type: `string`

##### workfront:status Type


`string`








#### workfront:storyPoints
##### OpTask Story Points


`workfront:storyPoints`
* is optional
* type: `number`

##### workfront:storyPoints Type


`number`








#### workfront:teamID
##### OpTask Team ID


`workfront:teamID`
* is optional
* type: `string`

##### workfront:teamID Type


`string`










