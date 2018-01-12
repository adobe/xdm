---
---

# Person Name Schema

```
https://ns.adobe.com/xdm/context/personname
```

Full name of a person

| Abstract | Extensible | Custom Properties | Defined In |
|----------|------------|-------------------|------------|
| Cannot be instantiated | Yes | Forbidden | [context/personname.schema.json](context/personname.schema.json) |

## Person Name Examples

```json
{
  "xdm:givenName": "三",
  "xdm:surname": "张",
  "xdm:name": "张三"
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
  "xdm:givenName": "John",
  "xdm:middleName": "S",
  "xdm:surname": "Doe"
}
```


# Person Name Definitions

| Property | Type | Group |
|----------|------|-------|
| [xdm:givenName](#xdm:givenName) | `string` | `#/definitions/personname` |
| [xdm:surname](#xdm:surname) | `string` | `#/definitions/personname` |
| [xdm:middleName](#xdm:middleName) | `string` | `#/definitions/personname` |
| [xdm:courtesyTitle](#xdm:courtesyTitle) | `string` | `#/definitions/personname` |
| [xdm:name](#xdm:name) | `string` | `#/definitions/personname` |

## xdm:givenName
### Given name

The personal, given, or first name.

`xdm:givenName`
* is optional
* type: `string`
* defined in this schema

### xdm:givenName Type


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






## xdm:middleName
### Middle name

Middle, alternative, or additional names supplied between the given name and surnames.

`xdm:middleName`
* is optional
* type: `string`
* defined in this schema

### xdm:middleName Type


`string`






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






## xdm:name
### Full name

The full name of the person, in writing order most commonly accepted in the language of the name.

`xdm:name`
* is optional
* type: `string`
* defined in this schema

### xdm:name Type


`string`





