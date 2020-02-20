
# Profile subscriptions Schema

```
https://ns.adobe.com/xdm/context/profile-subscriptions
```

This mixin is used to capture information regarding an individual's subscriptions, such as the billing period, contract ID, start date, and end date. Profile subscriptions include commercial or licensed services, and entitlements.

| [Abstract](../../abstract.md) | [Extensible](../../extensions.md) | [Status](../../status.md) | [Identifiable](../../id.md) | [Custom Properties](../../extensions.md) | [Additional Properties](../../extensions.md) | Defined In |
|-------------------------------|-----------------------------------|---------------------------|-----------------------------|------------------------------------------|----------------------------------------------|------------|
| Can be instantiated | Yes | Experimental | No | Forbidden | Permitted | [context/profile-subscriptions.schema.json](context/profile-subscriptions.schema.json) |
## Schema Hierarchy

* Profile subscriptions `https://ns.adobe.com/xdm/context/profile-subscriptions`
  * [Extensibility base schema](../common/extensible.schema.md) `https://ns.adobe.com/xdm/common/extensible`


## Profile subscriptions Example
```json
{
  "xdm:subscriptions": [
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
  ]
}
```

# Profile subscriptions Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [xdm:subscriptions](#xdmsubscriptions) | Subscription | Optional | Profile subscriptions (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## xdm:subscriptions
### Subscriptions

Subscriptions that the profile is entitled to including terminated, expired, or exhausted subscriptions.

`xdm:subscriptions`
* is optional
* type: Subscription

* defined in this schema

### xdm:subscriptions Type


Array type: Subscription

All items must be of the type:
* [Subscription](subscription.schema.md) – `https://ns.adobe.com/xdm/context/subscription`







