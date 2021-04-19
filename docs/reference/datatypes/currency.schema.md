
# Currency Schema

```
https://ns.adobe.com/xdm/datatypes/currency
```

This datatype is used where ever you want to store any kind of amount in combination of currency code.

| [Abstract](../../abstract.md) | [Extensible](../../extensions.md) | [Status](../../status.md) | [Identifiable](../../id.md) | [Custom Properties](../../extensions.md) | [Additional Properties](../../extensions.md) | Defined In |
|-------------------------------|-----------------------------------|---------------------------|-----------------------------|------------------------------------------|----------------------------------------------|------------|
| Can be instantiated | Yes | Stable | No | Forbidden | Permitted | [datatypes/currency.schema.json](datatypes/currency.schema.json) |

## Currency Example
```json
{
  "xdm:amount": -200757575,
  "xdm:currencyCode": "USD",
  "xdm:conversionDate": "2018-01-12T15:52:25+00:00"
}
```

# Currency Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [xdm:amount](#xdmamount) | `number` | Optional | Currency (this schema) |
| [xdm:conversionDate](#xdmconversiondate) | `string` | Optional | Currency (this schema) |
| [xdm:currencyCode](#xdmcurrencycode) | `string` | Optional | Currency (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## xdm:amount
### Amount

Amount represented by the currencyCode

`xdm:amount`
* is optional
* type: `number`
* defined in this schema

### xdm:amount Type


`number`






## xdm:conversionDate
### Conversion Date

Date when currency conversion was made.

`xdm:conversionDate`
* is optional
* type: `string`
* defined in this schema

### xdm:conversionDate Type


`string`
* format: `date-time` – date and time (according to [RFC 3339, section 5.6](http://tools.ietf.org/html/rfc3339))






## xdm:currencyCode
### Currency Code

The ISO 4217 currency code.

`xdm:currencyCode`
* is optional
* type: `string`
* defined in this schema

### xdm:currencyCode Type


`string`


All instances must conform to this regular expression 
```regex
^[A-Z]{3}$
```

* test example: [USD](https://regexr.com/?expression=%5E%5BA-Z%5D%7B3%7D%24&text=USD)
* test example: [EUR](https://regexr.com/?expression=%5E%5BA-Z%5D%7B3%7D%24&text=EUR)




### xdm:currencyCode Examples

```json
"USD"
```

```json
"EUR"
```


