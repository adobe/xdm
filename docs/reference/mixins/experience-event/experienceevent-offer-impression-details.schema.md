
# Offer Impression Details Schema

```
https://ns.adobe.com/xdm/mixins/experienceevent-offer-impression-details
```



| [Abstract](../../../abstract.md) | [Extensible](../../../extensions.md) | [Status](../../../status.md) | [Identifiable](../../../id.md) | [Custom Properties](../../../extensions.md) | [Additional Properties](../../../extensions.md) | Defined In |
|----------------------------------|--------------------------------------|------------------------------|--------------------------------|---------------------------------------------|-------------------------------------------------|------------|
| Can be instantiated | Yes | Experimental | No | Forbidden | Permitted | [mixins/experience-event/experienceevent-offer-impression-details.schema.json](mixins/experience-event/experienceevent-offer-impression-details.schema.json) |

## Offer Impression Details Example
```json
{
  "xdm:marketing ": {
    "xdm:offerClicks": 1,
    "xdm:offerDismissals": 2
  }
}
```

# Offer Impression Details Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [xdm:marketing ](#xdmmarketing) | `object` | Optional | Offer Impression Details (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## xdm:marketing 


`xdm:marketing `
* is optional
* type: `object`
* defined in this schema

### xdm:marketing  Type


`object` with following properties:


| Property | Type | Required |
|----------|------|----------|
| `xdm:offerClicks`| integer | Optional |
| `xdm:offerDismissals`| integer | Optional |
| `xdm:offerImpressions`| array | Optional |
| `xdm:offerSteps`|  | Optional |



#### xdm:offerClicks
##### Offer Clicks

Counts the number of times an offer has been clicked.

`xdm:offerClicks`
* is optional
* type: `integer`

##### xdm:offerClicks Type


`integer`








#### xdm:offerDismissals
##### Offer Dismissals

Counts the number of times an offer has been dismissed.

`xdm:offerDismissals`
* is optional
* type: `integer`

##### xdm:offerDismissals Type


`integer`








#### xdm:offerImpressions
##### Offer Impression Details

An array of advertisements that have been displayed to a customer.

`xdm:offerImpressions`
* is optional
* type: reference


##### xdm:offerImpressions Type


Array type: reference

All items must be of the type:
* []() – `https://ns.adobe.com/xdm/datatypes/impressions`










#### xdm:offerSteps
##### Offer Steps

Extension of toolUsage data type.

`xdm:offerSteps`
* is optional
* type: reference

##### xdm:offerSteps Type


* []() – `https://ns.adobe.com/xdm/datatypes/tool-usage`









