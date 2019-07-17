
# Profile Owning Entity Details Schema

```
https://ns.adobe.com/xdm/context/profile-owning-entities
```

Indicates the owning organizational and geographical entities of this profile.

| [Abstract](../../abstract.md) | [Extensible](../../extensions.md) | [Status](../../status.md) | [Identifiable](../../id.md) | [Custom Properties](../../extensions.md) | [Additional Properties](../../extensions.md) | Defined In |
|-------------------------------|-----------------------------------|---------------------------|-----------------------------|------------------------------------------|----------------------------------------------|------------|
| Can be instantiated | Yes | Experimental | No | Forbidden | Permitted | [context/profile-owning-entities.schema.json](context/profile-owning-entities.schema.json) |
## Schema Hierarchy

* Profile Owning Entity Details `https://ns.adobe.com/xdm/context/profile-owning-entities`
  * [Extensibility Base Schema](../common/extensible.schema.md) `https://ns.adobe.com/xdm/common/extensible`
  * [Organizational Unit](../common/orgunit.schema.md) `https://ns.adobe.com/xdm/common/orgunit`
  * [Geographical Unit](../common/geounit.schema.md) `https://ns.adobe.com/xdm/common/geounit`


## Profile Owning Entity Details Example
```json
{
  "xdm:orgUnit": {
    "@id": "https://data.adobe.io/org-apparals-men"
  },
  "xdm:geoUnit": {
    "@id": "https://data.adobe.io/geo-france"
  }
}
```

# Profile Owning Entity Details Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [xdm:geoUnit](#xdmgeounit) | Geographical Unit | Optional | Profile Owning Entity Details (this schema) |
| [xdm:orgUnit](#xdmorgunit) | Organizational Unit | Optional | Profile Owning Entity Details (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## xdm:geoUnit
### Geographical Unit

The geographical unit within the organization owning the profile. This can be used to reference the geographical information maintained in another dataset.

`xdm:geoUnit`
* is optional
* type: Geographical Unit
* defined in this schema

### xdm:geoUnit Type


* [Geographical Unit](../common/geounit.schema.md) – `https://ns.adobe.com/xdm/common/geounit`





## xdm:orgUnit
### Organizational Unit

The unit within the organization owning the profile. This can be used to reference the organization details maintained in another dataset.

`xdm:orgUnit`
* is optional
* type: Organizational Unit
* defined in this schema

### xdm:orgUnit Type


* [Organizational Unit](../common/orgunit.schema.md) – `https://ns.adobe.com/xdm/common/orgunit`




