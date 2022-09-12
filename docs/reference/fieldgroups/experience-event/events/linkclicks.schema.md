
# Link Clicks Schema

```
https://ns.adobe.com/xdm/mixins/events/linkclicks
```

Use to capture details when a person clicks a link on a web page.

| [Abstract](../../../../abstract.md) | [Extensible](../../../../extensions.md) | [Status](../../../../status.md) | [Identifiable](../../../../id.md) | [Custom Properties](../../../../extensions.md) | [Additional Properties](../../../../extensions.md) | Defined In |
|-------------------------------------|-----------------------------------------|---------------------------------|-----------------------------------|------------------------------------------------|----------------------------------------------------|------------|
| Can be instantiated | Yes | Stable | No | Forbidden | Permitted | [fieldgroups/experience-event/events/linkclicks.schema.json](fieldgroups/experience-event/events/linkclicks.schema.json) |

## Link Clicks Example
```json
{}
```

# Link Clicks Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [xdm:environment](#xdmenvironment) | `object` | Optional | Link Clicks (this schema) |
| [xdm:web](#xdmweb) | `object` | Optional | Link Clicks (this schema) |
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
      "meta:titleId": "linkclicks##xdm:userAgent##title##15861",
      "meta:descriptionId": "linkclicks##xdm:userAgent##description##75911"
    }
  },
  "meta:titleId": "linkclicks##xdm:browserDetails##title##19101",
  "meta:descriptionId": "linkclicks##xdm:browserDetails##description##60471",
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
| `xdm:webInteraction`| object | Optional |
| `xdm:webPageDetails`| object | Optional |
| `xdm:webReferrer`| object | Optional |



#### xdm:webInteraction
##### Web Interaction

undefined

`xdm:webInteraction`
* is optional
* type: `object`

##### xdm:webInteraction Type

Unknown type `object`.

```json
{
  "title": "Web Interaction",
  "type": "object",
  "properties": {
    "xdm:linkID": {
      "title": "Link ID (deprecated)",
      "type": "string",
      "description": "Link ID is going to depreciate soon. Please use Web Interaction Key.",
      "meta:titleId": "linkclicks##xdm:linkID##title##65641",
      "meta:descriptionId": "linkclicks##xdm:linkID##description##70231"
    },
    "xdm:webInteractionKey": {
      "title": "Web Interaction Key",
      "description": "Unique key of the link clicked.",
      "$ref": "https://ns.adobe.com/xdm/datatypes/b2b-source",
      "meta:titleId": "linkclicks##xdm:webInteractionKey##title##58071",
      "meta:descriptionId": "linkclicks##xdm:webInteractionKey##description##19121"
    },
    "xdm:linkURL": {
      "title": "Link URL",
      "type": "string",
      "description": "URL of the link clicked.",
      "meta:titleId": "linkclicks##xdm:linkURL##title##72901",
      "meta:descriptionId": "linkclicks##xdm:linkURL##description##94691"
    }
  },
  "meta:titleId": "linkclicks##xdm:webInteraction##title##5681",
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
      "meta:titleId": "linkclicks##xdm:webPageID##title##31091",
      "meta:descriptionId": "linkclicks##xdm:webPageID##description##26561"
    },
    "xdm:name": {
      "title": "Name",
      "type": "string",
      "description": "The normative name of the web page. This name is not necessarily the page title or directly associate with page content, but is used to organize a site's pages for classification purposes.",
      "meta:titleId": "linkclicks##xdm:name##title##50561",
      "meta:descriptionId": "linkclicks##xdm:name##description##95161"
    },
    "xdm:queryParameters": {
      "title": "Query Parameters",
      "type": "string",
      "description": "Query Parameters used for the web page. This is normally the value of a string after `?` in the url.",
      "meta:titleId": "linkclicks##xdm:queryParameters##title##7831",
      "meta:descriptionId": "linkclicks##xdm:queryParameters##description##64521"
    }
  },
  "meta:titleId": "linkclicks##xdm:webPageDetails##title##26891",
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
      "description": "URL of the referrer to the website.",
      "meta:titleId": "linkclicks##xdm:URL##title##81",
      "meta:descriptionId": "linkclicks##xdm:URL##description##81871"
    }
  },
  "meta:titleId": "linkclicks##xdm:webReferrer##title##97281",
  "simpletype": "`object`"
}
```









