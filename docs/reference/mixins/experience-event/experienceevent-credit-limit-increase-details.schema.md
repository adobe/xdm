
# Credit Limit Increase Details Schema

```
https://ns.adobe.com/xdm/mixins/experienceevent-credit-limit-increase-details
```

Credit limit increase application details such as ID, type, approval, and status.

| [Abstract](../../../abstract.md) | [Extensible](../../../extensions.md) | [Status](../../../status.md) | [Identifiable](../../../id.md) | [Custom Properties](../../../extensions.md) | [Additional Properties](../../../extensions.md) | Defined In |
|----------------------------------|--------------------------------------|------------------------------|--------------------------------|---------------------------------------------|-------------------------------------------------|------------|
| Can be instantiated | Yes | Experimental | No | Forbidden | Permitted | [mixins/experience-event/experienceevent-credit-limit-increase-details.schema.json](mixins/experience-event/experienceevent-credit-limit-increase-details.schema.json) |

## Credit Limit Increase Details Example
```json
{}
```

# Credit Limit Increase Details Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [xdm:personalFinances](#xdmpersonalfinances) | `object` | Optional | Credit Limit Increase Details (this schema) |
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
| `xdm:creditLimitIncreaseDetails`| object | Optional |



#### xdm:creditLimitIncreaseDetails

undefined

`xdm:creditLimitIncreaseDetails`
* is optional
* type: `object`

##### xdm:creditLimitIncreaseDetails Type

Unknown type `object`.

```json
{
  "type": "object",
  "properties": {
    "xdm:creditLimitIncrease": {
      "title": "Credit Limit Increase",
      "$ref": "https://ns.adobe.com/xdm/datatypes/form-applications",
      "description": "Extension of form application data type."
    }
  },
  "simpletype": "`object`"
}
```









