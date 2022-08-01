
# Advertising Pod details information Schema

```
https://ns.adobe.com/xdm/datatypes/advertisingPodDetails
```

Advertising Pod details information.

| [Abstract](../../abstract.md) | [Extensible](../../extensions.md) | [Status](../../status.md) | [Identifiable](../../id.md) | [Custom Properties](../../extensions.md) | [Additional Properties](../../extensions.md) | Defined In |
|-------------------------------|-----------------------------------|---------------------------|-----------------------------|------------------------------------------|----------------------------------------------|------------|
| Can be instantiated | Yes | Experimental | No | Forbidden | Permitted | [datatypes/advertisingpoddetails.schema.json](datatypes/advertisingpoddetails.schema.json) |

## Advertising Pod details information Example
```json
{
  "xdm:index": 2,
  "xdm:second": 123,
  "xdm:adBreakID": "123"
}
```

# Advertising Pod details information Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [xdm:adBreakID](#xdmadbreakid) | `string` | Optional | Advertising Pod details information (this schema) |
| [xdm:friendlyName](#xdmfriendlyname) | `string` | Optional | Advertising Pod details information (this schema) |
| [xdm:index](#xdmindex) | `integer` | Optional | Advertising Pod details information (this schema) |
| [xdm:second](#xdmsecond) | `integer` | Optional | Advertising Pod details information (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## xdm:adBreakID
### Ad Break ID

The ID of the ad break.

`xdm:adBreakID`
* is optional
* type: `string`
* defined in this schema

### xdm:adBreakID Type


`string`






## xdm:friendlyName
### Pod Friendly Name

The friendly name of the Ad Break.

`xdm:friendlyName`
* is optional
* type: `string`
* defined in this schema

### xdm:friendlyName Type


`string`






## xdm:index
### Ad In Pod Position (Ad Break Start)

The index of the ad inside the parent ad break start, for example, the first ad has index 0 and the second ad has index 1.

`xdm:index`
* is optional
* type: `integer`
* defined in this schema

### xdm:index Type


`integer`






## xdm:second
### Pod Second

The offset of the ad break inside the content, in seconds.

`xdm:second`
* is optional
* type: `integer`
* defined in this schema

### xdm:second Type


`integer`





