
# Mobile Plan Details Schema

```
https://ns.adobe.com/xdm/mixins/profile/profile-mobile-plan-details
```

Mobile plan details including number of lines, data rates, cost, etc.

| [Abstract](../../../abstract.md) | [Extensible](../../../extensions.md) | [Status](../../../status.md) | [Identifiable](../../../id.md) | [Custom Properties](../../../extensions.md) | [Additional Properties](../../../extensions.md) | Defined In |
|----------------------------------|--------------------------------------|------------------------------|--------------------------------|---------------------------------------------|-------------------------------------------------|------------|
| Can be instantiated | Yes | Experimental | No | Forbidden | Permitted | [mixins/profile/profile-mobile-plan-details.schema.json](mixins/profile/profile-mobile-plan-details.schema.json) |
## Schema Hierarchy

* Mobile Plan Details `https://ns.adobe.com/xdm/mixins/profile/profile-mobile-plan-details`
  * [Telecom Subscription](profile-telecom-subscription.schema.md) `https://ns.adobe.com/xdm/mixins/profile/profile-telecom-subscription`


## Mobile Plan Details Example
```json
{}
```

# Mobile Plan Details Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [xdm:mobilePlanDetails](#xdmmobileplandetails) | `object` | Optional | Mobile Plan Details (this schema) |
| [xdm:telecomSubscription](#xdmtelecomsubscription) | `object` | Optional | [Telecom Subscription](profile-telecom-subscription.schema.md#xdmtelecomsubscription) |
| `*` | any | Additional | this schema *allows* additional properties |

## xdm:mobilePlanDetails


`xdm:mobilePlanDetails`
* is optional
* type: `object`
* defined in this schema

### xdm:mobilePlanDetails Type


`object` with following properties:


| Property | Type | Required |
|----------|------|----------|
| `xdm:accessories`| array | Optional |
| `xdm:accountID`| string | Optional |
| `xdm:devices`| array | Optional |
| `xdm:name`| string | Optional |
| `xdm:rate`|  | Optional |



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
















#### xdm:accountID
##### Account ID

Account ID for the plan.

`xdm:accountID`
* is optional
* type: `string`

##### xdm:accountID Type


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
| `xdm:hdVideo`| boolean | Optional |
| `xdm:insuranceEnrollment`| boolean | Optional |
| `xdm:manufacturer`| string | Optional |
| `xdm:media5GAccess`| boolean | Optional |
| `xdm:mediaCloudStorageIncluded`| boolean | Optional |
| `xdm:mediaMobileHotspot`| boolean | Optional |
| `xdm:mediaRolloverData`| boolean | Optional |
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
* type: `enum`

The value of this property **must** be equal to one of the [known values below](#xdmmobileplandetails-known-values).

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







#### xdm:hdVideo
##### HD Video

Captures if the device plan includes HD video.

`xdm:hdVideo`
* is optional
* type: `boolean`

##### xdm:hdVideo Type


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








#### xdm:media5GAccess
##### 5G Access

Captures if the device is eligible for 5G Access.

`xdm:media5GAccess`
* is optional
* type: `boolean`

##### xdm:media5GAccess Type


`boolean`







#### xdm:mediaCloudStorageIncluded
##### Cloud Storage Included

Captures if the device plan includes cloud data storage.

`xdm:mediaCloudStorageIncluded`
* is optional
* type: `boolean`

##### xdm:mediaCloudStorageIncluded Type


`boolean`







#### xdm:mediaMobileHotspot
##### Mobile Hotspot

Captures if the device plan includes mobile hotspot ability.

`xdm:mediaMobileHotspot`
* is optional
* type: `boolean`

##### xdm:mediaMobileHotspot Type


`boolean`







#### xdm:mediaRolloverData
##### Rollover Data

Captures if the device plan includes rollover data.

`xdm:mediaRolloverData`
* is optional
* type: `boolean`

##### xdm:mediaRolloverData Type


`boolean`







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
















#### xdm:name
##### Name

Name for the plan.

`xdm:name`
* is optional
* type: `string`

##### xdm:name Type


`string`








#### xdm:rate
##### Rate

Rate for the plan.

`xdm:rate`
* is optional
* type: reference

##### xdm:rate Type


* []() – `https://ns.adobe.com/xdm/datatypes/currency`










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








