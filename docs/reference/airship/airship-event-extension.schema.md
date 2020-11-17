
# Airship Event Extension Schema

```
https://ns.airship.com/airship-event-extension
```

This mixin adds Airship specific event fields.

| [Abstract](../../abstract.md) | [Extensible](../../extensions.md) | [Status](../../status.md) | [Identifiable](../../id.md) | [Custom Properties](../../extensions.md) | [Additional Properties](../../extensions.md) | Defined In |
|-------------------------------|-----------------------------------|---------------------------|-----------------------------|------------------------------------------|----------------------------------------------|------------|
| Can be instantiated | No | Experimental | No | Forbidden | Permitted | [airship/airship-event-extension.schema.json](airship/airship-event-extension.schema.json) |

# Airship Event Extension Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [airship:body](#airshipbody) | `object` | Optional | Airship Event Extension (this schema) |
| [airship:device](#airshipdevice) | `object` | Optional | Airship Event Extension (this schema) |
| [airship:offsetID](#airshipoffsetid) | `string` | Optional | Airship Event Extension (this schema) |
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
          }
        }
      }
    }
  },
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
      ]
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
      }
    },
    "airship:commercialOptedIn": {
      "title": "Commercial Opted In Date",
      "description": "The date and time when the user opted into commercial email messages.",
      "type": "string",
      "format": "date-time"
    },
    "airship:bounceClass": {
      "title": "Bounce Class",
      "description": "The bounce classification as provided by Airship email partners.",
      "type": "number"
    },
    "airship:bounceEmail": {
      "title": "Bounce Email Address",
      "description": "The email address that bounced.",
      "type": "string"
    },
    "airship:bounceSender": {
      "title": "Bounce Sender",
      "description": "The address that the bounced email came from (typically the sender address for your project in Airship).",
      "type": "string"
    },
    "airship:bounceSubject": {
      "title": "Bounce Subject",
      "description": "The subject line of the bounced email.",
      "type": "string"
    }
  },
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
              }
            }
          }
        }
      }
    },
    "airship:pushID": {
      "title": "Push ID",
      "description": "A unique identifier for a push operation.",
      "type": "string"
    },
    "airship:groupID": {
      "title": "Airship Group ID",
      "description": "Identifies a push delivered over an interval of time, e.g. multiple push_ids as part of the fulfillment of an automation or a push-to-local-time specification.",
      "type": "string"
    },
    "airship:variantID": {
      "title": "Airship Variant ID",
      "description": "The ID of the variant that a push is associated with, if the push was a part of an A/B test (experiment).",
      "type": "string"
    },
    "airship:pushTime": {
      "title": "Push Time",
      "description": "The UTC time when the push occurred.",
      "type": "string",
      "format": "date-time"
    }
  },
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
              }
            }
          }
        }
      }
    },
    "airship:pushID": {
      "title": "Push ID",
      "description": "A unique identifier for a push operation.",
      "type": "string"
    },
    "airship:groupID": {
      "title": "Airship Group ID",
      "description": "Identifies a push delivered over an interval of time, e.g. multiple push_ids as part of the fulfillment of an automation or a push-to-local-time specification.",
      "type": "string"
    },
    "airship:variantID": {
      "title": "Airship Variant ID",
      "description": "The ID of the variant that a push is associated with, if the push was a part of an A/B test (experiment).",
      "type": "string"
    },
    "airship:pushTime": {
      "title": "Push Time",
      "description": "The UTC time when the push occurred.",
      "type": "string",
      "format": "date-time"
    }
  },
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
      "type": "string"
    },
    "airship:uaSdkVersion": {
      "title": "Airship SDK Version",
      "description": "The version of the Airship SDK used in the app.",
      "type": "string"
    }
  },
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





