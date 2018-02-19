The End User IDs schema is used to represent a federated identity of a visitor or known profile across a number of data sources.

It is an `object` that is using the `@id` of an XDM data source as keys.
Each value consists of the (required) ID that is native to the data source, and (optional) metadata about the data source as well as (optional) confidence in the stitching.

Additionally, this schema can include a property that describes the data source that is responsible for identity stitching.
