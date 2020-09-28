
# Marketo Lead Schema

```
https://ns.adobe.com/experience/marketo/marketo-lead
```

Marketo Lead schema. Includes other Profile mixins like person/work details, opt in/out etc.

| [Abstract](../../../../abstract.md) | [Extensible](../../../../extensions.md) | [Status](../../../../status.md) | [Identifiable](../../../../id.md) | [Custom Properties](../../../../extensions.md) | [Additional Properties](../../../../extensions.md) | Defined In |
|-------------------------------------|-----------------------------------------|---------------------------------|-----------------------------------|------------------------------------------------|----------------------------------------------------|------------|
| Can be instantiated | Yes | Deprecated | No | Forbidden | Permitted | [adobe/experience/marketo/marketo-lead.schema.json](adobe/experience/marketo/marketo-lead.schema.json) |
## Schema Hierarchy

* Marketo Lead `https://ns.adobe.com/experience/marketo/marketo-lead`
  * [XDM Business Lead ](../../../mixins/profile/profile-lead-crm.schema.md) `https://ns.adobe.com/xdm/context/profile-lead-crm`
  * [Marketo Contact/Lead Person Schema](marketo-contact-lead-person.schema.md) `https://ns.adobe.com/experience/marketo/marketo-contact-lead-person`


# Marketo Lead Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [marketo:abmProposedNameID](#marketoabmproposednameid) | `string` | Optional | Marketo Lead (this schema) |
| [marketo:accountID](#marketoaccountid) | `string` | Optional | Marketo Lead (this schema) |
| [marketo:contactID](#marketocontactid) | `string` | Optional | Marketo Lead (this schema) |
| [marketo:count](#marketocount) | `integer` | Optional | Marketo Lead (this schema) |
| [marketo:extendedLead](#marketoextendedlead) | Marketo Contact/Lead Person Schema | Optional | Marketo Lead (this schema) |
| [marketo:instanceID](#marketoinstanceid) | `string` | Optional | Marketo Lead (this schema) |
| [marketo:leadID](#marketoleadid) | `string` | **Required** | Marketo Lead (this schema) |
| [marketo:leadScore](#marketoleadscore) | `number` | Optional | Marketo Lead (this schema) |
| [marketo:totalProposedNameCount](#marketototalproposednamecount) | `integer` | Optional | Marketo Lead (this schema) |
| [xdm:lead](#xdmlead) | B2B Lead | Optional | [XDM Business Lead ](../../../mixins/profile/profile-lead-crm.schema.md#xdmlead) |
| `*` | any | Additional | this schema *allows* additional properties |

## marketo:abmProposedNameID
### ABM Proposed Name Id

Account based marketing proposed name id.

`marketo:abmProposedNameID`
* is optional
* type: `string`
* defined in this schema

### marketo:abmProposedNameID Type


`string`






## marketo:accountID
### Marketo Account Id

Unique identifier for Marketo account.

`marketo:accountID`
* is optional
* type: `string`
* defined in this schema

### marketo:accountID Type


`string`






## marketo:contactID
### Marketo Contact Id

Unique identifier for Marketo contact.

`marketo:contactID`
* is optional
* type: `string`
* defined in this schema

### marketo:contactID Type


`string`






## marketo:count
### Count

`marketo:count`
* is optional
* type: `integer`
* defined in this schema

### marketo:count Type


`integer`






## marketo:extendedLead
### Extended Marketo Lead Attributes

`marketo:extendedLead`
* is optional
* type: Marketo Contact/Lead Person Schema
* defined in this schema

### marketo:extendedLead Type


* [Marketo Contact/Lead Person Schema](marketo-contact-lead-person.schema.md) – `https://ns.adobe.com/experience/marketo/marketo-contact-lead-person`





## marketo:instanceID
### Instance Id

Identifier of the Marketo instance.

`marketo:instanceID`
* is optional
* type: `string`
* defined in this schema

### marketo:instanceID Type


`string`






## marketo:leadID
### Marketo Lead ID

Unique identifier for Marketo lead.

`marketo:leadID`
* is **required**
* type: `string`
* defined in this schema

### marketo:leadID Type


`string`






## marketo:leadScore
### Lead Score

Computed score associated with the lead.

`marketo:leadScore`
* is optional
* type: `number`
* defined in this schema

### marketo:leadScore Type


`number`






## marketo:totalProposedNameCount
### Total Proposed Name Count

`marketo:totalProposedNameCount`
* is optional
* type: `integer`
* defined in this schema

### marketo:totalProposedNameCount Type


`integer`






## xdm:lead
### Lead Details

Holds properties for a person to be recognized as a lead in the business-to-business space.

`xdm:lead`
* is optional
* type: B2B Lead
* defined in [XDM Business Lead ](../../../mixins/profile/profile-lead-crm.schema.md#xdmlead)

### xdm:lead Type


* [B2B Lead](../../../datatypes/b2b-lead.schema.md) – `https://ns.adobe.com/xdm/common/b2b-lead`




