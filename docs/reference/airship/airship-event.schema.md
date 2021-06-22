
# Airship Event Mixin Schema

```
https://ns.airship.com/airship-event
```

Airship gathers engagement data that can help you better understand how your audience uses and reacts to your apps and messages. This mixin groups standard mixins that can be used describe Airship's standard engagement events. Any non-standard fields should be added as needed.

| [Abstract](../../abstract.md) | [Extensible](../../extensions.md) | [Status](../../status.md) | [Identifiable](../../id.md) | [Custom Properties](../../extensions.md) | [Additional Properties](../../extensions.md) | Defined In |
|-------------------------------|-----------------------------------|---------------------------|-----------------------------|------------------------------------------|----------------------------------------------|------------|
| Can be instantiated | Yes | Experimental | No | Forbidden | Permitted | [airship/airship-event.schema.json](airship/airship-event.schema.json) |
## Schema Hierarchy

* Airship Event Mixin `https://ns.airship.com/airship-event`
  * [IdentityMap](../fieldgroups/shared/identitymap.schema.md) `https://ns.adobe.com/xdm/context/identitymap`
  * [External Source System Audit Details Mixin](../fieldgroups/shared/external-source-system-audit-details.schema.md) `https://ns.adobe.com/xdm/common/external-source-system-audit-details`
  * [Channel Details](../fieldgroups/experience-event/experienceevent-channel.schema.md) `https://ns.adobe.com/xdm/context/experienceevent-channel`
  * [Environment Details](../fieldgroups/experience-event/experienceevent-environment-details.schema.md) `https://ns.adobe.com/xdm/context/experienceevent-environment-details`
  * [Application Details](../fieldgroups/experience-event/experienceevent-application.schema.md) `https://ns.adobe.com/xdm/context/experienceevent-application`
  * [Device](../datatypes/device.schema.md) `https://ns.adobe.com/xdm/context/device`


