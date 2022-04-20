
# Work Task Attributes Schema

```
https://ns.adobe.com/experience/workfront/task
```

Task related fields

| [Abstract](../../../../abstract.md) | [Extensible](../../../../extensions.md) | [Status](../../../../status.md) | [Identifiable](../../../../id.md) | [Custom Properties](../../../../extensions.md) | [Additional Properties](../../../../extensions.md) | Defined In |
|-------------------------------------|-----------------------------------------|---------------------------------|-----------------------------------|------------------------------------------------|----------------------------------------------------|------------|
| Can be instantiated | Yes | Experimental | No | Forbidden | Permitted | [adobe/experience/workfront/task.schema.json](adobe/experience/workfront/task.schema.json) |

## Work Task Attributes Example
```json
{
  "workfront:storyPoints": 5,
  "workfront:status": "New"
}
```

# Work Task Attributes Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [workfront:task](#workfronttask) | `object` | Optional | Work Task Attributes (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## workfront:task
### Task Attributes

`workfront:task`
* is optional
* type: `object`
* defined in this schema

### workfront:task Type


`object` with following properties:


| Property | Type | Required |
|----------|------|----------|
| `workfront:actualCompletionTimestamp`| string | Optional |
| `workfront:actualDurationMinutes`| number | Optional |
| `workfront:actualStartTimestamp`| string | Optional |
| `workfront:assignedToEmployeeID`| string | Optional |
| `workfront:condition`| string | Optional |
| `workfront:description`| string | Optional |
| `workfront:durationMinutes`| number | Optional |
| `workfront:estimatedCompletionTimestamp`| string | Optional |
| `workfront:estimatedStartTimestamp`| string | Optional |
| `workfront:groupID`| string | Optional |
| `workfront:hierarchyIndentLevel`| integer | Optional |
| `workfront:isCritical`| boolean | Optional |
| `workfront:iterationID`| string | Optional |
| `workfront:milestoneID`| string | Optional |
| `workfront:numberOfChildren`| integer | Optional |
| `workfront:numberOfOpenOpTasks`| integer | Optional |
| `workfront:originalDurationMinutes`| number | Optional |
| `workfront:parentTaskID`| string | Optional |
| `workfront:percentComplete`| number | Optional |
| `workfront:plannedCompletionTimestamp`| string | Optional |
| `workfront:plannedDurationMinutes`| number | Optional |
| `workfront:plannedStartTimestamp`| string | Optional |
| `workfront:priority`| string | Optional |
| `workfront:projectedCompletionTimestamp`| string | Optional |
| `workfront:projectedStartTimestamp`| string | Optional |
| `workfront:status`| string | Optional |
| `workfront:storyPoints`| number | Optional |
| `workfront:teamID`| string | Optional |



#### workfront:actualCompletionTimestamp
##### Task Actual Completion Timestamp


`workfront:actualCompletionTimestamp`
* is optional
* type: `string`

##### workfront:actualCompletionTimestamp Type


