
# Metrics Schema

```
https://ns.adobe.com/xdm/data/metrics
```

This is map of metrics and measures. Each key is the valid URI of a known `Metric`. Each value is a `Measure`, i.e. a concrete data point.

| [Abstract](../../abstract.md) | [Extensible](../../extensions.md) | [Status](../../status.md) | [Identifiable](../../id.md) | [Custom Properties](../../extensions.md) | [Additional Properties](../../extensions.md) | Defined In |
|-------------------------------|-----------------------------------|---------------------------|-----------------------------|------------------------------------------|----------------------------------------------|------------|
| Can be instantiated | Yes | Experimental | No | Forbidden | Permitted | [data/metrics.schema.json](data/metrics.schema.json) |
## Schema Hierarchy

* Metrics `https://ns.adobe.com/xdm/data/metrics`
  * [Measure](measure.schema.md) `https://ns.adobe.com/xdm/data/measure`


## Metrics Example
```json
{
  "https://ns.adobe.com/xdm/data/metrics/direct-marketing/sends": {
    "xdm:value": 1000
  }
}
```

# Metrics Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [https://ns.adobe.com/xdm/data/metrics/advertising/clicks](#https//ns.adobe.com/xdm/data/metrics/advertising/clicks) | Measure | Optional | Metrics (this schema) |
| [https://ns.adobe.com/xdm/data/metrics/advertising/impressions](#https//ns.adobe.com/xdm/data/metrics/advertising/impressions) | Measure | Optional | Metrics (this schema) |
| [https://ns.adobe.com/xdm/data/metrics/application/closes](#https//ns.adobe.com/xdm/data/metrics/application/closes) | Measure | Optional | Metrics (this schema) |
| [https://ns.adobe.com/xdm/data/metrics/application/crashes](#https//ns.adobe.com/xdm/data/metrics/application/crashes) | Measure | Optional | Metrics (this schema) |
| [https://ns.adobe.com/xdm/data/metrics/application/featureusages](#https//ns.adobe.com/xdm/data/metrics/application/featureusages) | Measure | Optional | Metrics (this schema) |
| [https://ns.adobe.com/xdm/data/metrics/application/installs](#https//ns.adobe.com/xdm/data/metrics/application/installs) | Measure | Optional | Metrics (this schema) |
| [https://ns.adobe.com/xdm/data/metrics/application/launches](#https//ns.adobe.com/xdm/data/metrics/application/launches) | Measure | Optional | Metrics (this schema) |
| [https://ns.adobe.com/xdm/data/metrics/application/upgrades](#https//ns.adobe.com/xdm/data/metrics/application/upgrades) | Measure | Optional | Metrics (this schema) |
| [https://ns.adobe.com/xdm/data/metrics/direct-marketing/bounces](#https//ns.adobe.com/xdm/data/metrics/direct-marketing/bounces) | Measure | Optional | Metrics (this schema) |
| [https://ns.adobe.com/xdm/data/metrics/direct-marketing/mirror-pages](#https//ns.adobe.com/xdm/data/metrics/direct-marketing/mirror-pages) | Measure | Optional | Metrics (this schema) |
| [https://ns.adobe.com/xdm/data/metrics/direct-marketing/non-deliverables](#https//ns.adobe.com/xdm/data/metrics/direct-marketing/non-deliverables) | Measure | Optional | Metrics (this schema) |
| [https://ns.adobe.com/xdm/data/metrics/direct-marketing/not-sent](#https//ns.adobe.com/xdm/data/metrics/direct-marketing/not-sent) | Measure | Optional | Metrics (this schema) |
| [https://ns.adobe.com/xdm/data/metrics/direct-marketing/opens](#https//ns.adobe.com/xdm/data/metrics/direct-marketing/opens) | Measure | Optional | Metrics (this schema) |
| [https://ns.adobe.com/xdm/data/metrics/direct-marketing/sends](#https//ns.adobe.com/xdm/data/metrics/direct-marketing/sends) | Measure | Optional | Metrics (this schema) |
| [https://ns.adobe.com/xdm/data/metrics/direct-marketing/unsubscriptions](#https//ns.adobe.com/xdm/data/metrics/direct-marketing/unsubscriptions) | Measure | Optional | Metrics (this schema) |
| [https://ns.adobe.com/xdm/data/metrics/direct-marketing/user-complaints](#https//ns.adobe.com/xdm/data/metrics/direct-marketing/user-complaints) | Measure | Optional | Metrics (this schema) |
| [https://ns.adobe.com/xdm/data/metrics/web/link-clicks](#https//ns.adobe.com/xdm/data/metrics/web/link-clicks) | Measure | Optional | Metrics (this schema) |
| [https://ns.adobe.com/xdm/data/metrics/web/page-views](#https//ns.adobe.com/xdm/data/metrics/web/page-views) | Measure | Optional | Metrics (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## https://ns.adobe.com/xdm/data/metrics/advertising/clicks

Click(s) actions on an advertisement.

`https://ns.adobe.com/xdm/data/metrics/advertising/clicks`
* is optional
* type: Measure
* defined in this schema

### https://ns.adobe.com/xdm/data/metrics/advertising/clicks Type


* [Measure](measure.schema.md) – `https://ns.adobe.com/xdm/data/measure`





## https://ns.adobe.com/xdm/data/metrics/advertising/impressions

Impression(s) of an advertisement to an end user with the potential of being viewed.

`https://ns.adobe.com/xdm/data/metrics/advertising/impressions`
* is optional
* type: Measure
* defined in this schema

### https://ns.adobe.com/xdm/data/metrics/advertising/impressions Type


* [Measure](measure.schema.md) – `https://ns.adobe.com/xdm/data/measure`





## https://ns.adobe.com/xdm/data/metrics/application/closes

Graceful termination(s) of an application.

`https://ns.adobe.com/xdm/data/metrics/application/closes`
* is optional
* type: Measure
* defined in this schema

### https://ns.adobe.com/xdm/data/metrics/application/closes Type


* [Measure](measure.schema.md) – `https://ns.adobe.com/xdm/data/measure`





## https://ns.adobe.com/xdm/data/metrics/application/crashes

Triggered when the application does not exit gracefully. Event is sent on application launch after a crash.

`https://ns.adobe.com/xdm/data/metrics/application/crashes`
* is optional
* type: Measure
* defined in this schema

### https://ns.adobe.com/xdm/data/metrics/application/crashes Type


* [Measure](measure.schema.md) – `https://ns.adobe.com/xdm/data/measure`





## https://ns.adobe.com/xdm/data/metrics/application/featureusages

Activation(s) of an application feature that is being measured.

`https://ns.adobe.com/xdm/data/metrics/application/featureusages`
* is optional
* type: Measure
* defined in this schema

### https://ns.adobe.com/xdm/data/metrics/application/featureusages Type


* [Measure](measure.schema.md) – `https://ns.adobe.com/xdm/data/measure`





## https://ns.adobe.com/xdm/data/metrics/application/installs

Install of an application on a device. Triggered on first launch after install.

`https://ns.adobe.com/xdm/data/metrics/application/installs`
* is optional
* type: Measure
* defined in this schema

### https://ns.adobe.com/xdm/data/metrics/application/installs Type


* [Measure](measure.schema.md) – `https://ns.adobe.com/xdm/data/measure`





## https://ns.adobe.com/xdm/data/metrics/application/launches

Launch of an application. Triggered on every run, including crashes and installs. Also triggered on a resume from background when the lifecycle session timeout has been exceeded.

`https://ns.adobe.com/xdm/data/metrics/application/launches`
* is optional
* type: Measure
* defined in this schema

### https://ns.adobe.com/xdm/data/metrics/application/launches Type


* [Measure](measure.schema.md) – `https://ns.adobe.com/xdm/data/measure`





## https://ns.adobe.com/xdm/data/metrics/application/upgrades

Upgrade of an application that has previously been installed. Triggered on first launch after upgrade.

`https://ns.adobe.com/xdm/data/metrics/application/upgrades`
* is optional
* type: Measure
* defined in this schema

### https://ns.adobe.com/xdm/data/metrics/application/upgrades Type


* [Measure](measure.schema.md) – `https://ns.adobe.com/xdm/data/measure`





## https://ns.adobe.com/xdm/data/metrics/direct-marketing/bounces

Asynchronous message(s) that have been returned as temporarily undeliverable the receiving system.

`https://ns.adobe.com/xdm/data/metrics/direct-marketing/bounces`
* is optional
* type: Measure
* defined in this schema

### https://ns.adobe.com/xdm/data/metrics/direct-marketing/bounces Type


* [Measure](measure.schema.md) – `https://ns.adobe.com/xdm/data/measure`





## https://ns.adobe.com/xdm/data/metrics/direct-marketing/mirror-pages

Click on a link in a message to a web hosted mirror page.

`https://ns.adobe.com/xdm/data/metrics/direct-marketing/mirror-pages`
* is optional
* type: Measure
* defined in this schema

### https://ns.adobe.com/xdm/data/metrics/direct-marketing/mirror-pages Type


* [Measure](measure.schema.md) – `https://ns.adobe.com/xdm/data/measure`





## https://ns.adobe.com/xdm/data/metrics/direct-marketing/non-deliverables

Asynchronous message(s) failed to deliver in a way that indicates that no future delivery attempts will be successful to the address.

`https://ns.adobe.com/xdm/data/metrics/direct-marketing/non-deliverables`
* is optional
* type: Measure
* defined in this schema

### https://ns.adobe.com/xdm/data/metrics/direct-marketing/non-deliverables Type


* [Measure](measure.schema.md) – `https://ns.adobe.com/xdm/data/measure`





## https://ns.adobe.com/xdm/data/metrics/direct-marketing/not-sent

Asynchronous message (email, SMS, MMS etc) was not dispatched due to cancellation or expiration of the marketing activity.

`https://ns.adobe.com/xdm/data/metrics/direct-marketing/not-sent`
* is optional
* type: Measure
* defined in this schema

### https://ns.adobe.com/xdm/data/metrics/direct-marketing/not-sent Type


* [Measure](measure.schema.md) – `https://ns.adobe.com/xdm/data/measure`





## https://ns.adobe.com/xdm/data/metrics/direct-marketing/opens

The direct marketing message (email, SMS, Push Notifications etc) has been opened/swyped/touched by the recipient.

`https://ns.adobe.com/xdm/data/metrics/direct-marketing/opens`
* is optional
* type: Measure
* defined in this schema

### https://ns.adobe.com/xdm/data/metrics/direct-marketing/opens Type


* [Measure](measure.schema.md) – `https://ns.adobe.com/xdm/data/measure`





## https://ns.adobe.com/xdm/data/metrics/direct-marketing/sends

Asynchronous message(s) (email, SMS, MMS etc) have been dispatched to a person's account/address/device.

`https://ns.adobe.com/xdm/data/metrics/direct-marketing/sends`
* is optional
* type: Measure
* defined in this schema

### https://ns.adobe.com/xdm/data/metrics/direct-marketing/sends Type


* [Measure](measure.schema.md) – `https://ns.adobe.com/xdm/data/measure`





## https://ns.adobe.com/xdm/data/metrics/direct-marketing/unsubscriptions

The recipient of the direct marketing message (email, newsletters, etc) has opted out from receiving them.

`https://ns.adobe.com/xdm/data/metrics/direct-marketing/unsubscriptions`
* is optional
* type: Measure
* defined in this schema

### https://ns.adobe.com/xdm/data/metrics/direct-marketing/unsubscriptions Type


* [Measure](measure.schema.md) – `https://ns.adobe.com/xdm/data/measure`





## https://ns.adobe.com/xdm/data/metrics/direct-marketing/user-complaints

User complaint(s) have been received. This generally occurs when a recipient of a message reports it as spam.

`https://ns.adobe.com/xdm/data/metrics/direct-marketing/user-complaints`
* is optional
* type: Measure
* defined in this schema

### https://ns.adobe.com/xdm/data/metrics/direct-marketing/user-complaints Type


* [Measure](measure.schema.md) – `https://ns.adobe.com/xdm/data/measure`





## https://ns.adobe.com/xdm/data/metrics/web/link-clicks

Click of a web-link has occurred.

`https://ns.adobe.com/xdm/data/metrics/web/link-clicks`
* is optional
* type: Measure
* defined in this schema

### https://ns.adobe.com/xdm/data/metrics/web/link-clicks Type


* [Measure](measure.schema.md) – `https://ns.adobe.com/xdm/data/measure`





## https://ns.adobe.com/xdm/data/metrics/web/page-views

View(s) of a webpage has occurred.

`https://ns.adobe.com/xdm/data/metrics/web/page-views`
* is optional
* type: Measure
* defined in this schema

### https://ns.adobe.com/xdm/data/metrics/web/page-views Type


* [Measure](measure.schema.md) – `https://ns.adobe.com/xdm/data/measure`




