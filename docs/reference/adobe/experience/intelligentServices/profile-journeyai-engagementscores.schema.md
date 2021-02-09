
# Intelligent Services JourneyAI Engagement Scores Schema

```
https://ns.adobe.com/experience/intelligentServices/profile-journeyai-engagementscores
```

This mixin contains JourneyAI Engagement Scores, which provides individual customer's propensities to engage with a message.

| [Abstract](../../../../abstract.md) | [Extensible](../../../../extensions.md) | [Status](../../../../status.md) | [Identifiable](../../../../id.md) | [Custom Properties](../../../../extensions.md) | [Additional Properties](../../../../extensions.md) | Defined In |
|-------------------------------------|-----------------------------------------|---------------------------------|-----------------------------------|------------------------------------------------|----------------------------------------------------|------------|
| Can be instantiated | Yes | Stable | No | Forbidden | Permitted | [adobe/experience/intelligentServices/profile-journeyai-engagementscores.schema.json](adobe/experience/intelligentServices/profile-journeyai-engagementscores.schema.json) |

## Intelligent Services JourneyAI Engagement Scores Example
```json
{
  "https://ns.adobe.com/experience/intelligentServices/journeyAI": {
    "https://ns.adobe.com/experience/intelligentServices/journeyAI/engagementScores": {
      "https://ns.adobe.com/experience/intelligentServices/journeyAI/emailEngagementScores": {
        "https://ns.adobe.com/experience/intelligentServices/journeyAI/clickEngagementScore": 0.034,
        "https://ns.adobe.com/experience/intelligentServices/journeyAI/openEnagementScore": 0.23,
        "https://ns.adobe.com/experience/intelligentServices/journeyAI/retentionLevel": "high",
        "https://ns.adobe.com/experience/intelligentServices/journeyAI/retentionPercentRank": 0.953,
        "https://ns.adobe.com/experience/intelligentServices/journeyAI/unsubscriptionProbability": 0.002546
      },
      "https://ns.adobe.com/experience/intelligentServices/journeyAI/engagementScoresInfo": "v1.3.0_2020-11-04"
    }
  },
  "xdm:identityMap": {
    "xdm:key": [
      {
        "xdm:authenticatedState": "ambiguous",
        "xdm:id": "string",
        "xdm:primary": false
      }
    ]
  }
}
```

# Intelligent Services JourneyAI Engagement Scores Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [https://ns.adobe.com/experience/intelligentServices/journeyAI](#httpsnsadobecomexperienceintelligentservicesjourneyai) | `object` | Optional | Intelligent Services JourneyAI Engagement Scores (this schema) |
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
| `https://ns.adobe.com/experience/intelligentServices/engagementScores`| object | Optional |



#### https://ns.adobe.com/experience/intelligentServices/engagementScores
##### Engagement Scores

Journey AI engagement scores provide likelihoods of a customer engaging with a newly delivered message.

`https://ns.adobe.com/experience/intelligentServices/engagementScores`
* is optional
* type: `object`

##### https://ns.adobe.com/experience/intelligentServices/engagementScores Type

Unknown type `object`.

```json
{
  "title": "Engagement Scores",
  "description": "Journey AI engagement scores provide likelihoods of a customer engaging with a newly delivered message.",
  "type": "object",
  "properties": {
    "https://ns.adobe.com/experience/intelligentServices/emailEngagementScores": {
      "title": "Email Engagement Scores",
      "description": "Engagement scores here are for email channel messages.",
      "type": "object",
      "properties": {
        "https://ns.adobe.com/experience/intelligentServices/clickEngagementScore": {
          "title": "Click Engagement Score",
          "description": "This score represents the probability for a customer to click on links in an email.",
          "type": "number"
        },
        "https://ns.adobe.com/experience/intelligentServices/openEnagementScore": {
          "title": "Open Engagement Score",
          "description": "This score represents the probability of a customer to open an email.",
          "type": "number"
        },
        "https://ns.adobe.com/experience/intelligentServices/retentionLevel": {
          "title": "Retention Level",
          "description": "Retention level is a qualitative categorization of customer's likelihood of staying subscribed to the email list.",
          "type": "string"
        },
        "https://ns.adobe.com/experience/intelligentServices/retentionPercentRank": {
          "title": "Retention Percent Rank",
          "description": "Retention percent rank is a percentile rank of the likelihood of staying subscribed to the email list.",
          "type": "number"
        },
        "https://ns.adobe.com/experience/intelligentServices/unsubscriptionProbability": {
          "title": "Unsubscription Probability",
          "description": "Unsubscription probability is the probability of a recipient to unsubscribe from email channel conditioned on email opened.",
          "type": "number"
        }
      }
    },
    "https://ns.adobe.com/experience/intelligentServices/engagementScoresInfo": {
      "title": "Engagement Scores Info",
      "description": "This information contains engagement scores model version and scoring date as a concatenated string, e.g. v1.3.0_2020-11-04.",
      "type": "string"
    }
  },
  "simpletype": "`object`"
}
```









