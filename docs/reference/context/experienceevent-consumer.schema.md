
# Consumer ExperienceEvent mixin Schema

```
https://ns.adobe.com/xdm/context/experienceevent-consumer
```

This mixin groups a set of standard fields to describe the behavior of an individual as it relates to digital content consumption (web, mobile app) as well as online or off-line purchases. Using this standard mixin allows data producers and consumers to have a consistent representation of individual behavior across Experience Platform.

| [Abstract](../../abstract.md) | [Extensible](../../extensions.md) | [Status](../../status.md) | [Identifiable](../../id.md) | [Custom Properties](../../extensions.md) | [Additional Properties](../../extensions.md) | Defined In |
|-------------------------------|-----------------------------------|---------------------------|-----------------------------|------------------------------------------|----------------------------------------------|------------|
| Can be instantiated | Yes | Experimental | No | Forbidden | Permitted | [context/experienceevent-consumer.schema.json](context/experienceevent-consumer.schema.json) |
## Schema Hierarchy

* Consumer ExperienceEvent mixin `https://ns.adobe.com/xdm/context/experienceevent-consumer`
  * [ExperienceEvent application details](experienceevent-application.schema.md) `https://ns.adobe.com/xdm/context/experienceevent-application`
  * [ExperienceEvent channel details](experienceevent-channel.schema.md) `https://ns.adobe.com/xdm/context/experienceevent-channel`
  * [ExperienceEvent environment details](experienceevent-environment-details.schema.md) `https://ns.adobe.com/xdm/context/experienceevent-environment-details`
  * [ExperienceEvent details for marketing](experienceevent-marketing.schema.md) `https://ns.adobe.com/xdm/context/experienceevent-marketing`
  * [ExperienceEvent details for media](experienceevent-media.schema.md) `https://ns.adobe.com/xdm/context/experienceevent-media`
  * [ExperienceEvent details for search](experienceevent-search.schema.md) `https://ns.adobe.com/xdm/context/experienceevent-search`
  * [ExperienceEvent Segment Membership Details](experienceevent-segmentmembership.schema.md) `https://ns.adobe.com/xdm/context/experienceevent-segmentmembership`
  * [ExperienceEvent technical details](experienceevent-technical-details.schema.md) `https://ns.adobe.com/xdm/context/experienceevent-technical-details`
  * [ExperienceEvent web details](experienceevent-web.schema.md) `https://ns.adobe.com/xdm/context/experienceevent-web`
  * [ExperienceEvent commerce details](experienceevent-commerce.schema.md) `https://ns.adobe.com/xdm/context/experienceevent-commerce`


## Consumer ExperienceEvent mixin Example
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
  }
}
```

# Consumer ExperienceEvent mixin Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [xdm:application](#xdmapplication) | Application | Optional | [ExperienceEvent application details](experienceevent-application.schema.md#xdmapplication) |
| [xdm:channel](#xdmchannel) | Experience Channel | Optional | [ExperienceEvent channel details](experienceevent-channel.schema.md#xdmchannel) |
| [xdm:commerce](#xdmcommerce) | Commerce | Optional | [ExperienceEvent commerce details](experienceevent-commerce.schema.md#xdmcommerce) |
| [xdm:dataSource](#xdmdatasource) | Data Source | Optional | [ExperienceEvent technical details](experienceevent-technical-details.schema.md#xdmdatasource) |
| [xdm:device](#xdmdevice) | Device | Optional | [ExperienceEvent environment details](experienceevent-environment-details.schema.md#xdmdevice) |
| [xdm:environment](#xdmenvironment) | Environment | Optional | [ExperienceEvent environment details](experienceevent-environment-details.schema.md#xdmenvironment) |
| [xdm:marketing](#xdmmarketing) | Marketing | Optional | [ExperienceEvent details for marketing](experienceevent-marketing.schema.md#xdmmarketing) |
| [xdm:media](#xdmmedia) | Media information | Optional | [ExperienceEvent details for media](experienceevent-media.schema.md#xdmmedia) |
| [xdm:placeContext](#xdmplacecontext) | Place context | Optional | [ExperienceEvent environment details](experienceevent-environment-details.schema.md#xdmplacecontext) |
| [xdm:productListItems](#xdmproductlistitems) | Product list item | Optional | [ExperienceEvent commerce details](experienceevent-commerce.schema.md#xdmproductlistitems) |
| [xdm:receivedTimestamp](#xdmreceivedtimestamp) | `string` | Optional | [ExperienceEvent technical details](experienceevent-technical-details.schema.md#xdmreceivedtimestamp) |
| [xdm:search](#xdmsearch) | Search | Optional | [ExperienceEvent details for search](experienceevent-search.schema.md#xdmsearch) |
| [xdm:segmentMembership](#xdmsegmentmembership) | `object` | Optional | [ExperienceEvent Segment Membership Details](experienceevent-segmentmembership.schema.md#xdmsegmentmembership) |
| [xdm:segmentMemberships](#xdmsegmentmemberships) | Segment membership item | Optional | [ExperienceEvent Segment Membership Details](experienceevent-segmentmembership.schema.md#xdmsegmentmemberships) |
| [xdm:web](#xdmweb) | Web information | Optional | [ExperienceEvent web details](experienceevent-web.schema.md#xdmweb) |
| `*` | any | Additional | this schema *allows* additional properties |

## xdm:application
### Application

This mixin is used to capture application information related to an ExperienceEvent, including the name of the application, app version, installs, launches, crashes, and closures. It could be either the application targeted by the event like the send of a push notification or the application originating the event such as a click, or a login.

`xdm:application`
* is optional
* type: Application
* defined in [ExperienceEvent application details](experienceevent-application.schema.md#xdmapplication)

### xdm:application Type


* [Application](application.schema.md) – `https://ns.adobe.com/xdm/context/application`





