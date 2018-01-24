
# Push Notification Token Schema

```
https://ns.adobe.com/xdm/context/pushnotificationtoken
```

Push notification tokens are used to communicate with applications that
are installed on devices or SaaS application accounts. Examples include mobile
application notifications over notification services like the Apple Push
Notification service.


| Abstract | Extensible | Custom Properties | Additional Properties | Defined In |
|----------|------------|-------------------|-----------------------|------------|
| Can be instantiated | Yes | Forbidden | Permitted | [context/pushnotificationtoken.schema.json](context/pushnotificationtoken.schema.json) |

## Schema Hierarchy

* Push Notification Token `https://ns.adobe.com/xdm/context/pushnotificationtoken`
  * [Environment](environment.schema.md) `https://ns.adobe.com/xdm/context/environment`
  * [Device](device.schema.md) `https://ns.adobe.com/xdm/context/device`
  * [Application](../channels/application.schema.md) `https://ns.adobe.com/xdm/channels/application`
  * [Experience Channel](../channels/channel.schema.md) `https://ns.adobe.com/xdm/channels/channel`

## Push Notification Token Example
```json
{
  "xdm:token": "ABC123DEFG",
  "xdm:registrationDate": "2017-09-26T15:52:25+00:00",
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
      "xdm:viewportHeight": 600,
      "xdm:viewportWidth": 300
    },
    "xdm:operatingSystem": "iOS",
    "xdm:operatingSystemVersion": "11.2.1",
    "xdm:connectionType": "mobile"
  },
  "xdm:device": {
    "xdm:typeId": "TypeIdentifier-111",
    "xdm:typeIdService": "deviceAtlas",
    "xdm:type": "mobile",
    "xdm:manufacturer": "Apple",
    "xdm:model": "iPhone 6",
    "xdm:modelNumber": "A1586",
    "xdm:screenHeight": 667,
    "xdm:screenWidth": 375,
    "xdm:colorDepth": 16777216
  },
  "xdm:application": {
    "xdm:id": "Abc123",
    "xdm:name": "facebook",
    "xdm:version": "153.0"
  },
  "xdm:channel": {
    "@id": "https://ns.adobe.com/xdm/channels/facebook-feed",
    "@type": "https://ns.adobe.com/xdm/channel-types/social"
  }
}
```

# Push Notification Token Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [xdm:application](#xdmapplication) | Application | Optional | Push Notification Token (this schema) |
| [xdm:channel](#xdmchannel) | Experience Channel | Optional | Push Notification Token (this schema) |
| [xdm:deregistrationDate](#xdmderegistrationDate) | `string` | Optional | Push Notification Token (this schema) |
| [xdm:device](#xdmdevice) | Device | Optional | Push Notification Token (this schema) |
| [xdm:environment](#xdmenvironment) | Environment | Optional | Push Notification Token (this schema) |
| [xdm:registrationDate](#xdmregistrationDate) | `string` | Optional | Push Notification Token (this schema) |
| [xdm:token](#xdmtoken) | `string` | Optional | Push Notification Token (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## xdm:application
### Application

Application registered to receive Push Notifications.


`xdm:application`
* is optional
* type: Application
* defined in this schema

### xdm:application Type


* [Application](../channels/application.schema.md) – `https://ns.adobe.com/xdm/channels/application`





## xdm:channel
### Communication Channel

Channels for communicating with customers or users.

`xdm:channel`
* is optional
* type: Experience Channel
* defined in this schema

### xdm:channel Type


* [Experience Channel](../channels/channel.schema.md) – `https://ns.adobe.com/xdm/channels/channel`





## xdm:deregistrationDate
### Deregistration Date

Date and time when the profile has disabled push notifications on the application.


`xdm:deregistrationDate`
* is optional
* type: `string`
* defined in this schema

### xdm:deregistrationDate Type


`string`
* format: `date-time` – date and time (according to [RFC 3339, section 5.6](http://tools.ietf.org/html/rfc3339))






## xdm:device
### Device

The device originating the registration.

`xdm:device`
* is optional
* type: Device
* defined in this schema

### xdm:device Type


* [Device](device.schema.md) – `https://ns.adobe.com/xdm/context/device`





## xdm:environment
### Environment

Environment of at the time of the registration.


`xdm:environment`
* is optional
* type: Environment
* defined in this schema

### xdm:environment Type


* [Environment](environment.schema.md) – `https://ns.adobe.com/xdm/context/environment`





## xdm:registrationDate
### Registration Date

Date and time when the profile has authorized its application to receive
push notifications.


`xdm:registrationDate`
* is optional
* type: `string`
* defined in this schema

### xdm:registrationDate Type


`string`
* format: `date-time` – date and time (according to [RFC 3339, section 5.6](http://tools.ietf.org/html/rfc3339))






## xdm:token
### Token

The service specific token used to address the application for
communication. e.g an Apple APN ID or a Google GCM ID.


`xdm:token`
* is optional
* type: `string`
* defined in this schema

### xdm:token Type


`string`





