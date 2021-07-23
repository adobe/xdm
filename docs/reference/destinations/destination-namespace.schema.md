
# Destinations Namespace Mapping Schema

```
https://ns.adobe.com/xdm/context/destination-namespace
```

Destinations Namespace Mapping Schema.

| [Abstract](../../abstract.md) | [Extensible](../../extensions.md) | [Status](../../status.md) | [Identifiable](../../id.md) | [Custom Properties](../../extensions.md) | [Additional Properties](../../extensions.md) | Defined In |
|-------------------------------|-----------------------------------|---------------------------|-----------------------------|------------------------------------------|----------------------------------------------|------------|
| Can be instantiated | Yes | Stable | No | Forbidden | Permitted | [destinations/destination-namespace.schema.json](destinations/destination-namespace.schema.json) |
## Schema Hierarchy

* Destinations Namespace Mapping `https://ns.adobe.com/xdm/context/destination-namespace`
  * [Record Schema](../behaviors/record.schema.md) `https://ns.adobe.com/xdm/data/record`
  * [Extensibility base schema](../datatypes/extensible.schema.md) `https://ns.adobe.com/xdm/common/extensible`


## Destinations Namespace Mapping Example
```json
{
  "xdm:destinationID": "b297ed27-607e-4715-97ed-27607e171589",
  "xdm:sourceNamespace": "Email",
  "xdm:targetNamespace": "Email_LC_SHA256",
  "xdm:isMapped": true,
  "xdm:createTime": "2019-01-01T15:52:25+00:00",
  "xdm:createdByID": "mprabhak"
}
```

# Destinations Namespace Mapping Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [@id](#id) | `string` | Optional | [Record Schema](../behaviors/record.schema.md#id) |
| [xdm:adobeNamespace](#xdmadobenamespace) | `string` | Optional | Destinations Namespace Mapping (this schema) |
| [xdm:createTime](#xdmcreatetime) | `string` | Optional | Destinations Namespace Mapping (this schema) |
| [xdm:createdByID](#xdmcreatedbyid) | `string` | Optional | Destinations Namespace Mapping (this schema) |
| [xdm:destinationID](#xdmdestinationid) | `string` | Optional | Destinations Namespace Mapping (this schema) |
| [xdm:isMapped](#xdmismapped) | `boolean` | Optional | Destinations Namespace Mapping (this schema) |
| [xdm:namespaceCode](#xdmnamespacecode) | `string` | Optional | Destinations Namespace Mapping (this schema) |
| [xdm:partnerNamespace](#xdmpartnernamespace) | `string` | Optional | Destinations Namespace Mapping (this schema) |
| [xdm:sourceNamespace](#xdmsourcenamespace) | `string` | Optional | Destinations Namespace Mapping (this schema) |
| [xdm:targetNamespace](#xdmtargetnamespace) | `string` | Optional | Destinations Namespace Mapping (this schema) |
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






## xdm:adobeNamespace
### Adobe Namespace

This is a human readable identifier for the namespace and can be used to request the technical namespace id which is used for identity graph processing.

`xdm:adobeNamespace`
* is optional
* type: `string`
* defined in this schema

### xdm:adobeNamespace Type


`string`






## xdm:createTime
### Create Time

The date and UTC time when the activation flow to the destination-namespace mapping was createdByID

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






## xdm:destinationID
### Destination ID

Unique Identifier for a destination instance

`xdm:destinationID`
* is optional
* type: `string`
* defined in this schema

### xdm:destinationID Type


`string`






## xdm:isMapped
### Is Mapped

This field specifies if the destination has the target namespace mapped.

`xdm:isMapped`
* is optional
* type: `boolean`
* defined in this schema

### xdm:isMapped Type


`boolean`





## xdm:namespaceCode
### Namespace Code

This code is a human readable identifier for the namespace and can be used to request the technical namespace id which is used for identity graph processing.

`xdm:namespaceCode`
* is optional
* type: `string`
* defined in this schema

### xdm:namespaceCode Type


`string`






## xdm:partnerNamespace
### Partner Namespace

This is a human readable identifier for the partner namespace.

`xdm:partnerNamespace`
* is optional
* type: `string`
* defined in this schema

### xdm:partnerNamespace Type


`string`






## xdm:sourceNamespace
### Source Namespace

This is a human readable identifier for the source namespace and can be used to request the technical namespace id which is used for identity graph processing.

`xdm:sourceNamespace`
* is optional
* type: `string`
* defined in this schema

### xdm:sourceNamespace Type


`string`






## xdm:targetNamespace
### Target Namespace

This is a human readable identifier for the target namespace.

`xdm:targetNamespace`
* is optional
* type: `string`
* defined in this schema

### xdm:targetNamespace Type


`string`





