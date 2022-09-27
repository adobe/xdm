
# Adobe Analytics ExperienceEvent Schema

```
https://ns.adobe.com/xdm/destinations/adobe-analytics
```

Analytics ExperienceEvent schema used for adobe analytics solution data ingestion. Includes the core/standard ExperienceEvent as well as the required Adobe Analytics ExperienceEvent field groups.

| [Abstract](../../../abstract.md) | [Extensible](../../../extensions.md) | [Status](../../../status.md) | [Identifiable](../../../id.md) | [Custom Properties](../../../extensions.md) | [Additional Properties](../../../extensions.md) | Defined In |
|----------------------------------|--------------------------------------|------------------------------|--------------------------------|---------------------------------------------|-------------------------------------------------|------------|
| Can be instantiated | Yes | Experimental | No | Forbidden | Permitted | [destinations/solutions/analytics-experienceevent.schema.json](destinations/solutions/analytics-experienceevent.schema.json) |
## Schema Hierarchy

* Adobe Analytics ExperienceEvent `https://ns.adobe.com/xdm/destinations/adobe-analytics`
  * [XDM ExperienceEvent](../../classes/experienceevent.schema.md) `https://ns.adobe.com/xdm/context/experienceevent`
  * [Adobe Analytics ExperienceEvent Template](../../adobe/experience/analytics-experienceevent.schema.md) `https://ns.adobe.com/experience/analytics-experienceevent`


## Adobe Analytics ExperienceEvent Example
```json
{
  "@id": "https://data.adobe.io/experienceid-2345678",
  "xdm:timestamp": "2017-09-26T15:52:25+00:00"
}
```

# Adobe Analytics ExperienceEvent Properties

| Property | Type | Required | Default | Defined by |
|----------|------|----------|---------|------------|
| [xdm:eventMergeId](#xdmeventmergeid) | `string` | Optional |  | [XDM ExperienceEvent](../../classes/experienceevent.schema.md#xdmeventmergeid) |
| [xdm:producedBy](#xdmproducedby) | `string` | Optional | `"self"` | [XDM ExperienceEvent](../../classes/experienceevent.schema.md#xdmproducedby) |
| `*` | any | Additional | this schema *allows* additional properties |

## xdm:eventMergeId
### ExperienceEvent merge ID

An ID to correlate or merge multiple Experience events together that are essentially the same event or should be merged. This is intended to be populated by the data producer prior to ingestion.

`xdm:eventMergeId`
* is optional
* type: `string`
* defined in [XDM ExperienceEvent](../../classes/experienceevent.schema.md#xdmeventmergeid)

### xdm:eventMergeId Type


`string`






## xdm:producedBy
### Produced By

Value that describes the producer of the event - suggested values would be 'self', 'system', 'salesRep', etc. Can be used to filter out certain producers if needed.

`xdm:producedBy`
* is optional
* type: `string`
* default: `"self"`
* defined in [XDM ExperienceEvent](../../classes/experienceevent.schema.md#xdmproducedby)

### xdm:producedBy Type


`string`



### xdm:producedBy Known Values
| Value | Description |
|-------|-------------|
| `self` | Self |
| `system` | System |
| `salesRef` | Sales Representative |
| `customerRep` | Customer Representative |



