
# Adobe Analytics ExperienceEvent Template Schema

```
https://ns.adobe.com/experience/analytics-experienceevent
```

Analytics ExperienceEvent field group for use with schemas for Solution data ingestion. Includes the core/standard ExperienceEvent as well as the required Adobe Analytics ExperienceEvent field groups.

| [Abstract](../../../abstract.md) | [Extensible](../../../extensions.md) | [Status](../../../status.md) | [Identifiable](../../../id.md) | [Custom Properties](../../../extensions.md) | [Additional Properties](../../../extensions.md) | Defined In |
|----------------------------------|--------------------------------------|------------------------------|--------------------------------|---------------------------------------------|-------------------------------------------------|------------|
| Can be instantiated | Yes | Stable | No | Forbidden | Permitted | [adobe/experience/analytics-experienceevent.schema.json](adobe/experience/analytics-experienceevent.schema.json) |
## Schema Hierarchy

* Adobe Analytics ExperienceEvent Template `https://ns.adobe.com/experience/analytics-experienceevent`
  * [Extensibility base schema](../../datatypes/extensible.schema.md) `https://ns.adobe.com/xdm/common/extensible`
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
  * [Adobe Analytics ExperienceEvent Full Extension](analytics/experienceevent-all.schema.md) `https://ns.adobe.com/experience/analytics/experienceevent-all`
  * [Data capture region for Experience Events](experienceevent-edgeregion.schema.md) `https://ns.adobe.com/experience/experienceevent-edgeregion`
  * [Adobe Target ExperienceEvent Shared Extension](target/experienceevent-shared.schema.md) `https://ns.adobe.com/experience/target/experienceevent-shared`
  * [Adobe Unified Profile Service ExperienceEvent Shared Extension](profile/experienceevent-shared.schema.md) `https://ns.adobe.com/experience/profile/experienceevent-shared`
  * [Adobe Experience Platform Implementation Details](implementations-ext.schema.md) `https://ns.adobe.com/experience/implementations-ext`
  * [End User ID Details](../../fieldgroups/experience-event/experienceevent-enduserids.schema.md) `https://ns.adobe.com/xdm/context/experienceevent-enduserids`
  * [Adobe Analytics ExperienceEvent Commerce](analytics/commerce.schema.md) `https://ns.adobe.com/experience/analytics/commerce`
  * [Experience Event - Proposition Interactions](decisioning/experienceevent-proposition-interaction.schema.md) `https://ns.adobe.com/experience/decisioning/proposition-interaction`


