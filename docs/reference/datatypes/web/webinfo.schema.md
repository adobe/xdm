
# Web information Schema

```
https://ns.adobe.com/xdm/context/webinfo
```

Information recorded via an `ExperienceEvent` that is specific to the World Wide Web channel, including the web page, referrer and/or link related to the on-page interaction.


| [Abstract](../../../abstract.md) | [Extensible](../../../extensions.md) | [Status](../../../status.md) | [Identifiable](../../../id.md) | [Custom Properties](../../../extensions.md) | [Additional Properties](../../../extensions.md) | Defined In |
|----------------------------------|--------------------------------------|------------------------------|--------------------------------|---------------------------------------------|-------------------------------------------------|------------|
| Can be instantiated | Yes | Stable | No | Forbidden | Permitted | [datatypes/web/webinfo.schema.json](datatypes/web/webinfo.schema.json) |
## Schema Hierarchy

* Web information `https://ns.adobe.com/xdm/context/webinfo`
  * [Extensibility base schema](../extensible.schema.md) `https://ns.adobe.com/xdm/common/extensible`


## Web information Examples

```json
{
  "xdm:webPageDetails": {
    "xdm:siteSection": "Product section",
    "xdm:server": "example.com",
    "xdm:name": "product home",
    "xdm:URL": "https://www.example.com/products",
    "xdm:errorPage": false,
    "xdm:homePage": true,
    "xdm:pageViews": {
      "xdm:value": 1
    }
  },
  "xdm:webReferrer": {
    "xdm:URL": "https://www.some-adserver.com",
    "xdm:referrerType": "external"
  }
}
```

```json
{
  "xdm:webPageDetails": {
    "xdm:siteSection": "Product section",
    "xdm:server": "example.com",
    "xdm:name": "product home",
    "xdm:URL": "https://www.example.com/products",
    "xdm:errorPage": false,
    "xdm:homePage": true
  },
  "xdm:webInteraction": {
    "xdm:type": "other",
    "xdm:URL": "#stores",
    "xdm:name": "product store",
    "xdm:linkClicks": {
      "xdm:value": 1
    }
  },
  "xdm:webReferrer": {
    "xdm:URL": "https://www.example.com/products",
    "xdm:type": "internal"
  }
}
```


