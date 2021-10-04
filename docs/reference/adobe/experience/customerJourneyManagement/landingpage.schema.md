
# Adobe ExperienceEvent - Landing Page details Schema

```
https://ns.adobe.com/experience/customerJourneyManagement/landingpage
```

Details about landing page and data input by user in it

| [Abstract](../../../../abstract.md) | [Extensible](../../../../extensions.md) | [Status](../../../../status.md) | [Identifiable](../../../../id.md) | [Custom Properties](../../../../extensions.md) | [Additional Properties](../../../../extensions.md) | Defined In |
|-------------------------------------|-----------------------------------------|---------------------------------|-----------------------------------|------------------------------------------------|----------------------------------------------------|------------|
| Can be instantiated | Yes | Experimental | No | Forbidden | Permitted | [adobe/experience/customerJourneyManagement/landingpage.schema.json](adobe/experience/customerJourneyManagement/landingpage.schema.json) |
## Schema Hierarchy

* Adobe ExperienceEvent - Landing Page details `https://ns.adobe.com/experience/customerJourneyManagement/landingpage`
  * [Extensibility base schema](../../../datatypes/extensible.schema.md) `https://ns.adobe.com/xdm/common/extensible`


## Adobe ExperienceEvent - Landing Page details Example
```json
{
  "https://ns.adobe.com/experience/customerJourneyManagement/landingpage/id": "ca6e39a6-221e-4d18-9631-b6f3d70a85a5",
  "https://ns.adobe.com/experience/customerJourneyManagement/landingpage/name": "October Newsletter",
  "https://ns.adobe.com/experience/customerJourneyManagement/landingpage/messageChannel": "email",
  "https://ns.adobe.com/experience/customerJourneyManagement/landingpage/inputDetails": {
    "firstName": "John",
    "lastName": "Doe",
    "city": "New York City"
  },
  "https://ns.adobe.com/experience/customerJourneyManagement/landingpage/additionalContext": {
    "offer-campaign": "Christmas-offers",
    "productCategory": "electronics"
  },
  "https://ns.adobe.com/experience/customerJourneyManagement/landingpage/subscriptions": [
    {
      "id": "iPhone13-offers",
      "type": "email",
      "subscriberAddress": "johndoe@gmail.com",
      "subscriptionChoice": "yes"
    },
    {
      "id": "Xbox-offers",
      "type": "email",
      "subscriberAddress": "johndoe@gmail.com",
      "subscriptionChoice": "no"
    }
  ]
}
```

