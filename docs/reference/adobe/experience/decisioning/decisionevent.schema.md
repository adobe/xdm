
# XDM Decision Event Schema

```
https://ns.adobe.com/experience/decisioning/decisionevent
```

A decision event is used to capture observations about the outcome and context of a decision activity. The decision event captures information about how the decision made, when it was occurring, what options were proposed (chosen) and what contextual state existed that either influenced the decision or could be observed during the decision process. The decision event also captures the proposition ID, a globally unique identifier that can be used to correlate the decision to other events. DecisionEvents are not only relatable to Experience Events that impacted a decision but also to ExperienceEvents that are a direct response to a proposition. It is the expectation that applications reference the proposition ID in every experience event that was influenced by the propositions. A user profile's proposition-response history is maintained with these proposition IDs.

| [Abstract](../../../../abstract.md) | [Extensible](../../../../extensions.md) | [Status](../../../../status.md) | [Identifiable](../../../../id.md) | [Custom Properties](../../../../extensions.md) | [Additional Properties](../../../../extensions.md) | Defined In |
|-------------------------------------|-----------------------------------------|---------------------------------|-----------------------------------|------------------------------------------------|----------------------------------------------------|------------|
| Can be instantiated | Yes | Experimental | No | Forbidden | Permitted | [adobe/experience/decisioning/decisionevent.schema.json](adobe/experience/decisioning/decisionevent.schema.json) |
## Schema Hierarchy

* XDM Decision Event `https://ns.adobe.com/experience/decisioning/decisionevent`
  * [Extensibility base schema](../../../datatypes/extensible.schema.md) `https://ns.adobe.com/xdm/common/extensible`
  * [Time-series Schema](../../../behaviors/time-series.schema.md) `https://ns.adobe.com/xdm/data/time-series`
  * [IdentityMap](../../../mixins/shared/identitymap.schema.md) `https://ns.adobe.com/xdm/context/identitymap`
  * [Decision Proposition Reference](proposition.schema.md) `https://ns.adobe.com/experience/decisioning/proposition`
  * [Decision Event - Proposition Details](proposition-details.schema.md) `https://ns.adobe.com/experience/decisioning/proposition-details`


## XDM Decision Event Example
```json
{
  "@id": "https://data.adobe.io/entities/propositions/3cc33a7e-13ca-4b19-b25d-c816eff9a70a",
  "xdm:timestamp": "2019-01-26T15:52:25+00:00",
  "xdm:identityMap": {
    "ECID": [
      {
        "xdm:id": "https://data.adobe.io/entities/identity/49312748749132"
      }
    ]
  },
  "xdm:device": {
    "xdm:typeID": "IMac",
    "xdm:typeIDService": "https://ns.adobe.com/xdm/external/adobecampaign",
    "xdm:type": "desktop",
    "xdm:manufacturer": "Apple"
  },
  "xdm:placeContext": {
    "xdm:localTime": "2017-09-26T15:52:25+13:00",
    "xdm:geo": {
      "@id": "https://data.adobe.io/entities/geo/tokyo",
      "xdm:countryCode": "JP",
      "xdm:stateProvince": "JP-13",
      "xdm:city": "Tōkyō",
      "xdm:postalCode": "141-0032",
      "schema:latitude": 35.6185,
      "schema:longitude": 139.73237
    }
  },
  "xdm:web": {
    "xdm:webPageView": {
      "xdm:URL": "https://www.example.com"
    },
    "xdm:webReferrer": {
      "xdm:URL": "https://www.examplereferrer.com/",
      "xdm:domain": "examplereferrer.com"
    }
  },
  "https://ns.adobe.com/experience/decisioning/propositionID": "3cc33a7e-13ca-4b19-b25d-c816eff9a70a",
  "https://ns.adobe.com/experience/decisioning/propositionDetails": [
    {
      "xdm:activity": {
        "xdm:id": "xcore:offer-activity:ebc48132c26ccfc"
      },
      "xdm:selections": [
        {
          "xdm:id": "xcore:personalized-offer:e526a1503bf29e9",
          "https://ns.adobe.com/experience/decisioning/propositionsTotal": {
            "xdm:value": 948
          },
          "https://ns.adobe.com/experience/decisioning/propositionsProfile": {
            "xdm:value": 2
          }
        }
      ]
    },
    {
      "xdm:activity": {
        "xdm:id": "xcore:offer-activity:f203512e02542b5"
      },
      "xdm:fallback": {
        "xdm:id": "xcore:fallback-offer:e91ce7243fd8c2a"
      }
    }
  ],
  "https://ns.adobe.com/adobecloudplatform/ims/organizationID": "0D8E32C65A8A91520A494008@AdobeOrg",
  "https://ns.adobe.com/experience/decisioning/containerID": "c75afa32-371f-4895-8f43-b853dd9fe740"
}
```

