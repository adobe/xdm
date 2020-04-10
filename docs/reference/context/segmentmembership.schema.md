
# Segment membership Schema

```
https://ns.adobe.com/xdm/context/segmentmembership
```

Details about a segment membership.

| [Abstract](../../abstract.md) | [Extensible](../../extensions.md) | [Status](../../status.md) | [Identifiable](../../id.md) | [Custom Properties](../../extensions.md) | [Additional Properties](../../extensions.md) | Defined In |
|-------------------------------|-----------------------------------|---------------------------|-----------------------------|------------------------------------------|----------------------------------------------|------------|
| Can be instantiated | Yes | Experimental | No | Forbidden | Permitted | [context/segmentmembership.schema.json](context/segmentmembership.schema.json) |
## Schema Hierarchy

* Segment membership `https://ns.adobe.com/xdm/context/segmentmembership`
  * [Segment identity](segmentidentity.schema.md) `https://ns.adobe.com/xdm/context/segmentidentity`
  * [Profile stitch identity](profilestitchidentity.schema.md) `https://ns.adobe.com/xdm/context/profileStitchIdentity`


## Segment membership Example
```json
{
  "xdm:lastQualificationTime": "2017-09-26T15:52:25+00:00",
  "xdm:version": "1.0",
  "xdm:validUntil": "2017-12-26T15:52:25+00:00",
  "xdm:status": "realized",
  "xdm:payload": {
    "xdm:payloadPropensityValue": 0.5,
    "xdm:payloadType": "propensity"
  }
}
```

# Segment membership Properties

| Property | Type | Required | Default | Defined by |
|----------|------|----------|---------|------------|
| [xdm:lastQualificationTime](#xdmlastqualificationtime) | `string` | Optional |  | Segment membership (this schema) |
| [xdm:payload](#xdmpayload) | `object` | Optional |  | Segment membership (this schema) |
| [xdm:profileStitchID](#xdmprofilestitchid) | Profile stitch identity | Optional |  | Segment membership (this schema) |
| [xdm:segmentID](#xdmsegmentid) | Segment identity | Optional |  | Segment membership (this schema) |
| [xdm:status](#xdmstatus) | `enum` | Optional | `"realized"` | Segment membership (this schema) |
| [xdm:validUntil](#xdmvaliduntil) | `string` | Optional |  | Segment membership (this schema) |
| [xdm:version](#xdmversion) | `string` | Optional |  | Segment membership (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## xdm:lastQualificationTime
### Last qualification time

The timestamp when the assertion of segment membership was made.

`xdm:lastQualificationTime`
* is optional
* type: `string`
* defined in this schema

### xdm:lastQualificationTime Type


`string`
* format: `date-time` – date and time (according to [RFC 3339, section 5.6](http://tools.ietf.org/html/rfc3339))






## xdm:payload
### Payload

Values that are directly related with the segment realization. This payload exists with the same 'validUntil' as the segment realization.  Note that the intention is that exactly one payload value be included, as indicated by the payload type.  This was originally modeled using 'oneOf', but due to limitations in our tooling that was removed.  This more semantically meaningful representation will be re-introduced in the future.

`xdm:payload`
* is optional
* type: `object`
* defined in this schema

### xdm:payload Type


`object` with following properties:


| Property | Type | Required |
|----------|------|----------|
| `xdm:payloadBooleanValue`| boolean | Optional |
| `xdm:payloadNumberValue`| number | Optional |
| `xdm:payloadPropensityValue`| number | Optional |
| `xdm:payloadStringValue`| string | Optional |
| `xdm:payloadType`| string | **Required** |



#### xdm:payloadBooleanValue
##### Value

The boolean value.

`xdm:payloadBooleanValue`
* is optional
* type: `boolean`

##### xdm:payloadBooleanValue Type


`boolean`







#### xdm:payloadNumberValue
##### Value

The number.

`xdm:payloadNumberValue`
* is optional
* type: `number`

##### xdm:payloadNumberValue Type


`number`








#### xdm:payloadPropensityValue
##### Value

The propensity.

`xdm:payloadPropensityValue`
* is optional
* type: `number`

##### xdm:payloadPropensityValue Type


`number`
* maximum value: `1`







#### xdm:payloadStringValue
##### Value

The string value.

`xdm:payloadStringValue`
* is optional
* type: `string`

##### xdm:payloadStringValue Type


`string`








#### xdm:payloadType
##### Payload Type

The type of payload.

`xdm:payloadType`
* is **required**
* type: `enum`

The value of this property **must** be equal to one of the [known values below](#xdmpayload-known-values).

##### xdm:payloadType Known Values
| Value | Description |
|-------|-------------|
| `boolean` | Boolean |
| `number` | Number |
| `propensity` | Propensity |
| `string` | String |









## xdm:profileStitchID


`xdm:profileStitchID`
* is optional
* type: Profile stitch identity
* defined in this schema

### xdm:profileStitchID Type


* [Profile stitch identity](profilestitchidentity.schema.md) – `https://ns.adobe.com/xdm/context/profileStitchIdentity`





## xdm:segmentID
### Segment ID

The identity of the segment or snapshot definition in with the domain of the specific system that processes that type of segment. Deprecated.

`xdm:segmentID`
* is optional
* type: Segment identity
* defined in this schema

### xdm:segmentID Type


* [Segment identity](segmentidentity.schema.md) – `https://ns.adobe.com/xdm/context/segmentidentity`





## xdm:status
### Status

Is the segment participation realized as part of the current request.

`xdm:status`
* is optional
* type: `enum`
* default: `"realized"`
* defined in this schema

The value of this property **must** be equal to one of the [known values below](#xdmstatus-known-values).

### xdm:status Known Values
| Value | Description |
|-------|-------------|
| `existing` | Entity continues to be in the segment. |
| `realized` | Entity is entering the segment. |
| `exited` | Entity is exiting the segment. |




## xdm:validUntil
### Valid until

The timestamp for when the segment assertion should no longer be assumed to be valid and should either be ignored or revalidated.

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





