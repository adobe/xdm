
# Common Properties Schema

```
http://ns.adobe.com/adobecloud/core/1.0
```

Common Properties for storage in Adobe Experience Platform.

| [Abstract](../../../../abstract.md) | [Extensible](../../../../extensions.md) | [Status](../../../../status.md) | [Identifiable](../../../../id.md) | [Custom Properties](../../../../extensions.md) | [Additional Properties](../../../../extensions.md) | Defined In |
|-------------------------------------|-----------------------------------------|---------------------------------|-----------------------------------|------------------------------------------------|----------------------------------------------------|------------|
| Cannot be instantiated | Yes | Stable | No | Forbidden | Permitted | [datatypes/external/repo/common.schema.json](datatypes/external/repo/common.schema.json) |

## Common Properties Example
```json
{
  "repo:name": "example.png",
  "repo:path": "/examples/from/xdm/example.png",
  "repo:id": "urn:aaid:aem:e36cf904-2f0f-411e-80da-5bf31293ab69",
  "repo:assetId": "urn:aaid:aem:e36cf904-2f0f-411e-80da-5bf31293ab69",
  "repo:assetClass": "file",
  "repo:repositoryId": "author-p49105-e258067.adobeaemcloud.com",
  "repo:etag": "\"bb04c75eb7b4d4d1d417b105542224e1\"",
  "repo:size": 3668936,
  "repo:version": "oak:1.0::ci:bb04c75eb7b4d4d1d417b105542224e1",
  "repo:state": "ACTIVE",
  "repo:ancestors": [
    "urn:aaid:aem:4141271f-e5cb-49f2-9aad-478e8c106799"
  ],
  "repo:createDate": "2004-10-23T12:00:00-06:00",
  "repo:modifyDate": "2004-10-23T12:00:00-06:00",
  "repo:createdBy": "jane.doe@example.com",
  "repo:modifiedBy": "jane.doe@example.com",
  "dc:format": "image/png"
}
```

# Common Properties Definitions

