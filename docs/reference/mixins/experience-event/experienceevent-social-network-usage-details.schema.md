
# Social Network Usage Details Schema

```
https://ns.adobe.com/xdm/mixins/experienceevent-social-network-usage-details
```

Social network usage information such as share, content, and network.

| [Abstract](../../../abstract.md) | [Extensible](../../../extensions.md) | [Status](../../../status.md) | [Identifiable](../../../id.md) | [Custom Properties](../../../extensions.md) | [Additional Properties](../../../extensions.md) | Defined In |
|----------------------------------|--------------------------------------|------------------------------|--------------------------------|---------------------------------------------|-------------------------------------------------|------------|
| Can be instantiated | Yes | Stable | No | Forbidden | Permitted | [mixins/experience-event/experienceevent-social-network-usage-details.schema.json](mixins/experience-event/experienceevent-social-network-usage-details.schema.json) |

## Social Network Usage Details Example
```json
{
  "xdm:marketing ": {
    "xdm:sharedContent": "Product Page",
    "xdm:follow": 1,
    "xdm:network": "LinkedIn",
    "xdm:share": 1
  }
}
```

# Social Network Usage Details Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [xdm:socialMarketing ](#xdmsocialmarketing) | `object` | Optional | Social Network Usage Details (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## xdm:socialMarketing 

Tracks interactions related to social marketing sites, such as shares and follows.

`xdm:socialMarketing `
* is optional
* type: `object`
* defined in this schema

### xdm:socialMarketing  Type


`object` with following properties:


| Property | Type | Required |
|----------|------|----------|
| `xdm:follow`| integer | Optional |
| `xdm:interactions`| integer | Optional |
| `xdm:network`| string | Optional |
| `xdm:recipient`| string | Optional |
| `xdm:share`| integer | Optional |
| `xdm:sharedContent`| string | Optional |
| `xdm:sharedMessage`| string | Optional |
| `xdm:target`| string | Optional |



#### xdm:follow
##### Follow

Tracks when a social follow event has occurred.

`xdm:follow`
* is optional
* type: `integer`

##### xdm:follow Type


`integer`








#### xdm:interactions
##### Interactions

The total number of social interactions.

`xdm:interactions`
* is optional
* type: `integer`

##### xdm:interactions Type


`integer`








#### xdm:network
##### Network

Tracks the social sharing network in use, i.e. Facebook, Twitter, Instagram, etc.

`xdm:network`
* is optional
* type: `string`

##### xdm:network Type


`string`








#### xdm:recipient
##### Recipient

Recipient of the shared content

`xdm:recipient`
* is optional
* type: `string`

##### xdm:recipient Type


`string`








#### xdm:share
##### Share

Tracks when a social sharing event has occurred.

`xdm:share`
* is optional
* type: `integer`

##### xdm:share Type


`integer`








#### xdm:sharedContent
##### Shared Content

Tracks the page/url/content/value of the item being shared.

`xdm:sharedContent`
* is optional
* type: `string`

##### xdm:sharedContent Type


`string`








#### xdm:sharedMessage
##### Shared Message

Message that the sender sent

`xdm:sharedMessage`
* is optional
* type: `string`

##### xdm:sharedMessage Type


`string`








#### xdm:target
##### Target

For social interactions, this is the URL (or resource) which receives the social network action.

`xdm:target`
* is optional
* type: `string`

##### xdm:target Type


`string`










