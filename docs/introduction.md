# Experience Data Model (XDM) Version 0.1-WIP

## Introduction

## Versioning

As the nature of digital experiences evolves over time, so does the experience data model. To give consumers and implementors of XDM a common ground of expectations, XDM comes with a versioning schema.

### Web Versioning

Maintaining forward and backwards compatibility is an important goal of XDM. Therefore, XDM uses Web Versioning, which means that any revision of the experience data model following the 1.0 release will not:

* introduce new mandatory properties
* rename existing properties
* remove previously defined properties
* remove or restrict previously supported property values

### Extensibility

The fields in each XDM model are extensible. Consuming applications should not fail when they encounter unknown objects, field names, or property values. It is best practice to pass through unknown objects, field names, or property values without modification.

This best practice holds for customer- and vendor-specific extensions to XDM, but also to version updates to XDM. New objects, field names, or property values introduced by either a newer version of XDM or an extension of XDM must not cause a consumer to fail, and should, when possible, passed through without modification.

### Versioning Schema

…