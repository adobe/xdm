
# Browser Details Schema

```
https://ns.adobe.com/xdm/context/browserdetails
```

Detail information related to the browser

| Abstract | Extensible | Custom Properties | Additional Properties | Defined In |
|----------|------------|-------------------|-----------------------|------------|
| Can be instantiated | Yes | Forbidden | Permitted | [context/browserdetails.schema.json](context/browserdetails.schema.json) |

## Browser Details Example
```json
{
  "xdm:name": "Chrome",
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

# Browser Details Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [xdm:acceptLanguage](#xdmacceptLanguage) | `string` | Optional | Browser Details (this schema) |
| [xdm:cookiesEnabled](#xdmcookiesEnabled) | `boolean` | Optional | Browser Details (this schema) |
| [xdm:javaEnabled](#xdmjavaEnabled) | `boolean` | Optional | Browser Details (this schema) |
| [xdm:javaScriptEnabled](#xdmjavaScriptEnabled) | `boolean` | Optional | Browser Details (this schema) |
| [xdm:javaScriptVersion](#xdmjavaScriptVersion) | `string` | Optional | Browser Details (this schema) |
| [xdm:javaVersion](#xdmjavaVersion) | `string` | Optional | Browser Details (this schema) |
| [xdm:name](#xdmname) | `string` | Optional | Browser Details (this schema) |
| [xdm:quicktimeVersion](#xdmquicktimeVersion) | `string` | Optional | Browser Details (this schema) |
| [xdm:thirdPartyCookiesEnabled](#xdmthirdPartyCookiesEnabled) | `boolean` | Optional | Browser Details (this schema) |
| [xdm:userAgent](#xdmuserAgent) | `string` | Optional | Browser Details (this schema) |
| [xdm:version](#xdmversion) | `string` | Optional | Browser Details (this schema) |
| [xdm:viewportHeight](#xdmviewportHeight) | `integer` | Optional | Browser Details (this schema) |
| [xdm:viewportWidth](#xdmviewportWidth) | `integer` | Optional | Browser Details (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## xdm:acceptLanguage
### Accept Language

An IETF Language Tag (RFC 5646).

`xdm:acceptLanguage`
* is optional
* type: `string`
* defined in this schema

### xdm:acceptLanguage Type


`string`






## xdm:cookiesEnabled
### Allows Cookies

The current user agent settings allow for the writing of cookies.&#39;

`xdm:cookiesEnabled`
* is optional
* type: `boolean`
* defined in this schema

### xdm:cookiesEnabled Type


`boolean`





## xdm:javaEnabled
### Java Enabled

If Java was enabled in the device this observation was made from.

`xdm:javaEnabled`
* is optional
* type: `boolean`
* defined in this schema

### xdm:javaEnabled Type


`boolean`





## xdm:javaScriptEnabled
### JavaScript Enabled

If JavaScript was enabled in the device this observation was made from.

`xdm:javaScriptEnabled`
* is optional
* type: `boolean`
* defined in this schema

### xdm:javaScriptEnabled Type


`boolean`





## xdm:javaScriptVersion
### JavaScript Version

The version of JavaScript supported during the observation.

`xdm:javaScriptVersion`
* is optional
* type: `string`
* defined in this schema

### xdm:javaScriptVersion Type


`string`






## xdm:javaVersion
### Java Version

The version of Java supported during the observation.

`xdm:javaVersion`
* is optional
* type: `string`
* defined in this schema

### xdm:javaVersion Type


`string`






## xdm:name
### Name

The application or browser version.

`xdm:name`
* is optional
* type: `string`
* defined in this schema

### xdm:name Type


`string`






## xdm:quicktimeVersion
### Quicktime Version

The version of Apple Quicktime supported during the observation.

`xdm:quicktimeVersion`
* is optional
* type: `string`
* defined in this schema

### xdm:quicktimeVersion Type


`string`






## xdm:thirdPartyCookiesEnabled
### Allows Third-party Cookies

If third-party cookies were enabled when this observation was made.

`xdm:thirdPartyCookiesEnabled`
* is optional
* type: `boolean`
* defined in this schema

### xdm:thirdPartyCookiesEnabled Type


`boolean`





## xdm:userAgent
### User Agent

The HTTP User-Agent string from the client request.

`xdm:userAgent`
* is optional
* type: `string`
* defined in this schema

### xdm:userAgent Type


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
### Viewport Height

The vertical size (in pixels) of the window the experience was displayed inside. For a web view event, the browser viewport height.

`xdm:viewportHeight`
* is optional
* type: `integer`
* defined in this schema

### xdm:viewportHeight Type


`integer`
* minimum value: `0`






## xdm:viewportWidth
### Viewport Width

The horizontal size (in pixels) of the window the experience was displayed inside. For a web view event, the browser viewport width.

`xdm:viewportWidth`
* is optional
* type: `integer`
* defined in this schema

### xdm:viewportWidth Type


`integer`
* minimum value: `0`





