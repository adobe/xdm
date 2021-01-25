
# Demographic Details Schema

```
https://ns.adobe.com/xdm/context/profile-person-details
```

Demographic information such as name, gender, and birth date of an individual.

| [Abstract](../../../abstract.md) | [Extensible](../../../extensions.md) | [Status](../../../status.md) | [Identifiable](../../../id.md) | [Custom Properties](../../../extensions.md) | [Additional Properties](../../../extensions.md) | Defined In |
|----------------------------------|--------------------------------------|------------------------------|--------------------------------|---------------------------------------------|-------------------------------------------------|------------|
| Can be instantiated | Yes | Stable | No | Forbidden | Permitted | [mixins/profile/profile-person-details.schema.json](mixins/profile/profile-person-details.schema.json) |
## Schema Hierarchy

* Demographic Details `https://ns.adobe.com/xdm/context/profile-person-details`
  * [Extensibility base schema](../../datatypes/extensible.schema.md) `https://ns.adobe.com/xdm/common/extensible`
  * [Person](../../datatypes/person/person.schema.md) `https://ns.adobe.com/xdm/context/person`


## Demographic Details Example
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

# Demographic Details Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [xdm:person](#xdmperson) | Person | Optional | Demographic Details (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## xdm:person
### Person

An individual actor, contact, or owner.

`xdm:person`
* is optional
* type: Person
* defined in this schema

### xdm:person Type


* [Person](../../datatypes/person/person.schema.md) – `https://ns.adobe.com/xdm/context/person`




