# Extensions

Extensions are needed when the standard XDM components (classes, mixins, datatypes) do not provide a set of fields
needed to represent a value which is unique to a given vendor or Adobe solution. 

Users should always look to the standard components first and in many cases 
update or add to those if possible. Extensions should only be used if the new field(s)
are truly unique to a given vendor or solution.   

Extensions are most often a new mixin that defines new vendor namespaced fields in one of the standard classes, 
but an extension can also introduce a new class as well. 

## Namespace

All extension $id values and fields must be namespaced using a URI that is unique to that vendor or solution