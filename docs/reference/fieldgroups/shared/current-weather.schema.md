
# Current Weather Schema

```
https://ns.adobe.com/xdm/mixins/current-weather
```

Current weather conditions for a postal code.

| [Abstract](../../../abstract.md) | [Extensible](../../../extensions.md) | [Status](../../../status.md) | [Identifiable](../../../id.md) | [Custom Properties](../../../extensions.md) | [Additional Properties](../../../extensions.md) | Defined In |
|----------------------------------|--------------------------------------|------------------------------|--------------------------------|---------------------------------------------|-------------------------------------------------|------------|
| Can be instantiated | Yes | Experimental | No | Forbidden | Permitted | [fieldgroups/shared/current-weather.schema.json](fieldgroups/shared/current-weather.schema.json) |

## Current Weather Example
```json
{
  "xdm:weather": {
    "xdm:current": {
      "xdm:temperature": {
        "xdm:celsius": 10,
        "xdm:fahrenheit": 50
      },
      "xdm:temperatureChange24Hour": {
        "xdm:celsius": 1,
        "xdm:fahrenheit": 2
      },
      "xdm:temperatureFeelsLike": {
        "xdm:celsius": 12,
        "xdm:fahrenheit": 54
      },
      "xdm:precip1Hour": {
        "xdm:millimeters": 0,
        "xdm:inches": 0
      },
      "xdm:precip6Hour": {
        "xdm:millimeters": 0,
        "xdm:inches": 0
      },
      "xdm:precip24Hour": {
        "xdm:millimeters": 6,
        "xdm:inches": 0.25
      },
      "xdm:pressureChange": 5,
      "xdm:pressureMeanSeaLevel": 7.5,
      "xdm:snow1Hour": {
        "xdm:centimeters": 30,
        "xdm:inches": 12
      },
      "xdm:snow6Hour": {
        "xdm:centimeters": 30,
        "xdm:inches": 12
      },
      "xdm:snow24Hour": {
        "xdm:centimeters": 30,
        "xdm:inches": 12
      },
      "xdm:temperatureDewPoint": {
        "xdm:celsius": 3,
        "xdm:fahrenheit": 37
      },
      "xdm:temperatureMaxSince7Am": {
        "xdm:celsius": 24,
        "xdm:fahrenheit": 75
      },
      "xdm:temperatureMin24Hour": {
        "xdm:celsius": 2,
        "xdm:fahrenheit": 35
      },
      "xdm:uvIndex": "3",
      "xdm:windDirection": 17,
      "xdm:windGust": {
        "xdm:kilometersPerHour": 24,
        "xdm:milesPerHour": 15
      },
      "xdm:windSpeed": {
        "xdm:kilometersPerHour": 15,
        "xdm:milesPerHour": 9
      },
      "xdm:sunsetTime": 1656622539
    }
  }
}
```

# Current Weather Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [xdm:weather](#xdmweather) | `object` | Optional | Current Weather (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## xdm:weather


`xdm:weather`
* is optional
* type: `object`
* defined in this schema

### xdm:weather Type


`object` with following properties:


| Property | Type | Required |
|----------|------|----------|
| `xdm:current`| object | Optional |



#### xdm:current
##### Current

Current weather conditions for a postal code.

`xdm:current`
* is optional
* type: `object`

##### xdm:current Type

Unknown type `object`.

