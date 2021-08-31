
# Card Actions Schema

```
https://ns.adobe.com/xdm/mixins/experienceevent-card-actions
```

Card action details such as card type as well as activation and lock status.

| [Abstract](../../../abstract.md) | [Extensible](../../../extensions.md) | [Status](../../../status.md) | [Identifiable](../../../id.md) | [Custom Properties](../../../extensions.md) | [Additional Properties](../../../extensions.md) | Defined In |
|----------------------------------|--------------------------------------|------------------------------|--------------------------------|---------------------------------------------|-------------------------------------------------|------------|
| Can be instantiated | Yes | Stable | No | Forbidden | Permitted | [fieldgroups/experience-event/experienceevent-card-actions.schema.json](fieldgroups/experience-event/experienceevent-card-actions.schema.json) |

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
      "description": "Tracks the identifier for the card being activated.  This might be different from the card number.",
      "meta:titleId": "experienceevent-card-actions##xdm:cardID##title##59851",
      "meta:descriptionId": "experienceevent-card-actions##xdm:cardID##description##33251"
    },
    "xdm:cardActivated": {
      "title": "Card Activated Success",
      "type": "integer",
      "description": "Tracks when a card has been successfully activated.",
      "meta:titleId": "experienceevent-card-actions##xdm:cardActivated##title##921",
      "meta:descriptionId": "experienceevent-card-actions##xdm:cardActivated##description##9991"
    },
    "xdm:cardActivationStart": {
      "title": "Card Activation Started",
      "type": "integer",
      "description": "Tracks when a card activation process has been started.",
      "meta:titleId": "experienceevent-card-actions##xdm:cardActivationStart##title##59361",
      "meta:descriptionId": "experienceevent-card-actions##xdm:cardActivationStart##description##13581"
    },
    "xdm:cardCancelled": {
      "title": "Card Cancelled",
      "type": "integer",
      "description": "Tracks when a card has been cancelled.",
      "meta:titleId": "experienceevent-card-actions##xdm:cardCancelled##title##69481",
      "meta:descriptionId": "experienceevent-card-actions##xdm:cardCancelled##description##7891"
    },
    "xdm:cardControlsLocked": {
      "title": "Card Controls Locked",
      "type": "integer",
      "description": "Tracks when a card controls have been locked.",
      "meta:titleId": "experienceevent-card-actions##xdm:cardControlsLocked##title##23611",
      "meta:descriptionId": "experienceevent-card-actions##xdm:cardControlsLocked##description##97671"
    },
    "xdm:cardControlsUnlocked": {
      "title": "Card Controls Unlocked",
      "type": "integer",
      "description": "Tracks when a card controls have been unlocked.",
      "meta:titleId": "experienceevent-card-actions##xdm:cardControlsUnlocked##title##8831",
      "meta:descriptionId": "experienceevent-card-actions##xdm:cardControlsUnlocked##description##71841"
    },
    "xdm:cardLocked": {
      "title": "Card Locked",
      "type": "integer",
      "description": "Tracks when a card has been locked.",
      "meta:titleId": "experienceevent-card-actions##xdm:cardLocked##title##21381",
      "meta:descriptionId": "experienceevent-card-actions##xdm:cardLocked##description##67031"
    },
    "xdm:cardOrderNew": {
      "title": "Order New Card",
      "type": "integer",
      "description": "Tracks when a card has been requested.",
      "meta:titleId": "experienceevent-card-actions##xdm:cardOrderNew##title##91821",
      "meta:descriptionId": "experienceevent-card-actions##xdm:cardOrderNew##description##92171"
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
      "description": "Tracks the type of card order associated with a card order event.",
      "meta:titleId": "experienceevent-card-actions##xdm:cardOrderType##title##45061",
      "meta:descriptionId": "experienceevent-card-actions##xdm:cardOrderType##description##37801"
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
      "description": "Tracks the type of card associated with an event.",
      "meta:titleId": "experienceevent-card-actions##xdm:cardType##title##35641",
      "meta:descriptionId": "experienceevent-card-actions##xdm:cardType##description##82811"
    },
    "xdm:cardUnlocked": {
      "title": "Card Unlocked",
      "type": "integer",
      "description": "Tracks when a card has been unlocked.",
      "meta:titleId": "experienceevent-card-actions##xdm:cardUnlocked##title##35861",
      "meta:descriptionId": "experienceevent-card-actions##xdm:cardUnlocked##description##85861"
    }
  },
  "simpletype": "`object`"
}
```









