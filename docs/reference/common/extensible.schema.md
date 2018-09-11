
# Extensibility base schema Schema

```
https://ns.adobe.com/xdm/common/extensible
```

This schema can be included by referencing `https://ns.adobe.com/xdm/common/extensible`. It will enable property-based extensibility with namespace protection.

In order to make a given schema extensible, include this section at the bottom of your schema:

```json
"allOf":[
    {"$ref": "https://ns.adobe.com/xdm/common/extensible#/definitions/@context"},
    {"$ref": "#/definitions/…"}
  ]
```

Replace `#/definitions/…` with the correct path to the `definitions` object in your local schema.


| [Abstract](../../abstract.md) | [Extensible](../../extensions.md) | [Status](../../status.md) | [Identifiable](../../id.md) | [Custom Properties](../../extensions.md) | [Additional Properties](../../extensions.md) | Defined In |
|-------------------------------|-----------------------------------|---------------------------|-----------------------------|------------------------------------------|----------------------------------------------|------------|
| Cannot be instantiated | Yes | Stabilizing | No | Forbidden | Permitted | [common/extensible.schema.json](common/extensible.schema.json) |

## Extensibility base schema Examples

```json
{
  "https://ns.example.com/asset_name": "custom_asset_1",
  "repo:id": "urn:aaid:a:b:01234578-0123-ABCD-abcd-0123456789ab",
  "xdm:createDate": "2017-09-26T15:52:25+00:00",
  "repo:createdDate": "2017-09-26T15:52:25+00:00",
  "xdm:repositoryCreatedBy": "lars",
  "xdm:modifyDate": "2017-09-26T15:52:25+00:00",
  "repo:lastModifiedDate": "2017-09-26T15:52:25+00:00",
  "xdm:repository_lastModifiedBy": "2017-09-26T15:52:25+00:00",
  "repo:version": "15",
  "dc:title": "This is an example",
  "repo:size": 1632418,
  "xdm:path": "/here",
  "repo:etag": "15"
}
```

```json
{
  "@context": {
    "xdm": "https://ns.adobe.com/xdm/",
    "core": "http://ns.adobe.com/adobecloud/core/1.0/",
    "meta": "http://ns.adobe.com/adobecloud/meta/1.0/",
    "xmpMM": "http://ns.adobe.com/xap/1.0/mm/",
    "xmpDM": "http://ns.adobe.com/xmp/1.0/DynamicMedia/",
    "xmpRights": "http://ns.adobe.com/xap/1.0/rights/",
    "xmpTPg": "http://ns.adobe.com/xap/1.0/t/pg/",
    "xmp": "http://ns.adobe.com/xap/1.0/",
    "stDim": "http://ns.adobe.com/xap/1.0/sType/Dimensions#",
    "dc": "http://purl.org/dc/elements/1.1/",
    "skos": "http://www.w3.org/2004/02/skos/core#",
    "rdf": "http://www.w3.org/1999/02/22-rdf-syntax-ns#",
    "rdfs": "http://www.w3.org/2000/01/rdf-schema#",
    "owl": "http://www.w3.org/2002/07/owl#",
    "xsd": "http://www.w3.org/2001/XMLSchema#",
    "xml": "http://www.w3.org/XML/1998/namespace/",
    "photoshop": "http://ns.adobe.com/photoshop/1.0/",
    "tiff": "http://ns.adobe.com/tiff/1.0/",
    "plus": "http://ns.useplus.org/ldf/xmp/1.0/",
    "cc": "http://creativecommons.org/ns#",
    "stEvt": "http://ns.adobe.com/xap/1.0/sType/ResourceEvent#",
    "stFnt": "http://ns.adobe.com/xap/1.0/sType/Font#",
    "stLayerGroup": "http://ns.adobe.com/core/1.0/sType/LayerGroup#",
    "stArtboard": "http://ns.adobe.com/core/1.0/sType/Artboard#",
    "exif": "http://ns.adobe.com/exif/1.0/#",
    "activitystreams": "https://www.w3.org/ns/activitystreams",
    "schema": "http://schema.org",
    "repo": "http://ns.adobe.com/adobecloud/core/1.0/"
  },
  "https://ns.example.com/path": "/custom/path/1",
  "https://ns.example.com/asset_name": "custom_asset_1",
  "repo:id": "urn:aaid:a:b:01234578-0123-ABCD-abcd-0123456789ab",
  "xdm:createDate": "2017-09-26T15:52:25+00:00",
  "repo:createdDate": "2017-09-26T15:52:25+00:00",
  "xdm:repositoryCreatedBy": "lars",
  "xdm:modifyDate": "2017-09-26T15:52:25+00:00",
  "repo:lastModifiedDate": "2017-09-26T15:52:25+00:00",
  "xdm:repositoryLastModifiedBy": "2017-09-26T15:52:25+00:00",
  "repo:version": "15",
  "repo:size": 1632418,
  "xdm:path": "here",
  "repo:etag": "15"
}
```

```json
{
  "repo:id": "urn:aaid:a:b:01234578-0123-ABCD-abcd-0123456789ab",
  "xdm:createDate": "2017-09-26T15:52:25+00:00",
  "repo:createdDate": "2017-09-26T15:52:25+00:00",
  "xdm:repositoryCreatedBy": "lars",
  "xdm:modifyDate": "2017-09-26T15:52:25+00:00",
  "repo:lastModifiedDate": "2017-09-26T15:52:25+00:00",
  "xdm:repositoryLastModifiedBy": "2017-09-26T15:52:25+00:00",
  "repo:version": "15",
  "dc:title": "This is an example",
  "repo:size": 1632418,
  "xdm:path": "/here",
  "repo:etag": "15"
}
```

