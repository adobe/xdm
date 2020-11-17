
# Identity Namespace Schema

```
https://ns.adobe.com/xdm/context/identity-namespace
```

Identity Namespace Schema.

| [Abstract](../../abstract.md) | [Extensible](../../extensions.md) | [Status](../../status.md) | [Identifiable](../../id.md) | [Custom Properties](../../extensions.md) | [Additional Properties](../../extensions.md) | Defined In |
|-------------------------------|-----------------------------------|---------------------------|-----------------------------|------------------------------------------|----------------------------------------------|------------|
| Can be instantiated | Yes | Stable | No | Forbidden | Permitted | [identity/identity-namespace.schema.json](identity/identity-namespace.schema.json) |
## Schema Hierarchy

* Identity Namespace `https://ns.adobe.com/xdm/context/identity-namespace`
  * [Record Schema](../behaviors/record.schema.md) `https://ns.adobe.com/xdm/data/record`
  * [Extensibility base schema](../datatypes/extensible.schema.md) `https://ns.adobe.com/xdm/common/extensible`


## Identity Namespace Examples

```json
{
  "xdm:namespaceCode": "ECID",
  "xdm:namespaceID": 4657,
  "xdm:namespaceName": "ECID",
  "xdm:namespaceDescription": "Experience Cloud ID",
  "xdm:namespaceIdType": "COOKIE"
}
```

```json
{
  "xdm:namespaceCode": "ECID",
  "xdm:namespaceID": 4657,
  "xdm:namespaceName": "ECID",
  "xdm:namespaceDescription": "Experience Cloud ID",
  "xdm:namespaceIdType": "COOKIE",
  "xdm:createDate": "2018-10-23T12:00:00-06:00",
  "xdm:modifyDate": "2018-10-23T12:00:00-06:00"
}
```


# Identity Namespace Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [@id](#id) | `string` | Optional | [Record Schema](../behaviors/record.schema.md#id) |
| [xdm:createDate](#xdmcreatedate) | `string` | Optional | Identity Namespace (this schema) |
| [xdm:modifyDate](#xdmmodifydate) | `string` | Optional | Identity Namespace (this schema) |
| [xdm:namespaceCode](#xdmnamespacecode) | `string` | Optional | Identity Namespace (this schema) |
| [xdm:namespaceDescription](#xdmnamespacedescription) | `string` | Optional | Identity Namespace (this schema) |
| [xdm:namespaceID](#xdmnamespaceid) | `integer` | Optional | Identity Namespace (this schema) |
| [xdm:namespaceIdType](#xdmnamespaceidtype) | `enum` | Optional | Identity Namespace (this schema) |
| [xdm:namespaceName](#xdmnamespacename) | `string` | Optional | Identity Namespace (this schema) |
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






## xdm:createDate
### Create Date Time

The date and time when the namespace was created in ISO 8601 format

`xdm:createDate`
* is optional
* type: `string`
* defined in this schema

### xdm:createDate Type


`string`
* format: `date-time` – date and time (according to [RFC 3339, section 5.6](http://tools.ietf.org/html/rfc3339))




### xdm:createDate Example

```json
"An example form is \"2004-10-23T12:00:00-06:00\"."
```


## xdm:modifyDate
### Update Date Time

The date and time when the namespace was updated in ISO 8601 format

`xdm:modifyDate`
* is optional
* type: `string`
* defined in this schema

### xdm:modifyDate Type


`string`
* format: `date-time` – date and time (according to [RFC 3339, section 5.6](http://tools.ietf.org/html/rfc3339))




### xdm:modifyDate Example

```json
"An example form is \"2004-10-23T12:00:00-06:00\"."
```


## xdm:namespaceCode
### Namespace Code

This code is a human readable identifier for the namespace

`xdm:namespaceCode`
* is optional
* type: `string`
* defined in this schema

### xdm:namespaceCode Type


`string`






## xdm:namespaceDescription
### Namespace Description

Description for the namespace

`xdm:namespaceDescription`
* is optional
* type: `string`
* defined in this schema

### xdm:namespaceDescription Type


`string`






## xdm:namespaceID
### Unique Namespace ID

Unique Identifier for namespace

`xdm:namespaceID`
* is optional
* type: `integer`
* defined in this schema

### xdm:namespaceID Type


`integer`






## xdm:namespaceIdType
### Namespace Id Type

Identity identifier type for the namespace

`xdm:namespaceIdType`
* is optional
* type: `enum`
* defined in this schema

The value of this property **must** be equal to one of the [known values below](#xdmnamespaceidtype-known-values).

### xdm:namespaceIdType Known Values
| Value | Description |
|-------|-------------|
| `EMAIL` | Email |
| `PHONE_NUMBER` | Phone number |
| `DEVICE` | Device ID |
| `COOKIE` | Cookie ID |
| `CROSS_DEVICE` | Cross-device ID |
| `NON_PEOPLE` | Non-people identifier |




## xdm:namespaceName
### Namespace Name

This is human readable name for the namespace

`xdm:namespaceName`
* is optional
* type: `string`
* defined in this schema

### xdm:namespaceName Type


`string`





