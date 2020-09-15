
# Adobe CJM ExperienceEvent - Message Delivery Feedback Details Schema

```
https://ns.adobe.com/experience/customerJourneyManagement/message-delivery-feedback
```

Provide details for the delivery feedback for a single message in the Message Execution.

| [Abstract](../../../../abstract.md) | [Extensible](../../../../extensions.md) | [Status](../../../../status.md) | [Identifiable](../../../../id.md) | [Custom Properties](../../../../extensions.md) | [Additional Properties](../../../../extensions.md) | Defined In |
|-------------------------------------|-----------------------------------------|---------------------------------|-----------------------------------|------------------------------------------------|----------------------------------------------------|------------|
| Can be instantiated | Yes | Experimental | No | Forbidden | Permitted | [adobe/experience/customerJourneyManagement/message-delivery-feedback.schema.json](adobe/experience/customerJourneyManagement/message-delivery-feedback.schema.json) |
## Schema Hierarchy

* Adobe CJM ExperienceEvent - Message Delivery Feedback Details `https://ns.adobe.com/experience/customerJourneyManagement/message-delivery-feedback`
  * [Extensibility base schema](../../../datatypes/extensible.schema.md) `https://ns.adobe.com/xdm/common/extensible`


## Adobe CJM ExperienceEvent - Message Delivery Feedback Details Example
```json
{
  "https://ns.adobe.com/experience/customerJourneyManagement/messageDeliveryfeedback/feedbackStatus": "bounce",
  "https://ns.adobe.com/experience/customerJourneyManagement/messageDeliveryfeedback/messageFailure": {
    "https://ns.adobe.com/experience/customerJourneyManagement/messageDeliveryfeedback/messageFailure/reason": "Messagebox is Full",
    "https://ns.adobe.com/experience/customerJourneyManagement/messageDeliveryfeedback/messageFailure/code": "FR-123",
    "https://ns.adobe.com/experience/customerJourneyManagement/messageDeliveryfeedback/messageFailure/type": "Soft"
  },
  "https://ns.adobe.com/experience/customerJourneyManagement/messageDeliveryfeedback/retryCount": 1
}
```

