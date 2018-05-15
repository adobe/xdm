# Changelog

## Release 0.9.0

[Released on April 13, 2018](https://github.com/adobe/xdm/releases/tag/v0.9)

* Release 0.9 is preview release which updates the `ExperienceEvent` schema to 'stabilizing' status, along with many of the schemas it depends on. This release is intended to get early feedback from implementers and the community before a 1.0 release.

## Release 0.9.1

[Unreleased](https://github.com/adobe/xdm/releases/tag/v0.9.1)

* Renames all `Metric` schemas to `Metric Definition` #254
* Moved `Commerce` metrics used in ExperienceEvent `metrics` to the `commerce` context #317
* Shortened the URI field name for the web events to `https://ns.adobe.com/xdm/metrics/*` by dropping the 'data'. #317
* `abandons` metric field name change to `cartAbandons` `https://ns.adobe.com/xdm/metrics/cartAbandons. #317
* Removed the required constraint from `schemas/external/schema/geo*.schema.json` #315
