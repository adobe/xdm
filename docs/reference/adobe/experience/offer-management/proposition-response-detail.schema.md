
# Offer Response Detail Schema

```
https://ns.adobe.com/experience/offer-management/proposition-response-detail
```

A proposition response detail is used to capture the Response to an offer proposition. Proposition responses are enriched with the properties of the activity and offer at the time the decision was made.

| [Abstract](../../../../abstract.md) | [Extensible](../../../../extensions.md) | [Status](../../../../status.md) | [Identifiable](../../../../id.md) | [Custom Properties](../../../../extensions.md) | [Additional Properties](../../../../extensions.md) | Defined In |
|-------------------------------------|-----------------------------------------|---------------------------------|-----------------------------------|------------------------------------------------|----------------------------------------------------|------------|
| Can be instantiated | Yes | Stable | No | Forbidden | Permitted | [adobe/experience/offer-management/proposition-response-detail.schema.json](adobe/experience/offer-management/proposition-response-detail.schema.json) |
## Schema Hierarchy

* Offer Response Detail `https://ns.adobe.com/experience/offer-management/proposition-response-detail`
  * [Extensibility base schema](../../../datatypes/extensible.schema.md) `https://ns.adobe.com/xdm/common/extensible`
  * [Offer Activity Detail](offer-activity-detail.schema.md) `https://ns.adobe.com/experience/offer-management/offer-activity-detail`
  * [Offer Detail](offer-detail.schema.md) `https://ns.adobe.com/experience/offer-management/offer-detail`


## Offer Response Detail Example
```json
{
  "xdm:activity": {
    "xdm:id": "xcore:offer-activity:f66f792de3c0ba9",
    "xdm:name": "Email - Next Best Offer",
    "xdm:placement": "xcore:offer-placement:f6524d27c2d6edd",
    "xdm:filter": "xcore:offer-filter:f66f792de3c0ba9"
  },
  "xdm:offer": {
    "xdm:id": "xcore:personalized-offer:f67bab756ed6ee4",
    "xdm:name": "Beach Vacations",
    "xdm:tags": [
      "xcore:tag:f68535bc217322e",
      "xcore:tag:f66f67dbe6d6ee1"
    ],
    "xdm:characteristics": {
      "cost": "$2400",
      "inventoryId": "BORA04",
      "country": "French Polynesia"
    }
  }
}
```

# Offer Response Detail Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [xdm:activity](#xdmactivity) | Offer Activity Detail | Optional | Offer Response Detail (this schema) |
| [xdm:offer](#xdmoffer) | Offer Detail | Optional | Offer Response Detail (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## xdm:activity
### Offer Activity

Snapshot of the activity for which the proposition was made. The object contains at least the xdm:id property value which is the identifier of the decision activity.

`xdm:activity`
* is optional
* type: Offer Activity Detail
* defined in this schema

### xdm:activity Type


* [Offer Activity Detail](offer-activity-detail.schema.md) – `https://ns.adobe.com/experience/offer-management/offer-activity-detail`





## xdm:offer
### Offer

Snapshot of the offer that the recipient responded to. The object contains a at least the xdm:id property value which is the identifier of an offer.

`xdm:offer`
* is optional
* type: Offer Detail
* defined in this schema

### xdm:offer Type


* [Offer Detail](offer-detail.schema.md) – `https://ns.adobe.com/experience/offer-management/offer-detail`




