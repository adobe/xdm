
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
| [https://ns.adobe.com/experience/decisioning/proposition-event-type/dismiss](#httpsnsadobecomexperiencedecisioningproposition-event-typedismiss) | `integer` | Optional | AJO Classification Fields (this schema) |
| [https://ns.adobe.com/experience/decisioning/proposition-event-type/display](#httpsnsadobecomexperiencedecisioningproposition-event-typedisplay) | `integer` | Optional | AJO Classification Fields (this schema) |
| [https://ns.adobe.com/experience/decisioning/proposition-event-type/interact](#httpsnsadobecomexperiencedecisioningproposition-event-typeinteract) | `integer` | Optional | AJO Classification Fields (this schema) |
| [https://ns.adobe.com/experience/decisioning/proposition-event-type/send](#httpsnsadobecomexperiencedecisioningproposition-event-typesend) | `integer` | Optional | AJO Classification Fields (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## https://ns.adobe.com/experience/decisioning/proposition-event-type/dismiss
### dismiss

User dismissed the proposition without any other direct interaction.

`https://ns.adobe.com/experience/decisioning/proposition-event-type/dismiss`
* is optional
* type: `integer`
* defined in this schema

### https://ns.adobe.com/experience/decisioning/proposition-event-type/dismiss Type


`integer`






## https://ns.adobe.com/experience/decisioning/proposition-event-type/display
### display

Proposition was displayed to the user.

`https://ns.adobe.com/experience/decisioning/proposition-event-type/display`
* is optional
* type: `integer`
* defined in this schema

### https://ns.adobe.com/experience/decisioning/proposition-event-type/display Type


`integer`






## https://ns.adobe.com/experience/decisioning/proposition-event-type/interact
### interact

User interacted with the proposition, usually in a positive way.

`https://ns.adobe.com/experience/decisioning/proposition-event-type/interact`
* is optional
* type: `integer`
* defined in this schema

### https://ns.adobe.com/experience/decisioning/proposition-event-type/interact Type


`integer`






## https://ns.adobe.com/experience/decisioning/proposition-event-type/send
### send

Proposition was sent to the client. This does not guarantee the proposition arrived or was displayed to the user.

`https://ns.adobe.com/experience/decisioning/proposition-event-type/send`
* is optional
* type: `integer`
* defined in this schema

### https://ns.adobe.com/experience/decisioning/proposition-event-type/send Type


`integer`





