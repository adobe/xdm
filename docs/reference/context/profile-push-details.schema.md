
# Profile Push Details Schema

```
https://ns.adobe.com/xdm/context/profile-push-details
```

This mixin is used to capture information regarding push notifications including device details and registration date. Push addressing details are used to communicate with applications that are installed on devices or SaaS application accounts.

| [Abstract](../../abstract.md) | [Extensible](../../extensions.md) | [Status](../../status.md) | [Identifiable](../../id.md) | [Custom Properties](../../extensions.md) | [Additional Properties](../../extensions.md) | Defined In |
|-------------------------------|-----------------------------------|---------------------------|-----------------------------|------------------------------------------|----------------------------------------------|------------|
| Can be instantiated | Yes | Experimental | No | Forbidden | Permitted | [context/profile-push-details.schema.json](context/profile-push-details.schema.json) |
## Schema Hierarchy

* Profile Push Details `https://ns.adobe.com/xdm/context/profile-push-details`
  * [Extensibility Base Schema](../common/extensible.schema.md) `https://ns.adobe.com/xdm/common/extensible`


## Profile Push Details Example
```json
{
  "xdm:pushNotificationTokens": [
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
  ]
}
```

# Profile Push Details Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [xdm:pushNotificationTokens](#xdmpushnotificationtokens) | Push Notification Token | Optional | Profile Push Details (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## xdm:pushNotificationTokens
### Push Notification Tokens

Push notification tokens are used to communicate with applications that are installed on devices or SaaS application accounts.

`xdm:pushNotificationTokens`
* is optional
* type: Push Notification Token

* defined in this schema

### xdm:pushNotificationTokens Type


Array type: Push Notification Token

All items must be of the type:
* [Push Notification Token](pushnotificationtoken.schema.md) – `https://ns.adobe.com/xdm/context/pushnotificationtoken`







