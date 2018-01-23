
# Person Name Schema

```
https://ns.adobe.com/xdm/context/person-name
```

Full name of a person

| Abstract | Extensible | Custom Properties | Additional Properties | Defined In |
|----------|------------|-------------------|-----------------------|------------|
| Cannot be instantiated | Yes | Forbidden | Permitted | [context/person-name.schema.json](context/person-name.schema.json) |

## Person Name Examples

```json
{
  "xdm:givenName": "John",
  "xdm:middleName": "S",
  "xdm:surname": "Doe"
}
```

```json
{
  "xdm:givenName": "فلانة",
  "xdm:surname": "الفلانية",
  "xdm:name": "فلانة الفلانية"
}
```

```json
{
  "xdm:givenName": "三",
  "xdm:surname": "张",
  "xdm:name": "张三"
}
```


# Person Name Definitions

| Property | Type | Group |
|----------|------|-------|
| [xdm:courtesyTitle](#xdm:courtesyTitle) | `string` | `https://ns.adobe.com/xdm/context/person-name#/definitions/personname` |
| [xdm:givenName](#xdm:givenName) | `string` | `https://ns.adobe.com/xdm/context/person-name#/definitions/personname` |
| [xdm:middleName](#xdm:middleName) | `string` | `https://ns.adobe.com/xdm/context/person-name#/definitions/personname` |
| [xdm:name](#xdm:name) | `string` | `https://ns.adobe.com/xdm/context/person-name#/definitions/personname` |
| [xdm:surname](#xdm:surname) | `string` | `https://ns.adobe.com/xdm/context/person-name#/definitions/personname` |

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






## xdm:givenName
### Given name

The personal, given, or first name.

`xdm:givenName`
* is optional
* type: `string`
* defined in this schema

### xdm:givenName Type


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






## xdm:name
### Full name

The full name of the person, in writing order most commonly accepted in the language of the name.

`xdm:name`
* is optional
* type: `string`
* defined in this schema

### xdm:name Type


`string`






## xdm:surname
### Surname

The inherited family name, last name, surname, patronymic, or matronymic name.

`xdm:surname`
* is optional
* type: `string`
* defined in this schema

### xdm:surname Type


`string`





