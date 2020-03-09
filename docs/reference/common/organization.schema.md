
# Organization Schema

```
https://ns.adobe.com/xdm/common/organization
```

Information that uniquely identifies an organized entity such as company, non-profit, government agency or educational institution, plus additional information that further qualifies the organization.


| [Abstract](../../abstract.md) | [Extensible](../../extensions.md) | [Status](../../status.md) | [Identifiable](../../id.md) | [Custom Properties](../../extensions.md) | [Additional Properties](../../extensions.md) | Defined In |
|-------------------------------|-----------------------------------|---------------------------|-----------------------------|------------------------------------------|----------------------------------------------|------------|
| Can be instantiated | Yes | Stabilizing | No | Forbidden | Permitted | [common/organization.schema.json](common/organization.schema.json) |
## Schema Hierarchy

* Organization `https://ns.adobe.com/xdm/common/organization`
  * [Physical place](../context/place.schema.md) `https://ns.adobe.com/xdm/context/place`


## Organization Example
```json
{
  "@id": "https://data.adobe.io/entities/org/orgid111",
  "xdm:legalName": "ABC Stores",
  "xdm:numberOfEmployees": 200,
  "xdm:industry": "Retail",
  "xdm:website": "http://www.abcstores.com",
  "rating": 1,
  "xdm:marketSegment": "apparel for kids",
  "xdm:location": {
    "@id": "https://data.adobe.io/entities/places/locid123",
    "schema:description": "ABC Store location",
    "xdm:address": {
      "@id": "https://data.adobe.io/entities/address/123",
      "xdm:primary": true,
      "xdm:type": "work",
      "xdm:street1": "100 Lincoln Ave",
      "xdm:city": "San Jose",
      "xdm:stateProvince": "US-CA",
      "xdm:postalCode": "95125",
      "xdm:country": "United States",
      "xdm:countryCode": "US",
      "schema:latitude": 37.3382,
      "schema:longitude": 121.8863,
      "xdm:status": "active",
      "xdm:lastVerifiedDate": "2018-01-03"
    },
    "schema:telephone": "1-408-800-0000",
    "xdm:identifier": {
      "https://ns.adobe.com/xdm/external/dnb": "1234",
      "https://ns.adobe.com/xdm/external/angellist": "https://angel.co/adobe"
    },
    "xdm:classifier": {
      "https://ns.adobe.com/xdm/external/sic": "1234",
      "https://ns.adobe.com/xdm/external/naics": "1234"
    }
  }
}
```

# Organization Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [@id](#id) | `string` | Optional | Organization (this schema) |
| [schema:description](#schemadescription) | `string` | Optional | Organization (this schema) |
| [schema:numberOfEmployees](#schemanumberofemployees) | `number` | Optional | Organization (this schema) |
| [xdm:classifier](#xdmclassifier) | `object` | Optional | Organization (this schema) |
| [xdm:identifier](#xdmidentifier) | `object` | Optional | Organization (this schema) |
| [xdm:industry](#xdmindustry) | `string` | Optional | Organization (this schema) |
| [xdm:legalName](#xdmlegalname) | `string` | Optional | Organization (this schema) |
| [xdm:location](#xdmlocation) | Physical place | Optional | Organization (this schema) |
| [xdm:marketSegment](#xdmmarketsegment) | `string` | Optional | Organization (this schema) |
| [xdm:rating](#xdmrating) | `number` | Optional | Organization (this schema) |
| [xdm:website](#xdmwebsite) | `string` | Optional | Organization (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## @id
### Organization ID

A unique identifier for the organization.

`@id`
* is optional
* type: `string`
* defined in this schema

### @id Type


`string`
* format: `uri-reference` – URI Reference (according to [RFC3986](https://tools.ietf.org/html/rfc3986))






## schema:description
### Organization description

A description of the organization.

`schema:description`
* is optional
* type: `string`
* defined in this schema

### schema:description Type


`string`






## schema:numberOfEmployees
### Number of employees

The number of employees the at the organization.

`schema:numberOfEmployees`
* is optional
* type: `number`
* defined in this schema

### schema:numberOfEmployees Type


`number`






## xdm:classifier
### Market or industry classifier

This object contains unambiguous classifiers for the organization. Each key is the URI of an classification service or standard, each value is the unique ID or preferably URI of the organization as defined by the classification service.

`xdm:classifier`
* is optional
* type: `object`
* defined in this schema

### xdm:classifier Type


`object` with following properties:


| Property | Type | Required |
|----------|------|----------|




### xdm:classifier Example

```json
{
  "https://ns.adobe.com/xdm/external/sic": "1234",
  "https://ns.adobe.com/xdm/external/naics": "1234"
}
```


## xdm:identifier
### Organization identifier

This object contains unambiguous identifiers for the organization. Each key is the URI of an identification service, each value is the unique ID or preferably URI of the organization as defined by the identification service.

`xdm:identifier`
* is optional
* type: `object`
* defined in this schema

### xdm:identifier Type


`object` with following properties:


| Property | Type | Required |
|----------|------|----------|




### xdm:identifier Example

```json
{
  "https://ns.adobe.com/xdm/external/dnb": "1234",
  "https://ns.adobe.com/xdm/external/angellist": "https://angel.co/adobe"
}
```


## xdm:industry
### Industry

The industry that this organization is a part of. This is a free-form field, and it is advisable to use a structured value for queries or to use the `xdm:classifier` property.

`xdm:industry`
* is optional
* type: `string`
* defined in this schema

### xdm:industry Type


`string`






## xdm:legalName
### Organization legal name

The official or legal name of the organization.

`xdm:legalName`
* is optional
* type: `string`
* defined in this schema

### xdm:legalName Type


`string`






## xdm:location
### Location

The location of the organization's main office or headquarters.

`xdm:location`
* is optional
* type: Physical place
* defined in this schema

### xdm:location Type


* [Physical place](../context/place.schema.md) – `https://ns.adobe.com/xdm/context/place`





## xdm:marketSegment
### Market segment

The named market segment that the organization participates in. This is a free-form field, and it is advisable to use a structured value for queries or to use the `xdm:identifier` property.

`xdm:marketSegment`
* is optional
* type: `string`
* defined in this schema

### xdm:marketSegment Type


`string`






## xdm:rating
### Rating

The calculated score or star rating for this organization. `1` indicates the maximum possible rating, `0` the minimum possible rating.

`xdm:rating`
* is optional
* type: `number`
* defined in this schema

### xdm:rating Type


`number`
* minimum value: `0`
* maximum value: `1`





## xdm:website
### Website URL

The URL of the organization's website.

`xdm:website`
* is optional
* type: `string`
* defined in this schema

### xdm:website Type


`string`
* format: `uri` – Uniformous Resource Identifier (according to [RFC3986](http://tools.ietf.org/html/rfc3986))





