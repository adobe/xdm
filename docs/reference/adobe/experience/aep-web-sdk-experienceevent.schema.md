
# AEP Web SDK ExperienceEvent Mixin Schema

```
https://ns.adobe.com/experience/aep-web-sdk-experienceevent
```

Adobe Experience Platform Web SDK ExperienceEvent Mixin. Includes field definitions for automatically collected data by the AEP Web SDK (Alloy) library.

| [Abstract](../../../abstract.md) | [Extensible](../../../extensions.md) | [Status](../../../status.md) | [Identifiable](../../../id.md) | [Custom Properties](../../../extensions.md) | [Additional Properties](../../../extensions.md) | Defined In |
|----------------------------------|--------------------------------------|------------------------------|--------------------------------|---------------------------------------------|-------------------------------------------------|------------|
| Can be instantiated | Yes | Stable | No | Forbidden | Permitted | [adobe/experience/aep-web-sdk-experienceevent.schema.json](adobe/experience/aep-web-sdk-experienceevent.schema.json) |
## Schema Hierarchy

* AEP Web SDK ExperienceEvent Mixin `https://ns.adobe.com/experience/aep-web-sdk-experienceevent`
  * [Extensibility base schema](../../datatypes/extensible.schema.md) `https://ns.adobe.com/xdm/common/extensible`
  * [Implementation Details](../../fieldgroups/experience-event/experienceevent-implementation-details.schema.md) `https://ns.adobe.com/xdm/context/experienceevent-implementation-details`
  * [Data capture region for Experience Events](experienceevent-edgeregion.schema.md) `https://ns.adobe.com/experience/experienceevent-edgeregion`
  * [Environment Details](../../fieldgroups/experience-event/experienceevent-environment-details.schema.md) `https://ns.adobe.com/xdm/context/experienceevent-environment-details`
  * [Web Details](../../fieldgroups/experience-event/experienceevent-web.schema.md) `https://ns.adobe.com/xdm/context/experienceevent-web`
  * [Experience Event - Proposition Interactions](decisioning/experienceevent-proposition-interaction.schema.md) `https://ns.adobe.com/experience/decisioning/proposition-interaction`


# AEP Web SDK ExperienceEvent Mixin Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [https://ns.adobe.com/experience/decisioning/propositions](#httpsnsadobecomexperiencedecisioningpropositions) | Proposition Interaction Details | Optional | [Experience Event - Proposition Interactions](decisioning/experienceevent-proposition-interaction.schema.md#httpsnsadobecomexperiencedecisioningpropositions) |
| [xdm:device](#xdmdevice) | Device | Optional | [Environment Details](../../fieldgroups/experience-event/experienceevent-environment-details.schema.md#xdmdevice) |
| [xdm:environment](#xdmenvironment) | Environment | Optional | [Environment Details](../../fieldgroups/experience-event/experienceevent-environment-details.schema.md#xdmenvironment) |
| [xdm:implementationDetails](#xdmimplementationdetails) | Implementation details | Optional | [Implementation Details](../../fieldgroups/experience-event/experienceevent-implementation-details.schema.md#xdmimplementationdetails) |
| [xdm:placeContext](#xdmplacecontext) | Place context | Optional | [Environment Details](../../fieldgroups/experience-event/experienceevent-environment-details.schema.md#xdmplacecontext) |
| [xdm:userActivityRegion](#xdmuseractivityregion) | `object` | Optional | [Data capture region for Experience Events](experienceevent-edgeregion.schema.md#xdmuseractivityregion) |
| [xdm:web](#xdmweb) | Web information | Optional | [Web Details](../../fieldgroups/experience-event/experienceevent-web.schema.md#xdmweb) |
| `*` | any | Additional | this schema *allows* additional properties |

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





## xdm:implementationDetails
### Implementation details

Accomodates tracking versioning details for the Adobe Experience Cloud solutions deployed.

`xdm:implementationDetails`
* is optional
* type: Implementation details
* defined in [Implementation Details](../../fieldgroups/experience-event/experienceevent-implementation-details.schema.md#xdmimplementationdetails)

### xdm:implementationDetails Type


* [Implementation details](../../datatypes/industry-verticals/implementationdetails.schema.md) – `https://ns.adobe.com/xdm/context/implementationdetails`





## xdm:placeContext
### Place context

The transient circumstances related to the observation. Examples include locale specific information such as weather, local time, traffic, day of the week, workday vs. holiday, and working hours.

`xdm:placeContext`
* is optional
* type: Place context
* defined in [Environment Details](../../fieldgroups/experience-event/experienceevent-environment-details.schema.md#xdmplacecontext)

### xdm:placeContext Type


* [Place context](../../datatypes/placecontext.schema.md) – `https://ns.adobe.com/xdm/context/placecontext`





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




