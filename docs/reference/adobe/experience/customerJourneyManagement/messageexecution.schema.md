
# Adobe CJM ExperienceEvent - Message Execution Details Schema

```
https://ns.adobe.com/experience/customerJourneyManagement/messageexecution
```

Message Execution details for the Adobe CJM ExperienceEvent.

| [Abstract](../../../../abstract.md) | [Extensible](../../../../extensions.md) | [Status](../../../../status.md) | [Identifiable](../../../../id.md) | [Custom Properties](../../../../extensions.md) | [Additional Properties](../../../../extensions.md) | Defined In |
|-------------------------------------|-----------------------------------------|---------------------------------|-----------------------------------|------------------------------------------------|----------------------------------------------------|------------|
| Can be instantiated | Yes | Stable | No | Forbidden | Permitted | [adobe/experience/customerJourneyManagement/messageexecution.schema.json](adobe/experience/customerJourneyManagement/messageexecution.schema.json) |
## Schema Hierarchy

* Adobe CJM ExperienceEvent - Message Execution Details `https://ns.adobe.com/experience/customerJourneyManagement/messageexecution`
  * [Extensibility base schema](../../../datatypes/extensible.schema.md) `https://ns.adobe.com/xdm/common/extensible`


## Adobe CJM ExperienceEvent - Message Execution Details Example
```json
{
  "https://ns.adobe.com/experience/customerJourneyManagement/messageExecution/messageExecutionID": "4218b775-bef3-46b2-aee2-7caae052cf94",
  "https://ns.adobe.com/experience/customerJourneyManagement/messageExecution/messageID": "aa440b96-ce65-4ad2-b95d-8c3b51f89bc2",
  "https://ns.adobe.com/experience/customerJourneyManagement/messageExecution/messagePublicationID": "132fa0e5-ce65-4ad2-b95d-740ae29e9c51",
  "https://ns.adobe.com/experience/customerJourneyManagement/messageExecution/messageLabel": "Deal for Gold members",
  "https://ns.adobe.com/experience/customerJourneyManagement/messageExecution/journeyVersionID": "0cc85961-487d-49e5-9b6c-01f5630756ac",
  "https://ns.adobe.com/experience/customerJourneyManagement/messageExecution/journeyVersionInstanceID": "b9029525-c33a-40f2-a1c1-95f0b8305078",
  "https://ns.adobe.com/experience/customerJourneyManagement/messageExecution/journeyVersionNodeID": "6cfe93cc-bb0e-4ec9-a39b-56b53a73d28c",
  "https://ns.adobe.com/experience/customerJourneyManagement/messageExecution/journeyActionID": "132fa0e5-7a75-412d-9013-740ae29e9c51"
}
```

