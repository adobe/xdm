
# Adobe Advertising Cloud ExperienceEvent Template Mixin Schema

```
https://ns.adobe.com/experience/adcloud-experienceevent
```

Adobe Advertising Cloud ExperienceEvent mixin for use with schemas for Solution data ingestion. Includes the core and standard ExperienceEvent as well as the required Adobe Advertising Cloud ExperienceEvent mixins.

| [Abstract](../../../abstract.md) | [Extensible](../../../extensions.md) | [Status](../../../status.md) | [Identifiable](../../../id.md) | [Custom Properties](../../../extensions.md) | [Additional Properties](../../../extensions.md) | Defined In |
|----------------------------------|--------------------------------------|------------------------------|--------------------------------|---------------------------------------------|-------------------------------------------------|------------|
| Can be instantiated | Yes | Stable | No | Forbidden | Permitted | [adobe/experience/adcloud-experienceevent.schema.json](adobe/experience/adcloud-experienceevent.schema.json) |
## Schema Hierarchy

* Adobe Advertising Cloud ExperienceEvent Template Mixin `https://ns.adobe.com/experience/adcloud-experienceevent`
  * [Extensibility base schema](../../datatypes/extensible.schema.md) `https://ns.adobe.com/xdm/common/extensible`
  * [Advertising Details](../../mixins/experience-event/experienceevent-advertising.schema.md) `https://ns.adobe.com/xdm/context/experienceevent-advertising`
  * [Application Details](../../mixins/experience-event/experienceevent-application.schema.md) `https://ns.adobe.com/xdm/context/experienceevent-application`
  * [Channel Details](../../mixins/experience-event/experienceevent-channel.schema.md) `https://ns.adobe.com/xdm/context/experienceevent-channel`
  * [Commerce Details](../../mixins/experience-event/experienceevent-commerce.schema.md) `https://ns.adobe.com/xdm/context/experienceevent-commerce`
  * [Direct Marketing Details](../../mixins/experience-event/experienceevent-directmarketing.schema.md) `https://ns.adobe.com/xdm/context/experienceevent-directmarketing`
  * [Environment Details](../../mixins/experience-event/experienceevent-environment-details.schema.md) `https://ns.adobe.com/xdm/context/experienceevent-environment-details`
  * [Campaign Marketing Details](../../mixins/experience-event/experienceevent-marketing.schema.md) `https://ns.adobe.com/xdm/context/experienceevent-marketing`
  * [Media Interaction Details ](../../mixins/experience-event/experienceevent-media.schema.md) `https://ns.adobe.com/xdm/context/experienceevent-media`
  * [Profile Stitch Details](../../mixins/experience-event/experienceevent-profile-stitch.schema.md) `https://ns.adobe.com/xdm/context/experienceevent-profile-stitch`
  * [Search Details](../../mixins/experience-event/experienceevent-search.schema.md) `https://ns.adobe.com/xdm/context/experienceevent-search`
  * [Segment Membership Details](../../mixins/experience-event/experienceevent-segmentmembership.schema.md) `https://ns.adobe.com/xdm/context/experienceevent-segmentmembership`
  * [Technical Details](../../mixins/experience-event/experienceevent-technical-details.schema.md) `https://ns.adobe.com/xdm/context/experienceevent-technical-details`
  * [Web Details](../../mixins/experience-event/experienceevent-web.schema.md) `https://ns.adobe.com/xdm/context/experienceevent-web`
  * [Adobe Advertising Cloud ExperienceEvent Full Extension](adcloud/experienceevent-all.schema.md) `https://ns.adobe.com/experience/adcloud/experienceevent-all`
  * [Adobe Advertising Cloud Creative Management Platform Event Extension](adcloud/creative-event.schema.md) `https://ns.adobe.com/experience/adcloud/creative-event`
  * [Adobe Target ExperienceEvent Shared Extension](target/experienceevent-shared.schema.md) `https://ns.adobe.com/experience/target/experienceevent-shared`
  * [Adobe Unified Profile Service ExperienceEvent Shared Extension](profile/experienceevent-shared.schema.md) `https://ns.adobe.com/experience/profile/experienceevent-shared`
  * [Adobe Experience Platform Implementation Details Mixin](implementations-ext.schema.md) `https://ns.adobe.com/experience/implementations-ext`
  * [End User ID Details](../../mixins/experience-event/experienceevent-enduserids.schema.md) `https://ns.adobe.com/xdm/context/experienceevent-enduserids`


