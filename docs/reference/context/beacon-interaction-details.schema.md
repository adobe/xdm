
# Beacon Schema

```
https://ns.adobe.com/xdm/context/beacon-interaction-details
```

Beacon is a wireless device that communicates identity information to mobile applications as mobile devices come within range.

| [Abstract](../../abstract.md) | [Extensible](../../extensions.md) | [Status](../../status.md) | [Identifiable](../../id.md) | [Custom Properties](../../extensions.md) | [Additional Properties](../../extensions.md) | Defined In |
|-------------------------------|-----------------------------------|---------------------------|-----------------------------|------------------------------------------|----------------------------------------------|------------|
| Can be instantiated | Yes | Experimental | No | Forbidden | Permitted | [context/beacon-interaction-details.schema.json](context/beacon-interaction-details.schema.json) |
## Schema Hierarchy

* Beacon `https://ns.adobe.com/xdm/context/beacon-interaction-details`
  * [Extensibility base schema](../common/extensible.schema.md) `https://ns.adobe.com/xdm/common/extensible`


## Beacon Example
```json
{
  "xdm:proximityUUID": "dd0094a0-52bb-4d3a-ab15-fcccb9b9b48e",
  "xdm:beaconMajor": 100,
  "xdm:beaconMinor": 23,
  "xdm:proximity": "near"
}
```

# Beacon Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [xdm:beaconMajor](#xdmbeaconmajor) | `number` | Optional | Beacon (this schema) |
| [xdm:beaconMinor](#xdmbeaconminor) | `number` | Optional | Beacon (this schema) |
| [xdm:proximity](#xdmproximity) | `enum` | Optional | Beacon (this schema) |
| [xdm:proximityUUID](#xdmproximityuuid) | `string` | Optional | Beacon (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## xdm:beaconMajor
### Beacon major

Major values identify and distinguish a group and unsigned integer values between 1 and 65,535.

`xdm:beaconMajor`
* is optional
* type: `number`
* defined in this schema

### xdm:beaconMajor Type


`number`






## xdm:beaconMinor
### Beacon Minor

Minor values identify and distinguish an individual and unsigned integer values between 1 and 65,535.

`xdm:beaconMinor`
* is optional
* type: `number`
* defined in this schema

### xdm:beaconMinor Type


`number`






## xdm:proximity
### Proximity to beacon

Estimated distance from the beacon.

`xdm:proximity`
* is optional
* type: `enum`
* defined in this schema

The value of this property **must** be equal to one of the [known values below](#xdmproximity-known-values).

### xdm:proximity Known Values
| Value | Description |
|-------|-------------|
| `immediate` | Within a few centimeter. |
| `near` | Within a couple of meters. |
| `far` | Greater than 10 meters away. |
| `unknown` | Not able to ascertain distance, signal likely very weak. |




## xdm:proximityUUID
### Proximity UUID

A proximity UUID (Universally Unique IDentifier) is a special type of identifier used to distinguish beacons in your network from all other beacons in networks outside your control. The proximity UUID is configured into a beacon, to be transmitted to mobile devices in range to identify an organizations beacons.

`xdm:proximityUUID`
* is optional
* type: `string`
* defined in this schema

### xdm:proximityUUID Type


`string`





