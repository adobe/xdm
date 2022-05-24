
# Member Details Schema

```
https://ns.adobe.com/xdm/mixins/healthcare-member
```

Details of a person who may be waiting for a care or may be receiving care or may have already received care.

| [Abstract](../../../abstract.md) | [Extensible](../../../extensions.md) | [Status](../../../status.md) | [Identifiable](../../../id.md) | [Custom Properties](../../../extensions.md) | [Additional Properties](../../../extensions.md) | Defined In |
|----------------------------------|--------------------------------------|------------------------------|--------------------------------|---------------------------------------------|-------------------------------------------------|------------|
| Can be instantiated | Yes | Experimental | No | Forbidden | Permitted | [fieldgroups/profile/healthcare-member.schema.json](fieldgroups/profile/healthcare-member.schema.json) |

## Member Details Example
```json
{}
```

# Member Details Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [xdm:Medication](#xdmmedication) | `object` | Optional | Member Details (this schema) |
| [xdm:beneficiaryRelationship](#xdmbeneficiaryrelationship) | `string` | Optional | Member Details (this schema) |
| [xdm:emergencyContact](#xdmemergencycontact) | `object` | Optional | Member Details (this schema) |
| [xdm:isLead](#xdmislead) | `boolean` | Optional | Member Details (this schema) |
| [xdm:isOpportunity](#xdmisopportunity) | `boolean` | Optional | Member Details (this schema) |
| [xdm:member](#xdmmember) | `object` | Optional | Member Details (this schema) |
| [xdm:prefferedAvaiability](#xdmprefferedavaiability) | `string` | Optional | Member Details (this schema) |
| [xdm:primaryCarePhysician ](#xdmprimarycarephysician-) | `object` | Optional | Member Details (this schema) |
| [xdm:primaryMemeberID](#xdmprimarymemeberid) | `string` | Optional | Member Details (this schema) |
| [xdm:specialist](#xdmspecialist) | `object[]` | Optional | Member Details (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## xdm:Medication


`xdm:Medication`
* is optional
* type: `object`
* defined in this schema

### xdm:Medication Type


`object` with following properties:


| Property | Type | Required |
|----------|------|----------|
| `xdm:isCurrent`| boolean | Optional |
| `xdm:medicationDate`| string | Optional |
| `xdm:medicationID`| string | Optional |



#### xdm:isCurrent

Boolean flag indicates if this medication is current or previous.

`xdm:isCurrent`
* is optional
* type: `boolean`

##### xdm:isCurrent Type


`boolean`







#### xdm:medicationDate

Medication Date.

`xdm:medicationDate`
* is optional
* type: `string`

##### xdm:medicationDate Type


`string`
* format: `date-time` – date and time (according to [RFC 3339, section 5.6](http://tools.ietf.org/html/rfc3339))








#### xdm:medicationID

Medication unique identifier.

`xdm:medicationID`
* is optional
* type: `string`

##### xdm:medicationID Type


`string`











## xdm:beneficiaryRelationship

Beneficiary relationship to the Subscriber if the member is a dependent(self,spouse,child..etc).

`xdm:beneficiaryRelationship`
* is optional
* type: `string`
* defined in this schema

### xdm:beneficiaryRelationship Type


`string`






## xdm:emergencyContact


`xdm:emergencyContact`
* is optional
* type: `object`
* defined in this schema

### xdm:emergencyContact Type


`object` with following properties:


| Property | Type | Required |
|----------|------|----------|
| `xdm:contactPhone`| string | Optional |
| `xdm:name`| string | Optional |



#### xdm:contactPhone

Emergency contact phone number.

`xdm:contactPhone`
* is optional
* type: `string`

##### xdm:contactPhone Type


`string`








#### xdm:name

Emergency contact name.

`xdm:name`
* is optional
* type: `string`

##### xdm:name Type


`string`











## xdm:isLead

Boolean flag indicates if this member is a lead.

`xdm:isLead`
* is optional
* type: `boolean`
* defined in this schema

### xdm:isLead Type


`boolean`





## xdm:isOpportunity

Boolean flag indicates if this this member is a opportunity.

`xdm:isOpportunity`
* is optional
* type: `boolean`
* defined in this schema

### xdm:isOpportunity Type


`boolean`





## xdm:member


`xdm:member`
* is optional
* type: `object`
* defined in this schema

### xdm:member Type


`object` with following properties:


| Property | Type | Required |
|----------|------|----------|
| `xdm:ID`| string | Optional |
| `xdm:memberAddress`| object | Optional |
| `xdm:name`|  | Optional |



#### xdm:ID

Unique Identifier of the patient/member.

`xdm:ID`
* is optional
* type: `string`

##### xdm:ID Type


`string`








#### xdm:memberAddress

undefined

`xdm:memberAddress`
* is optional
* type: `object`

##### xdm:memberAddress Type

Unknown type `object`.

```json
{
  "type": "object",
  "properties": {
    "xdm:addressType": {
      "Title": "Member Address type",
      "type": "string",
      "enum": [
        "Home",
        "Work",
        "Mailing",
        "Other"
      ],
      "meta:enum": {
        "Home": "Home Address",
        "Work": "Work Address",
        "Mailing": "Mailing Address",
        "Other": "Other Address"
      }
    },
    "xdm:address": {
      "Title": "Member Address",
      "$ref": "https://ns.adobe.com/xdm/common/address"
    },
    "xdm:effectiveStartDate": {
      "Title": "Effective Start Date",
      "type": "string",
      "format": "date-time",
      "description": "Address start date."
    },
    "xdm:efectiveEndDate": {
      "Title": "Effective End Date",
      "type": "string",
      "format": "date-time",
      "description": "Address end date."
    }
  },
  "xdm:phoneNumber": {
    "Title": "Phone Number",
    "$ref": "https://ns.adobe.com/xdm/context/phonenumber"
  },
  "xdm:memberDetails": {
    "Title": "Member Details",
    "$ref": "https://ns.adobe.com/xdm/context/person",
    "description": "An individual patient/member additional details."
  },
  "xdm:emailAddress": {
    "Title": "Email Address",
    "$ref": "https://ns.adobe.com/xdm/context/emailaddress"
  },
  "xdm:memberOrganization": {
    "Title": "Member Organization",
    "$ref": "https://ns.adobe.com/xdm/datatypes/b2b-account-organization"
  },
  "simpletype": "`object`"
}
```







#### xdm:name

undefined

`xdm:name`
* is optional
* type: reference

##### xdm:name Type


* []() – `https://ns.adobe.com/xdm/context/person-name`










## xdm:prefferedAvaiability

Patient prefered day and time avaiability for an appointment.

`xdm:prefferedAvaiability`
* is optional
* type: `string`
* defined in this schema

### xdm:prefferedAvaiability Type


`string`






## xdm:primaryCarePhysician 


`xdm:primaryCarePhysician `
* is optional
* type: `object`
* defined in this schema

### xdm:primaryCarePhysician  Type


`object` with following properties:


| Property | Type | Required |
|----------|------|----------|
| `xdm:ID `| string | Optional |
| `xdm:endDate`| string | Optional |
| `xdm:name`| string | Optional |
| `xdm:startDate`| string | Optional |



#### xdm:ID 

Primary Care Physician unique identifier.

`xdm:ID `
* is optional
* type: `string`

##### xdm:ID  Type


`string`








#### xdm:endDate

Primary Care Physician end date.

`xdm:endDate`
* is optional
* type: `string`

##### xdm:endDate Type


`string`
* format: `date-time` – date and time (according to [RFC 3339, section 5.6](http://tools.ietf.org/html/rfc3339))








#### xdm:name

Primary Care Physician Name.

`xdm:name`
* is optional
* type: `string`

##### xdm:name Type


`string`








#### xdm:startDate

Primary Care Physician start date.

`xdm:startDate`
* is optional
* type: `string`

##### xdm:startDate Type


`string`
* format: `date-time` – date and time (according to [RFC 3339, section 5.6](http://tools.ietf.org/html/rfc3339))











## xdm:primaryMemeberID

Unique Identifier of the primary subscriber if the member is dependent.

`xdm:primaryMemeberID`
* is optional
* type: `string`
* defined in this schema

### xdm:primaryMemeberID Type


`string`






## xdm:specialist


`xdm:specialist`
* is optional
* type: `object[]`

* defined in this schema

### xdm:specialist Type


Array type: `object[]`

All items must be of the type:
`object` with following properties:


| Property | Type | Required |
|----------|------|----------|
| `xdm:diagnosis`| string | Optional |
| `xdm:name`| string | Optional |
| `xdm:providerID`| string | Optional |



#### xdm:diagnosis

Specialization diagnosis.

`xdm:diagnosis`
* is optional
* type: `string`

##### xdm:diagnosis Type


`string`








#### xdm:name

Name of the specialist.

`xdm:name`
* is optional
* type: `string`

##### xdm:name Type


`string`








#### xdm:providerID

Provider unique identifier.

`xdm:providerID`
* is optional
* type: `string`

##### xdm:providerID Type


`string`













