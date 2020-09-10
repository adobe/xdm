
# Adobe Advertising Cloud ExperienceEvent Full Extension Schema

```
https://ns.adobe.com/experience/adcloud/experienceevent-all
```

Adobe Advertising Cloud ExperienceEvent full extension. Contains all Solution added fields.

| [Abstract](../../../../abstract.md) | [Extensible](../../../../extensions.md) | [Status](../../../../status.md) | [Identifiable](../../../../id.md) | [Custom Properties](../../../../extensions.md) | [Additional Properties](../../../../extensions.md) | Defined In |
|-------------------------------------|-----------------------------------------|---------------------------------|-----------------------------------|------------------------------------------------|----------------------------------------------------|------------|
| Can be instantiated | Yes | Stable | No | Forbidden | Permitted | [adobe/experience/adcloud/experienceevent-all.schema.json](adobe/experience/adcloud/experienceevent-all.schema.json) |
## Schema Hierarchy

* Adobe Advertising Cloud ExperienceEvent Full Extension `https://ns.adobe.com/experience/adcloud/experienceevent-all`
  * [XDM ExperienceEvent](../../../classes/experienceevent.schema.md) `https://ns.adobe.com/xdm/context/experienceevent`
  * [Ad Campaign Detail](campaign.schema.md) `https://ns.adobe.com/experience/adcloud/campaign`
  * [Adobe Advertising Cloud Inventory](inventory.schema.md) `https://ns.adobe.com/experience/adcloud/inventory`
  * [Adobe Advertising Cloud Ad Details](advertisement.schema.md) `https://ns.adobe.com/experience/adcloud/advertisement`
  * [Adobe Advertising Cloud Ad Delivery Details](addeliverydetails.schema.md) `https://ns.adobe.com/experience/adcloud/addeliverydetails`
  * [Adobe Advertising Cloud Product Details displayed in Search Advertisement.](productdetails.schema.md) `https://ns.adobe.com/experience/adcloud/productdetails`
  * [Conversion Details](conversiondetails.schema.md) `https://ns.adobe.com/experience/adcloud/conversiondetails`
  * [Advertising Fee Details](fees.schema.md) `https://ns.adobe.com/experience/adcloud/fees`


