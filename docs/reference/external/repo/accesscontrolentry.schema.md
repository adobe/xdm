
# Access Control Entry Schema

```
https://ns.adobe.com/xdm/external/repo/accesscontrolentry
```

Schema for the Access Control Entry for the Access Control List of a resource

| Abstract | Extensible | Status | Identifiable | Custom Properties | Additional Properties | Defined In |
|----------|------------|--------|--------------|-------------------|-----------------------|------------|
| Can be instantiated | Yes | Experimental | No | Forbidden | Permitted | [external/repo/accesscontrolentry.schema.json](external/repo/accesscontrolentry.schema.json) |

## Access Control Entry Examples

```json
{
  "repo:principal": "authenticated",
  "repo:privilege": "read",
  "repo:modifier": "grant"
}
```

```json
{
  "repo:principal": {
    "xdm:provider": {
      "@id": "https://ims-na1.adobelogin.com/"
    },
    "@id": "C0B648DE57D701277F000101@AdobeID",
    "@type": "https://ns.adobe.com/adobecloudplatform/ims/user"
  },
  "repo:privilege": [
    "write",
    "delete"
  ],
  "repo:modifier": "grant",
  "repo:inheritance": "deep"
}
```


# Access Control Entry Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [repo:inheritance](#repoinheritance) | `string` | Optional | Access Control Entry (this schema) |
| [repo:modifier](#repomodifier) | `string` | Optional | Access Control Entry (this schema) |
| [repo:principal](#repoprincipal) | complex | Optional | Access Control Entry (this schema) |
| [repo:privilege](#repoprivilege) | complex | Optional | Access Control Entry (this schema) |
| [repo:relations](#reporelations) | `string[]` | Optional | Access Control Entry (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## repo:inheritance

Optional inheritance of the ace: whether the deny or grant is inherited by the children of the resource. The default inheritance is deep if this property is missing or has an invalid value.

`repo:inheritance`
* is optional
* type: `string`
* defined in this schema

### repo:inheritance Type


`string`



### repo:inheritance Known Values
| Value | Description |
|-------|-------------|
| `deep` | Deny or grant applies to the resource and to all children of the resource. |
| `self` | Deny or grant only applies to the resource. |




## repo:modifier

Optional modified to the privilege: either grant or deny to grant or deny, resp., the privilege. The default modifier is grant if this property is missing or has an invalid value.

`repo:modifier`
* is optional
* type: `string`
* defined in this schema

### repo:modifier Type


`string`



### repo:modifier Known Values
| Value | Description |
|-------|-------------|
| `grant` | Permission is granted to the Principal. |
| `deny` | Permission is denied to the Principal. |




## repo:principal


`repo:principal`
* is optional
* type: complex
* defined in this schema

### repo:principal Type


**Any** following *options* needs to be fulfilled.


#### Option 1


* []() – `https://ns.adobe.com/xdm/common/principal`


#### Option 2







## repo:privilege

Privilege granted or denied to the Principal

`repo:privilege`
* is optional
* type: complex
* defined in this schema

### repo:privilege Type


**Any** following *options* needs to be fulfilled.


#### Option 1


Array type: 

All items must be of the type:
* []() – `#/definitions/privilege`





#### Option 2


* []() – `#/definitions/privilege`






## repo:relations

List of relation link types to which this privilege applies

`repo:relations`
* is optional
* type: `string[]`

* defined in this schema

### repo:relations Type


Array type: `string[]`

All items must be of the type:
`string`








