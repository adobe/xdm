
# Adobe CJM ExperienceEvent - MessageExecution Details Schema

```
https://ns.adobe.com/experience/customerJourneyManagement/messageexecution
```

MessageExecution details for the Adobe CJM ExperienceEvent.

| [Abstract](../../../../abstract.md) | [Extensible](../../../../extensions.md) | [Status](../../../../status.md) | [Identifiable](../../../../id.md) | [Custom Properties](../../../../extensions.md) | [Additional Properties](../../../../extensions.md) | Defined In |
|-------------------------------------|-----------------------------------------|---------------------------------|-----------------------------------|------------------------------------------------|----------------------------------------------------|------------|
| Can be instantiated | Yes | Experimental | No | Forbidden | Permitted | [adobe/experience/customerJourneyManagement/messageexecution.schema.json](adobe/experience/customerJourneyManagement/messageexecution.schema.json) |
## Schema Hierarchy

* Adobe CJM ExperienceEvent - MessageExecution Details `https://ns.adobe.com/experience/customerJourneyManagement/messageexecution`
  * [Extensibility base schema](../../../datatypes/extensible.schema.md) `https://ns.adobe.com/xdm/common/extensible`


## Adobe CJM ExperienceEvent - MessageExecution Details Example
```json
{
  "https://ns.adobe.com/experience/customerJourneyManagement/messageExecution/messageExecutionID": "4218b775-bef3-46b2-aee2-7caae052cf94",
  "https://ns.adobe.com/experience/customerJourneyManagement/messageExecution/messageID": "aa440b96-ce65-4ad2-b95d-8c3b51f89bc2",
  "https://ns.adobe.com/experience/customerJourneyManagement/messageExecution/messageLabel": "Deal for Gold members",
  "https://ns.adobe.com/experience/customerJourneyManagement/messageExecution/JourneyVersionID": "0cc85961-487d-49e5-9b6c-01f5630756ac",
  "https://ns.adobe.com/experience/customerJourneyManagement/messageExecution/JourneyVersionInstanceId": "b9029525-c33a-40f2-a1c1-95f0b8305078"
}
```

# Adobe CJM ExperienceEvent - MessageExecution Details Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [https://ns.adobe.com/experience/customerJourneyManagement/messageExecution/JourneyVersionID](#httpsnsadobecomexperiencecustomerjourneymanagementmessageexecutionjourneyversionid) | `string` | Optional | Adobe CJM ExperienceEvent - MessageExecution Details (this schema) |
| [https://ns.adobe.com/experience/customerJourneyManagement/messageExecution/JourneyVersionInstanceId](#httpsnsadobecomexperiencecustomerjourneymanagementmessageexecutionjourneyversioninstanceid) | `string` | Optional | Adobe CJM ExperienceEvent - MessageExecution Details (this schema) |
| [https://ns.adobe.com/experience/customerJourneyManagement/messageExecution/messageExecutionID](#httpsnsadobecomexperiencecustomerjourneymanagementmessageexecutionmessageexecutionid) | `string` | **Required** | Adobe CJM ExperienceEvent - MessageExecution Details (this schema) |
| [https://ns.adobe.com/experience/customerJourneyManagement/messageExecution/messageID](#httpsnsadobecomexperiencecustomerjourneymanagementmessageexecutionmessageid) | `string` | Optional | Adobe CJM ExperienceEvent - MessageExecution Details (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## https://ns.adobe.com/experience/customerJourneyManagement/messageExecution/JourneyVersionID
### JourneyVersion ID

 JourneyVersion Id triggerieng the MessageExecution.

`https://ns.adobe.com/experience/customerJourneyManagement/messageExecution/JourneyVersionID`
* is optional
* type: `string`
* defined in this schema

### https://ns.adobe.com/experience/customerJourneyManagement/messageExecution/JourneyVersionID Type


`string`






## https://ns.adobe.com/experience/customerJourneyManagement/messageExecution/JourneyVersionInstanceId
### JourneyVersion Instance Id

Identifier of the journey version instance, specific to one individual (uuid).

`https://ns.adobe.com/experience/customerJourneyManagement/messageExecution/JourneyVersionInstanceId`
* is optional
* type: `string`
* defined in this schema

### https://ns.adobe.com/experience/customerJourneyManagement/messageExecution/JourneyVersionInstanceId Type


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





