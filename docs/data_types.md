# XDM Logical Data Types

XDM schemas are defined in terms of JSON Schema and therefore inherit a type model from JSON. While this allows XDM to describe data types represented in JSON directly, it is useful to define the basic logical data types more specifically so that the XDM data model can be more easily mapped to non-JSON representations.

## Data Type Definitions

The following table describes the available data types:

| XDM type | Range | JSON Schema type | JSON Schema format |
|---|---|---|---|
| string | unlimited | string ||
| number | ±2.23×10^308 to ±1.80×10^308 (IEEE 64-bit floating point) | number ||
| long | (-2^53 + 1) - (2^53 + 1) (54-bit signed integer\*) | integer ||
| int | -2^31 - 2^31 (32-bit signed integer) | integer ||
| short | -2^15 - 2^15 (16-bit signed integer) | integer ||
| byte | -2^7 - 2^7 (8-bit signed integer) | integer ||
| boolean | { true, false } | boolean ||
| date | n/a | string | date |
| date-time | n/a | string | date-time |
| array | n/a | array ||
| object | n/a | object ||

* While conceptually JSON numbers have no limits on range, in practice they are assumed to be represented as IEEE 64-bit floating point numbers. A JSON Schema integer is represented as the set of numbers that don’t have a decimal part. When this is mapped to what can be represented in 64-bit floating point format, the effective range is approximately that of a 54-bit signed integer (shifted by 1). While this can easly be represented as a 64-bit signed integer, processors must take care not to exceed the valid range when exchanging data between services as XDM.

## Describing XDM Data Types in JSON Schema

All fields defined in an XDM schema are interpreted as one of the above types. This interpretation is based on the specified type of the field (via the `type` attribute), the format of the field when present (via the `format`) attribute, and the specified range of the field (via the `minimum` and `maximum` attributes).

Integer fields are interpreted as the smallest integer data type that can contain the specified range. For example, if a "dayOfMonth" field has a minimum value of 1, and a maximum value of 31, it will be intepreted as a "byte" XDM type.

## Explicitly Signaling XDM Data Types

To make interpreting data types from the JSON Schema definition less error prone, schemas MAY explicitly signal the intended data type using the `meta:xdmType` attribute. Explicit signaling of types is optional. Even when the `meta:xdmType` attribute is present, schemas MUST fully define the field in terms of type, format, and range. When the `meta:xdmType` attribute is encountered, processors MUST verify that the JSON Schema description of the field matches the signaled type. When the JSON Schema description of a type and the signaled type do not match, the schema MUST be considered invalid.