`string`
* format: `date-time` – date and time (according to [RFC 3339, section 5.6](http://tools.ietf.org/html/rfc3339))








#### workfront:actualDurationMinutes
##### Task Actual Duration Minutes


`workfront:actualDurationMinutes`
* is optional
* type: `number`

##### workfront:actualDurationMinutes Type


`number`








#### workfront:actualStartTimestamp
##### Task Actual Start Timestamp


`workfront:actualStartTimestamp`
* is optional
* type: `string`

##### workfront:actualStartTimestamp Type


`string`
* format: `date-time` – date and time (according to [RFC 3339, section 5.6](http://tools.ietf.org/html/rfc3339))








#### workfront:assignedToEmployeeID
##### Task Assigned To Employee ID


`workfront:assignedToEmployeeID`
* is optional
* type: `string`

##### workfront:assignedToEmployeeID Type


`string`








#### workfront:condition
##### Task Condition


`workfront:condition`
* is optional
* type: `string`

##### workfront:condition Type


`string`








#### workfront:description
##### Task Description


`workfront:description`
* is optional
* type: `string`

##### workfront:description Type


`string`








#### workfront:durationMinutes
##### Task Duration Minutes


`workfront:durationMinutes`
* is optional
* type: `number`

##### workfront:durationMinutes Type


`number`








#### workfront:estimatedCompletionTimestamp
##### Task Estimated Completion Timestamp


`workfront:estimatedCompletionTimestamp`
* is optional
* type: `string`

##### workfront:estimatedCompletionTimestamp Type


`string`
* format: `date-time` – date and time (according to [RFC 3339, section 5.6](http://tools.ietf.org/html/rfc3339))








#### workfront:estimatedStartTimestamp
##### Task Estimated Start Timestamp


`workfront:estimatedStartTimestamp`
* is optional
* type: `string`

##### workfront:estimatedStartTimestamp Type


`string`
* format: `date-time` – date and time (according to [RFC 3339, section 5.6](http://tools.ietf.org/html/rfc3339))








#### workfront:groupID
##### Task Group ID


`workfront:groupID`
* is optional
* type: `string`

##### workfront:groupID Type


`string`








#### workfront:hierarchyIndentLevel
##### Task Hierarchy Indent Level


`workfront:hierarchyIndentLevel`
* is optional
* type: `integer`

##### workfront:hierarchyIndentLevel Type


`integer`








#### workfront:isCritical
##### Task Is Critical


`workfront:isCritical`
* is optional
* type: `boolean`

##### workfront:isCritical Type


`boolean`







#### workfront:iterationID
##### Iteration ID


`workfront:iterationID`
* is optional
* type: `string`

##### workfront:iterationID Type


`string`








#### workfront:milestoneID
##### Task Milestone ID


`workfront:milestoneID`
* is optional
* type: `string`

##### workfront:milestoneID Type


`string`








#### workfront:numberOfChildren
##### Task Number of Children


`workfront:numberOfChildren`
* is optional
* type: `integer`

##### workfront:numberOfChildren Type


`integer`








#### workfront:numberOfOpenOpTasks
##### Task Number of Open OpTasks


`workfront:numberOfOpenOpTasks`
* is optional
* type: `integer`

##### workfront:numberOfOpenOpTasks Type


`integer`








#### workfront:originalDurationMinutes
##### Task Original Duration Minutes


`workfront:originalDurationMinutes`
* is optional
* type: `number`

##### workfront:originalDurationMinutes Type


`number`








#### workfront:parentTaskID
##### Parent Task ID


`workfront:parentTaskID`
* is optional
* type: `string`

##### workfront:parentTaskID Type


`string`








#### workfront:percentComplete
##### Task Percent Complete


`workfront:percentComplete`
* is optional
* type: `number`

##### workfront:percentComplete Type


`number`








#### workfront:plannedCompletionTimestamp
##### Task Planned Completion Timestamp


`workfront:plannedCompletionTimestamp`
* is optional
* type: `string`

##### workfront:plannedCompletionTimestamp Type


`string`
* format: `date-time` – date and time (according to [RFC 3339, section 5.6](http://tools.ietf.org/html/rfc3339))








#### workfront:plannedDurationMinutes
##### Task Planned Duration Minutes


`workfront:plannedDurationMinutes`
* is optional
* type: `number`

##### workfront:plannedDurationMinutes Type


`number`








#### workfront:plannedStartTimestamp
##### Task Planned Start Timestamp


`workfront:plannedStartTimestamp`
* is optional
* type: `string`

##### workfront:plannedStartTimestamp Type


`string`
* format: `date-time` – date and time (according to [RFC 3339, section 5.6](http://tools.ietf.org/html/rfc3339))








#### workfront:priority
##### Task Priority


`workfront:priority`
* is optional
* type: `string`

##### workfront:priority Type


`string`








#### workfront:projectedCompletionTimestamp
##### Task Projected Completion Timestamp


`workfront:projectedCompletionTimestamp`
* is optional
* type: `string`

##### workfront:projectedCompletionTimestamp Type


`string`
* format: `date-time` – date and time (according to [RFC 3339, section 5.6](http://tools.ietf.org/html/rfc3339))








#### workfront:projectedStartTimestamp
##### Task Projected Start Timestamp


`workfront:projectedStartTimestamp`
* is optional
* type: `string`

##### workfront:projectedStartTimestamp Type


`string`
* format: `date-time` – date and time (according to [RFC 3339, section 5.6](http://tools.ietf.org/html/rfc3339))








#### workfront:status
##### Task Status


`workfront:status`
* is optional
* type: `string`

##### workfront:status Type


`string`








#### workfront:storyPoints
##### Task Story Points


`workfront:storyPoints`
* is optional
* type: `number`

##### workfront:storyPoints Type


`number`








#### workfront:teamID
##### Task Team ID


`workfront:teamID`
* is optional
* type: `string`

##### workfront:teamID Type


`string`










