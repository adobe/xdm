
# XDM Business Activity Log Schema

```
https://ns.adobe.com/xdm/context/activity-log
```

An XDM Activity in the form of a task or a business event.

| [Abstract](../../abstract.md) | [Extensible](../../extensions.md) | [Status](../../status.md) | [Identifiable](../../id.md) | [Custom Properties](../../extensions.md) | [Additional Properties](../../extensions.md) | Defined In |
|-------------------------------|-----------------------------------|---------------------------|-----------------------------|------------------------------------------|----------------------------------------------|------------|
| Can be instantiated | Yes | Experimental | No | Forbidden | Permitted | [classes/activity-log.schema.json](classes/activity-log.schema.json) |
## Schema Hierarchy

* XDM Business Activity Log `https://ns.adobe.com/xdm/context/activity-log`
  * [Extensibility base schema](../datatypes/extensible.schema.md) `https://ns.adobe.com/xdm/common/extensible`
  * [Time-series Schema](../behaviors/time-series.schema.md) `https://ns.adobe.com/xdm/data/time-series`
  * [External Source System Audit Details Mixin](../mixins/shared/external-source-system-audit-details.schema.md) `https://ns.adobe.com/xdm/common/external-source-system-audit-details`


## XDM Business Activity Log Example
```json
{
  "xdm:activityID": "1",
  "xdm:activityType": {
    "xdm:ID": "6",
    "xdm:type": "Event"
  },
  "@id": "https://data.adobe.io/experienceid-123456",
  "xdm:timestamp": "2020-05-19T09:05:25+00:00",
  "xdm:eventType": "",
  "xdm:extSourceSystemAudit": {
    "xdm:createdBy": "USER111",
    "xdm:createdDate": "2018-01-19T15:52:25+00:00",
    "xdm:lastUpdatedBy": "USER2222",
    "xdm:lastUpdatedDate": "2018-01-19T15:52:25+00:00",
    "xdm:lastActivityDate": "2018-01-19T15:52:25+00:00",
    "xdm:lastReferencedDate": "2018-01-20T15:52:25+00:00",
    "xdm:lastViewedDate": "2018-01-26T15:52:25+00:00"
  }
}
```

