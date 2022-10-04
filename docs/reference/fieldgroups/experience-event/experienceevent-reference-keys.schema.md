
# Reference keys Schema

```
https://ns.adobe.com/xdm/mixins/experienceevent-reference-keys
```

Add this field group to only Experience Event Class based schemas to add reference keys to build relationships to Other class based schemas.

| [Abstract](../../../abstract.md) | [Extensible](../../../extensions.md) | [Status](../../../status.md) | [Identifiable](../../../id.md) | [Custom Properties](../../../extensions.md) | [Additional Properties](../../../extensions.md) | Defined In |
|----------------------------------|--------------------------------------|------------------------------|--------------------------------|---------------------------------------------|-------------------------------------------------|------------|
| Can be instantiated | Yes | Experimental | No | Forbidden | Permitted | [fieldgroups/experience-event/experienceevent-reference-keys.schema.json](fieldgroups/experience-event/experienceevent-reference-keys.schema.json) |

## Reference keys Example
```json
{
  "xdm:person": {
    "xdm:personalEmailID": "John.Doe@email.com",
    "xdm:accountID": "ACT-1111",
    "xdm:accountType": "Premium"
  }
}
```

# Reference keys Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [xdm:person](#xdmperson) | `object` | Optional | Reference keys (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## xdm:person
### Person Reference Properties

`xdm:person`
* is optional
* type: `object`
* defined in this schema

### xdm:person Type


`object` with following properties:


| Property | Type | Required |
|----------|------|----------|
| `xdm:accountID`| string | Optional |
| `xdm:accountType`| string | Optional |
| `xdm:personalEmailID`| string | Optional |



#### xdm:accountID
##### Account ID

Account ID.

`xdm:accountID`
* is optional
* type: `string`

##### xdm:accountID Type


`string`








#### xdm:accountType
##### Account Type

Account Type.

`xdm:accountType`
* is optional
* type: `string`

##### xdm:accountType Type


`string`








#### xdm:personalEmailID
##### Personal Email Address

The technical address, for example, 'name@domain.com' as commonly defined in RFC2822 and subsequent standards.

`xdm:personalEmailID`
* is optional
* type: `string`

##### xdm:personalEmailID Type


`string`
* format: `email` – email address (according to [RFC 5322, section 3.4.1](https://tools.ietf.org/html/rfc5322))










