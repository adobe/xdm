
# Loyalty Details Schema

```
https://ns.adobe.com/xdm/mixins/industry-verticals/experienceevent-loyalty-details
```

Loyalty details such as ID, points, join date, program, and status. 

| [Abstract](../../../abstract.md) | [Extensible](../../../extensions.md) | [Status](../../../status.md) | [Identifiable](../../../id.md) | [Custom Properties](../../../extensions.md) | [Additional Properties](../../../extensions.md) | Defined In |
|----------------------------------|--------------------------------------|------------------------------|--------------------------------|---------------------------------------------|-------------------------------------------------|------------|
| Can be instantiated | Yes | Experimental | No | Forbidden | Permitted | [mixins/experience-event/experienceevent-loyalty-details.schema.json](mixins/experience-event/experienceevent-loyalty-details.schema.json) |

## Loyalty Details Example
```json
{
  "xdm:loyalty": {
    "xdm:accountCreationStep": {
      "xdm:tool-usage": {
        "xdm:toolUsageCancelled": 1,
        "xdm:toolUsageComplete": 1,
        "xdm:toolUsageFailure": 1,
        "xdm:toolUsageID": "T421",
        "xdm:toolUsageName": "loyalty redemption",
        "xdm:toolUsageSaved": 1,
        "xdm:toolUsageStart": 1,
        "xdm:toolUsageStep": 1,
        "xdm:toolUsageStepName": "select rewards",
        "xdm:toolUsageSubmitted": 1,
        "xdm:toolUsageType": "loyalty"
      }
    },
    "xdm:joinDate": "2021-01-26T15:52:25+00:00",
    "xdm:loyaltyID": [
      "L79UH4XR1"
    ],
    "xdm:points": 8974,
    "xdm:pointsExpiration": "2022-01-26T15:52:25+00:00",
    "xdm:pointsRedeemed": 5148,
    "xdm:pointsAsOfDate": 3147,
    "xdm:program": "purchase rewards"
  }
}
```

# Loyalty Details Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [xdm:loyalty](#xdmloyalty) | `object` | Optional | Loyalty Details (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## xdm:loyalty


`xdm:loyalty`
* is optional
* type: `object`
* defined in this schema

### xdm:loyalty Type


`object` with following properties:


| Property | Type | Required |
|----------|------|----------|
| `xdm:accountCreationStep`|  | Optional |
| `xdm:joinDate`| string | Optional |
| `xdm:loyaltyID`| array | Optional |
| `xdm:points`| number | Optional |
| `xdm:pointsAsOfDate`| number | Optional |
| `xdm:pointsExpiration`| string | Optional |
| `xdm:pointsRedeemed`| number | Optional |
| `xdm:program`| string | Optional |



#### xdm:accountCreationStep
##### Account Creation Steps

Loyalty account creation steps.

`xdm:accountCreationStep`
* is optional
* type: reference

##### xdm:accountCreationStep Type


* []() – `https://ns.adobe.com/xdm/datatypes/tool-usage`







#### xdm:joinDate
##### Program Join Date

Date which the visitor registered for the loyalty program.

`xdm:joinDate`
* is optional
* type: `string`

##### xdm:joinDate Type


`string`
* format: `date-time` – date and time (according to [RFC 3339, section 5.6](http://tools.ietf.org/html/rfc3339))








#### xdm:loyaltyID
##### Program ID

The loyalty program ID(s) associated with a specific user, if they are enrolled in the client's loyalty program.

`xdm:loyaltyID`
* is optional
* type: `string[]`


##### xdm:loyaltyID Type


Array type: `string[]`

All items must be of the type:
`string`











#### xdm:points
##### Program Points Balance

Current balance of the loyalty points/awards in a visitor's loyalty account.

`xdm:points`
* is optional
* type: `number`

##### xdm:points Type


`number`








#### xdm:pointsAsOfDate
##### Points as of date

Point balance on the current date

`xdm:pointsAsOfDate`
* is optional
* type: `number`

##### xdm:pointsAsOfDate Type


`number`








#### xdm:pointsExpiration
##### Points Expiration

Date on which the loyalty points expire.

`xdm:pointsExpiration`
* is optional
* type: `string`

##### xdm:pointsExpiration Type


`string`
* format: `date-time` – date and time (according to [RFC 3339, section 5.6](http://tools.ietf.org/html/rfc3339))








#### xdm:pointsRedeemed
##### Points Redeemed

Amount of points applied toward a purchase or otherwise redeemed.

`xdm:pointsRedeemed`
* is optional
* type: `number`

##### xdm:pointsRedeemed Type


`number`








#### xdm:program
##### Program Name

This should define the loyalty progam in which a visitor is enrolled.

`xdm:program`
* is optional
* type: `string`

##### xdm:program Type


`string`










