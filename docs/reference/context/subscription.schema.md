
# Subscription Schema

```
https://ns.adobe.com/xdm/context/subscription
```

Subscriptions are licensed entitlements to software, services, or goods that are utilized in a time or usage based way.

| [Abstract](../../abstract.md) | [Extensible](../../extensions.md) | [Status](../../status.md) | [Identifiable](../../id.md) | [Custom Properties](../../extensions.md) | [Additional Properties](../../extensions.md) | Defined In |
|-------------------------------|-----------------------------------|---------------------------|-----------------------------|------------------------------------------|----------------------------------------------|------------|
| Can be instantiated | Yes | Experimental | No | Forbidden | Permitted | [context/subscription.schema.json](context/subscription.schema.json) |
## Schema Hierarchy

* Subscription `https://ns.adobe.com/xdm/context/subscription`
  * [Extensibility base schema](../common/extensible.schema.md) `https://ns.adobe.com/xdm/common/extensible`
  * [Person](person.schema.md) `https://ns.adobe.com/xdm/context/person`
  * [Device](device.schema.md) `https://ns.adobe.com/xdm/context/device`
  * [Environment](environment.schema.md) `https://ns.adobe.com/xdm/context/environment`


## Subscription Example
```json
{
  "@id": "https://data.adobe.io/subscriptionid-123",
  "xdm:subscriber": {
    "xdm:firstName": "John",
    "xdm:lastName": "Smith",
    "xdm:courtesyTitle": "Mr.",
    "xdm:birthDay": 1,
    "xdm:birthMonth": 1,
    "xdm:birthYear": 2000,
    "xdm:gender": "male"
  },
  "xdm:device": {
    "xdm:typeId": "TypeIdentifier-111",
    "xdm:typeIdService": "deviceAtlas",
    "xdm:type": "mobile",
    "xdm:manufacturer": "Apple",
    "xdm:model": "iPhone 6",
    "xdm:modelNumber": "A1586",
    "xdm:screenHeight": 667,
    "xdm:screenWidth": 375,
    "xdm:colorDepth": 16777216
  },
  "xdm:SKU": "12345678",
  "xdm:planName": "PS+ 12 Month Membership",
  "xdm:country": "USA",
  "xdm:startDate": "2001-01-01",
  "xdm:endDate": "2002-01-01",
  "xdm:term": 12,
  "xdm:termUnitOfTime": "Month",
  "xdm:status": "active",
  "xdm:contractId": "contractid-123",
  "xdm:paymentMethod": "creditCard",
  "xdm:billingPeriod": "Month",
  "xdm:billingStartDate": "2001-01-01",
  "xdm:paymentStatus": "paid"
}
```

# Subscription Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [@id](#id) | `string` | Optional | Subscription (this schema) |
| [xdm:SKU](#xdmsku) | `string` | Optional | Subscription (this schema) |
| [xdm:billingPeriod](#xdmbillingperiod) | `string` | Optional | Subscription (this schema) |
| [xdm:billingStartDate](#xdmbillingstartdate) | `string` | Optional | Subscription (this schema) |
| [xdm:category](#xdmcategory) | `string` | Optional | Subscription (this schema) |
| [xdm:chargeMethod](#xdmchargemethod) | `string` | Optional | Subscription (this schema) |
| [xdm:contractID](#xdmcontractid) | `string` | Optional | Subscription (this schema) |
| [xdm:country](#xdmcountry) | `string` | Optional | Subscription (this schema) |
| [xdm:device](#xdmdevice) | Device | Optional | Subscription (this schema) |
| [xdm:endDate](#xdmenddate) | `string` | Optional | Subscription (this schema) |
| [xdm:environment](#xdmenvironment) | Environment | Optional | Subscription (this schema) |
| [xdm:paymentMethod](#xdmpaymentmethod) | `string` | Optional | Subscription (this schema) |
| [xdm:paymentStatus](#xdmpaymentstatus) | `string` | Optional | Subscription (this schema) |
| [xdm:planName](#xdmplanname) | `string` | Optional | Subscription (this schema) |
| [xdm:reason](#xdmreason) | `string` | Optional | Subscription (this schema) |
| [xdm:renew](#xdmrenew) | `string` | Optional | Subscription (this schema) |
| [xdm:revision](#xdmrevision) | `string` | Optional | Subscription (this schema) |
| [xdm:startDate](#xdmstartdate) | `string` | Optional | Subscription (this schema) |
| [xdm:status](#xdmstatus) | `string` | Optional | Subscription (this schema) |
| [xdm:subCategory](#xdmsubcategory) | `string` | Optional | Subscription (this schema) |
| [xdm:subscriber](#xdmsubscriber) | Person | Optional | Subscription (this schema) |
| [xdm:term](#xdmterm) | `integer` | Optional | Subscription (this schema) |
| [xdm:termUnitOfTime](#xdmtermunitoftime) | `string` | Optional | Subscription (this schema) |
| [xdm:topUp](#xdmtopup) | `string` | Optional | Subscription (this schema) |
| [xdm:type](#xdmtype) | `string` | Optional | Subscription (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## @id
### Identifier

Unique identifier for the subscription instance.

`@id`
* is optional
* type: `string`
* defined in this schema

### @id Type


`string`






## xdm:SKU
### SKU

Stock keeping unit (SKU), a generally unique identifier for a product.

`xdm:SKU`
* is optional
* type: `string`
* defined in this schema

### xdm:SKU Type


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

The date when the first bill is due.

`xdm:billingStartDate`
* is optional
* type: `string`
* defined in this schema

### xdm:billingStartDate Type


`string`
* format: `date` – date, without time (according to [RFC 3339, section 5.6](http://tools.ietf.org/html/rfc3339))






## xdm:category
### Category

The main, top level categorization of this type of subscription.

`xdm:category`
* is optional
* type: `string`
* defined in this schema

### xdm:category Type


`string`






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






## xdm:device
### Device

The device linked to the subscription.

`xdm:device`
* is optional
* type: Device
* defined in this schema

### xdm:device Type


* [Device](device.schema.md) – `https://ns.adobe.com/xdm/context/device`





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






## xdm:environment
### Environment

Environment of the subscription. This can be either then known environment at the time of the subscription or the environment of the application for subscriptions related to an application.

`xdm:environment`
* is optional
* type: Environment
* defined in this schema

### xdm:environment Type


* [Environment](environment.schema.md) – `https://ns.adobe.com/xdm/context/environment`





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






## xdm:reason
### Reason

The general intent the member has for the use of the subscription.

`xdm:reason`
* is optional
* type: `string`
* defined in this schema

### xdm:reason Type


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






## xdm:revision
### Revision

The identification between subscriptions of the same name and category hierarchy.

`xdm:revision`
* is optional
* type: `string`
* defined in this schema

### xdm:revision Type


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






## xdm:subCategory
### Sub category

The specific sub categorization of the subscription.

`xdm:subCategory`
* is optional
* type: `string`
* defined in this schema

### xdm:subCategory Type


`string`






## xdm:subscriber
### Subscriber

The owner of the subscription.

`xdm:subscriber`
* is optional
* type: Person
* defined in this schema

### xdm:subscriber Type


* [Person](person.schema.md) – `https://ns.adobe.com/xdm/context/person`





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





