
# Adobe Analytics ExperienceEvent Schema

```
https://ns.adobe.com/xdm/destinations/adobe-analytics
```

Analytics ExperienceEvent schema used for adobe analytics solution data ingestion. Includes the core/standard ExperienceEvent as well as the required Adobe Analytics ExperienceEvent mixins.

| [Abstract](../../../abstract.md) | [Extensible](../../../extensions.md) | [Status](../../../status.md) | [Identifiable](../../../id.md) | [Custom Properties](../../../extensions.md) | [Additional Properties](../../../extensions.md) | Defined In |
|----------------------------------|--------------------------------------|------------------------------|--------------------------------|---------------------------------------------|-------------------------------------------------|------------|
| Can be instantiated | Yes | Experimental | No | Forbidden | Permitted | [destinations/solutions/analytics-experienceevent.schema.json](destinations/solutions/analytics-experienceevent.schema.json) |
## Schema Hierarchy

* Adobe Analytics ExperienceEvent `https://ns.adobe.com/xdm/destinations/adobe-analytics`
  * [Time-series Schema](../../behaviors/time-series.schema.md) `https://ns.adobe.com/xdm/data/time-series`
  * [Advertising Details](../../fieldgroups/experience-event/experienceevent-advertising.schema.md) `https://ns.adobe.com/xdm/context/experienceevent-advertising`
  * [Application Details](../../fieldgroups/experience-event/experienceevent-application.schema.md) `https://ns.adobe.com/xdm/context/experienceevent-application`
  * [Channel Details](../../fieldgroups/experience-event/experienceevent-channel.schema.md) `https://ns.adobe.com/xdm/context/experienceevent-channel`
  * [Direct Marketing Details](../../fieldgroups/experience-event/experienceevent-directmarketing.schema.md) `https://ns.adobe.com/xdm/context/experienceevent-directmarketing`
  * [Environment Details](../../fieldgroups/experience-event/experienceevent-environment-details.schema.md) `https://ns.adobe.com/xdm/context/experienceevent-environment-details`
  * [Campaign Marketing Details](../../fieldgroups/experience-event/experienceevent-marketing.schema.md) `https://ns.adobe.com/xdm/context/experienceevent-marketing`
  * [Media Interaction Details ](../../fieldgroups/experience-event/experienceevent-media.schema.md) `https://ns.adobe.com/xdm/context/experienceevent-media`
  * [Profile Stitch Details](../../fieldgroups/experience-event/experienceevent-profile-stitch.schema.md) `https://ns.adobe.com/xdm/context/experienceevent-profile-stitch`
  * [Search Details](../../fieldgroups/experience-event/experienceevent-search.schema.md) `https://ns.adobe.com/xdm/context/experienceevent-search`
  * [Segment Membership Details](../../fieldgroups/experience-event/experienceevent-segmentmembership.schema.md) `https://ns.adobe.com/xdm/context/experienceevent-segmentmembership`
  * [Technical Details](../../fieldgroups/experience-event/experienceevent-technical-details.schema.md) `https://ns.adobe.com/xdm/context/experienceevent-technical-details`
  * [Web Details](../../fieldgroups/experience-event/experienceevent-web.schema.md) `https://ns.adobe.com/xdm/context/experienceevent-web`
  * [Adobe Analytics ExperienceEvent Full Extension](../../adobe/experience/analytics/experienceevent-all.schema.md) `https://ns.adobe.com/experience/analytics/experienceevent-all`
  * [Data capture region for Experience Events](../../adobe/experience/experienceevent-edgeregion.schema.md) `https://ns.adobe.com/experience/experienceevent-edgeregion`
  * [Adobe Target ExperienceEvent Shared Extension](../../adobe/experience/target/experienceevent-shared.schema.md) `https://ns.adobe.com/experience/target/experienceevent-shared`
  * [Adobe Unified Profile Service ExperienceEvent Shared Extension](../../adobe/experience/profile/experienceevent-shared.schema.md) `https://ns.adobe.com/experience/profile/experienceevent-shared`
  * [Adobe Experience Platform Implementation Details Mixin](../../adobe/experience/implementations-ext.schema.md) `https://ns.adobe.com/experience/implementations-ext`
  * [End User ID Details](../../fieldgroups/experience-event/experienceevent-enduserids.schema.md) `https://ns.adobe.com/xdm/context/experienceevent-enduserids`
  * [Adobe Analytics ExperienceEvent Commerce Mixin](../../adobe/experience/analytics/commerce.schema.md) `https://ns.adobe.com/experience/analytics/commerce`


