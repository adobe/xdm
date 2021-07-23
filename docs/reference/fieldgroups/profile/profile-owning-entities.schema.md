
# Profile owning entity details Schema

```
https://ns.adobe.com/xdm/context/profile-owning-entities
```

Geographical unit information such as labels, organization name, and geographical unit name.

| [Abstract](../../../abstract.md) | [Extensible](../../../extensions.md) | [Status](../../../status.md) | [Identifiable](../../../id.md) | [Custom Properties](../../../extensions.md) | [Additional Properties](../../../extensions.md) | Defined In |
|----------------------------------|--------------------------------------|------------------------------|--------------------------------|---------------------------------------------|-------------------------------------------------|------------|
| Can be instantiated | Yes | Stable | No | Forbidden | Permitted | [fieldgroups/profile/profile-owning-entities.schema.json](fieldgroups/profile/profile-owning-entities.schema.json) |
## Schema Hierarchy

* Profile owning entity details `https://ns.adobe.com/xdm/context/profile-owning-entities`
  * [Extensibility base schema](../../datatypes/extensible.schema.md) `https://ns.adobe.com/xdm/common/extensible`
  * [Organizational unit](../../datatypes/b2b/orgunit.schema.md) `https://ns.adobe.com/xdm/common/orgunit`
  * [Geographical unit](../../datatypes/demographic/geounit.schema.md) `https://ns.adobe.com/xdm/common/geounit`


## Profile owning entity details Example
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

# Profile owning entity details Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [xdm:geoUnit](#xdmgeounit) | Geographical unit | Optional | Profile owning entity details (this schema) |
| [xdm:orgUnit](#xdmorgunit) | Organizational unit | Optional | Profile owning entity details (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## xdm:geoUnit
### Geographical unit

The geographical unit within the organization owning the profile. This can be used to reference the geographical information maintained in another dataset.

`xdm:geoUnit`
* is optional
* type: Geographical unit
* defined in this schema

### xdm:geoUnit Type


* [Geographical unit](../../datatypes/demographic/geounit.schema.md) – `https://ns.adobe.com/xdm/common/geounit`





## xdm:orgUnit
### Organizational unit

The unit within the organization owning the profile. This can be used to reference the organization details maintained in another dataset.

`xdm:orgUnit`
* is optional
* type: Organizational unit
* defined in this schema

### xdm:orgUnit Type


* [Organizational unit](../../datatypes/b2b/orgunit.schema.md) – `https://ns.adobe.com/xdm/common/orgunit`




