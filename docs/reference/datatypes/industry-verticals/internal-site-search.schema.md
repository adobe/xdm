
# Internal Site Search Schema

```
https://ns.adobe.com/xdm/datatypes/internal-site-search
```

Used for internal site searches and includes all related search behaviors and details.

| [Abstract](../../../abstract.md) | [Extensible](../../../extensions.md) | [Status](../../../status.md) | [Identifiable](../../../id.md) | [Custom Properties](../../../extensions.md) | [Additional Properties](../../../extensions.md) | Defined In |
|----------------------------------|--------------------------------------|------------------------------|--------------------------------|---------------------------------------------|-------------------------------------------------|------------|
| Can be instantiated | Yes | Stable | No | Forbidden | Permitted | [datatypes/industry-verticals/internal-site-search.schema.json](datatypes/industry-verticals/internal-site-search.schema.json) |

## Internal Site Search Example
```json
{
  "xdm:numberOfResults": 258,
  "xdm:productFindingMethods": "pedals",
  "xdm:refinementValue": "aluminum",
  "xdm:refinementType": [
    "Customer Reviews = 5",
    "Recommended Use = Trail"
  ],
  "xdm:refinementInstances": 1,
  "xdm:resultsPageNumber": 2,
  "xdm:resultsPerPage": 50,
  "xdm:instances": 1,
  "xdm:locationInPage": "top nav",
  "xdm:nullInstances": 0,
  "xdm:postalCode": "63141",
  "xdm:radiusDistance": 25,
  "xdm:radiusType": "miles",
  "xdm:term": "shimano pedals",
  "xdm:autoCompleteClicked": true,
  "xdm:autoCompleteValue": "shimano pedals",
  "xdm:autoCompleteTypedValue": "pedal",
  "xdm:type": "standard",
  "xdm:sortOrder": "ascending",
  "xdm:sortType": "price: low to high"
}
```

