# Experience Data Model (XDM) Version 0.1-WIP

## Introduction

## Goals

The goal of the Experience Data Model standard is to define a common language for digital experiences that spans multiple channels, software implementations, and vendors. In particular, XDM aims to:

- Enable software that creates, manages, publishes, and measures digital experiences to interoperate more easily
- Facilitate the creation of complex, engaging, and intruiging digital experiences across channels
- Allow the creation of application programming interfaces (APIs) for experience creation, management, publication, and measurement


## Status

XDM is currently undergoing an intermal specification effort. The documents published here are a preview of that effort and are not yet finalized.

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

## Formal Expression

XDM is formally specified through a combination of JSON Schema and some aspects of JSON for Linking Data (JSON-LD). 
JSON Schema specifies unambiguously which properties and property values are allowed for a specific instance of a model, JSON-LD provides us with best practices of defining namespace prefixes, and identifying the semantics of property names.
For consumers, it is not neccessary to understand JSON-LD, and expected to treat all XDM documents as JSON documents. 
This means, if the JSON representation of two XDM models is identical, then the two models are considered identical.
