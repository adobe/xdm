
# XDM Business Account Person Relation Details Schema

```
https://ns.adobe.com/xdm/mixins/account-person-details
```

Collects all details related to an accout person relationship.

| [Abstract](../../../abstract.md) | [Extensible](../../../extensions.md) | [Status](../../../status.md) | [Identifiable](../../../id.md) | [Custom Properties](../../../extensions.md) | [Additional Properties](../../../extensions.md) | Defined In |
|----------------------------------|--------------------------------------|------------------------------|--------------------------------|---------------------------------------------|-------------------------------------------------|------------|
| Can be instantiated | Yes | Stable | No | Forbidden | Permitted | [fieldgroups/account-person/account-person-details.schema.json](fieldgroups/account-person/account-person-details.schema.json) |

## XDM Business Account Person Relation Details Example
```json
{
  "xdm:matchedAccount": {
    "xdm:matchingScore": 85.5,
    "xdm:scoreCreatedDate": "2017-09-26T15:52:25+13:00"
  }
}
```

# XDM Business Account Person Relation Details Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [xdm:matchedAccount](#xdmmatchedaccount) | `object` | Optional | XDM Business Account Person Relation Details (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## xdm:matchedAccount
### Matched Account

`xdm:matchedAccount`
* is optional
* type: `object`
* defined in this schema

### xdm:matchedAccount Type


`object` with following properties:


| Property | Type | Required |
|----------|------|----------|
| `xdm:matchingScore`| number | Optional |
| `xdm:scoreCreatedDate`| string | Optional |



#### xdm:matchingScore
##### Matching Score

Computed matching score for account person affinity.

`xdm:matchingScore`
* is optional
* type: `number`

##### xdm:matchingScore Type


`number`








#### xdm:scoreCreatedDate
##### Score Created Date

The date when the account-person affinity score was computed.

`xdm:scoreCreatedDate`
* is optional
* type: `string`

##### xdm:scoreCreatedDate Type


`string`
* format: `date-time` – date and time (according to [RFC 3339, section 5.6](http://tools.ietf.org/html/rfc3339))










