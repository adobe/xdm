# Capping Constraint Schema

```
https://ns.adobe.com/experience/offer-management/capping-constraint
```

A capping constraint is a way of restricting how many times an offer is proposed. These restrictions can be applied in two ways.

One of the ways is by setting a cap globally. This means that the offer won't be proposed more than the set cap. This is also referred to as volume-based capping.

Another way is by setting a cap per profile. An offer is always proposed to some profile. A marketer may want to limit the number of times the same profile sees the offer. This is also referred to as user-fatigue capping.

A marketer can set both these caps on an offer at the same time.


| Abstract | Extensible | Status | Custom Properties | Additional Properties | Defined In |
|----------|------------|--------|-------------------|-----------------------|------------|
| Can be instantiated | Yes | Experimental | Forbidden | Permitted | [experience/offer-management/capping-constraint.json](experience/offer-management/capping-constraint.json) |

## Capping Constraint Example
```json
{
  "xdm:globalCap": 5000,
  "xdm:profileCap": 3
}
```

# Capping Constraint Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [xdm:globalCap](#xdmglobalcap) | `integer` | Optional | Capping Constraint (this schema) |
| [xdm:profileCap](#xdmprofilecap) | `integer` | Optional | Capping Constraint (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## xdm:globalCap

Global cap is a constraint on how many times an offer can be proposed in totality.

`xdm:globalCap`
* is optional
* type: `integer`
* defined in this schema

### xdm:globalCap Type

`integer`

## xdm:profileCap

Profile cap is a constraint on how many times a particular offer can be proposed to a certain profile.

`xdm:profileCap`
* is optional
* type: `integer`
* defined in this schema

### xdm:profileCap Type

`integer`
