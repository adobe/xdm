
# Decision Option Contents Schema

```
https://ns.adobe.com/experience/decisioning/contents
```

Content items to render the decision item in different contexts. A single decision option can have multiple contents variants. Content is information that is directed towards an audience for consumption in a (digital) experience. Content is delivered through channels into a particular placement.

| [Abstract](../../../../abstract.md) | [Extensible](../../../../extensions.md) | [Status](../../../../status.md) | [Identifiable](../../../../id.md) | [Custom Properties](../../../../extensions.md) | [Additional Properties](../../../../extensions.md) | Defined In |
|-------------------------------------|-----------------------------------------|---------------------------------|-----------------------------------|------------------------------------------------|----------------------------------------------------|------------|
| Can be instantiated | Yes | Stable | No | Forbidden | Permitted | [adobe/experience/decisioning/contents.schema.json](adobe/experience/decisioning/contents.schema.json) |
## Schema Hierarchy

* Decision Option Contents `https://ns.adobe.com/experience/decisioning/contents`
  * [Extensibility base schema](../../../datatypes/extensible.schema.md) `https://ns.adobe.com/xdm/common/extensible`


## Decision Option Contents Example
```json
{
  "https://ns.adobe.com/experience/decisioning/contents": [
    {
      "https://ns.adobe.com/experience/decisioning/placement": "xcore:offer-placement:e51944a87919861",
      "https://ns.adobe.com/experience/decisioning/components": [
        {
          "@type": "https://ns.adobe.com/experience/offer-management/content-component-text",
          "dc:format": "text/template",
          "https://ns.adobe.com/experience/decisioning/content": "You can always get what you want!"
        }
      ]
    }
  ]
}
```

# Decision Option Contents Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [https://ns.adobe.com/experience/decisioning/contents](#httpsnsadobecomexperiencedecisioningcontents) | Content Details | Optional | Decision Option Contents (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## https://ns.adobe.com/experience/decisioning/contents
### Content Details

Content items to render the decision item in different contexts. A single decision option can have multiple contents variants. Content is information that is directed towards an audience for consumption in a (digital) experience. Content is delivered through channels into a particular placement.

`https://ns.adobe.com/experience/decisioning/contents`
* is optional
* type: Content Details

* defined in this schema

### https://ns.adobe.com/experience/decisioning/contents Type


Array type: Content Details

All items must be of the type:
* [Content Details](content-details.schema.md) – `https://ns.adobe.com/experience/decisioning/content-details`







