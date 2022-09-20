
# Workfront Category Attributes Schema

```
https://ns.adobe.com/experience/workfront/category
```

Category related fields

| [Abstract](../../../../abstract.md) | [Extensible](../../../../extensions.md) | [Status](../../../../status.md) | [Identifiable](../../../../id.md) | [Custom Properties](../../../../extensions.md) | [Additional Properties](../../../../extensions.md) | Defined In |
|-------------------------------------|-----------------------------------------|---------------------------------|-----------------------------------|------------------------------------------------|----------------------------------------------------|------------|
| Can be instantiated | Yes | Experimental | No | Forbidden | Permitted | [adobe/experience/workfront/category.schema.json](adobe/experience/workfront/category.schema.json) |

## Workfront Category Attributes Example
```json
{
  "workfront:category": {
    "workfront:isActive": true,
    "workfront:objectCode": "TASK",
    "workfront:groupID": "12321ASDS1232AB"
  }
}
```

# Workfront Category Attributes Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [workfront:category](#workfrontcategory) | `object` | Optional | Workfront Category Attributes (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## workfront:category
### Category Attributes

`workfront:category`
* is optional
* type: `object`
* defined in this schema

### workfront:category Type


`object` with following properties:


| Property | Type | Required |
|----------|------|----------|
| `workfront:description`| string | Optional |
| `workfront:groupID`| string | Optional |
| `workfront:isActive`| boolean | Optional |
| `workfront:objectCode`| string | Optional |



#### workfront:description
##### Category Description

Description of the wf category object

`workfront:description`
* is optional
* type: `string`

##### workfront:description Type


`string`








#### workfront:groupID
##### Category&#39;s Group ID

Group id this category belongs to

`workfront:groupID`
* is optional
* type: `string`

##### workfront:groupID Type


`string`








#### workfront:isActive
##### Category is Active

Flag that describes if category is active

`workfront:isActive`
* is optional
* type: `boolean`

##### workfront:isActive Type


`boolean`







#### workfront:objectCode
##### Category&#39;s object code

Object code for category

`workfront:objectCode`
* is optional
* type: `string`

##### workfront:objectCode Type


`string`










