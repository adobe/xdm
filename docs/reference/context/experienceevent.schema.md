
# ExperienceEvent Schema

```
https://ns.adobe.com/xdm/context/experienceevent
```

The core ExperienceEvent XDM is used to capture observations that are altering one or more related XDMs/entities. The ExperienceEvent captures information about the observation taking place and when it is occurring. It is critical for time domain analytics as it allows observation and analysis of changes that occur in windows of time and comparison with other windows of time to track trends. ExperienceEvent are either explicit or implicit. Explicit events are direct observations of a human action taking place during a session. Implicit events are events that are being raised without a direct human action. Examples of implicit events are scheduled email sending of newsletters, battery voltage reaching a certain threshold, a person entering into range of a proximity sensor. While not all events are easily categorized across all data sources, it is extremely valuable to harmonize similar events into similar types for processing where possible, and the XDM specifications does this by defining a set of enumerated **type** attribute values with specific semantic meanings. Where possible events must be constrained to these enumerated values to facilitate interoperability.

| [Abstract](../../abstract.md) | [Extensible](../../extensions.md) | [Status](../../status.md) | [Identifiable](../../id.md) | [Custom Properties](../../extensions.md) | [Additional Properties](../../extensions.md) | Defined In |
|-------------------------------|-----------------------------------|---------------------------|-----------------------------|------------------------------------------|----------------------------------------------|------------|
| Can be instantiated | Yes | Stabilizing | Yes | Forbidden | Permitted | [context/experienceevent.schema.json](context/experienceevent.schema.json) |
## Schema Hierarchy

* ExperienceEvent `https://ns.adobe.com/xdm/context/experienceevent`
  * [Extensibility base schema](../common/extensible.schema.md) `https://ns.adobe.com/xdm/common/extensible`
  * [Data Source](../data/datasource.schema.md) `https://ns.adobe.com/xdm/data/datasource`
  * [End User IDs](enduserids.schema.md) `https://ns.adobe.com/xdm/context/enduserids`
  * [Environment](environment.schema.md) `https://ns.adobe.com/xdm/context/environment`
  * [Device](device.schema.md) `https://ns.adobe.com/xdm/context/device`
  * [Commerce](commerce.schema.md) `https://ns.adobe.com/xdm/context/commerce`
  * [Application](application.schema.md) `https://ns.adobe.com/xdm/context/application`
  * [Search](search.schema.md) `https://ns.adobe.com/xdm/context/search`
  * [Web Information](webinfo.schema.md) `https://ns.adobe.com/xdm/context/webinfo`
  * [Direct Marketing](direct-marketing.schema.md) `https://ns.adobe.com/xdm/context/direct-marketing`
  * [Marketing](marketing.schema.md) `https://ns.adobe.com/xdm/context/marketing`
  * [Place Context](placecontext.schema.md) `https://ns.adobe.com/xdm/context/placecontext`
  * [Experience Channel](../channels/channel.schema.md) `https://ns.adobe.com/xdm/channels/channel`
  * [Advertising](advertising.schema.md) `https://ns.adobe.com/xdm/context/advertising`


## ExperienceEvent Examples

