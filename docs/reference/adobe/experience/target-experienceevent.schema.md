
# Adobe Target ExperienceEvent Template Mixin Schema

```
https://ns.adobe.com/experience/target-experienceevent
```

Target ExperienceEvent mixin for use with schemas for Solution data ingestion. Includes the core/standard ExperienceEvent as well as the required Adobe Target ExperienceEvent mixins.

| [Abstract](../../../abstract.md) | [Extensible](../../../extensions.md) | [Status](../../../status.md) | [Identifiable](../../../id.md) | [Custom Properties](../../../extensions.md) | [Additional Properties](../../../extensions.md) | Defined In |
|----------------------------------|--------------------------------------|------------------------------|--------------------------------|---------------------------------------------|-------------------------------------------------|------------|
| Can be instantiated | Yes | Stable | No | Forbidden | Permitted | [adobe/experience/target-experienceevent.schema.json](adobe/experience/target-experienceevent.schema.json) |
## Schema Hierarchy

* Adobe Target ExperienceEvent Template Mixin `https://ns.adobe.com/experience/target-experienceevent`
  * [Extensibility base schema](../../datatypes/extensible.schema.md) `https://ns.adobe.com/xdm/common/extensible`
  * [Advertising Details](../../fieldgroups/experience-event/experienceevent-advertising.schema.md) `https://ns.adobe.com/xdm/context/experienceevent-advertising`
  * [Application Details](../../fieldgroups/experience-event/experienceevent-application.schema.md) `https://ns.adobe.com/xdm/context/experienceevent-application`
  * [Channel Details](../../fieldgroups/experience-event/experienceevent-channel.schema.md) `https://ns.adobe.com/xdm/context/experienceevent-channel`
  * [Commerce Details](../../fieldgroups/experience-event/experienceevent-commerce.schema.md) `https://ns.adobe.com/xdm/context/experienceevent-commerce`
  * [Direct Marketing Details](../../fieldgroups/experience-event/experienceevent-directmarketing.schema.md) `https://ns.adobe.com/xdm/context/experienceevent-directmarketing`
  * [Environment Details](../../fieldgroups/experience-event/experienceevent-environment-details.schema.md) `https://ns.adobe.com/xdm/context/experienceevent-environment-details`
  * [Campaign Marketing Details](../../fieldgroups/experience-event/experienceevent-marketing.schema.md) `https://ns.adobe.com/xdm/context/experienceevent-marketing`
  * [Media Interaction Details ](../../fieldgroups/experience-event/experienceevent-media.schema.md) `https://ns.adobe.com/xdm/context/experienceevent-media`
  * [Profile Stitch Details](../../fieldgroups/experience-event/experienceevent-profile-stitch.schema.md) `https://ns.adobe.com/xdm/context/experienceevent-profile-stitch`
  * [Search Details](../../fieldgroups/experience-event/experienceevent-search.schema.md) `https://ns.adobe.com/xdm/context/experienceevent-search`
  * [Segment Membership Details](../../fieldgroups/experience-event/experienceevent-segmentmembership.schema.md) `https://ns.adobe.com/xdm/context/experienceevent-segmentmembership`
  * [Technical Details](../../fieldgroups/experience-event/experienceevent-technical-details.schema.md) `https://ns.adobe.com/xdm/context/experienceevent-technical-details`
  * [Web Details](../../fieldgroups/experience-event/experienceevent-web.schema.md) `https://ns.adobe.com/xdm/context/experienceevent-web`
  * [Adobe Target ExperienceEvent Full Extension](target/experienceevent-all.schema.md) `https://ns.adobe.com/experience/target/experienceevent-all`
  * [Adobe Unified Profile Service ExperienceEvent Shared Extension](profile/experienceevent-shared.schema.md) `https://ns.adobe.com/experience/profile/experienceevent-shared`
  * [Adobe Experience Platform Implementation Details Mixin](implementations-ext.schema.md) `https://ns.adobe.com/experience/implementations-ext`
  * [End User ID Details](../../fieldgroups/experience-event/experienceevent-enduserids.schema.md) `https://ns.adobe.com/xdm/context/experienceevent-enduserids`


