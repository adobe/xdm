
# Adobe Audience Manager Template Mixin Schema

```
https://ns.adobe.com/experience/aam-experienceevent
```

Adobe Audience Manager mixin for use with schemas for Solution data ingestion. Includes the core/standard ExperienceEvent as well as the other required core mixins.

| [Abstract](../../../abstract.md) | [Extensible](../../../extensions.md) | [Status](../../../status.md) | [Identifiable](../../../id.md) | [Custom Properties](../../../extensions.md) | [Additional Properties](../../../extensions.md) | Defined In |
|----------------------------------|--------------------------------------|------------------------------|--------------------------------|---------------------------------------------|-------------------------------------------------|------------|
| Can be instantiated | Yes | Stable | No | Forbidden | Permitted | [adobe/experience/aam-experienceevent.schema.json](adobe/experience/aam-experienceevent.schema.json) |
## Schema Hierarchy

* Adobe Audience Manager Template Mixin `https://ns.adobe.com/experience/aam-experienceevent`
  * [Segment Membership Details](../../fieldgroups/experience-event/experienceevent-segmentmembership.schema.md) `https://ns.adobe.com/xdm/context/experienceevent-segmentmembership`
  * [Environment Details](../../fieldgroups/experience-event/experienceevent-environment-details.schema.md) `https://ns.adobe.com/xdm/context/experienceevent-environment-details`
  * [Profile Stitch Details](../../fieldgroups/experience-event/experienceevent-profile-stitch.schema.md) `https://ns.adobe.com/xdm/context/experienceevent-profile-stitch`
  * [Data capture region for Experience Events](experienceevent-edgeregion.schema.md) `https://ns.adobe.com/experience/experienceevent-edgeregion`
  * [IAB TCF 2.0 Consent](../../fieldgroups/experience-event/experienceevent-privacy.schema.md) `https://ns.adobe.com/xdm/context/experienceevent-privacy`
  * [Adobe Audience Manager ExperienceEvent Full Extension](audiencemanager/experienceevent-all.schema.md) `https://ns.adobe.com/experience/audiencemanager/experienceevent-all`


## Adobe Audience Manager Template Mixin Example
```json
{
  "@id": "https://data.adobe.io/experienceid-123456",
  "xdm:dataSource": {
    "@id": "https://data.adobe.io/datasources/datasource-123",
    "xdm:code": "DataSourceIntegrationCode-123"
  },
  "xdm:timestamp": "2017-09-26T15:52:25+00:00",
  "xdm:identityMap": {
    "https://data.adobe.io/entities/namespace/4": [
      {
        "xdm:id": "92312748749128"
      }
    ],
    "https://data.adobe.io/entities/namespace/10": [
      {
        "xdm:id": "2394509340-30453470347"
      }
    ],
    "https://data.adobe.io/entities/namespace/9": [
      {
        "xdm:id": "1233ce17-20e0-4a2c-8198-2a77fd60cf4d"
      }
    ]
  },
  "xdm:userActivityRegion": {
    "xdm:dataCenterLocation": "VA6",
    "xdm:captureTimestamp": "2017-09-26T15:52:20+00:00"
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
  "xdm:profileStitch": [
    {
      "xdm:profileStitchID": {
        "@id": "https://data.adobe.io/entities/profileStitchIdentity/1",
        "xdm:namespace": {
          "xdm:code": "AAM"
        }
      },
      "xdm:version": "1.0",
      "xdm:identityMap": {
        "ECID": [
          {
            "xdm:id": "https://data.adobe.io/entities/identity/92312748749128"
          },
          {
            "xdm:id": "https://data.adobe.io/entities/identity/62312748749321"
          },
          {
            "xdm:id": "https://data.adobe.io/entities/identity/49312748749132"
          }
        ]
      }
    }
  ],
  "xdm:segmentMemberships": [
    {
      "xdm:segmentID": {
        "@id": "https://data.adobe.io/entities/identity/92312748749128",
        "xdm:namespace": {
          "xdm:code": "AAM"
        }
      },
      "xdm:profileStitchID": {
        "@id": "https://data.adobe.io/entities/profileStitchIdentity/1",
        "xdm:namespace": {
          "xdm:code": "AAM"
        },
        "xdm:lastQualificationTime": "2017-09-26T15:52:25+00:00",
        "xdm:version": "1.0",
        "xdm:validUntil": "2017-12-26T15:52:25+00:00",
        "xdm:status": "realized"
      }
    }
  ],
  "xdm:signals": {
    "pageTagCloud": [
      "analytics",
      "bigdata"
    ],
    "pagelinkshovered": [
      "http://abcxyzabcxyz.com",
      "http://abcxyzabcxyz1.com"
    ]
  },
  "xdm:derivedSignals": {
    "derivedPageTagCloud": [
      "aam"
    ],
    "derivedPagelinkshovered": [
      "https://jhdjdi09002kdjjsl.com"
    ]
  },
  "xdm:overwriteTraits": true,
  "xdm:consentStrings": [
    {
      "xdm:consentStandard": "IAB TCF",
      "xdm:consentStandardVersion": "2.0",
      "xdm:consentStringValue": "BObdrPUOevsguAfDqFENCNAAAAAmeAAA.PVAfDObdrA.DqFENCAmeAENCDA",
      "xdm:gdprApplies": true,
      "xdm:containsPersonalData": false
    }
  ]
}
```

