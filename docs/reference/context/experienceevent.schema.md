
# XDM ExperienceEvent Schema

```
https://ns.adobe.com/xdm/context/experienceevent
```

An ExperienceEvent is a fact record of what occurred, including the point in time and identity of the individual involved. ExperienceEvents can be either explicit (directly observable human actions) or implicit (raised without a direct human action) and are recorded without aggregation or interpretation. They are critical for time-domain analytics as they allow for observation and analysis of changes that occur in a given window of time and the comparison between multiple windows of time to track trends.

| [Abstract](../../abstract.md) | [Extensible](../../extensions.md) | [Status](../../status.md) | [Identifiable](../../id.md) | [Custom Properties](../../extensions.md) | [Additional Properties](../../extensions.md) | Defined In |
|-------------------------------|-----------------------------------|---------------------------|-----------------------------|------------------------------------------|----------------------------------------------|------------|
| Can be instantiated | Yes | Stabilizing | No | Forbidden | Permitted | [context/experienceevent.schema.json](context/experienceevent.schema.json) |
## Schema Hierarchy

* XDM ExperienceEvent `https://ns.adobe.com/xdm/context/experienceevent`
  * [Extensibility base schema](../common/extensible.schema.md) `https://ns.adobe.com/xdm/common/extensible`
  * [IdentityMap](identitymap.schema.md) `https://ns.adobe.com/xdm/context/identitymap`
  * [Time-series Schema](../data/time-series.schema.md) `https://ns.adobe.com/xdm/data/time-series`


## XDM ExperienceEvent Examples

