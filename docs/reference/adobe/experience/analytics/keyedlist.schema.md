
# Keyed List Schema

```
https://ns.adobe.com/experience/analytics/keyedlist
```

List of keyed values.

| [Abstract](../../../../abstract.md) | [Extensible](../../../../extensions.md) | [Status](../../../../status.md) | [Identifiable](../../../../id.md) | [Custom Properties](../../../../extensions.md) | [Additional Properties](../../../../extensions.md) | Defined In |
|-------------------------------------|-----------------------------------------|---------------------------------|-----------------------------------|------------------------------------------------|----------------------------------------------------|------------|
| Can be instantiated | Yes | Stable | No | Forbidden | Permitted | [adobe/experience/analytics/keyedlist.schema.json](adobe/experience/analytics/keyedlist.schema.json) |

# Keyed List Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [xdm:list](#xdmlist) | Key Value Pair | Optional | Keyed List (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## xdm:list
### Keyed List

List of keyed values.

`xdm:list`
* is optional
* type: Key Value Pair

* defined in this schema

### xdm:list Type


Array type: Key Value Pair

All items must be of the type:
* [Key Value Pair](keyvalue.schema.md) – `https://ns.adobe.com/experience/analytics/keyvalue`







