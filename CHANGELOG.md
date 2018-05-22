# Changelog

## Release 0.9.0

[Released on April 13, 2018](https://github.com/adobe/xdm/releases/tag/v0.9)

* Release 0.9 is preview release which updates the `ExperienceEvent` schema to 'stabilizing' status, along with many of the schemas it depends on. This release is intended to get early feedback from implementers and the community before a 1.0 release.

## Release 0.9.1

[Unreleased](https://github.com/adobe/xdm/releases/tag/v0.9.1)

* Renamed all `Metric` schemas to `Metric Definition` #254
* Moved web metrics used in ExperienceEvent `metrics` to the webinteraction and webpageview contexts #316
* Renamed web metrics to `xdm:*` compressed type property names #316
* Moved `commerce` metrics used in ExperienceEvent `metrics` to the `commerce` context #317
* Renamed `commerce` metrics to `xdm:*` compressed type property names #317
* `abandons` metric field name change to `cartAbandons` . #317
* The `commerce` schema is now extensible to allow for additional dimensions and metrics. #317
* Removed the required constraint from `schemas/external/schema/geo*.schema.json` #315
* Moved `direct-marketing` metrics used in ExperienceEvent `metrics` to a new `xdm:directMarketing` contexts #331
* Introduced advertising context to ExperienceEvent #280
* Introduced advertising and viewability metrics under the advertising context #280
* Moved impressions and clicks metrics under advertising context #280
* Added `xdm:primary` flag to `schemas/context/identity.schema.json` #335
* Corrected naming of EndUserIDs by making them consistent (aaid and acid) `schemas/external/schema/geo*.schema.json` #333
