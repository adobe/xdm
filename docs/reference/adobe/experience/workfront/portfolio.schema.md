
# Work Portfolio Attributes Schema

```
https://ns.adobe.com/experience/workfront/portfolio
```

Portfolio related fields

| [Abstract](../../../../abstract.md) | [Extensible](../../../../extensions.md) | [Status](../../../../status.md) | [Identifiable](../../../../id.md) | [Custom Properties](../../../../extensions.md) | [Additional Properties](../../../../extensions.md) | Defined In |
|-------------------------------------|-----------------------------------------|---------------------------------|-----------------------------------|------------------------------------------------|----------------------------------------------------|------------|
| Can be instantiated | Yes | Experimental | No | Forbidden | Permitted | [adobe/experience/workfront/portfolio.schema.json](adobe/experience/workfront/portfolio.schema.json) |

## Work Portfolio Attributes Example
```json
{
  "workfront:portfolio": {
    "workfront:budget": 100.5
  }
}
```

# Work Portfolio Attributes Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [workfront:portfolio](#workfrontportfolio) | `object` | Optional | Work Portfolio Attributes (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## workfront:portfolio
### Portfolio Attributes

`workfront:portfolio`
* is optional
* type: `object`
* defined in this schema

### workfront:portfolio Type


`object` with following properties:


| Property | Type | Required |
|----------|------|----------|
| `workfront:budget`| number | Optional |
| `workfront:description`| string | Optional |
| `workfront:isActive`| boolean | Optional |
| `workfront:ownerEmployeeID`| string | Optional |



#### workfront:budget
##### Portfolio Budget


`workfront:budget`
* is optional
* type: `number`

##### workfront:budget Type


`number`








#### workfront:description
##### Portfolio Description


`workfront:description`
* is optional
* type: `string`

##### workfront:description Type


`string`








#### workfront:isActive
##### Portfolio Is Active


`workfront:isActive`
* is optional
* type: `boolean`

##### workfront:isActive Type


`boolean`







#### workfront:ownerEmployeeID
##### Portfolio Owner Employee ID


`workfront:ownerEmployeeID`
* is optional
* type: `string`

##### workfront:ownerEmployeeID Type


`string`










