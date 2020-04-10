
# End user IDs Schema

```
https://ns.adobe.com/xdm/context/enduserids
```

The End User IDs schema is used to represent a federated identity of a visitor or known profile across a number of data sources.

It is an `object` that is using the `@id` of an XDM data source as keys.
Each value consists of the (required) ID that is native to the data source, and (optional) metadata about the data source as well as (optional) confidence in the stitching.

Additionally, this schema can include a property that describes the data source that is responsible for identity stitching.


| [Abstract](../../abstract.md) | [Extensible](../../extensions.md) | [Status](../../status.md) | [Identifiable](../../id.md) | [Custom Properties](../../extensions.md) | [Additional Properties](../../extensions.md) | Defined In |
|-------------------------------|-----------------------------------|---------------------------|-----------------------------|------------------------------------------|----------------------------------------------|------------|
| Can be instantiated | Yes | Stabilizing | No | Forbidden | Permitted | [context/enduserids.schema.json](context/enduserids.schema.json) |
## Schema Hierarchy

* End user IDs `https://ns.adobe.com/xdm/context/enduserids`
  * [Extensibility base schema](../common/extensible.schema.md) `https://ns.adobe.com/xdm/common/extensible`
  * [Identity](identity.schema.md) `https://ns.adobe.com/xdm/context/identity`


## End user IDs Example
```json
{
  "https://ns.adobe.com/experience/mcid": {
    "@id": "https://data.adobe.io/entities/identity/92312748749128",
    "xdm:namespace": {
      "xdm:code": "ECID"
    }
  },
  "https://ns.adobe.com/experience/aaid": {
    "@id": "https://data.adobe.io/entities/identity/2394509340-30453470347",
    "xdm:namespace": {
      "xdm:code": "AVID"
    }
  },
  "https://ns.adobe.com/experience/tntid": {
    "@id": "https://data.adobe.io/entities/identity/1233ce17-20e0-4a2c-8198-2a77fd60cf4d",
    "xdm:namespace": {
      "xdm:code": "tnt0051"
    }
  }
}
```

# End user IDs Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [https://ns.adobe.com/experience/aacustomid](#httpsnsadobecomexperienceaacustomid) | Identity | Optional | End user IDs (this schema) |
| [https://ns.adobe.com/experience/aaid](#httpsnsadobecomexperienceaaid) | Identity | Optional | End user IDs (this schema) |
| [https://ns.adobe.com/experience/acid](#httpsnsadobecomexperienceacid) | Identity | Optional | End user IDs (this schema) |
| [https://ns.adobe.com/experience/adcloud](#httpsnsadobecomexperienceadcloud) | Identity | Optional | End user IDs (this schema) |
| [https://ns.adobe.com/experience/emailid](#httpsnsadobecomexperienceemailid) | Identity | Optional | End user IDs (this schema) |
| [https://ns.adobe.com/experience/mcid](#httpsnsadobecomexperiencemcid) | Identity | Optional | End user IDs (this schema) |
| [https://ns.adobe.com/experience/phonenumberid](#httpsnsadobecomexperiencephonenumberid) | Identity | Optional | End user IDs (this schema) |
| [https://ns.adobe.com/experience/tntid](#httpsnsadobecomexperiencetntid) | Identity | Optional | End user IDs (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## https://ns.adobe.com/experience/aacustomid
### Adobe Analytics Cloud Custom end user IDs

An Adobe Analytics custom identifier passed in on a hit.

`https://ns.adobe.com/experience/aacustomid`
* is optional
* type: Identity
* defined in this schema

### https://ns.adobe.com/experience/aacustomid Type


* [Identity](identity.schema.md) – `https://ns.adobe.com/xdm/context/identity`





## https://ns.adobe.com/experience/aaid
### Adobe Analytics Cloud end user IDs

Adobe Analytics Cloud extension to end user IDs.

`https://ns.adobe.com/experience/aaid`
* is optional
* type: Identity
* defined in this schema

### https://ns.adobe.com/experience/aaid Type


* [Identity](identity.schema.md) – `https://ns.adobe.com/xdm/context/identity`





## https://ns.adobe.com/experience/acid
### Adobe Campaign end user IDs

Adobe Campaign extension to end user IDs.

`https://ns.adobe.com/experience/acid`
* is optional
* type: Identity
* defined in this schema

### https://ns.adobe.com/experience/acid Type


* [Identity](identity.schema.md) – `https://ns.adobe.com/xdm/context/identity`





## https://ns.adobe.com/experience/adcloud
### Adobe Advertising Cloud end user IDs

Adobe Advertising Cloud extension to end user IDs.

`https://ns.adobe.com/experience/adcloud`
* is optional
* type: Identity
* defined in this schema

### https://ns.adobe.com/experience/adcloud Type


* [Identity](identity.schema.md) – `https://ns.adobe.com/xdm/context/identity`





## https://ns.adobe.com/experience/emailid
### Email address IDs

Email addresses used as IDs.

`https://ns.adobe.com/experience/emailid`
* is optional
* type: Identity
* defined in this schema

### https://ns.adobe.com/experience/emailid Type


* [Identity](identity.schema.md) – `https://ns.adobe.com/xdm/context/identity`





## https://ns.adobe.com/experience/mcid
### Adobe Marketing Cloud ID

A unique identifier from Adobe Marketing Cloud.

`https://ns.adobe.com/experience/mcid`
* is optional
* type: Identity
* defined in this schema

### https://ns.adobe.com/experience/mcid Type


* [Identity](identity.schema.md) – `https://ns.adobe.com/xdm/context/identity`





## https://ns.adobe.com/experience/phonenumberid
### Phone number IDs

Phone numbers used as IDs.

`https://ns.adobe.com/experience/phonenumberid`
* is optional
* type: Identity
* defined in this schema

### https://ns.adobe.com/experience/phonenumberid Type


* [Identity](identity.schema.md) – `https://ns.adobe.com/xdm/context/identity`





## https://ns.adobe.com/experience/tntid
### Adobe Target end user IDs

Adobe Target extension to end user IDs.

`https://ns.adobe.com/experience/tntid`
* is optional
* type: Identity
* defined in this schema

### https://ns.adobe.com/experience/tntid Type


* [Identity](identity.schema.md) – `https://ns.adobe.com/xdm/context/identity`




