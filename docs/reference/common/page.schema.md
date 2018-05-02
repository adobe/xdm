
# Page Schema

```
https://ns.adobe.com/xdm/common/page
```

Page information for paginated resource list operations.


| Abstract | Extensible | Status | Identifiable | Custom Properties | Additional Properties | Defined In |
|----------|------------|--------|--------------|-------------------|-----------------------|------------|
| Can be instantiated | Yes | Experimental | No | Forbidden | Permitted | [common/page.schema.json](common/page.schema.json) |

## Page Examples

```json
{
  "orderBy": "id",
  "start": "123",
  "next": "789",
  "count": 100
}
```

```json
{
  "orderBy": "id",
  "start": "123",
  "next": "789",
  "type": "image/jpeg",
  "count": 100
}
```


# Page Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [count](#count) | `integer` | **Required** | Page (this schema) |
| [next](#next) | `string` | **Required** | Page (this schema) |
| [orderBy](#orderby) | `string` | **Required** | Page (this schema) |
| [property](#property) | `string` | Optional | Page (this schema) |
| [start](#start) | `string` | **Required** | Page (this schema) |
| [type](#type) | `string` | Optional | Page (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## count
### Number of items

The number of items on this page.

`count`
* is **required**
* type: `integer`
* defined in this schema

### count Type


`integer`
* minimum value: `0`






## next
### Next page start value

The start value for the next page.

`next`
* is **required**
* type: `string`
* defined in this schema

### next Type


`string`






## orderBy
### Order by property

The `orderBy` parameter specifies the comma-separated (no spaces after comma) list of properties by which the resource should be sorted. The properties by which to sort are listed in priority order. The first property is used for primary sorting, the second property to resolve ties in primary sorting, etc. The name of a property may be prefixed with a `+` to indicate ascending ordering or `-` to indicate descending ordering by that property. If the property name is not prefixed the result is sorted in asceding order. If `orderBy` is not given or does not name a property supported to sort by, the order is indeterminate and the service may return the elements in any order.

`orderBy`
* is **required**
* type: `string`
* defined in this schema

### orderBy Type


`string`






## property
### Filter properties

The list of properties by which the result is filtered, if any.
This list is comma-separated (no spaces after comma). The resulting list will only include entries for which the filtered property has been defined. 

`property`
* is optional
* type: `string`
* defined in this schema

### property Type


`string`






## start
### First value

The first value, in sorted order, of the orderby property on this page.

`start`
* is **required**
* type: `string`
* defined in this schema

### start Type


`string`






## type
### Filter type value

The applied type filtering value, if any. Unlike `property` which allows to filter for presence of any property, `type` filters only for the specific value of the `type` attribute, i.e. the media type. This is a literal filter without any globbing or pattern matching.

`type`
* is optional
* type: `string`
* defined in this schema

### type Type


`string`





