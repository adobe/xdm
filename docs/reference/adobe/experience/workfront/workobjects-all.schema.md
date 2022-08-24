
# Workfront Work Objects Schema

```
https://ns.adobe.com/experience/workfront/workobjects-all
```

High level field group that brings in all available work objects.

| [Abstract](../../../../abstract.md) | [Extensible](../../../../extensions.md) | [Status](../../../../status.md) | [Identifiable](../../../../id.md) | [Custom Properties](../../../../extensions.md) | [Additional Properties](../../../../extensions.md) | Defined In |
|-------------------------------------|-----------------------------------------|---------------------------------|-----------------------------------|------------------------------------------------|----------------------------------------------------|------------|
| Can be instantiated | Yes | Experimental | No | Forbidden | Permitted | [adobe/experience/workfront/workobjects-all.schema.json](adobe/experience/workfront/workobjects-all.schema.json) |
## Schema Hierarchy

* Workfront Work Objects `https://ns.adobe.com/experience/workfront/workobjects-all`
  * [Work Task Attributes](task.schema.md) `https://ns.adobe.com/experience/workfront/task`
  * [Work Project Attributes](project.schema.md) `https://ns.adobe.com/experience/workfront/project`
  * [Work Program Attributes](program.schema.md) `https://ns.adobe.com/experience/workfront/program`
  * [Work Portfolio Attributes](portfolio.schema.md) `https://ns.adobe.com/experience/workfront/portfolio`
  * [Work Task Attributes](opTask.schema.md) `https://ns.adobe.com/experience/workfront/optask`


## Workfront Work Objects Example
```json
{
  "workfront:storyPoints": 5,
  "workfront:status": "New"
}
```

