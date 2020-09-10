
# Search Advertising Platform Schema

```
https://ns.adobe.com/experience/adcloud/searchadvertising/platform
```

Information about Search Advertising Platform.

| [Abstract](../../../../../abstract.md) | [Extensible](../../../../../extensions.md) | [Status](../../../../../status.md) | [Identifiable](../../../../../id.md) | [Custom Properties](../../../../../extensions.md) | [Additional Properties](../../../../../extensions.md) | Defined In |
|----------------------------------------|--------------------------------------------|------------------------------------|--------------------------------------|---------------------------------------------------|-------------------------------------------------------|------------|
| Can be instantiated | Yes | Deprecated | No | Forbidden | Permitted | [adobe/experience/adcloud/searchadvertising/platform.schema.json](adobe/experience/adcloud/searchadvertising/platform.schema.json) |

## Search Advertising Platform Example
```json
{
  "xdm:searchEngineId": 3,
  "xdm:adPlatform": "Google AdWords"
}
```

# Search Advertising Platform Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [xdm:adPlatform](#xdmadplatform) | `string` | Optional | Search Advertising Platform (this schema) |
| [xdm:searchEngineId](#xdmsearchengineid) | `integer` | Optional | Search Advertising Platform (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## xdm:adPlatform
### Search Advertising Platform

The Search Advertising Platform Name

`xdm:adPlatform`
* is optional
* type: `string`
* defined in this schema

### xdm:adPlatform Type


`string`






## xdm:searchEngineId
### Search Engine Identifier

The application-specified identifier used to identify the Search Advertising Platform Name.

`xdm:searchEngineId`
* is optional
* type: `integer`
* defined in this schema

### xdm:searchEngineId Type


`integer`