# Adobe Audience Manager Template Mixin Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [xdm:consentStrings](#xdmconsentstrings) | Consent String | Optional | [IAB TCF 2.0 Consent](../../fieldgroups/experience-event/experienceevent-privacy.schema.md#xdmconsentstrings) |
| [xdm:derivedSignals](#xdmderivedsignals) | `object` | Optional | [Adobe Audience Manager ExperienceEvent Full Extension](audiencemanager/experienceevent-all.schema.md#xdmderivedsignals) |
| [xdm:device](#xdmdevice) | Device | Optional | [Environment Details](../../fieldgroups/experience-event/experienceevent-environment-details.schema.md#xdmdevice) |
| [xdm:environment](#xdmenvironment) | Environment | Optional | [Environment Details](../../fieldgroups/experience-event/experienceevent-environment-details.schema.md#xdmenvironment) |
| [xdm:overwriteTraits](#xdmoverwritetraits) | `boolean` | Optional | [Adobe Audience Manager ExperienceEvent Full Extension](audiencemanager/experienceevent-all.schema.md#xdmoverwritetraits) |
| [xdm:placeContext](#xdmplacecontext) | Place context | Optional | [Environment Details](../../fieldgroups/experience-event/experienceevent-environment-details.schema.md#xdmplacecontext) |
| [xdm:profileStitch](#xdmprofilestitch) | Profile stitch | Optional | [Profile Stitch Details](../../fieldgroups/experience-event/experienceevent-profile-stitch.schema.md#xdmprofilestitch) |
| [xdm:segmentMembership](#xdmsegmentmembership) | `object` | Optional | [Segment Membership Details](../../fieldgroups/experience-event/experienceevent-segmentmembership.schema.md#xdmsegmentmembership) |
| [xdm:segmentMemberships](#xdmsegmentmemberships) | Segment membership item | Optional | [Segment Membership Details](../../fieldgroups/experience-event/experienceevent-segmentmembership.schema.md#xdmsegmentmemberships) |
| [xdm:signals](#xdmsignals) | `object` | Optional | [Adobe Audience Manager ExperienceEvent Full Extension](audiencemanager/experienceevent-all.schema.md#xdmsignals) |
| [xdm:userActivityRegion](#xdmuseractivityregion) | `object` | Optional | [Data capture region for Experience Events](experienceevent-edgeregion.schema.md#xdmuseractivityregion) |
| `*` | any | Additional | this schema *allows* additional properties |

## xdm:consentStrings
### Identity level consent information

`xdm:consentStrings`
* is optional
* type: Consent String

* defined in [IAB TCF 2.0 Consent](../../fieldgroups/experience-event/experienceevent-privacy.schema.md#xdmconsentstrings)

### xdm:consentStrings Type


Array type: Consent String

All items must be of the type:
* [Consent String](../../datatypes/consent/consentstring.schema.md) – `https://ns.adobe.com/xdm/context/consentstring`








## xdm:derivedSignals
### Derived Signals

Derived properties from event data

`xdm:derivedSignals`
* is optional
* type: `object`
* defined in [Adobe Audience Manager ExperienceEvent Full Extension](audiencemanager/experienceevent-all.schema.md#xdmderivedsignals)

### xdm:derivedSignals Type


`object` with following properties:


| Property | Type | Required |
|----------|------|----------|






## xdm:device
### Device

An identified device, application or device browser instance that is trackable across sessions, normally by cookies.

`xdm:device`
* is optional
* type: Device
* defined in [Environment Details](../../fieldgroups/experience-event/experienceevent-environment-details.schema.md#xdmdevice)

### xdm:device Type


* [Device](../../datatypes/device.schema.md) – `https://ns.adobe.com/xdm/context/device`





## xdm:environment
### Environment

Information about the surrounding situation the event observation occurred in, specifically detailing transitory information such as the network or software versions.

`xdm:environment`
* is optional
* type: Environment
* defined in [Environment Details](../../fieldgroups/experience-event/experienceevent-environment-details.schema.md#xdmenvironment)

### xdm:environment Type


* [Environment](../../datatypes/environment.schema.md) – `https://ns.adobe.com/xdm/context/environment`





## xdm:overwriteTraits
### Overwrite Traits

Flag highlighting that all the traits realized before this for this id and data source, need to be discarded.

`xdm:overwriteTraits`
* is optional
* type: `boolean`
* defined in [Adobe Audience Manager ExperienceEvent Full Extension](audiencemanager/experienceevent-all.schema.md#xdmoverwritetraits)

### xdm:overwriteTraits Type


`boolean`





## xdm:placeContext
### Place context

The transient circumstances related to the observation. Examples include locale specific information such as weather, local time, traffic, day of the week, workday vs. holiday, and working hours.

`xdm:placeContext`
* is optional
* type: Place context
* defined in [Environment Details](../../fieldgroups/experience-event/experienceevent-environment-details.schema.md#xdmplacecontext)

### xdm:placeContext Type


* [Place context](../../datatypes/placecontext.schema.md) – `https://ns.adobe.com/xdm/context/placecontext`





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








## xdm:signals
### Signals

Additional frequently changing properties captured with an event via request parameters or other means.

`xdm:signals`
* is optional
* type: `object`
* defined in [Adobe Audience Manager ExperienceEvent Full Extension](audiencemanager/experienceevent-all.schema.md#xdmsignals)

### xdm:signals Type


`object` with following properties:


| Property | Type | Required |
|----------|------|----------|






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








