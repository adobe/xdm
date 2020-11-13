
# Demographic Details v2 Schema

```
https://ns.adobe.com/xdm/mixins/profile-person-details-v2
```

Demographic information such as name, gender, and birth date of an individual.

| [Abstract](../../../abstract.md) | [Extensible](../../../extensions.md) | [Status](../../../status.md) | [Identifiable](../../../id.md) | [Custom Properties](../../../extensions.md) | [Additional Properties](../../../extensions.md) | Defined In |
|----------------------------------|--------------------------------------|------------------------------|--------------------------------|---------------------------------------------|-------------------------------------------------|------------|
| Can be instantiated | Yes | Experimental | No | Forbidden | Permitted | [mixins/profile/profile-person-details-v2.schema.json](mixins/profile/profile-person-details-v2.schema.json) |
## Schema Hierarchy

* Demographic Details v2 `https://ns.adobe.com/xdm/mixins/profile-person-details-v2`
  * [Extensibility base schema](../../datatypes/extensible.schema.md) `https://ns.adobe.com/xdm/common/extensible`
  * [Person](../../datatypes/person.schema.md) `https://ns.adobe.com/xdm/context/person`


## Demographic Details v2 Example
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

# Demographic Details v2 Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [xdm:person](#xdmperson) | Person | Optional | Demographic Details v2 (this schema) |
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




