---
xdm:navOrder: 2
---

## Related Standards

XDM incorporates or builds a number of existing standards and specifications.

| Standard                                                                                                 | Used for                        | Status   |
| -------------------------------------------------------------------------------------------------------- | ------------------------------- | -------- |
| [Microsoft CDM](https://docs.microsoft.com/en-us/common-data-service/entity-reference/common-data-model) | Data model for business         | Beta     |
| [XMP](http://www.adobe.com/products/xmp.html)                                                            | Asset                           | Stable   |
| [schema.org](http://schema.org)                                                                          | Business schemas                | Evolving |
| [JSON Schema](http://json-schema.org)                                                                    | Representing data model         | Evolving |
| [JSON Hypertext Application Language](https://tools.ietf.org/html/draft-kelly-json-hal-08)               | Expressing links between models | Evolving |
| [EXIF](http://www.exif.org)                                                                              | Image metadata                  | Stable   |
| [TIFF](https://www.iso.org/standard/34342.html)                                                          | Image metadata                  | Frozen   |
| [W3C Activity Streams](https://www.w3.org/TR/activitystreams-core/)                                      | Event model                     | Stable   |
| [Dublin Core](http://dublincore.org/)                                                                    | Cross-media metadata            | Stable   |
| [URI](https://www.ietf.org/rfc/rfc3986.txt)                                                              | Core datatype                   | Stable   |
| [BCP 47 – Tags for Identifying Languages](https://tools.ietf.org/html/bcp47)                             | Core datatype                   | Stable   |

### Relationship to XMP

Prior to XDM, Adobe defined and standardized the Extensible Metadata Platform (XMP) throughout its Creative Cloud products.
The vocabularies and operations of XMP entities are essential for those products as is XDM for the wider experience technology ecosystem.

In XDM, these two efforts are integrated via the Resource Description Framework (RDF), which is a Word Wide Web Consortium (W3C) standard for data model interchange.
XMP models are, at their core, RDF models expressed in an XML-based serialization.
XDM models are, at their core, also RDF models, expressed in JSON-LD.
Either one can be translated to the other using the underlying RDF model as an intermediary.

This fundamental interoperability means all existing XMP models (vocabularies, in XMP parlance) are intrinsically available for use in XDM.
Accordingly, XDM preserves these models with their existing, fully-qualified property names and semantics.
When ACP incorporates these properties into specific media types, a JSON Schema definition, and associated JSON-LD context, are also defined for these properties, as for any other XDM property.

XDM consumers that work with digital media assets (PSD, PDF, and so on) are expected to support XMP as-is—that is, serialized in XMP—as well as expressed in JSON-LD. This latter requirement makes XMP-based data available to all other system components in XDM's preferred format.
