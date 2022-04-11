
# Secondary Recipient Detail For Audit Schema

```
https://ns.adobe.com/experience/customerJourneyManagement/secondaryRecipientDetail
```

It will contain the detail related to the secondary recipient which received the copy of the mail sent to the original recipient for the Audit.

| [Abstract](../../../../abstract.md) | [Extensible](../../../../extensions.md) | [Status](../../../../status.md) | [Identifiable](../../../../id.md) | [Custom Properties](../../../../extensions.md) | [Additional Properties](../../../../extensions.md) | Defined In |
|-------------------------------------|-----------------------------------------|---------------------------------|-----------------------------------|------------------------------------------------|----------------------------------------------------|------------|
| Can be instantiated | Yes | Stable | No | Forbidden | Permitted | [adobe/experience/customerJourneyManagement/secondary-recipient-detail.schema.json](adobe/experience/customerJourneyManagement/secondary-recipient-detail.schema.json) |
## Schema Hierarchy

* Secondary Recipient Detail For Audit `https://ns.adobe.com/experience/customerJourneyManagement/secondaryRecipientDetail`
  * [Extensibility base schema](../../../datatypes/extensible.schema.md) `https://ns.adobe.com/xdm/common/extensible`


## Secondary Recipient Detail For Audit Example
```json
{
  "https://ns.adobe.com/experience/customerJourneyManagement/secondaryRecipientDetail/type": "bcc",
  "https://ns.adobe.com/experience/customerJourneyManagement/secondaryRecipientDetail/originalRecipientAddress": "test@gmail.com"
}
```

# Secondary Recipient Detail For Audit Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [https://ns.adobe.com/experience/customerJourneyManagement/secondaryRecipientDetail/originalRecipientAddress](#httpsnsadobecomexperiencecustomerjourneymanagementsecondaryrecipientdetailoriginalrecipientaddress) | `string` | Optional | Secondary Recipient Detail For Audit (this schema) |
| [https://ns.adobe.com/experience/customerJourneyManagement/secondaryRecipientDetail/type](#httpsnsadobecomexperiencecustomerjourneymanagementsecondaryrecipientdetailtype) | `enum` | **Required** | Secondary Recipient Detail For Audit (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## https://ns.adobe.com/experience/customerJourneyManagement/secondaryRecipientDetail/originalRecipientAddress
### Original Recipient Address

It is the address of the original recipient of which the copy of the mail to the secondary recipient was sent.

`https://ns.adobe.com/experience/customerJourneyManagement/secondaryRecipientDetail/originalRecipientAddress`
* is optional
* type: `string`
* defined in this schema

### https://ns.adobe.com/experience/customerJourneyManagement/secondaryRecipientDetail/originalRecipientAddress Type


`string`






## https://ns.adobe.com/experience/customerJourneyManagement/secondaryRecipientDetail/type
### Secondary Recipient Type

The type of the secondary recipient. i.e BCC (Blind Carbon Copy), CC (Carbon Copy) & Archival

`https://ns.adobe.com/experience/customerJourneyManagement/secondaryRecipientDetail/type`
* is **required**
* type: `enum`
* defined in this schema

The value of this property **must** be equal to one of the [known values below](#httpsnsadobecomexperiencecustomerjourneymanagementsecondaryrecipientdetailtype-known-values).

### https://ns.adobe.com/experience/customerJourneyManagement/secondaryRecipientDetail/type Known Values
| Value | Description |
|-------|-------------|
| `bcc` | BCC |
| `cc` | CC |
| `archival` | Archival |



