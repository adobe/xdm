
# Claim Process Schema

```
https://ns.adobe.com/xdm/mixins/experienceevent-warranty-claim-details
```

Claim details such as claim policy ID and claim creation steps.

| [Abstract](../../../../abstract.md) | [Extensible](../../../../extensions.md) | [Status](../../../../status.md) | [Identifiable](../../../../id.md) | [Custom Properties](../../../../extensions.md) | [Additional Properties](../../../../extensions.md) | Defined In |
|-------------------------------------|-----------------------------------------|---------------------------------|-----------------------------------|------------------------------------------------|----------------------------------------------------|------------|
| Can be instantiated | Yes | Experimental | No | Forbidden | Permitted | [fieldgroups/experience-event/industry-verticals/experienceevent-warranty-claim-process.schema.json](fieldgroups/experience-event/industry-verticals/experienceevent-warranty-claim-process.schema.json) |

## Claim Process Example
```json
{
  "xdm:warrantyClaim": {
    "xdm:length": 12,
    "xdm:type": "automobile"
  }
}
```

# Claim Process Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [xdm:warrantyClaim](#xdmwarrantyclaim) | `object` | Optional | Claim Process (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## xdm:warrantyClaim

Captures fields related to a claim when initated by a customer.

`xdm:warrantyClaim`
* is optional
* type: `object`
* defined in this schema

### xdm:warrantyClaim Type


`object` with following properties:


| Property | Type | Required |
|----------|------|----------|
| `xdm:claim`|  | Optional |
| `xdm:length`| integer | Optional |
| `xdm:type`| string | Optional |



#### xdm:claim
##### Claim

Extension of claim data type.

`xdm:claim`
* is optional
* type: reference

##### xdm:claim Type


* []() – `https://ns.adobe.com/xdm/datatypes/claim`







#### xdm:length
##### Length

Records the length of the warranty, in months.

`xdm:length`
* is optional
* type: `integer`

##### xdm:length Type


`integer`








#### xdm:type
##### Type

Type of warranty claim submitted.

`xdm:type`
* is optional
* type: `enum`

The value of this property **must** be equal to one of the [known values below](#xdmwarrantyclaim-known-values).

##### xdm:type Known Values
| Value | Description |
|-------|-------------|
| `product` | Product |
| `recall` | Recall |
| `service` | Service |
| `home` | Home |
| `automobile` | Automobile |








