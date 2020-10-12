
# Profile person details Schema

```
https://ns.adobe.com/xdm/context/profile-person-details
```

Use for demographic information such as name, gender, and birth date of an individual.

| [Abstract](../../../abstract.md) | [Extensible](../../../extensions.md) | [Status](../../../status.md) | [Identifiable](../../../id.md) | [Custom Properties](../../../extensions.md) | [Additional Properties](../../../extensions.md) | Defined In |
|----------------------------------|--------------------------------------|------------------------------|--------------------------------|---------------------------------------------|-------------------------------------------------|------------|
| Can be instantiated | Yes | Stable | No | Forbidden | Permitted | [mixins/profile/profile-person-details.schema.json](mixins/profile/profile-person-details.schema.json) |
## Schema Hierarchy

* Profile person details `https://ns.adobe.com/xdm/context/profile-person-details`
  * [Extensibility base schema](../../datatypes/extensible.schema.md) `https://ns.adobe.com/xdm/common/extensible`
  * [Person](../../datatypes/person.schema.md) `https://ns.adobe.com/xdm/context/person`


## Profile person details Example
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

# Profile person details Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [xdm:person](#xdmperson) | Person | Optional | Profile person details (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## xdm:person
### Person

An individual actor, contact, or owner.

`xdm:person`
* is optional
* type: Person
* defined in this schema

### xdm:person Type


* [Person](../../datatypes/person.schema.md) – `https://ns.adobe.com/xdm/context/person`




