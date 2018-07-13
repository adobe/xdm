# How-To Release an XDM Snapshot

We using the GitHub release mechanism to tag and publish releases.
There are a few tasks to be done to prepare the repository for the release off
of the `master` branch.
These are listed below here.

*Note:* We are currently only release _pre-release_ versions as we have not
stabilized our models fully yet.
Also we try to hold on to a monthly release cycle where releases are cut around
the middle of the month.
The next planned release is indicated at the top of the [changelog](CHANGELOG.md).

Long story short, here are the steps to release:

* Clone and update the `master` branch of the `adobe/xdm` repository in your local workspace
* Make sure there are no pending changes (`git status`) and all pull requests scheduled for the release are merged
* Test the schemas and fix any issues indicated
```sh
$ npm run lint
```
* Define a version number to use, for example `0.9.3`
* Update the `version` property in [package.json](package.json) with the version number
* Update the title in the [introduction](docs/introduction.md) with the version number
* Update [changelog](CHANGELOG.md) with release date and version number
* Update reference docs
```sh
$ npm run clean
$ npm run markdown
$ got commit -m"Prepare for release $version" -a
```
* Create the release following the instructions for [GitHub Release creation](https://help.github.com/articles/creating-releases/):
  * Use the version number prefixed with (lowercase) `v`as the tag name, for example `v0.9.3`
  * Make sure the `master` branch is chosen as the basis for the release
  * Use the tag name from the first step for the _Release title_ as well
  * Add a small comment to _Describe the release_ and copy the change log for the release from [changelog](CHANGELOG.md)
  * Check the _This is a pre-release_ box
  * Click _Publish Release_
* Spread the word and party !
