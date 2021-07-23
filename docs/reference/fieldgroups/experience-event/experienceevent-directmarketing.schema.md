
# Direct Marketing Details Schema

```
https://ns.adobe.com/xdm/context/experienceevent-directmarketing
```

Direct marketing events such as opens, clicks, impressions, and unsubscribes.

| [Abstract](../../../abstract.md) | [Extensible](../../../extensions.md) | [Status](../../../status.md) | [Identifiable](../../../id.md) | [Custom Properties](../../../extensions.md) | [Additional Properties](../../../extensions.md) | Defined In |
|----------------------------------|--------------------------------------|------------------------------|--------------------------------|---------------------------------------------|-------------------------------------------------|------------|
| Can be instantiated | Yes | Stable | No | Forbidden | Permitted | [fieldgroups/experience-event/experienceevent-directmarketing.schema.json](fieldgroups/experience-event/experienceevent-directmarketing.schema.json) |
## Schema Hierarchy

* Direct Marketing Details `https://ns.adobe.com/xdm/context/experienceevent-directmarketing`
  * [Extensibility base schema](../../datatypes/extensible.schema.md) `https://ns.adobe.com/xdm/common/extensible`
  * [Direct marketing](../../datatypes/marketing/direct-marketing.schema.md) `https://ns.adobe.com/xdm/context/direct-marketing`


## Direct Marketing Details Example
```json
{
  "xdm:directMarketing": {
    "xdm:sends": {
      "xdm:value": 1
    }
  }
}
```

# Direct Marketing Details Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [xdm:directMarketing](#xdmdirectmarketing) | Direct marketing | Optional | Direct Marketing Details (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## xdm:directMarketing
### Direct marketing

Events and properties related to direct and outbound marketing such as email, direct mail, texts, and in-app notifications.

`xdm:directMarketing`
* is optional
* type: Direct marketing
* defined in this schema

### xdm:directMarketing Type


* [Direct marketing](../../datatypes/marketing/direct-marketing.schema.md) – `https://ns.adobe.com/xdm/context/direct-marketing`




