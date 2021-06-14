
# Telecom Subscription Schema

```
https://ns.adobe.com/xdm/mixins/profile/profile-telecom-subscription
```

Collects all generic details related to a customer's telecom subscription plan, including pricing, package, and included features.

| [Abstract](../../../abstract.md) | [Extensible](../../../extensions.md) | [Status](../../../status.md) | [Identifiable](../../../id.md) | [Custom Properties](../../../extensions.md) | [Additional Properties](../../../extensions.md) | Defined In |
|----------------------------------|--------------------------------------|------------------------------|--------------------------------|---------------------------------------------|-------------------------------------------------|------------|
| Can be instantiated | Yes | Experimental | No | Forbidden | Permitted | [mixins/profile/profile-telecom-subscription.schema.json](mixins/profile/profile-telecom-subscription.schema.json) |

## Telecom Subscription Example
```json
{}
```

# Telecom Subscription Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [xdm:telecomSubscription](#xdmtelecomsubscription) | `object` | Optional | Telecom Subscription (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## xdm:telecomSubscription


`xdm:telecomSubscription`
* is optional
* type: `object`
* defined in this schema

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








