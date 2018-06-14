
# Person Name Schema

```
https://ns.adobe.com/xdm/context/person-name
```

The Person Name schema is used to model the full name of a person.
As the conventions for structing names differ widely across languages and cultures, names should always be modeled using the `xdm:fullName` property.
In addition, a number of optional properties are made available that can be used in situations that require using only a fragment of the full name, such as creating a formal or informal greeting.


| [Abstract](../../abstract.md) | [Extensible](../../extensions.md) | [Status](../../status.md) | [Identifiable](../../id.md) | [Custom Properties](../../extensions.md) | [Additional Properties](../../extensions.md) | Defined In |
|-------------------------------|-----------------------------------|---------------------------|-----------------------------|------------------------------------------|----------------------------------------------|------------|
| Can be instantiated | Yes | Experimental | No | Forbidden | Permitted | [context/person-name.schema.json](context/person-name.schema.json) |
## Schema Hierarchy

* Person Name `https://ns.adobe.com/xdm/context/person-name`
  * [Extensibility base schema](../common/extensible.schema.md) `https://ns.adobe.com/xdm/common/extensible`


## Person Name Examples

```json
{
  "xdm:firstName": "John",
  "xdm:middleName": "S",
  "xdm:lastName": "Doe",
  "xdm:fullName": "John S. Doe"
}
```

```json
{
  "xdm:firstName": "张",
  "xdm:lastName": "三",
  "xdm:fullName": "张三"
}
```

```json
{
  "xdm:firstName": "فلانة",
  "xdm:lastName": "الفلانية",
  "xdm:fullName": "فلانة الفلانية"
}
```


# Person Name Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [xdm:courtesyTitle](#xdmcourtesytitle) | `string` | Optional | Person Name (this schema) |
| [xdm:firstName](#xdmfirstname) | `string` | Optional | Person Name (this schema) |
| [xdm:fullName](#xdmfullname) | `string` | Optional | Person Name (this schema) |
| [xdm:lastName](#xdmlastname) | `string` | Optional | Person Name (this schema) |
| [xdm:middleName](#xdmmiddlename) | `string` | Optional | Person Name (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## xdm:courtesyTitle
### Courtesy title

Normally an abbreviation of a persons *title*, *honorific*, or *salutation*.
The `courtesyTitle` is used in front of full or last name in opening texts.
e.g Mr. Miss. or Dr J. Smith.


`xdm:courtesyTitle`
* is optional
* type: `string`
* defined in this schema

### xdm:courtesyTitle Type


`string`






## xdm:firstName
### First name

The first segment of the name in the writing order most commonly accepted in the language of the name. In many cultures this is the preferred personal or given name.

The `firstName` and `lastName` properties have been introduced to maintain compatibility with existing systems that model names in a simplified, non-semantic, and non-internationalizable way. Using `xdm:fullName` is always preferable.

`xdm:firstName`
* is optional
* type: `string`
* defined in this schema

### xdm:firstName Type


`string`






## xdm:fullName
### Full name

The full name of the person, in writing order most commonly accepted in the language of the name.

`xdm:fullName`
* is optional
* type: `string`
* defined in this schema

### xdm:fullName Type


`string`






## xdm:lastName
### Last name

The last segment of the name in the writing order most commonly accepted in the language of the name. In many cultures this is the inherited family name, surname, patronymic, or matronymic name.

The `firstName` and `lastName` properties have been introduced to maintain compatibility with existing systems that model names in a simplified, non-semantic, and non-internationalizable way. Using `xdm:fullName` is always preferable.

`xdm:lastName`
* is optional
* type: `string`
* defined in this schema

### xdm:lastName Type


`string`






## xdm:middleName
### Middle name

Middle, alternative, or additional names supplied between the first name and last name.

`xdm:middleName`
* is optional
* type: `string`
* defined in this schema

### xdm:middleName Type


`string`





