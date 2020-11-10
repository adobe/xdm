
# Representation Schema

```
https://ns.adobe.com/experience/offer-management/offer-representation
```

Offer representation.

| [Abstract](../../../../abstract.md) | [Extensible](../../../../extensions.md) | [Status](../../../../status.md) | [Identifiable](../../../../id.md) | [Custom Properties](../../../../extensions.md) | [Additional Properties](../../../../extensions.md) | Defined In |
|-------------------------------------|-----------------------------------------|---------------------------------|-----------------------------------|------------------------------------------------|----------------------------------------------------|------------|
| Can be instantiated | Yes | Experimental | No | Forbidden | Permitted | [adobe/experience/offer-management/offer-representation.schema.json](adobe/experience/offer-management/offer-representation.schema.json) |

## Representation Examples

```json
{
  "xdm:components": [
    {
      "@type": "https://ns.adobe.com/experience/offer-management/content-component-imagelink",
      "dc:format": "image/png",
      "dc:language": [
        "en"
      ],
      "repo:name": "holidayOffer.2018.png",
      "repo:id": "urn:aaid:sc:VA7:6dc33479-13ca-4b19-b25d-c805eff8a69e",
      "repo:resolveURL": "https://platform-cs-stage.adobe.io/content/directory/resolve?asset_id=&quot;urn:aaid:sc:VA7:6dc33479-13ca-4b19-b25d-c805eff8a69e&quot;",
      "xdm:linkURL": "https://www.mycompany.com/product?trackId=12345"
    }
  ],
  "xdm:placement": "uri:xcore:placement-0001",
  "xdm:channel": "https://ns.adobe.com/xdm/channels/email"
}
```

```json
{
  "xdm:components": [
    {
      "@type": "https://ns.adobe.com/experience/offer-management/content-component-html",
      "dc:format": "text/html",
      "dc:language": [
        "de"
      ],
      "repo:name": "widget_quickbooking.html",
      "repo:id": "urn:aaid:sc:NLD2:0567c1d6-4fdc-4541-b736-f62934fcb5fc",
      "repo:resolveURL": "https://platform-cs-stage.adobe.io/content/directory/resolve?asset_id=&quot;urn:aaid:sc:NLD2:0567c1d6-4fdc-4541-b736-f62934fcb5fc&quot;"
    }
  ],
  "xdm:placement": "uri:xcore:placement-0001",
  "xdm:channel": "https://ns.adobe.com/xdm/channels/email"
}
```

```json
{
  "xdm:components": [
    {
      "@type": "https://ns.adobe.com/experience/offer-management/content-component-text",
      "dc:format": "text/template",
      "dc:language": [
        "en",
        "en-AU",
        "en-CA",
        "en-GB",
        "en-IN",
        "en-IE",
        "en-MT",
        "en-NZ",
        "en-PH",
        "en-SG",
        "en-ZA"
      ],
      "repo:name": "expiration_message_en",
      "repo:id": "urn:aaid:sc:VA7:6dc33479-13ca-4b19-b25d-c805efef0c9e",
      "repo:resolveURL": "https://platform-cs-stage.adobe.io/content/directory/resolve?asset_id=&quot;urn:aaid:sc:VA7:6dc33479-13ca-4b19-b25d-c805efef0c9e&quot;&resource=&quot;api:metadata/application&quot;&name=expiration_message_en",
      "xdm:copyline": "Dear Madam {{profile.person.lastName}}, the offer expires 12/6/2018"
    },
    {
      "@type": "https://ns.adobe.com/experience/offer-management/content-component-text",
      "dc:format": "text/template",
      "dc:language": [
        "en-US"
      ],
      "repo:name": "expiration_message_en-US",
      "repo:id": "urn:aaid:sc:VA7:6dc33479-13ca-4b19-b25d-c805efef0c9e",
      "repo:resolveURL": "https://platform-cs-stage.adobe.io/content/directory/resolve?asset_id=&quot;urn:aaid:sc:VA7:6dc33479-13ca-4b19-b25d-c805efef0c9e&quot;&resource=&quot;api:metadata/application&quot;&name=&quot;expiration_message_en-US&quot;",
      "xdm:copyline": "Dear Madam {{profile.person.lastName}}, the offer expires 6/12/2018"
    },
    {
      "@type": "https://ns.adobe.com/experience/offer-management/content-component-text",
      "dc:format": "text/template",
      "dc:language": [
        "es"
      ],
      "repo:name": "expiration_message_es",
      "repo:resolveURL": "https://platform-cs-stage.adobe.io/content/directory/resolve?asset_id=&quot;urn:aaid:sc:VA7:6dc33479-13ca-4b19-b25d-c805efef0c9e&quot;&resource=&quot;api:metadata/application&quot;&name=&quot;expiration_message_es&quot;",
      "xdm:copyline": "Estimada señora {{profile.person.lastName}}: La oferta vence el 12/6/2018"
    }
  ],
  "xdm:placement": "uri:xcore:placement-0001",
  "xdm:channel": "https://ns.adobe.com/xdm/channels/email"
}
```


# Representation Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [xdm:channel](#xdmchannel) | `string` | **Required** | Representation (this schema) |
| [xdm:components](#xdmcomponents) | reference | **Required** | Representation (this schema) |
| [xdm:placement](#xdmplacement) | `string` | **Required** | Representation (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## xdm:channel
### Channel

The channel constraint is used to convey not only where the offer will be used but determine the content editor or validator that is used for the offer's representation. The value is a valid Channel URI. See 'https://ns.adobe.com/xdm/channels/channel'

`xdm:channel`
* is **required**
* type: `string`
* defined in this schema

### xdm:channel Type


`string`
* format: `uri` – Uniformous Resource Identifier (according to [RFC3986](http://tools.ietf.org/html/rfc3986))






## xdm:components

The content components of the offer representation, including all their language variants. Specific components are found by 'dx:format', 'dc:subject' and 'dc:language' or a combination thereof. This metadata is used to locate or represent the content that is associated with an offer and integrate it according to the placement contract.

`xdm:components`
* is **required**
* type: reference

* defined in this schema

### xdm:components Type


Array type: reference

All items must be of the type:
* []() – `#/definitions/content-component`








## xdm:placement
### Placement

Placement to comply with. The value is the URI (@id) of the offer placement that is referenced. See schema https://ns.adobe.com/experience/offer-management/offer-placement

`xdm:placement`
* is **required**
* type: `string`
* defined in this schema

### xdm:placement Type


`string`
* format: `uri` – Uniformous Resource Identifier (according to [RFC3986](http://tools.ietf.org/html/rfc3986))