| Property | Type | Group |
|----------|------|-------|
| [dc:format](#dcformat) | `string` | `http://ns.adobe.com/adobecloud/core/1.0#/definitions/common-properties` |
| [repo:accelerated](#repoaccelerated) | `boolean` | `http://ns.adobe.com/adobecloud/core/1.0#/definitions/transfer-properties` |
| [repo:acl](#repoacl) | `object[]` | `http://ns.adobe.com/adobecloud/core/1.0#/definitions/accesscontrol-properties` |
| [repo:ancestors](#repoancestors) | `string[]` | `http://ns.adobe.com/adobecloud/core/1.0#/definitions/hierarchy-properties` |
| [repo:assetClass](#repoassetclass) | `string` | `http://ns.adobe.com/adobecloud/core/1.0#/definitions/common-properties` |
| [repo:assetId](#repoassetid) | `string` | `http://ns.adobe.com/adobecloud/core/1.0#/definitions/common-properties` |
| [repo:availableRegions](#repoavailableregions) | `string[]` | `http://ns.adobe.com/adobecloud/core/1.0#/definitions/transfer-properties` |
| [repo:blocksize](#repoblocksize) | `integer` | `http://ns.adobe.com/adobecloud/core/1.0#/definitions/transfer-properties` |
| [repo:createDate](#repocreatedate) | `string` | `http://ns.adobe.com/adobecloud/core/1.0#/definitions/date-properties` |
| [repo:createdBy](#repocreatedby) | `string` | `http://ns.adobe.com/adobecloud/core/1.0#/definitions/actor-properties` |
| [repo:discardDate](#repodiscarddate) | `string` | `http://ns.adobe.com/adobecloud/core/1.0#/definitions/date-properties` |
| [repo:discardedBy](#repodiscardedby) | `string` | `http://ns.adobe.com/adobecloud/core/1.0#/definitions/actor-properties` |
| [repo:environment](#repoenvironment) | `string` | `http://ns.adobe.com/adobecloud/core/1.0#/definitions/transfer-properties` |
| [repo:etag](#repoetag) | `string` | `http://ns.adobe.com/adobecloud/core/1.0#/definitions/common-properties` |
| [repo:expires](#repoexpires) | `string` | `http://ns.adobe.com/adobecloud/core/1.0#/definitions/date-properties` |
| [repo:id](#repoid) | `string` | `http://ns.adobe.com/adobecloud/core/1.0#/definitions/common-properties` |
| [repo:lastPublishedTime](#repolastpublishedtime) | `string` | `http://ns.adobe.com/adobecloud/core/1.0#/definitions/date-properties` |
| [repo:md5](#repomd5) | `string` | `http://ns.adobe.com/adobecloud/core/1.0#/definitions/common-properties` |
| [repo:modifiedBy](#repomodifiedby) | `string` | `http://ns.adobe.com/adobecloud/core/1.0#/definitions/actor-properties` |
| [repo:modifyDate](#repomodifydate) | `string` | `http://ns.adobe.com/adobecloud/core/1.0#/definitions/date-properties` |
| [repo:name](#reponame) | `string` | `http://ns.adobe.com/adobecloud/core/1.0#/definitions/common-properties` |
| [repo:owner](#repoowner) | `object` | `http://ns.adobe.com/adobecloud/core/1.0#/definitions/accesscontrol-properties` |
| [repo:path](#repopath) | `string` | `http://ns.adobe.com/adobecloud/core/1.0#/definitions/common-properties` |
| [repo:repositoryId](#reporepositoryid) | `string` | `http://ns.adobe.com/adobecloud/core/1.0#/definitions/common-properties` |
| [repo:repositoryType](#reporepositorytype) | `string` | `http://ns.adobe.com/adobecloud/core/1.0#/definitions/common-properties` |
| [repo:resource](#reporesource) | `object` | `http://ns.adobe.com/adobecloud/core/1.0#/definitions/common-properties` |
| [repo:scene7Domain](#reposcene7domain) | `string` | `http://ns.adobe.com/adobecloud/core/1.0#/definitions/dynamicmedia-properties` |
| [repo:scene7File](#reposcene7file) | `string` | `http://ns.adobe.com/adobecloud/core/1.0#/definitions/dynamicmedia-properties` |
| [repo:scene7FileStatus](#reposcene7filestatus) | `string` | `http://ns.adobe.com/adobecloud/core/1.0#/definitions/dynamicmedia-properties` |
| [repo:scene7Folder](#reposcene7folder) | `string` | `http://ns.adobe.com/adobecloud/core/1.0#/definitions/dynamicmedia-properties` |
| [repo:scene7FontStyle](#reposcene7fontstyle) | `string` | `http://ns.adobe.com/adobecloud/core/1.0#/definitions/dynamicmedia-properties` |
| [repo:scene7FontType](#reposcene7fonttype) | `string` | `http://ns.adobe.com/adobecloud/core/1.0#/definitions/dynamicmedia-properties` |
| [repo:scene7LastModified](#reposcene7lastmodified) | `string` | `http://ns.adobe.com/adobecloud/core/1.0#/definitions/dynamicmedia-properties` |
| [repo:scene7Name](#reposcene7name) | `string` | `http://ns.adobe.com/adobecloud/core/1.0#/definitions/dynamicmedia-properties` |
| [repo:scene7RTFName](#reposcene7rtfname) | `string` | `http://ns.adobe.com/adobecloud/core/1.0#/definitions/dynamicmedia-properties` |
| [repo:scene7Type](#reposcene7type) | `string` | `http://ns.adobe.com/adobecloud/core/1.0#/definitions/dynamicmedia-properties` |
| [repo:size](#reposize) | `integer` | `http://ns.adobe.com/adobecloud/core/1.0#/definitions/common-properties` |
| [repo:state](#repostate) | `string` | `http://ns.adobe.com/adobecloud/core/1.0#/definitions/common-properties` |
| [repo:version](#repoversion) | `string` | `http://ns.adobe.com/adobecloud/core/1.0#/definitions/common-properties` |

## dc:format
### Format

The physical or digital manifestation of the resource. Typically, Format should include the media-type of the resource. Format may be used to determine the software, hardware or other equipment needed to display or operate the resource. Recommended best practice is to select a value from a controlled vocabulary (for example, the list of [Internet Media Types](http://www.iana.org/ assignments/media-types/) defining computer media formats).

`dc:format`
* is optional
* type: `string`
* defined in this schema

### dc:format Type


`string`


All instances must conform to this regular expression 
```regex
\w+\/[-.\w]+(?:\+[-.\w]+)?
```

* test example: [application/vnd.adobe.photoshop](https://regexr.com/?expression=%5Cw%2B%5C%2F%5B-.%5Cw%5D%2B(%3F%3A%5C%2B%5B-.%5Cw%5D%2B)%3F&text=application%2Fvnd.adobe.photoshop)




### dc:format Example

```json
"application/vnd.adobe.photoshop"
```


## repo:accelerated

Indicates whether accelerated transfer is available or in use for the resource's binary.

`repo:accelerated`
* is optional
* type: `boolean`
* defined in this schema

### repo:accelerated Type


`boolean`





## repo:acl

The access control list of the resource: the set of access control entries describing which privileges principals hold on the resource.

`repo:acl`
* is optional
* type: `object[]`

* defined in this schema

### repo:acl Type


Array type: `object[]`

All items must be of the type:
`object` with following properties:


| Property | Type | Required |
|----------|------|----------|
| `repo:inheritance`| string | Optional |
| `repo:modifier`| string | Optional |
| `repo:principal`|  | Optional |
| `repo:privileges`| array | Optional |
| `repo:relations`| array | Optional |



#### repo:inheritance

Optional inheritance of the access control entry: whether the deny or grant is inherited by the children of the resource.

`repo:inheritance`
* is optional
* type: `string`

##### repo:inheritance Type


`string`








#### repo:modifier

Optional modifier of the privilege: either `GRANT` or `DENY`. The default modifier is `GRANT` if this property is not present.

`repo:modifier`
* is optional
* type: `enum`

The value of this property **must** be equal to one of the [known values below](#repoacl-known-values).

##### repo:modifier Known Values
| Value | Description |
|-------|-------------|
| `GRANT` |  |
| `DENY` |  |






#### repo:principal

The principal (such as a user or group) to which the access control entry applies. Serialized as a plain string for built-in/special principals, or as an object identifying the principal and its identity provider otherwise.

`repo:principal`
* is optional
* type: complex

##### repo:principal Type


**One** of the following *conditions* need to be fulfilled.


#### Condition 1


`string`



#### Condition 2









#### repo:privileges

Privileges granted or denied to the principal.

`repo:privileges`
* is optional
* type: `string[]`


##### repo:privileges Type


Array type: `string[]`

All items must be of the type:
`string`











#### repo:relations

List of relation link types to which this privilege applies.

`repo:relations`
* is optional
* type: `string[]`


##### repo:relations Type


Array type: `string[]`

All items must be of the type:
`string`
















## repo:ancestors

The ordered chain of ancestor resource identifiers, from the repository root to the immediate parent of this resource.

`repo:ancestors`
* is optional
* type: `string[]`

* defined in this schema

### repo:ancestors Type


Array type: `string[]`

All items must be of the type:
`string`









## repo:assetClass

The classification of the asset within the repository, such as whether it represents a file or a directory.

`repo:assetClass`
* is optional
* type: `string`
* defined in this schema

### repo:assetClass Type


`string`





### repo:assetClass Examples

```json
"file"
```

```json
"directory"
```



## repo:assetId

The unique, repository-scoped identifier of an asset. In asset contexts `repo:assetId` supersedes the generic `repo:id`, which is retained as a deprecated alias.

`repo:assetId`
* is optional
* type: `string`
* defined in this schema

### repo:assetId Type


`string`





### repo:assetId Example

```json
"urn:aaid:aem:e36cf904-2f0f-411e-80da-5bf31293ab69"
```


## repo:availableRegions

The set of regions in which the repository is available.

`repo:availableRegions`
* is optional
* type: `string[]`

* defined in this schema

### repo:availableRegions Type


Array type: `string[]`

All items must be of the type:
`string`









## repo:blocksize

The block size, in bytes, used for block-based transfer of the resource's binary.

`repo:blocksize`
* is optional
* type: `integer`
* defined in this schema

### repo:blocksize Type


`integer`






## repo:createDate

The server date and time when the resource was created in the repository, such as when an asset file is first uploaded or a directory is created by the server as the parent of a new asset. The date time property should conform to ISO 8601 standard. An example form is "2004-10-23T12:00:00-06:00".

`repo:createDate`
* is optional
* type: `string`
* defined in this schema

### repo:createDate Type


`string`
* format: `date-time` – date and time (according to [RFC 3339, section 5.6](http://tools.ietf.org/html/rfc3339))




### repo:createDate Example

```json
"2004-10-23T12:00:00-06:00"
```


## repo:createdBy

ID of the user who initiated the action that caused the resource to be created in the repository.

`repo:createdBy`
* is optional
* type: `string`
* defined in this schema

### repo:createdBy Type


`string`






## repo:discardDate

The server date and time when the resource was discarded (for example, moved to a recycle bin or trash) in the repository. The date time property should conform to ISO 8601 standard.

`repo:discardDate`
* is optional
* type: `string`
* defined in this schema

### repo:discardDate Type


`string`
* format: `date-time` – date and time (according to [RFC 3339, section 5.6](http://tools.ietf.org/html/rfc3339))




### repo:discardDate Example

```json
"2004-10-23T12:00:00-06:00"
```


## repo:discardedBy

ID of the user who initiated the action that caused the resource to be discarded in the repository.

`repo:discardedBy`
* is optional
* type: `string`
* defined in this schema

### repo:discardedBy Type


`string`






## repo:environment

The environment of the repository instance in which the resource is stored.

`repo:environment`
* is optional
* type: `string`
* defined in this schema

### repo:environment Type


`string`






## repo:etag

An ETag is an opaque entity-tag, returned as an HTTP/1.1 response header, used to determine whether the content of a resource at a given URL has changed.

`repo:etag`
* is optional
* type: `string`
* defined in this schema

### repo:etag Type


`string`






## repo:expires

The server date and time when the resource is scheduled to expire. The date time property should conform to ISO 8601 standard.

`repo:expires`
* is optional
* type: `string`
* defined in this schema

### repo:expires Type


`string`
* format: `date-time` – date and time (according to [RFC 3339, section 5.6](http://tools.ietf.org/html/rfc3339))




### repo:expires Example

```json
"2004-10-23T12:00:00-06:00"
```


## repo:id

The unique identifier of an addressable entity within a repository. The kind of entity that `repo:id` identifies depends on context: it may be an asset, a directory, or a person/principal. `repo:id` is therefore a generic repository-entity identifier and is not, by itself, specific to assets. In asset contexts it identifies the asset; Adobe Experience Manager's repository API treats `repo:id` as a deprecated alias of `repo:assetId`. Do not conflate `repo:id` with `repo:assetId`: `repo:assetId` is always the asset-scoped identifier, whereas `repo:id` identifies whichever entity the surrounding object describes.

`repo:id`
* is optional
* type: `string`
* defined in this schema

### repo:id Type


`string`





### repo:id Example

```json
"urn:aaid:aem:e36cf904-2f0f-411e-80da-5bf31293ab69"
```


## repo:lastPublishedTime

The timestamp at which the resource was most recently published, as reported by the publish subsystem.

`repo:lastPublishedTime`
* is optional
* type: `string`
* defined in this schema

### repo:lastPublishedTime Type


`string`






## repo:md5

The MD5 checksum of the resource's binary.

`repo:md5`
* is optional
* type: `string`
* defined in this schema

### repo:md5 Type


`string`






## repo:modifiedBy

ID of the user who initiated the action that most recently caused the resource to be modified in the repository.

`repo:modifiedBy`
* is optional
* type: `string`
* defined in this schema

### repo:modifiedBy Type


`string`






## repo:modifyDate

The server date and time when the resource was last modified in the repository, such as when a new version of an asset is uploaded or a directory's child resource is added or removed. The date time property should conform to ISO 8601 standard. An example form is "2004-10-23T12:00:00-06:00".

`repo:modifyDate`
* is optional
* type: `string`
* defined in this schema

### repo:modifyDate Type


`string`
* format: `date-time` – date and time (according to [RFC 3339, section 5.6](http://tools.ietf.org/html/rfc3339))




### repo:modifyDate Example

```json
"2004-10-23T12:00:00-06:00"
```


## repo:name
### Name

The name of the resource in the repository, such as the file or directory name.

`repo:name`
* is optional
* type: `string`
* defined in this schema

### repo:name Type


`string`






## repo:owner

The owner of the repository or resource, expressed as a set of identifying key/value pairs.

`repo:owner`
* is optional
* type: `object`
* defined in this schema

### repo:owner Type


`object` with following properties:


| Property | Type | Required |
|----------|------|----------|






## repo:path
### Path

The path of the resource within the repository.

`repo:path`
* is optional
* type: `string`
* defined in this schema

### repo:path Type


`string`






## repo:repositoryId

The identifier of the repository instance in which the resource is stored. Together with a resource identifier, it uniquely addresses a resource across repositories.

`repo:repositoryId`
* is optional
* type: `string`
* defined in this schema

### repo:repositoryId Type


`string`






## repo:repositoryType

The type of the repository instance in which the resource is stored.

`repo:repositoryType`
* is optional
* type: `string`
* defined in this schema

### repo:repositoryType Type


`string`






## repo:resource

A designator that references the binary resource associated with this entry in the repository, used for block-based transfer operations.

`repo:resource`
* is optional
* type: `object`
* defined in this schema

### repo:resource Type


`object` with following properties:


| Property | Type | Required |
|----------|------|----------|
| `component_id`| string | Optional |
| `etag`| string | Optional |
| `repo:reltype`| string | Optional |
| `revision`| string | Optional |



#### component_id

The identifier of the component within the resource.

`component_id`
* is optional
* type: `string`

##### component_id Type


`string`








#### etag

The entity-tag of the referenced resource.

`etag`
* is optional
* type: `string`

##### etag Type


`string`








#### repo:reltype

The relation type of the referenced resource.

`repo:reltype`
* is optional
* type: `string`

##### repo:reltype Type


`string`








#### revision

The revision of the referenced resource.

`revision`
* is optional
* type: `string`

##### revision Type


`string`











## repo:scene7Domain

The Dynamic Media (Scene7) server domain from which the asset's renditions are served.

`repo:scene7Domain`
* is optional
* type: `string`
* defined in this schema

### repo:scene7Domain Type


`string`






## repo:scene7File

The Dynamic Media (Scene7) file identifier of the asset.

`repo:scene7File`
* is optional
* type: `string`
* defined in this schema

### repo:scene7File Type


`string`






## repo:scene7FileStatus

The Dynamic Media (Scene7) publishing status of the asset.

`repo:scene7FileStatus`
* is optional
* type: `string`
* defined in this schema

### repo:scene7FileStatus Type


`string`






## repo:scene7Folder

The Dynamic Media (Scene7) folder path of the asset.

`repo:scene7Folder`
* is optional
* type: `string`
* defined in this schema

### repo:scene7Folder Type


`string`






## repo:scene7FontStyle

The Dynamic Media (Scene7) font style of the asset, for font assets.

`repo:scene7FontStyle`
* is optional
* type: `string`
* defined in this schema

### repo:scene7FontStyle Type


`string`






## repo:scene7FontType

The Dynamic Media (Scene7) font type of the asset, for font assets.

`repo:scene7FontType`
* is optional
* type: `string`
* defined in this schema

### repo:scene7FontType Type


`string`






## repo:scene7LastModified

The timestamp at which the asset was last modified in Dynamic Media (Scene7).

`repo:scene7LastModified`
* is optional
* type: `string`
* defined in this schema

### repo:scene7LastModified Type


`string`






## repo:scene7Name

The Dynamic Media (Scene7) asset name.

`repo:scene7Name`
* is optional
* type: `string`
* defined in this schema

### repo:scene7Name Type


`string`






## repo:scene7RTFName

The Dynamic Media (Scene7) rich-text (RTF) name of the asset.

`repo:scene7RTFName`
* is optional
* type: `string`
* defined in this schema

### repo:scene7RTFName Type


`string`






## repo:scene7Type

The Dynamic Media (Scene7) asset type (for example, Image).

`repo:scene7Type`
* is optional
* type: `string`
* defined in this schema

### repo:scene7Type Type


`string`






## repo:size

Size of the resource in bytes.

`repo:size`
* is optional
* type: `integer`
* defined in this schema

### repo:size Type


`integer`






## repo:state

The lifecycle state of the resource within the repository.

`repo:state`
* is optional
* type: `string`
* defined in this schema

### repo:state Type


`string`






## repo:version

The version identifier of the resource. It is generated on both explicit and implicit save or upload.

`repo:version`
* is optional
* type: `string`
* defined in this schema

### repo:version Type


`string`





