
# Web Page Schema

```
https://ns.adobe.com/xdm/channels/webpage
```

Information about the web page of the `ExperienceEvent`.

| Abstract | Extensible | Custom Properties | Additional Properties | Defined In |
|----------|------------|-------------------|-----------------------|------------|
| Can be instantiated | Yes | Forbidden | Permitted | [channels/webpage.schema.json](channels/webpage.schema.json) |

## Web Page Example
```json
{
  "xdm:section": "Search section",
  "xdm:name": "search",
  "xdm:URL": "https://www.google.com",
  "xdm:isErrorPage": false,
  "xdm:isHomePage": true
}
```

# Web Page Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [xdm:URL](#xdmURL) | `string` | Optional | Web Page (this schema) |
| [xdm:isErrorPage](#xdmisErrorPage) | `boolean` | Optional | Web Page (this schema) |
| [xdm:isHomePage](#xdmisHomePage) | `boolean` | Optional | Web Page (this schema) |
| [xdm:name](#xdmname) | `string` | Optional | Web Page (this schema) |
| [xdm:referrer](#xdmreferrer) | `object` | Optional | Web Page (this schema) |
| [xdm:section](#xdmsection) | `string` | Optional | Web Page (this schema) |
| [xdm:server](#xdmserver) | `string` | Optional | Web Page (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## xdm:URL
### URL

The web page URL.

`xdm:URL`
* is optional
* type: `string`
* defined in this schema

### xdm:URL Type


`string`
* format: `uri` – Uniformous Resource Identifier (according to [RFC3986](http://tools.ietf.org/html/rfc3986))






## xdm:isErrorPage
### Is Error Page

Indicate if the page is error page or not.

`xdm:isErrorPage`
* is optional
* type: `boolean`
* defined in this schema

### xdm:isErrorPage Type


`boolean`





## xdm:isHomePage
### Is Home Page

Indicate if the page is home page or not.

`xdm:isHomePage`
* is optional
* type: `boolean`
* defined in this schema

### xdm:isHomePage Type


`boolean`





## xdm:name
### Name

The name of the web page.

`xdm:name`
* is optional
* type: `string`
* defined in this schema

### xdm:name Type


`string`






## xdm:referrer
### Referrer

The referrer of the web page.

`xdm:referrer`
* is optional
* type: `object`
* defined in this schema

### xdm:referrer Type


`object` with following properties:


| Property | Type | Required
|----------|------|----------|
| `URL`| string | Optional | 
| `domain`| string | Optional | 
| `type`| string | Optional | 



#### URL
##### URL

The referrer URL.

`URL`
* is optional
* type: `string`

##### URL Type


`string`








#### domain
##### Domain

The domain of the referrer.

`domain`
* is optional
* type: `string`

##### domain Type


`string`








#### type
##### Type

The referrer type.

`type`
* is optional
* type: `string`

##### type Type


`string`











## xdm:section
### Section

The section of the web page.

`xdm:section`
* is optional
* type: `string`
* defined in this schema

### xdm:section Type


`string`






## xdm:server
### Server

The server hosts the web page.

`xdm:server`
* is optional
* type: `string`
* defined in this schema

### xdm:server Type


`string`
* format: `hostname` – Domain Name (according to [RFC 1034, section 3.1](https://tools.ietf.org/html/rfc1034))