# XDM Business Activity Log Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [@id](#id) | `string` | Optional | [Time-series Schema](../behaviors/time-series.schema.md#id) |
| [xdm:activityID](#xdmactivityid) | `string` | Optional | XDM Business Activity Log (this schema) |
| [xdm:activityType](#xdmactivitytype) | complex | Optional | XDM Business Activity Log (this schema) |
| [xdm:eventType](#xdmeventtype) | `string` | Optional | [Time-series Schema](../behaviors/time-series.schema.md#xdmeventtype) |
| [xdm:extSourceSystemAudit](#xdmextsourcesystemaudit) | External Source System Audit Attributes | Optional | [External Source System Audit Details Mixin](../mixins/shared/external-source-system-audit-details.schema.md#xdmextsourcesystemaudit) |
| [xdm:timestamp](#xdmtimestamp) | `string` | Optional | [Time-series Schema](../behaviors/time-series.schema.md#xdmtimestamp) |
| `*` | any | Additional | this schema *allows* additional properties |

## @id
### Identifier

A unique identifier for the time-series event.

`@id`
* is optional
* type: `string`
* defined in [Time-series Schema](../behaviors/time-series.schema.md#id)

### @id Type


`string`
* format: `uri-reference` – URI Reference (according to [RFC3986](https://tools.ietf.org/html/rfc3986))






## xdm:activityID
### Activity ID

Activity log unique identifer

`xdm:activityID`
* is optional
* type: `string`
* defined in this schema

### xdm:activityID Type


`string`






## xdm:activityType
### Activity Type

The tacking type of the activity in the form of a task or a business planned event

`xdm:activityType`
* is optional
* type: complex
* defined in this schema

### xdm:activityType Type

Unknown type ``.

```json
{
  "title": "Activity Type",
  "description": "The tacking type of the activity in the form of a task or a business planned event",
  "properties": {
    "xdm:ID": {
      "title": "ID of the Activity Type",
      "description": "The tacking type of the activity in the form of a task or a business planned event",
      "type": "string"
    },
    "xdm:type": {
      "title": "Type of the Activity Type",
      "description": "The tacking type of the activity in the form of a task or a business planned event",
      "type": "string"
    }
  },
  "required": [
    "xdm:ID",
    "xdm:type"
  ],
  "simpletype": "complex"
}
```





## xdm:eventType
### Event Type

The primary event type for this time-series record.

`xdm:eventType`
* is optional
* type: `string`
* defined in [Time-series Schema](../behaviors/time-series.schema.md#xdmeventtype)

### xdm:eventType Type


`string`



### xdm:eventType Known Values
| Value | Description |
|-------|-------------|
| `advertising.completes` | Indicates if a timed media asset was watched to completion - this does not necessarily mean the viewer watched the whole video; viewer could have skipped ahead. |
| `advertising.timePlayed` | Describes the amount of time spent by a user on a specific timed media asset. |
| `advertising.federated` | Indicates if an experience event was created through data federation (data sharing between customers). |
| `advertising.clicks` | Click(s) actions on an advertisement. |
| `advertising.conversions` | A customer pre-defined action(s) which triggers an event for performance evaluation. |
| `advertising.firstQuartiles` | A digital video ad has played through 25% of its duration at normal speed. |
| `advertising.impressions` | Impression(s) of an advertisement to an end-user with the potential of being viewed. |
| `advertising.midpoints` | A digital video ad has played through 50% of its duration at normal speed. |
| `advertising.starts` | A digital video ad has started playing. |
| `advertising.thirdQuartiles` | A digital video ad has played through 75% of its duration at normal speed. |
| `web.webpagedetails.pageViews` | View(s) of a webpage has occurred. |
| `web.webinteraction.linkClicks` | Click of a web-link has occurred. |
| `commerce.checkouts` | An action during a checkout process of a product list, there can be more than one checkout event if there are multiple steps in a checkout process. If there are multiple steps the event time information and referenced page or experience is used to identify the step individual events represent in order. |
| `commerce.productListAdds` | Addition of a product to the product list. Example a product is added to a shopping cart. |
| `commerce.productListOpens` | Initializations of a new product list. Example a shopping cart is created. |
| `commerce.productListRemovals` | Removal(s) of a product entry from a product list. Example a product is removed from a shopping cart. |
| `commerce.productListReopens` | A product list that was no longer accessible(abandoned) has been re-activated by the user. Example via a re-marketing activity. |
| `commerce.productListViews` | View(s) of a product-list has occurred. |
| `commerce.productViews` | View(s) of a product have occurred. |
| `commerce.purchases` | An order has been accepted. Purchase is the only required action in a commerce conversion. Purchase must have a product list referenced. |
| `commerce.saveForLaters` | Product list is saved for future use. Example a product wish list. |
| `delivery.feedback` | Feedback events for a delivery. Example feedback events for an email delivery. |




## xdm:extSourceSystemAudit
### External Source System Audit Properties

Audit attributes for external sources.

`xdm:extSourceSystemAudit`
* is optional
* type: External Source System Audit Attributes
* defined in [External Source System Audit Details Mixin](../mixins/shared/external-source-system-audit-details.schema.md#xdmextsourcesystemaudit)

### xdm:extSourceSystemAudit Type


* [External Source System Audit Attributes](../datatypes/external-source-system-audit.schema.md) – `https://ns.adobe.com/xdm/common/external-source-system-audit`





## xdm:timestamp
### Timestamp

The time when an event or observation occurred.

`xdm:timestamp`
* is optional
* type: `string`
* defined in [Time-series Schema](../behaviors/time-series.schema.md#xdmtimestamp)

### xdm:timestamp Type


`string`
* format: `date-time` – date and time (according to [RFC 3339, section 5.6](http://tools.ietf.org/html/rfc3339))





