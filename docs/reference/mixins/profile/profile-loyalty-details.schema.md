
# Loyalty Details Schema

```
https://ns.adobe.com/xdm/mixins/profile/profile-loyalty-details
```

Loyalty details such as ID, points, join date, program, and status. 

| [Abstract](../../../abstract.md) | [Extensible](../../../extensions.md) | [Status](../../../status.md) | [Identifiable](../../../id.md) | [Custom Properties](../../../extensions.md) | [Additional Properties](../../../extensions.md) | Defined In |
|----------------------------------|--------------------------------------|------------------------------|--------------------------------|---------------------------------------------|-------------------------------------------------|------------|
| Can be instantiated | Yes | Stable | No | Forbidden | Permitted | [mixins/profile/profile-loyalty-details.schema.json](mixins/profile/profile-loyalty-details.schema.json) |

## Loyalty Details Example
```json
{
  "xdm:loyalty": {
    "xdm:joinDate": "2021-01-26T15:52:25+00:00",
    "xdm:loyaltyID": [
      "L79UH4XR1"
    ],
    "xdm:points": 8974,
    "xdm:pointsRedeemed": 5148,
    "xdm:program": "purchase rewards",
    "xdm:tier": "silver"
  }
}
```

# Loyalty Details Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [xdm:loyalty](#xdmloyalty) | `object` | Optional | Loyalty Details (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## xdm:loyalty

Captures details related to the customer's loyalty rewards.

`xdm:loyalty`
* is optional
* type: `object`
* defined in this schema

### xdm:loyalty Type


`object` with following properties:


| Property | Type | Required |
|----------|------|----------|
| `xdm:joinDate`| string | Optional |
| `xdm:loyaltyID`| array | Optional |
| `xdm:points`| number | Optional |
| `xdm:pointsExpiration`| array | Optional |
| `xdm:pointsRedeemed`| number | Optional |
| `xdm:program`| string | Optional |
| `xdm:status`| string | Optional |
| `xdm:tier`| string | Optional |
| `xdm:upgradeDate`| string | Optional |



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








#### xdm:pointsExpiration
##### Points Expiration

undefined

`xdm:pointsExpiration`
* is optional
* type: `object[]`


##### xdm:pointsExpiration Type


Array type: `object[]`

All items must be of the type:
`object` with following properties:


| Property | Type | Required |
|----------|------|----------|
| `xdm:pointsExpirationDate`| string | Optional |
| `xdm:pointsExpiring`| number | Optional |



#### xdm:pointsExpirationDate

Date on which the given portion of the loyalty points expire.

`xdm:pointsExpirationDate`
* is optional
* type: `string`

##### xdm:pointsExpirationDate Type


`string`
* format: `date-time` – date and time (according to [RFC 3339, section 5.6](http://tools.ietf.org/html/rfc3339))








#### xdm:pointsExpiring
##### Points Expiring

Point balance expiring as of the associated expiration date.

`xdm:pointsExpiring`
* is optional
* type: `number`

##### xdm:pointsExpiring Type


`number`
















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








#### xdm:status
##### Status

Captures the visitor's loyalty progam status, such as active, disabled, or suspended.

`xdm:status`
* is optional
* type: `string`

##### xdm:status Type


`string`








#### xdm:tier
##### Tier

Captures the loyalty progam tier in which a visitor is enrolled.

`xdm:tier`
* is optional
* type: `string`

##### xdm:tier Type


`string`








#### xdm:upgradeDate
##### Program Name

Date which the customer was upgraded to the next tier level.

`xdm:upgradeDate`
* is optional
* type: `string`

##### xdm:upgradeDate Type


`string`