## Adobe Analytics ExperienceEvent Example
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
    ],
    "AVID": [
      {
        "id": "2dfb7d8e00003ba4-056de00000000085",
        "primary": false
      }
    ]
  },
  "xdm:channel": {
    "@id": "https://ns.adobe.com/xdm/channels/apns",
    "@type": "https://ns.adobe.com/xdm/channel-types/mobile"
  },
  "xdm:environment": {
    "xdm:type": "browser",
    "xdm:browserDetails": {
      "xdm:name": "Chrome",
      "xdm:version": "63.0.3239",
      "xdm:acceptLanguage": "en",
      "xdm:cookiesEnabled": true,
      "xdm:javaScriptEnabled": true,
      "xdm:javaScriptVersion": "1.8.5",
      "xdm:javaEnabled": true,
      "xdm:javaVersion": "Java SE 8",
      "xdm:viewportHeight": 900,
      "xdm:viewportWidth": 1680
    },
    "xdm:operatingSystem": "MAC OS",
    "xdm:operatingSystemVersion": "10.13",
    "xdm:connectionType": "cable"
  },
  "xdm:productListItems": [
    {
      "xdm:SKU": "1002352692",
      "xdm:lineItemId": "12345678",
      "xdm:name": "24-Watt 8-Light Chrome Integrated LED Bath Light",
      "xdm:currencyCode": "USD",
      "xdm:quantity": 1,
      "xdm:priceTotal": 159
    }
  ],
  "xdm:commerce": {
    "xdm:order": {
      "xdm:purchaseID": "a8g784hjq1mnp3",
      "xdm:purchaseOrderNumber": "123456",
      "xdm:payments": [
        {
          "xdm:transactionID": "transactid-a111",
          "xdm:paymentAmount": 59,
          "xdm:paymentType": "credit_card",
          "xdm:currencyCode": "USD"
        },
        {
          "xdm:transactionId": "transactid-a222",
          "xdm:paymentAmount": 100,
          "xdm:paymentType": "gift_card",
          "xdm:currencyCode": "USD"
        }
      ],
      "xdm:currencyCode": "USD",
      "xdm:priceTotal": 159
    },
    "xdm:purchases": {
      "xdm:value": 1
    }
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
    "xdm:webPageDetails": {
      "xdm:siteSection": "Shopping Cart",
      "xdm:server": "example.com",
      "xdm:name": "Purchase Confirmation",
      "xdm:URL": "https://www.example.com/orderConf",
      "xdm:errorPage": false,
      "xdm:homePage": false,
      "xdm:pageViews": {
        "xdm:value": 1
      }
    },
    "xdm:webReferrer": {
      "xdm:URL": "https://www.example.com/checkout",
      "xdm:referrerType": "internal"
    }
  },
  "xdm:marketing": {
    "xdm:trackingCode": "marketingcampaign111"
  },
  "https://ns.adobe.com/experience/analytics/customDimensions": {
    "xdm:eVars": {
      "xdm:eVar1": "customer"
    }
  }
}
```

# Adobe Analytics ExperienceEvent Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [@id](#id) | `string` | Optional | [Time-series Schema](../../behaviors/time-series.schema.md#id) |
| [https://ns.adobe.com/experience/analytics/customDimensions](#httpsnsadobecomexperienceanalyticscustomdimensions) | `object` | Optional | [Adobe Analytics ExperienceEvent Full Extension](../../adobe/experience/analytics/experienceevent-all.schema.md#httpsnsadobecomexperienceanalyticscustomdimensions) |
| [https://ns.adobe.com/experience/analytics/endUser](#httpsnsadobecomexperienceanalyticsenduser) | endUser.schema | Optional | [Adobe Analytics ExperienceEvent Full Extension](../../adobe/experience/analytics/experienceevent-all.schema.md#httpsnsadobecomexperienceanalyticsenduser) |
| [https://ns.adobe.com/experience/analytics/environment](#httpsnsadobecomexperienceanalyticsenvironment) | `object` | Optional | [Adobe Analytics ExperienceEvent Full Extension](../../adobe/experience/analytics/experienceevent-all.schema.md#httpsnsadobecomexperienceanalyticsenvironment) |
| [https://ns.adobe.com/experience/analytics/event101to200](#httpsnsadobecomexperienceanalyticsevent101to200) | event101to200.schema | Optional | [Adobe Analytics ExperienceEvent Full Extension](../../adobe/experience/analytics/experienceevent-all.schema.md#httpsnsadobecomexperienceanalyticsevent101to200) |
| [https://ns.adobe.com/experience/analytics/event1to100](#httpsnsadobecomexperienceanalyticsevent1to100) | event1to100.schema | Optional | [Adobe Analytics ExperienceEvent Full Extension](../../adobe/experience/analytics/experienceevent-all.schema.md#httpsnsadobecomexperienceanalyticsevent1to100) |
| [https://ns.adobe.com/experience/analytics/event201to300](#httpsnsadobecomexperienceanalyticsevent201to300) | event201to300.schema | Optional | [Adobe Analytics ExperienceEvent Full Extension](../../adobe/experience/analytics/experienceevent-all.schema.md#httpsnsadobecomexperienceanalyticsevent201to300) |
| [https://ns.adobe.com/experience/analytics/event301to400](#httpsnsadobecomexperienceanalyticsevent301to400) | event301to400.schema | Optional | [Adobe Analytics ExperienceEvent Full Extension](../../adobe/experience/analytics/experienceevent-all.schema.md#httpsnsadobecomexperienceanalyticsevent301to400) |
| [https://ns.adobe.com/experience/analytics/event401to500](#httpsnsadobecomexperienceanalyticsevent401to500) | event401to500.schema | Optional | [Adobe Analytics ExperienceEvent Full Extension](../../adobe/experience/analytics/experienceevent-all.schema.md#httpsnsadobecomexperienceanalyticsevent401to500) |
| [https://ns.adobe.com/experience/analytics/event501to600](#httpsnsadobecomexperienceanalyticsevent501to600) | event501to600.schema | Optional | [Adobe Analytics ExperienceEvent Full Extension](../../adobe/experience/analytics/experienceevent-all.schema.md#httpsnsadobecomexperienceanalyticsevent501to600) |
| [https://ns.adobe.com/experience/analytics/event601to700](#httpsnsadobecomexperienceanalyticsevent601to700) | event601to700.schema | Optional | [Adobe Analytics ExperienceEvent Full Extension](../../adobe/experience/analytics/experienceevent-all.schema.md#httpsnsadobecomexperienceanalyticsevent601to700) |
| [https://ns.adobe.com/experience/analytics/event701to800](#httpsnsadobecomexperienceanalyticsevent701to800) | event701to800.schema | Optional | [Adobe Analytics ExperienceEvent Full Extension](../../adobe/experience/analytics/experienceevent-all.schema.md#httpsnsadobecomexperienceanalyticsevent701to800) |
| [https://ns.adobe.com/experience/analytics/event801to900](#httpsnsadobecomexperienceanalyticsevent801to900) | event801to900.schema | Optional | [Adobe Analytics ExperienceEvent Full Extension](../../adobe/experience/analytics/experienceevent-all.schema.md#httpsnsadobecomexperienceanalyticsevent801to900) |
| [https://ns.adobe.com/experience/analytics/event901to1000](#httpsnsadobecomexperienceanalyticsevent901to1000) | event901to1000.schema | Optional | [Adobe Analytics ExperienceEvent Full Extension](../../adobe/experience/analytics/experienceevent-all.schema.md#httpsnsadobecomexperienceanalyticsevent901to1000) |
| [https://ns.adobe.com/experience/analytics/session](#httpsnsadobecomexperienceanalyticssession) | session.schema | Optional | [Adobe Analytics ExperienceEvent Full Extension](../../adobe/experience/analytics/experienceevent-all.schema.md#httpsnsadobecomexperienceanalyticssession) |
| [https://ns.adobe.com/experience/implementations](#httpsnsadobecomexperienceimplementations) | Adobe Experience Platform Implementation Details | Optional | [Adobe Experience Platform Implementation Details Mixin](../../adobe/experience/implementations-ext.schema.md#httpsnsadobecomexperienceimplementations) |
| [https://ns.adobe.com/experience/profile/originDatasetID](#httpsnsadobecomexperienceprofileorigindatasetid) | `string` | Optional | [Adobe Unified Profile Service ExperienceEvent Shared Extension](../../adobe/experience/profile/experienceevent-shared.schema.md#httpsnsadobecomexperienceprofileorigindatasetid) |
| [https://ns.adobe.com/experience/target/supplementalDataID](#httpsnsadobecomexperiencetargetsupplementaldataid) | `string` | Optional | [Adobe Target ExperienceEvent Shared Extension](../../adobe/experience/target/experienceevent-shared.schema.md#httpsnsadobecomexperiencetargetsupplementaldataid) |
| [xdm:advertising](#xdmadvertising) | Advertising | Optional | [Advertising Details](../../fieldgroups/experience-event/experienceevent-advertising.schema.md#xdmadvertising) |
| [xdm:application](#xdmapplication) | Application | Optional | [Application Details](../../fieldgroups/experience-event/experienceevent-application.schema.md#xdmapplication) |
| [xdm:channel](#xdmchannel) | Experience Channel | Optional | [Channel Details](../../fieldgroups/experience-event/experienceevent-channel.schema.md#xdmchannel) |
| [xdm:commerce](#xdmcommerce) | Commerce | Optional | [Adobe Analytics ExperienceEvent Commerce Mixin](../../adobe/experience/analytics/commerce.schema.md#xdmcommerce) |
| [xdm:dataSource](#xdmdatasource) | Data Source | Optional | [Technical Details](../../fieldgroups/experience-event/experienceevent-technical-details.schema.md#xdmdatasource) |
| [xdm:device](#xdmdevice) | Device | Optional | [Environment Details](../../fieldgroups/experience-event/experienceevent-environment-details.schema.md#xdmdevice) |
| [xdm:directMarketing](#xdmdirectmarketing) | Direct marketing | Optional | [Direct Marketing Details](../../fieldgroups/experience-event/experienceevent-directmarketing.schema.md#xdmdirectmarketing) |
| [xdm:endUserIDs](#xdmenduserids) | End user IDs | Optional | [End User ID Details](../../fieldgroups/experience-event/experienceevent-enduserids.schema.md#xdmenduserids) |
| [xdm:environment](#xdmenvironment) | Environment | Optional | [Environment Details](../../fieldgroups/experience-event/experienceevent-environment-details.schema.md#xdmenvironment) |
| [xdm:eventType](#xdmeventtype) | `string` | Optional | [Time-series Schema](../../behaviors/time-series.schema.md#xdmeventtype) |
| [xdm:marketing](#xdmmarketing) | Marketing | Optional | [Campaign Marketing Details](../../fieldgroups/experience-event/experienceevent-marketing.schema.md#xdmmarketing) |
| [xdm:media](#xdmmedia) | Media information | Optional | [Media Interaction Details ](../../fieldgroups/experience-event/experienceevent-media.schema.md#xdmmedia) |
| [xdm:placeContext](#xdmplacecontext) | Place context | Optional | [Environment Details](../../fieldgroups/experience-event/experienceevent-environment-details.schema.md#xdmplacecontext) |
| [xdm:productListItems](#xdmproductlistitems) | Adobe Analytics extension to XDM Product List Item | Optional | [Adobe Analytics ExperienceEvent Commerce Mixin](../../adobe/experience/analytics/commerce.schema.md#xdmproductlistitems) |
| [xdm:profileStitch](#xdmprofilestitch) | Profile stitch | Optional | [Profile Stitch Details](../../fieldgroups/experience-event/experienceevent-profile-stitch.schema.md#xdmprofilestitch) |
| [xdm:receivedTimestamp](#xdmreceivedtimestamp) | `string` | Optional | [Technical Details](../../fieldgroups/experience-event/experienceevent-technical-details.schema.md#xdmreceivedtimestamp) |
| [xdm:search](#xdmsearch) | Search | Optional | [Search Details](../../fieldgroups/experience-event/experienceevent-search.schema.md#xdmsearch) |
| [xdm:segmentMembership](#xdmsegmentmembership) | `object` | Optional | [Segment Membership Details](../../fieldgroups/experience-event/experienceevent-segmentmembership.schema.md#xdmsegmentmembership) |
| [xdm:segmentMemberships](#xdmsegmentmemberships) | Segment membership item | Optional | [Segment Membership Details](../../fieldgroups/experience-event/experienceevent-segmentmembership.schema.md#xdmsegmentmemberships) |
| [xdm:timestamp](#xdmtimestamp) | `string` | Optional | [Time-series Schema](../../behaviors/time-series.schema.md#xdmtimestamp) |
| [xdm:userActivityRegion](#xdmuseractivityregion) | `object` | Optional | [Data capture region for Experience Events](../../adobe/experience/experienceevent-edgeregion.schema.md#xdmuseractivityregion) |
| [xdm:web](#xdmweb) | Web information | Optional | [Web Details](../../fieldgroups/experience-event/experienceevent-web.schema.md#xdmweb) |
| `*` | any | Additional | this schema *allows* additional properties |

## @id
### Identifier

A unique identifier for the time-series event.

`@id`
* is optional
* type: `string`
* defined in [Time-series Schema](../../behaviors/time-series.schema.md#id)

### @id Type


`string`
* format: `uri-reference` – URI Reference (according to [RFC3986](https://tools.ietf.org/html/rfc3986))






## https://ns.adobe.com/experience/analytics/customDimensions
### Custom Dimensions

`https://ns.adobe.com/experience/analytics/customDimensions`
* is optional
* type: `object`
* defined in [Adobe Analytics ExperienceEvent Full Extension](../../adobe/experience/analytics/experienceevent-all.schema.md#httpsnsadobecomexperienceanalyticscustomdimensions)

### https://ns.adobe.com/experience/analytics/customDimensions Type


`object` with following properties:


| Property | Type | Required |
|----------|------|----------|
| `xdm:eVars`| object | Optional |
| `xdm:hierarchies`| object | Optional |
| `xdm:listProps`| object | Optional |
| `xdm:lists`| object | Optional |
| `xdm:postalCode`| string | Optional |
| `xdm:props`| object | Optional |
| `xdm:stateProvince`| string | Optional |



#### xdm:eVars
##### eVars

undefined

`xdm:eVars`
* is optional
* type: `object`

##### xdm:eVars Type

Unknown type `object`.

```json
{
  "type": "object",
  "title": "eVars",
  "properties": {
    "xdm:eVar1": {
      "title": "eVar1",
      "type": "string",
      "description": "Custom conversion variable 1."
    },
    "xdm:eVar2": {
      "title": "eVar2",
      "type": "string",
      "description": "Custom conversion variable 2."
    },
    "xdm:eVar3": {
      "title": "eVar3",
      "type": "string",
      "description": "Custom conversion variable 3."
    },
    "xdm:eVar4": {
      "title": "eVar4",
      "type": "string",
      "description": "Custom conversion variable 4."
    },
    "xdm:eVar5": {
      "title": "eVar5",
      "type": "string",
      "description": "Custom conversion variable 5."
    },
    "xdm:eVar6": {
      "title": "eVar6",
      "type": "string",
      "description": "Custom conversion variable 6."
    },
    "xdm:eVar7": {
      "title": "eVar7",
      "type": "string",
      "description": "Custom conversion variable 7."
    },
    "xdm:eVar8": {
      "title": "eVar8",
      "type": "string",
      "description": "Custom conversion variable 8."
    },
    "xdm:eVar9": {
      "title": "eVar9",
      "type": "string",
      "description": "Custom conversion variable 9."
    },
    "xdm:eVar10": {
      "title": "eVar10",
      "type": "string",
      "description": "Custom conversion variable 10."
    },
    "xdm:eVar11": {
      "title": "eVar11",
      "type": "string",
      "description": "Custom conversion variable 11."
    },
    "xdm:eVar12": {
      "title": "eVar12",
      "type": "string",
      "description": "Custom conversion variable 12."
    },
    "xdm:eVar13": {
      "title": "eVar13",
      "type": "string",
      "description": "Custom conversion variable 13."
    },
    "xdm:eVar14": {
      "title": "eVar14",
      "type": "string",
      "description": "Custom conversion variable 14."
    },
    "xdm:eVar15": {
      "title": "eVar15",
      "type": "string",
      "description": "Custom conversion variable 15."
    },
    "xdm:eVar16": {
      "title": "eVar16",
      "type": "string",
      "description": "Custom conversion variable 16."
    },
    "xdm:eVar17": {
      "title": "eVar17",
      "type": "string",
      "description": "Custom conversion variable 17."
    },
    "xdm:eVar18": {
      "title": "eVar18",
      "type": "string",
      "description": "Custom conversion variable 18."
    },
    "xdm:eVar19": {
      "title": "eVar19",
      "type": "string",
      "description": "Custom conversion variable 19."
    },
    "xdm:eVar20": {
      "title": "eVar20",
      "type": "string",
      "description": "Custom conversion variable 20."
    },
    "xdm:eVar21": {
      "title": "eVar21",
      "type": "string",
      "description": "Custom conversion variable 21."
    },
    "xdm:eVar22": {
      "title": "eVar22",
      "type": "string",
      "description": "Custom conversion variable 22."
    },
    "xdm:eVar23": {
      "title": "eVar23",
      "type": "string",
      "description": "Custom conversion variable 23."
    },
    "xdm:eVar24": {
      "title": "eVar24",
      "type": "string",
      "description": "Custom conversion variable 24."
    },
    "xdm:eVar25": {
      "title": "eVar25",
      "type": "string",
      "description": "Custom conversion variable 25."
    },
    "xdm:eVar26": {
      "title": "eVar26",
      "type": "string",
      "description": "Custom conversion variable 26."
    },
    "xdm:eVar27": {
      "title": "eVar27",
      "type": "string",
      "description": "Custom conversion variable 27."
    },
    "xdm:eVar28": {
      "title": "eVar28",
      "type": "string",
      "description": "Custom conversion variable 28."
    },
    "xdm:eVar29": {
      "title": "eVar29",
      "type": "string",
      "description": "Custom conversion variable 29."
    },
    "xdm:eVar30": {
      "title": "eVar30",
      "type": "string",
      "description": "Custom conversion variable 30."
    },
    "xdm:eVar31": {
      "title": "eVar31",
      "type": "string",
      "description": "Custom conversion variable 31."
    },
    "xdm:eVar32": {
      "title": "eVar32",
      "type": "string",
      "description": "Custom conversion variable 32."
    },
    "xdm:eVar33": {
      "title": "eVar33",
      "type": "string",
      "description": "Custom conversion variable 33."
    },
    "xdm:eVar34": {
      "title": "eVar34",
      "type": "string",
      "description": "Custom conversion variable 34."
    },
    "xdm:eVar35": {
      "title": "eVar35",
      "type": "string",
      "description": "Custom conversion variable 35."
    },
    "xdm:eVar36": {
      "title": "eVar36",
      "type": "string",
      "description": "Custom conversion variable 36."
    },
    "xdm:eVar37": {
      "title": "eVar37",
      "type": "string",
      "description": "Custom conversion variable 37."
    },
    "xdm:eVar38": {
      "title": "eVar38",
      "type": "string",
      "description": "Custom conversion variable 38."
    },
    "xdm:eVar39": {
      "title": "eVar39",
      "type": "string",
      "description": "Custom conversion variable 39."
    },
    "xdm:eVar40": {
      "title": "eVar40",
      "type": "string",
      "description": "Custom conversion variable 40."
    },
    "xdm:eVar41": {
      "title": "eVar41",
      "type": "string",
      "description": "Custom conversion variable 41."
    },
    "xdm:eVar42": {
      "title": "eVar42",
      "type": "string",
      "description": "Custom conversion variable 42."
    },
    "xdm:eVar43": {
      "title": "eVar43",
      "type": "string",
      "description": "Custom conversion variable 43."
    },
    "xdm:eVar44": {
      "title": "eVar44",
      "type": "string",
      "description": "Custom conversion variable 44."
    },
    "xdm:eVar45": {
      "title": "eVar45",
      "type": "string",
      "description": "Custom conversion variable 45."
    },
    "xdm:eVar46": {
      "title": "eVar46",
      "type": "string",
      "description": "Custom conversion variable 46."
    },
    "xdm:eVar47": {
      "title": "eVar47",
      "type": "string",
      "description": "Custom conversion variable 47."
    },
    "xdm:eVar48": {
      "title": "eVar48",
      "type": "string",
      "description": "Custom conversion variable 48."
    },
    "xdm:eVar49": {
      "title": "eVar49",
      "type": "string",
      "description": "Custom conversion variable 49."
    },
    "xdm:eVar50": {
      "title": "eVar50",
      "type": "string",
      "description": "Custom conversion variable 50."
    },
    "xdm:eVar51": {
      "title": "eVar51",
      "type": "string",
      "description": "Custom conversion variable 51."
    },
    "xdm:eVar52": {
      "title": "eVar52",
      "type": "string",
      "description": "Custom conversion variable 52."
    },
    "xdm:eVar53": {
      "title": "eVar53",
      "type": "string",
      "description": "Custom conversion variable 53."
    },
    "xdm:eVar54": {
      "title": "eVar54",
      "type": "string",
      "description": "Custom conversion variable 54."
    },
    "xdm:eVar55": {
      "title": "eVar55",
      "type": "string",
      "description": "Custom conversion variable 55."
    },
    "xdm:eVar56": {
      "title": "eVar56",
      "type": "string",
      "description": "Custom conversion variable 56."
    },
    "xdm:eVar57": {
      "title": "eVar57",
      "type": "string",
      "description": "Custom conversion variable 57."
    },
    "xdm:eVar58": {
      "title": "eVar58",
      "type": "string",
      "description": "Custom conversion variable 58."
    },
    "xdm:eVar59": {
      "title": "eVar59",
      "type": "string",
      "description": "Custom conversion variable 59."
    },
    "xdm:eVar60": {
      "title": "eVar60",
      "type": "string",
      "description": "Custom conversion variable 60."
    },
    "xdm:eVar61": {
      "title": "eVar61",
      "type": "string",
      "description": "Custom conversion variable 61."
    },
    "xdm:eVar62": {
      "title": "eVar62",
      "type": "string",
      "description": "Custom conversion variable 62."
    },
    "xdm:eVar63": {
      "title": "eVar63",
      "type": "string",
      "description": "Custom conversion variable 63."
    },
    "xdm:eVar64": {
      "title": "eVar64",
      "type": "string",
      "description": "Custom conversion variable 64."
    },
    "xdm:eVar65": {
      "title": "eVar65",
      "type": "string",
      "description": "Custom conversion variable 65."
    },
    "xdm:eVar66": {
      "title": "eVar66",
      "type": "string",
      "description": "Custom conversion variable 66."
    },
    "xdm:eVar67": {
      "title": "eVar67",
      "type": "string",
      "description": "Custom conversion variable 67."
    },
    "xdm:eVar68": {
      "title": "eVar68",
      "type": "string",
      "description": "Custom conversion variable 68."
    },
    "xdm:eVar69": {
      "title": "eVar69",
      "type": "string",
      "description": "Custom conversion variable 69."
    },
    "xdm:eVar70": {
      "title": "eVar70",
      "type": "string",
      "description": "Custom conversion variable 70."
    },
    "xdm:eVar71": {
      "title": "eVar71",
      "type": "string",
      "description": "Custom conversion variable 71."
    },
    "xdm:eVar72": {
      "title": "eVar72",
      "type": "string",
      "description": "Custom conversion variable 72."
    },
    "xdm:eVar73": {
      "title": "eVar73",
      "type": "string",
      "description": "Custom conversion variable 73."
    },
    "xdm:eVar74": {
      "title": "eVar74",
      "type": "string",
      "description": "Custom conversion variable 74."
    },
    "xdm:eVar75": {
      "title": "eVar75",
      "type": "string",
      "description": "Custom conversion variable 75."
    },
    "xdm:eVar76": {
      "title": "eVar76",
      "type": "string",
      "description": "Custom conversion variable 76."
    },
    "xdm:eVar77": {
      "title": "eVar77",
      "type": "string",
      "description": "Custom conversion variable 77."
    },
    "xdm:eVar78": {
      "title": "eVar78",
      "type": "string",
      "description": "Custom conversion variable 78."
    },
    "xdm:eVar79": {
      "title": "eVar79",
      "type": "string",
      "description": "Custom conversion variable 79."
    },
    "xdm:eVar80": {
      "title": "eVar80",
      "type": "string",
      "description": "Custom conversion variable 80."
    },
    "xdm:eVar81": {
      "title": "eVar81",
      "type": "string",
      "description": "Custom conversion variable 81."
    },
    "xdm:eVar82": {
      "title": "eVar82",
      "type": "string",
      "description": "Custom conversion variable 82."
    },
    "xdm:eVar83": {
      "title": "eVar83",
      "type": "string",
      "description": "Custom conversion variable 83."
    },
    "xdm:eVar84": {
      "title": "eVar84",
      "type": "string",
      "description": "Custom conversion variable 84."
    },
    "xdm:eVar85": {
      "title": "eVar85",
      "type": "string",
      "description": "Custom conversion variable 85."
    },
    "xdm:eVar86": {
      "title": "eVar86",
      "type": "string",
      "description": "Custom conversion variable 86."
    },
    "xdm:eVar87": {
      "title": "eVar87",
      "type": "string",
      "description": "Custom conversion variable 87."
    },
    "xdm:eVar88": {
      "title": "eVar88",
      "type": "string",
      "description": "Custom conversion variable 88."
    },
    "xdm:eVar89": {
      "title": "eVar89",
      "type": "string",
      "description": "Custom conversion variable 89."
    },
    "xdm:eVar90": {
      "title": "eVar90",
      "type": "string",
      "description": "Custom conversion variable 90."
    },
    "xdm:eVar91": {
      "title": "eVar91",
      "type": "string",
      "description": "Custom conversion variable 91."
    },
    "xdm:eVar92": {
      "title": "eVar92",
      "type": "string",
      "description": "Custom conversion variable 92."
    },
    "xdm:eVar93": {
      "title": "eVar93",
      "type": "string",
      "description": "Custom conversion variable 93."
    },
    "xdm:eVar94": {
      "title": "eVar94",
      "type": "string",
      "description": "Custom conversion variable 94."
    },
    "xdm:eVar95": {
      "title": "eVar95",
      "type": "string",
      "description": "Custom conversion variable 95."
    },
    "xdm:eVar96": {
      "title": "eVar96",
      "type": "string",
      "description": "Custom conversion variable 96."
    },
    "xdm:eVar97": {
      "title": "eVar97",
      "type": "string",
      "description": "Custom conversion variable 97."
    },
    "xdm:eVar98": {
      "title": "eVar98",
      "type": "string",
      "description": "Custom conversion variable 98."
    },
    "xdm:eVar99": {
      "title": "eVar99",
      "type": "string",
      "description": "Custom conversion variable 99."
    },
    "xdm:eVar100": {
      "title": "eVar100",
      "type": "string",
      "description": "Custom conversion variable 100."
    },
    "xdm:eVar101": {
      "title": "eVar101",
      "type": "string",
      "description": "Custom conversion variable 101."
    },
    "xdm:eVar102": {
      "title": "eVar102",
      "type": "string",
      "description": "Custom conversion variable 102."
    },
    "xdm:eVar103": {
      "title": "eVar103",
      "type": "string",
      "description": "Custom conversion variable 103."
    },
    "xdm:eVar104": {
      "title": "eVar104",
      "type": "string",
      "description": "Custom conversion variable 104."
    },
    "xdm:eVar105": {
      "title": "eVar105",
      "type": "string",
      "description": "Custom conversion variable 105."
    },
    "xdm:eVar106": {
      "title": "eVar106",
      "type": "string",
      "description": "Custom conversion variable 106."
    },
    "xdm:eVar107": {
      "title": "eVar107",
      "type": "string",
      "description": "Custom conversion variable 107."
    },
    "xdm:eVar108": {
      "title": "eVar108",
      "type": "string",
      "description": "Custom conversion variable 108."
    },
    "xdm:eVar109": {
      "title": "eVar109",
      "type": "string",
      "description": "Custom conversion variable 109."
    },
    "xdm:eVar110": {
      "title": "eVar110",
      "type": "string",
      "description": "Custom conversion variable 110."
    },
    "xdm:eVar111": {
      "title": "eVar111",
      "type": "string",
      "description": "Custom conversion variable 111."
    },
    "xdm:eVar112": {
      "title": "eVar112",
      "type": "string",
      "description": "Custom conversion variable 112."
    },
    "xdm:eVar113": {
      "title": "eVar113",
      "type": "string",
      "description": "Custom conversion variable 113."
    },
    "xdm:eVar114": {
      "title": "eVar114",
      "type": "string",
      "description": "Custom conversion variable 114."
    },
    "xdm:eVar115": {
      "title": "eVar115",
      "type": "string",
      "description": "Custom conversion variable 115."
    },
    "xdm:eVar116": {
      "title": "eVar116",
      "type": "string",
      "description": "Custom conversion variable 116."
    },
    "xdm:eVar117": {
      "title": "eVar117",
      "type": "string",
      "description": "Custom conversion variable 117."
    },
    "xdm:eVar118": {
      "title": "eVar118",
      "type": "string",
      "description": "Custom conversion variable 118."
    },
    "xdm:eVar119": {
      "title": "eVar119",
      "type": "string",
      "description": "Custom conversion variable 119."
    },
    "xdm:eVar120": {
      "title": "eVar120",
      "type": "string",
      "description": "Custom conversion variable 120."
    },
    "xdm:eVar121": {
      "title": "eVar121",
      "type": "string",
      "description": "Custom conversion variable 121."
    },
    "xdm:eVar122": {
      "title": "eVar122",
      "type": "string",
      "description": "Custom conversion variable 122."
    },
    "xdm:eVar123": {
      "title": "eVar123",
      "type": "string",
      "description": "Custom conversion variable 123."
    },
    "xdm:eVar124": {
      "title": "eVar124",
      "type": "string",
      "description": "Custom conversion variable 124."
    },
    "xdm:eVar125": {
      "title": "eVar125",
      "type": "string",
      "description": "Custom conversion variable 125."
    },
    "xdm:eVar126": {
      "title": "eVar126",
      "type": "string",
      "description": "Custom conversion variable 126."
    },
    "xdm:eVar127": {
      "title": "eVar127",
      "type": "string",
      "description": "Custom conversion variable 127."
    },
    "xdm:eVar128": {
      "title": "eVar128",
      "type": "string",
      "description": "Custom conversion variable 128."
    },
    "xdm:eVar129": {
      "title": "eVar129",
      "type": "string",
      "description": "Custom conversion variable 129."
    },
    "xdm:eVar130": {
      "title": "eVar130",
      "type": "string",
      "description": "Custom conversion variable 130."
    },
    "xdm:eVar131": {
      "title": "eVar131",
      "type": "string",
      "description": "Custom conversion variable 131."
    },
    "xdm:eVar132": {
      "title": "eVar132",
      "type": "string",
      "description": "Custom conversion variable 132."
    },
    "xdm:eVar133": {
      "title": "eVar133",
      "type": "string",
      "description": "Custom conversion variable 133."
    },
    "xdm:eVar134": {
      "title": "eVar134",
      "type": "string",
      "description": "Custom conversion variable 134."
    },
    "xdm:eVar135": {
      "title": "eVar135",
      "type": "string",
      "description": "Custom conversion variable 135."
    },
    "xdm:eVar136": {
      "title": "eVar136",
      "type": "string",
      "description": "Custom conversion variable 136."
    },
    "xdm:eVar137": {
      "title": "eVar137",
      "type": "string",
      "description": "Custom conversion variable 137."
    },
    "xdm:eVar138": {
      "title": "eVar138",
      "type": "string",
      "description": "Custom conversion variable 138."
    },
    "xdm:eVar139": {
      "title": "eVar139",
      "type": "string",
      "description": "Custom conversion variable 139."
    },
    "xdm:eVar140": {
      "title": "eVar140",
      "type": "string",
      "description": "Custom conversion variable 140."
    },
    "xdm:eVar141": {
      "title": "eVar141",
      "type": "string",
      "description": "Custom conversion variable 141."
    },
    "xdm:eVar142": {
      "title": "eVar142",
      "type": "string",
      "description": "Custom conversion variable 142."
    },
    "xdm:eVar143": {
      "title": "eVar143",
      "type": "string",
      "description": "Custom conversion variable 143."
    },
    "xdm:eVar144": {
      "title": "eVar144",
      "type": "string",
      "description": "Custom conversion variable 144."
    },
    "xdm:eVar145": {
      "title": "eVar145",
      "type": "string",
      "description": "Custom conversion variable 145."
    },
    "xdm:eVar146": {
      "title": "eVar146",
      "type": "string",
      "description": "Custom conversion variable 146."
    },
    "xdm:eVar147": {
      "title": "eVar147",
      "type": "string",
      "description": "Custom conversion variable 147."
    },
    "xdm:eVar148": {
      "title": "eVar148",
      "type": "string",
      "description": "Custom conversion variable 148."
    },
    "xdm:eVar149": {
      "title": "eVar149",
      "type": "string",
      "description": "Custom conversion variable 149."
    },
    "xdm:eVar150": {
      "title": "eVar150",
      "type": "string",
      "description": "Custom conversion variable 150."
    },
    "xdm:eVar151": {
      "title": "eVar151",
      "type": "string",
      "description": "Custom conversion variable 151."
    },
    "xdm:eVar152": {
      "title": "eVar152",
      "type": "string",
      "description": "Custom conversion variable 152."
    },
    "xdm:eVar153": {
      "title": "eVar153",
      "type": "string",
      "description": "Custom conversion variable 153."
    },
    "xdm:eVar154": {
      "title": "eVar154",
      "type": "string",
      "description": "Custom conversion variable 154."
    },
    "xdm:eVar155": {
      "title": "eVar155",
      "type": "string",
      "description": "Custom conversion variable 155."
    },
    "xdm:eVar156": {
      "title": "eVar156",
      "type": "string",
      "description": "Custom conversion variable 156."
    },
    "xdm:eVar157": {
      "title": "eVar157",
      "type": "string",
      "description": "Custom conversion variable 157."
    },
    "xdm:eVar158": {
      "title": "eVar158",
      "type": "string",
      "description": "Custom conversion variable 158."
    },
    "xdm:eVar159": {
      "title": "eVar159",
      "type": "string",
      "description": "Custom conversion variable 159."
    },
    "xdm:eVar160": {
      "title": "eVar160",
      "type": "string",
      "description": "Custom conversion variable 160."
    },
    "xdm:eVar161": {
      "title": "eVar161",
      "type": "string",
      "description": "Custom conversion variable 161."
    },
    "xdm:eVar162": {
      "title": "eVar162",
      "type": "string",
      "description": "Custom conversion variable 162."
    },
    "xdm:eVar163": {
      "title": "eVar163",
      "type": "string",
      "description": "Custom conversion variable 163."
    },
    "xdm:eVar164": {
      "title": "eVar164",
      "type": "string",
      "description": "Custom conversion variable 164."
    },
    "xdm:eVar165": {
      "title": "eVar165",
      "type": "string",
      "description": "Custom conversion variable 165."
    },
    "xdm:eVar166": {
      "title": "eVar166",
      "type": "string",
      "description": "Custom conversion variable 166."
    },
    "xdm:eVar167": {
      "title": "eVar167",
      "type": "string",
      "description": "Custom conversion variable 167."
    },
    "xdm:eVar168": {
      "title": "eVar168",
      "type": "string",
      "description": "Custom conversion variable 168."
    },
    "xdm:eVar169": {
      "title": "eVar169",
      "type": "string",
      "description": "Custom conversion variable 169."
    },
    "xdm:eVar170": {
      "title": "eVar170",
      "type": "string",
      "description": "Custom conversion variable 170."
    },
    "xdm:eVar171": {
      "title": "eVar171",
      "type": "string",
      "description": "Custom conversion variable 171."
    },
    "xdm:eVar172": {
      "title": "eVar172",
      "type": "string",
      "description": "Custom conversion variable 172."
    },
    "xdm:eVar173": {
      "title": "eVar173",
      "type": "string",
      "description": "Custom conversion variable 173."
    },
    "xdm:eVar174": {
      "title": "eVar174",
      "type": "string",
      "description": "Custom conversion variable 174."
    },
    "xdm:eVar175": {
      "title": "eVar175",
      "type": "string",
      "description": "Custom conversion variable 175."
    },
    "xdm:eVar176": {
      "title": "eVar176",
      "type": "string",
      "description": "Custom conversion variable 176."
    },
    "xdm:eVar177": {
      "title": "eVar177",
      "type": "string",
      "description": "Custom conversion variable 177."
    },
    "xdm:eVar178": {
      "title": "eVar178",
      "type": "string",
      "description": "Custom conversion variable 178."
    },
    "xdm:eVar179": {
      "title": "eVar179",
      "type": "string",
      "description": "Custom conversion variable 179."
    },
    "xdm:eVar180": {
      "title": "eVar180",
      "type": "string",
      "description": "Custom conversion variable 180."
    },
    "xdm:eVar181": {
      "title": "eVar181",
      "type": "string",
      "description": "Custom conversion variable 181."
    },
    "xdm:eVar182": {
      "title": "eVar182",
      "type": "string",
      "description": "Custom conversion variable 182."
    },
    "xdm:eVar183": {
      "title": "eVar183",
      "type": "string",
      "description": "Custom conversion variable 183."
    },
    "xdm:eVar184": {
      "title": "eVar184",
      "type": "string",
      "description": "Custom conversion variable 184."
    },
    "xdm:eVar185": {
      "title": "eVar185",
      "type": "string",
      "description": "Custom conversion variable 185."
    },
    "xdm:eVar186": {
      "title": "eVar186",
      "type": "string",
      "description": "Custom conversion variable 186."
    },
    "xdm:eVar187": {
      "title": "eVar187",
      "type": "string",
      "description": "Custom conversion variable 187."
    },
    "xdm:eVar188": {
      "title": "eVar188",
      "type": "string",
      "description": "Custom conversion variable 188."
    },
    "xdm:eVar189": {
      "title": "eVar189",
      "type": "string",
      "description": "Custom conversion variable 189."
    },
    "xdm:eVar190": {
      "title": "eVar190",
      "type": "string",
      "description": "Custom conversion variable 190."
    },
    "xdm:eVar191": {
      "title": "eVar191",
      "type": "string",
      "description": "Custom conversion variable 191."
    },
    "xdm:eVar192": {
      "title": "eVar192",
      "type": "string",
      "description": "Custom conversion variable 192."
    },
    "xdm:eVar193": {
      "title": "eVar193",
      "type": "string",
      "description": "Custom conversion variable 193."
    },
    "xdm:eVar194": {
      "title": "eVar194",
      "type": "string",
      "description": "Custom conversion variable 194."
    },
    "xdm:eVar195": {
      "title": "eVar195",
      "type": "string",
      "description": "Custom conversion variable 195."
    },
    "xdm:eVar196": {
      "title": "eVar196",
      "type": "string",
      "description": "Custom conversion variable 196."
    },
    "xdm:eVar197": {
      "title": "eVar197",
      "type": "string",
      "description": "Custom conversion variable 197."
    },
    "xdm:eVar198": {
      "title": "eVar198",
      "type": "string",
      "description": "Custom conversion variable 198."
    },
    "xdm:eVar199": {
      "title": "eVar199",
      "type": "string",
      "description": "Custom conversion variable 199."
    },
    "xdm:eVar200": {
      "title": "eVar200",
      "type": "string",
      "description": "Custom conversion variable 200."
    },
    "xdm:eVar201": {
      "title": "eVar201",
      "type": "string",
      "description": "Custom conversion variable 201."
    },
    "xdm:eVar202": {
      "title": "eVar202",
      "type": "string",
      "description": "Custom conversion variable 202."
    },
    "xdm:eVar203": {
      "title": "eVar203",
      "type": "string",
      "description": "Custom conversion variable 203."
    },
    "xdm:eVar204": {
      "title": "eVar204",
      "type": "string",
      "description": "Custom conversion variable 204."
    },
    "xdm:eVar205": {
      "title": "eVar205",
      "type": "string",
      "description": "Custom conversion variable 205."
    },
    "xdm:eVar206": {
      "title": "eVar206",
      "type": "string",
      "description": "Custom conversion variable 206."
    },
    "xdm:eVar207": {
      "title": "eVar207",
      "type": "string",
      "description": "Custom conversion variable 207."
    },
    "xdm:eVar208": {
      "title": "eVar208",
      "type": "string",
      "description": "Custom conversion variable 208."
    },
    "xdm:eVar209": {
      "title": "eVar209",
      "type": "string",
      "description": "Custom conversion variable 209."
    },
    "xdm:eVar210": {
      "title": "eVar210",
      "type": "string",
      "description": "Custom conversion variable 210."
    },
    "xdm:eVar211": {
      "title": "eVar211",
      "type": "string",
      "description": "Custom conversion variable 211."
    },
    "xdm:eVar212": {
      "title": "eVar212",
      "type": "string",
      "description": "Custom conversion variable 212."
    },
    "xdm:eVar213": {
      "title": "eVar213",
      "type": "string",
      "description": "Custom conversion variable 213."
    },
    "xdm:eVar214": {
      "title": "eVar214",
      "type": "string",
      "description": "Custom conversion variable 214."
    },
    "xdm:eVar215": {
      "title": "eVar215",
      "type": "string",
      "description": "Custom conversion variable 215."
    },
    "xdm:eVar216": {
      "title": "eVar216",
      "type": "string",
      "description": "Custom conversion variable 216."
    },
    "xdm:eVar217": {
      "title": "eVar217",
      "type": "string",
      "description": "Custom conversion variable 217."
    },
    "xdm:eVar218": {
      "title": "eVar218",
      "type": "string",
      "description": "Custom conversion variable 218."
    },
    "xdm:eVar219": {
      "title": "eVar219",
      "type": "string",
      "description": "Custom conversion variable 219."
    },
    "xdm:eVar220": {
      "title": "eVar220",
      "type": "string",
      "description": "Custom conversion variable 220."
    },
    "xdm:eVar221": {
      "title": "eVar221",
      "type": "string",
      "description": "Custom conversion variable 221."
    },
    "xdm:eVar222": {
      "title": "eVar222",
      "type": "string",
      "description": "Custom conversion variable 222."
    },
    "xdm:eVar223": {
      "title": "eVar223",
      "type": "string",
      "description": "Custom conversion variable 223."
    },
    "xdm:eVar224": {
      "title": "eVar224",
      "type": "string",
      "description": "Custom conversion variable 224."
    },
    "xdm:eVar225": {
      "title": "eVar225",
      "type": "string",
      "description": "Custom conversion variable 225."
    },
    "xdm:eVar226": {
      "title": "eVar226",
      "type": "string",
      "description": "Custom conversion variable 226."
    },
    "xdm:eVar227": {
      "title": "eVar227",
      "type": "string",
      "description": "Custom conversion variable 227."
    },
    "xdm:eVar228": {
      "title": "eVar228",
      "type": "string",
      "description": "Custom conversion variable 228."
    },
    "xdm:eVar229": {
      "title": "eVar229",
      "type": "string",
      "description": "Custom conversion variable 229."
    },
    "xdm:eVar230": {
      "title": "eVar230",
      "type": "string",
      "description": "Custom conversion variable 230."
    },
    "xdm:eVar231": {
      "title": "eVar231",
      "type": "string",
      "description": "Custom conversion variable 231."
    },
    "xdm:eVar232": {
      "title": "eVar232",
      "type": "string",
      "description": "Custom conversion variable 232."
    },
    "xdm:eVar233": {
      "title": "eVar233",
      "type": "string",
      "description": "Custom conversion variable 233."
    },
    "xdm:eVar234": {
      "title": "eVar234",
      "type": "string",
      "description": "Custom conversion variable 234."
    },
    "xdm:eVar235": {
      "title": "eVar235",
      "type": "string",
      "description": "Custom conversion variable 235."
    },
    "xdm:eVar236": {
      "title": "eVar236",
      "type": "string",
      "description": "Custom conversion variable 236."
    },
    "xdm:eVar237": {
      "title": "eVar237",
      "type": "string",
      "description": "Custom conversion variable 237."
    },
    "xdm:eVar238": {
      "title": "eVar238",
      "type": "string",
      "description": "Custom conversion variable 238."
    },
    "xdm:eVar239": {
      "title": "eVar239",
      "type": "string",
      "description": "Custom conversion variable 239."
    },
    "xdm:eVar240": {
      "title": "eVar240",
      "type": "string",
      "description": "Custom conversion variable 240."
    },
    "xdm:eVar241": {
      "title": "eVar241",
      "type": "string",
      "description": "Custom conversion variable 241."
    },
    "xdm:eVar242": {
      "title": "eVar242",
      "type": "string",
      "description": "Custom conversion variable 242."
    },
    "xdm:eVar243": {
      "title": "eVar243",
      "type": "string",
      "description": "Custom conversion variable 243."
    },
    "xdm:eVar244": {
      "title": "eVar244",
      "type": "string",
      "description": "Custom conversion variable 244."
    },
    "xdm:eVar245": {
      "title": "eVar245",
      "type": "string",
      "description": "Custom conversion variable 245."
    },
    "xdm:eVar246": {
      "title": "eVar246",
      "type": "string",
      "description": "Custom conversion variable 246."
    },
    "xdm:eVar247": {
      "title": "eVar247",
      "type": "string",
      "description": "Custom conversion variable 247."
    },
    "xdm:eVar248": {
      "title": "eVar248",
      "type": "string",
      "description": "Custom conversion variable 248."
    },
    "xdm:eVar249": {
      "title": "eVar249",
      "type": "string",
      "description": "Custom conversion variable 249."
    },
    "xdm:eVar250": {
      "title": "eVar250",
      "type": "string",
      "description": "Custom conversion variable 250."
    }
  },
  "simpletype": "`object`"
}
```







#### xdm:hierarchies
##### Hierarchies

undefined

`xdm:hierarchies`
* is optional
* type: `object`

##### xdm:hierarchies Type

Unknown type `object`.

```json
{
  "type": "object",
  "title": "Hierarchies",
  "properties": {
    "xdm:hier1": {
      "title": "hier1",
      "description": "Custom hierarchy variable 1.",
      "$ref": "https://ns.adobe.com/experience/analytics/listdetails"
    },
    "xdm:hier2": {
      "title": "hier2",
      "description": "Custom hierarchy variable 2.",
      "$ref": "https://ns.adobe.com/experience/analytics/listdetails"
    },
    "xdm:hier3": {
      "title": "hier3",
      "description": "Custom hierarchy variable 3.",
      "$ref": "https://ns.adobe.com/experience/analytics/listdetails"
    },
    "xdm:hier4": {
      "title": "hier4",
      "description": "Custom hierarchy variable 4.",
      "$ref": "https://ns.adobe.com/experience/analytics/listdetails"
    },
    "xdm:hier5": {
      "title": "hier5",
      "description": "Custom hierarchy variable 5.",
      "$ref": "https://ns.adobe.com/experience/analytics/listdetails"
    }
  },
  "simpletype": "`object`"
}
```







#### xdm:listProps
##### List Props

undefined

`xdm:listProps`
* is optional
* type: `object`

##### xdm:listProps Type

Unknown type `object`.

```json
{
  "type": "object",
  "title": "List Props",
  "properties": {
    "xdm:prop1": {
      "title": "prop1",
      "description": "Custom property variable1",
      "$ref": "https://ns.adobe.com/experience/analytics/listdetails"
    },
    "xdm:prop2": {
      "title": "prop2",
      "description": "Custom property variable2",
      "$ref": "https://ns.adobe.com/experience/analytics/listdetails"
    },
    "xdm:prop3": {
      "title": "prop3",
      "description": "Custom property variable3",
      "$ref": "https://ns.adobe.com/experience/analytics/listdetails"
    },
    "xdm:prop4": {
      "title": "prop4",
      "description": "Custom property variable4",
      "$ref": "https://ns.adobe.com/experience/analytics/listdetails"
    },
    "xdm:prop5": {
      "title": "prop5",
      "description": "Custom property variable5",
      "$ref": "https://ns.adobe.com/experience/analytics/listdetails"
    },
    "xdm:prop6": {
      "title": "prop6",
      "description": "Custom property variable6",
      "$ref": "https://ns.adobe.com/experience/analytics/listdetails"
    },
    "xdm:prop7": {
      "title": "prop7",
      "description": "Custom property variable7",
      "$ref": "https://ns.adobe.com/experience/analytics/listdetails"
    },
    "xdm:prop8": {
      "title": "prop8",
      "description": "Custom property variable8",
      "$ref": "https://ns.adobe.com/experience/analytics/listdetails"
    },
    "xdm:prop9": {
      "title": "prop9",
      "description": "Custom property variable9",
      "$ref": "https://ns.adobe.com/experience/analytics/listdetails"
    },
    "xdm:prop10": {
      "title": "prop10",
      "description": "Custom property variable10",
      "$ref": "https://ns.adobe.com/experience/analytics/listdetails"
    },
    "xdm:prop11": {
      "title": "prop11",
      "description": "Custom property variable11",
      "$ref": "https://ns.adobe.com/experience/analytics/listdetails"
    },
    "xdm:prop12": {
      "title": "prop12",
      "description": "Custom property variable12",
      "$ref": "https://ns.adobe.com/experience/analytics/listdetails"
    },
    "xdm:prop13": {
      "title": "prop13",
      "description": "Custom property variable13",
      "$ref": "https://ns.adobe.com/experience/analytics/listdetails"
    },
    "xdm:prop14": {
      "title": "prop14",
      "description": "Custom property variable14",
      "$ref": "https://ns.adobe.com/experience/analytics/listdetails"
    },
    "xdm:prop15": {
      "title": "prop15",
      "description": "Custom property variable15",
      "$ref": "https://ns.adobe.com/experience/analytics/listdetails"
    },
    "xdm:prop16": {
      "title": "prop16",
      "description": "Custom property variable16",
      "$ref": "https://ns.adobe.com/experience/analytics/listdetails"
    },
    "xdm:prop17": {
      "title": "prop17",
      "description": "Custom property variable17",
      "$ref": "https://ns.adobe.com/experience/analytics/listdetails"
    },
    "xdm:prop18": {
      "title": "prop18",
      "description": "Custom property variable18",
      "$ref": "https://ns.adobe.com/experience/analytics/listdetails"
    },
    "xdm:prop19": {
      "title": "prop19",
      "description": "Custom property variable19",
      "$ref": "https://ns.adobe.com/experience/analytics/listdetails"
    },
    "xdm:prop20": {
      "title": "prop20",
      "description": "Custom property variable20",
      "$ref": "https://ns.adobe.com/experience/analytics/listdetails"
    },
    "xdm:prop21": {
      "title": "prop21",
      "description": "Custom property variable21",
      "$ref": "https://ns.adobe.com/experience/analytics/listdetails"
    },
    "xdm:prop22": {
      "title": "prop22",
      "description": "Custom property variable22",
      "$ref": "https://ns.adobe.com/experience/analytics/listdetails"
    },
    "xdm:prop23": {
      "title": "prop23",
      "description": "Custom property variable23",
      "$ref": "https://ns.adobe.com/experience/analytics/listdetails"
    },
    "xdm:prop24": {
      "title": "prop24",
      "description": "Custom property variable24",
      "$ref": "https://ns.adobe.com/experience/analytics/listdetails"
    },
    "xdm:prop25": {
      "title": "prop25",
      "description": "Custom property variable25",
      "$ref": "https://ns.adobe.com/experience/analytics/listdetails"
    },
    "xdm:prop26": {
      "title": "prop26",
      "description": "Custom property variable26",
      "$ref": "https://ns.adobe.com/experience/analytics/listdetails"
    },
    "xdm:prop27": {
      "title": "prop27",
      "description": "Custom property variable27",
      "$ref": "https://ns.adobe.com/experience/analytics/listdetails"
    },
    "xdm:prop28": {
      "title": "prop28",
      "description": "Custom property variable28",
      "$ref": "https://ns.adobe.com/experience/analytics/listdetails"
    },
    "xdm:prop29": {
      "title": "prop29",
      "description": "Custom property variable29",
      "$ref": "https://ns.adobe.com/experience/analytics/listdetails"
    },
    "xdm:prop30": {
      "title": "prop30",
      "description": "Custom property variable30",
      "$ref": "https://ns.adobe.com/experience/analytics/listdetails"
    },
    "xdm:prop31": {
      "title": "prop31",
      "description": "Custom property variable31",
      "$ref": "https://ns.adobe.com/experience/analytics/listdetails"
    },
    "xdm:prop32": {
      "title": "prop32",
      "description": "Custom property variable32",
      "$ref": "https://ns.adobe.com/experience/analytics/listdetails"
    },
    "xdm:prop33": {
      "title": "prop33",
      "description": "Custom property variable33",
      "$ref": "https://ns.adobe.com/experience/analytics/listdetails"
    },
    "xdm:prop34": {
      "title": "prop34",
      "description": "Custom property variable34",
      "$ref": "https://ns.adobe.com/experience/analytics/listdetails"
    },
    "xdm:prop35": {
      "title": "prop35",
      "description": "Custom property variable35",
      "$ref": "https://ns.adobe.com/experience/analytics/listdetails"
    },
    "xdm:prop36": {
      "title": "prop36",
      "description": "Custom property variable36",
      "$ref": "https://ns.adobe.com/experience/analytics/listdetails"
    },
    "xdm:prop37": {
      "title": "prop37",
      "description": "Custom property variable37",
      "$ref": "https://ns.adobe.com/experience/analytics/listdetails"
    },
    "xdm:prop38": {
      "title": "prop38",
      "description": "Custom property variable38",
      "$ref": "https://ns.adobe.com/experience/analytics/listdetails"
    },
    "xdm:prop39": {
      "title": "prop39",
      "description": "Custom property variable39",
      "$ref": "https://ns.adobe.com/experience/analytics/listdetails"
    },
    "xdm:prop40": {
      "title": "prop40",
      "description": "Custom property variable40",
      "$ref": "https://ns.adobe.com/experience/analytics/listdetails"
    },
    "xdm:prop41": {
      "title": "prop41",
      "description": "Custom property variable41",
      "$ref": "https://ns.adobe.com/experience/analytics/listdetails"
    },
    "xdm:prop42": {
      "title": "prop42",
      "description": "Custom property variable42",
      "$ref": "https://ns.adobe.com/experience/analytics/listdetails"
    },
    "xdm:prop43": {
      "title": "prop43",
      "description": "Custom property variable43",
      "$ref": "https://ns.adobe.com/experience/analytics/listdetails"
    },
    "xdm:prop44": {
      "title": "prop44",
      "description": "Custom property variable44",
      "$ref": "https://ns.adobe.com/experience/analytics/listdetails"
    },
    "xdm:prop45": {
      "title": "prop45",
      "description": "Custom property variable45",
      "$ref": "https://ns.adobe.com/experience/analytics/listdetails"
    },
    "xdm:prop46": {
      "title": "prop46",
      "description": "Custom property variable46",
      "$ref": "https://ns.adobe.com/experience/analytics/listdetails"
    },
    "xdm:prop47": {
      "title": "prop47",
      "description": "Custom property variable47",
      "$ref": "https://ns.adobe.com/experience/analytics/listdetails"
    },
    "xdm:prop48": {
      "title": "prop48",
      "description": "Custom property variable48",
      "$ref": "https://ns.adobe.com/experience/analytics/listdetails"
    },
    "xdm:prop49": {
      "title": "prop49",
      "description": "Custom property variable49",
      "$ref": "https://ns.adobe.com/experience/analytics/listdetails"
    },
    "xdm:prop50": {
      "title": "prop50",
      "description": "Custom property variable50",
      "$ref": "https://ns.adobe.com/experience/analytics/listdetails"
    },
    "xdm:prop51": {
      "title": "prop51",
      "description": "Custom property variable51",
      "$ref": "https://ns.adobe.com/experience/analytics/listdetails"
    },
    "xdm:prop52": {
      "title": "prop52",
      "description": "Custom property variable52",
      "$ref": "https://ns.adobe.com/experience/analytics/listdetails"
    },
    "xdm:prop53": {
      "title": "prop53",
      "description": "Custom property variable53",
      "$ref": "https://ns.adobe.com/experience/analytics/listdetails"
    },
    "xdm:prop54": {
      "title": "prop54",
      "description": "Custom property variable54",
      "$ref": "https://ns.adobe.com/experience/analytics/listdetails"
    },
    "xdm:prop55": {
      "title": "prop55",
      "description": "Custom property variable55",
      "$ref": "https://ns.adobe.com/experience/analytics/listdetails"
    },
    "xdm:prop56": {
      "title": "prop56",
      "description": "Custom property variable56",
      "$ref": "https://ns.adobe.com/experience/analytics/listdetails"
    },
    "xdm:prop57": {
      "title": "prop57",
      "description": "Custom property variable57",
      "$ref": "https://ns.adobe.com/experience/analytics/listdetails"
    },
    "xdm:prop58": {
      "title": "prop58",
      "description": "Custom property variable58",
      "$ref": "https://ns.adobe.com/experience/analytics/listdetails"
    },
    "xdm:prop59": {
      "title": "prop59",
      "description": "Custom property variable59",
      "$ref": "https://ns.adobe.com/experience/analytics/listdetails"
    },
    "xdm:prop60": {
      "title": "prop60",
      "description": "Custom property variable60",
      "$ref": "https://ns.adobe.com/experience/analytics/listdetails"
    },
    "xdm:prop61": {
      "title": "prop61",
      "description": "Custom property variable61",
      "$ref": "https://ns.adobe.com/experience/analytics/listdetails"
    },
    "xdm:prop62": {
      "title": "prop62",
      "description": "Custom property variable62",
      "$ref": "https://ns.adobe.com/experience/analytics/listdetails"
    },
    "xdm:prop63": {
      "title": "prop63",
      "description": "Custom property variable63",
      "$ref": "https://ns.adobe.com/experience/analytics/listdetails"
    },
    "xdm:prop64": {
      "title": "prop64",
      "description": "Custom property variable64",
      "$ref": "https://ns.adobe.com/experience/analytics/listdetails"
    },
    "xdm:prop65": {
      "title": "prop65",
      "description": "Custom property variable65",
      "$ref": "https://ns.adobe.com/experience/analytics/listdetails"
    },
    "xdm:prop66": {
      "title": "prop66",
      "description": "Custom property variable66",
      "$ref": "https://ns.adobe.com/experience/analytics/listdetails"
    },
    "xdm:prop67": {
      "title": "prop67",
      "description": "Custom property variable67",
      "$ref": "https://ns.adobe.com/experience/analytics/listdetails"
    },
    "xdm:prop68": {
      "title": "prop68",
      "description": "Custom property variable68",
      "$ref": "https://ns.adobe.com/experience/analytics/listdetails"
    },
    "xdm:prop69": {
      "title": "prop69",
      "description": "Custom property variable69",
      "$ref": "https://ns.adobe.com/experience/analytics/listdetails"
    },
    "xdm:prop70": {
      "title": "prop70",
      "description": "Custom property variable70",
      "$ref": "https://ns.adobe.com/experience/analytics/listdetails"
    },
    "xdm:prop71": {
      "title": "prop71",
      "description": "Custom property variable71",
      "$ref": "https://ns.adobe.com/experience/analytics/listdetails"
    },
    "xdm:prop72": {
      "title": "prop72",
      "description": "Custom property variable72",
      "$ref": "https://ns.adobe.com/experience/analytics/listdetails"
    },
    "xdm:prop73": {
      "title": "prop73",
      "description": "Custom property variable73",
      "$ref": "https://ns.adobe.com/experience/analytics/listdetails"
    },
    "xdm:prop74": {
      "title": "prop74",
      "description": "Custom property variable74",
      "$ref": "https://ns.adobe.com/experience/analytics/listdetails"
    },
    "xdm:prop75": {
      "title": "prop75",
      "description": "Custom property variable75",
      "$ref": "https://ns.adobe.com/experience/analytics/listdetails"
    }
  },
  "simpletype": "`object`"
}
```







#### xdm:lists
##### Custom List Variables

undefined

`xdm:lists`
* is optional
* type: `object`

##### xdm:lists Type

Unknown type `object`.

```json
{
  "type": "object",
  "title": "Custom List Variables",
  "properties": {
    "xdm:list1": {
      "title": "List 1",
      "description": "Custom list variable 1.",
      "$ref": "https://ns.adobe.com/experience/analytics/keyedlist"
    },
    "xdm:list2": {
      "title": "List 2",
      "description": "Custom list variable 2.",
      "$ref": "https://ns.adobe.com/experience/analytics/keyedlist"
    },
    "xdm:list3": {
      "title": "List 3",
      "description": "Custom list variable 3.",
      "$ref": "https://ns.adobe.com/experience/analytics/keyedlist"
    }
  },
  "simpletype": "`object`"
}
```







#### xdm:postalCode
##### zip

Client supplied zip code/postal code.

`xdm:postalCode`
* is optional
* type: `string`

##### xdm:postalCode Type


`string`








#### xdm:props
##### Props

undefined

`xdm:props`
* is optional
* type: `object`

##### xdm:props Type

Unknown type `object`.

```json
{
  "type": "object",
  "title": "Props",
  "properties": {
    "xdm:prop1": {
      "title": "prop1",
      "type": "string",
      "description": "Custom property variable 1."
    },
    "xdm:prop2": {
      "title": "prop2",
      "type": "string",
      "description": "Custom property variable 2."
    },
    "xdm:prop3": {
      "title": "prop3",
      "type": "string",
      "description": "Custom property variable 3."
    },
    "xdm:prop4": {
      "title": "prop4",
      "type": "string",
      "description": "Custom property variable 4."
    },
    "xdm:prop5": {
      "title": "prop5",
      "type": "string",
      "description": "Custom property variable 5."
    },
    "xdm:prop6": {
      "title": "prop6",
      "type": "string",
      "description": "Custom property variable 6."
    },
    "xdm:prop7": {
      "title": "prop7",
      "type": "string",
      "description": "Custom property variable 7."
    },
    "xdm:prop8": {
      "title": "prop8",
      "type": "string",
      "description": "Custom property variable 8."
    },
    "xdm:prop9": {
      "title": "prop9",
      "type": "string",
      "description": "Custom property variable 9."
    },
    "xdm:prop10": {
      "title": "prop10",
      "type": "string",
      "description": "Custom property variable 10."
    },
    "xdm:prop11": {
      "title": "prop11",
      "type": "string",
      "description": "Custom property variable 11."
    },
    "xdm:prop12": {
      "title": "prop12",
      "type": "string",
      "description": "Custom property variable 12."
    },
    "xdm:prop13": {
      "title": "prop13",
      "type": "string",
      "description": "Custom property variable 13."
    },
    "xdm:prop14": {
      "title": "prop14",
      "type": "string",
      "description": "Custom property variable 14."
    },
    "xdm:prop15": {
      "title": "prop15",
      "type": "string",
      "description": "Custom property variable 15."
    },
    "xdm:prop16": {
      "title": "prop16",
      "type": "string",
      "description": "Custom property variable 16."
    },
    "xdm:prop17": {
      "title": "prop17",
      "type": "string",
      "description": "Custom property variable 17."
    },
    "xdm:prop18": {
      "title": "prop18",
      "type": "string",
      "description": "Custom property variable 18."
    },
    "xdm:prop19": {
      "title": "prop19",
      "type": "string",
      "description": "Custom property variable 19."
    },
    "xdm:prop20": {
      "title": "prop20",
      "type": "string",
      "description": "Custom property variable 20."
    },
    "xdm:prop21": {
      "title": "prop21",
      "type": "string",
      "description": "Custom property variable 21."
    },
    "xdm:prop22": {
      "title": "prop22",
      "type": "string",
      "description": "Custom property variable 22."
    },
    "xdm:prop23": {
      "title": "prop23",
      "type": "string",
      "description": "Custom property variable 23."
    },
    "xdm:prop24": {
      "title": "prop24",
      "type": "string",
      "description": "Custom property variable 24."
    },
    "xdm:prop25": {
      "title": "prop25",
      "type": "string",
      "description": "Custom property variable 25."
    },
    "xdm:prop26": {
      "title": "prop26",
      "type": "string",
      "description": "Custom property variable 26."
    },
    "xdm:prop27": {
      "title": "prop27",
      "type": "string",
      "description": "Custom property variable 27."
    },
    "xdm:prop28": {
      "title": "prop28",
      "type": "string",
      "description": "Custom property variable 28."
    },
    "xdm:prop29": {
      "title": "prop29",
      "type": "string",
      "description": "Custom property variable 29."
    },
    "xdm:prop30": {
      "title": "prop30",
      "type": "string",
      "description": "Custom property variable 30."
    },
    "xdm:prop31": {
      "title": "prop31",
      "type": "string",
      "description": "Custom property variable 31."
    },
    "xdm:prop32": {
      "title": "prop32",
      "type": "string",
      "description": "Custom property variable 32."
    },
    "xdm:prop33": {
      "title": "prop33",
      "type": "string",
      "description": "Custom property variable 33."
    },
    "xdm:prop34": {
      "title": "prop34",
      "type": "string",
      "description": "Custom property variable 34."
    },
    "xdm:prop35": {
      "title": "prop35",
      "type": "string",
      "description": "Custom property variable 35."
    },
    "xdm:prop36": {
      "title": "prop36",
      "type": "string",
      "description": "Custom property variable 36."
    },
    "xdm:prop37": {
      "title": "prop37",
      "type": "string",
      "description": "Custom property variable 37."
    },
    "xdm:prop38": {
      "title": "prop38",
      "type": "string",
      "description": "Custom property variable 38."
    },
    "xdm:prop39": {
      "title": "prop39",
      "type": "string",
      "description": "Custom property variable 39."
    },
    "xdm:prop40": {
      "title": "prop40",
      "type": "string",
      "description": "Custom property variable 40."
    },
    "xdm:prop41": {
      "title": "prop41",
      "type": "string",
      "description": "Custom property variable 41."
    },
    "xdm:prop42": {
      "title": "prop42",
      "type": "string",
      "description": "Custom property variable 42."
    },
    "xdm:prop43": {
      "title": "prop43",
      "type": "string",
      "description": "Custom property variable 43."
    },
    "xdm:prop44": {
      "title": "prop44",
      "type": "string",
      "description": "Custom property variable 44."
    },
    "xdm:prop45": {
      "title": "prop45",
      "type": "string",
      "description": "Custom property variable 45."
    },
    "xdm:prop46": {
      "title": "prop46",
      "type": "string",
      "description": "Custom property variable 46."
    },
    "xdm:prop47": {
      "title": "prop47",
      "type": "string",
      "description": "Custom property variable 47."
    },
    "xdm:prop48": {
      "title": "prop48",
      "type": "string",
      "description": "Custom property variable 48."
    },
    "xdm:prop49": {
      "title": "prop49",
      "type": "string",
      "description": "Custom property variable 49."
    },
    "xdm:prop50": {
      "title": "prop50",
      "type": "string",
      "description": "Custom property variable 50."
    },
    "xdm:prop51": {
      "title": "prop51",
      "type": "string",
      "description": "Custom property variable 51."
    },
    "xdm:prop52": {
      "title": "prop52",
      "type": "string",
      "description": "Custom property variable 52."
    },
    "xdm:prop53": {
      "title": "prop53",
      "type": "string",
      "description": "Custom property variable 53."
    },
    "xdm:prop54": {
      "title": "prop54",
      "type": "string",
      "description": "Custom property variable 54."
    },
    "xdm:prop55": {
      "title": "prop55",
      "type": "string",
      "description": "Custom property variable 55."
    },
    "xdm:prop56": {
      "title": "prop56",
      "type": "string",
      "description": "Custom property variable 56."
    },
    "xdm:prop57": {
      "title": "prop57",
      "type": "string",
      "description": "Custom property variable 57."
    },
    "xdm:prop58": {
      "title": "prop58",
      "type": "string",
      "description": "Custom property variable 58."
    },
    "xdm:prop59": {
      "title": "prop59",
      "type": "string",
      "description": "Custom property variable 59."
    },
    "xdm:prop60": {
      "title": "prop60",
      "type": "string",
      "description": "Custom property variable 60."
    },
    "xdm:prop61": {
      "title": "prop61",
      "type": "string",
      "description": "Custom property variable 61."
    },
    "xdm:prop62": {
      "title": "prop62",
      "type": "string",
      "description": "Custom property variable 62."
    },
    "xdm:prop63": {
      "title": "prop63",
      "type": "string",
      "description": "Custom property variable 63."
    },
    "xdm:prop64": {
      "title": "prop64",
      "type": "string",
      "description": "Custom property variable 64."
    },
    "xdm:prop65": {
      "title": "prop65",
      "type": "string",
      "description": "Custom property variable 65."
    },
    "xdm:prop66": {
      "title": "prop66",
      "type": "string",
      "description": "Custom property variable 66."
    },
    "xdm:prop67": {
      "title": "prop67",
      "type": "string",
      "description": "Custom property variable 67."
    },
    "xdm:prop68": {
      "title": "prop68",
      "type": "string",
      "description": "Custom property variable 68."
    },
    "xdm:prop69": {
      "title": "prop69",
      "type": "string",
      "description": "Custom property variable 69."
    },
    "xdm:prop70": {
      "title": "prop70",
      "type": "string",
      "description": "Custom property variable 70."
    },
    "xdm:prop71": {
      "title": "prop71",
      "type": "string",
      "description": "Custom property variable 71."
    },
    "xdm:prop72": {
      "title": "prop72",
      "type": "string",
      "description": "Custom property variable 72."
    },
    "xdm:prop73": {
      "title": "prop73",
      "type": "string",
      "description": "Custom property variable 73."
    },
    "xdm:prop74": {
      "title": "prop74",
      "type": "string",
      "description": "Custom property variable 74."
    },
    "xdm:prop75": {
      "title": "prop75",
      "type": "string",
      "description": "Custom property variable 75."
    }
  },
  "simpletype": "`object`"
}
```







#### xdm:stateProvince
##### state

Client supplied state or province location.

`xdm:stateProvince`
* is optional
* type: `string`

##### xdm:stateProvince Type


`string`











## https://ns.adobe.com/experience/analytics/endUser
### End-User

`https://ns.adobe.com/experience/analytics/endUser`
* is optional
* type: endUser.schema
* defined in [Adobe Analytics ExperienceEvent Full Extension](../../adobe/experience/analytics/experienceevent-all.schema.md#httpsnsadobecomexperienceanalyticsenduser)

### https://ns.adobe.com/experience/analytics/endUser Type


* [endUser.schema](../../adobe/experience/analytics/endUser.schema.md) – `https://ns.adobe.com/experience/analytics/endUser`





## https://ns.adobe.com/experience/analytics/environment
### Environment

`https://ns.adobe.com/experience/analytics/environment`
* is optional
* type: `object`
* defined in [Adobe Analytics ExperienceEvent Full Extension](../../adobe/experience/analytics/experienceevent-all.schema.md#httpsnsadobecomexperienceanalyticsenvironment)

### https://ns.adobe.com/experience/analytics/environment Type


`object` with following properties:


| Property | Type | Required |
|----------|------|----------|
| `xdm:browserID`| integer | Optional |
| `xdm:browserIDStr`| string | Optional |
| `xdm:operatingSystemID`| integer | Optional |
| `xdm:operatingSystemIDStr`| string | Optional |



#### xdm:browserID
##### Browser ID

The Adobe Analytics identifier for the browser used. Deprecated, use xdm:browserIDStr instead.

`xdm:browserID`
* is optional
* type: `integer`

##### xdm:browserID Type


`integer`








#### xdm:browserIDStr
##### Browser ID

The Adobe Analytics identifier for the browser used.

`xdm:browserIDStr`
* is optional
* type: `string`

##### xdm:browserIDStr Type


`string`


All instances must conform to this regular expression 
(test examples [here](https://regexr.com/?expression=%5E%5B0-9%5D%2B)):
```regex
^[0-9]+
```








#### xdm:operatingSystemID
##### Operating System ID

The Adobe Analytics identifier of the operating system used. Deprecated, use xdm:operatingSystemIDStr instead.

`xdm:operatingSystemID`
* is optional
* type: `integer`

##### xdm:operatingSystemID Type


`integer`








#### xdm:operatingSystemIDStr
##### Operating System ID

The Adobe Analytics identifier of the operating system used.

`xdm:operatingSystemIDStr`
* is optional
* type: `string`

##### xdm:operatingSystemIDStr Type


`string`


All instances must conform to this regular expression 
(test examples [here](https://regexr.com/?expression=%5E%5B0-9%5D%2B)):
```regex
^[0-9]+
```











## https://ns.adobe.com/experience/analytics/event101to200
### Event 101 to 200

`https://ns.adobe.com/experience/analytics/event101to200`
* is optional
* type: event101to200.schema
* defined in [Adobe Analytics ExperienceEvent Full Extension](../../adobe/experience/analytics/experienceevent-all.schema.md#httpsnsadobecomexperienceanalyticsevent101to200)

### https://ns.adobe.com/experience/analytics/event101to200 Type


* [event101to200.schema](../../adobe/experience/analytics/event101to200.schema.md) – `https://ns.adobe.com/experience/analytics/event101to200`





## https://ns.adobe.com/experience/analytics/event1to100
### Event 1 to 100

`https://ns.adobe.com/experience/analytics/event1to100`
* is optional
* type: event1to100.schema
* defined in [Adobe Analytics ExperienceEvent Full Extension](../../adobe/experience/analytics/experienceevent-all.schema.md#httpsnsadobecomexperienceanalyticsevent1to100)

### https://ns.adobe.com/experience/analytics/event1to100 Type


* [event1to100.schema](../../adobe/experience/analytics/event1to100.schema.md) – `https://ns.adobe.com/experience/analytics/event1to100`





## https://ns.adobe.com/experience/analytics/event201to300
### Event 201 to 300

`https://ns.adobe.com/experience/analytics/event201to300`
* is optional
* type: event201to300.schema
* defined in [Adobe Analytics ExperienceEvent Full Extension](../../adobe/experience/analytics/experienceevent-all.schema.md#httpsnsadobecomexperienceanalyticsevent201to300)

### https://ns.adobe.com/experience/analytics/event201to300 Type


* [event201to300.schema](../../adobe/experience/analytics/event201to300.schema.md) – `https://ns.adobe.com/experience/analytics/event201to300`





## https://ns.adobe.com/experience/analytics/event301to400
### Event 301 to 400

`https://ns.adobe.com/experience/analytics/event301to400`
* is optional
* type: event301to400.schema
* defined in [Adobe Analytics ExperienceEvent Full Extension](../../adobe/experience/analytics/experienceevent-all.schema.md#httpsnsadobecomexperienceanalyticsevent301to400)

### https://ns.adobe.com/experience/analytics/event301to400 Type


* [event301to400.schema](../../adobe/experience/analytics/event301to400.schema.md) – `https://ns.adobe.com/experience/analytics/event301to400`





## https://ns.adobe.com/experience/analytics/event401to500
### Event 401 to 500

`https://ns.adobe.com/experience/analytics/event401to500`
* is optional
* type: event401to500.schema
* defined in [Adobe Analytics ExperienceEvent Full Extension](../../adobe/experience/analytics/experienceevent-all.schema.md#httpsnsadobecomexperienceanalyticsevent401to500)

### https://ns.adobe.com/experience/analytics/event401to500 Type


* [event401to500.schema](../../adobe/experience/analytics/event401to500.schema.md) – `https://ns.adobe.com/experience/analytics/event401to500`





## https://ns.adobe.com/experience/analytics/event501to600
### Event 501 to 600

`https://ns.adobe.com/experience/analytics/event501to600`
* is optional
* type: event501to600.schema
* defined in [Adobe Analytics ExperienceEvent Full Extension](../../adobe/experience/analytics/experienceevent-all.schema.md#httpsnsadobecomexperienceanalyticsevent501to600)

### https://ns.adobe.com/experience/analytics/event501to600 Type


* [event501to600.schema](../../adobe/experience/analytics/event501to600.schema.md) – `https://ns.adobe.com/experience/analytics/event501to600`





## https://ns.adobe.com/experience/analytics/event601to700
### Event 601 to 700

`https://ns.adobe.com/experience/analytics/event601to700`
* is optional
* type: event601to700.schema
* defined in [Adobe Analytics ExperienceEvent Full Extension](../../adobe/experience/analytics/experienceevent-all.schema.md#httpsnsadobecomexperienceanalyticsevent601to700)

### https://ns.adobe.com/experience/analytics/event601to700 Type


* [event601to700.schema](../../adobe/experience/analytics/event601to700.schema.md) – `https://ns.adobe.com/experience/analytics/event601to700`





## https://ns.adobe.com/experience/analytics/event701to800
### Event 701 to 800

`https://ns.adobe.com/experience/analytics/event701to800`
* is optional
* type: event701to800.schema
* defined in [Adobe Analytics ExperienceEvent Full Extension](../../adobe/experience/analytics/experienceevent-all.schema.md#httpsnsadobecomexperienceanalyticsevent701to800)

### https://ns.adobe.com/experience/analytics/event701to800 Type


* [event701to800.schema](../../adobe/experience/analytics/event701to800.schema.md) – `https://ns.adobe.com/experience/analytics/event701to800`





## https://ns.adobe.com/experience/analytics/event801to900
### Event 801 to 900

`https://ns.adobe.com/experience/analytics/event801to900`
* is optional
* type: event801to900.schema
* defined in [Adobe Analytics ExperienceEvent Full Extension](../../adobe/experience/analytics/experienceevent-all.schema.md#httpsnsadobecomexperienceanalyticsevent801to900)

### https://ns.adobe.com/experience/analytics/event801to900 Type


* [event801to900.schema](../../adobe/experience/analytics/event801to900.schema.md) – `https://ns.adobe.com/experience/analytics/event801to900`





## https://ns.adobe.com/experience/analytics/event901to1000
### Event 901 to 1000

`https://ns.adobe.com/experience/analytics/event901to1000`
* is optional
* type: event901to1000.schema
* defined in [Adobe Analytics ExperienceEvent Full Extension](../../adobe/experience/analytics/experienceevent-all.schema.md#httpsnsadobecomexperienceanalyticsevent901to1000)

### https://ns.adobe.com/experience/analytics/event901to1000 Type


* [event901to1000.schema](../../adobe/experience/analytics/event901to1000.schema.md) – `https://ns.adobe.com/experience/analytics/event901to1000`





## https://ns.adobe.com/experience/analytics/session
### Session

`https://ns.adobe.com/experience/analytics/session`
* is optional
* type: session.schema
* defined in [Adobe Analytics ExperienceEvent Full Extension](../../adobe/experience/analytics/experienceevent-all.schema.md#httpsnsadobecomexperienceanalyticssession)

### https://ns.adobe.com/experience/analytics/session Type


* [session.schema](../../adobe/experience/analytics/session.schema.md) – `https://ns.adobe.com/experience/analytics/session`





## https://ns.adobe.com/experience/implementations


`https://ns.adobe.com/experience/implementations`
* is optional
* type: Adobe Experience Platform Implementation Details
* defined in [Adobe Experience Platform Implementation Details Mixin](../../adobe/experience/implementations-ext.schema.md#httpsnsadobecomexperienceimplementations)

### https://ns.adobe.com/experience/implementations Type


* [Adobe Experience Platform Implementation Details](../../adobe/experience/implementations.schema.md) – `https://ns.adobe.com/experience/implementations`





## https://ns.adobe.com/experience/profile/originDatasetID
### Origin Dataset ID

Identity of the dataset that the Unified Profile Service ingested the data from. Usage is reserved for the Unified Profile Service.

`https://ns.adobe.com/experience/profile/originDatasetID`
* is optional
* type: `string`
* defined in [Adobe Unified Profile Service ExperienceEvent Shared Extension](../../adobe/experience/profile/experienceevent-shared.schema.md#httpsnsadobecomexperienceprofileorigindatasetid)

### https://ns.adobe.com/experience/profile/originDatasetID Type


`string`






## https://ns.adobe.com/experience/target/supplementalDataID
### Supplemental Data Identifier

Identifier used to stitch Target events with Analytics events

`https://ns.adobe.com/experience/target/supplementalDataID`
* is optional
* type: `string`
* defined in [Adobe Target ExperienceEvent Shared Extension](../../adobe/experience/target/experienceevent-shared.schema.md#httpsnsadobecomexperiencetargetsupplementaldataid)

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
* defined in [Adobe Analytics ExperienceEvent Commerce Mixin](../../adobe/experience/analytics/commerce.schema.md#xdmcommerce)

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





## xdm:eventType
### Event Type

The primary event type for this time-series record.

`xdm:eventType`
* is optional
* type: `string`
* defined in [Time-series Schema](../../behaviors/time-series.schema.md#xdmeventtype)

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
| `web.formFilledOut` | Web Form Filled Out |
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
| `listOperation.removeFromList` | List Operation Remove From List |
| `listOperation.addToList` | List Operation Add To List |
| `leadOperation.scoreChanged` | Lead Operation Score Changed |
| `leadOperation.statusInCampaignProgressionChanged` | Lead Operation Status In Campaign Progression Changed |
| `leadOperation.interestingMoment` | Lead Operation Interesting Moment |
| `leadOperation.newLead` | Lead Operation New Lead |
| `leadOperation.convertLead` | Lead Operation Convert Lead |
| `directMarketing.emailBounced` | Direct Marketing Email Bounced |
| `directMarketing.emailBouncedSoft` | Direct Marketing Email Bounced Soft |
| `directMarketing.emailDelivered` | Direct Marketing Email Delivered |
| `directMarketing.emailUnsubscribed` | Direct Marketing Email Unsubscribed |
| `directMarketing.emailOpened` | Direct Marketing Email Opened |
| `directMarketing.emailClicked` | Direct Marketing Email Clicked |
| `opportunityEvent.removeFromOpportunity` | Opportunity Event Remove From Opportunity |
| `opportunityEvent.addToOpportunity` | Opportunity Event Add To Opportunity |
| `opportunityEvent.opportunityUpdated` | Opportunity Event Opportunity Updated |




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
### Product List Items

A list of items representing a product selected by a customer with specific options and pricing that are for that usage context at a specific point of time and may differ from the product record.

`xdm:productListItems`
* is optional
* type: Adobe Analytics extension to XDM Product List Item

* defined in [Adobe Analytics ExperienceEvent Commerce Mixin](../../adobe/experience/analytics/commerce.schema.md#xdmproductlistitems)

### xdm:productListItems Type


Array type: Adobe Analytics extension to XDM Product List Item

All items must be of the type:
* [Adobe Analytics extension to XDM Product List Item](../../adobe/experience/analytics/productlistitem.schema.md) – `https://ns.adobe.com/experience/analytics/productlistitem`








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








## xdm:timestamp
### Timestamp

The time when an event or observation occurred.

`xdm:timestamp`
* is optional
* type: `string`
* defined in [Time-series Schema](../../behaviors/time-series.schema.md#xdmtimestamp)

### xdm:timestamp Type


`string`
* format: `date-time` – date and time (according to [RFC 3339, section 5.6](http://tools.ietf.org/html/rfc3339))






## xdm:userActivityRegion
### User activity region

Region info where event is captured.

`xdm:userActivityRegion`
* is optional
* type: `object`
* defined in [Data capture region for Experience Events](../../adobe/experience/experienceevent-edgeregion.schema.md#xdmuseractivityregion)

### xdm:userActivityRegion Type


`object` with following properties:


| Property | Type | Required |
|----------|------|----------|
| `xdm:captureTimestamp`| string | Optional |
| `xdm:dataCenterLocation`| string | Optional |



#### xdm:captureTimestamp
##### Data Capture Timestamp

The time when data was captured on data center node.

`xdm:captureTimestamp`
* is optional
* type: `string`

##### xdm:captureTimestamp Type


`string`
* format: `date-time` – date and time (according to [RFC 3339, section 5.6](http://tools.ietf.org/html/rfc3339))








#### xdm:dataCenterLocation
##### Location of Data Center where data was captured

undefined

`xdm:dataCenterLocation`
* is optional
* type: `string`

##### xdm:dataCenterLocation Type


`string`



##### xdm:dataCenterLocation Known Values
| Value | Description |
|-------|-------------|
| `ARE1` | ARE1 |
| `ARE2` | ARE2 |
| `AUS1` | AUS1 |
| `AUS10` | AUS10 |
| `AUS2` | AUS2 |
| `AUS3` | AUS3 |
| `AUS4` | AUS4 |
| `AUS5` | AUS5 |
| `AUS6` | AUS6 |
| `AUS7` | AUS7 |
| `AUS8` | AUS8 |
| `AUS9` | AUS9 |
| `BEL1` | BEL1 |
| `BHR1` | BHR1 |
| `BRA2` | BRA2 |
| `BRA3` | BRA3 |
| `BRA4` | BRA4 |
| `CA1` | CA1 |
| `CA10` | CA10 |
| `CA12` | CA12 |
| `CA13` | CA13 |
| `CA14` | CA14 |
| `CA3` | CA3 |
| `CA4` | CA4 |
| `CA5` | CA5 |
| `CA6` | CA6 |
| `CA7` | CA7 |
| `CAN1` | CAN1 |
| `CAN2` | CAN2 |
| `CAN4` | CAN4 |
| `CAN5` | CAN5 |
| `CAN6` | CAN6 |
| `CAN7` | CAN7 |
| `CHE1` | CHE1 |
| `CHE2` | CHE2 |
| `CHE3` | CHE3 |
| `CHN1` | CHN1 |
| `CHN2` | CHN2 |
| `CHN3` | CHN3 |
| `CHN4` | CHN4 |
| `CHN5` | CHN5 |
| `CHN6` | CHN6 |
| `DEU1` | DEU1 |
| `DEU2` | DEU2 |
| `DEU4` | DEU4 |
| `DEU5` | DEU5 |
| `DEU6` | DEU6 |
| `DEU7` | DEU7 |
| `DNK1` | DNK1 |
| `FIN1` | FIN1 |
| `FRA10` | FRA10 |
| `FRA2` | FRA2 |
| `FRA3` | FRA3 |
| `FRA4` | FRA4 |
| `FRA5` | FRA5 |
| `FRA6` | FRA6 |
| `FRA7` | FRA7 |
| `FRA8` | FRA8 |
| `FRA9` | FRA9 |
| `GBR1` | GBR1 |
| `GBR10` | GBR10 |
| `GBR11` | GBR11 |
| `GBR12` | GBR12 |
| `GBR13` | GBR13 |
| `GBR5` | GBR5 |
| `GBR7` | GBR7 |
| `GBR8` | GBR8 |
| `GBR9` | GBR9 |
| `HKG1` | HKG1 |
| `HKG2` | HKG2 |
| `HKG3` | HKG3 |
| `HKG4` | HKG4 |
| `HKG5` | HKG5 |
| `IA1` | IA1 |
| `IA2` | IA2 |
| `IA3` | IA3 |
| `IA4` | IA4 |
| `IL1` | IL1 |
| `IND1` | IND1 |
| `IND2` | IND2 |
| `IND3` | IND3 |
| `IND4` | IND4 |
| `IND5` | IND5 |
| `IND6` | IND6 |
| `IRL1` | IRL1 |
| `IRL2` | IRL2 |
| `IRL3` | IRL3 |
| `JPN2` | JPN2 |
| `JPN3` | JPN3 |
| `JPN4` | JPN4 |
| `JPN5` | JPN5 |
| `JPN6` | JPN6 |
| `JPN7` | JPN7 |
| `JPN8` | JPN8 |
| `KOR1` | KOR1 |
| `KOR2` | KOR2 |
| `KOR3` | KOR3 |
| `MA1` | MA1 |
| `MA2` | MA2 |
| `MA3` | MA3 |
| `MDA1` | MDA1 |
| `NLD1` | NLD1 |
| `NLD2` | NLD2 |
| `NLD3` | NLD3 |
| `NLD4` | NLD4 |
| `NOR1` | NOR1 |
| `NOR2` | NOR2 |
| `NY7` | NY7 |
| `OH2` | OH2 |
| `OR1` | OR1 |
| `OR2` | OR2 |
| `OR3` | OR3 |
| `OR4` | OR4 |
| `ROU1` | ROU1 |
| `SC1` | SC1 |
| `SGP2` | SGP2 |
| `SGP3` | SGP3 |
| `SGP4` | SGP4 |
| `SGP5` | SGP5 |
| `SGP6` | SGP6 |
| `SGP7` | SGP7 |
| `SWE1` | SWE1 |
| `TWN1` | TWN1 |
| `TX3` | TX3 |
| `UT1` | UT1 |
| `UT2` | UT2 |
| `VA1` | VA1 |
| `VA10` | VA10 |
| `VA11` | VA11 |
| `VA12` | VA12 |
| `VA13` | VA13 |
| `VA14` | VA14 |
| `VA5` | VA5 |
| `VA6` | VA6 |
| `VA7` | VA7 |
| `VA8` | VA8 |
| `VA9` | VA9 |
| `WA1` | WA1 |
| `WA2` | WA2 |
| `WY1` | WY1 |
| `ZAF1` | ZAF1 |
| `ZAF2` | ZAF2 |









## xdm:web
### Web

Link clicks, web page details, referrer information, and browser details.

`xdm:web`
* is optional
* type: Web information
* defined in [Web Details](../../fieldgroups/experience-event/experienceevent-web.schema.md#xdmweb)

### xdm:web Type


* [Web information](../../datatypes/webinfo.schema.md) – `https://ns.adobe.com/xdm/context/webinfo`




