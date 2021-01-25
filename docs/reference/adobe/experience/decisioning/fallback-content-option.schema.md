
# Fallback Content Decision Option Schema

```
https://ns.adobe.com/experience/decisioning/fallback-content-option
```

A default decision option that is used when there is no personalized content is left after checking all constraints. The Fallback content mixin cannot be combined with mixins that express constraint because a fallback option must be remain applicable for any use in a given context.

| [Abstract](../../../../abstract.md) | [Extensible](../../../../extensions.md) | [Status](../../../../status.md) | [Identifiable](../../../../id.md) | [Custom Properties](../../../../extensions.md) | [Additional Properties](../../../../extensions.md) | Defined In |
|-------------------------------------|-----------------------------------------|---------------------------------|-----------------------------------|------------------------------------------------|----------------------------------------------------|------------|
| Can be instantiated | Yes | Stable | No | Forbidden | Permitted | [adobe/experience/decisioning/fallback-content-option.schema.json](adobe/experience/decisioning/fallback-content-option.schema.json) |
## Schema Hierarchy

* Fallback Content Decision Option `https://ns.adobe.com/experience/decisioning/fallback-content-option`
  * [Decision Option Lifecycle Status](lifecycle-status.schema.md) `https://ns.adobe.com/experience/decisioning/lifecycle-status`
  * [Decisioning Option Tags](tags.schema.md) `https://ns.adobe.com/experience/decisioning/tags`
  * [Decision Option Contents](contents.schema.md) `https://ns.adobe.com/experience/decisioning/contents`


## Fallback Content Decision Option Example
```json
{
  "@id": "xcore:fallback-offer:20216ba8e04e44ac",
  "https://ns.adobe.com/experience/decisioning/name": "Default Offer",
  "https://ns.adobe.com/experience/decisioning/status": "approved",
  "https://ns.adobe.com/experience/decisioning/tags": [
    "xcore:tag:f87c371cd0b20be"
  ],
  "https://ns.adobe.com/experience/decisioning/contents": [
    {
      "https://ns.adobe.com/experience/decisioning/placement": "xcore:offer-placement:f8eb10f058477e3",
      "https://ns.adobe.com/experience/decisioning/components": [
        {
          "@type": "https://ns.adobe.com/experience/offer-management/content-component-text",
          "dc:format": "text/plain",
          "dc:language": [
            "en"
          ],
          "https://ns.adobe.com/experience/decisioning/content": "text entered directly"
        }
      ]
    },
    {
      "https://ns.adobe.com/experience/decisioning/placement": "xcore:offer-placement:f652463157c0ba4",
      "https://ns.adobe.com/experience/decisioning/components": [
        {
          "@type": "https://ns.adobe.com/experience/offer-management/content-component-text",
          "dc:format": "text/plain",
          "dc:language": [
            "en"
          ],
          "repo:name": "legal_terms_2020.txt",
          "repo:id": "urn:aaid:sc:VA7:3ae9f3b1-15fe-49bf-9a17-2a5bcd138762",
          "repo:resolveURL": "https://platform-cs-stage.adobe.io/content/directory/resolve?id=&quot;urn:aaid:sc:VA7:3ae9f3b1-15fe-49bf-9a17-2a5bcd138762&quot;"
        },
        {
          "@type": "https://ns.adobe.com/experience/offer-management/content-component-text",
          "dc:format": "text/plain",
          "dc:language": [
            "es"
          ],
          "repo:name": "legal_terms_2020.txt",
          "repo:id": "urn:aaid:sc:VA7:3ae9f3b1-15fe-49bf-9a17-2a5bcd138762",
          "repo:resolveURL": "https://platform-cs-stage.adobe.io/content/directory/resolve?id=&quot;urn:aaid:sc:VA7:3ae9f3b1-15fe-49bf-9a17-2a5bcd138762&quot;&resource=&quot;api:metadata/application&quot;&name=&quot;legal_terms_2020_es.txt&quot;"
        }
      ]
    }
  ]
}
```

# Fallback Content Decision Option Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [https://ns.adobe.com/experience/decisioning/contents](#httpsnsadobecomexperiencedecisioningcontents) | Content Details | Optional | [Decision Option Contents](contents.schema.md#httpsnsadobecomexperiencedecisioningcontents) |
| [https://ns.adobe.com/experience/decisioning/lifecycleStatus](#httpsnsadobecomexperiencedecisioninglifecyclestatus) | `enum` | Optional | [Decision Option Lifecycle Status](lifecycle-status.schema.md#httpsnsadobecomexperiencedecisioninglifecyclestatus) |
| [https://ns.adobe.com/experience/decisioning/tags](#httpsnsadobecomexperiencedecisioningtags) | `string[]` | Optional | [Decisioning Option Tags](tags.schema.md#httpsnsadobecomexperiencedecisioningtags) |
| `*` | any | Additional | this schema *allows* additional properties |

## https://ns.adobe.com/experience/decisioning/contents
### Content Details

Content items to render the decision item in different contexts. A single decision option can have multiple contents variants. Content is information that is directed towards an audience for consumption in a (digital) experience. Content is delivered through channels into a particular placement.

`https://ns.adobe.com/experience/decisioning/contents`
* is optional
* type: Content Details

* defined in [Decision Option Contents](contents.schema.md#httpsnsadobecomexperiencedecisioningcontents)

### https://ns.adobe.com/experience/decisioning/contents Type


Array type: Content Details

All items must be of the type:
* [Content Details](content-details.schema.md) – `https://ns.adobe.com/experience/decisioning/content-details`








## https://ns.adobe.com/experience/decisioning/lifecycleStatus
### Lifecycle Status

Lifecycle status allows workflows to be conducted with an object. The status may affect where an object is visible or considered relevant. Status changes are driven by the clients or services that use the objects.

`https://ns.adobe.com/experience/decisioning/lifecycleStatus`
* is optional
* type: `enum`
* default: `"draft"`
* defined in [Decision Option Lifecycle Status](lifecycle-status.schema.md#httpsnsadobecomexperiencedecisioninglifecyclestatus)

The value of this property **must** be equal to one of the [known values below](#httpsnsadobecomexperiencedecisioninglifecyclestatus-known-values).

### https://ns.adobe.com/experience/decisioning/lifecycleStatus Known Values
| Value | Description |
|-------|-------------|
| `draft` | Draft |
| `approved` | Approved |
| `live` | Live |
| `completed` | Completed |
| `archived` | Archived |




## https://ns.adobe.com/experience/decisioning/tags
### Tags

The set of tags associated with this entity. The tags are used in filter expressions to constrain the overall inventory to a sub set (category).

`https://ns.adobe.com/experience/decisioning/tags`
* is optional
* type: `string[]`

* defined in [Decisioning Option Tags](tags.schema.md#httpsnsadobecomexperiencedecisioningtags)

### https://ns.adobe.com/experience/decisioning/tags Type


Array type: `string[]`

All items must be of the type:
`string`
* format: `uri-reference` – URI Reference (according to [RFC3986](https://tools.ietf.org/html/rfc3986))


  
An identifier of a tag object. The value is the @id of the tag that is referenced. See tag schema: https://ns.adobe.com/experience/decisioning/tag






