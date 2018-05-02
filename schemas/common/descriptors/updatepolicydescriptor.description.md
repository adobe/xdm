A descriptor that indicates how entities defined by this schema should be managed when they are updated.

This may include merging the records, replacing the old one with the new one, or adding them to a time-series log.

Data described by an XDM schema may change over time, and as such a data object may reflect an update of a previous instance of that object. There are different ways that an update may be handled, and this way depends both on the nature of the data and the specific application it is being used for.

XDM defines a schema descriptor of type `xdm:descriptorUpdatePolicy`, which describes several common methods of handling an update:

* `xdm:updateMerge`: the data in the new object should be merged into the existing object; the method by which a merge is applied is defined by the application
* `xdm:updateReplace`: the new data object should replace the existing data object
* `xdm:updateTimeSeries`: the data is time series data, and the new object should be logged/collected without changing any existing data
