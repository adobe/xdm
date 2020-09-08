
# XDM Namspacing

## Introduction

An often overlooked but important part of XDM is that all schemas and fields have a namespace.  Name spacing is the key to make XDM extensible and prevents field collisions as different schema components are brought together. Name spacing allows a user to say field X in namespace Y means something different than the same field X in name space Z. For example, XDM schemas today have a standard "age" field that exists in the "xdm" namespace, but a user is free to create their own "age" field under a different namespace (their customer or tenantId) and both can coexist together but have a different underlying meaning or constraints. 

## How does XDM Assign a Namespace
XDM uses the [JSON-LD](https://json-ld.org/spec/latest/json-ld/) syntax to assign the namespace to a field. This namespace can come in the form of a URI (not the same as a URL), or as a shorthand prefix which is configured in the @context attribute of a schema. 

**Example**

    {
		"$id": "https://ns.adobe.com/xdm/schemas/mySchema",
		"title": "Product",
		"description": "Represents the definition of a Project",
		"@context": { //Shorthand prefixes that can be used instead of the full URI
			"xdm": "https://ns.adobe.com/xdm",
			"repo": "http://ns.adobe.com/adobecloud/core/1.0/",
			"customerA": "https://ns.adobe.com/customera"
		}
		"properties": {
			"@id": { //unique identifier as defined by the JSON-LD spec 
				"type": "string"
			},
			"xdm:sku": { //xdm is the namespace, sku is the field name
				"type": "string"
			},
			"xdm:name": { //xdm is the namespace, name is the field name
				"type": "string"
			},
			"repo:createdDate": { //repo is the namespace, createdDate is the field name
				"type": "string",
				"format": "datetime"
			},
			"https://ns.adobe.com/vendora/product/stockNumber": { //https://ns.adobe.com/vendora/product is the namespace, stockNumber is the fieldname
				"type": "string"
			},
			"customerA:internalSku": { //customera is the namespace, internalSku is the field name
				"type": "number"
			}
		}
	}


## Namespaces and Adobe Experience Platform (AEP)
The use of JSON-LD within XDM was put in place before AEP transitioned to using XDM for its schema definitions. AEP is a data platform where data is based on the XDM schema, but fields are exposed in interfaces such as SQL where the JSON-LD notation (slashes, colons, dots) is either not supported or complicates the user experience.  As a result, AEP exposes the XDM schema and it's associated data in a form known as XED (Experience for Data). 

**The above XDM schema is expose in AEP as the following:**

    {
	   "$id": "https://ns.adobe.com/xdm/schemas/mySchema",
	   "title": "Product",
	   "description": "Represents the definition of a Project"
	   "properties": {
	   	"_id": { //@ symbol is replaced with underscore
			"type": "string"
		},
		"sku": { //xdm namespace is removed
			"type": "string"
		},
		"name": { //xdm namespace is removed
			"type": "string"
	       	},
	       	"_repo": { //repo namespace is exposed as a parent field named _repo
		       	"type": "object",
		       	"properties": {
			       	"createdDate": { //member of the "repo" namespace
				       	"type": "string",
				       	"format": "datetime"
				    }
				}
	       	}
	       	"_vendora": { //top portion of the vendora/product namespace
		       	"type": "object",
		       	"properties": {
			       	"product": { //second level of the namespace
				       	"type": "object",
				       	"properties": {
					       	"stockNumber": {
						       	"type": "string"
						    }
						}
					}
				}
			}
		}
		"_customera": {//customera namespace converted into a physical field named _customera
			"type": "object",
			"properties": {
				"internalSku": { 
					"type": "number"
				}
			}
		}
	}

