## Schema Status

The status of each schema in XDM describes the likelihood of change of a schema.
In particular for XDM Versions prior to XDM 1.0.0, this can inform users and providers of XDM-compatible APIs of the stability of a given schema.

XDM defines following status values:

- Stable: the schema is considered stable and can be used in production without any risk. Additions to the schema are possible, but will not impact existing implementations.
- Stabilizing: No further major changes to the schema are expected, but may occur after review. Implementors should check the status of the schema regularly.
- Experimental: Major changes can be expected because the schema is still in active development. Implementors should proceed with caution.
- Deprecated: Schema is no longer maintained, supported or is superceded by another schema/set of schemas. Implementors should update their implementations.
