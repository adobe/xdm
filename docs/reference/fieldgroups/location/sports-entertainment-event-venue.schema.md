
# Sports Entertainment Event Venue Schema

```
https://ns.adobe.com/xdm/mixins/sports-entertainment-event-venue
```

For Sports and Entertaiment Event Venue information, such as a concert hall or sports arena. 

| [Abstract](../../../abstract.md) | [Extensible](../../../extensions.md) | [Status](../../../status.md) | [Identifiable](../../../id.md) | [Custom Properties](../../../extensions.md) | [Additional Properties](../../../extensions.md) | Defined In |
|----------------------------------|--------------------------------------|------------------------------|--------------------------------|---------------------------------------------|-------------------------------------------------|------------|
| Can be instantiated | Yes | Experimental | No | Forbidden | Permitted | [fieldgroups/location/sports-entertainment-event-venue.schema.json](fieldgroups/location/sports-entertainment-event-venue.schema.json) |
## Schema Hierarchy

* Sports Entertainment Event Venue `https://ns.adobe.com/xdm/mixins/sports-entertainment-event-venue`
  * [Record Schema](../../behaviors/record.schema.md) `https://ns.adobe.com/xdm/data/record`


## Sports Entertainment Event Venue Example
```json
{
  "xdm:eventVenue": {
    "xdm:designatedMarketAreas": [
      "123",
      "456"
    ],
    "xdm:currency": {
      "xdm:amount": -200757575,
      "xdm:currencyCode": "USD",
      "xdm:conversionDate": "2022-01-01T15:52:25+00:00"
    },
    "xdm:markets": [
      "463",
      "123"
    ],
    "xdm:physicalAddress": {
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
      "xdm:lastVerifiedDate": "2018-01-02"
    },
    "xdm:seatingCapacity": 250,
    "xdm:timeZone": "America/Chicago",
    "xdm:url": "https://adobe.com"
  }
}
```

# Sports Entertainment Event Venue Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [@id](#id) | `string` | Optional | [Record Schema](../../behaviors/record.schema.md#id) |
| [xdm:eventVenue](#xdmeventvenue) | `object` | Optional | Sports Entertainment Event Venue (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## @id
### Identifier

A unique identifier for the record.

`@id`
* is optional
* type: `string`
* defined in [Record Schema](../../behaviors/record.schema.md#id)

### @id Type


`string`
* format: `uri-reference` – URI Reference (according to [RFC3986](https://tools.ietf.org/html/rfc3986))






## xdm:eventVenue
### Event Venue

Details of a live event venue physical location.

`xdm:eventVenue`
* is optional
* type: `object`
* defined in this schema

### xdm:eventVenue Type


`object` with following properties:


| Property | Type | Required |
|----------|------|----------|
| `xdm:currency`| object | Optional |
| `xdm:designatedMarketAreas`| array | Optional |
| `xdm:markets`| array | Optional |
| `xdm:physicalAddress`| object | Optional |
| `xdm:seatingCapacity`| integer | Optional |
| `xdm:timeZone`| string | Optional |
| `xdm:url`| string | Optional |



#### xdm:currency
##### Currency

Local currency accepted by the venue.

`xdm:currency`
* is optional
* type: reference

##### xdm:currency Type


* []() – `https://ns.adobe.com/xdm/datatypes/currency`







#### xdm:designatedMarketAreas
##### DMA List

The list of associated DMAs (Designated Market Areas) of the venue

`xdm:designatedMarketAreas`
* is optional
* type: `string[]`


##### xdm:designatedMarketAreas Type


Array type: `string[]`

All items must be of the type:
`string`











#### xdm:markets
##### Markets

Markets of the venue

`xdm:markets`
* is optional
* type: `string[]`


##### xdm:markets Type


Array type: `string[]`

All items must be of the type:
`string`











#### xdm:physicalAddress
##### Physical Address

Physical Address of the event venue.

`xdm:physicalAddress`
* is optional
* type: reference

##### xdm:physicalAddress Type


* []() – `https://ns.adobe.com/xdm/common/address`







#### xdm:seatingCapacity
##### Seating Capacity

Seating capacity of the venue.

`xdm:seatingCapacity`
* is optional
* type: `integer`

##### xdm:seatingCapacity Type


`integer`








#### xdm:timeZone
##### Time Zone

Time zone in which the venue resides.

`xdm:timeZone`
* is optional
* type: `string`

##### xdm:timeZone Type


`string`








#### xdm:url
##### URL

URL for the Venue web presence

`xdm:url`
* is optional
* type: `string`

##### xdm:url Type


`string`