## xdm:channel
### Experience channel

Experience channel related to the ExperienceEvent.

`xdm:channel`
* is optional
* type: Experience Channel
* defined in [ExperienceEvent channel details](experienceevent-channel.schema.md#xdmchannel)

### xdm:channel Type


* [Experience Channel](../channels/channel.schema.md) – `https://ns.adobe.com/xdm/channels/channel`





## xdm:commerce
### Commerce

Commerce specific data related to this event.

`xdm:commerce`
* is optional
* type: Commerce
* defined in [ExperienceEvent commerce details](experienceevent-commerce.schema.md#xdmcommerce)

### xdm:commerce Type


* [Commerce](commerce.schema.md) – `https://ns.adobe.com/xdm/context/commerce`





## xdm:dataSource
### Data source

Globally unique identification of a data source.

`xdm:dataSource`
* is optional
* type: Data Source
* defined in [ExperienceEvent technical details](experienceevent-technical-details.schema.md#xdmdatasource)

### xdm:dataSource Type


* [Data Source](../data/datasource.schema.md) – `https://ns.adobe.com/xdm/data/datasource`





## xdm:device
### Device

An identified device, application or device browser instance that is trackable across sessions, normally by cookies.

`xdm:device`
* is optional
* type: Device
* defined in [ExperienceEvent environment details](experienceevent-environment-details.schema.md#xdmdevice)

### xdm:device Type


* [Device](device.schema.md) – `https://ns.adobe.com/xdm/context/device`





## xdm:environment
### Environment

Information about the surrounding situation the event observation occurred in, specifically detailing transitory information such as the network or software versions.

`xdm:environment`
* is optional
* type: Environment
* defined in [ExperienceEvent environment details](experienceevent-environment-details.schema.md#xdmenvironment)

### xdm:environment Type


* [Environment](environment.schema.md) – `https://ns.adobe.com/xdm/context/environment`





## xdm:marketing
### Marketing

The information related to marketing activities that are active with the touchpoint.

`xdm:marketing`
* is optional
* type: Marketing
* defined in [ExperienceEvent details for marketing](experienceevent-marketing.schema.md#xdmmarketing)

### xdm:marketing Type


* [Marketing](marketing.schema.md) – `https://ns.adobe.com/xdm/context/marketing`





## xdm:media
### Media

Media activity information related to the experience event.

`xdm:media`
* is optional
* type: Media information
* defined in [ExperienceEvent details for media](experienceevent-media.schema.md#xdmmedia)

### xdm:media Type


* [Media information](media.schema.md) – `https://ns.adobe.com/xdm/context/media`





## xdm:placeContext
### Place context

The transient circumstances related to the observation. Examples include locale specific information such as weather, local time, traffic, day of the week, workday vs. holiday, and working hours.

`xdm:placeContext`
* is optional
* type: Place context
* defined in [ExperienceEvent environment details](experienceevent-environment-details.schema.md#xdmplacecontext)

### xdm:placeContext Type


* [Place context](placecontext.schema.md) – `https://ns.adobe.com/xdm/context/placecontext`





## xdm:productListItems
### Product list items

A list of items representing a product selected by a customer with specific options and pricing that are for that usage context at a specific point of time and may differ from the product record.

`xdm:productListItems`
* is optional
* type: Product list item

* defined in [ExperienceEvent commerce details](experienceevent-commerce.schema.md#xdmproductlistitems)

### xdm:productListItems Type


Array type: Product list item

All items must be of the type:
* [Product list item](../content/productlistitem.schema.md) – `https://ns.adobe.com/xdm/content/productlistitem`








## xdm:receivedTimestamp
### Received time stamp

The time at which this interaction was received by a server.

`xdm:receivedTimestamp`
* is optional
* type: `string`
* defined in [ExperienceEvent technical details](experienceevent-technical-details.schema.md#xdmreceivedtimestamp)

### xdm:receivedTimestamp Type


`string`
* format: `date-time` – date and time (according to [RFC 3339, section 5.6](http://tools.ietf.org/html/rfc3339))






## xdm:search
### Search

The information related to web or mobile search.

`xdm:search`
* is optional
* type: Search
* defined in [ExperienceEvent details for search](experienceevent-search.schema.md#xdmsearch)

### xdm:search Type


* [Search](search.schema.md) – `https://ns.adobe.com/xdm/context/search`





## xdm:segmentMembership
### Segment Membership Map

`xdm:segmentMembership`
* is optional
* type: `object`
* defined in [ExperienceEvent Segment Membership Details](experienceevent-segmentmembership.schema.md#xdmsegmentmembership)

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

* defined in [ExperienceEvent Segment Membership Details](experienceevent-segmentmembership.schema.md#xdmsegmentmemberships)

### xdm:segmentMemberships Type


Array type: Segment membership item

All items must be of the type:
* [Segment membership item](segmentmembershipitem.schema.md) – `https://ns.adobe.com/xdm/context/segmentmembershipitem`








## xdm:web
### Web

The information related to web page and link of the ExperienceEvent.

`xdm:web`
* is optional
* type: Web information
* defined in [ExperienceEvent web details](experienceevent-web.schema.md#xdmweb)

### xdm:web Type


* [Web information](webinfo.schema.md) – `https://ns.adobe.com/xdm/context/webinfo`




