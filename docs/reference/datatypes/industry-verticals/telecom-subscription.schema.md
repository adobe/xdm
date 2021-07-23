
# Subscription Schema

```
https://ns.adobe.com/xdm/datatypes/telecom-subscription
```

Contain details for the specific subscription types, such as internet, mobile, media, or landline.

| [Abstract](../../../abstract.md) | [Extensible](../../../extensions.md) | [Status](../../../status.md) | [Identifiable](../../../id.md) | [Custom Properties](../../../extensions.md) | [Additional Properties](../../../extensions.md) | Defined In |
|----------------------------------|--------------------------------------|------------------------------|--------------------------------|---------------------------------------------|-------------------------------------------------|------------|
| Can be instantiated | Yes | Stable | No | Forbidden | Permitted | [datatypes/industry-verticals/telecom-subscription.schema.json](datatypes/industry-verticals/telecom-subscription.schema.json) |
## Schema Hierarchy

* Subscription `https://ns.adobe.com/xdm/datatypes/telecom-subscription`
  * [Extensibility base schema](../extensible.schema.md) `https://ns.adobe.com/xdm/common/extensible`
  * [Person](../person/person.schema.md) `https://ns.adobe.com/xdm/context/person`


## Subscription Example
```json
{}
```

# Subscription Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [ID](#id) | `string` | Optional | Subscription (this schema) |
| [xdm:billingPeriod](#xdmbillingperiod) | `string` | Optional | Subscription (this schema) |
| [xdm:billingStartDate](#xdmbillingstartdate) | `string` | Optional | Subscription (this schema) |
| [xdm:chargeMethod](#xdmchargemethod) | `string` | Optional | Subscription (this schema) |
| [xdm:contractID](#xdmcontractid) | `string` | Optional | Subscription (this schema) |
| [xdm:country](#xdmcountry) | `string` | Optional | Subscription (this schema) |
| [xdm:devices](#xdmdevices) | `object[]` | Optional | Subscription (this schema) |
| [xdm:endDate](#xdmenddate) | `string` | Optional | Subscription (this schema) |
| [xdm:paymentDueDate](#xdmpaymentduedate) | `string` | Optional | Subscription (this schema) |
| [xdm:paymentMethod](#xdmpaymentmethod) | `string` | Optional | Subscription (this schema) |
| [xdm:paymentStatus](#xdmpaymentstatus) | `string` | Optional | Subscription (this schema) |
| [xdm:planName](#xdmplanname) | `string` | Optional | Subscription (this schema) |
| [xdm:renew](#xdmrenew) | `string` | Optional | Subscription (this schema) |
| [xdm:startDate](#xdmstartdate) | `string` | Optional | Subscription (this schema) |
| [xdm:status](#xdmstatus) | `string` | Optional | Subscription (this schema) |
| [xdm:subscriber](#xdmsubscriber) | Person | Optional | Subscription (this schema) |
| [xdm:subscriptionCategory](#xdmsubscriptioncategory) | `string` | Optional | Subscription (this schema) |
| [xdm:subscriptionSKU](#xdmsubscriptionsku) | `string` | Optional | Subscription (this schema) |
| [xdm:subscriptionSubCategory](#xdmsubscriptionsubcategory) | `string` | Optional | Subscription (this schema) |
| [xdm:term](#xdmterm) | `integer` | Optional | Subscription (this schema) |
| [xdm:termUnitOfTime](#xdmtermunitoftime) | `string` | Optional | Subscription (this schema) |
| [xdm:topUp](#xdmtopup) | `string` | Optional | Subscription (this schema) |
| [xdm:type](#xdmtype) | `string` | Optional | Subscription (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## ID
### Identifier

Unique identifier for the subscription instance.

`ID`
* is optional
* type: `string`
* defined in this schema

### ID Type


`string`






## xdm:billingPeriod
### Billing period

The duration between billings.

`xdm:billingPeriod`
* is optional
* type: `string`
* defined in this schema

### xdm:billingPeriod Type


`string`






## xdm:billingStartDate
### Billing start date

The date when the billing period begins.

`xdm:billingStartDate`
* is optional
* type: `string`
* defined in this schema

### xdm:billingStartDate Type


`string`
* format: `date` – date, without time (according to [RFC 3339, section 5.6](http://tools.ietf.org/html/rfc3339))






## xdm:chargeMethod
### Charge method

The way the billing is setup to charge the customer.

`xdm:chargeMethod`
* is optional
* type: `string`
* defined in this schema

### xdm:chargeMethod Type


`string`






## xdm:contractID
### Contract ID

Unique ID for the contract that governs this subscription.

`xdm:contractID`
* is optional
* type: `string`
* defined in this schema

### xdm:contractID Type


`string`






## xdm:country
### Country

The country that the subscription contractual and agreement terms are rooted in.

`xdm:country`
* is optional
* type: `string`
* defined in this schema

### xdm:country Type


`string`






## xdm:devices
### Devices

Array of devices and/or accessories associated with the plan.

`xdm:devices`
* is optional
* type: `object[]`

* defined in this schema

### xdm:devices Type


Array type: `object[]`

All items must be of the type:
`object` with following properties:


| Property | Type | Required |
|----------|------|----------|
| `xdm:ID`| string | Optional |
| `xdm:OS`| string | Optional |
| `xdm:deviceFees`|  | Optional |
| `xdm:deviceInsurance`| boolean | Optional |
| `xdm:manufacturer`| string | Optional |
| `xdm:name`| string | Optional |
| `xdm:paymentOptions`| string | Optional |
| `xdm:serialNumber`| string | Optional |
| `xdm:status`| string | Optional |
| `xdm:storageCapacity`| string | Optional |
| `xdm:type`| string | Optional |



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

The value of this property **must** be equal to one of the [known values below](#xdmdevices-known-values).

##### xdm:OS Known Values
| Value | Description |
|-------|-------------|
| `android` | Android |
| `ios` | iOS |
| `windows` | Windows |
| `blackberry` | Blackberry |
| `symbian` | Symbian |






#### xdm:deviceFees
##### Device Fees

Captures any device fees for items such as routers, modems, recievers, etc.

`xdm:deviceFees`
* is optional
* type: reference

##### xdm:deviceFees Type


* []() – `https://ns.adobe.com/xdm/datatypes/currency`







#### xdm:deviceInsurance
##### Device Insurance

Tracks if a customer has opted-in to insurance for the device.

`xdm:deviceInsurance`
* is optional
* type: `boolean`

##### xdm:deviceInsurance Type


`boolean`







#### xdm:manufacturer
##### Manufacturer

Captures the device manufacturer.

`xdm:manufacturer`
* is optional
* type: `string`

##### xdm:manufacturer Type


`string`








#### xdm:name
##### Name

Captures the device name.

`xdm:name`
* is optional
* type: `string`

##### xdm:name Type


`string`








#### xdm:paymentOptions
##### Payment Options

Captures if the device will be paid for in installments or full retail price.

`xdm:paymentOptions`
* is optional
* type: `enum`

The value of this property **must** be equal to one of the [known values below](#xdmdevices-known-values).

##### xdm:paymentOptions Known Values
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








#### xdm:status
##### Status

Captures the device status.

`xdm:status`
* is optional
* type: `enum`

The value of this property **must** be equal to one of the [known values below](#xdmdevices-known-values).

##### xdm:status Known Values
| Value | Description |
|-------|-------------|
| `active` | Active |
| `inactive` | Inactive |






#### xdm:storageCapacity
##### Storage Capacity

Captures the device storage capacity.

`xdm:storageCapacity`
* is optional
* type: `string`

##### xdm:storageCapacity Type


`string`








#### xdm:type
##### Type

Captures the device type.

`xdm:type`
* is optional
* type: `string`

##### xdm:type Type


`string`














## xdm:endDate
### End date

The date the current subscription term ends.

`xdm:endDate`
* is optional
* type: `string`
* defined in this schema

### xdm:endDate Type


`string`
* format: `date` – date, without time (according to [RFC 3339, section 5.6](http://tools.ietf.org/html/rfc3339))






## xdm:paymentDueDate
### Payment Due Date

The date when the subscription payment is due.

`xdm:paymentDueDate`
* is optional
* type: `string`
* defined in this schema

### xdm:paymentDueDate Type


`string`
* format: `date` – date, without time (according to [RFC 3339, section 5.6](http://tools.ietf.org/html/rfc3339))






## xdm:paymentMethod
### Payment method

The payment method for recurring payments.

`xdm:paymentMethod`
* is optional
* type: `string`
* defined in this schema

### xdm:paymentMethod Type


`string`






## xdm:paymentStatus
### Payment status

The standing of the account.

`xdm:paymentStatus`
* is optional
* type: `string`
* defined in this schema

### xdm:paymentStatus Type


`string`






## xdm:planName
### Plan name

The human readable name for the subscription.

`xdm:planName`
* is optional
* type: `string`
* defined in this schema

### xdm:planName Type


`string`






## xdm:renew
### Renew

The agreed way that the subscription may continue after the end date.

`xdm:renew`
* is optional
* type: `string`
* defined in this schema

### xdm:renew Type


`string`






## xdm:startDate
### Start date

The date the subscription begins.

`xdm:startDate`
* is optional
* type: `string`
* defined in this schema

### xdm:startDate Type


`string`
* format: `date` – date, without time (according to [RFC 3339, section 5.6](http://tools.ietf.org/html/rfc3339))






## xdm:status
### Status

The current status of the subscription.

`xdm:status`
* is optional
* type: `string`
* defined in this schema

### xdm:status Type


`string`






## xdm:subscriber
### Subscriber

The owner of the subscription.

`xdm:subscriber`
* is optional
* type: Person
* defined in this schema

### xdm:subscriber Type


* [Person](../person/person.schema.md) – `https://ns.adobe.com/xdm/context/person`





## xdm:subscriptionCategory
### Subscription Category

The main, top level categorization of this type of subscription.

`xdm:subscriptionCategory`
* is optional
* type: `string`
* defined in this schema

### xdm:subscriptionCategory Type


`string`






## xdm:subscriptionSKU
### Subscription SKU

Stock keeping unit (SKU), a generally unique identifier for a product.

`xdm:subscriptionSKU`
* is optional
* type: `string`
* defined in this schema

### xdm:subscriptionSKU Type


`string`






## xdm:subscriptionSubCategory
### Subscription Sub-category

The specific sub categorization of the subscription.

`xdm:subscriptionSubCategory`
* is optional
* type: `string`
* defined in this schema

### xdm:subscriptionSubCategory Type


`string`






## xdm:term
### Term

The numeric value of the term.

`xdm:term`
* is optional
* type: `integer`
* defined in this schema

### xdm:term Type


`integer`






## xdm:termUnitOfTime
### Term unit of time

The unit of time for the term period.

`xdm:termUnitOfTime`
* is optional
* type: `string`
* defined in this schema

### xdm:termUnitOfTime Type


`string`






## xdm:topUp
### Top up

Agreed terms for how consumable aspects of a subscription are repurchased during a billing period.

`xdm:topUp`
* is optional
* type: `string`
* defined in this schema

### xdm:topUp Type


`string`






## xdm:type
### Type

The scope of entitlement in relation to how many people are covered by the subscription.

`xdm:type`
* is optional
* type: `string`
* defined in this schema

### xdm:type Type


`string`





