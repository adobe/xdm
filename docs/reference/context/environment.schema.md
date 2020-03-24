
# Environment Schema

```
https://ns.adobe.com/xdm/context/environment
```

Information about the surrounding situation the event observation occurred, specifically detailing transitory information such as the network or software versions. IMPORTANT: All values should be aligned with the [DeviceAtlas](https://deviceatlas.com) database licensed by Adobe. 

| [Abstract](../../abstract.md) | [Extensible](../../extensions.md) | [Status](../../status.md) | [Identifiable](../../id.md) | [Custom Properties](../../extensions.md) | [Additional Properties](../../extensions.md) | Defined In |
|-------------------------------|-----------------------------------|---------------------------|-----------------------------|------------------------------------------|----------------------------------------------|------------|
| Can be instantiated | Yes | Stabilizing | No | Forbidden | Permitted | [context/environment.schema.json](context/environment.schema.json) |
## Schema Hierarchy

* Environment `https://ns.adobe.com/xdm/context/environment`
  * [Extensibility base schema](../common/extensible.schema.md) `https://ns.adobe.com/xdm/common/extensible`
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
| [xdm:ISP](#xdmisp) | `string` | Optional | Environment (this schema) |
| [xdm:browserDetails](#xdmbrowserdetails) | Browser details | Optional | Environment (this schema) |
| [xdm:carrier](#xdmcarrier) | `string` | Optional | Environment (this schema) |
| [xdm:colorDepth](#xdmcolordepth) | `integer` | Optional | Environment (this schema) |
| [xdm:connectionType](#xdmconnectiontype) | `enum` | Optional | Environment (this schema) |
| [xdm:domain](#xdmdomain) | `string` | Optional | Environment (this schema) |
| [xdm:ipV4](#xdmipv4) | `string` | Optional | Environment (this schema) |
| [xdm:ipV6](#xdmipv6) | `string` | Optional | Environment (this schema) |
| [xdm:operatingSystem](#xdmoperatingsystem) | `string` | Optional | Environment (this schema) |
| [xdm:operatingSystemVendor](#xdmoperatingsystemvendor) | `string` | Optional | Environment (this schema) |
| [xdm:operatingSystemVersion](#xdmoperatingsystemversion) | `string` | Optional | Environment (this schema) |
| [xdm:type](#xdmtype) | `enum` | Optional | Environment (this schema) |
| [xdm:viewportHeight](#xdmviewportheight) | `integer` | Optional | Environment (this schema) |
| [xdm:viewportWidth](#xdmviewportwidth) | `integer` | Optional | Environment (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

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