```json
{
  "@id": "https://data.adobe.io/experienceid-123456",
  "xdm:dataSource": {
    "@id": "https://data.adobe.io/datasources/datasource-123",
    "xdm:code": "DataSourceIntegrationCode-123"
  },
  "xdm:timestamp": "2017-09-26T15:52:25+00:00",
  "xdm:endUserIDs": {
    "https://ns.adobe.com/experience/mcid": {
      "@id": "https://data.adobe.io/entities/identity/92312748749128",
      "xdm:namespace": {
        "xdm:code": "ECID"
      }
    },
    "https://ns.adobe.com/experience/aaid": {
      "@id": "https://data.adobe.io/entities/identity/2394509340-30453470347",
      "xdm:namespace": {
        "xdm:code": "AVID"
      }
    },
    "https://ns.adobe.com/experience/tntid": {
      "@id": "https://data.adobe.io/entities/identity/1233ce17-20e0-4a2c-8198-2a77fd60cf4d",
      "xdm:namespace": {
        "xdm:code": "tnt0051"
      }
    }
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

```json
{
  "@id": "https://data.adobe.io/experienceid-2345678",
  "xdm:dataSource": {
    "@id": "https://data.adobe.io/datasources/datasource-123",
    "xdm:code": "DataSourceIntegrationCode-123"
  },
  "xdm:timestamp": "2017-09-26T15:52:25+00:00",
  "xdm:endUserIDs": {
    "https://ns.adobe.com/experience/mcid": {
      "@id": "https://data.adobe.io/entities/identity/92312748749128",
      "xdm:namespace": {
        "@id": "https://data.adobe.io/entities/namespace/4",
        "xdm:code": "ECID"
      }
    }
  },
  "xdm:environment": {
    "xdm:type": "browser",
    "xdm:browserDetails": {
      "xdm:name": "Chrome",
      "xdm:version": "63.0.3239",
      "xdm:acceptLanguage": "en",
      "xdm:cookiesEnabled": true,
      "xdm:viewportHeight": 900,
      "xdm:viewportWidth": 1680
    },
    "xdm:operatingSystem": "MAC OS",
    "xdm:operatingSystemVersion": "10.13",
    "xdm:connectionType": "cable"
  },
  "xdm:locationContext": {
    "xdm:geo": {
      "xdm:countryCode": "US",
      "xdm:stateProvince": "CA",
      "xdm:city": "Emeryville",
      "xdm:dmaid": "99"
    }
  },
  "xdm:web": {
    "xdm:webPageView": {
      "xdm:URL": "https://www.example.com"
    },
    "xdm:webReferrer": {
      "xdm:URL": "https://www.examplereferrer.com/",
      "xdm:domain": "examplereferrer.com"
    }
  },
  "xdm:device": {
    "xdm:type": "mobile",
    "xdm:manufacturer": "Apple",
    "xdm:model": "iPhone 6"
  },
  "xdm:advertising": {
    "xdm:adViewability": {
      "xdm:adUnitDepth": 0,
      "xdm:viewportHeight": 1250,
      "xdm:viewportWidth": 1600,
      "xdm:adHeight": 250,
      "xdm:adWidth": 300,
      "xdm:playerVolume": 85,
      "xdm:measurementEligible": true,
      "xdm:implementationDetails": {
        "xdm:name": "https://ns.adobe.com/experience/adcloud/viewability",
        "xdm:version": "1"
      },
      "xdm:viewable": true,
      "xdm:activeWindow": true,
      "xdm:percentViewable": 89,
      "xdm:viewableFirstQuartile": {
        "xdm:value": 1
      }
    },
    "xdm:firstQuartiles": {
      "xdm:value": 1
    }
  }
}
```

```json
{
  "@id": "https://data.adobe.io/experienceid-23456782",
  "xdm:dataSource": {
    "@id": "https://data.adobe.io/datasources/datasource-123",
    "xdm:code": "DataSourceIntegrationCode-123"
  },
  "xdm:timestamp": "2017-09-26T15:52:25+00:00",
  "xdm:endUserIDs": {
    "https://ns.adobe.com/experience/mcid": {
      "@id": "https://data.adobe.io/entities/identity/92312748749128",
      "xdm:namespace": {
        "@id": "https://data.adobe.io/entities/namespace/4",
        "xdm:code": "ECID"
      }
    }
  },
  "xdm:environment": {
    "xdm:type": "application",
    "xdm:operatingSystem": "iOS",
    "xdm:operatingSystemVersion": "10.13",
    "xdm:connectionType": "mobile_lte"
  },
  "xdm:placeContext": {
    "xdm:localTime": "2001-07-04T12:08:56+01:00",
    "xdm:geo": {
      "@id": "https://data.adobe.io/entities/geo/tokyo",
      "xdm:countryCode": "JP",
      "xdm:stateProvince": "JP-13",
      "xdm:city": "Tōkyō",
      "xdm:postalCode": "141-0032",
      "schema:latitude": 35.6185,
      "schema:longitude": 139.73237
    },
    "xdm:POIinteraction": {
      "xdm:poiEntries": {
        "xdm:value": 1
      },
      "xdm:POIID": "d8a5c08c-1e79-4051-8a8b-675fb235e03d",
      "xdm:name": "Acme Hotel Tokyo Lobby",
      "xdm:category": "Resorts",
      "xdm:type": "Hotel",
      "xdm:locatingType": "beacon",
      "xdm:beaconInteractionDetails": {
        "xdm:proximityUUID": "c6c03ed9-ea23-481c-ab15-833e88cfb22f",
        "xdm:beaconMajor": 300,
        "xdm:beaconMinor": 34
      }
    },
    "xdm:activePOIs": [
      {
        "xdm:POIID": "c7f4bf28-c8d9-4b89-a81f-2a8ef9367390",
        "xdm:name": "Acme Hotel Tokyo",
        "xdm:category": "Resorts",
        "xdm:type": "Hotel",
        "xdm:locatingType": "beacon",
        "xdm:beaconInteractionDetails": {
          "xdm:proximityUUID": "dd0094a0-52bb-4d3a-ab15-fcccb9b9b48e",
          "xdm:beaconMajor": 100,
          "xdm:beaconMinor": 23
        }
      },
      {
        "xdm:POIID": "d8a5c08c-1e79-4051-8a8b-675fb235e03d",
        "xdm:name": "Acme Hotel Tokyo Lobby",
        "xdm:category": "Resorts",
        "xdm:type": "Hotel",
        "xdm:locatingType": "beacon",
        "xdm:beaconInteractionDetails": {
          "xdm:proximityUUID": "c6c03ed9-ea23-481c-ab15-833e88cfb22f",
          "xdm:beaconMajor": 300,
          "xdm:beaconMinor": 34
        }
      },
      {
        "xdm:POIID": "d8a5c08c-1e79-4051-8a8b-675fb235e03d",
        "xdm:name": "Tokyo City",
        "xdm:locatingType": "gps",
        "xdm:geoInteractionDetails": {
          "xdm:distanceToCenter": 320,
          "xdm:accuracy": 30,
          "xdm:geoShape": {
            "@id": "https://data.adobe.io/entities/geoShape/shapeid123",
            "schema:circle": {
              "@id": "https://data.adobe.io/entities/geo/circleid123",
              "schema:description": "Tokyo Metro",
              "schema:coordinates": {
                "@id": "https://data.adobe.io/entities/geo/111",
                "schema:description": "Tokyo",
                "schema:latitude": 37.3308953,
                "schema:longitude": -121.8939894,
                "schema:elevation": 31.0896
              },
              "schema:radius": 80000
            }
          }
        }
      }
    ],
    "xdm:type": "browser",
    "xdm:browserDetails": {
      "xdm:name": "Chrome",
      "xdm:version": "63.0.3239",
      "xdm:acceptLanguage": "en",
      "xdm:cookiesEnabled": true,
      "xdm:viewportHeight": 900,
      "xdm:viewportWidth": 1680
    },
    "xdm:operatingSystem": "MAC OS",
    "xdm:operatingSystemVersion": "10.13",
    "xdm:connectionType": "cable"
  },
  "xdm:locationContext": {
    "xdm:geo": {
      "xdm:countryCode": "US",
      "xdm:stateProvince": "CA",
      "xdm:city": "Emeryville",
      "xdm:dmaid": "99"
    }
  },
  "xdm:web": {
    "xdm:webPageView": {
      "xdm:URL": "https://www.example.com"
    },
    "xdm:webReferrer": {
      "xdm:URL": "https://www.examplereferrer.com/",
      "xdm:domain": "examplereferrer.com"
    }
  },
  "xdm:device": {
    "xdm:type": "mobile",
    "xdm:manufacturer": "Apple",
    "xdm:model": "iPhone 6"
  },
  "xdm:advertising": {
    "xdm:adViewability": {
      "xdm:adUnitDepth": 0,
      "xdm:viewportHeight": 1250,
      "xdm:viewportWidth": 1600,
      "xdm:adHeight": 250,
      "xdm:adWidth": 300,
      "xdm:playerVolume": 85,
      "xdm:measurementEligible": true,
      "xdm:implementationDetails": {
        "xdm:name": "https://ns.adobe.com/experience/adcloud/viewability",
        "xdm:version": "1"
      },
      "xdm:viewable": true,
      "xdm:activeWindow": true,
      "xdm:percentViewable": 89,
      "xdm:viewableFirstQuartile": {
        "xdm:value": 1
      }
    },
    "xdm:firstQuartiles": {
      "xdm:value": 1
    }
  }
}
```


# ExperienceEvent Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [@id](#@id) | `string` | Optional | ExperienceEvent (this schema) |
| [xdm:advertising](#xdmadvertising) | Advertising | Optional | ExperienceEvent (this schema) |
| [xdm:application](#xdmapplication) | Application | Optional | ExperienceEvent (this schema) |
| [xdm:channel](#xdmchannel) | Experience Channel | Optional | ExperienceEvent (this schema) |
| [xdm:commerce](#xdmcommerce) | Commerce | Optional | ExperienceEvent (this schema) |
| [xdm:dataSource](#xdmdatasource) | Data Source | Optional | ExperienceEvent (this schema) |
| [xdm:device](#xdmdevice) | Device | Optional | ExperienceEvent (this schema) |
| [xdm:directMarketing](#xdmdirectmarketing) | Direct Marketing | Optional | ExperienceEvent (this schema) |
| [xdm:endUserIDs](#xdmenduserids) | End User IDs | Optional | ExperienceEvent (this schema) |
| [xdm:environment](#xdmenvironment) | Environment | Optional | ExperienceEvent (this schema) |
| [xdm:marketing](#xdmmarketing) | Marketing | Optional | ExperienceEvent (this schema) |
| [xdm:placeContext](#xdmplacecontext) | Place Context | Optional | ExperienceEvent (this schema) |
| [xdm:productListItems](#xdmproductlistitems) | Product List Item | Optional | ExperienceEvent (this schema) |
| [xdm:receivedTimestamp](#xdmreceivedtimestamp) | `string` | Optional | ExperienceEvent (this schema) |
| [xdm:search](#xdmsearch) | Search | Optional | ExperienceEvent (this schema) |
| [xdm:timestamp](#xdmtimestamp) | `string` | Optional | ExperienceEvent (this schema) |
| [xdm:web](#xdmweb) | Web Information | Optional | ExperienceEvent (this schema) |
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






## xdm:advertising
### Advertising

The information related to advertising activity related to the experience event

`xdm:advertising`
* is optional
* type: Advertising
* defined in this schema

### xdm:advertising Type


* [Advertising](advertising.schema.md) – `https://ns.adobe.com/xdm/context/advertising`





