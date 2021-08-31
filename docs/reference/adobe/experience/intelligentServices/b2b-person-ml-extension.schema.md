
# B2B Person ML/AI Extension Schema

```
https://ns.adobe.com/experience/intelligentServices/b2b-person-ml-extension
```

Captures B2B person properties populated by internal AEP services like ML/AI. These properties are consumed by end customers.

| [Abstract](../../../../abstract.md) | [Extensible](../../../../extensions.md) | [Status](../../../../status.md) | [Identifiable](../../../../id.md) | [Custom Properties](../../../../extensions.md) | [Additional Properties](../../../../extensions.md) | Defined In |
|-------------------------------------|-----------------------------------------|---------------------------------|-----------------------------------|------------------------------------------------|----------------------------------------------------|------------|
| Can be instantiated | Yes | Stable | No | Forbidden | Permitted | [adobe/experience/intelligentServices/b2b-person-ml-extension.schema.json](adobe/experience/intelligentServices/b2b-person-ml-extension.schema.json) |

# B2B Person ML/AI Extension Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [https://ns.adobe.com/experience/intelligentServices/b2bPerson/companyName](#httpsnsadobecomexperienceintelligentservicesb2bpersoncompanyname) | `string` | Optional | B2B Person ML/AI Extension (this schema) |
| [https://ns.adobe.com/experience/intelligentServices/b2bPerson/companyWebsite](#httpsnsadobecomexperienceintelligentservicesb2bpersoncompanywebsite) | `string` | Optional | B2B Person ML/AI Extension (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## https://ns.adobe.com/experience/intelligentServices/b2bPerson/companyName
### Company Name

Algorithmically assigned company name for a person.

`https://ns.adobe.com/experience/intelligentServices/b2bPerson/companyName`
* is optional
* type: `string`
* defined in this schema

### https://ns.adobe.com/experience/intelligentServices/b2bPerson/companyName Type


`string`






## https://ns.adobe.com/experience/intelligentServices/b2bPerson/companyWebsite
### Company Website

Algorithmically assigned company website for a person.

`https://ns.adobe.com/experience/intelligentServices/b2bPerson/companyWebsite`
* is optional
* type: `string`
* defined in this schema

### https://ns.adobe.com/experience/intelligentServices/b2bPerson/companyWebsite Type


`string`
* format: `uri` – Uniformous Resource Identifier (according to [RFC3986](http://tools.ietf.org/html/rfc3986))





