
# Data Source Schema

```
https://ns.adobe.com/xdm/data/datasource
```

The Datasource acts as a namespace or unique identifier associated with a collection of data. Each EndUserID is associated with a given Datasource. A user can create and obtain information about a Datasource during the solution onboarding.


| [Abstract](../../abstract.md) | [Extensible](../../extensions.md) | [Status](../../status.md) | [Identifiable](../../id.md) | [Custom Properties](../../extensions.md) | [Additional Properties](../../extensions.md) | Defined In |
|-------------------------------|-----------------------------------|---------------------------|-----------------------------|------------------------------------------|----------------------------------------------|------------|
| Can be instantiated | Yes | Stabilizing | No | Forbidden | Permitted | [data/datasource.schema.json](data/datasource.schema.json) |

## Data Source Example
```json
{
  "@id": "https://data.adobe.io/datasources/datasource-123",
  "xdm:code": "DataSourceIntegrationCode-123"
}
```

# Data Source Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [@id](#id) | `string` | Optional | Data Source (this schema) |
| [xdm:code](#xdmcode) | `string` | Optional | Data Source (this schema) |
| [xdm:tags](#xdmtags) | `string[]` | Optional | Data Source (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## @id
### Identifier

The unique ID of this data source. This would be provided by the individual or system that created the Datasource.


`@id`
* is optional
* type: `string`
* defined in this schema

### @id Type


`string`
* format: `uri-reference` – URI Reference (according to [RFC3986](https://tools.ietf.org/html/rfc3986))






## xdm:code
### Code

The code is a shortcut to the full @id and at least one of the code or @id can be used. Sometimes, this code is referred to as the data source integration code.

`xdm:code`
* is optional
* type: `string`
* defined in this schema

### xdm:code Type


`string`






## xdm:tags
### Tags

Tags are used to indicate how the aliases represented by a given data
source should be interpreted by applications using those aliases.

Examples:

* `isAVID`: data sources representing Analytics visitor IDs.
* `isCRSKey`: data sources representing aliases that should be used as keys in CRS.

Tags are set when the data source is created but they are also included in
pipeline messages when referencing a given data source.


`xdm:tags`
* is optional
* type: `string[]`

* defined in this schema

### xdm:tags Type


Array type: `string[]`

All items must be of the type:
`string`








