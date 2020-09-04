
# Notification Unsubscription Details Schema

```
https://ns.adobe.com/experience/campaign/notificationunsubscriptiondetails
```

Adobe Campaign notification unsubscriptions allow end-users opt out after opting into topics that can be used for communication such as marketing subscription lists.

| [Abstract](../../../../abstract.md) | [Extensible](../../../../extensions.md) | [Status](../../../../status.md) | [Identifiable](../../../../id.md) | [Custom Properties](../../../../extensions.md) | [Additional Properties](../../../../extensions.md) | Defined In |
|-------------------------------------|-----------------------------------------|---------------------------------|-----------------------------------|------------------------------------------------|----------------------------------------------------|------------|
| Can be instantiated | Yes | Stable | No | Forbidden | Permitted | [adobe/experience/campaign/notificationunsubscriptiondetails.schema.json](adobe/experience/campaign/notificationunsubscriptiondetails.schema.json) |
## Schema Hierarchy

* Notification Unsubscription Details `https://ns.adobe.com/experience/campaign/notificationunsubscriptiondetails`
  * [Extensibility base schema](../../../datatypes/extensible.schema.md) `https://ns.adobe.com/xdm/common/extensible`


# Notification Unsubscription Details Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [xdm:remarkID](#xdmremarkid) | `string` | Optional | Notification Unsubscription Details (this schema) |
| [xdm:remarkText](#xdmremarktext) | `string` | Optional | Notification Unsubscription Details (this schema) |
| [xdm:unsubscriptionDate](#xdmunsubscriptiondate) | `string` | Optional | Notification Unsubscription Details (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## xdm:remarkID
### Remark Identifier

The pre defined remark that the end-user identified when unsubscribing.

`xdm:remarkID`
* is optional
* type: `string`
* defined in this schema

### xdm:remarkID Type


`string`






## xdm:remarkText
### Remark text

A customer comment/remark that the end-user provided when unsubscribing.

`xdm:remarkText`
* is optional
* type: `string`
* defined in this schema

### xdm:remarkText Type


`string`






## xdm:unsubscriptionDate
### Unsubscription Date

Date and time when the end-user has unsubscribed from a notification topic. When the subscription is registered the xdm:unsubscriptionDate must be empty.

`xdm:unsubscriptionDate`
* is optional
* type: `string`
* defined in this schema

### xdm:unsubscriptionDate Type


`string`
* format: `date-time` – date and time (according to [RFC 3339, section 5.6](http://tools.ietf.org/html/rfc3339))





