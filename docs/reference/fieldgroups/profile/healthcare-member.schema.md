
# Member Details Schema

```
https://ns.adobe.com/xdm/mixins/healthcare-member
```

Details of a person who may be waiting for a care or may be receiving care or may have already received care.

| [Abstract](../../../abstract.md) | [Extensible](../../../extensions.md) | [Status](../../../status.md) | [Identifiable](../../../id.md) | [Custom Properties](../../../extensions.md) | [Additional Properties](../../../extensions.md) | Defined In |
|----------------------------------|--------------------------------------|------------------------------|--------------------------------|---------------------------------------------|-------------------------------------------------|------------|
| Can be instantiated | Yes | Experimental | No | Forbidden | Permitted | [fieldgroups/profile/healthcare-member.schema.json](fieldgroups/profile/healthcare-member.schema.json) |
## Schema Hierarchy

* Member Details `https://ns.adobe.com/xdm/mixins/healthcare-member`
  * [External Source System Audit Details](../shared/external-source-system-audit-details.schema.md) `https://ns.adobe.com/xdm/common/external-source-system-audit-details`


## Member Details Example
```json
{}
```

# Member Details Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [xdm:Medication](#xdmmedication) | `object[]` | Optional | Member Details (this schema) |
| [xdm:beneficiaryRelationship](#xdmbeneficiaryrelationship) | `string` | Optional | Member Details (this schema) |
| [xdm:billingAccountID](#xdmbillingaccountid) | `string` | Optional | Member Details (this schema) |
| [xdm:dependent](#xdmdependent) | `integer` | Optional | Member Details (this schema) |
| [xdm:emergencyContact](#xdmemergencycontact) | `object` | Optional | Member Details (this schema) |
| [xdm:extSourceSystemAudit](#xdmextsourcesystemaudit) | External Source System Audit Attributes | Optional | [External Source System Audit Details](../shared/external-source-system-audit-details.schema.md#xdmextsourcesystemaudit) |
| [xdm:isLead](#xdmislead) | `boolean` | Optional | Member Details (this schema) |
| [xdm:isOpportunity](#xdmisopportunity) | `boolean` | Optional | Member Details (this schema) |
| [xdm:member](#xdmmember) | `object` | Optional | Member Details (this schema) |
| [xdm:plan](#xdmplan) | `object[]` | Optional | Member Details (this schema) |
| [xdm:prefferedAvaiability](#xdmprefferedavaiability) | `string` | Optional | Member Details (this schema) |
| [xdm:primaryCarePhysician ](#xdmprimarycarephysician-) | `object[]` | Optional | Member Details (this schema) |
| [xdm:primaryMemeberID](#xdmprimarymemeberid) | `string` | Optional | Member Details (this schema) |
| [xdm:specialist](#xdmspecialist) | `object[]` | Optional | Member Details (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## xdm:Medication


`xdm:Medication`
* is optional
* type: `object[]`

* defined in this schema

### xdm:Medication Type


Array type: `object[]`

All items must be of the type:
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






## xdm:billingAccountID

Unique Identifier of the billing account.

`xdm:billingAccountID`
* is optional
* type: `string`
* defined in this schema

### xdm:billingAccountID Type


`string`






## xdm:dependent

number issued to each beneficiary.

`xdm:dependent`
* is optional
* type: `integer`
* defined in this schema

### xdm:dependent Type


`integer`






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











## xdm:extSourceSystemAudit
### External Source System Audit Properties

Audit attributes for external sources.

`xdm:extSourceSystemAudit`
* is optional
* type: External Source System Audit Attributes
* defined in [External Source System Audit Details](../shared/external-source-system-audit-details.schema.md#xdmextsourcesystemaudit)

### xdm:extSourceSystemAudit Type


* [External Source System Audit Attributes](../../datatypes/auditing/external-source-system-audit.schema.md) – `https://ns.adobe.com/xdm/common/external-source-system-audit`





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
    "description": "Member's phone number.",
    "$ref": "https://ns.adobe.com/xdm/context/phonenumber"
  },
  "xdm:memberDetails": {
    "Title": "Member Details",
    "description": "Member's additional details.",
    "type": "object",
    "properties": {
      "xdm:birthDate": {
        "title": "Birth date(YYYY-MM-DD)",
        "type": "string",
        "format": "date",
        "description": "The full date a person was born."
      },
      "xdm:gender": {
        "title": "Gender",
        "type": "string",
        "enum": [
          "male",
          "female",
          "not_specified",
          "non_specific"
        ],
        "meta:enum": {
          "male": "Male",
          "female": "Female",
          "not_specified": "Not Specified",
          "non_specific": "Non-specific"
        },
        "description": "Gender identity of the person.\n",
        "default": "not_specified"
      },
      "xdm:maritalStatus": {
        "title": "Marital Status",
        "type": "string",
        "enum": [
          "married",
          "single",
          "divorced",
          "widowed",
          "not_specified"
        ],
        "meta:enum": {
          "married": "Married",
          "single": "Single",
          "divorced": "Divorced",
          "widowed": "Widowed",
          "not_specified": "Not Specified"
        },
        "description": "Describes a person's relationship with a significant other.",
        "default": "not_specified"
      },
      "xdm:nationality": {
        "title": "Nationality",
        "type": "string",
        "pattern": "^[A-Z]{2}$",
        "description": "The legal relationship between a person and their state represented using the ISO 3166-1 Alpha-2 code."
      },
      "xdm:dateAgeCollected": {
        "Title": "Date Age Collected",
        "type": "string",
        "format": "date-time",
        "description": "Date when date of birth information collected."
      },
      "xdm:multipleBirth": {
        "type": "object",
        "properties": {
          "xdm:isMultipleBirth ": {
            "Title": "Is Multiple Birth",
            "type": "boolean",
            "description": "Boolean flag to indicate if the member had a multiple birth."
          },
          "xdm:multipleBirthNumber": {
            "Title": "Multiple Birth Number",
            "type": "integer",
            "description": "Number of babies born if multiple birth is true."
          }
        }
      }
    }
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

Member's full name.

`xdm:name`
* is optional
* type: reference

##### xdm:name Type


* []() – `https://ns.adobe.com/xdm/context/person-name`










## xdm:plan


`xdm:plan`
* is optional
* type: `object[]`

* defined in this schema

### xdm:plan Type


Array type: `object[]`

All items must be of the type:
`object` with following properties:


| Property | Type | Required |
|----------|------|----------|
| `xdm:ID`| string | Optional |
| `xdm:affiliation`| string | Optional |
| `xdm:contractID`| string | Optional |
| `xdm:coverageEndDate`| string | Optional |
| `xdm:coverageStartDate`| string | Optional |
| `xdm:coverageType`| string | Optional |
| `xdm:isActive`| boolean | Optional |
| `xdm:lastVerification`| string | Optional |
| `xdm:network`| string | Optional |
| `xdm:ownerID`| string | Optional |
| `xdm:payerID`| string | Optional |
| `xdm:planType`| string | Optional |



#### xdm:ID

Plan ID unique identifier.

`xdm:ID`
* is optional
* type: `string`

##### xdm:ID Type


`string`








#### xdm:affiliation

An affiliation to a government service, such as the army or navy..

`xdm:affiliation`
* is optional
* type: `string`

##### xdm:affiliation Type


`string`








#### xdm:contractID

Unique identifier of the contract that is signed by the member.

`xdm:contractID`
* is optional
* type: `string`

##### xdm:contractID Type


`string`








#### xdm:coverageEndDate

Coverage end date.

`xdm:coverageEndDate`
* is optional
* type: `string`

##### xdm:coverageEndDate Type


`string`
* format: `date-time` – date and time (according to [RFC 3339, section 5.6](http://tools.ietf.org/html/rfc3339))








#### xdm:coverageStartDate

Coverage start date.

`xdm:coverageStartDate`
* is optional
* type: `string`

##### xdm:coverageStartDate Type


`string`
* format: `date-time` – date and time (according to [RFC 3339, section 5.6](http://tools.ietf.org/html/rfc3339))








#### xdm:coverageType

Member plan coverage type.

`xdm:coverageType`
* is optional
* type: `enum`

The value of this property **must** be equal to one of the [known values below](#xdmplan-known-values).

##### xdm:coverageType Known Values
| Value | Description |
|-------|-------------|
| `Medical` | Medical |
| `Dental` | Dental |
| `Vision` | Vision |
| `Accident` | Accident |






#### xdm:isActive

Boolean flag indicates whether the plan is active.

`xdm:isActive`
* is optional
* type: `boolean`

##### xdm:isActive Type


`boolean`







#### xdm:lastVerification

The date on which this plan was last verified.

`xdm:lastVerification`
* is optional
* type: `string`

##### xdm:lastVerification Type


`string`
* format: `date-time` – date and time (according to [RFC 3339, section 5.6](http://tools.ietf.org/html/rfc3339))








#### xdm:network

The insurer-specific identifier for the insurer-defined network of providers to which the beneficiary may seek treatment which will be covered at the 'in-network' rate, otherwise 'out of network' term.

`xdm:network`
* is optional
* type: `string`

##### xdm:network Type


`string`








#### xdm:ownerID

Unique identifier of the Owner of the policy which could be owned by an individual , group or an organization.

`xdm:ownerID`
* is optional
* type: `string`

##### xdm:ownerID Type


`string`








#### xdm:payerID

Payer unique identifier.

`xdm:payerID`
* is optional
* type: `string`

##### xdm:payerID Type


`string`








#### xdm:planType

This indicates if the plan is primary,secondary or tertiary plan.

`xdm:planType`
* is optional
* type: `enum`

The value of this property **must** be equal to one of the [known values below](#xdmplan-known-values).

##### xdm:planType Known Values
| Value | Description |
|-------|-------------|
| `primary` | primary |
| `secondary` | secondary |
| `tertiary` | tertiary |












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
* type: `object[]`

* defined in this schema

### xdm:primaryCarePhysician  Type


Array type: `object[]`

All items must be of the type:
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













