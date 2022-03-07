
# Work Task Atrributes Schema

```
https://ns.adobe.com/experience/workfront/task
```

Task related fields

| [Abstract](../../../../abstract.md) | [Extensible](../../../../extensions.md) | [Status](../../../../status.md) | [Identifiable](../../../../id.md) | [Custom Properties](../../../../extensions.md) | [Additional Properties](../../../../extensions.md) | Defined In |
|-------------------------------------|-----------------------------------------|---------------------------------|-----------------------------------|------------------------------------------------|----------------------------------------------------|------------|
| Can be instantiated | Yes | Experimental | No | Forbidden | Permitted | [adobe/experience/workfront/task.schema.json](adobe/experience/workfront/task.schema.json) |

## Work Task Atrributes Example
```json
{
  "workfront:storyPoints": 5,
  "workfront:status": "New"
}
```

# Work Task Atrributes Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [workfront:status](#workfrontstatus) | `string` | Optional | Work Task Atrributes (this schema) |
| [workfront:storyPoints](#workfrontstorypoints) | `number` | Optional | Work Task Atrributes (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## workfront:status
### Status

The status of this object

`workfront:status`
* is optional
* type: `string`
* defined in this schema

### workfront:status Type


`string`






## workfront:storyPoints
### Story Points

The number of story points assigned to this task

`workfront:storyPoints`
* is optional
* type: `number`
* defined in this schema

### workfront:storyPoints Type


`number`





