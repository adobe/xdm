
# Vehicle Product Schema

```
https://ns.adobe.com/xdm/classes/vehicle-product
```

For vehicle product information such as category, number of doors, capacity, and ownership. 

| [Abstract](../../abstract.md) | [Extensible](../../extensions.md) | [Status](../../status.md) | [Identifiable](../../id.md) | [Custom Properties](../../extensions.md) | [Additional Properties](../../extensions.md) | Defined In |
|-------------------------------|-----------------------------------|---------------------------|-----------------------------|------------------------------------------|----------------------------------------------|------------|
| Can be instantiated | Yes | Stable | No | Forbidden | Permitted | [classes/vehicle-product.schema.json](classes/vehicle-product.schema.json) |
## Schema Hierarchy

* Vehicle Product `https://ns.adobe.com/xdm/classes/vehicle-product`
  * [Record Schema](../behaviors/record.schema.md) `https://ns.adobe.com/xdm/data/record`


## Vehicle Product Example
```json
{
  "xdm:color": "black:",
  "xdm:inventoryType": "new",
  "xdm:luggageCapacity": 4,
  "xdm:make": "Ford",
  "xdm:mileage": 250,
  "xdm:model": "Mach-E",
  "xdm:numberOfDoors": 4,
  "xdm:options": [
    "moonroof",
    "leather seats",
    "tow package"
  ],
  "xdm:passengerCapacity": 6,
  "xdm:postalCode": "99804",
  "xdm:starRating": 5,
  "xdm:style": "SUV",
  "xdm:trim": "Limited",
  "xdm:vin": "1FM5K8F83GGC08849",
  "xdm:year": 2021
}
```

# Vehicle Product Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [@id](#id) | `string` | Optional | [Record Schema](../behaviors/record.schema.md#id) |
| [xdm:color](#xdmcolor) | `string` | Optional | Vehicle Product (this schema) |
| [xdm:inventoryType](#xdminventorytype) | `enum` | Optional | Vehicle Product (this schema) |
| [xdm:luggageCapacity](#xdmluggagecapacity) | `integer` | Optional | Vehicle Product (this schema) |
| [xdm:make](#xdmmake) | `string` | Optional | Vehicle Product (this schema) |
| [xdm:mileage](#xdmmileage) | `integer` | Optional | Vehicle Product (this schema) |
| [xdm:model](#xdmmodel) | `string` | Optional | Vehicle Product (this schema) |
| [xdm:numberOfDoors](#xdmnumberofdoors) | `integer` | Optional | Vehicle Product (this schema) |
| [xdm:options](#xdmoptions) | `string[]` | Optional | Vehicle Product (this schema) |
| [xdm:ownership](#xdmownership) | `string` | Optional | Vehicle Product (this schema) |
| [xdm:passengerCapacity](#xdmpassengercapacity) | `integer` | Optional | Vehicle Product (this schema) |
| [xdm:postalCode](#xdmpostalcode) | `string` | Optional | Vehicle Product (this schema) |
| [xdm:starRating](#xdmstarrating) | `integer` | Optional | Vehicle Product (this schema) |
| [xdm:style](#xdmstyle) | `string` | Optional | Vehicle Product (this schema) |
| [xdm:trim](#xdmtrim) | `string` | Optional | Vehicle Product (this schema) |
| [xdm:vehicleCategory](#xdmvehiclecategory) | `string` | Optional | Vehicle Product (this schema) |
| [xdm:vin](#xdmvin) | `string` | Optional | Vehicle Product (this schema) |
| [xdm:year](#xdmyear) | `integer` | Optional | Vehicle Product (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## @id
### Identifier

A unique identifier for the record.

`@id`
* is optional
* type: `string`
* defined in [Record Schema](../behaviors/record.schema.md#id)

### @id Type


`string`
* format: `uri-reference` – URI Reference (according to [RFC3986](https://tools.ietf.org/html/rfc3986))






## xdm:color
### Color

Captures the color of the vehicle.

`xdm:color`
* is optional
* type: `string`
* defined in this schema

### xdm:color Type


`string`






## xdm:inventoryType
### Inventory Type

Captures the inventory type of the vehicle.

`xdm:inventoryType`
* is optional
* type: `enum`
* defined in this schema

The value of this property **must** be equal to one of the [known values below](#xdminventorytype-known-values).

### xdm:inventoryType Known Values
| Value | Description |
|-------|-------------|
| `new` |  |
| `used` |  |
| `certified preowned` |  |




## xdm:luggageCapacity
### Luggage Capacity

Number of pieces of luggage that fit in the vehicle.

`xdm:luggageCapacity`
* is optional
* type: `integer`
* defined in this schema

### xdm:luggageCapacity Type


`integer`






## xdm:make
### Make

Captures the make of the vehicle.

`xdm:make`
* is optional
* type: `string`
* defined in this schema

### xdm:make Type


`string`






## xdm:mileage
### Mileage

Captures the current mileage of a vehicle.

`xdm:mileage`
* is optional
* type: `integer`
* defined in this schema

### xdm:mileage Type


`integer`






## xdm:model
### Model

Captures the model of the vehicle.

`xdm:model`
* is optional
* type: `string`
* defined in this schema

### xdm:model Type


`string`






## xdm:numberOfDoors
### Number of Doors

How many operating doors the vehicle has.

`xdm:numberOfDoors`
* is optional
* type: `integer`
* defined in this schema

### xdm:numberOfDoors Type


`integer`






## xdm:options
### Options

Captures an array of strings detailing vehicle options, such as heated seats, moonroof, navigation system, manual transmission, etc.

`xdm:options`
* is optional
* type: `string[]`

* defined in this schema

### xdm:options Type


Array type: `string[]`

All items must be of the type:
`string`









## xdm:ownership
### Ownership

Parent company of the vehicle.

`xdm:ownership`
* is optional
* type: `string`
* defined in this schema

### xdm:ownership Type


`string`






## xdm:passengerCapacity
### Passenger Capacity

Number of passengers that fit in the vehicle.

`xdm:passengerCapacity`
* is optional
* type: `integer`
* defined in this schema

### xdm:passengerCapacity Type


`integer`






## xdm:postalCode
### Postal Code

Captures the postal code where the vehicle resides.

`xdm:postalCode`
* is optional
* type: `string`
* defined in this schema

### xdm:postalCode Type


`string`






## xdm:starRating
### Star Rating

Star rating associated with the vehicle.

`xdm:starRating`
* is optional
* type: `integer`
* defined in this schema

### xdm:starRating Type


`integer`






## xdm:style
### Style

Captures the style of the vehicle, such as 2WD, 4WD, 2 Door Coupe, 4 Door Sedan, Convertible, etc.

`xdm:style`
* is optional
* type: `string`
* defined in this schema

### xdm:style Type


`string`






## xdm:trim
### Trim

Captures the trim level or series of the vehicle.

`xdm:trim`
* is optional
* type: `string`
* defined in this schema

### xdm:trim Type


`string`






## xdm:vehicleCategory
### Vehicle Category

Vehicle category such as sedan, coupe, sports, station wagon, hatchback, convertible, etc.

`xdm:vehicleCategory`
* is optional
* type: `string`
* defined in this schema

### xdm:vehicleCategory Type


`string`






## xdm:vin
### Vehicle Identification Number

Captures the vehicle identification number (VIN) of the vehicle.

`xdm:vin`
* is optional
* type: `string`
* defined in this schema

### xdm:vin Type


`string`






## xdm:year
### Year

Captures the model year of the vehicle.

`xdm:year`
* is optional
* type: `integer`
* defined in this schema

### xdm:year Type


`integer`





