
# Adobe Experience Edge Autofilled Environment Details Schema

```
https://ns.adobe.com/experience/edge-autofilled-environment-details
```

Information automatically collected by the AEP Edge Orchestration Service to enrich each received XDM Experience event.

| [Abstract](../../../abstract.md) | [Extensible](../../../extensions.md) | [Status](../../../status.md) | [Identifiable](../../../id.md) | [Custom Properties](../../../extensions.md) | [Additional Properties](../../../extensions.md) | Defined In |
|----------------------------------|--------------------------------------|------------------------------|--------------------------------|---------------------------------------------|-------------------------------------------------|------------|
| Can be instantiated | Yes | Experimental | No | Forbidden | Permitted | [adobe/experience/edge-autofilled-environment-details.schema.json](adobe/experience/edge-autofilled-environment-details.schema.json) |
## Schema Hierarchy

* Adobe Experience Edge Autofilled Environment Details `https://ns.adobe.com/experience/edge-autofilled-environment-details`
  * [Environment](../../datatypes/environment.schema.md) `https://ns.adobe.com/xdm/context/environment`


## Adobe Experience Edge Autofilled Environment Details Example
```json
{
  "xdm:placeContext": {
    "xdm:geo": {
      "@id": "https://data.adobe.io/entities/geo/tokyo",
      "xdm:countryCode": "JP",
      "xdm:stateProvince": "JP-13",
      "xdm:city": "Tokyo",
      "xdm:postalCode": "141-0032",
      "schema:latitude": 35.6185,
      "schema:longitude": 139.73237
    }
  },
  "xdm:environment": {
    "xdm:ipV4": "0.0.0.0",
    "xdm:ipV6": "2001:db8:0:0:0:ff00:42:8329",
    "xdm:browserDetails": {
      "xdm:userAgent": "Mozilla/5.0 (iPhone; CPU OS 12_4 like Mac OS X; en_US)"
    }
  }
}
```

# Adobe Experience Edge Autofilled Environment Details Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [xdm:environment](#xdmenvironment) | `object` | Optional | Adobe Experience Edge Autofilled Environment Details (this schema) |
| [xdm:placeContext](#xdmplacecontext) | `object` | Optional | Adobe Experience Edge Autofilled Environment Details (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## xdm:environment


`xdm:environment`
* is optional
* type: `object`
* defined in this schema

### xdm:environment Type


`object` with following properties:


| Property | Type | Required |
|----------|------|----------|
| `xdm:browserDetails`|  | Optional |



#### xdm:browserDetails
##### Browser Details

undefined

`xdm:browserDetails`
* is optional
* type: reference

##### xdm:browserDetails Type


* []() – `https://ns.adobe.com/xdm/context/browserdetails#/definitions/user-agent`










## xdm:placeContext


`xdm:placeContext`
* is optional
* type: `object`
* defined in this schema

### xdm:placeContext Type


`object` with following properties:


| Property | Type | Required |
|----------|------|----------|
| `xdm:geo`|  | Optional |



#### xdm:geo
##### Geo

The geographic location where the experience was delivered based on the IP address from the client request.

`xdm:geo`
* is optional
* type: reference

##### xdm:geo Type


* []() – `https://ns.adobe.com/xdm/common/geo`









