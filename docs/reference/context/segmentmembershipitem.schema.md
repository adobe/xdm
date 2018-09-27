
# Segment Membership Item Schema

```
https://ns.adobe.com/xdm/context/segmentmembershipitem
```

List item that contains details of segment membership combined the profile stitched identities to which the membership applies

| [Abstract](../../abstract.md) | [Extensible](../../extensions.md) | [Status](../../status.md) | [Identifiable](../../id.md) | [Custom Properties](../../extensions.md) | [Additional Properties](../../extensions.md) | Defined In |
|-------------------------------|-----------------------------------|---------------------------|-----------------------------|------------------------------------------|----------------------------------------------|------------|
| Can be instantiated | Yes | Experimental | No | Forbidden | Permitted | [context/segmentmembershipitem.schema.json](context/segmentmembershipitem.schema.json) |
## Schema Hierarchy

* Segment Membership Item `https://ns.adobe.com/xdm/context/segmentmembershipitem`
  * [Segment Membership](segmentmembership.schema.md) `https://ns.adobe.com/xdm/context/segmentmembership`
  * [Profile Stitch Identity](profilestitchidentity.schema.md) `https://ns.adobe.com/xdm/context/profileStitchIdentity`


## Segment Membership Item Example
```json
{
  "xdm:segmentID": {
    "@id": "https://data.adobe.io/entities/identity/92312748749128",
    "xdm:namespace": {
      "xdm:code": "AAM"
    }
  },
  "xdm:profileStitchID": {
    "@id": "https://data.adobe.io/entities/profileStitchIdentity/1",
    "xdm:namespace": {
      "xdm:code": "AAM"
    },
    "xdm:lastQualificationTime": "2017-09-26T15:52:25+00:00",
    "xdm:version": "1.0",
    "xdm:validUntil": "2017-12-26T15:52:25+00:00",
    "xdm:status": "realized"
  }
}
```

# Segment Membership Item Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [xdm:identities](#xdmidentities) | Identity | Optional | Segment Membership Item (this schema) |
| [xdm:lastQualificationTime](#xdmlastqualificationtime) | `string` | Optional | [Segment Membership](segmentmembership.schema.md#xdmlastqualificationtime) |
| [xdm:payload](#xdmpayload) | `object` | Optional | [Segment Membership](segmentmembership.schema.md#xdmpayload) |
| [xdm:profileStitchID](#xdmprofilestitchid) | Profile Stitch Identity | Optional | Segment Membership Item (this schema) |
| [xdm:segmentID](#xdmsegmentid) | Segment Identity | Optional | [Segment Membership](segmentmembership.schema.md#xdmsegmentid) |
| [xdm:status](#xdmstatus) | `enum` | Optional | [Segment Membership](segmentmembership.schema.md#xdmstatus) |
| [xdm:validUntil](#xdmvaliduntil) | `string` | Optional | [Segment Membership](segmentmembership.schema.md#xdmvaliduntil) |
| [xdm:version](#xdmversion) | `string` | Optional | [Segment Membership](segmentmembership.schema.md#xdmversion) |
| `*` | any | Additional | this schema *allows* additional properties |

## xdm:identities
### All User Identities

Array of Identities. Condensed, normalized encapsulation of all end user identifiers.  Deprecated

`xdm:identities`
* is optional
* type: Identity
* at least `1` items in the array
* defined in this schema

### xdm:identities Type


Array type: Identity

All items must be of the type:
* [Identity](identity.schema.md) – `https://ns.adobe.com/xdm/context/identity`








## xdm:lastQualificationTime
### Last Qualification Time

The timestamp when the assertion of segment membership was made.

`xdm:lastQualificationTime`
* is optional
* type: `string`
* defined in [Segment Membership](segmentmembership.schema.md#xdm:lastQualificationTime)

### xdm:lastQualificationTime Type


`string`
* format: `date-time` – date and time (according to [RFC 3339, section 5.6](http://tools.ietf.org/html/rfc3339))






## xdm:payload
### Payload

Values that are directly related with the segment realization. This payload exists with the same validUntil as the segment realization.  Note that the intention is that exactly one payload value be included, as indicated by the payload type.  This was originally modelled using 'oneOf', but due to limitations in our tooling that was removed.  This more semantically meaningful representation will be re-introduced in the future.

`xdm:payload`
* is optional
* type: `object`
* defined in [Segment Membership](segmentmembership.schema.md#xdm:payload)

### xdm:payload Type


`object` with following properties:


| Property | Type | Required
|----------|------|----------|
| `xdm:payloadBooleanValue`| boolean | Optional | 
| `xdm:payloadNumberValue`| number | Optional | 
| `xdm:payloadPropensityValue`| number | Optional | 
| `xdm:payloadStringValue`| string | Optional | 
| `xdm:payloadType`| string | **Required** | 



#### xdm:payloadBooleanValue
##### Value

The boolean value

`xdm:payloadBooleanValue`
* is optional
* type: `boolean`

##### xdm:payloadBooleanValue Type


`boolean`







#### xdm:payloadNumberValue
##### Value

The number

`xdm:payloadNumberValue`
* is optional
* type: `number`

##### xdm:payloadNumberValue Type


`number`








#### xdm:payloadPropensityValue
##### Value

The propensity

`xdm:payloadPropensityValue`
* is optional
* type: `number`

##### xdm:payloadPropensityValue Type


`number`
* maximum value: `1`







#### xdm:payloadStringValue
##### Value

The string value

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
* type: `string`

The value of this property **must** be equal to one of the [known values below](#xdm:payloadType-known-values).

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
* type: Profile Stitch Identity
* defined in this schema

### xdm:profileStitchID Type


* [Profile Stitch Identity](profilestitchidentity.schema.md) – `https://ns.adobe.com/xdm/context/profileStitchIdentity`





## xdm:segmentID
### Segment ID

The identity of the segment or snapshot definition in with the domain of the specific system that processes that type of segment.

`xdm:segmentID`
* is optional
* type: Segment Identity
* defined in [Segment Membership](segmentmembership.schema.md#xdm:segmentID)

### xdm:segmentID Type


* [Segment Identity](segmentidentity.schema.md) – `https://ns.adobe.com/xdm/context/segmentidentity`





## xdm:status
### Status

Is the segment participation realized as part of the current request.

`xdm:status`
* is optional
* type: `enum`
* defined in [Segment Membership](segmentmembership.schema.md#xdm:status)

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
* defined in [Segment Membership](segmentmembership.schema.md#xdm:validUntil)

### xdm:validUntil Type


`string`
* format: `date-time` – date and time (according to [RFC 3339, section 5.6](http://tools.ietf.org/html/rfc3339))






## xdm:version
### Version

The version of the segment definition used in this segment assertion. Version can be omitted in audience lists when all memberships versions are the same.

`xdm:version`
* is optional
* type: `string`
* defined in [Segment Membership](segmentmembership.schema.md#xdm:version)

### xdm:version Type


`string`





