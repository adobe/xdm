
# Adobe Analytics ExperienceEvent Full Extension Schema

```
https://ns.adobe.com/experience/analytics/experienceevent-all
```

Adobe Analytics ExperienceEvent full extension. Contains all Solution added fields.

| [Abstract](../../../../abstract.md) | [Extensible](../../../../extensions.md) | [Status](../../../../status.md) | [Identifiable](../../../../id.md) | [Custom Properties](../../../../extensions.md) | [Additional Properties](../../../../extensions.md) | Defined In |
|-------------------------------------|-----------------------------------------|---------------------------------|-----------------------------------|------------------------------------------------|----------------------------------------------------|------------|
| Can be instantiated | Yes | Stable | No | Forbidden | Permitted | [adobe/experience/analytics/experienceevent-all.schema.json](adobe/experience/analytics/experienceevent-all.schema.json) |
## Schema Hierarchy

* Adobe Analytics ExperienceEvent Full Extension `https://ns.adobe.com/experience/analytics/experienceevent-all`
  * [session.schema](session.schema.md) `https://ns.adobe.com/experience/analytics/session`
  * [endUser.schema](endUser.schema.md) `https://ns.adobe.com/experience/analytics/endUser`
  * [event1to100.schema](event1to100.schema.md) `https://ns.adobe.com/experience/analytics/event1to100`
  * [event101to200.schema](event101to200.schema.md) `https://ns.adobe.com/experience/analytics/event101to200`
  * [event201to300.schema](event201to300.schema.md) `https://ns.adobe.com/experience/analytics/event201to300`
  * [event301to400.schema](event301to400.schema.md) `https://ns.adobe.com/experience/analytics/event301to400`
  * [event401to500.schema](event401to500.schema.md) `https://ns.adobe.com/experience/analytics/event401to500`
  * [event501to600.schema](event501to600.schema.md) `https://ns.adobe.com/experience/analytics/event501to600`
  * [event601to700.schema](event601to700.schema.md) `https://ns.adobe.com/experience/analytics/event601to700`
  * [event701to800.schema](event701to800.schema.md) `https://ns.adobe.com/experience/analytics/event701to800`
  * [event801to900.schema](event801to900.schema.md) `https://ns.adobe.com/experience/analytics/event801to900`
  * [event901to1000.schema](event901to1000.schema.md) `https://ns.adobe.com/experience/analytics/event901to1000`


