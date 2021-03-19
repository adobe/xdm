
# Decision Activity Schema

```
https://ns.adobe.com/experience/decisioning/activity
```

Controls a decisioning process and describes some form of action that is planned to happen, is currently happening, or has already happened. The purpose of the activity is to execute a number of steps to return an ordered selection of best options that qualify in a given context (time-bound, profile-bound, option-bound, context data) or return or a default option (fallback). A decision activity can be thought of as a kind of https://www.w3.org/ns/activitystreams#Activity or https://schema.org/Action. Those entities imply an actor/agent which is a software construct (service).

| [Abstract](../../../../abstract.md) | [Extensible](../../../../extensions.md) | [Status](../../../../status.md) | [Identifiable](../../../../id.md) | [Custom Properties](../../../../extensions.md) | [Additional Properties](../../../../extensions.md) | Defined In |
|-------------------------------------|-----------------------------------------|---------------------------------|-----------------------------------|------------------------------------------------|----------------------------------------------------|------------|
| Can be instantiated | Yes | Stable | No | Forbidden | Permitted | [adobe/experience/decisioning/activity.schema.json](adobe/experience/decisioning/activity.schema.json) |
## Schema Hierarchy

* Decision Activity `https://ns.adobe.com/experience/decisioning/activity`
  * [Record Schema](../../../behaviors/record.schema.md) `https://ns.adobe.com/xdm/data/record`


## Decision Activity Examples

```json
{
  "@id": "xcore:offer-activity:fd55d033fea4b82",
  "https://ns.adobe.com/experience/decisioning/name": "In App Messages",
  "https://ns.adobe.com/experience/decisioning/startDate": "2019-06-18T10:52:57.000Z",
  "https://ns.adobe.com/experience/decisioning/endDate": "2019-09-01T00:00:00.000Z",
  "https://ns.adobe.com/experience/decisioning/fallback": "xcore:fallback-offer:f6709ad4e7c0bac",
  "https://ns.adobe.com/experience/decisioning/status": "draft"
}
```

