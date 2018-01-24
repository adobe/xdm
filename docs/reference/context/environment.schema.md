
# Environment Schema

```
https://ns.adobe.com/xdm/context/environment
```

Information about the surrounding situation the event observation occurred in, specifically detailing transitory information such as the network or software versions. &gt; IMPORTANT: All values should be aligned with the [DeviceAtlas](https://deviceatlas.com) database licensed by Adobe. 

| Abstract | Extensible | Custom Properties | Additional Properties | Defined In |
|----------|------------|-------------------|-----------------------|------------|
| Can be instantiated | Yes | Forbidden | Permitted | [context/environment.schema.json](context/environment.schema.json) |

## Schema Hierarchy

* Environment `https://ns.adobe.com/xdm/context/environment`
  * [Browser Details](browserdetails.schema.md) `https://ns.adobe.com/xdm/context/browserdetails`

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
  "xdm:connectionType": "cable"
}
```

# Environment Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [xdm:browserDetails](#xdmbrowserDetails) | Browser Details | Optional | Environment (this schema) |
| [xdm:carrier](#xdmcarrier) | `string` | Optional | Environment (this schema) |
| [xdm:colorDepth](#xdmcolorDepth) | `integer` | Optional | Environment (this schema) |
| [xdm:connectionType](#xdmconnectionType) | `enum` | Optional | Environment (this schema) |
| [xdm:ipV4](#xdmipV4) | `string` | Optional | Environment (this schema) |
| [xdm:ipV6](#xdmipV6) | `string` | Optional | Environment (this schema) |
| [xdm:operatingSystem](#xdmoperatingSystem) | `string` | Optional | Environment (this schema) |
| [xdm:operatingSystemVersion](#xdmoperatingSystemVersion) | `string` | Optional | Environment (this schema) |
| [xdm:type](#xdmtype) | `enum` | Optional | Environment (this schema) |
| [xdm:viewportHeight](#xdmviewportHeight) | `integer` | Optional | Environment (this schema) |
| [xdm:viewportWidth](#xdmviewportWidth) | `integer` | Optional | Environment (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## xdm:browserDetails
### Browser Details

The browser specific details such as brwoser name, version, javascript version, user agent string, accept language.

`xdm:browserDetails`
* is optional
* type: Browser Details
* defined in this schema

### xdm:browserDetails Type


* [Browser Details](browserdetails.schema.md) – `https://ns.adobe.com/xdm/context/browserdetails`





## xdm:carrier
### Mobile Network Carrier

A mobile network carrier or MNO, also known as a wireless service provider, wireless carrier, cellular company, or mobile network carrier, is a provider of services wireless communications that owns or controls all the elements necessary to sell and deliver services to an end user.

`xdm:carrier`
* is optional
* type: `string`
* defined in this schema

### xdm:carrier Type


`string`






## xdm:colorDepth
### Color Depth

The number of bits used for each color component of a single pixel.

`xdm:colorDepth`
* is optional
* type: `integer`
* defined in this schema

### xdm:colorDepth Type


`integer`
* minimum value: `0`






## xdm:connectionType
### Connection Type

Internet connection type.

`xdm:connectionType`
* is optional
* type: `enum`
* defined in this schema

The value of this property **must** be equal to one of the [known values below](#xdm:connectionType-known-values).

### xdm:connectionType Known Values
| Value | Description |
|-------|-------------|
| `dialup` | Dial-up |
| `isdn` | ISDN |
| `bisdn` | BISDN |
| `dsl` | DSL |
| `cable` | Cable |
| `wireless_wifi` | Wireless WIFI |
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
### Operating System

The name of the operating system used when the observation was made. This attribute should not contain any version information i.e. 10.5.3, but can contain *edition* designations such as &#39;Ultimate&#39;, or &#39;Professional&#39;.

`xdm:operatingSystem`
* is optional
* type: `string`
* defined in this schema

### xdm:operatingSystem Type


`string`






## xdm:operatingSystemVersion
### Operating System Version

The full version identifier for the operating system used when the observation was made. Versions are generally numerically composed, but may be in a vendor defined format.

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

The value of this property **must** be equal to one of the [known values below](#xdm:type-known-values).

### xdm:type Known Values
| Value | Description |
|-------|-------------|
| `browser` | Browser |
| `application` | Application |
| `iot` | IoT |
| `external` | External System |




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





