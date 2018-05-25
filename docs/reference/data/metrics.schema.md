
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
{}
```

# Metrics Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [https://ns.adobe.com/xdm/data/metrics/advertising/impressions](#https//ns.adobe.com/xdm/data/metrics/advertising/impressions) | Measure | Optional | Metrics (this schema) |
| [https://ns.adobe.com/xdm/data/metrics/application/upgrades](#https//ns.adobe.com/xdm/data/metrics/application/upgrades) | Measure | Optional | Metrics (this schema) |
| [https://ns.adobe.com/xdm/data/metrics/commerce/checkouts](#https//ns.adobe.com/xdm/data/metrics/commerce/checkouts) | Measure | Optional | Metrics (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## https://ns.adobe.com/xdm/data/metrics/advertising/impressions

Impression(s) of an advertisement to an end user with the potential of being viewed.

`https://ns.adobe.com/xdm/data/metrics/advertising/impressions`
* is optional
* type: Measure
* defined in this schema

### https://ns.adobe.com/xdm/data/metrics/advertising/impressions Type


* [Measure](measure.schema.md) – `https://ns.adobe.com/xdm/data/measure`





## https://ns.adobe.com/xdm/data/metrics/application/upgrades

Upgrade of an application that has previously been installed. Triggered on first launch after upgrade.

`https://ns.adobe.com/xdm/data/metrics/application/upgrades`
* is optional
* type: Measure
* defined in this schema

### https://ns.adobe.com/xdm/data/metrics/application/upgrades Type


* [Measure](measure.schema.md) – `https://ns.adobe.com/xdm/data/measure`





## https://ns.adobe.com/xdm/data/metrics/commerce/checkouts

An action during a checkout process of a product-list, there can be more than one checkout event if there are multiple steps in a checkout process. If there are multiple steps the event time information and referenced page or experience is used to identify the step individual events represent in order.

`https://ns.adobe.com/xdm/data/metrics/commerce/checkouts`
* is optional
* type: Measure
* defined in this schema

### https://ns.adobe.com/xdm/data/metrics/commerce/checkouts Type


* [Measure](measure.schema.md) – `https://ns.adobe.com/xdm/data/measure`




