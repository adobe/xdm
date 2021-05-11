
# Card Actions Schema

```
https://ns.adobe.com/xdm/mixins/experienceevent-card-actions
```

Card action details such as card type as well as activation and lock status.

| [Abstract](../../../abstract.md) | [Extensible](../../../extensions.md) | [Status](../../../status.md) | [Identifiable](../../../id.md) | [Custom Properties](../../../extensions.md) | [Additional Properties](../../../extensions.md) | Defined In |
|----------------------------------|--------------------------------------|------------------------------|--------------------------------|---------------------------------------------|-------------------------------------------------|------------|
| Can be instantiated | Yes | Stable | No | Forbidden | Permitted | [mixins/experience-event/experienceevent-card-actions.schema.json](mixins/experience-event/experienceevent-card-actions.schema.json) |

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

Financial details including transactions, accounts, and applications.

`xdm:personalFinances`
* is optional
* type: `object`
* defined in this schema

### xdm:personalFinances Type


`object` with following properties:


| Property | Type | Required |
|----------|------|----------|
| `xdm:cardActions`| object | Optional |



#### xdm:cardActions

undefined

`xdm:cardActions`
* is optional
* type: `object`

##### xdm:cardActions Type

Unknown type `object`.

```json
{
  "type": "object",
  "properties": {
    "xdm:cardID": {
      "title": "Card ID",
      "type": "string",
      "description": "Tracks the identifier for the card being activated.  This might be different from the card number."
    },
    "xdm:cardActivated": {
      "title": "Card Activated Success",
      "type": "integer",
      "description": "Tracks when a card has been successfully activated."
    },
    "xdm:cardActivationStart": {
      "title": "Card Activation Started",
      "type": "integer",
      "description": "Tracks when a card activation process has been started."
    },
    "xdm:cardCancelled": {
      "title": "Card Cancelled",
      "type": "integer",
      "description": "Tracks when a card has been cancelled."
    },
    "xdm:cardControlsLocked": {
      "title": "Card Controls Locked",
      "type": "integer",
      "description": "Tracks when a card controls have been locked."
    },
    "xdm:cardControlsUnlocked": {
      "title": "Card Controls Unlocked",
      "type": "integer",
      "description": "Tracks when a card controls have been unlocked."
    },
    "xdm:cardLocked": {
      "title": "Card Locked",
      "type": "integer",
      "description": "Tracks when a card has been locked."
    },
    "xdm:cardOrderNew": {
      "title": "Order New Card",
      "type": "integer",
      "description": "Tracks when a card has been requested."
    },
    "xdm:cardOrderType": {
      "title": "Card Order Type",
      "type": "string",
      "enum": [
        "new",
        "lost",
        "stolen",
        "never received",
        "damaged"
      ],
      "description": "Tracks the type of card order associated with a card order event."
    },
    "xdm:cardType": {
      "title": "Card Type",
      "type": "string",
      "enum": [
        "credit",
        "debit",
        "prepaid",
        "paypal",
        "atm",
        "virtual",
        "hsa",
        "fsa"
      ],
      "description": "Tracks the type of card associated with an event."
    },
    "xdm:cardUnlocked": {
      "title": "Card Unlocked",
      "type": "integer",
      "description": "Tracks when a card has been unlocked."
    }
  },
  "simpletype": "`object`"
}
```









