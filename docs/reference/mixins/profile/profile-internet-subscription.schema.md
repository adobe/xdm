
# Internet Subscription Schema

```
https://ns.adobe.com/xdm/mixins/profile/profile-internet-subscription
```

Internet subscription plan details such as data cap, connection type, and speed details.

| [Abstract](../../../abstract.md) | [Extensible](../../../extensions.md) | [Status](../../../status.md) | [Identifiable](../../../id.md) | [Custom Properties](../../../extensions.md) | [Additional Properties](../../../extensions.md) | Defined In |
|----------------------------------|--------------------------------------|------------------------------|--------------------------------|---------------------------------------------|-------------------------------------------------|------------|
| Can be instantiated | Yes | Experimental | No | Forbidden | Permitted | [mixins/profile/profile-internet-subscription.schema.json](mixins/profile/profile-internet-subscription.schema.json) |
## Schema Hierarchy

* Internet Subscription `https://ns.adobe.com/xdm/mixins/profile/profile-internet-subscription`
  * [Telecom Subscription](profile-telecom-subscription.schema.md) `https://ns.adobe.com/xdm/mixins/profile/profile-telecom-subscription`


## Internet Subscription Example
```json
{}
```

# Internet Subscription Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [xdm:internetSubscription](#xdminternetsubscription) | `object` | Optional | Internet Subscription (this schema) |
| [xdm:telecomSubscription](#xdmtelecomsubscription) | `object` | Optional | [Telecom Subscription](profile-telecom-subscription.schema.md#xdmtelecomsubscription) |
| `*` | any | Additional | this schema *allows* additional properties |

## xdm:internetSubscription


`xdm:internetSubscription`
* is optional
* type: `object`
* defined in this schema

### xdm:internetSubscription Type


`object` with following properties:


| Property | Type | Required |
|----------|------|----------|
| `xdm:connectionType`| string | Optional |
| `xdm:dataCap`| integer | Optional |
| `xdm:downloadSpeed`| integer | Optional |
| `xdm:selfSetup`| boolean | Optional |
| `xdm:uploadSpeed`| integer | Optional |



#### xdm:connectionType
##### Connection Type

Tracks the type of connection type for the subscription.

`xdm:connectionType`
* is optional
* type: `enum`

The value of this property **must** be equal to one of the [known values below](#xdminternetsubscription-known-values).

##### xdm:connectionType Known Values
| Value | Description |
|-------|-------------|
| `cable` | Cable |
| `dsl` | DSL |
| `fiber` | Fiber |
| `mobile` | Mobile |
| `satellite` | Satellite |






#### xdm:dataCap
##### Data Cap

Captures the data cap limit for the account, in megabytes (MB).

`xdm:dataCap`
* is optional
* type: `integer`

##### xdm:dataCap Type


`integer`








#### xdm:downloadSpeed
##### Download Speed

Records the maximum download speed available for the subscription, in megabytes (MB).

`xdm:downloadSpeed`
* is optional
* type: `integer`

##### xdm:downloadSpeed Type


`integer`








#### xdm:selfSetup
##### Self-Setup

Flags if a customer is eligible for internet setup without a technican visit.

`xdm:selfSetup`
* is optional
* type: `boolean`

##### xdm:selfSetup Type


`boolean`







#### xdm:uploadSpeed
##### Upload Speed

Records the maximum upload speed available for the subscription, in megabytes (MB).

`xdm:uploadSpeed`
* is optional
* type: `integer`

##### xdm:uploadSpeed Type


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








