
# Browser details Schema

```
https://ns.adobe.com/xdm/context/browserdetails
```

Detail information related to the browser.

| [Abstract](../../abstract.md) | [Extensible](../../extensions.md) | [Status](../../status.md) | [Identifiable](../../id.md) | [Custom Properties](../../extensions.md) | [Additional Properties](../../extensions.md) | Defined In |
|-------------------------------|-----------------------------------|---------------------------|-----------------------------|------------------------------------------|----------------------------------------------|------------|
| Can be instantiated | Yes | Stable | No | Forbidden | Permitted | [datatypes/browserdetails.schema.json](datatypes/browserdetails.schema.json) |
## Schema Hierarchy

* Browser details `https://ns.adobe.com/xdm/context/browserdetails`
  * [Extensibility base schema](extensible.schema.md) `https://ns.adobe.com/xdm/common/extensible`


## Browser details Example
```json
{
  "xdm:name": "Chrome",
  "xdm:vendor": "Google",
  "xdm:version": "100.0.4896.127",
  "xdm:acceptLanguage": "en",
  "xdm:cookiesEnabled": true,
  "xdm:javaScriptEnabled": true,
  "xdm:javaScriptVersion": "1.8.5",
  "xdm:javaEnabled": true,
  "xdm:javaVersion": "Java SE 8",
  "xdm:viewportHeight": 900,
  "xdm:viewportWidth": 1680,
  "xdm:userAgentClientHints": {
    "xdm:brands": [
      {
        "xdm:brand": "Google Chrome",
        "xdm:version": "100"
      },
      {
        "xdm:brand": "Chromium",
        "xdm:version": "100"
      }
    ],
    "xdm:mobile": false,
    "xdm:architecture": "x86",
    "xdm:bitness": "64",
    "xdm:model": "",
    "xdm:platform": "Windows",
    "xdm:platformVersion": "14.0.0",
    "xdm:wow64": false
  }
}
```

