
# Card Actions Schema

```
https://ns.adobe.com/xdm/mixins/experienceevent-card-actions
```

Card action details such as card type as well as activation and lock status.

| [Abstract](../../../abstract.md) | [Extensible](../../../extensions.md) | [Status](../../../status.md) | [Identifiable](../../../id.md) | [Custom Properties](../../../extensions.md) | [Additional Properties](../../../extensions.md) | Defined In |
|----------------------------------|--------------------------------------|------------------------------|--------------------------------|---------------------------------------------|-------------------------------------------------|------------|
| Can be instantiated | Yes | Experimental | No | Forbidden | Permitted | [mixins/experience-event/experienceevent-card-actions.schema.json](mixins/experience-event/experienceevent-card-actions.schema.json) |

## Card Actions Example
```json
{
  "xdm:personalFinances": {
    "xdm:cardActivated": 1,
    "xdm:cardActivationStart": 1,
    "xdm:cardCancelled": 1,
    "xdm:cardControlsLocked": 1,
    "xdm:cardControlsUnlocked": 1,
    "xdm:cardLocked": 1,
    "xdm:cardOrderNew": 1,
    "xdm:cardOrderType": "new",
    "xdm:cardType": "credit",
    "xdm:cardUnlocked": 1
  }
}
```

# Card Actions Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [xdm:personalFinances](#xdmpersonalfinances) | `object` | Optional | Card Actions (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## xdm:personalFinances


`xdm:personalFinances`
* is optional
* type: `object`
* defined in this schema

### xdm:personalFinances Type


`object` with following properties:


| Property | Type | Required |
|----------|------|----------|
| `xdm:cardActivated`| integer | Optional |
| `xdm:cardActivationStart`| integer | Optional |
| `xdm:cardCancelled`| integer | Optional |
| `xdm:cardControlsLocked`| integer | Optional |
| `xdm:cardControlsUnlocked`| integer | Optional |
| `xdm:cardLocked`| integer | Optional |
| `xdm:cardOrderNew`| integer | Optional |
| `xdm:cardOrderType`| string | Optional |
| `xdm:cardType`| string | Optional |
| `xdm:cardUnlocked`| integer | Optional |



#### xdm:cardActivated
##### Card Activated Success

Tracks when a card has been successfully activated.

`xdm:cardActivated`
* is optional
* type: `integer`

##### xdm:cardActivated Type


`integer`








#### xdm:cardActivationStart
##### Card Activation Started

Tracks when a card activation process has been started.

`xdm:cardActivationStart`
* is optional
* type: `integer`

##### xdm:cardActivationStart Type


`integer`








#### xdm:cardCancelled
##### Card Cancelled

Tracks when a card has been cancelled.

`xdm:cardCancelled`
* is optional
* type: `integer`

##### xdm:cardCancelled Type


`integer`








#### xdm:cardControlsLocked
##### Card Controls Locked

Tracks when a card controls have been locked.

`xdm:cardControlsLocked`
* is optional
* type: `integer`

##### xdm:cardControlsLocked Type


`integer`








#### xdm:cardControlsUnlocked
##### Card Controls Unlocked

Tracks when a card controls have been unlocked.

`xdm:cardControlsUnlocked`
* is optional
* type: `integer`

##### xdm:cardControlsUnlocked Type


`integer`








#### xdm:cardLocked
##### Card Locked

Tracks when a card has been locked.

`xdm:cardLocked`
* is optional
* type: `integer`

##### xdm:cardLocked Type


`integer`








#### xdm:cardOrderNew
##### Order New Card

Tracks when a card has been requested.

`xdm:cardOrderNew`
* is optional
* type: `integer`

##### xdm:cardOrderNew Type


`integer`








#### xdm:cardOrderType
##### Card Order Type

Tracks the type of card order associated with a card order event.

`xdm:cardOrderType`
* is optional
* type: `enum`

The value of this property **must** be equal to one of the [known values below](#xdmpersonalfinances-known-values).

##### xdm:cardOrderType Known Values
| Value | Description |
|-------|-------------|
| `new` |  |
| `lost` |  |
| `stolen` |  |
| `never received` |  |
| `damaged` |  |






#### xdm:cardType
##### Card Type

Tracks the type of card associated with an event.

`xdm:cardType`
* is optional
* type: `enum`

The value of this property **must** be equal to one of the [known values below](#xdmpersonalfinances-known-values).

##### xdm:cardType Known Values
| Value | Description |
|-------|-------------|
| `credit` |  |
| `debit` |  |
| `prepaid` |  |
| `paypal` |  |
| `atm` |  |
| `virtual` |  |
| `hsa` |  |
| `fsa` |  |






#### xdm:cardUnlocked
##### Card Unlocked

Tracks when a card has been unlocked.

`xdm:cardUnlocked`
* is optional
* type: `integer`

##### xdm:cardUnlocked Type


`integer`










