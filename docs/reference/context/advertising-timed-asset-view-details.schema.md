
# Ad Asset View Details Schema

```
https://ns.adobe.com/xdm/context/advertising-timed-asset-view-details
```

View details for the ad playback captured by the experience event.

| [Abstract](../../abstract.md) | [Extensible](../../extensions.md) | [Status](../../status.md) | [Identifiable](../../id.md) | [Custom Properties](../../extensions.md) | [Additional Properties](../../extensions.md) | Defined In |
|-------------------------------|-----------------------------------|---------------------------|-----------------------------|------------------------------------------|----------------------------------------------|------------|
| Can be instantiated | Yes | Experimental | No | Forbidden | Permitted | [context/advertising-timed-asset-view-details.schema.json](context/advertising-timed-asset-view-details.schema.json) |
## Schema Hierarchy

* Ad Asset View Details `https://ns.adobe.com/xdm/context/advertising-timed-asset-view-details`
  * [Extensibility base schema](../common/extensible.schema.md) `https://ns.adobe.com/xdm/common/extensible`
  * [Ad Break](advertising-break.schema.md) `https://ns.adobe.com/xdm/context/advertising-break`


## Ad Asset View Details Example
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

# Ad Asset View Details Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [xdm:adBreak](#xdmadbreak) | Ad Break | Optional | Ad Asset View Details (this schema) |
| [xdm:index](#xdmindex) | `integer` | Optional | Ad Asset View Details (this schema) |
| [xdm:playerName](#xdmplayername) | `string` | Optional | Ad Asset View Details (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## xdm:adBreak
### Ad Break

Details about how a timed advertising is being inserted into a timed media.

`xdm:adBreak`
* is optional
* type: Ad Break
* defined in this schema

### xdm:adBreak Type


* [Ad Break](advertising-break.schema.md) – `https://ns.adobe.com/xdm/context/advertising-break`





## xdm:index
### Ad Index in Pod

The index of the ad inside the parent ad break. The first ad has index 0, the second 1, and so on.

`xdm:index`
* is optional
* type: `integer`
* defined in this schema

### xdm:index Type


`integer`






## xdm:playerName
### Ad Player Name

The name of the player responsible for rendering the ad.

`xdm:playerName`
* is optional
* type: `string`
* defined in this schema

### xdm:playerName Type


`string`





