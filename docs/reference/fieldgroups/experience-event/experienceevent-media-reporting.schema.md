
# MediaReporting Interaction Details  Schema

```
https://ns.adobe.com/xdm/mixins/experienceevent-media-reporting
```

Track interactions with media reporting.

| [Abstract](../../../abstract.md) | [Extensible](../../../extensions.md) | [Status](../../../status.md) | [Identifiable](../../../id.md) | [Custom Properties](../../../extensions.md) | [Additional Properties](../../../extensions.md) | Defined In |
|----------------------------------|--------------------------------------|------------------------------|--------------------------------|---------------------------------------------|-------------------------------------------------|------------|
| Can be instantiated | Yes | Experimental | No | Forbidden | Permitted | [fieldgroups/experience-event/experienceevent-media-reporting.schema.json](fieldgroups/experience-event/experienceevent-media-reporting.schema.json) |

## MediaReporting Interaction Details  Example
```json
{
  "xdm:mediaReporting": {
    "xdm:sessionDetails": {
      "xdm:ID": "1482236761294786918253",
      "xdm:name": "123456789",
      "xdm:length": 100,
      "xdm:contentType": "VOD",
      "xdm:playerName": "playerName",
      "xdm:channel": "channel"
    },
    "xdm:advertisingDetails": {
      "xdm:ID": "123456789",
      "xdm:length": 100,
      "xdm:podPosition": 1,
      "xdm:playerName": "playerName",
      "xdm:isCompleted": false,
      "xdm:isStarted": false
    },
    "xdm:advertisingPodDetails": {
      "xdm:index": 2,
      "xdm:second": 123,
      "xdm:adBreakID": "123"
    },
    "xdm:chapterDetails": {
      "xdm:length": 100,
      "xdm:offset": 50,
      "xdm:index": 2,
      "xdm:isStarted": false,
      "xdm:isCompleted": false,
      "xdm:timePlayed": 70
    },
    "xdm:qoeDataDetails": {
      "xdm:bitrateAverageBucket": "800-899"
    },
    "xdm:states": [
      {
        "xdm:name": "pictureInPicture",
        "xdm:set": true,
        "xdm:count": 2,
        "xdm:time": 100
      }
    ],
    "xdm:implementationDetails": {
      "xdm:version": "2.7.0"
    }
  }
}
```

# MediaReporting Interaction Details  Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [xdm:mediaReporting](#xdmmediareporting) | `object` | Optional | MediaReporting Interaction Details  (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## xdm:mediaReporting

Media Reporting related fields.

`xdm:mediaReporting`
* is optional
* type: `object`
* defined in this schema

### xdm:mediaReporting Type


`object` with following properties:


| Property | Type | Required |
|----------|------|----------|
| `xdm:advertisingDetails`|  | Optional |
| `xdm:advertisingPodDetails`|  | Optional |
| `xdm:chapterDetails`|  | Optional |
| `xdm:implementationDetails`|  | Optional |
| `xdm:qoeDataDetails`|  | Optional |
| `xdm:sessionDetails`|  | **Required** |
| `xdm:states`| array | Optional |



#### xdm:advertisingDetails
##### Advertising Details

Advertising details information related to the experience event.

`xdm:advertisingDetails`
* is optional
* type: reference

##### xdm:advertisingDetails Type


* []() – `https://ns.adobe.com/xdm/datatypes/advertisingDetails`







#### xdm:advertisingPodDetails
##### Advertising Pod Details

Advertising pod details information related to the experience event.

`xdm:advertisingPodDetails`
* is optional
* type: reference

##### xdm:advertisingPodDetails Type


* []() – `https://ns.adobe.com/xdm/datatypes/advertisingPodDetails`







#### xdm:chapterDetails
##### Chapter Details

Chapter details information related to the experience event.

`xdm:chapterDetails`
* is optional
* type: reference

##### xdm:chapterDetails Type


* []() – `https://ns.adobe.com/xdm/datatypes/chapterDetails`







#### xdm:implementationDetails
##### Implementation Details

Details about the SDK, library, or service used in an application or web page implementation of a service.

`xdm:implementationDetails`
* is optional
* type: reference

##### xdm:implementationDetails Type


* []() – `https://ns.adobe.com/xdm/context/implementationdetails`







#### xdm:qoeDataDetails
##### Qoe Data Details

Qoe data details information related to the experience event.

`xdm:qoeDataDetails`
* is optional
* type: reference

##### xdm:qoeDataDetails Type


* []() – `https://ns.adobe.com/xdm/datatypes/qoeDataDetails`







#### xdm:sessionDetails
##### Session Details

Session details information related to the experience event.

`xdm:sessionDetails`
* is **required**
* type: reference

##### xdm:sessionDetails Type


* []() – `https://ns.adobe.com/xdm/datatypes/sessionDetails`







#### xdm:states
##### List Of States

The list of states.

`xdm:states`
* is optional
* type: reference


##### xdm:states Type


Array type: reference

All items must be of the type:
* []() – `https://ns.adobe.com/xdm/datatypes/playerStateData`












