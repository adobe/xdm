## Abstract and Concrete Schemas

XDM is defined using a modular schema framework that encourages the re-use of schemas or parts of schemas.
As a result, XDM consists of abstract and concrete schemas.

### Abstract Schemas

Abstract schemas or schema fragments are partial schemas that can be re-used in other schemas, but that do not allow the creation of any instances.
As an example, the [Language Alternative](reference/assets/language-alternative.schema.md) schema which is used to define metadata that varies by language can be used as part of another schema, but it cannot stand on its own.

Abstract schemas are often used to define properties that are used in multiple schemas at once.

### Concrete Schemas

Concrete schemas or proper schemas are schemas that can be instantiated, i.e. they describe instances of entities that are exposed by APIs that are implementing XDM.

Concrete schemas often include or reference Abstract schemas.
