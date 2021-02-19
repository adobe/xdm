
# XDM Namspacing

## Introduction

An often overlooked but important part of XDM is that all schemas and fields have a namespace.  Name spacing is the key to make XDM extensible and prevents field collisions as different schema components are brought together. Name spacing allows a user to say field X in namespace Y means something different than the same field X in name space Z. For example, XDM schemas today have a standard "age" field that exists in the "xdm" namespace (xdm:age), but a user is free to create their own "age" field under a different namespace (adobe:age) and both can coexist together but have a different underlying meaning or constraints. 

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
			"schema": "http://schema.org",
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
			"https://ns.adobe.com/xdm/channels/application": { //https://ns.adobe.com/xdm/channels is the namespace, createdDate is the field name
				"type": "string"
			},
			"schema:latitude": { //schema is the namespace and comes from the schema.org defintion, latitude is the field name
				"type": "number"
			},
			"https://ns.adobe.com/vendora/product/stockNumber": { //https://ns.adobe.com/vendora/product is the namespace, stockNumber is the fieldname
				"type": "string"
			},
			"customerA:internalSku": { //customera is the namespace (tenantId), internalSku is the field name
				"type": "number"
			},
			"https://ns.thirdparty.com/color": { //https://ns.thirdparty.com is the namespace, color is the fieldname
				"type": "string"
			}
		}
	}


## JSON-LD and Adobe Experience Platform (AEP)
The use of JSON-LD within XDM was put in place before AEP started using XDM for its standard models and Dataset definitions. The JSON-LD syntax provides a standard way to define the namespace of a field, but the intentions of AEP to expose field names in SQL and other interfaces made the JSON-LD syntax impossible to use in its raw form. As a result, AEP exposes the XDM schema in a form known as XED (Experience for Data). The XED view of the schema maintains the namespaces, but in a format that is compatible with the AEP use cases and current implementation. The example below shows what users of AEP see today and when the view the XDM scheam from above. 

**AEP form of the above XDM schema:**

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
	       	},
	       	"_channels": { //https://ns.adobe.com/xdm/channels namespace is exposed as a parent field named _channels
		       	"type": "object",
		       	"properties": {
			       	"application": { //member of the "https://ns.adobe.com/xdm/channels" namespace
				       	"type": "string"
				    }
				}
	       	},
	       	"_schema": { //schema namespace is exposed as a parent field named _schema
		       	"type": "object",
		       	"properties": {
			       	"latitude": { //member of the "schema" namespace
				       	"type": "number"
				    }
				}
	       	},
	       	"_vendora": { //URI namespace is converted into a nested path
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
		},
		"_customerA": {//customerA namespace (tenantId) converted into a physical field named _customerA
			"type": "object",
			"properties": {
				"internalSku": { 
					"type": "number"
				}
			}
		},
		"_ns": {
			"type": "object",
			"properties": {
				"thirdparty": { 
					"type": "object"
					"properties": {
						"com": {
							"type": "object",
							"properties": {
								"color": {
									"type": "string"
								}
							}
						}
					}
				}
			}
		}

	}

