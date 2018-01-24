
# Subscription Schema

```
https://ns.adobe.com/xdm/context/subscription
```

Subscriptions are licensed entitlements to software, services or goods that are utilized in a time or usage based way.

| Abstract | Extensible | Custom Properties | Additional Properties | Defined In |
|----------|------------|-------------------|-----------------------|------------|
| Cannot be instantiated | Yes | Forbidden | Permitted | [context/subscription.schema.json](context/subscription.schema.json) |

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
  "xdm:startDate": "2001-01-01T10:00:00",
  "xdm:endDate": "2002-01-01T10:00:00",
  "xdm:term": 12,
  "xdm:termUnitOfTime": "Month",
  "xdm:status": "active",
  "xdm:contractId": "contractid-123",
  "xdm:paymentMethod": "creditCard",
  "xdm:billingPeriod": "Month",
  "xdm:billingStartDate": "2001-01-01T10:00:00",
  "xdm:paymentStatus": "paid"
}
```

# Subscription Definitions

| Property | Type | Group |
|----------|------|-------|
| [@id](#@id) | `string` | `https://ns.adobe.com/xdm/context/subscription#/definitions/subscription` |
| [xdm:SKU](#xdm:SKU) | `string` | `https://ns.adobe.com/xdm/context/subscription#/definitions/subscription` |
| [xdm:billingPeriod](#xdm:billingPeriod) | `string` | `https://ns.adobe.com/xdm/context/subscription#/definitions/subscription` |
| [xdm:billingStartDate](#xdm:billingStartDate) | `string` | `https://ns.adobe.com/xdm/context/subscription#/definitions/subscription` |
| [xdm:category](#xdm:category) | `string` | `https://ns.adobe.com/xdm/context/subscription#/definitions/subscription` |
| [xdm:chargeMethod](#xdm:chargeMethod) | `string` | `https://ns.adobe.com/xdm/context/subscription#/definitions/subscription` |
| [xdm:contractId](#xdm:contractId) | `string` | `https://ns.adobe.com/xdm/context/subscription#/definitions/subscription` |
| [xdm:country](#xdm:country) | `string` | `https://ns.adobe.com/xdm/context/subscription#/definitions/subscription` |
| [xdm:device](#xdm:device) | reference | `https://ns.adobe.com/xdm/context/subscription#/definitions/subscription` |
| [xdm:endDate](#xdm:endDate) | `string` | `https://ns.adobe.com/xdm/context/subscription#/definitions/subscription` |
| [xdm:environment](#xdm:environment) | reference | `https://ns.adobe.com/xdm/context/subscription#/definitions/subscription` |
| [xdm:paymentMethod](#xdm:paymentMethod) | `string` | `https://ns.adobe.com/xdm/context/subscription#/definitions/subscription` |
| [xdm:paymentStatus](#xdm:paymentStatus) | `string` | `https://ns.adobe.com/xdm/context/subscription#/definitions/subscription` |
| [xdm:planName](#xdm:planName) | `string` | `https://ns.adobe.com/xdm/context/subscription#/definitions/subscription` |
| [xdm:reason](#xdm:reason) | `string` | `https://ns.adobe.com/xdm/context/subscription#/definitions/subscription` |
| [xdm:renew](#xdm:renew) | `string` | `https://ns.adobe.com/xdm/context/subscription#/definitions/subscription` |
| [xdm:revision](#xdm:revision) | `string` | `https://ns.adobe.com/xdm/context/subscription#/definitions/subscription` |
| [xdm:startDate](#xdm:startDate) | `string` | `https://ns.adobe.com/xdm/context/subscription#/definitions/subscription` |
| [xdm:status](#xdm:status) | `string` | `https://ns.adobe.com/xdm/context/subscription#/definitions/subscription` |
| [xdm:subCategory](#xdm:subCategory) | `string` | `https://ns.adobe.com/xdm/context/subscription#/definitions/subscription` |
| [xdm:subscriber](#xdm:subscriber) | reference | `https://ns.adobe.com/xdm/context/subscription#/definitions/subscription` |
| [xdm:term](#xdm:term) | `integer` | `https://ns.adobe.com/xdm/context/subscription#/definitions/subscription` |
| [xdm:termUnitOfTime](#xdm:termUnitOfTime) | `string` | `https://ns.adobe.com/xdm/context/subscription#/definitions/subscription` |
| [xdm:topUp](#xdm:topUp) | `string` | `https://ns.adobe.com/xdm/context/subscription#/definitions/subscription` |
| [xdm:type](#xdm:type) | `string` | `https://ns.adobe.com/xdm/context/subscription#/definitions/subscription` |

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

Stock Keeping Unit, a generally unique identifier for a product.

`xdm:SKU`
* is optional
* type: `string`
* defined in this schema

### xdm:SKU Type


`string`






## xdm:billingPeriod
### Billing Period

The duration between billings.

`xdm:billingPeriod`
* is optional
* type: `string`
* defined in this schema

### xdm:billingPeriod Type


`string`






## xdm:billingStartDate
### Billing Start Date

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
### Charge Method

The way the billing is setup to charge the customer.

`xdm:chargeMethod`
* is optional
* type: `string`
* defined in this schema

### xdm:chargeMethod Type


`string`






## xdm:contractId
### Contract ID

Unique ID for the contract that governs this subscription.

`xdm:contractId`
* is optional
* type: `string`
* defined in this schema

### xdm:contractId Type


`string`






## xdm:country
### Country

The country that the subscription contractual/agreement terms are rooted in.

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
* type: reference
* defined in this schema

### xdm:device Type


* []() – `https://ns.adobe.com/xdm/context/device`





## xdm:endDate
### End Date

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

Environment of the subscription.

This can be either then known environment at the time of the subscription
or the environment of the application for subscriptions related to an
Application.


`xdm:environment`
* is optional
* type: reference
* defined in this schema

### xdm:environment Type


* []() – `https://ns.adobe.com/xdm/context/environment`





## xdm:paymentMethod
### Payment Method

The payment method for recurring payments.

`xdm:paymentMethod`
* is optional
* type: `string`
* defined in this schema

### xdm:paymentMethod Type


`string`






## xdm:paymentStatus
### Payment Status

The standing of the account.

`xdm:paymentStatus`
* is optional
* type: `string`
* defined in this schema

### xdm:paymentStatus Type


`string`






## xdm:planName
### Plan Name

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
### Start Date

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
### Sub Category

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
* type: reference
* defined in this schema

### xdm:subscriber Type


* []() – `https://ns.adobe.com/xdm/common/person`





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
### Term Unit Of Time

The unit of time for the term period.

`xdm:termUnitOfTime`
* is optional
* type: `string`
* defined in this schema

### xdm:termUnitOfTime Type


`string`






## xdm:topUp
### Top Up

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





