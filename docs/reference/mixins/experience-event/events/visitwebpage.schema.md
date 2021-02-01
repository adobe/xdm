
# Visit WebPage Schema

```
https://ns.adobe.com/xdm/mixins/events/visitwebpage
```

Use for information regarding web details events such as interaction, page details, and referrer.

| [Abstract](../../../../abstract.md) | [Extensible](../../../../extensions.md) | [Status](../../../../status.md) | [Identifiable](../../../../id.md) | [Custom Properties](../../../../extensions.md) | [Additional Properties](../../../../extensions.md) | Defined In |
|-------------------------------------|-----------------------------------------|---------------------------------|-----------------------------------|------------------------------------------------|----------------------------------------------------|------------|
| Can be instantiated | Yes | Experimental | No | Forbidden | Permitted | [mixins/experience-event/events/visitwebpage.schema.json](mixins/experience-event/events/visitwebpage.schema.json) |

## Visit WebPage Example
```json
{}
```

# Visit WebPage Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [xdm:environment](#xdmenvironment) | `object` | Optional | Visit WebPage (this schema) |
| [xdm:marketing](#xdmmarketing) | `object` | Optional | Visit WebPage (this schema) |
| [xdm:search](#xdmsearch) | `object` | Optional | Visit WebPage (this schema) |
| [xdm:web](#xdmweb) | `object` | Optional | Visit WebPage (this schema) |
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
      "description": "The HTTP user-agent string from the client request."
    }
  },
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











## xdm:marketing
### Marketing

The information related to marketing activities that are active with the touchpoint.

`xdm:marketing`
* is optional
* type: `object`
* defined in this schema

### xdm:marketing Type


`object` with following properties:


| Property | Type | Required |
|----------|------|----------|
| `xdm:campaignName`| string | Optional |
| `xdm:campaignType`| string | Optional |



#### xdm:campaignName
##### Campaign name

Name of the campaign used to identify marketing campaign like '50%_DISCOUNT_USA' or '50%_DISCOUNT_ASIA'.

`xdm:campaignName`
* is optional
* type: `string`

##### xdm:campaignName Type


`string`








#### xdm:campaignType
##### Campaign Type

Name of the campaign type where multiple campaigns are grouped together.

`xdm:campaignType`
* is optional
* type: `string`

##### xdm:campaignType Type


`string`











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
    "xdm:name": {
      "title": "Name",
      "type": "string",
      "description": "The normative name of the web page. This name is not necessarily the page title or directly associate with page content, but is used to organize a site's pages for classification purposes."
    },
    "xdm:URL": {
      "title": "URL",
      "type": "string",
      "format": "uri",
      "description": "The normative or usual URL of the web page.  This may or may not be the actual URL used to reach the page, which would be recorded using `Web Link`."
    },
    "xdm:queryParamaters": {
      "title": "Query Paramaters",
      "type": "string",
      "description": "Query Paramters used for the web page."
    },
    "xdm:personalizedURL": {
      "title": "Personalized URL",
      "type": "string",
      "format": "uri",
      "description": "Personalized URL of the web page.  This may or may not be the actual URL used to reach the page, which would be recorded using `Web Link`."
    }
  },
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
      "description": "The referrer URL."
    }
  },
  "simpletype": "`object`"
}
```









