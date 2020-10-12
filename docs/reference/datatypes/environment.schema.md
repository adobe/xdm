
# Environment Schema

```
https://ns.adobe.com/xdm/context/environment
```

Information about the surrounding situation the event observation occurred, specifically detailing transitory information such as the network or software versions. IMPORTANT: All values should be aligned with the [DeviceAtlas](https://deviceatlas.com) database licensed by Adobe. 

| [Abstract](../../abstract.md) | [Extensible](../../extensions.md) | [Status](../../status.md) | [Identifiable](../../id.md) | [Custom Properties](../../extensions.md) | [Additional Properties](../../extensions.md) | Defined In |
|-------------------------------|-----------------------------------|---------------------------|-----------------------------|------------------------------------------|----------------------------------------------|------------|
| Can be instantiated | Yes | Stable | No | Forbidden | Permitted | [datatypes/environment.schema.json](datatypes/environment.schema.json) |
## Schema Hierarchy

* Environment `https://ns.adobe.com/xdm/context/environment`
  * [Extensibility base schema](extensible.schema.md) `https://ns.adobe.com/xdm/common/extensible`
  * [Browser details](browserdetails.schema.md) `https://ns.adobe.com/xdm/context/browserdetails`


## Environment Example
```json
{
  "xdm:type": "browser",
  "xdm:browserDetails": {
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
  },
  "xdm:operatingSystem": "MAC OS",
  "xdm:operatingSystemVersion": "10.13",
  "xdm:operatingSystemVendor": "Apple",
  "xdm:connectionType": "cable",
  "xdm:domain": "verizon.com",
  "xdm:ISP": "Verizon"
}
```

# Environment Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [dc:language](#dclanguage) | `string` | Optional | Environment (this schema) |
| [xdm:ISP](#xdmisp) | `string` | Optional | Environment (this schema) |
| [xdm:browserDetails](#xdmbrowserdetails) | Browser details | Optional | Environment (this schema) |
| [xdm:carrier](#xdmcarrier) | `string` | Optional | Environment (this schema) |
| [xdm:colorDepth](#xdmcolordepth) | `integer` | Optional | Environment (this schema) |
| [xdm:connectionType](#xdmconnectiontype) | `enum` | Optional | Environment (this schema) |
| [xdm:domain](#xdmdomain) | `string` | Optional | Environment (this schema) |
| [xdm:duration](#xdmduration) | `integer` | Optional | Environment (this schema) |
| [xdm:ipV4](#xdmipv4) | `string` | Optional | Environment (this schema) |
| [xdm:ipV6](#xdmipv6) | `string` | Optional | Environment (this schema) |
| [xdm:operatingSystem](#xdmoperatingsystem) | `string` | Optional | Environment (this schema) |
| [xdm:operatingSystemVendor](#xdmoperatingsystemvendor) | `string` | Optional | Environment (this schema) |
| [xdm:operatingSystemVersion](#xdmoperatingsystemversion) | `string` | Optional | Environment (this schema) |
| [xdm:previousScreen](#xdmpreviousscreen) | `string` | Optional | Environment (this schema) |
| [xdm:type](#xdmtype) | `enum` | Optional | Environment (this schema) |
| [xdm:viewedScreen](#xdmviewedscreen) | `string` | Optional | Environment (this schema) |
| [xdm:viewportHeight](#xdmviewportheight) | `integer` | Optional | Environment (this schema) |
| [xdm:viewportWidth](#xdmviewportwidth) | `integer` | Optional | Environment (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## dc:language
### Language

The language of the environment to represent the user's linguistic, geographical, or cultural preferences for data presentation.
Languages are specified in language code as defined in [IETF RFC 3066](https://www.ietf.org/rfc/rfc3066.txt), which is part of BCP 47, which is used elsewhere in XDM.

`dc:language`
* is optional
* type: `string`
* defined in this schema

### dc:language Type


`string`


All instances must conform to this regular expression 
```regex
^(((([A-Za-z]{2,3}(-([A-Za-z]{3}(-[A-Za-z]{3}){0,2}))?)|[A-Za-z]{4}|[A-Za-z]{5,8})(-([A-Za-z]{4}))?(-([A-Za-z]{2}|[0-9]{3}))?(-([A-Za-z0-9]{5,8}|[0-9][A-Za-z0-9]{3}))*(-([0-9A-WY-Za-wy-z](-[A-Za-z0-9]{2,8})+))*(-(x(-[A-Za-z0-9]{1,8})+))?)|(x(-[A-Za-z0-9]{1,8})+)|((en-GB-oed|i-ami|i-bnn|i-default|i-enochian|i-hak|i-klingon|i-lux|i-mingo|i-navajo|i-pwn|i-tao|i-tay|i-tsu|sgn-BE-FR|sgn-BE-NL|sgn-CH-DE)|(art-lojban|cel-gaulish|no-bok|no-nyn|zh-guoyu|zh-hakka|zh-min|zh-min-nan|zh-xiang)))$
```

* test example: [en-US](https://regexr.com/?expression=%5E((((%5BA-Za-z%5D%7B2%2C3%7D(-(%5BA-Za-z%5D%7B3%7D(-%5BA-Za-z%5D%7B3%7D)%7B0%2C2%7D))%3F)%7C%5BA-Za-z%5D%7B4%7D%7C%5BA-Za-z%5D%7B5%2C8%7D)(-(%5BA-Za-z%5D%7B4%7D))%3F(-(%5BA-Za-z%5D%7B2%7D%7C%5B0-9%5D%7B3%7D))%3F(-(%5BA-Za-z0-9%5D%7B5%2C8%7D%7C%5B0-9%5D%5BA-Za-z0-9%5D%7B3%7D))*(-(%5B0-9A-WY-Za-wy-z%5D(-%5BA-Za-z0-9%5D%7B2%2C8%7D)%2B))*(-(x(-%5BA-Za-z0-9%5D%7B1%2C8%7D)%2B))%3F)%7C(x(-%5BA-Za-z0-9%5D%7B1%2C8%7D)%2B)%7C((en-GB-oed%7Ci-ami%7Ci-bnn%7Ci-default%7Ci-enochian%7Ci-hak%7Ci-klingon%7Ci-lux%7Ci-mingo%7Ci-navajo%7Ci-pwn%7Ci-tao%7Ci-tay%7Ci-tsu%7Csgn-BE-FR%7Csgn-BE-NL%7Csgn-CH-DE)%7C(art-lojban%7Ccel-gaulish%7Cno-bok%7Cno-nyn%7Czh-guoyu%7Czh-hakka%7Czh-min%7Czh-min-nan%7Czh-xiang)))%24&text=en-US)
* test example: [pt-BR](https://regexr.com/?expression=%5E((((%5BA-Za-z%5D%7B2%2C3%7D(-(%5BA-Za-z%5D%7B3%7D(-%5BA-Za-z%5D%7B3%7D)%7B0%2C2%7D))%3F)%7C%5BA-Za-z%5D%7B4%7D%7C%5BA-Za-z%5D%7B5%2C8%7D)(-(%5BA-Za-z%5D%7B4%7D))%3F(-(%5BA-Za-z%5D%7B2%7D%7C%5B0-9%5D%7B3%7D))%3F(-(%5BA-Za-z0-9%5D%7B5%2C8%7D%7C%5B0-9%5D%5BA-Za-z0-9%5D%7B3%7D))*(-(%5B0-9A-WY-Za-wy-z%5D(-%5BA-Za-z0-9%5D%7B2%2C8%7D)%2B))*(-(x(-%5BA-Za-z0-9%5D%7B1%2C8%7D)%2B))%3F)%7C(x(-%5BA-Za-z0-9%5D%7B1%2C8%7D)%2B)%7C((en-GB-oed%7Ci-ami%7Ci-bnn%7Ci-default%7Ci-enochian%7Ci-hak%7Ci-klingon%7Ci-lux%7Ci-mingo%7Ci-navajo%7Ci-pwn%7Ci-tao%7Ci-tay%7Ci-tsu%7Csgn-BE-FR%7Csgn-BE-NL%7Csgn-CH-DE)%7C(art-lojban%7Ccel-gaulish%7Cno-bok%7Cno-nyn%7Czh-guoyu%7Czh-hakka%7Czh-min%7Czh-min-nan%7Czh-xiang)))%24&text=pt-BR)
* test example: [es-ES](https://regexr.com/?expression=%5E((((%5BA-Za-z%5D%7B2%2C3%7D(-(%5BA-Za-z%5D%7B3%7D(-%5BA-Za-z%5D%7B3%7D)%7B0%2C2%7D))%3F)%7C%5BA-Za-z%5D%7B4%7D%7C%5BA-Za-z%5D%7B5%2C8%7D)(-(%5BA-Za-z%5D%7B4%7D))%3F(-(%5BA-Za-z%5D%7B2%7D%7C%5B0-9%5D%7B3%7D))%3F(-(%5BA-Za-z0-9%5D%7B5%2C8%7D%7C%5B0-9%5D%5BA-Za-z0-9%5D%7B3%7D))*(-(%5B0-9A-WY-Za-wy-z%5D(-%5BA-Za-z0-9%5D%7B2%2C8%7D)%2B))*(-(x(-%5BA-Za-z0-9%5D%7B1%2C8%7D)%2B))%3F)%7C(x(-%5BA-Za-z0-9%5D%7B1%2C8%7D)%2B)%7C((en-GB-oed%7Ci-ami%7Ci-bnn%7Ci-default%7Ci-enochian%7Ci-hak%7Ci-klingon%7Ci-lux%7Ci-mingo%7Ci-navajo%7Ci-pwn%7Ci-tao%7Ci-tay%7Ci-tsu%7Csgn-BE-FR%7Csgn-BE-NL%7Csgn-CH-DE)%7C(art-lojban%7Ccel-gaulish%7Cno-bok%7Cno-nyn%7Czh-guoyu%7Czh-hakka%7Czh-min%7Czh-min-nan%7Czh-xiang)))%24&text=es-ES)




### dc:language Examples

```json
"en-US"
```

```json
"pt-BR"
```

```json
"es-ES"
```



## xdm:ISP
### Internet service provider

The name of the user's internet service provider.

`xdm:ISP`
* is optional
* type: `string`
* defined in this schema

### xdm:ISP Type


`string`






## xdm:browserDetails
### Browser details

The browser specific details such as browser name, version, javascript version, user agent string, and accept language.

`xdm:browserDetails`
* is optional
* type: Browser details
* defined in this schema

### xdm:browserDetails Type


* [Browser details](browserdetails.schema.md) – `https://ns.adobe.com/xdm/context/browserdetails`





## xdm:carrier
### Mobile network carrier

A mobile network carrier or MNO, also known as a wireless service provider, wireless carrier, cellular company, or mobile network carrier, is a provider of services wireless communications that owns or controls all the elements necessary to sell and deliver services to an end user.

`xdm:carrier`
* is optional
* type: `string`
* defined in this schema

### xdm:carrier Type


`string`






## xdm:colorDepth
### Color depth

The number of bits used for each color component of a single pixel.

`xdm:colorDepth`
* is optional
* type: `integer`
* defined in this schema

### xdm:colorDepth Type


`integer`
* minimum value: `0`






## xdm:connectionType
### Connection type

Internet connection type.

`xdm:connectionType`
* is optional
* type: `enum`
* defined in this schema

The value of this property **must** be equal to one of the [known values below](#xdmconnectiontype-known-values).

### xdm:connectionType Known Values
| Value | Description |
|-------|-------------|
| `dialup` | Dial-up |
| `isdn` | ISDN |
| `bisdn` | BISDN |
| `dsl` | DSL |
| `cable` | Cable |
| `wireless_wifi` | Wireless wifi |
| `mobile` | Mobile |
| `mobile_edge` | Mobile Edge |
| `mobile_gprs` | Mobile GPRS |
| `mobile_2g` | Mobile 2G |
| `mobile_3g` | Mobile 3G |
| `mobile_lte` | Mobile LTE |
| `t1` | T1 |
| `t3` | T3 |
| `oc3` | OC3 |
| `lan` | LAN |
| `modem` | Modem |




## xdm:domain
### Domain

The domain of the users ISP.

`xdm:domain`
* is optional
* type: `string`
* defined in this schema

### xdm:domain Type


`string`






## xdm:duration
### Duration

The number of milliseconds that the user was on the screen.

`xdm:duration`
* is optional
* type: `integer`
* defined in this schema

### xdm:duration Type


`integer`
* minimum value: `0`






## xdm:ipV4
### IPv4

The numerical label assigned to a device participating in a computer network that uses the Internet Protocol for communication. 

`xdm:ipV4`
* is optional
* type: `string`
* defined in this schema

### xdm:ipV4 Type


`string`
* format: `ipv4` – IP (v4) address (according to [RFC 2673, section 3.2](https://tools.ietf.org/html/rfc2673))






## xdm:ipV6
### IPv6

The numerical label assigned to a device participating in a computer network that uses the Internet Protocol for communication. 

`xdm:ipV6`
* is optional
* type: `string`
* defined in this schema

### xdm:ipV6 Type


`string`
* format: `ipv6` – IP (v6) address (according to [RFC 4291, section 2.2](https://tools.ietf.org/html/rfc4291))






## xdm:operatingSystem
### Operating system

The name of the operating system used when the observation was made. The attribute should not contain any version information such as '10.5.3', but instead contain 'edition' designations such as 'Ultimate' or 'Professional'.

`xdm:operatingSystem`
* is optional
* type: `string`
* defined in this schema

### xdm:operatingSystem Type


`string`






## xdm:operatingSystemVendor
### Operating system vendor

The name of the operating system vendor used when the observation was made.

`xdm:operatingSystemVendor`
* is optional
* type: `string`
* defined in this schema

### xdm:operatingSystemVendor Type


`string`






## xdm:operatingSystemVersion
### Operating system version

The full version identifier for the operating system used when the observation was made. Versions are generally numerically composed but may be in a vendor defined format.

`xdm:operatingSystemVersion`
* is optional
* type: `string`
* defined in this schema

### xdm:operatingSystemVersion Type


`string`






## xdm:previousScreen
### Previous Screen

The frinedly name assigned to the screen the user was on prior to the viewedScreen.

`xdm:previousScreen`
* is optional
* type: `string`
* defined in this schema

### xdm:previousScreen Type


`string`






## xdm:type
### Type

The type of the application environment.

`xdm:type`
* is optional
* type: `enum`
* defined in this schema

The value of this property **must** be equal to one of the [known values below](#xdmtype-known-values).

### xdm:type Known Values
| Value | Description |
|-------|-------------|
| `browser` | Browser |
| `application` | Application |
| `iot` | Internet of things |
| `external` | External system |
| `widget` | Application extension |




## xdm:viewedScreen
### Viewed Screen

The friendly name assigned to the screen that the user was on.

`xdm:viewedScreen`
* is optional
* type: `string`
* defined in this schema

### xdm:viewedScreen Type


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





