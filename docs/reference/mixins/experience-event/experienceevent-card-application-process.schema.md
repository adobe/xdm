
# Card Application Process Schema

```
https://ns.adobe.com/xdm/mixins/experienceevent-card-application-process
```

Card comparison details such as count, addition, removal, and view.

| [Abstract](../../../abstract.md) | [Extensible](../../../extensions.md) | [Status](../../../status.md) | [Identifiable](../../../id.md) | [Custom Properties](../../../extensions.md) | [Additional Properties](../../../extensions.md) | Defined In |
|----------------------------------|--------------------------------------|------------------------------|--------------------------------|---------------------------------------------|-------------------------------------------------|------------|
| Can be instantiated | Yes | Experimental | No | Forbidden | Permitted | [mixins/experience-event/experienceevent-card-application-process.schema.json](mixins/experience-event/experienceevent-card-application-process.schema.json) |

## Card Application Process Example
```json
{}
```

# Card Application Process Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [xdm:personalFinances](#xdmpersonalfinances) | `object` | Optional | Card Application Process (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## xdm:personalFinances


`xdm:personalFinances`
* is optional
* type: `object`
* defined in this schema

### xdm:personalFinances Type


`object` with following properties:


| Property | Type | Required |
|----------|------|----------|
| `xdm:cardApplicationProcess`| object | Optional |



#### xdm:cardApplicationProcess

undefined

`xdm:cardApplicationProcess`
* is optional
* type: `object`

##### xdm:cardApplicationProcess Type

Unknown type `object`.

```json
{
  "type": "object",
  "properties": {
    "xdm:cardApplicationComparisons": {
      "title": "Card Comparisons",
      "$ref": "https://ns.adobe.com/xdm/datatypes/comparisons",
      "description": "Extension of comparison data type."
    },
    "xdm:cardApplicationSteps": {
      "title": "Card Application Steps",
      "$ref": "https://ns.adobe.com/xdm/datatypes/form-applications",
      "description": "Extension of form application data type."
    }
  },
  "simpletype": "`object`"
}
```









