
# Provider Schema

```
https://ns.adobe.com/xdm/classes/provider
```

Provider business entity to collect data pertaining to providers (e.g. health provider, insurance provider).

| [Abstract](../../abstract.md) | [Extensible](../../extensions.md) | [Status](../../status.md) | [Identifiable](../../id.md) | [Custom Properties](../../extensions.md) | [Additional Properties](../../extensions.md) | Defined In |
|-------------------------------|-----------------------------------|---------------------------|-----------------------------|------------------------------------------|----------------------------------------------|------------|
| Can be instantiated | Yes | Experimental | No | Forbidden | Permitted | [classes/provider.schema.json](classes/provider.schema.json) |
## Schema Hierarchy

* Provider `https://ns.adobe.com/xdm/classes/provider`
  * [Person name](../datatypes/person/person-name.schema.md) `https://ns.adobe.com/xdm/context/person-name`
  * [Record Schema](../behaviors/record.schema.md) `https://ns.adobe.com/xdm/data/record`


## Provider Example
```json
{}
```

# Provider Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [@id](#id) | `string` | Optional | [Record Schema](../behaviors/record.schema.md#id) |
| [xdm:providerID](#xdmproviderid) | `string` | Optional | Provider (this schema) |
| [xdm:providerName](#xdmprovidername) | Person name | Optional | Provider (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## @id
### Identifier

A unique identifier for the record.

`@id`
* is optional
* type: `string`
* defined in [Record Schema](../behaviors/record.schema.md#id)

### @id Type


`string`
* format: `uri-reference` – URI Reference (according to [RFC3986](https://tools.ietf.org/html/rfc3986))






## xdm:providerID
### Provider ID

Unique identifier of the provider.

`xdm:providerID`
* is optional
* type: `string`
* defined in this schema

### xdm:providerID Type


`string`






## xdm:providerName
### Provider Name

Name of the provider.

`xdm:providerName`
* is optional
* type: Person name
* defined in this schema

### xdm:providerName Type


* [Person name](../datatypes/person/person-name.schema.md) – `https://ns.adobe.com/xdm/context/person-name`




