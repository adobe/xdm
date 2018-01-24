
# ExperienceEvent Schema

```
https://ns.adobe.com/xdm/context/experienceevent
```

The core ExperienceEvent XDM is used to capture observations that are altering one or more related XDMs/entities. The ExperienceEvent captures information about the observation taking place and when it is occurring. It is critical for time domain analytics as it allows observation and analysis of changes that occur in windows of time and comparison with other windows of time to track trends. ExperienceEvent are either explicit or implicit. Explicit events are direct observations of a human action taking place during a session. Implicit events are events that are being raised without a direct human action. Examples of implicit events are scheduled email sending of newsletters, battery voltage reaching a certain threshold, a person entering into range of a proximity sensor. While not all events are easily categorized across all data sources, it is extremely valuable to harmonize similar events into similar types for processing where possible, and the XDM specifications does this by defining a set of enumerated **type** attribute values with specific semantic meanings. Where possible events must be constrained to these enumerated values to facilitate interoperability.

| Abstract | Extensible | Custom Properties | Additional Properties | Defined In |
|----------|------------|-------------------|-----------------------|------------|
| Can be instantiated | Yes | Forbidden | Permitted | [context/experienceevent.schema.json](context/experienceevent.schema.json) |

## Schema Hierarchy

* ExperienceEvent `https://ns.adobe.com/xdm/context/experienceevent`
  * [Extensibility base schema](../common/extensible.schema.md) `https://ns.adobe.com/xdm/common/extensible`
  * [Data Source](../data/datasource.schema.md) `https://ns.adobe.com/xdm/data/datasource`
  * [End User IDs](enduserids.schema.md) `https://ns.adobe.com/xdm/context/enduserids`
  * [Metrics](../data/metrics.schema.md) `https://ns.adobe.com/xdm/data/metrics`
  * [Environment](environment.schema.md) `https://ns.adobe.com/xdm/context/environment`
  * [Device](device.schema.md) `https://ns.adobe.com/xdm/context/device`
  * [Commerce](commerce.schema.md) `https://ns.adobe.com/xdm/context/commerce`
  * [Application](../channels/application.schema.md) `https://ns.adobe.com/xdm/channels/application`
  * [Search](search.schema.md) `https://ns.adobe.com/xdm/context/search`
  * [Web](../channels/web.schema.md) `https://ns.adobe.com/xdm/channels/web`
  * [Marketing](marketing.schema.md) `https://ns.adobe.com/xdm/context/marketing`
  * [Location Context](locationcontext.schema.md) `https://ns.adobe.com/xdm/context/locationcontext`

## ExperienceEvent Example
```json
{
  "@id": "https://data.adobe.io/experienceid-123456",
  "xdm:dataSource": {
    "@id": "https://data.adobe.io/datasources/datasource-123",
    "xdm:name": "DataSourceIntegrationCode-123"
  },
  "xdm:timestamp": "2017-09-26T15:52:25+00:00",
  "xdm:endUserIds": {
    "xdm:realm": {
      "@id": "https://data.adobe.io/experiencecloud/audiencemanager",
      "xdm:name": "Adobe Audience Manager"
    },
    "https://ns.adobe.com/experiencecloud/mcid": {
      "xdm:datasource": {
        "@id": "https://data.adobe.io/experiencecloud/mcid",
        "xdm:name": "Adobe Marketing Cloud Identity Core Service"
      },
      "xdm:id": "mcid-sample111",
      "xdm:confidence": 1
    },
    "https://ns.adobe.com/experiencecloud/analytics": {
      "xdm:id": "mcid-sample111",
      "xdm:confidence": 0.99
    }
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
          "xdm:paymentAmount": 899.99,
          "xdm:paymentType": "credit_card",
          "xdm:currencyCode": "USD"
        },
        {
          "xdm:transactionId": "transactid-a222",
          "xdm:paymentAmount": 99.99,
          "xdm:paymentType": "gift_card",
          "xdm:currencyCode": "USD"
        }
      ],
      "xdm:currencyCode": "USD",
      "xdm:priceTotal": 999.98
    }
  },
  "xdm:locationContext": {
    "xdm:localTime": "2001-07-04T12:08:56+01:00",
    "xdm:geo": {
      "@id": "https://ns.adobe.com/entities/geo/tokyo",
      "xdm:countryCode": "JP",
      "xdm:stateProvince": "Tōkyō-to",
      "xdm:city": "Tōkyō",
      "xdm:postalCode": "141-0032",
      "schema:latitude": 35.6185,
      "schema:longitude": 139.73237
    }
  },
  "xdm:marketing": {
    "xdm:trackingCode": "marketingcampaign111"
  }
}
```

