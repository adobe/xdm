The namespace ensures first second and third party user and device identities can be used in customer engagement platforms.

Namespaces are used to attain global uniqueness with user and device identities that originate in distributed, uncoordinated identity environments. It can be thought of as an automatic prefix generator that can be used to append a unique prefix to other generators of identities that are only guaranteed to be unique in the scope of the individual generating system (the standard case for cookies and integer based identities).

The namespace does not describe how the additional prefix is to be used to augment the identities it is making unique, that is up to the systems that process the new, globally unique identities.

Namespaces have a simplified code property that is easier for humans to use.
Case 1: Global Namespace Codes: These codes allow reuse of common namespaces for identities that are already globally unique such as e-mail addresses, phone numbers or push notification tokens.
Case 2: Implementation Specific Codes: Are only for use in a specific context, like an individual brand and have a scope that is specific to that customer engagement context. In this case two implementations can use the same code, but underlying namespaces would be different.

Namespace id(s) are the technical representation of the namespace and are what is actually used as part of user or device identification. Generally, these id(s) should be looked up only at the time of use to ensure contextual correctness.

Related:
Namespaces are similar to datasources in the way they operate. The core difference being datasources are used to uniquely identify specific sources of data in an uncoordinated data environment, such as independent data collection applications.
