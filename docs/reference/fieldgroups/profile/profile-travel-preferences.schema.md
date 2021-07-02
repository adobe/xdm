
# Travel Preferences Schema

```
https://ns.adobe.com/xdm/mixins/profile/travel-preferences
```

Tracks a user's travel preferences, including home airport code, meal preferences, seating preferences, etc.

| [Abstract](../../../abstract.md) | [Extensible](../../../extensions.md) | [Status](../../../status.md) | [Identifiable](../../../id.md) | [Custom Properties](../../../extensions.md) | [Additional Properties](../../../extensions.md) | Defined In |
|----------------------------------|--------------------------------------|------------------------------|--------------------------------|---------------------------------------------|-------------------------------------------------|------------|
| Can be instantiated | Yes | Experimental | No | Forbidden | Permitted | [fieldgroups/profile/profile-travel-preferences.schema.json](fieldgroups/profile/profile-travel-preferences.schema.json) |

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
| [xdm:crib](#xdmcrib) | `boolean` | Optional | Travel Preferences (this schema) |
| [xdm:earlyCheckIn](#xdmearlycheckin) | `boolean` | Optional | Travel Preferences (this schema) |
| [xdm:foamPillows](#xdmfoampillows) | `boolean` | Optional | Travel Preferences (this schema) |
| [xdm:gym](#xdmgym) | `boolean` | Optional | Travel Preferences (this schema) |
| [xdm:hasRestaurant](#xdmhasrestaurant) | `boolean` | Optional | Travel Preferences (this schema) |
| [xdm:manualTransmission](#xdmmanualtransmission) | `boolean` | Optional | Travel Preferences (this schema) |
| [xdm:meal](#xdmmeal) | `enum` | Optional | Travel Preferences (this schema) |
| [xdm:medicalAlerts](#xdmmedicalalerts) | `string` | Optional | Travel Preferences (this schema) |
| [xdm:pool](#xdmpool) | `boolean` | Optional | Travel Preferences (this schema) |
| [xdm:preferredDepartureAirportCode](#xdmpreferreddepartureairportcode) | `string` | Optional | Travel Preferences (this schema) |
| [xdm:rollAwayBed](#xdmrollawaybed) | `boolean` | Optional | Travel Preferences (this schema) |
| [xdm:roomService](#xdmroomservice) | `boolean` | Optional | Travel Preferences (this schema) |
| [xdm:roomType](#xdmroomtype) | `enum` | Optional | Travel Preferences (this schema) |
| [xdm:seat](#xdmseat) | `enum` | Optional | Travel Preferences (this schema) |
| [xdm:seatSection ](#xdmseatsection) | `enum` | Optional | Travel Preferences (this schema) |
| [xdm:smokingRoom](#xdmsmokingroom) | `boolean` | Optional | Travel Preferences (this schema) |
| [xdm:smokingVehicle](#xdmsmokingvehicle) | `boolean` | Optional | Travel Preferences (this schema) |
| [xdm:ticketDelivery](#xdmticketdelivery) | `enum` | Optional | Travel Preferences (this schema) |
| [xdm:vehicleType](#xdmvehicletype) | `enum` | Optional | Travel Preferences (this schema) |
| [xdm:visuallyImpairedAccessible](#xdmvisuallyimpairedaccessible) | `boolean` | Optional | Travel Preferences (this schema) |
| [xdm:wheelchairAccessible](#xdmwheelchairaccessible) | `boolean` | Optional | Travel Preferences (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## xdm:crib
### Crib

Captures if the user requires a crib.

`xdm:crib`
* is optional
* type: `boolean`
* defined in this schema

### xdm:crib Type


`boolean`





## xdm:earlyCheckIn
### Early Check-In

Flags if the user prefers a lodging property with early check-in available.

`xdm:earlyCheckIn`
* is optional
* type: `boolean`
* defined in this schema

### xdm:earlyCheckIn Type


`boolean`





## xdm:foamPillows
### Foam Pillows

Captures if the user prefers foam pillows.

`xdm:foamPillows`
* is optional
* type: `boolean`
* defined in this schema

### xdm:foamPillows Type


`boolean`





## xdm:gym
### Gym

Flags if the user prefers a lodging property with a gym/fitness room.

`xdm:gym`
* is optional
* type: `boolean`
* defined in this schema

### xdm:gym Type


`boolean`





## xdm:hasRestaurant
### Has Restaurant

Flags if the user prefers a lodging property with a restaurant.

`xdm:hasRestaurant`
* is optional
* type: `boolean`
* defined in this schema

### xdm:hasRestaurant Type


`boolean`





## xdm:manualTransmission
### Manual Transmission

Records if a user prefers a manual transmission instead of an automatic transmission.

`xdm:manualTransmission`
* is optional
* type: `boolean`
* defined in this schema

### xdm:manualTransmission Type


`boolean`





## xdm:meal
### Meal

Tracks the user's meal preference, if provided.

`xdm:meal`
* is optional
* type: `enum`
* defined in this schema

The value of this property **must** be equal to one of the [known values below](#xdmmeal-known-values).

### xdm:meal Known Values
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




## xdm:medicalAlerts
### Medical Alerts

Captures any medical alerts for the user.

`xdm:medicalAlerts`
* is optional
* type: `string`
* defined in this schema

### xdm:medicalAlerts Type


`string`






## xdm:pool
### Pool

Flags if the user prefers a lodging property with a swimming pool.

`xdm:pool`
* is optional
* type: `boolean`
* defined in this schema

### xdm:pool Type


`boolean`





## xdm:preferredDepartureAirportCode
### Preferred Departure Airport Code

Records the user's preferred home/departure airport code.

`xdm:preferredDepartureAirportCode`
* is optional
* type: `string`
* defined in this schema

### xdm:preferredDepartureAirportCode Type


`string`


All instances must conform to this regular expression 
(test examples [here](https://regexr.com/?expression=%5E%5BA-Z%5D%7B3%7D%24)):
```regex
^[A-Z]{3}$
```






## xdm:rollAwayBed
### Roll Away Bed

Captures if the user requires a rollaway bed.

`xdm:rollAwayBed`
* is optional
* type: `boolean`
* defined in this schema

### xdm:rollAwayBed Type


`boolean`





## xdm:roomService
### Room Service

Flags if the user prefers a lodging property with room service available.

`xdm:roomService`
* is optional
* type: `boolean`
* defined in this schema

### xdm:roomService Type


`boolean`





## xdm:roomType
### Room Type

Tracks the user's preferred room type.

`xdm:roomType`
* is optional
* type: `enum`
* defined in this schema

The value of this property **must** be equal to one of the [known values below](#xdmroomtype-known-values).

### xdm:roomType Known Values
| Value | Description |
|-------|-------------|
| `noPreference` |  |
| `king` |  |
| `queen` |  |
| `double` |  |
| `twin` |  |
| `single` |  |
| `disability` |  |




## xdm:seat
### Seat

Captures the user's preferred seat type for flights.

`xdm:seat`
* is optional
* type: `enum`
* defined in this schema

The value of this property **must** be equal to one of the [known values below](#xdmseat-known-values).

### xdm:seat Known Values
| Value | Description |
|-------|-------------|
| `noPreference` |  |
| `aisle` |  |
| `window` |  |
| `middle` |  |




## xdm:seatSection 
### Seat Section

Captures the user's preferred seat sectionfor flights.

`xdm:seatSection `
* is optional
* type: `enum`
* defined in this schema

The value of this property **must** be equal to one of the [known values below](#xdmseatsection-known-values).

### xdm:seatSection  Known Values
| Value | Description |
|-------|-------------|
| `noPreference` |  |
| `forward` |  |
| `bulkhead` |  |
| `exitRow` |  |
| `rear` |  |




## xdm:smokingRoom
### Smoking Room

Flags if the user prefers a smoking room.

`xdm:smokingRoom`
* is optional
* type: `boolean`
* defined in this schema

### xdm:smokingRoom Type


`boolean`





## xdm:smokingVehicle
### Smoking Vehicle

Flags if the user prefers a smoking vehicle.

`xdm:smokingVehicle`
* is optional
* type: `boolean`
* defined in this schema

### xdm:smokingVehicle Type


`boolean`





## xdm:ticketDelivery
### Ticket Delivery

Defines the user's preferred ticket delivery method.

`xdm:ticketDelivery`
* is optional
* type: `enum`
* defined in this schema

The value of this property **must** be equal to one of the [known values below](#xdmticketdelivery-known-values).

### xdm:ticketDelivery Known Values
| Value | Description |
|-------|-------------|
| `eTicket` |  |
| `physical` |  |




## xdm:vehicleType
### Vehicle Type

Records the user's vehicle type preference.

`xdm:vehicleType`
* is optional
* type: `enum`
* defined in this schema

The value of this property **must** be equal to one of the [known values below](#xdmvehicletype-known-values).

### xdm:vehicleType Known Values
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




## xdm:visuallyImpairedAccessible
### Visually Impaired Accessible

Tracks if the user requres a visually impaired accessible room.

`xdm:visuallyImpairedAccessible`
* is optional
* type: `boolean`
* defined in this schema

### xdm:visuallyImpairedAccessible Type


`boolean`





## xdm:wheelchairAccessible
### Wheelchair Accessible

Tracks if the user requres a wheelchair accessible room.

`xdm:wheelchairAccessible`
* is optional
* type: `boolean`
* defined in this schema

### xdm:wheelchairAccessible Type


`boolean`




