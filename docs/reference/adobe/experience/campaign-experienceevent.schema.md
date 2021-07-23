
# Adobe Campaign ExperienceEvent Template Mixin Schema

```
https://ns.adobe.com/experience/campaign-experienceevent
```

Campaign ExperienceEvent mixin for use with schemas for Solution data ingestion. Includes the core/standard ExperienceEvent as well as the required Adobe Campaign ExperienceEvent mixins.

| [Abstract](../../../abstract.md) | [Extensible](../../../extensions.md) | [Status](../../../status.md) | [Identifiable](../../../id.md) | [Custom Properties](../../../extensions.md) | [Additional Properties](../../../extensions.md) | Defined In |
|----------------------------------|--------------------------------------|------------------------------|--------------------------------|---------------------------------------------|-------------------------------------------------|------------|
| Can be instantiated | Yes | Stable | No | Forbidden | Permitted | [adobe/experience/campaign-experienceevent.schema.json](adobe/experience/campaign-experienceevent.schema.json) |
## Schema Hierarchy

* Adobe Campaign ExperienceEvent Template Mixin `https://ns.adobe.com/experience/campaign-experienceevent`
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
  * [Adobe Campaign ExperienceEvent Full Extension](campaign/experienceevent-all.schema.md) `https://ns.adobe.com/experience/campaign/experienceevent-all`
  * [Experience Event - Proposition Reference](decisioning/proposition.schema.md) `https://ns.adobe.com/experience/decisioning/proposition`
  * [Adobe Target ExperienceEvent Shared Extension](target/experienceevent-shared.schema.md) `https://ns.adobe.com/experience/target/experienceevent-shared`
  * [Adobe Unified Profile Service ExperienceEvent Shared Extension](profile/experienceevent-shared.schema.md) `https://ns.adobe.com/experience/profile/experienceevent-shared`
  * [Adobe Experience Platform Implementation Details Mixin](implementations-ext.schema.md) `https://ns.adobe.com/experience/implementations-ext`
  * [End User ID Details](../../fieldgroups/experience-event/experienceevent-enduserids.schema.md) `https://ns.adobe.com/xdm/context/experienceevent-enduserids`


## Adobe Campaign ExperienceEvent Template Mixin Example
```json
{
  "@id": "https://data.adobe.io/experienceid-1234567",
  "xdm:dataSource": {
    "@id": "https://data.adobe.io/datasources/datasource-124",
    "xdm:code": "DataSourceIntegrationCode-124"
  },
  "xdm:timestamp": "2017-09-26T15:52:25+00:00",
  "xdm:identityMap": {
    "ECID": [
      {
        "xdm:id": "68519882713298129995549973016107434638",
        "xdm:primary": true
      }
    ],
    "CPGN": [
      {
        "xdm:id": "https://data.adobe.io/entities/identity/1234567",
        "xdm:primary": true
      }
    ]
  },
  "xdm:directMarketing": {
    "xdm:sends": {
      "xdm:value": 1
    }
  },
  "xdm:channel": {
    "@id": "https://ns.adobe.com/xdm/channels/email"
  },
  "https://ns.adobe.com/experience/campaign/message": {
    "xdm:id": 10000,
    "xdm:profile": {
      "xdm:person": {
        "xdm:birthMonth": 1,
        "xdm:birthDay": 3,
        "xdm:birthYear": 1996,
        "xdm:gender": "female"
      },
      "xdm:workAddress": {
        "@id": "https://ns.adobe.com/entities/address/123",
        "xdm:primary": true,
        "xdm:city": "San Jose",
        "xdm:stateProvinceISO": "CA",
        "xdm:postalCode": "95110",
        "xdm:countryCode": "US"
      },
      "xdm:workEmail": {
        "xdm:primary": true,
        "xdm:address": "jsmith@xyzinc.com"
      }
    },
    "xdm:variant": "English",
    "xdm:seedMember": false,
    "xdm:quarantine": false,
    "xdm:proofMember": false,
    "xdm:controlGroupMember": false,
    "xdm:testMember": true,
    "xdm:size": 421,
    "xdm:outboundIP": "10.20.30.40",
    "xdm:externalID": "uuid:00112233-4455-6677-8899-AABBCCDDEEFF"
  },
  "https://ns.adobe.com/experience/campaign/delivery": {
    "xdm:id": 1001,
    "xdm:from": "no-reply@adobe.com",
    "xdm:testEnabled": true,
    "xdm:messageClass": "continuous",
    "xdm:templateID": 1000,
    "xdm:deliveryName": "DM200",
    "xdm:deliveryLabel": "Birthday Wishes"
  },
  "https://ns.adobe.com/experience/campaign/marketingCampaign": {
    "xdm:id": 100,
    "xdm:campaignName": "CAMP2010"
  },
  "https://ns.adobe.com/experience/campaign/orchestration": {
    "xdm:eventID": "onJourneyEnter"
  },
  "https://ns.adobe.com/experience/campaign/containerID": "customer-stage",
  "https://ns.adobe.com/experience/campaign/eventSource": "pipelined-mta"
}
```