# Adobe ExperienceEvent - Landing Page details Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [https://ns.adobe.com/experience/customerJourneyManagement/landingpage/additionalContext](#httpsnsadobecomexperiencecustomerjourneymanagementlandingpageadditionalcontext) | `object` | Optional | Adobe ExperienceEvent - Landing Page details (this schema) |
| [https://ns.adobe.com/experience/customerJourneyManagement/landingpage/id](#httpsnsadobecomexperiencecustomerjourneymanagementlandingpageid) | `string` | Optional | Adobe ExperienceEvent - Landing Page details (this schema) |
| [https://ns.adobe.com/experience/customerJourneyManagement/landingpage/inputDetails](#httpsnsadobecomexperiencecustomerjourneymanagementlandingpageinputdetails) | `object` | Optional | Adobe ExperienceEvent - Landing Page details (this schema) |
| [https://ns.adobe.com/experience/customerJourneyManagement/landingpage/messageChannel](#httpsnsadobecomexperiencecustomerjourneymanagementlandingpagemessagechannel) | `string` | Optional | Adobe ExperienceEvent - Landing Page details (this schema) |
| [https://ns.adobe.com/experience/customerJourneyManagement/landingpage/name](#httpsnsadobecomexperiencecustomerjourneymanagementlandingpagename) | `string` | Optional | Adobe ExperienceEvent - Landing Page details (this schema) |
| [https://ns.adobe.com/experience/customerJourneyManagement/landingpage/subscriptions](#httpsnsadobecomexperiencecustomerjourneymanagementlandingpagesubscriptions) | `object[]` | Optional | Adobe ExperienceEvent - Landing Page details (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## https://ns.adobe.com/experience/customerJourneyManagement/landingpage/additionalContext
### Landing Page Additional Context

`https://ns.adobe.com/experience/customerJourneyManagement/landingpage/additionalContext`
* is optional
* type: `object`
* defined in this schema

### https://ns.adobe.com/experience/customerJourneyManagement/landingpage/additionalContext Type


`object` with following properties:


| Property | Type | Required |
|----------|------|----------|






## https://ns.adobe.com/experience/customerJourneyManagement/landingpage/id
### Landing Page ID

Unique Identifier for Landing Page.

`https://ns.adobe.com/experience/customerJourneyManagement/landingpage/id`
* is optional
* type: `string`
* defined in this schema

### https://ns.adobe.com/experience/customerJourneyManagement/landingpage/id Type


`string`






## https://ns.adobe.com/experience/customerJourneyManagement/landingpage/inputDetails
### Landing Page Input

`https://ns.adobe.com/experience/customerJourneyManagement/landingpage/inputDetails`
* is optional
* type: `object`
* defined in this schema

### https://ns.adobe.com/experience/customerJourneyManagement/landingpage/inputDetails Type


`object` with following properties:


| Property | Type | Required |
|----------|------|----------|






## https://ns.adobe.com/experience/customerJourneyManagement/landingpage/messageChannel
### Message Channel

Channel at which link of this landing page was sent

`https://ns.adobe.com/experience/customerJourneyManagement/landingpage/messageChannel`
* is optional
* type: `string`
* defined in this schema

### https://ns.adobe.com/experience/customerJourneyManagement/landingpage/messageChannel Type


`string`






## https://ns.adobe.com/experience/customerJourneyManagement/landingpage/name
### Landing Page Name

Name of Landing Page.

`https://ns.adobe.com/experience/customerJourneyManagement/landingpage/name`
* is optional
* type: `string`
* defined in this schema

### https://ns.adobe.com/experience/customerJourneyManagement/landingpage/name Type


`string`






## https://ns.adobe.com/experience/customerJourneyManagement/landingpage/subscriptions
### Subscriptions details entered by the user

Subscription details entered by the user

`https://ns.adobe.com/experience/customerJourneyManagement/landingpage/subscriptions`
* is optional
* type: `object[]`

* defined in this schema

### https://ns.adobe.com/experience/customerJourneyManagement/landingpage/subscriptions Type


Array type: `object[]`

All items must be of the type:
`object` with following properties:


| Property | Type | Required |
|----------|------|----------|
| `https://ns.adobe.com/experience/customerJourneyManagement/landingpage/subscriptions/id`| string | Optional |
| `https://ns.adobe.com/experience/customerJourneyManagement/landingpage/subscriptions/subscriberAddress`| string | Optional |
| `https://ns.adobe.com/experience/customerJourneyManagement/landingpage/subscriptions/subscriptionChoice`| string | Optional |
| `https://ns.adobe.com/experience/customerJourneyManagement/landingpage/subscriptions/type`| string | Optional |



#### https://ns.adobe.com/experience/customerJourneyManagement/landingpage/subscriptions/id
##### Subscription ID

Unique Identifier for Subscription

`https://ns.adobe.com/experience/customerJourneyManagement/landingpage/subscriptions/id`
* is optional
* type: `string`

##### https://ns.adobe.com/experience/customerJourneyManagement/landingpage/subscriptions/id Type


`string`








#### https://ns.adobe.com/experience/customerJourneyManagement/landingpage/subscriptions/subscriberAddress
##### Contact address of the subscriber

Contact address of the subscriber

`https://ns.adobe.com/experience/customerJourneyManagement/landingpage/subscriptions/subscriberAddress`
* is optional
* type: `string`

##### https://ns.adobe.com/experience/customerJourneyManagement/landingpage/subscriptions/subscriberAddress Type


`string`








#### https://ns.adobe.com/experience/customerJourneyManagement/landingpage/subscriptions/subscriptionChoice
##### Subscription Choice

Subscription Choice for the Subscription List.

`https://ns.adobe.com/experience/customerJourneyManagement/landingpage/subscriptions/subscriptionChoice`
* is optional
* type: `enum`

The value of this property **must** be equal to one of the [known values below](#httpsnsadobecomexperiencecustomerjourneymanagementlandingpagesubscriptions-known-values).

##### https://ns.adobe.com/experience/customerJourneyManagement/landingpage/subscriptions/subscriptionChoice Known Values
| Value | Description |
|-------|-------------|
| `yes` | Subscribed to Subscription List |
| `no` | Unsubscribed to Subscription List |
| `pending` | Subscription Pending |
| `unknown` | Subscription Unknown |






#### https://ns.adobe.com/experience/customerJourneyManagement/landingpage/subscriptions/type
##### Subscription Type

The type of subscription

`https://ns.adobe.com/experience/customerJourneyManagement/landingpage/subscriptions/type`
* is optional
* type: `string`

##### https://ns.adobe.com/experience/customerJourneyManagement/landingpage/subscriptions/type Type


`string`













