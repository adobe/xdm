
# Decision Content Placement Schema

```
https://ns.adobe.com/experience/decisioning/placement
```

A content placement describes a location or place where the content of a proposed decision option is rendered into. It is used to set technical constraints for content that the decision supplies.

| [Abstract](../../../../abstract.md) | [Extensible](../../../../extensions.md) | [Status](../../../../status.md) | [Identifiable](../../../../id.md) | [Custom Properties](../../../../extensions.md) | [Additional Properties](../../../../extensions.md) | Defined In |
|-------------------------------------|-----------------------------------------|---------------------------------|-----------------------------------|------------------------------------------------|----------------------------------------------------|------------|
| Can be instantiated | Yes | Stable | No | Forbidden | Permitted | [adobe/experience/decisioning/placement.schema.json](adobe/experience/decisioning/placement.schema.json) |
## Schema Hierarchy

* Decision Content Placement `https://ns.adobe.com/experience/decisioning/placement`
  * [Record Schema](../../../behaviors/record.schema.md) `https://ns.adobe.com/xdm/data/record`
  * [Content Component Details](content-component-details.schema.md) `https://ns.adobe.com/experience/decisioning/content-component-details`


## Decision Content Placement Example
```json
{
  "@id": "xcore:placement:12345",
  "https://ns.adobe.com/experience/decisioning/name": "Partner Newsletter Signup Section",
  "https://ns.adobe.com/experience/decisioning/description": "HTML Fragment that adapts to width between 260px and 560px, embeddable in an HTML formatted email. The content must be viewable by a typical email client. It should only use static, table-based layouts HTML tables and nested tables simple, inline CSS and web safe fonts. It cannot assume JavaScript or XHR requests will be processed. iframes, forms, div layering must not be used and content types like embedded audio, embedded video or flash are not allowed. The metrics to produce during interaction with the widget are: https://ns.adobe.com/xdm/data/metrics/web/linkclicks and the experience containing the placement must be asked to produce an experience event referencing this placement Id and with a metric https://ns.adobe.com/xdm/data/metrics/direct-marketing/opens",
  "https://ns.adobe.com/experience/decisioning/channelID": "https://ns.adobe.com/xdm/channels/email",
  "https://ns.adobe.com/experience/decisioning/componentType": "https://ns.adobe.com/experience/offer-management/content-component-html",
  "https://ns.adobe.com/experience/decisioning/contentTypes": [
    "text/html"
  ]
}
```

# Decision Content Placement Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [@id](#id) | `string` | Optional | [Record Schema](../../../behaviors/record.schema.md#id) |
| [https://ns.adobe.com/experience/decisioning/channelID](#httpsnsadobecomexperiencedecisioningchannelid) | `string` | Optional | Decision Content Placement (this schema) |
| [https://ns.adobe.com/experience/decisioning/componentType](#httpsnsadobecomexperiencedecisioningcomponenttype) | `string` | Optional | Decision Content Placement (this schema) |
| [https://ns.adobe.com/experience/decisioning/contentTypes](#httpsnsadobecomexperiencedecisioningcontenttypes) | `string[]` | Optional | Decision Content Placement (this schema) |
| [https://ns.adobe.com/experience/decisioning/description](#httpsnsadobecomexperiencedecisioningdescription) | `string` | Optional | Decision Content Placement (this schema) |
| [https://ns.adobe.com/experience/decisioning/name](#httpsnsadobecomexperiencedecisioningname) | `string` | Optional | Decision Content Placement (this schema) |
| [repo:etag](#repoetag) | `string` | Optional | Decision Content Placement (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## @id
### Identifier

A unique identifier for the record.

`@id`
* is optional
* type: `string`
* defined in [Record Schema](../../../behaviors/record.schema.md#id)

### @id Type


`string`
* format: `uri-reference` – URI Reference (according to [RFC3986](https://tools.ietf.org/html/rfc3986))






## https://ns.adobe.com/experience/decisioning/channelID
### Placement&#39;s Channel Identifier

The channel in which proposition was made. The value is a valid Channel URI. See 'https://ns.adobe.com/xdm/channels/channel'

`https://ns.adobe.com/experience/decisioning/channelID`
* is optional
* type: `string`
* defined in this schema

### https://ns.adobe.com/experience/decisioning/channelID Type


`string`
* format: `uri-reference` – URI Reference (according to [RFC3986](https://tools.ietf.org/html/rfc3986))






## https://ns.adobe.com/experience/decisioning/componentType
### Content Component Type

A constraint for the content that can be shown in the place described by this placement. Component Types for example are: image link, html block or plain text.

`https://ns.adobe.com/experience/decisioning/componentType`
* is optional
* type: `string`
* defined in this schema

### https://ns.adobe.com/experience/decisioning/componentType Type


`string`
* format: `uri-reference` – URI Reference (according to [RFC3986](https://tools.ietf.org/html/rfc3986))






## https://ns.adobe.com/experience/decisioning/contentTypes


`https://ns.adobe.com/experience/decisioning/contentTypes`
* is optional
* type: `string[]`

* defined in this schema

### https://ns.adobe.com/experience/decisioning/contentTypes Type


Array type: `string[]`

All items must be of the type:
`string`


All instances must conform to this regular expression 
(test examples [here](https://regexr.com/?expression=%5Cw%2B%5C%2F%5B-.%5Cw%5D%2B(%3F%3A%5C%2B%5B-.%5Cw%5D%2B)%3F)):
```regex
\w+\/[-.\w]+(?:\+[-.\w]+)?
```



  
A constraint for the media type of the components that is expected in that placement. There could be more than one media type possible for one component such as different image format.







## https://ns.adobe.com/experience/decisioning/description
### Placement Description

Placement description. It is used to convey human readable intentions on how dynamic content is used in the overall message delivery. That a certain space is a "Banner" in a web page is often conveyed via the description and not by a formal method.

`https://ns.adobe.com/experience/decisioning/description`
* is optional
* type: `string`
* defined in this schema

### https://ns.adobe.com/experience/decisioning/description Type


`string`






## https://ns.adobe.com/experience/decisioning/name
### Placement Name

An assigned name for the placement to refer to it in human interactions

`https://ns.adobe.com/experience/decisioning/name`
* is optional
* type: `string`
* defined in this schema

### https://ns.adobe.com/experience/decisioning/name Type


`string`






## repo:etag
### Placement ETag

The revision that the placement object was at when the snapshot was taken.

`repo:etag`
* is optional
* type: `string`
* defined in this schema

### repo:etag Type


`string`






# Decision Content Placement Definitions

| Property | Type | Group |
|----------|------|-------|
| [https://ns.adobe.com/experience/decisioning/placementID](#httpsnsadobecomexperiencedecisioningplacementid) | `string` | `https://ns.adobe.com/experience/decisioning/placement#/definitions/placement-snapshot-identifier` |

## https://ns.adobe.com/experience/decisioning/placementID
### Placement Identifier

A unique identifier for the decision placement.

`https://ns.adobe.com/experience/decisioning/placementID`
* is optional
* type: `string`
* defined in this schema

### https://ns.adobe.com/experience/decisioning/placementID Type


`string`
* format: `uri-reference` – URI Reference (according to [RFC3986](https://tools.ietf.org/html/rfc3986))





