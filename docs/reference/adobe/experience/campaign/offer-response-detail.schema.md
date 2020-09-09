
# Campaign Offer Response Detail Schema

```
https://ns.adobe.com/experience/campaign/offer-response-detail
```

An Offer Proposition Detail is used to capture the details about an Offer Proposition.

| [Abstract](../../../../abstract.md) | [Extensible](../../../../extensions.md) | [Status](../../../../status.md) | [Identifiable](../../../../id.md) | [Custom Properties](../../../../extensions.md) | [Additional Properties](../../../../extensions.md) | Defined In |
|-------------------------------------|-----------------------------------------|---------------------------------|-----------------------------------|------------------------------------------------|----------------------------------------------------|------------|
| Can be instantiated | Yes | Stable | No | Forbidden | Permitted | [adobe/experience/campaign/offer-response-detail.schema.json](adobe/experience/campaign/offer-response-detail.schema.json) |
## Schema Hierarchy

* Campaign Offer Response Detail `https://ns.adobe.com/experience/campaign/offer-response-detail`
  * [Extensibility base schema](../../../datatypes/extensible.schema.md) `https://ns.adobe.com/xdm/common/extensible`
  * [Offer Response Detail](../offer-management/proposition-response-detail.schema.md) `https://ns.adobe.com/experience/offer-management/proposition-response-detail`


# Campaign Offer Response Detail Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [xdm:activity](#xdmactivity) | Offer Activity Detail | Optional | [Offer Response Detail](../offer-management/proposition-response-detail.schema.md#xdmactivity) |
| [xdm:offer](#xdmoffer) | Offer Detail | Optional | [Offer Response Detail](../offer-management/proposition-response-detail.schema.md#xdmoffer) |
| `*` | any | Additional | this schema *allows* additional properties |

## xdm:activity
### Offer Activity

Snapshot of the activity for which the proposition was made. The object contains at least the xdm:id property value which is the identifier of the decision activity.

`xdm:activity`
* is optional
* type: Offer Activity Detail
* defined in [Offer Response Detail](../offer-management/proposition-response-detail.schema.md#xdmactivity)

### xdm:activity Type


* [Offer Activity Detail](../offer-management/offer-activity-detail.schema.md) – `https://ns.adobe.com/experience/offer-management/offer-activity-detail`





## xdm:offer
### Offer

Snapshot of the offer that the recipient responded to. The object contains a at least the xdm:id property value which is the identifier of an offer.

`xdm:offer`
* is optional
* type: Offer Detail
* defined in [Offer Response Detail](../offer-management/proposition-response-detail.schema.md#xdmoffer)

### xdm:offer Type


* [Offer Detail](../offer-management/offer-detail.schema.md) – `https://ns.adobe.com/experience/offer-management/offer-detail`




