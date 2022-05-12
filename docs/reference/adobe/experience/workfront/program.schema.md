
# Work Program Attributes Schema

```
https://ns.adobe.com/experience/workfront/program
```

Program related fields

| [Abstract](../../../../abstract.md) | [Extensible](../../../../extensions.md) | [Status](../../../../status.md) | [Identifiable](../../../../id.md) | [Custom Properties](../../../../extensions.md) | [Additional Properties](../../../../extensions.md) | Defined In |
|-------------------------------------|-----------------------------------------|---------------------------------|-----------------------------------|------------------------------------------------|----------------------------------------------------|------------|
| Can be instantiated | Yes | Experimental | No | Forbidden | Permitted | [adobe/experience/workfront/program.schema.json](adobe/experience/workfront/program.schema.json) |

## Work Program Attributes Example
```json
{
  "workfront:program": {
    "workfront:isActive": true,
    "workfront:ownerEmployeeID": "12321ASDS1232"
  }
}
```

# Work Program Attributes Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [workfront:program](#workfrontprogram) | `object` | Optional | Work Program Attributes (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## workfront:program
### Program Attributes

`workfront:program`
* is optional
* type: `object`
* defined in this schema

### workfront:program Type


`object` with following properties:


| Property | Type | Required |
|----------|------|----------|
| `workfront:description`| string | Optional |
| `workfront:isActive`| boolean | Optional |
| `workfront:ownerEmployeeID`| string | Optional |



#### workfront:description
##### Program Description


`workfront:description`
* is optional
* type: `string`

##### workfront:description Type


`string`








#### workfront:isActive
##### Program is Active


`workfront:isActive`
* is optional
* type: `boolean`

##### workfront:isActive Type


`boolean`







#### workfront:ownerEmployeeID
##### Program Owner Employee ID


`workfront:ownerEmployeeID`
* is optional
* type: `string`

##### workfront:ownerEmployeeID Type


`string`










