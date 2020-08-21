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
