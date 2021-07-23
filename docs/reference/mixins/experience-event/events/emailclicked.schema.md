
# Email Clicked Schema

```
https://ns.adobe.com/xdm/mixins/events/emailclicked
```

Use to capture details when a person clicks a link in a marketing email.

| [Abstract](../../../../abstract.md) | [Extensible](../../../../extensions.md) | [Status](../../../../status.md) | [Identifiable](../../../../id.md) | [Custom Properties](../../../../extensions.md) | [Additional Properties](../../../../extensions.md) | Defined In |
|-------------------------------------|-----------------------------------------|---------------------------------|-----------------------------------|------------------------------------------------|----------------------------------------------------|------------|
| Can be instantiated | Yes | Experimental | No | Forbidden | Permitted | [mixins/experience-event/events/emailclicked.schema.json](mixins/experience-event/events/emailclicked.schema.json) |

## Email Clicked Example
```json
{}
```

# Email Clicked Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [xdm:device](#xdmdevice) | `object` | Optional | Email Clicked (this schema) |
| [xdm:directMarketing](#xdmdirectmarketing) | `object` | Optional | Email Clicked (this schema) |
| [xdm:environment](#xdmenvironment) | `object` | Optional | Email Clicked (this schema) |
| [xdm:web](#xdmweb) | `object` | Optional | Email Clicked (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## xdm:device
### Device

`xdm:device`
* is optional
* type: `object`
* defined in this schema

### xdm:device Type


`object` with following properties:


| Property | Type | Required |
|----------|------|----------|
| `xdm:isMobileDevice`| boolean | Optional |
| `xdm:model`| string | Optional |



#### xdm:isMobileDevice
##### Is Mobile Device

Boolean that indicates if device used was a mobile device.

`xdm:isMobileDevice`
* is optional
* type: `boolean`

##### xdm:isMobileDevice Type


`boolean`







#### xdm:model
##### Model

The name of the model for the device. This is the common, human-readable, or marketing name for the device. For example, the 'iPhone 6S' is a particular model of mobile phone.

`xdm:model`
* is optional
* type: `string`

##### xdm:model Type


`string`











## xdm:directMarketing
### Direct marketing

`xdm:directMarketing`
* is optional
* type: `object`
* defined in this schema

### xdm:directMarketing Type


`object` with following properties:


| Property | Type | Required |
|----------|------|----------|
| `xdm:linkURL`| string | Optional |
| `xdm:mailingID`| string | Optional |
| `xdm:mailingName`| string | Optional |
| `xdm:testVariantID`| string | Optional |
| `xdm:testVariantName`| string | Optional |



#### xdm:linkURL
##### Link URL

URL of the link clicked.

`xdm:linkURL`
* is optional
* type: `string`

##### xdm:linkURL Type


`string`








#### xdm:mailingID
##### Mailing ID

Unique ID of the email asset.

`xdm:mailingID`
* is optional
* type: `string`

##### xdm:mailingID Type


`string`








#### xdm:mailingName
##### Mailing Name

Friendly name of the email asset.

`xdm:mailingName`
* is optional
* type: `string`

##### xdm:mailingName Type


`string`








#### xdm:testVariantID
##### Test Variant ID

Unique ID of the test variant of the email asset.

`xdm:testVariantID`
* is optional
* type: `string`

##### xdm:testVariantID Type


`string`








#### xdm:testVariantName
##### Test Variant Name

Friendly name of the test variant of the email asset.

`xdm:testVariantName`
* is optional
* type: `string`

##### xdm:testVariantName Type


`string`











## xdm:environment
### Environment

The information related to web page and link of the ExperienceEvent.

`xdm:environment`
* is optional
* type: `object`
* defined in this schema

### xdm:environment Type


`object` with following properties:


| Property | Type | Required |
|----------|------|----------|
| `xdm:browserDetails`| object | Optional |
| `xdm:operatingSystem`| string | Optional |



#### xdm:browserDetails
##### Browser details

The browser specific details such as browser name, version, javascript version, user agent string, and accept language.

`xdm:browserDetails`
* is optional
* type: `object`

##### xdm:browserDetails Type

Unknown type `object`.

```json
{
  "title": "Browser details",
  "type": "object",
  "description": "The browser specific details such as browser name, version, javascript version, user agent string, and accept language.",
  "properties": {
    "xdm:userAgent": {
      "title": "User agent",
      "type": "string",
      "description": "The HTTP user-agent string from the client request."
    }
  },
  "simpletype": "`object`"
}
```







#### xdm:operatingSystem
##### Operating system

The name of the operating system used when the observation was made. The attribute should not contain any version information such as '10.5.3', but instead contain 'edition' designations such as 'Ultimate' or 'Professional'.

`xdm:operatingSystem`
* is optional
* type: `string`

##### xdm:operatingSystem Type


`string`











## xdm:web
### Web

Link clicks, web page details, referrer information, and browser details.

`xdm:web`
* is optional
* type: `object`
* defined in this schema

### xdm:web Type


`object` with following properties:


| Property | Type | Required |
|----------|------|----------|
| `xdm:webInteraction`| object | Optional |



#### xdm:webInteraction
##### Web Interaction

undefined

`xdm:webInteraction`
* is optional
* type: `object`

##### xdm:webInteraction Type

Unknown type `object`.

```json
{
  "title": "Web Interaction",
  "type": "object",
  "properties": {
    "xdm:linkID": {
      "title": "Link ID",
      "type": "string",
      "description": "Optional user-entered value as the `id`  of the link element in the HTML of the email."
    }
  },
  "simpletype": "`object`"
}
```









