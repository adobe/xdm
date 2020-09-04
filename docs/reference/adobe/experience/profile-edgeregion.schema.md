
# Data capture region for Profile Schema

```
https://ns.adobe.com/experience/profile-edgeregion
```

Edge region locations and timestamps where the profile data is captured

| [Abstract](../../../abstract.md) | [Extensible](../../../extensions.md) | [Status](../../../status.md) | [Identifiable](../../../id.md) | [Custom Properties](../../../extensions.md) | [Additional Properties](../../../extensions.md) | Defined In |
|----------------------------------|--------------------------------------|------------------------------|--------------------------------|---------------------------------------------|-------------------------------------------------|------------|
| Can be instantiated | Yes | Stable | No | Forbidden | Permitted | [adobe/experience/profile-edgeregion.schema.json](adobe/experience/profile-edgeregion.schema.json) |
## Schema Hierarchy

* Data capture region for Profile `https://ns.adobe.com/experience/profile-edgeregion`
  * [Extensibility base schema](../../datatypes/extensible.schema.md) `https://ns.adobe.com/xdm/common/extensible`


## Data capture region for Profile Example
```json
{
  "xdm:userActivityRegions": {
    "VA6": {
      "xdm:captureTimestamp": "2017-09-26T15:52:20+00:00"
    },
    "OR2": {
      "xdm:captureTimestamp": "2017-09-26T15:52:20+00:00"
    }
  }
}
```

# Data capture region for Profile Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [xdm:userActivityRegions](#xdmuseractivityregions) | `object` | Optional | Data capture region for Profile (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## xdm:userActivityRegions
### Data capture region information

Map of Location and timestamp of regions where this profile was captured.

`xdm:userActivityRegions`
* is optional
* type: `object`
* defined in this schema

### xdm:userActivityRegions Type


`object` with following properties:


| Property | Type | Required |
|----------|------|----------|





