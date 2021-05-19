
# Offer Impression Details Schema

```
https://ns.adobe.com/xdm/mixins/experienceevent-offer-impression-details
```

Offer details such as offer name, clicks, dismissals.

| [Abstract](../../../abstract.md) | [Extensible](../../../extensions.md) | [Status](../../../status.md) | [Identifiable](../../../id.md) | [Custom Properties](../../../extensions.md) | [Additional Properties](../../../extensions.md) | Defined In |
|----------------------------------|--------------------------------------|------------------------------|--------------------------------|---------------------------------------------|-------------------------------------------------|------------|
| Can be instantiated | Yes | Stable | No | Forbidden | Permitted | [mixins/experience-event/experienceevent-offer-impression-details.schema.json](mixins/experience-event/experienceevent-offer-impression-details.schema.json) |

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
| [xdm:offers](#xdmoffers) | `object` | Optional | Offer Impression Details (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## xdm:offers

Offer tracking, including offer impressions and clickthroughs.

`xdm:offers`
* is optional
* type: `object`
* defined in this schema

### xdm:offers Type


`object` with following properties:


| Property | Type | Required |
|----------|------|----------|
| `xdm:ID`| string | Optional |
| `xdm:clicks`| integer | Optional |
| `xdm:dismissals`| integer | Optional |
| `xdm:impressions`| array | Optional |
| `xdm:offerSteps`|  | Optional |



#### xdm:ID
##### Offer ID

Offer Identifier.

`xdm:ID`
* is optional
* type: `string`

##### xdm:ID Type


`string`








#### xdm:clicks
##### Offer Clicks

Counts the number of times an offer has been clicked.

`xdm:clicks`
* is optional
* type: `integer`

##### xdm:clicks Type


`integer`








#### xdm:dismissals
##### Offer Dismissals

Counts the number of times an offer has been dismissed.

`xdm:dismissals`
* is optional
* type: `integer`

##### xdm:dismissals Type


`integer`








#### xdm:impressions
##### Offer Impression Details

An array of advertisements that have been displayed to a customer.

`xdm:impressions`
* is optional
* type: reference


##### xdm:impressions Type


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









