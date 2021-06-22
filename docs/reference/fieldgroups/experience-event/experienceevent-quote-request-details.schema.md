
# Quote Request Details Schema

```
https://ns.adobe.com/xdm/mixins/experienceevent-quote-request-details
```

Captures different details of a quote request process for various types of quotes - including insurance policies, healthcare, manufacturing orders, or high tech orders.

| [Abstract](../../../abstract.md) | [Extensible](../../../extensions.md) | [Status](../../../status.md) | [Identifiable](../../../id.md) | [Custom Properties](../../../extensions.md) | [Additional Properties](../../../extensions.md) | Defined In |
|----------------------------------|--------------------------------------|------------------------------|--------------------------------|---------------------------------------------|-------------------------------------------------|------------|
| Can be instantiated | Yes | Stable | No | Forbidden | Permitted | [fieldgroups/experience-event/experienceevent-quote-request-details.schema.json](fieldgroups/experience-event/experienceevent-quote-request-details.schema.json) |

## Quote Request Details Example
```json
{
  "xdm:quotes": {
    "xdm:location": "95110"
  }
}
```

# Quote Request Details Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [xdm:quotes](#xdmquotes) | `object` | Optional | Quote Request Details (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## xdm:quotes

Quotes information including discount, premium, and request ID.

`xdm:quotes`
* is optional
* type: `object`
* defined in this schema

### xdm:quotes Type


`object` with following properties:


| Property | Type | Required |
|----------|------|----------|
| `xdm:discount`|  | Optional |
| `xdm:location`| string | Optional |
| `xdm:premium`|  | Optional |
| `xdm:requestID`| string | Optional |
| `xdm:selectedRetailer`| string | Optional |
| `xdm:steps`|  | Optional |



#### xdm:discount
##### Discount

Records the discount amount for a quote displayed to a visitor.

`xdm:discount`
* is optional
* type: reference

##### xdm:discount Type


* []() – `https://ns.adobe.com/xdm/datatypes/currency`







#### xdm:location
##### Location

Captures the postal code used for finding retailers near the visitor's location.

`xdm:location`
* is optional
* type: `string`

##### xdm:location Type


`string`








#### xdm:premium
##### Premium

Records the premium amount for a quote displayed to a visitor.

`xdm:premium`
* is optional
* type: reference

##### xdm:premium Type


* []() – `https://ns.adobe.com/xdm/datatypes/currency`







#### xdm:requestID
##### Quote Request ID

Unique identifier for the quote request.

`xdm:requestID`
* is optional
* type: `string`

##### xdm:requestID Type


`string`








#### xdm:selectedRetailer
##### Selected Retailer

Captures the selected retailer for a quote request, if applicable. 

`xdm:selectedRetailer`
* is optional
* type: `string`

##### xdm:selectedRetailer Type


`string`








#### xdm:steps
##### Steps

Extension of toolUsage data type.

`xdm:steps`
* is optional
* type: reference

##### xdm:steps Type


* []() – `https://ns.adobe.com/xdm/datatypes/tool-usage`









