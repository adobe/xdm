# Experience Data Model (XDM) Version 0.1-WIP

## Introduction

## Versioning

As the nature of digital experiences evolves over time, so does the experience data model. To give consumers and implementors of XDM a common ground of expectations, XDM comes with a versioning schema.

### Purely Additive Versioning

Maintaining forward and backwards compatibility is an important goal of XDM. Therefore, XDM uses purely additive versioning, following the [best practices for versioning REST APIs](https://www.infoq.com/articles/roy-fielding-on-versioning), which means that any revision of the experience data model following the 1.0 release will not:

* introduce new mandatory properties
* rename existing properties
* remove previously defined properties
* remove or restrict previously supported property values

As all XDM versions are mutually compatible, the version numbers indicated in the specification serve as an guide when models, properties, or values have been added to the specification.

### Extensibility

The fields in each XDM model are extensible. Consuming applications should not fail when they encounter unknown objects, field names, or property values. It is best practice to pass through unknown objects, field names, or property values without modification. This includes passing through values that are not conforming to this specification.

In general, consuming applications should reject invalid models when the invalidity of the received data is preventing the application from functioning, and pass through all other models.

All extensions will be performed in a customer- or vendor-defined namespace, which means that extensions cannot change, modify, or break the semantics of previously introduced models, properties, or values.

This best practice holds for customer- and vendor-specific extensions to XDM, but also to version updates to XDM. New objects, field names, or property values introduced by either a newer version of XDM or an extension of XDM must not cause a consumer to fail, and should, when possible, passed through without modification.

### Versioning Schema

…