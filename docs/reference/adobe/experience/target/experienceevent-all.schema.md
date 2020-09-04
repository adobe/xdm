
# Adobe Target ExperienceEvent Full Extension Schema

```
https://ns.adobe.com/experience/target/experienceevent-all
```

Adobe Target ExperienceEvent full extension. Contains all Solution added fields.

| [Abstract](../../../../abstract.md) | [Extensible](../../../../extensions.md) | [Status](../../../../status.md) | [Identifiable](../../../../id.md) | [Custom Properties](../../../../extensions.md) | [Additional Properties](../../../../extensions.md) | Defined In |
|-------------------------------------|-----------------------------------------|---------------------------------|-----------------------------------|------------------------------------------------|----------------------------------------------------|------------|
| Can be instantiated | Yes | Stable | No | Forbidden | Permitted | [adobe/experience/target/experienceevent-all.schema.json](adobe/experience/target/experienceevent-all.schema.json) |
## Schema Hierarchy

* Adobe Target ExperienceEvent Full Extension `https://ns.adobe.com/experience/target/experienceevent-all`
  * [Adobe Target ExperienceEvent Shared Extension](experienceevent-shared.schema.md) `https://ns.adobe.com/experience/target/experienceevent-shared`


# Adobe Target ExperienceEvent Full Extension Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [https://ns.adobe.com/experience/target/activities](#httpsnsadobecomexperiencetargetactivities) | Adobe Target Activity | Optional | Adobe Target ExperienceEvent Full Extension (this schema) |
| [https://ns.adobe.com/experience/target/clientcode](#httpsnsadobecomexperiencetargetclientcode) | `string` | Optional | Adobe Target ExperienceEvent Full Extension (this schema) |
| [https://ns.adobe.com/experience/target/environmentID](#httpsnsadobecomexperiencetargetenvironmentid) | `string` | Optional | Adobe Target ExperienceEvent Full Extension (this schema) |
| [https://ns.adobe.com/experience/target/mboxname](#httpsnsadobecomexperiencetargetmboxname) | `string` | Optional | Adobe Target ExperienceEvent Full Extension (this schema) |
| [https://ns.adobe.com/experience/target/mboxversion](#httpsnsadobecomexperiencetargetmboxversion) | `string` | Optional | Adobe Target ExperienceEvent Full Extension (this schema) |
| [https://ns.adobe.com/experience/target/pagedetail/pageid](#httpsnsadobecomexperiencetargetpagedetailpageid) | `string` | Optional | Adobe Target ExperienceEvent Full Extension (this schema) |
| [https://ns.adobe.com/experience/target/pagedetail/pagescore](#httpsnsadobecomexperiencetargetpagedetailpagescore) | `number` | Optional | Adobe Target ExperienceEvent Full Extension (this schema) |
| [https://ns.adobe.com/experience/target/sessionid](#httpsnsadobecomexperiencetargetsessionid) | `string` | Optional | Adobe Target ExperienceEvent Full Extension (this schema) |
| [https://ns.adobe.com/experience/target/supplementalDataID](#httpsnsadobecomexperiencetargetsupplementaldataid) | `string` | Optional | [Adobe Target ExperienceEvent Shared Extension](experienceevent-shared.schema.md#httpsnsadobecomexperiencetargetsupplementaldataid) |
| `*` | any | Additional | this schema *allows* additional properties |

## https://ns.adobe.com/experience/target/activities
### Activities

A list of items representing executed activities.

`https://ns.adobe.com/experience/target/activities`
* is optional
* type: Adobe Target Activity

* defined in this schema

### https://ns.adobe.com/experience/target/activities Type


Array type: Adobe Target Activity

All items must be of the type:
* [Adobe Target Activity](activity.schema.md) – `https://ns.adobe.com/experience/target/activity`








## https://ns.adobe.com/experience/target/clientcode
### Adobe Target Client Code

Adobe Target client code.

`https://ns.adobe.com/experience/target/clientcode`
* is optional
* type: `string`
* defined in this schema

### https://ns.adobe.com/experience/target/clientcode Type


`string`






## https://ns.adobe.com/experience/target/environmentID
### Environment Identifier

Identifier of the environment on which the event was processed.

`https://ns.adobe.com/experience/target/environmentID`
* is optional
* type: `string`
* defined in this schema

### https://ns.adobe.com/experience/target/environmentID Type


`string`






## https://ns.adobe.com/experience/target/mboxname
### Adobe Target Mbox Name

Adobe Target mbox name.

`https://ns.adobe.com/experience/target/mboxname`
* is optional
* type: `string`
* defined in this schema

### https://ns.adobe.com/experience/target/mboxname Type


`string`






## https://ns.adobe.com/experience/target/mboxversion
### Adobe Target Mbox Version

Adobe Target mbox version.

`https://ns.adobe.com/experience/target/mboxversion`
* is optional
* type: `string`
* defined in this schema

### https://ns.adobe.com/experience/target/mboxversion Type


`string`






## https://ns.adobe.com/experience/target/pagedetail/pageid
### Target Unique Page Identifier

Target generated page identifier for current event.

`https://ns.adobe.com/experience/target/pagedetail/pageid`
* is optional
* type: `string`
* defined in this schema

### https://ns.adobe.com/experience/target/pagedetail/pageid Type


`string`
* format: `uri` – Uniformous Resource Identifier (according to [RFC3986](http://tools.ietf.org/html/rfc3986))






## https://ns.adobe.com/experience/target/pagedetail/pagescore
### Page Score

Customer assigned score to visited page.

`https://ns.adobe.com/experience/target/pagedetail/pagescore`
* is optional
* type: `number`
* defined in this schema

### https://ns.adobe.com/experience/target/pagedetail/pagescore Type


`number`






## https://ns.adobe.com/experience/target/sessionid
### Adobe Target Session Identifier

Adobe Target session identifier.

`https://ns.adobe.com/experience/target/sessionid`
* is optional
* type: `string`
* defined in this schema

### https://ns.adobe.com/experience/target/sessionid Type


`string`






## https://ns.adobe.com/experience/target/supplementalDataID
### Supplemental Data Identifier

Identifier used to stitch Target events with Analytics events

`https://ns.adobe.com/experience/target/supplementalDataID`
* is optional
* type: `string`
* defined in [Adobe Target ExperienceEvent Shared Extension](experienceevent-shared.schema.md#httpsnsadobecomexperiencetargetsupplementaldataid)

### https://ns.adobe.com/experience/target/supplementalDataID Type


`string`