# Adobe Advertising Cloud ExperienceEvent Full Extension Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [https://ns.adobe.com/experience/adcloud/adDeliveryDetails](#httpsnsadobecomexperienceadcloudaddeliverydetails) | Adobe Advertising Cloud Ad Delivery Details | Optional | Adobe Advertising Cloud ExperienceEvent Full Extension (this schema) |
| [https://ns.adobe.com/experience/adcloud/advertisement](#httpsnsadobecomexperienceadcloudadvertisement) | Adobe Advertising Cloud Ad Details | Optional | Adobe Advertising Cloud ExperienceEvent Full Extension (this schema) |
| [https://ns.adobe.com/experience/adcloud/campaign](#httpsnsadobecomexperienceadcloudcampaign) | Ad Campaign Detail | Optional | Adobe Advertising Cloud ExperienceEvent Full Extension (this schema) |
| [https://ns.adobe.com/experience/adcloud/conversionDetails](#httpsnsadobecomexperienceadcloudconversiondetails) | Conversion Details | Optional | Adobe Advertising Cloud ExperienceEvent Full Extension (this schema) |
| [https://ns.adobe.com/experience/adcloud/eventType](#httpsnsadobecomexperienceadcloudeventtype) | `string` | Optional | Adobe Advertising Cloud ExperienceEvent Full Extension (this schema) |
| [https://ns.adobe.com/experience/adcloud/fees](#httpsnsadobecomexperienceadcloudfees) | Advertising Fee Details | Optional | Adobe Advertising Cloud ExperienceEvent Full Extension (this schema) |
| [https://ns.adobe.com/experience/adcloud/inventory](#httpsnsadobecomexperienceadcloudinventory) | Adobe Advertising Cloud Inventory | Optional | Adobe Advertising Cloud ExperienceEvent Full Extension (this schema) |
| [https://ns.adobe.com/experience/adcloud/productDetails](#httpsnsadobecomexperienceadcloudproductdetails) | Adobe Advertising Cloud Product Details displayed in Search Advertisement. | Optional | Adobe Advertising Cloud ExperienceEvent Full Extension (this schema) |
| [https://ns.adobe.com/experience/adcloud/stitchId](#httpsnsadobecomexperienceadcloudstitchid) | `string` | Optional | Adobe Advertising Cloud ExperienceEvent Full Extension (this schema) |
| [xdm:eventMergeId](#xdmeventmergeid) | `string` | Optional | [XDM ExperienceEvent](../../../classes/experienceevent.schema.md#xdmeventmergeid) |
| `*` | any | Additional | this schema *allows* additional properties |

## https://ns.adobe.com/experience/adcloud/adDeliveryDetails
### Ad Delivery Details

Adobe AdCloud Search Ad Delivery Details.

`https://ns.adobe.com/experience/adcloud/adDeliveryDetails`
* is optional
* type: Adobe Advertising Cloud Ad Delivery Details
* defined in this schema

### https://ns.adobe.com/experience/adcloud/adDeliveryDetails Type


* [Adobe Advertising Cloud Ad Delivery Details](addeliverydetails.schema.md) – `https://ns.adobe.com/experience/adcloud/addeliverydetails`





## https://ns.adobe.com/experience/adcloud/advertisement
### Ad Asset Details

Digital advertisement details.

`https://ns.adobe.com/experience/adcloud/advertisement`
* is optional
* type: Adobe Advertising Cloud Ad Details
* defined in this schema

### https://ns.adobe.com/experience/adcloud/advertisement Type


* [Adobe Advertising Cloud Ad Details](advertisement.schema.md) – `https://ns.adobe.com/experience/adcloud/advertisement`





## https://ns.adobe.com/experience/adcloud/campaign
### Ad Campaign Details

Adobe Advertising Cloud ad campaign hierarchy details.

`https://ns.adobe.com/experience/adcloud/campaign`
* is optional
* type: Ad Campaign Detail
* defined in this schema

### https://ns.adobe.com/experience/adcloud/campaign Type


* [Ad Campaign Detail](campaign.schema.md) – `https://ns.adobe.com/experience/adcloud/campaign`





## https://ns.adobe.com/experience/adcloud/conversionDetails
### Ad Conversion Details

Search Ad Conversion Details.

`https://ns.adobe.com/experience/adcloud/conversionDetails`
* is optional
* type: Conversion Details
* defined in this schema

### https://ns.adobe.com/experience/adcloud/conversionDetails Type


* [Conversion Details](conversiondetails.schema.md) – `https://ns.adobe.com/experience/adcloud/conversiondetails`





## https://ns.adobe.com/experience/adcloud/eventType
### Event Type

Adobe Advertising Cloud event type.

`https://ns.adobe.com/experience/adcloud/eventType`
* is optional
* type: `string`
* defined in this schema

### https://ns.adobe.com/experience/adcloud/eventType Type


`string`






## https://ns.adobe.com/experience/adcloud/fees
### Advertising Fees

Advertising Fees Details.

`https://ns.adobe.com/experience/adcloud/fees`
* is optional
* type: Advertising Fee Details
* defined in this schema

### https://ns.adobe.com/experience/adcloud/fees Type


* [Advertising Fee Details](fees.schema.md) – `https://ns.adobe.com/experience/adcloud/fees`





## https://ns.adobe.com/experience/adcloud/inventory
### Ad Inventory Details

Adobe Advertising Cloud inventory details.

`https://ns.adobe.com/experience/adcloud/inventory`
* is optional
* type: Adobe Advertising Cloud Inventory
* defined in this schema

### https://ns.adobe.com/experience/adcloud/inventory Type


* [Adobe Advertising Cloud Inventory](inventory.schema.md) – `https://ns.adobe.com/experience/adcloud/inventory`





## https://ns.adobe.com/experience/adcloud/productDetails
### Ad Product Details

Adobe AdCloud Search Ad Product Details.

`https://ns.adobe.com/experience/adcloud/productDetails`
* is optional
* type: Adobe Advertising Cloud Product Details displayed in Search Advertisement.
* defined in this schema

### https://ns.adobe.com/experience/adcloud/productDetails Type


* [Adobe Advertising Cloud Product Details displayed in Search Advertisement.](productdetails.schema.md) – `https://ns.adobe.com/experience/adcloud/productdetails`





## https://ns.adobe.com/experience/adcloud/stitchId
### Stitch ID Chosen

ID from the ad servers through Adobe Advertising Cloud STATS to track click-through conversion on browsers that block third party cookies.

`https://ns.adobe.com/experience/adcloud/stitchId`
* is optional
* type: `string`
* defined in this schema

### https://ns.adobe.com/experience/adcloud/stitchId Type


`string`






## xdm:eventMergeId
### ExperienceEvent merge ID

An ID to correlate or merge multiple Experience events together that are essentially the same event or should be merged. This is intended to be populated by the data producer prior to ingestion.

`xdm:eventMergeId`
* is optional
* type: `string`
* defined in [XDM ExperienceEvent](../../../classes/experienceevent.schema.md#xdmeventmergeid)

### xdm:eventMergeId Type


`string`





