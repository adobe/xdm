# XDM Logical Data Types

XDM schemas are defined in terms of JSON Schema and therefore inherit a type model from JSON. While this allows XDM to describe data types represented in JSON directly, it is useful to define the basic logical data types more specifically so that the XDM data model can be more easily mapped to non-JSON representations.

In general, XDM defines specific types only to scalar values. The semantics of arrays are never modified in this way, and the semantics of objects are always defined via an XDM schema. The only exception to this is the `map` type, which is used to allow objects to support general map-like semantics. See below for details on defining maps in XDM.

## Data Type Definitions

The following table describes the available data types:

| XDM type  | Range                                                     | JSON Schema type | JSON Schema format |
| --------- | --------------------------------------------------------- | ---------------- | ------------------ |
| string    | unlimited                                                 | string           |                    |
| number    | ±2.23×10^308 to ±1.80×10^308 (IEEE 64-bit floating point) | number           |                    |
| long      | (-2^53 + 1) - (2^53 - 1) (54-bit signed integer\*)        | integer          |                    |
| int       | -2^31 - 2^31 (32-bit signed integer)                      | integer          |                    |
| short     | -2^15 - 2^15 (16-bit signed integer)                      | integer          |                    |
| byte      | -2^7 - 2^7 (8-bit signed integer)                         | integer          |                    |
| boolean   | { true, false }                                           | boolean          |                    |
| date      | n/a                                                       | string           | date\*\*           |
| date-time | n/a                                                       | string           | date-time\*\*      |
| map       | n/a                                                       | object           |                    |

\* While conceptually JSON numbers have no limits on range, in practice they are assumed to be represented as IEEE 64-bit floating point numbers. A JSON Schema integer is represented as the set of numbers that don’t have a decimal part. When this is mapped to what can be represented in 64-bit floating point format, the effective range is approximately that of a 54-bit signed integer (shifted by 1). While this can easily be represented as a 64-bit signed integer, processors must take care not to exceed the valid range when exchanging data between services as XDM.

\*\* Dates and date-times are defined as they are in JSON Schema: strings conforming to [RFC 3339](https://tools.ietf.org/html/rfc3339).

## Describing XDM Data Types in JSON Schema

All fields defined in an XDM schema are interpreted as one of the above types. This interpretation is based on the specified type of the field (via the `type` attribute), the format of the field when present (via the `format`) attribute, and the specified range of the field (via the `minimum` and `maximum` attributes).

Integer fields are interpreted as the smallest integer data type that can contain the specified range. For example, if a "dayOfMonth" field has a minimum value of 1, and a maximum value of 31, it will be interpreted as a "byte" XDM type.

## Explicitly Signaling XDM Data Types

To make interpreting data types from the JSON Schema definition less error prone, schemas MAY explicitly signal the intended data type using the `meta:xdmType` attribute. Explicit signaling of types is optional. Even when the `meta:xdmType` attribute is present, schemas MUST fully define the field in terms of type, format, and range. When the `meta:xdmType` attribute is encountered, processors MUST verify that the JSON Schema description of the field matches the signaled type. When the JSON Schema description of a type and the signaled type do not match, the schema MUST be considered invalid.

## Defining Maps in XDM

The XDM abstract model for data inherits several properties from JSON and JSON Schema, including the basic type system. A ramification of this is that objects in XDM are semantically equivalent to maps. In XDM, objects are defined as maps from a valid JSON-LD property (a full URI, a compact URI, the keywords `@id`, `@type`, etc.) to any XDM-defined value.

One limitation of the equivalence of objects and maps in JSON and JSON Schema is that it not possible to know whether a given object definition is intended to describe a fixed set of fields (in other words, the set of keys is constrained), or whether it is intended to describe a map with an unconstrained set of keys. This limitation has serious consequences for systems that store and access XDM data, since storage systems necessarily manage data with a fixed set of fields differently than data with an unconstrained set of fields.

In order to support "map-like" data efficiently in XDM, objects may be annotated with a `meta:xdmType` set to `map` to make it clear that an object should be managed as if the key set were unconstrained. XDM places the following restrictions on the use of this storage hint:

- Properties that carry the `map` type MUST be of type "object"
- Properties that carry the `map` type MUST NOT have properties defined (i.e. they define "empty" objects)
- Properties that carry the `map` type MUST include a single "additionalProperties" schema that describes the values that may be placed within the map

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
      "meta:xdmType": "map",
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
