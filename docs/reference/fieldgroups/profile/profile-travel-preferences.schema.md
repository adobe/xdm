
# Travel Preferences Schema

```
https://ns.adobe.com/xdm/mixins/profile/travel-preferences
```

Tracks a user's travel preferences, including home airport code, meal preferences, seating preferences, etc.

| [Abstract](../../../abstract.md) | [Extensible](../../../extensions.md) | [Status](../../../status.md) | [Identifiable](../../../id.md) | [Custom Properties](../../../extensions.md) | [Additional Properties](../../../extensions.md) | Defined In |
|----------------------------------|--------------------------------------|------------------------------|--------------------------------|---------------------------------------------|-------------------------------------------------|------------|
| Can be instantiated | Yes | Stable | No | Forbidden | Permitted | [fieldgroups/profile/profile-travel-preferences.schema.json](fieldgroups/profile/profile-travel-preferences.schema.json) |

## Travel Preferences Example
```json
{
  "xdm:seat": "window",
  "xdm:seatSection ": "forward",
  "xdm:meal": "regularMeal",
  "xdm:preferredDepartureAirportCode": "ORD",
  "xdm:ticketDelivery": "eTicket",
  "xdm:roomType": "king",
  "xdm:smokingRoom": false,
  "xdm:earlyCheckIn": true,
  "xdm:gym": true,
  "xdm:vehicleType": "standardSUV",
  "xdm:smoking": false,
  "xdm:manualTransmission": true
}
```

# Travel Preferences Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [xdm:travelPreferences](#xdmtravelpreferences) | `object` | Optional | Travel Preferences (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## xdm:travelPreferences

Captures details related to the users's travel preferences.

`xdm:travelPreferences`
* is optional
* type: `object`
* defined in this schema

### xdm:travelPreferences Type


`object` with following properties:


| Property | Type | Required |
|----------|------|----------|
| `xdm:crib`| boolean | Optional |
| `xdm:earlyCheckIn`| boolean | Optional |
| `xdm:foamPillows`| boolean | Optional |
| `xdm:gym`| boolean | Optional |
| `xdm:hasRestaurant`| boolean | Optional |
| `xdm:manualTransmission`| boolean | Optional |
| `xdm:meal`| string | Optional |
| `xdm:medicalAlerts`| string | Optional |
| `xdm:pool`| boolean | Optional |
| `xdm:preferredDepartureAirportCode`| string | Optional |
| `xdm:rollAwayBed`| boolean | Optional |
| `xdm:roomService`| boolean | Optional |
| `xdm:roomType`| string | Optional |
| `xdm:seat`| string | Optional |
| `xdm:seatSection`| string | Optional |
| `xdm:smokingRoom`| boolean | Optional |
| `xdm:smokingVehicle`| boolean | Optional |
| `xdm:ticketDelivery`| string | Optional |
| `xdm:vehicleType`| string | Optional |
| `xdm:visuallyImpairedAccessible`| boolean | Optional |
| `xdm:wheelchairAccessible`| boolean | Optional |



#### xdm:crib
##### Crib

Captures if the user requires a crib.

`xdm:crib`
* is optional
* type: `boolean`

##### xdm:crib Type


`boolean`







#### xdm:earlyCheckIn
##### Early Check-In

Flags if the user prefers a lodging property with early check-in available.

`xdm:earlyCheckIn`
* is optional
* type: `boolean`

##### xdm:earlyCheckIn Type


`boolean`







#### xdm:foamPillows
##### Foam Pillows

Captures if the user prefers foam pillows.

`xdm:foamPillows`
* is optional
* type: `boolean`

##### xdm:foamPillows Type


`boolean`







#### xdm:gym
##### Gym

Flags if the user prefers a lodging property with a gym/fitness room.

`xdm:gym`
* is optional
* type: `boolean`

##### xdm:gym Type


`boolean`







#### xdm:hasRestaurant
##### Has Restaurant

Flags if the user prefers a lodging property with a restaurant.

`xdm:hasRestaurant`
* is optional
* type: `boolean`

##### xdm:hasRestaurant Type


`boolean`







#### xdm:manualTransmission
##### Manual Transmission

Records if a user prefers a manual transmission instead of an automatic transmission.

`xdm:manualTransmission`
* is optional
* type: `boolean`

##### xdm:manualTransmission Type


`boolean`







#### xdm:meal
##### Meal

Tracks the user's meal preference, if provided.

`xdm:meal`
* is optional
* type: `enum`

