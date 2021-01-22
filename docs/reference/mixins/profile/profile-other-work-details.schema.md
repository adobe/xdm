
# Profile Other Work Details Schema

```
https://ns.adobe.com/xdm/context/profile-other-work-details
```

This mixin is used to capture information regarding additional/other work-related details of the individual such as work address, work email, work phone number, and organizations to which the profile belongs.

| [Abstract](../../../abstract.md) | [Extensible](../../../extensions.md) | [Status](../../../status.md) | [Identifiable](../../../id.md) | [Custom Properties](../../../extensions.md) | [Additional Properties](../../../extensions.md) | Defined In |
|----------------------------------|--------------------------------------|------------------------------|--------------------------------|---------------------------------------------|-------------------------------------------------|------------|
| Can be instantiated | Yes | Experimental | No | Forbidden | Permitted | [mixins/profile/profile-other-work-details.schema.json](mixins/profile/profile-other-work-details.schema.json) |
## Schema Hierarchy

* Profile Other Work Details `https://ns.adobe.com/xdm/context/profile-other-work-details`
  * [Extensibility base schema](../../datatypes/extensible.schema.md) `https://ns.adobe.com/xdm/common/extensible`
  * [Postal address](../../datatypes/demographic/address.schema.md) `https://ns.adobe.com/xdm/common/address`
  * [Phone number](../../datatypes/demographic/phonenumber.schema.md) `https://ns.adobe.com/xdm/context/phonenumber`


## Profile Other Work Details Example
```json
{
  "xdm:otherAddress": {
    "@id": "https://data.adobe.io/entities/address/234",
    "xdm:primary": false,
    "xdm:street1": "100 Park Ave",
    "xdm:city": "San Jose",
    "xdm:stateProvince": "US-CA",
    "xdm:postalCode": "95110",
    "xdm:country": "United States",
    "xdm:countryCode": "US",
    "schema:latitude": 37.3382,
    "schema:longitude": -121.8863,
    "xdm:status": "active",
    "xdm:lastVerifiedDate": "2018-01-02"
  },
  "xdm:otherPhone": {
    "xdm:primary": true,
    "xdm:number": "1-408-888-7777",
    "xdm:status": "active"
  },
  "xdm:extendedWorkDetails": {
    "xdm:assistantDetails": {
      "xdm:name": {
        "xdm:firstName": "John",
        "xdm:middleName": "S",
        "xdm:lastName": "Doe",
        "xdm:fullName": "John S. Doe"
      },
      "xdm:phone": {
        "xdm:primary": true,
        "xdm:number": "1-408-888-7777",
        "xdm:status": "active"
      }
    },
    "xdm:reportsToID": "RPT10000",
    "xdm:departments": [
      "Finance",
      "Marketing"
    ],
    "xdm:jobTitle": "",
    "xdm:photoUrl": "https://PersonOrg.com/personPhoto.jpg"
  }
}
```

# Profile Other Work Details Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [xdm:extendedWorkDetails](#xdmextendedworkdetails) | `object` | Optional | Profile Other Work Details (this schema) |
| [xdm:otherAddress](#xdmotheraddress) | Postal address | Optional | Profile Other Work Details (this schema) |
| [xdm:otherPhone](#xdmotherphone) | Phone number | Optional | Profile Other Work Details (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## xdm:extendedWorkDetails
### Some Additional Person Work Details

`xdm:extendedWorkDetails`
* is optional
* type: `object`
* defined in this schema

### xdm:extendedWorkDetails Type


`object` with following properties:


| Property | Type | Required |
|----------|------|----------|
| `xdm:assistantDetails`| object | Optional |
| `xdm:departments`| array | Optional |
| `xdm:jobTitle`| string | Optional |
| `xdm:photoUrl`| string | Optional |
| `xdm:reportsToID`| string | Optional |



#### xdm:assistantDetails
##### Assitant Details

undefined

`xdm:assistantDetails`
* is optional
* type: `object`

##### xdm:assistantDetails Type

Unknown type `object`.

```json
{
  "type": "object",
  "title": "Assitant Details",
  "properties": {
    "xdm:name": {
      "title": "Assistant Name",
      "$ref": "https://ns.adobe.com/xdm/context/person-name",
      "description": "Person's assistant full name."
    },
    "xdm:phone": {
      "title": "Assistant Phone",
      "$ref": "https://ns.adobe.com/xdm/context/phonenumber",
      "description": "Person's assistant phone number."
    }
  },
  "simpletype": "`object`"
}
```







#### xdm:departments
##### Department Name

Department name where the person works.

`xdm:departments`
* is optional
* type: `string[]`


##### xdm:departments Type


Array type: `string[]`

All items must be of the type:
`string`











#### xdm:jobTitle
##### Job Title

Job title of the person.

`xdm:jobTitle`
* is optional
* type: `string`

##### xdm:jobTitle Type


`string`








#### xdm:photoUrl
##### Photo Url

Photo url of the person.

`xdm:photoUrl`
* is optional
* type: `string`

##### xdm:photoUrl Type


`string`
* format: `uri` – Uniformous Resource Identifier (according to [RFC3986](http://tools.ietf.org/html/rfc3986))








#### xdm:reportsToID
##### Reports To Id

Identifier of the Reporting Manager.

`xdm:reportsToID`
* is optional
* type: `string`

##### xdm:reportsToID Type


`string`











## xdm:otherAddress
### Other Address

Other/Alternate postal address of the person.

`xdm:otherAddress`
* is optional
* type: Postal address
* defined in this schema

### xdm:otherAddress Type


* [Postal address](../../datatypes/demographic/address.schema.md) – `https://ns.adobe.com/xdm/common/address`





## xdm:otherPhone
### Other Phone

Other/Alternate phone number of the person.

`xdm:otherPhone`
* is optional
* type: Phone number
* defined in this schema

### xdm:otherPhone Type


* [Phone number](../../datatypes/demographic/phonenumber.schema.md) – `https://ns.adobe.com/xdm/context/phonenumber`




