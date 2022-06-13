
# Content Details Schema

```
https://ns.adobe.com/experience/decisioning/content-details
```

Content used to represent a decision option in a particular channel and placement.

| [Abstract](../../../../abstract.md) | [Extensible](../../../../extensions.md) | [Status](../../../../status.md) | [Identifiable](../../../../id.md) | [Custom Properties](../../../../extensions.md) | [Additional Properties](../../../../extensions.md) | Defined In |
|-------------------------------------|-----------------------------------------|---------------------------------|-----------------------------------|------------------------------------------------|----------------------------------------------------|------------|
| Can be instantiated | Yes | Stable | No | Forbidden | Permitted | [adobe/experience/decisioning/content-details.schema.json](adobe/experience/decisioning/content-details.schema.json) |

## Content Details Examples

```json
{
  "https://ns.adobe.com/experience/decisioning/placement": "uri:xcore:placement-0002",
  "https://ns.adobe.com/experience/decisioning/components": [
    {
      "@type": "https://ns.adobe.com/experience/offer-management/content-component-imagelink",
      "dc:format": "image/png",
      "dc:language": [
        "en"
      ],
      "repo:name": "holidayOffer.2018.png",
      "repo:id": "urn:aaid:sc:VA7:6dc33479-13ca-4b19-b25d-c805eff8a69e",
      "repo:resolveURL": "https://platform-cs-stage.adobe.io/content/directory/resolve?asset_id=&quot;urn:aaid:sc:VA7:6dc33479-13ca-4b19-b25d-c805eff8a69e&quot;",
      "https://ns.adobe.com/experience/decisioning/deliveryURL": "https://www.mycompany.com/product?trackId=12345",
      "https://ns.adobe.com/experience/decisioning/linkURL": "https://www.mycompany.com/product?trackId=12345"
    }
  ]
}
```

```json
{
  "https://ns.adobe.com/experience/decisioning/placement": "uri:xcore:placement-0003",
  "https://ns.adobe.com/experience/decisioning/components": [
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
  ]
}
```

```json
{
  "https://ns.adobe.com/experience/decisioning/placement": "uri:xcore:placement-0001",
  "https://ns.adobe.com/experience/decisioning/components": [
    {
      "@type": "https://ns.adobe.com/experience/offer-management/content-component-text-template",
      "dc:format": "text/x-handlebars-template",
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
      "https://ns.adobe.com/experience/decisioning/content": "Dear Madam {{profile.person.lastName}}, the offer expires on 12/6/2018"
    },
    {
      "@type": "https://ns.adobe.com/experience/offer-management/content-component-text-template",
      "dc:format": "text/x-handlebars-template",
      "dc:language": [
        "en-US"
      ],
      "https://ns.adobe.com/experience/decisioning/content": "Hi {{profile.person.firstName}}, your offer expires on 6/12/2018"
    },
    {
      "@type": "https://ns.adobe.com/experience/offer-management/content-component-text-template",
      "dc:format": "text/x-handlebars-template",
      "dc:language": [
        "es"
      ],
      "https://ns.adobe.com/experience/decisioning/content": "Estimada señora {{profile.person.lastName}}: La oferta vence el 12/6/2018"
    }
  ]
}
```


# Content Details Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [xdm:components](#xdmcomponents) | Content Component Details | Optional | Content Details (this schema) |
| [xdm:placement](#xdmplacement) | `string` | Optional | Content Details (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## xdm:components

The components of the content representing the decision option, including all their language variants. Specific components are found by 'dx:format', 'dc:subject' and 'dc:language' or a combination thereof. This metadata is used to locate or represent the content that is associated with an offer and integrate it according to the placement contract.

`xdm:components`
* is optional
* type: Content Component Details

* defined in this schema

### xdm:components Type


Array type: Content Component Details

All items must be of the type:
* [Content Component Details](content-component-details.schema.md) – `https://ns.adobe.com/experience/decisioning/content-component-details`








## xdm:placement
### Placement

Placement to comply with. The value is the URI (@id) of the offer placement that is referenced. See schema https://ns.adobe.com/experience/decisioning/placement

`xdm:placement`
* is optional
* type: `string`
* defined in this schema

### xdm:placement Type


`string`
* format: `uri-reference` – URI Reference (according to [RFC3986](https://tools.ietf.org/html/rfc3986))