# Adobe CJM ExperienceEvent - Message Execution Details Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [https://ns.adobe.com/experience/customerJourneyManagement/messageExecution/journeyActionID](#httpsnsadobecomexperiencecustomerjourneymanagementmessageexecutionjourneyactionid) | `string` | Optional | Adobe CJM ExperienceEvent - Message Execution Details (this schema) |
| [https://ns.adobe.com/experience/customerJourneyManagement/messageExecution/journeyVersionID](#httpsnsadobecomexperiencecustomerjourneymanagementmessageexecutionjourneyversionid) | `string` | Optional | Adobe CJM ExperienceEvent - Message Execution Details (this schema) |
| [https://ns.adobe.com/experience/customerJourneyManagement/messageExecution/journeyVersionInstanceID](#httpsnsadobecomexperiencecustomerjourneymanagementmessageexecutionjourneyversioninstanceid) | `string` | Optional | Adobe CJM ExperienceEvent - Message Execution Details (this schema) |
| [https://ns.adobe.com/experience/customerJourneyManagement/messageExecution/journeyVersionNodeID](#httpsnsadobecomexperiencecustomerjourneymanagementmessageexecutionjourneyversionnodeid) | `string` | Optional | Adobe CJM ExperienceEvent - Message Execution Details (this schema) |
| [https://ns.adobe.com/experience/customerJourneyManagement/messageExecution/messageExecutionID](#httpsnsadobecomexperiencecustomerjourneymanagementmessageexecutionmessageexecutionid) | `string` | **Required** | Adobe CJM ExperienceEvent - Message Execution Details (this schema) |
| [https://ns.adobe.com/experience/customerJourneyManagement/messageExecution/messageID](#httpsnsadobecomexperiencecustomerjourneymanagementmessageexecutionmessageid) | `string` | Optional | Adobe CJM ExperienceEvent - Message Execution Details (this schema) |
| [https://ns.adobe.com/experience/customerJourneyManagement/messageExecution/messagePublicationID](#httpsnsadobecomexperiencecustomerjourneymanagementmessageexecutionmessagepublicationid) | `string` | Optional | Adobe CJM ExperienceEvent - Message Execution Details (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## https://ns.adobe.com/experience/customerJourneyManagement/messageExecution/journeyActionID
### Journey Action ID

Journey Action ID, for which MessageExecution is triggered.

`https://ns.adobe.com/experience/customerJourneyManagement/messageExecution/journeyActionID`
* is optional
* type: `string`
* defined in this schema

### https://ns.adobe.com/experience/customerJourneyManagement/messageExecution/journeyActionID Type


`string`






## https://ns.adobe.com/experience/customerJourneyManagement/messageExecution/journeyVersionID
### JourneyVersion ID

 JourneyVersion Id triggerieng the MessageExecution.

`https://ns.adobe.com/experience/customerJourneyManagement/messageExecution/journeyVersionID`
* is optional
* type: `string`
* defined in this schema

### https://ns.adobe.com/experience/customerJourneyManagement/messageExecution/journeyVersionID Type


`string`






## https://ns.adobe.com/experience/customerJourneyManagement/messageExecution/journeyVersionInstanceID
### JourneyVersion Instance ID

Identifier of the journey version instance, specific to one individual (uuid).

`https://ns.adobe.com/experience/customerJourneyManagement/messageExecution/journeyVersionInstanceID`
* is optional
* type: `string`
* defined in this schema

### https://ns.adobe.com/experience/customerJourneyManagement/messageExecution/journeyVersionInstanceID Type


`string`






## https://ns.adobe.com/experience/customerJourneyManagement/messageExecution/journeyVersionNodeID
### Journey Version Node ID

Identifier of the journey version node, triggering  the Message Execution.

`https://ns.adobe.com/experience/customerJourneyManagement/messageExecution/journeyVersionNodeID`
* is optional
* type: `string`
* defined in this schema

### https://ns.adobe.com/experience/customerJourneyManagement/messageExecution/journeyVersionNodeID Type


`string`






## https://ns.adobe.com/experience/customerJourneyManagement/messageExecution/messageExecutionID
### MessageExecution ID

The CJM activity originating this message.

`https://ns.adobe.com/experience/customerJourneyManagement/messageExecution/messageExecutionID`
* is **required**
* type: `string`
* defined in this schema

### https://ns.adobe.com/experience/customerJourneyManagement/messageExecution/messageExecutionID Type


`string`






## https://ns.adobe.com/experience/customerJourneyManagement/messageExecution/messageID
### Message ID

The parent Message ID of a MessageExecution originating this message.

`https://ns.adobe.com/experience/customerJourneyManagement/messageExecution/messageID`
* is optional
* type: `string`
* defined in this schema

### https://ns.adobe.com/experience/customerJourneyManagement/messageExecution/messageID Type


`string`






## https://ns.adobe.com/experience/customerJourneyManagement/messageExecution/messagePublicationID
### Message Publication ID

The Publication ID of parent Message ID of a MessageExecution originating this message.

`https://ns.adobe.com/experience/customerJourneyManagement/messageExecution/messagePublicationID`
* is optional
* type: `string`
* defined in this schema

### https://ns.adobe.com/experience/customerJourneyManagement/messageExecution/messagePublicationID Type


`string`