# Adobe CJM ExperienceEvent - Message Delivery Feedback Details Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [https://ns.adobe.com/experience/customerJourneyManagement/messageDeliveryfeedback/feedbackStatus](#httpsnsadobecomexperiencecustomerjourneymanagementmessagedeliveryfeedbackfeedbackstatus) | `enum` | **Required** | Adobe CJM ExperienceEvent - Message Delivery Feedback Details (this schema) |
| [https://ns.adobe.com/experience/customerJourneyManagement/messageDeliveryfeedback/messageExclusion](#httpsnsadobecomexperiencecustomerjourneymanagementmessagedeliveryfeedbackmessageexclusion) | `object` | Optional | Adobe CJM ExperienceEvent - Message Delivery Feedback Details (this schema) |
| [https://ns.adobe.com/experience/customerJourneyManagement/messageDeliveryfeedback/messageFailure](#httpsnsadobecomexperiencecustomerjourneymanagementmessagedeliveryfeedbackmessagefailure) | `object` | Optional | Adobe CJM ExperienceEvent - Message Delivery Feedback Details (this schema) |
| [https://ns.adobe.com/experience/customerJourneyManagement/messageDeliveryfeedback/retryCount](#httpsnsadobecomexperiencecustomerjourneymanagementmessagedeliveryfeedbackretrycount) | `integer` | Optional | Adobe CJM ExperienceEvent - Message Delivery Feedback Details (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## https://ns.adobe.com/experience/customerJourneyManagement/messageDeliveryfeedback/feedbackStatus
### Feedback Status

Provide status of a delivery attempt.

`https://ns.adobe.com/experience/customerJourneyManagement/messageDeliveryfeedback/feedbackStatus`
* is **required**
* type: `enum`
* defined in this schema

The value of this property **must** be equal to one of the [known values below](#httpsnsadobecomexperiencecustomerjourneymanagementmessagedeliveryfeedbackfeedbackstatus-known-values).

### https://ns.adobe.com/experience/customerJourneyManagement/messageDeliveryfeedback/feedbackStatus Known Values
| Value | Description |
|-------|-------------|
| `error` | Mesage processing failed. |
| `exclude` | Messageprofile is filtered out for sending the message |
| `send` | Messages such as Email, SMS, Push that have been dispatched to a person&#39;s account, address, or device. |
| `bounce` | Message failed to deliver, and no longer will be retried. |
| `delay` | message failed to deliver, but will be retry after next schedule time. |




## https://ns.adobe.com/experience/customerJourneyManagement/messageDeliveryfeedback/messageExclusion
### Message Exclusion

`https://ns.adobe.com/experience/customerJourneyManagement/messageDeliveryfeedback/messageExclusion`
* is optional
* type: `object`
* defined in this schema

### https://ns.adobe.com/experience/customerJourneyManagement/messageDeliveryfeedback/messageExclusion Type


`object` with following properties:


| Property | Type | Required |
|----------|------|----------|
| `https://ns.adobe.com/experience/customerJourneyManagement/messageDeliveryfeedback/messageExclusion/code`| string | Optional |
| `https://ns.adobe.com/experience/customerJourneyManagement/messageDeliveryfeedback/messageExclusion/reason`| string | Optional |



#### https://ns.adobe.com/experience/customerJourneyManagement/messageDeliveryfeedback/messageExclusion/code
##### Exclude Code

Provide top level exclusion reason, like typology rule, mandatory parameter missing.

`https://ns.adobe.com/experience/customerJourneyManagement/messageDeliveryfeedback/messageExclusion/code`
* is optional
* type: `string`

##### https://ns.adobe.com/experience/customerJourneyManagement/messageDeliveryfeedback/messageExclusion/code Type


`string`








#### https://ns.adobe.com/experience/customerJourneyManagement/messageDeliveryfeedback/messageExclusion/reason
##### Exclude Reason

Provide exclusion subcode, like exact typology rule-id.

`https://ns.adobe.com/experience/customerJourneyManagement/messageDeliveryfeedback/messageExclusion/reason`
* is optional
* type: `string`

##### https://ns.adobe.com/experience/customerJourneyManagement/messageDeliveryfeedback/messageExclusion/reason Type


`string`











## https://ns.adobe.com/experience/customerJourneyManagement/messageDeliveryfeedback/messageFailure
### Message Failure

`https://ns.adobe.com/experience/customerJourneyManagement/messageDeliveryfeedback/messageFailure`
* is optional
* type: `object`
* defined in this schema

### https://ns.adobe.com/experience/customerJourneyManagement/messageDeliveryfeedback/messageFailure Type


`object` with following properties:


| Property | Type | Required |
|----------|------|----------|
| `https://ns.adobe.com/experience/customerJourneyManagement/messageDeliveryfeedback/messageFailure/code`| string | Optional |
| `https://ns.adobe.com/experience/customerJourneyManagement/messageDeliveryfeedback/messageFailure/reason`| string | Optional |
| `https://ns.adobe.com/experience/customerJourneyManagement/messageDeliveryfeedback/messageFailure/type`| string | Optional |



#### https://ns.adobe.com/experience/customerJourneyManagement/messageDeliveryfeedback/messageFailure/code
##### Failure Code

Failure code for a failed delivery attempt.

`https://ns.adobe.com/experience/customerJourneyManagement/messageDeliveryfeedback/messageFailure/code`
* is optional
* type: `string`

##### https://ns.adobe.com/experience/customerJourneyManagement/messageDeliveryfeedback/messageFailure/code Type


`string`








#### https://ns.adobe.com/experience/customerJourneyManagement/messageDeliveryfeedback/messageFailure/reason
##### Failure Reason

Failure reason for a failed delivery attempt.

`https://ns.adobe.com/experience/customerJourneyManagement/messageDeliveryfeedback/messageFailure/reason`
* is optional
* type: `string`

##### https://ns.adobe.com/experience/customerJourneyManagement/messageDeliveryfeedback/messageFailure/reason Type


`string`








#### https://ns.adobe.com/experience/customerJourneyManagement/messageDeliveryfeedback/messageFailure/type
##### Failure Type

Classifies whether it is a soft bounce or hard bounce.

`https://ns.adobe.com/experience/customerJourneyManagement/messageDeliveryfeedback/messageFailure/type`
* is optional
* type: `string`

##### https://ns.adobe.com/experience/customerJourneyManagement/messageDeliveryfeedback/messageFailure/type Type


`string`



##### https://ns.adobe.com/experience/customerJourneyManagement/messageDeliveryfeedback/messageFailure/type Known Values
| Value | Description |
|-------|-------------|
| `soft` | The reason for failed delivery is temporary. |
| `hard` | The reason for failed delivery is permanent. |









## https://ns.adobe.com/experience/customerJourneyManagement/messageDeliveryfeedback/retryCount
### Retry Count

Number of failed attempts before the current event. The retryCount starts with '0', for message which is sent in first attempt will have 'retryCount' as 0.

`https://ns.adobe.com/experience/customerJourneyManagement/messageDeliveryfeedback/retryCount`
* is optional
* type: `integer`
* defined in this schema

### https://ns.adobe.com/experience/customerJourneyManagement/messageDeliveryfeedback/retryCount Type


`integer`





