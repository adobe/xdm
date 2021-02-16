
# Interaction Measurement Definition Schema

```
https://ns.adobe.com/experience/decisioning/interaction-measurement
```

An interaction measurement determines how experience event properties are interpreted as outcomes. In some cases the outcome is provided directly with the event and no additional mapping is required, in other cases a calculation must be applied to test if the event is a measurable outcome and what the measured value should be.

| [Abstract](../../../../abstract.md) | [Extensible](../../../../extensions.md) | [Status](../../../../status.md) | [Identifiable](../../../../id.md) | [Custom Properties](../../../../extensions.md) | [Additional Properties](../../../../extensions.md) | Defined In |
|-------------------------------------|-----------------------------------------|---------------------------------|-----------------------------------|------------------------------------------------|----------------------------------------------------|------------|
| Can be instantiated | Yes | Experimental | No | Forbidden | Permitted | [adobe/experience/decisioning/interaction-measurement-details.schema.json](adobe/experience/decisioning/interaction-measurement-details.schema.json) |
## Schema Hierarchy

* Interaction Measurement Definition `https://ns.adobe.com/experience/decisioning/interaction-measurement`
  * [Extensibility base schema](../../../datatypes/extensible.schema.md) `https://ns.adobe.com/xdm/common/extensible`


# Interaction Measurement Definition Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [xdm:observation](#xdmobservation) | `object` | Optional | Interaction Measurement Definition (this schema) |
| [xdm:outcome](#xdmoutcome) | `object` | Optional | Interaction Measurement Definition (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## xdm:observation
### Event observation

A qualification that is evaluated against the experience event to test if a measurable outcome has been achieved. This mapping could check if the value of a property matches a given constant or could be a more complex evaluation. An outcome will be recorded with the event if and only if the implied condition evaluates to 'true'

`xdm:observation`
* is optional
* type: `object`
* defined in this schema

### xdm:observation Type


`object` with following properties:


| Property | Type | Required | Default |
|----------|------|----------|---------|
| `xdm:field`| string | Optional | `"xdm:eventType"` |
| `xdm:mapping`| string | Optional | `"direct"` |
| `xdm:value`| string | Optional |  |



#### xdm:field
##### Field name

The field that contains the observed value.

`xdm:field`
* is optional
* type: `string`
* default: `"xdm:eventType"`


##### xdm:field Type


`string`








#### xdm:mapping
##### Mapping type

Indicator for how the observation is mapped into an outcome value

`xdm:mapping`
* is optional
* type: `enum`
* default: `"direct"`

The value of this property **must** be equal to one of the [known values below](#xdmobservation-known-values).

##### xdm:mapping Known Values
| Value | Description |
|-------|-------------|
| `direct` |  |
| `eventTypeValue` |  |
| `fieldValue` |  |
| `predicate` |  |






#### xdm:value
##### Observation mapping

The expression or term that defines how the outcome is derived from the observation. The presence and interpretation of this 'value' is based on the 'mapping' type

`xdm:value`
* is optional
* type: `string`

##### xdm:value Type


`string`











## xdm:outcome
### Interaction outcome measurement

The definition of a measurement for the outcome. A property path and value is specified where a measured outcome for the interaction is recorded.

`xdm:outcome`
* is optional
* type: `object`
* defined in this schema

### xdm:outcome Type


`object` with following properties:


| Property | Type | Required |
|----------|------|----------|
| `@id`| string | Optional |
| `xdm:field`| string | Optional |



#### @id
##### Outcome identifier

Unique value that identifies the outcome of the interaction (nominal value).

`@id`
* is optional
* type: `string`

##### @id Type


`string`








#### xdm:field
##### Outcome property path

Property path where the outcome is inserted into the XDM event.

`xdm:field`
* is optional
* type: `string`

##### xdm:field Type


`string`










