
# Relative Triggers Schema

```
https://ns.adobe.com/xdm/mixins/relative-triggers
```

Weather Relative Triggers

| [Abstract](../../../abstract.md) | [Extensible](../../../extensions.md) | [Status](../../../status.md) | [Identifiable](../../../id.md) | [Custom Properties](../../../extensions.md) | [Additional Properties](../../../extensions.md) | Defined In |
|----------------------------------|--------------------------------------|------------------------------|--------------------------------|---------------------------------------------|-------------------------------------------------|------------|
| Can be instantiated | Yes | Experimental | No | Forbidden | Permitted | [fieldgroups/shared/relative-triggers.schema.json](fieldgroups/shared/relative-triggers.schema.json) |

## Relative Triggers Example
```json
{
  "xdm:relativeTriggers": {
    "xdm:triggersRelative": [
      7
    ]
  }
}
```

# Relative Triggers Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [xdm:relativeTriggers](#xdmrelativetriggers) | `object` | Optional | Relative Triggers (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## xdm:relativeTriggers


`xdm:relativeTriggers`
* is optional
* type: `object`
* defined in this schema

### xdm:relativeTriggers Type


`object` with following properties:


| Property | Type | Required |
|----------|------|----------|
| `triggersRelative`| array | Optional |



#### triggersRelative
##### Relative Triggers

undefined

`triggersRelative`
* is optional
* type: `integer[]`


##### triggersRelative Type


Array type: `integer[]`

All items must be of the type:
`integer`













