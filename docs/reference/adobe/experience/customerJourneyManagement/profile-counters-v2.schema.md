
# Profile Counters Mixin Extension Schema

```
https://ns.adobe.com/experience/customerJourneyManagement/profile-counters-v2
```

Holds a map of objects containing counter_value and expiryDate, keyed by counter_id.

| [Abstract](../../../../abstract.md) | [Extensible](../../../../extensions.md) | [Status](../../../../status.md) | [Identifiable](../../../../id.md) | [Custom Properties](../../../../extensions.md) | [Additional Properties](../../../../extensions.md) | Defined In |
|-------------------------------------|-----------------------------------------|---------------------------------|-----------------------------------|------------------------------------------------|----------------------------------------------------|------------|
| Can be instantiated | Yes | Stable | No | Forbidden | Permitted | [adobe/experience/customerJourneyManagement/profile-counters-v2.schema.json](adobe/experience/customerJourneyManagement/profile-counters-v2.schema.json) |

## Profile Counters Mixin Extension Examples

```json
{
  "xdm:xid": "xid-92312748749128",
  "xdm:frequencyMap": {
    "counter_id": {
      "xdm:value": 100,
      "xdm:expiryDate": "2021-10-22T09:02:15.541Z"
    }
  }
}
```

```json
{
  "xdm:namespace": {
    "xdm:code": "ECID"
  },
  "xdm:id": "92312748749128",
  "xdm:frequencyMap": {
    "counter_id": {
      "xdm:value": 100,
      "xdm:expiryDate": "2021-10-22T09:02:15.541Z"
    }
  }
}
```


# Profile Counters Mixin Extension Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [xdm:frequencyMap](#xdmfrequencymap) | `object` | Optional | Profile Counters Mixin Extension (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## xdm:frequencyMap

A map from counter_id to objects containing counter_value, expiryDate

`xdm:frequencyMap`
* is optional
* type: `object`
* defined in this schema

### xdm:frequencyMap Type


`object` with following properties:


| Property | Type | Required |
|----------|------|----------|





