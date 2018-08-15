
# HAL Resource Schema

```
https://ns.adobe.com/xdm/external/hal/resource
```

> The JSON Hypertext Application Language (HAL) is a standard which
> establishes conventions for expressing hypermedia controls, such as
> links, with JSON [RFC4627](https://tools.ietf.org/html/rfc4627).

-- from [JSON Hypertext Application Language draft-kelly-json-hal-08](https://tools.ietf.org/html/draft-kelly-json-hal-08)

This external schema definition allows adding HAL expressions into an existing schema.


| [Abstract](../../../abstract.md) | [Extensible](../../../extensions.md) | [Status](../../../status.md) | [Identifiable](../../../id.md) | [Custom Properties](../../../extensions.md) | [Additional Properties](../../../extensions.md) | Defined In |
|----------------------------------|--------------------------------------|------------------------------|--------------------------------|---------------------------------------------|-------------------------------------------------|------------|
| Can be instantiated | Yes | Experimental | No | Forbidden | Permitted | [external/hal/hal.schema.json](external/hal/hal.schema.json) |

## HAL Resource Examples

```json
{
  "_links": {
    "self": {
      "href": "/orders/523"
    },
    "warehouses": [
      {
        "href": "/warehouse/56"
      },
      {
        "href": "/warehouse/56"
      },
      {
        "href": "/warehouse/56"
      }
    ],
    "invoice": {
      "href": "/invoices/873"
    }
  },
  "currency": "USD",
  "status": "shipped",
  "total": 10.2
}
```

```json
{
  "_links": {
    "self": {
      "href": "/orders/523"
    },
    "warehouse": {
      "href": "/warehouse/56"
    },
    "invoice": {
      "href": "/invoices/873"
    }
  },
  "currency": "USD",
  "status": "shipped",
  "total": 10.2
}
```

```json
{
  "_links": {
    "self": {
      "href": "/orders/523"
    },
    "replacing": [
      {
        "href": "/orders/521"
      },
      {
        "href": "/orders/520"
      }
    ],
    "invoice": {
      "href": "/invoices/873"
    }
  },
  "_embedded": {
    "replacing": [
      {
        "_links": {
          "self": {
            "href": "/orders/521"
          }
        },
        "currency": "USD",
        "status": "open",
        "total": 10.2
      },
      {
        "_links": {
          "self": {
            "href": "/orders/521"
          }
        },
        "currency": "EUR",
        "status": "open",
        "total": 10.2
      }
    ]
  },
  "currency": "USD",
  "status": "shipped",
  "total": 10.2
}
```


# HAL Resource Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [_embedded](#_embedded) | `object` | Optional | HAL Resource (this schema) |
| [_links](#_links) | `object` | Optional | HAL Resource (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## _embedded

It is an object whose property names are link relation types (as defined by [RFC5988](https://tools.ietf.org/html/rfc5988)) and values are either a Resource Object or an array of Resource Objects.\n\nEmbedded Resources MAY be a full, partial, or inconsistent version of the representation served from the target URI.

`_embedded`
* is optional
* type: `object`
* defined in this schema

### _embedded Type


`object` with following properties:


| Property | Type | Required
|----------|------|----------|






## _links

It is an object whose property names are link relation types (as defined by [RFC5988](https://tools.ietf.org/html/rfc5988) and values are either a Link Object or an array of Link Objects.  The subject resource of these links is the Resource Object of which the containing `_links` object is a property.

`_links`
* is optional
* type: `object`
* defined in this schema

### _links Type


`object` with following properties:


| Property | Type | Required
|----------|------|----------|