# ExperienceEvent Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [@id](#@id) | `string` | Optional | ExperienceEvent (this schema) |
| [xdm:application](#xdmapplication) | Application | Optional | ExperienceEvent (this schema) |
| [xdm:commerce](#xdmcommerce) | Commerce | Optional | ExperienceEvent (this schema) |
| [xdm:dataSource](#xdmdataSource) | Data Source | Optional | ExperienceEvent (this schema) |
| [xdm:device](#xdmdevice) | Device | Optional | ExperienceEvent (this schema) |
| [xdm:endUserIds](#xdmendUserIds) | End User IDs | Optional | ExperienceEvent (this schema) |
| [xdm:environment](#xdmenvironment) | Environment | Optional | ExperienceEvent (this schema) |
| [xdm:locationContext](#xdmlocationContext) | Location Context | Optional | ExperienceEvent (this schema) |
| [xdm:marketing](#xdmmarketing) | Marketing | Optional | ExperienceEvent (this schema) |
| [xdm:metrics](#xdmmetrics) | Metrics | Optional | ExperienceEvent (this schema) |
| [xdm:productListItems](#xdmproductListItems) | Product List Item | Optional | ExperienceEvent (this schema) |
| [xdm:search](#xdmsearch) | Search | Optional | ExperienceEvent (this schema) |
| [xdm:timestamp](#xdmtimestamp) | `string` | Optional | ExperienceEvent (this schema) |
| [xdm:web](#xdmweb) | Web | Optional | ExperienceEvent (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## @id
### Identifier

The unique identifier for the ExperienceEvent.

`@id`
* is optional
* type: `string`
* defined in this schema

### @id Type


`string`
* format: `uri` – Uniformous Resource Identifier (according to [RFC3986](http://tools.ietf.org/html/rfc3986))






## xdm:application
### Application

The application related to the event observation. It could be either the application targeted by the event like the send of a push notification or the application originating the event such as a click, or a login.

`xdm:application`
* is optional
* type: Application
* defined in this schema

### xdm:application Type


* [Application](../channels/application.schema.md) – `https://ns.adobe.com/xdm/channels/application`





## xdm:commerce
### Commerce

The commerce specific data related to this interaction.

`xdm:commerce`
* is optional
* type: Commerce
* defined in this schema

### xdm:commerce Type


* [Commerce](commerce.schema.md) – `https://ns.adobe.com/xdm/context/commerce`





## xdm:dataSource
### Data Source

Globally unique identification of a data source.

`xdm:dataSource`
* is optional
* type: Data Source
* defined in this schema

### xdm:dataSource Type


* [Data Source](../data/datasource.schema.md) – `https://ns.adobe.com/xdm/data/datasource`





## xdm:device
### Device

An identified Device/Application or Device/Browser instance that is trackable across sessions, normally by cookies.

`xdm:device`
* is optional
* type: Device
* defined in this schema

### xdm:device Type


* [Device](device.schema.md) – `https://ns.adobe.com/xdm/context/device`





## xdm:endUserIds
### End User IDs

Condensed, normalized encapsulation of all end user identifiers.


`xdm:endUserIds`
* is optional
* type: End User IDs
* defined in this schema

### xdm:endUserIds Type


* [End User IDs](enduserids.schema.md) – `https://ns.adobe.com/xdm/context/enduserids`





## xdm:environment
### Environment

Information about the surrounding situation the event observation occurred in, specifically detailing transitory information such as the network or software versions.

`xdm:environment`
* is optional
* type: Environment
* defined in this schema

### xdm:environment Type


* [Environment](environment.schema.md) – `https://ns.adobe.com/xdm/context/environment`





## xdm:locationContext
### Location Context

The transient circumstances related to the observation. Examples include locale specific information such as weather, local time, traffic, day of the week, workday vs. holiday, working hours.

`xdm:locationContext`
* is optional
* type: Location Context
* defined in this schema

### xdm:locationContext Type


* [Location Context](locationcontext.schema.md) – `https://ns.adobe.com/xdm/context/locationcontext`





## xdm:marketing
### Marketing

The information related to marketing activities that are active with the touchpoint.

`xdm:marketing`
* is optional
* type: Marketing
* defined in this schema

### xdm:marketing Type


* [Marketing](marketing.schema.md) – `https://ns.adobe.com/xdm/context/marketing`





## xdm:metrics
### Metrics

The metrics for actions performed during this observation.

`xdm:metrics`
* is optional
* type: Metrics
* defined in this schema

### xdm:metrics Type


* [Metrics](../data/metrics.schema.md) – `https://ns.adobe.com/xdm/data/metrics`





## xdm:productListItems
### Product List Items

A list of items representing a product selected by a customer with specific options and pricing that are for that usage context at a specific point of time and may differ from the product record.

`xdm:productListItems`
* is optional
* type: Product List Item

* defined in this schema

### xdm:productListItems Type


Array type: Product List Item

All items must be of the type:
* [Product List Item](../content/productlistitem.schema.md) – `https://ns.adobe.com/xdm/content/productlistitem`








## xdm:search
### Search

The information related to web or mobile search.

`xdm:search`
* is optional
* type: Search
* defined in this schema

### xdm:search Type


* [Search](search.schema.md) – `https://ns.adobe.com/xdm/context/search`





## xdm:timestamp
### Timestamp

The time when the first event of the interaction occurred.

`xdm:timestamp`
* is optional
* type: `string`
* defined in this schema

### xdm:timestamp Type


`string`
* format: `date-time` – date and time (according to [RFC 3339, section 5.6](http://tools.ietf.org/html/rfc3339))






## xdm:web
### Web

The information related to web page and link of the ExperienceEvent.

`xdm:web`
* is optional
* type: Web
* defined in this schema

### xdm:web Type


* [Web](../channels/web.schema.md) – `https://ns.adobe.com/xdm/channels/web`




