
# One to Many Bi-Directional Relationship Descriptor Schema

```
https://ns.adobe.com/xdm/common/descriptors/relationshipOneToMany
```

Describes a bi-directional one to many relationship

| [Abstract](../../../abstract.md) | [Extensible](../../../extensions.md) | [Status](../../../status.md) | [Identifiable](../../../id.md) | [Custom Properties](../../../extensions.md) | [Additional Properties](../../../extensions.md) | Defined In |
|----------------------------------|--------------------------------------|------------------------------|--------------------------------|---------------------------------------------|-------------------------------------------------|------------|
| Can be instantiated | No | Deprecated | No | Forbidden | Permitted | [descriptors/relationshipv2/relationshipOneToMany.schema.json](descriptors/relationshipv2/relationshipOneToMany.schema.json) |

## One to Many Bi-Directional Relationship Descriptor Example
```json
{
  "@type": "xdm:relationshipOneToMany",
  "xdm:oneSideSchema": "https://ns.adobe.com/tenantA/schemas/1234",
  "xdm:oneSideVersion": 1,
  "xdm:manySideSchema": "https://ns.adobe.com/tenantA/schemas/abcd",
  "xdm:manySideVersion": 1,
  "xdm:manySideProperty": "/person-ref",
  "xdm:manySideNamespace": "Person",
  "xdm:oneToManyDisplayName": "Opportunity Roles",
  "xdm:manyToOneDispalyName": "Person"
}
```

# One to Many Bi-Directional Relationship Descriptor Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [@type](#type) | `const` | **Required** | One to Many Bi-Directional Relationship Descriptor (this schema) |
| [xdm:manySideNamespace](#xdmmanysidenamespace) | `string` | Optional | One to Many Bi-Directional Relationship Descriptor (this schema) |
| [xdm:manySideProperty](#xdmmanysideproperty) | `string` | **Required** | One to Many Bi-Directional Relationship Descriptor (this schema) |
| [xdm:manySideSchema](#xdmmanysideschema) | `string` | **Required** | One to Many Bi-Directional Relationship Descriptor (this schema) |
| [xdm:manySideVersion](#xdmmanysideversion) | `number` | **Required** | One to Many Bi-Directional Relationship Descriptor (this schema) |
| [xdm:manyToOneDisplayName](#xdmmanytoonedisplayname) | `string` | Optional | One to Many Bi-Directional Relationship Descriptor (this schema) |
| [xdm:oneSideProperty](#xdmonesideproperty) | `string` | Optional | One to Many Bi-Directional Relationship Descriptor (this schema) |
| [xdm:oneSideSchema](#xdmonesideschema) | `string` | **Required** | One to Many Bi-Directional Relationship Descriptor (this schema) |
| [xdm:oneSideVersion](#xdmonesideversion) | `number` | **Required** | One to Many Bi-Directional Relationship Descriptor (this schema) |
| [xdm:oneToManyDisplayName](#xdmonetomanydisplayname) | `string` | Optional | One to Many Bi-Directional Relationship Descriptor (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## @type


`@type`
* is **required**
* type: `const`
* defined in this schema

The value of this property **must** be equal to:

```json
"xdm:relationshipOneToMany"
```





## xdm:manySideNamespace
### Identity Namespace Code

`xdm:manySideNamespace`
* is optional
* type: `string`
* defined in this schema

### xdm:manySideNamespace Type


`string`






## xdm:manySideProperty
### Many Side Field Path

`xdm:manySideProperty`
* is **required**
* type: `string`
* defined in this schema

### xdm:manySideProperty Type


`string`






## xdm:manySideSchema
### Many Side Schema ID

`xdm:manySideSchema`
* is **required**
* type: `string`
* defined in this schema

### xdm:manySideSchema Type


`string`






## xdm:manySideVersion
### Many Side Schema Major Version

`xdm:manySideVersion`
* is **required**
* type: `number`
* defined in this schema

### xdm:manySideVersion Type


`number`






## xdm:manyToOneDisplayName
### Many To One Edge Name

`xdm:manyToOneDisplayName`
* is optional
* type: `string`
* defined in this schema

### xdm:manyToOneDisplayName Type


`string`






## xdm:oneSideProperty
### One Side Field Path

`xdm:oneSideProperty`
* is optional
* type: `string`
* defined in this schema

### xdm:oneSideProperty Type


`string`






## xdm:oneSideSchema
### One Side Schema ID

`xdm:oneSideSchema`
* is **required**
* type: `string`
* defined in this schema

### xdm:oneSideSchema Type


`string`






## xdm:oneSideVersion
### One Side Schema Major Version

`xdm:oneSideVersion`
* is **required**
* type: `number`
* defined in this schema

### xdm:oneSideVersion Type


`number`






## xdm:oneToManyDisplayName
### One To Many Edge Name

`xdm:oneToManyDisplayName`
* is optional
* type: `string`
* defined in this schema

### xdm:oneToManyDisplayName Type


`string`





