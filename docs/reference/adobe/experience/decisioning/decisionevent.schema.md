
# Decision Event Schema

```
https://ns.adobe.com/experience/decisioning/decisionevent
```

A decision event is used to capture observations about the outcome and context of a decision activity. The decision event captures information about how the decision made, when it was occurring, what options were proposed (chosen) and what contextual state existed that either influenced the decision or could be observed during the decision process. The decision event also captures the proposition ID, a globally unique identifier that can be used to correlate the decision to other events. DecisionEvents are not only relatable to Experience Events that impacted a decision but also to ExperienceEvents that are a direct response to a proposition. It is the expectation that applications reference the proposition ID in every experience event that was influenced by the propositions. A user profile's proposition-response history is maintained with these proposition IDs.

| [Abstract](../../../../abstract.md) | [Extensible](../../../../extensions.md) | [Status](../../../../status.md) | [Identifiable](../../../../id.md) | [Custom Properties](../../../../extensions.md) | [Additional Properties](../../../../extensions.md) | Defined In |
|-------------------------------------|-----------------------------------------|---------------------------------|-----------------------------------|------------------------------------------------|----------------------------------------------------|------------|
| Can be instantiated | Yes | Stable | No | Forbidden | Permitted | [adobe/experience/decisioning/decisionevent.schema.json](adobe/experience/decisioning/decisionevent.schema.json) |
## Schema Hierarchy

* Decision Event `https://ns.adobe.com/experience/decisioning/decisionevent`
  * [Extensibility base schema](../../../datatypes/extensible.schema.md) `https://ns.adobe.com/xdm/common/extensible`
  * [Time-series Schema](../../../behaviors/time-series.schema.md) `https://ns.adobe.com/xdm/data/time-series`
  * [IdentityMap](../../../fieldgroups/shared/identitymap.schema.md) `https://ns.adobe.com/xdm/context/identitymap`
  * [Experience Event - Proposition Reference](proposition.schema.md) `https://ns.adobe.com/experience/decisioning/proposition`
  * [Decision Event - Proposition Details](proposition-details.schema.md) `https://ns.adobe.com/experience/decisioning/proposition-details`


## Decision Event Example
```json
{
  "@id": "https://data.adobe.io/entities/propositions/3cc33a7e-13ca-4b19-b25d-c816eff9a70a",
  "xdm:timestamp": "2019-01-26T15:52:25+00:00",
  "xdm:identityMap": {
    "ECID": [
      {
        "xdm:id": "33441528584054496761339722935948080609"
      }
    ]
  },
  "https://ns.adobe.com/experience/decisioning/propositionID": "3cc33a7e-13ca-4b19-b25d-c816eff9a70a",
  "https://ns.adobe.com/experience/decisioning/propositions": [
    {
      "xdm:items": [
        {
          "xdm:id": "xcore:personalized-offer:f67bab756ed6ee4",
          "repo:etag": "5",
          "xdm:score": 83,
          "xdm:propositionsTotal": {
            "xdm:value": 948
          }
        },
        {
          "xdm:id": "xcore:personalized-offer:e91ee850a0bb7d9",
          "repo:etag": "3",
          "xdm:score": 12,
          "xdm:propositionsTotal": {
            "xdm:value": 221
          }
        }
      ],
      "xdm:scopeDetails": {
        "xdm:id": "home-page-banner",
        "xdm:placement": {
          "xdm:id": "xcore:offer-placement:c652463157c2aa1",
          "repo:etag": "4",
          "xdm:name": "Home Page Banner"
        },
        "xdm:activity": {
          "xdm:id": "xcore:offer-activity:ebc48132c26ccfc",
          "repo:etag": "8",
          "xdm:name": "Spring 21 Campaign Web"
        },
        "xdm:strategies": [
          {
            "xdm:step": "eligibility",
            "xdm:strategyID": "xcore:eligibility-rule:e5244c22eff29e8",
            "xdm:algorithmID": "pql-rule",
            "xdm:trafficType": "contextual"
          },
          {
            "xdm:step": "ranking",
            "xdm:strategyID": "ranking-strategy:7251468357c2236",
            "xdm:algorithmID": "ts",
            "xdm:trafficType": "noncontextual"
          }
        ]
      }
    },
    {
      "xdm:items": [
        {
          "xdm:id": "xcore:fallback-offer:e91ce7243fd8c2a",
          "repo:etag": "5"
        }
      ],
      "xdm:scopeDetails": {
        "xdm:id": "home-page-side-bar",
        "xdm:placement": {
          "xdm:id": "xcore:offer-placement:6111463157c2221",
          "repo:etag": "6"
        },
        "xdm:activity": {
          "xdm:id": "xcore:offer-activity:fd55d033fea4b82",
          "repo:etag": "14"
        },
        "xdm:strategies": [
          {
            "xdm:step": "eligibility",
            "xdm:strategyID": "xcore:eligibility-rule:f65212b6b3c0b01",
            "xdm:algorithmID": "pql-rule",
            "xdm:trafficType": "contextual"
          }
        ]
      }
    }
  ],
  "https://ns.adobe.com/adobecloudplatform/ims/organizationID": "0D8E32C65A8A91520A494008@AdobeOrg",
  "https://ns.adobe.com/experience/decisioning/containerID": "c75afa32-371f-4895-8f43-b853dd9fe740"
}
```

