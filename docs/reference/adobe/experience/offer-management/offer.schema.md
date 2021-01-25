
# Offer (deprecated) Schema

```
https://ns.adobe.com/experience/offer-management/offer
```

This is the base concept for offers that are used for personalization and those that serve as fallback choices when none of offers for personalization qualify at within the given context. (deprecated)

| [Abstract](../../../../abstract.md) | [Extensible](../../../../extensions.md) | [Status](../../../../status.md) | [Identifiable](../../../../id.md) | [Custom Properties](../../../../extensions.md) | [Additional Properties](../../../../extensions.md) | Defined In |
|-------------------------------------|-----------------------------------------|---------------------------------|-----------------------------------|------------------------------------------------|----------------------------------------------------|------------|
| Can be instantiated | Yes | Deprecated | No | Forbidden | Permitted | [adobe/experience/offer-management/offer.schema.json](adobe/experience/offer-management/offer.schema.json) |

## Offer (deprecated) Example
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
  ]
}
```

# Offer (deprecated) Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [@id](#id) | `string` | Optional | Offer (deprecated) (this schema) |
| [xdm:customMetadata](#xdmcustommetadata) | `object` | Optional | Offer (deprecated) (this schema) |
| [xdm:name](#xdmname) | `string` | **Required** | Offer (deprecated) (this schema) |
| [xdm:representations](#xdmrepresentations) | Representation (deprecated) | Optional | Offer (deprecated) (this schema) |
| [xdm:status](#xdmstatus) | `enum` | **Required** | Offer (deprecated) (this schema) |
| [xdm:tags](#xdmtags) | `string[]` | Optional | Offer (deprecated) (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## @id
### ID

The unique identifier of the offer. It must be unique within a repository container for objects that are not the same, otherwise it is interpreted as referring to the same object.

`@id`
* is optional
* type: `string`
* defined in this schema

### @id Type


`string`
* format: `uri-reference` – URI Reference (according to [RFC3986](https://tools.ietf.org/html/rfc3986))






## xdm:customMetadata
### Custom Properties

Custom metadata is a key-value map that allows the end-users to attach properties to individual offer instances. Any string can be used as a key name, the values are also strings.

`xdm:customMetadata`
* is optional
* type: `object`
* defined in this schema

### xdm:customMetadata Type


`object` with following properties:


| Property | Type | Required |
|----------|------|----------|






## xdm:name
### Name

The offer's name. A human readable string to find one or more offers.

`xdm:name`
* is **required**
* type: `string`
* defined in this schema

### xdm:name Type


`string`






## xdm:representations
### Representations

Offer representations for different content variants. A single offer can have multiple contents variants. An offer representation is the object that connects offers to content. Content is information that is directed towards an audience for consumption in a (digital) experience. Content is delivered through channels (or a particular medium). 

`xdm:representations`
* is optional
* type: Representation (deprecated)

* defined in this schema

### xdm:representations Type


Array type: Representation (deprecated)

All items must be of the type:
* [Representation (deprecated)](offer-representation.schema.md) – `https://ns.adobe.com/experience/offer-management/offer-representation`








## xdm:status
### Status

Offer Status allows user workflows to be conducted with offers. The status may affect where an offer is visible or considered relevant. Status changes are driven by the clients or services that use offers.

`xdm:status`
* is **required**
* type: `enum`
* defined in this schema

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

* defined in this schema

### xdm:tags Type


Array type: `string[]`

All items must be of the type:
`string`
* format: `uri` – Uniformous Resource Identifier (according to [RFC3986](http://tools.ietf.org/html/rfc3986))


  
An identifier of a tag object. The value is the @id of the tag that is referenced. See tag schema: https://ns.adobe.com/experience/offer-management/tag






