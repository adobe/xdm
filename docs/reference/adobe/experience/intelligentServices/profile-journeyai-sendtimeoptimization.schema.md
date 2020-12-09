
# Intelligent Services JourneyAI Send Time Optimization Schema

```
https://ns.adobe.com/experience/intelligentServices/profile-journeyai-sendtimeoptimization
```

This mixin contains JourneyAI Send Time Optimization scores, which provides the time preferences for message deliveries.

| [Abstract](../../../../abstract.md) | [Extensible](../../../../extensions.md) | [Status](../../../../status.md) | [Identifiable](../../../../id.md) | [Custom Properties](../../../../extensions.md) | [Additional Properties](../../../../extensions.md) | Defined In |
|-------------------------------------|-----------------------------------------|---------------------------------|-----------------------------------|------------------------------------------------|----------------------------------------------------|------------|
| Can be instantiated | Yes | Experimental | No | Forbidden | Permitted | [adobe/experience/intelligentServices/profile-journeyai-sendtimeoptimization.schema.json](adobe/experience/intelligentServices/profile-journeyai-sendtimeoptimization.schema.json) |

# Intelligent Services JourneyAI Send Time Optimization Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [https://ns.adobe.com/experience/intelligentServices/journeyAI](#httpsnsadobecomexperienceintelligentservicesjourneyai) | `object` | Optional | Intelligent Services JourneyAI Send Time Optimization (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## https://ns.adobe.com/experience/intelligentServices/journeyAI
### Journey AI

Journey AI intelligent service provides various insights about message deliveries along customer's journey.

`https://ns.adobe.com/experience/intelligentServices/journeyAI`
* is optional
* type: `object`
* defined in this schema

### https://ns.adobe.com/experience/intelligentServices/journeyAI Type


`object` with following properties:


| Property | Type | Required |
|----------|------|----------|
| `https://ns.adobe.com/experience/intelligentServices/journeyAI/sendTimeOptimization`| object | Optional |



#### https://ns.adobe.com/experience/intelligentServices/journeyAI/sendTimeOptimization
##### Send Time Optimization

Journey AI send time optimization scores provide the time preferences for message deliveries. Higher score means a better outcome is expected, if a message is sent at the corresponding hour.

`https://ns.adobe.com/experience/intelligentServices/journeyAI/sendTimeOptimization`
* is optional
* type: `object`

##### https://ns.adobe.com/experience/intelligentServices/journeyAI/sendTimeOptimization Type

Unknown type `object`.

```json
{
  "title": "Send Time Optimization",
  "description": "Journey AI send time optimization scores provide the time preferences for message deliveries. Higher score means a better outcome is expected, if a message is sent at the corresponding hour.",
  "type": "object",
  "properties": {
    "https://ns.adobe.com/experience/intelligentServices/journeyAI/emailSendTimeOptimization": {
      "title": "Email Send Time Optimization",
      "description": "Send time optimization scores here are for the email channel.",
      "type": "object",
      "properties": {
        "https://ns.adobe.com/experience/intelligentServices/journeyAI/sendTimeScoreForClick": {
          "title": "Send Time Score for Click",
          "description": "Scores are for 7*24 hours from GMT Monday hour 0 to Sunday hour 23, representing the inclination of a customer clicking on an email's link if it's sent at that hour.",
          "type": "array",
          "minItems": 168,
          "maxItems": 168,
          "items": {
            "type": "number"
          }
        },
        "https://ns.adobe.com/experience/intelligentServices/journeyAI/sendTimeScoreForOpen": {
          "title": "Send Time Score for Open",
          "description": "Scores are for 7*24 hours from GMT Monday hour 0 to Sunday hour 23, representing the inclination of a customer opening an email if it's sent at that hour.",
          "type": "array",
          "minItems": 168,
          "maxItems": 168,
          "items": {
            "type": "number"
          }
        }
      }
    },
    "https://ns.adobe.com/experience/intelligentServices/journeyAI/pushSendTimeOptimization": {
      "title": "Push Send Time Optimization",
      "description": "Send time optimization scores here are for push channel.",
      "type": "object",
      "properties": {
        "https://ns.adobe.com/experience/intelligentServices/journeyAI/sendTimeScoreForOpen": {
          "title": "Send Time Score for Open",
          "description": "Score are for 7*24 hours from GMT Monday hour 0 to Sunday hour 23, representing the inclination of a customer opening a push notification if it's sent at that hour.",
          "type": "array",
          "minItems": 168,
          "maxItems": 168,
          "items": {
            "type": "number"
          }
        }
      }
    },
    "https://ns.adobe.com/experience/intelligentServices/journeyAI/sendTimeOptimizationScoreInfo": {
      "title": "Send Time Optimization Score Info",
      "description": "This information contains send time optimization model version and scoring date as a concatenated string, e.g. v1.2.0_2020-09-29.",
      "type": "string"
    }
  },
  "simpletype": "`object`"
}
```









