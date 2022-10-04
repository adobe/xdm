
# Consent policies evaluation results map Schema

```
https://ns.adobe.com/xdm/mixins/profile-consentResults
```

Consent policies evaluation result for individual

| [Abstract](../../../abstract.md) | [Extensible](../../../extensions.md) | [Status](../../../status.md) | [Identifiable](../../../id.md) | [Custom Properties](../../../extensions.md) | [Additional Properties](../../../extensions.md) | Defined In |
|----------------------------------|--------------------------------------|------------------------------|--------------------------------|---------------------------------------------|-------------------------------------------------|------------|
| Can be instantiated | Yes | Stable | No | Forbidden | Permitted | [fieldgroups/profile/profile-consentResults.schema.json](fieldgroups/profile/profile-consentResults.schema.json) |

## Consent policies evaluation results map Example
```json
{
  "xdm:consentPoliciesIDMap": {
    "consentPolicy1": {},
    "consentPolicy2": {
      "Email": [
        "personal.email1@gmail.com",
        "work.email1@adobe.com",
        "personal.email2@gmail.com"
      ]
    },
    "consentPolicy3": {
      "AAID": [
        "92312748749128",
        "30453470347"
      ]
    }
  }
}
```

# Consent policies evaluation results map Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [xdm:consentPoliciesIDMap](#xdmconsentpoliciesidmap) | `object` | Optional | Consent policies evaluation results map (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## xdm:consentPoliciesIDMap
### consent policies map

`xdm:consentPoliciesIDMap`
* is optional
* type: `object`
* defined in this schema

### xdm:consentPoliciesIDMap Type


`object` with following properties:


| Property | Type | Required |
|----------|------|----------|





