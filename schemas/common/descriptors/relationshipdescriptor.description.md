A descriptor that describes a relationship between two schemas, a 'source' and a 'destination'.

This relationship may be directly between the schemas, or between specific properties of the schemas. Relationship descriptors may be used to describe foreign key relationships between schemas, defining a relational model or star schema.

While schema descriptors can be used to define metadata about a single schema, they are also common used to describe relationships between schemas. This mechanism can be used to link schemas together at the property level, defining the equivalent of "foreign key" relationships in a relational database.

The following relationship types are defined by XDM:

* `xdm:oneToOne`: describes a 1:1 relationship between a source schema and a destination schema
* `xdm:oneToMany`: describes a 1:m relationship between a source schema and a destination schema
* `xdm:manyToMany`: describes an m:n relationship between a source schema and a destination schema
