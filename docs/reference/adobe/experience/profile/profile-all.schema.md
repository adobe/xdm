
# Adobe Unified Profile Service Profile Union Extension Schema

```
https://ns.adobe.com/experience/profile/profile-all
```

Adobe Unified Profile Service required fields for the Profile Union.

| [Abstract](../../../../abstract.md) | [Extensible](../../../../extensions.md) | [Status](../../../../status.md) | [Identifiable](../../../../id.md) | [Custom Properties](../../../../extensions.md) | [Additional Properties](../../../../extensions.md) | Defined In |
|-------------------------------------|-----------------------------------------|---------------------------------|-----------------------------------|------------------------------------------------|----------------------------------------------------|------------|
| Can be instantiated | Yes | Stable | No | Forbidden | Permitted | [adobe/experience/profile/profile-all.schema.json](adobe/experience/profile/profile-all.schema.json) |
## Schema Hierarchy

* Adobe Unified Profile Service Profile Union Extension `https://ns.adobe.com/experience/profile/profile-all`
  * [Time-series Extension for Record Data](../../../datatypes/data/record-timeseries-events.schema.md) `https://ns.adobe.com/xdm/data/record-timeseries-events`
  * [IdentityMap](../../../fieldgroups/shared/identitymap.schema.md) `https://ns.adobe.com/xdm/context/identitymap`
  * [Segment Membership Details](../../../fieldgroups/profile/profile-segmentation.schema.md) `https://ns.adobe.com/xdm/context/profile-segmentation`
  * [IAB TCF 2.0 Consent](../../../fieldgroups/profile/profile-privacy.schema.md) `https://ns.adobe.com/xdm/context/profile-privacy`


## Adobe Unified Profile Service Profile Union Extension Example
```json
{
  "xdm:timeSeriesEvents": [
    {
      "@id": "49069bba-3014-420b-a887-3959f87d474a"
    }
  ],
  "xdm:identityMap": {
    "https://data.adobe.io/entities/namespace/4": [
      {
        "xdm:id": "92312748749128"
      },
      {
        "xdm:id": "92312748749239"
      }
    ],
    "https://data.adobe.io/entities/namespace/10": [
      {
        "xdm:id": "2394509340-30453470347",
        "xdm:authenticatedState": "authenticated"
      }
    ],
    "https://data.adobe.io/entities/namespace/9": [
      {
        "xdm:id": "1233ce17-20e0-4a2c-8198-2a77fd60cf4d"
      }
    ]
  },
  "xdm:segmentMembership": {
    "AAM": {
      "04a81716-43d6-4e7a-a49c-f1d8b3129ba9": {
        "xdm:version": "15",
        "xdm:timestamp": "2018-04-26T15:52:25+00:00",
        "xdm:validUntil": "2019-04-26T15:52:25+00:00",
        "xdm:status": "existing"
      },
      "53cba6b2-a23b-454a-8069-fc41308f1c0f": {
        "xdm:version": "3",
        "xdm:lastQualificationTime": "2018-04-26T15:52:25+00:00",
        "xdm:validUntil": "2018-04-27T15:52:25+00:00",
        "xdm:status": "realized"
      }
    },
    "Email": {
      "abcd@adobe.com": {
        "xdm:version": "1",
        "xdm:lastQualificationTime": "2017-09-26T15:52:25+00:00",
        "xdm:validUntil": "2017-12-26T15:52:25+00:00",
        "xdm:status": "exited"
      }
    }
  }
}
```

