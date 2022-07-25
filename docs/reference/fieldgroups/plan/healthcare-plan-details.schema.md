
# Healthcare Plan Details Schema

```
https://ns.adobe.com/xdm/mixins/healthcare-plan-details
```

Patient medical plan details such as network, type, and active status.

| [Abstract](../../../abstract.md) | [Extensible](../../../extensions.md) | [Status](../../../status.md) | [Identifiable](../../../id.md) | [Custom Properties](../../../extensions.md) | [Additional Properties](../../../extensions.md) | Defined In |
|----------------------------------|--------------------------------------|------------------------------|--------------------------------|---------------------------------------------|-------------------------------------------------|------------|
| Can be instantiated | Yes | Experimental | No | Forbidden | Permitted | [fieldgroups/plan/healthcare-plan-details.schema.json](fieldgroups/plan/healthcare-plan-details.schema.json) |

## Healthcare Plan Details Example
```json
{}
```

# Healthcare Plan Details Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [xdm:healthcarePlanDetails](#xdmhealthcareplandetails) | `object` | Optional | Healthcare Plan Details (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## xdm:healthcarePlanDetails
### Healthcare Plan Details

Information about the healthcare plan.

`xdm:healthcarePlanDetails`
* is optional
* type: `object`
* defined in this schema

### xdm:healthcarePlanDetails Type


`object` with following properties:


| Property | Type | Required |
|----------|------|----------|
| `xdm:coverageType`| string | Optional |
| `xdm:isActive`| boolean | Optional |
| `xdm:lastVerificationDate`| string | Optional |
| `xdm:networkDetails`| array | Optional |
| `xdm:payerID`| string | Optional |
| `xdm:payerName`| string | Optional |
| `xdm:planLevel`| string | Optional |
| `xdm:planType`| string | Optional |
| `xdm:targetOwnerType`| string | Optional |



#### xdm:coverageType
##### Coverage Type

Plan coverage type.

`xdm:coverageType`
* is optional
* type: `enum`

The value of this property **must** be equal to one of the [known values below](#xdmhealthcareplandetails-known-values).

##### xdm:coverageType Known Values
| Value | Description |
|-------|-------------|
| `medical` | Medical |
| `dental` | Dental |
| `vision` | Vision |
| `accident` | Accident |






#### xdm:isActive
##### Is Active

Indicates whether the plan is active.

`xdm:isActive`
* is optional
* type: `boolean`

##### xdm:isActive Type


`boolean`







#### xdm:lastVerificationDate
##### Last Verification Date

The date on which the plan was last verified.

`xdm:lastVerificationDate`
* is optional
* type: `string`

##### xdm:lastVerificationDate Type


`string`
* format: `date-time` – date and time (according to [RFC 3339, section 5.6](http://tools.ietf.org/html/rfc3339))








#### xdm:networkDetails
##### Network Details

undefined

`xdm:networkDetails`
* is optional
* type: `object[]`


##### xdm:networkDetails Type


Array type: `object[]`

All items must be of the type:
`object` with following properties:


| Property | Type | Required |
|----------|------|----------|
| `xdm:networkID`| string | Optional |
| `xdm:networkName`| string | Optional |



#### xdm:networkID
##### Network Identifier

The insurer-specific identifier for the insurer-defined network of providers to which the beneficiary may seek treatment which will be covered at the 'in-network' rate, otherwise 'out of network' term.

`xdm:networkID`
* is optional
* type: `string`

##### xdm:networkID Type


`string`








#### xdm:networkName
##### Network Name

The insurer-specific name for the insurer-defined network of providers to which the beneficiary may seek treatment which will be covered at the 'in-network' rate, otherwise 'out of network' term.

`xdm:networkName`
* is optional
* type: `string`

##### xdm:networkName Type


`string`
















#### xdm:payerID
##### Payer ID

Unique identifier of the payer. This is the insurance provider of the plan.

`xdm:payerID`
* is optional
* type: `string`

##### xdm:payerID Type


`string`








#### xdm:payerName
##### Payer Name

Name of the payer. This is the insurance provider of the plan.

`xdm:payerName`
* is optional
* type: `string`

##### xdm:payerName Type


`string`








#### xdm:planLevel
##### Plan Level

This indicates if the plan is primary, secondary, tertiary etc.

`xdm:planLevel`
* is optional
* type: `enum`

The value of this property **must** be equal to one of the [known values below](#xdmhealthcareplandetails-known-values).

##### xdm:planLevel Known Values
| Value | Description |
|-------|-------------|
| `primary` | Primary |
| `secondary` | Secondary |
| `tertiary` | Tertiary |
| `quaternary` | Quaternary |






#### xdm:planType
##### Plan Type

This indicates if the plan is primary,secondary or tertiary plan.

`xdm:planType`
* is optional
* type: `enum`

The value of this property **must** be equal to one of the [known values below](#xdmhealthcareplandetails-known-values).

##### xdm:planType Known Values
| Value | Description |
|-------|-------------|
| `hmo` | HMO |
| `epo` | PPO |
| `pos` | POS |
| `hdhp` | HDHP |
| `ppo` |  |






#### xdm:targetOwnerType
##### Target Owner Type

The type of owner a plan is for. Examples are individual, group, organization etc.

`xdm:targetOwnerType`
* is optional
* type: `string`

##### xdm:targetOwnerType Type


`string`










