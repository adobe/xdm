A descriptor that describes a relationship between two schemas, a 'source' and a 'destination'.

This relationship may be directly between the schemas, or between specific properties of the schemas. Relationship descriptors may be used to describe foreign key relationships between schemas, defining a relational model or star schema.

While schema descriptors can be used to define metadata about a single schema, they are also commonly used to describe relationships between schemas. This mechanism can be used to link schemas together at the property level, defining the equivalent of "foreign key" relationships in a relational database.

The following relationship types are defined by XDM:

* `xdm:oneToOne`: describes a 1:1 relationship between a source schema and a destination schema
* `xdm:oneToMany`: describes a 1:m relationship between a source schema and a destination schema
* `xdm:manyToOne`: describes a m:1 relationship between a source schema and a destination schema
* `xdm:manyToMany`: describes an m:n relationship between a source schema and a destination schema

## Arrays and Denormalized Links

The interpretation of the relationship descriptor is modified slightly when the descriptor is applied to an array property. When the source property is an array, this indicates that the array contains a set of values, each of which reference an instance of the destination schema type based on the provided destination property.

For example, if a relationship of type `xdm:oneToMany` is applied with a source property that is an array, this is to be interpreted to mean that the items in the array each represent a value that can be linked to the corresponding property in the destination schema (either 1:1 or 1:m) and therefore the overall relationship being defined is 1:m.

## Example Relationship Descriptor

We have two schemas, which form a parent/child relationship. The first is parent.json:

```json
{
  "$schema": "http://json-schema.org/draft-06/schema#",
  "$id": "https://ns.adobe.com/xdm/example/parent",
  "title": "Parent",
  "type": "object",
  "properties": {
    "@id": {
      "meta:descriptors": [
        {
          "@type": "xdm:oneToMany",
          "xdm:destinationSchema": "https://ns.adobe.com/xdm/example/child",
          "xdm:destinationProperty": "xdm:parent"
        }
      ],
      "type": "string"
    }
  }
}
```

The second is child.json:

```json
{
  "$schema": "http://json-schema.org/draft-06/schema#",
  "$id": "https://ns.adobe.com/xdm/example/child",
  "title": "Child",
  "type": "object",
  "properties": {
    "@id": { "type": "string" },
    "xdm:parent": {
      "meta:descriptors": [
        {
          "@type": "xdm:manyToOne",
          "xdm:destinationSchema": "https://ns.adobe.com/xdm/example/parent",
          "xdm:destinationProperty": "@id"
        }
      ],
      "type": "string",
      "format": "uri"
    }
  }
}
```

The source schema in this example is Parent, which contains a single relationship descriptor describing a one-to-many relationship between objects of schema Parent to objects of schema Child.

The above example shows how a descriptor may be embedded in the schema being described, directly on the property where it applies. The example also shows the reciprocal relationship between the parent and child entities. If we were to define this as a stand-alone descriptor, it would look like this:

```json
{
  "@id": "https://example.com/descriptors/1",
  "@type": "xdm:oneToMany",
  "xdm:sourceSchema": "https://ns.adobe.com/xdm/example/parent",
  "xdm:sourcePropery": "@id",
  "xdm:destinationSchema": "https://ns.adobe.com/xdm/example/child",
  "xdm:destinationProperty": "xdm:parent"
}
```

This highlights the ability to use schema descriptors both directly in schemas and also as independent entities.

## Example Relationship Descriptor using an Array

We can also model the above parent/child relationship using a denormalized array from. The denormalized parent.json:

```json
{
  "$schema": "http://json-schema.org/draft-06/schema#",
  "$id": "https://ns.adobe.com/xdm/example/parent",
  "title": "Parent",
  "type": "object",
  "properties": {
    "@id": {
      "type": "string"
    },
    "children": {
      "meta:descriptors": [
        {
          "@type": "xdm:oneToMany",
          "xdm:destinationSchema": "https://ns.adobe.com/xdm/example/child",
          "xdm:destinationProperty": "@id"
        }
      ],
      "type": "array",
      "items": {
        "type": "string",
        "format": "uri"
      }
    }
  }
}
```

This changes child.json to:

```json
{
  "$schema": "http://json-schema.org/draft-06/schema#",
  "$id": "https://ns.adobe.com/xdm/example/child",
  "title": "Child",
  "type": "object",
  "properties": {
    "@id": {
      "meta:descriptors": [
        {
          "@type": "xdm:manyToOne",
          "xdm:destinationSchema": "https://ns.adobe.com/xdm/example/parent",
          "xdm:destinationProperty": "children"
        }
      ],
      "type": "string"
    }
  }
}
```
