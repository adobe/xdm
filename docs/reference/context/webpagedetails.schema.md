
# Web page details Schema

```
https://ns.adobe.com/xdm/context/webpagedetails
```

Details about the web page that has just been loaded and viewed, as recorded by an `ExperienceEvent`.

This schema is intended for full page details and initial page loads of single page web applications (SPAs).
For interactions that are happening on a loaded page that do not trigger a new page load, see `WebInteraction`.


| [Abstract](../../abstract.md) | [Extensible](../../extensions.md) | [Status](../../status.md) | [Identifiable](../../id.md) | [Custom Properties](../../extensions.md) | [Additional Properties](../../extensions.md) | Defined In |
|-------------------------------|-----------------------------------|---------------------------|-----------------------------|------------------------------------------|----------------------------------------------|------------|
| Can be instantiated | Yes | Stabilizing | No | Forbidden | Permitted | [context/webpagedetails.schema.json](context/webpagedetails.schema.json) |
## Schema Hierarchy

* Web page details `https://ns.adobe.com/xdm/context/webpagedetails`
  * [Extensibility base schema](../common/extensible.schema.md) `https://ns.adobe.com/xdm/common/extensible`
  * [Measure](../data/measure.schema.md) `https://ns.adobe.com/xdm/data/measure`


## Web page details Example
```json
{
  "xdm:siteSection": "Product section",
  "xdm:server": "example.com",
  "xdm:name": "product home",
  "xdm:URL": "https://www.example.com",
  "xdm:errorPage": false,
  "xdm:homePage": true,
  "xdm:pageViews": {
    "xdm:value": 1
  }
}
```

# Web page details Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [xdm:URL](#xdmurl) | `string` | Optional | Web page details (this schema) |
| [xdm:isErrorPage](#xdmiserrorpage) | `boolean` | Optional | Web page details (this schema) |
| [xdm:isHomePage](#xdmishomepage) | `boolean` | Optional | Web page details (this schema) |
| [xdm:name](#xdmname) | `string` | Optional | Web page details (this schema) |
| [xdm:pageViews](#xdmpageviews) | Measure | Optional | Web page details (this schema) |
| [xdm:server](#xdmserver) | `string` | Optional | Web page details (this schema) |
| [xdm:siteSection](#xdmsitesection) | `string` | Optional | Web page details (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## xdm:URL
### URL

The normative or usual URL of the web page.  This may or may not be the actual URL used to reach the page, which would be recorded using `Web Link`.

`xdm:URL`
* is optional
* type: `string`
* defined in this schema

### xdm:URL Type


`string`
* format: `uri` – Uniformous Resource Identifier (according to [RFC3986](http://tools.ietf.org/html/rfc3986))






## xdm:isErrorPage
### Is error page

Flag that indicate if the page is error page or not.  Error here is defined by the application, and may nor may not correspond to a page served with an HTTP error code.  This flag is used to broadly categorize web interactions.

`xdm:isErrorPage`
* is optional
* type: `boolean`
* defined in this schema

### xdm:isErrorPage Type


`boolean`





## xdm:isHomePage
### Is home page

Flag that indicate if the page is the site home page or not.  The definition of home page is determined by the application, but is commonly used to designate a top level landing page or common site entry point.  This flag is used to broadly categorize web interactions.

`xdm:isHomePage`
* is optional
* type: `boolean`
* defined in this schema

### xdm:isHomePage Type


`boolean`





## xdm:name
### Name

The normative name of the web page. This name is not necessarily the page title or directly associate with page content, but is used to organize a site's pages for classification purposes.

`xdm:name`
* is optional
* type: `string`
* defined in this schema

### xdm:name Type


`string`






## xdm:pageViews

View(s) of a webpage has occurred.

`xdm:pageViews`
* is optional
* type: Measure
* defined in this schema

### xdm:pageViews Type


* [Measure](../data/measure.schema.md) – `https://ns.adobe.com/xdm/data/measure`





## xdm:server
### Server

The normative or usual server that hosts the web page.  This may or may not be the host or server that actually served the page interaction, but is used for classification purposes.

`xdm:server`
* is optional
* type: `string`
* defined in this schema

### xdm:server Type


`string`






## xdm:siteSection
### Site section

The normative name of the site section where this web page resides, which may be used to classify or categorize the interaction.

`xdm:siteSection`
* is optional
* type: `string`
* defined in this schema

### xdm:siteSection Type


`string`





