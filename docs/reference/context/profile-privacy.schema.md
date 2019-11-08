
# Profile Privacy Schema

```
https://ns.adobe.com/xdm/context/profile-privacy
```

Profile privacy schema to capture general and sales/sharing opt-out signals.

| [Abstract](../../abstract.md) | [Extensible](../../extensions.md) | [Status](../../status.md) | [Identifiable](../../id.md) | [Custom Properties](../../extensions.md) | [Additional Properties](../../extensions.md) | Defined In |
|-------------------------------|-----------------------------------|---------------------------|-----------------------------|------------------------------------------|----------------------------------------------|------------|
| Can be instantiated | Yes | Experimental | No | Forbidden | Permitted | [context/profile-privacy.schema.json](context/profile-privacy.schema.json) |
## Schema Hierarchy

* Profile Privacy `https://ns.adobe.com/xdm/context/profile-privacy`
  * [Extensibility Base Schema](../common/extensible.schema.md) `https://ns.adobe.com/xdm/common/extensible`


## Profile Privacy Example
```json
{
  "xdm:optOutConsentLevel": {
    "xdm:privacyOptOuts": [
      {
        "xdm:optOutType": "general_opt_out",
        "xdm:optOutValue": "out",
        "xdm:timestamp": "2019-01-01T15:52:25+00:00"
      }
    ]
  }
}
```

# Profile Privacy Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [xdm:optOutConsentLevel](#xdmoptoutconsentlevel) | `object` | Optional | Profile Privacy (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## xdm:optOutConsentLevel
### Opt-Out Consent Level

Opt-Out consent level.

`xdm:optOutConsentLevel`
* is optional
* type: `object`
* defined in this schema

### xdm:optOutConsentLevel Type


`object` with following properties:


| Property | Type | Required |
|----------|------|----------|
| `xdm:privacyOptOuts`| array | Optional |



#### xdm:privacyOptOuts
##### Privacy Opt-Outs

Encapsulates different opt-out types for data privacy.

`xdm:privacyOptOuts`
* is optional
* type: `object[]`


##### xdm:privacyOptOuts Type


Array type: `object[]`

All items must be of the type:
`object` with following properties:


| Property | Type | Required |
|----------|------|----------|
| `xdm:optOutType`| string | Optional |
| `xdm:optOutValue`| string | Optional |
| `xdm:timestamp`| string | Optional |



#### xdm:optOutType
##### Opt-Out Type

The type of opt-out.

`xdm:optOutType`
* is optional
* type: `enum`

The value of this property **must** be equal to one of the [known values below](#xdmoptoutconsentlevel-known-values).

##### xdm:optOutType Known Values
| Value | Description |
|-------|-------------|
| `general_opt_out` | General Opt-Out |
| `sales_sharing_opt_out` | Sales Sharing Opt-Out |






#### xdm:optOutValue
##### Opt-Out Value

The value of opt-out signal.

`xdm:optOutValue`
* is optional
* type: `enum`

The value of this property **must** be equal to one of the [known values below](#xdmoptoutconsentlevel-known-values).

##### xdm:optOutValue Known Values
| Value | Description |
|-------|-------------|
| `not_provided` | Not Provided |
| `pending` | Pending Verification |
| `in` | Opt-In |
| `out` | Opt-Out |






#### xdm:timestamp
##### Opt-Out Timestamp

Timestamp of the received opt-out signal.

`xdm:timestamp`
* is optional
* type: `string`

##### xdm:timestamp Type


`string`
* format: `date-time` – date and time (according to [RFC 3339, section 5.6](http://tools.ietf.org/html/rfc3339))

















