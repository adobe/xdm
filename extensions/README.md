# Extensions

Extensions are needed when the standard XDM components (classes, mixins, datatypes) do not provide a set of fields
needed to represent a value which is unique to a given vendor or Adobe solution. 

Users should always look to the standard components first and in many cases 
update or add to those if possible. Extensions should only be used if the new fields
are truly unique and not fit well as a standard field.   

Extensions are most often a new mixin that defines the vendor namespaced fields can be added to a schema based on a specific class.

## Namespace

All extension fields must be namespaced using a URI that is unique to that vendor or solution