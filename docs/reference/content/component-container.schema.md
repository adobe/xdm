
# Component container Schema

```
https://ns.adobe.com/xdm/content/component-container
```

A container for `Page Component`s, this means for content blocks that are within a _Componentized Page_, not a container for componentized pages themselves. Components in the container can be ordered or unordered, and the type of the container determines how the container is authored, configured, rendered, and displayed.


| [Abstract](../../abstract.md) | [Extensible](../../extensions.md) | [Status](../../status.md) | [Identifiable](../../id.md) | [Custom Properties](../../extensions.md) | [Additional Properties](../../extensions.md) | Defined In |
|-------------------------------|-----------------------------------|---------------------------|-----------------------------|------------------------------------------|----------------------------------------------|------------|
| Can be instantiated | Yes | Experimental | No | Forbidden | Permitted | [content/component-container.schema.json](content/component-container.schema.json) |

## Component container Example
```json
{
  "@type": "https://francois.corp.adobe.com:4502/apps/foundation/generic_container",
  "xdm:itemsOrder": [
    "title0",
    "text0",
    "image0"
  ],
  "xdm:items": {
    "title0": {
      "@type": "https://francois.corp.adobe.com:4502/apps/foundation/title",
      "title": "Protect Your Eyes"
    },
    "image0": {
      "type": "https://francois.corp.adobe.com:4502/apps/foundation/image",
      "image": {
        "@type": "http://ns.adobe.com/adobecloud/core/1.0/asset",
        "repo:id": "urn:aaid:aem:4123ba4c-93a8-4c5d-b979-1234e4318185",
        "id": "https://francois.corp.adobe.com:4502/content/dam/Glasses-small.jpg"
      }
    },
    "text0": {
      "@type": "https://francois.corp.adobe.com:4502/apps/foundation/text",
      "text": "<p>Even during high UV levels...</p>"
    }
  }
}
```

# Component container Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [@type](#type) | `string` | **Required** | Component container (this schema) |
| [xdm:items](#xdmitems) | `object` | **Required** | Component container (this schema) |
| [xdm:itemsOrder](#xdmitemsorder) | `string[]` | Optional | Component container (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## @type

Type of the container, acts as processing hint for the client.

`@type`
* is **required**
* type: `string`
* defined in this schema

### @type Type


`string`
* format: `uri` – Uniformous Resource Identifier (according to [RFC3986](http://tools.ietf.org/html/rfc3986))






## xdm:items

The items of this container.

`xdm:items`
* is **required**
* type: `object`
* defined in this schema

### xdm:items Type


`object` with following properties:


| Property | Type | Required |
|----------|------|----------|






## xdm:itemsOrder

Defines the order of the items in the container. Can be omitted if the order is not important.

`xdm:itemsOrder`
* is optional
* type: `string[]`

* defined in this schema

### xdm:itemsOrder Type


Array type: `string[]`

All items must be of the type:
`string`