## xdm:application
### Application

The application related to the event observation. It could be either the application targeted by the event like the send of a push notification or the application originating the event such as a click, or a login.

`xdm:application`
* is optional
* type: Application
* defined in this schema

### xdm:application Type


* [Application](application.schema.md) – `https://ns.adobe.com/xdm/context/application`





## xdm:channel
### Experience Channel

The experience channel related to this ExperienceEvent.

`xdm:channel`
* is optional
* type: Experience Channel
* defined in this schema

### xdm:channel Type


* [Experience Channel](../channels/channel.schema.md) – `https://ns.adobe.com/xdm/channels/channel`





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





## xdm:directMarketing
### Direct Marketing

The events and properties related to direct/outbound marketing such as email, direct mail, texts and in-app notifications.

`xdm:directMarketing`
* is optional
* type: Direct Marketing
* defined in this schema

### xdm:directMarketing Type


* [Direct Marketing](direct-marketing.schema.md) – `https://ns.adobe.com/xdm/context/direct-marketing`





## xdm:endUserIDs
### End User IDs

Condensed, normalized encapsulation of all end user identifiers.


`xdm:endUserIDs`
* is optional
* type: End User IDs
* defined in this schema

### xdm:endUserIDs Type


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





## xdm:marketing
### Marketing

The information related to marketing activities that are active with the touchpoint.

`xdm:marketing`
* is optional
* type: Marketing
* defined in this schema

### xdm:marketing Type


* [Marketing](marketing.schema.md) – `https://ns.adobe.com/xdm/context/marketing`





## xdm:placeContext
### Place Context

The transient circumstances related to the observation. Examples include locale specific information such as weather, local time, traffic, day of the week, workday vs. holiday, working hours.

`xdm:placeContext`
* is optional
* type: Place Context
* defined in this schema

### xdm:placeContext Type


* [Place Context](placecontext.schema.md) – `https://ns.adobe.com/xdm/context/placecontext`





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








## xdm:receivedTimestamp
### Received Timestamp

The time at which this interaction was received by a server.

`xdm:receivedTimestamp`
* is optional
* type: `string`
* defined in this schema

### xdm:receivedTimestamp Type


`string`
* format: `date-time` – date and time (according to [RFC 3339, section 5.6](http://tools.ietf.org/html/rfc3339))






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
* type: Web Information
* defined in this schema

### xdm:web Type


* [Web Information](webinfo.schema.md) – `https://ns.adobe.com/xdm/context/webinfo`




