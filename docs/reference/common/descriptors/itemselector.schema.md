
# Item Selector Schema

```
https://ns.adobe.com/xdm/common/descriptors/itemselector
```

Describes how to select or match to a specific item from an array of values described by an XDM schema.

Matching may be done based on array index, `@id`, `@type`, or schema URI.


| [Abstract](../../../abstract.md) | [Extensible](../../../extensions.md) | [Status](../../../status.md) | [Identifiable](../../../id.md) | [Custom Properties](../../../extensions.md) | [Additional Properties](../../../extensions.md) | Defined In |
|----------------------------------|--------------------------------------|------------------------------|--------------------------------|---------------------------------------------|-------------------------------------------------|------------|
| Cannot be instantiated | Yes | Experimental | No | Forbidden | Permitted | [common/descriptors/itemselector.schema.json](common/descriptors/itemselector.schema.json) |

## Item Selector Examples

```json
{
  "xdm:id": "https://example.com/objects/12345"
}
```

```json
{
  "xdm:type": "https://ns.adobe.com/experience/mcid"
}
```

```json
{
  "xdm:index": 0
}
```

```json
{
  "xdm:schema": "https://ns.adobe.com/xdm/context/identity"
}
```