# Adobe Campaign ExperienceEvent Template Mixin Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [https://ns.adobe.com/experience/campaign/containerID](#httpsnsadobecomexperiencecampaigncontainerid) | `string` | Optional | [Adobe Campaign ExperienceEvent Full Extension](campaign/experienceevent-all.schema.md#httpsnsadobecomexperiencecampaigncontainerid) |
| [https://ns.adobe.com/experience/campaign/delivery](#httpsnsadobecomexperiencecampaigndelivery) | `object` | Optional | [Adobe Campaign ExperienceEvent Full Extension](campaign/experienceevent-all.schema.md#httpsnsadobecomexperiencecampaigndelivery) |
| [https://ns.adobe.com/experience/campaign/eventSource](#httpsnsadobecomexperiencecampaigneventsource) | `string` | Optional | [Adobe Campaign ExperienceEvent Full Extension](campaign/experienceevent-all.schema.md#httpsnsadobecomexperiencecampaigneventsource) |
| [https://ns.adobe.com/experience/campaign/link](#httpsnsadobecomexperiencecampaignlink) | `object` | Optional | [Adobe Campaign ExperienceEvent Full Extension](campaign/experienceevent-all.schema.md#httpsnsadobecomexperiencecampaignlink) |
| [https://ns.adobe.com/experience/campaign/marketingCampaign](#httpsnsadobecomexperiencecampaignmarketingcampaign) | `object` | Optional | [Adobe Campaign ExperienceEvent Full Extension](campaign/experienceevent-all.schema.md#httpsnsadobecomexperiencecampaignmarketingcampaign) |
| [https://ns.adobe.com/experience/campaign/medium](#httpsnsadobecomexperiencecampaignmedium) | `string` | Optional | [Adobe Campaign ExperienceEvent Full Extension](campaign/experienceevent-all.schema.md#httpsnsadobecomexperiencecampaignmedium) |
| [https://ns.adobe.com/experience/campaign/message](#httpsnsadobecomexperiencecampaignmessage) | message.schema | Optional | [Adobe Campaign ExperienceEvent Full Extension](campaign/experienceevent-all.schema.md#httpsnsadobecomexperiencecampaignmessage) |
| [https://ns.adobe.com/experience/campaign/mutation](#httpsnsadobecomexperiencecampaignmutation) | Adobe Campaign Mutation Event | Optional | [Adobe Campaign ExperienceEvent Full Extension](campaign/experienceevent-all.schema.md#httpsnsadobecomexperiencecampaignmutation) |
| [https://ns.adobe.com/experience/campaign/offerOpened](#httpsnsadobecomexperiencecampaignofferopened) | Campaign Offer Response Detail | Optional | [Adobe Campaign ExperienceEvent Full Extension](campaign/experienceevent-all.schema.md#httpsnsadobecomexperiencecampaignofferopened) |
| [https://ns.adobe.com/experience/campaign/offersProposed](#httpsnsadobecomexperiencecampaignoffersproposed) | Campaign Offer Proposition Detail | Optional | [Adobe Campaign ExperienceEvent Full Extension](campaign/experienceevent-all.schema.md#httpsnsadobecomexperiencecampaignoffersproposed) |
| [https://ns.adobe.com/experience/campaign/orchestration](#httpsnsadobecomexperiencecampaignorchestration) | orchestration.schema | Optional | [Adobe Campaign ExperienceEvent Full Extension](campaign/experienceevent-all.schema.md#httpsnsadobecomexperiencecampaignorchestration) |
| [https://ns.adobe.com/experience/decisioning/propositionID](#httpsnsadobecomexperiencedecisioningpropositionid) | `string` | Optional | [Experience Event - Proposition Reference](decisioning/proposition.schema.md#httpsnsadobecomexperiencedecisioningpropositionid) |
| [https://ns.adobe.com/experience/implementations](#httpsnsadobecomexperienceimplementations) | Adobe Experience Platform Implementation Details | Optional | [Adobe Experience Platform Implementation Details Mixin](implementations-ext.schema.md#httpsnsadobecomexperienceimplementations) |
| [https://ns.adobe.com/experience/profile/originDatasetID](#httpsnsadobecomexperienceprofileorigindatasetid) | `string` | Optional | [Adobe Unified Profile Service ExperienceEvent Shared Extension](profile/experienceevent-shared.schema.md#httpsnsadobecomexperienceprofileorigindatasetid) |
| [https://ns.adobe.com/experience/target/supplementalDataID](#httpsnsadobecomexperiencetargetsupplementaldataid) | `string` | Optional | [Adobe Target ExperienceEvent Shared Extension](target/experienceevent-shared.schema.md#httpsnsadobecomexperiencetargetsupplementaldataid) |
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

## https://ns.adobe.com/experience/campaign/containerID
### Container Identifier

The identifier denoting the container with which Campaign ExperienceEvent is associated.

`https://ns.adobe.com/experience/campaign/containerID`
* is optional
* type: `string`
* defined in [Adobe Campaign ExperienceEvent Full Extension](campaign/experienceevent-all.schema.md#httpsnsadobecomexperiencecampaigncontainerid)

### https://ns.adobe.com/experience/campaign/containerID Type


`string`






## https://ns.adobe.com/experience/campaign/delivery
### The campaign activity originating a message to a recipient.

`https://ns.adobe.com/experience/campaign/delivery`
* is optional
* type: `object`
* defined in [Adobe Campaign ExperienceEvent Full Extension](campaign/experienceevent-all.schema.md#httpsnsadobecomexperiencecampaigndelivery)

### https://ns.adobe.com/experience/campaign/delivery Type


`object` with following properties:


| Property | Type | Required | Default |
|----------|------|----------|---------|
| `xdm:deliveryLabel`| string | Optional |  |
| `xdm:deliveryName`| string | Optional |  |
| `xdm:from`| string | Optional |  |
| `xdm:id`| integer | Optional |  |
| `xdm:messageClass`| string | Optional | `"one_time"` |
| `xdm:templateID`| integer | Optional |  |
| `xdm:templateName`| string | Optional |  |
| `xdm:testEnabled`| boolean | Optional | `false` |



#### xdm:deliveryLabel
##### Delivery Label

A human-friendly name of the campaign activity which is originating this message.

`xdm:deliveryLabel`
* is optional
* type: `string`

##### xdm:deliveryLabel Type


`string`








#### xdm:deliveryName
##### Delivery Internal Name

A human-friendly identifier of the campaign activity which is originating this message.

`xdm:deliveryName`
* is optional
* type: `string`

##### xdm:deliveryName Type


`string`








#### xdm:from
##### From

Address used as a from/sender/caller address. Depending on the communication channel, the `address` has a different format.

  * `email`: an email address.
  * `textMessage` or `phone`: a shortcode or phone number.

`xdm:from`
* is optional
* type: `string`

##### xdm:from Type


`string`








#### xdm:id
##### Delivery ID

The campaign activity originating this message.

`xdm:id`
* is optional
* type: `integer`

##### xdm:id Type


`integer`








#### xdm:messageClass
##### Message Class

Mode of delivery for the messages sent.


`xdm:messageClass`
* is optional
* type: `string`
* default: `"one_time"`


##### xdm:messageClass Type


`string`



##### xdm:messageClass Known Values
| Value | Description |
|-------|-------------|
| `one_time` | Marketing (One Time) |
| `continuous` | Recurring |
| `event_based` | Transactional (Event-based) |






#### xdm:templateID
##### Identifier of the Template

The delivery template's ID used to initialize this delivery.

The type the template used in Adobe Campaign can be identified using the `messageClass`.

* `messageClass` = `oneTime`: the template is standard delivery template.
* `messageClass` = `continuous`: the template is a recurring delivery.
* `messageClass` = `transactional`: the template is a transactional message template.


`xdm:templateID`
* is optional
* type: `integer`

##### xdm:templateID Type


`integer`








#### xdm:templateName
##### Delivery Template&#39;s Internal Name

A human-friendly identifier of the the parent entity (in case of event_based or continuous message Class) of the campaign activity originating this message.

`xdm:templateName`
* is optional
* type: `string`

##### xdm:templateName Type


`string`








#### xdm:testEnabled
##### Test Enabled

Specify whether campaign activity is of type A/B testing.

`xdm:testEnabled`
* is optional
* type: `boolean`
* default: `false`


##### xdm:testEnabled Type


`boolean`










## https://ns.adobe.com/experience/campaign/eventSource
### Event Source

A human-friendly name of the campaign activity which is originating this message.

`https://ns.adobe.com/experience/campaign/eventSource`
* is optional
* type: `string`
* defined in [Adobe Campaign ExperienceEvent Full Extension](campaign/experienceevent-all.schema.md#httpsnsadobecomexperiencecampaigneventsource)

### https://ns.adobe.com/experience/campaign/eventSource Type


`string`



### https://ns.adobe.com/experience/campaign/eventSource Known Values
| Value | Description |
|-------|-------------|
| `replay-pipelined-mta` | This event was generated via Replay Utility tool generated from Pipelined |
| `replay-pipelined-inMail` | This event was generated via Replay Utility tool generated from Pipelined |
| `replay-pipelined-trackinglogd` | This event was generated via Replay Utility tool generated from Pipelined |
| `replay-pipelined-pipelined` | This event was generated via Replay Utility tool generated from Pipelined |
| `pipelined-mta` | This event was generated via Pipelined generated from mta |
| `pipelined-inMail` | This event was generated via Pipelined generated from inMail |
| `pipelined-trackinglogd` | This event was generated via Pipelined generated from trackinglogd |
| `pipelined-pipelined` | This event was generated via Pipelined generated from Pipelined |
| `replay` | This event was generated via Replay Utility tool which did not have any event source |
| `pipelined-tracker` | This event was generated via Pipelined generated from TrackeR |




## https://ns.adobe.com/experience/campaign/link
### The campaign activity originating a message to a recipient.

`https://ns.adobe.com/experience/campaign/link`
* is optional
* type: `object`
* defined in [Adobe Campaign ExperienceEvent Full Extension](campaign/experienceevent-all.schema.md#httpsnsadobecomexperiencecampaignlink)

### https://ns.adobe.com/experience/campaign/link Type


`object` with following properties:


| Property | Type | Required | Default |
|----------|------|----------|---------|
| `xdm:category`| string | Optional |  |
| `xdm:description`| string | Optional |  |
| `xdm:id`| string | Optional |  |
| `xdm:inAppMessageAction`| string | Optional |  |
| `xdm:inAppMessageButtonText`| string | Optional |  |
| `xdm:label`| string | Optional |  |
| `xdm:occurrence`| integer | Optional | `1` |
| `xdm:url`| string | Optional |  |



#### xdm:category
##### URL Category

The category of the link. It may be `subscription`, or a user-defined category.

`xdm:category`
* is optional
* type: `string`

##### xdm:category Type


`string`








#### xdm:description
##### Tracking URL Description

A human-friendly description of the link.

`xdm:description`
* is optional
* type: `string`

##### xdm:description Type


`string`








#### xdm:id
##### Tracking URL ID

Unique Identifier of the Link

`xdm:id`
* is optional
* type: `string`

##### xdm:id Type


`string`








#### xdm:inAppMessageAction
##### In-App Message Action

Actions on the In-App message delivered, e.g. action on primary button, secondary button or close button.

`xdm:inAppMessageAction`
* is optional
* type: `string`

##### xdm:inAppMessageAction Type


`string`



##### xdm:inAppMessageAction Known Values
| Value | Description |
|-------|-------------|
| `primary` | Primary action |
| `secondary` | Secondary action |
| `dismiss` | Dismiss action |






#### xdm:inAppMessageButtonText
##### In-App Message Button Text

The user-friendly text on the button.

`xdm:inAppMessageButtonText`
* is optional
* type: `string`

##### xdm:inAppMessageButtonText Type


`string`








#### xdm:label
##### URL Label

The user-friendly label clicking on which the link opens.

`xdm:label`
* is optional
* type: `string`

##### xdm:label Type


`string`








#### xdm:occurrence
##### Occurrence

URL occurrence index in the content (first is 1). When the same URL is available several times in the same content, its is necessary to track which occurrence of the URL has been clicked on.

`xdm:occurrence`
* is optional
* type: `integer`
* default: `1`


##### xdm:occurrence Type


`integer`
* minimum value: `1`
* maximum value: `32767`







#### xdm:url
##### URL

URL of the Link.

`xdm:url`
* is optional
* type: `string`

##### xdm:url Type


`string`
* format: `uri` – Uniformous Resource Identifier (according to [RFC3986](http://tools.ietf.org/html/rfc3986))











## https://ns.adobe.com/experience/campaign/marketingCampaign
### The campaign activity originating a message to a recipient.

`https://ns.adobe.com/experience/campaign/marketingCampaign`
* is optional
* type: `object`
* defined in [Adobe Campaign ExperienceEvent Full Extension](campaign/experienceevent-all.schema.md#httpsnsadobecomexperiencecampaignmarketingcampaign)

### https://ns.adobe.com/experience/campaign/marketingCampaign Type


`object` with following properties:


| Property | Type | Required |
|----------|------|----------|
| `xdm:campaignName`| string | Optional |
| `xdm:id`| integer | Optional |



#### xdm:campaignName
##### Campaign Internal Name

A human-friendly identifier of the marketing campaign which is originating this message.

`xdm:campaignName`
* is optional
* type: `string`

##### xdm:campaignName Type


`string`








#### xdm:id
##### Campaign ID

Identifier of the marketing campaign to which activity originating this message belongs to.

`xdm:id`
* is optional
* type: `integer`

##### xdm:id Type


`integer`











## https://ns.adobe.com/experience/campaign/medium
### Medium

The medium is a combination of the source of the event (message, web, ...) and its format if applicable.

`https://ns.adobe.com/experience/campaign/medium`
* is optional
* type: `string`
* defined in [Adobe Campaign ExperienceEvent Full Extension](campaign/experienceevent-all.schema.md#httpsnsadobecomexperiencecampaignmedium)

### https://ns.adobe.com/experience/campaign/medium Type


`string`



### https://ns.adobe.com/experience/campaign/medium Known Values
| Value | Description |
|-------|-------------|
| `message_text` | The source of the event is message in a text format. |
| `message_html` | The source of the event is message in a html format. |
| `message_line` | The source of the event is a line message. |
| `web` | The source of the event is web tracking tag in a web page. |
| `offer` | The source of the event is an offer. |




## https://ns.adobe.com/experience/campaign/message
### A single message sent to a recipient.

`https://ns.adobe.com/experience/campaign/message`
* is optional
* type: message.schema
* defined in [Adobe Campaign ExperienceEvent Full Extension](campaign/experienceevent-all.schema.md#httpsnsadobecomexperiencecampaignmessage)

### https://ns.adobe.com/experience/campaign/message Type


* [message.schema](campaign/message.schema.md) – `https://ns.adobe.com/experience/campaign/message`





## https://ns.adobe.com/experience/campaign/mutation
### Mutated Fields from Previous ExperienceEvent.

Information of the fields that have changed since the previous ExperienceEvent to keep track of the state changes across events. For e.g. if when an email gets sent, an ExperienceEvent with metric `sends` will be sent. This may get bounced and an ExperienceEvent with metric `bounces` will be sent then. It may be important for a downstream application to know that the previous ExperienceEvent with metric `sends` is now to be invalidated. This field will contain the values from the previous ExperienceEvent that have a different value in the current ExperienceEvent.

`https://ns.adobe.com/experience/campaign/mutation`
* is optional
* type: Adobe Campaign Mutation Event
* defined in [Adobe Campaign ExperienceEvent Full Extension](campaign/experienceevent-all.schema.md#httpsnsadobecomexperiencecampaignmutation)

### https://ns.adobe.com/experience/campaign/mutation Type


* [Adobe Campaign Mutation Event](campaign/mutationevent.schema.md) – `https://ns.adobe.com/experience/campaign/mutationevent`





## https://ns.adobe.com/experience/campaign/offerOpened
### Offer Opened

The offer in the message for an 'offer opened' event.

`https://ns.adobe.com/experience/campaign/offerOpened`
* is optional
* type: Campaign Offer Response Detail
* defined in [Adobe Campaign ExperienceEvent Full Extension](campaign/experienceevent-all.schema.md#httpsnsadobecomexperiencecampaignofferopened)

### https://ns.adobe.com/experience/campaign/offerOpened Type


* [Campaign Offer Response Detail](campaign/offer-response-detail.schema.md) – `https://ns.adobe.com/experience/campaign/offer-response-detail`





## https://ns.adobe.com/experience/campaign/offersProposed
### Offer Propositions

The offers in the message of a 'email-send' event.

`https://ns.adobe.com/experience/campaign/offersProposed`
* is optional
* type: Campaign Offer Proposition Detail

* defined in [Adobe Campaign ExperienceEvent Full Extension](campaign/experienceevent-all.schema.md#httpsnsadobecomexperiencecampaignoffersproposed)

### https://ns.adobe.com/experience/campaign/offersProposed Type


Array type: Campaign Offer Proposition Detail

All items must be of the type:
* [Campaign Offer Proposition Detail](campaign/offer-proposition-detail.schema.md) – `https://ns.adobe.com/experience/campaign/offer-proposition-detail`








## https://ns.adobe.com/experience/campaign/orchestration
### Campaign Orchestration for creating user journey.

`https://ns.adobe.com/experience/campaign/orchestration`
* is optional
* type: orchestration.schema
* defined in [Adobe Campaign ExperienceEvent Full Extension](campaign/experienceevent-all.schema.md#httpsnsadobecomexperiencecampaignorchestration)

### https://ns.adobe.com/experience/campaign/orchestration Type


* [orchestration.schema](campaign/orchestration.schema.md) – `https://ns.adobe.com/experience/campaign/orchestration`





## https://ns.adobe.com/experience/decisioning/propositionID
### Proposition Identifier

A unique identifier for the proposition event referenced by another "XDM ExperienceEvent". It is the expectation that applications use this "propositionID" in every experience event that was influenced by the set of propositions. An individual profile's proposition-response history is maintained with these proposition identifiers.

`https://ns.adobe.com/experience/decisioning/propositionID`
* is optional
* type: `string`
* defined in [Experience Event - Proposition Reference](decisioning/proposition.schema.md#httpsnsadobecomexperiencedecisioningpropositionid)

### https://ns.adobe.com/experience/decisioning/propositionID Type


`string`
* format: `uri-reference` – URI Reference (according to [RFC3986](https://tools.ietf.org/html/rfc3986))






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




