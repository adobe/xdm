
# Person Schema

```
https://ns.adobe.com/xdm/context/person
```

An individual person. May represent a person acting in various roles, such as a customer, contact, or owner.

| [Abstract](../../abstract.md) | [Extensible](../../extensions.md) | [Status](../../status.md) | [Identifiable](../../id.md) | [Custom Properties](../../extensions.md) | [Additional Properties](../../extensions.md) | Defined In |
|-------------------------------|-----------------------------------|---------------------------|-----------------------------|------------------------------------------|----------------------------------------------|------------|
| Can be instantiated | Yes | Experimental | No | Forbidden | Permitted | [context/person.schema.json](context/person.schema.json) |
## Schema Hierarchy

* Person `https://ns.adobe.com/xdm/context/person`
  * [Extensibility base schema](../common/extensible.schema.md) `https://ns.adobe.com/xdm/common/extensible`
  * [Person name](person-name.schema.md) `https://ns.adobe.com/xdm/context/person-name`


## Person Examples

```json
{
  "xdm:name": {
    "xdm:firstName": "Jane",
    "xdm:middleName": "F",
    "xdm:lastName": "Doe",
    "xdm:fullName": "Jane F. Doe"
  },
  "xdm:birthDate": "1996-01-03"
}
```

```json
{
  "xdm:name": {
    "xdm:firstName": "Jane",
    "xdm:middleName": "F",
    "xdm:lastName": "Doe",
    "xdm:fullName": "Jane F. Doe"
  },
  "xdm:birthDayAndMonth": "01-03"
}
```


# Person Properties

| Property | Type | Required | Default | Defined by |
|----------|------|----------|---------|------------|
| [xdm:birthDate](#xdmbirthdate) | `string` | Optional |  | Person (this schema) |
| [xdm:birthDayAndMonth](#xdmbirthdayandmonth) | `string` | Optional |  | Person (this schema) |
| [xdm:birthYear](#xdmbirthyear) | `integer` | Optional |  | Person (this schema) |
| [xdm:gender](#xdmgender) | `enum` | Optional | `"not_specified"` | Person (this schema) |
| [xdm:name](#xdmname) | Person name | Optional |  | Person (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## xdm:birthDate
### Birth date

The full date a person was born.

`xdm:birthDate`
* is optional
* type: `string`
* defined in this schema

### xdm:birthDate Type


`string`
* format: `date` – date, without time (according to [RFC 3339, section 5.6](http://tools.ietf.org/html/rfc3339))






## xdm:birthDayAndMonth
### Birth date

The day and month a person was born, in the format MM-DD. This field should be used when the day and month of a person's birth is known, but not the year.

`xdm:birthDayAndMonth`
* is optional
* type: `string`
* defined in this schema

### xdm:birthDayAndMonth Type


`string`


All instances must conform to this regular expression 
(test examples [here](https://regexr.com/?expression=%5B0-1%5D%5B0-9%5D-%5B0-9%5D%5B0-9%5D)):
```regex
[0-1][0-9]-[0-9][0-9]
```






## xdm:birthYear
### Birth year

The year a person was born including the century, for example, 1983.  This field should be used when only the person's age is known, not the full birth date.

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
* default: `"not_specified"`
* defined in this schema

The value of this property **must** be equal to one of the [known values below](#xdmgender-known-values).

### xdm:gender Known Values
| Value | Description |
|-------|-------------|
| `male` | Male |
| `female` | Female |
| `not_specified` | Not Specified |
| `non_specific` | Non-specific |




## xdm:name
### Full name

The person's full name.

`xdm:name`
* is optional
* type: Person name
* defined in this schema

### xdm:name Type


* [Person name](person-name.schema.md) – `https://ns.adobe.com/xdm/context/person-name`




