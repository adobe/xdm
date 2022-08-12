
# Forecasted Weather Schema

```
https://ns.adobe.com/xdm/mixins/forecasted-weather
```

Forecasted weather conditions for a postal code.

| [Abstract](../../../abstract.md) | [Extensible](../../../extensions.md) | [Status](../../../status.md) | [Identifiable](../../../id.md) | [Custom Properties](../../../extensions.md) | [Additional Properties](../../../extensions.md) | Defined In |
|----------------------------------|--------------------------------------|------------------------------|--------------------------------|---------------------------------------------|-------------------------------------------------|------------|
| Can be instantiated | Yes | Experimental | No | Forbidden | Permitted | [fieldgroups/shared/forecasted-weather.schema.json](fieldgroups/shared/forecasted-weather.schema.json) |

## Forecasted Weather Example
```json
{
  "xdm:weather": {
    "xdm:forecast": {
      "xdm:day01Forecast": {
        "xdm:qpf": {
          "xdm:millimeters": 0,
          "xdm:inches": 0
        },
        "xdm:calendarDayTemperatureMax": {
          "xdm:celsius": 10,
          "xdm:fahrenheit": 50
        },
        "xdm:calendarDayTemperatureMin": {
          "xdm:celsius": 0,
          "xdm:fahrenheit": 32
        },
        "xdm:day": {
          "xdm:cloudCover": {
            "xdm:kilometers": 5,
            "xdm:miles": 3.1
          },
          "xdm:precipChance": 30,
          "xdm:precipType": "rain",
          "xdm:qpf": {
            "xdm:millimeters": 0,
            "xdm:inches": 0
          },
          "xdm:relativeHumidity": 30,
          "xdm:snowRange": "1-3\"",
          "xdm:temperature": {
            "xdm:celsius": 5,
            "xdm:fahrenheit": 41
          },
          "xdm:temperatureHeatIndex": {
            "xdm:celsius": 5,
            "xdm:fahrenheit": 41
          },
          "xdm:temperatureWindChill": {
            "xdm:celsius": 5,
            "xdm:fahrenheit": 41
          },
          "xdm:thunderIndex": 1,
          "xdm:windDirection": 17,
          "xdm:windGust": {
            "xdm:kilometersPerHour": 24,
            "xdm:milesPerHour": 15
          },
          "xdm:windSpeed": {
            "xdm:kilometersPerHour": 15,
            "xdm:milesPerHour": 9
          },
          "xdm:qpfSnow": {
            "xdm:centimeters": 0,
            "xdm:inches": 0
          },
          "xdm:uvIndex": {
            "xdm:_name": "UV_3",
            "xdm:value": "3"
          }
        },
        "xdm:night": {
          "xdm:cloudCover": {
            "xdm:kilometers": 5,
            "xdm:miles": 3.1
          },
          "xdm:precipChance": 30,
          "xdm:precipType": "rain",
          "xdm:qpf": {
            "xdm:millimeters": 0,
            "xdm:inches": 0
          },
          "xdm:relativeHumidity": 30,
          "xdm:snowRange": "1-3\"",
          "xdm:temperature": {
            "xdm:celsius": 5,
            "xdm:fahrenheit": 41
          },
          "xdm:temperatureHeatIndex": {
            "xdm:celsius": 5,
            "xdm:fahrenheit": 41
          },
          "xdm:temperatureWindChill": {
            "xdm:celsius": 5,
            "xdm:fahrenheit": 41
          },
          "xdm:thunderIndex": 1,
          "xdm:windDirection": 17,
          "xdm:windGust": {
            "xdm:kilometersPerHour": 24,
            "xdm:milesPerHour": 15
          },
          "xdm:windSpeed": {
            "xdm:kilometersPerHour": 15,
            "xdm:milesPerHour": 9
          },
          "xdm:qpfSnow": {
            "xdm:centimeters": 0,
            "xdm:inches": 0
          },
          "xdm:uvIndex": {
            "xdm:_name": "UV_3",
            "xdm:value": "3"
          }
        },
        "xdm:qpfSnow": {
          "xdm:centimeters": 0,
          "xdm:inches": 0
        }
      },
      "xdm:day02Forecast": {
        "xdm:qpf": {
          "xdm:millimeters": 0,
          "xdm:inches": 0
        },
        "xdm:calendarDayTemperatureMax": {
          "xdm:celsius": 10,
          "xdm:fahrenheit": 50
        },
        "xdm:calendarDayTemperatureMin": {
          "xdm:celsius": 0,
          "xdm:fahrenheit": 32
        },
        "xdm:day": {
          "xdm:cloudCover": {
            "xdm:kilometers": 5,
            "xdm:miles": 3.1
          },
          "xdm:precipChance": 30,
          "xdm:precipType": "rain",
          "xdm:qpf": {
            "xdm:millimeters": 0,
            "xdm:inches": 0
          },
          "xdm:relativeHumidity": 30,
          "xdm:snowRange": "1-3\"",
          "xdm:temperature": {
            "xdm:celsius": 5,
            "xdm:fahrenheit": 41
          },
          "xdm:temperatureHeatIndex": {
            "xdm:celsius": 5,
            "xdm:fahrenheit": 41
          },
          "xdm:temperatureWindChill": {
            "xdm:celsius": 5,
            "xdm:fahrenheit": 41
          },
          "xdm:thunderIndex": 1,
          "xdm:windDirection": 17,
          "xdm:windGust": {
            "xdm:kilometersPerHour": 24,
            "xdm:milesPerHour": 15
          },
          "xdm:windSpeed": {
            "xdm:kilometersPerHour": 15,
            "xdm:milesPerHour": 9
          },
          "xdm:qpfSnow": {
            "xdm:centimeters": 0,
            "xdm:inches": 0
          },
          "xdm:uvIndex": {
            "xdm:_name": "UV_3",
            "xdm:value": "3"
          }
        },
        "xdm:night": {
          "xdm:cloudCover": {
            "xdm:kilometers": 5,
            "xdm:miles": 3.1
          },
          "xdm:precipChance": 30,
          "xdm:precipType": "rain",
          "xdm:qpf": {
            "xdm:millimeters": 0,
            "xdm:inches": 0
          },
          "xdm:relativeHumidity": 30,
          "xdm:snowRange": "1-3\"",
          "xdm:temperature": {
            "xdm:celsius": 5,
            "xdm:fahrenheit": 41
          },
          "xdm:temperatureHeatIndex": {
            "xdm:celsius": 5,
            "xdm:fahrenheit": 41
          },
          "xdm:temperatureWindChill": {
            "xdm:celsius": 5,
            "xdm:fahrenheit": 41
          },
          "xdm:thunderIndex": 1,
          "xdm:windDirection": 17,
          "xdm:windGust": {
            "xdm:kilometersPerHour": 24,
            "xdm:milesPerHour": 15
          },
          "xdm:windSpeed": {
            "xdm:kilometersPerHour": 15,
            "xdm:milesPerHour": 9
          },
          "xdm:qpfSnow": {
            "xdm:centimeters": 0,
            "xdm:inches": 0
          },
          "xdm:uvIndex": {
            "xdm:_name": "UV_3",
            "xdm:value": "3"
          }
        },
        "xdm:qpfSnow": {
          "xdm:centimeters": 0,
          "xdm:inches": 0
        }
      },
      "xdm:day03Forecast": {
        "xdm:qpf": {
          "xdm:millimeters": 0,
          "xdm:inches": 0
        },
        "xdm:calendarDayTemperatureMax": {
          "xdm:celsius": 10,
          "xdm:fahrenheit": 50
        },
        "xdm:calendarDayTemperatureMin": {
          "xdm:celsius": 0,
          "xdm:fahrenheit": 32
        },
        "xdm:day": {
          "xdm:cloudCover": {
            "xdm:kilometers": 5,
            "xdm:miles": 3.1
          },
          "xdm:precipChance": 30,
          "xdm:precipType": "rain",
          "xdm:qpf": {
            "xdm:millimeters": 0,
            "xdm:inches": 0
          },
          "xdm:relativeHumidity": 30,
          "xdm:snowRange": "1-3\"",
          "xdm:temperature": {
            "xdm:celsius": 5,
            "xdm:fahrenheit": 41
          },
          "xdm:temperatureHeatIndex": {
            "xdm:celsius": 5,
            "xdm:fahrenheit": 41
          },
          "xdm:temperatureWindChill": {
            "xdm:celsius": 5,
            "xdm:fahrenheit": 41
          },
          "xdm:thunderIndex": 1,
          "xdm:windDirection": 17,
          "xdm:windGust": {
            "xdm:kilometersPerHour": 24,
            "xdm:milesPerHour": 15
          },
          "xdm:windSpeed": {
            "xdm:kilometersPerHour": 15,
            "xdm:milesPerHour": 9
          },
          "xdm:qpfSnow": {
            "xdm:centimeters": 0,
            "xdm:inches": 0
          },
          "xdm:uvIndex": {
            "xdm:_name": "UV_3",
            "xdm:value": "3"
          }
        },
        "xdm:night": {
          "xdm:cloudCover": {
            "xdm:kilometers": 5,
            "xdm:miles": 3.1
          },
          "xdm:precipChance": 30,
          "xdm:precipType": "rain",
          "xdm:qpf": {
            "xdm:millimeters": 0,
            "xdm:inches": 0
          },
          "xdm:relativeHumidity": 30,
          "xdm:snowRange": "1-3\"",
          "xdm:temperature": {
            "xdm:celsius": 5,
            "xdm:fahrenheit": 41
          },
          "xdm:temperatureHeatIndex": {
            "xdm:celsius": 5,
            "xdm:fahrenheit": 41
          },
          "xdm:temperatureWindChill": {
            "xdm:celsius": 5,
            "xdm:fahrenheit": 41
          },
          "xdm:thunderIndex": 1,
          "xdm:windDirection": 17,
          "xdm:windGust": {
            "xdm:kilometersPerHour": 24,
            "xdm:milesPerHour": 15
          },
          "xdm:windSpeed": {
            "xdm:kilometersPerHour": 15,
            "xdm:milesPerHour": 9
          },
          "xdm:qpfSnow": {
            "xdm:centimeters": 0,
            "xdm:inches": 0
          },
          "xdm:uvIndex": {
            "xdm:_name": "UV_3",
            "xdm:value": "3"
          }
        },
        "xdm:qpfSnow": {
          "xdm:centimeters": 0,
          "xdm:inches": 0
        }
      },
      "xdm:day05Forecast": {
        "xdm:qpf": {
          "xdm:millimeters": 0,
          "xdm:inches": 0
        },
        "xdm:calendarDayTemperatureMax": {
          "xdm:celsius": 10,
          "xdm:fahrenheit": 50
        },
        "xdm:calendarDayTemperatureMin": {
          "xdm:celsius": 0,
          "xdm:fahrenheit": 32
        },
        "xdm:day": {
          "xdm:cloudCover": {
            "xdm:kilometers": 5,
            "xdm:miles": 3.1
          },
          "xdm:precipChance": 30,
          "xdm:precipType": "rain",
          "xdm:qpf": {
            "xdm:millimeters": 0,
            "xdm:inches": 0
          },
          "xdm:relativeHumidity": 30,
          "xdm:snowRange": "1-3\"",
          "xdm:temperature": {
            "xdm:celsius": 5,
            "xdm:fahrenheit": 41
          },
          "xdm:temperatureHeatIndex": {
            "xdm:celsius": 5,
            "xdm:fahrenheit": 41
          },
          "xdm:temperatureWindChill": {
            "xdm:celsius": 5,
            "xdm:fahrenheit": 41
          },
          "xdm:thunderIndex": 1,
          "xdm:windDirection": 17,
          "xdm:windGust": {
            "xdm:kilometersPerHour": 24,
            "xdm:milesPerHour": 15
          },
          "xdm:windSpeed": {
            "xdm:kilometersPerHour": 15,
            "xdm:milesPerHour": 9
          },
          "xdm:qpfSnow": {
            "xdm:centimeters": 0,
            "xdm:inches": 0
          },
          "xdm:uvIndex": {
            "xdm:_name": "UV_3",
            "xdm:value": "3"
          }
        },
        "xdm:night": {
          "xdm:cloudCover": {
            "xdm:kilometers": 5,
            "xdm:miles": 3.1
          },
          "xdm:precipChance": 30,
          "xdm:precipType": "rain",
          "xdm:qpf": {
            "xdm:millimeters": 0,
            "xdm:inches": 0
          },
          "xdm:relativeHumidity": 30,
          "xdm:snowRange": "1-3\"",
          "xdm:temperature": {
            "xdm:celsius": 5,
            "xdm:fahrenheit": 41
          },
          "xdm:temperatureHeatIndex": {
            "xdm:celsius": 5,
            "xdm:fahrenheit": 41
          },
          "xdm:temperatureWindChill": {
            "xdm:celsius": 5,
            "xdm:fahrenheit": 41
          },
          "xdm:thunderIndex": 1,
          "xdm:windDirection": 17,
          "xdm:windGust": {
            "xdm:kilometersPerHour": 24,
            "xdm:milesPerHour": 15
          },
          "xdm:windSpeed": {
            "xdm:kilometersPerHour": 15,
            "xdm:milesPerHour": 9
          },
          "xdm:qpfSnow": {
            "xdm:centimeters": 0,
            "xdm:inches": 0
          },
          "xdm:uvIndex": {
            "xdm:_name": "UV_3",
            "xdm:value": "3"
          }
        },
        "xdm:qpfSnow": {
          "xdm:centimeters": 0,
          "xdm:inches": 0
        }
      },
      "xdm:day07Forecast": {
        "xdm:qpf": {
          "xdm:millimeters": 0,
          "xdm:inches": 0
        },
        "xdm:calendarDayTemperatureMax": {
          "xdm:celsius": 10,
          "xdm:fahrenheit": 50
        },
        "xdm:calendarDayTemperatureMin": {
          "xdm:celsius": 0,
          "xdm:fahrenheit": 32
        },
        "xdm:windDirection": 17,
        "xdm:windSpeed": {
          "xdm:kilometersPerHour": 15,
          "xdm:milesPerHour": 9
        },
        "xdm:qpfSnow": {
          "xdm:centimeters": 0,
          "xdm:inches": 0
        },
        "xdm:cloudCover": {
          "xdm:kilometers": 5,
          "xdm:miles": 3.1
        },
        "xdm:uvIndex": {
          "xdm:_name": "UV_3",
          "xdm:value": "3"
        }
      },
      "xdm:day10Forecast": {
        "xdm:qpf": {
          "xdm:millimeters": 0,
          "xdm:inches": 0
        },
        "xdm:calendarDayTemperatureMax": {
          "xdm:celsius": 10,
          "xdm:fahrenheit": 50
        },
        "xdm:calendarDayTemperatureMin": {
          "xdm:celsius": 0,
          "xdm:fahrenheit": 32
        },
        "xdm:windDirection": 17,
        "xdm:windSpeed": {
          "xdm:kilometersPerHour": 15,
          "xdm:milesPerHour": 9
        },
        "xdm:qpfSnow": {
          "xdm:centimeters": 0,
          "xdm:inches": 0
        },
        "xdm:cloudCover": {
          "xdm:kilometers": 5,
          "xdm:miles": 3.1
        },
        "xdm:uvIndex": {
          "xdm:_name": "UV_3",
          "xdm:value": "3"
        }
      },
      "xdm:day14Forecast": {
        "xdm:qpf": {
          "xdm:millimeters": 0,
          "xdm:inches": 0
        },
        "xdm:calendarDayTemperatureMax": {
          "xdm:celsius": 10,
          "xdm:fahrenheit": 50
        },
        "xdm:calendarDayTemperatureMin": {
          "xdm:celsius": 0,
          "xdm:fahrenheit": 32
        },
        "xdm:windDirection": 17,
        "xdm:windSpeed": {
          "xdm:kilometersPerHour": 15,
          "xdm:milesPerHour": 9
        },
        "xdm:qpfSnow": {
          "xdm:centimeters": 0,
          "xdm:inches": 0
        },
        "xdm:cloudCover": {
          "xdm:kilometers": 5,
          "xdm:miles": 3.1
        },
        "xdm:uvIndex": {
          "xdm:_name": "UV_3",
          "xdm:value": "3"
        }
      }
    }
  }
}
```

