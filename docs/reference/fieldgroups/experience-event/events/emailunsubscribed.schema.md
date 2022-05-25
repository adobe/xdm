
# Email Unsubscribed Schema

```
https://ns.adobe.com/xdm/mixins/events/emailunsubscribed
```

Use to capture details when a person unsubscribes from an email.

| [Abstract](../../../../abstract.md) | [Extensible](../../../../extensions.md) | [Status](../../../../status.md) | [Identifiable](../../../../id.md) | [Custom Properties](../../../../extensions.md) | [Additional Properties](../../../../extensions.md) | Defined In |
|-------------------------------------|-----------------------------------------|---------------------------------|-----------------------------------|------------------------------------------------|----------------------------------------------------|------------|
| Can be instantiated | Yes | Experimental | No | Forbidden | Permitted | [fieldgroups/experience-event/events/emailunsubscribed.schema.json](fieldgroups/experience-event/events/emailunsubscribed.schema.json) |

## Email Unsubscribed Example
```json
{}
```

# Email Unsubscribed Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [xdm:directMarketing](#xdmdirectmarketing) | `object` | Optional | Email Unsubscribed (this schema) |
| [xdm:environment](#xdmenvironment) | `object` | Optional | Email Unsubscribed (this schema) |
| [xdm:web](#xdmweb) | `object` | Optional | Email Unsubscribed (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## xdm:directMarketing
### Direct marketing

`xdm:directMarketing`
* is optional
* type: `object`
* defined in this schema

### xdm:directMarketing Type


`object` with following properties:


| Property | Type | Required |
|----------|------|----------|
| `xdm:automationRunID`| string | Optional |
| `xdm:mailingID`| string | Optional |
| `xdm:mailingKey`|  | Optional |
| `xdm:mailingName`| string | Optional |
| `xdm:testVariantID`| string | Optional |
| `xdm:testVariantName`| string | Optional |



#### xdm:automationRunID
##### Automation Run ID

Automation Run ID

`xdm:automationRunID`
* is optional
* type: `string`

##### xdm:automationRunID Type


`string`








#### xdm:mailingID
##### Mailing ID (deprecated)

Mailing ID is going to depreciate soon. Please use Mailing Key.

`xdm:mailingID`
* is optional
* type: `string`

##### xdm:mailingID Type


`string`








#### xdm:mailingKey
##### Mailing Key

Unique key of the email asset.

`xdm:mailingKey`
* is optional
* type: reference

##### xdm:mailingKey Type


* []() – `https://ns.adobe.com/xdm/datatypes/b2b-source`







#### xdm:mailingName
##### Mailing Name

Name of the email asset.

`xdm:mailingName`
* is optional
* type: `string`

##### xdm:mailingName Type


`string`








#### xdm:testVariantID
##### Test Variant ID

Unique ID of the test variant of the email asset.

`xdm:testVariantID`
* is optional
* type: `string`

##### xdm:testVariantID Type


`string`








#### xdm:testVariantName
##### Test Variant Name

Friendly name of the test variant of the email asset.

`xdm:testVariantName`
* is optional
* type: `string`

##### xdm:testVariantName Type


`string`











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
      "meta:titleId": "emailunsubscribed##xdm:userAgent##title##81641",
      "meta:descriptionId": "emailunsubscribed##xdm:userAgent##description##11801"
    }
  },
  "meta:titleId": "emailunsubscribed##xdm:browserDetails##title##87491",
  "meta:descriptionId": "emailunsubscribed##xdm:browserDetails##description##14301",
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
| `xdm:fillOutForm`| object | Optional |
| `xdm:webPageDetails`| object | Optional |
| `xdm:webReferrer`| object | Optional |



#### xdm:fillOutForm
##### Fill Out Form

undefined

`xdm:fillOutForm`
* is optional
* type: `object`

##### xdm:fillOutForm Type

Unknown type `object`.

```json
{
  "title": "Fill Out Form",
  "type": "object",
  "properties": {
    "xdm:webFormID": {
      "title": "Web Form ID",
      "type": "string",
      "description": "Unique ID of the form.",
      "meta:titleId": "emailunsubscribed##xdm:webFormID##title##61511",
      "meta:descriptionId": "emailunsubscribed##xdm:webFormID##description##13791"
    },
    "xdm:webFormName": {
      "title": "Web Form Name",
      "type": "string",
      "description": "Friendly name of the form.",
      "meta:titleId": "emailunsubscribed##xdm:webFormName##title##76451",
      "meta:descriptionId": "emailunsubscribed##xdm:webFormName##description##86641"
    }
  },
  "meta:titleId": "emailunsubscribed##xdm:fillOutForm##title##50221",
  "simpletype": "`object`"
}
```







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
      "title": "Web Page ID",
      "type": "string",
      "description": "Unique ID of the web page.",
      "meta:titleId": "emailunsubscribed##xdm:webPageID##title##11791",
      "meta:descriptionId": "emailunsubscribed##xdm:webPageID##description##31611"
    },
    "xdm:name": {
      "title": "Name",
      "type": "string",
      "description": "The normative name of the web page. This name is not necessarily the page title or directly associate with page content, but is used to organize a site's pages for classification purposes.",
      "meta:titleId": "emailunsubscribed##xdm:name##title##39381",
      "meta:descriptionId": "emailunsubscribed##xdm:name##description##31621"
    },
    "xdm:queryParameters": {
      "title": "Query Parameters",
      "type": "string",
      "description": "Query Parameters used for the web page. This is normally the value of a string after `?` in the url.",
      "meta:titleId": "emailunsubscribed##xdm:queryParameters##title##44671",
      "meta:descriptionId": "emailunsubscribed##xdm:queryParameters##description##83341"
    }
  },
  "meta:titleId": "emailunsubscribed##xdm:webPageDetails##title##64941",
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
      "description": "URL of referrer to web page.",
      "meta:titleId": "emailunsubscribed##xdm:URL##title##59911",
      "meta:descriptionId": "emailunsubscribed##xdm:URL##description##54351"
    }
  },
  "meta:titleId": "emailunsubscribed##xdm:webReferrer##title##67831",
  "simpletype": "`object`"
}
```









