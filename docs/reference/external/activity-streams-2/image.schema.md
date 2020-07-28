
# Image Document Schema

```
https://ns.adobe.com/xdm/external/activity-streams-2/image
```

An image document of any kind. Refer to the [Activity Streams 2.0 Core](https://www.w3.org/TR/activitystreams-vocabulary/#dfn-image) specification for a complete description of the `image` type.

| [Abstract](../../../abstract.md) | [Extensible](../../../extensions.md) | [Status](../../../status.md) | [Identifiable](../../../id.md) | [Custom Properties](../../../extensions.md) | [Additional Properties](../../../extensions.md) | Defined In |
|----------------------------------|--------------------------------------|------------------------------|--------------------------------|---------------------------------------------|-------------------------------------------------|------------|
| Can be instantiated | No | Stable | No | Forbidden | Permitted | [external/activity-streams-2/image.schema.json](external/activity-streams-2/image.schema.json) |

## Image Document Example
```json
{
  "@context": {
    "activitystreams": "http://www.w3.org/ns/activitystreams#"
  },
  "@type": "http://www.w3.org/ns/activitystreams#Image",
  "activitystreams:name": "Cat Jumping on Wagon",
  "activitystreams:url": [
    {
      "@type": "http://www.w3.org/ns/activitystreams#Link",
      "activitystreams:href": "http://example.org/image.jpeg",
      "activitystreams:mediaType": "image/jpeg"
    },
    {
      "@type": "http://www.w3.org/ns/activitystreams#Link",
      "activitystreams:href": "http://example.org/image.png",
      "activitystreams:mediaType": "image/png"
    }
  ]
}
```
