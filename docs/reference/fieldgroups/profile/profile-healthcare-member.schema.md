
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
| `xdm:dateAgeCollected`| string | Optional |
| `xdm:deceasedDate`| string | Optional |
| `xdm:healthConcerns`| array | Optional |
| `xdm:isDeceased`| boolean | Optional |
| `xdm:plans`| array | Optional |
| `xdm:preferredAvailability`| string | Optional |
| `xdm:prescriptions`| array | Optional |
| `xdm:primaryCarePhysicians`| array | Optional |
| `xdm:specialists`| array | Optional |



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








#### xdm:healthConcerns
##### Health Concerns

Array list of all health concerns

`xdm:healthConcerns`
* is optional
* type: `string[]`


##### xdm:healthConcerns Type


Array type: `string[]`

All items must be of the type:
`string`











#### xdm:isDeceased
##### Deceased Indicator

Boolean flag indicating if the member is deceased.

`xdm:isDeceased`
* is optional
* type: `boolean`

##### xdm:isDeceased Type


`boolean`







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
| `xdm:beneficiaryRelationship`| string | Optional |
| `xdm:billingAccountID`| string | Optional |
| `xdm:coverageEndDate`| string | Optional |
| `xdm:coverageStartDate`| string | Optional |
| `xdm:isActive`| boolean | Optional |
| `xdm:isDependent`| boolean | Optional |
| `xdm:planID`| string | Optional |
| `xdm:primaryMemberID`| string | Optional |



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







#### xdm:isDependent
##### Is Dependent

Indicates whether this member is a dependent.

`xdm:isDependent`
* is optional
* type: `boolean`

##### xdm:isDependent Type


`boolean`







#### xdm:planID
##### Plan Identifier

Unique identifier for the plan enrolled in by the member.

`xdm:planID`
* is optional
* type: `string`

##### xdm:planID Type


`string`








#### xdm:primaryMemberID
##### Primary Member ID

Unique identifier of the primary subscriber if the member is a dependent.

`xdm:primaryMemberID`
* is optional
* type: `string`

##### xdm:primaryMemberID Type


`string`
















#### xdm:preferredAvailability
##### Preferred Availability

Patient's preferred day and time availability for an appointment.

`xdm:preferredAvailability`
* is optional
* type: `string`

##### xdm:preferredAvailability Type


`string`








#### xdm:prescriptions
##### Prescriptions

Prescription information including ID, start date, and active flag.

`xdm:prescriptions`
* is optional
* type: `object[]`


##### xdm:prescriptions Type


Array type: `object[]`

All items must be of the type:
`object` with following properties:


| Property | Type | Required |
|----------|------|----------|
| `xdm:ID`| string | Optional |
| `xdm:endDate`| string | Optional |
| `xdm:isCurrent`| boolean | Optional |
| `xdm:name`| string | Optional |
| `xdm:numberOfRefills`| integer | Optional |
| `xdm:refillLocation`|  | Optional |
| `xdm:refillType`| string | Optional |
| `xdm:startDate`| string | Optional |



#### xdm:ID
##### Prescription ID

Unique identifier for the prescription.

`xdm:ID`
* is optional
* type: `string`

##### xdm:ID Type


`string`








#### xdm:endDate
##### Prescription End Date

Date on which the patient stop taking the prescription.

`xdm:endDate`
* is optional
* type: `string`

##### xdm:endDate Type


`string`
* format: `date-time` – date and time (according to [RFC 3339, section 5.6](http://tools.ietf.org/html/rfc3339))








#### xdm:isCurrent
##### Is Current

Indicates whether the prescription is current or past.

`xdm:isCurrent`
* is optional
* type: `boolean`

##### xdm:isCurrent Type


`boolean`







#### xdm:name
##### Prescription Name

Name of the prescription.

`xdm:name`
* is optional
* type: `string`

##### xdm:name Type


`string`








#### xdm:numberOfRefills
##### Number Of Refills

Number of refills prescribed by the provider for this prescription.

`xdm:numberOfRefills`
* is optional
* type: `integer`

##### xdm:numberOfRefills Type


`integer`








#### xdm:refillLocation
##### Prescription Refill Location

Address at which the precription will be filled.

`xdm:refillLocation`
* is optional
* type: reference

##### xdm:refillLocation Type


* []() – `https://ns.adobe.com/xdm/common/address`







#### xdm:refillType
##### Refill Type

Type of prescription refill.

`xdm:refillType`
* is optional
* type: `enum`

The value of this property **must** be equal to one of the [known values below](#xdmmemberdetails-known-values).

##### xdm:refillType Known Values
| Value | Description |
|-------|-------------|
| `Retail Pharmacy` | Retail Pharmacy |
| `Mail Order` | Mail Order |






#### xdm:startDate
##### Prescription Start Date

Date on which the patient began taking the prescription.

`xdm:startDate`
* is optional
* type: `string`

##### xdm:startDate Type


`string`
* format: `date-time` – date and time (according to [RFC 3339, section 5.6](http://tools.ietf.org/html/rfc3339))















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
| `xdm:firstName`| string | Optional |
| `xdm:healthNetAffiliation`| array | Optional |
| `xdm:lastName`| string | Optional |
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








#### xdm:firstName
##### First Name

Primary care physician's first name.

`xdm:firstName`
* is optional
* type: `string`

##### xdm:firstName Type


`string`








#### xdm:healthNetAffiliation
##### Health Network Affiliation

Name of the health network to which the Primary Care Provider is affiliated.

`xdm:healthNetAffiliation`
* is optional
* type: `string[]`


##### xdm:healthNetAffiliation Type


Array type: `string[]`

All items must be of the type:
`string`











#### xdm:lastName
##### Last Name

Primary care physician's last name.

`xdm:lastName`
* is optional
* type: `string`

##### xdm:lastName Type


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
| `xdm:firstName`| string | Optional |
| `xdm:lastName`| string | Optional |
| `xdm:providerID`| string | Optional |
| `xdm:specialty`| array | Optional |



#### xdm:firstName
##### first Name

First name of the specialist provider.

`xdm:firstName`
* is optional
* type: `string`

##### xdm:firstName Type


`string`








#### xdm:lastName
##### last Name

Last name of the specialist provider.

`xdm:lastName`
* is optional
* type: `string`

##### xdm:lastName Type


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
* type: `string[]`


##### xdm:specialty Type


Array type: `string[]`

All items must be of the type:
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