# Workfront Work Objects Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [workfront:opTask](#workfrontoptask) | `object` | Optional | [Work Task Attributes](opTask.schema.md#workfrontoptask) |
| [workfront:portfolio](#workfrontportfolio) | `object` | Optional | [Work Portfolio Attributes](portfolio.schema.md#workfrontportfolio) |
| [workfront:program](#workfrontprogram) | `object` | Optional | [Work Program Attributes](program.schema.md#workfrontprogram) |
| [workfront:project](#workfrontproject) | `object` | Optional | [Work Project Attributes](project.schema.md#workfrontproject) |
| [workfront:task](#workfronttask) | `object` | Optional | [Work Task Attributes](task.schema.md#workfronttask) |
| `*` | any | Additional | this schema *allows* additional properties |

## workfront:opTask
### Operational Task Attributes

`workfront:opTask`
* is optional
* type: `object`
* defined in [Work Task Attributes](opTask.schema.md#workfrontoptask)

### workfront:opTask Type


`object` with following properties:


| Property | Type | Required |
|----------|------|----------|
| `workfront:actualCompletionTimestamp`| string | Optional |
| `workfront:actualDurationMinutes`| number | Optional |
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








#### workfront:actualDurationMinutes
##### OpTask Actual Duration Minutes


`workfront:actualDurationMinutes`
* is optional
* type: `number`

##### workfront:actualDurationMinutes Type


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











## workfront:portfolio
### Portfolio Attributes

`workfront:portfolio`
* is optional
* type: `object`
* defined in [Work Portfolio Attributes](portfolio.schema.md#workfrontportfolio)

### workfront:portfolio Type


`object` with following properties:


| Property | Type | Required |
|----------|------|----------|
| `workfront:budget`| number | Optional |
| `workfront:description`| string | Optional |
| `workfront:isActive`| boolean | Optional |
| `workfront:ownerEmployeeID`| string | Optional |



#### workfront:budget
##### Portfolio Budget


`workfront:budget`
* is optional
* type: `number`

##### workfront:budget Type


`number`








#### workfront:description
##### Portfolio Description


`workfront:description`
* is optional
* type: `string`

##### workfront:description Type


`string`








#### workfront:isActive
##### Portfolio Is Active


`workfront:isActive`
* is optional
* type: `boolean`

##### workfront:isActive Type


`boolean`







#### workfront:ownerEmployeeID
##### Portfolio Owner Employee ID


`workfront:ownerEmployeeID`
* is optional
* type: `string`

##### workfront:ownerEmployeeID Type


`string`











## workfront:program
### Program Attributes

`workfront:program`
* is optional
* type: `object`
* defined in [Work Program Attributes](program.schema.md#workfrontprogram)

### workfront:program Type


`object` with following properties:


| Property | Type | Required |
|----------|------|----------|
| `workfront:description`| string | Optional |
| `workfront:isActive`| boolean | Optional |
| `workfront:ownerEmployeeID`| string | Optional |



#### workfront:description
##### Program Description


`workfront:description`
* is optional
* type: `string`

##### workfront:description Type


`string`








#### workfront:isActive
##### Program is Active


`workfront:isActive`
* is optional
* type: `boolean`

##### workfront:isActive Type


`boolean`







#### workfront:ownerEmployeeID
##### Program Owner Employee ID


`workfront:ownerEmployeeID`
* is optional
* type: `string`

##### workfront:ownerEmployeeID Type


`string`











## workfront:project
### Project Attributes

`workfront:project`
* is optional
* type: `object`
* defined in [Work Project Attributes](project.schema.md#workfrontproject)

### workfront:project Type


`object` with following properties:


| Property | Type | Required |
|----------|------|----------|
| `workfront:actualCompletionTimestamp`| string | Optional |
| `workfront:actualStartTimestamp`| string | Optional |
| `workfront:budget`| number | Optional |
| `workfront:condition`| string | Optional |
| `workfront:description`| string | Optional |
| `workfront:displayOrder`| integer | Optional |
| `workfront:durationMinutes`| number | Optional |
| `workfront:estimatedCompletionTimestamp`| string | Optional |
| `workfront:estimatedStartTimestamp`| string | Optional |
| `workfront:groupID`| string | Optional |
| `workfront:milestonePathID`| string | Optional |
| `workfront:ownerEmployeeID`| string | Optional |
| `workfront:percentComplete`| number | Optional |
| `workfront:plannedCompletionTimestamp`| string | Optional |
| `workfront:plannedStartTimestamp`| string | Optional |
| `workfront:priority`| string | Optional |
| `workfront:projectedCompletionTimestamp`| string | Optional |
| `workfront:projectedStartTimestamp`| string | Optional |
| `workfront:status`| string | Optional |
| `workfront:teamID`| string | Optional |



#### workfront:actualCompletionTimestamp
##### Project Actual Completion Timestamp


`workfront:actualCompletionTimestamp`
* is optional
* type: `string`

##### workfront:actualCompletionTimestamp Type


`string`
* format: `date-time` – date and time (according to [RFC 3339, section 5.6](http://tools.ietf.org/html/rfc3339))








#### workfront:actualStartTimestamp
##### Project Actual Start Timestamp


`workfront:actualStartTimestamp`
* is optional
* type: `string`

##### workfront:actualStartTimestamp Type


`string`
* format: `date-time` – date and time (according to [RFC 3339, section 5.6](http://tools.ietf.org/html/rfc3339))








#### workfront:budget
##### Project Budget


`workfront:budget`
* is optional
* type: `number`

##### workfront:budget Type


`number`








#### workfront:condition
##### Project Condition


`workfront:condition`
* is optional
* type: `string`

##### workfront:condition Type


`string`








#### workfront:description
##### Project Description


`workfront:description`
* is optional
* type: `string`

##### workfront:description Type


`string`








#### workfront:displayOrder
##### Project Display Order


`workfront:displayOrder`
* is optional
* type: `integer`

##### workfront:displayOrder Type


`integer`








#### workfront:durationMinutes
##### Project Duration Minutes


`workfront:durationMinutes`
* is optional
* type: `number`

##### workfront:durationMinutes Type


`number`








#### workfront:estimatedCompletionTimestamp
##### Project Estimated Completion Timestamp


`workfront:estimatedCompletionTimestamp`
* is optional
* type: `string`

##### workfront:estimatedCompletionTimestamp Type


`string`
* format: `date-time` – date and time (according to [RFC 3339, section 5.6](http://tools.ietf.org/html/rfc3339))








#### workfront:estimatedStartTimestamp
##### Project Estimated Start Timestamp


`workfront:estimatedStartTimestamp`
* is optional
* type: `string`

##### workfront:estimatedStartTimestamp Type


`string`
* format: `date-time` – date and time (according to [RFC 3339, section 5.6](http://tools.ietf.org/html/rfc3339))








#### workfront:groupID
##### Project Group ID


`workfront:groupID`
* is optional
* type: `string`

##### workfront:groupID Type


`string`








#### workfront:milestonePathID
##### Project Milestone Path ID


`workfront:milestonePathID`
* is optional
* type: `string`

##### workfront:milestonePathID Type


`string`








#### workfront:ownerEmployeeID
##### Project Owner Employee ID


`workfront:ownerEmployeeID`
* is optional
* type: `string`

##### workfront:ownerEmployeeID Type


`string`








#### workfront:percentComplete
##### Project Percent Complete


`workfront:percentComplete`
* is optional
* type: `number`

##### workfront:percentComplete Type


`number`








#### workfront:plannedCompletionTimestamp
##### Project Planned Completion Timestamp


`workfront:plannedCompletionTimestamp`
* is optional
* type: `string`

##### workfront:plannedCompletionTimestamp Type


`string`
* format: `date-time` – date and time (according to [RFC 3339, section 5.6](http://tools.ietf.org/html/rfc3339))








#### workfront:plannedStartTimestamp
##### Project Planned Start Timestamp


`workfront:plannedStartTimestamp`
* is optional
* type: `string`

##### workfront:plannedStartTimestamp Type


`string`
* format: `date-time` – date and time (according to [RFC 3339, section 5.6](http://tools.ietf.org/html/rfc3339))








#### workfront:priority
##### Project Priority


`workfront:priority`
* is optional
* type: `string`

##### workfront:priority Type


`string`








#### workfront:projectedCompletionTimestamp
##### Project Projected Completion Timestamp


`workfront:projectedCompletionTimestamp`
* is optional
* type: `string`

##### workfront:projectedCompletionTimestamp Type


`string`
* format: `date-time` – date and time (according to [RFC 3339, section 5.6](http://tools.ietf.org/html/rfc3339))








#### workfront:projectedStartTimestamp
##### Project Projected Start Timestamp


`workfront:projectedStartTimestamp`
* is optional
* type: `string`

##### workfront:projectedStartTimestamp Type


`string`
* format: `date-time` – date and time (according to [RFC 3339, section 5.6](http://tools.ietf.org/html/rfc3339))








#### workfront:status
##### Project Status


`workfront:status`
* is optional
* type: `string`

##### workfront:status Type


`string`








#### workfront:teamID
##### Project Team ID


`workfront:teamID`
* is optional
* type: `string`

##### workfront:teamID Type


`string`











## workfront:task
### Task Attributes

`workfront:task`
* is optional
* type: `object`
* defined in [Work Task Attributes](task.schema.md#workfronttask)

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










