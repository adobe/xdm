
# Survey Response Details Schema

```
https://ns.adobe.com/xdm/mixins/experienceevent-survey-response-details
```



| [Abstract](../../../abstract.md) | [Extensible](../../../extensions.md) | [Status](../../../status.md) | [Identifiable](../../../id.md) | [Custom Properties](../../../extensions.md) | [Additional Properties](../../../extensions.md) | Defined In |
|----------------------------------|--------------------------------------|------------------------------|--------------------------------|---------------------------------------------|-------------------------------------------------|------------|
| Can be instantiated | Yes | Stable | No | Forbidden | Permitted | [fieldgroups/experience-event/experienceevent-survey-response-details.schema.json](fieldgroups/experience-event/experienceevent-survey-response-details.schema.json) |

## Survey Response Details Example
```json
{
  "xdm:surveyResponse": {
    "xdm:surveyID": ""
  }
}
```

# Survey Response Details Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [xdm:surveyResponse](#xdmsurveyresponse) | `object` | Optional | Survey Response Details (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## xdm:surveyResponse

Stores details related to a survey that has been completed by a user.

`xdm:surveyResponse`
* is optional
* type: `object`
* defined in this schema

### xdm:surveyResponse Type


`object` with following properties:


| Property | Type | Required |
|----------|------|----------|
| `xdm:surveyAnswers`| array | Optional |
| `xdm:surveyID`| string | Optional |
| `xdm:surveyQuestions`| array | Optional |
| `xdm:surveySteps`|  | Optional |



#### xdm:surveyAnswers
##### Survey Answers

An array of the answers provided by the visitor within a survey.

`xdm:surveyAnswers`
* is optional
* type: `string[]`


##### xdm:surveyAnswers Type


Array type: `string[]`

All items must be of the type:
`string`











#### xdm:surveyID
##### Survey ID

ID for the specific survey taken.

`xdm:surveyID`
* is optional
* type: `string`

##### xdm:surveyID Type


`string`








#### xdm:surveyQuestions
##### Survey Questions

An array of the questions presented to the visitor within a survey.

`xdm:surveyQuestions`
* is optional
* type: `string[]`


##### xdm:surveyQuestions Type


Array type: `string[]`

All items must be of the type:
`string`











#### xdm:surveySteps
##### Survey Steps

Extension of toolUsage data type.

`xdm:surveySteps`
* is optional
* type: reference

##### xdm:surveySteps Type


* []() – `https://ns.adobe.com/xdm/datatypes/tool-usage`









