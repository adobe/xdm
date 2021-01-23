
# Calendar Constraint Details Schema

```
https://ns.adobe.com/experience/decisioning/calendar-constraint-details
```

A calendar constraint is a component of a decision option that defines the date range when option is valid. Outside that date range the option cannot be proposed.

| [Abstract](../../../../abstract.md) | [Extensible](../../../../extensions.md) | [Status](../../../../status.md) | [Identifiable](../../../../id.md) | [Custom Properties](../../../../extensions.md) | [Additional Properties](../../../../extensions.md) | Defined In |
|-------------------------------------|-----------------------------------------|---------------------------------|-----------------------------------|------------------------------------------------|----------------------------------------------------|------------|
| Can be instantiated | Yes | Stable | No | Forbidden | Permitted | [adobe/experience/decisioning/calendar-constraint-details.schema.json](adobe/experience/decisioning/calendar-constraint-details.schema.json) |

## Calendar Constraint Details Example
```json
{
  "https://ns.adobe.com/experience/decisioning/startTime": "2018-03-13T05:59:18.914Z",
  "https://ns.adobe.com/experience/decisioning/endTime": "2018-12-27T05:59:18.914Z"
}
```

# Calendar Constraint Details Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [xdm:endDate](#xdmenddate) | `string` | Optional | Calendar Constraint Details (this schema) |
| [xdm:startDate](#xdmstartdate) | `string` | Optional | Calendar Constraint Details (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## xdm:endDate
### End Date &amp; Time

The end date of a decision options validity. Options that have passed their end date can no longer cannot be proposed in the decisioning process.

`xdm:endDate`
* is optional
* type: `string`
* defined in this schema

### xdm:endDate Type


`string`
* format: `date-time` – date and time (according to [RFC 3339, section 5.6](http://tools.ietf.org/html/rfc3339))






## xdm:startDate
### Start Date &amp; Time

The start date of a decision options validity.. Options that have not reached their start date cannot be proposed yet in the decisioning process.

`xdm:startDate`
* is optional
* type: `string`
* defined in this schema

### xdm:startDate Type


`string`
* format: `date-time` – date and time (according to [RFC 3339, section 5.6](http://tools.ietf.org/html/rfc3339))





