
# Profile privacy Schema

```
https://ns.adobe.com/xdm/context/profile-privacy
```

Profile privacy schema captures general and sales sharing opt-out signals.

| [Abstract](../../abstract.md) | [Extensible](../../extensions.md) | [Status](../../status.md) | [Identifiable](../../id.md) | [Custom Properties](../../extensions.md) | [Additional Properties](../../extensions.md) | Defined In |
|-------------------------------|-----------------------------------|---------------------------|-----------------------------|------------------------------------------|----------------------------------------------|------------|
| Can be instantiated | Yes | Experimental | No | Forbidden | Permitted | [context/profile-privacy.schema.json](context/profile-privacy.schema.json) |
## Schema Hierarchy

* Profile privacy `https://ns.adobe.com/xdm/context/profile-privacy`
  * [Extensibility base schema](../common/extensible.schema.md) `https://ns.adobe.com/xdm/common/extensible`


## Profile privacy Example
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
  },
  "xdm:identityPrivacyInfo": {
    "ECID": {
      "11112222233333444": {
        "xdm:identityIABConsent": {
          "xdm:consentTimestamp": "2020-04-11T05:05:05Z",
          "xdm:consentString": {
            "xdm:consentStandard": "IAB TCF",
            "xdm:consentStandardVersion": "2.0",
            "xdm:consentStringValue": "BObdrPUOevsguAfDqFENCNAAAAAmeAAA.PVAfDObdrA.DqFENCAmeAENCDA",
            "xdm:gdprApplies": true,
            "xdm:containsPersonalData": false
          }
        }
      }
    }
  }
}
```

# Profile privacy Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [xdm:identityPrivacyInfo](#xdmidentityprivacyinfo) | `object` | Optional | Profile privacy (this schema) |
| [xdm:optOutConsentLevel](#xdmoptoutconsentlevel) | `object` | Optional | Profile privacy (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## xdm:identityPrivacyInfo
### Identity level privacy information

Captured privacy information for identities in profile.

`xdm:identityPrivacyInfo`
* is optional
* type: `object`
* defined in this schema

### xdm:identityPrivacyInfo Type


`object` with following properties:


| Property | Type | Required |
|----------|------|----------|






## xdm:optOutConsentLevel
### Opt-out consent level

Opt-out consent level.

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
##### Privacy opt-outs

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
##### Opt-out type

The type of opt-out.

`xdm:optOutType`
* is optional
* type: `enum`

The value of this property **must** be equal to one of the [known values below](#xdmoptoutconsentlevel-known-values).

##### xdm:optOutType Known Values
| Value | Description |
|-------|-------------|
| `general_opt_out` | General opt-out |
| `sales_sharing_opt_out` | Sales sharing opt-out |






#### xdm:optOutValue
##### Opt-out value

The value of opt-out signal.

`xdm:optOutValue`
* is optional
* type: `enum`

The value of this property **must** be equal to one of the [known values below](#xdmoptoutconsentlevel-known-values).

##### xdm:optOutValue Known Values
| Value | Description |
|-------|-------------|
| `not_provided` | Not provided |
| `pending` | Pending verification |
| `in` | Opt-in |
| `out` | Opt-out |






#### xdm:timestamp
##### Opt-out timestamp

Timestamp of the received opt-out signal.

`xdm:timestamp`
* is optional
* type: `string`

##### xdm:timestamp Type


`string`
* format: `date-time` – date and time (according to [RFC 3339, section 5.6](http://tools.ietf.org/html/rfc3339))

















