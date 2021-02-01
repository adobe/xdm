
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
{
  "xdm:personalFinances": {
    "xdm:cardApplicationComparisons": {
      "xdm:comparisons": {
        "xdm:comparisonAddition": 1,
        "xdm:comparisonCount": 3,
        "xdm:comparisonItems": [
          "TF0021",
          "WCAT102340P11BN",
          "DEL45CCP"
        ],
        "xdm:comparisonRemoval": 1,
        "xdm:comparisonType": "product",
        "xdm:comparisonView": 1,
        "xdm:comparisonImpressions": ""
      }
    },
    "xdm:cardApplicationSteps": {
      "xdm:form-applications": {
        "xdm:formApplicationApproved": "",
        "xdm:formApplicationDeclined": "",
        "xdm:formApplicationID": "F102931032",
        "xdm:formApplicationRequestedAmount": "2000.00",
        "xdm:formApplicationStatus": "initiated",
        "xdm:formApplicationStatusUpdate": "",
        "xdm:formApplicationType": "loan",
        "xdm:formApplicationUnderReview": "",
        "xdm:formApplicationUsage": ""
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









