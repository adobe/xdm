
# Browser details Schema

```
https://ns.adobe.com/xdm/context/browserdetails
```

Detail information related to the browser.

| [Abstract](../../abstract.md) | [Extensible](../../extensions.md) | [Status](../../status.md) | [Identifiable](../../id.md) | [Custom Properties](../../extensions.md) | [Additional Properties](../../extensions.md) | Defined In |
|-------------------------------|-----------------------------------|---------------------------|-----------------------------|------------------------------------------|----------------------------------------------|------------|
| Can be instantiated | Yes | Stabilizing | No | Forbidden | Permitted | [context/browserdetails.schema.json](context/browserdetails.schema.json) |
## Schema Hierarchy

* Browser details `https://ns.adobe.com/xdm/context/browserdetails`
  * [Extensibility base schema](../common/extensible.schema.md) `https://ns.adobe.com/xdm/common/extensible`


## Browser details Example
```json
{
  "xdm:name": "Chrome",
  "xdm:vendor": "Google",
  "xdm:version": "63.0.3239",
  "xdm:acceptLanguage": "en",
  "xdm:cookiesEnabled": true,
  "xdm:javaScriptEnabled": true,
  "xdm:javaScriptVersion": "1.8.5",
  "xdm:javaEnabled": true,
  "xdm:javaVersion": "Java SE 8",
  "xdm:viewportHeight": 900,
  "xdm:viewportWidth": 1680
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
* minimum value: `0`






## xdm:viewportWidth
### Viewport width

The horizontal size in pixels of the window the experience was displayed inside. For a web view event, the browser viewport width.

`xdm:viewportWidth`
* is optional
* type: `integer`
* defined in this schema

### xdm:viewportWidth Type


`integer`
* minimum value: `0`





