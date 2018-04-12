
# Place Context Schema

```
https://ns.adobe.com/xdm/context/placecontext
```

The transient circumstances related to the place or physical location of the observation. 
Examples include location specific information such as weather, local time, traffic, day of the week, workday vs. holiday, working hours.


| Abstract | Extensible | Status | Custom Properties | Additional Properties | Defined In |
|----------|------------|--------|-------------------|-----------------------|------------|
| Can be instantiated | Yes | Experimental | Forbidden | Permitted | [context/placecontext.schema.json](context/placecontext.schema.json) |

## Schema Hierarchy

* Place Context `https://ns.adobe.com/xdm/context/placecontext`
  * [Geo](../common/geo.schema.md) `https://ns.adobe.com/xdm/common/geo`

## Place Context Example
```json
{
  "xdm:localTime": "2001-07-04T12:08:56+01:00",
  "xdm:geo": {
    "@id": "https://data.adobe.io/entities/geo/tokyo",
    "xdm:countryCode": "JP",
    "xdm:stateProvince": "JP-13",
    "xdm:city": "Tōkyō",
    "xdm:postalCode": "141-0032",
    "schema:latitude": 35.6185,
    "schema:longitude": 139.73237
  }
}
```

# Place Context Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [xdm:geo](#xdmgeo) | Geo | Optional | Place Context (this schema) |
| [xdm:localTime](#xdmlocaltime) | `string` | Optional | Place Context (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## xdm:geo
### Geo

The geographic location where the experience was delivered .

`xdm:geo`
* is optional
* type: Geo
* defined in this schema

### xdm:geo Type


* [Geo](../common/geo.schema.md) – `https://ns.adobe.com/xdm/common/geo`





## xdm:localTime
### Local Time

The local time using RFC3339 with a stated timezone offset such as &#34;2001-07-04T12:08:56-07:00&#34;. An example formatting pattern is &#34;yyyy-MM-dd&#39;T&#39;HH:mm:ssXXX&#34;.

`xdm:localTime`
* is optional
* type: `string`
* defined in this schema

### xdm:localTime Type


`string`
* format: `date-time` – date and time (according to [RFC 3339, section 5.6](http://tools.ietf.org/html/rfc3339))