# Forecasted Weather Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [xdm:weather](#xdmweather) | `object` | Optional | Forecasted Weather (this schema) |
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
| `xdm:forecast`| object | Optional |



#### xdm:forecast
##### Forecast

Forecasted weather at the time the event was generated.

`xdm:forecast`
* is optional
* type: `object`

##### xdm:forecast Type

Unknown type `object`.

```json
{
  "title": "Forecast",
  "description": "Forecasted weather at the time the event was generated.",
  "type": "object",
  "properties": {
    "xdm:day01Forecast": {
      "$ref": "#/definitions/shortRange",
      "description": "Weather forecast for one day.",
      "title": "Day 1 Forecast"
    },
    "xdm:day02Forecast": {
      "$ref": "#/definitions/shortRange",
      "description": "Weather forecast for two days.",
      "title": "Day 2 Forecast"
    },
    "xdm:day03Forecast": {
      "$ref": "#/definitions/shortRange",
      "description": "Weather forecast for three days.",
      "title": "Day 3 Forecast"
    },
    "xdm:day05Forecast": {
      "$ref": "#/definitions/shortRange",
      "description": "Weather forecast for five days.",
      "title": "Day 5 Forecast"
    },
    "xdm:day07Forecast": {
      "$ref": "#/definitions/longRange",
      "description": "Weather forecast for seven days.",
      "title": "Day 7 Forecast"
    },
    "xdm:day10Forecast": {
      "$ref": "#/definitions/longRange",
      "description": "Weather forecast for ten days.",
      "title": "Day 10 Forecast"
    },
    "xdm:day14Forecast": {
      "$ref": "#/definitions/longRange",
      "description": "Weather forecast for fourteen days.",
      "title": "Day 14 Forecast"
    }
  },
  "simpletype": "`object`"
}
```