# XDM Decision Event Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [@id](#id) | `string` | **Required** | [Time-series Schema](../../../behaviors/time-series.schema.md#id) |
| [https://ns.adobe.com/experience/decisioning/experienceID](#httpsnsadobecomexperiencedecisioningexperienceid) | `string` | Optional | [Decision Event - Proposition Details](proposition-details.schema.md#httpsnsadobecomexperiencedecisioningexperienceid) |
| [https://ns.adobe.com/experience/decisioning/propositionContentKey](#httpsnsadobecomexperiencedecisioningpropositioncontentkey) | `string` | Optional | [Decision Event - Proposition Details](proposition-details.schema.md#httpsnsadobecomexperiencedecisioningpropositioncontentkey) |
| [https://ns.adobe.com/experience/decisioning/propositionDetails](#httpsnsadobecomexperiencedecisioningpropositiondetails) | Decision Proposition Detail | Optional | [Decision Event - Proposition Details](proposition-details.schema.md#httpsnsadobecomexperiencedecisioningpropositiondetails) |
| [https://ns.adobe.com/experience/decisioning/propositionID](#httpsnsadobecomexperiencedecisioningpropositionid) | `string` | **Required** | [Decision Proposition Reference](proposition.schema.md#httpsnsadobecomexperiencedecisioningpropositionid) |
| [xdm:eventType](#xdmeventtype) | `string` | Optional | [Time-series Schema](../../../behaviors/time-series.schema.md#xdmeventtype) |
| [xdm:identityMap](#xdmidentitymap) | `object` | Optional | [IdentityMap](../../../mixins/shared/identitymap.schema.md#xdmidentitymap) |
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
* type: Decision Proposition Detail

* defined in [Decision Event - Proposition Details](proposition-details.schema.md#httpsnsadobecomexperiencedecisioningpropositiondetails)

### https://ns.adobe.com/experience/decisioning/propositionDetails Type


Array type: Decision Proposition Detail

All items must be of the type:
* [Decision Proposition Detail](proposition-detail.schema.md) – `https://ns.adobe.com/experience/decisioning/proposition-detail`








## https://ns.adobe.com/experience/decisioning/propositionID
### Proposition Identifier

A unique identifier for the proposition event referenced by an "XDM ExperienceEvent". It is the expectation that applications use this "propositionID" in every experience event that was influenced by the set of propositions. An individual profile's proposition-response history is maintained with these proposition identifiers.

`https://ns.adobe.com/experience/decisioning/propositionID`
* is **required**
* type: `string`
* defined in [Decision Proposition Reference](proposition.schema.md#httpsnsadobecomexperiencedecisioningpropositionid)

### https://ns.adobe.com/experience/decisioning/propositionID Type


`string`
* format: `uri-reference` – URI Reference (according to [RFC3986](https://tools.ietf.org/html/rfc3986))






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
| `web.webpagedetails.pageViews` | Web Webpagedetails Page Views |
| `web.webinteraction.linkClicks` | Web Webinteraction Link Clicks |
| `commerce.checkouts` | Commerce Checkouts |
| `commerce.productListAdds` | Commerce Product List Adds |
| `commerce.productListOpens` | Commerce Product List Opens |
| `commerce.productListRemovals` | Commerce Product List Removals |
| `commerce.productListReopens` | Commerce Product List Reopens |
| `commerce.productListViews` | Commerce Product List Views |
| `commerce.productViews` | Commerce Product Views |
| `commerce.purchases` | Commerce Purchases |
| `commerce.saveForLaters` | Commerce Save For Laters |
| `delivery.feedback` | Delivery Feedback |
| `message.feedback` | Message Feedback |
| `message.tracking` | Message Tracking |
| `pushTracking.applicationOpened` | Push Tracking Application Opened |
| `pushTracking.customAction` | Push Tracking Custom Action |
| `listOpearation.removeFromList` | List Operation Remove From List |




## xdm:identityMap


`xdm:identityMap`
* is optional
* type: `object`
* defined in [IdentityMap](../../../mixins/shared/identitymap.schema.md#xdmidentitymap)

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