```json
{
  "@id": "https://data.adobe.io/experienceid-123456",
  "xdm:dataSource": {
    "@id": "https://data.adobe.io/datasources/datasource-123",
    "xdm:code": "DataSourceIntegrationCode-123"
  },
  "xdm:timestamp": "2017-09-26T15:52:25+00:00",
  "xdm:identityMap": {
    "https://data.adobe.io/entities/namespace/4": [
      {
        "xdm:id": "92312748749128"
      }
    ],
    "https://data.adobe.io/entities/namespace/10": [
      {
        "xdm:id": "2394509340-30453470347"
      }
    ],
    "https://data.adobe.io/entities/namespace/9": [
      {
        "xdm:id": "1233ce17-20e0-4a2c-8198-2a77fd60cf4d"
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
  },
  "xdm:profileStitch": [
    {
      "xdm:profileStitchID": {
        "@id": "https://data.adobe.io/entities/profileStitchIdentity/1",
        "xdm:namespace": {
          "xdm:code": "AAM"
        }
      },
      "xdm:version": "1.0",
      "xdm:identityMap": {
        "ECID": [
          {
            "xdm:id": "https://data.adobe.io/entities/identity/92312748749128"
          },
          {
            "xdm:id": "https://data.adobe.io/entities/identity/62312748749321"
          },
          {
            "xdm:id": "https://data.adobe.io/entities/identity/49312748749132"
          }
        ]
      }
    }
  ],
  "xdm:segmentMemberships": [
    {
      "xdm:segmentID": {
        "@id": "https://data.adobe.io/entities/identity/92312748749128",
        "xdm:namespace": {
          "xdm:code": "AAM"
        }
      },
      "xdm:profileStitchID": {
        "@id": "https://data.adobe.io/entities/profileStitchIdentity/1",
        "xdm:namespace": {
          "xdm:code": "AAM"
        },
        "xdm:lastQualificationTime": "2017-09-26T15:52:25+00:00",
        "xdm:version": "1.0",
        "xdm:validUntil": "2017-12-26T15:52:25+00:00",
        "xdm:status": "realized"
      }
    }
  ]
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
  "xdm:eventMergeId": "9fb4e78d-b0bf-4d99-b987-cb37abdbcd15",
  "xdm:identityMap": {
    "ECID": [
      {
        "xdm:id": "92312748749128"
      }
    ],
    "AVID": [
      {
        "xdm:id": "2394509340-30453470347"
      }
    ]
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
  "@id": "https://data.adobe.io/experienceid-123458",
  "xdm:timestamp": "2017-09-26T15:52:25+00:00",
  "xdm:identityMap": {
    "https://data.adobe.io/entities/namespace/4": [
      {
        "xdm:id": "92312748749128"
      }
    ],
    "https://data.adobe.io/entities/namespace/10": [
      {
        "xdm:id": "2394509340-30453470347"
      }
    ]
  },
  "xdm:environment": {
    "xdm:browserDetails": {
      "xdm:userAgent": "AppleWebkit/534.30 (KHTML, like Gecko) Version/4.0 Mobile Safari/534.30"
    },
    "xdm:ipV4": "97.27.143.5"
  },
  "xdm:media": {
    "xdm:mediaTimed": {
      "xdm:primaryAssetReference": {
        "@id": "https://data.adobe.io/entities/media-timed-asset-reference/15234430",
        "dc:title": "Floki Begs Helga for Freedom",
        "xmpDM:duration": 87,
        "iptc4xmpExt:Series": {
          "iptc4xmpExt:Name": "nba_highlights",
          "iptc4xmpExt:Identifier": "http://espn.com/series-identifiers/2613953"
        },
        "xdm:showType": "episode",
        "xdm:streamFormat": "long",
        "iptc4xmpExt:Season": {
          "iptc4xmpExt:Number": 1
        },
        "iptc4xmpExt:Episode": {
          "iptc4xmpExt:Number": 1
        },
        "iptc4xmpExt:Genre": [
          "sports"
        ],
        "iptc4xmpExt:Rating": [
          {
            "iptc4xmpExt:RatingValue": "TV14",
            "iptc4xmpExt:RatingSourceLink": "http://www.tvguidelines.org/ratings.htm"
          }
        ],
        "iptc4xmpExt:Creator": [
          {
            "iptc4xmpExt:Name": "ESPN"
          }
        ]
      },
      "xdm:primaryAssetViewDetails": {
        "@id": "https://data.adobe.io/entities/media-sessionid/1427461282884250114230",
        "xdm:playerName": "watchespn",
        "xdm:broadcastChannel": "WatchESPN",
        "xdm:broadcastContentType": "VOD",
        "xdm:streamFormat": "short",
        "xdm:playerSDKVersion": {
          "xdm:version": "1.0.8"
        },
        "xdm:broadcastNetwork": "nbcu",
        "xdm:adLoadType": "2",
        "xdm:sourceFeed": "http%3A%2F%2Fvod01.pure.centurylink.net%2Fhls%2Fvu%2F9083406%2FVUBX0280890106690980_38_3_M_HD.m3u8",
        "xdm:sessionTimeout": 1800
      }
    }
  },
  "xdm:advertising": {
    "xdm:adAssetReference": {
      "@id": "https://data.adobe.io/entities/ad-id/AD1",
      "dc:title": "adNumber1",
      "xmpDM:duration": 10
    },
    "xdm:adAssetViewDetails": {
      "xdm:playerName": "miniTestApp",
      "xdm:index": 0,
      "xdm:adBreak": {
        "@id": "https://data.adobe.io/entities/ad-break/f40353618c5c11311f584e53c78654b9_0",
        "dc:title": "Mid-Roll",
        "xdm:offset": 44
      }
    },
    "xdm:impressions": {
      "xdm:value": 1
    },
    "xdm:completes": {
      "xdm:value": 1
    },
    "xdm:timePlayed": {
      "xdm:value": 10
    },
    "xdm:federated": {
      "xdm:value": 0
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
  "xdm:identityMap": {
    "https://data.adobe.io/entities/namespace/4": [
      {
        "xdm:id": "92312748749128"
      }
    ]
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

```json
{
  "@id": "https://data.adobe.io/experienceid-123457",
  "xdm:timestamp": "2017-09-26T15:52:25+00:00",
  "xdm:identityMap": {
    "https://data.adobe.io/entities/namespace/4": [
      {
        "xdm:id": "92312748749128"
      }
    ],
    "https://data.adobe.io/entities/namespace/10": [
      {
        "xdm:id": "2394509340-30453470347"
      }
    ]
  },
  "xdm:environment": {
    "xdm:browserDetails": {
      "xdm:userAgent": "AppleWebkit/534.30 (KHTML, like Gecko) Version/4.0 Mobile Safari/534.30"
    },
    "xdm:ipV4": "97.27.143.5"
  },
  "xdm:media": {
    "xdm:mediaTimed": {
      "xdm:primaryAssetReference": {
        "@id": "https://data.adobe.io/entities/media-timed-asset-reference/15234430",
        "dc:title": "Floki Begs Helga for Freedom",
        "xmpDM:duration": 87,
        "iptc4xmpExt:Series": {
          "iptc4xmpExt:Name": "nba_highlights",
          "iptc4xmpExt:Identifier": "http://espn.com/series-identifiers/2613953"
        },
        "xdm:showType": "episode",
        "xdm:streamFormat": "long",
        "iptc4xmpExt:Season": {
          "iptc4xmpExt:Number": 1
        },
        "iptc4xmpExt:Episode": {
          "iptc4xmpExt:Number": 1
        },
        "iptc4xmpExt:Genre": [
          "sports"
        ],
        "iptc4xmpExt:Rating": [
          {
            "iptc4xmpExt:RatingValue": "TV14",
            "iptc4xmpExt:RatingSourceLink": "http://www.tvguidelines.org/ratings.htm"
          }
        ],
        "iptc4xmpExt:Creator": [
          {
            "iptc4xmpExt:Name": "ESPN"
          }
        ]
      },
      "xdm:primaryAssetViewDetails": {
        "@id": "https://data.adobe.io/entities/media-sessionid/1427461282884250114230",
        "xdm:playerName": "watchespn",
        "xdm:broadcastChannel": "WatchESPN",
        "xdm:broadcastContentType": "VOD",
        "xdm:streamFormat": "short",
        "xdm:playerSDKVersion": {
          "xdm:version": "1.0.8"
        },
        "xdm:broadcastNetwork": "nbcu",
        "xdm:adLoadType": "2",
        "xdm:sourceFeed": "http%3A%2F%2Fvod01.pure.centurylink.net%2Fhls%2Fvu%2F9083406%2FVUBX0280890106690980_38_3_M_HD.m3u8",
        "xdm:sessionTimeout": 1800,
        "xdm:QOE": {
          "xdm:errors": {
            "xdm:value": 0
          },
          "xdm:buffers": {
            "xdm:value": 4
          },
          "xdm:bufferTime": {
            "xdm:value": 5
          },
          "xdm:stalls": {
            "xdm:value": 0
          },
          "xdm:stallTime": {
            "xdm:value": 0
          },
          "xdm:bitrateChanges": {
            "xdm:value": 0
          },
          "xdm:bitrateAverage": {
            "xdm:value": 320
          },
          "xdm:droppedFrames": {
            "xdm:value": 2
          },
          "xdm:timeToStart": {
            "xdm:value": 3
          },
          "xdm:mediaSdkErrors": "300,500.300.200",
          "xdm:playerSdkErrors": "custom.error.code",
          "xdm:externalSdkErrors": "100-5,11.12"
        }
      },
      "xdm:impressions": {
        "xdm:value": 1
      },
      "xdm:completes": {
        "xdm:value": 0
      },
      "xdm:timePlayed": {
        "xdm:value": 80
      },
      "xdm:federated": {
        "xdm:value": 0
      },
      "xdm:starts": {
        "xdm:value": 1
      },
      "xdm:mediaSegmentView": {
        "xdm:value": 1
      },
      "xdm:dropBeforeStart": {
        "xdm:value": 0
      },
      "xdm:totalTimePlayed": {
        "xdm:value": 190
      },
      "xdm:progress10": {
        "xdm:value": 1
      },
      "xdm:firstQuartiles": {
        "xdm:value": 1
      },
      "xdm:midpoints": {
        "xdm:value": 1
      },
      "xdm:thirdQuartiles": {
        "xdm:value": 1
      },
      "xdm:progress95": {
        "xdm:value": 0
      },
      "xdm:resumes": {
        "xdm:value": 0
      },
      "xdm:pauses": {
        "xdm:value": 0
      },
      "xdm:pauseTime": {
        "xdm:value": 0
      }
    }
  }
}
```

```json
{
  "@id": "https://data.adobe.io/experienceid-123459",
  "xdm:timestamp": "2017-09-26T15:52:25+00:00",
  "xdm:identityMap": {
    "https://data.adobe.io/entities/namespace/4": [
      {
        "xdm:id": "92312748749128"
      }
    ],
    "https://data.adobe.io/entities/namespace/10": [
      {
        "xdm:id": "2394509340-30453470347"
      }
    ]
  },
  "xdm:environment": {
    "xdm:browserDetails": {
      "xdm:userAgent": "AppleWebkit/534.30 (KHTML, like Gecko) Version/4.0 Mobile Safari/534.30"
    },
    "xdm:ipV4": "97.27.143.5"
  },
  "xdm:media": {
    "xdm:mediaTimed": {
      "xdm:primaryAssetReference": {
        "@id": "https://data.adobe.io/entities/media-timed-asset-reference/15234430",
        "dc:title": "Floki Begs Helga for Freedom",
        "xmpDM:duration": 87,
        "iptc4xmpExt:Series": {
          "iptc4xmpExt:Name": "nba_highlights",
          "iptc4xmpExt:Identifier": "http://espn.com/series-identifiers/2613953"
        },
        "xdm:showType": "episode",
        "xdm:streamFormat": "long",
        "iptc4xmpExt:Season": {
          "iptc4xmpExt:Number": 1
        },
        "iptc4xmpExt:Episode": {
          "iptc4xmpExt:Number": 1
        },
        "iptc4xmpExt:Genre": [
          "sports"
        ],
        "iptc4xmpExt:Rating": [
          {
            "iptc4xmpExt:RatingValue": "TV14",
            "iptc4xmpExt:RatingSourceLink": "http://www.tvguidelines.org/ratings.htm"
          }
        ],
        "iptc4xmpExt:Creator": [
          {
            "iptc4xmpExt:Name": "ESPN"
          }
        ]
      },
      "xdm:primaryAssetViewDetails": {
        "@id": "https://data.adobe.io/entities/media-sessionid/1427461282884250114230",
        "xdm:playerName": "watchespn",
        "xdm:broadcastChannel": "WatchESPN",
        "xdm:broadcastContentType": "VOD",
        "xdm:streamFormat": "short",
        "xdm:playerSDKVersion": {
          "xdm:version": "1.0.8"
        },
        "xdm:broadcastNetwork": "nbcu",
        "xdm:adLoadType": "2",
        "xdm:sourceFeed": "http%3A%2F%2Fvod01.pure.centurylink.net%2Fhls%2Fvu%2F9083406%2FVUBX0280890106690980_38_3_M_HD.m3u8",
        "xdm:sessionTimeout": 1800
      },
      "xdm:mediaChapter": {
        "xdm:chapterAssetReference": {
          "@id": "https://data.adobe.io/entities/media-chapter-asset-reference/2144511",
          "dc:title": "Chapter1",
          "xmpDM:duration": 44
        },
        "xdm:chapterAssetViewDetails": {
          "xdm:index": 0,
          "xdm:offset": 0
        },
        "xdm:impressions": {
          "xdm:value": 1
        },
        "xdm:completes": {
          "xdm:value": 1
        },
        "xdm:timePlayed": {
          "xdm:value": 44
        },
        "xdm:federated": {
          "xdm:value": 0
        }
      }
    }
  }
}
```


# XDM ExperienceEvent Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [@id](#id) | `string` | **Required** | [Time-series Schema](../data/time-series.schema.md#id) |
| [xdm:eventMergeId](#xdmeventmergeid) | `string` | Optional | XDM ExperienceEvent (this schema) |
| [xdm:eventType](#xdmeventtype) | `string` | Optional | [Time-series Schema](../data/time-series.schema.md#xdmeventtype) |
| [xdm:identityMap](#xdmidentitymap) | `object` | Optional | [IdentityMap](identitymap.schema.md#xdmidentitymap) |
| [xdm:timestamp](#xdmtimestamp) | `string` | **Required** | [Time-series Schema](../data/time-series.schema.md#xdmtimestamp) |
| `*` | any | Additional | this schema *allows* additional properties |

## @id
### Identifier

A unique identifier for the time-series event.

`@id`
* is **required**
* type: `string`
* defined in [Time-series Schema](../data/time-series.schema.md#id)

### @id Type


`string`
* format: `uri-reference` – URI Reference (according to [RFC3986](https://tools.ietf.org/html/rfc3986))






## xdm:eventMergeId
### ExperienceEvent merge ID

An ID to correlate or merge multiple Experience events together that are essentially the same event or should be merged. This is intended to be populated by the data producer prior to ingestion.

`xdm:eventMergeId`
* is optional
* type: `string`
* defined in this schema

### xdm:eventMergeId Type


`string`






## xdm:eventType
### Event Type

The primary event type for this time-series record.

`xdm:eventType`
* is optional
* type: `string`
* defined in [Time-series Schema](../data/time-series.schema.md#xdmeventtype)

### xdm:eventType Type


`string`



### xdm:eventType Known Values
| Value | Description |
|-------|-------------|
| `advertising.completes` | Indicates if a timed media asset was watched to completion - this does not necessarily mean the viewer watched the whole video; viewer could have skipped ahead. |
| `advertising.timePlayed` | Describes the amount of time spent by a user on a specific timed media asset. |
| `advertising.federated` | Indicates if an experience event was created through data federation (data sharing between customers). |
| `advertising.clicks` | Click(s) actions on an advertisement. |
| `advertising.conversions` | A customer pre-defined action(s) which triggers an event for performance evaluation. |
| `advertising.firstQuartiles` | A digital video ad has played through 25% of its duration at normal speed. |
| `advertising.impressions` | Impression(s) of an advertisement to an end-user with the potential of being viewed. |
| `advertising.midpoints` | A digital video ad has played through 50% of its duration at normal speed. |
| `advertising.starts` | A digital video ad has started playing. |
| `advertising.thirdQuartiles` | A digital video ad has played through 75% of its duration at normal speed. |
| `web.webpagedetails.pageViews` | View(s) of a webpage has occurred. |
| `web.webinteraction.linkClicks` | Click of a web-link has occurred. |
| `commerce.checkouts` | An action during a checkout process of a product list, there can be more than one checkout event if there are multiple steps in a checkout process. If there are multiple steps the event time information and referenced page or experience is used to identify the step individual events represent in order. |
| `commerce.productListAdds` | Addition of a product to the product list. Example a product is added to a shopping cart. |
| `commerce.productListOpens` | Initializations of a new product list. Example a shopping cart is created. |
| `commerce.productListRemovals` | Removal(s) of a product entry from a product list. Example a product is removed from a shopping cart. |
| `commerce.productListReopens` | A product list that was no longer accessible(abandoned) has been re-activated by the user. Example via a re-marketing activity. |
| `commerce.productListViews` | View(s) of a product-list has occurred. |
| `commerce.productViews` | View(s) of a product have occurred. |
| `commerce.purchases` | An order has been accepted. Purchase is the only required action in a commerce conversion. Purchase must have a product list referenced. |
| `commerce.saveForLaters` | Product list is saved for future use. Example a product wish list. |
| `delivery.feedback` | Feedback events for a delivery. Example feedback events for an email delivery. |




## xdm:identityMap


`xdm:identityMap`
* is optional
* type: `object`
* defined in [IdentityMap](identitymap.schema.md#xdmidentitymap)

### xdm:identityMap Type


`object` with following properties:


| Property | Type | Required |
|----------|------|----------|






## xdm:timestamp
### Timestamp

The time when an event or observation occurred.

`xdm:timestamp`
* is **required**
* type: `string`
* defined in [Time-series Schema](../data/time-series.schema.md#xdmtimestamp)

### xdm:timestamp Type


`string`
* format: `date-time` – date and time (according to [RFC 3339, section 5.6](http://tools.ietf.org/html/rfc3339))





