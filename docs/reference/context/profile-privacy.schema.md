
# Profile Privacy Schema

```
https://ns.adobe.com/xdm/context/profile-privacy
```

Profile privacy schema to capture general and sales/sharing opt-out signals.

| [Abstract](../../abstract.md) | [Extensible](../../extensions.md) | [Status](../../status.md) | [Identifiable](../../id.md) | [Custom Properties](../../extensions.md) | [Additional Properties](../../extensions.md) | Defined In |
|-------------------------------|-----------------------------------|---------------------------|-----------------------------|------------------------------------------|----------------------------------------------|------------|
| Cannot be instantiated | Yes | Experimental | No | Forbidden | Permitted | [context/profile-privacy.schema.json](context/profile-privacy.schema.json) |
## Schema Hierarchy

* Profile Privacy `https://ns.adobe.com/xdm/context/profile-privacy`
  * [Extensibility Base Schema](../common/extensible.schema.md) `https://ns.adobe.com/xdm/common/extensible`


## Profile Privacy Example
```json
{
  "xdm:optOutConsentLevel": {
    "xdm:privacyOptOuts": [
      {
        "xdm:optOutType": "general_opt_out",
        "xdm:optOutValue": "out",
        "xdm:timestamp": "2019-01-01T15:52:25+00:00"
      }
    ]
  }
}
```
