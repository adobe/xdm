
# JSON-LD `@type` Schema

```
https://ns.adobe.com/xdm/external/activity-streams-2/type
```

Identifies the [Object](https://www.w3.org/TR/activitystreams-vocabulary/#dfn-object) or [Link](https://www.w3.org/TR/activitystreams-vocabulary/#dfn-link) type. Multiple values may be specified. Refer to the [JSON-LD](https://json-ld.org/spec/latest/json-ld/) specification for a complete description of the `@type` field.

| [Abstract](../../../abstract.md) | [Extensible](../../../extensions.md) | [Status](../../../status.md) | [Identifiable](../../../id.md) | [Custom Properties](../../../extensions.md) | [Additional Properties](../../../extensions.md) | Defined In |
|----------------------------------|--------------------------------------|------------------------------|--------------------------------|---------------------------------------------|-------------------------------------------------|------------|
| Can be instantiated | Yes | Stable | No | Forbidden | Permitted | [external/activity-streams-2/type.schema.json](external/activity-streams-2/type.schema.json) |

## JSON-LD `@type` Example
```json
{
  "@type": "https://ns.adobe.com/xdm/common/event/created"
}
```

# JSON-LD `@type` Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [@type](#type) | complex | Optional | JSON-LD `@type` (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## @type


`@type`
* is optional
* type: complex
* defined in this schema

### @type Type


**One** of the following *conditions* need to be fulfilled.


#### Condition 1


Array type: 

All items must be of the type:
`string`
* format: `uri` – Uniformous Resource Identifier (according to [RFC3986](http://tools.ietf.org/html/rfc3986))





#### Condition 2


`string`
* format: `uri` – Uniformous Resource Identifier (according to [RFC3986](http://tools.ietf.org/html/rfc3986))