# Forecasted Weather Definitions

| Property | Type | Group |
|----------|------|-------|
| [cloudCover](#cloudcover) | reference | `https://ns.adobe.com/xdm/mixins/forecasted-weather#/definitions/dayPart` |
| [precipChance](#precipchance) | `integer` | `https://ns.adobe.com/xdm/mixins/forecasted-weather#/definitions/dayPart` |
| [precipType](#preciptype) | `enum` | `https://ns.adobe.com/xdm/mixins/forecasted-weather#/definitions/dayPart` |
| [qpf](#qpf) | reference | `https://ns.adobe.com/xdm/mixins/forecasted-weather#/definitions/dayPart` |
| [qpfSnow](#qpfsnow) | reference | `https://ns.adobe.com/xdm/mixins/forecasted-weather#/definitions/dayPart` |
| [relativeHumidity](#relativehumidity) | `integer` | `https://ns.adobe.com/xdm/mixins/forecasted-weather#/definitions/dayPart` |
| [snowRange](#snowrange) | `string` | `https://ns.adobe.com/xdm/mixins/forecasted-weather#/definitions/dayPart` |
| [temperature](#temperature) | reference | `https://ns.adobe.com/xdm/mixins/forecasted-weather#/definitions/dayPart` |
| [temperatureHeatIndex](#temperatureheatindex) | reference | `https://ns.adobe.com/xdm/mixins/forecasted-weather#/definitions/dayPart` |
| [temperatureWindChill](#temperaturewindchill) | reference | `https://ns.adobe.com/xdm/mixins/forecasted-weather#/definitions/dayPart` |
| [thunderIndex](#thunderindex) | `integer` | `https://ns.adobe.com/xdm/mixins/forecasted-weather#/definitions/dayPart` |
| [uvIndex](#uvindex) | `enum` | `https://ns.adobe.com/xdm/mixins/forecasted-weather#/definitions/dayPart` |
| [windDirection](#winddirection) | `integer` | `https://ns.adobe.com/xdm/mixins/forecasted-weather#/definitions/dayPart` |
| [windGust](#windgust) | reference | `https://ns.adobe.com/xdm/mixins/forecasted-weather#/definitions/dayPart` |
| [windSpeed](#windspeed) | reference | `https://ns.adobe.com/xdm/mixins/forecasted-weather#/definitions/dayPart` |
| [xdm:calendarDayTemperatureMax](#xdmcalendardaytemperaturemax) | reference | `https://ns.adobe.com/xdm/mixins/forecasted-weather#/definitions/longRange` |
| [xdm:calendarDayTemperatureMin](#xdmcalendardaytemperaturemin) | reference | `https://ns.adobe.com/xdm/mixins/forecasted-weather#/definitions/longRange` |
| [xdm:cloudCover](#xdmcloudcover) | reference | `https://ns.adobe.com/xdm/mixins/forecasted-weather#/definitions/longRange` |
| [xdm:day](#xdmday) | reference | `https://ns.adobe.com/xdm/mixins/forecasted-weather#/definitions/shortRange` |
| [xdm:inches](#xdminches) | `number` | `https://ns.adobe.com/xdm/mixins/forecasted-weather#/definitions/distance` |
| [xdm:kilometers](#xdmkilometers) | `number` | `https://ns.adobe.com/xdm/mixins/forecasted-weather#/definitions/distance` |
| [xdm:night](#xdmnight) | reference | `https://ns.adobe.com/xdm/mixins/forecasted-weather#/definitions/shortRange` |
| [xdm:qpf](#xdmqpf) | reference | `https://ns.adobe.com/xdm/mixins/forecasted-weather#/definitions/longRange` |
| [xdm:qpfSnow](#xdmqpfsnow) | reference | `https://ns.adobe.com/xdm/mixins/forecasted-weather#/definitions/longRange` |
| [xdm:uvIndex](#xdmuvindex) | `enum` | `https://ns.adobe.com/xdm/mixins/forecasted-weather#/definitions/longRange` |
| [xdm:windDirection](#xdmwinddirection) | `integer` | `https://ns.adobe.com/xdm/mixins/forecasted-weather#/definitions/longRange` |
| [xdm:windSpeed](#xdmwindspeed) | reference | `https://ns.adobe.com/xdm/mixins/forecasted-weather#/definitions/longRange` |

## cloudCover
### Cloud Cover

Daytime average cloud cover expressed as a percentage.

`cloudCover`
* is optional
* type: reference
* defined in this schema

### cloudCover Type


* []() – `#/definitions/distance`





## precipChance
### Precipitation Chance

Probability that there will be precipitation (percentage).

`precipChance`
* is optional
* type: `integer`
* defined in this schema

### precipChance Type


`integer`






## precipType
### Precipitation Type

The form of precipitation that could fall (rain, snow, sleet, etc).

`precipType`
* is optional
* type: `enum`
* defined in this schema

The value of this property **must** be equal to one of the [known values below](#preciptype-known-values).

### precipType Known Values
| Value | Description |
|-------|-------------|
| `rain` |  |
| `snow` |  |
| `precip` |  |




## qpf
### QPF

The forecasted measurable precipitation (liquid or liquid equivalent) during the 12 or 24 hour period. Measured in millimeters.

`qpf`
* is optional
* type: reference
* defined in this schema

### qpf Type


* []() – `https://ns.adobe.com/xdm/mixins/current-weather#/definitions/precipitation`





## qpfSnow
### QPF Snow

The forecasted measurable precipitation as snow during the 12 or 24 hour forecast period. Measured in centimeters.

`qpfSnow`
* is optional
* type: reference
* defined in this schema

### qpfSnow Type


* []() – `https://ns.adobe.com/xdm/mixins/current-weather#/definitions/snowfall`





## relativeHumidity
### Relative Humidity

The relative humidity of the air, which is defined as the ratio of the amount of water vapor in the air to the amount of vapor required to bring the air to saturation at a constant temperature. Relative humidity is always expressed as a percentage.
Range - 0 to 100.

`relativeHumidity`
* is optional
* type: `integer`
* defined in this schema

### relativeHumidity Type


`integer`






## snowRange
### Snow Range

Bucket of potential snowfall (1-3”, 3-6” etc).

`snowRange`
* is optional
* type: `string`
* defined in this schema

### snowRange Type


`string`






## temperature
### Temperature

Temperature in defined unit of measure. Range -140 to 140.

`temperature`
* is optional
* type: reference
* defined in this schema

### temperature Type


* []() – `https://ns.adobe.com/xdm/mixins/current-weather#/definitions/temperature`





## temperatureHeatIndex
### Temperature Heat Index

Temperature as it would feel to a person exposed based on temperature and humidity.

`temperatureHeatIndex`
* is optional
* type: reference
* defined in this schema

### temperatureHeatIndex Type


* []() – `https://ns.adobe.com/xdm/mixins/current-weather#/definitions/temperature`





## temperatureWindChill
### Temperature Wind Chill

Temperature as it would feel to a person exposed based on temperature and wind speed.

`temperatureWindChill`
* is optional
* type: reference
* defined in this schema

### temperatureWindChill Type


* []() – `https://ns.adobe.com/xdm/mixins/current-weather#/definitions/temperature`





## thunderIndex
### Thunder Index

Index of the probability of thunderstorms impacting an area. 0 (no thunder to 5 (high risk of severe thunderstorms).

`thunderIndex`
* is optional
* type: `integer`
* defined in this schema

### thunderIndex Type


`integer`






## uvIndex
### UV Index

Maximum UV index for the 12 hour forecast period.

`uvIndex`
* is optional
* type: `enum`
* defined in this schema

The value of this property **must** be equal to one of the [known values below](#uvindex-known-values).

### uvIndex Known Values
| Value | Description |
|-------|-------------|
| `0` | Low |
| `1` | Low |
| `2` | Low |
| `3` | Moderate |
| `4` | Moderate |
| `5` | Moderate |
| `6` | High |
| `7` | High |
| `8` | Very High |
| `9` | Very High |
| `10` | Very High |
| `11` | Extreme |
| `12` | Extreme |
| `13` | Extreme |
| `14` | Extreme |
| `15` | Extreme |
| `16` | Extreme |
| `-2` | Not Available |
| `-1` | No Report |




## windDirection
### Wind Direction

The magnetic wind direction from which the wind blows expressed in degrees. The magnetic direction varies from 0 to 359 degrees, where 0° indicates the North, 90° the East, 180° the South, 270° the West, and so forth.
Range - 0<=wind_dire_deg<=350, in 10 degree intervals.

`windDirection`
* is optional
* type: `integer`
* defined in this schema

### windDirection Type


`integer`






## windGust
### Wind Gust

This data field contains information about sudden and temporary variations of the average Wind Speed. The report always shows the maximum wind gust speed recorded during the observation period. It is a required display field if Wind Speed is shown. The speed of the gust can be expressed in miles per hour or kilometers per hour.

`windGust`
* is optional
* type: reference
* defined in this schema

### windGust Type


* []() – `https://ns.adobe.com/xdm/mixins/current-weather#/definitions/speed`





## windSpeed
### Wind Speed

The wind is treated as a vector; hence, winds must have direction and magnitude (speed). The wind information reported in the current conditions corresponds to a 10-minute average called the sustained wind speed. Sudden or brief variations in the wind speed are known as “wind gusts” and are reported in a separate data field. Wind directions are always expressed as "from whence the wind blows" meaning that a North wind blows from North to South. If you face North in a North wind the wind is at your face. Face southward and the North wind is at your back.

`windSpeed`
* is optional
* type: reference
* defined in this schema

### windSpeed Type


* []() – `https://ns.adobe.com/xdm/mixins/current-weather#/definitions/speed`





## xdm:calendarDayTemperatureMax
### Calendar Day Temperature Max

The midnight to midnight daily maximum temperature for the given day.

`xdm:calendarDayTemperatureMax`
* is optional
* type: reference
* defined in this schema

### xdm:calendarDayTemperatureMax Type


* []() – `https://ns.adobe.com/xdm/mixins/current-weather#/definitions/temperature`





## xdm:calendarDayTemperatureMin
### Calendar Day Temperature Min

The midnight to midnight daily minimum temperature for the given day.

`xdm:calendarDayTemperatureMin`
* is optional
* type: reference
* defined in this schema

### xdm:calendarDayTemperatureMin Type


* []() – `https://ns.adobe.com/xdm/mixins/current-weather#/definitions/temperature`





## xdm:cloudCover
### Cloud Cover

Daytime average cloud cover expressed as a percentage.

`xdm:cloudCover`
* is optional
* type: reference
* defined in this schema

### xdm:cloudCover Type


* []() – `#/definitions/distance`





## xdm:day
### Day

Weather information for a daytime period.

`xdm:day`
* is optional
* type: reference
* defined in this schema

### xdm:day Type


* []() – `#/definitions/dayPart`





## xdm:inches
### Miles

Distance in miles.

`xdm:inches`
* is optional
* type: `number`
* defined in this schema

### xdm:inches Type


`number`






## xdm:kilometers
### Kilometers

Distance in kilometers.

`xdm:kilometers`
* is optional
* type: `number`
* defined in this schema

### xdm:kilometers Type


`number`






## xdm:night
### Night

Weather information for a nighttime period.

`xdm:night`
* is optional
* type: reference
* defined in this schema

### xdm:night Type


* []() – `#/definitions/dayPart`





## xdm:qpf
### QPF

The forecasted measurable precipitation (liquid or liquid equivalent) during the 24 hour period.

`xdm:qpf`
* is optional
* type: reference
* defined in this schema

### xdm:qpf Type


* []() – `https://ns.adobe.com/xdm/mixins/current-weather#/definitions/precipitation`





## xdm:qpfSnow
### QPF Snow

The forecasted measurable precipitation as snow during the 12 or 24 hour forecast period. Measured in centimeters.

`xdm:qpfSnow`
* is optional
* type: reference
* defined in this schema

### xdm:qpfSnow Type


* []() – `https://ns.adobe.com/xdm/mixins/current-weather#/definitions/snowfall`





## xdm:uvIndex
### UV Index

Maximum UV index for the 12 hour forecast period.

`xdm:uvIndex`
* is optional
* type: `enum`
* defined in this schema

The value of this property **must** be equal to one of the [known values below](#xdmuvindex-known-values).

### xdm:uvIndex Known Values
| Value | Description |
|-------|-------------|
| `0` | Low |
| `1` | Low |
| `2` | Low |
| `3` | Moderate |
| `4` | Moderate |
| `5` | Moderate |
| `6` | High |
| `7` | High |
| `8` | Very High |
| `9` | Very High |
| `10` | Very High |
| `11` | Extreme |
| `12` | Extreme |
| `13` | Extreme |
| `14` | Extreme |
| `15` | Extreme |
| `16` | Extreme |
| `-2` | Not Available |
| `-1` | No Report |




## xdm:windDirection
### Wind Direction

Average wind direction in magnetic notation.

`xdm:windDirection`
* is optional
* type: `integer`
* defined in this schema

### xdm:windDirection Type


`integer`






## xdm:windSpeed
### Wind Speed

The forecast of the maximum sustained wind speed over the 12 hour forecast period.
The wind is treated as a vector; hence, winds must have direction and magnitude (speed). The wind information reported in the forecast corresponds to a 10-minute average called the sustained wind speed. Sudden or brief variations in the wind speed are known as “wind gusts” and are reported in a separate data field. Wind directions are always expressed as "from whence the wind blows" meaning that a North wind blows from North to South. If you face North in a North wind the wind is at your face. Face southward and the North wind is at your back.

`xdm:windSpeed`
* is optional
* type: reference
* defined in this schema

### xdm:windSpeed Type


* []() – `https://ns.adobe.com/xdm/mixins/current-weather#/definitions/speed`




