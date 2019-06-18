
# Direct Marketing Schema

```
https://ns.adobe.com/xdm/context/direct-marketing
```

The events and properties related to direct/outbound marketing such as email, direct mail, texts and in-app notifications.

| [Abstract](../../abstract.md) | [Extensible](../../extensions.md) | [Status](../../status.md) | [Identifiable](../../id.md) | [Custom Properties](../../extensions.md) | [Additional Properties](../../extensions.md) | Defined In |
|-------------------------------|-----------------------------------|---------------------------|-----------------------------|------------------------------------------|----------------------------------------------|------------|
| Can be instantiated | Yes | Stabilizing | No | Forbidden | Permitted | [context/direct-marketing.schema.json](context/direct-marketing.schema.json) |
## Schema Hierarchy

* Direct Marketing `https://ns.adobe.com/xdm/context/direct-marketing`
  * [Extensibility base schema](../common/extensible.schema.md) `https://ns.adobe.com/xdm/common/extensible`
  * [Measure](../data/measure.schema.md) `https://ns.adobe.com/xdm/data/measure`


## Direct Marketing Example
```json
{
  "xdm:sends": {
    "xdm:value": 1
  }
}
```

# Direct Marketing Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [xdm:bounces](#xdmbounces) | Measure | Optional | Direct Marketing (this schema) |
| [xdm:clicks](#xdmclicks) | Measure | Optional | Direct Marketing (this schema) |
| [xdm:impressions](#xdmimpressions) | Measure | Optional | Direct Marketing (this schema) |
| [xdm:mirrorPages](#xdmmirrorpages) | Measure | Optional | Direct Marketing (this schema) |
| [xdm:nonDeliverables](#xdmnondeliverables) | Measure | Optional | Direct Marketing (this schema) |
| [xdm:notSent](#xdmnotsent) | Measure | Optional | Direct Marketing (this schema) |
| [xdm:offerOpens](#xdmofferopens) | Measure | Optional | Direct Marketing (this schema) |
| [xdm:opens](#xdmopens) | Measure | Optional | Direct Marketing (this schema) |
| [xdm:sends](#xdmsends) | Measure | Optional | Direct Marketing (this schema) |
| [xdm:unsubscriptions](#xdmunsubscriptions) | Measure | Optional | Direct Marketing (this schema) |
| [xdm:userComplaints](#xdmusercomplaints) | Measure | Optional | Direct Marketing (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## xdm:bounces

Asynchronous message(s) that have been returned as temporarily undeliverable the receiving system.

`xdm:bounces`
* is optional
* type: Measure
* defined in this schema

### xdm:bounces Type


* [Measure](../data/measure.schema.md) – `https://ns.adobe.com/xdm/data/measure`





## xdm:clicks

Click(s) actions on a message.

`xdm:clicks`
* is optional
* type: Measure
* defined in this schema

### xdm:clicks Type


* [Measure](../data/measure.schema.md) – `https://ns.adobe.com/xdm/data/measure`





## xdm:impressions

The direct-marketing message ( Push Notifications, In-App etc) has been seen by the end user.

`xdm:impressions`
* is optional
* type: Measure
* defined in this schema

### xdm:impressions Type


* [Measure](../data/measure.schema.md) – `https://ns.adobe.com/xdm/data/measure`





## xdm:mirrorPages

Click on a link in a message to a web hosted mirror page.

`xdm:mirrorPages`
* is optional
* type: Measure
* defined in this schema

### xdm:mirrorPages Type


* [Measure](../data/measure.schema.md) – `https://ns.adobe.com/xdm/data/measure`





## xdm:nonDeliverables

Asynchronous message(s) failed to deliver in a way that indicates that no future delivery attempts will be successful to the address.

`xdm:nonDeliverables`
* is optional
* type: Measure
* defined in this schema

### xdm:nonDeliverables Type


* [Measure](../data/measure.schema.md) – `https://ns.adobe.com/xdm/data/measure`





## xdm:notSent

Asynchronous message (email, SMS, MMS etc) was not dispatched due to cancellation or expiration of the marketing activity.

`xdm:notSent`
* is optional
* type: Measure
* defined in this schema

### xdm:notSent Type


* [Measure](../data/measure.schema.md) – `https://ns.adobe.com/xdm/data/measure`





## xdm:offerOpens

Offer in a marketing message (email, SMS, Push Notifications etc) has been opened/swyped/touched/interacted with by the recipient.

`xdm:offerOpens`
* is optional
* type: Measure
* defined in this schema

### xdm:offerOpens Type


* [Measure](../data/measure.schema.md) – `https://ns.adobe.com/xdm/data/measure`





## xdm:opens

The direct marketing message (email, SMS, Push Notifications etc) has been opened/swyped/touched by the recipient.

`xdm:opens`
* is optional
* type: Measure
* defined in this schema

### xdm:opens Type


* [Measure](../data/measure.schema.md) – `https://ns.adobe.com/xdm/data/measure`





## xdm:sends

Asynchronous message(s) (email, SMS, MMS etc) have been dispatched to a person's account/address/device.

`xdm:sends`
* is optional
* type: Measure
* defined in this schema

### xdm:sends Type


* [Measure](../data/measure.schema.md) – `https://ns.adobe.com/xdm/data/measure`





## xdm:unsubscriptions

The recipient of the direct marketing message (email, newsletters, etc) has opted out from receiving them.

`xdm:unsubscriptions`
* is optional
* type: Measure
* defined in this schema

### xdm:unsubscriptions Type


* [Measure](../data/measure.schema.md) – `https://ns.adobe.com/xdm/data/measure`





## xdm:userComplaints

User complaint(s) have been received. This generally occurs when a recipient of a message reports it as spam.

`xdm:userComplaints`
* is optional
* type: Measure
* defined in this schema

### xdm:userComplaints Type


* [Measure](../data/measure.schema.md) – `https://ns.adobe.com/xdm/data/measure`




