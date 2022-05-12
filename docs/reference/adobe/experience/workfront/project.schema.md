
# Work Project Attributes Schema

```
https://ns.adobe.com/experience/workfront/project
```

Project related fields

| [Abstract](../../../../abstract.md) | [Extensible](../../../../extensions.md) | [Status](../../../../status.md) | [Identifiable](../../../../id.md) | [Custom Properties](../../../../extensions.md) | [Additional Properties](../../../../extensions.md) | Defined In |
|-------------------------------------|-----------------------------------------|---------------------------------|-----------------------------------|------------------------------------------------|----------------------------------------------------|------------|
| Can be instantiated | Yes | Experimental | No | Forbidden | Permitted | [adobe/experience/workfront/project.schema.json](adobe/experience/workfront/project.schema.json) |

## Work Project Attributes Example
```json
{
  "workfront:project": {
    "workfront:budget": 10000,
    "workfront:priority": "first"
  }
}
```

# Work Project Attributes Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [workfront:project](#workfrontproject) | `object` | Optional | Work Project Attributes (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## workfront:project
### Project Attributes

`workfront:project`
* is optional
* type: `object`
* defined in this schema

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










