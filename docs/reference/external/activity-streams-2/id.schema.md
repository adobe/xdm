
# JSON-LD `@id` Schema

```
https://ns.adobe.com/xdm/external/activity-streams-2/id
```

Provides the globally unique identifier for an [Object](https://www.w3.org/TR/activitystreams-vocabulary/#dfn-object) or [Link](https://www.w3.org/TR/activitystreams-vocabulary/#dfn-link). Refer to the [JSON-LD](https://json-ld.org/spec/latest/json-ld/) specification for a complete description of the `@id` field.

| [Abstract](../../../abstract.md) | [Extensible](../../../extensions.md) | [Status](../../../status.md) | [Identifiable](../../../id.md) | [Custom Properties](../../../extensions.md) | [Additional Properties](../../../extensions.md) | Defined In |
|----------------------------------|--------------------------------------|------------------------------|--------------------------------|---------------------------------------------|-------------------------------------------------|------------|
| Can be instantiated | No | Experimental | No | Forbidden | Permitted | [external/activity-streams-2/id.schema.json](external/activity-streams-2/id.schema.json) |

## JSON-LD `@id` Example
```json
{
  "@id": "https://events.adobe.io/event/id/82235bac-2b81-4e70-90b5-2bd1f04b5c7b"
}
```

# JSON-LD `@id` Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [@id](#id) | `string` | Optional | JSON-LD `@id` (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## @id


`@id`
* is optional
* type: `string`
* defined in this schema

### @id Type


`string`
* format: `uri-reference` – URI Reference (according to [RFC3986](https://tools.ietf.org/html/rfc3986))





