
# Location Context Schema

```
https://ns.adobe.com/xdm/context/locationcontext
```

The transient circumstances related to the observation. Examples include locale specific information such as weather, local time, traffic, day of the week, workday vs. holiday, working hours.

| Abstract | Extensible | Custom Properties | Additional Properties | Defined In |
|----------|------------|-------------------|-----------------------|------------|
| Can be instantiated | Yes | Forbidden | Permitted | [context/locationcontext.schema.json](context/locationcontext.schema.json) |

## Schema Hierarchy

* Location Context `https://ns.adobe.com/xdm/context/locationcontext`
  * [Geo](../common/geo.schema.md) `https://ns.adobe.com/xdm/common/geo`

## Location Context Example
```json
{
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
}
```

# Location Context Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [xdm:geo](#xdmgeo) | Geo | Optional | Location Context (this schema) |
| [xdm:localTime](#xdmlocalTime) | `string` | Optional | Location Context (this schema) |
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





