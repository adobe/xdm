
# Workfront Category Attributes Schema

```
https://ns.adobe.com/experience/workfront/categoryparameter
```

Category Parameter related fields

| [Abstract](../../../../abstract.md) | [Extensible](../../../../extensions.md) | [Status](../../../../status.md) | [Identifiable](../../../../id.md) | [Custom Properties](../../../../extensions.md) | [Additional Properties](../../../../extensions.md) | Defined In |
|-------------------------------------|-----------------------------------------|---------------------------------|-----------------------------------|------------------------------------------------|----------------------------------------------------|------------|
| Can be instantiated | Yes | Experimental | No | Forbidden | Permitted | [adobe/experience/workfront/categoryparameter.schema.json](adobe/experience/workfront/categoryparameter.schema.json) |

## Workfront Category Attributes Example
```json
{
  "workfront:categoryparameter": {
    "workfront:parameterID": "1234ASD",
    "workfront:parameterGroupID": "12345",
    "workfront:securityLevel": "LE"
  }
}
```

# Workfront Category Attributes Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [workfront:categoryparameter](#workfrontcategoryparameter) | `object` | Optional | Workfront Category Attributes (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## workfront:categoryparameter
### Category Parameter Attributes

`workfront:categoryparameter`
* is optional
* type: `object`
* defined in this schema

### workfront:categoryparameter Type


`object` with following properties:


| Property | Type | Required |
|----------|------|----------|
| `workfront:categoryParameterExpressionID`| string | Optional |
| `workfront:parameterGroupID`| string | Optional |
| `workfront:parameterID`| string | Optional |
| `workfront:securityLevel`| string | Optional |
| `workfront:viewSecurityLevel`| string | Optional |



#### workfront:categoryParameterExpressionID
##### Category Parameter Expression ID

Expression ID of category parameter

`workfront:categoryParameterExpressionID`
* is optional
* type: `string`

##### workfront:categoryParameterExpressionID Type


`string`








#### workfront:parameterGroupID
##### Parameter Group ID

Group ID to which the category parameter belongs to

`workfront:parameterGroupID`
* is optional
* type: `string`

##### workfront:parameterGroupID Type


`string`








#### workfront:parameterID
##### Parameter ID

Parameter ID of category parameter object

`workfront:parameterID`
* is optional
* type: `string`

##### workfront:parameterID Type


`string`








#### workfront:securityLevel
##### Security Level

Security level the category parameter belongs to

`workfront:securityLevel`
* is optional
* type: `string`

##### workfront:securityLevel Type


`string`








#### workfront:viewSecurityLevel
##### View Security Level

Security level view

`workfront:viewSecurityLevel`
* is optional
* type: `string`

##### workfront:viewSecurityLevel Type


`string`