## Adobe Target ExperienceEvent Template Mixin Example
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
  },
  "https://ns.adobe.com/experience/target/clientcode": "773baa41-4afd-4c4e-9178-1547f58e07bd",
  "https://ns.adobe.com/experience/target/mboxname": "orderConfirmPage",
  "https://ns.adobe.com/experience/target/mboxversion": "v60",
  "https://ns.adobe.com/experience/target/sessionid": "94ef199f-85e6-4e33-9a58-0e4162486714",
  "https://ns.adobe.com/experience/target/pagedetail/pageid": "http://data.adobe.com/experience/target/pagedetail/pageid/b1ba48aa-291f-4f94-bc65-a260150648a1",
  "https://ns.adobe.com/experience/target/pagedetail/pagescore": 100
}
```

# Adobe Target ExperienceEvent Template Mixin Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [https://ns.adobe.com/experience/implementations](#httpsnsadobecomexperienceimplementations) | Adobe Experience Platform Implementation Details | Optional | [Adobe Experience Platform Implementation Details Mixin](implementations-ext.schema.md#httpsnsadobecomexperienceimplementations) |
| [https://ns.adobe.com/experience/profile/originDatasetID](#httpsnsadobecomexperienceprofileorigindatasetid) | `string` | Optional | [Adobe Unified Profile Service ExperienceEvent Shared Extension](profile/experienceevent-shared.schema.md#httpsnsadobecomexperienceprofileorigindatasetid) |
| [https://ns.adobe.com/experience/target/activities](#httpsnsadobecomexperiencetargetactivities) | Adobe Target Activity | Optional | [Adobe Target ExperienceEvent Full Extension](target/experienceevent-all.schema.md#httpsnsadobecomexperiencetargetactivities) |
| [https://ns.adobe.com/experience/target/clientcode](#httpsnsadobecomexperiencetargetclientcode) | `string` | Optional | [Adobe Target ExperienceEvent Full Extension](target/experienceevent-all.schema.md#httpsnsadobecomexperiencetargetclientcode) |
| [https://ns.adobe.com/experience/target/environmentID](#httpsnsadobecomexperiencetargetenvironmentid) | `string` | Optional | [Adobe Target ExperienceEvent Full Extension](target/experienceevent-all.schema.md#httpsnsadobecomexperiencetargetenvironmentid) |
| [https://ns.adobe.com/experience/target/mboxname](#httpsnsadobecomexperiencetargetmboxname) | `string` | Optional | [Adobe Target ExperienceEvent Full Extension](target/experienceevent-all.schema.md#httpsnsadobecomexperiencetargetmboxname) |
| [https://ns.adobe.com/experience/target/mboxversion](#httpsnsadobecomexperiencetargetmboxversion) | `string` | Optional | [Adobe Target ExperienceEvent Full Extension](target/experienceevent-all.schema.md#httpsnsadobecomexperiencetargetmboxversion) |
| [https://ns.adobe.com/experience/target/pagedetail/pageid](#httpsnsadobecomexperiencetargetpagedetailpageid) | `string` | Optional | [Adobe Target ExperienceEvent Full Extension](target/experienceevent-all.schema.md#httpsnsadobecomexperiencetargetpagedetailpageid) |
| [https://ns.adobe.com/experience/target/pagedetail/pagescore](#httpsnsadobecomexperiencetargetpagedetailpagescore) | `number` | Optional | [Adobe Target ExperienceEvent Full Extension](target/experienceevent-all.schema.md#httpsnsadobecomexperiencetargetpagedetailpagescore) |
| [https://ns.adobe.com/experience/target/sessionid](#httpsnsadobecomexperiencetargetsessionid) | `string` | Optional | [Adobe Target ExperienceEvent Full Extension](target/experienceevent-all.schema.md#httpsnsadobecomexperiencetargetsessionid) |
| [xdm:advertising](#xdmadvertising) | Advertising | Optional | [Advertising Details](../../fieldgroups/experience-event/experienceevent-advertising.schema.md#xdmadvertising) |
| [xdm:application](#xdmapplication) | Application | Optional | [Application Details](../../fieldgroups/experience-event/experienceevent-application.schema.md#xdmapplication) |
| [xdm:channel](#xdmchannel) | Experience Channel | Optional | [Channel Details](../../fieldgroups/experience-event/experienceevent-channel.schema.md#xdmchannel) |
| [xdm:commerce](#xdmcommerce) | Commerce | Optional | [Commerce Details](../../fieldgroups/experience-event/experienceevent-commerce.schema.md#xdmcommerce) |
| [xdm:dataSource](#xdmdatasource) | Data Source | Optional | [Technical Details](../../fieldgroups/experience-event/experienceevent-technical-details.schema.md#xdmdatasource) |
| [xdm:device](#xdmdevice) | Device | Optional | [Environment Details](../../fieldgroups/experience-event/experienceevent-environment-details.schema.md#xdmdevice) |
| [xdm:directMarketing](#xdmdirectmarketing) | Direct marketing | Optional | [Direct Marketing Details](../../fieldgroups/experience-event/experienceevent-directmarketing.schema.md#xdmdirectmarketing) |
| [xdm:endUserIDs](#xdmenduserids) | End user IDs | Optional | [End User ID Details](../../fieldgroups/experience-event/experienceevent-enduserids.schema.md#xdmenduserids) |
| [xdm:environment](#xdmenvironment) | Environment | Optional | [Environment Details](../../fieldgroups/experience-event/experienceevent-environment-details.schema.md#xdmenvironment) |
| [xdm:marketing](#xdmmarketing) | Marketing | Optional | [Campaign Marketing Details](../../fieldgroups/experience-event/experienceevent-marketing.schema.md#xdmmarketing) |
| [xdm:media](#xdmmedia) | Media information | Optional | [Media Interaction Details ](../../fieldgroups/experience-event/experienceevent-media.schema.md#xdmmedia) |
| [xdm:placeContext](#xdmplacecontext) | Place context | Optional | [Environment Details](../../fieldgroups/experience-event/experienceevent-environment-details.schema.md#xdmplacecontext) |
| [xdm:productListItems](#xdmproductlistitems) | Product list item | Optional | [Commerce Details](../../fieldgroups/experience-event/experienceevent-commerce.schema.md#xdmproductlistitems) |
| [xdm:profileStitch](#xdmprofilestitch) | Profile stitch | Optional | [Profile Stitch Details](../../fieldgroups/experience-event/experienceevent-profile-stitch.schema.md#xdmprofilestitch) |
| [xdm:receivedTimestamp](#xdmreceivedtimestamp) | `string` | Optional | [Technical Details](../../fieldgroups/experience-event/experienceevent-technical-details.schema.md#xdmreceivedtimestamp) |
| [xdm:search](#xdmsearch) | Search | Optional | [Search Details](../../fieldgroups/experience-event/experienceevent-search.schema.md#xdmsearch) |
| [xdm:segmentMembership](#xdmsegmentmembership) | `object` | Optional | [Segment Membership Details](../../fieldgroups/experience-event/experienceevent-segmentmembership.schema.md#xdmsegmentmembership) |
| [xdm:segmentMemberships](#xdmsegmentmemberships) | Segment membership item | Optional | [Segment Membership Details](../../fieldgroups/experience-event/experienceevent-segmentmembership.schema.md#xdmsegmentmemberships) |
| [xdm:web](#xdmweb) | Web information | Optional | [Web Details](../../fieldgroups/experience-event/experienceevent-web.schema.md#xdmweb) |
| `*` | any | Additional | this schema *allows* additional properties |

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






## https://ns.adobe.com/experience/target/activities
### Activities

A list of items representing executed activities.

`https://ns.adobe.com/experience/target/activities`
* is optional
* type: Adobe Target Activity

