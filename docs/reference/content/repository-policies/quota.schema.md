
# Storage Quota Schema

```
https://ns.adobe.com/xdm/content/repository-policies/quota
```

Quota policy represents how storage consumption is managed and monitored in a given part of the repository.
Quota is expressed as two values: _Quota Amount_ (`amount`) and _Current Consumption_ (`consumed`). The former represents a limit of storage space that can be allocated in the directory and its descendants. The latter represents the storage space that is currently allocated.
Furthermore, _Storage Quota_ can be either _hard_ or _soft_ via the 'enforcement' property. If a _hard_ _Storage Quota_ is set, the repository implementation will not allow clients to allocate storage beyond the _Quota Amount_.
Repository implementations can generate notifications or alerts when the consumed space in a part of the repository for which a (hard or soft) quota has been defined exceeds a given percentage (e.g. 80%) of the _Quota Amount_.


| [Abstract](../../../abstract.md) | [Extensible](../../../extensions.md) | [Status](../../../status.md) | [Identifiable](../../../id.md) | [Custom Properties](../../../extensions.md) | [Additional Properties](../../../extensions.md) | Defined In |
|----------------------------------|--------------------------------------|------------------------------|--------------------------------|---------------------------------------------|-------------------------------------------------|------------|
| Cannot be instantiated | Yes | Experimental | No | Forbidden | Permitted | [content/repository-policies/quota.schema.json](content/repository-policies/quota.schema.json) |

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
| [xdm:amount](#xdmamount) | `number` | `https://ns.adobe.com/xdm/content/repository-policies/quota#/definitions/quota` |
| [xdm:consumed](#xdmconsumed) | `number` | `https://ns.adobe.com/xdm/content/repository-policies/quota#/definitions/quota` |
| [xdm:enforcement](#xdmenforcement) | `enum` | `https://ns.adobe.com/xdm/content/repository-policies/quota#/definitions/quota` |
| [xdm:unit](#xdmunit) | `const` | `https://ns.adobe.com/xdm/content/repository-policies/quota#/definitions/quota` |

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






## xdm:enforcement


`xdm:enforcement`
* is optional
* type: `enum`
* defined in this schema

The value of this property **must** be equal to one of the [known values below](#xdmenforcement-known-values).

### xdm:enforcement Known Values
| Value | Description |
|-------|-------------|
| `hard` |  |
| `soft` |  |




## xdm:unit


`xdm:unit`
* is optional
* type: `const`
* defined in this schema

The value of this property **must** be equal to:

```json
"Bytes"
```