# Adobe Analytics ExperienceEvent Full Extension Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [https://ns.adobe.com/experience/analytics/customDimensions](#httpsnsadobecomexperienceanalyticscustomdimensions) | `object` | Optional | Adobe Analytics ExperienceEvent Full Extension (this schema) |
| [https://ns.adobe.com/experience/analytics/endUser](#httpsnsadobecomexperienceanalyticsenduser) | endUser.schema | Optional | Adobe Analytics ExperienceEvent Full Extension (this schema) |
| [https://ns.adobe.com/experience/analytics/environment](#httpsnsadobecomexperienceanalyticsenvironment) | `object` | Optional | Adobe Analytics ExperienceEvent Full Extension (this schema) |
| [https://ns.adobe.com/experience/analytics/event101to200](#httpsnsadobecomexperienceanalyticsevent101to200) | event101to200.schema | Optional | Adobe Analytics ExperienceEvent Full Extension (this schema) |
| [https://ns.adobe.com/experience/analytics/event1to100](#httpsnsadobecomexperienceanalyticsevent1to100) | event1to100.schema | Optional | Adobe Analytics ExperienceEvent Full Extension (this schema) |
| [https://ns.adobe.com/experience/analytics/event201to300](#httpsnsadobecomexperienceanalyticsevent201to300) | event201to300.schema | Optional | Adobe Analytics ExperienceEvent Full Extension (this schema) |
| [https://ns.adobe.com/experience/analytics/event301to400](#httpsnsadobecomexperienceanalyticsevent301to400) | event301to400.schema | Optional | Adobe Analytics ExperienceEvent Full Extension (this schema) |
| [https://ns.adobe.com/experience/analytics/event401to500](#httpsnsadobecomexperienceanalyticsevent401to500) | event401to500.schema | Optional | Adobe Analytics ExperienceEvent Full Extension (this schema) |
| [https://ns.adobe.com/experience/analytics/event501to600](#httpsnsadobecomexperienceanalyticsevent501to600) | event501to600.schema | Optional | Adobe Analytics ExperienceEvent Full Extension (this schema) |
| [https://ns.adobe.com/experience/analytics/event601to700](#httpsnsadobecomexperienceanalyticsevent601to700) | event601to700.schema | Optional | Adobe Analytics ExperienceEvent Full Extension (this schema) |
| [https://ns.adobe.com/experience/analytics/event701to800](#httpsnsadobecomexperienceanalyticsevent701to800) | event701to800.schema | Optional | Adobe Analytics ExperienceEvent Full Extension (this schema) |
| [https://ns.adobe.com/experience/analytics/event801to900](#httpsnsadobecomexperienceanalyticsevent801to900) | event801to900.schema | Optional | Adobe Analytics ExperienceEvent Full Extension (this schema) |
| [https://ns.adobe.com/experience/analytics/event901to1000](#httpsnsadobecomexperienceanalyticsevent901to1000) | event901to1000.schema | Optional | Adobe Analytics ExperienceEvent Full Extension (this schema) |
| [https://ns.adobe.com/experience/analytics/session](#httpsnsadobecomexperienceanalyticssession) | session.schema | Optional | Adobe Analytics ExperienceEvent Full Extension (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## https://ns.adobe.com/experience/analytics/customDimensions
### Custom Dimensions

`https://ns.adobe.com/experience/analytics/customDimensions`
* is optional
* type: `object`
* defined in this schema

### https://ns.adobe.com/experience/analytics/customDimensions Type


`object` with following properties:


| Property | Type | Required |
|----------|------|----------|
| `xdm:eVars`| object | Optional |
| `xdm:hierarchies`| object | Optional |
| `xdm:listProps`| object | Optional |
| `xdm:lists`| object | Optional |
| `xdm:postalCode`| string | Optional |
| `xdm:props`| object | Optional |
| `xdm:stateProvince`| string | Optional |



#### xdm:eVars
##### eVars

undefined

`xdm:eVars`
* is optional
* type: `object`

##### xdm:eVars Type

Unknown type `object`.

```json
{
  "type": "object",
  "title": "eVars",
  "properties": {
    "xdm:eVar1": {
      "title": "eVar1",
      "type": "string",
      "description": "Custom conversion variable 1."
    },
    "xdm:eVar2": {
      "title": "eVar2",
      "type": "string",
      "description": "Custom conversion variable 2."
    },
    "xdm:eVar3": {
      "title": "eVar3",
      "type": "string",
      "description": "Custom conversion variable 3."
    },
    "xdm:eVar4": {
      "title": "eVar4",
      "type": "string",
      "description": "Custom conversion variable 4."
    },
    "xdm:eVar5": {
      "title": "eVar5",
      "type": "string",
      "description": "Custom conversion variable 5."
    },
    "xdm:eVar6": {
      "title": "eVar6",
      "type": "string",
      "description": "Custom conversion variable 6."
    },
    "xdm:eVar7": {
      "title": "eVar7",
      "type": "string",
      "description": "Custom conversion variable 7."
    },
    "xdm:eVar8": {
      "title": "eVar8",
      "type": "string",
      "description": "Custom conversion variable 8."
    },
    "xdm:eVar9": {
      "title": "eVar9",
      "type": "string",
      "description": "Custom conversion variable 9."
    },
    "xdm:eVar10": {
      "title": "eVar10",
      "type": "string",
      "description": "Custom conversion variable 10."
    },
    "xdm:eVar11": {
      "title": "eVar11",
      "type": "string",
      "description": "Custom conversion variable 11."
    },
    "xdm:eVar12": {
      "title": "eVar12",
      "type": "string",
      "description": "Custom conversion variable 12."
    },
    "xdm:eVar13": {
      "title": "eVar13",
      "type": "string",
      "description": "Custom conversion variable 13."
    },
    "xdm:eVar14": {
      "title": "eVar14",
      "type": "string",
      "description": "Custom conversion variable 14."
    },
    "xdm:eVar15": {
      "title": "eVar15",
      "type": "string",
      "description": "Custom conversion variable 15."
    },
    "xdm:eVar16": {
      "title": "eVar16",
      "type": "string",
      "description": "Custom conversion variable 16."
    },
    "xdm:eVar17": {
      "title": "eVar17",
      "type": "string",
      "description": "Custom conversion variable 17."
    },
    "xdm:eVar18": {
      "title": "eVar18",
      "type": "string",
      "description": "Custom conversion variable 18."
    },
    "xdm:eVar19": {
      "title": "eVar19",
      "type": "string",
      "description": "Custom conversion variable 19."
    },
    "xdm:eVar20": {
      "title": "eVar20",
      "type": "string",
      "description": "Custom conversion variable 20."
    },
    "xdm:eVar21": {
      "title": "eVar21",
      "type": "string",
      "description": "Custom conversion variable 21."
    },
    "xdm:eVar22": {
      "title": "eVar22",
      "type": "string",
      "description": "Custom conversion variable 22."
    },
    "xdm:eVar23": {
      "title": "eVar23",
      "type": "string",
      "description": "Custom conversion variable 23."
    },
    "xdm:eVar24": {
      "title": "eVar24",
      "type": "string",
      "description": "Custom conversion variable 24."
    },
    "xdm:eVar25": {
      "title": "eVar25",
      "type": "string",
      "description": "Custom conversion variable 25."
    },
    "xdm:eVar26": {
      "title": "eVar26",
      "type": "string",
      "description": "Custom conversion variable 26."
    },
    "xdm:eVar27": {
      "title": "eVar27",
      "type": "string",
      "description": "Custom conversion variable 27."
    },
    "xdm:eVar28": {
      "title": "eVar28",
      "type": "string",
      "description": "Custom conversion variable 28."
    },
    "xdm:eVar29": {
      "title": "eVar29",
      "type": "string",
      "description": "Custom conversion variable 29."
    },
    "xdm:eVar30": {
      "title": "eVar30",
      "type": "string",
      "description": "Custom conversion variable 30."
    },
    "xdm:eVar31": {
      "title": "eVar31",
      "type": "string",
      "description": "Custom conversion variable 31."
    },
    "xdm:eVar32": {
      "title": "eVar32",
      "type": "string",
      "description": "Custom conversion variable 32."
    },
    "xdm:eVar33": {
      "title": "eVar33",
      "type": "string",
      "description": "Custom conversion variable 33."
    },
    "xdm:eVar34": {
      "title": "eVar34",
      "type": "string",
      "description": "Custom conversion variable 34."
    },
    "xdm:eVar35": {
      "title": "eVar35",
      "type": "string",
      "description": "Custom conversion variable 35."
    },
    "xdm:eVar36": {
      "title": "eVar36",
      "type": "string",
      "description": "Custom conversion variable 36."
    },
    "xdm:eVar37": {
      "title": "eVar37",
      "type": "string",
      "description": "Custom conversion variable 37."
    },
    "xdm:eVar38": {
      "title": "eVar38",
      "type": "string",
      "description": "Custom conversion variable 38."
    },
    "xdm:eVar39": {
      "title": "eVar39",
      "type": "string",
      "description": "Custom conversion variable 39."
    },
    "xdm:eVar40": {
      "title": "eVar40",
      "type": "string",
      "description": "Custom conversion variable 40."
    },
    "xdm:eVar41": {
      "title": "eVar41",
      "type": "string",
      "description": "Custom conversion variable 41."
    },
    "xdm:eVar42": {
      "title": "eVar42",
      "type": "string",
      "description": "Custom conversion variable 42."
    },
    "xdm:eVar43": {
      "title": "eVar43",
      "type": "string",
      "description": "Custom conversion variable 43."
    },
    "xdm:eVar44": {
      "title": "eVar44",
      "type": "string",
      "description": "Custom conversion variable 44."
    },
    "xdm:eVar45": {
      "title": "eVar45",
      "type": "string",
      "description": "Custom conversion variable 45."
    },
    "xdm:eVar46": {
      "title": "eVar46",
      "type": "string",
      "description": "Custom conversion variable 46."
    },
    "xdm:eVar47": {
      "title": "eVar47",
      "type": "string",
      "description": "Custom conversion variable 47."
    },
    "xdm:eVar48": {
      "title": "eVar48",
      "type": "string",
      "description": "Custom conversion variable 48."
    },
    "xdm:eVar49": {
      "title": "eVar49",
      "type": "string",
      "description": "Custom conversion variable 49."
    },
    "xdm:eVar50": {
      "title": "eVar50",
      "type": "string",
      "description": "Custom conversion variable 50."
    },
    "xdm:eVar51": {
      "title": "eVar51",
      "type": "string",
      "description": "Custom conversion variable 51."
    },
    "xdm:eVar52": {
      "title": "eVar52",
      "type": "string",
      "description": "Custom conversion variable 52."
    },
    "xdm:eVar53": {
      "title": "eVar53",
      "type": "string",
      "description": "Custom conversion variable 53."
    },
    "xdm:eVar54": {
      "title": "eVar54",
      "type": "string",
      "description": "Custom conversion variable 54."
    },
    "xdm:eVar55": {
      "title": "eVar55",
      "type": "string",
      "description": "Custom conversion variable 55."
    },
    "xdm:eVar56": {
      "title": "eVar56",
      "type": "string",
      "description": "Custom conversion variable 56."
    },
    "xdm:eVar57": {
      "title": "eVar57",
      "type": "string",
      "description": "Custom conversion variable 57."
    },
    "xdm:eVar58": {
      "title": "eVar58",
      "type": "string",
      "description": "Custom conversion variable 58."
    },
    "xdm:eVar59": {
      "title": "eVar59",
      "type": "string",
      "description": "Custom conversion variable 59."
    },
    "xdm:eVar60": {
      "title": "eVar60",
      "type": "string",
      "description": "Custom conversion variable 60."
    },
    "xdm:eVar61": {
      "title": "eVar61",
      "type": "string",
      "description": "Custom conversion variable 61."
    },
    "xdm:eVar62": {
      "title": "eVar62",
      "type": "string",
      "description": "Custom conversion variable 62."
    },
    "xdm:eVar63": {
      "title": "eVar63",
      "type": "string",
      "description": "Custom conversion variable 63."
    },
    "xdm:eVar64": {
      "title": "eVar64",
      "type": "string",
      "description": "Custom conversion variable 64."
    },
    "xdm:eVar65": {
      "title": "eVar65",
      "type": "string",
      "description": "Custom conversion variable 65."
    },
    "xdm:eVar66": {
      "title": "eVar66",
      "type": "string",
      "description": "Custom conversion variable 66."
    },
    "xdm:eVar67": {
      "title": "eVar67",
      "type": "string",
      "description": "Custom conversion variable 67."
    },
    "xdm:eVar68": {
      "title": "eVar68",
      "type": "string",
      "description": "Custom conversion variable 68."
    },
    "xdm:eVar69": {
      "title": "eVar69",
      "type": "string",
      "description": "Custom conversion variable 69."
    },
    "xdm:eVar70": {
      "title": "eVar70",
      "type": "string",
      "description": "Custom conversion variable 70."
    },
    "xdm:eVar71": {
      "title": "eVar71",
      "type": "string",
      "description": "Custom conversion variable 71."
    },
    "xdm:eVar72": {
      "title": "eVar72",
      "type": "string",
      "description": "Custom conversion variable 72."
    },
    "xdm:eVar73": {
      "title": "eVar73",
      "type": "string",
      "description": "Custom conversion variable 73."
    },
    "xdm:eVar74": {
      "title": "eVar74",
      "type": "string",
      "description": "Custom conversion variable 74."
    },
    "xdm:eVar75": {
      "title": "eVar75",
      "type": "string",
      "description": "Custom conversion variable 75."
    },
    "xdm:eVar76": {
      "title": "eVar76",
      "type": "string",
      "description": "Custom conversion variable 76."
    },
    "xdm:eVar77": {
      "title": "eVar77",
      "type": "string",
      "description": "Custom conversion variable 77."
    },
    "xdm:eVar78": {
      "title": "eVar78",
      "type": "string",
      "description": "Custom conversion variable 78."
    },
    "xdm:eVar79": {
      "title": "eVar79",
      "type": "string",
      "description": "Custom conversion variable 79."
    },
    "xdm:eVar80": {
      "title": "eVar80",
      "type": "string",
      "description": "Custom conversion variable 80."
    },
    "xdm:eVar81": {
      "title": "eVar81",
      "type": "string",
      "description": "Custom conversion variable 81."
    },
    "xdm:eVar82": {
      "title": "eVar82",
      "type": "string",
      "description": "Custom conversion variable 82."
    },
    "xdm:eVar83": {
      "title": "eVar83",
      "type": "string",
      "description": "Custom conversion variable 83."
    },
    "xdm:eVar84": {
      "title": "eVar84",
      "type": "string",
      "description": "Custom conversion variable 84."
    },
    "xdm:eVar85": {
      "title": "eVar85",
      "type": "string",
      "description": "Custom conversion variable 85."
    },
    "xdm:eVar86": {
      "title": "eVar86",
      "type": "string",
      "description": "Custom conversion variable 86."
    },
    "xdm:eVar87": {
      "title": "eVar87",
      "type": "string",
      "description": "Custom conversion variable 87."
    },
    "xdm:eVar88": {
      "title": "eVar88",
      "type": "string",
      "description": "Custom conversion variable 88."
    },
    "xdm:eVar89": {
      "title": "eVar89",
      "type": "string",
      "description": "Custom conversion variable 89."
    },
    "xdm:eVar90": {
      "title": "eVar90",
      "type": "string",
      "description": "Custom conversion variable 90."
    },
    "xdm:eVar91": {
      "title": "eVar91",
      "type": "string",
      "description": "Custom conversion variable 91."
    },
    "xdm:eVar92": {
      "title": "eVar92",
      "type": "string",
      "description": "Custom conversion variable 92."
    },
    "xdm:eVar93": {
      "title": "eVar93",
      "type": "string",
      "description": "Custom conversion variable 93."
    },
    "xdm:eVar94": {
      "title": "eVar94",
      "type": "string",
      "description": "Custom conversion variable 94."
    },
    "xdm:eVar95": {
      "title": "eVar95",
      "type": "string",
      "description": "Custom conversion variable 95."
    },
    "xdm:eVar96": {
      "title": "eVar96",
      "type": "string",
      "description": "Custom conversion variable 96."
    },
    "xdm:eVar97": {
      "title": "eVar97",
      "type": "string",
      "description": "Custom conversion variable 97."
    },
    "xdm:eVar98": {
      "title": "eVar98",
      "type": "string",
      "description": "Custom conversion variable 98."
    },
    "xdm:eVar99": {
      "title": "eVar99",
      "type": "string",
      "description": "Custom conversion variable 99."
    },
    "xdm:eVar100": {
      "title": "eVar100",
      "type": "string",
      "description": "Custom conversion variable 100."
    },
    "xdm:eVar101": {
      "title": "eVar101",
      "type": "string",
      "description": "Custom conversion variable 101."
    },
    "xdm:eVar102": {
      "title": "eVar102",
      "type": "string",
      "description": "Custom conversion variable 102."
    },
    "xdm:eVar103": {
      "title": "eVar103",
      "type": "string",
      "description": "Custom conversion variable 103."
    },
    "xdm:eVar104": {
      "title": "eVar104",
      "type": "string",
      "description": "Custom conversion variable 104."
    },
    "xdm:eVar105": {
      "title": "eVar105",
      "type": "string",
      "description": "Custom conversion variable 105."
    },
    "xdm:eVar106": {
      "title": "eVar106",
      "type": "string",
      "description": "Custom conversion variable 106."
    },
    "xdm:eVar107": {
      "title": "eVar107",
      "type": "string",
      "description": "Custom conversion variable 107."
    },
    "xdm:eVar108": {
      "title": "eVar108",
      "type": "string",
      "description": "Custom conversion variable 108."
    },
    "xdm:eVar109": {
      "title": "eVar109",
      "type": "string",
      "description": "Custom conversion variable 109."
    },
    "xdm:eVar110": {
      "title": "eVar110",
      "type": "string",
      "description": "Custom conversion variable 110."
    },
    "xdm:eVar111": {
      "title": "eVar111",
      "type": "string",
      "description": "Custom conversion variable 111."
    },
    "xdm:eVar112": {
      "title": "eVar112",
      "type": "string",
      "description": "Custom conversion variable 112."
    },
    "xdm:eVar113": {
      "title": "eVar113",
      "type": "string",
      "description": "Custom conversion variable 113."
    },
    "xdm:eVar114": {
      "title": "eVar114",
      "type": "string",
      "description": "Custom conversion variable 114."
    },
    "xdm:eVar115": {
      "title": "eVar115",
      "type": "string",
      "description": "Custom conversion variable 115."
    },
    "xdm:eVar116": {
      "title": "eVar116",
      "type": "string",
      "description": "Custom conversion variable 116."
    },
    "xdm:eVar117": {
      "title": "eVar117",
      "type": "string",
      "description": "Custom conversion variable 117."
    },
    "xdm:eVar118": {
      "title": "eVar118",
      "type": "string",
      "description": "Custom conversion variable 118."
    },
    "xdm:eVar119": {
      "title": "eVar119",
      "type": "string",
      "description": "Custom conversion variable 119."
    },
    "xdm:eVar120": {
      "title": "eVar120",
      "type": "string",
      "description": "Custom conversion variable 120."
    },
    "xdm:eVar121": {
      "title": "eVar121",
      "type": "string",
      "description": "Custom conversion variable 121."
    },
    "xdm:eVar122": {
      "title": "eVar122",
      "type": "string",
      "description": "Custom conversion variable 122."
    },
    "xdm:eVar123": {
      "title": "eVar123",
      "type": "string",
      "description": "Custom conversion variable 123."
    },
    "xdm:eVar124": {
      "title": "eVar124",
      "type": "string",
      "description": "Custom conversion variable 124."
    },
    "xdm:eVar125": {
      "title": "eVar125",
      "type": "string",
      "description": "Custom conversion variable 125."
    },
    "xdm:eVar126": {
      "title": "eVar126",
      "type": "string",
      "description": "Custom conversion variable 126."
    },
    "xdm:eVar127": {
      "title": "eVar127",
      "type": "string",
      "description": "Custom conversion variable 127."
    },
    "xdm:eVar128": {
      "title": "eVar128",
      "type": "string",
      "description": "Custom conversion variable 128."
    },
    "xdm:eVar129": {
      "title": "eVar129",
      "type": "string",
      "description": "Custom conversion variable 129."
    },
    "xdm:eVar130": {
      "title": "eVar130",
      "type": "string",
      "description": "Custom conversion variable 130."
    },
    "xdm:eVar131": {
      "title": "eVar131",
      "type": "string",
      "description": "Custom conversion variable 131."
    },
    "xdm:eVar132": {
      "title": "eVar132",
      "type": "string",
      "description": "Custom conversion variable 132."
    },
    "xdm:eVar133": {
      "title": "eVar133",
      "type": "string",
      "description": "Custom conversion variable 133."
    },
    "xdm:eVar134": {
      "title": "eVar134",
      "type": "string",
      "description": "Custom conversion variable 134."
    },
    "xdm:eVar135": {
      "title": "eVar135",
      "type": "string",
      "description": "Custom conversion variable 135."
    },
    "xdm:eVar136": {
      "title": "eVar136",
      "type": "string",
      "description": "Custom conversion variable 136."
    },
    "xdm:eVar137": {
      "title": "eVar137",
      "type": "string",
      "description": "Custom conversion variable 137."
    },
    "xdm:eVar138": {
      "title": "eVar138",
      "type": "string",
      "description": "Custom conversion variable 138."
    },
    "xdm:eVar139": {
      "title": "eVar139",
      "type": "string",
      "description": "Custom conversion variable 139."
    },
    "xdm:eVar140": {
      "title": "eVar140",
      "type": "string",
      "description": "Custom conversion variable 140."
    },
    "xdm:eVar141": {
      "title": "eVar141",
      "type": "string",
      "description": "Custom conversion variable 141."
    },
    "xdm:eVar142": {
      "title": "eVar142",
      "type": "string",
      "description": "Custom conversion variable 142."
    },
    "xdm:eVar143": {
      "title": "eVar143",
      "type": "string",
      "description": "Custom conversion variable 143."
    },
    "xdm:eVar144": {
      "title": "eVar144",
      "type": "string",
      "description": "Custom conversion variable 144."
    },
    "xdm:eVar145": {
      "title": "eVar145",
      "type": "string",
      "description": "Custom conversion variable 145."
    },
    "xdm:eVar146": {
      "title": "eVar146",
      "type": "string",
      "description": "Custom conversion variable 146."
    },
    "xdm:eVar147": {
      "title": "eVar147",
      "type": "string",
      "description": "Custom conversion variable 147."
    },
    "xdm:eVar148": {
      "title": "eVar148",
      "type": "string",
      "description": "Custom conversion variable 148."
    },
    "xdm:eVar149": {
      "title": "eVar149",
      "type": "string",
      "description": "Custom conversion variable 149."
    },
    "xdm:eVar150": {
      "title": "eVar150",
      "type": "string",
      "description": "Custom conversion variable 150."
    },
    "xdm:eVar151": {
      "title": "eVar151",
      "type": "string",
      "description": "Custom conversion variable 151."
    },
    "xdm:eVar152": {
      "title": "eVar152",
      "type": "string",
      "description": "Custom conversion variable 152."
    },
    "xdm:eVar153": {
      "title": "eVar153",
      "type": "string",
      "description": "Custom conversion variable 153."
    },
    "xdm:eVar154": {
      "title": "eVar154",
      "type": "string",
      "description": "Custom conversion variable 154."
    },
    "xdm:eVar155": {
      "title": "eVar155",
      "type": "string",
      "description": "Custom conversion variable 155."
    },
    "xdm:eVar156": {
      "title": "eVar156",
      "type": "string",
      "description": "Custom conversion variable 156."
    },
    "xdm:eVar157": {
      "title": "eVar157",
      "type": "string",
      "description": "Custom conversion variable 157."
    },
    "xdm:eVar158": {
      "title": "eVar158",
      "type": "string",
      "description": "Custom conversion variable 158."
    },
    "xdm:eVar159": {
      "title": "eVar159",
      "type": "string",
      "description": "Custom conversion variable 159."
    },
    "xdm:eVar160": {
      "title": "eVar160",
      "type": "string",
      "description": "Custom conversion variable 160."
    },
    "xdm:eVar161": {
      "title": "eVar161",
      "type": "string",
      "description": "Custom conversion variable 161."
    },
    "xdm:eVar162": {
      "title": "eVar162",
      "type": "string",
      "description": "Custom conversion variable 162."
    },
    "xdm:eVar163": {
      "title": "eVar163",
      "type": "string",
      "description": "Custom conversion variable 163."
    },
    "xdm:eVar164": {
      "title": "eVar164",
      "type": "string",
      "description": "Custom conversion variable 164."
    },
    "xdm:eVar165": {
      "title": "eVar165",
      "type": "string",
      "description": "Custom conversion variable 165."
    },
    "xdm:eVar166": {
      "title": "eVar166",
      "type": "string",
      "description": "Custom conversion variable 166."
    },
    "xdm:eVar167": {
      "title": "eVar167",
      "type": "string",
      "description": "Custom conversion variable 167."
    },
    "xdm:eVar168": {
      "title": "eVar168",
      "type": "string",
      "description": "Custom conversion variable 168."
    },
    "xdm:eVar169": {
      "title": "eVar169",
      "type": "string",
      "description": "Custom conversion variable 169."
    },
    "xdm:eVar170": {
      "title": "eVar170",
      "type": "string",
      "description": "Custom conversion variable 170."
    },
    "xdm:eVar171": {
      "title": "eVar171",
      "type": "string",
      "description": "Custom conversion variable 171."
    },
    "xdm:eVar172": {
      "title": "eVar172",
      "type": "string",
      "description": "Custom conversion variable 172."
    },
    "xdm:eVar173": {
      "title": "eVar173",
      "type": "string",
      "description": "Custom conversion variable 173."
    },
    "xdm:eVar174": {
      "title": "eVar174",
      "type": "string",
      "description": "Custom conversion variable 174."
    },
    "xdm:eVar175": {
      "title": "eVar175",
      "type": "string",
      "description": "Custom conversion variable 175."
    },
    "xdm:eVar176": {
      "title": "eVar176",
      "type": "string",
      "description": "Custom conversion variable 176."
    },
    "xdm:eVar177": {
      "title": "eVar177",
      "type": "string",
      "description": "Custom conversion variable 177."
    },
    "xdm:eVar178": {
      "title": "eVar178",
      "type": "string",
      "description": "Custom conversion variable 178."
    },
    "xdm:eVar179": {
      "title": "eVar179",
      "type": "string",
      "description": "Custom conversion variable 179."
    },
    "xdm:eVar180": {
      "title": "eVar180",
      "type": "string",
      "description": "Custom conversion variable 180."
    },
    "xdm:eVar181": {
      "title": "eVar181",
      "type": "string",
      "description": "Custom conversion variable 181."
    },
    "xdm:eVar182": {
      "title": "eVar182",
      "type": "string",
      "description": "Custom conversion variable 182."
    },
    "xdm:eVar183": {
      "title": "eVar183",
      "type": "string",
      "description": "Custom conversion variable 183."
    },
    "xdm:eVar184": {
      "title": "eVar184",
      "type": "string",
      "description": "Custom conversion variable 184."
    },
    "xdm:eVar185": {
      "title": "eVar185",
      "type": "string",
      "description": "Custom conversion variable 185."
    },
    "xdm:eVar186": {
      "title": "eVar186",
      "type": "string",
      "description": "Custom conversion variable 186."
    },
    "xdm:eVar187": {
      "title": "eVar187",
      "type": "string",
      "description": "Custom conversion variable 187."
    },
    "xdm:eVar188": {
      "title": "eVar188",
      "type": "string",
      "description": "Custom conversion variable 188."
    },
    "xdm:eVar189": {
      "title": "eVar189",
      "type": "string",
      "description": "Custom conversion variable 189."
    },
    "xdm:eVar190": {
      "title": "eVar190",
      "type": "string",
      "description": "Custom conversion variable 190."
    },
    "xdm:eVar191": {
      "title": "eVar191",
      "type": "string",
      "description": "Custom conversion variable 191."
    },
    "xdm:eVar192": {
      "title": "eVar192",
      "type": "string",
      "description": "Custom conversion variable 192."
    },
    "xdm:eVar193": {
      "title": "eVar193",
      "type": "string",
      "description": "Custom conversion variable 193."
    },
    "xdm:eVar194": {
      "title": "eVar194",
      "type": "string",
      "description": "Custom conversion variable 194."
    },
    "xdm:eVar195": {
      "title": "eVar195",
      "type": "string",
      "description": "Custom conversion variable 195."
    },
    "xdm:eVar196": {
      "title": "eVar196",
      "type": "string",
      "description": "Custom conversion variable 196."
    },
    "xdm:eVar197": {
      "title": "eVar197",
      "type": "string",
      "description": "Custom conversion variable 197."
    },
    "xdm:eVar198": {
      "title": "eVar198",
      "type": "string",
      "description": "Custom conversion variable 198."
    },
    "xdm:eVar199": {
      "title": "eVar199",
      "type": "string",
      "description": "Custom conversion variable 199."
    },
    "xdm:eVar200": {
      "title": "eVar200",
      "type": "string",
      "description": "Custom conversion variable 200."
    },
    "xdm:eVar201": {
      "title": "eVar201",
      "type": "string",
      "description": "Custom conversion variable 201."
    },
    "xdm:eVar202": {
      "title": "eVar202",
      "type": "string",
      "description": "Custom conversion variable 202."
    },
    "xdm:eVar203": {
      "title": "eVar203",
      "type": "string",
      "description": "Custom conversion variable 203."
    },
    "xdm:eVar204": {
      "title": "eVar204",
      "type": "string",
      "description": "Custom conversion variable 204."
    },
    "xdm:eVar205": {
      "title": "eVar205",
      "type": "string",
      "description": "Custom conversion variable 205."
    },
    "xdm:eVar206": {
      "title": "eVar206",
      "type": "string",
      "description": "Custom conversion variable 206."
    },
    "xdm:eVar207": {
      "title": "eVar207",
      "type": "string",
      "description": "Custom conversion variable 207."
    },
    "xdm:eVar208": {
      "title": "eVar208",
      "type": "string",
      "description": "Custom conversion variable 208."
    },
    "xdm:eVar209": {
      "title": "eVar209",
      "type": "string",
      "description": "Custom conversion variable 209."
    },
    "xdm:eVar210": {
      "title": "eVar210",
      "type": "string",
      "description": "Custom conversion variable 210."
    },
    "xdm:eVar211": {
      "title": "eVar211",
      "type": "string",
      "description": "Custom conversion variable 211."
    },
    "xdm:eVar212": {
      "title": "eVar212",
      "type": "string",
      "description": "Custom conversion variable 212."
    },
    "xdm:eVar213": {
      "title": "eVar213",
      "type": "string",
      "description": "Custom conversion variable 213."
    },
    "xdm:eVar214": {
      "title": "eVar214",
      "type": "string",
      "description": "Custom conversion variable 214."
    },
    "xdm:eVar215": {
      "title": "eVar215",
      "type": "string",
      "description": "Custom conversion variable 215."
    },
    "xdm:eVar216": {
      "title": "eVar216",
      "type": "string",
      "description": "Custom conversion variable 216."
    },
    "xdm:eVar217": {
      "title": "eVar217",
      "type": "string",
      "description": "Custom conversion variable 217."
    },
    "xdm:eVar218": {
      "title": "eVar218",
      "type": "string",
      "description": "Custom conversion variable 218."
    },
    "xdm:eVar219": {
      "title": "eVar219",
      "type": "string",
      "description": "Custom conversion variable 219."
    },
    "xdm:eVar220": {
      "title": "eVar220",
      "type": "string",
      "description": "Custom conversion variable 220."
    },
    "xdm:eVar221": {
      "title": "eVar221",
      "type": "string",
      "description": "Custom conversion variable 221."
    },
    "xdm:eVar222": {
      "title": "eVar222",
      "type": "string",
      "description": "Custom conversion variable 222."
    },
    "xdm:eVar223": {
      "title": "eVar223",
      "type": "string",
      "description": "Custom conversion variable 223."
    },
    "xdm:eVar224": {
      "title": "eVar224",
      "type": "string",
      "description": "Custom conversion variable 224."
    },
    "xdm:eVar225": {
      "title": "eVar225",
      "type": "string",
      "description": "Custom conversion variable 225."
    },
    "xdm:eVar226": {
      "title": "eVar226",
      "type": "string",
      "description": "Custom conversion variable 226."
    },
    "xdm:eVar227": {
      "title": "eVar227",
      "type": "string",
      "description": "Custom conversion variable 227."
    },
    "xdm:eVar228": {
      "title": "eVar228",
      "type": "string",
      "description": "Custom conversion variable 228."
    },
    "xdm:eVar229": {
      "title": "eVar229",
      "type": "string",
      "description": "Custom conversion variable 229."
    },
    "xdm:eVar230": {
      "title": "eVar230",
      "type": "string",
      "description": "Custom conversion variable 230."
    },
    "xdm:eVar231": {
      "title": "eVar231",
      "type": "string",
      "description": "Custom conversion variable 231."
    },
    "xdm:eVar232": {
      "title": "eVar232",
      "type": "string",
      "description": "Custom conversion variable 232."
    },
    "xdm:eVar233": {
      "title": "eVar233",
      "type": "string",
      "description": "Custom conversion variable 233."
    },
    "xdm:eVar234": {
      "title": "eVar234",
      "type": "string",
      "description": "Custom conversion variable 234."
    },
    "xdm:eVar235": {
      "title": "eVar235",
      "type": "string",
      "description": "Custom conversion variable 235."
    },
    "xdm:eVar236": {
      "title": "eVar236",
      "type": "string",
      "description": "Custom conversion variable 236."
    },
    "xdm:eVar237": {
      "title": "eVar237",
      "type": "string",
      "description": "Custom conversion variable 237."
    },
    "xdm:eVar238": {
      "title": "eVar238",
      "type": "string",
      "description": "Custom conversion variable 238."
    },
    "xdm:eVar239": {
      "title": "eVar239",
      "type": "string",
      "description": "Custom conversion variable 239."
    },
    "xdm:eVar240": {
      "title": "eVar240",
      "type": "string",
      "description": "Custom conversion variable 240."
    },
    "xdm:eVar241": {
      "title": "eVar241",
      "type": "string",
      "description": "Custom conversion variable 241."
    },
    "xdm:eVar242": {
      "title": "eVar242",
      "type": "string",
      "description": "Custom conversion variable 242."
    },
    "xdm:eVar243": {
      "title": "eVar243",
      "type": "string",
      "description": "Custom conversion variable 243."
    },
    "xdm:eVar244": {
      "title": "eVar244",
      "type": "string",
      "description": "Custom conversion variable 244."
    },
    "xdm:eVar245": {
      "title": "eVar245",
      "type": "string",
      "description": "Custom conversion variable 245."
    },
    "xdm:eVar246": {
      "title": "eVar246",
      "type": "string",
      "description": "Custom conversion variable 246."
    },
    "xdm:eVar247": {
      "title": "eVar247",
      "type": "string",
      "description": "Custom conversion variable 247."
    },
    "xdm:eVar248": {
      "title": "eVar248",
      "type": "string",
      "description": "Custom conversion variable 248."
    },
    "xdm:eVar249": {
      "title": "eVar249",
      "type": "string",
      "description": "Custom conversion variable 249."
    },
    "xdm:eVar250": {
      "title": "eVar250",
      "type": "string",
      "description": "Custom conversion variable 250."
    }
  },
  "simpletype": "`object`"
}
```







#### xdm:hierarchies
##### Hierarchies

undefined

`xdm:hierarchies`
* is optional
* type: `object`

##### xdm:hierarchies Type

Unknown type `object`.

```json
{
  "type": "object",
  "title": "Hierarchies",
  "properties": {
    "xdm:hier1": {
      "title": "hier1",
      "description": "Custom hierarchy variable 1.",
      "$ref": "https://ns.adobe.com/experience/analytics/listdetails"
    },
    "xdm:hier2": {
      "title": "hier2",
      "description": "Custom hierarchy variable 2.",
      "$ref": "https://ns.adobe.com/experience/analytics/listdetails"
    },
    "xdm:hier3": {
      "title": "hier3",
      "description": "Custom hierarchy variable 3.",
      "$ref": "https://ns.adobe.com/experience/analytics/listdetails"
    },
    "xdm:hier4": {
      "title": "hier4",
      "description": "Custom hierarchy variable 4.",
      "$ref": "https://ns.adobe.com/experience/analytics/listdetails"
    },
    "xdm:hier5": {
      "title": "hier5",
      "description": "Custom hierarchy variable 5.",
      "$ref": "https://ns.adobe.com/experience/analytics/listdetails"
    }
  },
  "simpletype": "`object`"
}
```







#### xdm:listProps
##### List Props

undefined

`xdm:listProps`
* is optional
* type: `object`

##### xdm:listProps Type

Unknown type `object`.

```json
{
  "type": "object",
  "title": "List Props",
  "properties": {
    "xdm:prop1": {
      "title": "prop1",
      "description": "Custom property variable1",
      "$ref": "https://ns.adobe.com/experience/analytics/listdetails"
    },
    "xdm:prop2": {
      "title": "prop2",
      "description": "Custom property variable2",
      "$ref": "https://ns.adobe.com/experience/analytics/listdetails"
    },
    "xdm:prop3": {
      "title": "prop3",
      "description": "Custom property variable3",
      "$ref": "https://ns.adobe.com/experience/analytics/listdetails"
    },
    "xdm:prop4": {
      "title": "prop4",
      "description": "Custom property variable4",
      "$ref": "https://ns.adobe.com/experience/analytics/listdetails"
    },
    "xdm:prop5": {
      "title": "prop5",
      "description": "Custom property variable5",
      "$ref": "https://ns.adobe.com/experience/analytics/listdetails"
    },
    "xdm:prop6": {
      "title": "prop6",
      "description": "Custom property variable6",
      "$ref": "https://ns.adobe.com/experience/analytics/listdetails"
    },
    "xdm:prop7": {
      "title": "prop7",
      "description": "Custom property variable7",
      "$ref": "https://ns.adobe.com/experience/analytics/listdetails"
    },
    "xdm:prop8": {
      "title": "prop8",
      "description": "Custom property variable8",
      "$ref": "https://ns.adobe.com/experience/analytics/listdetails"
    },
    "xdm:prop9": {
      "title": "prop9",
      "description": "Custom property variable9",
      "$ref": "https://ns.adobe.com/experience/analytics/listdetails"
    },
    "xdm:prop10": {
      "title": "prop10",
      "description": "Custom property variable10",
      "$ref": "https://ns.adobe.com/experience/analytics/listdetails"
    },
    "xdm:prop11": {
      "title": "prop11",
      "description": "Custom property variable11",
      "$ref": "https://ns.adobe.com/experience/analytics/listdetails"
    },
    "xdm:prop12": {
      "title": "prop12",
      "description": "Custom property variable12",
      "$ref": "https://ns.adobe.com/experience/analytics/listdetails"
    },
    "xdm:prop13": {
      "title": "prop13",
      "description": "Custom property variable13",
      "$ref": "https://ns.adobe.com/experience/analytics/listdetails"
    },
    "xdm:prop14": {
      "title": "prop14",
      "description": "Custom property variable14",
      "$ref": "https://ns.adobe.com/experience/analytics/listdetails"
    },
    "xdm:prop15": {
      "title": "prop15",
      "description": "Custom property variable15",
      "$ref": "https://ns.adobe.com/experience/analytics/listdetails"
    },
    "xdm:prop16": {
      "title": "prop16",
      "description": "Custom property variable16",
      "$ref": "https://ns.adobe.com/experience/analytics/listdetails"
    },
    "xdm:prop17": {
      "title": "prop17",
      "description": "Custom property variable17",
      "$ref": "https://ns.adobe.com/experience/analytics/listdetails"
    },
    "xdm:prop18": {
      "title": "prop18",
      "description": "Custom property variable18",
      "$ref": "https://ns.adobe.com/experience/analytics/listdetails"
    },
    "xdm:prop19": {
      "title": "prop19",
      "description": "Custom property variable19",
      "$ref": "https://ns.adobe.com/experience/analytics/listdetails"
    },
    "xdm:prop20": {
      "title": "prop20",
      "description": "Custom property variable20",
      "$ref": "https://ns.adobe.com/experience/analytics/listdetails"
    },
    "xdm:prop21": {
      "title": "prop21",
      "description": "Custom property variable21",
      "$ref": "https://ns.adobe.com/experience/analytics/listdetails"
    },
    "xdm:prop22": {
      "title": "prop22",
      "description": "Custom property variable22",
      "$ref": "https://ns.adobe.com/experience/analytics/listdetails"
    },
    "xdm:prop23": {
      "title": "prop23",
      "description": "Custom property variable23",
      "$ref": "https://ns.adobe.com/experience/analytics/listdetails"
    },
    "xdm:prop24": {
      "title": "prop24",
      "description": "Custom property variable24",
      "$ref": "https://ns.adobe.com/experience/analytics/listdetails"
    },
    "xdm:prop25": {
      "title": "prop25",
      "description": "Custom property variable25",
      "$ref": "https://ns.adobe.com/experience/analytics/listdetails"
    },
    "xdm:prop26": {
      "title": "prop26",
      "description": "Custom property variable26",
      "$ref": "https://ns.adobe.com/experience/analytics/listdetails"
    },
    "xdm:prop27": {
      "title": "prop27",
      "description": "Custom property variable27",
      "$ref": "https://ns.adobe.com/experience/analytics/listdetails"
    },
    "xdm:prop28": {
      "title": "prop28",
      "description": "Custom property variable28",
      "$ref": "https://ns.adobe.com/experience/analytics/listdetails"
    },
    "xdm:prop29": {
      "title": "prop29",
      "description": "Custom property variable29",
      "$ref": "https://ns.adobe.com/experience/analytics/listdetails"
    },
    "xdm:prop30": {
      "title": "prop30",
      "description": "Custom property variable30",
      "$ref": "https://ns.adobe.com/experience/analytics/listdetails"
    },
    "xdm:prop31": {
      "title": "prop31",
      "description": "Custom property variable31",
      "$ref": "https://ns.adobe.com/experience/analytics/listdetails"
    },
    "xdm:prop32": {
      "title": "prop32",
      "description": "Custom property variable32",
      "$ref": "https://ns.adobe.com/experience/analytics/listdetails"
    },
    "xdm:prop33": {
      "title": "prop33",
      "description": "Custom property variable33",
      "$ref": "https://ns.adobe.com/experience/analytics/listdetails"
    },
    "xdm:prop34": {
      "title": "prop34",
      "description": "Custom property variable34",
      "$ref": "https://ns.adobe.com/experience/analytics/listdetails"
    },
    "xdm:prop35": {
      "title": "prop35",
      "description": "Custom property variable35",
      "$ref": "https://ns.adobe.com/experience/analytics/listdetails"
    },
    "xdm:prop36": {
      "title": "prop36",
      "description": "Custom property variable36",
      "$ref": "https://ns.adobe.com/experience/analytics/listdetails"
    },
    "xdm:prop37": {
      "title": "prop37",
      "description": "Custom property variable37",
      "$ref": "https://ns.adobe.com/experience/analytics/listdetails"
    },
    "xdm:prop38": {
      "title": "prop38",
      "description": "Custom property variable38",
      "$ref": "https://ns.adobe.com/experience/analytics/listdetails"
    },
    "xdm:prop39": {
      "title": "prop39",
      "description": "Custom property variable39",
      "$ref": "https://ns.adobe.com/experience/analytics/listdetails"
    },
    "xdm:prop40": {
      "title": "prop40",
      "description": "Custom property variable40",
      "$ref": "https://ns.adobe.com/experience/analytics/listdetails"
    },
    "xdm:prop41": {
      "title": "prop41",
      "description": "Custom property variable41",
      "$ref": "https://ns.adobe.com/experience/analytics/listdetails"
    },
    "xdm:prop42": {
      "title": "prop42",
      "description": "Custom property variable42",
      "$ref": "https://ns.adobe.com/experience/analytics/listdetails"
    },
    "xdm:prop43": {
      "title": "prop43",
      "description": "Custom property variable43",
      "$ref": "https://ns.adobe.com/experience/analytics/listdetails"
    },
    "xdm:prop44": {
      "title": "prop44",
      "description": "Custom property variable44",
      "$ref": "https://ns.adobe.com/experience/analytics/listdetails"
    },
    "xdm:prop45": {
      "title": "prop45",
      "description": "Custom property variable45",
      "$ref": "https://ns.adobe.com/experience/analytics/listdetails"
    },
    "xdm:prop46": {
      "title": "prop46",
      "description": "Custom property variable46",
      "$ref": "https://ns.adobe.com/experience/analytics/listdetails"
    },
    "xdm:prop47": {
      "title": "prop47",
      "description": "Custom property variable47",
      "$ref": "https://ns.adobe.com/experience/analytics/listdetails"
    },
    "xdm:prop48": {
      "title": "prop48",
      "description": "Custom property variable48",
      "$ref": "https://ns.adobe.com/experience/analytics/listdetails"
    },
    "xdm:prop49": {
      "title": "prop49",
      "description": "Custom property variable49",
      "$ref": "https://ns.adobe.com/experience/analytics/listdetails"
    },
    "xdm:prop50": {
      "title": "prop50",
      "description": "Custom property variable50",
      "$ref": "https://ns.adobe.com/experience/analytics/listdetails"
    },
    "xdm:prop51": {
      "title": "prop51",
      "description": "Custom property variable51",
      "$ref": "https://ns.adobe.com/experience/analytics/listdetails"
    },
    "xdm:prop52": {
      "title": "prop52",
      "description": "Custom property variable52",
      "$ref": "https://ns.adobe.com/experience/analytics/listdetails"
    },
    "xdm:prop53": {
      "title": "prop53",
      "description": "Custom property variable53",
      "$ref": "https://ns.adobe.com/experience/analytics/listdetails"
    },
    "xdm:prop54": {
      "title": "prop54",
      "description": "Custom property variable54",
      "$ref": "https://ns.adobe.com/experience/analytics/listdetails"
    },
    "xdm:prop55": {
      "title": "prop55",
      "description": "Custom property variable55",
      "$ref": "https://ns.adobe.com/experience/analytics/listdetails"
    },
    "xdm:prop56": {
      "title": "prop56",
      "description": "Custom property variable56",
      "$ref": "https://ns.adobe.com/experience/analytics/listdetails"
    },
    "xdm:prop57": {
      "title": "prop57",
      "description": "Custom property variable57",
      "$ref": "https://ns.adobe.com/experience/analytics/listdetails"
    },
    "xdm:prop58": {
      "title": "prop58",
      "description": "Custom property variable58",
      "$ref": "https://ns.adobe.com/experience/analytics/listdetails"
    },
    "xdm:prop59": {
      "title": "prop59",
      "description": "Custom property variable59",
      "$ref": "https://ns.adobe.com/experience/analytics/listdetails"
    },
    "xdm:prop60": {
      "title": "prop60",
      "description": "Custom property variable60",
      "$ref": "https://ns.adobe.com/experience/analytics/listdetails"
    },
    "xdm:prop61": {
      "title": "prop61",
      "description": "Custom property variable61",
      "$ref": "https://ns.adobe.com/experience/analytics/listdetails"
    },
    "xdm:prop62": {
      "title": "prop62",
      "description": "Custom property variable62",
      "$ref": "https://ns.adobe.com/experience/analytics/listdetails"
    },
    "xdm:prop63": {
      "title": "prop63",
      "description": "Custom property variable63",
      "$ref": "https://ns.adobe.com/experience/analytics/listdetails"
    },
    "xdm:prop64": {
      "title": "prop64",
      "description": "Custom property variable64",
      "$ref": "https://ns.adobe.com/experience/analytics/listdetails"
    },
    "xdm:prop65": {
      "title": "prop65",
      "description": "Custom property variable65",
      "$ref": "https://ns.adobe.com/experience/analytics/listdetails"
    },
    "xdm:prop66": {
      "title": "prop66",
      "description": "Custom property variable66",
      "$ref": "https://ns.adobe.com/experience/analytics/listdetails"
    },
    "xdm:prop67": {
      "title": "prop67",
      "description": "Custom property variable67",
      "$ref": "https://ns.adobe.com/experience/analytics/listdetails"
    },
    "xdm:prop68": {
      "title": "prop68",
      "description": "Custom property variable68",
      "$ref": "https://ns.adobe.com/experience/analytics/listdetails"
    },
    "xdm:prop69": {
      "title": "prop69",
      "description": "Custom property variable69",
      "$ref": "https://ns.adobe.com/experience/analytics/listdetails"
    },
    "xdm:prop70": {
      "title": "prop70",
      "description": "Custom property variable70",
      "$ref": "https://ns.adobe.com/experience/analytics/listdetails"
    },
    "xdm:prop71": {
      "title": "prop71",
      "description": "Custom property variable71",
      "$ref": "https://ns.adobe.com/experience/analytics/listdetails"
    },
    "xdm:prop72": {
      "title": "prop72",
      "description": "Custom property variable72",
      "$ref": "https://ns.adobe.com/experience/analytics/listdetails"
    },
    "xdm:prop73": {
      "title": "prop73",
      "description": "Custom property variable73",
      "$ref": "https://ns.adobe.com/experience/analytics/listdetails"
    },
    "xdm:prop74": {
      "title": "prop74",
      "description": "Custom property variable74",
      "$ref": "https://ns.adobe.com/experience/analytics/listdetails"
    },
    "xdm:prop75": {
      "title": "prop75",
      "description": "Custom property variable75",
      "$ref": "https://ns.adobe.com/experience/analytics/listdetails"
    }
  },
  "simpletype": "`object`"
}
```







#### xdm:lists
##### Custom List Variables

undefined

`xdm:lists`
* is optional
* type: `object`

##### xdm:lists Type

Unknown type `object`.

```json
{
  "type": "object",
  "title": "Custom List Variables",
  "properties": {
    "xdm:list1": {
      "title": "List 1",
      "description": "Custom list variable 1.",
      "$ref": "https://ns.adobe.com/experience/analytics/keyedlist"
    },
    "xdm:list2": {
      "title": "List 2",
      "description": "Custom list variable 2.",
      "$ref": "https://ns.adobe.com/experience/analytics/keyedlist"
    },
    "xdm:list3": {
      "title": "List 3",
      "description": "Custom list variable 3.",
      "$ref": "https://ns.adobe.com/experience/analytics/keyedlist"
    }
  },
  "simpletype": "`object`"
}
```







#### xdm:postalCode
##### zip

Client supplied zip code/postal code.

`xdm:postalCode`
* is optional
* type: `string`

##### xdm:postalCode Type


`string`








#### xdm:props
##### Props

undefined

`xdm:props`
* is optional
* type: `object`

##### xdm:props Type

Unknown type `object`.

```json
{
  "type": "object",
  "title": "Props",
  "properties": {
    "xdm:prop1": {
      "title": "prop1",
      "type": "string",
      "description": "Custom property variable 1."
    },
    "xdm:prop2": {
      "title": "prop2",
      "type": "string",
      "description": "Custom property variable 2."
    },
    "xdm:prop3": {
      "title": "prop3",
      "type": "string",
      "description": "Custom property variable 3."
    },
    "xdm:prop4": {
      "title": "prop4",
      "type": "string",
      "description": "Custom property variable 4."
    },
    "xdm:prop5": {
      "title": "prop5",
      "type": "string",
      "description": "Custom property variable 5."
    },
    "xdm:prop6": {
      "title": "prop6",
      "type": "string",
      "description": "Custom property variable 6."
    },
    "xdm:prop7": {
      "title": "prop7",
      "type": "string",
      "description": "Custom property variable 7."
    },
    "xdm:prop8": {
      "title": "prop8",
      "type": "string",
      "description": "Custom property variable 8."
    },
    "xdm:prop9": {
      "title": "prop9",
      "type": "string",
      "description": "Custom property variable 9."
    },
    "xdm:prop10": {
      "title": "prop10",
      "type": "string",
      "description": "Custom property variable 10."
    },
    "xdm:prop11": {
      "title": "prop11",
      "type": "string",
      "description": "Custom property variable 11."
    },
    "xdm:prop12": {
      "title": "prop12",
      "type": "string",
      "description": "Custom property variable 12."
    },
    "xdm:prop13": {
      "title": "prop13",
      "type": "string",
      "description": "Custom property variable 13."
    },
    "xdm:prop14": {
      "title": "prop14",
      "type": "string",
      "description": "Custom property variable 14."
    },
    "xdm:prop15": {
      "title": "prop15",
      "type": "string",
      "description": "Custom property variable 15."
    },
    "xdm:prop16": {
      "title": "prop16",
      "type": "string",
      "description": "Custom property variable 16."
    },
    "xdm:prop17": {
      "title": "prop17",
      "type": "string",
      "description": "Custom property variable 17."
    },
    "xdm:prop18": {
      "title": "prop18",
      "type": "string",
      "description": "Custom property variable 18."
    },
    "xdm:prop19": {
      "title": "prop19",
      "type": "string",
      "description": "Custom property variable 19."
    },
    "xdm:prop20": {
      "title": "prop20",
      "type": "string",
      "description": "Custom property variable 20."
    },
    "xdm:prop21": {
      "title": "prop21",
      "type": "string",
      "description": "Custom property variable 21."
    },
    "xdm:prop22": {
      "title": "prop22",
      "type": "string",
      "description": "Custom property variable 22."
    },
    "xdm:prop23": {
      "title": "prop23",
      "type": "string",
      "description": "Custom property variable 23."
    },
    "xdm:prop24": {
      "title": "prop24",
      "type": "string",
      "description": "Custom property variable 24."
    },
    "xdm:prop25": {
      "title": "prop25",
      "type": "string",
      "description": "Custom property variable 25."
    },
    "xdm:prop26": {
      "title": "prop26",
      "type": "string",
      "description": "Custom property variable 26."
    },
    "xdm:prop27": {
      "title": "prop27",
      "type": "string",
      "description": "Custom property variable 27."
    },
    "xdm:prop28": {
      "title": "prop28",
      "type": "string",
      "description": "Custom property variable 28."
    },
    "xdm:prop29": {
      "title": "prop29",
      "type": "string",
      "description": "Custom property variable 29."
    },
    "xdm:prop30": {
      "title": "prop30",
      "type": "string",
      "description": "Custom property variable 30."
    },
    "xdm:prop31": {
      "title": "prop31",
      "type": "string",
      "description": "Custom property variable 31."
    },
    "xdm:prop32": {
      "title": "prop32",
      "type": "string",
      "description": "Custom property variable 32."
    },
    "xdm:prop33": {
      "title": "prop33",
      "type": "string",
      "description": "Custom property variable 33."
    },
    "xdm:prop34": {
      "title": "prop34",
      "type": "string",
      "description": "Custom property variable 34."
    },
    "xdm:prop35": {
      "title": "prop35",
      "type": "string",
      "description": "Custom property variable 35."
    },
    "xdm:prop36": {
      "title": "prop36",
      "type": "string",
      "description": "Custom property variable 36."
    },
    "xdm:prop37": {
      "title": "prop37",
      "type": "string",
      "description": "Custom property variable 37."
    },
    "xdm:prop38": {
      "title": "prop38",
      "type": "string",
      "description": "Custom property variable 38."
    },
    "xdm:prop39": {
      "title": "prop39",
      "type": "string",
      "description": "Custom property variable 39."
    },
    "xdm:prop40": {
      "title": "prop40",
      "type": "string",
      "description": "Custom property variable 40."
    },
    "xdm:prop41": {
      "title": "prop41",
      "type": "string",
      "description": "Custom property variable 41."
    },
    "xdm:prop42": {
      "title": "prop42",
      "type": "string",
      "description": "Custom property variable 42."
    },
    "xdm:prop43": {
      "title": "prop43",
      "type": "string",
      "description": "Custom property variable 43."
    },
    "xdm:prop44": {
      "title": "prop44",
      "type": "string",
      "description": "Custom property variable 44."
    },
    "xdm:prop45": {
      "title": "prop45",
      "type": "string",
      "description": "Custom property variable 45."
    },
    "xdm:prop46": {
      "title": "prop46",
      "type": "string",
      "description": "Custom property variable 46."
    },
    "xdm:prop47": {
      "title": "prop47",
      "type": "string",
      "description": "Custom property variable 47."
    },
    "xdm:prop48": {
      "title": "prop48",
      "type": "string",
      "description": "Custom property variable 48."
    },
    "xdm:prop49": {
      "title": "prop49",
      "type": "string",
      "description": "Custom property variable 49."
    },
    "xdm:prop50": {
      "title": "prop50",
      "type": "string",
      "description": "Custom property variable 50."
    },
    "xdm:prop51": {
      "title": "prop51",
      "type": "string",
      "description": "Custom property variable 51."
    },
    "xdm:prop52": {
      "title": "prop52",
      "type": "string",
      "description": "Custom property variable 52."
    },
    "xdm:prop53": {
      "title": "prop53",
      "type": "string",
      "description": "Custom property variable 53."
    },
    "xdm:prop54": {
      "title": "prop54",
      "type": "string",
      "description": "Custom property variable 54."
    },
    "xdm:prop55": {
      "title": "prop55",
      "type": "string",
      "description": "Custom property variable 55."
    },
    "xdm:prop56": {
      "title": "prop56",
      "type": "string",
      "description": "Custom property variable 56."
    },
    "xdm:prop57": {
      "title": "prop57",
      "type": "string",
      "description": "Custom property variable 57."
    },
    "xdm:prop58": {
      "title": "prop58",
      "type": "string",
      "description": "Custom property variable 58."
    },
    "xdm:prop59": {
      "title": "prop59",
      "type": "string",
      "description": "Custom property variable 59."
    },
    "xdm:prop60": {
      "title": "prop60",
      "type": "string",
      "description": "Custom property variable 60."
    },
    "xdm:prop61": {
      "title": "prop61",
      "type": "string",
      "description": "Custom property variable 61."
    },
    "xdm:prop62": {
      "title": "prop62",
      "type": "string",
      "description": "Custom property variable 62."
    },
    "xdm:prop63": {
      "title": "prop63",
      "type": "string",
      "description": "Custom property variable 63."
    },
    "xdm:prop64": {
      "title": "prop64",
      "type": "string",
      "description": "Custom property variable 64."
    },
    "xdm:prop65": {
      "title": "prop65",
      "type": "string",
      "description": "Custom property variable 65."
    },
    "xdm:prop66": {
      "title": "prop66",
      "type": "string",
      "description": "Custom property variable 66."
    },
    "xdm:prop67": {
      "title": "prop67",
      "type": "string",
      "description": "Custom property variable 67."
    },
    "xdm:prop68": {
      "title": "prop68",
      "type": "string",
      "description": "Custom property variable 68."
    },
    "xdm:prop69": {
      "title": "prop69",
      "type": "string",
      "description": "Custom property variable 69."
    },
    "xdm:prop70": {
      "title": "prop70",
      "type": "string",
      "description": "Custom property variable 70."
    },
    "xdm:prop71": {
      "title": "prop71",
      "type": "string",
      "description": "Custom property variable 71."
    },
    "xdm:prop72": {
      "title": "prop72",
      "type": "string",
      "description": "Custom property variable 72."
    },
    "xdm:prop73": {
      "title": "prop73",
      "type": "string",
      "description": "Custom property variable 73."
    },
    "xdm:prop74": {
      "title": "prop74",
      "type": "string",
      "description": "Custom property variable 74."
    },
    "xdm:prop75": {
      "title": "prop75",
      "type": "string",
      "description": "Custom property variable 75."
    }
  },
  "simpletype": "`object`"
}
```







#### xdm:stateProvince
##### state

Client supplied state or province location.

`xdm:stateProvince`
* is optional
* type: `string`

##### xdm:stateProvince Type


`string`











## https://ns.adobe.com/experience/analytics/endUser
### End-User

`https://ns.adobe.com/experience/analytics/endUser`
* is optional
* type: endUser.schema
* defined in this schema

### https://ns.adobe.com/experience/analytics/endUser Type


* [endUser.schema](endUser.schema.md) – `https://ns.adobe.com/experience/analytics/endUser`





## https://ns.adobe.com/experience/analytics/environment
### Environment

`https://ns.adobe.com/experience/analytics/environment`
* is optional
* type: `object`
* defined in this schema

### https://ns.adobe.com/experience/analytics/environment Type


`object` with following properties:


| Property | Type | Required |
|----------|------|----------|
| `xdm:browserID`| integer | Optional |
| `xdm:browserIDStr`| string | Optional |
| `xdm:operatingSystemID`| integer | Optional |
| `xdm:operatingSystemIDStr`| string | Optional |



#### xdm:browserID
##### Browser ID

The Adobe Analytics identifier for the browser used. Deprecated, use xdm:browserIDStr instead.

`xdm:browserID`
* is optional
* type: `integer`

##### xdm:browserID Type


`integer`








#### xdm:browserIDStr
##### Browser ID

The Adobe Analytics identifier for the browser used.

`xdm:browserIDStr`
* is optional
* type: `string`

##### xdm:browserIDStr Type


`string`


All instances must conform to this regular expression 
(test examples [here](https://regexr.com/?expression=%5E%5B0-9%5D%2B)):
```regex
^[0-9]+
```








#### xdm:operatingSystemID
##### Operating System ID

The Adobe Analytics identifier of the operating system used. Deprecated, use xdm:operatingSystemIDStr instead.

`xdm:operatingSystemID`
* is optional
* type: `integer`

##### xdm:operatingSystemID Type


`integer`








#### xdm:operatingSystemIDStr
##### Operating System ID

The Adobe Analytics identifier of the operating system used.

`xdm:operatingSystemIDStr`
* is optional
* type: `string`

##### xdm:operatingSystemIDStr Type


`string`


All instances must conform to this regular expression 
(test examples [here](https://regexr.com/?expression=%5E%5B0-9%5D%2B)):
```regex
^[0-9]+
```











## https://ns.adobe.com/experience/analytics/event101to200
### Event 101 to 200

`https://ns.adobe.com/experience/analytics/event101to200`
* is optional
* type: event101to200.schema
* defined in this schema

### https://ns.adobe.com/experience/analytics/event101to200 Type


* [event101to200.schema](event101to200.schema.md) – `https://ns.adobe.com/experience/analytics/event101to200`





## https://ns.adobe.com/experience/analytics/event1to100
### Event 1 to 100

`https://ns.adobe.com/experience/analytics/event1to100`
* is optional
* type: event1to100.schema
* defined in this schema

### https://ns.adobe.com/experience/analytics/event1to100 Type


* [event1to100.schema](event1to100.schema.md) – `https://ns.adobe.com/experience/analytics/event1to100`





## https://ns.adobe.com/experience/analytics/event201to300
### Event 201 to 300

`https://ns.adobe.com/experience/analytics/event201to300`
* is optional
* type: event201to300.schema
* defined in this schema

### https://ns.adobe.com/experience/analytics/event201to300 Type


* [event201to300.schema](event201to300.schema.md) – `https://ns.adobe.com/experience/analytics/event201to300`





## https://ns.adobe.com/experience/analytics/event301to400
### Event 301 to 400

`https://ns.adobe.com/experience/analytics/event301to400`
* is optional
* type: event301to400.schema
* defined in this schema

### https://ns.adobe.com/experience/analytics/event301to400 Type


* [event301to400.schema](event301to400.schema.md) – `https://ns.adobe.com/experience/analytics/event301to400`





## https://ns.adobe.com/experience/analytics/event401to500
### Event 401 to 500

`https://ns.adobe.com/experience/analytics/event401to500`
* is optional
* type: event401to500.schema
* defined in this schema

### https://ns.adobe.com/experience/analytics/event401to500 Type


* [event401to500.schema](event401to500.schema.md) – `https://ns.adobe.com/experience/analytics/event401to500`





## https://ns.adobe.com/experience/analytics/event501to600
### Event 501 to 600

`https://ns.adobe.com/experience/analytics/event501to600`
* is optional
* type: event501to600.schema
* defined in this schema

### https://ns.adobe.com/experience/analytics/event501to600 Type


* [event501to600.schema](event501to600.schema.md) – `https://ns.adobe.com/experience/analytics/event501to600`





## https://ns.adobe.com/experience/analytics/event601to700
### Event 601 to 700

`https://ns.adobe.com/experience/analytics/event601to700`
* is optional
* type: event601to700.schema
* defined in this schema

### https://ns.adobe.com/experience/analytics/event601to700 Type


* [event601to700.schema](event601to700.schema.md) – `https://ns.adobe.com/experience/analytics/event601to700`





## https://ns.adobe.com/experience/analytics/event701to800
### Event 701 to 800

`https://ns.adobe.com/experience/analytics/event701to800`
* is optional
* type: event701to800.schema
* defined in this schema

### https://ns.adobe.com/experience/analytics/event701to800 Type


* [event701to800.schema](event701to800.schema.md) – `https://ns.adobe.com/experience/analytics/event701to800`





## https://ns.adobe.com/experience/analytics/event801to900
### Event 801 to 900

`https://ns.adobe.com/experience/analytics/event801to900`
* is optional
* type: event801to900.schema
* defined in this schema

### https://ns.adobe.com/experience/analytics/event801to900 Type


* [event801to900.schema](event801to900.schema.md) – `https://ns.adobe.com/experience/analytics/event801to900`





## https://ns.adobe.com/experience/analytics/event901to1000
### Event 901 to 1000

`https://ns.adobe.com/experience/analytics/event901to1000`
* is optional
* type: event901to1000.schema
* defined in this schema

### https://ns.adobe.com/experience/analytics/event901to1000 Type


* [event901to1000.schema](event901to1000.schema.md) – `https://ns.adobe.com/experience/analytics/event901to1000`





## https://ns.adobe.com/experience/analytics/session
### Session

`https://ns.adobe.com/experience/analytics/session`
* is optional
* type: session.schema
* defined in this schema

### https://ns.adobe.com/experience/analytics/session Type


* [session.schema](session.schema.md) – `https://ns.adobe.com/experience/analytics/session`




