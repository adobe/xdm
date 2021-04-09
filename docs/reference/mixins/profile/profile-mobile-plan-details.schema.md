
# Mobile Plan Details Schema

```
https://ns.adobe.com/xdm/mixins/profile/profile-mobile-plan-details
```

Mobile plan details including number of lines, data rates, cost, etc.

| [Abstract](../../../abstract.md) | [Extensible](../../../extensions.md) | [Status](../../../status.md) | [Identifiable](../../../id.md) | [Custom Properties](../../../extensions.md) | [Additional Properties](../../../extensions.md) | Defined In |
|----------------------------------|--------------------------------------|------------------------------|--------------------------------|---------------------------------------------|-------------------------------------------------|------------|
| Can be instantiated | Yes | Experimental | No | Forbidden | Permitted | [mixins/profile/profile-mobile-plan-details.schema.json](mixins/profile/profile-mobile-plan-details.schema.json) |

## Mobile Plan Details Example
```json
{}
```

# Mobile Plan Details Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [xdm:mobilePlanDetails](#xdmmobileplandetails) | `object` | Optional | Mobile Plan Details (this schema) |
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
| `xdm:accountID`| string | Optional |
| `xdm:devices`| array | Optional |



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
| `xdm:earlyUpgradeEnrollment`| boolean | Optional |
| `xdm:insuranceEnrollment`| boolean | Optional |
| `xdm:manufacturer`| string | Optional |
| `xdm:model`| string | Optional |
| `xdm:phoneNumber`|  | Optional |
| `xdm:planLevel`| string | Optional |
| `xdm:pricingOptions`| string | Optional |
| `xdm:storageCapacity`| string | Optional |



#### xdm:ID
##### ID

Captures the ID for the device.

`xdm:ID`
* is optional
* type: `string`

##### xdm:ID Type


`string`








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






#### xdm:storageCapacity
##### Storage Capacity

Captures the device storage capacity.

`xdm:storageCapacity`
* is optional
* type: `string`

##### xdm:storageCapacity Type


`string`


















