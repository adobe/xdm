# Contributing to XDM

The Experience Data Model (XDM) project is developed as an Open Standard driven by Adobe. We welcome contributions from everyone who is interested in advancing digital experiences.

## Things to Keep in Mind

XDM uses a **review then commit** process, which means that no changes are being made without an *editor* approving the change.

## Before you Contribute

XDM is driven by Adobe, but it is not specific to Adobe products.
This means that models should capture the universal concepts of digital experiences, not specific implementations, no matter if they are part of an Adobe product or not.
If you need to express a concept that is specific to an Adobe (or other) product, that is not universal, it should be formulated in an XDM extension instead.

## How to Contribute

1. Go to the [list of open issues](https://git.corp.adobe.com/AdobeCloudPlatform/xdm/issues?q=is%3Aissue+is%3Aopen+sort%3Aupdated-desc) and pick an issue you want to work on. If you don't see the appropriate issue, [create a new issue in GitHub](https://git.corp.adobe.com/AdobeCloudPlatform/xdm/issues/new)
2. If you haven't done so yet, [fork the XDM repository into your private GitHub organization](https://git.corp.adobe.com/AdobeCloudPlatform/xdm/fork). If your fork exists, merge the latest updates from `AdobeCloudPlatform/xdm` into `yourname/xdm`, so that you don't start from an outdated code tree
3. In `yourname/xdm` create a new branch from `master`. Your branch name should either refer the issue number like `bug-42` or `feature-23` or have a descriptive name like `fix-layer-group-references`
4. Make add edits that apply to the given feature or bug against this new branch. Commit and push in frequent intervals
5. If you are working on the branch for more than a day, make sure to occasionally (at least once per day) to merge the latest updates from `AdobeCloudPlatform/xdm#master` into your branch, so that you won't get surprised when it's time to merge the pull request. Resolve any conflicts to make life easier for the XDM editors
6. Once you are done, create a pull request from your branch against `AdobeCloudPlatform/xdm#master`.

Every pull request should specify:

* What the change intends to do
* If there are breaking changes
* Link to the Github issue in the format `#42`

For every update to the schema, make sure

* `npm test` validates all example files
* There are `schemas/*/*.example.*.json` files for each newly created schema

Furthermore, a pull request that modifies the schema must also include accompanying documentation. Pull requests with missing documentation will be rejected.

Each commit message that is not part of a pull request:

* Should contain the issue ID like `#42`
* Can contain the tag `[trivial]` for trivial changes that don't relate to an issue

## Design Guidelines

The target consumers of the data model are developers building applications using services from Adobe, our partners, and their customers. These design guidelines help:

*  **Longevity**: consuming applications rarely need to be changed.
*  **Clarity**: concepts are self-explanatory.
*  **Continuity**: existing knowledge can be re-applied.
*  **Compatibility**: implementations can easily cross between products.
*  **Consumability**: systems based on the data model are easy to build, understand, and use.

### Design for Longevity

Our goal is to establish a universal standard for the experience business. As such, this standard's lifetime will be comparable to standards like PDF (24 years old), EXIF (22 years old), or HTML (24 years old).

The design decisions made today will impact future developers, who will have only limited understanding, patience, or sympathy for constraints dictated by current Adobe implementations. While future requirements cannot be predicted in detail, it is important to accomodate requirements and industry trends.

### Design for Clarity

XDM will be consumed and implemented by many highly different applications, which in turn will be used by digital experience professionals such as marketers, designers, advertisers, or digital analysts, which will be exposed to names and concepts introduced and solidified in XDM.

When names can refer to a business concept or a lower-level technical concept, save the shorter, simpler name for the high-level business concept.

For example, for a marketer, an *event* is something that happens or takes place, or a planned public or social occasion. For a developer, an *event* in event-driven programming is a low level user- or system action. As the term event is highly relevant to experiences in the more general sense, the shorter, unqualified term shall be used for the business concept.

### Design for Continuity

XDM is not an isolated standard, but incorporates and builds on standards. Whenever possible, use existing standards, or "borrow" concepts from existing standards. See (and update!) [Standards Used by XDM](docs/standards.md).

### Design for Compatibility

Interoperability with [Microsoft's Common Data Model (CDM)](https://docs.microsoft.com/en-us/common-data-service/entity-reference/common-data-model)is a top priority. This means that definitions that are present in CDM should be used or extended, where appropriate, by XDM. XDM should not attempt to duplicate definitions that are present in CDM.

Where appropriate, we can 'lead' CDM, extend it to meet other requirements.
Another good source of data model elements is [schema.org](http://schema.org).

### Design for Consumability

While there will be almost certainly multiple implementations of parts of XDM across Adobe (sometimes sequentially, sometimes in parallel), the number of internal implementations (producers) will be massively outstripped by the number of external, consuming implementations of XDM.

Additional aspects of standard design that aid with consumability are: 

* principle of least astonishment: don't surprise the consumer
* avoid unnecessary complexity: don't introduce indirections that are not needed
* the principle of minimal verbosity: make keep things as short as possible, but not shorter

### Design for the Cloud

The experience business is a global business, therefore XDM needs to meet the needs of consumers and creators world-wide.
Desktop and Enterprise applications are often built to be localized, adapted to the customer environment. 
But XDM will form the "glue" that puts together widely distributed components which may have different internal data models.
In general we want to avoid the necessity of converters, with some exceptions:

Some values require context to interpret – for example, a phone number without a county code. Include the context in XDM.
However, for values that need no context to convert, put off conversion by allowing alternatives: writing XDM data will require no conversion, while consuming XDM data only requires conversion in cases where conversion is necessary.

Avoid non-semantic limits – don’t put current resource limits in the data model. Limits (number ranges, choices, string length) should be based on business constraints or expressed independently.


## Coding Styleguides

* file names for schema files should be lower case and end with `.schema.json`
* include an `"$id"` with a value like `"https://ns.adobe.com/xdm/assets/image"` in the schema
* don't nest schemas too deeply. Break inline type definitions into separate `*.schema.json` files if they have properties with object types themselves.
* convention is that property names are snake_case, when they appear in JSON

## Writing Styleguides

For all writing, please follow the [Adobe I/O style guide](https://www.adobe.io/about/contributing/doc-style_master.html).

## How Contributions get Reviewed

The XDM project differentiates between major and minor contributions.

* Minor contributions: contributions that do not change the meaning of the standard, such as corrections to typos, word order or formatting. Contributions to the project's `README.md` or `CONTRIBUTING.md` are also minor contributions.
* Major contributions: all other contributions.

### Minor Contributions

One of the editors will look at the pull request within one week and flag it as `minor`. The editor will then either merge or reject the pull request. If you haven't heard back from the editors within a week, it is not impolite to send a reminder to [Grp-XDM-API-WGs](mailto:Grp-XDM-API-WGs@adobe.com).

Feedback on the pull request will be given in writing, in GitHub.

### Major Contributions

One of the editors will look at the pull request within one week and flag it as `major`. The editor will then provide feedback on the pull request in GitHub. 

Every week, during the XDM working group meeting, all open pull requests will be reviewed and discussed. All feedback given in the meeting will be logged in GitHub. This real-time discussion will make sure all open pull requests will get attention.

When the editors agree on the pull request, the pull request will either be merged or rejected. Until this is the case, the pull request will remain open. Editors are operating under the assumption of agreement, so that a single editor can authorize a merge.

