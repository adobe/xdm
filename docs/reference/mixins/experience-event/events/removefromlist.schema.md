
# Remove From List Schema

```
https://ns.adobe.com/xdm/mixins/events/removefromlist
```

Remove from list.

| [Abstract](../../../../abstract.md) | [Extensible](../../../../extensions.md) | [Status](../../../../status.md) | [Identifiable](../../../../id.md) | [Custom Properties](../../../../extensions.md) | [Additional Properties](../../../../extensions.md) | Defined In |
|-------------------------------------|-----------------------------------------|---------------------------------|-----------------------------------|------------------------------------------------|----------------------------------------------------|------------|
| Can be instantiated | Yes | Experimental | No | Forbidden | Permitted | [mixins/experience-event/events/removefromlist.schema.json](mixins/experience-event/events/removefromlist.schema.json) |

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
| `xdm:requestSource`| string | Optional |



#### xdm:listID
##### List ID

Marketing list unique identifier.

`xdm:listID`
* is optional
* type: `string`

##### xdm:listID Type


`string`








#### xdm:requestSource
##### Request Source

Name of the source this request came from.

`xdm:requestSource`
* is optional
* type: `string`

##### xdm:requestSource Type


`string`










