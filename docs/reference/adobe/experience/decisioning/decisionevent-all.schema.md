
# Decision Event - Reporting Dimensions Schema

```
https://ns.adobe.com/experience/decisioning/decisionevent-all
```

Mixin for Decision Events that adds dimensions for rollup by organization, container, batch job and request.

| [Abstract](../../../../abstract.md) | [Extensible](../../../../extensions.md) | [Status](../../../../status.md) | [Identifiable](../../../../id.md) | [Custom Properties](../../../../extensions.md) | [Additional Properties](../../../../extensions.md) | Defined In |
|-------------------------------------|-----------------------------------------|---------------------------------|-----------------------------------|------------------------------------------------|----------------------------------------------------|------------|
| Can be instantiated | Yes | Stable | No | Forbidden | Permitted | [adobe/experience/decisioning/decisionevent-all.schema.json](adobe/experience/decisioning/decisionevent-all.schema.json) |
## Schema Hierarchy

* Decision Event - Reporting Dimensions `https://ns.adobe.com/experience/decisioning/decisionevent-all`
  * [Extensibility base schema](../../../datatypes/extensible.schema.md) `https://ns.adobe.com/xdm/common/extensible`


## Decision Event - Reporting Dimensions Example
```json
{
  "https://ns.adobe.com/adobecloudplatform/ims/organizationID": "0D8E32C65A8A91520A494008@AdobeOrg",
  "https://ns.adobe.com/experience/decisioning/containerID": "c75afa32-371f-4895-8f43-b853dd9fe740"
}
```

# Decision Event - Reporting Dimensions Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [https://ns.adobe.com/adobecloudplatform/ims/organizationID](#httpsnsadobecomadobecloudplatformimsorganizationid) | `string` | Optional | Decision Event - Reporting Dimensions (this schema) |
| [https://ns.adobe.com/experience/decisioning/batchID](#httpsnsadobecomexperiencedecisioningbatchid) | `string` | Optional | Decision Event - Reporting Dimensions (this schema) |
| [https://ns.adobe.com/experience/decisioning/containerID](#httpsnsadobecomexperiencedecisioningcontainerid) | `string` | Optional | Decision Event - Reporting Dimensions (this schema) |
| [https://ns.adobe.com/experience/decisioning/decisionRequestID](#httpsnsadobecomexperiencedecisioningdecisionrequestid) | `string` | Optional | Decision Event - Reporting Dimensions (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## https://ns.adobe.com/adobecloudplatform/ims/organizationID
### IMS Organization Identifier

An identity associated with the organization that maintains the library of business objects and rules for this decision.

`https://ns.adobe.com/adobecloudplatform/ims/organizationID`
* is optional
* type: `string`
* defined in this schema

### https://ns.adobe.com/adobecloudplatform/ims/organizationID Type


`string`






## https://ns.adobe.com/experience/decisioning/batchID
### Batch Identifier

A workflow identity associated with the decision event, if the request was made in batch mode. This property will be absent if the decision leading to this event was made individually for a single profile identity.

`https://ns.adobe.com/experience/decisioning/batchID`
* is optional
* type: `string`
* defined in this schema

### https://ns.adobe.com/experience/decisioning/batchID Type


`string`






## https://ns.adobe.com/experience/decisioning/containerID
### Container Identifier

An identity associated with the library of business objects and rules for this decision.

`https://ns.adobe.com/experience/decisioning/containerID`
* is optional
* type: `string`
* defined in this schema

### https://ns.adobe.com/experience/decisioning/containerID Type


`string`






## https://ns.adobe.com/experience/decisioning/decisionRequestID
### Request Identifier

An optional identifier that was provided by the client, unique per profile and request. It is used to track the decision request in the dataset of propositions. If a request was processed more than once for any reason there will be more than one event with the same decision request identifier in the dataset and those events can be de-duplicated.

`https://ns.adobe.com/experience/decisioning/decisionRequestID`
* is optional
* type: `string`
* defined in this schema

### https://ns.adobe.com/experience/decisioning/decisionRequestID Type


`string`





