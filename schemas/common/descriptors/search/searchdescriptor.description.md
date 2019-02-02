Describes how XDM properties are to be handled for search, including the application of analyzers and operation in queries. The search:indexed descriptor is set to true to indicate that a property should be indexed, as specified by the values of the other search descriptor properties. When search:index is false (including by default), the other search descriptors will be ignored.

| Descriptor       |  Description    |  Values   | Default  |
|:-----------------|:----------------|:----------|:---------------|
| search:indexed   | Whether this property is to be indexed  | true, false  | false |
| search:store     | Whether values are stored in the index and, if so, are included in results by default  | notStored, stored, storedAndFetchByDefault  | notStored     |
| search:filterable | When this property can be used as a filter in queries | true, false | false |
| search:sort       | Whether and how sorting is applied to this property  | notSortable, sortedCaseSensitive, sortedCaseInsensitive  | notSortable   |
| search:analyzers  | The set of analyzers applied to property values during indexing  | _See Analyzers, below_  | noAnalysis    |
| search:defaultAnalyzer  | The analyzer output to be used when a query reference to this property is made without also specifying the analyzer | _See Analyzers, below_ | noAnalysis    |

Analyzer types 

| Type              | Description                 | Canonical name in Enum for search descriptor    | 
|-------------------|:----------------------------|:------------------------------------------------| 
| Standard          | This analyzer provides lower casing and standard grammar based tokenization.  | standard | 
| Generic language analyzer | Adds ( to the standard analyzer ) extended Unicode support using the ICU libraries, including better analysis of Asian languages, Unicode normalization, Unicode-aware case folding | langGeneric | 
| Language analyzers | One for every supported analyzer  | langFr, langTh, langDe, langJa, langZh | 
| Prefix ( starts_with* analyzers ) | Prefix based analyzers that can determine if the text starts with a pattern and apply a set of character filters or tokenizers | startsWithDefaultAnalyzer , startsWithWhitespaceAnalyzer | 
| Custom field analyzers  | Analyzer that is specific to certain fields, and applies custom semantics specific to the field being analyzed ( for instance file name specific analyzers ) | filename, filenameExtension | 
