# Changelog

## Release 0.9.9

[Planned February, 2019](https://github.com/adobe/xdm/releases/tag/v0.9.9)

Fixed Issues

-

Merged Pull Requests

- #554 XDM composition refactor
- #566 Technical classes schema composition
- #567 Issue 555 refactor measures to use descriptors

## Release 0.9.8

[Released on November 26, 2018](https://github.com/adobe/xdm/releases/tag/v0.9.8)

Fixed Issues

- Add Human Friendly Delivery Template Name in ExperienceEvents
  - PR #559 Add templateName to experienceevent campaign extension.

Merged Pull Requests

- #523 Unify representation of end-user identity between ExperienceEvent and Profile
- #552 Added dcx JSON-LD prefix definition & dcx:type property to the meta schema

## Release 0.9.7

[Released on October 30, 2018](https://github.com/adobe/xdm/releases/tag/v0.9.7)

Fixed Issues

- Implement a communications subscription Campaign extension
  - PR #458 Implement a communications subscription Campaign extension
- Add domain and ISP to environment
  - PR #537 Add domain and ISP
- Advertising break should not be required
  - PR #539 Remove the requirement for offset in advertising break
- Add xdm:localTimezoneOffset next to xdm:localTime under placecontext
  - PR #554 Added xdm:localTimezoneOffset to context/placecontext #544

Merged Pull Requests

- #532 Add producer event source to message/event on pipeline

## Release 0.9.6

[Released on September 28, 2018](https://github.com/adobe/xdm/releases/tag/v0.9.6)

Fixed Issues

- XDM schema definition for AdCloud Search surfer profiles in AdCloud extension
  - PR #477 XDM schema definition for AdCloud Search surfer profiles
- Fix lint checks against extensions
  - PR #485 Fix lint checks against extensions
- Define Logical Data Types for XDM
  - PR #495 First draft of data type description
- Add the Supplemental Data Identifier field to the Adobe Target extension
  - PR #509 Add the Supplemental Data Identifier field to the Adobe Target extension
- Define a Map Data Type for XDM
  - PR #511 Define "map" XDM type
- XDM requires many ID's under experience event schema to be length > 20 ...
  - PR #524 Removing minLength constraint on measure ids

Merged Pull Requests

- #467 Fixed typo in transactionID
- #492 Journey AI Fatigue and Score schemas
- #504 Correct profile stitching
- #505 Added "eventID" depreciated "businessReason" in Campaign ExperienceEvent extension.
- #506 Updating titles so that they no longer collide
- #513 PR 504 - Updates to make changes additive
- #515 improve name for email fatigue scores in experience event

## Release 0.9.5

[Released on August 31, 2018](https://github.com/adobe/xdm/releases/tag/v0.9.5)

Fixed Issues

- Change ID format from "uri" to "uri-reference"
  - PR #488 Change @id's format from "uri" to "uri-reference" if exists
- Combine individual Birthday fields to a single field of format: 'date-time'
  - PR #498 Create distinct fields for different cases of birth date
- Fix lint checks against extensions
  - PR #485 fix linting issues in extensions folder

Merged Pull Requests

- #472 Add Journey context and delivery attributes in experience event
- #479 Fix Segment Identity title conflict
- #501 Campaign extension schema format/structure change for 0.9.9.5 platform release

## Release 0.9.4

[Released on August 17, 2018](https://github.com/adobe/xdm/releases/tag/v0.9.4)

Fixed Issues

- Need representation for stitched profiles and segment membership in ExperienceEvent
  - PR #444 profile stitch

Merged Pull Requests

- #411 Payload value types
- #445 Change repo:assetID to repo:id
- #456 Adding Target Activities elements
- #459 Added Authenticated State property to `\context\identity.schema.json`
- #474 Minor refactor of segment membership schemas to be more tool friendly
- #475 Make experience schemas xed convertable for 0.9.9.4 release

## Release 0.9.3

[Released on July 16, 2018](https://github.com/adobe/xdm/releases/tag/v0.9.3)

Fixed Issues

- #364 Video Analytics additions for ExperienceEvent
  - PR #417 Added Timed Media schemas to `Experience Event` based schemas PR
- #409 Fix campaign extension bugs
  - PR #410 Issue409-Fix campaign extension bugs
- #413 WebPageDetails.server shouldn't be constrained to a hostname
  - PR #414 Removed hostname format constraint from context/webpagedetails.xdm:server
- #419 Change Identity schema identifier to unstructured string from URI
  - PR #420 Change `Identity` Schema `@id` property renamed to `xdm:id`
- #425 Added datasourceID to the ExperienceCloud Extension for Experience Event.
  - PR #426 add dataset id as part of event

Merged Pull Requests

- #391 📝 Clarify CLA section of contribution guidelines.
- #416 Remove definition of xmp:numberOfPixels
- #423 Add post office box to align with Microsoft CDM
- #431 Create RELEASING.md file
- #436 Update Changelog preparing for V0.9.3 release
- #437 Fixing RELEASING.md

## Release 0.9.2

[Released on June 15, 2018](https://github.com/adobe/xdm/releases/tag/v0.9.2)

- `xdm:dataSource` in `ExperienceEvent` is no longer required #363
- Changed and added new concepts `Organizational Unit` and `Geographical Unit`. Existing links with the `Profile` schema updated. In `Profile`, `xdm:orgUnitID` is now `xdm:orgUnit`, and a simple reference to the `Organizational Unit` schema. #323
- Added Phone Number and Email Address to EndUserIDs. #381
- Changed Adobe Analytics Extension - Alter analytics custom lists to allow keys #376
- Added `"meta:extends": true` to the schemas that can be extended in `context` #332
- Changed extension `extensions/adobe/experience/implementations.schema.json` properties to include the name `implementation` #403
- Added Reporting Events to Experience Event in the Campaign Extension #307
- Improved the representation of Extensibility to `context\*` schemas #332
- Changed a circular reference introduces in the Campaign Extension to Experience Event #377 / #378
- Added Segment Membership and related schemas for `context\profile.schema.json` #380
- Added searchEngineID field to search schema to Experience Event #394
- Added the created/modified dates from auditable for `context\profile.schema.json`, address and person schemas #393
- Adding relationship descriptor #388

## Release 0.9.1

[Released on May 23, 2018](https://github.com/adobe/xdm/releases/tag/v0.9.1)

- Introduced Point of Interest details and metrics. #285
- Renamed all `Metric` schemas to `Metric Definition` #254
- Moved web metrics used in ExperienceEvent `metrics` to the webinteraction and webpageview contexts #316
- Renamed web metrics to `xdm:*` compressed type property names #316
- Moved `commerce` metrics used in ExperienceEvent `metrics` to the `commerce` context #317
- Renamed `commerce` metrics to `xdm:*` compressed type property names #317
- `abandons` metric field name change to `cartAbandons` . #317
- The `commerce` schema is now extensible to allow for additional dimensions and metrics. #317
- Removed the required constraint from `schemas/external/schema/geo*.schema.json` #315
- Moved `direct-marketing` metrics used in ExperienceEvent `metrics` to a new `xdm:directMarketing` contexts #331
- Introduced advertising context to ExperienceEvent #280
- Introduced advertising and viewability metrics under the advertising context #280
- Moved impressions and clicks metrics under advertising context #280
- Added `xdm:primary` flag to `schemas/context/identity.schema.json` #335
- Corrected naming of EndUserIDs by making them consistent (aaid and acid) `schemas/external/schema/geo*.schema.json` #333
- Renamed `webPageView` to `webPageDetails` e.g `context/webpagedetail.schema.json` #336
- Added application and mobile context via `context\application.schema.json` #318
- Fixed issue where `context\experienceevent` `xdm:application` referred to the 'application.schema.json' in `channels` #318
- `xdm:application` in `context\experienceevent` `@id` renamed to `xdm:id` #318
- Changed `xdm:channel` in `ExperienceEvent` to be a reference to `Channel` #289
- Changed `xdm:pageDepth` data type from number to integer in `context\search.schema.json` #346

## Release 0.9.0

[Released on April 13, 2018](https://github.com/adobe/xdm/releases/tag/v0.9)

- Release 0.9 is preview release which updates the `ExperienceEvent` schema to 'stabilizing' status, along with many of the schemas it depends on. This release is intended to get early feedback from implementers and the community before a 1.0 release.
