
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
  "xdm:unit": "Bytes",
  "xdm:userId": "xyz@AdobeID"
}
```

# Storage Quota Definitions

| Property | Type | Group |
|----------|------|-------|
| [xdm:amount](#xdmamount) | `number` | `https://ns.adobe.com/xdm/content/repository-policies/quota#/definitions/quota` |
| [xdm:consumed](#xdmconsumed) | `number` | `https://ns.adobe.com/xdm/content/repository-policies/quota#/definitions/quota` |
| [xdm:enforcement](#xdmenforcement) | `enum` | `https://ns.adobe.com/xdm/content/repository-policies/quota#/definitions/quota` |
| [xdm:unit](#xdmunit) | `const` | `https://ns.adobe.com/xdm/content/repository-policies/quota#/definitions/quota` |
| [xdm:userId](#xdmuserid) | `string` | `https://ns.adobe.com/xdm/content/repository-policies/quota#/definitions/quota` |

## xdm:amount

The quota against which consumption is measured at the point of the repository that links to this document.

`xdm:amount`
* is optional
* type: `number`
* defined in this schema

### xdm:amount Type


`number`
* minimum value: `0`






## xdm:consumed

The amount currently consumed against the quota at the point of the repository that links to this document.

`xdm:consumed`
* is optional
* type: `number`
* defined in this schema

### xdm:consumed Type


`number`






## xdm:enforcement

Determines whether the quota is being enforced (hard quota) or only reported on (soft quota).

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

The unit that is used to determine the quota and measure consumption. This property is optional, but fixed, i.e. it allows consumers to quickly understand the value just by looking at the JSON response from the API.

`xdm:unit`
* is optional
* type: `const`
* defined in this schema

The value of this property **must** be equal to:

```json
"Bytes"
```





## xdm:userId


`xdm:userId`
* is optional
* type: `string`
* defined in this schema

### xdm:userId Type


`string`





