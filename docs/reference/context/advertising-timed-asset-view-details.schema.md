
# Ad asset view details Schema

```
https://ns.adobe.com/xdm/context/advertising-timed-asset-view-details
```

View details for the ad playback captured by the experience event.

| [Abstract](../../abstract.md) | [Extensible](../../extensions.md) | [Status](../../status.md) | [Identifiable](../../id.md) | [Custom Properties](../../extensions.md) | [Additional Properties](../../extensions.md) | Defined In |
|-------------------------------|-----------------------------------|---------------------------|-----------------------------|------------------------------------------|----------------------------------------------|------------|
| Can be instantiated | Yes | Experimental | No | Forbidden | Permitted | [context/advertising-timed-asset-view-details.schema.json](context/advertising-timed-asset-view-details.schema.json) |
## Schema Hierarchy

* Ad asset view details `https://ns.adobe.com/xdm/context/advertising-timed-asset-view-details`
  * [Extensibility base schema](../common/extensible.schema.md) `https://ns.adobe.com/xdm/common/extensible`
  * [Ad break](advertising-break.schema.md) `https://ns.adobe.com/xdm/context/advertising-break`


## Ad asset view details Example
```json
{
  "xdm:playerName": "Acme Ad Player",
  "xdm:index": 1,
  "xdm:adBreak": {
    "@id": "https://data.adobe.io/entities/adbreak/2394509340-30453470347",
    "dc:title": "My Pod",
    "xdm:offset": 3
  }
}
```

# Ad asset view details Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [xdm:adBreak](#xdmadbreak) | Ad break | Optional | Ad asset view details (this schema) |
| [xdm:index](#xdmindex) | `integer` | Optional | Ad asset view details (this schema) |
| [xdm:playerName](#xdmplayername) | `string` | Optional | Ad asset view details (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## xdm:adBreak
### Ad break

Details about how a timed advertising is inserted into a timed media.

`xdm:adBreak`
* is optional
* type: Ad break
* defined in this schema

### xdm:adBreak Type


* [Ad break](advertising-break.schema.md) – `https://ns.adobe.com/xdm/context/advertising-break`





## xdm:index
### Ad index in pod

The index of the ad inside the parent ad break, for example, the first ad has index 0 and the second ad has index 1.

`xdm:index`
* is optional
* type: `integer`
* defined in this schema

### xdm:index Type


`integer`






## xdm:playerName
### Ad player name

The name of the player responsible for rendering the ad.

`xdm:playerName`
* is optional
* type: `string`
* defined in this schema

### xdm:playerName Type


`string`





