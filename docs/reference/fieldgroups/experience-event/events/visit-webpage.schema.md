
# Visit Web Page Schema

```
https://ns.adobe.com/xdm/mixins/events/visit-webpage
```

Use for tracking the details of a person's visit to a web page.

| [Abstract](../../../../abstract.md) | [Extensible](../../../../extensions.md) | [Status](../../../../status.md) | [Identifiable](../../../../id.md) | [Custom Properties](../../../../extensions.md) | [Additional Properties](../../../../extensions.md) | Defined In |
|-------------------------------------|-----------------------------------------|---------------------------------|-----------------------------------|------------------------------------------------|----------------------------------------------------|------------|
| Can be instantiated | Yes | Stable | No | Forbidden | Permitted | [fieldgroups/experience-event/events/visit-webpage.schema.json](fieldgroups/experience-event/events/visit-webpage.schema.json) |

## Visit Web Page Example
```json
{}
```

# Visit Web Page Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [xdm:environment](#xdmenvironment) | `object` | Optional | Visit Web Page (this schema) |
| [xdm:search](#xdmsearch) | `object` | Optional | Visit Web Page (this schema) |
| [xdm:web](#xdmweb) | `object` | Optional | Visit Web Page (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## xdm:environment
### Environment

The information related to web page and link of the ExperienceEvent.

`xdm:environment`
* is optional
* type: `object`
* defined in this schema

### xdm:environment Type


`object` with following properties:


| Property | Type | Required |
|----------|------|----------|
| `xdm:browserDetails`| object | Optional |
| `xdm:ipV4`| string | Optional |



#### xdm:browserDetails
##### Browser details

The browser specific details such as browser name, version, javascript version, user agent string, and accept language.

`xdm:browserDetails`
* is optional
* type: `object`

##### xdm:browserDetails Type

Unknown type `object`.

```json
{
  "title": "Browser details",
  "type": "object",
  "description": "The browser specific details such as browser name, version, javascript version, user agent string, and accept language.",
  "properties": {
    "xdm:userAgent": {
      "title": "User agent",
      "type": "string",
      "description": "The HTTP user-agent string from the client request.",
      "meta:titleId": "visit-webpage##xdm:userAgent##title##91601",
      "meta:descriptionId": "visit-webpage##xdm:userAgent##description##93181"
    }
  },
  "meta:titleId": "visit-webpage##xdm:browserDetails##title##97511",
  "meta:descriptionId": "visit-webpage##xdm:browserDetails##description##30901",
  "simpletype": "`object`"
}
```







#### xdm:ipV4
##### IPv4

The numerical label assigned to a device participating in a computer network that uses the Internet Protocol for communication. 

`xdm:ipV4`
* is optional
* type: `string`

##### xdm:ipV4 Type


`string`
* format: `ipv4` – IP (v4) address (according to [RFC 2673, section 3.2](https://tools.ietf.org/html/rfc2673))











## xdm:search
### Search

The information related to web or mobile search.

`xdm:search`
* is optional
* type: `object`
* defined in this schema

### xdm:search Type


`object` with following properties:


| Property | Type | Required |
|----------|------|----------|
| `xdm:keywords`| string | Optional |
| `xdm:searchEngine`| string | Optional |



#### xdm:keywords
##### Keywords

Keywords for the search.

`xdm:keywords`
* is optional
* type: `string`

##### xdm:keywords Type


`string`








#### xdm:searchEngine
##### Search engine

The search engine used by the search.

`xdm:searchEngine`
* is optional
* type: `string`

##### xdm:searchEngine Type


`string`











## xdm:web
### Web

Link clicks, web page details, referrer information, and browser details.

`xdm:web`
* is optional
* type: `object`
* defined in this schema

### xdm:web Type


`object` with following properties:


| Property | Type | Required |
|----------|------|----------|
| `xdm:webPageDetails`| object | Optional |
| `xdm:webReferrer`| object | Optional |



#### xdm:webPageDetails
##### Web Page Details

undefined

`xdm:webPageDetails`
* is optional
* type: `object`

##### xdm:webPageDetails Type

Unknown type `object`.

```json
{
  "title": "Web Page Details",
  "type": "object",
  "properties": {
    "xdm:webPageID": {
      "title": "Web Page ID (deprecated)",
      "type": "string",
      "description": "Web Page ID is going to depreciate soon. Please use Web Page Key.",
      "meta:titleId": "visit-webpage##xdm:webPageID##title##4791",
      "meta:descriptionId": "visit-webpage##xdm:webPageID##description##18061"
    },
    "xdm:webPageKey": {
      "title": "Web Page Key",
      "description": "Unique key of the web page.",
      "$ref": "https://ns.adobe.com/xdm/datatypes/b2b-source",
      "meta:titleId": "visit-webpage##xdm:webPageKey##title##45241",
      "meta:descriptionId": "visit-webpage##xdm:webPageKey##description##13131"
    },
    "xdm:name": {
      "title": "Name",
      "type": "string",
      "description": "The normative name of the web page. This name is not necessarily the page title or directly associate with page content, but is used to organize a site's pages for classification purposes.",
      "meta:titleId": "visit-webpage##xdm:name##title##4801",
      "meta:descriptionId": "visit-webpage##xdm:name##description##61531"
    },
    "xdm:URL": {
      "title": "URL",
      "type": "string",
      "description": "The normative or usual URL of the web page.  This may or may not be the actual URL used to reach the page, which would be recorded using `Web Link`.",
      "meta:titleId": "visit-webpage##xdm:URL##title##56451",
      "meta:descriptionId": "visit-webpage##xdm:URL##description##36051"
    },
    "xdm:queryParameters": {
      "title": "Query Parameters",
      "type": "string",
      "description": "Query Parameters used for the web page. This is normally the value of a string after ? in the url.",
      "meta:titleId": "visit-webpage##xdm:queryParameters##title##68751",
      "meta:descriptionId": "visit-webpage##xdm:queryParameters##description##51371"
    },
    "xdm:isPersonalizedURL": {
      "title": "Is Personalized URL",
      "type": "boolean",
      "description": "Boolean indicating if person accessed the web page via a personalized URL.",
      "meta:titleId": "visit-webpage##xdm:isPersonalizedURL##title##44061",
      "meta:descriptionId": "visit-webpage##xdm:isPersonalizedURL##description##28521"
    }
  },
  "meta:titleId": "visit-webpage##xdm:webPageDetails##title##31981",
  "simpletype": "`object`"
}
```







#### xdm:webReferrer
##### Web Referrer

undefined

`xdm:webReferrer`
* is optional
* type: `object`

##### xdm:webReferrer Type

Unknown type `object`.

```json
{
  "title": "Web Referrer",
  "type": "object",
  "properties": {
    "xdm:URL": {
      "title": "URL",
      "type": "string",
      "description": "URL of the referring web page.",
      "meta:titleId": "visit-webpage##xdm:URL##title##79351",
      "meta:descriptionId": "visit-webpage##xdm:URL##description##95021"
    }
  },
  "meta:titleId": "visit-webpage##xdm:webReferrer##title##67151",
  "simpletype": "`object`"
}
```









