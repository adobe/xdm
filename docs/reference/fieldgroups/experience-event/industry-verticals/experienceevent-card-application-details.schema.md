
# Card Application Process Schema

```
https://ns.adobe.com/xdm/mixins/experienceevent-card-application-details
```

Card comparison details such as count, addition, removal, and view.

| [Abstract](../../../../abstract.md) | [Extensible](../../../../extensions.md) | [Status](../../../../status.md) | [Identifiable](../../../../id.md) | [Custom Properties](../../../../extensions.md) | [Additional Properties](../../../../extensions.md) | Defined In |
|-------------------------------------|-----------------------------------------|---------------------------------|-----------------------------------|------------------------------------------------|----------------------------------------------------|------------|
| Can be instantiated | Yes | Stable | No | Forbidden | Permitted | [fieldgroups/experience-event/industry-verticals/experienceevent-card-application-details.schema.json](fieldgroups/experience-event/industry-verticals/experienceevent-card-application-details.schema.json) |

## Card Application Process Example
```json
{
  "xdm:personalFinances": {
    "xdm:cardApplicationComparisons": {
      "xdm:comparisons": {
        "xdm:comparisonCount": 3,
        "xdm:comparisonType": "product",
        "xdm:comparisonView": 1
      }
    }
  }
}
```

# Card Application Process Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [xdm:personalFinances](#xdmpersonalfinances) | `object` | Optional | Card Application Process (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## xdm:personalFinances

Financial details including transactions, accounts, and applications.

`xdm:personalFinances`
* is optional
* type: `object`
* defined in this schema

### xdm:personalFinances Type


`object` with following properties:


| Property | Type | Required |
|----------|------|----------|
| `xdm:cardApplicationComparisons`|  | Optional |
| `xdm:cardApplicationSteps`|  | Optional |



#### xdm:cardApplicationComparisons
##### Card Comparisons

Extension of comparison data type.

`xdm:cardApplicationComparisons`
* is optional
* type: reference

##### xdm:cardApplicationComparisons Type


* []() – `https://ns.adobe.com/xdm/datatypes/comparisons`







#### xdm:cardApplicationSteps
##### Card Application Steps

Extension of form application data type.

`xdm:cardApplicationSteps`
* is optional
* type: reference

##### xdm:cardApplicationSteps Type


* []() – `https://ns.adobe.com/xdm/datatypes/form-applications`









