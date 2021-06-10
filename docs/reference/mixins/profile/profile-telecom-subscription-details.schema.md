
# Telecom Subscription Schema

```
https://ns.adobe.com/xdm/mixins/profile/profile-telecom-subscription-details
```

Collects all generic details related to a customer's telecom subscription plan, including pricing, packages, and individual product subscriptions.

| [Abstract](../../../abstract.md) | [Extensible](../../../extensions.md) | [Status](../../../status.md) | [Identifiable](../../../id.md) | [Custom Properties](../../../extensions.md) | [Additional Properties](../../../extensions.md) | Defined In |
|----------------------------------|--------------------------------------|------------------------------|--------------------------------|---------------------------------------------|-------------------------------------------------|------------|
| Can be instantiated | Yes | Experimental | No | Forbidden | Permitted | [mixins/profile/profile-telecom-subscription-details.schema.json](mixins/profile/profile-telecom-subscription-details.schema.json) |

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
| `xdm:bundleName`| string | Optional |
| `xdm:equipmentFees`|  | Optional |
| `xdm:equipmentInsurance`| boolean | Optional |
| `xdm:internetSubscriptionDetails`| array | Optional |
| `xdm:landlineSubscriptionDetails`| array | Optional |
| `xdm:mediaSubscriptionDetails`| array | Optional |
| `xdm:mobileSubscriptionDetails`| array | Optional |
| `xdm:responsiblePartyID`| string | Optional |
| `xdm:subscriptionDetails`|  | Optional |
| `xdm:subscriptionID`| string | Optional |



#### xdm:bundleName
##### Bundle Name

Captures the name of any type of subscription bundle in which the customer is enrolled, such as 'Internet + Media'.

`xdm:bundleName`
* is optional
* type: `string`

##### xdm:bundleName Type


`string`








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







#### xdm:internetSubscriptionDetails

Internet subscription plan details such as data cap, connection type, and speed details.

`xdm:internetSubscriptionDetails`
* is optional
* type: `object[]`


##### xdm:internetSubscriptionDetails Type


Array type: `object[]`

All items must be of the type:
`object` with following properties:


| Property | Type | Required |
|----------|------|----------|
| `xdm:connectionType`| string | Optional |
| `xdm:dataCap`| integer | Optional |
| `xdm:downloadSpeed`| integer | Optional |
| `xdm:equipmentFees`|  | Optional |
| `xdm:equipmentInsurance`| boolean | Optional |
| `xdm:selfSetup`| boolean | Optional |
| `xdm:subscriptionDetails`|  | Optional |
| `xdm:subscriptionID`| string | Optional |
| `xdm:uploadSpeed`| integer | Optional |



#### xdm:connectionType
##### Connection Type

Tracks the type of connection type for the subscription.

`xdm:connectionType`
* is optional
* type: `enum`