# Adobe Analytics ExperienceEvent Template Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [https://ns.adobe.com/experience/analytics/customDimensions](#httpsnsadobecomexperienceanalyticscustomdimensions) | `object` | Optional | [Adobe Analytics ExperienceEvent Full Extension](analytics/experienceevent-all.schema.md#httpsnsadobecomexperienceanalyticscustomdimensions) |
| [https://ns.adobe.com/experience/analytics/endUser](#httpsnsadobecomexperienceanalyticsenduser) | endUser.schema | Optional | [Adobe Analytics ExperienceEvent Full Extension](analytics/experienceevent-all.schema.md#httpsnsadobecomexperienceanalyticsenduser) |
| [https://ns.adobe.com/experience/analytics/environment](#httpsnsadobecomexperienceanalyticsenvironment) | `object` | Optional | [Adobe Analytics ExperienceEvent Full Extension](analytics/experienceevent-all.schema.md#httpsnsadobecomexperienceanalyticsenvironment) |
| [https://ns.adobe.com/experience/analytics/event101to200](#httpsnsadobecomexperienceanalyticsevent101to200) | event101to200.schema | Optional | [Adobe Analytics ExperienceEvent Full Extension](analytics/experienceevent-all.schema.md#httpsnsadobecomexperienceanalyticsevent101to200) |
| [https://ns.adobe.com/experience/analytics/event1to100](#httpsnsadobecomexperienceanalyticsevent1to100) | event1to100.schema | Optional | [Adobe Analytics ExperienceEvent Full Extension](analytics/experienceevent-all.schema.md#httpsnsadobecomexperienceanalyticsevent1to100) |
| [https://ns.adobe.com/experience/analytics/event201to300](#httpsnsadobecomexperienceanalyticsevent201to300) | event201to300.schema | Optional | [Adobe Analytics ExperienceEvent Full Extension](analytics/experienceevent-all.schema.md#httpsnsadobecomexperienceanalyticsevent201to300) |
| [https://ns.adobe.com/experience/analytics/event301to400](#httpsnsadobecomexperienceanalyticsevent301to400) | event301to400.schema | Optional | [Adobe Analytics ExperienceEvent Full Extension](analytics/experienceevent-all.schema.md#httpsnsadobecomexperienceanalyticsevent301to400) |
| [https://ns.adobe.com/experience/analytics/event401to500](#httpsnsadobecomexperienceanalyticsevent401to500) | event401to500.schema | Optional | [Adobe Analytics ExperienceEvent Full Extension](analytics/experienceevent-all.schema.md#httpsnsadobecomexperienceanalyticsevent401to500) |
| [https://ns.adobe.com/experience/analytics/event501to600](#httpsnsadobecomexperienceanalyticsevent501to600) | event501to600.schema | Optional | [Adobe Analytics ExperienceEvent Full Extension](analytics/experienceevent-all.schema.md#httpsnsadobecomexperienceanalyticsevent501to600) |
| [https://ns.adobe.com/experience/analytics/event601to700](#httpsnsadobecomexperienceanalyticsevent601to700) | event601to700.schema | Optional | [Adobe Analytics ExperienceEvent Full Extension](analytics/experienceevent-all.schema.md#httpsnsadobecomexperienceanalyticsevent601to700) |
| [https://ns.adobe.com/experience/analytics/event701to800](#httpsnsadobecomexperienceanalyticsevent701to800) | event701to800.schema | Optional | [Adobe Analytics ExperienceEvent Full Extension](analytics/experienceevent-all.schema.md#httpsnsadobecomexperienceanalyticsevent701to800) |
| [https://ns.adobe.com/experience/analytics/event801to900](#httpsnsadobecomexperienceanalyticsevent801to900) | event801to900.schema | Optional | [Adobe Analytics ExperienceEvent Full Extension](analytics/experienceevent-all.schema.md#httpsnsadobecomexperienceanalyticsevent801to900) |
| [https://ns.adobe.com/experience/analytics/event901to1000](#httpsnsadobecomexperienceanalyticsevent901to1000) | event901to1000.schema | Optional | [Adobe Analytics ExperienceEvent Full Extension](analytics/experienceevent-all.schema.md#httpsnsadobecomexperienceanalyticsevent901to1000) |
| [https://ns.adobe.com/experience/analytics/session](#httpsnsadobecomexperienceanalyticssession) | session.schema | Optional | [Adobe Analytics ExperienceEvent Full Extension](analytics/experienceevent-all.schema.md#httpsnsadobecomexperienceanalyticssession) |
| [https://ns.adobe.com/experience/decisioning/propositions](#httpsnsadobecomexperiencedecisioningpropositions) | Proposition Interaction Details | Optional | [Experience Event - Proposition Interactions](decisioning/experienceevent-proposition-interaction.schema.md#httpsnsadobecomexperiencedecisioningpropositions) |
| [https://ns.adobe.com/experience/implementations](#httpsnsadobecomexperienceimplementations) | Adobe Experience Platform Implementation Details | Optional | [Adobe Experience Platform Implementation Details](implementations-ext.schema.md#httpsnsadobecomexperienceimplementations) |
| [https://ns.adobe.com/experience/profile/originDatasetID](#httpsnsadobecomexperienceprofileorigindatasetid) | `string` | Optional | [Adobe Unified Profile Service ExperienceEvent Shared Extension](profile/experienceevent-shared.schema.md#httpsnsadobecomexperienceprofileorigindatasetid) |
| [https://ns.adobe.com/experience/target/supplementalDataID](#httpsnsadobecomexperiencetargetsupplementaldataid) | `string` | Optional | [Adobe Target ExperienceEvent Shared Extension](target/experienceevent-shared.schema.md#httpsnsadobecomexperiencetargetsupplementaldataid) |
| [xdm:advertising](#xdmadvertising) | Advertising | Optional | [Advertising Details](../../fieldgroups/experience-event/experienceevent-advertising.schema.md#xdmadvertising) |
| [xdm:application](#xdmapplication) | Application | Optional | [Application Details](../../fieldgroups/experience-event/experienceevent-application.schema.md#xdmapplication) |
| [xdm:channel](#xdmchannel) | Experience Channel | Optional | [Channel Details](../../fieldgroups/experience-event/experienceevent-channel.schema.md#xdmchannel) |
| [xdm:commerce](#xdmcommerce) | Commerce | Optional | [Adobe Analytics ExperienceEvent Commerce](analytics/commerce.schema.md#xdmcommerce) |
| [xdm:dataSource](#xdmdatasource) | Data Source | Optional | [Technical Details](../../fieldgroups/experience-event/experienceevent-technical-details.schema.md#xdmdatasource) |
| [xdm:device](#xdmdevice) | Device | Optional | [Environment Details](../../fieldgroups/experience-event/experienceevent-environment-details.schema.md#xdmdevice) |
| [xdm:directMarketing](#xdmdirectmarketing) | Direct marketing | Optional | [Direct Marketing Details](../../fieldgroups/experience-event/experienceevent-directmarketing.schema.md#xdmdirectmarketing) |
| [xdm:endUserIDs](#xdmenduserids) | End user IDs | Optional | [End User ID Details](../../fieldgroups/experience-event/experienceevent-enduserids.schema.md#xdmenduserids) |
| [xdm:environment](#xdmenvironment) | Environment | Optional | [Environment Details](../../fieldgroups/experience-event/experienceevent-environment-details.schema.md#xdmenvironment) |
| [xdm:marketing](#xdmmarketing) | Marketing | Optional | [Campaign Marketing Details](../../fieldgroups/experience-event/experienceevent-marketing.schema.md#xdmmarketing) |
| [xdm:media](#xdmmedia) | Media information | Optional | [Media Interaction Details ](../../fieldgroups/experience-event/experienceevent-media.schema.md#xdmmedia) |
| [xdm:placeContext](#xdmplacecontext) | Place context | Optional | [Environment Details](../../fieldgroups/experience-event/experienceevent-environment-details.schema.md#xdmplacecontext) |
| [xdm:productListItems](#xdmproductlistitems) | Adobe Analytics extension to XDM Product List Item | Optional | [Adobe Analytics ExperienceEvent Commerce](analytics/commerce.schema.md#xdmproductlistitems) |
| [xdm:profileStitch](#xdmprofilestitch) | Profile stitch | Optional | [Profile Stitch Details](../../fieldgroups/experience-event/experienceevent-profile-stitch.schema.md#xdmprofilestitch) |
| [xdm:receivedTimestamp](#xdmreceivedtimestamp) | `string` | Optional | [Technical Details](../../fieldgroups/experience-event/experienceevent-technical-details.schema.md#xdmreceivedtimestamp) |
| [xdm:search](#xdmsearch) | Search | Optional | [Search Details](../../fieldgroups/experience-event/experienceevent-search.schema.md#xdmsearch) |
| [xdm:segmentMembership](#xdmsegmentmembership) | `object` | Optional | [Segment Membership Details](../../fieldgroups/experience-event/experienceevent-segmentmembership.schema.md#xdmsegmentmembership) |
| [xdm:segmentMemberships](#xdmsegmentmemberships) | Segment membership item | Optional | [Segment Membership Details](../../fieldgroups/experience-event/experienceevent-segmentmembership.schema.md#xdmsegmentmemberships) |
| [xdm:userActivityRegion](#xdmuseractivityregion) | `object` | Optional | [Data capture region for Experience Events](experienceevent-edgeregion.schema.md#xdmuseractivityregion) |
| [xdm:web](#xdmweb) | Web information | Optional | [Web Details](../../fieldgroups/experience-event/experienceevent-web.schema.md#xdmweb) |
| `*` | any | Additional | this schema *allows* additional properties |

## https://ns.adobe.com/experience/analytics/customDimensions
### Custom Dimensions

`https://ns.adobe.com/experience/analytics/customDimensions`
* is optional
* type: `object`
* defined in [Adobe Analytics ExperienceEvent Full Extension](analytics/experienceevent-all.schema.md#httpsnsadobecomexperienceanalyticscustomdimensions)

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
      "description": "Custom conversion variable 1.",
      "meta:titleId": "experienceevent-all##xdm:eVar1##title##46191",
      "meta:descriptionId": "experienceevent-all##xdm:eVar1##description##4841"
    },
    "xdm:eVar2": {
      "title": "eVar2",
      "type": "string",
      "description": "Custom conversion variable 2.",
      "meta:titleId": "experienceevent-all##xdm:eVar2##title##86441",
      "meta:descriptionId": "experienceevent-all##xdm:eVar2##description##14381"
    },
    "xdm:eVar3": {
      "title": "eVar3",
      "type": "string",
      "description": "Custom conversion variable 3.",
      "meta:titleId": "experienceevent-all##xdm:eVar3##title##12951",
      "meta:descriptionId": "experienceevent-all##xdm:eVar3##description##98961"
    },
    "xdm:eVar4": {
      "title": "eVar4",
      "type": "string",
      "description": "Custom conversion variable 4.",
      "meta:titleId": "experienceevent-all##xdm:eVar4##title##39821",
      "meta:descriptionId": "experienceevent-all##xdm:eVar4##description##47061"
    },
    "xdm:eVar5": {
      "title": "eVar5",
      "type": "string",
      "description": "Custom conversion variable 5.",
      "meta:titleId": "experienceevent-all##xdm:eVar5##title##10461",
      "meta:descriptionId": "experienceevent-all##xdm:eVar5##description##301"
    },
    "xdm:eVar6": {
      "title": "eVar6",
      "type": "string",
      "description": "Custom conversion variable 6.",
      "meta:titleId": "experienceevent-all##xdm:eVar6##title##29791",
      "meta:descriptionId": "experienceevent-all##xdm:eVar6##description##89531"
    },
    "xdm:eVar7": {
      "title": "eVar7",
      "type": "string",
      "description": "Custom conversion variable 7.",
      "meta:titleId": "experienceevent-all##xdm:eVar7##title##36231",
      "meta:descriptionId": "experienceevent-all##xdm:eVar7##description##38521"
    },
    "xdm:eVar8": {
      "title": "eVar8",
      "type": "string",
      "description": "Custom conversion variable 8.",
      "meta:titleId": "experienceevent-all##xdm:eVar8##title##79031",
      "meta:descriptionId": "experienceevent-all##xdm:eVar8##description##87161"
    },
    "xdm:eVar9": {
      "title": "eVar9",
      "type": "string",
      "description": "Custom conversion variable 9.",
      "meta:titleId": "experienceevent-all##xdm:eVar9##title##69821",
      "meta:descriptionId": "experienceevent-all##xdm:eVar9##description##16111"
    },
    "xdm:eVar10": {
      "title": "eVar10",
      "type": "string",
      "description": "Custom conversion variable 10.",
      "meta:titleId": "experienceevent-all##xdm:eVar10##title##5691",
      "meta:descriptionId": "experienceevent-all##xdm:eVar10##description##79941"
    },
    "xdm:eVar11": {
      "title": "eVar11",
      "type": "string",
      "description": "Custom conversion variable 11.",
      "meta:titleId": "experienceevent-all##xdm:eVar11##title##88001",
      "meta:descriptionId": "experienceevent-all##xdm:eVar11##description##60701"
    },
    "xdm:eVar12": {
      "title": "eVar12",
      "type": "string",
      "description": "Custom conversion variable 12.",
      "meta:titleId": "experienceevent-all##xdm:eVar12##title##67071",
      "meta:descriptionId": "experienceevent-all##xdm:eVar12##description##53731"
    },
    "xdm:eVar13": {
      "title": "eVar13",
      "type": "string",
      "description": "Custom conversion variable 13.",
      "meta:titleId": "experienceevent-all##xdm:eVar13##title##43991",
      "meta:descriptionId": "experienceevent-all##xdm:eVar13##description##74481"
    },
    "xdm:eVar14": {
      "title": "eVar14",
      "type": "string",
      "description": "Custom conversion variable 14.",
      "meta:titleId": "experienceevent-all##xdm:eVar14##title##77521",
      "meta:descriptionId": "experienceevent-all##xdm:eVar14##description##50251"
    },
    "xdm:eVar15": {
      "title": "eVar15",
      "type": "string",
      "description": "Custom conversion variable 15.",
      "meta:titleId": "experienceevent-all##xdm:eVar15##title##82651",
      "meta:descriptionId": "experienceevent-all##xdm:eVar15##description##62341"
    },
    "xdm:eVar16": {
      "title": "eVar16",
      "type": "string",
      "description": "Custom conversion variable 16.",
      "meta:titleId": "experienceevent-all##xdm:eVar16##title##21841",
      "meta:descriptionId": "experienceevent-all##xdm:eVar16##description##42721"
    },
    "xdm:eVar17": {
      "title": "eVar17",
      "type": "string",
      "description": "Custom conversion variable 17.",
      "meta:titleId": "experienceevent-all##xdm:eVar17##title##3371",
      "meta:descriptionId": "experienceevent-all##xdm:eVar17##description##62721"
    },
    "xdm:eVar18": {
      "title": "eVar18",
      "type": "string",
      "description": "Custom conversion variable 18.",
      "meta:titleId": "experienceevent-all##xdm:eVar18##title##4531",
      "meta:descriptionId": "experienceevent-all##xdm:eVar18##description##33661"
    },
    "xdm:eVar19": {
      "title": "eVar19",
      "type": "string",
      "description": "Custom conversion variable 19.",
      "meta:titleId": "experienceevent-all##xdm:eVar19##title##49581",
      "meta:descriptionId": "experienceevent-all##xdm:eVar19##description##76461"
    },
    "xdm:eVar20": {
      "title": "eVar20",
      "type": "string",
      "description": "Custom conversion variable 20.",
      "meta:titleId": "experienceevent-all##xdm:eVar20##title##21671",
      "meta:descriptionId": "experienceevent-all##xdm:eVar20##description##15841"
    },
    "xdm:eVar21": {
      "title": "eVar21",
      "type": "string",
      "description": "Custom conversion variable 21.",
      "meta:titleId": "experienceevent-all##xdm:eVar21##title##36521",
      "meta:descriptionId": "experienceevent-all##xdm:eVar21##description##99961"
    },
    "xdm:eVar22": {
      "title": "eVar22",
      "type": "string",
      "description": "Custom conversion variable 22.",
      "meta:titleId": "experienceevent-all##xdm:eVar22##title##44221",
      "meta:descriptionId": "experienceevent-all##xdm:eVar22##description##50341"
    },
    "xdm:eVar23": {
      "title": "eVar23",
      "type": "string",
      "description": "Custom conversion variable 23.",
      "meta:titleId": "experienceevent-all##xdm:eVar23##title##33961",
      "meta:descriptionId": "experienceevent-all##xdm:eVar23##description##58121"
    },
    "xdm:eVar24": {
      "title": "eVar24",
      "type": "string",
      "description": "Custom conversion variable 24.",
      "meta:titleId": "experienceevent-all##xdm:eVar24##title##77251",
      "meta:descriptionId": "experienceevent-all##xdm:eVar24##description##14221"
    },
    "xdm:eVar25": {
      "title": "eVar25",
      "type": "string",
      "description": "Custom conversion variable 25.",
      "meta:titleId": "experienceevent-all##xdm:eVar25##title##28921",
      "meta:descriptionId": "experienceevent-all##xdm:eVar25##description##72141"
    },
    "xdm:eVar26": {
      "title": "eVar26",
      "type": "string",
      "description": "Custom conversion variable 26.",
      "meta:titleId": "experienceevent-all##xdm:eVar26##title##82211",
      "meta:descriptionId": "experienceevent-all##xdm:eVar26##description##2831"
    },
    "xdm:eVar27": {
      "title": "eVar27",
      "type": "string",
      "description": "Custom conversion variable 27.",
      "meta:titleId": "experienceevent-all##xdm:eVar27##title##85331",
      "meta:descriptionId": "experienceevent-all##xdm:eVar27##description##25521"
    },
    "xdm:eVar28": {
      "title": "eVar28",
      "type": "string",
      "description": "Custom conversion variable 28.",
      "meta:titleId": "experienceevent-all##xdm:eVar28##title##54371",
      "meta:descriptionId": "experienceevent-all##xdm:eVar28##description##79511"
    },
    "xdm:eVar29": {
      "title": "eVar29",
      "type": "string",
      "description": "Custom conversion variable 29.",
      "meta:titleId": "experienceevent-all##xdm:eVar29##title##29501",
      "meta:descriptionId": "experienceevent-all##xdm:eVar29##description##37901"
    },
    "xdm:eVar30": {
      "title": "eVar30",
      "type": "string",
      "description": "Custom conversion variable 30.",
      "meta:titleId": "experienceevent-all##xdm:eVar30##title##60281",
      "meta:descriptionId": "experienceevent-all##xdm:eVar30##description##47891"
    },
    "xdm:eVar31": {
      "title": "eVar31",
      "type": "string",
      "description": "Custom conversion variable 31.",
      "meta:titleId": "experienceevent-all##xdm:eVar31##title##3551",
      "meta:descriptionId": "experienceevent-all##xdm:eVar31##description##49341"
    },
    "xdm:eVar32": {
      "title": "eVar32",
      "type": "string",
      "description": "Custom conversion variable 32.",
      "meta:titleId": "experienceevent-all##xdm:eVar32##title##48101",
      "meta:descriptionId": "experienceevent-all##xdm:eVar32##description##43191"
    },
    "xdm:eVar33": {
      "title": "eVar33",
      "type": "string",
      "description": "Custom conversion variable 33.",
      "meta:titleId": "experienceevent-all##xdm:eVar33##title##9761",
      "meta:descriptionId": "experienceevent-all##xdm:eVar33##description##93441"
    },
    "xdm:eVar34": {
      "title": "eVar34",
      "type": "string",
      "description": "Custom conversion variable 34.",
      "meta:titleId": "experienceevent-all##xdm:eVar34##title##46501",
      "meta:descriptionId": "experienceevent-all##xdm:eVar34##description##60491"
    },
    "xdm:eVar35": {
      "title": "eVar35",
      "type": "string",
      "description": "Custom conversion variable 35.",
      "meta:titleId": "experienceevent-all##xdm:eVar35##title##33471",
      "meta:descriptionId": "experienceevent-all##xdm:eVar35##description##5551"
    },
    "xdm:eVar36": {
      "title": "eVar36",
      "type": "string",
      "description": "Custom conversion variable 36.",
      "meta:titleId": "experienceevent-all##xdm:eVar36##title##66841",
      "meta:descriptionId": "experienceevent-all##xdm:eVar36##description##80021"
    },
    "xdm:eVar37": {
      "title": "eVar37",
      "type": "string",
      "description": "Custom conversion variable 37.",
      "meta:titleId": "experienceevent-all##xdm:eVar37##title##4191",
      "meta:descriptionId": "experienceevent-all##xdm:eVar37##description##91281"
    },
    "xdm:eVar38": {
      "title": "eVar38",
      "type": "string",
      "description": "Custom conversion variable 38.",
      "meta:titleId": "experienceevent-all##xdm:eVar38##title##3891",
      "meta:descriptionId": "experienceevent-all##xdm:eVar38##description##98111"
    },
    "xdm:eVar39": {
      "title": "eVar39",
      "type": "string",
      "description": "Custom conversion variable 39.",
      "meta:titleId": "experienceevent-all##xdm:eVar39##title##24371",
      "meta:descriptionId": "experienceevent-all##xdm:eVar39##description##67191"
    },
    "xdm:eVar40": {
      "title": "eVar40",
      "type": "string",
      "description": "Custom conversion variable 40.",
      "meta:titleId": "experienceevent-all##xdm:eVar40##title##51621",
      "meta:descriptionId": "experienceevent-all##xdm:eVar40##description##77371"
    },
    "xdm:eVar41": {
      "title": "eVar41",
      "type": "string",
      "description": "Custom conversion variable 41.",
      "meta:titleId": "experienceevent-all##xdm:eVar41##title##95071",
      "meta:descriptionId": "experienceevent-all##xdm:eVar41##description##56771"
    },
    "xdm:eVar42": {
      "title": "eVar42",
      "type": "string",
      "description": "Custom conversion variable 42.",
      "meta:titleId": "experienceevent-all##xdm:eVar42##title##48211",
      "meta:descriptionId": "experienceevent-all##xdm:eVar42##description##36811"
    },
    "xdm:eVar43": {
      "title": "eVar43",
      "type": "string",
      "description": "Custom conversion variable 43.",
      "meta:titleId": "experienceevent-all##xdm:eVar43##title##53981",
      "meta:descriptionId": "experienceevent-all##xdm:eVar43##description##60071"
    },
    "xdm:eVar44": {
      "title": "eVar44",
      "type": "string",
      "description": "Custom conversion variable 44.",
      "meta:titleId": "experienceevent-all##xdm:eVar44##title##67031",
      "meta:descriptionId": "experienceevent-all##xdm:eVar44##description##24571"
    },
    "xdm:eVar45": {
      "title": "eVar45",
      "type": "string",
      "description": "Custom conversion variable 45.",
      "meta:titleId": "experienceevent-all##xdm:eVar45##title##22731",
      "meta:descriptionId": "experienceevent-all##xdm:eVar45##description##81351"
    },
    "xdm:eVar46": {
      "title": "eVar46",
      "type": "string",
      "description": "Custom conversion variable 46.",
      "meta:titleId": "experienceevent-all##xdm:eVar46##title##75971",
      "meta:descriptionId": "experienceevent-all##xdm:eVar46##description##96161"
    },
    "xdm:eVar47": {
      "title": "eVar47",
      "type": "string",
      "description": "Custom conversion variable 47.",
      "meta:titleId": "experienceevent-all##xdm:eVar47##title##29471",
      "meta:descriptionId": "experienceevent-all##xdm:eVar47##description##40271"
    },
    "xdm:eVar48": {
      "title": "eVar48",
      "type": "string",
      "description": "Custom conversion variable 48.",
      "meta:titleId": "experienceevent-all##xdm:eVar48##title##26301",
      "meta:descriptionId": "experienceevent-all##xdm:eVar48##description##11801"
    },
    "xdm:eVar49": {
      "title": "eVar49",
      "type": "string",
      "description": "Custom conversion variable 49.",
      "meta:titleId": "experienceevent-all##xdm:eVar49##title##85501",
      "meta:descriptionId": "experienceevent-all##xdm:eVar49##description##81151"
    },
    "xdm:eVar50": {
      "title": "eVar50",
      "type": "string",
      "description": "Custom conversion variable 50.",
      "meta:titleId": "experienceevent-all##xdm:eVar50##title##22361",
      "meta:descriptionId": "experienceevent-all##xdm:eVar50##description##79391"
    },
    "xdm:eVar51": {
      "title": "eVar51",
      "type": "string",
      "description": "Custom conversion variable 51.",
      "meta:titleId": "experienceevent-all##xdm:eVar51##title##61231",
      "meta:descriptionId": "experienceevent-all##xdm:eVar51##description##51551"
    },
    "xdm:eVar52": {
      "title": "eVar52",
      "type": "string",
      "description": "Custom conversion variable 52.",
      "meta:titleId": "experienceevent-all##xdm:eVar52##title##95341",
      "meta:descriptionId": "experienceevent-all##xdm:eVar52##description##77171"
    },
    "xdm:eVar53": {
      "title": "eVar53",
      "type": "string",
      "description": "Custom conversion variable 53.",
      "meta:titleId": "experienceevent-all##xdm:eVar53##title##1811",
      "meta:descriptionId": "experienceevent-all##xdm:eVar53##description##64091"
    },
    "xdm:eVar54": {
      "title": "eVar54",
      "type": "string",
      "description": "Custom conversion variable 54.",
      "meta:titleId": "experienceevent-all##xdm:eVar54##title##32531",
      "meta:descriptionId": "experienceevent-all##xdm:eVar54##description##95391"
    },
    "xdm:eVar55": {
      "title": "eVar55",
      "type": "string",
      "description": "Custom conversion variable 55.",
      "meta:titleId": "experienceevent-all##xdm:eVar55##title##56141",
      "meta:descriptionId": "experienceevent-all##xdm:eVar55##description##53191"
    },
    "xdm:eVar56": {
      "title": "eVar56",
      "type": "string",
      "description": "Custom conversion variable 56.",
      "meta:titleId": "experienceevent-all##xdm:eVar56##title##96491",
      "meta:descriptionId": "experienceevent-all##xdm:eVar56##description##34831"
    },
    "xdm:eVar57": {
      "title": "eVar57",
      "type": "string",
      "description": "Custom conversion variable 57.",
      "meta:titleId": "experienceevent-all##xdm:eVar57##title##40141",
      "meta:descriptionId": "experienceevent-all##xdm:eVar57##description##63291"
    },
    "xdm:eVar58": {
      "title": "eVar58",
      "type": "string",
      "description": "Custom conversion variable 58.",
      "meta:titleId": "experienceevent-all##xdm:eVar58##title##22761",
      "meta:descriptionId": "experienceevent-all##xdm:eVar58##description##97111"
    },
    "xdm:eVar59": {
      "title": "eVar59",
      "type": "string",
      "description": "Custom conversion variable 59.",
      "meta:titleId": "experienceevent-all##xdm:eVar59##title##4231",
      "meta:descriptionId": "experienceevent-all##xdm:eVar59##description##71691"
    },
    "xdm:eVar60": {
      "title": "eVar60",
      "type": "string",
      "description": "Custom conversion variable 60.",
      "meta:titleId": "experienceevent-all##xdm:eVar60##title##3971",
      "meta:descriptionId": "experienceevent-all##xdm:eVar60##description##57391"
    },
    "xdm:eVar61": {
      "title": "eVar61",
      "type": "string",
      "description": "Custom conversion variable 61.",
      "meta:titleId": "experienceevent-all##xdm:eVar61##title##33681",
      "meta:descriptionId": "experienceevent-all##xdm:eVar61##description##12541"
    },
    "xdm:eVar62": {
      "title": "eVar62",
      "type": "string",
      "description": "Custom conversion variable 62.",
      "meta:titleId": "experienceevent-all##xdm:eVar62##title##58721",
      "meta:descriptionId": "experienceevent-all##xdm:eVar62##description##84581"
    },
    "xdm:eVar63": {
      "title": "eVar63",
      "type": "string",
      "description": "Custom conversion variable 63.",
      "meta:titleId": "experienceevent-all##xdm:eVar63##title##42571",
      "meta:descriptionId": "experienceevent-all##xdm:eVar63##description##311"
    },
    "xdm:eVar64": {
      "title": "eVar64",
      "type": "string",
      "description": "Custom conversion variable 64.",
      "meta:titleId": "experienceevent-all##xdm:eVar64##title##44011",
      "meta:descriptionId": "experienceevent-all##xdm:eVar64##description##58081"
    },
    "xdm:eVar65": {
      "title": "eVar65",
      "type": "string",
      "description": "Custom conversion variable 65.",
      "meta:titleId": "experienceevent-all##xdm:eVar65##title##82841",
      "meta:descriptionId": "experienceevent-all##xdm:eVar65##description##92341"
    },
    "xdm:eVar66": {
      "title": "eVar66",
      "type": "string",
      "description": "Custom conversion variable 66.",
      "meta:titleId": "experienceevent-all##xdm:eVar66##title##6911",
      "meta:descriptionId": "experienceevent-all##xdm:eVar66##description##85331"
    },
    "xdm:eVar67": {
      "title": "eVar67",
      "type": "string",
      "description": "Custom conversion variable 67.",
      "meta:titleId": "experienceevent-all##xdm:eVar67##title##85801",
      "meta:descriptionId": "experienceevent-all##xdm:eVar67##description##48161"
    },
    "xdm:eVar68": {
      "title": "eVar68",
      "type": "string",
      "description": "Custom conversion variable 68.",
      "meta:titleId": "experienceevent-all##xdm:eVar68##title##25361",
      "meta:descriptionId": "experienceevent-all##xdm:eVar68##description##13711"
    },
    "xdm:eVar69": {
      "title": "eVar69",
      "type": "string",
      "description": "Custom conversion variable 69.",
      "meta:titleId": "experienceevent-all##xdm:eVar69##title##11021",
      "meta:descriptionId": "experienceevent-all##xdm:eVar69##description##76931"
    },
    "xdm:eVar70": {
      "title": "eVar70",
      "type": "string",
      "description": "Custom conversion variable 70.",
      "meta:titleId": "experienceevent-all##xdm:eVar70##title##41541",
      "meta:descriptionId": "experienceevent-all##xdm:eVar70##description##33311"
    },
    "xdm:eVar71": {
      "title": "eVar71",
      "type": "string",
      "description": "Custom conversion variable 71.",
      "meta:titleId": "experienceevent-all##xdm:eVar71##title##90511",
      "meta:descriptionId": "experienceevent-all##xdm:eVar71##description##52411"
    },
    "xdm:eVar72": {
      "title": "eVar72",
      "type": "string",
      "description": "Custom conversion variable 72.",
      "meta:titleId": "experienceevent-all##xdm:eVar72##title##58201",
      "meta:descriptionId": "experienceevent-all##xdm:eVar72##description##31201"
    },
    "xdm:eVar73": {
      "title": "eVar73",
      "type": "string",
      "description": "Custom conversion variable 73.",
      "meta:titleId": "experienceevent-all##xdm:eVar73##title##74661",
      "meta:descriptionId": "experienceevent-all##xdm:eVar73##description##88931"
    },
    "xdm:eVar74": {
      "title": "eVar74",
      "type": "string",
      "description": "Custom conversion variable 74.",
      "meta:titleId": "experienceevent-all##xdm:eVar74##title##66261",
      "meta:descriptionId": "experienceevent-all##xdm:eVar74##description##61401"
    },
    "xdm:eVar75": {
      "title": "eVar75",
      "type": "string",
      "description": "Custom conversion variable 75.",
      "meta:titleId": "experienceevent-all##xdm:eVar75##title##85381",
      "meta:descriptionId": "experienceevent-all##xdm:eVar75##description##51851"
    },
    "xdm:eVar76": {
      "title": "eVar76",
      "type": "string",
      "description": "Custom conversion variable 76.",
      "meta:titleId": "experienceevent-all##xdm:eVar76##title##1541",
      "meta:descriptionId": "experienceevent-all##xdm:eVar76##description##13951"
    },
    "xdm:eVar77": {
      "title": "eVar77",
      "type": "string",
      "description": "Custom conversion variable 77.",
      "meta:titleId": "experienceevent-all##xdm:eVar77##title##46941",
      "meta:descriptionId": "experienceevent-all##xdm:eVar77##description##57791"
    },
    "xdm:eVar78": {
      "title": "eVar78",
      "type": "string",
      "description": "Custom conversion variable 78.",
      "meta:titleId": "experienceevent-all##xdm:eVar78##title##14351",
      "meta:descriptionId": "experienceevent-all##xdm:eVar78##description##58121"
    },
    "xdm:eVar79": {
      "title": "eVar79",
      "type": "string",
      "description": "Custom conversion variable 79.",
      "meta:titleId": "experienceevent-all##xdm:eVar79##title##72691",
      "meta:descriptionId": "experienceevent-all##xdm:eVar79##description##61941"
    },
    "xdm:eVar80": {
      "title": "eVar80",
      "type": "string",
      "description": "Custom conversion variable 80.",
      "meta:titleId": "experienceevent-all##xdm:eVar80##title##36971",
      "meta:descriptionId": "experienceevent-all##xdm:eVar80##description##61581"
    },
    "xdm:eVar81": {
      "title": "eVar81",
      "type": "string",
      "description": "Custom conversion variable 81.",
      "meta:titleId": "experienceevent-all##xdm:eVar81##title##40781",
      "meta:descriptionId": "experienceevent-all##xdm:eVar81##description##83541"
    },
    "xdm:eVar82": {
      "title": "eVar82",
      "type": "string",
      "description": "Custom conversion variable 82.",
      "meta:titleId": "experienceevent-all##xdm:eVar82##title##77731",
      "meta:descriptionId": "experienceevent-all##xdm:eVar82##description##19871"
    },
    "xdm:eVar83": {
      "title": "eVar83",
      "type": "string",
      "description": "Custom conversion variable 83.",
      "meta:titleId": "experienceevent-all##xdm:eVar83##title##87511",
      "meta:descriptionId": "experienceevent-all##xdm:eVar83##description##48121"
    },
    "xdm:eVar84": {
      "title": "eVar84",
      "type": "string",
      "description": "Custom conversion variable 84.",
      "meta:titleId": "experienceevent-all##xdm:eVar84##title##96351",
      "meta:descriptionId": "experienceevent-all##xdm:eVar84##description##50821"
    },
    "xdm:eVar85": {
      "title": "eVar85",
      "type": "string",
      "description": "Custom conversion variable 85.",
      "meta:titleId": "experienceevent-all##xdm:eVar85##title##1921",
      "meta:descriptionId": "experienceevent-all##xdm:eVar85##description##38991"
    },
    "xdm:eVar86": {
      "title": "eVar86",
      "type": "string",
      "description": "Custom conversion variable 86.",
      "meta:titleId": "experienceevent-all##xdm:eVar86##title##84411",
      "meta:descriptionId": "experienceevent-all##xdm:eVar86##description##54181"
    },
    "xdm:eVar87": {
      "title": "eVar87",
      "type": "string",
      "description": "Custom conversion variable 87.",
      "meta:titleId": "experienceevent-all##xdm:eVar87##title##50851",
      "meta:descriptionId": "experienceevent-all##xdm:eVar87##description##66461"
    },
    "xdm:eVar88": {
      "title": "eVar88",
      "type": "string",
      "description": "Custom conversion variable 88.",
      "meta:titleId": "experienceevent-all##xdm:eVar88##title##14491",
      "meta:descriptionId": "experienceevent-all##xdm:eVar88##description##99061"
    },
    "xdm:eVar89": {
      "title": "eVar89",
      "type": "string",
      "description": "Custom conversion variable 89.",
      "meta:titleId": "experienceevent-all##xdm:eVar89##title##24551",
      "meta:descriptionId": "experienceevent-all##xdm:eVar89##description##59481"
    },
    "xdm:eVar90": {
      "title": "eVar90",
      "type": "string",
      "description": "Custom conversion variable 90.",
      "meta:titleId": "experienceevent-all##xdm:eVar90##title##18621",
      "meta:descriptionId": "experienceevent-all##xdm:eVar90##description##82541"
    },
    "xdm:eVar91": {
      "title": "eVar91",
      "type": "string",
      "description": "Custom conversion variable 91.",
      "meta:titleId": "experienceevent-all##xdm:eVar91##title##77021",
      "meta:descriptionId": "experienceevent-all##xdm:eVar91##description##46581"
    },
    "xdm:eVar92": {
      "title": "eVar92",
      "type": "string",
      "description": "Custom conversion variable 92.",
      "meta:titleId": "experienceevent-all##xdm:eVar92##title##51021",
      "meta:descriptionId": "experienceevent-all##xdm:eVar92##description##47301"
    },
    "xdm:eVar93": {
      "title": "eVar93",
      "type": "string",
      "description": "Custom conversion variable 93.",
      "meta:titleId": "experienceevent-all##xdm:eVar93##title##26521",
      "meta:descriptionId": "experienceevent-all##xdm:eVar93##description##40451"
    },
    "xdm:eVar94": {
      "title": "eVar94",
      "type": "string",
      "description": "Custom conversion variable 94.",
      "meta:titleId": "experienceevent-all##xdm:eVar94##title##52461",
      "meta:descriptionId": "experienceevent-all##xdm:eVar94##description##48561"
    },
    "xdm:eVar95": {
      "title": "eVar95",
      "type": "string",
      "description": "Custom conversion variable 95.",
      "meta:titleId": "experienceevent-all##xdm:eVar95##title##94261",
      "meta:descriptionId": "experienceevent-all##xdm:eVar95##description##77861"
    },
    "xdm:eVar96": {
      "title": "eVar96",
      "type": "string",
      "description": "Custom conversion variable 96.",
      "meta:titleId": "experienceevent-all##xdm:eVar96##title##341",
      "meta:descriptionId": "experienceevent-all##xdm:eVar96##description##48531"
    },
    "xdm:eVar97": {
      "title": "eVar97",
      "type": "string",
      "description": "Custom conversion variable 97.",
      "meta:titleId": "experienceevent-all##xdm:eVar97##title##54071",
      "meta:descriptionId": "experienceevent-all##xdm:eVar97##description##66721"
    },
    "xdm:eVar98": {
      "title": "eVar98",
      "type": "string",
      "description": "Custom conversion variable 98.",
      "meta:titleId": "experienceevent-all##xdm:eVar98##title##69471",
      "meta:descriptionId": "experienceevent-all##xdm:eVar98##description##29271"
    },
    "xdm:eVar99": {
      "title": "eVar99",
      "type": "string",
      "description": "Custom conversion variable 99.",
      "meta:titleId": "experienceevent-all##xdm:eVar99##title##27131",
      "meta:descriptionId": "experienceevent-all##xdm:eVar99##description##64941"
    },
    "xdm:eVar100": {
      "title": "eVar100",
      "type": "string",
      "description": "Custom conversion variable 100.",
      "meta:titleId": "experienceevent-all##xdm:eVar100##title##69671",
      "meta:descriptionId": "experienceevent-all##xdm:eVar100##description##5771"
    },
    "xdm:eVar101": {
      "title": "eVar101",
      "type": "string",
      "description": "Custom conversion variable 101.",
      "meta:titleId": "experienceevent-all##xdm:eVar101##title##79741",
      "meta:descriptionId": "experienceevent-all##xdm:eVar101##description##45951"
    },
    "xdm:eVar102": {
      "title": "eVar102",
      "type": "string",
      "description": "Custom conversion variable 102.",
      "meta:titleId": "experienceevent-all##xdm:eVar102##title##7461",
      "meta:descriptionId": "experienceevent-all##xdm:eVar102##description##76061"
    },
    "xdm:eVar103": {
      "title": "eVar103",
      "type": "string",
      "description": "Custom conversion variable 103.",
      "meta:titleId": "experienceevent-all##xdm:eVar103##title##44831",
      "meta:descriptionId": "experienceevent-all##xdm:eVar103##description##36901"
    },
    "xdm:eVar104": {
      "title": "eVar104",
      "type": "string",
      "description": "Custom conversion variable 104.",
      "meta:titleId": "experienceevent-all##xdm:eVar104##title##91721",
      "meta:descriptionId": "experienceevent-all##xdm:eVar104##description##35571"
    },
    "xdm:eVar105": {
      "title": "eVar105",
      "type": "string",
      "description": "Custom conversion variable 105.",
      "meta:titleId": "experienceevent-all##xdm:eVar105##title##31101",
      "meta:descriptionId": "experienceevent-all##xdm:eVar105##description##98131"
    },
    "xdm:eVar106": {
      "title": "eVar106",
      "type": "string",
      "description": "Custom conversion variable 106.",
      "meta:titleId": "experienceevent-all##xdm:eVar106##title##17761",
      "meta:descriptionId": "experienceevent-all##xdm:eVar106##description##7001"
    },
    "xdm:eVar107": {
      "title": "eVar107",
      "type": "string",
      "description": "Custom conversion variable 107.",
      "meta:titleId": "experienceevent-all##xdm:eVar107##title##86691",
      "meta:descriptionId": "experienceevent-all##xdm:eVar107##description##44231"
    },
    "xdm:eVar108": {
      "title": "eVar108",
      "type": "string",
      "description": "Custom conversion variable 108.",
      "meta:titleId": "experienceevent-all##xdm:eVar108##title##78021",
      "meta:descriptionId": "experienceevent-all##xdm:eVar108##description##56571"
    },
    "xdm:eVar109": {
      "title": "eVar109",
      "type": "string",
      "description": "Custom conversion variable 109.",
      "meta:titleId": "experienceevent-all##xdm:eVar109##title##78031",
      "meta:descriptionId": "experienceevent-all##xdm:eVar109##description##94381"
    },
    "xdm:eVar110": {
      "title": "eVar110",
      "type": "string",
      "description": "Custom conversion variable 110.",
      "meta:titleId": "experienceevent-all##xdm:eVar110##title##62141",
      "meta:descriptionId": "experienceevent-all##xdm:eVar110##description##63351"
    },
    "xdm:eVar111": {
      "title": "eVar111",
      "type": "string",
      "description": "Custom conversion variable 111.",
      "meta:titleId": "experienceevent-all##xdm:eVar111##title##81121",
      "meta:descriptionId": "experienceevent-all##xdm:eVar111##description##90191"
    },
    "xdm:eVar112": {
      "title": "eVar112",
      "type": "string",
      "description": "Custom conversion variable 112.",
      "meta:titleId": "experienceevent-all##xdm:eVar112##title##38521",
      "meta:descriptionId": "experienceevent-all##xdm:eVar112##description##91401"
    },
    "xdm:eVar113": {
      "title": "eVar113",
      "type": "string",
      "description": "Custom conversion variable 113.",
      "meta:titleId": "experienceevent-all##xdm:eVar113##title##75261",
      "meta:descriptionId": "experienceevent-all##xdm:eVar113##description##83491"
    },
    "xdm:eVar114": {
      "title": "eVar114",
      "type": "string",
      "description": "Custom conversion variable 114.",
      "meta:titleId": "experienceevent-all##xdm:eVar114##title##61071",
      "meta:descriptionId": "experienceevent-all##xdm:eVar114##description##83251"
    },
    "xdm:eVar115": {
      "title": "eVar115",
      "type": "string",
      "description": "Custom conversion variable 115.",
      "meta:titleId": "experienceevent-all##xdm:eVar115##title##60721",
      "meta:descriptionId": "experienceevent-all##xdm:eVar115##description##85661"
    },
    "xdm:eVar116": {
      "title": "eVar116",
      "type": "string",
      "description": "Custom conversion variable 116.",
      "meta:titleId": "experienceevent-all##xdm:eVar116##title##7041",
      "meta:descriptionId": "experienceevent-all##xdm:eVar116##description##45801"
    },
    "xdm:eVar117": {
      "title": "eVar117",
      "type": "string",
      "description": "Custom conversion variable 117.",
      "meta:titleId": "experienceevent-all##xdm:eVar117##title##98221",
      "meta:descriptionId": "experienceevent-all##xdm:eVar117##description##26421"
    },
    "xdm:eVar118": {
      "title": "eVar118",
      "type": "string",
      "description": "Custom conversion variable 118.",
      "meta:titleId": "experienceevent-all##xdm:eVar118##title##92501",
      "meta:descriptionId": "experienceevent-all##xdm:eVar118##description##33521"
    },
    "xdm:eVar119": {
      "title": "eVar119",
      "type": "string",
      "description": "Custom conversion variable 119.",
      "meta:titleId": "experienceevent-all##xdm:eVar119##title##92991",
      "meta:descriptionId": "experienceevent-all##xdm:eVar119##description##2071"
    },
    "xdm:eVar120": {
      "title": "eVar120",
      "type": "string",
      "description": "Custom conversion variable 120.",
      "meta:titleId": "experienceevent-all##xdm:eVar120##title##81591",
      "meta:descriptionId": "experienceevent-all##xdm:eVar120##description##27181"
    },
    "xdm:eVar121": {
      "title": "eVar121",
      "type": "string",
      "description": "Custom conversion variable 121.",
      "meta:titleId": "experienceevent-all##xdm:eVar121##title##88771",
      "meta:descriptionId": "experienceevent-all##xdm:eVar121##description##20451"
    },
    "xdm:eVar122": {
      "title": "eVar122",
      "type": "string",
      "description": "Custom conversion variable 122.",
      "meta:titleId": "experienceevent-all##xdm:eVar122##title##75591",
      "meta:descriptionId": "experienceevent-all##xdm:eVar122##description##88811"
    },
    "xdm:eVar123": {
      "title": "eVar123",
      "type": "string",
      "description": "Custom conversion variable 123.",
      "meta:titleId": "experienceevent-all##xdm:eVar123##title##37411",
      "meta:descriptionId": "experienceevent-all##xdm:eVar123##description##3761"
    },
    "xdm:eVar124": {
      "title": "eVar124",
      "type": "string",
      "description": "Custom conversion variable 124.",
      "meta:titleId": "experienceevent-all##xdm:eVar124##title##5541",
      "meta:descriptionId": "experienceevent-all##xdm:eVar124##description##10411"
    },
    "xdm:eVar125": {
      "title": "eVar125",
      "type": "string",
      "description": "Custom conversion variable 125.",
      "meta:titleId": "experienceevent-all##xdm:eVar125##title##55911",
      "meta:descriptionId": "experienceevent-all##xdm:eVar125##description##16731"
    },
    "xdm:eVar126": {
      "title": "eVar126",
      "type": "string",
      "description": "Custom conversion variable 126.",
      "meta:titleId": "experienceevent-all##xdm:eVar126##title##39651",
      "meta:descriptionId": "experienceevent-all##xdm:eVar126##description##8161"
    },
    "xdm:eVar127": {
      "title": "eVar127",
      "type": "string",
      "description": "Custom conversion variable 127.",
      "meta:titleId": "experienceevent-all##xdm:eVar127##title##15641",
      "meta:descriptionId": "experienceevent-all##xdm:eVar127##description##11311"
    },
    "xdm:eVar128": {
      "title": "eVar128",
      "type": "string",
      "description": "Custom conversion variable 128.",
      "meta:titleId": "experienceevent-all##xdm:eVar128##title##4171",
      "meta:descriptionId": "experienceevent-all##xdm:eVar128##description##56911"
    },
    "xdm:eVar129": {
      "title": "eVar129",
      "type": "string",
      "description": "Custom conversion variable 129.",
      "meta:titleId": "experienceevent-all##xdm:eVar129##title##4061",
      "meta:descriptionId": "experienceevent-all##xdm:eVar129##description##43641"
    },
    "xdm:eVar130": {
      "title": "eVar130",
      "type": "string",
      "description": "Custom conversion variable 130.",
      "meta:titleId": "experienceevent-all##xdm:eVar130##title##96541",
      "meta:descriptionId": "experienceevent-all##xdm:eVar130##description##55411"
    },
    "xdm:eVar131": {
      "title": "eVar131",
      "type": "string",
      "description": "Custom conversion variable 131.",
      "meta:titleId": "experienceevent-all##xdm:eVar131##title##97911",
      "meta:descriptionId": "experienceevent-all##xdm:eVar131##description##11791"
    },
    "xdm:eVar132": {
      "title": "eVar132",
      "type": "string",
      "description": "Custom conversion variable 132.",
      "meta:titleId": "experienceevent-all##xdm:eVar132##title##47541",
      "meta:descriptionId": "experienceevent-all##xdm:eVar132##description##89001"
    },
    "xdm:eVar133": {
      "title": "eVar133",
      "type": "string",
      "description": "Custom conversion variable 133.",
      "meta:titleId": "experienceevent-all##xdm:eVar133##title##78971",
      "meta:descriptionId": "experienceevent-all##xdm:eVar133##description##44341"
    },
    "xdm:eVar134": {
      "title": "eVar134",
      "type": "string",
      "description": "Custom conversion variable 134.",
      "meta:titleId": "experienceevent-all##xdm:eVar134##title##6491",
      "meta:descriptionId": "experienceevent-all##xdm:eVar134##description##80331"
    },
    "xdm:eVar135": {
      "title": "eVar135",
      "type": "string",
      "description": "Custom conversion variable 135.",
      "meta:titleId": "experienceevent-all##xdm:eVar135##title##11191",
      "meta:descriptionId": "experienceevent-all##xdm:eVar135##description##89011"
    },
    "xdm:eVar136": {
      "title": "eVar136",
      "type": "string",
      "description": "Custom conversion variable 136.",
      "meta:titleId": "experienceevent-all##xdm:eVar136##title##32801",
      "meta:descriptionId": "experienceevent-all##xdm:eVar136##description##85011"
    },
    "xdm:eVar137": {
      "title": "eVar137",
      "type": "string",
      "description": "Custom conversion variable 137.",
      "meta:titleId": "experienceevent-all##xdm:eVar137##title##65771",
      "meta:descriptionId": "experienceevent-all##xdm:eVar137##description##19911"
    },
    "xdm:eVar138": {
      "title": "eVar138",
      "type": "string",
      "description": "Custom conversion variable 138.",
      "meta:titleId": "experienceevent-all##xdm:eVar138##title##33421",
      "meta:descriptionId": "experienceevent-all##xdm:eVar138##description##74271"
    },
    "xdm:eVar139": {
      "title": "eVar139",
      "type": "string",
      "description": "Custom conversion variable 139.",
      "meta:titleId": "experienceevent-all##xdm:eVar139##title##34871",
      "meta:descriptionId": "experienceevent-all##xdm:eVar139##description##49321"
    },
    "xdm:eVar140": {
      "title": "eVar140",
      "type": "string",
      "description": "Custom conversion variable 140.",
      "meta:titleId": "experienceevent-all##xdm:eVar140##title##26671",
      "meta:descriptionId": "experienceevent-all##xdm:eVar140##description##39281"
    },
    "xdm:eVar141": {
      "title": "eVar141",
      "type": "string",
      "description": "Custom conversion variable 141.",
      "meta:titleId": "experienceevent-all##xdm:eVar141##title##99561",
      "meta:descriptionId": "experienceevent-all##xdm:eVar141##description##46581"
    },
    "xdm:eVar142": {
      "title": "eVar142",
      "type": "string",
      "description": "Custom conversion variable 142.",
      "meta:titleId": "experienceevent-all##xdm:eVar142##title##4941",
      "meta:descriptionId": "experienceevent-all##xdm:eVar142##description##60221"
    },
    "xdm:eVar143": {
      "title": "eVar143",
      "type": "string",
      "description": "Custom conversion variable 143.",
      "meta:titleId": "experienceevent-all##xdm:eVar143##title##2831",
      "meta:descriptionId": "experienceevent-all##xdm:eVar143##description##54611"
    },
    "xdm:eVar144": {
      "title": "eVar144",
      "type": "string",
      "description": "Custom conversion variable 144.",
      "meta:titleId": "experienceevent-all##xdm:eVar144##title##39161",
      "meta:descriptionId": "experienceevent-all##xdm:eVar144##description##80361"
    },
    "xdm:eVar145": {
      "title": "eVar145",
      "type": "string",
      "description": "Custom conversion variable 145.",
      "meta:titleId": "experienceevent-all##xdm:eVar145##title##41071",
      "meta:descriptionId": "experienceevent-all##xdm:eVar145##description##59151"
    },
    "xdm:eVar146": {
      "title": "eVar146",
      "type": "string",
      "description": "Custom conversion variable 146.",
      "meta:titleId": "experienceevent-all##xdm:eVar146##title##25711",
      "meta:descriptionId": "experienceevent-all##xdm:eVar146##description##9481"
    },
    "xdm:eVar147": {
      "title": "eVar147",
      "type": "string",
      "description": "Custom conversion variable 147.",
      "meta:titleId": "experienceevent-all##xdm:eVar147##title##38601",
      "meta:descriptionId": "experienceevent-all##xdm:eVar147##description##57661"
    },
    "xdm:eVar148": {
      "title": "eVar148",
      "type": "string",
      "description": "Custom conversion variable 148.",
      "meta:titleId": "experienceevent-all##xdm:eVar148##title##73201",
      "meta:descriptionId": "experienceevent-all##xdm:eVar148##description##39111"
    },
    "xdm:eVar149": {
      "title": "eVar149",
      "type": "string",
      "description": "Custom conversion variable 149.",
      "meta:titleId": "experienceevent-all##xdm:eVar149##title##1121",
      "meta:descriptionId": "experienceevent-all##xdm:eVar149##description##74541"
    },
    "xdm:eVar150": {
      "title": "eVar150",
      "type": "string",
      "description": "Custom conversion variable 150.",
      "meta:titleId": "experienceevent-all##xdm:eVar150##title##911",
      "meta:descriptionId": "experienceevent-all##xdm:eVar150##description##31741"
    },
    "xdm:eVar151": {
      "title": "eVar151",
      "type": "string",
      "description": "Custom conversion variable 151.",
      "meta:titleId": "experienceevent-all##xdm:eVar151##title##75001",
      "meta:descriptionId": "experienceevent-all##xdm:eVar151##description##42231"
    },
    "xdm:eVar152": {
      "title": "eVar152",
      "type": "string",
      "description": "Custom conversion variable 152.",
      "meta:titleId": "experienceevent-all##xdm:eVar152##title##14551",
      "meta:descriptionId": "experienceevent-all##xdm:eVar152##description##49011"
    },
    "xdm:eVar153": {
      "title": "eVar153",
      "type": "string",
      "description": "Custom conversion variable 153.",
      "meta:titleId": "experienceevent-all##xdm:eVar153##title##83271",
      "meta:descriptionId": "experienceevent-all##xdm:eVar153##description##32881"
    },
    "xdm:eVar154": {
      "title": "eVar154",
      "type": "string",
      "description": "Custom conversion variable 154.",
      "meta:titleId": "experienceevent-all##xdm:eVar154##title##21411",
      "meta:descriptionId": "experienceevent-all##xdm:eVar154##description##58191"
    },
    "xdm:eVar155": {
      "title": "eVar155",
      "type": "string",
      "description": "Custom conversion variable 155.",
      "meta:titleId": "experienceevent-all##xdm:eVar155##title##66131",
      "meta:descriptionId": "experienceevent-all##xdm:eVar155##description##66071"
    },
    "xdm:eVar156": {
      "title": "eVar156",
      "type": "string",
      "description": "Custom conversion variable 156.",
      "meta:titleId": "experienceevent-all##xdm:eVar156##title##36901",
      "meta:descriptionId": "experienceevent-all##xdm:eVar156##description##13811"
    },
    "xdm:eVar157": {
      "title": "eVar157",
      "type": "string",
      "description": "Custom conversion variable 157.",
      "meta:titleId": "experienceevent-all##xdm:eVar157##title##6131",
      "meta:descriptionId": "experienceevent-all##xdm:eVar157##description##15561"
    },
    "xdm:eVar158": {
      "title": "eVar158",
      "type": "string",
      "description": "Custom conversion variable 158.",
      "meta:titleId": "experienceevent-all##xdm:eVar158##title##21421",
      "meta:descriptionId": "experienceevent-all##xdm:eVar158##description##28671"
    },
    "xdm:eVar159": {
      "title": "eVar159",
      "type": "string",
      "description": "Custom conversion variable 159.",
      "meta:titleId": "experienceevent-all##xdm:eVar159##title##78341",
      "meta:descriptionId": "experienceevent-all##xdm:eVar159##description##83631"
    },
    "xdm:eVar160": {
      "title": "eVar160",
      "type": "string",
      "description": "Custom conversion variable 160.",
      "meta:titleId": "experienceevent-all##xdm:eVar160##title##74001",
      "meta:descriptionId": "experienceevent-all##xdm:eVar160##description##30661"
    },
    "xdm:eVar161": {
      "title": "eVar161",
      "type": "string",
      "description": "Custom conversion variable 161.",
      "meta:titleId": "experienceevent-all##xdm:eVar161##title##68131",
      "meta:descriptionId": "experienceevent-all##xdm:eVar161##description##57681"
    },
    "xdm:eVar162": {
      "title": "eVar162",
      "type": "string",
      "description": "Custom conversion variable 162.",
      "meta:titleId": "experienceevent-all##xdm:eVar162##title##27631",
      "meta:descriptionId": "experienceevent-all##xdm:eVar162##description##19921"
    },
    "xdm:eVar163": {
      "title": "eVar163",
      "type": "string",
      "description": "Custom conversion variable 163.",
      "meta:titleId": "experienceevent-all##xdm:eVar163##title##79341",
      "meta:descriptionId": "experienceevent-all##xdm:eVar163##description##5791"
    },
    "xdm:eVar164": {
      "title": "eVar164",
      "type": "string",
      "description": "Custom conversion variable 164.",
      "meta:titleId": "experienceevent-all##xdm:eVar164##title##31741",
      "meta:descriptionId": "experienceevent-all##xdm:eVar164##description##83421"
    },
    "xdm:eVar165": {
      "title": "eVar165",
      "type": "string",
      "description": "Custom conversion variable 165.",
      "meta:titleId": "experienceevent-all##xdm:eVar165##title##33461",
      "meta:descriptionId": "experienceevent-all##xdm:eVar165##description##54241"
    },
    "xdm:eVar166": {
      "title": "eVar166",
      "type": "string",
      "description": "Custom conversion variable 166.",
      "meta:titleId": "experienceevent-all##xdm:eVar166##title##13461",
      "meta:descriptionId": "experienceevent-all##xdm:eVar166##description##4151"
    },
    "xdm:eVar167": {
      "title": "eVar167",
      "type": "string",
      "description": "Custom conversion variable 167.",
      "meta:titleId": "experienceevent-all##xdm:eVar167##title##88781",
      "meta:descriptionId": "experienceevent-all##xdm:eVar167##description##91271"
    },
    "xdm:eVar168": {
      "title": "eVar168",
      "type": "string",
      "description": "Custom conversion variable 168.",
      "meta:titleId": "experienceevent-all##xdm:eVar168##title##33171",
      "meta:descriptionId": "experienceevent-all##xdm:eVar168##description##27411"
    },
    "xdm:eVar169": {
      "title": "eVar169",
      "type": "string",
      "description": "Custom conversion variable 169.",
      "meta:titleId": "experienceevent-all##xdm:eVar169##title##79401",
      "meta:descriptionId": "experienceevent-all##xdm:eVar169##description##74721"
    },
    "xdm:eVar170": {
      "title": "eVar170",
      "type": "string",
      "description": "Custom conversion variable 170.",
      "meta:titleId": "experienceevent-all##xdm:eVar170##title##39851",
      "meta:descriptionId": "experienceevent-all##xdm:eVar170##description##51741"
    },
    "xdm:eVar171": {
      "title": "eVar171",
      "type": "string",
      "description": "Custom conversion variable 171.",
      "meta:titleId": "experienceevent-all##xdm:eVar171##title##29891",
      "meta:descriptionId": "experienceevent-all##xdm:eVar171##description##62711"
    },
    "xdm:eVar172": {
      "title": "eVar172",
      "type": "string",
      "description": "Custom conversion variable 172.",
      "meta:titleId": "experienceevent-all##xdm:eVar172##title##2731",
      "meta:descriptionId": "experienceevent-all##xdm:eVar172##description##40591"
    },
    "xdm:eVar173": {
      "title": "eVar173",
      "type": "string",
      "description": "Custom conversion variable 173.",
      "meta:titleId": "experienceevent-all##xdm:eVar173##title##23511",
      "meta:descriptionId": "experienceevent-all##xdm:eVar173##description##44511"
    },
    "xdm:eVar174": {
      "title": "eVar174",
      "type": "string",
      "description": "Custom conversion variable 174.",
      "meta:titleId": "experienceevent-all##xdm:eVar174##title##84171",
      "meta:descriptionId": "experienceevent-all##xdm:eVar174##description##77351"
    },
    "xdm:eVar175": {
      "title": "eVar175",
      "type": "string",
      "description": "Custom conversion variable 175.",
      "meta:titleId": "experienceevent-all##xdm:eVar175##title##55791",
      "meta:descriptionId": "experienceevent-all##xdm:eVar175##description##61651"
    },
    "xdm:eVar176": {
      "title": "eVar176",
      "type": "string",
      "description": "Custom conversion variable 176.",
      "meta:titleId": "experienceevent-all##xdm:eVar176##title##3961",
      "meta:descriptionId": "experienceevent-all##xdm:eVar176##description##95281"
    },
    "xdm:eVar177": {
      "title": "eVar177",
      "type": "string",
      "description": "Custom conversion variable 177.",
      "meta:titleId": "experienceevent-all##xdm:eVar177##title##24381",
      "meta:descriptionId": "experienceevent-all##xdm:eVar177##description##14261"
    },
    "xdm:eVar178": {
      "title": "eVar178",
      "type": "string",
      "description": "Custom conversion variable 178.",
      "meta:titleId": "experienceevent-all##xdm:eVar178##title##75421",
      "meta:descriptionId": "experienceevent-all##xdm:eVar178##description##23391"
    },
    "xdm:eVar179": {
      "title": "eVar179",
      "type": "string",
      "description": "Custom conversion variable 179.",
      "meta:titleId": "experienceevent-all##xdm:eVar179##title##59271",
      "meta:descriptionId": "experienceevent-all##xdm:eVar179##description##60321"
    },
    "xdm:eVar180": {
      "title": "eVar180",
      "type": "string",
      "description": "Custom conversion variable 180.",
      "meta:titleId": "experienceevent-all##xdm:eVar180##title##19771",
      "meta:descriptionId": "experienceevent-all##xdm:eVar180##description##41751"
    },
    "xdm:eVar181": {
      "title": "eVar181",
      "type": "string",
      "description": "Custom conversion variable 181.",
      "meta:titleId": "experienceevent-all##xdm:eVar181##title##3651",
      "meta:descriptionId": "experienceevent-all##xdm:eVar181##description##14551"
    },
    "xdm:eVar182": {
      "title": "eVar182",
      "type": "string",
      "description": "Custom conversion variable 182.",
      "meta:titleId": "experienceevent-all##xdm:eVar182##title##50301",
      "meta:descriptionId": "experienceevent-all##xdm:eVar182##description##69131"
    },
    "xdm:eVar183": {
      "title": "eVar183",
      "type": "string",
      "description": "Custom conversion variable 183.",
      "meta:titleId": "experienceevent-all##xdm:eVar183##title##17701",
      "meta:descriptionId": "experienceevent-all##xdm:eVar183##description##23351"
    },
    "xdm:eVar184": {
      "title": "eVar184",
      "type": "string",
      "description": "Custom conversion variable 184.",
      "meta:titleId": "experienceevent-all##xdm:eVar184##title##79771",
      "meta:descriptionId": "experienceevent-all##xdm:eVar184##description##43631"
    },
    "xdm:eVar185": {
      "title": "eVar185",
      "type": "string",
      "description": "Custom conversion variable 185.",
      "meta:titleId": "experienceevent-all##xdm:eVar185##title##47441",
      "meta:descriptionId": "experienceevent-all##xdm:eVar185##description##12001"
    },
    "xdm:eVar186": {
      "title": "eVar186",
      "type": "string",
      "description": "Custom conversion variable 186.",
      "meta:titleId": "experienceevent-all##xdm:eVar186##title##73791",
      "meta:descriptionId": "experienceevent-all##xdm:eVar186##description##11451"
    },
    "xdm:eVar187": {
      "title": "eVar187",
      "type": "string",
      "description": "Custom conversion variable 187.",
      "meta:titleId": "experienceevent-all##xdm:eVar187##title##17451",
      "meta:descriptionId": "experienceevent-all##xdm:eVar187##description##40991"
    },
    "xdm:eVar188": {
      "title": "eVar188",
      "type": "string",
      "description": "Custom conversion variable 188.",
      "meta:titleId": "experienceevent-all##xdm:eVar188##title##95011",
      "meta:descriptionId": "experienceevent-all##xdm:eVar188##description##34101"
    },
    "xdm:eVar189": {
      "title": "eVar189",
      "type": "string",
      "description": "Custom conversion variable 189.",
      "meta:titleId": "experienceevent-all##xdm:eVar189##title##88661",
      "meta:descriptionId": "experienceevent-all##xdm:eVar189##description##91121"
    },
    "xdm:eVar190": {
      "title": "eVar190",
      "type": "string",
      "description": "Custom conversion variable 190.",
      "meta:titleId": "experienceevent-all##xdm:eVar190##title##98101",
      "meta:descriptionId": "experienceevent-all##xdm:eVar190##description##67671"
    },
    "xdm:eVar191": {
      "title": "eVar191",
      "type": "string",
      "description": "Custom conversion variable 191.",
      "meta:titleId": "experienceevent-all##xdm:eVar191##title##82831",
      "meta:descriptionId": "experienceevent-all##xdm:eVar191##description##67501"
    },
    "xdm:eVar192": {
      "title": "eVar192",
      "type": "string",
      "description": "Custom conversion variable 192.",
      "meta:titleId": "experienceevent-all##xdm:eVar192##title##63711",
      "meta:descriptionId": "experienceevent-all##xdm:eVar192##description##97331"
    },
    "xdm:eVar193": {
      "title": "eVar193",
      "type": "string",
      "description": "Custom conversion variable 193.",
      "meta:titleId": "experienceevent-all##xdm:eVar193##title##9121",
      "meta:descriptionId": "experienceevent-all##xdm:eVar193##description##71561"
    },
    "xdm:eVar194": {
      "title": "eVar194",
      "type": "string",
      "description": "Custom conversion variable 194.",
      "meta:titleId": "experienceevent-all##xdm:eVar194##title##9101",
      "meta:descriptionId": "experienceevent-all##xdm:eVar194##description##91761"
    },
    "xdm:eVar195": {
      "title": "eVar195",
      "type": "string",
      "description": "Custom conversion variable 195.",
      "meta:titleId": "experienceevent-all##xdm:eVar195##title##88471",
      "meta:descriptionId": "experienceevent-all##xdm:eVar195##description##39381"
    },
    "xdm:eVar196": {
      "title": "eVar196",
      "type": "string",
      "description": "Custom conversion variable 196.",
      "meta:titleId": "experienceevent-all##xdm:eVar196##title##18251",
      "meta:descriptionId": "experienceevent-all##xdm:eVar196##description##92391"
    },
    "xdm:eVar197": {
      "title": "eVar197",
      "type": "string",
      "description": "Custom conversion variable 197.",
      "meta:titleId": "experienceevent-all##xdm:eVar197##title##41901",
      "meta:descriptionId": "experienceevent-all##xdm:eVar197##description##33161"
    },
    "xdm:eVar198": {
      "title": "eVar198",
      "type": "string",
      "description": "Custom conversion variable 198.",
      "meta:titleId": "experienceevent-all##xdm:eVar198##title##87331",
      "meta:descriptionId": "experienceevent-all##xdm:eVar198##description##95731"
    },
    "xdm:eVar199": {
      "title": "eVar199",
      "type": "string",
      "description": "Custom conversion variable 199.",
      "meta:titleId": "experienceevent-all##xdm:eVar199##title##33911",
      "meta:descriptionId": "experienceevent-all##xdm:eVar199##description##35711"
    },
    "xdm:eVar200": {
      "title": "eVar200",
      "type": "string",
      "description": "Custom conversion variable 200.",
      "meta:titleId": "experienceevent-all##xdm:eVar200##title##97391",
      "meta:descriptionId": "experienceevent-all##xdm:eVar200##description##35361"
    },
    "xdm:eVar201": {
      "title": "eVar201",
      "type": "string",
      "description": "Custom conversion variable 201.",
      "meta:titleId": "experienceevent-all##xdm:eVar201##title##74031",
      "meta:descriptionId": "experienceevent-all##xdm:eVar201##description##28941"
    },
    "xdm:eVar202": {
      "title": "eVar202",
      "type": "string",
      "description": "Custom conversion variable 202.",
      "meta:titleId": "experienceevent-all##xdm:eVar202##title##15671",
      "meta:descriptionId": "experienceevent-all##xdm:eVar202##description##71981"
    },
    "xdm:eVar203": {
      "title": "eVar203",
      "type": "string",
      "description": "Custom conversion variable 203.",
      "meta:titleId": "experienceevent-all##xdm:eVar203##title##66481",
      "meta:descriptionId": "experienceevent-all##xdm:eVar203##description##66461"
    },
    "xdm:eVar204": {
      "title": "eVar204",
      "type": "string",
      "description": "Custom conversion variable 204.",
      "meta:titleId": "experienceevent-all##xdm:eVar204##title##24201",
      "meta:descriptionId": "experienceevent-all##xdm:eVar204##description##47681"
    },
    "xdm:eVar205": {
      "title": "eVar205",
      "type": "string",
      "description": "Custom conversion variable 205.",
      "meta:titleId": "experienceevent-all##xdm:eVar205##title##41251",
      "meta:descriptionId": "experienceevent-all##xdm:eVar205##description##88181"
    },
    "xdm:eVar206": {
      "title": "eVar206",
      "type": "string",
      "description": "Custom conversion variable 206.",
      "meta:titleId": "experienceevent-all##xdm:eVar206##title##6871",
      "meta:descriptionId": "experienceevent-all##xdm:eVar206##description##45201"
    },
    "xdm:eVar207": {
      "title": "eVar207",
      "type": "string",
      "description": "Custom conversion variable 207.",
      "meta:titleId": "experienceevent-all##xdm:eVar207##title##80891",
      "meta:descriptionId": "experienceevent-all##xdm:eVar207##description##791"
    },
    "xdm:eVar208": {
      "title": "eVar208",
      "type": "string",
      "description": "Custom conversion variable 208.",
      "meta:titleId": "experienceevent-all##xdm:eVar208##title##25241",
      "meta:descriptionId": "experienceevent-all##xdm:eVar208##description##60461"
    },
    "xdm:eVar209": {
      "title": "eVar209",
      "type": "string",
      "description": "Custom conversion variable 209.",
      "meta:titleId": "experienceevent-all##xdm:eVar209##title##92741",
      "meta:descriptionId": "experienceevent-all##xdm:eVar209##description##50461"
    },
    "xdm:eVar210": {
      "title": "eVar210",
      "type": "string",
      "description": "Custom conversion variable 210.",
      "meta:titleId": "experienceevent-all##xdm:eVar210##title##38991",
      "meta:descriptionId": "experienceevent-all##xdm:eVar210##description##55421"
    },
    "xdm:eVar211": {
      "title": "eVar211",
      "type": "string",
      "description": "Custom conversion variable 211.",
      "meta:titleId": "experienceevent-all##xdm:eVar211##title##6701",
      "meta:descriptionId": "experienceevent-all##xdm:eVar211##description##49671"
    },
    "xdm:eVar212": {
      "title": "eVar212",
      "type": "string",
      "description": "Custom conversion variable 212.",
      "meta:titleId": "experienceevent-all##xdm:eVar212##title##86451",
      "meta:descriptionId": "experienceevent-all##xdm:eVar212##description##90001"
    },
    "xdm:eVar213": {
      "title": "eVar213",
      "type": "string",
      "description": "Custom conversion variable 213.",
      "meta:titleId": "experienceevent-all##xdm:eVar213##title##46791",
      "meta:descriptionId": "experienceevent-all##xdm:eVar213##description##27721"
    },
    "xdm:eVar214": {
      "title": "eVar214",
      "type": "string",
      "description": "Custom conversion variable 214.",
      "meta:titleId": "experienceevent-all##xdm:eVar214##title##66481",
      "meta:descriptionId": "experienceevent-all##xdm:eVar214##description##87631"
    },
    "xdm:eVar215": {
      "title": "eVar215",
      "type": "string",
      "description": "Custom conversion variable 215.",
      "meta:titleId": "experienceevent-all##xdm:eVar215##title##10011",
      "meta:descriptionId": "experienceevent-all##xdm:eVar215##description##28811"
    },
    "xdm:eVar216": {
      "title": "eVar216",
      "type": "string",
      "description": "Custom conversion variable 216.",
      "meta:titleId": "experienceevent-all##xdm:eVar216##title##35581",
      "meta:descriptionId": "experienceevent-all##xdm:eVar216##description##46271"
    },
    "xdm:eVar217": {
      "title": "eVar217",
      "type": "string",
      "description": "Custom conversion variable 217.",
      "meta:titleId": "experienceevent-all##xdm:eVar217##title##25951",
      "meta:descriptionId": "experienceevent-all##xdm:eVar217##description##93931"
    },
    "xdm:eVar218": {
      "title": "eVar218",
      "type": "string",
      "description": "Custom conversion variable 218.",
      "meta:titleId": "experienceevent-all##xdm:eVar218##title##97711",
      "meta:descriptionId": "experienceevent-all##xdm:eVar218##description##13221"
    },
    "xdm:eVar219": {
      "title": "eVar219",
      "type": "string",
      "description": "Custom conversion variable 219.",
      "meta:titleId": "experienceevent-all##xdm:eVar219##title##27751",
      "meta:descriptionId": "experienceevent-all##xdm:eVar219##description##98641"
    },
    "xdm:eVar220": {
      "title": "eVar220",
      "type": "string",
      "description": "Custom conversion variable 220.",
      "meta:titleId": "experienceevent-all##xdm:eVar220##title##51621",
      "meta:descriptionId": "experienceevent-all##xdm:eVar220##description##80571"
    },
    "xdm:eVar221": {
      "title": "eVar221",
      "type": "string",
      "description": "Custom conversion variable 221.",
      "meta:titleId": "experienceevent-all##xdm:eVar221##title##42361",
      "meta:descriptionId": "experienceevent-all##xdm:eVar221##description##27981"
    },
    "xdm:eVar222": {
      "title": "eVar222",
      "type": "string",
      "description": "Custom conversion variable 222.",
      "meta:titleId": "experienceevent-all##xdm:eVar222##title##67131",
      "meta:descriptionId": "experienceevent-all##xdm:eVar222##description##1521"
    },
    "xdm:eVar223": {
      "title": "eVar223",
      "type": "string",
      "description": "Custom conversion variable 223.",
      "meta:titleId": "experienceevent-all##xdm:eVar223##title##67521",
      "meta:descriptionId": "experienceevent-all##xdm:eVar223##description##58331"
    },
    "xdm:eVar224": {
      "title": "eVar224",
      "type": "string",
      "description": "Custom conversion variable 224.",
      "meta:titleId": "experienceevent-all##xdm:eVar224##title##24731",
      "meta:descriptionId": "experienceevent-all##xdm:eVar224##description##67441"
    },
    "xdm:eVar225": {
      "title": "eVar225",
      "type": "string",
      "description": "Custom conversion variable 225.",
      "meta:titleId": "experienceevent-all##xdm:eVar225##title##53631",
      "meta:descriptionId": "experienceevent-all##xdm:eVar225##description##46601"
    },
    "xdm:eVar226": {
      "title": "eVar226",
      "type": "string",
      "description": "Custom conversion variable 226.",
      "meta:titleId": "experienceevent-all##xdm:eVar226##title##67881",
      "meta:descriptionId": "experienceevent-all##xdm:eVar226##description##92951"
    },
    "xdm:eVar227": {
      "title": "eVar227",
      "type": "string",
      "description": "Custom conversion variable 227.",
      "meta:titleId": "experienceevent-all##xdm:eVar227##title##72171",
      "meta:descriptionId": "experienceevent-all##xdm:eVar227##description##34451"
    },
    "xdm:eVar228": {
      "title": "eVar228",
      "type": "string",
      "description": "Custom conversion variable 228.",
      "meta:titleId": "experienceevent-all##xdm:eVar228##title##91581",
      "meta:descriptionId": "experienceevent-all##xdm:eVar228##description##62881"
    },
    "xdm:eVar229": {
      "title": "eVar229",
      "type": "string",
      "description": "Custom conversion variable 229.",
      "meta:titleId": "experienceevent-all##xdm:eVar229##title##51101",
      "meta:descriptionId": "experienceevent-all##xdm:eVar229##description##27261"
    },
    "xdm:eVar230": {
      "title": "eVar230",
      "type": "string",
      "description": "Custom conversion variable 230.",
      "meta:titleId": "experienceevent-all##xdm:eVar230##title##73971",
      "meta:descriptionId": "experienceevent-all##xdm:eVar230##description##39231"
    },
    "xdm:eVar231": {
      "title": "eVar231",
      "type": "string",
      "description": "Custom conversion variable 231.",
      "meta:titleId": "experienceevent-all##xdm:eVar231##title##20791",
      "meta:descriptionId": "experienceevent-all##xdm:eVar231##description##47331"
    },
    "xdm:eVar232": {
      "title": "eVar232",
      "type": "string",
      "description": "Custom conversion variable 232.",
      "meta:titleId": "experienceevent-all##xdm:eVar232##title##7331",
      "meta:descriptionId": "experienceevent-all##xdm:eVar232##description##36261"
    },
    "xdm:eVar233": {
      "title": "eVar233",
      "type": "string",
      "description": "Custom conversion variable 233.",
      "meta:titleId": "experienceevent-all##xdm:eVar233##title##24971",
      "meta:descriptionId": "experienceevent-all##xdm:eVar233##description##7901"
    },
    "xdm:eVar234": {
      "title": "eVar234",
      "type": "string",
      "description": "Custom conversion variable 234.",
      "meta:titleId": "experienceevent-all##xdm:eVar234##title##4871",
      "meta:descriptionId": "experienceevent-all##xdm:eVar234##description##24021"
    },
    "xdm:eVar235": {
      "title": "eVar235",
      "type": "string",
      "description": "Custom conversion variable 235.",
      "meta:titleId": "experienceevent-all##xdm:eVar235##title##51791",
      "meta:descriptionId": "experienceevent-all##xdm:eVar235##description##84821"
    },
    "xdm:eVar236": {
      "title": "eVar236",
      "type": "string",
      "description": "Custom conversion variable 236.",
      "meta:titleId": "experienceevent-all##xdm:eVar236##title##81961",
      "meta:descriptionId": "experienceevent-all##xdm:eVar236##description##59961"
    },
    "xdm:eVar237": {
      "title": "eVar237",
      "type": "string",
      "description": "Custom conversion variable 237.",
      "meta:titleId": "experienceevent-all##xdm:eVar237##title##32681",
      "meta:descriptionId": "experienceevent-all##xdm:eVar237##description##66761"
    },
    "xdm:eVar238": {
      "title": "eVar238",
      "type": "string",
      "description": "Custom conversion variable 238.",
      "meta:titleId": "experienceevent-all##xdm:eVar238##title##93331",
      "meta:descriptionId": "experienceevent-all##xdm:eVar238##description##20051"
    },
    "xdm:eVar239": {
      "title": "eVar239",
      "type": "string",
      "description": "Custom conversion variable 239.",
      "meta:titleId": "experienceevent-all##xdm:eVar239##title##9041",
      "meta:descriptionId": "experienceevent-all##xdm:eVar239##description##5331"
    },
    "xdm:eVar240": {
      "title": "eVar240",
      "type": "string",
      "description": "Custom conversion variable 240.",
      "meta:titleId": "experienceevent-all##xdm:eVar240##title##98721",
      "meta:descriptionId": "experienceevent-all##xdm:eVar240##description##52421"
    },
    "xdm:eVar241": {
      "title": "eVar241",
      "type": "string",
      "description": "Custom conversion variable 241.",
      "meta:titleId": "experienceevent-all##xdm:eVar241##title##44241",
      "meta:descriptionId": "experienceevent-all##xdm:eVar241##description##37121"
    },
    "xdm:eVar242": {
      "title": "eVar242",
      "type": "string",
      "description": "Custom conversion variable 242.",
      "meta:titleId": "experienceevent-all##xdm:eVar242##title##85731",
      "meta:descriptionId": "experienceevent-all##xdm:eVar242##description##96331"
    },
    "xdm:eVar243": {
      "title": "eVar243",
      "type": "string",
      "description": "Custom conversion variable 243.",
      "meta:titleId": "experienceevent-all##xdm:eVar243##title##48191",
      "meta:descriptionId": "experienceevent-all##xdm:eVar243##description##73821"
    },
    "xdm:eVar244": {
      "title": "eVar244",
      "type": "string",
      "description": "Custom conversion variable 244.",
      "meta:titleId": "experienceevent-all##xdm:eVar244##title##29501",
      "meta:descriptionId": "experienceevent-all##xdm:eVar244##description##91571"
    },
    "xdm:eVar245": {
      "title": "eVar245",
      "type": "string",
      "description": "Custom conversion variable 245.",
      "meta:titleId": "experienceevent-all##xdm:eVar245##title##28421",
      "meta:descriptionId": "experienceevent-all##xdm:eVar245##description##97851"
    },
    "xdm:eVar246": {
      "title": "eVar246",
      "type": "string",
      "description": "Custom conversion variable 246.",
      "meta:titleId": "experienceevent-all##xdm:eVar246##title##82551",
      "meta:descriptionId": "experienceevent-all##xdm:eVar246##description##47801"
    },
    "xdm:eVar247": {
      "title": "eVar247",
      "type": "string",
      "description": "Custom conversion variable 247.",
      "meta:titleId": "experienceevent-all##xdm:eVar247##title##41371",
      "meta:descriptionId": "experienceevent-all##xdm:eVar247##description##46471"
    },
    "xdm:eVar248": {
      "title": "eVar248",
      "type": "string",
      "description": "Custom conversion variable 248.",
      "meta:titleId": "experienceevent-all##xdm:eVar248##title##4241",
      "meta:descriptionId": "experienceevent-all##xdm:eVar248##description##86071"
    },
    "xdm:eVar249": {
      "title": "eVar249",
      "type": "string",
      "description": "Custom conversion variable 249.",
      "meta:titleId": "experienceevent-all##xdm:eVar249##title##57191",
      "meta:descriptionId": "experienceevent-all##xdm:eVar249##description##33661"
    },
    "xdm:eVar250": {
      "title": "eVar250",
      "type": "string",
      "description": "Custom conversion variable 250.",
      "meta:titleId": "experienceevent-all##xdm:eVar250##title##3421",
      "meta:descriptionId": "experienceevent-all##xdm:eVar250##description##95421"
    }
  },
  "meta:titleId": "experienceevent-all##xdm:eVars##title##45611",
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
      "$ref": "https://ns.adobe.com/experience/analytics/listdetails",
      "meta:titleId": "experienceevent-all##xdm:hier1##title##87431",
      "meta:descriptionId": "experienceevent-all##xdm:hier1##description##71831"
    },
    "xdm:hier2": {
      "title": "hier2",
      "description": "Custom hierarchy variable 2.",
      "$ref": "https://ns.adobe.com/experience/analytics/listdetails",
      "meta:titleId": "experienceevent-all##xdm:hier2##title##54211",
      "meta:descriptionId": "experienceevent-all##xdm:hier2##description##12561"
    },
    "xdm:hier3": {
      "title": "hier3",
      "description": "Custom hierarchy variable 3.",
      "$ref": "https://ns.adobe.com/experience/analytics/listdetails",
      "meta:titleId": "experienceevent-all##xdm:hier3##title##31931",
      "meta:descriptionId": "experienceevent-all##xdm:hier3##description##40041"
    },
    "xdm:hier4": {
      "title": "hier4",
      "description": "Custom hierarchy variable 4.",
      "$ref": "https://ns.adobe.com/experience/analytics/listdetails",
      "meta:titleId": "experienceevent-all##xdm:hier4##title##99151",
      "meta:descriptionId": "experienceevent-all##xdm:hier4##description##64681"
    },
    "xdm:hier5": {
      "title": "hier5",
      "description": "Custom hierarchy variable 5.",
      "$ref": "https://ns.adobe.com/experience/analytics/listdetails",
      "meta:titleId": "experienceevent-all##xdm:hier5##title##87131",
      "meta:descriptionId": "experienceevent-all##xdm:hier5##description##63421"
    }
  },
  "meta:titleId": "experienceevent-all##xdm:hierarchies##title##27771",
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
      "$ref": "https://ns.adobe.com/experience/analytics/listdetails",
      "meta:titleId": "experienceevent-all##xdm:prop1##title##20171",
      "meta:descriptionId": "experienceevent-all##xdm:prop1##description##18841"
    },
    "xdm:prop2": {
      "title": "prop2",
      "description": "Custom property variable2",
      "$ref": "https://ns.adobe.com/experience/analytics/listdetails",
      "meta:titleId": "experienceevent-all##xdm:prop2##title##78161",
      "meta:descriptionId": "experienceevent-all##xdm:prop2##description##75881"
    },
    "xdm:prop3": {
      "title": "prop3",
      "description": "Custom property variable3",
      "$ref": "https://ns.adobe.com/experience/analytics/listdetails",
      "meta:titleId": "experienceevent-all##xdm:prop3##title##74091",
      "meta:descriptionId": "experienceevent-all##xdm:prop3##description##17251"
    },
    "xdm:prop4": {
      "title": "prop4",
      "description": "Custom property variable4",
      "$ref": "https://ns.adobe.com/experience/analytics/listdetails",
      "meta:titleId": "experienceevent-all##xdm:prop4##title##67211",
      "meta:descriptionId": "experienceevent-all##xdm:prop4##description##9811"
    },
    "xdm:prop5": {
      "title": "prop5",
      "description": "Custom property variable5",
      "$ref": "https://ns.adobe.com/experience/analytics/listdetails",
      "meta:titleId": "experienceevent-all##xdm:prop5##title##41821",
      "meta:descriptionId": "experienceevent-all##xdm:prop5##description##34901"
    },
    "xdm:prop6": {
      "title": "prop6",
      "description": "Custom property variable6",
      "$ref": "https://ns.adobe.com/experience/analytics/listdetails",
      "meta:titleId": "experienceevent-all##xdm:prop6##title##99521",
      "meta:descriptionId": "experienceevent-all##xdm:prop6##description##69541"
    },
    "xdm:prop7": {
      "title": "prop7",
      "description": "Custom property variable7",
      "$ref": "https://ns.adobe.com/experience/analytics/listdetails",
      "meta:titleId": "experienceevent-all##xdm:prop7##title##59891",
      "meta:descriptionId": "experienceevent-all##xdm:prop7##description##161"
    },
    "xdm:prop8": {
      "title": "prop8",
      "description": "Custom property variable8",
      "$ref": "https://ns.adobe.com/experience/analytics/listdetails",
      "meta:titleId": "experienceevent-all##xdm:prop8##title##79981",
      "meta:descriptionId": "experienceevent-all##xdm:prop8##description##59601"
    },
    "xdm:prop9": {
      "title": "prop9",
      "description": "Custom property variable9",
      "$ref": "https://ns.adobe.com/experience/analytics/listdetails",
      "meta:titleId": "experienceevent-all##xdm:prop9##title##75431",
      "meta:descriptionId": "experienceevent-all##xdm:prop9##description##94031"
    },
    "xdm:prop10": {
      "title": "prop10",
      "description": "Custom property variable10",
      "$ref": "https://ns.adobe.com/experience/analytics/listdetails",
      "meta:titleId": "experienceevent-all##xdm:prop10##title##10721",
      "meta:descriptionId": "experienceevent-all##xdm:prop10##description##89371"
    },
    "xdm:prop11": {
      "title": "prop11",
      "description": "Custom property variable11",
      "$ref": "https://ns.adobe.com/experience/analytics/listdetails",
      "meta:titleId": "experienceevent-all##xdm:prop11##title##33861",
      "meta:descriptionId": "experienceevent-all##xdm:prop11##description##74641"
    },
    "xdm:prop12": {
      "title": "prop12",
      "description": "Custom property variable12",
      "$ref": "https://ns.adobe.com/experience/analytics/listdetails",
      "meta:titleId": "experienceevent-all##xdm:prop12##title##21191",
      "meta:descriptionId": "experienceevent-all##xdm:prop12##description##61351"
    },
    "xdm:prop13": {
      "title": "prop13",
      "description": "Custom property variable13",
      "$ref": "https://ns.adobe.com/experience/analytics/listdetails",
      "meta:titleId": "experienceevent-all##xdm:prop13##title##69201",
      "meta:descriptionId": "experienceevent-all##xdm:prop13##description##95831"
    },
    "xdm:prop14": {
      "title": "prop14",
      "description": "Custom property variable14",
      "$ref": "https://ns.adobe.com/experience/analytics/listdetails",
      "meta:titleId": "experienceevent-all##xdm:prop14##title##20291",
      "meta:descriptionId": "experienceevent-all##xdm:prop14##description##23981"
    },
    "xdm:prop15": {
      "title": "prop15",
      "description": "Custom property variable15",
      "$ref": "https://ns.adobe.com/experience/analytics/listdetails",
      "meta:titleId": "experienceevent-all##xdm:prop15##title##64761",
      "meta:descriptionId": "experienceevent-all##xdm:prop15##description##17311"
    },
    "xdm:prop16": {
      "title": "prop16",
      "description": "Custom property variable16",
      "$ref": "https://ns.adobe.com/experience/analytics/listdetails",
      "meta:titleId": "experienceevent-all##xdm:prop16##title##63241",
      "meta:descriptionId": "experienceevent-all##xdm:prop16##description##29021"
    },
    "xdm:prop17": {
      "title": "prop17",
      "description": "Custom property variable17",
      "$ref": "https://ns.adobe.com/experience/analytics/listdetails",
      "meta:titleId": "experienceevent-all##xdm:prop17##title##54231",
      "meta:descriptionId": "experienceevent-all##xdm:prop17##description##3141"
    },
    "xdm:prop18": {
      "title": "prop18",
      "description": "Custom property variable18",
      "$ref": "https://ns.adobe.com/experience/analytics/listdetails",
      "meta:titleId": "experienceevent-all##xdm:prop18##title##63281",
      "meta:descriptionId": "experienceevent-all##xdm:prop18##description##55701"
    },
    "xdm:prop19": {
      "title": "prop19",
      "description": "Custom property variable19",
      "$ref": "https://ns.adobe.com/experience/analytics/listdetails",
      "meta:titleId": "experienceevent-all##xdm:prop19##title##25511",
      "meta:descriptionId": "experienceevent-all##xdm:prop19##description##98781"
    },
    "xdm:prop20": {
      "title": "prop20",
      "description": "Custom property variable20",
      "$ref": "https://ns.adobe.com/experience/analytics/listdetails",
      "meta:titleId": "experienceevent-all##xdm:prop20##title##73851",
      "meta:descriptionId": "experienceevent-all##xdm:prop20##description##98551"
    },
    "xdm:prop21": {
      "title": "prop21",
      "description": "Custom property variable21",
      "$ref": "https://ns.adobe.com/experience/analytics/listdetails",
      "meta:titleId": "experienceevent-all##xdm:prop21##title##63011",
      "meta:descriptionId": "experienceevent-all##xdm:prop21##description##17861"
    },
    "xdm:prop22": {
      "title": "prop22",
      "description": "Custom property variable22",
      "$ref": "https://ns.adobe.com/experience/analytics/listdetails",
      "meta:titleId": "experienceevent-all##xdm:prop22##title##28371",
      "meta:descriptionId": "experienceevent-all##xdm:prop22##description##39301"
    },
    "xdm:prop23": {
      "title": "prop23",
      "description": "Custom property variable23",
      "$ref": "https://ns.adobe.com/experience/analytics/listdetails",
      "meta:titleId": "experienceevent-all##xdm:prop23##title##17511",
      "meta:descriptionId": "experienceevent-all##xdm:prop23##description##99051"
    },
    "xdm:prop24": {
      "title": "prop24",
      "description": "Custom property variable24",
      "$ref": "https://ns.adobe.com/experience/analytics/listdetails",
      "meta:titleId": "experienceevent-all##xdm:prop24##title##60701",
      "meta:descriptionId": "experienceevent-all##xdm:prop24##description##64241"
    },
    "xdm:prop25": {
      "title": "prop25",
      "description": "Custom property variable25",
      "$ref": "https://ns.adobe.com/experience/analytics/listdetails",
      "meta:titleId": "experienceevent-all##xdm:prop25##title##27721",
      "meta:descriptionId": "experienceevent-all##xdm:prop25##description##67941"
    },
    "xdm:prop26": {
      "title": "prop26",
      "description": "Custom property variable26",
      "$ref": "https://ns.adobe.com/experience/analytics/listdetails",
      "meta:titleId": "experienceevent-all##xdm:prop26##title##90281",
      "meta:descriptionId": "experienceevent-all##xdm:prop26##description##43401"
    },
    "xdm:prop27": {
      "title": "prop27",
      "description": "Custom property variable27",
      "$ref": "https://ns.adobe.com/experience/analytics/listdetails",
      "meta:titleId": "experienceevent-all##xdm:prop27##title##61351",
      "meta:descriptionId": "experienceevent-all##xdm:prop27##description##82561"
    },
    "xdm:prop28": {
      "title": "prop28",
      "description": "Custom property variable28",
      "$ref": "https://ns.adobe.com/experience/analytics/listdetails",
      "meta:titleId": "experienceevent-all##xdm:prop28##title##73991",
      "meta:descriptionId": "experienceevent-all##xdm:prop28##description##8981"
    },
    "xdm:prop29": {
      "title": "prop29",
      "description": "Custom property variable29",
      "$ref": "https://ns.adobe.com/experience/analytics/listdetails",
      "meta:titleId": "experienceevent-all##xdm:prop29##title##29281",
      "meta:descriptionId": "experienceevent-all##xdm:prop29##description##18881"
    },
    "xdm:prop30": {
      "title": "prop30",
      "description": "Custom property variable30",
      "$ref": "https://ns.adobe.com/experience/analytics/listdetails",
      "meta:titleId": "experienceevent-all##xdm:prop30##title##61961",
      "meta:descriptionId": "experienceevent-all##xdm:prop30##description##14741"
    },
    "xdm:prop31": {
      "title": "prop31",
      "description": "Custom property variable31",
      "$ref": "https://ns.adobe.com/experience/analytics/listdetails",
      "meta:titleId": "experienceevent-all##xdm:prop31##title##5801",
      "meta:descriptionId": "experienceevent-all##xdm:prop31##description##75201"
    },
    "xdm:prop32": {
      "title": "prop32",
      "description": "Custom property variable32",
      "$ref": "https://ns.adobe.com/experience/analytics/listdetails",
      "meta:titleId": "experienceevent-all##xdm:prop32##title##14781",
      "meta:descriptionId": "experienceevent-all##xdm:prop32##description##20891"
    },
    "xdm:prop33": {
      "title": "prop33",
      "description": "Custom property variable33",
      "$ref": "https://ns.adobe.com/experience/analytics/listdetails",
      "meta:titleId": "experienceevent-all##xdm:prop33##title##581",
      "meta:descriptionId": "experienceevent-all##xdm:prop33##description##46991"
    },
    "xdm:prop34": {
      "title": "prop34",
      "description": "Custom property variable34",
      "$ref": "https://ns.adobe.com/experience/analytics/listdetails",
      "meta:titleId": "experienceevent-all##xdm:prop34##title##61341",
      "meta:descriptionId": "experienceevent-all##xdm:prop34##description##31071"
    },
    "xdm:prop35": {
      "title": "prop35",
      "description": "Custom property variable35",
      "$ref": "https://ns.adobe.com/experience/analytics/listdetails",
      "meta:titleId": "experienceevent-all##xdm:prop35##title##13041",
      "meta:descriptionId": "experienceevent-all##xdm:prop35##description##90331"
    },
    "xdm:prop36": {
      "title": "prop36",
      "description": "Custom property variable36",
      "$ref": "https://ns.adobe.com/experience/analytics/listdetails",
      "meta:titleId": "experienceevent-all##xdm:prop36##title##64861",
      "meta:descriptionId": "experienceevent-all##xdm:prop36##description##13521"
    },
    "xdm:prop37": {
      "title": "prop37",
      "description": "Custom property variable37",
      "$ref": "https://ns.adobe.com/experience/analytics/listdetails",
      "meta:titleId": "experienceevent-all##xdm:prop37##title##63211",
      "meta:descriptionId": "experienceevent-all##xdm:prop37##description##3421"
    },
    "xdm:prop38": {
      "title": "prop38",
      "description": "Custom property variable38",
      "$ref": "https://ns.adobe.com/experience/analytics/listdetails",
      "meta:titleId": "experienceevent-all##xdm:prop38##title##42981",
      "meta:descriptionId": "experienceevent-all##xdm:prop38##description##10321"
    },
    "xdm:prop39": {
      "title": "prop39",
      "description": "Custom property variable39",
      "$ref": "https://ns.adobe.com/experience/analytics/listdetails",
      "meta:titleId": "experienceevent-all##xdm:prop39##title##93341",
      "meta:descriptionId": "experienceevent-all##xdm:prop39##description##65831"
    },
    "xdm:prop40": {
      "title": "prop40",
      "description": "Custom property variable40",
      "$ref": "https://ns.adobe.com/experience/analytics/listdetails",
      "meta:titleId": "experienceevent-all##xdm:prop40##title##56941",
      "meta:descriptionId": "experienceevent-all##xdm:prop40##description##57841"
    },
    "xdm:prop41": {
      "title": "prop41",
      "description": "Custom property variable41",
      "$ref": "https://ns.adobe.com/experience/analytics/listdetails",
      "meta:titleId": "experienceevent-all##xdm:prop41##title##29501",
      "meta:descriptionId": "experienceevent-all##xdm:prop41##description##5041"
    },
    "xdm:prop42": {
      "title": "prop42",
      "description": "Custom property variable42",
      "$ref": "https://ns.adobe.com/experience/analytics/listdetails",
      "meta:titleId": "experienceevent-all##xdm:prop42##title##62981",
      "meta:descriptionId": "experienceevent-all##xdm:prop42##description##9431"
    },
    "xdm:prop43": {
      "title": "prop43",
      "description": "Custom property variable43",
      "$ref": "https://ns.adobe.com/experience/analytics/listdetails",
      "meta:titleId": "experienceevent-all##xdm:prop43##title##20321",
      "meta:descriptionId": "experienceevent-all##xdm:prop43##description##50011"
    },
    "xdm:prop44": {
      "title": "prop44",
      "description": "Custom property variable44",
      "$ref": "https://ns.adobe.com/experience/analytics/listdetails",
      "meta:titleId": "experienceevent-all##xdm:prop44##title##33351",
      "meta:descriptionId": "experienceevent-all##xdm:prop44##description##20821"
    },
    "xdm:prop45": {
      "title": "prop45",
      "description": "Custom property variable45",
      "$ref": "https://ns.adobe.com/experience/analytics/listdetails",
      "meta:titleId": "experienceevent-all##xdm:prop45##title##531",
      "meta:descriptionId": "experienceevent-all##xdm:prop45##description##74351"
    },
    "xdm:prop46": {
      "title": "prop46",
      "description": "Custom property variable46",
      "$ref": "https://ns.adobe.com/experience/analytics/listdetails",
      "meta:titleId": "experienceevent-all##xdm:prop46##title##81881",
      "meta:descriptionId": "experienceevent-all##xdm:prop46##description##80471"
    },
    "xdm:prop47": {
      "title": "prop47",
      "description": "Custom property variable47",
      "$ref": "https://ns.adobe.com/experience/analytics/listdetails",
      "meta:titleId": "experienceevent-all##xdm:prop47##title##8691",
      "meta:descriptionId": "experienceevent-all##xdm:prop47##description##21001"
    },
    "xdm:prop48": {
      "title": "prop48",
      "description": "Custom property variable48",
      "$ref": "https://ns.adobe.com/experience/analytics/listdetails",
      "meta:titleId": "experienceevent-all##xdm:prop48##title##28801",
      "meta:descriptionId": "experienceevent-all##xdm:prop48##description##38011"
    },
    "xdm:prop49": {
      "title": "prop49",
      "description": "Custom property variable49",
      "$ref": "https://ns.adobe.com/experience/analytics/listdetails",
      "meta:titleId": "experienceevent-all##xdm:prop49##title##74001",
      "meta:descriptionId": "experienceevent-all##xdm:prop49##description##95041"
    },
    "xdm:prop50": {
      "title": "prop50",
      "description": "Custom property variable50",
      "$ref": "https://ns.adobe.com/experience/analytics/listdetails",
      "meta:titleId": "experienceevent-all##xdm:prop50##title##78761",
      "meta:descriptionId": "experienceevent-all##xdm:prop50##description##20121"
    },
    "xdm:prop51": {
      "title": "prop51",
      "description": "Custom property variable51",
      "$ref": "https://ns.adobe.com/experience/analytics/listdetails",
      "meta:titleId": "experienceevent-all##xdm:prop51##title##7311",
      "meta:descriptionId": "experienceevent-all##xdm:prop51##description##86651"
    },
    "xdm:prop52": {
      "title": "prop52",
      "description": "Custom property variable52",
      "$ref": "https://ns.adobe.com/experience/analytics/listdetails",
      "meta:titleId": "experienceevent-all##xdm:prop52##title##11681",
      "meta:descriptionId": "experienceevent-all##xdm:prop52##description##38721"
    },
    "xdm:prop53": {
      "title": "prop53",
      "description": "Custom property variable53",
      "$ref": "https://ns.adobe.com/experience/analytics/listdetails",
      "meta:titleId": "experienceevent-all##xdm:prop53##title##2351",
      "meta:descriptionId": "experienceevent-all##xdm:prop53##description##84881"
    },
    "xdm:prop54": {
      "title": "prop54",
      "description": "Custom property variable54",
      "$ref": "https://ns.adobe.com/experience/analytics/listdetails",
      "meta:titleId": "experienceevent-all##xdm:prop54##title##32231",
      "meta:descriptionId": "experienceevent-all##xdm:prop54##description##27681"
    },
    "xdm:prop55": {
      "title": "prop55",
      "description": "Custom property variable55",
      "$ref": "https://ns.adobe.com/experience/analytics/listdetails",
      "meta:titleId": "experienceevent-all##xdm:prop55##title##5881",
      "meta:descriptionId": "experienceevent-all##xdm:prop55##description##73801"
    },
    "xdm:prop56": {
      "title": "prop56",
      "description": "Custom property variable56",
      "$ref": "https://ns.adobe.com/experience/analytics/listdetails",
      "meta:titleId": "experienceevent-all##xdm:prop56##title##54941",
      "meta:descriptionId": "experienceevent-all##xdm:prop56##description##58361"
    },
    "xdm:prop57": {
      "title": "prop57",
      "description": "Custom property variable57",
      "$ref": "https://ns.adobe.com/experience/analytics/listdetails",
      "meta:titleId": "experienceevent-all##xdm:prop57##title##70331",
      "meta:descriptionId": "experienceevent-all##xdm:prop57##description##52781"
    },
    "xdm:prop58": {
      "title": "prop58",
      "description": "Custom property variable58",
      "$ref": "https://ns.adobe.com/experience/analytics/listdetails",
      "meta:titleId": "experienceevent-all##xdm:prop58##title##55651",
      "meta:descriptionId": "experienceevent-all##xdm:prop58##description##47431"
    },
    "xdm:prop59": {
      "title": "prop59",
      "description": "Custom property variable59",
      "$ref": "https://ns.adobe.com/experience/analytics/listdetails",
      "meta:titleId": "experienceevent-all##xdm:prop59##title##54571",
      "meta:descriptionId": "experienceevent-all##xdm:prop59##description##34551"
    },
    "xdm:prop60": {
      "title": "prop60",
      "description": "Custom property variable60",
      "$ref": "https://ns.adobe.com/experience/analytics/listdetails",
      "meta:titleId": "experienceevent-all##xdm:prop60##title##72311",
      "meta:descriptionId": "experienceevent-all##xdm:prop60##description##39571"
    },
    "xdm:prop61": {
      "title": "prop61",
      "description": "Custom property variable61",
      "$ref": "https://ns.adobe.com/experience/analytics/listdetails",
      "meta:titleId": "experienceevent-all##xdm:prop61##title##26541",
      "meta:descriptionId": "experienceevent-all##xdm:prop61##description##33071"
    },
    "xdm:prop62": {
      "title": "prop62",
      "description": "Custom property variable62",
      "$ref": "https://ns.adobe.com/experience/analytics/listdetails",
      "meta:titleId": "experienceevent-all##xdm:prop62##title##92031",
      "meta:descriptionId": "experienceevent-all##xdm:prop62##description##97891"
    },
    "xdm:prop63": {
      "title": "prop63",
      "description": "Custom property variable63",
      "$ref": "https://ns.adobe.com/experience/analytics/listdetails",
      "meta:titleId": "experienceevent-all##xdm:prop63##title##73551",
      "meta:descriptionId": "experienceevent-all##xdm:prop63##description##43811"
    },
    "xdm:prop64": {
      "title": "prop64",
      "description": "Custom property variable64",
      "$ref": "https://ns.adobe.com/experience/analytics/listdetails",
      "meta:titleId": "experienceevent-all##xdm:prop64##title##49731",
      "meta:descriptionId": "experienceevent-all##xdm:prop64##description##86001"
    },
    "xdm:prop65": {
      "title": "prop65",
      "description": "Custom property variable65",
      "$ref": "https://ns.adobe.com/experience/analytics/listdetails",
      "meta:titleId": "experienceevent-all##xdm:prop65##title##57251",
      "meta:descriptionId": "experienceevent-all##xdm:prop65##description##23311"
    },
    "xdm:prop66": {
      "title": "prop66",
      "description": "Custom property variable66",
      "$ref": "https://ns.adobe.com/experience/analytics/listdetails",
      "meta:titleId": "experienceevent-all##xdm:prop66##title##64131",
      "meta:descriptionId": "experienceevent-all##xdm:prop66##description##50571"
    },
    "xdm:prop67": {
      "title": "prop67",
      "description": "Custom property variable67",
      "$ref": "https://ns.adobe.com/experience/analytics/listdetails",
      "meta:titleId": "experienceevent-all##xdm:prop67##title##75871",
      "meta:descriptionId": "experienceevent-all##xdm:prop67##description##99741"
    },
    "xdm:prop68": {
      "title": "prop68",
      "description": "Custom property variable68",
      "$ref": "https://ns.adobe.com/experience/analytics/listdetails",
      "meta:titleId": "experienceevent-all##xdm:prop68##title##80871",
      "meta:descriptionId": "experienceevent-all##xdm:prop68##description##20681"
    },
    "xdm:prop69": {
      "title": "prop69",
      "description": "Custom property variable69",
      "$ref": "https://ns.adobe.com/experience/analytics/listdetails",
      "meta:titleId": "experienceevent-all##xdm:prop69##title##50521",
      "meta:descriptionId": "experienceevent-all##xdm:prop69##description##49311"
    },
    "xdm:prop70": {
      "title": "prop70",
      "description": "Custom property variable70",
      "$ref": "https://ns.adobe.com/experience/analytics/listdetails",
      "meta:titleId": "experienceevent-all##xdm:prop70##title##35471",
      "meta:descriptionId": "experienceevent-all##xdm:prop70##description##88561"
    },
    "xdm:prop71": {
      "title": "prop71",
      "description": "Custom property variable71",
      "$ref": "https://ns.adobe.com/experience/analytics/listdetails",
      "meta:titleId": "experienceevent-all##xdm:prop71##title##36771",
      "meta:descriptionId": "experienceevent-all##xdm:prop71##description##51601"
    },
    "xdm:prop72": {
      "title": "prop72",
      "description": "Custom property variable72",
      "$ref": "https://ns.adobe.com/experience/analytics/listdetails",
      "meta:titleId": "experienceevent-all##xdm:prop72##title##84161",
      "meta:descriptionId": "experienceevent-all##xdm:prop72##description##85111"
    },
    "xdm:prop73": {
      "title": "prop73",
      "description": "Custom property variable73",
      "$ref": "https://ns.adobe.com/experience/analytics/listdetails",
      "meta:titleId": "experienceevent-all##xdm:prop73##title##30971",
      "meta:descriptionId": "experienceevent-all##xdm:prop73##description##50521"
    },
    "xdm:prop74": {
      "title": "prop74",
      "description": "Custom property variable74",
      "$ref": "https://ns.adobe.com/experience/analytics/listdetails",
      "meta:titleId": "experienceevent-all##xdm:prop74##title##53121",
      "meta:descriptionId": "experienceevent-all##xdm:prop74##description##25071"
    },
    "xdm:prop75": {
      "title": "prop75",
      "description": "Custom property variable75",
      "$ref": "https://ns.adobe.com/experience/analytics/listdetails",
      "meta:titleId": "experienceevent-all##xdm:prop75##title##33821",
      "meta:descriptionId": "experienceevent-all##xdm:prop75##description##25601"
    }
  },
  "meta:titleId": "experienceevent-all##xdm:listProps##title##42791",
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
      "$ref": "https://ns.adobe.com/experience/analytics/keyedlist",
      "meta:titleId": "experienceevent-all##xdm:list1##title##90521",
      "meta:descriptionId": "experienceevent-all##xdm:list1##description##92801"
    },
    "xdm:list2": {
      "title": "List 2",
      "description": "Custom list variable 2.",
      "$ref": "https://ns.adobe.com/experience/analytics/keyedlist",
      "meta:titleId": "experienceevent-all##xdm:list2##title##66281",
      "meta:descriptionId": "experienceevent-all##xdm:list2##description##58911"
    },
    "xdm:list3": {
      "title": "List 3",
      "description": "Custom list variable 3.",
      "$ref": "https://ns.adobe.com/experience/analytics/keyedlist",
      "meta:titleId": "experienceevent-all##xdm:list3##title##97941",
      "meta:descriptionId": "experienceevent-all##xdm:list3##description##10031"
    }
  },
  "meta:titleId": "experienceevent-all##xdm:lists##title##22281",
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
      "description": "Custom property variable 1.",
      "meta:titleId": "experienceevent-all##xdm:prop1##title##81671",
      "meta:descriptionId": "experienceevent-all##xdm:prop1##description##97921"
    },
    "xdm:prop2": {
      "title": "prop2",
      "type": "string",
      "description": "Custom property variable 2.",
      "meta:titleId": "experienceevent-all##xdm:prop2##title##38141",
      "meta:descriptionId": "experienceevent-all##xdm:prop2##description##11191"
    },
    "xdm:prop3": {
      "title": "prop3",
      "type": "string",
      "description": "Custom property variable 3.",
      "meta:titleId": "experienceevent-all##xdm:prop3##title##36681",
      "meta:descriptionId": "experienceevent-all##xdm:prop3##description##67121"
    },
    "xdm:prop4": {
      "title": "prop4",
      "type": "string",
      "description": "Custom property variable 4.",
      "meta:titleId": "experienceevent-all##xdm:prop4##title##76171",
      "meta:descriptionId": "experienceevent-all##xdm:prop4##description##45721"
    },
    "xdm:prop5": {
      "title": "prop5",
      "type": "string",
      "description": "Custom property variable 5.",
      "meta:titleId": "experienceevent-all##xdm:prop5##title##7531",
      "meta:descriptionId": "experienceevent-all##xdm:prop5##description##40941"
    },
    "xdm:prop6": {
      "title": "prop6",
      "type": "string",
      "description": "Custom property variable 6.",
      "meta:titleId": "experienceevent-all##xdm:prop6##title##41421",
      "meta:descriptionId": "experienceevent-all##xdm:prop6##description##23611"
    },
    "xdm:prop7": {
      "title": "prop7",
      "type": "string",
      "description": "Custom property variable 7.",
      "meta:titleId": "experienceevent-all##xdm:prop7##title##73631",
      "meta:descriptionId": "experienceevent-all##xdm:prop7##description##32841"
    },
    "xdm:prop8": {
      "title": "prop8",
      "type": "string",
      "description": "Custom property variable 8.",
      "meta:titleId": "experienceevent-all##xdm:prop8##title##8081",
      "meta:descriptionId": "experienceevent-all##xdm:prop8##description##91501"
    },
    "xdm:prop9": {
      "title": "prop9",
      "type": "string",
      "description": "Custom property variable 9.",
      "meta:titleId": "experienceevent-all##xdm:prop9##title##36031",
      "meta:descriptionId": "experienceevent-all##xdm:prop9##description##73781"
    },
    "xdm:prop10": {
      "title": "prop10",
      "type": "string",
      "description": "Custom property variable 10.",
      "meta:titleId": "experienceevent-all##xdm:prop10##title##35461",
      "meta:descriptionId": "experienceevent-all##xdm:prop10##description##52291"
    },
    "xdm:prop11": {
      "title": "prop11",
      "type": "string",
      "description": "Custom property variable 11.",
      "meta:titleId": "experienceevent-all##xdm:prop11##title##39751",
      "meta:descriptionId": "experienceevent-all##xdm:prop11##description##33811"
    },
    "xdm:prop12": {
      "title": "prop12",
      "type": "string",
      "description": "Custom property variable 12.",
      "meta:titleId": "experienceevent-all##xdm:prop12##title##26671",
      "meta:descriptionId": "experienceevent-all##xdm:prop12##description##76031"
    },
    "xdm:prop13": {
      "title": "prop13",
      "type": "string",
      "description": "Custom property variable 13.",
      "meta:titleId": "experienceevent-all##xdm:prop13##title##47501",
      "meta:descriptionId": "experienceevent-all##xdm:prop13##description##8141"
    },
    "xdm:prop14": {
      "title": "prop14",
      "type": "string",
      "description": "Custom property variable 14.",
      "meta:titleId": "experienceevent-all##xdm:prop14##title##63201",
      "meta:descriptionId": "experienceevent-all##xdm:prop14##description##72911"
    },
    "xdm:prop15": {
      "title": "prop15",
      "type": "string",
      "description": "Custom property variable 15.",
      "meta:titleId": "experienceevent-all##xdm:prop15##title##29421",
      "meta:descriptionId": "experienceevent-all##xdm:prop15##description##56781"
    },
    "xdm:prop16": {
      "title": "prop16",
      "type": "string",
      "description": "Custom property variable 16.",
      "meta:titleId": "experienceevent-all##xdm:prop16##title##40941",
      "meta:descriptionId": "experienceevent-all##xdm:prop16##description##91371"
    },
    "xdm:prop17": {
      "title": "prop17",
      "type": "string",
      "description": "Custom property variable 17.",
      "meta:titleId": "experienceevent-all##xdm:prop17##title##41001",
      "meta:descriptionId": "experienceevent-all##xdm:prop17##description##7681"
    },
    "xdm:prop18": {
      "title": "prop18",
      "type": "string",
      "description": "Custom property variable 18.",
      "meta:titleId": "experienceevent-all##xdm:prop18##title##96681",
      "meta:descriptionId": "experienceevent-all##xdm:prop18##description##8171"
    },
    "xdm:prop19": {
      "title": "prop19",
      "type": "string",
      "description": "Custom property variable 19.",
      "meta:titleId": "experienceevent-all##xdm:prop19##title##38711",
      "meta:descriptionId": "experienceevent-all##xdm:prop19##description##71731"
    },
    "xdm:prop20": {
      "title": "prop20",
      "type": "string",
      "description": "Custom property variable 20.",
      "meta:titleId": "experienceevent-all##xdm:prop20##title##96801",
      "meta:descriptionId": "experienceevent-all##xdm:prop20##description##92941"
    },
    "xdm:prop21": {
      "title": "prop21",
      "type": "string",
      "description": "Custom property variable 21.",
      "meta:titleId": "experienceevent-all##xdm:prop21##title##49451",
      "meta:descriptionId": "experienceevent-all##xdm:prop21##description##52911"
    },
    "xdm:prop22": {
      "title": "prop22",
      "type": "string",
      "description": "Custom property variable 22.",
      "meta:titleId": "experienceevent-all##xdm:prop22##title##92601",
      "meta:descriptionId": "experienceevent-all##xdm:prop22##description##45441"
    },
    "xdm:prop23": {
      "title": "prop23",
      "type": "string",
      "description": "Custom property variable 23.",
      "meta:titleId": "experienceevent-all##xdm:prop23##title##54311",
      "meta:descriptionId": "experienceevent-all##xdm:prop23##description##27691"
    },
    "xdm:prop24": {
      "title": "prop24",
      "type": "string",
      "description": "Custom property variable 24.",
      "meta:titleId": "experienceevent-all##xdm:prop24##title##10681",
      "meta:descriptionId": "experienceevent-all##xdm:prop24##description##38231"
    },
    "xdm:prop25": {
      "title": "prop25",
      "type": "string",
      "description": "Custom property variable 25.",
      "meta:titleId": "experienceevent-all##xdm:prop25##title##22821",
      "meta:descriptionId": "experienceevent-all##xdm:prop25##description##81701"
    },
    "xdm:prop26": {
      "title": "prop26",
      "type": "string",
      "description": "Custom property variable 26.",
      "meta:titleId": "experienceevent-all##xdm:prop26##title##26491",
      "meta:descriptionId": "experienceevent-all##xdm:prop26##description##30221"
    },
    "xdm:prop27": {
      "title": "prop27",
      "type": "string",
      "description": "Custom property variable 27.",
      "meta:titleId": "experienceevent-all##xdm:prop27##title##38901",
      "meta:descriptionId": "experienceevent-all##xdm:prop27##description##59171"
    },
    "xdm:prop28": {
      "title": "prop28",
      "type": "string",
      "description": "Custom property variable 28.",
      "meta:titleId": "experienceevent-all##xdm:prop28##title##96661",
      "meta:descriptionId": "experienceevent-all##xdm:prop28##description##47781"
    },
    "xdm:prop29": {
      "title": "prop29",
      "type": "string",
      "description": "Custom property variable 29.",
      "meta:titleId": "experienceevent-all##xdm:prop29##title##49601",
      "meta:descriptionId": "experienceevent-all##xdm:prop29##description##34661"
    },
    "xdm:prop30": {
      "title": "prop30",
      "type": "string",
      "description": "Custom property variable 30.",
      "meta:titleId": "experienceevent-all##xdm:prop30##title##95791",
      "meta:descriptionId": "experienceevent-all##xdm:prop30##description##32871"
    },
    "xdm:prop31": {
      "title": "prop31",
      "type": "string",
      "description": "Custom property variable 31.",
      "meta:titleId": "experienceevent-all##xdm:prop31##title##99831",
      "meta:descriptionId": "experienceevent-all##xdm:prop31##description##55781"
    },
    "xdm:prop32": {
      "title": "prop32",
      "type": "string",
      "description": "Custom property variable 32.",
      "meta:titleId": "experienceevent-all##xdm:prop32##title##92241",
      "meta:descriptionId": "experienceevent-all##xdm:prop32##description##83141"
    },
    "xdm:prop33": {
      "title": "prop33",
      "type": "string",
      "description": "Custom property variable 33.",
      "meta:titleId": "experienceevent-all##xdm:prop33##title##19071",
      "meta:descriptionId": "experienceevent-all##xdm:prop33##description##92951"
    },
    "xdm:prop34": {
      "title": "prop34",
      "type": "string",
      "description": "Custom property variable 34.",
      "meta:titleId": "experienceevent-all##xdm:prop34##title##19101",
      "meta:descriptionId": "experienceevent-all##xdm:prop34##description##4701"
    },
    "xdm:prop35": {
      "title": "prop35",
      "type": "string",
      "description": "Custom property variable 35.",
      "meta:titleId": "experienceevent-all##xdm:prop35##title##3911",
      "meta:descriptionId": "experienceevent-all##xdm:prop35##description##37621"
    },
    "xdm:prop36": {
      "title": "prop36",
      "type": "string",
      "description": "Custom property variable 36.",
      "meta:titleId": "experienceevent-all##xdm:prop36##title##19131",
      "meta:descriptionId": "experienceevent-all##xdm:prop36##description##63211"
    },
    "xdm:prop37": {
      "title": "prop37",
      "type": "string",
      "description": "Custom property variable 37.",
      "meta:titleId": "experienceevent-all##xdm:prop37##title##83861",
      "meta:descriptionId": "experienceevent-all##xdm:prop37##description##76751"
    },
    "xdm:prop38": {
      "title": "prop38",
      "type": "string",
      "description": "Custom property variable 38.",
      "meta:titleId": "experienceevent-all##xdm:prop38##title##96661",
      "meta:descriptionId": "experienceevent-all##xdm:prop38##description##9381"
    },
    "xdm:prop39": {
      "title": "prop39",
      "type": "string",
      "description": "Custom property variable 39.",
      "meta:titleId": "experienceevent-all##xdm:prop39##title##74801",
      "meta:descriptionId": "experienceevent-all##xdm:prop39##description##64051"
    },
    "xdm:prop40": {
      "title": "prop40",
      "type": "string",
      "description": "Custom property variable 40.",
      "meta:titleId": "experienceevent-all##xdm:prop40##title##88381",
      "meta:descriptionId": "experienceevent-all##xdm:prop40##description##16021"
    },
    "xdm:prop41": {
      "title": "prop41",
      "type": "string",
      "description": "Custom property variable 41.",
      "meta:titleId": "experienceevent-all##xdm:prop41##title##89141",
      "meta:descriptionId": "experienceevent-all##xdm:prop41##description##2951"
    },
    "xdm:prop42": {
      "title": "prop42",
      "type": "string",
      "description": "Custom property variable 42.",
      "meta:titleId": "experienceevent-all##xdm:prop42##title##93921",
      "meta:descriptionId": "experienceevent-all##xdm:prop42##description##24131"
    },
    "xdm:prop43": {
      "title": "prop43",
      "type": "string",
      "description": "Custom property variable 43.",
      "meta:titleId": "experienceevent-all##xdm:prop43##title##55411",
      "meta:descriptionId": "experienceevent-all##xdm:prop43##description##3481"
    },
    "xdm:prop44": {
      "title": "prop44",
      "type": "string",
      "description": "Custom property variable 44.",
      "meta:titleId": "experienceevent-all##xdm:prop44##title##13841",
      "meta:descriptionId": "experienceevent-all##xdm:prop44##description##87321"
    },
    "xdm:prop45": {
      "title": "prop45",
      "type": "string",
      "description": "Custom property variable 45.",
      "meta:titleId": "experienceevent-all##xdm:prop45##title##45901",
      "meta:descriptionId": "experienceevent-all##xdm:prop45##description##97791"
    },
    "xdm:prop46": {
      "title": "prop46",
      "type": "string",
      "description": "Custom property variable 46.",
      "meta:titleId": "experienceevent-all##xdm:prop46##title##72541",
      "meta:descriptionId": "experienceevent-all##xdm:prop46##description##59131"
    },
    "xdm:prop47": {
      "title": "prop47",
      "type": "string",
      "description": "Custom property variable 47.",
      "meta:titleId": "experienceevent-all##xdm:prop47##title##10021",
      "meta:descriptionId": "experienceevent-all##xdm:prop47##description##11691"
    },
    "xdm:prop48": {
      "title": "prop48",
      "type": "string",
      "description": "Custom property variable 48.",
      "meta:titleId": "experienceevent-all##xdm:prop48##title##32581",
      "meta:descriptionId": "experienceevent-all##xdm:prop48##description##96351"
    },
    "xdm:prop49": {
      "title": "prop49",
      "type": "string",
      "description": "Custom property variable 49.",
      "meta:titleId": "experienceevent-all##xdm:prop49##title##65321",
      "meta:descriptionId": "experienceevent-all##xdm:prop49##description##27111"
    },
    "xdm:prop50": {
      "title": "prop50",
      "type": "string",
      "description": "Custom property variable 50.",
      "meta:titleId": "experienceevent-all##xdm:prop50##title##31141",
      "meta:descriptionId": "experienceevent-all##xdm:prop50##description##41411"
    },
    "xdm:prop51": {
      "title": "prop51",
      "type": "string",
      "description": "Custom property variable 51.",
      "meta:titleId": "experienceevent-all##xdm:prop51##title##47751",
      "meta:descriptionId": "experienceevent-all##xdm:prop51##description##80541"
    },
    "xdm:prop52": {
      "title": "prop52",
      "type": "string",
      "description": "Custom property variable 52.",
      "meta:titleId": "experienceevent-all##xdm:prop52##title##23981",
      "meta:descriptionId": "experienceevent-all##xdm:prop52##description##21041"
    },
    "xdm:prop53": {
      "title": "prop53",
      "type": "string",
      "description": "Custom property variable 53.",
      "meta:titleId": "experienceevent-all##xdm:prop53##title##98421",
      "meta:descriptionId": "experienceevent-all##xdm:prop53##description##92091"
    },
    "xdm:prop54": {
      "title": "prop54",
      "type": "string",
      "description": "Custom property variable 54.",
      "meta:titleId": "experienceevent-all##xdm:prop54##title##17781",
      "meta:descriptionId": "experienceevent-all##xdm:prop54##description##90141"
    },
    "xdm:prop55": {
      "title": "prop55",
      "type": "string",
      "description": "Custom property variable 55.",
      "meta:titleId": "experienceevent-all##xdm:prop55##title##32201",
      "meta:descriptionId": "experienceevent-all##xdm:prop55##description##71821"
    },
    "xdm:prop56": {
      "title": "prop56",
      "type": "string",
      "description": "Custom property variable 56.",
      "meta:titleId": "experienceevent-all##xdm:prop56##title##84781",
      "meta:descriptionId": "experienceevent-all##xdm:prop56##description##94761"
    },
    "xdm:prop57": {
      "title": "prop57",
      "type": "string",
      "description": "Custom property variable 57.",
      "meta:titleId": "experienceevent-all##xdm:prop57##title##94981",
      "meta:descriptionId": "experienceevent-all##xdm:prop57##description##84681"
    },
    "xdm:prop58": {
      "title": "prop58",
      "type": "string",
      "description": "Custom property variable 58.",
      "meta:titleId": "experienceevent-all##xdm:prop58##title##93341",
      "meta:descriptionId": "experienceevent-all##xdm:prop58##description##26231"
    },
    "xdm:prop59": {
      "title": "prop59",
      "type": "string",
      "description": "Custom property variable 59.",
      "meta:titleId": "experienceevent-all##xdm:prop59##title##87231",
      "meta:descriptionId": "experienceevent-all##xdm:prop59##description##89291"
    },
    "xdm:prop60": {
      "title": "prop60",
      "type": "string",
      "description": "Custom property variable 60.",
      "meta:titleId": "experienceevent-all##xdm:prop60##title##87961",
      "meta:descriptionId": "experienceevent-all##xdm:prop60##description##96591"
    },
    "xdm:prop61": {
      "title": "prop61",
      "type": "string",
      "description": "Custom property variable 61.",
      "meta:titleId": "experienceevent-all##xdm:prop61##title##58471",
      "meta:descriptionId": "experienceevent-all##xdm:prop61##description##73661"
    },
    "xdm:prop62": {
      "title": "prop62",
      "type": "string",
      "description": "Custom property variable 62.",
      "meta:titleId": "experienceevent-all##xdm:prop62##title##971",
      "meta:descriptionId": "experienceevent-all##xdm:prop62##description##78511"
    },
    "xdm:prop63": {
      "title": "prop63",
      "type": "string",
      "description": "Custom property variable 63.",
      "meta:titleId": "experienceevent-all##xdm:prop63##title##70381",
      "meta:descriptionId": "experienceevent-all##xdm:prop63##description##84851"
    },
    "xdm:prop64": {
      "title": "prop64",
      "type": "string",
      "description": "Custom property variable 64.",
      "meta:titleId": "experienceevent-all##xdm:prop64##title##34811",
      "meta:descriptionId": "experienceevent-all##xdm:prop64##description##45241"
    },
    "xdm:prop65": {
      "title": "prop65",
      "type": "string",
      "description": "Custom property variable 65.",
      "meta:titleId": "experienceevent-all##xdm:prop65##title##75511",
      "meta:descriptionId": "experienceevent-all##xdm:prop65##description##46241"
    },
    "xdm:prop66": {
      "title": "prop66",
      "type": "string",
      "description": "Custom property variable 66.",
      "meta:titleId": "experienceevent-all##xdm:prop66##title##37441",
      "meta:descriptionId": "experienceevent-all##xdm:prop66##description##95191"
    },
    "xdm:prop67": {
      "title": "prop67",
      "type": "string",
      "description": "Custom property variable 67.",
      "meta:titleId": "experienceevent-all##xdm:prop67##title##60181",
      "meta:descriptionId": "experienceevent-all##xdm:prop67##description##54061"
    },
    "xdm:prop68": {
      "title": "prop68",
      "type": "string",
      "description": "Custom property variable 68.",
      "meta:titleId": "experienceevent-all##xdm:prop68##title##18651",
      "meta:descriptionId": "experienceevent-all##xdm:prop68##description##70351"
    },
    "xdm:prop69": {
      "title": "prop69",
      "type": "string",
      "description": "Custom property variable 69.",
      "meta:titleId": "experienceevent-all##xdm:prop69##title##82631",
      "meta:descriptionId": "experienceevent-all##xdm:prop69##description##59081"
    },
    "xdm:prop70": {
      "title": "prop70",
      "type": "string",
      "description": "Custom property variable 70.",
      "meta:titleId": "experienceevent-all##xdm:prop70##title##40381",
      "meta:descriptionId": "experienceevent-all##xdm:prop70##description##73401"
    },
    "xdm:prop71": {
      "title": "prop71",
      "type": "string",
      "description": "Custom property variable 71.",
      "meta:titleId": "experienceevent-all##xdm:prop71##title##17421",
      "meta:descriptionId": "experienceevent-all##xdm:prop71##description##76871"
    },
    "xdm:prop72": {
      "title": "prop72",
      "type": "string",
      "description": "Custom property variable 72.",
      "meta:titleId": "experienceevent-all##xdm:prop72##title##86431",
      "meta:descriptionId": "experienceevent-all##xdm:prop72##description##89101"
    },
    "xdm:prop73": {
      "title": "prop73",
      "type": "string",
      "description": "Custom property variable 73.",
      "meta:titleId": "experienceevent-all##xdm:prop73##title##13731",
      "meta:descriptionId": "experienceevent-all##xdm:prop73##description##52141"
    },
    "xdm:prop74": {
      "title": "prop74",
      "type": "string",
      "description": "Custom property variable 74.",
      "meta:titleId": "experienceevent-all##xdm:prop74##title##14741",
      "meta:descriptionId": "experienceevent-all##xdm:prop74##description##34431"
    },
    "xdm:prop75": {
      "title": "prop75",
      "type": "string",
      "description": "Custom property variable 75.",
      "meta:titleId": "experienceevent-all##xdm:prop75##title##77971",
      "meta:descriptionId": "experienceevent-all##xdm:prop75##description##68701"
    }
  },
  "meta:titleId": "experienceevent-all##xdm:props##title##15141",
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
* defined in [Adobe Analytics ExperienceEvent Full Extension](analytics/experienceevent-all.schema.md#httpsnsadobecomexperienceanalyticsenduser)

### https://ns.adobe.com/experience/analytics/endUser Type


* [endUser.schema](analytics/endUser.schema.md) – `https://ns.adobe.com/experience/analytics/endUser`





## https://ns.adobe.com/experience/analytics/environment
### Environment

`https://ns.adobe.com/experience/analytics/environment`
* is optional
* type: `object`
* defined in [Adobe Analytics ExperienceEvent Full Extension](analytics/experienceevent-all.schema.md#httpsnsadobecomexperienceanalyticsenvironment)

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
* defined in [Adobe Analytics ExperienceEvent Full Extension](analytics/experienceevent-all.schema.md#httpsnsadobecomexperienceanalyticsevent101to200)

### https://ns.adobe.com/experience/analytics/event101to200 Type


* [event101to200.schema](analytics/event101to200.schema.md) – `https://ns.adobe.com/experience/analytics/event101to200`





## https://ns.adobe.com/experience/analytics/event1to100
### Event 1 to 100

`https://ns.adobe.com/experience/analytics/event1to100`
* is optional
* type: event1to100.schema
* defined in [Adobe Analytics ExperienceEvent Full Extension](analytics/experienceevent-all.schema.md#httpsnsadobecomexperienceanalyticsevent1to100)

### https://ns.adobe.com/experience/analytics/event1to100 Type


* [event1to100.schema](analytics/event1to100.schema.md) – `https://ns.adobe.com/experience/analytics/event1to100`





## https://ns.adobe.com/experience/analytics/event201to300
### Event 201 to 300

`https://ns.adobe.com/experience/analytics/event201to300`
* is optional
* type: event201to300.schema
* defined in [Adobe Analytics ExperienceEvent Full Extension](analytics/experienceevent-all.schema.md#httpsnsadobecomexperienceanalyticsevent201to300)

### https://ns.adobe.com/experience/analytics/event201to300 Type


* [event201to300.schema](analytics/event201to300.schema.md) – `https://ns.adobe.com/experience/analytics/event201to300`





## https://ns.adobe.com/experience/analytics/event301to400
### Event 301 to 400

`https://ns.adobe.com/experience/analytics/event301to400`
* is optional
* type: event301to400.schema
* defined in [Adobe Analytics ExperienceEvent Full Extension](analytics/experienceevent-all.schema.md#httpsnsadobecomexperienceanalyticsevent301to400)

### https://ns.adobe.com/experience/analytics/event301to400 Type


* [event301to400.schema](analytics/event301to400.schema.md) – `https://ns.adobe.com/experience/analytics/event301to400`





## https://ns.adobe.com/experience/analytics/event401to500
### Event 401 to 500

`https://ns.adobe.com/experience/analytics/event401to500`
* is optional
* type: event401to500.schema
* defined in [Adobe Analytics ExperienceEvent Full Extension](analytics/experienceevent-all.schema.md#httpsnsadobecomexperienceanalyticsevent401to500)

### https://ns.adobe.com/experience/analytics/event401to500 Type


* [event401to500.schema](analytics/event401to500.schema.md) – `https://ns.adobe.com/experience/analytics/event401to500`





## https://ns.adobe.com/experience/analytics/event501to600
### Event 501 to 600

`https://ns.adobe.com/experience/analytics/event501to600`
* is optional
* type: event501to600.schema
* defined in [Adobe Analytics ExperienceEvent Full Extension](analytics/experienceevent-all.schema.md#httpsnsadobecomexperienceanalyticsevent501to600)

### https://ns.adobe.com/experience/analytics/event501to600 Type


* [event501to600.schema](analytics/event501to600.schema.md) – `https://ns.adobe.com/experience/analytics/event501to600`





## https://ns.adobe.com/experience/analytics/event601to700
### Event 601 to 700

`https://ns.adobe.com/experience/analytics/event601to700`
* is optional
* type: event601to700.schema
* defined in [Adobe Analytics ExperienceEvent Full Extension](analytics/experienceevent-all.schema.md#httpsnsadobecomexperienceanalyticsevent601to700)

### https://ns.adobe.com/experience/analytics/event601to700 Type


* [event601to700.schema](analytics/event601to700.schema.md) – `https://ns.adobe.com/experience/analytics/event601to700`





## https://ns.adobe.com/experience/analytics/event701to800
### Event 701 to 800

`https://ns.adobe.com/experience/analytics/event701to800`
* is optional
* type: event701to800.schema
* defined in [Adobe Analytics ExperienceEvent Full Extension](analytics/experienceevent-all.schema.md#httpsnsadobecomexperienceanalyticsevent701to800)

### https://ns.adobe.com/experience/analytics/event701to800 Type


* [event701to800.schema](analytics/event701to800.schema.md) – `https://ns.adobe.com/experience/analytics/event701to800`





## https://ns.adobe.com/experience/analytics/event801to900
### Event 801 to 900

`https://ns.adobe.com/experience/analytics/event801to900`
* is optional
* type: event801to900.schema
* defined in [Adobe Analytics ExperienceEvent Full Extension](analytics/experienceevent-all.schema.md#httpsnsadobecomexperienceanalyticsevent801to900)

### https://ns.adobe.com/experience/analytics/event801to900 Type


* [event801to900.schema](analytics/event801to900.schema.md) – `https://ns.adobe.com/experience/analytics/event801to900`





## https://ns.adobe.com/experience/analytics/event901to1000
### Event 901 to 1000

`https://ns.adobe.com/experience/analytics/event901to1000`
* is optional
* type: event901to1000.schema
* defined in [Adobe Analytics ExperienceEvent Full Extension](analytics/experienceevent-all.schema.md#httpsnsadobecomexperienceanalyticsevent901to1000)

### https://ns.adobe.com/experience/analytics/event901to1000 Type


* [event901to1000.schema](analytics/event901to1000.schema.md) – `https://ns.adobe.com/experience/analytics/event901to1000`





## https://ns.adobe.com/experience/analytics/session
### Session

`https://ns.adobe.com/experience/analytics/session`
* is optional
* type: session.schema
* defined in [Adobe Analytics ExperienceEvent Full Extension](analytics/experienceevent-all.schema.md#httpsnsadobecomexperienceanalyticssession)

### https://ns.adobe.com/experience/analytics/session Type


* [session.schema](analytics/session.schema.md) – `https://ns.adobe.com/experience/analytics/session`





## https://ns.adobe.com/experience/decisioning/propositions
### Involved Propositions

An array of decision propositions that contributed to the experience event. The experience event is attributed (at least partially) to those prior decisions/propositions. An individual profile's proposition-response history is maintained with these decision identifiers.

`https://ns.adobe.com/experience/decisioning/propositions`
* is optional
* type: Proposition Interaction Details

* defined in [Experience Event - Proposition Interactions](decisioning/experienceevent-proposition-interaction.schema.md#httpsnsadobecomexperiencedecisioningpropositions)

### https://ns.adobe.com/experience/decisioning/propositions Type


Array type: Proposition Interaction Details

All items must be of the type:
* [Proposition Interaction Details](decisioning/proposition-interaction-detail.schema.md) – `https://ns.adobe.com/experience/decisioning/proposition-interaction-details`








## https://ns.adobe.com/experience/implementations


`https://ns.adobe.com/experience/implementations`
* is optional
* type: Adobe Experience Platform Implementation Details
* defined in [Adobe Experience Platform Implementation Details](implementations-ext.schema.md#httpsnsadobecomexperienceimplementations)

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

This fieldgroup is used to capture application information related to an ExperienceEvent, including the name of the application, app version, installs, launches, crashes, and closures. It could be either the application targeted by the event like the send of a push notification or the application originating the event such as a click, or a login.

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
* defined in [Adobe Analytics ExperienceEvent Commerce](analytics/commerce.schema.md#xdmcommerce)

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
### Product List Items

A list of items representing a product selected by a customer with specific options and pricing that are for that usage context at a specific point of time and may differ from the product record.

`xdm:productListItems`
* is optional
* type: Adobe Analytics extension to XDM Product List Item

* defined in [Adobe Analytics ExperienceEvent Commerce](analytics/commerce.schema.md#xdmproductlistitems)

### xdm:productListItems Type


Array type: Adobe Analytics extension to XDM Product List Item

All items must be of the type:
* [Adobe Analytics extension to XDM Product List Item](analytics/productlistitem.schema.md) – `https://ns.adobe.com/experience/analytics/productlistitem`








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








## xdm:userActivityRegion
### User activity region

Region info where event is captured.

`xdm:userActivityRegion`
* is optional
* type: `object`
* defined in [Data capture region for Experience Events](experienceevent-edgeregion.schema.md#xdmuseractivityregion)

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




