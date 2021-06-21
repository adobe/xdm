
# Adobe Campaign Mutation Event Schema

```
https://ns.adobe.com/experience/campaign/mutationevent
```

Adobe Campaign mutation event.

| [Abstract](../../../../abstract.md) | [Extensible](../../../../extensions.md) | [Status](../../../../status.md) | [Identifiable](../../../../id.md) | [Custom Properties](../../../../extensions.md) | [Additional Properties](../../../../extensions.md) | Defined In |
|-------------------------------------|-----------------------------------------|---------------------------------|-----------------------------------|------------------------------------------------|----------------------------------------------------|------------|
| Can be instantiated | Yes | Stable | No | Forbidden | Permitted | [adobe/experience/campaign/mutationevent.schema.json](adobe/experience/campaign/mutationevent.schema.json) |
## Schema Hierarchy

* Adobe Campaign Mutation Event `https://ns.adobe.com/experience/campaign/mutationevent`
  * [Web information](../../../datatypes/webinfo.schema.md) `https://ns.adobe.com/xdm/context/webinfo`
  * [Direct marketing](../../../datatypes/marketing/direct-marketing.schema.md) `https://ns.adobe.com/xdm/context/direct-marketing`


# Adobe Campaign Mutation Event Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [https://ns.adobe.com/experience/campaign/message](#httpsnsadobecomexperiencecampaignmessage) | `object` | Optional | Adobe Campaign Mutation Event (this schema) |
| [xdm:directMarketing](#xdmdirectmarketing) | Direct marketing | Optional | Adobe Campaign Mutation Event (this schema) |
| [xdm:timestamp](#xdmtimestamp) | `string` | Optional | Adobe Campaign Mutation Event (this schema) |
| [xdm:web](#xdmweb) | Web information | Optional | Adobe Campaign Mutation Event (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## https://ns.adobe.com/experience/campaign/message
### A single message sent to a recipient.

`https://ns.adobe.com/experience/campaign/message`
* is optional
* type: `object`
* defined in this schema

### https://ns.adobe.com/experience/campaign/message Type


`object` with following properties:


| Property | Type | Required | Default |
|----------|------|----------|---------|
| `xdm:quarantine`| boolean | Optional | `false` |
| `xdm:reason`| string | Optional | `"undefined"` |



#### xdm:quarantine
##### Quarantine

Address moved to quarantine. The quarantine is set to `true` when the message failed to deliver in a way that indicates that no future messages will be deliverable either to this address.

`xdm:quarantine`
* is optional
* type: `boolean`
* default: `false`


##### xdm:quarantine Type


`boolean`







#### xdm:reason
##### Reason

The reason why the message could/would not be delivered.

`xdm:reason`
* is optional
* type: `string`
* default: `"undefined"`


##### xdm:reason Type


`string`



##### xdm:reason Known Values
| Value | Description |
|-------|-------------|
| `undefined` | Not defined |
| `unknown_user` | The address does not exist. There is no use sending deliveries to this address. |
| `invalid_domain` | The domain of the email address is incorrect or no longer exists. |
| `unreachable` | An error has occurred in the message delivery chain.These addresses can be removed from the quarantine list to make another attempt. |
| `disabled` | The user uses a messaging service which is accessible from the web. When the Internet Access Provider (IAP) detects a lengthy period of inactivity, it can close the user&#39;s account. Deliveries to the user&#39;s address will then be impossible. |
| `mailbox_full` | The recipient&#39;s mailbox contains too many messages. This address can be removed from the quarantine list to make another attempt. |
| `not_connected` | The recipient&#39;s mobile phone is switched off or not connected to the network when the message is sent. |
| `refused` | The address was rejected following the application of a security rule (e.g. by an anti-spam program) |
| `error_ignored` | The address is whitelisted and the message ignored. |
| `address_undefined` | No address is given for the recipient. |
| `blacklisted` | The address was blacklisted at the time of sending. |
| `quarantine` | The address was in quarantine at the time of sending. |
| `duplicate` | The address of the recipient was already in this campaign activity. |
| `typology_rule` | The recipient was excluded by a &#39;SQL&#39; type campaign typology rule. |
| `business_ranking` | The recipient was excluded by an &#39;arbitration&#39; type campaign typology rule |
| `cancelled` | Delivery cancelled |
| `quality` | The quality rating for this address is too low |
| `unchecked` | Unqualified address |
| `offer_missing` | Not eligible for the offers |
| `over_delivery_limit` | The campaign activity had more than allowed number of target profiles. |
| `expired` | The campaign activity exceeded the time duration to complete. |
| `too_long` | Text too long |
| `untranslatable` | Character not supported by encoding |
| `control_group` | Control address |









## xdm:directMarketing
### Direct Marketing

The events and properties related to direct/outbound marketing such as email, direct mail, texts and in-app notifications.

`xdm:directMarketing`
* is optional
* type: Direct marketing
* defined in this schema

### xdm:directMarketing Type


* [Direct marketing](../../../datatypes/marketing/direct-marketing.schema.md) – `https://ns.adobe.com/xdm/context/direct-marketing`





## xdm:timestamp
### Timestamp

The time when the first event of the interaction occurred.

`xdm:timestamp`
* is optional
* type: `string`
* defined in this schema

### xdm:timestamp Type


`string`
* format: `date-time` – date and time (according to [RFC 3339, section 5.6](http://tools.ietf.org/html/rfc3339))






## xdm:web
### Web

Link clicks, web page details, referrer information, and browser details.

`xdm:web`
* is optional
* type: Web information
* defined in this schema

### xdm:web Type


* [Web information](../../../datatypes/webinfo.schema.md) – `https://ns.adobe.com/xdm/context/webinfo`




