
# ExperienceEvent technical details Schema

```
https://ns.adobe.com/xdm/context/experienceevent-technical-details
```

Technical details extension for ExperienceEvent.

| [Abstract](../../abstract.md) | [Extensible](../../extensions.md) | [Status](../../status.md) | [Identifiable](../../id.md) | [Custom Properties](../../extensions.md) | [Additional Properties](../../extensions.md) | Defined In |
|-------------------------------|-----------------------------------|---------------------------|-----------------------------|------------------------------------------|----------------------------------------------|------------|
| Can be instantiated | Yes | Stabilizing | No | Forbidden | Permitted | [context/experienceevent-technical-details.schema.json](context/experienceevent-technical-details.schema.json) |
## Schema Hierarchy

* ExperienceEvent technical details `https://ns.adobe.com/xdm/context/experienceevent-technical-details`
  * [Extensibility base schema](../common/extensible.schema.md) `https://ns.adobe.com/xdm/common/extensible`
  * [Data Source](../data/datasource.schema.md) `https://ns.adobe.com/xdm/data/datasource`


## ExperienceEvent technical details Example
```json
{
  "xdm:dataSource": {
    "@id": "https://data.adobe.io/datasources/datasource-123",
    "xdm:code": "DataSourceIntegrationCode-123"
  },
  "xdm:receivedTimestamp": "2017-09-26T15:52:25+00:00"
}
```

# ExperienceEvent technical details Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [xdm:dataSource](#xdmdatasource) | Data Source | Optional | ExperienceEvent technical details (this schema) |
| [xdm:receivedTimestamp](#xdmreceivedtimestamp) | `string` | Optional | ExperienceEvent technical details (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## xdm:dataSource
### Data source

Globally unique identification of a data source.

`xdm:dataSource`
* is optional
* type: Data Source
* defined in this schema

### xdm:dataSource Type


* [Data Source](../data/datasource.schema.md) – `https://ns.adobe.com/xdm/data/datasource`





## xdm:receivedTimestamp
### Received time stamp

The time at which this interaction was received by a server.

`xdm:receivedTimestamp`
* is optional
* type: `string`
* defined in this schema

### xdm:receivedTimestamp Type


`string`
* format: `date-time` – date and time (according to [RFC 3339, section 5.6](http://tools.ietf.org/html/rfc3339))





