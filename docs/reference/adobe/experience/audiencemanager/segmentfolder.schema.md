
# Adobe Audience Manager Segment Folder Class Schema

```
https://ns.adobe.com/experience/audiencemanager/segmentfolder
```

This Adobe Audience Manager-specific folder definition helps organize segment definitions into a hierarchy. This includes required fields like folder identity and folder name. The segment definition class requires use of the 'Adobe Audience Manager Segment Definition Mixin' in order to point to the parent folder, which is an instance of this class.

| [Abstract](../../../../abstract.md) | [Extensible](../../../../extensions.md) | [Status](../../../../status.md) | [Identifiable](../../../../id.md) | [Custom Properties](../../../../extensions.md) | [Additional Properties](../../../../extensions.md) | Defined In |
|-------------------------------------|-----------------------------------------|---------------------------------|-----------------------------------|------------------------------------------------|----------------------------------------------------|------------|
| Can be instantiated | Yes | Stable | No | Forbidden | Permitted | [adobe/experience/audiencemanager/segmentfolder.schema.json](adobe/experience/audiencemanager/segmentfolder.schema.json) |
## Schema Hierarchy

* Adobe Audience Manager Segment Folder Class `https://ns.adobe.com/experience/audiencemanager/segmentfolder`
  * [Identity](../../../datatypes/identity.schema.md) `https://ns.adobe.com/xdm/context/identity`
  * [IdentityMap](../../../fieldgroups/shared/identitymap.schema.md) `https://ns.adobe.com/xdm/context/identitymap`
  * [Record Schema](../../../behaviors/record.schema.md) `https://ns.adobe.com/xdm/data/record`


## Adobe Audience Manager Segment Folder Class Example
```json
{
  "xdm:identityMap": {
    "AAMSegments": [
      {
        "xdm:id": "id123",
        "xdm:primary": true
      }
    ]
  },
  "https://ns.adobe.com/experience/audiencemanager/segmentFolderName": "User Folder",
  "https://ns.adobe.com/experience/audiencemanager/segmentFolderStatus": "ACTIVE",
  "https://ns.adobe.com/experience/audiencemanager/segmentParentFolderIdentity": {
    "xdm:id": "id1111",
    "xdm:namespace": {
      "xdm:code": "AAMSegments"
    }
  }
}
```

# Adobe Audience Manager Segment Folder Class Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [@id](#id) | `string` | Optional | [Record Schema](../../../behaviors/record.schema.md#id) |
| [https://ns.adobe.com/experience/audiencemanager/segmentFolderName](#httpsnsadobecomexperienceaudiencemanagersegmentfoldername) | `string` | **Required** | Adobe Audience Manager Segment Folder Class (this schema) |
| [https://ns.adobe.com/experience/audiencemanager/segmentFolderStatus](#httpsnsadobecomexperienceaudiencemanagersegmentfolderstatus) | `string` | Optional | Adobe Audience Manager Segment Folder Class (this schema) |
| [https://ns.adobe.com/experience/audiencemanager/segmentParentFolderIdentity](#httpsnsadobecomexperienceaudiencemanagersegmentparentfolderidentity) | Identity | Optional | Adobe Audience Manager Segment Folder Class (this schema) |
| [xdm:identityMap](#xdmidentitymap) | `object` | **Required** | [IdentityMap](../../../fieldgroups/shared/identitymap.schema.md#xdmidentitymap) |
| `*` | any | Additional | this schema *allows* additional properties |

## @id
### Identifier

A unique identifier for the record.

`@id`
* is optional
* type: `string`
* defined in [Record Schema](../../../behaviors/record.schema.md#id)

### @id Type


`string`
* format: `uri-reference` – URI Reference (according to [RFC3986](https://tools.ietf.org/html/rfc3986))






## https://ns.adobe.com/experience/audiencemanager/segmentFolderName
### Segment folder name

Name of the segment folder

`https://ns.adobe.com/experience/audiencemanager/segmentFolderName`
* is **required**
* type: `string`
* defined in this schema

### https://ns.adobe.com/experience/audiencemanager/segmentFolderName Type


`string`






## https://ns.adobe.com/experience/audiencemanager/segmentFolderStatus
### Segment folder status

Current status of segment folder

`https://ns.adobe.com/experience/audiencemanager/segmentFolderStatus`
* is optional
* type: `string`
* defined in this schema

### https://ns.adobe.com/experience/audiencemanager/segmentFolderStatus Type


`string`



### https://ns.adobe.com/experience/audiencemanager/segmentFolderStatus Known Values
| Value | Description |
|-------|-------------|
| `ACTIVE` | Active |
| `INACTIVE` | Inactive |
| `DELETED` | Deleted |




## https://ns.adobe.com/experience/audiencemanager/segmentParentFolderIdentity
### Parent folder identity

Identity of the parent folder of current folder

`https://ns.adobe.com/experience/audiencemanager/segmentParentFolderIdentity`
* is optional
* type: Identity
* defined in this schema

### https://ns.adobe.com/experience/audiencemanager/segmentParentFolderIdentity Type


* [Identity](../../../datatypes/identity.schema.md) – `https://ns.adobe.com/xdm/context/identity`





## xdm:identityMap


`xdm:identityMap`
* is **required**
* type: `object`
* defined in [IdentityMap](../../../fieldgroups/shared/identitymap.schema.md#xdmidentitymap)

### xdm:identityMap Type


`object` with following properties:


| Property | Type | Required |
|----------|------|----------|





