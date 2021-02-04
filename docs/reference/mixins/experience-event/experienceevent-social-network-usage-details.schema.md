
# Social Network Usage Details Schema

```
https://ns.adobe.com/xdm/mixins/experienceevent-social-network-usage-details
```

Social network usage information such as share, content, and network. 

| [Abstract](../../../abstract.md) | [Extensible](../../../extensions.md) | [Status](../../../status.md) | [Identifiable](../../../id.md) | [Custom Properties](../../../extensions.md) | [Additional Properties](../../../extensions.md) | Defined In |
|----------------------------------|--------------------------------------|------------------------------|--------------------------------|---------------------------------------------|-------------------------------------------------|------------|
| Can be instantiated | Yes | Experimental | No | Forbidden | Permitted | [mixins/experience-event/experienceevent-social-network-usage-details.schema.json](mixins/experience-event/experienceevent-social-network-usage-details.schema.json) |

## Social Network Usage Details Example
```json
{
  "xdm:marketing ": {
    "xdm:socialContent": "Product Page",
    "xdm:socialFollow": 1,
    "xdm:socialNetwork": "LinkedIn",
    "xdm:socialShare": 1
  }
}
```

# Social Network Usage Details Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [xdm:marketing ](#xdmmarketing) | `object` | Optional | Social Network Usage Details (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## xdm:marketing 


`xdm:marketing `
* is optional
* type: `object`
* defined in this schema

### xdm:marketing  Type


`object` with following properties:


| Property | Type | Required |
|----------|------|----------|
| `xdm:socialContent`| string | Optional |
| `xdm:socialFollow`| integer | Optional |
| `xdm:socialMessage`| string | Optional |
| `xdm:socialNetwork`| string | Optional |
| `xdm:socialRecipient`| string | Optional |
| `xdm:socialShare`| integer | Optional |



#### xdm:socialContent
##### Social Share Content

Tracks the page/content/value of the item being shared.

`xdm:socialContent`
* is optional
* type: `string`

##### xdm:socialContent Type


`string`








#### xdm:socialFollow
##### Social Follow

Tracks when a social follow event has occurred.

`xdm:socialFollow`
* is optional
* type: `integer`

##### xdm:socialFollow Type


`integer`








#### xdm:socialMessage
##### Social Share Message

Message that the sender sent

`xdm:socialMessage`
* is optional
* type: `string`

##### xdm:socialMessage Type


`string`








#### xdm:socialNetwork
##### Social Share Network

Tracks the social sharing network in use, i.e. Facebook, Twitter, Instagram, etc.

`xdm:socialNetwork`
* is optional
* type: `string`

##### xdm:socialNetwork Type


`string`








#### xdm:socialRecipient
##### Social Share Recipient

Recipient of the sharing

`xdm:socialRecipient`
* is optional
* type: `string`

##### xdm:socialRecipient Type


`string`








#### xdm:socialShare
##### Social Share Event

Tracks when a social sharing event has occurred.

`xdm:socialShare`
* is optional
* type: `integer`

##### xdm:socialShare Type


`integer`










