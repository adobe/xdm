# Contributing to XDM

The Experience Data Model (XDM) project is developed as an Open Standard within Adobe. We welcome contributions from everyone at Adobe.

## Things to Keep in Mind

XDM uses a **review then commit** process, which means that no changes are being made without an *editor* approving the change.

## Before you Contribute

All contributions should be discussed on the Mailing List first. Send a mail to [Grp-XDM-API-WGs](mailto:Grp-XDM-API-WGs@adobe.com) with the subject line `[XDM] …` to get the discussion started. It also helps if you can refer to an issue in the [ACP JIRA project](https://jira.corp.adobe.com/projects/ACP).

## How to Contribute

1. Fork the repository
2. Create a pull request
3. Submit the pull request

Every pull request should specify:

* What the change intends to do
* If there are breaking changes
* Link to the JIRA issue in the format `ACP-123`

Furthermore, a pull request that modifies the schema must also include accompanying documentation. Pull requests with missing documentation will be rejected.

Each commit message:

* Should contain the issue ID like `[ACP-123]`
* Can contain the tag `[trivial]` for trivial changes that don't relate to an issue

## Design Guidelines

### Design for Longevity

Our goal is to establish a universal standard for the experience business. As such, this standard's lifetime will be comparable to standards like PDF (24 years old), EXIF (22 years old), or HTML (24 years old).

The design decisions you make today, will impact future developers, who will have only limited understanding, patience, or sympathy for constraints dictated by your current implementation.

### Design for Clarity

As XDM will be consumed and implemented by many highly different applications, which in turn will be used by digital experience professionals such as marketers, designers, advertisers, or digital analysts, which will be exposed to names and concepts introduced and solidified in XDM, clarity in naming is of utmost importance.

When names can refer to a business concept or a lower-level technical concept, the shorter, simpler name shall be reserved for the high-level business concept.

For example, for a marketer, an *event* is something that happens or takes place, or a planned public or social occasion. For a developer, an *event* in event-driven programming is a low level user- or system action. As the term event is highly relevant to experiences in the more general sense, the shorter, unqualified term shall be used for the business concept.

### Design for Continuity

XDM is not an isolated standard, but a standard that incorporates and subsumes existing standards. Whenever possible, use existing standards, or "borrow" concepts from existing standards. Don't reinvent the wheel when you can steal the wheel.

Standards that XDM is relying on include:

* [XMP](http://www.adobe.com/products/xmp.html)
* [schema.org](http://schema.org)
* [JSON Schema](http://json-schema.org)
* [EXIF](http://www.exif.org)
* [TIFF](https://www.iso.org/standard/34342.html)
* [W3C Activity Streams](https://www.w3.org/TR/activitystreams-core/)
* [Dublin Core](http://dublincore.org/)
* [URI](https://www.ietf.org/rfc/rfc3986.txt)
* [BCP 47 – Tags for Identifying Languages](https://tools.ietf.org/html/bcp47)

### Design for Compatibility

Another goal for XDM is interoperability with [Microsoft's Common Data Model (CDM)](https://docs.microsoft.com/en-us/common-data-service/entity-reference/common-data-model). This means, that definitions that are present in CDM should be used or extended, where appropriate, by XDM. XDM should not attempt to duplicate definitions that are present in CDM.

### Design for Consumability



## Coding Styleguides

There are no coding style guides yet.

## Writing Styleguides

For all writing, please follow the [Adobe I/O style guide](https://github.com/trieloff/styleguide/blob/master/opensource/doc-style.md).

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

