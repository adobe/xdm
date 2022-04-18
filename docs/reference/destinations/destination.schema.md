
# Destinations Schema

```
https://ns.adobe.com/xdm/context/destination
```

Destinations Schema.

| [Abstract](../../abstract.md) | [Extensible](../../extensions.md) | [Status](../../status.md) | [Identifiable](../../id.md) | [Custom Properties](../../extensions.md) | [Additional Properties](../../extensions.md) | Defined In |
|-------------------------------|-----------------------------------|---------------------------|-----------------------------|------------------------------------------|----------------------------------------------|------------|
| Can be instantiated | Yes | Stable | No | Forbidden | Permitted | [destinations/destination.schema.json](destinations/destination.schema.json) |
## Schema Hierarchy

* Destinations `https://ns.adobe.com/xdm/context/destination`
  * [Record Schema](../behaviors/record.schema.md) `https://ns.adobe.com/xdm/data/record`
  * [Extensibility base schema](../datatypes/extensible.schema.md) `https://ns.adobe.com/xdm/common/extensible`


## Destinations Example
```json
{
  "xdm:destinationID": "b297ed27-607e-4715-97ed-27607e171589",
  "xdm:destinationName": "LMA_Destination1",
  "xdm:destinationPlatform": "LinkedIn Matched Audience",
  "xdm:createTime": "2019-01-01T15:52:25+00:00",
  "xdm:createdByID": "mprabhbak",
  "xdm:destinationDescription": "LinkedIn Matched Audience connection",
  "xdm:destinationStatus": "enabled",
  "xdm:version": "1.2",
  "xdm:connectionSpecID": "31ef37d8-3901-4dd5-a46d-7c11c20b11ea",
  "xdm:destinationCategory": "social",
  "xdm:destinationFrequency": "Streaming"
}
```

# Destinations Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [@id](#id) | `string` | Optional | [Record Schema](../behaviors/record.schema.md#id) |
| [xdm:connectionSpecID](#xdmconnectionspecid) | `string` | Optional | Destinations (this schema) |
| [xdm:createTime](#xdmcreatetime) | `string` | Optional | Destinations (this schema) |
| [xdm:createdByID](#xdmcreatedbyid) | `string` | Optional | Destinations (this schema) |
| [xdm:destinationCategory](#xdmdestinationcategory) | `enum` | Optional | Destinations (this schema) |
| [xdm:destinationDescription](#xdmdestinationdescription) | `string` | Optional | Destinations (this schema) |
| [xdm:destinationFrequency](#xdmdestinationfrequency) | `enum` | Optional | Destinations (this schema) |
| [xdm:destinationID](#xdmdestinationid) | `string` | Optional | Destinations (this schema) |
| [xdm:destinationName](#xdmdestinationname) | `string` | Optional | Destinations (this schema) |
| [xdm:destinationPlatform](#xdmdestinationplatform) | `string` | Optional | Destinations (this schema) |
| [xdm:destinationStatus](#xdmdestinationstatus) | `string` | Optional | Destinations (this schema) |
| [xdm:version](#xdmversion) | `string` | Optional | Destinations (this schema) |
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






## xdm:connectionSpecID
### Connection Spec ID

Unique identifier to connect and deliver segments to the destination

`xdm:connectionSpecID`
* is optional
* type: `string`
* defined in this schema

### xdm:connectionSpecID Type


`string`






## xdm:createTime
### Create Time

The date and UTC time when the activation flow to the destination was createdByID

`xdm:createTime`
* is optional
* type: `string`
* defined in this schema

### xdm:createTime Type


`string`
* format: `date-time` – date and time (according to [RFC 3339, section 5.6](http://tools.ietf.org/html/rfc3339))






## xdm:createdByID
### Created User ID

ID of user who created the destination flow

`xdm:createdByID`
* is optional
* type: `string`
* defined in this schema

### xdm:createdByID Type


`string`






## xdm:destinationCategory
### Destination Category

Grouping of the destinations in the catalog depending on the marketing action that they help achieve

`xdm:destinationCategory`
* is optional
* type: `enum`
* defined in this schema

The value of this property **must** be equal to one of the [known values below](#xdmdestinationcategory-known-values).

### xdm:destinationCategory Known Values
| Value | Description |
|-------|-------------|
| `adobeSolutions` | adobeSolutions |
| `advertising` | advertising |
| `cloudStorage` | cloudStorage |
| `emailMarketing` | emailMarketing |
| `mobile engagement` | mobile engagement |
| `personalization` | personalization |
| `social` | social |
| `streaming` | streaming |
| `mobile` | mobile |




## xdm:destinationDescription
### Destination Description

Destination flow description

`xdm:destinationDescription`
* is optional
* type: `string`
* defined in this schema

### xdm:destinationDescription Type


`string`






## xdm:destinationFrequency
### Destination Frequency

Indicates how often the audiences are sent to the destination

`xdm:destinationFrequency`
* is optional
* type: `enum`
* defined in this schema

The value of this property **must** be equal to one of the [known values below](#xdmdestinationfrequency-known-values).

### xdm:destinationFrequency Known Values
| Value | Description |
|-------|-------------|
| `Batch` | Batch |
| `Streaming` | Streaming |




## xdm:destinationID
### Destination ID

Unique Identifier for a destination instance

`xdm:destinationID`
* is optional
* type: `string`
* defined in this schema

### xdm:destinationID Type


`string`






## xdm:destinationName
### Destination Name

Destination flow name

`xdm:destinationName`
* is optional
* type: `string`
* defined in this schema

### xdm:destinationName Type


`string`






## xdm:destinationPlatform
### Destination Platform

The destination platform selected for activation flow.

`xdm:destinationPlatform`
* is optional
* type: `string`
* defined in this schema

### xdm:destinationPlatform Type


`string`






## xdm:destinationStatus
### Destination Status

Status of destination flow

`xdm:destinationStatus`
* is optional
* type: `string`
* defined in this schema

### xdm:destinationStatus Type


`string`



### xdm:destinationStatus Known Values
| Value | Description |
|-------|-------------|
| `enabled` | Enabled and ready to use |
| `disabled` | Disabled and cannot be used |




## xdm:version
### Version

Destination flow version

`xdm:version`
* is optional
* type: `string`
* defined in this schema

### xdm:version Type


`string`





