
# OptInOut Schema

```
https://ns.adobe.com/xdm/context/optinout
```

Describes a users&#39; communication preferences by channel. For each channel individually, which is a property of this object, a user&#39;s preference (opt-in, opt-out, pending) can be recorded. In addition, a global override opt-out is possible. Each property of this schema must be a valid and known URI for an XDM Channel.

| Abstract | Extensible | Custom Properties | Additional Properties | Defined In |
|----------|------------|-------------------|-----------------------|------------|
| Cannot be instantiated | Yes | Forbidden | Permitted | [context/optinout.schema.json](context/optinout.schema.json) |

## OptInOut Example
```json
{
  "https://ns.adobe.com/xdm/channels/email": "pending",
  "https://ns.adobe.com/xdm/channels/phone": "out",
  "https://ns.adobe.com/xdm/channels/sms": "in",
  "https://ns.adobe.com/xdm/channels/fax": "not_provided",
  "https://ns.adobe.com/xdm/channels/direct-mail": "not_provided",
  "https://ns.adobe.com/xdm/channels/apns": "not_provided",
  "xdm:globalOptout": false
}
```
