
# Add To List Schema

```
https://ns.adobe.com/xdm/mixins/events/add-to-list
```

Use to track when a person is added to a specific list.

| [Abstract](../../../../abstract.md) | [Extensible](../../../../extensions.md) | [Status](../../../../status.md) | [Identifiable](../../../../id.md) | [Custom Properties](../../../../extensions.md) | [Additional Properties](../../../../extensions.md) | Defined In |
|-------------------------------------|-----------------------------------------|---------------------------------|-----------------------------------|------------------------------------------------|----------------------------------------------------|------------|
| Can be instantiated | Yes | Experimental | No | Forbidden | Permitted | [mixins/experience-event/events/add-to-list.schema.json](mixins/experience-event/events/add-to-list.schema.json) |

## Add To List Example
```json
{}
```

# Add To List Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [xdm:listOperations](#xdmlistoperations) | `object` | Optional | Add To List (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## xdm:listOperations
### List Operations

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










