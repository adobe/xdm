
# Search Descriptor Schema

```
https://ns.adobe.com/xdm/common/descriptors/searchdescriptor
```

Describes how XDM properties are to be handled for search, including the application of analyzers and operation in queries. The search:indexed descriptor is set to true to indicate that a property should be indexed, as specified by the values of the other search descriptor properties. When search:index is false (including by default), the other search descriptors will be ignored.

# Descriptors

| Descriptor             | Description                                                                                                         | Values                                                  | Default         |
| :--------------------- | :------------------------------------------------------------------------------------------------------------------ | :------------------------------------------------------ | :-------------- |
| search:indexed         | Whether this property is to be indexed                                                                              | true, false                                             | false           |
| search:store           | Whether values are stored in the index and, if so, are included in results by default                               | notStored, stored, storedAndFetchByDefault              | notStored       |
| search:filterable      | When this property can be used as a filter in queries                                                               | true, false                                             | false           |
| search:sort            | Whether and how sorting is applied to this property                                                                 | notSortable, sortedCaseSensitive, sortedCaseInsensitive | notSortable     |
| search:analyzers       | The set of analyzers applied to property values during indexing                                                     | _See Analyzers, below_                                  | \[ noAnalysis ] |
| search:defaultAnalyzer | The analyzer output to be used when a query reference to this property is made without also specifying the analyzer | _See Analyzers, below_                                  |

# Analyzers

| Category          | Description                                                                                                                  | Values                                                                                           |
| :---------------- | :--------------------------------------------------------------------------------------------------------------------------- | :----------------------------------------------------------------------------------------------- |
| null              | Used to pass through property values without analysis                                                                        | noAnalysis                                                                                       |
| Standard          | Lower-casing and standard grammar-based tokenization                                                                         | standard                                                                                         |
| Generic Language  | Extends the Standard analyzer with better analysis of Asian languages, Unicode normalization, and Unicode-aware case folding | langGeneric                                                                                      |
| Language-Specific | Extends the analyzer with language-specific knowledge                                                                        | langFr (French)<br> langTh (Thai)<br> langDe (German)<br> langJa (Japanese)<br> langZh (Chinese) |
| Prefix            | Applies filters and tokenizers to values starting with patterns                                                              | startsWithDefaultAnalyzer<br> startsWithWhitespaceAnalyzer                                       |
| Custom            | Applies semantics specific to specific value types                                                                           | filename<br> filenameExtension                                                                   |


| [Abstract](../../../abstract.md) | [Extensible](../../../extensions.md) | [Status](../../../status.md) | [Identifiable](../../../id.md) | [Custom Properties](../../../extensions.md) | [Additional Properties](../../../extensions.md) | Defined In |
|----------------------------------|--------------------------------------|------------------------------|--------------------------------|---------------------------------------------|-------------------------------------------------|------------|
| Can be instantiated | Yes | Stable | No | Forbidden | Permitted | [descriptors/search/searchdescriptor.schema.json](descriptors/search/searchdescriptor.schema.json) |
## Schema Hierarchy

* Search Descriptor `https://ns.adobe.com/xdm/common/descriptors/searchdescriptor`
  * [Schema Descriptor](../schemadescriptor.schema.md) `https://ns.adobe.com/xdm/common/descriptors/schemadescriptor`


## Search Descriptor Example
```json
{
  "@id": "https://ns.adobe.com/xdm/common/descriptors/searchdescriptor",
  "@type": "xdm:searchdescriptor",
  "xdm:sourceSchema": "https://ns.adobe.com/xdm/context/profile",
  "xdm:sourceVersion": 1,
  "search:indexed": true,
  "search:filterable": true,
  "search:store": "storedAndFetchByDefault",
  "search:sort": "sortedCaseInsensitive",
  "search:analyzers": [
    "standard",
    "noAnalysis"
  ],
  "search:defaultAnalyzer": "standard"
}
```

# Search Descriptor Properties

