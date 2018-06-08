
# End User IDs Schema

```
https://ns.adobe.com/xdm/context/enduserids
```

The End User IDs schema is used to represent a federated identity of a visitor or known profile across a number of data sources.

It is an `object` that is using the `@id` of an XDM data source as keys.
Each value consists of the (required) ID that is native to the data source, and (optional) metadata about the data source as well as (optional) confidence in the stitching.

Additionally, this schema can include a property that describes the data source that is responsible for identity stitching.


| [Abstract](../../abstract.md) | [Extensible](../../extensions.md) | [Status](../../status.md) | [Identifiable](../../id.md) | [Custom Properties](../../extensions.md) | [Additional Properties](../../extensions.md) | Defined In |
|-------------------------------|-----------------------------------|---------------------------|-----------------------------|------------------------------------------|----------------------------------------------|------------|
| Can be instantiated | No | Stabilizing | No | Forbidden | Permitted | [context/enduserids.schema.json](context/enduserids.schema.json) |
## Schema Hierarchy

* End User IDs `https://ns.adobe.com/xdm/context/enduserids`
  * [Identity](identity.schema.md) `https://ns.adobe.com/xdm/context/identity`


## End User IDs Example
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

# End User IDs Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [https://ns.adobe.com/experience/aacustomid](#https//ns.adobe.com/experience/aacustomid) | Identity | Optional | End User IDs (this schema) |
| [https://ns.adobe.com/experience/aaid](#https//ns.adobe.com/experience/aaid) | Identity | Optional | End User IDs (this schema) |
| [https://ns.adobe.com/experience/acid](#https//ns.adobe.com/experience/acid) | Identity | Optional | End User IDs (this schema) |
| [https://ns.adobe.com/experience/adcloud](#https//ns.adobe.com/experience/adcloud) | Identity | Optional | End User IDs (this schema) |
| [https://ns.adobe.com/experience/emailid](#https//ns.adobe.com/experience/emailid) | Identity | Optional | End User IDs (this schema) |
| [https://ns.adobe.com/experience/mcid](#https//ns.adobe.com/experience/mcid) | Identity | Optional | End User IDs (this schema) |
| [https://ns.adobe.com/experience/phonenumberid](#https//ns.adobe.com/experience/phonenumberid) | Identity | Optional | End User IDs (this schema) |
| [https://ns.adobe.com/experience/tntid](#https//ns.adobe.com/experience/tntid) | Identity | Optional | End User IDs (this schema) |
| `.+//.+` | reference | Pattern | End User IDs (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## https://ns.adobe.com/experience/aacustomid
### Adobe Analytics Cloud Custom End User IDs

An Adobe Analytics custom identifier passed in on a hit.

`https://ns.adobe.com/experience/aacustomid`
* is optional
* type: Identity
* defined in this schema

### https://ns.adobe.com/experience/aacustomid Type


* [Identity](identity.schema.md) – `https://ns.adobe.com/xdm/context/identity`





## https://ns.adobe.com/experience/aaid
### Adobe Analytics Cloud End User IDs

Adobe Analytics Cloud extension to End User IDs.

`https://ns.adobe.com/experience/aaid`
* is optional
* type: Identity
* defined in this schema

### https://ns.adobe.com/experience/aaid Type


* [Identity](identity.schema.md) – `https://ns.adobe.com/xdm/context/identity`





## https://ns.adobe.com/experience/acid
### Adobe Campaign End User IDs

Adobe Campaign extension to End User IDs.

`https://ns.adobe.com/experience/acid`
* is optional
* type: Identity
* defined in this schema

### https://ns.adobe.com/experience/acid Type


* [Identity](identity.schema.md) – `https://ns.adobe.com/xdm/context/identity`





## https://ns.adobe.com/experience/adcloud
### Adobe AdCloud End User IDs

Adobe Adcloud extension to End User IDs.

`https://ns.adobe.com/experience/adcloud`
* is optional
* type: Identity
* defined in this schema

### https://ns.adobe.com/experience/adcloud Type


* [Identity](identity.schema.md) – `https://ns.adobe.com/xdm/context/identity`





## https://ns.adobe.com/experience/emailid
### Email Address IDs

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
### Phone Number IDs

Phone numbers used as IDs.

`https://ns.adobe.com/experience/phonenumberid`
* is optional
* type: Identity
* defined in this schema

### https://ns.adobe.com/experience/phonenumberid Type


* [Identity](identity.schema.md) – `https://ns.adobe.com/xdm/context/identity`





## https://ns.adobe.com/experience/tntid
### Adobe Target End User IDs

Adobe Target extension to End User IDs.

`https://ns.adobe.com/experience/tntid`
* is optional
* type: Identity
* defined in this schema

### https://ns.adobe.com/experience/tntid Type


* [Identity](identity.schema.md) – `https://ns.adobe.com/xdm/context/identity`





## Pattern: `.+://.+`
Applies to all properties that match the regular expression `.+://.+`


The identifier, including data source (`@id` must be identical to the property value), foreign ID, and confidence.

`.+://.+`
* is a property pattern
* type: reference
* defined in this schema

### Pattern .+://.+ Type


* []() – `https://ns.adobe.com/xdm/context/identity`




