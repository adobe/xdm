
# AJO Classification Fields Schema

```
https://ns.adobe.com/experience/decisioning/proposition-event-type
```

A set of direct customer interactions that an end-user might perform when shown a proposition.

| [Abstract](../../../../abstract.md) | [Extensible](../../../../extensions.md) | [Status](../../../../status.md) | [Identifiable](../../../../id.md) | [Custom Properties](../../../../extensions.md) | [Additional Properties](../../../../extensions.md) | Defined In |
|-------------------------------------|-----------------------------------------|---------------------------------|-----------------------------------|------------------------------------------------|----------------------------------------------------|------------|
| Can be instantiated | Yes | Stable | No | Forbidden | Permitted | [adobe/experience/decisioning/proposition-event-type.schema.json](adobe/experience/decisioning/proposition-event-type.schema.json) |

# AJO Classification Fields Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [xdm:dismiss](#xdmdismiss) | `integer` | Optional | AJO Classification Fields (this schema) |
| [xdm:display](#xdmdisplay) | `integer` | Optional | AJO Classification Fields (this schema) |
| [xdm:interact](#xdminteract) | `integer` | Optional | AJO Classification Fields (this schema) |
| [xdm:send](#xdmsend) | `integer` | Optional | AJO Classification Fields (this schema) |
| [xdm:trigger](#xdmtrigger) | `integer` | Optional | AJO Classification Fields (this schema) |
| [xdm:unsubscribe](#xdmunsubscribe) | `integer` | Optional | AJO Classification Fields (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## xdm:dismiss
### dismiss

User dismissed or rejected the proposition without any other direct interaction.

`xdm:dismiss`
* is optional
* type: `integer`
* defined in this schema

### xdm:dismiss Type


`integer`






## xdm:display
### display

Proposition was displayed to the user.

`xdm:display`
* is optional
* type: `integer`
* defined in this schema

### xdm:display Type


`integer`






## xdm:interact
### interact

User interacted with the proposition, usually in a positive way.

`xdm:interact`
* is optional
* type: `integer`
* defined in this schema

### xdm:interact Type


`integer`






## xdm:send
### send

Proposition was sent to the client. This does not guarantee the proposition arrived or was displayed to the user.

`xdm:send`
* is optional
* type: `integer`
* defined in this schema

### xdm:send Type


`integer`






## xdm:trigger
### trigger

Proposition was chosen to be displayed by the client SDK. Other factors may prevent it from actually being displayed.

`xdm:trigger`
* is optional
* type: `integer`
* defined in this schema

### xdm:trigger Type


`integer`






## xdm:unsubscribe
### unsubscribe

User has requested to not be shown the proposition in the future.

`xdm:unsubscribe`
* is optional
* type: `integer`
* defined in this schema

### xdm:unsubscribe Type


`integer`





