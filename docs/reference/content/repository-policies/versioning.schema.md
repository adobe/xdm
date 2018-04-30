
# Versioning Schema

```
https://ns.adobe.com/xdm/content/repository-policies/versioning
```

Versioning policy represents how versioning for content stored in this specific part of the repository is behaving.


| Abstract | Extensible | Status | Identifiable | Custom Properties | Additional Properties | Defined In |
|----------|------------|--------|--------------|-------------------|-----------------------|------------|
| Cannot be instantiated | Yes | Experimental | No | Forbidden | Permitted | [content/repository-policies/versioning.schema.json](content/repository-policies/versioning.schema.json) |

## Versioning Example
```json
{
  "xdm:retentionTime": 60,
  "xdm:maxMilestones": 1000
}
```

# Versioning Definitions

| Property | Type | Group |
|----------|------|-------|
| [xdm:maxMilestones](#xdmmaxmilestones) | `integer` | `https://ns.adobe.com/xdm/content/repository-policies/versioning#/definitions/versioning` |
| [xdm:retentionTime](#xdmretentiontime) | `integer` | `https://ns.adobe.com/xdm/content/repository-policies/versioning#/definitions/versioning` |

## xdm:maxMilestones

The maximum number of old versions that can be marked as a mlestone on a versioned resource

`xdm:maxMilestones`
* is optional
* type: `integer`
* defined in this schema

### xdm:maxMilestones Type


`integer`






## xdm:retentionTime

The maximum time (in days) up to which a version is retained if it is not marked as a milestone

`xdm:retentionTime`
* is optional
* type: `integer`
* defined in this schema

### xdm:retentionTime Type


`integer`