# Browser details Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [xdm:acceptLanguage](#xdmacceptlanguage) | `string` | Optional | Browser details (this schema) |
| [xdm:cookiesEnabled](#xdmcookiesenabled) | `boolean` | Optional | Browser details (this schema) |
| [xdm:javaEnabled](#xdmjavaenabled) | `boolean` | Optional | Browser details (this schema) |
| [xdm:javaScriptEnabled](#xdmjavascriptenabled) | `boolean` | Optional | Browser details (this schema) |
| [xdm:javaScriptVersion](#xdmjavascriptversion) | `string` | Optional | Browser details (this schema) |
| [xdm:javaVersion](#xdmjavaversion) | `string` | Optional | Browser details (this schema) |
| [xdm:name](#xdmname) | `string` | Optional | Browser details (this schema) |
| [xdm:quicktimeVersion](#xdmquicktimeversion) | `string` | Optional | Browser details (this schema) |
| [xdm:thirdPartyCookiesEnabled](#xdmthirdpartycookiesenabled) | `boolean` | Optional | Browser details (this schema) |
| [xdm:userAgent](#xdmuseragent) | `string` | Optional | Browser details (this schema) |
| [xdm:userAgentClientHints](#xdmuseragentclienthints) | `object` | Optional | Browser details (this schema) |
| [xdm:vendor](#xdmvendor) | `string` | Optional | Browser details (this schema) |
| [xdm:version](#xdmversion) | `string` | Optional | Browser details (this schema) |
| [xdm:viewportHeight](#xdmviewportheight) | `integer` | Optional | Browser details (this schema) |
| [xdm:viewportWidth](#xdmviewportwidth) | `integer` | Optional | Browser details (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## xdm:acceptLanguage
### Accept language

An IETF language tag (RFC 5646).

`xdm:acceptLanguage`
* is optional
* type: `string`
* defined in this schema

### xdm:acceptLanguage Type


`string`






## xdm:cookiesEnabled
### Allows cookies

The current user agent settings allow for the writing of cookies.'

`xdm:cookiesEnabled`
* is optional
* type: `boolean`
* defined in this schema

### xdm:cookiesEnabled Type


`boolean`





## xdm:javaEnabled
### Java enabled

If Java was enabled in the device this observation was made from.

`xdm:javaEnabled`
* is optional
* type: `boolean`
* defined in this schema

### xdm:javaEnabled Type


`boolean`





## xdm:javaScriptEnabled
### JavaScript enabled

If JavaScript was enabled in the device this observation was made from.

`xdm:javaScriptEnabled`
* is optional
* type: `boolean`
* defined in this schema

### xdm:javaScriptEnabled Type


`boolean`





## xdm:javaScriptVersion
### JavaScript version

The version of JavaScript supported during the observation.

`xdm:javaScriptVersion`
* is optional
* type: `string`
* defined in this schema

### xdm:javaScriptVersion Type


`string`






## xdm:javaVersion
### Java version

The version of Java supported during the observation.

`xdm:javaVersion`
* is optional
* type: `string`
* defined in this schema

### xdm:javaVersion Type


`string`






## xdm:name
### Name

The application or browser name.

`xdm:name`
* is optional
* type: `string`
* defined in this schema

### xdm:name Type


`string`






## xdm:quicktimeVersion
### Quicktime version

The version of Apple Quicktime supported during the observation.

`xdm:quicktimeVersion`
* is optional
* type: `string`
* defined in this schema

### xdm:quicktimeVersion Type


`string`






## xdm:thirdPartyCookiesEnabled
### Allows third-party cookies

If third-party cookies were enabled when this observation was made.

`xdm:thirdPartyCookiesEnabled`
* is optional
* type: `boolean`
* defined in this schema

### xdm:thirdPartyCookiesEnabled Type


`boolean`





## xdm:userAgent
### User agent

The HTTP user-agent string from the client request.

`xdm:userAgent`
* is optional
* type: `string`
* defined in this schema

### xdm:userAgent Type


`string`






## xdm:userAgentClientHints


`xdm:userAgentClientHints`
* is optional
* type: `object`
* defined in this schema

### xdm:userAgentClientHints Type


`object` with following properties:


| Property | Type | Required |
|----------|------|----------|
| `xdm:architecture`| string | Optional |
| `xdm:bitness`| string | Optional |
| `xdm:brands`| array | Optional |
| `xdm:mobile`| boolean | Optional |
| `xdm:model`| string | Optional |
| `xdm:platform`| string | Optional |
| `xdm:platformVersion`| string | Optional |
| `xdm:wow64`| boolean | Optional |



#### xdm:architecture
##### Platform architecture

The user agent's underlying CPU architecture (e.g., ARM, or x86).

`xdm:architecture`
* is optional
* type: `string`

##### xdm:architecture Type


`string`








#### xdm:bitness
##### Platform bitness

The user agent's underlying CPU architecture bitness (e.g., 32 or 64).

`xdm:bitness`
* is optional
* type: `string`

##### xdm:bitness Type


`string`








#### xdm:brands

undefined

`xdm:brands`
* is optional
* type: `object[]`


##### xdm:brands Type


Array type: `object[]`

All items must be of the type:
`object` with following properties:


| Property | Type | Required |
|----------|------|----------|
| `xdm:brand`| string | Optional |
| `xdm:version`| string | Optional |



#### xdm:brand
##### Brand

The user-agent's commercial name (e.g., cURL, Edge).

`xdm:brand`
* is optional
* type: `string`

##### xdm:brand Type


`string`








#### xdm:version
##### Significant version

The marketing version which includes distinguishable web-exposed features (e.g., 72, 3, or 12.1), corresponding to the user-agent.

`xdm:version`
* is optional
* type: `string`

##### xdm:version Type


`string`








  
User-agent associated commercial name with significant versions.









#### xdm:mobile
##### Mobileness

A boolean indicating if the user agent's device is a mobile device.

`xdm:mobile`
* is optional
* type: `boolean`

##### xdm:mobile Type


`boolean`







#### xdm:model
##### Model

The user agent's device model  (e.g., Pixel 2 XL).

`xdm:model`
* is optional
* type: `string`

##### xdm:model Type


`string`








#### xdm:platform
##### Platform

The user agent's operating system's commercial name.

`xdm:platform`
* is optional
* type: `string`

##### xdm:platform Type


`string`








#### xdm:platformVersion
##### Platform version

The user agent's operating system's version (e.g., NT 6.0, 15, or 17G).

`xdm:platformVersion`
* is optional
* type: `string`

##### xdm:platformVersion Type


`string`








#### xdm:wow64
##### WoW64-ness

A boolean indicating if the user agent's binary is running in 32-bit mode on 64-bit Windows.

`xdm:wow64`
* is optional
* type: `boolean`

##### xdm:wow64 Type


`boolean`










## xdm:vendor
### Vendor

The application or browser vendor.

`xdm:vendor`
* is optional
* type: `string`
* defined in this schema

### xdm:vendor Type


`string`






## xdm:version
### Version

The application or browser version.

`xdm:version`
* is optional
* type: `string`
* defined in this schema

### xdm:version Type


`string`






## xdm:viewportHeight
### Viewport height

The vertical size in pixels of the window the experience was displayed inside. For a web view event, the browser viewport height.

`xdm:viewportHeight`
* is optional
* type: `integer`
* defined in this schema

### xdm:viewportHeight Type


`integer`






## xdm:viewportWidth
### Viewport width

The horizontal size in pixels of the window the experience was displayed inside. For a web view event, the browser viewport width.

`xdm:viewportWidth`
* is optional
* type: `integer`
* defined in this schema

### xdm:viewportWidth Type


`integer`





