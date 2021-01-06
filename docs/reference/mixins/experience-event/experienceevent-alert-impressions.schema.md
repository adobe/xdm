
# Alert Impressions Schema

```
https://ns.adobe.com/xdm/mixins/experienceevent-alert-impressions
```

Alert information such as ad impressions and ad clicks. 

| [Abstract](../../../abstract.md) | [Extensible](../../../extensions.md) | [Status](../../../status.md) | [Identifiable](../../../id.md) | [Custom Properties](../../../extensions.md) | [Additional Properties](../../../extensions.md) | Defined In |
|----------------------------------|--------------------------------------|------------------------------|--------------------------------|---------------------------------------------|-------------------------------------------------|------------|
| Can be instantiated | Yes | Experimental | No | Forbidden | Permitted | [mixins/experience-event/experienceevent-alert-impressions.schema.json](mixins/experience-event/experienceevent-alert-impressions.schema.json) |

## Alert Impressions Example
```json
{}
```

# Alert Impressions Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [xdm:alerts](#xdmalerts) | `object` | Optional | Alert Impressions (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## xdm:alerts


`xdm:alerts`
* is optional
* type: `object`
* defined in this schema

### xdm:alerts Type


`object` with following properties:


| Property | Type | Required |
|----------|------|----------|
| `xdm:alertClicks`| integer | Optional |
| `xdm:alertDismissals`| integer | Optional |
| `xdm:alertImpressions`| array | Optional |



#### xdm:alertClicks
##### Alert Clicks

Counts the number of times an alert has been clicked.

`xdm:alertClicks`
* is optional
* type: `integer`

##### xdm:alertClicks Type


`integer`








#### xdm:alertDismissals
##### Alert Dismissals

Counts the number of times an alert has been dismissed.

`xdm:alertDismissals`
* is optional
* type: `integer`

##### xdm:alertDismissals Type


`integer`








#### xdm:alertImpressions
##### Alert Impression Details

An array of alerts that have been displayed to a customer.

`xdm:alertImpressions`
* is optional
* type: reference


##### xdm:alertImpressions Type


Array type: reference

All items must be of the type:
* []() – `https://ns.adobe.com/xdm/datatypes/impressions`