# Adobe Unified Profile Service Profile Union Extension Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [https://ns.adobe.com/experience/profile/associatedIdentities](#httpsnsadobecomexperienceprofileassociatedidentities) | `object` | Optional | Adobe Unified Profile Service Profile Union Extension (this schema) |
| [https://ns.adobe.com/experience/profile/identityNamespaces](#httpsnsadobecomexperienceprofileidentitynamespaces) | `object` | Optional | Adobe Unified Profile Service Profile Union Extension (this schema) |
| [xdm:identityMap](#xdmidentitymap) | `object` | Optional | [IdentityMap](../../../fieldgroups/shared/identitymap.schema.md#xdmidentitymap) |
| [xdm:identityPrivacyInfo](#xdmidentityprivacyinfo) | `object` | Optional | [IAB TCF 2.0 Consent](../../../fieldgroups/profile/profile-privacy.schema.md#xdmidentityprivacyinfo) |
| [xdm:optOutConsentLevel](#xdmoptoutconsentlevel) | `object` | Optional | [IAB TCF 2.0 Consent](../../../fieldgroups/profile/profile-privacy.schema.md#xdmoptoutconsentlevel) |
| [xdm:segmentMembership](#xdmsegmentmembership) | `object` | Optional | [Segment Membership Details](../../../fieldgroups/profile/profile-segmentation.schema.md#xdmsegmentmembership) |
| [xdm:segments](#xdmsegments) | Segment membership | Optional | [Segment Membership Details](../../../fieldgroups/profile/profile-segmentation.schema.md#xdmsegments) |
| [xdm:timeSeriesEvents](#xdmtimeseriesevents) | Time-series Schema | Optional | [Time-series Extension for Record Data](../../../datatypes/data/record-timeseries-events.schema.md#xdmtimeseriesevents) |
| `*` | any | Additional | this schema *allows* additional properties |

## https://ns.adobe.com/experience/profile/associatedIdentities


`https://ns.adobe.com/experience/profile/associatedIdentities`
* is optional
* type: `object`
* defined in this schema

### https://ns.adobe.com/experience/profile/associatedIdentities Type


`object` with following properties:


| Property | Type | Required |
|----------|------|----------|






## https://ns.adobe.com/experience/profile/identityNamespaces


`https://ns.adobe.com/experience/profile/identityNamespaces`
* is optional
* type: `object`
* defined in this schema

### https://ns.adobe.com/experience/profile/identityNamespaces Type


`object` with following properties:


| Property | Type | Required |
|----------|------|----------|






## xdm:identityMap


`xdm:identityMap`
* is optional
* type: `object`
* defined in [IdentityMap](../../../fieldgroups/shared/identitymap.schema.md#xdmidentitymap)

### xdm:identityMap Type


`object` with following properties:


| Property | Type | Required |
|----------|------|----------|






## xdm:identityPrivacyInfo
### Identity level privacy information

Captured privacy information for identities in profile.

`xdm:identityPrivacyInfo`
* is optional
* type: `object`
* defined in [IAB TCF 2.0 Consent](../../../fieldgroups/profile/profile-privacy.schema.md#xdmidentityprivacyinfo)

### xdm:identityPrivacyInfo Type


`object` with following properties:


| Property | Type | Required |
|----------|------|----------|






## xdm:optOutConsentLevel
### Opt-out consent level (deprecated)

Opt-out consent level (deprecated).

`xdm:optOutConsentLevel`
* is optional
* type: `object`
* defined in [IAB TCF 2.0 Consent](../../../fieldgroups/profile/profile-privacy.schema.md#xdmoptoutconsentlevel)

### xdm:optOutConsentLevel Type


`object` with following properties:


| Property | Type | Required |
|----------|------|----------|
| `xdm:privacyOptOuts`| array | Optional |



#### xdm:privacyOptOuts
##### Privacy opt-outs (deprecated)

Encapsulates different opt-out types for data privacy (deprecated).

`xdm:privacyOptOuts`
* is optional
* type: `object[]`


##### xdm:privacyOptOuts Type


Array type: `object[]`

All items must be of the type:
`object` with following properties:


| Property | Type | Required |
|----------|------|----------|
| `xdm:optOutType`| string | Optional |
| `xdm:optOutValue`| string | Optional |
| `xdm:timestamp`| string | Optional |



#### xdm:optOutType
##### Opt-out type

The type of opt-out.

`xdm:optOutType`
* is optional
* type: `enum`

The value of this property **must** be equal to one of the [known values below](#xdmoptoutconsentlevel-known-values).

##### xdm:optOutType Known Values
| Value | Description |
|-------|-------------|
| `general_opt_out` | General opt-out |
| `sales_sharing_opt_out` | Sales sharing opt-out |






#### xdm:optOutValue
##### Opt-out value

The value of opt-out signal.

`xdm:optOutValue`
* is optional
* type: `enum`

The value of this property **must** be equal to one of the [known values below](#xdmoptoutconsentlevel-known-values).

##### xdm:optOutValue Known Values
| Value | Description |
|-------|-------------|
| `not_provided` | Not provided |
| `pending` | Pending verification |
| `in` | Opt-in |
| `out` | Opt-out |






#### xdm:timestamp
##### Opt-out timestamp

Timestamp of the received opt-out signal.

`xdm:timestamp`
* is optional
* type: `string`

##### xdm:timestamp Type


`string`
* format: `date-time` – date and time (according to [RFC 3339, section 5.6](http://tools.ietf.org/html/rfc3339))


















## xdm:segmentMembership
### Segment membership map

`xdm:segmentMembership`
* is optional
* type: `object`
* defined in [Segment Membership Details](../../../fieldgroups/profile/profile-segmentation.schema.md#xdmsegmentmembership)

### xdm:segmentMembership Type


`object` with following properties:


| Property | Type | Required |
|----------|------|----------|






## xdm:segments
### Segment membership

`xdm:segments`
* is optional
* type: Segment membership

* defined in [Segment Membership Details](../../../fieldgroups/profile/profile-segmentation.schema.md#xdmsegments)

### xdm:segments Type


Array type: Segment membership

All items must be of the type:
* [Segment membership](../../../datatypes/segmentmembership.schema.md) – `https://ns.adobe.com/xdm/context/segmentmembership`








## xdm:timeSeriesEvents
### Time-series Events

List of time-series based events that relate to schemas based on record.

`xdm:timeSeriesEvents`
* is optional
* type: Time-series Schema

* defined in [Time-series Extension for Record Data](../../../datatypes/data/record-timeseries-events.schema.md#xdmtimeseriesevents)

### xdm:timeSeriesEvents Type


Array type: Time-series Schema

All items must be of the type:
* [Time-series Schema](../../../behaviors/time-series.schema.md) – `https://ns.adobe.com/xdm/data/time-series`







