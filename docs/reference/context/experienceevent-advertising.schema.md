
# ExperienceEvent details for advertising Schema

```
https://ns.adobe.com/xdm/context/experienceevent-advertising
```

This mixin is used to capture advertising details related to an ExperienceEvent, such as clicks, completes, impressions, and conversions.

| [Abstract](../../abstract.md) | [Extensible](../../extensions.md) | [Status](../../status.md) | [Identifiable](../../id.md) | [Custom Properties](../../extensions.md) | [Additional Properties](../../extensions.md) | Defined In |
|-------------------------------|-----------------------------------|---------------------------|-----------------------------|------------------------------------------|----------------------------------------------|------------|
| Can be instantiated | Yes | Stabilizing | No | Forbidden | Permitted | [context/experienceevent-advertising.schema.json](context/experienceevent-advertising.schema.json) |
## Schema Hierarchy

* ExperienceEvent details for advertising `https://ns.adobe.com/xdm/context/experienceevent-advertising`
  * [Extensibility base schema](../common/extensible.schema.md) `https://ns.adobe.com/xdm/common/extensible`
  * [Advertising](advertising.schema.md) `https://ns.adobe.com/xdm/context/advertising`


## ExperienceEvent details for advertising Example
```json
{
  "xdm:advertising": {
    "xdm:adViewability": {
      "xdm:adUnitDepth": 0,
      "xdm:viewportHeight": 1250,
      "xdm:viewportWidth": 1600,
      "xdm:adHeight": 250,
      "xdm:adWidth": 300,
      "xdm:playerVolume": 85,
      "xdm:measurementEligible": true,
      "xdm:implementationDetails": {
        "xdm:name": "https://ns.adobe.com/experience/adcloud/viewability",
        "xdm:version": "1"
      },
      "xdm:viewable": true,
      "xdm:activeWindow": true,
      "xdm:percentViewable": 89,
      "xdm:viewableFirstQuartile": {
        "xdm:value": 1
      }
    },
    "xdm:firstQuartiles": {
      "xdm:value": 1
    }
  }
}
```

# ExperienceEvent details for advertising Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [xdm:advertising](#xdmadvertising) | Advertising | Optional | ExperienceEvent details for advertising (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## xdm:advertising
### Advertising

Information related to advertising activity in ExperienceEvents.

`xdm:advertising`
* is optional
* type: Advertising
* defined in this schema

### xdm:advertising Type


* [Advertising](advertising.schema.md) – `https://ns.adobe.com/xdm/context/advertising`




