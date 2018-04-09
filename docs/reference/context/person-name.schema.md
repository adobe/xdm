
# Person Name Schema

```
https://ns.adobe.com/xdm/context/person-name
```

Full name of a person

| Abstract | Extensible | Status | Custom Properties | Additional Properties | Defined In |
|----------|------------|--------|-------------------|-----------------------|------------|
| Can be instantiated | Yes | Experimental | Forbidden | Permitted | [context/person-name.schema.json](context/person-name.schema.json) |

## Person Name Examples

```json
{
  "xdm:firstName": "John",
  "xdm:middleName": "S",
  "xdm:lastName": "Doe"
}
```

```json
{
  "xdm:firstName": "三",
  "xdm:lastName": "张",
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

The preferred personal, given, or first name.

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

The inherited family name, last name, surname, patronymic, or matronymic name.

`xdm:lastName`
* is optional
* type: `string`
* defined in this schema

### xdm:lastName Type


`string`






## xdm:middleName
### Middle name

Middle, alternative, or additional names supplied between the given name and surnames.

`xdm:middleName`
* is optional
* type: `string`
* defined in this schema

### xdm:middleName Type


`string`