```json
{
  "title": "Current",
  "description": "Current weather conditions for a postal code.",
  "type": "object",
  "properties": {
    "xdm:temperature": {
      "title": "Temperature",
      "description": "Temperature in defined unit of measure. Range -140 to 140.",
      "$ref": "#/definitions/temperature"
    },
    "xdm:temperatureChange24Hour": {
      "title": "Temperature Change 24 hour",
      "description": "Change in temperature compared to the report 24 hours ago.",
      "$ref": "#/definitions/temperature"
    },
    "xdm:temperatureFeelsLike": {
      "title": "Temperature Feels Like",
      "description": "An apparent temperature. It represents what the air temperature “feels like” on exposed human skin due to the combined effect of the wind chill or heat index.\nWhen the temperature is 65°F or higher, the Feels Like value represents the computed Heat Index.  When the temperature is below 65°F, the Feels Like value represents the computed Wind Chill.\nRange -140 to 140.",
      "$ref": "#/definitions/temperature"
    },
    "xdm:precip1Hour": {
      "title": "Precipitation Last Hour",
      "description": "Rolling hour liquid precipitation amount. The amounts presented are a rolling time through the request time (now).",
      "$ref": "#/definitions/precipitation"
    },
    "xdm:precip6Hour": {
      "title": "Precipitation Last 6 Hours",
      "description": "Rolling six hour liquid precipitation amount. The amounts presented are a rolling time through the request time (now).",
      "$ref": "#/definitions/precipitation"
    },
    "xdm:precip24Hour": {
      "title": "Precipitation Last 24 Hours",
      "description": "Rolling twenty four hour liquid precipitation amount. The amounts presented are a rolling time through the request time (now).",
      "$ref": "#/definitions/precipitation"
    },
    "xdm:pressureChange": {
      "title": "Pressure Change ",
      "description": "Change in pressure in the last three hours in Millibars.",
      "type": "number"
    },
    "xdm:pressureMeanSeaLevel": {
      "title": "Pressure Mean Sea Level",
      "description": "Mean sea level pressure in millibars.  In other words, the average barometric pressure at sea level.\nRange - Millibars precise to 1/10th mb.",
      "type": "number"
    },
    "xdm:relativeHumidity": {
      "title": "Relative Humidity",
      "description": "The relative humidity of the air, which is defined as the ratio of the amount of water vapor in the air to the amount of vapor required to bring the air to saturation at a constant temperature. Relative humidity is always expressed as a percentage.\nRange - 0 to 100.",
      "type": "integer"
    },
    "xdm:snow1Hour": {
      "title": "Snow Last Hour",
      "description": "One hour snowfall amount.  The amounts presented are a rolling time through the request time (now).",
      "$ref": "#/definitions/snowfall"
    },
    "xdm:snow6Hour": {
      "title": "Snow Last 6 Hours",
      "description": "One hour snowfall amount.  The amounts presented are a rolling time through the request time (now).",
      "$ref": "#/definitions/snowfall"
    },
    "xdm:snow24Hour": {
      "title": "Snow 24 Hour",
      "description": "Twenty four hour snowfall amount.  The amounts presented are a rolling time through the request time (now).",
      "$ref": "#/definitions/snowfall"
    },
    "temperatureDewPoint": {
      "title": "Temperature Dew Point",
      "description": "The temperature which air must be cooled at constant pressure to reach saturation. The Dew Point is also an indirect measure of the humidity of the air. The Dew Point will never exceed the Temperature. When the Dewpoint and Temperature are equal, clouds or fog will typically form. The closer the values of Temperature and Dew Point, the higher the relative humidity. Range - -80 to 100 (°F) or -62 to 37 (°C).",
      "$ref": "#/definitions/temperature"
    },
    "xdm:temperatureMaxSince7Am": {
      "title": "Temperature Max Since 7 AM",
      "description": "The maximum temperature since 7 A.M. local time.",
      "$ref": "#/definitions/temperature"
    },
    "xdm:temperatureMin24Hour": {
      "title": "Temperature Min Last 24 Hours",
      "description": "The minimum temperature in the last 24 hours.  The 24 hour period is in reference to the request time (now). ",
      "$ref": "#/definitions/temperature"
    },
    "xdm:uvIndex": {
      "title": "UV Index",
      "description": "The Weather Channel's proprietary UV index.  The UV Index provides indices of the intensity of the solar radiation level and risk of skin damage due to exposure.\nRange - -2=Not Available, -1=No Report, 0-2=Low, 3-5=Moderate, 6-7=High, 8-10= Very High, 11-16=Extreme.",
      "type": "string",
      "enum": [
        "0",
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "10",
        "11",
        "12",
        "13",
        "14",
        "15",
        "16",
        "-2",
        "-1"
      ],
      "meta:enum": {
        "0": "Low",
        "1": "Low",
        "2": "Low",
        "3": "Moderate",
        "4": "Moderate",
        "5": "Moderate",
        "6": "High",
        "7": "High",
        "8": "Very High",
        "9": "Very High",
        "10": "Very High",
        "11": "Extreme",
        "12": "Extreme",
        "13": "Extreme",
        "14": "Extreme",
        "15": "Extreme",
        "16": "Extreme",
        "-2": "Not Available",
        "-1": "No Report"
      }
    },
    "xdm:windDirection": {
      "title": "Wind Direction",
      "description": "The magnetic wind direction from which the wind blows expressed in degrees. The magnetic direction varies from 0 to 359 degrees, where 0° indicates the North, 90° the East, 180° the South, 270° the West, and so forth.\nRange - 0<=wind_dire_deg<=350, in 10 degree intervals.",
      "type": "integer"
    },
    "xdm:windGust": {
      "title": "Wind Gust",
      "description": "This data field contains information about sudden and temporary variations of the average Wind Speed. The report always shows the maximum wind gust speed recorded during the observation period. It is a required display field if Wind Speed is shown. The speed of the gust can be expressed in miles per hour or kilometers per hour.",
      "$ref": "#/definitions/speed"
    },
    "xdm:windSpeed": {
      "title": "Wind Speed",
      "description": "The wind is treated as a vector; hence, winds must have direction and magnitude (speed). The wind information reported in the current conditions corresponds to a 10-minute average called the sustained wind speed. Sudden or brief variations in the wind speed are known as “wind gusts” and are reported in a separate data field. Wind directions are always expressed as \"from whence the wind blows\" meaning that a North wind blows from North to South. If you face North in a North wind the wind is at your face. Face southward and the North wind is at your back.",
      "$ref": "#/definitions/speed"
    },
    "xdm:sunsetTime": {
      "format": "date-time",
      "type": "string",
      "description": "Sunset time in UTC.",
      "title": "Sunset Time"
    }
  },
  "simpletype": "`object`"
}
```










