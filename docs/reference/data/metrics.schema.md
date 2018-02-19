
# Metrics Schema

```
https://ns.adobe.com/xdm/data/metrics
```

This is map of metrics and measues. Each key is the valid URI of a known `Metric`. Each value is a `Measure`, i.e. a concrete data point.

| Abstract | Extensible | Custom Properties | Additional Properties | Defined In |
|----------|------------|-------------------|-----------------------|------------|
| Can be instantiated | No | Forbidden | Forbidden | [data/metrics.schema.json](data/metrics.schema.json) |

## Schema Hierarchy

* Metrics `https://ns.adobe.com/xdm/data/metrics`
  * [Measure](measure.schema.md) `https://ns.adobe.com/xdm/data/measure`

## Metrics Example
```json
{
  "https://ns.adobe.com/xdm/data/metrics/direct-marketing/sends": {
    "xdm:value": 1000
  },
  "https://ns.adobe.com/xdm/data/metrics/commerce/product-views": {
    "xdm:value": 20,
    "xdm:unit": null
  },
  "https://ns.adobe.com/xdm/data/metrics/web/page-views": {
    "@type": "https://ns.adobe.com/xdm/data/metrics/web/page-views",
    "xdm:value": 1625,
    "xdm:unit": null
  }
}
```

# Metrics Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [https://ns.adobe.com/xdm/data/discount](#https//ns.adobe.com/xdm/data/discount) | Measure | Optional | Metrics (this schema) |
| [https://ns.adobe.com/xdm/data/metrics/advertising/clicks](#https//ns.adobe.com/xdm/data/metrics/advertising/clicks) | Measure | Optional | Metrics (this schema) |
| [https://ns.adobe.com/xdm/data/metrics/advertising/impressions](#https//ns.adobe.com/xdm/data/metrics/advertising/impressions) | Measure | Optional | Metrics (this schema) |
| [https://ns.adobe.com/xdm/data/metrics/commerce/abandons](#https//ns.adobe.com/xdm/data/metrics/commerce/abandons) | Measure | Optional | Metrics (this schema) |
| [https://ns.adobe.com/xdm/data/metrics/commerce/checkouts](#https//ns.adobe.com/xdm/data/metrics/commerce/checkouts) | Measure | Optional | Metrics (this schema) |
| [https://ns.adobe.com/xdm/data/metrics/commerce/product-list-adds](#https//ns.adobe.com/xdm/data/metrics/commerce/product-list-adds) | Measure | Optional | Metrics (this schema) |
| [https://ns.adobe.com/xdm/data/metrics/commerce/product-list-opens](#https//ns.adobe.com/xdm/data/metrics/commerce/product-list-opens) | Measure | Optional | Metrics (this schema) |
| [https://ns.adobe.com/xdm/data/metrics/commerce/product-list-removals](#https//ns.adobe.com/xdm/data/metrics/commerce/product-list-removals) | Measure | Optional | Metrics (this schema) |
| [https://ns.adobe.com/xdm/data/metrics/commerce/product-list-reopens](#https//ns.adobe.com/xdm/data/metrics/commerce/product-list-reopens) | Measure | Optional | Metrics (this schema) |
| [https://ns.adobe.com/xdm/data/metrics/commerce/product-list-views](#https//ns.adobe.com/xdm/data/metrics/commerce/product-list-views) | Measure | Optional | Metrics (this schema) |
| [https://ns.adobe.com/xdm/data/metrics/commerce/product-views](#https//ns.adobe.com/xdm/data/metrics/commerce/product-views) | Measure | Optional | Metrics (this schema) |
| [https://ns.adobe.com/xdm/data/metrics/commerce/purchases](#https//ns.adobe.com/xdm/data/metrics/commerce/purchases) | Measure | Optional | Metrics (this schema) |
| [https://ns.adobe.com/xdm/data/metrics/commerce/save-for-laters](#https//ns.adobe.com/xdm/data/metrics/commerce/save-for-laters) | Measure | Optional | Metrics (this schema) |
| [https://ns.adobe.com/xdm/data/metrics/direct-marketing/bounces](#https//ns.adobe.com/xdm/data/metrics/direct-marketing/bounces) | Measure | Optional | Metrics (this schema) |
| [https://ns.adobe.com/xdm/data/metrics/direct-marketing/mirror-pages](#https//ns.adobe.com/xdm/data/metrics/direct-marketing/mirror-pages) | Measure | Optional | Metrics (this schema) |
| [https://ns.adobe.com/xdm/data/metrics/direct-marketing/non-deliverables](#https//ns.adobe.com/xdm/data/metrics/direct-marketing/non-deliverables) | Measure | Optional | Metrics (this schema) |
| [https://ns.adobe.com/xdm/data/metrics/direct-marketing/sends](#https//ns.adobe.com/xdm/data/metrics/direct-marketing/sends) | Measure | Optional | Metrics (this schema) |
| [https://ns.adobe.com/xdm/data/metrics/direct-marketing/user-complaints](#https//ns.adobe.com/xdm/data/metrics/direct-marketing/user-complaints) | Measure | Optional | Metrics (this schema) |
| [https://ns.adobe.com/xdm/data/metrics/web/link-clicks](#https//ns.adobe.com/xdm/data/metrics/web/link-clicks) | Measure | Optional | Metrics (this schema) |
| [https://ns.adobe.com/xdm/data/metrics/web/page-views](#https//ns.adobe.com/xdm/data/metrics/web/page-views) | Measure | Optional | Metrics (this schema) |
| `.+://.+` | reference | Pattern | Metrics (this schema) |

## https://ns.adobe.com/xdm/data/discount


`https://ns.adobe.com/xdm/data/discount`
* is optional
* type: Measure
* defined in this schema

### https://ns.adobe.com/xdm/data/discount Type


* [Measure](measure.schema.md) – `https://ns.adobe.com/xdm/data/measure`





## https://ns.adobe.com/xdm/data/metrics/advertising/clicks


`https://ns.adobe.com/xdm/data/metrics/advertising/clicks`
* is optional
* type: Measure
* defined in this schema

### https://ns.adobe.com/xdm/data/metrics/advertising/clicks Type


* [Measure](measure.schema.md) – `https://ns.adobe.com/xdm/data/measure`





## https://ns.adobe.com/xdm/data/metrics/advertising/impressions


`https://ns.adobe.com/xdm/data/metrics/advertising/impressions`
* is optional
* type: Measure
* defined in this schema

### https://ns.adobe.com/xdm/data/metrics/advertising/impressions Type


* [Measure](measure.schema.md) – `https://ns.adobe.com/xdm/data/measure`





## https://ns.adobe.com/xdm/data/metrics/commerce/abandons


`https://ns.adobe.com/xdm/data/metrics/commerce/abandons`
* is optional
* type: Measure
* defined in this schema

### https://ns.adobe.com/xdm/data/metrics/commerce/abandons Type


* [Measure](measure.schema.md) – `https://ns.adobe.com/xdm/data/measure`





## https://ns.adobe.com/xdm/data/metrics/commerce/checkouts


`https://ns.adobe.com/xdm/data/metrics/commerce/checkouts`
* is optional
* type: Measure
* defined in this schema

### https://ns.adobe.com/xdm/data/metrics/commerce/checkouts Type


* [Measure](measure.schema.md) – `https://ns.adobe.com/xdm/data/measure`





## https://ns.adobe.com/xdm/data/metrics/commerce/product-list-adds


`https://ns.adobe.com/xdm/data/metrics/commerce/product-list-adds`
* is optional
* type: Measure
* defined in this schema

### https://ns.adobe.com/xdm/data/metrics/commerce/product-list-adds Type


* [Measure](measure.schema.md) – `https://ns.adobe.com/xdm/data/measure`





## https://ns.adobe.com/xdm/data/metrics/commerce/product-list-opens


`https://ns.adobe.com/xdm/data/metrics/commerce/product-list-opens`
* is optional
* type: Measure
* defined in this schema

### https://ns.adobe.com/xdm/data/metrics/commerce/product-list-opens Type


* [Measure](measure.schema.md) – `https://ns.adobe.com/xdm/data/measure`





## https://ns.adobe.com/xdm/data/metrics/commerce/product-list-removals


`https://ns.adobe.com/xdm/data/metrics/commerce/product-list-removals`
* is optional
* type: Measure
* defined in this schema

### https://ns.adobe.com/xdm/data/metrics/commerce/product-list-removals Type


* [Measure](measure.schema.md) – `https://ns.adobe.com/xdm/data/measure`





## https://ns.adobe.com/xdm/data/metrics/commerce/product-list-reopens


`https://ns.adobe.com/xdm/data/metrics/commerce/product-list-reopens`
* is optional
* type: Measure
* defined in this schema

### https://ns.adobe.com/xdm/data/metrics/commerce/product-list-reopens Type


* [Measure](measure.schema.md) – `https://ns.adobe.com/xdm/data/measure`





## https://ns.adobe.com/xdm/data/metrics/commerce/product-list-views


`https://ns.adobe.com/xdm/data/metrics/commerce/product-list-views`
* is optional
* type: Measure
* defined in this schema

### https://ns.adobe.com/xdm/data/metrics/commerce/product-list-views Type


* [Measure](measure.schema.md) – `https://ns.adobe.com/xdm/data/measure`





## https://ns.adobe.com/xdm/data/metrics/commerce/product-views


`https://ns.adobe.com/xdm/data/metrics/commerce/product-views`
* is optional
* type: Measure
* defined in this schema

### https://ns.adobe.com/xdm/data/metrics/commerce/product-views Type


* [Measure](measure.schema.md) – `https://ns.adobe.com/xdm/data/measure`





## https://ns.adobe.com/xdm/data/metrics/commerce/purchases


`https://ns.adobe.com/xdm/data/metrics/commerce/purchases`
* is optional
* type: Measure
* defined in this schema

### https://ns.adobe.com/xdm/data/metrics/commerce/purchases Type


* [Measure](measure.schema.md) – `https://ns.adobe.com/xdm/data/measure`





## https://ns.adobe.com/xdm/data/metrics/commerce/save-for-laters


`https://ns.adobe.com/xdm/data/metrics/commerce/save-for-laters`
* is optional
* type: Measure
* defined in this schema

### https://ns.adobe.com/xdm/data/metrics/commerce/save-for-laters Type


* [Measure](measure.schema.md) – `https://ns.adobe.com/xdm/data/measure`





## https://ns.adobe.com/xdm/data/metrics/direct-marketing/bounces


`https://ns.adobe.com/xdm/data/metrics/direct-marketing/bounces`
* is optional
* type: Measure
* defined in this schema

### https://ns.adobe.com/xdm/data/metrics/direct-marketing/bounces Type


* [Measure](measure.schema.md) – `https://ns.adobe.com/xdm/data/measure`





## https://ns.adobe.com/xdm/data/metrics/direct-marketing/mirror-pages


`https://ns.adobe.com/xdm/data/metrics/direct-marketing/mirror-pages`
* is optional
* type: Measure
* defined in this schema

### https://ns.adobe.com/xdm/data/metrics/direct-marketing/mirror-pages Type


* [Measure](measure.schema.md) – `https://ns.adobe.com/xdm/data/measure`





## https://ns.adobe.com/xdm/data/metrics/direct-marketing/non-deliverables


`https://ns.adobe.com/xdm/data/metrics/direct-marketing/non-deliverables`
* is optional
* type: Measure
* defined in this schema

### https://ns.adobe.com/xdm/data/metrics/direct-marketing/non-deliverables Type


* [Measure](measure.schema.md) – `https://ns.adobe.com/xdm/data/measure`





## https://ns.adobe.com/xdm/data/metrics/direct-marketing/sends


`https://ns.adobe.com/xdm/data/metrics/direct-marketing/sends`
* is optional
* type: Measure
* defined in this schema

### https://ns.adobe.com/xdm/data/metrics/direct-marketing/sends Type


* [Measure](measure.schema.md) – `https://ns.adobe.com/xdm/data/measure`





## https://ns.adobe.com/xdm/data/metrics/direct-marketing/user-complaints


`https://ns.adobe.com/xdm/data/metrics/direct-marketing/user-complaints`
* is optional
* type: Measure
* defined in this schema

### https://ns.adobe.com/xdm/data/metrics/direct-marketing/user-complaints Type


* [Measure](measure.schema.md) – `https://ns.adobe.com/xdm/data/measure`





## https://ns.adobe.com/xdm/data/metrics/web/link-clicks


`https://ns.adobe.com/xdm/data/metrics/web/link-clicks`
* is optional
* type: Measure
* defined in this schema

### https://ns.adobe.com/xdm/data/metrics/web/link-clicks Type


* [Measure](measure.schema.md) – `https://ns.adobe.com/xdm/data/measure`





## https://ns.adobe.com/xdm/data/metrics/web/page-views


`https://ns.adobe.com/xdm/data/metrics/web/page-views`
* is optional
* type: Measure
* defined in this schema

### https://ns.adobe.com/xdm/data/metrics/web/page-views Type


* [Measure](measure.schema.md) – `https://ns.adobe.com/xdm/data/measure`





## Pattern: `.+://.+`
Applies to all properties that match the regular expression `.+://.+`


`.+://.+`
* is a property pattern
* type: reference
* defined in this schema

### Pattern .+://.+ Type


* []() – `https://ns.adobe.com/xdm/data/measure`




