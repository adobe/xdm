
# Adobe Campaign Profile Snapshot Schema

```
https://ns.adobe.com/experience/campaign/profile-snapshot
```

Adobe Campaign Profile snapshot contains the recipient of the message. This property is primarily used to link the message to a Profile using the `IdentityMap` but it can also be used to freeze some properties of the profile at the time the message was sent.

| [Abstract](../../../../abstract.md) | [Extensible](../../../../extensions.md) | [Status](../../../../status.md) | [Identifiable](../../../../id.md) | [Custom Properties](../../../../extensions.md) | [Additional Properties](../../../../extensions.md) | Defined In |
|-------------------------------------|-----------------------------------------|---------------------------------|-----------------------------------|------------------------------------------------|----------------------------------------------------|------------|
| Can be instantiated | Yes | Stable | No | Forbidden | Permitted | [adobe/experience/campaign/profile-snapshot.schema.json](adobe/experience/campaign/profile-snapshot.schema.json) |
## Schema Hierarchy

* Adobe Campaign Profile Snapshot `https://ns.adobe.com/experience/campaign/profile-snapshot`
  * [Person](../../../datatypes/person/person.schema.md) `https://ns.adobe.com/xdm/context/person`
  * [Direct marketing postal address](../../../datatypes/marketing/directmarketing-address.schema.md) `https://ns.adobe.com/xdm/context/directmarketing-address`
  * [Direct marketing email address](../../../datatypes/marketing/directmarketing-emailaddress.schema.md) `https://ns.adobe.com/xdm/context/directmarketing-emailaddress`
  * [Direct marketing phone number](../../../datatypes/marketing/directmarketing-phonenumber.schema.md) `https://ns.adobe.com/xdm/context/directmarketing-phonenumber`


## Adobe Campaign Profile Snapshot Example
```json
{
  "xdm:person": {
    "xdm:name": {
      "xdm:firstName": "Jane",
      "xdm:middleName": "F",
      "xdm:lastName": "Doe",
      "xdm:fullName": "Jane F. Doe"
    },
    "xdm:birthDayAndMonth": "01-03",
    "xdm:gender": "female"
  },
  "xdm:directMarketingPhone": {
    "xdm:primary": true,
    "xdm:number": "1-408-888-8888",
    "xdm:status": "active",
    "xdm:errorCount": 0
  },
  "xdm:directMarketingAddress": {
    "@id": "https://data.adobe.io/entities/address/123",
    "xdm:primary": false,
    "xdm:street1": "345 Park Ave",
    "xdm:city": "San Jose",
    "xdm:stateProvince": "US-CA",
    "xdm:postalCode": "95110",
    "xdm:country": "United States",
    "xdm:countryCode": "US",
    "schema:latitude": 37.3382,
    "schema:longitude": 121.8863,
    "xdm:status": "active",
    "xdm:lastVerifiedDate": "2018-01-02",
    "xdm:errorCount": 0,
    "xdm:quality": "Fully-recognized street"
  },
  "xdm:directMarketingEmail": {
    "xdm:primary": false,
    "xdm:address": "jsmith@xyzinc.com",
    "xdm:label": "John Smith",
    "xdm:type": "work",
    "xdm:status": "active",
    "xdm:errorCount": 0
  },
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

# Adobe Campaign Profile Snapshot Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [xdm:directMarketingAddress](#xdmdirectmarketingaddress) | Direct marketing postal address | Optional | Adobe Campaign Profile Snapshot (this schema) |
| [xdm:directMarketingEmail](#xdmdirectmarketingemail) | Direct marketing email address | Optional | Adobe Campaign Profile Snapshot (this schema) |
| [xdm:directMarketingPhone](#xdmdirectmarketingphone) | Direct marketing phone number | Optional | Adobe Campaign Profile Snapshot (this schema) |
| [xdm:person](#xdmperson) | Person | Optional | Adobe Campaign Profile Snapshot (this schema) |
| [xdm:pushNotificationTokens](#xdmpushnotificationtokens) | Push notification token | Optional | Adobe Campaign Profile Snapshot (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## xdm:directMarketingAddress
### Direct Marketing Address

Direct Marketing postal address.

`xdm:directMarketingAddress`
* is optional
* type: Direct marketing postal address
* defined in this schema

### xdm:directMarketingAddress Type


* [Direct marketing postal address](../../../datatypes/marketing/directmarketing-address.schema.md) – `https://ns.adobe.com/xdm/context/directmarketing-address`





## xdm:directMarketingEmail
### Direct Marketing Email

Direct Marketing email address.

`xdm:directMarketingEmail`
* is optional
* type: Direct marketing email address
* defined in this schema

### xdm:directMarketingEmail Type


* [Direct marketing email address](../../../datatypes/marketing/directmarketing-emailaddress.schema.md) – `https://ns.adobe.com/xdm/context/directmarketing-emailaddress`





## xdm:directMarketingPhone
### Direct Marketing Phone

Direct Marketing phone number.

`xdm:directMarketingPhone`
* is optional
* type: Direct marketing phone number
* defined in this schema

### xdm:directMarketingPhone Type


* [Direct marketing phone number](../../../datatypes/marketing/directmarketing-phonenumber.schema.md) – `https://ns.adobe.com/xdm/context/directmarketing-phonenumber`





## xdm:person
### Person

An individual actor, contact, or owner.

`xdm:person`
* is optional
* type: Person
* defined in this schema

### xdm:person Type


* [Person](../../../datatypes/person/person.schema.md) – `https://ns.adobe.com/xdm/context/person`





## xdm:pushNotificationTokens
### Push Notification Tokens

Push notification tokens are used to communicate with applications that are installed on devices or SaaS application accounts.

`xdm:pushNotificationTokens`
* is optional
* type: Push notification token

* defined in this schema

### xdm:pushNotificationTokens Type


Array type: Push notification token

All items must be of the type:
* [Push notification token](../../../datatypes/pushnotificationtoken.schema.md) – `https://ns.adobe.com/xdm/context/pushnotificationtoken`







