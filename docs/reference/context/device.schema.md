
# Device Schema

```
https://ns.adobe.com/xdm/context/device
```

An identified device that is an application or browser instance that is trackable across sessions, normally by cookies.

| Abstract | Extensible | Status | Identifiable | Custom Properties | Additional Properties | Defined In |
|----------|------------|--------|--------------|-------------------|-----------------------|------------|
| Can be instantiated | Yes | Stabilizing | No | Forbidden | Permitted | [context/device.schema.json](context/device.schema.json) |

## Device Example
```json
{
  "xdm:typeID": "TypeIdentifier-111",
  "xdm:typeIDService": "https://ns.adobe.com/xdm/external/deviceatlas",
  "xdm:type": "mobile",
  "xdm:manufacturer": "Apple",
  "xdm:model": "iPhone 6",
  "xdm:modelNumber": "A1586",
  "xdm:screenHeight": 667,
  "xdm:screenWidth": 375,
  "xdm:colorDepth": 16777216
}
```

# Device Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [xdm:colorDepth](#xdmcolordepth) | `integer` | Optional | Device (this schema) |
| [xdm:manufacturer](#xdmmanufacturer) | `string` | Optional | Device (this schema) |
| [xdm:model](#xdmmodel) | `string` | Optional | Device (this schema) |
| [xdm:modelNumber](#xdmmodelnumber) | `string` | Optional | Device (this schema) |
| [xdm:screenHeight](#xdmscreenheight) | `integer` | Optional | Device (this schema) |
| [xdm:screenWidth](#xdmscreenwidth) | `integer` | Optional | Device (this schema) |
| [xdm:type](#xdmtype) | `string` | Optional | Device (this schema) |
| [xdm:typeID](#xdmtypeid) | `string` | Optional | Device (this schema) |
| [xdm:typeIDService](#xdmtypeidservice) | `string` | Optional | Device (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## xdm:colorDepth
### Color Depth

The number of colors the display is able to represent.

`xdm:colorDepth`
* is optional
* type: `integer`
* defined in this schema

### xdm:colorDepth Type


`integer`






## xdm:manufacturer
### Manufacturer

The name of the organization who owns the design and creation of the Device. For example, 'Apple' is the manufacturer of the iPhone.

`xdm:manufacturer`
* is optional
* type: `string`
* defined in this schema

### xdm:manufacturer Type


`string`






## xdm:model
### Model

The name of the model for the Device. This is the common, human-readable or marketing name for the Device. The 'iPhone 6S' is a particular model of mobile phone.

`xdm:model`
* is optional
* type: `string`
* defined in this schema

### xdm:model Type


`string`






## xdm:modelNumber
### Model Number

The unique model number designation assigned by the manufacturer for this Device. Model numbers are not versions, but unique identifiers that identify a particular model configuration. While the model for a particular phone might be 'iPhone 6S' the model number would be 'A1633', or 'A1634' based on configuration at the time of sale.

`xdm:modelNumber`
* is optional
* type: `string`
* defined in this schema

### xdm:modelNumber Type


`string`






## xdm:screenHeight
### Screen Height

The number of veritcal pixels of the device's active display in its default orientation.

`xdm:screenHeight`
* is optional
* type: `integer`
* defined in this schema

### xdm:screenHeight Type


`integer`






## xdm:screenWidth
### Screen Width

The number of horizontal pixels of the device's active display in its default orientation.

`xdm:screenWidth`
* is optional
* type: `integer`
* defined in this schema

### xdm:screenWidth Type


`integer`






## xdm:type
### Type

Type of device being tracked.

`xdm:type`
* is optional
* type: `string`
* defined in this schema

### xdm:type Type


`string`



### xdm:type Known Values
| Value | Description |
|-------|-------------|
| `mobile` | Mobile |
| `tablet` | Tablet |
| `desktop` | Desktop |
| `ereader` | E-Reader |
| `gaming` | Gaming Console |
| `television` | Television |
| `settop` | Set-top Box |
| `mediaplayer` | Media Player |




## xdm:typeID
### Type Identifier

An identifier for the device. This may be an identifier from Device Atlas or another service that identifies the hardware that is being used.

`xdm:typeID`
* is optional
* type: `string`
* defined in this schema

### xdm:typeID Type


`string`






## xdm:typeIDService
### Type Identifier Service

The namespace of the service that is used to identify the device type.

`xdm:typeIDService`
* is optional
* type: `string`
* defined in this schema

### xdm:typeIDService Type


`string`
* format: `uri` – Uniformous Resource Identifier (according to [RFC3986](http://tools.ietf.org/html/rfc3986))



### xdm:typeIDService Known Values
| Value | Description |
|-------|-------------|
| `https://ns.adobe.com/xdm/external/deviceatlas` | Device Atlas |
| `https://ns.adobe.com/xdm/external/adobecampaign` | Adobe Campaign |



