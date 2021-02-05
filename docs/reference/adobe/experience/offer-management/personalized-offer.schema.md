
# Adobe Experience Cloud Personalized Offer (deprecated) Schema

```
https://ns.adobe.com/experience/offer-management/personalized-offer
```

A personalized offer is the conceptual entity that is chosen during the decisioning process. The objective for decisioning is to take a large inventory of content items and apply numerous constraint rules to that inventory to first narrow it down and then rank the qualifying options. The outcome modifies the overall experience to accommodate specific individuals, sometimes tied to groups or segments of individuals. (deprecated)

| [Abstract](../../../../abstract.md) | [Extensible](../../../../extensions.md) | [Status](../../../../status.md) | [Identifiable](../../../../id.md) | [Custom Properties](../../../../extensions.md) | [Additional Properties](../../../../extensions.md) | Defined In |
|-------------------------------------|-----------------------------------------|---------------------------------|-----------------------------------|------------------------------------------------|----------------------------------------------------|------------|
| Can be instantiated | Yes | Deprecated | No | Forbidden | Permitted | [adobe/experience/offer-management/personalized-offer.schema.json](adobe/experience/offer-management/personalized-offer.schema.json) |
## Schema Hierarchy

* Adobe Experience Cloud Personalized Offer (deprecated) `https://ns.adobe.com/experience/offer-management/personalized-offer`
  * [Offer (deprecated)](offer.schema.md) `https://ns.adobe.com/experience/offer-management/offer`


## Adobe Experience Cloud Personalized Offer (deprecated) Example
```json
{
  "@id": "xcore:personalized-offer:e526a1503bf29e9",
  "xdm:name": "Personalized Offer 1",
  "xdm:status": "approved",
  "xdm:representations": [
    {
      "xdm:components": [
        {
          "xdm:text": "You can always get what you want!",
          "@type": "https://ns.adobe.com/experience/offer-management/content-component-text",
          "dc:format": "text/template"
        }
      ],
      "xdm:channel": "https://ns.adobe.com/xdm/channels/email",
      "xdm:placement": "xcore:offer-placement:e51944a87919861"
    }
  ],
  "xdm:tags": [
    "xcore:tag:e5196f1d9119862"
  ],
  "xdm:selectionConstraint": {
    "xdm:startDate": "2018-03-13T05:59:18.914Z",
    "xdm:endDate": "2018-12-27T05:59:18.914Z",
    "xdm:eligibilityRule": "xcore:eligibility-rule:e5244c22eff29e8"
  },
  "xdm:cappingConstraint": {
    "xdm:frequency": 2,
    "xdm:volume": 10
  },
  "xdm:rank": {
    "xdm:priority": 1
  }
}
```

# Adobe Experience Cloud Personalized Offer (deprecated) Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [@id](#id) | `string` | Optional | [Offer (deprecated)](offer.schema.md#id) |
| [xdm:customMetadata](#xdmcustommetadata) | `object` | Optional | [Offer (deprecated)](offer.schema.md#xdmcustommetadata) |
| [xdm:name](#xdmname) | `string` | Optional | [Offer (deprecated)](offer.schema.md#xdmname) |
| [xdm:representations](#xdmrepresentations) | Representation (deprecated) | Optional | [Offer (deprecated)](offer.schema.md#xdmrepresentations) |
| [xdm:status](#xdmstatus) | `enum` | Optional | [Offer (deprecated)](offer.schema.md#xdmstatus) |
| [xdm:tags](#xdmtags) | `string[]` | Optional | [Offer (deprecated)](offer.schema.md#xdmtags) |
| `*` | any | Additional | this schema *allows* additional properties |

## @id
### ID

The unique identifier of the offer. It must be unique within a repository container for objects that are not the same, otherwise it is interpreted as referring to the same object.

`@id`
* is optional
* type: `string`
* defined in [Offer (deprecated)](offer.schema.md#id)

### @id Type


`string`
* format: `uri-reference` – URI Reference (according to [RFC3986](https://tools.ietf.org/html/rfc3986))






## xdm:customMetadata
### Custom Properties

Custom metadata is a key-value map that allows the end-users to attach properties to individual offer instances. Any string can be used as a key name, the values are also strings.

`xdm:customMetadata`
* is optional
* type: `object`
* defined in [Offer (deprecated)](offer.schema.md#xdmcustommetadata)

### xdm:customMetadata Type


`object` with following properties:


| Property | Type | Required |
|----------|------|----------|






## xdm:name
### Name

The offer's name. A human readable string to find one or more offers.

`xdm:name`
* is optional
* type: `string`
* defined in [Offer (deprecated)](offer.schema.md#xdmname)

### xdm:name Type


`string`






## xdm:representations
### Representations

Offer representations for different content variants. A single offer can have multiple contents variants. An offer representation is the object that connects offers to content. Content is information that is directed towards an audience for consumption in a (digital) experience. Content is delivered through channels (or a particular medium). 

`xdm:representations`
* is optional
* type: Representation (deprecated)

* defined in [Offer (deprecated)](offer.schema.md#xdmrepresentations)

### xdm:representations Type


Array type: Representation (deprecated)

All items must be of the type:
* [Representation (deprecated)](offer-representation.schema.md) – `https://ns.adobe.com/experience/offer-management/offer-representation`








## xdm:status
### Status

Offer Status allows user workflows to be conducted with offers. The status may affect where an offer is visible or considered relevant. Status changes are driven by the clients or services that use offers.

`xdm:status`
* is optional
* type: `enum`
* defined in [Offer (deprecated)](offer.schema.md#xdmstatus)

The value of this property **must** be equal to one of the [known values below](#xdmstatus-known-values).

### xdm:status Known Values
| Value | Description |
|-------|-------------|
| `draft` | Draft |
| `pending` | Pending |
| `rejected` | Rejected |
| `approved` | Approved |
| `archived` | Archived |




## xdm:tags
### Tags

The set of tags associated with this offer. The tags are used in offer filter expressions to constrain the overall offer inventory to a topical sub set (category).

`xdm:tags`
* is optional
* type: `string[]`

* defined in [Offer (deprecated)](offer.schema.md#xdmtags)

### xdm:tags Type


Array type: `string[]`

All items must be of the type:
`string`
* format: `uri` – Uniformous Resource Identifier (according to [RFC3986](http://tools.ietf.org/html/rfc3986))


  
An identifier of a tag object. The value is the @id of the tag that is referenced. See tag schema: https://ns.adobe.com/experience/offer-management/tag






