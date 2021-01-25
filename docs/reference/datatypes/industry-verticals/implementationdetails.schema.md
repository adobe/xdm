
# Implementation details Schema

```
https://ns.adobe.com/xdm/context/implementationdetails
```

Details about the SDK, library, or service used in an application or web page implementation of a service.

| [Abstract](../../../abstract.md) | [Extensible](../../../extensions.md) | [Status](../../../status.md) | [Identifiable](../../../id.md) | [Custom Properties](../../../extensions.md) | [Additional Properties](../../../extensions.md) | Defined In |
|----------------------------------|--------------------------------------|------------------------------|--------------------------------|---------------------------------------------|-------------------------------------------------|------------|
| Can be instantiated | Yes | Stable | No | Forbidden | Permitted | [datatypes/industry-verticals/implementationdetails.schema.json](datatypes/industry-verticals/implementationdetails.schema.json) |
## Schema Hierarchy

* Implementation details `https://ns.adobe.com/xdm/context/implementationdetails`
  * [Extensibility base schema](../extensible.schema.md) `https://ns.adobe.com/xdm/common/extensible`


## Implementation details Example
```json
{
  "xdm:name": "https://ns.adobe.com/experience/analytics/appmeasurement",
  "xdm:version": "2.7.0",
  "xdm:environment": "browser"
}
```

# Implementation details Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [xdm:environment](#xdmenvironment) | `enum` | Optional | Implementation details (this schema) |
| [xdm:name](#xdmname) | `string` | Optional | Implementation details (this schema) |
| [xdm:version](#xdmversion) | `string` | Optional | Implementation details (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## xdm:environment
### Environment

The environment of the implementation

`xdm:environment`
* is optional
* type: `enum`
* defined in this schema

The value of this property **must** be equal to one of the [known values below](#xdmenvironment-known-values).

### xdm:environment Known Values
| Value | Description |
|-------|-------------|
| `browser` | Web Browser |
| `app` | Application |
| `server` | Server |
| `iot` | Internet of Things Device |




## xdm:name
### Name

SDK or endpoint identifier. All SDKs or endpoints are identified through a URI, including extensions.

`xdm:name`
* is optional
* type: `string`
* defined in this schema

### xdm:name Type


`string`
* format: `uri` – Uniformous Resource Identifier (according to [RFC3986](http://tools.ietf.org/html/rfc3986))



### xdm:name Known Values
| Value | Description |
|-------|-------------|
| `https://ns.adobe.com/experience/analytics/scode` | Adobe Analytics sCode |
| `https://ns.adobe.com/experience/analytics/appmeasurement` | Adobe app measurement |
| `https://ns.adobe.com/experience/analytics/mbox` | Adobe Target mBox |
| `https://ns.adobe.com/experience/visitorapi` | Adobe Visitor service |
| `https://ns.adobe.com/experience/adcloud/viewability` | Adobe Advertising Cloud viewability |
| `https://ns.adobe.com/experience/alloy` | Adobe Experience Platform Web SDK |
| `https://ns.adobe.com/experience/alloy/reactor` | Adobe Experience Platform Web SDK Launch Extension |




## xdm:version
### Version

The version identifier of the API, e.g h.18.

`xdm:version`
* is optional
* type: `string`
* defined in this schema

### xdm:version Type


`string`





