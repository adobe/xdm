
# Alert Impressions Schema

```
https://ns.adobe.com/xdm/mixins/experienceevent-alert-impressions
```

Alert information such as ad impressions and ad clicks. 

| [Abstract](../../../../abstract.md) | [Extensible](../../../../extensions.md) | [Status](../../../../status.md) | [Identifiable](../../../../id.md) | [Custom Properties](../../../../extensions.md) | [Additional Properties](../../../../extensions.md) | Defined In |
|-------------------------------------|-----------------------------------------|---------------------------------|-----------------------------------|------------------------------------------------|----------------------------------------------------|------------|
| Can be instantiated | Yes | Stable | No | Forbidden | Permitted | [fieldgroups/experience-event/industry-verticals/experienceevent-alert-impressions.schema.json](fieldgroups/experience-event/industry-verticals/experienceevent-alert-impressions.schema.json) |

## Alert Impressions Example
```json
{
  "xdm:alerts": {
    "xdm:clicks": 4,
    "xdm:dismissals": 2
  }
}
```

# Alert Impressions Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [xdm:alerts](#xdmalerts) | `object` | Optional | Alert Impressions (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## xdm:alerts

Alert information including alert impressions and clickthroughs as well as alert setups.

`xdm:alerts`
* is optional
* type: `object`
* defined in this schema

### xdm:alerts Type


`object` with following properties:


| Property | Type | Required |
|----------|------|----------|
| `xdm:ID`| string | Optional |
| `xdm:clicks`| integer | Optional |
| `xdm:dismissals`| integer | Optional |
| `xdm:impressions`| array | Optional |



#### xdm:ID
##### Alert ID

Alert identifier.

`xdm:ID`
* is optional
* type: `string`

##### xdm:ID Type


`string`








#### xdm:clicks
##### Alert Clicks

Counts the number of times an alert has been clicked.

`xdm:clicks`
* is optional
* type: `integer`

##### xdm:clicks Type


`integer`








#### xdm:dismissals
##### Alert Dismissals

Counts the number of times an alert has been dismissed.

`xdm:dismissals`
* is optional
* type: `integer`

##### xdm:dismissals Type


`integer`








#### xdm:impressions
##### Alert Impression Details

An array of alerts that have been displayed to a customer.

`xdm:impressions`
* is optional
* type: reference


##### xdm:impressions Type


Array type: reference

All items must be of the type:
* []() – `https://ns.adobe.com/xdm/datatypes/impressions`