* defined in [Adobe Target ExperienceEvent Full Extension](target/experienceevent-all.schema.md#httpsnsadobecomexperiencetargetactivities)

### https://ns.adobe.com/experience/target/activities Type


Array type: Adobe Target Activity

All items must be of the type:
* [Adobe Target Activity](target/activity.schema.md) – `https://ns.adobe.com/experience/target/activity`








## https://ns.adobe.com/experience/target/clientcode
### Adobe Target Client Code

Adobe Target client code.

`https://ns.adobe.com/experience/target/clientcode`
* is optional
* type: `string`
* defined in [Adobe Target ExperienceEvent Full Extension](target/experienceevent-all.schema.md#httpsnsadobecomexperiencetargetclientcode)

### https://ns.adobe.com/experience/target/clientcode Type


`string`






## https://ns.adobe.com/experience/target/environmentID
### Environment Identifier

Identifier of the environment on which the event was processed.

`https://ns.adobe.com/experience/target/environmentID`
* is optional
* type: `string`
* defined in [Adobe Target ExperienceEvent Full Extension](target/experienceevent-all.schema.md#httpsnsadobecomexperiencetargetenvironmentid)

### https://ns.adobe.com/experience/target/environmentID Type


`string`






## https://ns.adobe.com/experience/target/mboxname
### Adobe Target Mbox Name

Adobe Target mbox name.

`https://ns.adobe.com/experience/target/mboxname`
* is optional
* type: `string`
* defined in [Adobe Target ExperienceEvent Full Extension](target/experienceevent-all.schema.md#httpsnsadobecomexperiencetargetmboxname)

### https://ns.adobe.com/experience/target/mboxname Type


`string`






## https://ns.adobe.com/experience/target/mboxversion
### Adobe Target Mbox Version

Adobe Target mbox version.

`https://ns.adobe.com/experience/target/mboxversion`
* is optional
* type: `string`
* defined in [Adobe Target ExperienceEvent Full Extension](target/experienceevent-all.schema.md#httpsnsadobecomexperiencetargetmboxversion)

### https://ns.adobe.com/experience/target/mboxversion Type


`string`






## https://ns.adobe.com/experience/target/pagedetail/pageid
### Target Unique Page Identifier

Target generated page identifier for current event.

`https://ns.adobe.com/experience/target/pagedetail/pageid`
* is optional
* type: `string`
* defined in [Adobe Target ExperienceEvent Full Extension](target/experienceevent-all.schema.md#httpsnsadobecomexperiencetargetpagedetailpageid)

### https://ns.adobe.com/experience/target/pagedetail/pageid Type


`string`
* format: `uri` – Uniformous Resource Identifier (according to [RFC3986](http://tools.ietf.org/html/rfc3986))






## https://ns.adobe.com/experience/target/pagedetail/pagescore
### Page Score

Customer assigned score to visited page.

`https://ns.adobe.com/experience/target/pagedetail/pagescore`
* is optional
* type: `number`
* defined in [Adobe Target ExperienceEvent Full Extension](target/experienceevent-all.schema.md#httpsnsadobecomexperiencetargetpagedetailpagescore)

### https://ns.adobe.com/experience/target/pagedetail/pagescore Type


`number`






## https://ns.adobe.com/experience/target/sessionid
### Adobe Target Session Identifier

Adobe Target session identifier.

`https://ns.adobe.com/experience/target/sessionid`
* is optional
* type: `string`
* defined in [Adobe Target ExperienceEvent Full Extension](target/experienceevent-all.schema.md#httpsnsadobecomexperiencetargetsessionid)

### https://ns.adobe.com/experience/target/sessionid Type


`string`






## xdm:advertising
### Advertising

Information related to advertising impressions, clickthroughs, and attribution.

`xdm:advertising`
* is optional
* type: Advertising
* defined in [Advertising Details](../../fieldgroups/experience-event/experienceevent-advertising.schema.md#xdmadvertising)

### xdm:advertising Type


* [Advertising](../../datatypes/marketing/advertising.schema.md) – `https://ns.adobe.com/xdm/context/advertising`





## xdm:application
### Application

This mixin is used to capture application information related to an ExperienceEvent, including the name of the application, app version, installs, launches, crashes, and closures. It could be either the application targeted by the event like the send of a push notification or the application originating the event such as a click, or a login.

`xdm:application`
* is optional
* type: Application
* defined in [Application Details](../../fieldgroups/experience-event/experienceevent-application.schema.md#xdmapplication)

### xdm:application Type


* [Application](../../datatypes/application.schema.md) – `https://ns.adobe.com/xdm/context/application`





## xdm:channel
### Experience channel

Experience channel related to the ExperienceEvent.

`xdm:channel`
* is optional
* type: Experience Channel
* defined in [Channel Details](../../fieldgroups/experience-event/experienceevent-channel.schema.md#xdmchannel)

### xdm:channel Type


* [Experience Channel](../../datatypes/channels/channel.schema.md) – `https://ns.adobe.com/xdm/channels/channel`





## xdm:commerce
### Commerce

Product returns, warranty registration, and shopping cart/order process.

`xdm:commerce`
* is optional
* type: Commerce
* defined in [Commerce Details](../../fieldgroups/experience-event/experienceevent-commerce.schema.md#xdmcommerce)

### xdm:commerce Type


* [Commerce](../../datatypes/marketing/commerce.schema.md) – `https://ns.adobe.com/xdm/context/commerce`





## xdm:dataSource
### Data source

Globally unique identification of a data source.

`xdm:dataSource`
* is optional
* type: Data Source
* defined in [Technical Details](../../fieldgroups/experience-event/experienceevent-technical-details.schema.md#xdmdatasource)

### xdm:dataSource Type


* [Data Source](../../datatypes/data/datasource.schema.md) – `https://ns.adobe.com/xdm/data/datasource`





## xdm:device
### Device

An identified device, application or device browser instance that is trackable across sessions, normally by cookies.

`xdm:device`
* is optional
* type: Device
* defined in [Environment Details](../../fieldgroups/experience-event/experienceevent-environment-details.schema.md#xdmdevice)

### xdm:device Type


* [Device](../../datatypes/device.schema.md) – `https://ns.adobe.com/xdm/context/device`





## xdm:directMarketing
### Direct marketing

Events and properties related to direct and outbound marketing such as email, direct mail, texts, and in-app notifications.

`xdm:directMarketing`
* is optional
* type: Direct marketing
* defined in [Direct Marketing Details](../../fieldgroups/experience-event/experienceevent-directmarketing.schema.md#xdmdirectmarketing)

### xdm:directMarketing Type


* [Direct marketing](../../datatypes/marketing/direct-marketing.schema.md) – `https://ns.adobe.com/xdm/context/direct-marketing`





## xdm:endUserIDs
### EndUserIDs

Condensed, normalized encapsulation of end user identifiers asserted for this ExperienceEvent.

`xdm:endUserIDs`
* is optional
* type: End user IDs
* defined in [End User ID Details](../../fieldgroups/experience-event/experienceevent-enduserids.schema.md#xdmenduserids)

### xdm:endUserIDs Type


* [End user IDs](../../datatypes/enduserids.schema.md) – `https://ns.adobe.com/xdm/context/enduserids`





## xdm:environment
### Environment

Information about the surrounding situation the event observation occurred in, specifically detailing transitory information such as the network or software versions.

`xdm:environment`
* is optional
* type: Environment
* defined in [Environment Details](../../fieldgroups/experience-event/experienceevent-environment-details.schema.md#xdmenvironment)

### xdm:environment Type


* [Environment](../../datatypes/environment.schema.md) – `https://ns.adobe.com/xdm/context/environment`





## xdm:marketing
### Marketing

Tracks offer impression and social network interactions.

`xdm:marketing`
* is optional
* type: Marketing
* defined in [Campaign Marketing Details](../../fieldgroups/experience-event/experienceevent-marketing.schema.md#xdmmarketing)

### xdm:marketing Type


* [Marketing](../../datatypes/marketing/marketing.schema.md) – `https://ns.adobe.com/xdm/context/marketing`





## xdm:media
### Media

Media activity information related to the experience event.

`xdm:media`
* is optional
* type: Media information
* defined in [Media Interaction Details ](../../fieldgroups/experience-event/experienceevent-media.schema.md#xdmmedia)

### xdm:media Type


* [Media information](../../datatypes/media.schema.md) – `https://ns.adobe.com/xdm/context/media`





## xdm:placeContext
### Place context

The transient circumstances related to the observation. Examples include locale specific information such as weather, local time, traffic, day of the week, workday vs. holiday, and working hours.

`xdm:placeContext`
* is optional
* type: Place context
* defined in [Environment Details](../../fieldgroups/experience-event/experienceevent-environment-details.schema.md#xdmplacecontext)

### xdm:placeContext Type


* [Place context](../../datatypes/placecontext.schema.md) – `https://ns.adobe.com/xdm/context/placecontext`





## xdm:productListItems
### Product list items

A list of items representing a product selected by a customer with specific options and pricing that are for that usage context at a specific point of time and may differ from the product record.

`xdm:productListItems`
* is optional
* type: Product list item

* defined in [Commerce Details](../../fieldgroups/experience-event/experienceevent-commerce.schema.md#xdmproductlistitems)

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

* defined in [Profile Stitch Details](../../fieldgroups/experience-event/experienceevent-profile-stitch.schema.md#xdmprofilestitch)

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
* defined in [Technical Details](../../fieldgroups/experience-event/experienceevent-technical-details.schema.md#xdmreceivedtimestamp)

### xdm:receivedTimestamp Type


`string`
* format: `date-time` – date and time (according to [RFC 3339, section 5.6](http://tools.ietf.org/html/rfc3339))






## xdm:search
### Search

The information related to web or mobile search.

`xdm:search`
* is optional
* type: Search
* defined in [Search Details](../../fieldgroups/experience-event/experienceevent-search.schema.md#xdmsearch)

### xdm:search Type


* [Search](../../datatypes/search.schema.md) – `https://ns.adobe.com/xdm/context/search`





## xdm:segmentMembership
### Segment Membership Map

`xdm:segmentMembership`
* is optional
* type: `object`
* defined in [Segment Membership Details](../../fieldgroups/experience-event/experienceevent-segmentmembership.schema.md#xdmsegmentmembership)

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

* defined in [Segment Membership Details](../../fieldgroups/experience-event/experienceevent-segmentmembership.schema.md#xdmsegmentmemberships)

### xdm:segmentMemberships Type


Array type: Segment membership item

All items must be of the type:
* [Segment membership item](../../datatypes/segmentmembershipitem.schema.md) – `https://ns.adobe.com/xdm/context/segmentmembershipitem`








## xdm:web
### Web

Link clicks, web page details, referrer information, and browser details.

`xdm:web`
* is optional
* type: Web information
* defined in [Web Details](../../fieldgroups/experience-event/experienceevent-web.schema.md#xdmweb)

### xdm:web Type


* [Web information](../../datatypes/webinfo.schema.md) – `https://ns.adobe.com/xdm/context/webinfo`




