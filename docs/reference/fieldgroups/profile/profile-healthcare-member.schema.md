
# Healthcare Member Details Schema

```
https://ns.adobe.com/xdm/mixins/profile-healthcare-member
```

Healthcare member details of a person that has or will receive a service or care, such as contact information, primary care physician, and plan information.

| [Abstract](../../../abstract.md) | [Extensible](../../../extensions.md) | [Status](../../../status.md) | [Identifiable](../../../id.md) | [Custom Properties](../../../extensions.md) | [Additional Properties](../../../extensions.md) | Defined In |
|----------------------------------|--------------------------------------|------------------------------|--------------------------------|---------------------------------------------|-------------------------------------------------|------------|
| Can be instantiated | Yes | Experimental | No | Forbidden | Permitted | [fieldgroups/profile/profile-healthcare-member.schema.json](fieldgroups/profile/profile-healthcare-member.schema.json) |
## Schema Hierarchy

* Healthcare Member Details `https://ns.adobe.com/xdm/mixins/profile-healthcare-member`
  * [Personal Contact Details](profile-personal-details.schema.md) `https://ns.adobe.com/xdm/context/profile-personal-details`
  * [Demographic Details](profile-person-details.schema.md) `https://ns.adobe.com/xdm/context/profile-person-details`


## Healthcare Member Details Example
```json
{}
```

