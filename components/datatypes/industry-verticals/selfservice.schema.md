A Customer Managed Environment is an environment that allows a system integration or deployer to manage applications. This is also known as selfservice.

In this schema the majority of properties are URIs to allow this to act as a container for a self service environment.
Typically each URI would reference some other location where the implementation or definition is held.
How some URIs might be used may not be immediately obvious. For instance, the selfServicePortal property might be
sent in a event, which would then allow the recipient of a notification generated from that event to access the correct
selfServicePortal instance to respond to the event.

### Notes.

This schema is work in progress. So far it has created a self service object with definitions
which are mostly uris, however, it has not defined any structure under those properties many of
which would be a real object structure. There is an open question as to how much of the implementation
detail of one mechanism of deploying should be expressed in this schema and how much should be left to
the implementation At present, almost everything is left to the implementation with the selfservice
object describing the concepts and terminology using uris to refernce implementation details where required.
This may not be sufficiently concrete for our purposes.
