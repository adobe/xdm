
# Segment Expression Schema

```
https://ns.adobe.com/xdm/context/segmentdefinition-expression
```

This mixin helps capture the qualifying expression for a segment.

| [Abstract](../../abstract.md) | [Extensible](../../extensions.md) | [Status](../../status.md) | [Identifiable](../../id.md) | [Custom Properties](../../extensions.md) | [Additional Properties](../../extensions.md) | Defined In |
|-------------------------------|-----------------------------------|---------------------------|-----------------------------|------------------------------------------|----------------------------------------------|------------|
| Can be instantiated | Yes | Experimental | No | Forbidden | Permitted | [context/segmentdefinition-expression.schema.json](context/segmentdefinition-expression.schema.json) |
## Schema Hierarchy

* Segment Expression `https://ns.adobe.com/xdm/context/segmentdefinition-expression`
  * [Extensibility Base Schema](../common/extensible.schema.md) `https://ns.adobe.com/xdm/common/extensible`


## Segment Expression Example
```json
{
  "xdm:segmentExpression": {
    "xdm:expressionType": "PQL",
    "xdm:mimeType": "pql/text",
    "xdm:value": "personalEmail.address.endsWith(\"testxdmmail.com\", false)"
  }
}
```

# Segment Expression Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [xdm:segmentExpression](#xdmsegmentexpression) | `object` | Optional | Segment Expression (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## xdm:segmentExpression
### Segment Expression

`xdm:segmentExpression`
* is optional
* type: `object`
* defined in this schema

### xdm:segmentExpression Type


`object` with following properties:


| Property | Type | Required |
|----------|------|----------|
| `xdm:expressionType`| string | Optional |
| `xdm:mimeType`| string | Optional |
| `xdm:value`| string | Optional |



#### xdm:expressionType
##### Type

Type of expression. For example PQL, QUERYSERVICE, AAM

`xdm:expressionType`
* is optional
* type: `string`

##### xdm:expressionType Type


`string`



##### xdm:expressionType Known Values
| Value | Description |
|-------|-------------|
| `0` | PQL |
| `1` | AAM |
| `2` | QUERYSERVICE |






#### xdm:mimeType
##### Expression Mime Type

Mime Type of expression. For example pql/text, application/sql

`xdm:mimeType`
* is optional
* type: `string`

##### xdm:mimeType Type


`string`


All instances must conform to this regular expression 
(test examples [here](https://regexr.com/?expression=%5Cw%2B%2F%5B-.%5Cw%5D%2B(%3F%3A%5C%2B%5B-.%5Cw%5D%2B)%3F)):
```regex
\w+/[-.\w]+(?:\+[-.\w]+)?
```








#### xdm:value
##### Value

Actual expression string. The syntax of expression will depend upon specified mime type.

`xdm:value`
* is optional
* type: `string`

##### xdm:value Type


`string`










