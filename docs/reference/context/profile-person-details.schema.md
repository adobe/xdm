
# Profile Person Details Schema

```
https://ns.adobe.com/xdm/context/profile-person-details
```

Profile person details including naming, gender etc.

| [Abstract](../../abstract.md) | [Extensible](../../extensions.md) | [Status](../../status.md) | [Identifiable](../../id.md) | [Custom Properties](../../extensions.md) | [Additional Properties](../../extensions.md) | Defined In |
|-------------------------------|-----------------------------------|---------------------------|-----------------------------|------------------------------------------|----------------------------------------------|------------|
| Can be instantiated | Yes | Experimental | No | Forbidden | Permitted | [context/profile-person-details.schema.json](context/profile-person-details.schema.json) |
## Schema Hierarchy

* Profile Person Details `https://ns.adobe.com/xdm/context/profile-person-details`
  * [Extensibility Base Schema](../common/extensible.schema.md) `https://ns.adobe.com/xdm/common/extensible`
  * [Person](person.schema.md) `https://ns.adobe.com/xdm/context/person`


## Profile Person Details Example
```json
{
  "xdm:person": {
    "xdm:name": {
      "xdm:firstName": "Jane",
      "xdm:middleName": "F",
      "xdm:lastName": "Doe",
      "xdm:fullName": "Jane F. Doe"
    },
    "xdm:birthDayAndMonth": "01-03",
    "xdm:gender": "female"
  }
}
```

# Profile Person Details Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [xdm:person](#xdmperson) | Person | Optional | Profile Person Details (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## xdm:person
### Person

An individual actor, contact, or owner.

`xdm:person`
* is optional
* type: Person
* defined in this schema

### xdm:person Type


* [Person](person.schema.md) – `https://ns.adobe.com/xdm/context/person`




