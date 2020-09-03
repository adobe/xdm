
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

