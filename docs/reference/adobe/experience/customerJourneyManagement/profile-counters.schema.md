# Adobe Unified Profile -- Counters Details Extension -- Schema

```
https://ns.adobe.com/experience/customerJourneyManagement/profile-counters
```

Profile Counter Details as sourced primarily from Distributed Counters Service.

| [Abstract](../../../../abstract.md) | [Extensible](../../../../extensions.md) | [Status](../../../../status.md) | [Identifiable](../../../../id.md) | [Custom Properties](../../../../extensions.md) | [Additional Properties](../../../../extensions.md) | Defined In                                                                                                                                         |
| ----------------------------------- | --------------------------------------- | ------------------------------- | --------------------------------- | ---------------------------------------------- | -------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| Can be instantiated                 | Yes                                     | Experimental                    | No                                | Forbidden                                      | Permitted                                          | [adobe/experience/customerJourneyManagement/profile-counters.schema.json](adobe/experience/customerJourneyManagement/profile-counters.schema.json) |

## Schema Hierarchy

- Adobe Unified Profile - Counter details `https://ns.adobe.com/experience/customerJourneyManagement/profile-counters`
  - [Extensibility base schema](../../../datatypes/extensible.schema.md) `https://ns.adobe.com/xdm/common/extensible`

# Adobe Unified Profile - Counter details Properties

| Property                         | Type       | Required   | Defined by                                                                        |
| -------------------------------- | ---------- | ---------- | --------------------------------------------------------------------------------- |
| [xdm:counterMap](#xdmcountermap) | `map`      | Required   | Adobe Unified Profile - Counter details (this schema)                             |
| [xdm:identity](#xdmidentity)     | `Identity` | Required   | Adobe Unified Profile - Identity Schema https://ns.adobe.com/xdm/context/identity |
| `*`                              | `any`      | Additional | this schema _allows_ additional properties                                        |

## xdm:counterMap

### Counter Map

Map<String, Object> of counter_ids to counter details.
Object value is comprised of a value, and an expiry.
value and expiry are both of the Long Data Type.

`xdm:counterMap`

- is Required
- type: `map`
- defined in this schema

#### Counter Map Properties

```
Implicit key is String which represents the counter_id
Value is an Object containing the counter_value and counter_expiry
```

| Property                 | Type     | Required     | Defined by                     |
| ------------------------ | -------- | ------------ | ------------------------------ |
| [key](#counterid)        | `string` | **Required** | profile-counters (this) schema |
| [value](#counterdetails) | `object` | **Required** | profile-counters (this)        |

##### Value of type Object

| Property                         | Type   | Required     | Defined by                     |
| -------------------------------- | ------ | ------------ | ------------------------------ |
| [value](#countermapvaluevalue)   | `long` | **Required** | profile-counters (this) schema |
| [expiry](#countermapvalueexpiry) | `long` | **Required** | profile-counters (this)        |

## xdm:identity

### Identity

`xdm:identity`

- is Required
- type: Identity
- defined by: https://ns.adobe.com/xdm/context/identity

#### Identity Properties

| Property                       | Type     | Required     | Defined by                                                  |
| ------------------------------ | -------- | ------------ | ----------------------------------------------------------- |
| [xdm:id](#xdmid)               | `string` | **Optional** | Xid https://ns.adobe.com/xdm/context/identityitem           |
| [xdm:xid](#xdmxid)             | `string` | **Optional** | Xid https://ns.adobe.com/xdm/context/identity               |
| [xdm:namespace](#xdmnamespace) | `object` | **Optional** | Namespace Schema https://ns.adobe.com/xdm/context/namespace |
| `*`                            | any      | Additional   | this schema _allows_ additional properties                  |
