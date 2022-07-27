
# Sitetool Details Schema

```
https://ns.adobe.com/xdm/mixins/experienceevent-healthcare-sitetool
```

Generic collection of site tool behaviors for online interactions. For example interactions with chatbots, surveys, or questionnaires.

| [Abstract](../../../../abstract.md) | [Extensible](../../../../extensions.md) | [Status](../../../../status.md) | [Identifiable](../../../../id.md) | [Custom Properties](../../../../extensions.md) | [Additional Properties](../../../../extensions.md) | Defined In |
|-------------------------------------|-----------------------------------------|---------------------------------|-----------------------------------|------------------------------------------------|----------------------------------------------------|------------|
| Can be instantiated | Yes | Stable | No | Forbidden | Permitted | [fieldgroups/experience-event/industry-verticals/experienceevent-healthcare-sitetool.schema.json](fieldgroups/experience-event/industry-verticals/experienceevent-healthcare-sitetool.schema.json) |

## Sitetool Details Example
```json
{}
```

# Sitetool Details Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [xdm:sitetool](#xdmsitetool) | `object` | Optional | Sitetool Details (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## xdm:sitetool

Information collected by sitetool.

`xdm:sitetool`
* is optional
* type: `object`
* defined in this schema

### xdm:sitetool Type


`object` with following properties:


| Property | Type | Required |
|----------|------|----------|
| `xdm:actor`| string | Optional |
| `xdm:actorID`| string | Optional |
| `xdm:dataGatheringEvent`| object | Optional |
| `xdm:isKeyEvent`| boolean | Optional |
| `xdm:name`| string | Optional |
| `xdm:section`| string | Optional |



#### xdm:actor

A person/member who did the action.

`xdm:actor`
* is optional
* type: `string`

##### xdm:actor Type


`string`



##### xdm:actor Known Values
| Value | Description |
|-------|-------------|
| `Member` | Member |
| `Practitioner` | Practitioner |
| `RelatedPerson` | RelatedPerson |






#### xdm:actorID

Reference to the actor who could be a member,practionner or a relatedperson.

`xdm:actorID`
* is optional
* type: `string`

##### xdm:actorID Type


`string`








#### xdm:dataGatheringEvent

Indicates if this event is a data gathering event and the other event details.

`xdm:dataGatheringEvent`
* is optional
* type: `object`

##### xdm:dataGatheringEvent Type

Unknown type `object`.

```json
{
  "Title": "Data Gathering Event",
  "type": "object",
  "description": "Indicates if this event is a data gathering event and the other event details.",
  "properties": {
    "xdm:isTrue": {
      "Title": "Is True",
      "type": "boolean",
      "description": "Indicates if this event is a data gathering event like quiz,survey, poll."
    },
    "xdm:data": {
      "Title": "Data",
      "type": "object",
      "meta:xdmType": "map",
      "description": "Data that is collected and submitted as part of quiz,survey or poll submit event.",
      "additionalProperties": {
        "type": "object",
        "properties": {
          "xdm:question": {
            "Title": "Question",
            "type": "string",
            "description": "Question of for which the response is collected."
          },
          "xdm:response": {
            "Title": "Response",
            "type": "string",
            "description": "Response provided by the actor."
          }
        }
      }
    },
    "xdm:score": {
      "Title": "Score",
      "type": "integer",
      "description": "Score secured by the actor based on event responses."
    }
  },
  "simpletype": "`object`"
}
```







#### xdm:isKeyEvent

Indicates if this event is a key event.

`xdm:isKeyEvent`
* is optional
* type: `boolean`

##### xdm:isKeyEvent Type


`boolean`







#### xdm:name

Name of the site tool. I.e., chatbot, survey, questionnaire.

`xdm:name`
* is optional
* type: `string`

##### xdm:name Type


`string`








#### xdm:section

Section of the site tool. I.e., main, sub, etc.

`xdm:section`
* is optional
* type: `string`

##### xdm:section Type


`string`