# Airship Event Mixin Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [airship:body](#airshipbody) | `object` | Optional | Airship Event Mixin (this schema) |
| [airship:device](#airshipdevice) | `object` | Optional | Airship Event Mixin (this schema) |
| [airship:offsetID](#airshipoffsetid) | `string` | Optional | Airship Event Mixin (this schema) |
| [xdm:application](#xdmapplication) | Application | Optional | [Application Details](../fieldgroups/experience-event/experienceevent-application.schema.md#xdmapplication) |
| [xdm:channel](#xdmchannel) | Experience Channel | Optional | [Channel Details](../fieldgroups/experience-event/experienceevent-channel.schema.md#xdmchannel) |
| [xdm:colorDepth](#xdmcolordepth) | `integer` | Optional | [Device](../datatypes/device.schema.md#xdmcolordepth) |
| [xdm:device](#xdmdevice) | Device | Optional | [Environment Details](../fieldgroups/experience-event/experienceevent-environment-details.schema.md#xdmdevice) |
| [xdm:environment](#xdmenvironment) | Environment | Optional | [Environment Details](../fieldgroups/experience-event/experienceevent-environment-details.schema.md#xdmenvironment) |
| [xdm:extSourceSystemAudit](#xdmextsourcesystemaudit) | External Source System Audit Attributes | Optional | [External Source System Audit Details Mixin](../fieldgroups/shared/external-source-system-audit-details.schema.md#xdmextsourcesystemaudit) |
| [xdm:identityMap](#xdmidentitymap) | `object` | Optional | [IdentityMap](../fieldgroups/shared/identitymap.schema.md#xdmidentitymap) |
| [xdm:isBackgroundPushEnabled](#xdmisbackgroundpushenabled) | `boolean` | Optional | [Device](../datatypes/device.schema.md#xdmisbackgroundpushenabled) |
| [xdm:isLocationEnabled](#xdmislocationenabled) | `boolean` | Optional | [Device](../datatypes/device.schema.md#xdmislocationenabled) |
| [xdm:isPushOptIn](#xdmispushoptin) | `boolean` | Optional | [Device](../datatypes/device.schema.md#xdmispushoptin) |
| [xdm:locationPermission](#xdmlocationpermission) | `enum` | Optional | [Device](../datatypes/device.schema.md#xdmlocationpermission) |
| [xdm:manufacturer](#xdmmanufacturer) | `string` | Optional | [Device](../datatypes/device.schema.md#xdmmanufacturer) |
| [xdm:model](#xdmmodel) | `string` | Optional | [Device](../datatypes/device.schema.md#xdmmodel) |
| [xdm:modelNumber](#xdmmodelnumber) | `string` | Optional | [Device](../datatypes/device.schema.md#xdmmodelnumber) |
| [xdm:placeContext](#xdmplacecontext) | Place context | Optional | [Environment Details](../fieldgroups/experience-event/experienceevent-environment-details.schema.md#xdmplacecontext) |
| [xdm:screenHeight](#xdmscreenheight) | `integer` | Optional | [Device](../datatypes/device.schema.md#xdmscreenheight) |
| [xdm:screenOrientation](#xdmscreenorientation) | `enum` | Optional | [Device](../datatypes/device.schema.md#xdmscreenorientation) |
| [xdm:screenWidth](#xdmscreenwidth) | `integer` | Optional | [Device](../datatypes/device.schema.md#xdmscreenwidth) |
| [xdm:type](#xdmtype) | `string` | Optional | [Device](../datatypes/device.schema.md#xdmtype) |
| [xdm:typeID](#xdmtypeid) | `string` | Optional | [Device](../datatypes/device.schema.md#xdmtypeid) |
| [xdm:typeIDService](#xdmtypeidservice) | `string` | Optional | [Device](../datatypes/device.schema.md#xdmtypeidservice) |
| `*` | any | Additional | this schema *allows* additional properties |

## airship:body
### Airship Event Body

Contains Airship specific event body fields.

`airship:body`
* is optional
* type: `object`
* defined in this schema

### airship:body Type


`object` with following properties:


| Property | Type | Required |
|----------|------|----------|
| `airship:alerting`| boolean | Optional |
| `airship:campaign`| object | Optional |
| `airship:complianceEventType`| string | Optional |
| `airship:complianceProperties`| object | Optional |
| `airship:groupID`| string | Optional |
| `airship:lastDelivered`| object | Optional |
| `airship:pushID`| string | Optional |
| `airship:regionAction`| string | Optional |
| `airship:regionID`| string | Optional |
| `airship:regionName`| string | Optional |
| `airship:triggeringPush`| object | Optional |
| `airship:variantID`| string | Optional |



#### airship:alerting
##### Alerting Push

If true, the send event was alerting. Alerting send event has notification text, badge, or sound.

`airship:alerting`
* is optional
* type: `boolean`

##### airship:alerting Type


`boolean`







#### airship:campaign
##### Airship Campaigns

An object listing the campaigns a push specification is associated with. The campaigns object includes an array of categories that must have between 1 and 10 elements, each of which is a string with a 64-byte limit.

`airship:campaign`
* is optional
* type: `object`

##### airship:campaign Type

Unknown type `object`.

```json
{
  "title": "Airship Campaigns",
  "description": "An object listing the campaigns a push specification is associated with. The campaigns object includes an array of categories that must have between 1 and 10 elements, each of which is a string with a 64-byte limit.",
  "type": "object",
  "properties": {
    "airship:campaigns": {
      "title": "Airship Campaigns",
      "description": "An object listing the campaigns a push specification is associated with.",
      "type": "object",
      "isRequired": false,
      "properties": {
        "airship:categories": {
          "title": "Airship Campaign Categories",
          "description": "An array of categories that must have between 1 and 10 elements, each of which is a string with a 64-byte limit.",
          "type": "array",
          "minItems": 1,
          "maxItems": 10,
          "items": {
            "type": "string",
            "maxLength": 64
          },
          "meta:titleId": "airship-event##airship:categories##title",
          "meta:descriptionId": "airship-event##airship:categories##description"
        }
      },
      "meta:titleId": "airship-event##airship:campaigns##title",
      "meta:descriptionId": "airship-event##airship:campaigns##description"
    }
  },
  "meta:titleId": "airship-event##airship:campaign##title",
  "meta:descriptionId": "airship-event##airship:campaign##description",
  "simpletype": "`object`"
}
```







#### airship:complianceEventType
##### Compliance Event Type

The type of compliance event for proving data-safety regulation compliance for email and SMS channel-related events.

`airship:complianceEventType`
* is optional
* type: `enum`

The value of this property **must** be equal to one of the [known values below](#airshipbody-known-values).

##### airship:complianceEventType Known Values
| Value | Description |
|-------|-------------|
| `bounce` | bounce |
| `create_and_send` | Create and send |
| `registration` | Registration |
| `api_initiate_opt_in` | API initiate opt in |
| `carrier_deactivation` | Carrier deactivation |
| `custom_keyword_response` | Custom keyword response |
| `mobile_create_channel` | Mobile create channel |
| `mobile_keyword_matched` | Mobile keyword matched |
| `mobile_keyword_unmatched` | Mobile keyword unmatched |
| `mobile_opt_in` | Mobile opt in |
| `mobile_opt_out` | Mobile opt out |
| `mobile_terminated_message` | Mobile terminated message |
| `opted_out` | Opted out |
| `uninstall` | Uninstall |






#### airship:complianceProperties
##### Compliance Event Properties

Additional properties for a compliance event.

`airship:complianceProperties`
* is optional
* type: `object`

##### airship:complianceProperties Type

Unknown type `object`.

```json
{
  "title": "Compliance Event Properties",
  "description": "Additional properties for a compliance event.",
  "type": "object",
  "properties": {
    "airship:messageType": {
      "title": "Message Type",
      "description": "The message type that the user unsubscribed from",
      "type": "string",
      "enum": [
        "unsubscribe",
        "commercial"
      ],
      "meta:titleId": "airship-event##airship:messageType##title",
      "meta:descriptionId": "airship-event##airship:messageType##description"
    },
    "airship:registrationType": {
      "title": "Registration Type",
      "description": "The type of change to a registration status.",
      "type": "string",
      "enum": [
        "create",
        "update",
        "unsubscribe"
      ],
      "meta:enum": {
        "create": "Create",
        "update": "Update",
        "unsubscribe": "Unsubscribe"
      },
      "meta:titleId": "airship-event##airship:registrationType##title",
      "meta:descriptionId": "airship-event##airship:registrationType##description"
    },
    "airship:commercialOptedIn": {
      "title": "Commercial Opted In Date",
      "description": "The date and time when the user opted into commercial email messages.",
      "type": "string",
      "format": "date-time",
      "meta:titleId": "airship-event##airship:commercialOptedIn##title",
      "meta:descriptionId": "airship-event##airship:commercialOptedIn##description"
    },
    "airship:bounceClass": {
      "title": "Bounce Class",
      "description": "The bounce classification as provided by Airship email partners.",
      "type": "number",
      "meta:titleId": "airship-event##airship:bounceClass##title",
      "meta:descriptionId": "airship-event##airship:bounceClass##description"
    },
    "airship:bounceEmail": {
      "title": "Bounce Email Address",
      "description": "The email address that bounced.",
      "type": "string",
      "meta:titleId": "airship-event##airship:bounceEmail##title",
      "meta:descriptionId": "airship-event##airship:bounceEmail##description"
    },
    "airship:bounceSender": {
      "title": "Bounce Sender",
      "description": "The address that the bounced email came from (typically the sender address for your project in Airship).",
      "type": "string",
      "meta:titleId": "airship-event##airship:bounceSender##title",
      "meta:descriptionId": "airship-event##airship:bounceSender##description"
    },
    "airship:bounceSubject": {
      "title": "Bounce Subject",
      "description": "The subject line of the bounced email.",
      "type": "string",
      "meta:titleId": "airship-event##airship:bounceSubject##title",
      "meta:descriptionId": "airship-event##airship:bounceSubject##description"
    }
  },
  "meta:titleId": "airship-event##airship:complianceProperties##title",
  "meta:descriptionId": "airship-event##airship:complianceProperties##description",
  "simpletype": "`object`"
}
```







#### airship:groupID
##### Airship Group ID

Identifies a push delivered over an interval of time, e.g. multiple push_ids as part of the fulfillment of an automation or a push-to-local-time specification.

`airship:groupID`
* is optional
* type: `string`

##### airship:groupID Type


`string`








#### airship:lastDelivered
##### Last Delivered

Identifies the last push notification the audience received before the event. Absent if the last push occurred more than 12 hours ago.

`airship:lastDelivered`
* is optional
* type: `object`

##### airship:lastDelivered Type

Unknown type `object`.

```json
{
  "title": "Last Delivered",
  "description": "Identifies the last push notification the audience received before the event. Absent if the last push occurred more than 12 hours ago.",
  "type": "object",
  "properties": {
    "airship:campaign": {
      "title": "Airship Campaigns",
      "description": "An object listing the campaigns a push specification is associated with. The campaigns object includes an array of categories that must have between 1 and 10 elements, each of which is a string with a 64-byte limit.",
      "type": "object",
      "properties": {
        "airship:campaigns": {
          "title": "Airship Campaigns",
          "description": "An object listing the campaigns a push specification is associated with.",
          "type": "object",
          "isRequired": false,
          "properties": {
            "airship:categories": {
              "title": "Airship Campaign Categories",
              "description": "An array of categories that must have between 1 and 10 elements, each of which is a string with a 64-byte limit.",
              "type": "array",
              "minItems": 1,
              "maxItems": 10,
              "items": {
                "type": "string",
                "maxLength": 64
              },
              "meta:titleId": "airship-event##airship:categories##title",
              "meta:descriptionId": "airship-event##airship:categories##description"
            }
          },
          "meta:titleId": "airship-event##airship:campaigns##title",
          "meta:descriptionId": "airship-event##airship:campaigns##description"
        }
      },
      "meta:titleId": "airship-event##airship:campaign##title",
      "meta:descriptionId": "airship-event##airship:campaign##description"
    },
    "airship:pushID": {
      "title": "Push ID",
      "description": "A unique identifier for a push operation.",
      "type": "string",
      "meta:titleId": "airship-event##airship:pushID##title",
      "meta:descriptionId": "airship-event##airship:pushID##description"
    },
    "airship:groupID": {
      "title": "Airship Group ID",
      "description": "Identifies a push delivered over an interval of time, e.g. multiple push_ids as part of the fulfillment of an automation or a push-to-local-time specification.",
      "type": "string",
      "meta:titleId": "airship-event##airship:groupID##title",
      "meta:descriptionId": "airship-event##airship:groupID##description"
    },
    "airship:variantID": {
      "title": "Airship Variant ID",
      "description": "The ID of the variant that a push is associated with, if the push was a part of an A/B test (experiment).",
      "type": "string",
      "meta:titleId": "airship-event##airship:variantID##title",
      "meta:descriptionId": "airship-event##airship:variantID##description"
    },
    "airship:pushTime": {
      "title": "Push Time",
      "description": "The UTC time when the push occurred.",
      "type": "string",
      "format": "date-time",
      "meta:titleId": "airship-event##airship:pushTime##title",
      "meta:descriptionId": "airship-event##airship:pushTime##description"
    }
  },
  "meta:titleId": "airship-event##airship:lastDelivered##title",
  "meta:descriptionId": "airship-event##airship:lastDelivered##description",
  "simpletype": "`object`"
}
```







#### airship:pushID
##### Push ID

A unique identifier for a push operation.

`airship:pushID`
* is optional
* type: `string`

##### airship:pushID Type


`string`








#### airship:regionAction
##### Region/Geofence Action

Indicates whether the event was the result of a user entering or exiting the region.

`airship:regionAction`
* is optional
* type: `enum`

The value of this property **must** be equal to one of the [known values below](#airshipbody-known-values).

##### airship:regionAction Known Values
| Value | Description |
|-------|-------------|
| `enter` |  |
| `exit` |  |






#### airship:regionID
##### Region/Geofence Identifier

The unique region identifier from the originating system or location partner.

`airship:regionID`
* is optional
* type: `string`

##### airship:regionID Type


`string`








#### airship:regionName
##### Region/Geofence Name

A friendly name for the region or geofence; may be provided from a third-party location partner.

`airship:regionName`
* is optional
* type: `string`

##### airship:regionName Type


`string`








#### airship:triggeringPush
##### Triggering Push

The specific push notification details associated with an event. An associated push helps you trace an event to the original notification or operation.An associated push object may specify a `time`, if the push was a singular operation sent at a defined time. Otherwise, the object will include a `group_id` if the push was sent at a relative time (`best_time` or `local_time`) an automation pipeline, or another operation resulting in multiple `push_id`s.

`airship:triggeringPush`
* is optional
* type: `object`

##### airship:triggeringPush Type

Unknown type `object`.

```json
{
  "title": "Triggering Push",
  "description": "The specific push notification details associated with an event. An associated push helps you trace an event to the original notification or operation.An associated push object may specify a `time`, if the push was a singular operation sent at a defined time. Otherwise, the object will include a `group_id` if the push was sent at a relative time (`best_time` or `local_time`) an automation pipeline, or another operation resulting in multiple `push_id`s.",
  "type": "object",
  "properties": {
    "airship:campaign": {
      "title": "Airship Campaigns",
      "description": "An object listing the campaigns a push specification is associated with. The campaigns object includes an array of categories that must have between 1 and 10 elements, each of which is a string with a 64-byte limit.",
      "type": "object",
      "properties": {
        "airship:campaigns": {
          "title": "Airship Campaigns",
          "description": "An object listing the campaigns a push specification is associated with.",
          "type": "object",
          "isRequired": false,
          "properties": {
            "airship:categories": {
              "title": "Airship Campaign Categories",
              "description": "An array of categories that must have between 1 and 10 elements, each of which is a string with a 64-byte limit.",
              "type": "array",
              "minItems": 1,
              "maxItems": 10,
              "items": {
                "type": "string",
                "maxLength": 64
              },
              "meta:titleId": "airship-event##airship:categories##title",
              "meta:descriptionId": "airship-event##airship:categories##description"
            }
          },
          "meta:titleId": "airship-event##airship:campaigns##title",
          "meta:descriptionId": "airship-event##airship:campaigns##description"
        }
      },
      "meta:titleId": "airship-event##airship:campaign##title",
      "meta:descriptionId": "airship-event##airship:campaign##description"
    },
    "airship:pushID": {
      "title": "Push ID",
      "description": "A unique identifier for a push operation.",
      "type": "string",
      "meta:titleId": "airship-event##airship:pushID##title",
      "meta:descriptionId": "airship-event##airship:pushID##description"
    },
    "airship:groupID": {
      "title": "Airship Group ID",
      "description": "Identifies a push delivered over an interval of time, e.g. multiple push_ids as part of the fulfillment of an automation or a push-to-local-time specification.",
      "type": "string",
      "meta:titleId": "airship-event##airship:groupID##title",
      "meta:descriptionId": "airship-event##airship:groupID##description"
    },
    "airship:variantID": {
      "title": "Airship Variant ID",
      "description": "The ID of the variant that a push is associated with, if the push was a part of an A/B test (experiment).",
      "type": "string",
      "meta:titleId": "airship-event##airship:variantID##title",
      "meta:descriptionId": "airship-event##airship:variantID##description"
    },
    "airship:pushTime": {
      "title": "Push Time",
      "description": "The UTC time when the push occurred.",
      "type": "string",
      "format": "date-time",
      "meta:titleId": "airship-event##airship:pushTime##title",
      "meta:descriptionId": "airship-event##airship:pushTime##description"
    }
  },
  "meta:titleId": "airship-event##airship:triggeringPush##title",
  "meta:descriptionId": "airship-event##airship:triggeringPush##description",
  "simpletype": "`object`"
}
```







#### airship:variantID
##### Airship Variant ID

The ID of the variant that a push is associated with, if the push was a part of an A/B test (experiment).

`airship:variantID`
* is optional
* type: `string`

##### airship:variantID Type


`string`











## airship:device
### Airship Device

Contains Airship specific device attributes.

`airship:device`
* is optional
* type: `object`
* defined in this schema

### airship:device Type


`object` with following properties:


| Property | Type | Required |
|----------|------|----------|
| `airship:attributes`| object | Optional |



#### airship:attributes
##### Airship Device Attributes

Attributes specific to devices in Airship.

`airship:attributes`
* is optional
* type: `object`

##### airship:attributes Type

Unknown type `object`.

```json
{
  "title": "Airship Device Attributes",
  "description": "Attributes specific to devices in Airship.",
  "type": "object",
  "properties": {
    "airship:localeVariant": {
      "title": "Airship Locale Variant",
      "description": "The language locale variant if one is reported for the device..",
      "type": "string",
      "meta:titleId": "airship-event##airship:localeVariant##title",
      "meta:descriptionId": "airship-event##airship:localeVariant##description"
    },
    "airship:uaSdkVersion": {
      "title": "Airship SDK Version",
      "description": "The version of the Airship SDK used in the app.",
      "type": "string",
      "meta:titleId": "airship-event##airship:uaSdkVersion##title",
      "meta:descriptionId": "airship-event##airship:uaSdkVersion##description"
    }
  },
  "meta:titleId": "airship-event##airship:attributes##title",
  "meta:descriptionId": "airship-event##airship:attributes##description",
  "simpletype": "`object`"
}
```










## airship:offsetID
### Event Offset Id

An identifier that represents the events location in the Airship event stream and can be used for troubleshooting or handling duplicate events.

`airship:offsetID`
* is optional
* type: `string`
* defined in this schema

### airship:offsetID Type


`string`






## xdm:application
### Application

This mixin is used to capture application information related to an ExperienceEvent, including the name of the application, app version, installs, launches, crashes, and closures. It could be either the application targeted by the event like the send of a push notification or the application originating the event such as a click, or a login.

`xdm:application`
* is optional
* type: Application
* defined in [Application Details](../fieldgroups/experience-event/experienceevent-application.schema.md#xdmapplication)

### xdm:application Type


* [Application](../datatypes/application.schema.md) – `https://ns.adobe.com/xdm/context/application`





## xdm:channel
### Experience channel

Experience channel related to the ExperienceEvent.

`xdm:channel`
* is optional
* type: Experience Channel
* defined in [Channel Details](../fieldgroups/experience-event/experienceevent-channel.schema.md#xdmchannel)

### xdm:channel Type


* [Experience Channel](../datatypes/channels/channel.schema.md) – `https://ns.adobe.com/xdm/channels/channel`





## xdm:colorDepth
### Color depth

The number of colors the display is able to represent.

`xdm:colorDepth`
* is optional
* type: `integer`
* defined in [Device](../datatypes/device.schema.md#xdmcolordepth)

### xdm:colorDepth Type


`integer`






## xdm:device
### Device

An identified device, application or device browser instance that is trackable across sessions, normally by cookies.

`xdm:device`
* is optional
* type: Device
* defined in [Environment Details](../fieldgroups/experience-event/experienceevent-environment-details.schema.md#xdmdevice)

### xdm:device Type


* [Device](../datatypes/device.schema.md) – `https://ns.adobe.com/xdm/context/device`





## xdm:environment
### Environment

Information about the surrounding situation the event observation occurred in, specifically detailing transitory information such as the network or software versions.

`xdm:environment`
* is optional
* type: Environment
* defined in [Environment Details](../fieldgroups/experience-event/experienceevent-environment-details.schema.md#xdmenvironment)

### xdm:environment Type


* [Environment](../datatypes/environment.schema.md) – `https://ns.adobe.com/xdm/context/environment`





## xdm:extSourceSystemAudit
### External Source System Audit Properties

Audit attributes for external sources.

`xdm:extSourceSystemAudit`
* is optional
* type: External Source System Audit Attributes
* defined in [External Source System Audit Details Mixin](../fieldgroups/shared/external-source-system-audit-details.schema.md#xdmextsourcesystemaudit)

### xdm:extSourceSystemAudit Type


* [External Source System Audit Attributes](../datatypes/auditing/external-source-system-audit.schema.md) – `https://ns.adobe.com/xdm/common/external-source-system-audit`





## xdm:identityMap


`xdm:identityMap`
* is optional
* type: `object`
* defined in [IdentityMap](../fieldgroups/shared/identitymap.schema.md#xdmidentitymap)

### xdm:identityMap Type


`object` with following properties:


| Property | Type | Required |
|----------|------|----------|






## xdm:isBackgroundPushEnabled
### Background Push Enabled Flag

For devices like mobile , this tracks the system background push enabled permision status.

`xdm:isBackgroundPushEnabled`
* is optional
* type: `boolean`
* defined in [Device](../datatypes/device.schema.md#xdmisbackgroundpushenabled)

### xdm:isBackgroundPushEnabled Type


`boolean`





## xdm:isLocationEnabled
### Location Enabled Flag

Indicates whether or not the device has location services enabled.

`xdm:isLocationEnabled`
* is optional
* type: `boolean`
* defined in [Device](../datatypes/device.schema.md#xdmislocationenabled)

### xdm:isLocationEnabled Type


`boolean`





## xdm:isPushOptIn
### Push Opt In Flag

Indicates whether or not the device opted-in to receive push notifications.

`xdm:isPushOptIn`
* is optional
* type: `boolean`
* defined in [Device](../datatypes/device.schema.md#xdmispushoptin)

### xdm:isPushOptIn Type


`boolean`





## xdm:locationPermission
### Location Permission

Tracks the device location permision attribute setting.

`xdm:locationPermission`
* is optional
* type: `enum`
* defined in [Device](../datatypes/device.schema.md#xdmlocationpermission)

The value of this property **must** be equal to one of the [known values below](#xdmlocationpermission-known-values).

### xdm:locationPermission Known Values
| Value | Description |
|-------|-------------|
| `SYSTEM_LOCATION_DISABLED` |  |
| `NOT_ALLOWED` |  |
| `ALWAYS_ALLOWED` |  |
| `FOREGROUND_ALLOWED` |  |
| `UNPROMPTED` |  |




## xdm:manufacturer
### Manufacturer

The name of the organization who owns the design and creation of the device, for example, 'Apple' is the manufacturer of the iPhone.

`xdm:manufacturer`
* is optional
* type: `string`
* defined in [Device](../datatypes/device.schema.md#xdmmanufacturer)

### xdm:manufacturer Type


`string`






## xdm:model
### Model

The name of the model for the device. This is the common, human-readable, or marketing name for the device. For example, the 'iPhone 6S' is a particular model of mobile phone.

`xdm:model`
* is optional
* type: `string`
* defined in [Device](../datatypes/device.schema.md#xdmmodel)

### xdm:model Type


`string`






## xdm:modelNumber
### Model number

The unique model number designation assigned by the manufacturer for this device. Model numbers are not versions, but unique identifiers that identify a particular model configuration. While the model for a particular phone might be 'iPhone 6S' the model number would be 'A1633', or 'A1634' based on configuration at the time of sale.

`xdm:modelNumber`
* is optional
* type: `string`
* defined in [Device](../datatypes/device.schema.md#xdmmodelnumber)

### xdm:modelNumber Type


`string`






## xdm:placeContext
### Place context

The transient circumstances related to the observation. Examples include locale specific information such as weather, local time, traffic, day of the week, workday vs. holiday, and working hours.

`xdm:placeContext`
* is optional
* type: Place context
* defined in [Environment Details](../fieldgroups/experience-event/experienceevent-environment-details.schema.md#xdmplacecontext)

### xdm:placeContext Type


* [Place context](../datatypes/placecontext.schema.md) – `https://ns.adobe.com/xdm/context/placecontext`





## xdm:screenHeight
### Screen height

The number of vertical pixels of the device's active display in the default orientation.

`xdm:screenHeight`
* is optional
* type: `integer`
* defined in [Device](../datatypes/device.schema.md#xdmscreenheight)

### xdm:screenHeight Type


`integer`






## xdm:screenOrientation
### Screen orientation

The current screen orientation such as "portrait" or "landscape".

`xdm:screenOrientation`
* is optional
* type: `enum`
* defined in [Device](../datatypes/device.schema.md#xdmscreenorientation)

The value of this property **must** be equal to one of the [known values below](#xdmscreenorientation-known-values).

### xdm:screenOrientation Known Values
| Value | Description |
|-------|-------------|
| `portrait` | Portrait |
| `landscape` | Landscape |




## xdm:screenWidth
### Screen width

The number of horizontal pixels of the device's active display in the default orientation.

`xdm:screenWidth`
* is optional
* type: `integer`
* defined in [Device](../datatypes/device.schema.md#xdmscreenwidth)

### xdm:screenWidth Type


`integer`






## xdm:type
### Type

Type of device being tracked.

`xdm:type`
* is optional
* type: `string`
* defined in [Device](../datatypes/device.schema.md#xdmtype)

### xdm:type Type


`string`



### xdm:type Known Values
| Value | Description |
|-------|-------------|
| `mobile` | Mobile |
| `tablet` | Tablet |
| `desktop` | Desktop |
| `ereader` | E-reader |
| `gaming` | Gaming console |
| `television` | Television |
| `settop` | Set-top box |
| `mediaplayer` | Media player |
| `computers` | Computers |
| `tv screens` | TV screens |




## xdm:typeID
### Type identifier

An identifier for the device. This may be an identifier from 'DeviceAtlas' or another service that identifies the hardware that is being used.

`xdm:typeID`
* is optional
* type: `string`
* defined in [Device](../datatypes/device.schema.md#xdmtypeid)

### xdm:typeID Type


`string`






## xdm:typeIDService
### Type identifier service

The namespace of the service that is used to identify the device type.

`xdm:typeIDService`
* is optional
* type: `string`
* defined in [Device](../datatypes/device.schema.md#xdmtypeidservice)

### xdm:typeIDService Type


`string`
* format: `uri` – Uniformous Resource Identifier (according to [RFC3986](http://tools.ietf.org/html/rfc3986))



### xdm:typeIDService Known Values
| Value | Description |
|-------|-------------|
| `https://ns.adobe.com/xdm/external/deviceatlas` | DeviceAtlas |
| `https://ns.adobe.com/xdm/external/adobecampaign` | Adobe Campaign |



