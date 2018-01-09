
# Person Schema

```
https://ns.adobe.com/xdm/context/person
```

An individual person. May represent a person acting in various roles, such as a customer, contact, or owner.

| Abstract | Extensible | Custom Properties | Additional Properties | Defined In |
|----------|------------|-------------------|-----------------------|------------|
| Cannot be instantiated | Yes | Forbidden | Permitted | [context/person.schema.json](context/person.schema.json) |

## Person Example
```json
{
  "xdm:name": {
    "xdm:givenName": "Jane",
    "xdm:middleName": "F",
    "xdm:surname": "Doe"
  },
  "xdm:birthMonth": 1,
  "xdm:birthDay": 3,
  "xdm:birthYear": 1996,
  "xdm:gender": "female"
}
```

# Person Definitions

| Property | Type | Group |
|----------|------|-------|
| [xdm:birthDay](#xdm:birthDay) | `integer` | `https://ns.adobe.com/xdm/context/person#/definitions/person` |
| [xdm:birthMonth](#xdm:birthMonth) | `integer` | `https://ns.adobe.com/xdm/context/person#/definitions/person` |
| [xdm:birthYear](#xdm:birthYear) | `integer` | `https://ns.adobe.com/xdm/context/person#/definitions/person` |
| [xdm:gender](#xdm:gender) | `enum` | `https://ns.adobe.com/xdm/context/person#/definitions/person` |
| [xdm:name](#xdm:name) | reference | `https://ns.adobe.com/xdm/context/person#/definitions/person` |

## xdm:birthDay
### Birth day

The day of the month a person was born (1-31).

`xdm:birthDay`
* is optional
* type: `integer`
* defined in this schema

### xdm:birthDay Type


`integer`
* minimum value: `1`
* maximum value: `31`





## xdm:birthMonth
### Birth month

The month of the year a person was born (1-12).

`xdm:birthMonth`
* is optional
* type: `integer`
* defined in this schema

### xdm:birthMonth Type


`integer`
* minimum value: `1`
* maximum value: `12`





## xdm:birthYear
### Birth year

The year a person was born including the century (yyyy, e.g 1983).

`xdm:birthYear`
* is optional
* type: `integer`
* defined in this schema

### xdm:birthYear Type


`integer`
* minimum value: `1`
* maximum value: `32767`





## xdm:gender
### Gender

Gender identity of the person.


`xdm:gender`
* is optional
* type: `enum`
* defined in this schema

The value of this property **must** be equal to one of the [known values below](#xdm:gender-known-values).

### xdm:gender Known Values
| Value | Description |
|-------|-------------|
| `male` | Male |
| `female` | Female |
| `not_specified` | Not Specified |
| `non_specific` | Nonspecific |




## xdm:name
### Full name

The person&#39;s full name

`xdm:name`
* is optional
* type: reference
* defined in this schema

### xdm:name Type


* []() – `https://ns.adobe.com/xdm/context/person-name`




