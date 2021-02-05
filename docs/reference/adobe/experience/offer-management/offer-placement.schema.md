
# Placement Schema

```
https://ns.adobe.com/experience/offer-management/offer-placement
```

An *offer placement* is a location or place in a personalized message or content experience. It is used to set technical constraints for content selected during personalization. Technical constraints include the content component type that is expected from the personalization (offer representation) and the channel that indicates the context for consuming the content. The channel imposes further constraints on the media type. For instance, html content used in an email is often structured differently than html content used on the web. The placement also represents a request to produce certain types of metrics when an experience event is produced where this placemement is involved. For instance the placement facilitates a personalized clickable image inside an email shown to an end user. The placement may for instance request from the assembled experience that the click on its image gets reported in an experience event with a metric `https://ns.adobe.com/xdm/data/metrics/web/linkclicks` and a reference to this placement. 
An *offer* with its content representations refers to an offer placement object by the placement's @id. This is important that the constraints are not enumerated in the offer or the placement. The placement can be thought to represent the contract between the offer's content and the place where the content needs to be embedded. Any number of constraints can be agreed upon and outside of the repository and can be thought to be represented by a particular offer placement object.
An *offer activity* referencing a particular offer placement means the activity seeks to select content items that comply with the "virtual contract". An offer with its representation pointing to the same offer placement means the offer has a representation that complies with that particular "virtual contract". 
By extending the offer placement schema more structure could be imposed finding the particular placement object. For example, in addition to the media type "image" a custom placement could add a field `aspectRatio` that holds the aspect ratio. What an aspect ratio is does not need to be understood by the offer decisioning process but creating or finding and attaching content to the offer representation needs to make sure the contract is respected and only images with a perticular aspect ratio are used for the offer when the representation makes the reference to the offer placement object.
The mutual contract does not need to rely on physical properties of the content. One can also express an intent what the content should be. An offer placement with a 'video' media type file could be called upon to represent a pre-roll ad or another offer placement might represent that an image is a banner image on a web page.


| [Abstract](../../../../abstract.md) | [Extensible](../../../../extensions.md) | [Status](../../../../status.md) | [Identifiable](../../../../id.md) | [Custom Properties](../../../../extensions.md) | [Additional Properties](../../../../extensions.md) | Defined In |
|-------------------------------------|-----------------------------------------|---------------------------------|-----------------------------------|------------------------------------------------|----------------------------------------------------|------------|
| Can be instantiated | Yes | Stable | No | Forbidden | Permitted | [adobe/experience/offer-management/offer-placement.schema.json](adobe/experience/offer-management/offer-placement.schema.json) |
## Schema Hierarchy

* Placement `https://ns.adobe.com/experience/offer-management/offer-placement`
  * [Record Schema](../../../behaviors/record.schema.md) `https://ns.adobe.com/xdm/data/record`
  * [Decision Content Placement](../decisioning/placement.schema.md) `https://ns.adobe.com/experience/decisioning/placement`
  * [Representation (deprecated)](offer-representation.schema.md) `https://ns.adobe.com/experience/offer-management/offer-representation`


