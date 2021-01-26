
# Decision Option Calendar Constraints Schema

```
https://ns.adobe.com/experience/decisioning/calendar-constraints
```

Calendar constraints decide if a decision option is valid given a date range. Outside that date range the option cannot be proposed.

| [Abstract](../../../../abstract.md) | [Extensible](../../../../extensions.md) | [Status](../../../../status.md) | [Identifiable](../../../../id.md) | [Custom Properties](../../../../extensions.md) | [Additional Properties](../../../../extensions.md) | Defined In |
|-------------------------------------|-----------------------------------------|---------------------------------|-----------------------------------|------------------------------------------------|----------------------------------------------------|------------|
| Can be instantiated | Yes | Stable | No | Forbidden | Permitted | [adobe/experience/decisioning/calendar-constraints.schema.json](adobe/experience/decisioning/calendar-constraints.schema.json) |
## Schema Hierarchy

* Decision Option Calendar Constraints `https://ns.adobe.com/experience/decisioning/calendar-constraints`
  * [Calendar Constraint Details](calendar-constraint-details.schema.md) `https://ns.adobe.com/experience/decisioning/calendar-constraint-details`


## Decision Option Calendar Constraints Example
```json
{
  "https://ns.adobe.com/experience/decisioning/calendarConstraints": {
    "https://ns.adobe.com/experience/decisioning/startTime": "2018-03-13T05:59:18.914Z",
    "https://ns.adobe.com/experience/decisioning/endTime": "2018-12-27T05:59:18.914Z"
  }
}
```

# Decision Option Calendar Constraints Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [https://ns.adobe.com/experience/decisioning/calendarConstraints](#httpsnsadobecomexperiencedecisioningcalendarconstraints) | Calendar Constraint Details | Optional | Decision Option Calendar Constraints (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## https://ns.adobe.com/experience/decisioning/calendarConstraints
### Calendar Constraint Details

Calendar constraints decide if a decision option is valid given a date range. Outside that date range the option cannot be proposed.

`https://ns.adobe.com/experience/decisioning/calendarConstraints`
* is optional
* type: Calendar Constraint Details
* defined in this schema

### https://ns.adobe.com/experience/decisioning/calendarConstraints Type


* [Calendar Constraint Details](calendar-constraint-details.schema.md) – `https://ns.adobe.com/experience/decisioning/calendar-constraint-details`




