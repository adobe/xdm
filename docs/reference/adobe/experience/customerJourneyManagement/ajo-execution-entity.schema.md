
# AJO  Execution Entities Schema

```
https://ns.adobe.com/experience/customerJourneyManagement/ajoExecution
```

AJO Execution Entities, used for segmentation.

| [Abstract](../../../../abstract.md) | [Extensible](../../../../extensions.md) | [Status](../../../../status.md) | [Identifiable](../../../../id.md) | [Custom Properties](../../../../extensions.md) | [Additional Properties](../../../../extensions.md) | Defined In |
|-------------------------------------|-----------------------------------------|---------------------------------|-----------------------------------|------------------------------------------------|----------------------------------------------------|------------|
| Can be instantiated | Yes | Stable | No | Forbidden | Permitted | [adobe/experience/customerJourneyManagement/ajo-execution-entity.schema.json](adobe/experience/customerJourneyManagement/ajo-execution-entity.schema.json) |
## Schema Hierarchy

* AJO  Execution Entities `https://ns.adobe.com/experience/customerJourneyManagement/ajoExecution`
  * [Extensibility base schema](../../../datatypes/extensible.schema.md) `https://ns.adobe.com/xdm/common/extensible`


## AJO  Execution Entities Example
```json
{
  "https://ns.adobe.com/experience/customerJourneyManagement/ajoExecution/messageExecutionID": "9e3c3315-f2ca-42c0-85d2-6d3e83802b18",
  "https://ns.adobe.com/experience/customerJourneyManagement/ajoExecution/campaignName": "New Marketing Campaign",
  "https://ns.adobe.com/experience/customerJourneyManagement/ajoExecution/journeyName": "An alternate journey",
  "https://ns.adobe.com/experience/customerJourneyManagement/ajoExecution/journeyActionName": "The action under journey",
  "https://ns.adobe.com/experience/customerJourneyManagement/ajoExecution/campaignDescription": "Campaign Description"
}
```

# AJO  Execution Entities Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [https://ns.adobe.com/experience/customerJourneyManagement/ajoExecution/campaignDescription](#httpsnsadobecomexperiencecustomerjourneymanagementajoexecutioncampaigndescription) | `string` | Optional | AJO  Execution Entities (this schema) |
| [https://ns.adobe.com/experience/customerJourneyManagement/ajoExecution/campaignName](#httpsnsadobecomexperiencecustomerjourneymanagementajoexecutioncampaignname) | `string` | Optional | AJO  Execution Entities (this schema) |
| [https://ns.adobe.com/experience/customerJourneyManagement/ajoExecution/journeyActionName](#httpsnsadobecomexperiencecustomerjourneymanagementajoexecutionjourneyactionname) | `string` | Optional | AJO  Execution Entities (this schema) |
| [https://ns.adobe.com/experience/customerJourneyManagement/ajoExecution/journeyName](#httpsnsadobecomexperiencecustomerjourneymanagementajoexecutionjourneyname) | `string` | Optional | AJO  Execution Entities (this schema) |
| [https://ns.adobe.com/experience/customerJourneyManagement/ajoExecution/messageExecutionID](#httpsnsadobecomexperiencecustomerjourneymanagementajoexecutionmessageexecutionid) | `string` | Optional | AJO  Execution Entities (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## https://ns.adobe.com/experience/customerJourneyManagement/ajoExecution/campaignDescription
### Campaign Description

Campaign Description

`https://ns.adobe.com/experience/customerJourneyManagement/ajoExecution/campaignDescription`
* is optional
* type: `string`
* defined in this schema

### https://ns.adobe.com/experience/customerJourneyManagement/ajoExecution/campaignDescription Type


`string`






## https://ns.adobe.com/experience/customerJourneyManagement/ajoExecution/campaignName
### Campaign Name

Campaign Name

`https://ns.adobe.com/experience/customerJourneyManagement/ajoExecution/campaignName`
* is optional
* type: `string`
* defined in this schema

### https://ns.adobe.com/experience/customerJourneyManagement/ajoExecution/campaignName Type


`string`






## https://ns.adobe.com/experience/customerJourneyManagement/ajoExecution/journeyActionName
### Journey Action Name

Journey Action Name

`https://ns.adobe.com/experience/customerJourneyManagement/ajoExecution/journeyActionName`
* is optional
* type: `string`
* defined in this schema

### https://ns.adobe.com/experience/customerJourneyManagement/ajoExecution/journeyActionName Type


`string`






## https://ns.adobe.com/experience/customerJourneyManagement/ajoExecution/journeyName
### Journey Name

Journey Name

`https://ns.adobe.com/experience/customerJourneyManagement/ajoExecution/journeyName`
* is optional
* type: `string`
* defined in this schema

### https://ns.adobe.com/experience/customerJourneyManagement/ajoExecution/journeyName Type


`string`






## https://ns.adobe.com/experience/customerJourneyManagement/ajoExecution/messageExecutionID
### Message Execution ID

Message Execution ID.

`https://ns.adobe.com/experience/customerJourneyManagement/ajoExecution/messageExecutionID`
* is optional
* type: `string`
* defined in this schema

### https://ns.adobe.com/experience/customerJourneyManagement/ajoExecution/messageExecutionID Type


`string`





