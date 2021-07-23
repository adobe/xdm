
# Advertising Details Schema

```
https://ns.adobe.com/xdm/context/experienceevent-advertising
```

Advertising data such as clicks, completes, impressions, and conversions.

| [Abstract](../../../abstract.md) | [Extensible](../../../extensions.md) | [Status](../../../status.md) | [Identifiable](../../../id.md) | [Custom Properties](../../../extensions.md) | [Additional Properties](../../../extensions.md) | Defined In |
|----------------------------------|--------------------------------------|------------------------------|--------------------------------|---------------------------------------------|-------------------------------------------------|------------|
| Can be instantiated | Yes | Stable | No | Forbidden | Permitted | [mixins/experience-event/experienceevent-advertising.schema.json](mixins/experience-event/experienceevent-advertising.schema.json) |
## Schema Hierarchy

* Advertising Details `https://ns.adobe.com/xdm/context/experienceevent-advertising`
  * [Extensibility base schema](../../datatypes/extensible.schema.md) `https://ns.adobe.com/xdm/common/extensible`
  * [Advertising](../../datatypes/marketing/advertising.schema.md) `https://ns.adobe.com/xdm/context/advertising`


## Advertising Details Example
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

# Advertising Details Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [xdm:advertising](#xdmadvertising) | Advertising | Optional | Advertising Details (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## xdm:advertising
### Advertising

Information related to advertising impressions, clickthroughs, and attribution.

`xdm:advertising`
* is optional
* type: Advertising
* defined in this schema

### xdm:advertising Type


* [Advertising](../../datatypes/marketing/advertising.schema.md) – `https://ns.adobe.com/xdm/context/advertising`




