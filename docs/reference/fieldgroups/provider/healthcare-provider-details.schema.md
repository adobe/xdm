
# Healthcare Provider Schema

```
https://ns.adobe.com/xdm/mixins/healthcare-provider
```

Details of an individual health professional or a health facility organization licensed to provide health care diagnosis and treatment services.

| [Abstract](../../../abstract.md) | [Extensible](../../../extensions.md) | [Status](../../../status.md) | [Identifiable](../../../id.md) | [Custom Properties](../../../extensions.md) | [Additional Properties](../../../extensions.md) | Defined In |
|----------------------------------|--------------------------------------|------------------------------|--------------------------------|---------------------------------------------|-------------------------------------------------|------------|
| Can be instantiated | Yes | Stable | No | Forbidden | Permitted | [fieldgroups/provider/healthcare-provider-details.schema.json](fieldgroups/provider/healthcare-provider-details.schema.json) |

## Healthcare Provider Example
```json
{}
```

# Healthcare Provider Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [xdm:healthcareProvider](#xdmhealthcareprovider) | `object` | Optional | Healthcare Provider (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## xdm:healthcareProvider
### Healthcare Provider

Information about the healthcare provider.

`xdm:healthcareProvider`
* is optional
* type: `object`
* defined in this schema

### xdm:healthcareProvider Type


`object` with following properties:


| Property | Type | Required |
|----------|------|----------|
| `xdm:addressDetails`| array | Optional |
| `xdm:emailAddress`|  | Optional |
| `xdm:fax`|  | Optional |
| `xdm:isActive`| boolean | Optional |
| `xdm:languages`| array | Optional |
| `xdm:phoneNumber`|  | Optional |
| `xdm:practiceGroupName`| string | Optional |
| `xdm:practiceGroupType`| string | Optional |
| `xdm:practiceType`| string | Optional |
| `xdm:qualifications`| array | Optional |
| `xdm:specialities`| array | Optional |



#### xdm:addressDetails
##### Provider Address Details

undefined

`xdm:addressDetails`
* is optional
* type: `object[]`


##### xdm:addressDetails Type


Array type: `object[]`

All items must be of the type:
`object` with following properties:


| Property | Type | Required |
|----------|------|----------|
| `xdm:address`|  | Optional |
| `xdm:addressType`| string | Optional |



#### xdm:address
##### Provider Address

undefined

`xdm:address`
* is optional
* type: reference

##### xdm:address Type


* []() – `https://ns.adobe.com/xdm/common/address`







#### xdm:addressType
##### Address Type

Type of address indicating where the provider provides services.

`xdm:addressType`
* is optional
* type: `string`

##### xdm:addressType Type


`string`
















#### xdm:emailAddress
##### Provider&#39;s Email Address

Provider's email address.

`xdm:emailAddress`
* is optional
* type: reference

##### xdm:emailAddress Type


* []() – `https://ns.adobe.com/xdm/context/emailaddress`







#### xdm:fax
##### Fax Number

Provider's fax number.

`xdm:fax`
* is optional
* type: reference

##### xdm:fax Type


* []() – `https://ns.adobe.com/xdm/context/phonenumber`







#### xdm:isActive
##### Is Active

Indicates whether the provider is active.

`xdm:isActive`
* is optional
* type: `boolean`

##### xdm:isActive Type


`boolean`







#### xdm:languages
##### Languages

Languages in which the provider is proficient.

`xdm:languages`
* is optional
* type: `string[]`


##### xdm:languages Type


Array type: `string[]`

All items must be of the type:
`string`











#### xdm:phoneNumber
##### Phone Number

Provider's phone number.

`xdm:phoneNumber`
* is optional
* type: reference

##### xdm:phoneNumber Type


* []() – `https://ns.adobe.com/xdm/context/phonenumber`







#### xdm:practiceGroupName
##### Service Provider Practice Group Name

Service provider practice group name.

`xdm:practiceGroupName`
* is optional
* type: `string`

##### xdm:practiceGroupName Type


`string`








#### xdm:practiceGroupType
##### Service Provider Practice Group Type

Service provider practice group type.

`xdm:practiceGroupType`
* is optional
* type: `string`

##### xdm:practiceGroupType Type


`string`








#### xdm:practiceType
##### Service Provider Practice Type

Service provider practice type.

`xdm:practiceType`
* is optional
* type: `string`

##### xdm:practiceType Type


`string`



##### xdm:practiceType Known Values
| Value | Description |
|-------|-------------|
| `attending_physician` | Attending Physician |
| `physician` | Physician |
| `emergency_physician` | Emergency Physician |






#### xdm:qualifications
##### Qualifications

Certification, licenses, or training pertaining to the provision of care.

`xdm:qualifications`
* is optional
* type: `object[]`


##### xdm:qualifications Type


Array type: `object[]`

All items must be of the type:
`object` with following properties:


| Property | Type | Required |
|----------|------|----------|
| `xdm:code`| string | Optional |
| `xdm:endDate`| string | Optional |
| `xdm:issuer`| string | Optional |
| `xdm:startDate`| string | Optional |



#### xdm:code
##### Code

Coded representation of the qualification.

`xdm:code`
* is optional
* type: `string`

##### xdm:code Type


`string`








#### xdm:endDate
##### End Date

Date on which this qualification becomes inactive.

`xdm:endDate`
* is optional
* type: `string`

##### xdm:endDate Type


`string`
* format: `date-time` – date and time (according to [RFC 3339, section 5.6](http://tools.ietf.org/html/rfc3339))








#### xdm:issuer
##### Issuer

Organization name that regulates and issues the qualification.

`xdm:issuer`
* is optional
* type: `string`

##### xdm:issuer Type


`string`








#### xdm:startDate
##### Start Date

Start date of this qualification.

`xdm:startDate`
* is optional
* type: `string`

##### xdm:startDate Type


`string`
* format: `date-time` – date and time (according to [RFC 3339, section 5.6](http://tools.ietf.org/html/rfc3339))















#### xdm:specialities
##### Specialities

Specialities offered by this provider.

`xdm:specialities`
* is optional
* type: `string[]`


##### xdm:specialities Type


Array type: `string[]`

All items must be of the type:
`string`













