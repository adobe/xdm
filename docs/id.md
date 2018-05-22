## Identifying Entities

Instances of most schemas in XDM are uniquely identifiable based on the value of the `@id` attribute.
This attribute is always a URI, but may not be present or required in all schemas.

Schemas that have an `@id` attribute are considered identifiable, schemas that do not have this attribute are typically only used as child-objects in identifiable schemas.
