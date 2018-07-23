## Identifying Entities

Instances of most schemas in XDM are uniquely identifiable based on the value of the `@id` attribute.
This attribute is always a URI, and will always be present all schemas.  However, some schemas do not require that all instances be identifiable, so the `@id` attribute will be optional in those cases.

Schemas that have a required `@id` attribute are considered identifiable, schemas where this attribute is optional are typically only used as child-objects in identifiable schemas. However, since not all uses for the schema are known, we hace left it present and optional should a given use case require the need to make it identifiable.
