
# Campaign Offer Proposition Detail Schema

```
https://ns.adobe.com/experience/campaign/offer-proposition-detail
```

An offer proposition detail is used to capture the details about an offer proposition.

| [Abstract](../../../../abstract.md) | [Extensible](../../../../extensions.md) | [Status](../../../../status.md) | [Identifiable](../../../../id.md) | [Custom Properties](../../../../extensions.md) | [Additional Properties](../../../../extensions.md) | Defined In |
|-------------------------------------|-----------------------------------------|---------------------------------|-----------------------------------|------------------------------------------------|----------------------------------------------------|------------|
| Can be instantiated | Yes | Stable | No | Forbidden | Permitted | [adobe/experience/campaign/offer-proposition-detail.schema.json](adobe/experience/campaign/offer-proposition-detail.schema.json) |
## Schema Hierarchy

* Campaign Offer Proposition Detail `https://ns.adobe.com/experience/campaign/offer-proposition-detail`
  * [Extensibility base schema](../../../datatypes/extensible.schema.md) `https://ns.adobe.com/xdm/common/extensible`
  * [Offer Activity Detail](../offer-management/offer-activity-detail.schema.md) `https://ns.adobe.com/experience/offer-management/offer-activity-detail`
  * [Campaign Offer Detail](offer-detail.schema.md) `https://ns.adobe.com/experience/campaign/offer-detail`


# Campaign Offer Proposition Detail Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [xdm:activity](#xdmactivity) | Offer Activity Detail | Optional | Campaign Offer Proposition Detail (this schema) |
| [xdm:offer](#xdmoffer) | Campaign Offer Detail | Optional | Campaign Offer Proposition Detail (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## xdm:activity
### Offer Activity Detail

Snapshot of the Activity for which the proposition was made. The object contains at least the xdm:id property value which is the identifier of the decision activity.

`xdm:activity`
* is optional
* type: Offer Activity Detail
* defined in this schema

### xdm:activity Type


* [Offer Activity Detail](../offer-management/offer-activity-detail.schema.md) – `https://ns.adobe.com/experience/offer-management/offer-activity-detail`





## xdm:offer
### Campaign Offer Detail

Snapshot of the Offer that the recipient responded to. The object contains a at least the xdm:id property value which is the identifier of an Offer.

`xdm:offer`
* is optional
* type: Campaign Offer Detail
* defined in this schema

### xdm:offer Type


* [Campaign Offer Detail](offer-detail.schema.md) – `https://ns.adobe.com/experience/campaign/offer-detail`




