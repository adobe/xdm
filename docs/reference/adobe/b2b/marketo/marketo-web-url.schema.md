
# Marketo Web URL Schema

```
https://ns.adobe.com/b2b/marketo/marketo-web-url
```

Captures web url, which need not be in URI format.

| [Abstract](../../../../abstract.md) | [Extensible](../../../../extensions.md) | [Status](../../../../status.md) | [Identifiable](../../../../id.md) | [Custom Properties](../../../../extensions.md) | [Additional Properties](../../../../extensions.md) | Defined In |
|-------------------------------------|-----------------------------------------|---------------------------------|-----------------------------------|------------------------------------------------|----------------------------------------------------|------------|
| Can be instantiated | Yes | Experimental | No | Forbidden | Permitted | [adobe/b2b/marketo/marketo-web-url.schema.json](adobe/b2b/marketo/marketo-web-url.schema.json) |

## Marketo Web URL Example
```json
{
  "xdm:web": {
    "xdm:webPageDetails": {
      "marketo:URL": "https://www.adobe.com"
    }
  }
}
```

# Marketo Web URL Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [xdm:web](#xdmweb) | `object` | Optional | Marketo Web URL (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## xdm:web
### Web

`xdm:web`
* is optional
* type: `object`
* defined in this schema

### xdm:web Type


`object` with following properties:


| Property | Type | Required |
|----------|------|----------|
| `xdm:webPageDetails`| object | Optional |



#### xdm:webPageDetails
##### Web Page Details

undefined

`xdm:webPageDetails`
* is optional
* type: `object`

##### xdm:webPageDetails Type

Unknown type `object`.

```json
{
  "title": "Web Page Details",
  "type": "object",
  "properties": {
    "marketo:URL": {
      "title": "URL",
      "type": "string",
      "description": "The normative or usual URL of the web page.  This may or may not be confined to URI format",
      "meta:titleId": "marketo-web-url##marketo:URL##title##84531",
      "meta:descriptionId": "marketo-web-url##marketo:URL##description##9121"
    }
  },
  "meta:titleId": "marketo-web-url##xdm:webPageDetails##title##14591",
  "simpletype": "`object`"
}
```