The value of this property **must** be equal to one of the [known values below](#xdmtelecomsubscription-known-values).

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







#### xdm:selfSetup
##### Self-Setup

Flags if a customer is eligible for internet setup without a technican visit.

`xdm:selfSetup`
* is optional
* type: `boolean`

##### xdm:selfSetup Type


`boolean`







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








#### xdm:uploadSpeed
##### Upload Speed

Records the maximum upload speed available for the subscription, in megabytes (MB).

`xdm:uploadSpeed`
* is optional
* type: `integer`

##### xdm:uploadSpeed Type


`integer`
















#### xdm:landlineSubscriptionDetails

Landline subscription plan details including selected features, minutes, and dialing plans.

`xdm:landlineSubscriptionDetails`
* is optional
* type: `object[]`


##### xdm:landlineSubscriptionDetails Type


Array type: `object[]`

All items must be of the type:
`object` with following properties:


| Property | Type | Required |
|----------|------|----------|
| `xdm:callBlocking`| boolean | Optional |
| `xdm:callForwarding`| boolean | Optional |
| `xdm:callWaiting`| boolean | Optional |
| `xdm:callerID`| boolean | Optional |
| `xdm:equipmentFees`|  | Optional |
| `xdm:equipmentInsurance`| boolean | Optional |
| `xdm:internationalCalling`| boolean | Optional |
| `xdm:minutes`| integer | Optional |
| `xdm:subscriptionDetails`|  | Optional |
| `xdm:subscriptionID`| string | Optional |
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














#### xdm:mediaSubscriptionDetails

media subscription plan details including number of channels & included streaming services.

`xdm:mediaSubscriptionDetails`
* is optional
* type: `object[]`


##### xdm:mediaSubscriptionDetails Type


Array type: `object[]`

All items must be of the type:
`object` with following properties:


| Property | Type | Required |
|----------|------|----------|
| `xdm:channels`| integer | Optional |
| `xdm:equipmentFees`|  | Optional |
| `xdm:equipmentInsurance`| boolean | Optional |
| `xdm:streamingServices`| array | Optional |
| `xdm:subscriptionDetails`|  | Optional |
| `xdm:subscriptionID`| string | Optional |



#### xdm:channels
##### Channels

Records the number of channels included with the media subscription.

`xdm:channels`
* is optional
* type: `integer`

##### xdm:channels Type


`integer`








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
















#### xdm:mobileSubscriptionDetails

Mobile plan details including number of lines, data rates, cost, etc.

`xdm:mobileSubscriptionDetails`
* is optional
* type: `object[]`


##### xdm:mobileSubscriptionDetails Type


Array type: `object[]`

All items must be of the type:
`object` with following properties:


| Property | Type | Required |
|----------|------|----------|
| `xdm:accessories`| array | Optional |
| `xdm:devices`| array | Optional |
| `xdm:equipmentFees`|  | Optional |
| `xdm:equipmentInsurance`| boolean | Optional |
| `xdm:subscriptionDetails`|  | Optional |
| `xdm:subscriptionID`| string | Optional |



#### xdm:accessories
##### Accessories

Array of accessories associated with the plan.

`xdm:accessories`
* is optional
* type: `object[]`


##### xdm:accessories Type


Array type: `object[]`

All items must be of the type:
`object` with following properties:


| Property | Type | Required |
|----------|------|----------|
| `xdm:ID`| string | Optional |
| `xdm:manufacturer`| string | Optional |
| `xdm:name`| string | Optional |
| `xdm:serialNumber`| string | Optional |
| `xdm:type`| string | Optional |



#### xdm:ID
##### ID

Captures the ID for the accessory.

`xdm:ID`
* is optional
* type: `string`

##### xdm:ID Type


`string`








#### xdm:manufacturer
##### Manufacturer

Captures the accessory manufacturer.

`xdm:manufacturer`
* is optional
* type: `string`

##### xdm:manufacturer Type


`string`








#### xdm:name
##### Name

Captures the accessory name.

`xdm:name`
* is optional
* type: `string`

##### xdm:name Type


`string`








#### xdm:serialNumber
##### Serial Number

Captures the accessory serial number.

`xdm:serialNumber`
* is optional
* type: `string`

##### xdm:serialNumber Type


`string`








#### xdm:type
##### Type

Captures the accessory type.

`xdm:type`
* is optional
* type: `string`

##### xdm:type Type


`string`
















#### xdm:devices
##### Devices

Array of line details and their associated devices.

`xdm:devices`
* is optional
* type: `object[]`


##### xdm:devices Type


Array type: `object[]`

All items must be of the type:
`object` with following properties:


| Property | Type | Required |
|----------|------|----------|
| `xdm:ID`| string | Optional |
| `xdm:OS`| string | Optional |
| `xdm:earlyUpgradeEnrollment`| boolean | Optional |
| `xdm:insuranceEnrollment`| boolean | Optional |
| `xdm:manufacturer`| string | Optional |
| `xdm:model`| string | Optional |
| `xdm:phoneNumber`|  | Optional |
| `xdm:planLevel`| string | Optional |
| `xdm:portedNumber`| boolean | Optional |
| `xdm:pricingOptions`| string | Optional |
| `xdm:serialNumber`| string | Optional |
| `xdm:storageCapacity`| string | Optional |



#### xdm:ID
##### ID

Captures the ID for the device.

`xdm:ID`
* is optional
* type: `string`

##### xdm:ID Type


`string`








#### xdm:OS
##### OS

Captures the device operating system.

`xdm:OS`
* is optional
* type: `string`

##### xdm:OS Type


`string`



##### xdm:OS Known Values
| Value | Description |
|-------|-------------|
| `android` | Android |
| `ios` | iOS |
| `windows` | Windows |
| `blackberry` | Blackberry |
| `symbian` | Symbian |






#### xdm:earlyUpgradeEnrollment
##### Early Upgrade Enrollment

Captures if the customer opts into early upgrades.

`xdm:earlyUpgradeEnrollment`
* is optional
* type: `boolean`

##### xdm:earlyUpgradeEnrollment Type


`boolean`







#### xdm:insuranceEnrollment
##### Insurance Enrollment

Captures if the customer opts into device insurance.

`xdm:insuranceEnrollment`
* is optional
* type: `boolean`

##### xdm:insuranceEnrollment Type


`boolean`







#### xdm:manufacturer
##### Manufacturer

Captures the device manufacturer.

`xdm:manufacturer`
* is optional
* type: `string`

##### xdm:manufacturer Type


`string`








#### xdm:model
##### Model

Captures the device model.

`xdm:model`
* is optional
* type: `string`

##### xdm:model Type


`string`








#### xdm:phoneNumber
##### Phone Number

Captures the phone number assigned to this device.

`xdm:phoneNumber`
* is optional
* type: reference

##### xdm:phoneNumber Type


* []() – `https://ns.adobe.com/xdm/context/phonenumber`







#### xdm:planLevel
##### Plan Level

Captures the name of the mobile plan assigned to this device.

`xdm:planLevel`
* is optional
* type: `string`

##### xdm:planLevel Type


`string`








#### xdm:portedNumber
##### Ported Number

Captures if the customer ports their number from another carrier.

`xdm:portedNumber`
* is optional
* type: `boolean`

##### xdm:portedNumber Type


`boolean`







#### xdm:pricingOptions
##### Pricing Options

Captures if the device will be paid for in installments or full retail price.

`xdm:pricingOptions`
* is optional
* type: `string`

##### xdm:pricingOptions Type


`string`



##### xdm:pricingOptions Known Values
| Value | Description |
|-------|-------------|
| `installmentPlan` | Installment Plan |
| `retailPrice` | Retail Price |






#### xdm:serialNumber
##### Serial Number

Captures the device serial number.

`xdm:serialNumber`
* is optional
* type: `string`

##### xdm:serialNumber Type


`string`








#### xdm:storageCapacity
##### Storage Capacity

Captures the device storage capacity.

`xdm:storageCapacity`
* is optional
* type: `string`

##### xdm:storageCapacity Type


`string`
















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