# Decision Event Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [@id](#id) | `string` | **Required** | [Time-series Schema](../../../behaviors/time-series.schema.md#id) |
| [https://ns.adobe.com/experience/decisioning/experienceID](#httpsnsadobecomexperiencedecisioningexperienceid) | `string` | Optional | [Decision Event - Proposition Details](proposition-details.schema.md#httpsnsadobecomexperiencedecisioningexperienceid) |
| [https://ns.adobe.com/experience/decisioning/propositionContentKey](#httpsnsadobecomexperiencedecisioningpropositioncontentkey) | `string` | Optional | [Decision Event - Proposition Details](proposition-details.schema.md#httpsnsadobecomexperiencedecisioningpropositioncontentkey) |
| [https://ns.adobe.com/experience/decisioning/propositionDetails](#httpsnsadobecomexperiencedecisioningpropositiondetails) | Decision Proposition Details | Optional | [Decision Event - Proposition Details](proposition-details.schema.md#httpsnsadobecomexperiencedecisioningpropositiondetails) |
| [https://ns.adobe.com/experience/decisioning/propositionID](#httpsnsadobecomexperiencedecisioningpropositionid) | `string` | **Required** | [Experience Event - Proposition Reference](proposition.schema.md#httpsnsadobecomexperiencedecisioningpropositionid) |
| [https://ns.adobe.com/experience/decisioning/propositions](#httpsnsadobecomexperiencedecisioningpropositions) | reference | Optional | Decision Event (this schema) |
| [xdm:eventType](#xdmeventtype) | `string` | Optional | [Time-series Schema](../../../behaviors/time-series.schema.md#xdmeventtype) |
| [xdm:identityMap](#xdmidentitymap) | `object` | Optional | [IdentityMap](../../../fieldgroups/shared/identitymap.schema.md#xdmidentitymap) |
| [xdm:timestamp](#xdmtimestamp) | `string` | **Required** | [Time-series Schema](../../../behaviors/time-series.schema.md#xdmtimestamp) |
| `*` | any | Additional | this schema *allows* additional properties |

## @id
### Identifier

A unique identifier for the time-series event.

`@id`
* is **required**
* type: `string`
* defined in [Time-series Schema](../../../behaviors/time-series.schema.md#id)

### @id Type


`string`
* format: `uri-reference` – URI Reference (according to [RFC3986](https://tools.ietf.org/html/rfc3986))






## https://ns.adobe.com/experience/decisioning/experienceID
### Experience Reference

Unique identifier for the proposition's content. Recipients of propositions with the same value will receive the same content experience in the targeted placements. Moreover, propositions with the same value to the same user mean that the content of the propositions has not changed. Propositions with values indicate that the decision selections are different and a different experience resulted from the decision. Note that adding a placement to the decision scope always changes the experience value.

`https://ns.adobe.com/experience/decisioning/experienceID`
* is optional
* type: `string`
* defined in [Decision Event - Proposition Details](proposition-details.schema.md#httpsnsadobecomexperiencedecisioningexperienceid)

### https://ns.adobe.com/experience/decisioning/experienceID Type


`string`






## https://ns.adobe.com/experience/decisioning/propositionContentKey
### DEPRECATED: Proposition Content Key

DEPRECATED: Digest or unique hash key (generated automatically) for the proposition content. Recipients of propositions with the same value will receive the same content selections in the targeted placements. Moreover, propositions with the same value to the same user mean that the content of the propositions has not changed. Propositions with different digests or hash values indicate that the decision selections are different. Note that adding a placement to the decision always change digest value.

`https://ns.adobe.com/experience/decisioning/propositionContentKey`
* is optional
* type: `string`
* defined in [Decision Event - Proposition Details](proposition-details.schema.md#httpsnsadobecomexperiencedecisioningpropositioncontentkey)

### https://ns.adobe.com/experience/decisioning/propositionContentKey Type


`string`






## https://ns.adobe.com/experience/decisioning/propositionDetails
### Proposition Details

Details about the results of the decision. An array providing the output of a single decision event, one proposition per activity parameter in the request.

`https://ns.adobe.com/experience/decisioning/propositionDetails`
* is optional
* type: Decision Proposition Details

* defined in [Decision Event - Proposition Details](proposition-details.schema.md#httpsnsadobecomexperiencedecisioningpropositiondetails)

### https://ns.adobe.com/experience/decisioning/propositionDetails Type


Array type: Decision Proposition Details

All items must be of the type:
* [Decision Proposition Details](proposition-detail.schema.md) – `https://ns.adobe.com/experience/decisioning/proposition-detail`








## https://ns.adobe.com/experience/decisioning/propositionID
### Proposition Identifier

A unique identifier for the proposition event referenced by another "XDM ExperienceEvent". It is the expectation that applications use this "propositionID" in every experience event that was influenced by the set of propositions. An individual profile's proposition-response history is maintained with these proposition identifiers.

`https://ns.adobe.com/experience/decisioning/propositionID`
* is **required**
* type: `string`
* defined in [Experience Event - Proposition Reference](proposition.schema.md#httpsnsadobecomexperiencedecisioningpropositionid)

### https://ns.adobe.com/experience/decisioning/propositionID Type


`string`
* format: `uri-reference` – URI Reference (according to [RFC3986](https://tools.ietf.org/html/rfc3986))






## https://ns.adobe.com/experience/decisioning/propositions
### Proposition Details

Details about the results of the decision. An array providing the output of a single decision event, one proposition per activity parameter in the request.

`https://ns.adobe.com/experience/decisioning/propositions`
* is optional
* type: reference

* defined in this schema

### https://ns.adobe.com/experience/decisioning/propositions Type


Array type: reference

All items must be of the type:
* []() – `#/definitions/proposition-details`








## xdm:eventType
### Event Type

The primary event type for this time-series record.

`xdm:eventType`
* is optional
* type: `string`
* defined in [Time-series Schema](../../../behaviors/time-series.schema.md#xdmeventtype)

### xdm:eventType Type


`string`



### xdm:eventType Known Values
| Value | Description |
|-------|-------------|
| `advertising.completes` | Advertising Completes |
| `advertising.timePlayed` | Advertising Time Played |
| `advertising.federated` | Advertising Federated |
| `advertising.clicks` | Advertising Clicks |
| `advertising.conversions` | Advertising Conversions |
| `advertising.firstQuartiles` | Advertising First Quartiles |
| `advertising.impressions` | Advertising Impressions |
| `advertising.midpoints` | Advertising Midpoints |
| `advertising.starts` | Advertising Starts |
| `advertising.thirdQuartiles` | Advertising Third Quartiles |
| `application.close` | Application Close |
| `application.launch` | Application Launch |
| `web.webpagedetails.pageViews` | Web Webpagedetails Page Views |
| `web.webinteraction.linkClicks` | Web Webinteraction Link Clicks |
| `web.formFilledOut` | Web Form Filled Out |
| `commerce.checkouts` | Commerce Checkouts |
| `commerce.productListAdds` | Commerce Product List (Cart) Adds |
| `commerce.productListOpens` | Commerce Product List (Cart) Opens |
| `commerce.productListRemovals` | Commerce Product List (Cart) Removals |
| `commerce.productListReopens` | Commerce Product List (Cart) Reopens |
| `commerce.productListViews` | Commerce Product List (Cart) Views |
| `commerce.productViews` | Commerce Product (Cart) Views |
| `commerce.purchases` | Commerce Purchases |
| `commerce.saveForLaters` | Commerce Save For Laters |
| `decisioning.propositionDisplay` | Decisioning Proposition Display |
| `decisioning.propositionInteract` | Decisioning Proposition Interact |
| `decisioning.propositionSend` | Decisioning Proposition Send |
| `decisioning.propositionDismiss` | Decisioning Proposition Dismiss |
| `decisioning.propositionTrigger` | Decisioning Proposition Trigger |
| `delivery.feedback` | Delivery Feedback |
| `message.feedback` | Message Feedback |
| `message.tracking` | Message Tracking |
| `pushTracking.applicationOpened` | Push Tracking Application Opened |
| `pushTracking.customAction` | Push Tracking Custom Action |
| `listOperation.removeFromList` | List Operation Remove From List |
| `listOperation.addToList` | List Operation Add To List |
| `leadOperation.scoreChanged` | Lead Operation Score Changed |
| `leadOperation.revenueStageChanged` | Lead Operation Revenue Stage changed |
| `leadOperation.statusInCampaignProgressionChanged` | Lead Operation Status In Campaign Progression Changed |
| `leadOperation.interestingMoment` | Lead Operation Interesting Moment |
| `leadOperation.newLead` | Lead Operation New Lead |
| `leadOperation.convertLead` | Lead Operation Convert Lead |
| `leadOperation.callWebhook` | Lead Operation Call Webhook |
| `leadOperation.changeEngagementCampaignCadence` | Change Engagement Campaign Cadence |
| `leadOperation.addToCampaign` | Lead Operation Add To Campaign |
| `leadOperation.changeCampaignStream` | Lead Operation Change Campaign Stream |
| `leadOperation.mergeLeads` | Lead Operation Merge Leads |
| `directMarketing.emailBounced` | Direct Marketing Email Bounced |
| `directMarketing.emailBouncedSoft` | Direct Marketing Email Bounced Soft |
| `directMarketing.emailDelivered` | Direct Marketing Email Delivered |
| `directMarketing.emailUnsubscribed` | Direct Marketing Email Unsubscribed |
| `directMarketing.emailOpened` | Direct Marketing Email Opened |
| `directMarketing.emailClicked` | Direct Marketing Email Clicked |
| `directMarketing.emailSent` | Direct Marketing Email Sent |
| `opportunityEvent.removeFromOpportunity` | Opportunity Event Remove From Opportunity |
| `opportunityEvent.addToOpportunity` | Opportunity Event Add To Opportunity |
| `opportunityEvent.opportunityUpdated` | Opportunity Event Opportunity Updated |
| `inappmessageTracking.dismiss` | inapp message was dimissed |
| `inappmessageTracking.display` | inapp message was displayed |
| `inappmessageTracking.interact` | inapp message was interacted with |
| `media.ping` | Media ping |
| `media.sessionStart` | Media sessionStart |
| `media.play` | Media play |
| `media.bufferStart` | Media bufferStart |
| `media.pauseStart` | Media pauseStart |
| `media.chapterStart` | Media chapterStart |
| `media.chapterSkip` | Media chapterSkip |
| `media.chapterComplete` | Media chapterComplete |
| `media.adStart` | Media adStart |
| `media.adSkip` | Media adSkip |
| `media.adComplete` | Media adComplete |
| `media.adBreakStart` | Media adBreakStart |
| `media.adBreakComplete` | Media adBreakComplete |
| `media.bitrateChange` | Media bitrateChange |
| `media.error` | Media error |
| `media.sessionComplete` | Media sessionComplete |
| `media.sessionEnd` | Media sessionEnd |
| `media.statesUpdate` | Media statesUpdate |
| `media.downloaded` | Media downloaded content |
| `location.entry` | Location entry |
| `location.exit` | Location exit |




## xdm:identityMap


`xdm:identityMap`
* is optional
* type: `object`
* defined in [IdentityMap](../../../fieldgroups/shared/identitymap.schema.md#xdmidentitymap)

### xdm:identityMap Type


`object` with following properties:


| Property | Type | Required |
|----------|------|----------|






## xdm:timestamp
### Timestamp

The time when an event or observation occurred.

`xdm:timestamp`
* is **required**
* type: `string`
* defined in [Time-series Schema](../../../behaviors/time-series.schema.md#xdmtimestamp)

### xdm:timestamp Type


`string`
* format: `date-time` – date and time (according to [RFC 3339, section 5.6](http://tools.ietf.org/html/rfc3339))






# Decision Event Definitions

| Property | Type | Group |
|----------|------|-------|
| [xdm:items](#xdmitems) | reference | `https://ns.adobe.com/experience/decisioning/decisionevent#/definitions/proposition-details` |
| [xdm:scopeDetails](#xdmscopedetails) | reference | `https://ns.adobe.com/experience/decisioning/decisionevent#/definitions/proposition-details` |

## xdm:items
### Decision Options&#39; Snapshot

Snapshot of the options that were selected by this proposition. The objects contain at least the xdm:id property value which is the identifier of an option. The intention is that either the selections or the fallback property is required.

`xdm:items`
* is optional
* type: reference
* at least `1` items in the array
* defined in this schema

### xdm:items Type


Array type: reference

All items must be of the type:
* []() – `https://ns.adobe.com/experience/decisioning/option-detail`








## xdm:scopeDetails
### Decision Scope Snapshot

A snapshot of properties from the decision scope. This is the state of the scope entity that was used in the decision requst.

`xdm:scopeDetails`
* is optional
* type: reference
* defined in this schema

### xdm:scopeDetails Type


* []() – `https://ns.adobe.com/experience/decisioning/scope-details`




