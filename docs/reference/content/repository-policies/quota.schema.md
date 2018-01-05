---
---

# Storage Quota Schema

```
https://ns.adobe.com/xdm/content/repository-policies/quota
```

Quota policy represents how storage consumption is managed and monitored in a given part of the repository.
Quota is expressed as two values: *Quota Amount* (`amount`) and *Current Consumption* (`consumed`). The former represents a limit of storage space that can be allocated in the directory and its descendants. The latter represents the storage space that is currently allocated.
Furthermore, *Storage Quota* can be either *hard* or *soft* via the &#39;enforcement&#39; property. If a *hard* *Storage Quota* is set, the repository implementation will not allow clients to allocate storage beyond the *Quota Amount*.
Repository implementations can generate notifications or alerts when the consumed space in a part of the repository for which a (hard or soft) quota has been defined exceeds a given percentage (e.g. 80%) of the *Quota Amount*.


| Abstract | Extensible | Custom Properties | Defined In |
|----------|------------|-------------------|------------|
| Cannot be instantiated | Yes | Forbidden | [content/repository-policies/quota.schema.json](content/repository-policies/quota.schema.json) |

## Storage Quota Example
```json
{
  "xdm:enforcement": "hard",
  "xdm:amount": 1099511627776,
  "xdm:consumed": 21474836480,
  "xdm:unit": "Bytes"
}
```

# Storage Quota Definitions

| Property | Type | Group |
|----------|------|-------|
| [xdm:enforcement](#xdm:enforcement) | `enum` | `#/definitions/quota` |
| [xdm:amount](#xdm:amount) | `number` | `#/definitions/quota` |
| [xdm:consumed](#xdm:consumed) | `number` | `#/definitions/quota` |
| [xdm:unit](#xdm:unit) | `const` | `#/definitions/quota` |

## xdm:enforcement



`xdm:enforcement`
* is optional
* type: `enum`
* defined in this schema

The value of this property **must** be equal to one of the [known values below](#xdm:enforcement-known-values).

### xdm:enforcement Known Values
| Value | Description |
|-------|-------------|
| `hard` |  |
| `soft` |  |




## xdm:amount



`xdm:amount`
* is optional
* type: `number`
* defined in this schema

### xdm:amount Type


`number`
* minimum value: `0`






## xdm:consumed



`xdm:consumed`
* is optional
* type: `number`
* defined in this schema

### xdm:consumed Type


`number`






## xdm:unit



`xdm:unit`
* is optional
* type: `const`
* defined in this schema

The value of this property **must** be equal to:

```json
"Bytes"
```




