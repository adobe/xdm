
# Resource Event Schema

```
https://ns.adobe.com/xdm/assets/resource-event
```

A Resource Event is a high-level event that occurred in the processing, editing, or creation of an asset.

Resource Events are typically attached directly to an asset.


| [Abstract](../../abstract.md) | [Extensible](../../extensions.md) | [Status](../../status.md) | [Identifiable](../../id.md) | [Custom Properties](../../extensions.md) | [Additional Properties](../../extensions.md) | Defined In |
|-------------------------------|-----------------------------------|---------------------------|-----------------------------|------------------------------------------|----------------------------------------------|------------|
| Can be instantiated | Yes | Stable | No | Forbidden | Permitted | [assets/resource-event.schema.json](assets/resource-event.schema.json) |

## Resource Event Example
```json
{
  "stEvt:action": "created",
  "stEvt:when": "2017-09-26T15:52:25+00:00",
  "stEvt:instanceID": "00112233-4455-6677-8899-AABBCCDDEEFF"
}
```

# Resource Event Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [stEvt:action](#stevtaction) | complex | Optional | Resource Event (this schema) |
| [stEvt:changed](#stevtchanged) | `string` | Optional | Resource Event (this schema) |
| [stEvt:instanceID](#stevtinstanceid) | `string` | Optional | Resource Event (this schema) |
| [stEvt:parameters](#stevtparameters) | `string` | Optional | Resource Event (this schema) |
| [stEvt:softwareAgent](#stevtsoftwareagent) | `string` | Optional | Resource Event (this schema) |
| [stEvt:when](#stevtwhen) | `string` | Optional | Resource Event (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## stEvt:action
### Action

The action that occurred. Defined values are: converted, copied, created, cropped, edited, filtered, formatted, version_updated, printed, published, managed, produced, resized, and saved. New values should be verbs in the past tense.

`stEvt:action`
* is optional
* type: complex
* defined in this schema

### stEvt:action Type

Unknown type ``.

```json
{
  "title": "Action",
  "description": "The action that occurred. Defined values are: converted, copied, created, cropped, edited, filtered, formatted, version_updated, printed, published, managed, produced, resized, and saved. New values should be verbs in the past tense.",
  "meta:enum": [
    "converted",
    "copied",
    "created",
    "cropped",
    "edited",
    "filtered",
    "formatted",
    "version_updated",
    "printed",
    "published",
    "managed",
    "produced",
    "resized",
    "saved"
  ],
  "simpletype": "complex"
}
```


### stEvt:action Known Values
| Value | Description |
|-------|-------------|
| `0` | converted |
| `1` | copied |
| `2` | created |
| `3` | cropped |
| `4` | edited |
| `5` | filtered |
| `6` | formatted |
| `7` | version_updated |
| `8` | printed |
| `9` | published |
| `10` | managed |
| `11` | produced |
| `12` | resized |
| `13` | saved |




## stEvt:changed
### Changed

A semicolon-delimited list of the parts of the resource that were changed since the previous event history. If not present, presumed to be undefined. When tracking changes and the scope of the changed components is unknown, it should be assumed that anything might have changed.

`stEvt:changed`
* is optional
* type: `string`
* defined in this schema

### stEvt:changed Type


`string`






## stEvt:instanceID
### Instance ID

The value of the `instanceID` property for the modified (output) resource. The value is a GUID, capital A-F, and 8-4-4-12.

`stEvt:instanceID`
* is optional
* type: `string`
* defined in this schema

### stEvt:instanceID Type


`string`


All instances must conform to this regular expression 
```regex
^[A-Fa-f0-9]{8}-[A-Fa-f0-9]{4}-[A-Fa-f0-9]{4}-[A-Fa-f0-9]{4}-[A-Fa-f0-9]{12}$
```

* test example: [00112233-4455-6677-8899-AABBCCDDEEFF](https://regexr.com/?expression=%5E%5BA-Fa-f0-9%5D%7B8%7D-%5BA-Fa-f0-9%5D%7B4%7D-%5BA-Fa-f0-9%5D%7B4%7D-%5BA-Fa-f0-9%5D%7B4%7D-%5BA-Fa-f0-9%5D%7B12%7D%24&text=00112233-4455-6677-8899-AABBCCDDEEFF)




### stEvt:instanceID Example

```json
"00112233-4455-6677-8899-AABBCCDDEEFF"
```


## stEvt:parameters
### Parameters

Additional description of the action.

`stEvt:parameters`
* is optional
* type: `string`
* defined in this schema

### stEvt:parameters Type


`string`






## stEvt:softwareAgent
### Software Agent

The software agent (program) that performed the action.
It is recommended that the value use this format convention:
Organization Software_name Version (token;token;...)
- Organization: The name of the company or organization providing the software, no SPACEs.
- Software_name: The full name of the software, SPACEs allowed.
- version: The version of the software, no SPACEs.
- tokens: Can be used to identify an operating system, plug-in, or more detailed version information.

`stEvt:softwareAgent`
* is optional
* type: `string`
* defined in this schema

### stEvt:softwareAgent Type


`string`






## stEvt:when
### When

Timestamp of when the action occurred. For events that create or write to a file, this should be the approximate modification time of the file.

`stEvt:when`
* is optional
* type: `string`
* defined in this schema

### stEvt:when Type


`string`
* format: `date-time` – date and time (according to [RFC 3339, section 5.6](http://tools.ietf.org/html/rfc3339))





