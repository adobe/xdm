This schema can be included by referencing `https://ns.adobe.com/xdm/common/extensible`. It will enable property-based extensibility with namespace protection.

In order to make a given schema extensible, include this section at the bottom of your schema:

```json
"allOf":[
    {"$ref": "https://ns.adobe.com/xdm/common/extensible#/definitions/@context"},
    {"$ref": "#/definitions/…"}
  ]
```

Replace `#/definitions/…` with the correct path to the `definitions` object in your local schema.
