
# Remove From List Schema

```
https://ns.adobe.com/xdm/mixins/events/remove-from-list
```

Use to track when a person is removed from a specific list.

| [Abstract](../../../../abstract.md) | [Extensible](../../../../extensions.md) | [Status](../../../../status.md) | [Identifiable](../../../../id.md) | [Custom Properties](../../../../extensions.md) | [Additional Properties](../../../../extensions.md) | Defined In |
|-------------------------------------|-----------------------------------------|---------------------------------|-----------------------------------|------------------------------------------------|----------------------------------------------------|------------|
| Can be instantiated | Yes | Experimental | No | Forbidden | Permitted | [fieldgroups/experience-event/events/remove-from-list.schema.json](fieldgroups/experience-event/events/remove-from-list.schema.json) |

## Remove From List Example
```json
{}
```

# Remove From List Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [xdm:listOperations](#xdmlistoperations) | `object` | Optional | Remove From List (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## xdm:listOperations
### List Opearations

`xdm:listOperations`
* is optional
* type: `object`
* defined in this schema

### xdm:listOperations Type


`object` with following properties:


| Property | Type | Required |
|----------|------|----------|
| `xdm:listID`| string | Optional |



#### xdm:listID
##### List ID

Unique ID of the Marketing List.

`xdm:listID`
* is optional
* type: `string`

##### xdm:listID Type


`string`










