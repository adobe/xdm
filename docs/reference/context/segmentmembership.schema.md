
# Segment Membership Schema

```
https://ns.adobe.com/xdm/context/segmentmembership
```

Details about a segment membership.

| [Abstract](../../abstract.md) | [Extensible](../../extensions.md) | [Status](../../status.md) | [Identifiable](../../id.md) | [Custom Properties](../../extensions.md) | [Additional Properties](../../extensions.md) | Defined In |
|-------------------------------|-----------------------------------|---------------------------|-----------------------------|------------------------------------------|----------------------------------------------|------------|
| Can be instantiated | Yes | Experimental | No | Forbidden | Permitted | [context/segmentmembership.schema.json](context/segmentmembership.schema.json) |
## Schema Hierarchy

* Segment Membership `https://ns.adobe.com/xdm/context/segmentmembership`
  * [Identity](segmentidentity.schema.md) `https://ns.adobe.com/xdm/context/segmentidentity`


## Segment Membership Example
```json
{
  "xdm:segmentID": {
    "@id": "https://data.adobe.io/entities/segmentIdentity/92312748749128",
    "xdm:namespace": {
      "xdm:code": "AAM"
    }
  },
  "xdm:lastQualificationTime": "2017-09-26T15:52:25+00:00",
  "xdm:version": "1.0",
  "xdm:validUntil": "2017-12-26T15:52:25+00:00",
  "xdm:status": "realized"
}
```

# Segment Membership Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [xdm:lastQualificationTime](#xdmlastqualificationtime) | `string` | Optional | Segment Membership (this schema) |
| [xdm:segmentID](#xdmsegmentid) | Identity | Optional | Segment Membership (this schema) |
| [xdm:status](#xdmstatus) | `enum` | Optional | Segment Membership (this schema) |
| [xdm:validUntil](#xdmvaliduntil) | `string` | Optional | Segment Membership (this schema) |
| [xdm:version](#xdmversion) | `string` | Optional | Segment Membership (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## xdm:lastQualificationTime
### Last Qualification Time

The timestamp when the assertion of segment membership was made.

`xdm:lastQualificationTime`
* is optional
* type: `string`
* defined in this schema

### xdm:lastQualificationTime Type


`string`
* format: `date-time` – date and time (according to [RFC 3339, section 5.6](http://tools.ietf.org/html/rfc3339))






## xdm:segmentID
### Segment ID

The identity of the segment or snapshot definition in with the domain of the specific system that processes that type of segment.

`xdm:segmentID`
* is optional
* type: Identity
* defined in this schema

### xdm:segmentID Type


* [Identity](segmentidentity.schema.md) – `https://ns.adobe.com/xdm/context/segmentidentity`





## xdm:status
### Status

Is the segment participation realized as part of the current request.

`xdm:status`
* is optional
* type: `enum`
* defined in this schema

The value of this property **must** be equal to one of the [known values below](#xdm:status-known-values).

### xdm:status Known Values
| Value | Description |
|-------|-------------|
| `existing` | Entity continues to be in the segment |
| `realized` | Entity is entering the segment |
| `exited` | Entity is exiting the segment |




## xdm:validUntil
### Valid Until

The timestamp for when the segment assertion should nolonger be assumed to be valid and should either be ignored or revalidated.

`xdm:validUntil`
* is optional
* type: `string`
* defined in this schema

### xdm:validUntil Type


`string`
* format: `date-time` – date and time (according to [RFC 3339, section 5.6](http://tools.ietf.org/html/rfc3339))






## xdm:version
### Version

The version of the segment definition used in this segment assertion. Version can be omitted in audience lists when all memberships versions are the same.

`xdm:version`
* is optional
* type: `string`
* defined in this schema

### xdm:version Type


`string`