```json
{
  "@id": "xcore:offer-activity:fd55d033fea4b82",
  "https://ns.adobe.com/experience/decisioning/name": "In App Messages",
  "https://ns.adobe.com/experience/decisioning/startDate": "2019-06-18T10:52:57.000Z",
  "https://ns.adobe.com/experience/decisioning/endDate": "2019-09-01T00:00:00.000Z",
  "https://ns.adobe.com/experience/decisioning/status": "live",
  "https://ns.adobe.com/experience/decisioning/fallback": "xcore:fallback-offer:f6709ad4e7c0bac",
  "https://ns.adobe.com/experience/decisioning/criteria": [
    {
      "xdm:placements": [
        "xcore:offer-placement:c652463157c2aa1"
      ],
      "xdm:optionSelection": {
        "xdm:filter": "xcore:offer-filter:f6998eb62ed6f15"
      },
      "xdm:profileConstraints": {
        "xdm:description": "Pilot = Y",
        "xdm:eligibilityRule": "xcore:eligibility-rule:e5244c22eff29e8"
      },
      "xdm:ranking": {
        "xdm:priority": 0
      }
    },
    {
      "xdm:placements": [
        "xcore:offer-placement:c652463157c2aa2"
      ],
      "xdm:optionSelection": {
        "xdm:options": [
          "xcore:offer:f6998eb62ed6f15"
        ]
      },
      "xdm:profileConstraints": {
        "xdm:eligibilityRule": "xcore:eligibility-rule:f65212b6b3c0ba3"
      },
      "xdm:ranking": {
        "xdm:priority": 0
      }
    },
    {
      "xdm:description": "S1:",
      "xdm:placements": [
        "xcore:offer-placement:6111463157c2221"
      ],
      "xdm:optionSelection": {
        "xdm:description": "Charge_Elite_30 Offer",
        "xdm:options": [
          "xcore:offer:f6998eb62ed6f15"
        ]
      },
      "xdm:profileConstraints": {
        "xdm:description": "Tender Group in (ClassicKC, MVC) AND Pilot = Y AND Discount(Reserve1) = 30",
        "xdm:eligibilityRule": "xcore:eligibility-rule:f65212b6b3c0b01"
      },
      "xdm:ranking": {
        "xdm:priority": 8
      }
    },
    {
      "xdm:description": "S2:",
      "xdm:placements": [
        "xcore:offer-placement:6111463157c2221"
      ],
      "xdm:optionSelection": {
        "xdm:description": "Charge_Elite_Generic",
        "xdm:options": [
          "xcore:offer:f6998eb62ed6f16"
        ]
      },
      "xdm:profileConstraints": {
        "xdm:description": "Tender Group in (ClassicKC, MVC) AND Pilot = Y AND Discount(Reserve1) != 30",
        "xdm:eligibilityRule": "xcore:eligibility-rule:f65212b6b3c0b02"
      },
      "xdm:ranking": {
        "xdm:priority": 7
      }
    },
    {
      "xdm:description": "S3:",
      "xdm:placements": [
        "xcore:offer-placement:6111463157c2221"
      ],
      "xdm:optionSelection": {
        "xdm:description": "Members_15",
        "xdm:options": [
          "xcore:offer:f6998eb62ed6f17"
        ]
      },
      "xdm:profileConstraints": {
        "xdm:description": "Tender Group in (NonKC) AND Pilot = Y AND Discount(Reserve1) = 15",
        "xdm:eligibilityRule": "xcore:eligibility-rule:f65212b6b3c0b03"
      },
      "xdm:ranking": {
        "xdm:priority": 6
      }
    },
    {
      "xdm:description": "S4:",
      "xdm:placements": [
        "xcore:offer-placement:6111463157c2221"
      ],
      "xdm:optionSelection": {
        "xdm:description": "Members_20",
        "xdm:options": [
          "xcore:offer:f6998eb62ed6f18"
        ]
      },
      "xdm:profileConstraints": {
        "xdm:description": "Tender Group in (NonKC) AND Pilot = Y AND Discount(Reserve1) = 20",
        "xdm:eligibilityRule": "xcore:eligibility-rule:f65212b6b3c0b04"
      },
      "xdm:ranking": {
        "xdm:priority": 5
      }
    },
    {
      "xdm:description": "S5:",
      "xdm:placements": [
        "xcore:offer-placement:6111463157c2221"
      ],
      "xdm:optionSelection": {
        "xdm:description": "Members_30",
        "xdm:options": [
          "xcore:offer:f6998eb62ed6f19"
        ]
      },
      "xdm:profileConstraints": {
        "xdm:description": "Tender Group in (NonKC) AND Pilot = Y AND Discount(Reserve1) = 30",
        "xdm:eligibilityRule": "xcore:eligibility-rule:f65212b6b3c0b05"
      },
      "xdm:ranking": {
        "xdm:priority": 4
      }
    },
    {
      "xdm:description": "S6:",
      "xdm:placements": [
        "xcore:offer-placement:6111463157c2221"
      ],
      "xdm:optionSelection": {
        "xdm:description": "NONKC",
        "xdm:options": [
          "xcore:offer:f6998eb62ed6f20"
        ]
      },
      "xdm:profileConstraints": {
        "xdm:description": "Tender Group in (NonKC) AND Pilot != Y",
        "xdm:eligibilityRule": "xcore:eligibility-rule:f65212b6b3c0b06"
      },
      "xdm:ranking": {
        "xdm:priority": 3
      }
    },
    {
      "xdm:description": "S7:",
      "xdm:placements": [
        "xcore:offer-placement:6111463157c2221"
      ],
      "xdm:optionSelection": {
        "xdm:description": "Credit_30",
        "xdm:options": [
          "xcore:offer:f6998eb62ed6f21"
        ]
      },
      "xdm:profileConstraints": {
        "xdm:description": "Tender Group in (ClassicKC, MVC, Unmatched) AND Pilot != Y AND Discount(Reserve1) = 30",
        "xdm:eligibilityRule": "xcore:eligibility-rule:f65212b6b3c0b07"
      },
      "xdm:ranking": {
        "xdm:priority": 2
      }
    },
    {
      "xdm:description": "S8:",
      "xdm:placements": [
        "xcore:offer-placement:6111463157c2221"
      ],
      "xdm:optionSelection": {
        "xdm:description": "Credit_Generic",
        "xdm:options": [
          "xcore:offer:f6998eb62ed6f22"
        ]
      },
      "xdm:profileConstraints": {
        "xdm:description": "Tender Group = ClassicKC OR MVC OR NULL OR Unmatched AND Pilot != Y AND Discount(Reserve1) !=30",
        "xdm:eligibilityRule": "xcore:eligibility-rule:f65212b6b3c0b09"
      },
      "xdm:ranking": {
        "xdm:priority": 1
      }
    }
  ]
}
```


