
# Access Control Policy Schema

```
https://ns.adobe.com/xdm/common/accesscontrolpolicy
```

Schema for the Access Control Policy of a resource

| Abstract | Extensible | Custom Properties | Additional Properties | Defined In |
|----------|------------|-------------------|-----------------------|------------|
| Can be instantiated | Yes | Forbidden | Permitted | [common/accesscontrolpolicy.schema.json](common/accesscontrolpolicy.schema.json) |

## Schema Hierarchy

* Access Control Policy `https://ns.adobe.com/xdm/common/accesscontrolpolicy`
  * [Access Control Entry](accesscontrolentry.schema.md) `https://ns.adobe.com/xdm/common/accesscontrolentry`

## Access Control Policy Example
```json
{
  "repo:acl": [
    {
      "repo:principal": "authenticated",
      "repo:privilege": "read",
      "repo:modifier": "grant"
    },
    {
      "repo:principal": {
        "xdm:provider": {
          "@id": "https://ims-na1.adobelogin.com/"
        },
        "@id": "C0B648DE57D701277F000101@AdobeID",
        "@type": "https://ns.adobe.com/xdm-extensions/ims/user"
      },
      "repo:privilege": [
        "write",
        "delete"
      ],
      "repo:modifier": "grant"
    }
  ]
}
```

# Access Control Policy Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [repo:acl](#repoacl) | Access Control Entry | Optional | Access Control Policy (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## repo:acl
### Access Control List

Schema for the Access Control List of a resource

`repo:acl`
* is optional
* type: Access Control Entry

* defined in this schema

### repo:acl Type


Array type: Access Control Entry

All items must be of the type:
* [Access Control Entry](accesscontrolentry.schema.md) – `https://ns.adobe.com/xdm/common/accesscontrolentry`