# Healthcare Member Details Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [xdm:billingAddress](#xdmbillingaddress) | Postal address | Optional | [Personal Contact Details](profile-personal-details.schema.md#xdmbillingaddress) |
| [xdm:faxPhone](#xdmfaxphone) | Phone number | Optional | [Personal Contact Details](profile-personal-details.schema.md#xdmfaxphone) |
| [xdm:homeAddress](#xdmhomeaddress) | Postal address | Optional | [Personal Contact Details](profile-personal-details.schema.md#xdmhomeaddress) |
| [xdm:homePhone](#xdmhomephone) | Phone number | Optional | [Personal Contact Details](profile-personal-details.schema.md#xdmhomephone) |
| [xdm:mailingAddress](#xdmmailingaddress) | Postal address | Optional | [Personal Contact Details](profile-personal-details.schema.md#xdmmailingaddress) |
| [xdm:memberDetails](#xdmmemberdetails) | `object` | Optional | Healthcare Member Details (this schema) |
| [xdm:mobilePhone](#xdmmobilephone) | Phone number | Optional | [Personal Contact Details](profile-personal-details.schema.md#xdmmobilephone) |
| [xdm:person](#xdmperson) | Person | Optional | [Demographic Details](profile-person-details.schema.md#xdmperson) |
| [xdm:personalEmail](#xdmpersonalemail) | Email address | Optional | [Personal Contact Details](profile-personal-details.schema.md#xdmpersonalemail) |
| [xdm:shippingAddress](#xdmshippingaddress) | Postal address | Optional | [Personal Contact Details](profile-personal-details.schema.md#xdmshippingaddress) |
| `*` | any | Additional | this schema *allows* additional properties |

## xdm:billingAddress
### Billing Address

Billing postal address.

`xdm:billingAddress`
* is optional
* type: Postal address
* defined in [Personal Contact Details](profile-personal-details.schema.md#xdmbillingaddress)

### xdm:billingAddress Type


* [Postal address](../../datatypes/demographic/address.schema.md) – `https://ns.adobe.com/xdm/common/address`





## xdm:faxPhone
### Fax Phone

Fax phone number.

`xdm:faxPhone`
* is optional
* type: Phone number
* defined in [Personal Contact Details](profile-personal-details.schema.md#xdmfaxphone)

### xdm:faxPhone Type


* [Phone number](../../datatypes/demographic/phonenumber.schema.md) – `https://ns.adobe.com/xdm/context/phonenumber`





## xdm:homeAddress
### Home Address

A home postal address.

`xdm:homeAddress`
* is optional
* type: Postal address
* defined in [Personal Contact Details](profile-personal-details.schema.md#xdmhomeaddress)

### xdm:homeAddress Type


* [Postal address](../../datatypes/demographic/address.schema.md) – `https://ns.adobe.com/xdm/common/address`





## xdm:homePhone
### Home Phone

Home phone number.

`xdm:homePhone`
* is optional
* type: Phone number
* defined in [Personal Contact Details](profile-personal-details.schema.md#xdmhomephone)

### xdm:homePhone Type


* [Phone number](../../datatypes/demographic/phonenumber.schema.md) – `https://ns.adobe.com/xdm/context/phonenumber`





## xdm:mailingAddress
### Mailing Address

Mailing postal address.

`xdm:mailingAddress`
* is optional
* type: Postal address
* defined in [Personal Contact Details](profile-personal-details.schema.md#xdmmailingaddress)

### xdm:mailingAddress Type


* [Postal address](../../datatypes/demographic/address.schema.md) – `https://ns.adobe.com/xdm/common/address`





## xdm:memberDetails
### Member

Information about the member.

`xdm:memberDetails`
* is optional
* type: `object`
* defined in this schema

### xdm:memberDetails Type


`object` with following properties:


| Property | Type | Required |
|----------|------|----------|
| `xdm:beneficiaryRelationship`| string | Optional |
| `xdm:billingAccountID`| string | Optional |
| `xdm:dateAgeCollected`| string | Optional |
| `xdm:deceasedDate`| string | Optional |
| `xdm:emergencyContact`| object | Optional |
| `xdm:isDeceased`| boolean | Optional |
| `xdm:isDependent`| boolean | Optional |
| `xdm:medications`| array | Optional |
| `xdm:multipleBirth`| object | Optional |
| `xdm:nationality`| string | Optional |
| `xdm:plans`| array | Optional |
| `xdm:preferredAvaiability`| string | Optional |
| `xdm:primaryCarePhysicians`| array | Optional |
| `xdm:primaryMemberID`| string | Optional |
| `xdm:specialists`| array | Optional |



#### xdm:beneficiaryRelationship
##### Beneficiary Relationship

Beneficiary relationship to the subscriber if the member is a dependent (self, spouse, child, etc).

`xdm:beneficiaryRelationship`
* is optional
* type: `enum`

The value of this property **must** be equal to one of the [known values below](#xdmmemberdetails-known-values).

##### xdm:beneficiaryRelationship Known Values
| Value | Description |
|-------|-------------|
| `self` | Self |
| `spouse` | Spouse |
| `child` | Child |
| `parent` | Parent |






#### xdm:billingAccountID
##### Billing Account ID

Unique identifier of the billing account.

`xdm:billingAccountID`
* is optional
* type: `string`

##### xdm:billingAccountID Type


`string`








#### xdm:dateAgeCollected
##### Date Age Collected

The date the patient age was collected.

`xdm:dateAgeCollected`
* is optional
* type: `string`

##### xdm:dateAgeCollected Type


`string`
* format: `date-time` – date and time (according to [RFC 3339, section 5.6](http://tools.ietf.org/html/rfc3339))








#### xdm:deceasedDate
##### Deceased Date

Deceased date if the patient is deceased.

`xdm:deceasedDate`
* is optional
* type: `string`

##### xdm:deceasedDate Type


`string`
* format: `date-time` – date and time (according to [RFC 3339, section 5.6](http://tools.ietf.org/html/rfc3339))








#### xdm:emergencyContact
##### Emergency Contact

Emergency contact details.

`xdm:emergencyContact`
* is optional
* type: `object`

##### xdm:emergencyContact Type

Unknown type `object`.

```json
{
  "title": "Emergency Contact",
  "description": "Emergency contact details.",
  "type": "object",
  "properties": {
    "xdm:fullName": {
      "title": "Full Name",
      "type": "string",
      "description": "Full name of the emergency contact."
    },
    "xdm:phone": {
      "title": "Phone Number",
      "type": "string",
      "description": "Phone number of the emergency contact."
    },
    "xdm:relationshipToMember": {
      "title": "Relationship To Member",
      "type": "string",
      "description": "Emergency contact's relationship to the member."
    }
  },
  "simpletype": "`object`"
}
```







#### xdm:isDeceased
##### Deceased Indicator

Boolean flag indicating if the member is deceased.

`xdm:isDeceased`
* is optional
* type: `boolean`

##### xdm:isDeceased Type


`boolean`







#### xdm:isDependent
##### Is Dependent

Indicates whether this member is a dependent.

`xdm:isDependent`
* is optional
* type: `boolean`

##### xdm:isDependent Type


`boolean`







#### xdm:medications
##### Medications

Medication information including ID, start date, and active flag.

`xdm:medications`
* is optional
* type: `object[]`


##### xdm:medications Type


Array type: `object[]`

All items must be of the type:
`object` with following properties:


| Property | Type | Required |
|----------|------|----------|
| `xdm:ID`| string | Optional |
| `xdm:isCurrent`| boolean | Optional |
| `xdm:numberOfRefills`| integer | Optional |
| `xdm:refillLocation`|  | Optional |
| `xdm:startDate`| string | Optional |



#### xdm:ID
##### Medication ID

Unique identifier for the medication.

`xdm:ID`
* is optional
* type: `string`

##### xdm:ID Type


`string`








#### xdm:isCurrent
##### Is Current

Indicates whether the medication is current or past.

`xdm:isCurrent`
* is optional
* type: `boolean`

##### xdm:isCurrent Type


`boolean`







#### xdm:numberOfRefills
##### Number Of Refills

Number of refills prescribed by the provider for this medication.

`xdm:numberOfRefills`
* is optional
* type: `integer`

##### xdm:numberOfRefills Type


`integer`








#### xdm:refillLocation
##### Medication Refill Location

undefined

`xdm:refillLocation`
* is optional
* type: reference

##### xdm:refillLocation Type


* []() – `https://ns.adobe.com/xdm/common/address`







#### xdm:startDate
##### Medication Start Date

Date on which the patient began taking the medication.

`xdm:startDate`
* is optional
* type: `string`

##### xdm:startDate Type


`string`
* format: `date-time` – date and time (according to [RFC 3339, section 5.6](http://tools.ietf.org/html/rfc3339))















#### xdm:multipleBirth

undefined

`xdm:multipleBirth`
* is optional
* type: `object`

##### xdm:multipleBirth Type

Unknown type `object`.

```json
{
  "type": "object",
  "properties": {
    "xdm:isMultipleBirth": {
      "title": "Multiple Birth Indicator",
      "type": "boolean",
      "description": "Boolean flag to indicate if the member gave multiple births."
    },
    "xdm:multipleBirthNumber": {
      "title": "Number Of Babies",
      "type": "integer",
      "description": "Number of babies born if multiple birth is true."
    }
  },
  "simpletype": "`object`"
}
```







#### xdm:nationality
##### Nationality

The legal relationship between a patient/member and their state represented using the ISO 3166-1 Alpha-2 code.

`xdm:nationality`
* is optional
* type: `string`

##### xdm:nationality Type


`string`


All instances must conform to this regular expression 
(test examples [here](https://regexr.com/?expression=%5E%5BA-Z%5D%7B2%7D%24)):
```regex
^[A-Z]{2}$
```








#### xdm:plans
##### Enrolled Plans

undefined

`xdm:plans`
* is optional
* type: `object[]`


##### xdm:plans Type


Array type: `object[]`

All items must be of the type:
`object` with following properties:


| Property | Type | Required |
|----------|------|----------|
| `xdm:coverageEndDate`| string | Optional |
| `xdm:coverageStartDate`| string | Optional |
| `xdm:isActive`| boolean | Optional |
| `xdm:planID`| string | Optional |



#### xdm:coverageEndDate
##### Coverage End Date

Coverage end date.

`xdm:coverageEndDate`
* is optional
* type: `string`

##### xdm:coverageEndDate Type


`string`
* format: `date-time` – date and time (according to [RFC 3339, section 5.6](http://tools.ietf.org/html/rfc3339))








#### xdm:coverageStartDate
##### Coverage Start Date

Coverage start date.

`xdm:coverageStartDate`
* is optional
* type: `string`

##### xdm:coverageStartDate Type


`string`
* format: `date-time` – date and time (according to [RFC 3339, section 5.6](http://tools.ietf.org/html/rfc3339))








#### xdm:isActive
##### Is Active

Boolean flag indicates whether the plan is active.

`xdm:isActive`
* is optional
* type: `boolean`

##### xdm:isActive Type


`boolean`







#### xdm:planID
##### Plan Identifier

Unique identifier for the plan enrolled in by the member.

`xdm:planID`
* is optional
* type: `string`

##### xdm:planID Type


`string`
















#### xdm:preferredAvaiability
##### Preferred Availability

Patient's preferred day and time availability for an appointment.

`xdm:preferredAvaiability`
* is optional
* type: `string`

##### xdm:preferredAvaiability Type


`string`








#### xdm:primaryCarePhysicians

undefined

`xdm:primaryCarePhysicians`
* is optional
* type: `object[]`


##### xdm:primaryCarePhysicians Type


Array type: `object[]`

All items must be of the type:
`object` with following properties:


| Property | Type | Required |
|----------|------|----------|
| `xdm:endDate`| string | Optional |
| `xdm:fullName`| string | Optional |
| `xdm:providerID`| string | Optional |
| `xdm:startDate`| string | Optional |



#### xdm:endDate
##### End Date

Date on which the PCP ended care for the member.

`xdm:endDate`
* is optional
* type: `string`

##### xdm:endDate Type


`string`
* format: `date-time` – date and time (according to [RFC 3339, section 5.6](http://tools.ietf.org/html/rfc3339))








#### xdm:fullName
##### Full Name

Primary care physician's full name.

`xdm:fullName`
* is optional
* type: `string`

##### xdm:fullName Type


`string`








#### xdm:providerID
##### Provider ID

Unique identifier of the physician.

`xdm:providerID`
* is optional
* type: `string`

##### xdm:providerID Type


`string`








#### xdm:startDate
##### Start Date

Date on which the PCP began care for the member.

`xdm:startDate`
* is optional
* type: `string`

##### xdm:startDate Type


`string`
* format: `date-time` – date and time (according to [RFC 3339, section 5.6](http://tools.ietf.org/html/rfc3339))















#### xdm:primaryMemberID
##### Primary Member ID

Unique identifier of the primary subscriber if the member is a dependent.

`xdm:primaryMemberID`
* is optional
* type: `string`

##### xdm:primaryMemberID Type


`string`








#### xdm:specialists
##### Specialist

undefined

`xdm:specialists`
* is optional
* type: `object[]`


##### xdm:specialists Type


Array type: `object[]`

All items must be of the type:
`object` with following properties:


| Property | Type | Required |
|----------|------|----------|
| `xdm:fullname`| string | Optional |
| `xdm:providerID`| string | Optional |
| `xdm:specialty`| string | Optional |



#### xdm:fullname
##### Full Name

Full name of the specialist provider.

`xdm:fullname`
* is optional
* type: `string`

##### xdm:fullname Type


`string`








#### xdm:providerID
##### Provider ID

Unique identifier of the specialist.

`xdm:providerID`
* is optional
* type: `string`

##### xdm:providerID Type


`string`








#### xdm:specialty
##### Specialty

Specialty of the provider (anesthesiology, urology, radiology, dermatology, etc).

`xdm:specialty`
* is optional
* type: `string`

##### xdm:specialty Type


`string`



















## xdm:mobilePhone
### Mobile Phone

Mobile phone number.

`xdm:mobilePhone`
* is optional
* type: Phone number
* defined in [Personal Contact Details](profile-personal-details.schema.md#xdmmobilephone)

### xdm:mobilePhone Type


* [Phone number](../../datatypes/demographic/phonenumber.schema.md) – `https://ns.adobe.com/xdm/context/phonenumber`





## xdm:person
### Person

An individual actor, contact, or owner.

`xdm:person`
* is optional
* type: Person
* defined in [Demographic Details](profile-person-details.schema.md#xdmperson)

### xdm:person Type


* [Person](../../datatypes/person/person.schema.md) – `https://ns.adobe.com/xdm/context/person`





## xdm:personalEmail
### Personal Email

A personal email address.

`xdm:personalEmail`
* is optional
* type: Email address
* defined in [Personal Contact Details](profile-personal-details.schema.md#xdmpersonalemail)

### xdm:personalEmail Type


* [Email address](../../datatypes/demographic/emailaddress.schema.md) – `https://ns.adobe.com/xdm/context/emailaddress`





## xdm:shippingAddress
### Shipping Address

Shipping postal address.

`xdm:shippingAddress`
* is optional
* type: Postal address
* defined in [Personal Contact Details](profile-personal-details.schema.md#xdmshippingaddress)

### xdm:shippingAddress Type


* [Postal address](../../datatypes/demographic/address.schema.md) – `https://ns.adobe.com/xdm/common/address`