# Decision Activity Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [@id](#id) | `string` | Optional | [Record Schema](../../../behaviors/record.schema.md#id) |
| [https://ns.adobe.com/experience/decisioning/endTime](#httpsnsadobecomexperiencedecisioningendtime) | `string` | Optional | Decision Activity (this schema) |
| [https://ns.adobe.com/experience/decisioning/fallback](#httpsnsadobecomexperiencedecisioningfallback) | `string` | Optional | Decision Activity (this schema) |
| [https://ns.adobe.com/experience/decisioning/name](#httpsnsadobecomexperiencedecisioningname) | `string` | Optional | Decision Activity (this schema) |
| [https://ns.adobe.com/experience/decisioning/startTime](#httpsnsadobecomexperiencedecisioningstarttime) | `string` | Optional | Decision Activity (this schema) |
| [repo:etag](#repoetag) | `string` | Optional | Decision Activity (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## @id
### Identifier

A unique identifier for the record.

`@id`
* is optional
* type: `string`
* defined in [Record Schema](../../../behaviors/record.schema.md#id)

### @id Type


`string`
* format: `uri-reference` – URI Reference (according to [RFC3986](https://tools.ietf.org/html/rfc3986))






## https://ns.adobe.com/experience/decisioning/endTime
### Activity End Date and Time

Activity end date and end time. Property has the semantic of schema.org's 'endTime' property defined on http://schema.org/Action

`https://ns.adobe.com/experience/decisioning/endTime`
* is optional
* type: `string`
* defined in this schema

### https://ns.adobe.com/experience/decisioning/endTime Type


`string`
* format: `date-time` – date and time (according to [RFC 3339, section 5.6](http://tools.ietf.org/html/rfc3339))






## https://ns.adobe.com/experience/decisioning/fallback
### Fallback Option

The reference to a fallback option that is used when decisioning in the context of this activity does not qualify any of the regular options (this typically happens when hard constraints are applied). The value is the URI (@id) of the fallback option that is referenced.

`https://ns.adobe.com/experience/decisioning/fallback`
* is optional
* type: `string`
* defined in this schema

### https://ns.adobe.com/experience/decisioning/fallback Type


`string`
* format: `uri-reference` – URI Reference (according to [RFC3986](https://tools.ietf.org/html/rfc3986))






## https://ns.adobe.com/experience/decisioning/name
### Activity Name

Activity name. The name is displayed in various user interfaces.

`https://ns.adobe.com/experience/decisioning/name`
* is optional
* type: `string`
* defined in this schema

### https://ns.adobe.com/experience/decisioning/name Type


`string`






## https://ns.adobe.com/experience/decisioning/startTime
### Activity Start Date and Time

Activity start date and end time. Property has the semantic of schema.org's 'startTime' property defined on http://schema.org/Action

`https://ns.adobe.com/experience/decisioning/startTime`
* is optional
* type: `string`
* defined in this schema

### https://ns.adobe.com/experience/decisioning/startTime Type


`string`
* format: `date-time` – date and time (according to [RFC 3339, section 5.6](http://tools.ietf.org/html/rfc3339))






## repo:etag
### Activity ETag

The revision that the decision activity object was at when the snapshot was taken.

`repo:etag`
* is optional
* type: `string`
* defined in this schema

### repo:etag Type


`string`






# Decision Activity Definitions

| Property | Type | Group |
|----------|------|-------|
| [https://ns.adobe.com/experience/decisioning/activityID](#httpsnsadobecomexperiencedecisioningactivityid) | `string` | `https://ns.adobe.com/experience/decisioning/activity#/definitions/activity-snapshot-identifier` |

## https://ns.adobe.com/experience/decisioning/activityID
### Activity Identifier

A unique, immutable identifier for the decision activity.

`https://ns.adobe.com/experience/decisioning/activityID`
* is optional
* type: `string`
* defined in this schema

### https://ns.adobe.com/experience/decisioning/activityID Type


`string`
* format: `uri-reference` – URI Reference (according to [RFC3986](https://tools.ietf.org/html/rfc3986))





