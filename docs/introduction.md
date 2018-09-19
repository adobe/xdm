---
xdm:navOrder: 1
---

# Experience Data Model (XDM) Version 0.9.5

## Introduction

## Goals

The goal of the Experience Data Model standard is to define a common language for digital experiences that spans multiple channels, software implementations, and vendors. In particular, XDM aims to:

* Enable software that creates, manages, publishes, and measures digital experiences to interoperate more easily
* Facilitate the creation of complex, engaging, and intruiging digital experiences across channels
* Allow the creation of application programming interfaces (APIs) for experience creation, management, publication, and measurement

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

### Version Schema

XDM Versioning follows the practices laid out in the [Semantic Versioning 2.0.0 guideline](https://semver.org). This means, that XDM version numbers are in the form MAJOR.MINOR.PATCH, with increments happening when:

> * MAJOR version when you make incompatible API changes,
> * MINOR version when you add functionality in a backwards-compatible manner, and
> * PATCH version when you make backwards-compatible bug fixes.

Applied to XDM, this means,

* MAJOR version will not be increased once version 1.0.0 is reached
* MINOR version will be increased when new optional properties get added, the range of property values gets broadened
* PATCH version will be increased when names, titles, and descriptions of properties get changed

### Versioning before 1.0.0

As laid out in [Semantic Versioning 2.0.0](https://semver.org), article 4:

> Major version zero (0.y.z) is for initial development. Anything may change at any time. The public API should not be considered stable.

XDM is at major version zero at this time, and should not be considered stable.

### Schema Status

Every Schema in XDM has a dedicated status that describes the likelihood of and ability to change. Details are explained in [Schema Status](status.md)

### Extensibility

The fields in each XDM model are extensible. Consuming applications should not fail when they encounter unknown schemas, field names, or property values.
It is best practice to pass through unknown schemas, field names, or property values without modification. This includes passing through values that are not conforming to this specification.

In general, consuming applications should reject invalid models when the invalidity of the received data is preventing the application from functioning, and pass through all other models.

All extensions will be performed using URIs as property names, which means that extensions cannot change, modify, or break the semantics of previously introduced models, properties, or values, because all XDM-provided property names use a `prefix:name` pattern.

This best practice holds for customer- and vendor-specific extensions to XDM, but also to version updates to XDM.
New schemas, field names, or property values introduced by either a newer version of XDM or an extension of XDM must not cause a consumer to fail, and should, when possible, passed through without modification.

## Formal Expression

XDM is formally specified through a combination of JSON Schema and some aspects of JSON for Linking Data (JSON-LD).
JSON Schema specifies unambiguously which properties and property values are allowed for a specific instance of a model, JSON-LD provides us with best practices of defining namespace prefixes, and identifying the semantics of property names.
For consumers, it is not neccessary to understand JSON-LD, and expected to treat all XDM documents as JSON documents.
This means, if the JSON representation of two XDM models is identical, then the two models are considered identical.

## Specification Details

1.  [Related Standards](standards.md)
2.  [Terminology used in XDM](terminology.md)
3.  [Extending XDM](extensions.md)
4.  [Abstract and Concrete Schema](abstract.md)
5.  [Schema Status](status.md)
6.  [Identifiable Entities](id.md)
