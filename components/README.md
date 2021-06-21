# Components

The "components" act as the building blocks to compose a schema which is fully supported and usable within AEP. They are still JSON schema files, but they are treated differently in AEP in that they cannot be referenced and used directly by a Dataset. Instead they are only referenced and used by tenant defined "composed schema" which are then referenced by the Dataset. 

## Component Types

**Behavior** - Provide the lowest level type of data (record, or time-series). This drives how data ingestion partitions the data.

**Class** - Defines a high level business entity and contains the *common* fields that are present in every instance of that entity (Profile, ExperienceEvent, etc.)

**Field-Groups** - Defines a set of **standard** root level fields intended for schemas that are based on certain class. A field-group can be configured for a single class or many depending on whats in its "meta:intendedToExtend" attribute. Users creating a schema will reference 1 or more Field-Groups depending on the fields they want to bring in. 

**Datatypes** - Generic grouping of fields around a given object type (address, device, etc.). Unlike a field-group, these are not tied to a given class and can be referenced by any field that is defined as an object which contains the fields of the datatype. 
