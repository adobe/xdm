
# Healthcare medication Schema

```
https://ns.adobe.com/xdm/mixins/healthcare-medication
```

Medication details such as brand name, lot number, and quantity.

| [Abstract](../../../abstract.md) | [Extensible](../../../extensions.md) | [Status](../../../status.md) | [Identifiable](../../../id.md) | [Custom Properties](../../../extensions.md) | [Additional Properties](../../../extensions.md) | Defined In |
|----------------------------------|--------------------------------------|------------------------------|--------------------------------|---------------------------------------------|-------------------------------------------------|------------|
| Can be instantiated | Yes | Experimental | No | Forbidden | Permitted | [fieldgroups/medication/healthcare-medication.schema.json](fieldgroups/medication/healthcare-medication.schema.json) |

## Healthcare medication Example
```json
{}
```

# Healthcare medication Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [xdm:medication](#xdmmedication) | `object` | Optional | Healthcare medication (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## xdm:medication
### Medication

Information about the medication.

`xdm:medication`
* is optional
* type: `object`
* defined in this schema

### xdm:medication Type


`object` with following properties:


| Property | Type | Required |
|----------|------|----------|
| `xdm:brandName`| string | Optional |
| `xdm:dosageUnitNumber`| number | Optional |
| `xdm:dosageUnitOfMeasurement`| string | Optional |
| `xdm:form`| string | Optional |
| `xdm:genericName`| string | Optional |
| `xdm:ingredients`| array | Optional |
| `xdm:manufacturerName`| string | Optional |
| `xdm:quantity`| number | Optional |
| `xdm:status`| string | Optional |



#### xdm:brandName
##### Brand Name

Brand name of the drug.

`xdm:brandName`
* is optional
* type: `string`

##### xdm:brandName Type


`string`








#### xdm:dosageUnitNumber
##### Dosage Unit Number

Dosage unit number.

`xdm:dosageUnitNumber`
* is optional
* type: `number`

##### xdm:dosageUnitNumber Type


`number`








#### xdm:dosageUnitOfMeasurement
##### Dosage Unit Of measurement

Dosage unit of measurement.

`xdm:dosageUnitOfMeasurement`
* is optional
* type: `string`

##### xdm:dosageUnitOfMeasurement Type


`string`








#### xdm:form
##### Medication Form

Form that the medication comes in such as tablet, capsule, or liquid.

`xdm:form`
* is optional
* type: `string`

##### xdm:form Type


`string`








#### xdm:genericName
##### Generic Name

Generic name of the drug.

`xdm:genericName`
* is optional
* type: `string`

##### xdm:genericName Type


`string`








#### xdm:ingredients
##### ingredients

Ingredients present in the medication

`xdm:ingredients`
* is optional
* type: `object[]`


##### xdm:ingredients Type


Array type: `object[]`

All items must be of the type:
`object` with following properties:


| Property | Type | Required |
|----------|------|----------|
| `xdm:isActive`| boolean | Optional |
| `xdm:name`| string | Optional |



#### xdm:isActive
##### Is Active

Indicates if this ingredient is still actively used in this medication.

`xdm:isActive`
* is optional
* type: `boolean`

##### xdm:isActive Type


`boolean`







#### xdm:name
##### Name

Name of the ingredient.

`xdm:name`
* is optional
* type: `string`

##### xdm:name Type


`string`
















#### xdm:manufacturerName
##### Manufacturer Name

Manufacturer of the medication.

`xdm:manufacturerName`
* is optional
* type: `string`

##### xdm:manufacturerName Type


`string`








#### xdm:quantity
##### Drug Quantity

Amount of drug in the package.

`xdm:quantity`
* is optional
* type: `number`

##### xdm:quantity Type


`number`








#### xdm:status
##### Status

Status indicating whether the drug/medication is active/prescribable or not.

`xdm:status`
* is optional
* type: `enum`

The value of this property **must** be equal to one of the [known values below](#xdmmedication-known-values).

##### xdm:status Known Values
| Value | Description |
|-------|-------------|
| `active` | Active |
| `inactive` | Inactive |
| `entered-in-error` | Entered-in-error |








