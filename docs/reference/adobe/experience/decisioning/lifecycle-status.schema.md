
# Decision Option Lifecycle Status Schema

```
https://ns.adobe.com/experience/decisioning/lifecycle-status
```

Lifecycle status allows user workflows to be conducted with offers. The status may affect where an offer is visible or considered relevant. Status changes are driven by the clients or services that use offers.

| [Abstract](../../../../abstract.md) | [Extensible](../../../../extensions.md) | [Status](../../../../status.md) | [Identifiable](../../../../id.md) | [Custom Properties](../../../../extensions.md) | [Additional Properties](../../../../extensions.md) | Defined In |
|-------------------------------------|-----------------------------------------|---------------------------------|-----------------------------------|------------------------------------------------|----------------------------------------------------|------------|
| Can be instantiated | Yes | Stable | No | Forbidden | Permitted | [adobe/experience/decisioning/lifecycle-status.schema.json](adobe/experience/decisioning/lifecycle-status.schema.json) |
## Schema Hierarchy

* Decision Option Lifecycle Status `https://ns.adobe.com/experience/decisioning/lifecycle-status`
  * [Extensibility base schema](../../../datatypes/extensible.schema.md) `https://ns.adobe.com/xdm/common/extensible`


## Decision Option Lifecycle Status Example
```json
{
  "https://ns.adobe.com/experience/decisioning/lifecycleStatus": "draft"
}
```

# Decision Option Lifecycle Status Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [https://ns.adobe.com/experience/decisioning/lifecycleStatus](#httpsnsadobecomexperiencedecisioninglifecyclestatus) | `enum` | Optional | Decision Option Lifecycle Status (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## https://ns.adobe.com/experience/decisioning/lifecycleStatus
### Lifecycle Status

Lifecycle status allows workflows to be conducted with an object. The status may affect where an object is visible or considered relevant. Status changes are driven by the clients or services that use the objects.

`https://ns.adobe.com/experience/decisioning/lifecycleStatus`
* is optional
* type: `enum`
* default: `"draft"`
* defined in this schema

The value of this property **must** be equal to one of the [known values below](#httpsnsadobecomexperiencedecisioninglifecyclestatus-known-values).

### https://ns.adobe.com/experience/decisioning/lifecycleStatus Known Values
| Value | Description |
|-------|-------------|
| `draft` | Draft |
| `approved` | Approved |
| `live` | Live |
| `completed` | Completed |
| `archived` | Archived |



