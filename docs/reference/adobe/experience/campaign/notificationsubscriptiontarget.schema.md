
# Notification Subscription Target Schema

```
https://ns.adobe.com/experience/campaign/notificationsubscriptiontarget
```

Target/destination for where to send/receive the notification.

| [Abstract](../../../../abstract.md) | [Extensible](../../../../extensions.md) | [Status](../../../../status.md) | [Identifiable](../../../../id.md) | [Custom Properties](../../../../extensions.md) | [Additional Properties](../../../../extensions.md) | Defined In |
|-------------------------------------|-----------------------------------------|---------------------------------|-----------------------------------|------------------------------------------------|----------------------------------------------------|------------|
| Can be instantiated | Yes | Stable | No | Forbidden | Permitted | [adobe/experience/campaign/notificationsubscriptiontarget.schema.json](adobe/experience/campaign/notificationsubscriptiontarget.schema.json) |
## Schema Hierarchy

* Notification Subscription Target `https://ns.adobe.com/experience/campaign/notificationsubscriptiontarget`
  * [Extensibility base schema](../../../datatypes/extensible.schema.md) `https://ns.adobe.com/xdm/common/extensible`


# Notification Subscription Target Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [xdm:emailAddress](#xdmemailaddress) | `string` | Optional | Notification Subscription Target (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## xdm:emailAddress
### Address

The technical address, e.g 'name@domain.com' as commonly defined in RFC2822 and subsequent standards.

`xdm:emailAddress`
* is optional
* type: `string`
* defined in this schema

### xdm:emailAddress Type


`string`
* format: `email` – email address (according to [RFC 5322, section 3.4.1](https://tools.ietf.org/html/rfc5322))





