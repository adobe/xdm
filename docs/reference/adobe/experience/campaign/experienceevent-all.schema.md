
# Adobe Campaign ExperienceEvent Full Extension Schema

```
https://ns.adobe.com/experience/campaign/experienceevent-all
```

Adobe Campaign ExperienceEvent full extension. Contains all Solution added fields.

| [Abstract](../../../../abstract.md) | [Extensible](../../../../extensions.md) | [Status](../../../../status.md) | [Identifiable](../../../../id.md) | [Custom Properties](../../../../extensions.md) | [Additional Properties](../../../../extensions.md) | Defined In |
|-------------------------------------|-----------------------------------------|---------------------------------|-----------------------------------|------------------------------------------------|----------------------------------------------------|------------|
| Can be instantiated | Yes | Stable | No | Forbidden | Permitted | [adobe/experience/campaign/experienceevent-all.schema.json](adobe/experience/campaign/experienceevent-all.schema.json) |
## Schema Hierarchy

* Adobe Campaign ExperienceEvent Full Extension `https://ns.adobe.com/experience/campaign/experienceevent-all`
  * [message.schema](message.schema.md) `https://ns.adobe.com/experience/campaign/message`
  * [orchestration.schema](orchestration.schema.md) `https://ns.adobe.com/experience/campaign/orchestration`
  * [Campaign Offer Response Detail](offer-response-detail.schema.md) `https://ns.adobe.com/experience/campaign/offer-response-detail`
  * [Adobe Campaign Mutation Event](mutationevent.schema.md) `https://ns.adobe.com/experience/campaign/mutationevent`