# Current Weather Definitions

| Property | Type | Group |
|----------|------|-------|
| [xdm:celsius](#xdmcelsius) | `integer` | `https://ns.adobe.com/xdm/mixins/current-weather#/definitions/temperature` |
| [xdm:centimeters](#xdmcentimeters) | `number` | `https://ns.adobe.com/xdm/mixins/current-weather#/definitions/snowfall` |
| [xdm:fahrenheit](#xdmfahrenheit) | `integer` | `https://ns.adobe.com/xdm/mixins/current-weather#/definitions/temperature` |
| [xdm:inches](#xdminches) | `number` | `https://ns.adobe.com/xdm/mixins/current-weather#/definitions/distance` |
| [xdm:kilometers](#xdmkilometers) | `number` | `https://ns.adobe.com/xdm/mixins/current-weather#/definitions/distance` |
| [xdm:kilometersPerHour](#xdmkilometersperhour) | `integer` | `https://ns.adobe.com/xdm/mixins/current-weather#/definitions/speed` |
| [xdm:milesPerHour](#xdmmilesperhour) | `integer` | `https://ns.adobe.com/xdm/mixins/current-weather#/definitions/speed` |
| [xdm:millimeters](#xdmmillimeters) | `number` | `https://ns.adobe.com/xdm/mixins/current-weather#/definitions/precipitation` |

## xdm:celsius
### Celsius

Temperature in degrees Celsius

`xdm:celsius`
* is optional
* type: `integer`
* defined in this schema

### xdm:celsius Type


`integer`






## xdm:centimeters
### Centimeters

Snowfall in centimeters

`xdm:centimeters`
* is optional
* type: `number`
* defined in this schema

### xdm:centimeters Type


`number`






## xdm:fahrenheit
### Fahrenheit

Temperature in degrees Fahrenheit

`xdm:fahrenheit`
* is optional
* type: `integer`
* defined in this schema

### xdm:fahrenheit Type


`integer`






## xdm:inches
### Miles

Distance in miles

`xdm:inches`
* is optional
* type: `number`
* defined in this schema

### xdm:inches Type


`number`






## xdm:kilometers
### Kilometers

Distance in kilometers

`xdm:kilometers`
* is optional
* type: `number`
* defined in this schema

### xdm:kilometers Type


`number`






## xdm:kilometersPerHour
### Kilometers per Hour

Wind speed in kilometers per hour

`xdm:kilometersPerHour`
* is optional
* type: `integer`
* defined in this schema

### xdm:kilometersPerHour Type


`integer`






## xdm:milesPerHour
### Miles per Hour

Wind speed in miles per hour

`xdm:milesPerHour`
* is optional
* type: `integer`
* defined in this schema

### xdm:milesPerHour Type


`integer`






## xdm:millimeters
### Millimeters

Precipitation in millimeters

`xdm:millimeters`
* is optional
* type: `number`
* defined in this schema

### xdm:millimeters Type


`number`





