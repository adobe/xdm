# Extensions

Extensions are needed when the standard XDM components (classes, mixins, datatypes) do not provide a set of fields
needed to represent a concept which is unique to a given vendor or Adobe solution. 

Users should always look to the standard components first and in many cases 
update or add to those if possible. Extensions should only be used if the new field(s)
are truly unique to a given vendor or solution.   

Extensions are most often a new mixin that defines new vendor namespaced fields in one of the standard classes, 
but an extension can also introduce a new class as well. 

## Namespaces and JSON-LD
All schemas and fields in XDM are name spaced using the JSON-LD notation. This namespace for extensions is in the form of a URI (not to be confused with URL). This URI does not resolve, but acts as a unique namespace for the JSON schema ID and fields. 

For example, the following is a new mixin created by a vendor that can be used to inject a field named "vendorField" to a schema based on the Profile class. 

    {
       "$id": "https://ns.example.com/profile-extension",
       "title": "Example Vendor Profile Extension",
       "description": "Adds the field used by the vendor integration within AEP",
       "meta:intendedToExtend": ["https://ns.adobe.com/xdm/context/profile"], //The class this mixin can be used in
       "properties": {
          "https://ns.example.com/vendorField": {
              "type": "string"
          }
       }
    }

In the above example the new component has an $id of "https://ns.example.com/profile-extension" which is a unique ID representing the component named "profile-extension" from the "https://ns.example.com" namespace.

The field being defined is "https://ns.example.com/vendorField" which is saying a field named "vendorField" from the "https://ns.example.com/" namespace. 

Another vendor could come along and also introduce their own "vendorField", but it would have a different namespace making it a completely different field. 
 