# Adobe Campaign ExperienceEvent Full Extension Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [https://ns.adobe.com/experience/campaign/containerID](#httpsnsadobecomexperiencecampaigncontainerid) | `string` | Optional | Adobe Campaign ExperienceEvent Full Extension (this schema) |
| [https://ns.adobe.com/experience/campaign/delivery](#httpsnsadobecomexperiencecampaigndelivery) | `object` | Optional | Adobe Campaign ExperienceEvent Full Extension (this schema) |
| [https://ns.adobe.com/experience/campaign/eventSource](#httpsnsadobecomexperiencecampaigneventsource) | `string` | Optional | Adobe Campaign ExperienceEvent Full Extension (this schema) |
| [https://ns.adobe.com/experience/campaign/link](#httpsnsadobecomexperiencecampaignlink) | `object` | Optional | Adobe Campaign ExperienceEvent Full Extension (this schema) |
| [https://ns.adobe.com/experience/campaign/marketingCampaign](#httpsnsadobecomexperiencecampaignmarketingcampaign) | `object` | Optional | Adobe Campaign ExperienceEvent Full Extension (this schema) |
| [https://ns.adobe.com/experience/campaign/medium](#httpsnsadobecomexperiencecampaignmedium) | `string` | Optional | Adobe Campaign ExperienceEvent Full Extension (this schema) |
| [https://ns.adobe.com/experience/campaign/message](#httpsnsadobecomexperiencecampaignmessage) | message.schema | Optional | Adobe Campaign ExperienceEvent Full Extension (this schema) |
| [https://ns.adobe.com/experience/campaign/mutation](#httpsnsadobecomexperiencecampaignmutation) | Adobe Campaign Mutation Event | Optional | Adobe Campaign ExperienceEvent Full Extension (this schema) |
| [https://ns.adobe.com/experience/campaign/offerOpened](#httpsnsadobecomexperiencecampaignofferopened) | Campaign Offer Response Detail | Optional | Adobe Campaign ExperienceEvent Full Extension (this schema) |
| [https://ns.adobe.com/experience/campaign/offersProposed](#httpsnsadobecomexperiencecampaignoffersproposed) | Campaign Offer Proposition Detail | Optional | Adobe Campaign ExperienceEvent Full Extension (this schema) |
| [https://ns.adobe.com/experience/campaign/orchestration](#httpsnsadobecomexperiencecampaignorchestration) | orchestration.schema | Optional | Adobe Campaign ExperienceEvent Full Extension (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## https://ns.adobe.com/experience/campaign/containerID
### Container Identifier

The identifier denoting the container with which Campaign ExperienceEvent is associated.

`https://ns.adobe.com/experience/campaign/containerID`
* is optional
* type: `string`
* defined in this schema

### https://ns.adobe.com/experience/campaign/containerID Type


`string`






## https://ns.adobe.com/experience/campaign/delivery
### The campaign activity originating a message to a recipient.

`https://ns.adobe.com/experience/campaign/delivery`
* is optional
* type: `object`
* defined in this schema

### https://ns.adobe.com/experience/campaign/delivery Type


`object` with following properties:


| Property | Type | Required | Default |
|----------|------|----------|---------|
| `xdm:deliveryLabel`| string | Optional |  |
| `xdm:deliveryName`| string | Optional |  |
| `xdm:from`| string | Optional |  |
| `xdm:id`| integer | Optional |  |
| `xdm:messageClass`| string | Optional | `"one_time"` |
| `xdm:templateID`| integer | Optional |  |
| `xdm:templateName`| string | Optional |  |
| `xdm:testEnabled`| boolean | Optional | `false` |



#### xdm:deliveryLabel
##### Delivery Label

A human-friendly name of the campaign activity which is originating this message.

`xdm:deliveryLabel`
* is optional
* type: `string`

##### xdm:deliveryLabel Type


`string`








#### xdm:deliveryName
##### Delivery Internal Name

A human-friendly identifier of the campaign activity which is originating this message.

`xdm:deliveryName`
* is optional
* type: `string`

##### xdm:deliveryName Type


`string`








#### xdm:from
##### From

Address used as a from/sender/caller address. Depending on the communication channel, the `address` has a different format.

  * `email`: an email address.
  * `textMessage` or `phone`: a shortcode or phone number.

`xdm:from`
* is optional
* type: `string`

##### xdm:from Type


`string`








#### xdm:id
##### Delivery ID

The campaign activity originating this message.

`xdm:id`
* is optional
* type: `integer`

##### xdm:id Type


`integer`








#### xdm:messageClass
##### Message Class

Mode of delivery for the messages sent.


`xdm:messageClass`
* is optional
* type: `string`
* default: `"one_time"`


##### xdm:messageClass Type


`string`



##### xdm:messageClass Known Values
| Value | Description |
|-------|-------------|
| `one_time` | Marketing (One Time) |
| `continuous` | Recurring |
| `event_based` | Transactional (Event-based) |






#### xdm:templateID
##### Identifier of the Template

The delivery template's ID used to initialize this delivery.

The type the template used in Adobe Campaign can be identified using the `messageClass`.

* `messageClass` = `oneTime`: the template is standard delivery template.
* `messageClass` = `continuous`: the template is a recurring delivery.
* `messageClass` = `transactional`: the template is a transactional message template.


`xdm:templateID`
* is optional
* type: `integer`

##### xdm:templateID Type


`integer`








#### xdm:templateName
##### Delivery Template&#39;s Internal Name

A human-friendly identifier of the the parent entity (in case of event_based or continuous message Class) of the campaign activity originating this message.

`xdm:templateName`
* is optional
* type: `string`

##### xdm:templateName Type


`string`








#### xdm:testEnabled
##### Test Enabled

Specify whether campaign activity is of type A/B testing.

`xdm:testEnabled`
* is optional
* type: `boolean`
* default: `false`


##### xdm:testEnabled Type


`boolean`










## https://ns.adobe.com/experience/campaign/eventSource
### Event Source

A human-friendly name of the campaign activity which is originating this message.

`https://ns.adobe.com/experience/campaign/eventSource`
* is optional
* type: `string`
* defined in this schema

### https://ns.adobe.com/experience/campaign/eventSource Type


`string`



### https://ns.adobe.com/experience/campaign/eventSource Known Values
| Value | Description |
|-------|-------------|
| `replay-pipelined-mta` | This event was generated via Replay Utility tool generated from Pipelined |
| `replay-pipelined-inMail` | This event was generated via Replay Utility tool generated from Pipelined |
| `replay-pipelined-trackinglogd` | This event was generated via Replay Utility tool generated from Pipelined |
| `replay-pipelined-pipelined` | This event was generated via Replay Utility tool generated from Pipelined |
| `pipelined-mta` | This event was generated via Pipelined generated from mta |
| `pipelined-inMail` | This event was generated via Pipelined generated from inMail |
| `pipelined-trackinglogd` | This event was generated via Pipelined generated from trackinglogd |
| `pipelined-pipelined` | This event was generated via Pipelined generated from Pipelined |
| `replay` | This event was generated via Replay Utility tool which did not have any event source |
| `pipelined-tracker` | This event was generated via Pipelined generated from TrackeR |




## https://ns.adobe.com/experience/campaign/link
### The campaign activity originating a message to a recipient.

`https://ns.adobe.com/experience/campaign/link`
* is optional
* type: `object`
* defined in this schema

### https://ns.adobe.com/experience/campaign/link Type


`object` with following properties:


| Property | Type | Required | Default |
|----------|------|----------|---------|
| `xdm:category`| string | Optional |  |
| `xdm:description`| string | Optional |  |
| `xdm:id`| string | Optional |  |
| `xdm:inAppMessageAction`| string | Optional |  |
| `xdm:inAppMessageButtonText`| string | Optional |  |
| `xdm:label`| string | Optional |  |
| `xdm:occurrence`| integer | Optional | `1` |
| `xdm:url`| string | Optional |  |



#### xdm:category
##### URL Category

The category of the link. It may be `subscription`, or a user-defined category.

`xdm:category`
* is optional
* type: `string`

##### xdm:category Type


`string`








#### xdm:description
##### Tracking URL Description

A human-friendly description of the link.

`xdm:description`
* is optional
* type: `string`

##### xdm:description Type


`string`








#### xdm:id
##### Tracking URL ID

Unique Identifier of the Link

`xdm:id`
* is optional
* type: `string`

##### xdm:id Type


`string`








#### xdm:inAppMessageAction
##### In-App Message Action

Actions on the In-App message delivered, e.g. action on primary button, secondary button or close button.

`xdm:inAppMessageAction`
* is optional
* type: `string`

##### xdm:inAppMessageAction Type


`string`



##### xdm:inAppMessageAction Known Values
| Value | Description |
|-------|-------------|
| `primary` | Primary action |
| `secondary` | Secondary action |
| `dismiss` | Dismiss action |






#### xdm:inAppMessageButtonText
##### In-App Message Button Text

The user-friendly text on the button.

`xdm:inAppMessageButtonText`
* is optional
* type: `string`

##### xdm:inAppMessageButtonText Type


`string`








#### xdm:label
##### URL Label

The user-friendly label clicking on which the link opens.

`xdm:label`
* is optional
* type: `string`

##### xdm:label Type


`string`








#### xdm:occurrence
##### Occurrence

URL occurrence index in the content (first is 1). When the same URL is available several times in the same content, its is necessary to track which occurrence of the URL has been clicked on.

`xdm:occurrence`
* is optional
* type: `integer`
* default: `1`


##### xdm:occurrence Type


`integer`
* minimum value: `1`
* maximum value: `32767`







#### xdm:url
##### URL

URL of the Link.

`xdm:url`
* is optional
* type: `string`

##### xdm:url Type


`string`
* format: `uri` – Uniformous Resource Identifier (according to [RFC3986](http://tools.ietf.org/html/rfc3986))











## https://ns.adobe.com/experience/campaign/marketingCampaign
### The campaign activity originating a message to a recipient.

`https://ns.adobe.com/experience/campaign/marketingCampaign`
* is optional
* type: `object`
* defined in this schema

### https://ns.adobe.com/experience/campaign/marketingCampaign Type


`object` with following properties:


| Property | Type | Required |
|----------|------|----------|
| `xdm:campaignName`| string | Optional |
| `xdm:id`| integer | Optional |



#### xdm:campaignName
##### Campaign Internal Name

A human-friendly identifier of the marketing campaign which is originating this message.

`xdm:campaignName`
* is optional
* type: `string`

##### xdm:campaignName Type


`string`








#### xdm:id
##### Campaign ID

Identifier of the marketing campaign to which activity originating this message belongs to.

`xdm:id`
* is optional
* type: `integer`

##### xdm:id Type


`integer`











## https://ns.adobe.com/experience/campaign/medium
### Medium

The medium is a combination of the source of the event (message, web, ...) and its format if applicable.

`https://ns.adobe.com/experience/campaign/medium`
* is optional
* type: `string`
* defined in this schema

### https://ns.adobe.com/experience/campaign/medium Type


`string`



### https://ns.adobe.com/experience/campaign/medium Known Values
| Value | Description |
|-------|-------------|
| `message_text` | The source of the event is message in a text format. |
| `message_html` | The source of the event is message in a html format. |
| `message_line` | The source of the event is a line message. |
| `web` | The source of the event is web tracking tag in a web page. |
| `offer` | The source of the event is an offer. |




## https://ns.adobe.com/experience/campaign/message
### A single message sent to a recipient.

`https://ns.adobe.com/experience/campaign/message`
* is optional
* type: message.schema
* defined in this schema

### https://ns.adobe.com/experience/campaign/message Type


* [message.schema](message.schema.md) – `https://ns.adobe.com/experience/campaign/message`





## https://ns.adobe.com/experience/campaign/mutation
### Mutated Fields from Previous ExperienceEvent.

Information of the fields that have changed since the previous ExperienceEvent to keep track of the state changes across events. For e.g. if when an email gets sent, an ExperienceEvent with metric `sends` will be sent. This may get bounced and an ExperienceEvent with metric `bounces` will be sent then. It may be important for a downstream application to know that the previous ExperienceEvent with metric `sends` is now to be invalidated. This field will contain the values from the previous ExperienceEvent that have a different value in the current ExperienceEvent.

`https://ns.adobe.com/experience/campaign/mutation`
* is optional
* type: Adobe Campaign Mutation Event
* defined in this schema

### https://ns.adobe.com/experience/campaign/mutation Type


* [Adobe Campaign Mutation Event](mutationevent.schema.md) – `https://ns.adobe.com/experience/campaign/mutationevent`





## https://ns.adobe.com/experience/campaign/offerOpened
### Offer Opened

The offer in the message for an 'offer opened' event.

`https://ns.adobe.com/experience/campaign/offerOpened`
* is optional
* type: Campaign Offer Response Detail
* defined in this schema

### https://ns.adobe.com/experience/campaign/offerOpened Type


* [Campaign Offer Response Detail](offer-response-detail.schema.md) – `https://ns.adobe.com/experience/campaign/offer-response-detail`





## https://ns.adobe.com/experience/campaign/offersProposed
### Offer Propositions

The offers in the message of a 'email-send' event.

`https://ns.adobe.com/experience/campaign/offersProposed`
* is optional
* type: Campaign Offer Proposition Detail

* defined in this schema

### https://ns.adobe.com/experience/campaign/offersProposed Type


Array type: Campaign Offer Proposition Detail

All items must be of the type:
* [Campaign Offer Proposition Detail](offer-proposition-detail.schema.md) – `https://ns.adobe.com/experience/campaign/offer-proposition-detail`








## https://ns.adobe.com/experience/campaign/orchestration
### Campaign Orchestration for creating user journey.

`https://ns.adobe.com/experience/campaign/orchestration`
* is optional
* type: orchestration.schema
* defined in this schema

### https://ns.adobe.com/experience/campaign/orchestration Type


* [orchestration.schema](orchestration.schema.md) – `https://ns.adobe.com/experience/campaign/orchestration`




