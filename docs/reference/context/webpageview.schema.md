
# Web Page View Schema

```
https://ns.adobe.com/xdm/context/webpageview
```

Details about the web page that has just been loaded and viewed, as recorded by an `ExperienceEvent`.

This schema is intended for full page views and initial page loads of single page web applications (SPAs).
For interactions that are happening on a loaded page that do not trigger a new page load, see `WebInteraction`.


| Abstract | Extensible | Status | Custom Properties | Additional Properties | Defined In |
|----------|------------|--------|-------------------|-----------------------|------------|
| Can be instantiated | Yes | Experimental | Forbidden | Permitted | [context/webpageview.schema.json](context/webpageview.schema.json) |

## Web Page View Example
```json
{
  "xdm:siteSection": "Product section",
  "xdm:server": "example.com",
  "xdm:name": "product home",
  "xdm:URL": "https://www.example.com",
  "xdm:errorPage": false,
  "xdm:homePage": true
}
```

# Web Page View Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [xdm:URL](#xdmurl) | `string` | Optional | Web Page View (this schema) |
| [xdm:isErrorPage](#xdmiserrorpage) | `boolean` | Optional | Web Page View (this schema) |
| [xdm:isHomePage](#xdmishomepage) | `boolean` | Optional | Web Page View (this schema) |
| [xdm:name](#xdmname) | `string` | Optional | Web Page View (this schema) |
| [xdm:server](#xdmserver) | `string` | Optional | Web Page View (this schema) |
| [xdm:siteSection](#xdmsitesection) | `string` | Optional | Web Page View (this schema) |
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
### Is Error Page

Flag that indicate if the page is error page or not.  Error here is defined by the application, and may nor may not correspond to a page served with an HTTP error code.  This flag is used to broadly categorize web interactions.

`xdm:isErrorPage`
* is optional
* type: `boolean`
* defined in this schema

### xdm:isErrorPage Type


`boolean`





## xdm:isHomePage
### Is Home Page

Flag that indicate if the page is the site home page or not.  The definition of home page is determined by the application, but is commonly used to designate a top level landing page or common site entry point.  This flag is used to broadly categorize web interactions.

`xdm:isHomePage`
* is optional
* type: `boolean`
* defined in this schema

### xdm:isHomePage Type


`boolean`





## xdm:name
### Name

The normative name of the web page. This name is not necessarily the page title or directy associate with page content, but is used to organize a site's pages for classification purposes

`xdm:name`
* is optional
* type: `string`
* defined in this schema

### xdm:name Type


`string`






## xdm:server
### Server

The normative or usual server that hosts the web page.  This may or may not be the host or server that actually served the page interaction, but is used for classification purposes.

`xdm:server`
* is optional
* type: `string`
* defined in this schema

### xdm:server Type


`string`
* format: `hostname` – Domain Name (according to [RFC 1034, section 3.1](https://tools.ietf.org/html/rfc1034))






## xdm:siteSection
### Site Section

The normative name of the site section where this web page resides, which may be used to classify or categorize the interaction

`xdm:siteSection`
* is optional
* type: `string`
* defined in this schema

### xdm:siteSection Type


`string`