| Property | Type | Required | Default | Defined by |
|----------|------|----------|---------|------------|
| [@id](#id) | `string` | Optional |  | [Schema Descriptor](../schemadescriptor.schema.md#id) |
| [@type](#type) | `string` | Optional |  | [Schema Descriptor](../schemadescriptor.schema.md#type) |
| [search:analyzers](#searchanalyzers) | `string[]` | Optional | `"noAnalysis"` | Search Descriptor (this schema) |
| [search:defaultAnalyzer](#searchdefaultanalyzer) | `string` | Optional | `"noAnalysis"` | Search Descriptor (this schema) |
| [search:filterable](#searchfilterable) | `boolean` | Optional | `false` | Search Descriptor (this schema) |
| [search:indexed](#searchindexed) | `boolean` | Optional | `false` | Search Descriptor (this schema) |
| [search:sort](#searchsort) | `string` | Optional | `"notSortable"` | Search Descriptor (this schema) |
| [search:store](#searchstore) | `string` | Optional | `"notStored"` | Search Descriptor (this schema) |
| [xdm:sourceItem](#xdmsourceitem) | complex | Optional |  | [Schema Descriptor](../schemadescriptor.schema.md#xdmsourceitem) |
| [xdm:sourceProperty](#xdmsourceproperty) | complex | Optional |  | [Schema Descriptor](../schemadescriptor.schema.md#xdmsourceproperty) |
| [xdm:sourceSchema](#xdmsourceschema) | `string` | Optional |  | [Schema Descriptor](../schemadescriptor.schema.md#xdmsourceschema) |
| [xdm:sourceVersion](#xdmsourceversion) | `number` | Optional |  | [Schema Descriptor](../schemadescriptor.schema.md#xdmsourceversion) |
| `*` | any | Additional | this schema *allows* additional properties |

## @id
### Identifier

The unique identifier for the schema descriptor. This property is required when the descriptor is defined outside of the applicable schema, but is optional when applied via 'meta:descriptors'.

`@id`
* is optional
* type: `string`
* defined in [Schema Descriptor](../schemadescriptor.schema.md#id)

### @id Type


`string`
* format: `uri-reference` – URI Reference (according to [RFC3986](https://tools.ietf.org/html/rfc3986))






## @type
### Type

The type of descriptor this object represents.

`@type`
* is optional
* type: `string`
* defined in [Schema Descriptor](../schemadescriptor.schema.md#type)

### @type Type


`string`



### @type Known Values
| Value | Description |
|-------|-------------|




## search:analyzers
### Analyzers

A set of analyzers to be applied when indexing this property.

`search:analyzers`
* is optional
* type: `string[]`

* default: `"noAnalysis"`
* defined in this schema

### search:analyzers Type


Array type: `string[]`

All items must be of the type:
`string`






### search:analyzers Known Values
| Value | Description |
|-------|-------------|
| `noAnalysis` | noAnalysis |
| `standard` | standard |
| `langGeneric` | langGeneric |
| `langFr` | langFr |
| `langTh` | langTh |
| `langDe` | langDe |
| `langJa` | langJa |
| `langZh` | langZh |
| `startsWithDefaultAnalyzer` | startsWithDefaultAnalyzer |
| `startsWithWhiteSpaceAnalyzer` | startsWithWhiteSpaceAnalyzer |
| `fileName` | fileName |
| `fileNameExtension` | fileNameExtension |




## search:defaultAnalyzer
### Default analyzer

Default analyzer to be applied when search queries are made against this property.

`search:defaultAnalyzer`
* is optional
* type: `string`
* default: `"noAnalysis"`
* defined in this schema

### search:defaultAnalyzer Type


`string`



### search:defaultAnalyzer Known Values
| Value | Description |
|-------|-------------|
| `noAnalysis` | noAnalysis |
| `standard` | standard |
| `langGeneric` | langGeneric |
| `langFr` | langFr |
| `langTh` | langTh |
| `langDe` | langDe |
| `langJa` | langJa |
| `langZh` | langZh |
| `startsWithDefaultAnalyzer` | startsWithDefaultAnalyzer |
| `startsWithWhiteSpaceAnalyzer` | startsWithWhiteSpaceAnalyzer |
| `fileName` | fileName |
| `fileNameExtension` | fileNameExtension |




## search:filterable
### Filterable

Whether the property can be used as a filter in search queries.

`search:filterable`
* is optional
* type: `boolean`
* default: `false`
* defined in this schema

### search:filterable Type


`boolean`





## search:indexed
### Indexed

Whether the property is indexable and searchable.

`search:indexed`
* is optional
* type: `boolean`
* default: `false`
* defined in this schema

### search:indexed Type


`boolean`





## search:sort
### Sort Type

Whether and how search results can be sorted on this property.

`search:sort`
* is optional
* type: `string`
* default: `"notSortable"`
* defined in this schema

### search:sort Type


`string`



### search:sort Known Values
| Value | Description |
|-------|-------------|
| `notSortable` | notSortable |
| `sorted` | sorted |
| `sortedCaseSensitive` | sortedCaseSensitive |
| `sortedCaseInsensitive` | sortedCaseInsensitive |




## search:store
### Stored

Whether the property value is stored in, and therefore can be retrieved from, the index.

`search:store`
* is optional
* type: `string`
* default: `"notStored"`
* defined in this schema

### search:store Type


`string`



### search:store Known Values
| Value | Description |
|-------|-------------|
| `notStored` | notStored |
| `stored` | stored |
| `storedAndFetchByDefault` | storedAndFetchByDefault |




## xdm:sourceItem
### Source Item

When present, the selector used to match a specific item in the array pointed to by `sourceProperty`.

`xdm:sourceItem`
* is optional
* type: complex
* defined in [Schema Descriptor](../schemadescriptor.schema.md#xdmsourceitem)

### xdm:sourceItem Type


**One** of the following *conditions* need to be fulfilled.


#### Condition 1



#### Condition 2



#### Condition 3



#### Condition 4







## xdm:sourceProperty
### Source Property

When present, the property of the source schema to which this descriptor applies. This value is a JSON Pointer, applied to an instance of an object described by `xdm:sourceSchema`.

`xdm:sourceProperty`
* is optional
* type: complex
* defined in [Schema Descriptor](../schemadescriptor.schema.md#xdmsourceproperty)

### xdm:sourceProperty Type


**One** of the following *conditions* need to be fulfilled.


#### Condition 1


`string`



#### Condition 2


Array type: 

All items must be of the type:
`string`










## xdm:sourceSchema
### Source Schema

The source schema this descriptor applies to. This property is required when the descriptor is defined outside of the applicable schema, but is optional when applied via 'meta:descriptors'

`xdm:sourceSchema`
* is optional
* type: `string`
* defined in [Schema Descriptor](../schemadescriptor.schema.md#xdmsourceschema)

### xdm:sourceSchema Type


`string`
* format: `uri` – Uniformous Resource Identifier (according to [RFC3986](http://tools.ietf.org/html/rfc3986))






## xdm:sourceVersion
### Source Version

Major version being referenced.

`xdm:sourceVersion`
* is optional
* type: `number`
* defined in [Schema Descriptor](../schemadescriptor.schema.md#xdmsourceversion)

### xdm:sourceVersion Type


`number`