# Web information Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [xdm:webInteraction](#xdmwebinteraction) | `object` | Optional | Web information (this schema) |
| [xdm:webPageDetails](#xdmwebpagedetails) | `object` | Optional | Web information (this schema) |
| [xdm:webReferrer](#xdmwebreferrer) | `object` | Optional | Web information (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## xdm:webInteraction
### Web interaction

Details about the web link or URL that corresponds to where the interaction occurred.

`xdm:webInteraction`
* is optional
* type: `object`
* defined in this schema

### xdm:webInteraction Type


`object` with following properties:


| Property | Type | Required |
|----------|------|----------|
| `xdm:URL`| string | Optional |
| `xdm:linkClicks`|  | Optional |
| `xdm:name`| string | Optional |
| `xdm:type`| string | Optional |



#### xdm:URL
##### URL

The actual link or URL used for this web interaction.

`xdm:URL`
* is optional
* type: `string`

##### xdm:URL Type


`string`








#### xdm:linkClicks
##### Link Clicks

Click of a web link has occurred.

`xdm:linkClicks`
* is optional
* type: reference

##### xdm:linkClicks Type


* []() – `https://ns.adobe.com/xdm/data/measure`







#### xdm:name
##### Name

The normative name used for this web link, used for classification purposes.

`xdm:name`
* is optional
* type: `string`

##### xdm:name Type


`string`








#### xdm:type
##### Type

The link type.

`xdm:type`
* is optional
* type: `enum`

The value of this property **must** be equal to one of the [known values below](#xdmwebinteraction-known-values).

##### xdm:type Known Values
| Value | Description |
|-------|-------------|
| `download` | Download |
| `exit` | Exit |
| `other` | Other |









## xdm:webPageDetails
### Web page details

Details about the web page where the web interaction occurred.

`xdm:webPageDetails`
* is optional
* type: `object`
* defined in this schema

### xdm:webPageDetails Type


`object` with following properties:


| Property | Type | Required |
|----------|------|----------|
| `xdm:URL`| string | Optional |
| `xdm:isErrorPage`| boolean | Optional |
| `xdm:isHomePage`| boolean | Optional |
| `xdm:name`| string | Optional |
| `xdm:pageViews`|  | Optional |
| `xdm:server`| string | Optional |
| `xdm:siteSection`| string | Optional |
| `xdm:viewName`| string | Optional |



#### xdm:URL
##### URL

The normative or usual URL of the web page.  This may or may not be the actual URL used to reach the page, which would be recorded using `Web Link`.

`xdm:URL`
* is optional
* type: `string`

##### xdm:URL Type


`string`








#### xdm:isErrorPage
##### Is error page

Flag that indicate if the page is error page or not.  Error here is defined by the application, and may nor may not correspond to a page served with an HTTP error code.  This flag is used to broadly categorize web interactions.

`xdm:isErrorPage`
* is optional
* type: `boolean`

##### xdm:isErrorPage Type


`boolean`







#### xdm:isHomePage
##### Is home page

Flag that indicate if the page is the site home page or not.  The definition of home page is determined by the application, but is commonly used to designate a top level landing page or common site entry point.  This flag is used to broadly categorize web interactions.

`xdm:isHomePage`
* is optional
* type: `boolean`

##### xdm:isHomePage Type


`boolean`







#### xdm:name
##### Name

The normative name of the web page. This name is not necessarily the page title or directly associate with page content, but is used to organize a site's pages for classification purposes.

`xdm:name`
* is optional
* type: `string`

##### xdm:name Type


`string`








#### xdm:pageViews
##### Page Views

View(s) of a webpage has occurred.

`xdm:pageViews`
* is optional
* type: reference

##### xdm:pageViews Type


* []() – `https://ns.adobe.com/xdm/data/measure`







#### xdm:server
##### Server

The normative or usual server that hosts the web page.  This may or may not be the host or server that actually served the page interaction, but is used for classification purposes.

`xdm:server`
* is optional
* type: `string`

##### xdm:server Type


`string`








#### xdm:siteSection
##### Site section

The normative name of the site section where this web page resides, which may be used to classify or categorize the interaction.

`xdm:siteSection`
* is optional
* type: `string`

##### xdm:siteSection Type


`string`








#### xdm:viewName
##### View Name

The name of the view, within a page. This is commonly used with Single Page Applications or pages that have tabs or controls that change a majority of the page layout.

`xdm:viewName`
* is optional
* type: `string`

##### xdm:viewName Type


`string`











## xdm:webReferrer
### Web referrer

The referrer of a web interaction, which is the URL a visitor came from immediately before the current web interaction was recorded.

`xdm:webReferrer`
* is optional
* type: `object`
* defined in this schema

### xdm:webReferrer Type


`object` with following properties:


| Property | Type | Required |
|----------|------|----------|
| `xdm:URL`| string | Optional |
| `xdm:type`| string | Optional |



#### xdm:URL
##### URL

The referrer URL.

`xdm:URL`
* is optional
* type: `string`

##### xdm:URL Type


`string`








#### xdm:type
##### Type

The referrer type.

`xdm:type`
* is optional
* type: `enum`

The value of this property **must** be equal to one of the [known values below](#xdmwebreferrer-known-values).

##### xdm:type Known Values
| Value | Description |
|-------|-------------|
| `internal` | Internal |
| `external` | External |
| `search_engine` | Search engine |
| `typed_bookmarked` | Typed or bookmarked |
| `email` | Email |
| `social` | Social network |
| `unknown` | Unknown |
| `news` | Usenet newsgroup |
| `usenet` |  |








