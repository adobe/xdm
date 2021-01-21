
# Capping Constraint (deprecated) Schema

```
https://ns.adobe.com/experience/offer-management/capping-constraint
```

A capping constraint is a way of restricting how many times an offer is proposed. These restrictions can be applied in two ways.

One of the ways is by setting a cap globally. This means that the offer won't be proposed more than the set cap. This is also referred to as volume-based capping.

Another way is by setting a cap per profile. An offer is always proposed to some profile. A marketer may want to limit the number of times the same profile sees the offer. This is also referred to as user-fatigue capping.

A marketer can set both these caps on an offer at the same time.


| [Abstract](../../../../abstract.md) | [Extensible](../../../../extensions.md) | [Status](../../../../status.md) | [Identifiable](../../../../id.md) | [Custom Properties](../../../../extensions.md) | [Additional Properties](../../../../extensions.md) | Defined In |
|-------------------------------------|-----------------------------------------|---------------------------------|-----------------------------------|------------------------------------------------|----------------------------------------------------|------------|
| Can be instantiated | Yes | Deprecated | No | Forbidden | Permitted | [adobe/experience/offer-management/capping-constraint.schema.json](adobe/experience/offer-management/capping-constraint.schema.json) |

# Capping Constraint (deprecated) Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [xdm:globalCap](#xdmglobalcap) | `integer` | Optional | Capping Constraint (deprecated) (this schema) |
| [xdm:profileCap](#xdmprofilecap) | `integer` | Optional | Capping Constraint (deprecated) (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## xdm:globalCap
### Global Cap

Global cap is a constraint on how many times an offer can be proposed in totality.

`xdm:globalCap`
* is optional
* type: `integer`
* defined in this schema

### xdm:globalCap Type


`integer`
* minimum value: `1`






## xdm:profileCap
### Profile Cap

Profile cap is a constraint on how many times an offer can be proposed to a certain profile.

`xdm:profileCap`
* is optional
* type: `integer`
* defined in this schema

### xdm:profileCap Type


`integer`
* minimum value: `1`





