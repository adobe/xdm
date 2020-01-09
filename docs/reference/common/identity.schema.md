
# User identity Schema

```
https://ns.adobe.com/xdm/common/identity
```

This model represents an authenticated IMS user. The IMS user principal is a user account under Adobe's identity management system (IMS).

| [Abstract](../../abstract.md) | [Extensible](../../extensions.md) | [Status](../../status.md) | [Identifiable](../../id.md) | [Custom Properties](../../extensions.md) | [Additional Properties](../../extensions.md) | Defined In |
|-------------------------------|-----------------------------------|---------------------------|-----------------------------|------------------------------------------|----------------------------------------------|------------|
| Can be instantiated | Yes | Experimental | No | Forbidden | Permitted | [common/identity.schema.json](common/identity.schema.json) |

## User identity Examples

```json
{
  "xdm:identityProvider": "ims",
  "xdm:id": "C0B648DE57D701277F000101@AdobeID",
  "xdm:type": "https://ns.adobe.com/xdm/common/user"
}
```

```json
{
  "xdm:identityProvider": "ims",
  "xdm:id": "C0B648DE57D701277F000101@AdobeID",
  "xdm:type": "https://ns.adobe.com/xdm/common/user",
  "xdm:displayName": "The users name",
  "xdm:profileImage": "https://mir-s3-cdn-cf.behance.net/user/276/b9c11633104347.57a9c2152b78e.jpg"
}
```


# User identity Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [xdm:id](#xdmid) | `string` | **Required** | User identity (this schema) |
| [xdm:identityProvider](#xdmidentityprovider) | `string` | **Required** | User identity (this schema) |
| [xdm:type](#xdmtype) | `string` | **Required** | User identity (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## xdm:id

Principal ID identifies a user account in IMS. Its value is equivalent to the standard claim, `sub` as mentioned in the [openid connect 1.0 standard claims](http://openid.net/specs/openid-connect-core-1_0.html#StandardClaim). This value can be obtained by fetching the [userinfo resource](http://openid.net/specs/openid-connect-core-1_0.html#UserInfo) for a particular user [in IMS](https://wiki.corp.adobe.com/display/ims/IMS+API+-+userinfo).

`xdm:id`
* is **required**
* type: `string`
* defined in this schema

### xdm:id Type


`string`






## xdm:identityProvider

The identity provider that manages this principal.

`xdm:identityProvider`
* is **required**
* type: `string`
* defined in this schema

### xdm:identityProvider Type


`string`



### xdm:identityProvider Known Values
| Value | Description |
|-------|-------------|
| `0` | ims |




## xdm:type

The type of the identity. Acts as a processing hint to the client. Ideally, each value should be identified as a [URI](https://tools.ietf.org/html/rfc3986).

`xdm:type`
* is **required**
* type: `string`
* defined in this schema

### xdm:type Type


`string`
* format: `uri` – Uniformous Resource Identifier (according to [RFC3986](http://tools.ietf.org/html/rfc3986))



### xdm:type Known Values
| Value | Description |
|-------|-------------|
| `0` | https://ns.adobe.com/xdm/common/user |



