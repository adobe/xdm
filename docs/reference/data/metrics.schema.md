
# Metrics Schema

```
https://ns.adobe.com/xdm/data/metrics
```

This is map of metrics and measues. Each key is the valid URI of a known `Metric`. Each value is a `Measure`, i.e. a concrete data point.

| Abstract | Extensible | Custom Properties | Additional Properties | Defined In |
|----------|------------|-------------------|-----------------------|------------|
| Can be instantiated | No | Forbidden | Forbidden | [data/metrics.schema.json](data/metrics.schema.json) |

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
