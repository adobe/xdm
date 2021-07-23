
# Landline Subscription Schema

```
https://ns.adobe.com/xdm/mixins/profile/profile-landline-subscription
```

Landline subscription plan details including selected features, minutes, and dialing plans.

| [Abstract](../../../abstract.md) | [Extensible](../../../extensions.md) | [Status](../../../status.md) | [Identifiable](../../../id.md) | [Custom Properties](../../../extensions.md) | [Additional Properties](../../../extensions.md) | Defined In |
|----------------------------------|--------------------------------------|------------------------------|--------------------------------|---------------------------------------------|-------------------------------------------------|------------|
| Can be instantiated | Yes | Experimental | No | Forbidden | Permitted | [mixins/profile/profile-landline-subscription.schema.json](mixins/profile/profile-landline-subscription.schema.json) |
## Schema Hierarchy

* Landline Subscription `https://ns.adobe.com/xdm/mixins/profile/profile-landline-subscription`
  * [Telecom Subscription](profile-telecom-subscription.schema.md) `https://ns.adobe.com/xdm/mixins/profile/profile-telecom-subscription`


## Landline Subscription Example
```json
{}
```

# Landline Subscription Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [xdm:landlineSubscription](#xdmlandlinesubscription) | `object` | Optional | Landline Subscription (this schema) |
| [xdm:telecomSubscription](#xdmtelecomsubscription) | `object` | Optional | [Telecom Subscription](profile-telecom-subscription.schema.md#xdmtelecomsubscription) |
| `*` | any | Additional | this schema *allows* additional properties |

## xdm:landlineSubscription


`xdm:landlineSubscription`
* is optional
* type: `object`
* defined in this schema

### xdm:landlineSubscription Type


`object` with following properties:


| Property | Type | Required |
|----------|------|----------|
| `xdm:callBlocking`| boolean | Optional |
| `xdm:callForwarding`| boolean | Optional |
| `xdm:callWaiting`| boolean | Optional |
| `xdm:callerID`| boolean | Optional |
| `xdm:internationalCalling`| boolean | Optional |
| `xdm:minutes`| integer | Optional |
| `xdm:threeWayCalling`| boolean | Optional |
| `xdm:unlimitedDomesticLongDistance`| boolean | Optional |
| `xdm:unlimitedLocalCalling`| boolean | Optional |
| `xdm:voicemail`| boolean | Optional |



#### xdm:callBlocking
##### Call Blocking

Flags if the landline subscription features include Call Blocking.

`xdm:callBlocking`
* is optional
* type: `boolean`

##### xdm:callBlocking Type


`boolean`







#### xdm:callForwarding
##### Call Forwarding

Flags if the landline subscription features include Call Forwarding.

`xdm:callForwarding`
* is optional
* type: `boolean`

##### xdm:callForwarding Type


`boolean`







#### xdm:callWaiting
##### Call Waiting

Flags if the landline subscription features include Call Waiting.

`xdm:callWaiting`
* is optional
* type: `boolean`

##### xdm:callWaiting Type


`boolean`







#### xdm:callerID
##### Caller ID

Flags if the landline subscription features include Caller ID.

`xdm:callerID`
* is optional
* type: `boolean`

##### xdm:callerID Type


`boolean`







#### xdm:internationalCalling
##### International Calling

Flags if the landline subscription features include International Calling.

`xdm:internationalCalling`
* is optional
* type: `boolean`

##### xdm:internationalCalling Type


`boolean`







#### xdm:minutes
##### Minutes

Number of monthly minutes available within the subscription.

`xdm:minutes`
* is optional
* type: `integer`

##### xdm:minutes Type


`integer`








#### xdm:threeWayCalling
##### Three-Way Dialing

Flags if the landline subscription features include Three-Way Dialing.

`xdm:threeWayCalling`
* is optional
* type: `boolean`

##### xdm:threeWayCalling Type


`boolean`







#### xdm:unlimitedDomesticLongDistance
##### Unlimited Domestic Long Distance

Flags if the landline subscription features include Unlimited Domestic Long Distance.

`xdm:unlimitedDomesticLongDistance`
* is optional
* type: `boolean`

##### xdm:unlimitedDomesticLongDistance Type


`boolean`







#### xdm:unlimitedLocalCalling
##### Unlimited Local Calling

Flags if the landline subscription features include Unlimited Local Calling.

`xdm:unlimitedLocalCalling`
* is optional
* type: `boolean`

##### xdm:unlimitedLocalCalling Type


`boolean`







#### xdm:voicemail
##### Voicemail

Flags if the landline subscription features include Voicemail.

`xdm:voicemail`
* is optional
* type: `boolean`

##### xdm:voicemail Type


`boolean`










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