## Adobe Advertising Cloud ExperienceEvent Template Mixin Example
```json
{
  "@id": "https://data.adobe.io/experienceid-123456",
  "xdm:dataSource": {
    "@id": "https://data.adobe.io/datasources/datasource-123",
    "xdm:code": "DataSourceIntegrationCode-123"
  },
  "xdm:timestamp": "2017-09-26T15:52:25+00:00",
  "xdm:identityMap": {
    "ECID": [
      {
        "id": "68519882713298129995549973016107434638",
        "primary": true
      }
    ]
  }
}
```

# Adobe Advertising Cloud ExperienceEvent Template Mixin Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [https://ns.adobe.com/experience/adcloud/adDeliveryDetails](#httpsnsadobecomexperienceadcloudaddeliverydetails) | Adobe Advertising Cloud Ad Delivery Details | Optional | [Adobe Advertising Cloud ExperienceEvent Full Extension](adcloud/experienceevent-all.schema.md#httpsnsadobecomexperienceadcloudaddeliverydetails) |
| [https://ns.adobe.com/experience/adcloud/advertisement](#httpsnsadobecomexperienceadcloudadvertisement) | Adobe Advertising Cloud Ad Details | Optional | [Adobe Advertising Cloud ExperienceEvent Full Extension](adcloud/experienceevent-all.schema.md#httpsnsadobecomexperienceadcloudadvertisement) |
| [https://ns.adobe.com/experience/adcloud/campaign](#httpsnsadobecomexperienceadcloudcampaign) | Ad Campaign Detail | Optional | [Adobe Advertising Cloud ExperienceEvent Full Extension](adcloud/experienceevent-all.schema.md#httpsnsadobecomexperienceadcloudcampaign) |
| [https://ns.adobe.com/experience/adcloud/conversionDetails](#httpsnsadobecomexperienceadcloudconversiondetails) | Conversion Details | Optional | [Adobe Advertising Cloud ExperienceEvent Full Extension](adcloud/experienceevent-all.schema.md#httpsnsadobecomexperienceadcloudconversiondetails) |
| [https://ns.adobe.com/experience/adcloud/creative](#httpsnsadobecomexperienceadcloudcreative) | Advertising Creative Management Platform Details | Optional | [Adobe Advertising Cloud Creative Management Platform Event Extension](adcloud/creative-event.schema.md#httpsnsadobecomexperienceadcloudcreative) |
| [https://ns.adobe.com/experience/adcloud/eventType](#httpsnsadobecomexperienceadcloudeventtype) | `string` | Optional | [Adobe Advertising Cloud ExperienceEvent Full Extension](adcloud/experienceevent-all.schema.md#httpsnsadobecomexperienceadcloudeventtype) |
| [https://ns.adobe.com/experience/adcloud/fees](#httpsnsadobecomexperienceadcloudfees) | Advertising Fee Details | Optional | [Adobe Advertising Cloud ExperienceEvent Full Extension](adcloud/experienceevent-all.schema.md#httpsnsadobecomexperienceadcloudfees) |
| [https://ns.adobe.com/experience/adcloud/inventory](#httpsnsadobecomexperienceadcloudinventory) | Adobe Advertising Cloud Inventory | Optional | [Adobe Advertising Cloud ExperienceEvent Full Extension](adcloud/experienceevent-all.schema.md#httpsnsadobecomexperienceadcloudinventory) |
| [https://ns.adobe.com/experience/adcloud/productDetails](#httpsnsadobecomexperienceadcloudproductdetails) | Adobe Advertising Cloud Product Details displayed in Search Advertisement. | Optional | [Adobe Advertising Cloud ExperienceEvent Full Extension](adcloud/experienceevent-all.schema.md#httpsnsadobecomexperienceadcloudproductdetails) |
| [https://ns.adobe.com/experience/adcloud/stitchId](#httpsnsadobecomexperienceadcloudstitchid) | `string` | Optional | [Adobe Advertising Cloud ExperienceEvent Full Extension](adcloud/experienceevent-all.schema.md#httpsnsadobecomexperienceadcloudstitchid) |
| [https://ns.adobe.com/experience/implementations](#httpsnsadobecomexperienceimplementations) | Adobe Experience Platform Implementation Details | Optional | [Adobe Experience Platform Implementation Details Mixin](implementations-ext.schema.md#httpsnsadobecomexperienceimplementations) |
| [https://ns.adobe.com/experience/profile/originDatasetID](#httpsnsadobecomexperienceprofileorigindatasetid) | `string` | Optional | [Adobe Unified Profile Service ExperienceEvent Shared Extension](profile/experienceevent-shared.schema.md#httpsnsadobecomexperienceprofileorigindatasetid) |
| [https://ns.adobe.com/experience/target/supplementalDataID](#httpsnsadobecomexperiencetargetsupplementaldataid) | `string` | Optional | [Adobe Target ExperienceEvent Shared Extension](target/experienceevent-shared.schema.md#httpsnsadobecomexperiencetargetsupplementaldataid) |
| [xdm:advertising](#xdmadvertising) | Advertising | Optional | [Advertising Details](../../mixins/experience-event/experienceevent-advertising.schema.md#xdmadvertising) |
| [xdm:application](#xdmapplication) | Application | Optional | [Application Details](../../mixins/experience-event/experienceevent-application.schema.md#xdmapplication) |
| [xdm:channel](#xdmchannel) | Experience Channel | Optional | [Channel Details](../../mixins/experience-event/experienceevent-channel.schema.md#xdmchannel) |
| [xdm:commerce](#xdmcommerce) | Commerce | Optional | [Commerce Details](../../mixins/experience-event/experienceevent-commerce.schema.md#xdmcommerce) |
| [xdm:dataSource](#xdmdatasource) | Data Source | Optional | [Technical Details](../../mixins/experience-event/experienceevent-technical-details.schema.md#xdmdatasource) |
| [xdm:device](#xdmdevice) | Device | Optional | [Environment Details](../../mixins/experience-event/experienceevent-environment-details.schema.md#xdmdevice) |
| [xdm:directMarketing](#xdmdirectmarketing) | Direct marketing | Optional | [Direct Marketing Details](../../mixins/experience-event/experienceevent-directmarketing.schema.md#xdmdirectmarketing) |
| [xdm:endUserIDs](#xdmenduserids) | End user IDs | Optional | [End User ID Details](../../mixins/experience-event/experienceevent-enduserids.schema.md#xdmenduserids) |
| [xdm:environment](#xdmenvironment) | Environment | Optional | [Environment Details](../../mixins/experience-event/experienceevent-environment-details.schema.md#xdmenvironment) |
| [xdm:eventMergeId](#xdmeventmergeid) | `string` | Optional | [Adobe Advertising Cloud Creative Management Platform Event Extension](adcloud/creative-event.schema.md#xdmeventmergeid) |
| [xdm:marketing](#xdmmarketing) | Marketing | Optional | [Campaign Marketing Details](../../mixins/experience-event/experienceevent-marketing.schema.md#xdmmarketing) |
| [xdm:media](#xdmmedia) | Media information | Optional | [Media Interaction Details ](../../mixins/experience-event/experienceevent-media.schema.md#xdmmedia) |
| [xdm:placeContext](#xdmplacecontext) | Place context | Optional | [Environment Details](../../mixins/experience-event/experienceevent-environment-details.schema.md#xdmplacecontext) |
| [xdm:productListItems](#xdmproductlistitems) | Product list item | Optional | [Commerce Details](../../mixins/experience-event/experienceevent-commerce.schema.md#xdmproductlistitems) |
| [xdm:profileStitch](#xdmprofilestitch) | Profile stitch | Optional | [Profile Stitch Details](../../mixins/experience-event/experienceevent-profile-stitch.schema.md#xdmprofilestitch) |
| [xdm:receivedTimestamp](#xdmreceivedtimestamp) | `string` | Optional | [Technical Details](../../mixins/experience-event/experienceevent-technical-details.schema.md#xdmreceivedtimestamp) |
| [xdm:search](#xdmsearch) | Search | Optional | [Search Details](../../mixins/experience-event/experienceevent-search.schema.md#xdmsearch) |
| [xdm:segmentMembership](#xdmsegmentmembership) | `object` | Optional | [Segment Membership Details](../../mixins/experience-event/experienceevent-segmentmembership.schema.md#xdmsegmentmembership) |
| [xdm:segmentMemberships](#xdmsegmentmemberships) | Segment membership item | Optional | [Segment Membership Details](../../mixins/experience-event/experienceevent-segmentmembership.schema.md#xdmsegmentmemberships) |
| [xdm:web](#xdmweb) | Web information | Optional | [Web Details](../../mixins/experience-event/experienceevent-web.schema.md#xdmweb) |
| `*` | any | Additional | this schema *allows* additional properties |

## https://ns.adobe.com/experience/adcloud/adDeliveryDetails
### Ad Delivery Details

Adobe AdCloud Search Ad Delivery Details.

`https://ns.adobe.com/experience/adcloud/adDeliveryDetails`
* is optional
* type: Adobe Advertising Cloud Ad Delivery Details
* defined in [Adobe Advertising Cloud ExperienceEvent Full Extension](adcloud/experienceevent-all.schema.md#httpsnsadobecomexperienceadcloudaddeliverydetails)

### https://ns.adobe.com/experience/adcloud/adDeliveryDetails Type


* [Adobe Advertising Cloud Ad Delivery Details](adcloud/addeliverydetails.schema.md) – `https://ns.adobe.com/experience/adcloud/addeliverydetails`





## https://ns.adobe.com/experience/adcloud/advertisement
### Ad Asset Details

Digital advertisement details.

`https://ns.adobe.com/experience/adcloud/advertisement`
* is optional
* type: Adobe Advertising Cloud Ad Details
* defined in [Adobe Advertising Cloud ExperienceEvent Full Extension](adcloud/experienceevent-all.schema.md#httpsnsadobecomexperienceadcloudadvertisement)

### https://ns.adobe.com/experience/adcloud/advertisement Type


* [Adobe Advertising Cloud Ad Details](adcloud/advertisement.schema.md) – `https://ns.adobe.com/experience/adcloud/advertisement`





## https://ns.adobe.com/experience/adcloud/campaign
### Ad Campaign Details

Adobe Advertising Cloud ad campaign hierarchy details.

`https://ns.adobe.com/experience/adcloud/campaign`
* is optional
* type: Ad Campaign Detail
* defined in [Adobe Advertising Cloud ExperienceEvent Full Extension](adcloud/experienceevent-all.schema.md#httpsnsadobecomexperienceadcloudcampaign)

### https://ns.adobe.com/experience/adcloud/campaign Type


* [Ad Campaign Detail](adcloud/campaign.schema.md) – `https://ns.adobe.com/experience/adcloud/campaign`





## https://ns.adobe.com/experience/adcloud/conversionDetails
### Ad Conversion Details

Search Ad Conversion Details.

`https://ns.adobe.com/experience/adcloud/conversionDetails`
* is optional
* type: Conversion Details
* defined in [Adobe Advertising Cloud ExperienceEvent Full Extension](adcloud/experienceevent-all.schema.md#httpsnsadobecomexperienceadcloudconversiondetails)

### https://ns.adobe.com/experience/adcloud/conversionDetails Type


* [Conversion Details](adcloud/conversiondetails.schema.md) – `https://ns.adobe.com/experience/adcloud/conversiondetails`





## https://ns.adobe.com/experience/adcloud/creative
### Advertising Creative Management Platform Details

Advertising Creative Management Platform Details.

`https://ns.adobe.com/experience/adcloud/creative`
* is optional
* type: Advertising Creative Management Platform Details
* defined in [Adobe Advertising Cloud Creative Management Platform Event Extension](adcloud/creative-event.schema.md#httpsnsadobecomexperienceadcloudcreative)

### https://ns.adobe.com/experience/adcloud/creative Type


* [Advertising Creative Management Platform Details](adcloud/creative.schema.md) – `https://ns.adobe.com/experience/adcloud/creative`





## https://ns.adobe.com/experience/adcloud/eventType
### Event Type

Adobe Advertising Cloud event type.

`https://ns.adobe.com/experience/adcloud/eventType`
* is optional
* type: `string`
* defined in [Adobe Advertising Cloud ExperienceEvent Full Extension](adcloud/experienceevent-all.schema.md#httpsnsadobecomexperienceadcloudeventtype)

### https://ns.adobe.com/experience/adcloud/eventType Type


`string`






## https://ns.adobe.com/experience/adcloud/fees
### Advertising Fees

Advertising Fees Details.

`https://ns.adobe.com/experience/adcloud/fees`
* is optional
* type: Advertising Fee Details
* defined in [Adobe Advertising Cloud ExperienceEvent Full Extension](adcloud/experienceevent-all.schema.md#httpsnsadobecomexperienceadcloudfees)

### https://ns.adobe.com/experience/adcloud/fees Type


* [Advertising Fee Details](adcloud/fees.schema.md) – `https://ns.adobe.com/experience/adcloud/fees`





## https://ns.adobe.com/experience/adcloud/inventory
### Ad Inventory Details

Adobe Advertising Cloud inventory details.

`https://ns.adobe.com/experience/adcloud/inventory`
* is optional
* type: Adobe Advertising Cloud Inventory
* defined in [Adobe Advertising Cloud ExperienceEvent Full Extension](adcloud/experienceevent-all.schema.md#httpsnsadobecomexperienceadcloudinventory)

### https://ns.adobe.com/experience/adcloud/inventory Type


* [Adobe Advertising Cloud Inventory](adcloud/inventory.schema.md) – `https://ns.adobe.com/experience/adcloud/inventory`





## https://ns.adobe.com/experience/adcloud/productDetails
### Ad Product Details

Adobe AdCloud Search Ad Product Details.

`https://ns.adobe.com/experience/adcloud/productDetails`
* is optional
* type: Adobe Advertising Cloud Product Details displayed in Search Advertisement.
* defined in [Adobe Advertising Cloud ExperienceEvent Full Extension](adcloud/experienceevent-all.schema.md#httpsnsadobecomexperienceadcloudproductdetails)

### https://ns.adobe.com/experience/adcloud/productDetails Type


* [Adobe Advertising Cloud Product Details displayed in Search Advertisement.](adcloud/productdetails.schema.md) – `https://ns.adobe.com/experience/adcloud/productdetails`





## https://ns.adobe.com/experience/adcloud/stitchId
### Stitch ID Chosen

ID from the ad servers through Adobe Advertising Cloud STATS to track click-through conversion on browsers that block third party cookies.

`https://ns.adobe.com/experience/adcloud/stitchId`
* is optional
* type: `string`
* defined in [Adobe Advertising Cloud ExperienceEvent Full Extension](adcloud/experienceevent-all.schema.md#httpsnsadobecomexperienceadcloudstitchid)

### https://ns.adobe.com/experience/adcloud/stitchId Type


`string`






## https://ns.adobe.com/experience/implementations


`https://ns.adobe.com/experience/implementations`
* is optional
* type: Adobe Experience Platform Implementation Details
* defined in [Adobe Experience Platform Implementation Details Mixin](implementations-ext.schema.md#httpsnsadobecomexperienceimplementations)

### https://ns.adobe.com/experience/implementations Type


* [Adobe Experience Platform Implementation Details](implementations.schema.md) – `https://ns.adobe.com/experience/implementations`





## https://ns.adobe.com/experience/profile/originDatasetID
### Origin Dataset ID

Identity of the dataset that the Unified Profile Service ingested the data from. Usage is reserved for the Unified Profile Service.

`https://ns.adobe.com/experience/profile/originDatasetID`
* is optional
* type: `string`
* defined in [Adobe Unified Profile Service ExperienceEvent Shared Extension](profile/experienceevent-shared.schema.md#httpsnsadobecomexperienceprofileorigindatasetid)

### https://ns.adobe.com/experience/profile/originDatasetID Type


`string`






## https://ns.adobe.com/experience/target/supplementalDataID
### Supplemental Data Identifier

Identifier used to stitch Target events with Analytics events

`https://ns.adobe.com/experience/target/supplementalDataID`
* is optional
* type: `string`
* defined in [Adobe Target ExperienceEvent Shared Extension](target/experienceevent-shared.schema.md#httpsnsadobecomexperiencetargetsupplementaldataid)

### https://ns.adobe.com/experience/target/supplementalDataID Type


`string`






## xdm:advertising
### Advertising

Information related to advertising activity in ExperienceEvents.

`xdm:advertising`
* is optional
* type: Advertising
* defined in [Advertising Details](../../mixins/experience-event/experienceevent-advertising.schema.md#xdmadvertising)

### xdm:advertising Type


* [Advertising](../../datatypes/marketing/advertising.schema.md) – `https://ns.adobe.com/xdm/context/advertising`





## xdm:application
### Application

This mixin is used to capture application information related to an ExperienceEvent, including the name of the application, app version, installs, launches, crashes, and closures. It could be either the application targeted by the event like the send of a push notification or the application originating the event such as a click, or a login.

`xdm:application`
* is optional
* type: Application
* defined in [Application Details](../../mixins/experience-event/experienceevent-application.schema.md#xdmapplication)

### xdm:application Type


* [Application](../../datatypes/application.schema.md) – `https://ns.adobe.com/xdm/context/application`





## xdm:channel
### Experience channel

Experience channel related to the ExperienceEvent.

`xdm:channel`
* is optional
* type: Experience Channel
* defined in [Channel Details](../../mixins/experience-event/experienceevent-channel.schema.md#xdmchannel)

### xdm:channel Type


* [Experience Channel](../../datatypes/channels/channel.schema.md) – `https://ns.adobe.com/xdm/channels/channel`





## xdm:commerce
### Commerce

Commerce specific data related to this event.

`xdm:commerce`
* is optional
* type: Commerce
* defined in [Commerce Details](../../mixins/experience-event/experienceevent-commerce.schema.md#xdmcommerce)

### xdm:commerce Type


* [Commerce](../../datatypes/marketing/commerce.schema.md) – `https://ns.adobe.com/xdm/context/commerce`





## xdm:dataSource
### Data source

Globally unique identification of a data source.

`xdm:dataSource`
* is optional
* type: Data Source
* defined in [Technical Details](../../mixins/experience-event/experienceevent-technical-details.schema.md#xdmdatasource)

### xdm:dataSource Type


* [Data Source](../../datatypes/data/datasource.schema.md) – `https://ns.adobe.com/xdm/data/datasource`





## xdm:device
### Device

An identified device, application or device browser instance that is trackable across sessions, normally by cookies.

`xdm:device`
* is optional
* type: Device
* defined in [Environment Details](../../mixins/experience-event/experienceevent-environment-details.schema.md#xdmdevice)

### xdm:device Type


* [Device](../../datatypes/device.schema.md) – `https://ns.adobe.com/xdm/context/device`





## xdm:directMarketing
### Direct marketing

Events and properties related to direct and outbound marketing such as email, direct mail, texts, and in-app notifications.

`xdm:directMarketing`
* is optional
* type: Direct marketing
* defined in [Direct Marketing Details](../../mixins/experience-event/experienceevent-directmarketing.schema.md#xdmdirectmarketing)

### xdm:directMarketing Type


* [Direct marketing](../../datatypes/marketing/direct-marketing.schema.md) – `https://ns.adobe.com/xdm/context/direct-marketing`





## xdm:endUserIDs
### EndUserIDs

Condensed, normalized encapsulation of end user identifiers asserted for this ExperienceEvent.

`xdm:endUserIDs`
* is optional
* type: End user IDs
* defined in [End User ID Details](../../mixins/experience-event/experienceevent-enduserids.schema.md#xdmenduserids)

### xdm:endUserIDs Type


* [End user IDs](../../datatypes/enduserids.schema.md) – `https://ns.adobe.com/xdm/context/enduserids`





## xdm:environment
### Environment

Information about the surrounding situation the event observation occurred in, specifically detailing transitory information such as the network or software versions.

`xdm:environment`
* is optional
* type: Environment
* defined in [Environment Details](../../mixins/experience-event/experienceevent-environment-details.schema.md#xdmenvironment)

### xdm:environment Type


* [Environment](../../datatypes/environment.schema.md) – `https://ns.adobe.com/xdm/context/environment`





## xdm:eventMergeId
### ExperienceEvent merge ID

An ID to correlate or merge multiple Experience events together that are essentially the same event or should be merged. This is intended to be populated by the data producer prior to ingestion.

`xdm:eventMergeId`
* is optional
* type: `string`
* defined in [Adobe Advertising Cloud Creative Management Platform Event Extension](adcloud/creative-event.schema.md#xdmeventmergeid)

### xdm:eventMergeId Type


`string`






## xdm:marketing
### Marketing

The information related to marketing activities that are active with the touchpoint.

`xdm:marketing`
* is optional
* type: Marketing
* defined in [Campaign Marketing Details](../../mixins/experience-event/experienceevent-marketing.schema.md#xdmmarketing)

### xdm:marketing Type


* [Marketing](../../datatypes/marketing/marketing.schema.md) – `https://ns.adobe.com/xdm/context/marketing`





## xdm:media
### Media

Media activity information related to the experience event.

`xdm:media`
* is optional
* type: Media information
* defined in [Media Interaction Details ](../../mixins/experience-event/experienceevent-media.schema.md#xdmmedia)

### xdm:media Type


* [Media information](../../datatypes/media/media.schema.md) – `https://ns.adobe.com/xdm/context/media`





## xdm:placeContext
### Place context

The transient circumstances related to the observation. Examples include locale specific information such as weather, local time, traffic, day of the week, workday vs. holiday, and working hours.

`xdm:placeContext`
* is optional
* type: Place context
* defined in [Environment Details](../../mixins/experience-event/experienceevent-environment-details.schema.md#xdmplacecontext)

### xdm:placeContext Type


* [Place context](../../datatypes/placecontext.schema.md) – `https://ns.adobe.com/xdm/context/placecontext`





## xdm:productListItems
### Product list items

A list of items representing a product selected by a customer with specific options and pricing that are for that usage context at a specific point of time and may differ from the product record.

`xdm:productListItems`
* is optional
* type: Product list item

* defined in [Commerce Details](../../mixins/experience-event/experienceevent-commerce.schema.md#xdmproductlistitems)

### xdm:productListItems Type


Array type: Product list item

All items must be of the type:
* [Product list item](../../datatypes/productlistitem.schema.md) – `https://ns.adobe.com/xdm/content/productlistitem`








## xdm:profileStitch
### Profile stitch

Details about the IDs that were joined by profile stitching.

`xdm:profileStitch`
* is optional
* type: Profile stitch

* defined in [Profile Stitch Details](../../mixins/experience-event/experienceevent-profile-stitch.schema.md#xdmprofilestitch)

### xdm:profileStitch Type


Array type: Profile stitch

All items must be of the type:
* [Profile stitch](../../datatypes/profilestitch.schema.md) – `https://ns.adobe.com/xdm/context/profileStitch`








## xdm:receivedTimestamp
### Received time stamp

The time at which this interaction was received by a server.

`xdm:receivedTimestamp`
* is optional
* type: `string`
* defined in [Technical Details](../../mixins/experience-event/experienceevent-technical-details.schema.md#xdmreceivedtimestamp)

### xdm:receivedTimestamp Type


`string`
* format: `date-time` – date and time (according to [RFC 3339, section 5.6](http://tools.ietf.org/html/rfc3339))






## xdm:search
### Search

The information related to web or mobile search.

`xdm:search`
* is optional
* type: Search
* defined in [Search Details](../../mixins/experience-event/experienceevent-search.schema.md#xdmsearch)

### xdm:search Type


* [Search](../../datatypes/search.schema.md) – `https://ns.adobe.com/xdm/context/search`





## xdm:segmentMembership
### Segment Membership Map

`xdm:segmentMembership`
* is optional
* type: `object`
* defined in [Segment Membership Details](../../mixins/experience-event/experienceevent-segmentmembership.schema.md#xdmsegmentmembership)

### xdm:segmentMembership Type


`object` with following properties:


| Property | Type | Required |
|----------|------|----------|






## xdm:segmentMemberships
### Segment Memberships

The segments associated with this ExperienceEvent. Deprecated, use `xdm:segmentMembership` instead.

`xdm:segmentMemberships`
* is optional
* type: Segment membership item

* defined in [Segment Membership Details](../../mixins/experience-event/experienceevent-segmentmembership.schema.md#xdmsegmentmemberships)

### xdm:segmentMemberships Type


Array type: Segment membership item

All items must be of the type:
* [Segment membership item](../../datatypes/segmentmembershipitem.schema.md) – `https://ns.adobe.com/xdm/context/segmentmembershipitem`








## xdm:web
### Web

The information related to web page and link of the ExperienceEvent.

`xdm:web`
* is optional
* type: Web information
* defined in [Web Details](../../mixins/experience-event/experienceevent-web.schema.md#xdmweb)

### xdm:web Type


* [Web information](../../datatypes/web/webinfo.schema.md) – `https://ns.adobe.com/xdm/context/webinfo`




