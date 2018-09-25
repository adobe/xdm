# Storage in XDM

While expressed using JSON Schema, XDM is intended to be an abstract model for data that might be physically stored or transmitted in any number of ways depending on the technology in use and the needs of the application.

In some cases, it is useful to annotate schemas with hints as to the expected use of a property so that applications can choose the most appropriate mechanism for storage.

A specific case where this is useful is for representing keyed "maps" in XDM, which are objects for which the set of property keys are not fully known at schema authoring time. See below for details.

## Storing Objects as Maps in XDM

The XDM abstract model for data inherits several properties from JSON and JSON Schema, including the basic type system. One ramification of this is that objects in XDM are semantically equivalent to maps. In XDM, objects are defined as maps from a valid JSON-LD property (a full URI, a compact URI, the keywords `@id`, `@type`, etc.) to any XDM-defined value.

One limitation of the equivalence of objects and maps in JSON and JSON Schema is that it not possible to know whether a given object definition is intended to describe a fixed set of fields (in other words, the set of keys in constrained), or whether it is intended to describe a map with an unconstrained set of keys. This limitation has serious consequences for systems that store and access XDM data, since storage systems necessarily manage data with a fixed set of fields differently than data with an unconstrained set of fields.

In order to support "map-like" data efficiently in XDM, we define the storage hint `xdm:storeAsMap` to make it clear that an object should be managed as if the key set were unconstrained. XDM places the following restrictions on the use of this storage hint:

* Properties that carry the `xdm:storeAsMap` hint MUST be of type "object"
* Properties that carry the `xdm:storeAsMap` hint MUST NOT have properties defined (i.e. they define "empty" objects)
* Properties that carry the `xdm:storeAsMap` hint MUST include a single "additionalProperties" schema that describes the values that may be placed within the map

### Example Map in XDM

The following example shows a simple model that contains a map property.

```json
{
  "$schema": "http://json-schema.org/draft-06/schema#",
  "$id": "https://ns.adobe.com/xdm/example/books",
  "title": "Books",
  "description": "Holds a map of book titles, keyed by ISBN.",
  "type": "object",
  "properties": {
    "titles": {
      "description": "A map from book ISBN identifiers to book titles.",
      "type": "object",
      "meta:storageHint": "xdm:storeAsMap",
      "additionalProperties": {
        "type": "string",
        "description": "A book title"
      }
    }
  }
}
```

An example of an object that conforms to this schema:

```json
{
  "titles": {
    "9787536692930": "The Three-Body Problem",
    "0062190377": "Seveneves"
  }
}
```

## Signaling Storage Hints in XDM

Storage hints maybe applied to a property using the `meta:storageHint` property within an XDM schema. This storage hint does not change the semantic meaning of the property (or it data type) in any way. It may be used to signal additional details about the intended use of the property that may influence how a storage or transmission system manages the data represented by a property.

| Value            | Description                                                                                                                                                  |
| ---------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| xdm:storageAsMap | When applied to a property of type "object", this hint indicates that the object should be stored as a map, rather than as a fixed set of columns or fields. |
