
# Marketing Schema

```
https://ns.adobe.com/xdm/context/marketing
```

The information related to marketing activities that are active with the touchpoint.

| Abstract | Extensible | Custom Properties | Additional Properties | Defined In |
|----------|------------|-------------------|-----------------------|------------|
| Can be instantiated | Yes | Forbidden | Permitted | [context/marketing.schema.json](context/marketing.schema.json) |

## Marketing Example
```json
{
  "xdm:trackingCode": "marketingcampaign111"
}
```

# Marketing Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [xdm:trackingCode](#xdmtrackingCode) | `string` | Optional | Marketing (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## xdm:trackingCode
### Tracking Code

Tracking code that can be used to identify the marketing campaign the event is associated with.

`xdm:trackingCode`
* is optional
* type: `string`
* defined in this schema

### xdm:trackingCode Type


`string`





