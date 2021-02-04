
# Fatigue Score and Level Schema

```
https://ns.adobe.com/experience/campaign/journeyaifatigue
```

Fatigue score and fatigue level from Journey AI.

| [Abstract](../../../../abstract.md) | [Extensible](../../../../extensions.md) | [Status](../../../../status.md) | [Identifiable](../../../../id.md) | [Custom Properties](../../../../extensions.md) | [Additional Properties](../../../../extensions.md) | Defined In |
|-------------------------------------|-----------------------------------------|---------------------------------|-----------------------------------|------------------------------------------------|----------------------------------------------------|------------|
| Can be instantiated | Yes | Stable | No | Forbidden | Permitted | [adobe/experience/campaign/journeyaifatigue.schema.json](adobe/experience/campaign/journeyaifatigue.schema.json) |

## Fatigue Score and Level Example
```json
{
  "xdm:fatigueScore": 0.53,
  "xdm:fatigueLevel": "medium"
}
```

# Fatigue Score and Level Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [xdm:fatigueLevel](#xdmfatiguelevel) | `enum` | Optional | Fatigue Score and Level (this schema) |
| [xdm:fatigueScore](#xdmfatiguescore) | `number` | Optional | Fatigue Score and Level (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## xdm:fatigueLevel
### Fatigue Level

Classification of profile into different buckets, based on fatigue score.

`xdm:fatigueLevel`
* is optional
* type: `enum`
* defined in this schema

The value of this property **must** be equal to one of the [known values below](#xdmfatiguelevel-known-values).

### xdm:fatigueLevel Known Values
| Value | Description |
|-------|-------------|
| `low` | Low |
| `medium` | Medium |
| `high` | High |




## xdm:fatigueScore
### Fatigue Score

Fatigue score for the profile.

`xdm:fatigueScore`
* is optional
* type: `number`
* defined in this schema

### xdm:fatigueScore Type


`number`
* maximum value: `1`




