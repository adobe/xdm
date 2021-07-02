
# media Subscription Schema

```
https://ns.adobe.com/xdm/mixins/profile/profile-media-subscription
```

media subscription plan details including number of channels & included streaming services.

| [Abstract](../../../abstract.md) | [Extensible](../../../extensions.md) | [Status](../../../status.md) | [Identifiable](../../../id.md) | [Custom Properties](../../../extensions.md) | [Additional Properties](../../../extensions.md) | Defined In |
|----------------------------------|--------------------------------------|------------------------------|--------------------------------|---------------------------------------------|-------------------------------------------------|------------|
| Can be instantiated | Yes | Experimental | No | Forbidden | Permitted | [mixins/profile/profile-media-subscription.schema.json](mixins/profile/profile-media-subscription.schema.json) |
## Schema Hierarchy

* media Subscription `https://ns.adobe.com/xdm/mixins/profile/profile-media-subscription`
  * [Telecom Subscription](profile-telecom-subscription.schema.md) `https://ns.adobe.com/xdm/mixins/profile/profile-telecom-subscription`


## media Subscription Example
```json
{}
```

# media Subscription Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [xdm:mediaSubscription](#xdmmediasubscription) | `object` | Optional | media Subscription (this schema) |
| [xdm:telecomSubscription](#xdmtelecomsubscription) | `object` | Optional | [Telecom Subscription](profile-telecom-subscription.schema.md#xdmtelecomsubscription) |
| `*` | any | Additional | this schema *allows* additional properties |

## xdm:mediaSubscription


`xdm:mediaSubscription`
* is optional
* type: `object`
* defined in this schema

### xdm:mediaSubscription Type


`object` with following properties:


| Property | Type | Required |
|----------|------|----------|
| `xdm:channels`| integer | Optional |
| `xdm:streamingServices`| array | Optional |



#### xdm:channels
##### Channels

Records the number of channels included with the media subscription.

`xdm:channels`
* is optional
* type: `integer`

##### xdm:channels Type


`integer`








#### xdm:streamingServices
##### Streaming Services

Array of all streaming services included with the subscription.

`xdm:streamingServices`
* is optional
* type: `object[]`


##### xdm:streamingServices Type


Array type: `object[]`

All items must be of the type:
`object` with following properties:


| Property | Type | Required |
|----------|------|----------|
| `xdm:promotionLength`| integer | Optional |
| `xdm:promotionalAddition`| boolean | Optional |
| `xdm:serviceName`| integer | Optional |



#### xdm:promotionLength
##### Promotion Length

Tracks the length of the promotion, in months, if the streaming service was added as part of a promotion.

`xdm:promotionLength`
* is optional
* type: `integer`

##### xdm:promotionLength Type


`integer`








#### xdm:promotionalAddition
##### Promotional Addition

Flags if the streaming service was added as part of a promotion.

`xdm:promotionalAddition`
* is optional
* type: `boolean`

##### xdm:promotionalAddition Type


`boolean`







#### xdm:serviceName
##### Service Name

Records the name of the streaming service.

`xdm:serviceName`
* is optional
* type: `integer`

##### xdm:serviceName Type


`integer`



















## xdm:telecomSubscription


`xdm:telecomSubscription`
* is optional
* type: `object`
* defined in [Telecom Subscription](profile-telecom-subscription.schema.md#xdmtelecomsubscription)

### xdm:telecomSubscription Type


`object` with following properties:


| Property | Type | Required |
|----------|------|----------|
| `xdm:activationDate`| string | Optional |
| `xdm:bundleName`| string | Optional |
| `xdm:deactivationDate`| string | Optional |
| `xdm:equipmentFees`|  | Optional |
| `xdm:equipmentInsurance`| boolean | Optional |
| `xdm:responsiblePartyID`| string | Optional |
| `xdm:subscriptionDetails`|  | Optional |
| `xdm:subscriptionID`| string | Optional |
| `xdm:subscriptionType`| string | Optional |



#### xdm:activationDate
##### Activation Date

Tracks the date in which the telecom subscription was activated.

`xdm:activationDate`
* is optional
* type: `string`

##### xdm:activationDate Type


`string`
* format: `date-time` – date and time (according to [RFC 3339, section 5.6](http://tools.ietf.org/html/rfc3339))








#### xdm:bundleName
##### Bundle Name

Captures the name of any type of subscription bundle in which the customer is enrolled, such as 'Internet + TV'.

`xdm:bundleName`
* is optional
* type: `string`

##### xdm:bundleName Type


`string`








#### xdm:deactivationDate
##### Deactivation Date

Tracks the date in which the telecom subscription was deactivated.

`xdm:deactivationDate`
* is optional
* type: `string`

##### xdm:deactivationDate Type


`string`
* format: `date-time` – date and time (according to [RFC 3339, section 5.6](http://tools.ietf.org/html/rfc3339))








#### xdm:equipmentFees
##### Equipment Fees

Captures any equipment fees for items such as routers, modems, recievers, etc.

`xdm:equipmentFees`
* is optional
* type: reference

##### xdm:equipmentFees Type


* []() – `https://ns.adobe.com/xdm/datatypes/currency`







#### xdm:equipmentInsurance
##### Equipment Insurance

Tracks if a customer has opted-in to equipment insurance for the subscription.

`xdm:equipmentInsurance`
* is optional
* type: `boolean`

##### xdm:equipmentInsurance Type


`boolean`







#### xdm:responsiblePartyID
##### Responsible Party ID

Identifier for the person responsible for the subscription, which typically could be their device phone number.

`xdm:responsiblePartyID`
* is optional
* type: `string`

##### xdm:responsiblePartyID Type


`string`








#### xdm:subscriptionDetails
##### Subscription Details

Extension of the subscription data type to include subscription length, fees, status, etc.

`xdm:subscriptionDetails`
* is optional
* type: reference

##### xdm:subscriptionDetails Type


* []() – `https://ns.adobe.com/xdm/context/subscription`







#### xdm:subscriptionID
##### Subscription ID

Identifier for subscription.

`xdm:subscriptionID`
* is optional
* type: `string`

##### xdm:subscriptionID Type


`string`








#### xdm:subscriptionType
##### Subscription Type

Indicates the type of telecom subscription in which the customer is enrolled.

`xdm:subscriptionType`
* is optional
* type: `enum`

The value of this property **must** be equal to one of the [known values below](#xdmtelecomsubscription-known-values).

##### xdm:subscriptionType Known Values
| Value | Description |
|-------|-------------|
| `individual` | Individual |
| `household` | Household |
| `business` | Business |








