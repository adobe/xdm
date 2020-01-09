
# ExperienceEvent direct marketing details Schema

```
https://ns.adobe.com/xdm/context/experienceevent-directmarketing
```

This mixin is used to capture information regarding direct marketing details related to an ExperienceEvent. This includes opens, clicks, impressions, and unsubscribes.

| [Abstract](../../abstract.md) | [Extensible](../../extensions.md) | [Status](../../status.md) | [Identifiable](../../id.md) | [Custom Properties](../../extensions.md) | [Additional Properties](../../extensions.md) | Defined In |
|-------------------------------|-----------------------------------|---------------------------|-----------------------------|------------------------------------------|----------------------------------------------|------------|
| Can be instantiated | Yes | Stabilizing | No | Forbidden | Permitted | [context/experienceevent-directmarketing.schema.json](context/experienceevent-directmarketing.schema.json) |
## Schema Hierarchy

* ExperienceEvent direct marketing details `https://ns.adobe.com/xdm/context/experienceevent-directmarketing`
  * [Extensibility base schema](../common/extensible.schema.md) `https://ns.adobe.com/xdm/common/extensible`
  * [Direct marketing](direct-marketing.schema.md) `https://ns.adobe.com/xdm/context/direct-marketing`


## ExperienceEvent direct marketing details Example
```json
{
  "xdm:directMarketing": {
    "xdm:sends": {
      "xdm:value": 1
    }
  }
}
```

# ExperienceEvent direct marketing details Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [xdm:directMarketing](#xdmdirectmarketing) | Direct marketing | Optional | ExperienceEvent direct marketing details (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## xdm:directMarketing
### Direct marketing

Events and properties related to direct and outbound marketing such as email, direct mail, texts, and in-app notifications.

`xdm:directMarketing`
* is optional
* type: Direct marketing
* defined in this schema

### xdm:directMarketing Type


* [Direct marketing](direct-marketing.schema.md) – `https://ns.adobe.com/xdm/context/direct-marketing`