The value of this property **must** be equal to one of the [known values below](#xdmtravelpreferences-known-values).

##### xdm:meal Known Values
| Value | Description |
|-------|-------------|
| `regularMeal` |  |
| `blandLowResidue` |  |
| `childMeal` |  |
| `diabeticMeal` |  |
| `fruitPlatter` |  |
| `glutenFreeMeal` |  |
| `infantBabyMeal` |  |
| `kosherMeal` |  |
| `lowCalorieMeal` |  |
| `lowSaltSodiumMeal` |  |
| `halalMeal` |  |
| `noSaltMeal` |  |
| `nonLactoseMeal` |  |
| `peanutFreeMeal` |  |
| `seafoodMeal` |  |
| `vegLactoOvo` |  |
| `vegetarian` |  |
| `vegetarianKosher` |  |
| `vegetarianRaw` |  |






#### xdm:medicalAlerts
##### Medical Alerts

Captures any medical alerts for the user.

`xdm:medicalAlerts`
* is optional
* type: `string`

##### xdm:medicalAlerts Type


`string`








#### xdm:pool
##### Pool

Flags if the user prefers a lodging property with a swimming pool.

`xdm:pool`
* is optional
* type: `boolean`

##### xdm:pool Type


`boolean`







#### xdm:preferredDepartureAirportCode
##### Preferred Departure Airport Code

Records the user's preferred home/departure airport code.

`xdm:preferredDepartureAirportCode`
* is optional
* type: `string`

##### xdm:preferredDepartureAirportCode Type


`string`


All instances must conform to this regular expression 
(test examples [here](https://regexr.com/?expression=%5E%5BA-Z%5D%7B3%7D%24)):
```regex
^[A-Z]{3}$
```








#### xdm:rollAwayBed
##### Roll Away Bed

Captures if the user requires a rollaway bed.

`xdm:rollAwayBed`
* is optional
* type: `boolean`

##### xdm:rollAwayBed Type


`boolean`







#### xdm:roomService
##### Room Service

Flags if the user prefers a lodging property with room service available.

`xdm:roomService`
* is optional
* type: `boolean`

##### xdm:roomService Type


`boolean`







#### xdm:roomType
##### Room Type

Tracks the user's preferred room type.

`xdm:roomType`
* is optional
* type: `enum`

The value of this property **must** be equal to one of the [known values below](#xdmtravelpreferences-known-values).

##### xdm:roomType Known Values
| Value | Description |
|-------|-------------|
| `noPreference` |  |
| `king` |  |
| `queen` |  |
| `double` |  |
| `twin` |  |
| `single` |  |
| `disability` |  |






#### xdm:seat
##### Seat

Captures the user's preferred seat type for flights.

`xdm:seat`
* is optional
* type: `enum`

The value of this property **must** be equal to one of the [known values below](#xdmtravelpreferences-known-values).

##### xdm:seat Known Values
| Value | Description |
|-------|-------------|
| `noPreference` |  |
| `aisle` |  |
| `window` |  |
| `middle` |  |






#### xdm:seatSection
##### Seat Section

Captures the user's preferred seat sectionfor flights.

`xdm:seatSection`
* is optional
* type: `enum`

The value of this property **must** be equal to one of the [known values below](#xdmtravelpreferences-known-values).

##### xdm:seatSection Known Values
| Value | Description |
|-------|-------------|
| `noPreference` |  |
| `forward` |  |
| `bulkhead` |  |
| `exitRow` |  |
| `rear` |  |






#### xdm:smokingRoom
##### Smoking Room

Flags if the user prefers a smoking room.

`xdm:smokingRoom`
* is optional
* type: `boolean`

##### xdm:smokingRoom Type


`boolean`







#### xdm:smokingVehicle
##### Smoking Vehicle

Flags if the user prefers a smoking vehicle.

`xdm:smokingVehicle`
* is optional
* type: `boolean`

##### xdm:smokingVehicle Type


`boolean`







#### xdm:ticketDelivery
##### Ticket Delivery

Defines the user's preferred ticket delivery method.

`xdm:ticketDelivery`
* is optional
* type: `enum`

The value of this property **must** be equal to one of the [known values below](#xdmtravelpreferences-known-values).

##### xdm:ticketDelivery Known Values
| Value | Description |
|-------|-------------|
| `eTicket` |  |
| `physical` |  |






#### xdm:vehicleType
##### Vehicle Type

Records the user's vehicle type preference.

`xdm:vehicleType`
* is optional
* type: `enum`

The value of this property **must** be equal to one of the [known values below](#xdmtravelpreferences-known-values).

##### xdm:vehicleType Known Values
| Value | Description |
|-------|-------------|
| `miniCar` |  |
| `economyCar` |  |
| `economyCarHybrid` |  |
| `compactCar` |  |
| `compactCarHybrid` |  |
| `intermediateCar` |  |
| `intermediateCarHybrid` |  |
| `standardCar` |  |
| `standardCarHybrid` |  |
| `fullSizeCar` |  |
| `fullSizeCarHybrid` |  |
| `intermediateSUV` |  |
| `miniVan` |  |
| `standardSUV` |  |
| `fullSizeSUV` |  |
| `fullSizePickup` |  |
| `premiumCar` |  |
| `luxuryCar` |  |
| `specializedVehicle` |  |






#### xdm:visuallyImpairedAccessible
##### Visually Impaired Accessible

Tracks if the user requres a visually impaired accessible room.

`xdm:visuallyImpairedAccessible`
* is optional
* type: `boolean`

##### xdm:visuallyImpairedAccessible Type


`boolean`







#### xdm:wheelchairAccessible
##### Wheelchair Accessible

Tracks if the user requres a wheelchair accessible room.

`xdm:wheelchairAccessible`
* is optional
* type: `boolean`

##### xdm:wheelchairAccessible Type


`boolean`