# Placement Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [@id](#id) | `string` | Optional | [Record Schema](../../../behaviors/record.schema.md#id) |
| [https://ns.adobe.com/experience/decisioning/channelID](#httpsnsadobecomexperiencedecisioningchannelid) | `string` | Optional | [Decision Content Placement](../decisioning/placement.schema.md#httpsnsadobecomexperiencedecisioningchannelid) |
| [https://ns.adobe.com/experience/decisioning/componentType](#httpsnsadobecomexperiencedecisioningcomponenttype) | `string` | Optional | [Decision Content Placement](../decisioning/placement.schema.md#httpsnsadobecomexperiencedecisioningcomponenttype) |
| [https://ns.adobe.com/experience/decisioning/contentTypes](#httpsnsadobecomexperiencedecisioningcontenttypes) | `string[]` | Optional | [Decision Content Placement](../decisioning/placement.schema.md#httpsnsadobecomexperiencedecisioningcontenttypes) |
| [https://ns.adobe.com/experience/decisioning/description](#httpsnsadobecomexperiencedecisioningdescription) | `string` | Optional | [Decision Content Placement](../decisioning/placement.schema.md#httpsnsadobecomexperiencedecisioningdescription) |
| [https://ns.adobe.com/experience/decisioning/name](#httpsnsadobecomexperiencedecisioningname) | `string` | Optional | [Decision Content Placement](../decisioning/placement.schema.md#httpsnsadobecomexperiencedecisioningname) |
| [repo:etag](#repoetag) | `string` | Optional | [Decision Content Placement](../decisioning/placement.schema.md#repoetag) |
| [xdm:channel](#xdmchannel) | `string` | Optional | Placement (this schema) |
| [xdm:componentType](#xdmcomponenttype) | `enum` | Optional | Placement (this schema) |
| [xdm:contentTypes](#xdmcontenttypes) | `string[]` | Optional | Placement (this schema) |
| [xdm:description](#xdmdescription) | `string` | Optional | Placement (this schema) |
| [xdm:name](#xdmname) | `string` | Optional | Placement (this schema) |
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
* defined in [Decision Content Placement](../decisioning/placement.schema.md#httpsnsadobecomexperiencedecisioningchannelid)

### https://ns.adobe.com/experience/decisioning/channelID Type


`string`
* format: `uri-reference` – URI Reference (according to [RFC3986](https://tools.ietf.org/html/rfc3986))






## https://ns.adobe.com/experience/decisioning/componentType
### Content Component Type

A constraint for the content that can be shown in the place described by this placement. Component Types for example are: image link, html block or plain text.

`https://ns.adobe.com/experience/decisioning/componentType`
* is optional
* type: `string`
* defined in [Decision Content Placement](../decisioning/placement.schema.md#httpsnsadobecomexperiencedecisioningcomponenttype)

### https://ns.adobe.com/experience/decisioning/componentType Type


`string`
* format: `uri-reference` – URI Reference (according to [RFC3986](https://tools.ietf.org/html/rfc3986))






## https://ns.adobe.com/experience/decisioning/contentTypes


`https://ns.adobe.com/experience/decisioning/contentTypes`
* is optional
* type: `string[]`

* defined in [Decision Content Placement](../decisioning/placement.schema.md#httpsnsadobecomexperiencedecisioningcontenttypes)

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
* defined in [Decision Content Placement](../decisioning/placement.schema.md#httpsnsadobecomexperiencedecisioningdescription)

### https://ns.adobe.com/experience/decisioning/description Type


`string`






## https://ns.adobe.com/experience/decisioning/name
### Placement Name

An assigned name for the placement to refer to it in human interactions

`https://ns.adobe.com/experience/decisioning/name`
* is optional
* type: `string`
* defined in [Decision Content Placement](../decisioning/placement.schema.md#httpsnsadobecomexperiencedecisioningname)

### https://ns.adobe.com/experience/decisioning/name Type


`string`






## repo:etag
### Placement ETag

The revision that the placement object was at when the snapshot was taken.

`repo:etag`
* is optional
* type: `string`
* defined in [Decision Content Placement](../decisioning/placement.schema.md#repoetag)

### repo:etag Type


`string`






## xdm:channel
### Communication Channel (deprecated)

A reference to the channel entity. The channel indicates where the dynamic content is intended to be delivered. The channel constraint is used to convey not only where the offer will be used but also to determine the content editor or validator that is used for the experience. See 'https://ns.adobe.com/xdm/channels/channel'

`xdm:channel`
* is optional
* type: `string`
* defined in this schema

### xdm:channel Type


`string`
* format: `uri` – Uniformous Resource Identifier (according to [RFC3986](http://tools.ietf.org/html/rfc3986))






## xdm:componentType
### Content Type (deprecated)

A constraint for the content that can be shown in the place described by this placement. Component Types are: image, html or plain text.

`xdm:componentType`
* is optional
* type: `enum`
* defined in this schema

The value of this property **must** be equal to one of the [known values below](#xdmcomponenttype-known-values).

### xdm:componentType Known Values
| Value | Description |
|-------|-------------|
| `https://ns.adobe.com/experience/offer-management/content-component-text` | Text component |
| `https://ns.adobe.com/experience/offer-management/content-component-html` | HTML component |
| `https://ns.adobe.com/experience/offer-management/content-component-imagelink` | Image and click link component |




## xdm:contentTypes
### Media Types (deprecated)

`xdm:contentTypes`
* is optional
* type: `string[]`

* defined in this schema

### xdm:contentTypes Type


Array type: `string[]`

All items must be of the type:
`string`


All instances must conform to this regular expression 
(test examples [here](https://regexr.com/?expression=%5Cw%2B%5C%2F%5B-.%5Cw%5D%2B(%3F%3A%5C%2B%5B-.%5Cw%5D%2B)%3F)):
```regex
\w+\/[-.\w]+(?:\+[-.\w]+)?
```



  
A constraint for the media type of the components that is expected in that placement. There could be more than one media type possible for one component such as different image format.







## xdm:description
### Description (deprecated)

Placement description. It is used to convey human readable intentions on how dynamic content is used in the overall message delivery. That a certain space is a "Banner" in a web page is often conveyed via the description and not by a formal method.

`xdm:description`
* is optional
* type: `string`
* defined in this schema

### xdm:description Type


`string`






## xdm:name
### Name (deprecated)

An assigned name for the placement to refer to it in human interactions

`xdm:name`
* is optional
* type: `string`
* defined in this schema

### xdm:name Type


`string`





