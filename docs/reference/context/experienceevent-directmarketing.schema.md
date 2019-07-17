
# ExperienceEvent Direct Marketing Details Schema

```
https://ns.adobe.com/xdm/context/experienceevent-directmarketing
```

ExperienceEvent direct marketing details.

| [Abstract](../../abstract.md) | [Extensible](../../extensions.md) | [Status](../../status.md) | [Identifiable](../../id.md) | [Custom Properties](../../extensions.md) | [Additional Properties](../../extensions.md) | Defined In |
|-------------------------------|-----------------------------------|---------------------------|-----------------------------|------------------------------------------|----------------------------------------------|------------|
| Can be instantiated | Yes | Stabilizing | No | Forbidden | Permitted | [context/experienceevent-directmarketing.schema.json](context/experienceevent-directmarketing.schema.json) |
## Schema Hierarchy

* ExperienceEvent Direct Marketing Details `https://ns.adobe.com/xdm/context/experienceevent-directmarketing`
  * [Extensibility Base Schema](../common/extensible.schema.md) `https://ns.adobe.com/xdm/common/extensible`
  * [Direct Marketing](direct-marketing.schema.md) `https://ns.adobe.com/xdm/context/direct-marketing`


## ExperienceEvent Direct Marketing Details Example
```json
{
  "xdm:directMarketing": {
    "xdm:sends": {
      "xdm:value": 1
    }
  }
}
```

# ExperienceEvent Direct Marketing Details Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [xdm:directMarketing](#xdmdirectmarketing) | Direct Marketing | Optional | ExperienceEvent Direct Marketing Details (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## xdm:directMarketing
### Direct Marketing

Events and properties related to direct/outbound marketing such as email, direct mail, texts, and in-app notifications.

`xdm:directMarketing`
* is optional
* type: Direct Marketing
* defined in this schema

### xdm:directMarketing Type


* [Direct Marketing](direct-marketing.schema.md) – `https://ns.adobe.com/xdm/context/direct-marketing`