# Internal Site Search Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [xdm:autoCompleteClicked](#xdmautocompleteclicked) | `boolean` | Optional | Internal Site Search (this schema) |
| [xdm:autoCompleteTypedValue](#xdmautocompletetypedvalue) | `string` | Optional | Internal Site Search (this schema) |
| [xdm:autoCompleteValue](#xdmautocompletevalue) | `string` | Optional | Internal Site Search (this schema) |
| [xdm:instances](#xdminstances) | `integer` | Optional | Internal Site Search (this schema) |
| [xdm:locationInPage](#xdmlocationinpage) | `string` | Optional | Internal Site Search (this schema) |
| [xdm:nullInstances](#xdmnullinstances) | `integer` | Optional | Internal Site Search (this schema) |
| [xdm:numberOfResults](#xdmnumberofresults) | `integer` | Optional | Internal Site Search (this schema) |
| [xdm:postalCode](#xdmpostalcode) | `string` | Optional | Internal Site Search (this schema) |
| [xdm:productFindingMethods](#xdmproductfindingmethods) | `string` | Optional | Internal Site Search (this schema) |
| [xdm:radiusDistance](#xdmradiusdistance) | `integer` | Optional | Internal Site Search (this schema) |
| [xdm:radiusType](#xdmradiustype) | `enum` | Optional | Internal Site Search (this schema) |
| [xdm:refinementInstances](#xdmrefinementinstances) | `integer` | Optional | Internal Site Search (this schema) |
| [xdm:refinementType](#xdmrefinementtype) | `string[]` | Optional | Internal Site Search (this schema) |
| [xdm:refinementValue](#xdmrefinementvalue) | `string` | Optional | Internal Site Search (this schema) |
| [xdm:resultsPageNumber](#xdmresultspagenumber) | `integer` | Optional | Internal Site Search (this schema) |
| [xdm:resultsPerPage](#xdmresultsperpage) | `integer` | Optional | Internal Site Search (this schema) |
| [xdm:searchType](#xdmsearchtype) | `string` | Optional | Internal Site Search (this schema) |
| [xdm:sortOrder](#xdmsortorder) | `enum` | Optional | Internal Site Search (this schema) |
| [xdm:sortType](#xdmsorttype) | `enum` | Optional | Internal Site Search (this schema) |
| [xdm:term](#xdmterm) | `string` | Optional | Internal Site Search (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## xdm:autoCompleteClicked
### Auto Complete Clicked

Indicates when a visitor uses a suggested/autocompleted search value to execute the search

`xdm:autoCompleteClicked`
* is optional
* type: `boolean`
* defined in this schema

### xdm:autoCompleteClicked Type


`boolean`





## xdm:autoCompleteTypedValue
### Auto Complete Typed Value

For autocomplete scenarios, users sometimes abandon their search and click a specific term from the drop down. This value tracks what the user started to type in order to generate the specific set of suggested search terms

`xdm:autoCompleteTypedValue`
* is optional
* type: `string`
* defined in this schema

### xdm:autoCompleteTypedValue Type


`string`






## xdm:autoCompleteValue
### Auto Complete Value

For autocomplete scenarios, users sometimes abandon their search and click a specific term from the drop down. This value is used to track the specific terms clicked

`xdm:autoCompleteValue`
* is optional
* type: `string`
* defined in this schema

### xdm:autoCompleteValue Type


`string`






## xdm:instances
### Instances

Number of times an internal site search has occurred.

`xdm:instances`
* is optional
* type: `integer`
* defined in this schema

### xdm:instances Type


`integer`






## xdm:locationInPage
### Location in Page

When multiple search boxes exist on the page, this value should be used to identify the specific location the user used to search

`xdm:locationInPage`
* is optional
* type: `string`
* defined in this schema

### xdm:locationInPage Type


`string`






## xdm:nullInstances
### Null Instances

Number of times an internal site search has occurred that provided zero results.

`xdm:nullInstances`
* is optional
* type: `integer`
* defined in this schema

### xdm:nullInstances Type


`integer`






## xdm:numberOfResults
### Number of Results

Count of the total number of search results returned.

`xdm:numberOfResults`
* is optional
* type: `integer`
* defined in this schema

### xdm:numberOfResults Type


`integer`






## xdm:postalCode
### Postal Code

Captures the zip code used for a search, if applicable

`xdm:postalCode`
* is optional
* type: `string`
* defined in this schema

### xdm:postalCode Type


`string`






## xdm:productFindingMethods
### Product Finding Method

The internal site search term value with merchandising binding. Will show what term was searched for immediately before viewing a product.

`xdm:productFindingMethods`
* is optional
* type: `string`
* defined in this schema

### xdm:productFindingMethods Type


`string`






## xdm:radiusDistance
### Radius Distance

Captures the selected distance of the search radius.

`xdm:radiusDistance`
* is optional
* type: `integer`
* defined in this schema

### xdm:radiusDistance Type


`integer`






## xdm:radiusType
### Radius Type

Captures the selected distance type of the search radius in either miles or kilometers.

`xdm:radiusType`
* is optional
* type: `enum`
* defined in this schema

The value of this property **must** be equal to one of the [known values below](#xdmradiustype-known-values).

### xdm:radiusType Known Values
| Value | Description |
|-------|-------------|
| `miles` |  |
| `kilometers` |  |




## xdm:refinementInstances
### Refinement Instances

Captures when a search refinement action occurs.

`xdm:refinementInstances`
* is optional
* type: `integer`
* defined in this schema

### xdm:refinementInstances Type


`integer`






## xdm:refinementType
### Refinement Type

Captures the refinement type(s) applied to the search results (i.e. department, brand, price, in-store, review rating, color, material, etc.)

`xdm:refinementType`
* is optional
* type: `string[]`

* defined in this schema

### xdm:refinementType Type


Array type: `string[]`

All items must be of the type:
`string`









## xdm:refinementValue
### Refinement Value

Number of times an internal site search refinement has occurred.

`xdm:refinementValue`
* is optional
* type: `string`
* defined in this schema

### xdm:refinementValue Type


`string`






## xdm:resultsPageNumber
### Results Page Number

For paginated search results, tracks the page of results the visitor is viewing.

`xdm:resultsPageNumber`
* is optional
* type: `integer`
* defined in this schema

### xdm:resultsPageNumber Type


`integer`






## xdm:resultsPerPage
### Results Per Page

For paginated search results, tracks the number of search results displayed per page.

`xdm:resultsPerPage`
* is optional
* type: `integer`
* defined in this schema

### xdm:resultsPerPage Type


`integer`






## xdm:searchType
### Search Type

Captures the method of search being executed, if applicable. Examples could include a type-ahead search, directly-typed search, or any other type of custom search functionality a site might have.

`xdm:searchType`
* is optional
* type: `string`
* defined in this schema

### xdm:searchType Type


`string`






## xdm:sortOrder
### Sort Order

ascending/descending

`xdm:sortOrder`
* is optional
* type: `enum`
* defined in this schema

The value of this property **must** be equal to one of the [known values below](#xdmsortorder-known-values).

### xdm:sortOrder Known Values
| Value | Description |
|-------|-------------|
| `ascending` |  |
| `descending` |  |




## xdm:sortType
### Sort Type

Captures the type of sort applied to search results, i.e. best match, price, rating, etc.

`xdm:sortType`
* is optional
* type: `enum`
* defined in this schema

The value of this property **must** be equal to one of the [known values below](#xdmsorttype-known-values).

### xdm:sortType Known Values
| Value | Description |
|-------|-------------|
| `price: low to high` |  |
| `price: high to low` |  |
| `featured` |  |
| `best match` |  |
| `average customer review` |  |
| `discount` |  |
| `new items` |  |




## xdm:term
### Term

Tracks the internal site search term entered by the visitor.

`xdm:term`
* is optional
* type: `string`
* defined in this schema

### xdm:term Type


`string`





