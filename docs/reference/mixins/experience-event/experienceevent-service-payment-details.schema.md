
# Service Payment Details Schema

```
https://ns.adobe.com/xdm/mixins/experienceevent-service-payment-details
```

Service Payment Details such as ID, type, and amount.

| [Abstract](../../../abstract.md) | [Extensible](../../../extensions.md) | [Status](../../../status.md) | [Identifiable](../../../id.md) | [Custom Properties](../../../extensions.md) | [Additional Properties](../../../extensions.md) | Defined In |
|----------------------------------|--------------------------------------|------------------------------|--------------------------------|---------------------------------------------|-------------------------------------------------|------------|
| Can be instantiated | Yes | Stable | No | Forbidden | Permitted | [mixins/experience-event/experienceevent-service-payment-details.schema.json](mixins/experience-event/experienceevent-service-payment-details.schema.json) |

## Service Payment Details Example
```json
{
  "xdm:": {
    "xdm:servicePayment": {
      "xdm:transaction": {
        "xdm:transactionAmount": "67.85",
        "xdm:transactionID": "T10291832",
        "xdm:transactionDate": "2021-01-07",
        "xdm:transactionType": "service payment"
      }
    }
  }
}
```

# Service Payment Details Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [xdm:service-payment-details](#xdmservice-payment-details) | `object` | Optional | Service Payment Details (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## xdm:service-payment-details

Payments that are not be considered part of a typical commerce transaction, such as when a customer pays a bill or initiates a recurring payment.

`xdm:service-payment-details`
* is optional
* type: `object`
* defined in this schema

### xdm:service-payment-details Type


`object` with following properties:


| Property | Type | Required |
|----------|------|----------|
| `xdm:servicePayment`|  | Optional |



#### xdm:servicePayment
##### Service Payment

Extension of transaction data type.

`xdm:servicePayment`
* is optional
* type: reference

##### xdm:servicePayment Type


* []() – `https://ns.adobe.com/xdm/datatypes/transaction`









