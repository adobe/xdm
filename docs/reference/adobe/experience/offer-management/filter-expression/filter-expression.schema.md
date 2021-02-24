
# Filter Expression Tree Schema

```
https://ns.adobe.com/experience/offer-management/filter-expression
```

Represents an abstract syntax tree comprised of various node types. The expression is used to evaluate a match against a XDM object tree, where the result is a boolean value - matches: yes or no - or another XDM tree structure.

| [Abstract](../../../../../abstract.md) | [Extensible](../../../../../extensions.md) | [Status](../../../../../status.md) | [Identifiable](../../../../../id.md) | [Custom Properties](../../../../../extensions.md) | [Additional Properties](../../../../../extensions.md) | Defined In |
|----------------------------------------|--------------------------------------------|------------------------------------|--------------------------------------|---------------------------------------------------|-------------------------------------------------------|------------|
| Cannot be instantiated | Yes | Stable | No | Forbidden | Permitted | [adobe/experience/offer-management/filter-expression/filter-expression.schema.json](adobe/experience/offer-management/filter-expression/filter-expression.schema.json) |

## Filter Expression Tree Examples

```json
{
  "nodeType": "fnApply",
  "fnName": "modelInstances",
  "params": [
    {
      "nodeType": "literal",
      "literalType": "String",
      "value": "/queries/offersByPlacementIds?placementId=\"uri:com:example:placement-01001\""
    }
  ]
}
```

```json
{
  "nodeType": "select",
  "variables": [
    {
      "nodeType": "varDecl",
      "varName": "o",
      "from": {
        "nodeType": "fnApply",
        "fnName": "modelInstances",
        "params": [
          {
            "nodeType": "literal",
            "literalType": "String",
            "value": "https://ns.adobe.com/experience/offer-management/personalized-offer"
          }
        ]
      },
      "where": {
        "nodeType": "quantification",
        "quantifier": "some",
        "variables": [
          {
            "nodeType": "varDecl",
            "varName": "r",
            "from": {
              "nodeType": "fieldLookup",
              "fieldName": "xdm:representations",
              "object": {
                "nodeType": "varRef",
                "varName": "o"
              }
            },
            "where": {
              "nodeType": "fnApply",
              "fnName": "=",
              "params": [
                {
                  "nodeType": "fieldLookup",
                  "fieldName": "xdm:placement",
                  "object": {
                    "nodeType": "varRef",
                    "varName": "r"
                  }
                },
                {
                  "nodeType": "literal",
                  "literalType": "String",
                  "value": "uri:com:example:placement-1001"
                }
              ]
            }
          }
        ]
      }
    }
  ]
}
```

```json
{
  "nodeType": "fnApply",
  "fnName": "modelInstances",
  "params": [
    {
      "nodeType": "literal",
      "literalType": "String",
      "value": "/queries/offersByPlacementIds?placementId=\"uri:com:example:placement-01001\"&placementId=\"uri:com:example:placement-01002\""
    }
  ]
}
```

```json
{
  "nodeType": "select",
  "variables": [
    {
      "nodeType": "varDecl",
      "varName": "o",
      "from": {
        "nodeType": "fnApply",
        "fnName": "modelInstances",
        "params": [
          {
            "nodeType": "literal",
            "literalType": "String",
            "value": "https://ns.adobe.com/experience/offer-management/personalized-offer"
          }
        ]
      },
      "where": {
        "nodeType": "quantification",
        "quantifier": "some",
        "variables": [
          {
            "nodeType": "varDecl",
            "varName": "p",
            "from": {
              "nodeType": "literal",
              "literalType": "List",
              "value": [
                "uri:com:example:placement-1001",
                "uri:com:example:placement-1002"
              ]
            },
            "where": {
              "nodeType": "fnApply",
              "fnName": "in",
              "params": [
                {
                  "nodeType": "varRef",
                  "varName": "p"
                },
                {
                  "nodeType": "fieldLookup",
                  "fieldName": "xdm:placement",
                  "object": {
                    "nodeType": "fieldLookup",
                    "fieldName": "xdm:representations",
                    "object": {
                      "nodeType": "varRef",
                      "varName": "o"
                    }
                  }
                }
              ]
            }
          }
        ]
      }
    }
  ]
}
```

```json
{
  "nodeType": "select",
  "variables": [
    {
      "nodeType": "varDecl",
      "varName": "o",
      "from": {
        "nodeType": "fnApply",
        "fnName": "modelInstances",
        "params": [
          {
            "nodeType": "literal",
            "literalType": "String",
            "value": "https://ns.adobe.com/experience/offer-management/personalized-offer"
          }
        ]
      },
      "where": {
        "nodeType": "fnApply",
        "fnName": "and",
        "params": [
          {
            "nodeType": "quantification",
            "quantifier": "some",
            "variables": [
              {
                "nodeType": "varDecl",
                "varName": "p",
                "from": {
                  "nodeType": "literal",
                  "literalType": "List",
                  "value": [
                    "uri:com:example:placement-1001",
                    "uri:com:example:placement-1002"
                  ]
                },
                "where": {
                  "nodeType": "fnApply",
                  "fnName": "in",
                  "params": [
                    {
                      "nodeType": "varRef",
                      "varName": "p"
                    },
                    {
                      "nodeType": "fieldLookup",
                      "fieldName": "xdm:placement",
                      "object": {
                        "nodeType": "fieldLookup",
                        "fieldName": "xdm:representations",
                        "object": {
                          "nodeType": "varRef",
                          "varName": "o"
                        }
                      }
                    }
                  ]
                }
              }
            ]
          },
          {
            "nodeType": "fnApply",
            "fnName": "=",
            "params": [
              {
                "nodeType": "fieldLookup",
                "fieldName": "xdm:status",
                "object": {
                  "nodeType": "varRef",
                  "varName": "o"
                }
              },
              {
                "nodeType": "literal",
                "literalType": "String",
                "value": "approved"
              }
            ]
          }
        ]
      }
    }
  ]
}
```

```json
{
  "nodeType": "fnApply",
  "fnName": "modelInstances",
  "params": [
    {
      "nodeType": "literal",
      "literalType": "String",
      "value": "/queries/offersByPlacementIds?placementId=\"uri:com:example:placement-01001\"&placementId=\"uri:com:example:placement-01002\"&property=\"_instance.status=approved\""
    }
  ]
}
```

```json
{
  "nodeType": "fnApply",
  "fnName": "modelInstances",
  "params": [
    {
      "nodeType": "literal",
      "literalType": "String",
      "value": "/queries/offersByTagIds?tagId=\"uri:com:example:tag-0001\""
    }
  ]
}
```

```json
{
  "nodeType": "select",
  "variables": [
    {
      "nodeType": "varDecl",
      "varName": "o",
      "from": {
        "nodeType": "fnApply",
        "fnName": "modelInstances",
        "params": [
          {
            "nodeType": "literal",
            "literalType": "String",
            "value": "https://ns.adobe.com/experience/offer-management/personalized-offer"
          }
        ]
      },
      "where": {
        "nodeType": "fnApply",
        "fnName": "in",
        "params": [
          {
            "nodeType": "literal",
            "literalType": "String",
            "value": "uri:com:example:tag-0001"
          },
          {
            "nodeType": "fieldLookup",
            "fieldName": "xdm:tags",
            "object": {
              "nodeType": "varRef",
              "varName": "o"
            }
          }
        ]
      }
    }
  ]
}
```

```json
{
  "nodeType": "fnApply",
  "fnName": "modelInstances",
  "params": [
    {
      "nodeType": "literal",
      "literalType": "String",
      "value": "/queries/offersByTagIds?tagId=\"uri:com:example:tag-0001\"&tagId=\"uri:com:example:tag-0002\""
    }
  ]
}
```

```json
{
  "nodeType": "fnApply",
  "fnName": "modelInstances",
  "params": [
    {
      "nodeType": "literal",
      "literalType": "String",
      "value": "/queries/offersByTagIds?tagId=\"uri:com:example:tag-0001\"&tagId=\"uri:com:example:tag-0002\"&qop=\"AND\""
    }
  ]
}
```

```json
{
  "nodeType": "fnApply",
  "fnName": "modelInstances",
  "params": [
    {
      "nodeType": "literal",
      "literalType": "String",
      "value": "/queries/offersByTagIds?tagId=\"uri:com:example:tag-0001\"&tagId=\"uri:com:example:tag-0002\"&qop=AND&property=`\"_instance.status=approved\""
    }
  ]
}
```

```json
{
  "nodeType": "select",
  "variables": [
    {
      "nodeType": "varDecl",
      "varName": "o",
      "from": {
        "nodeType": "fnApply",
        "fnName": "modelInstances",
        "params": [
          {
            "nodeType": "literal",
            "literalType": "String",
            "value": "https://ns.adobe.com/experience/offer-management/personalized-offer"
          }
        ]
      },
      "where": {
        "nodeType": "fnApply",
        "fnName": "and",
        "params": [
          {
            "nodeType": "quantification",
            "quantifier": "all",
            "variables": [
              {
                "nodeType": "varDecl",
                "varName": "t",
                "from": {
                  "nodeType": "literal",
                  "literalType": "List",
                  "value": [
                    "uri:com:example:tag-0001",
                    "uri:com:example:tag-0002"
                  ]
                },
                "where": {
                  "nodeType": "fnApply",
                  "fnName": "in",
                  "params": [
                    {
                      "nodeType": "varRef",
                      "varName": "t"
                    },
                    {
                      "nodeType": "fieldLookup",
                      "fieldName": "xdm:tags",
                      "object": {
                        "nodeType": "varRef",
                        "varName": "o"
                      }
                    }
                  ]
                }
              }
            ]
          },
          {
            "nodeType": "fnApply",
            "fnName": "=",
            "params": [
              {
                "nodeType": "fieldLookup",
                "fieldName": "xdm:status",
                "object": {
                  "nodeType": "varRef",
                  "varName": "o"
                }
              },
              {
                "nodeType": "literal",
                "literalType": "String",
                "value": "approved"
              }
            ]
          }
        ]
      }
    }
  ]
}
```

```json
{
  "nodeType": "select",
  "variables": [
    {
      "nodeType": "varDecl",
      "varName": "o",
      "from": {
        "nodeType": "fnApply",
        "fnName": "modelInstances",
        "params": [
          {
            "nodeType": "literal",
            "literalType": "String",
            "value": "https://ns.adobe.com/experience/offer-management/personalized-offer"
          }
        ]
      },
      "where": {
        "nodeType": "quantification",
        "quantifier": "some",
        "variables": [
          {
            "nodeType": "varDecl",
            "varName": "t",
            "from": {
              "nodeType": "literal",
              "literalType": "List",
              "value": [
                "uri:com:example:tag-0001",
                "uri:com:example:tag-0002"
              ]
            },
            "where": {
              "nodeType": "fnApply",
              "fnName": "in",
              "params": [
                {
                  "nodeType": "varRef",
                  "varName": "t"
                },
                {
                  "nodeType": "fieldLookup",
                  "fieldName": "xdm:tags",
                  "object": {
                    "nodeType": "varRef",
                    "varName": "o"
                  }
                }
              ]
            }
          }
        ]
      }
    }
  ]
}
```

```json
{
  "nodeType": "select",
  "variables": [
    {
      "nodeType": "varDecl",
      "varName": "o",
      "from": {
        "nodeType": "fnApply",
        "fnName": "modelInstances",
        "params": [
          {
            "nodeType": "literal",
            "literalType": "String",
            "value": "https://ns.adobe.com/experience/offer-management/personalized-offer"
          }
        ]
      },
      "where": {
        "nodeType": "quantification",
        "quantifier": "all",
        "variables": [
          {
            "nodeType": "varDecl",
            "varName": "t",
            "from": {
              "nodeType": "literal",
              "literalType": "List",
              "value": [
                "uri:com:example:tag-0001",
                "uri:com:example:tag-0002"
              ]
            },
            "where": {
              "nodeType": "fnApply",
              "fnName": "in",
              "params": [
                {
                  "nodeType": "varRef",
                  "varName": "t"
                },
                {
                  "nodeType": "fieldLookup",
                  "fieldName": "xdm:tags",
                  "object": {
                    "nodeType": "varRef",
                    "varName": "o"
                  }
                }
              ]
            }
          }
        ]
      }
    }
  ]
}
```

```json
{
  "nodeType": "select",
  "variables": [
    {
      "nodeType": "varDecl",
      "varName": "o",
      "from": {
        "nodeType": "fnApply",
        "fnName": "modelInstances",
        "params": [
          {
            "nodeType": "literal",
            "literalType": "String",
            "value": "https://ns.adobe.com/experience/offer-management/personalized-offer"
          },
          {
            "nodeType": "literal",
            "literalType": "String",
            "value": "?id=\"uri:com:example:offer-10001\"&id=\"uri:com:example:offer-10002\"&id=\"uri:com:example:offer-10004\"&id=\"uri:com:example:offer-10009\"&id=\"uri:com:example:offer-10013\"&id=\"uri:com:example:offer-10005\"&id=\"uri:com:example:offer-10022\""
          },
          {
            "nodeType": "literal",
            "literalType": "String",
            "value": "?property=\"_instance.xdm:representations.xdm:placement=uri:com:example:placement-1001\""
          },
          {
            "nodeType": "literal",
            "literalType": "String",
            "value": "?property=\"_instance.xdm:status=approved\""
          }
        ]
      }
    }
  ]
}
```

```json
{
  "nodeType": "select",
  "variables": [
    {
      "nodeType": "varDecl",
      "varName": "o",
      "from": {
        "nodeType": "fnApply",
        "fnName": "modelInstances",
        "params": [
          {
            "nodeType": "literal",
            "literalType": "String",
            "value": "/queries/offersByTagIds?tagId=\"uri:com:example:tag-0001\"&tagId=\"uri:com:example:tag-0002\"&qop=AND&property=`\"_instance.status=approved\""
          }
        ]
      },
      "where": {
        "nodeType": "quantification",
        "quantifier": "some",
        "variables": [
          {
            "nodeType": "varDecl",
            "varName": "r",
            "from": {
              "nodeType": "fieldLookup",
              "fieldName": "xdm:representations",
              "object": {
                "nodeType": "varRef",
                "varName": "o"
              }
            },
            "where": {
              "nodeType": "fnApply",
              "fnName": "=",
              "params": [
                {
                  "nodeType": "fieldLookup",
                  "fieldName": "xdm:placement",
                  "object": {
                    "nodeType": "varRef",
                    "varName": "r"
                  }
                },
                {
                  "nodeType": "literal",
                  "literalType": "String",
                  "value": "uri:com:example:placement-1001"
                }
              ]
            }
          }
        ]
      }
    }
  ]
}
```

```json
{
  "nodeType": "select",
  "variables": [
    {
      "nodeType": "varDecl",
      "varName": "o",
      "from": {
        "nodeType": "fnApply",
        "fnName": "modelInstances",
        "params": [
          {
            "nodeType": "literal",
            "literalType": "String",
            "value": "https://ns.adobe.com/experience/offer-management/personalized-offer"
          }
        ]
      },
      "where": {
        "nodeType": "fnApply",
        "fnName": "and",
        "params": [
          {
            "nodeType": "fnApply",
            "fnName": "in",
            "params": [
              {
                "nodeType": "fieldLookup",
                "fieldName": "xdm:@id",
                "object": {
                  "nodeType": "varRef",
                  "varName": "o"
                }
              },
              {
                "nodeType": "literal",
                "literalType": "List",
                "value": [
                  "uri:com:example:offer-10001",
                  "uri:com:example:offer-10002",
                  "uri:com:example:offer-10004",
                  "uri:com:example:offer-10009",
                  "uri:com:example:offer-10013",
                  "uri:com:example:offer-10005",
                  "uri:com:example:offer-10022"
                ]
              }
            ]
          },
          {
            "nodeType": "quantification",
            "quantifier": "some",
            "variables": [
              {
                "nodeType": "varDecl",
                "varName": "r",
                "from": {
                  "nodeType": "fieldLookup",
                  "fieldName": "xdm:representations",
                  "object": {
                    "nodeType": "varRef",
                    "varName": "o"
                  }
                },
                "where": {
                  "nodeType": "fnApply",
                  "fnName": "=",
                  "params": [
                    {
                      "nodeType": "fieldLookup",
                      "fieldName": "xdm:placement",
                      "object": {
                        "nodeType": "varRef",
                        "varName": "r"
                      }
                    },
                    {
                      "nodeType": "literal",
                      "literalType": "String",
                      "value": "uri:com:example:placement-1001"
                    }
                  ]
                }
              }
            ]
          },
          {
            "nodeType": "fnApply",
            "fnName": "=",
            "params": [
              {
                "nodeType": "fieldLookup",
                "fieldName": "xdm:status",
                "object": {
                  "nodeType": "varRef",
                  "varName": "o"
                }
              },
              {
                "nodeType": "literal",
                "literalType": "String",
                "value": "approved"
              }
            ]
          }
        ]
      }
    }
  ]
}
```

```json
{
  "nodeType": "select",
  "variables": [
    {
      "nodeType": "varDecl",
      "varName": "p",
      "from": {
        "nodeType": "fnApply",
        "fnName": "modelInstances",
        "params": [
          {
            "nodeType": "literal",
            "literalType": "String",
            "value": "https://ns.adobe.com/xdm/context/profile"
          }
        ]
      },
      "where": {
        "nodeType": "fnApply",
        "fnName": "or",
        "params": [
          {
            "nodeType": "fnApply",
            "fnName": "=",
            "params": [
              {
                "nodeType": "fieldLookup",
                "fieldName": "xdm:firstName",
                "object": {
                  "nodeType": "fieldLookup",
                  "fieldName": "xdm:person",
                  "object": {
                    "nodeType": "varRef",
                    "varName": "p"
                  }
                }
              },
              {
                "literalType": "String",
                "nodeType": "literal",
                "value": "Dennis"
              }
            ]
          },
          {
            "nodeType": "fnApply",
            "fnName": "=",
            "params": [
              {
                "nodeType": "fieldLookup",
                "fieldName": "xdm:lastName",
                "object": {
                  "nodeType": "fieldLookup",
                  "fieldName": "xdm:person",
                  "object": {
                    "nodeType": "varRef",
                    "varName": "p"
                  }
                }
              },
              {
                "literalType": "String",
                "nodeType": "literal",
                "value": "Kehrig"
              }
            ]
          },
          {
            "nodeType": "quantification",
            "quantifier": "all",
            "variables": [
              {
                "nodeType": "varDecl",
                "varName": "x",
                "from": {
                  "nodeType": "fnApply",
                  "fnName": "modelInstances",
                  "params": [
                    {
                      "nodeType": "literal",
                      "literalType": "String",
                      "value": "https://ns.adobe.com/xdm/context/experienceevent"
                    }
                  ]
                },
                "where": {
                  "nodeType": "fnApply",
                  "fnName": "and",
                  "params": [
                    {
                      "nodeType": "quantification",
                      "quantifier": "some",
                      "variables": [
                        {
                          "nodeType": "varDecl",
                          "varName": "id",
                          "from": {
                            "nodeType": "fieldLookup",
                            "fieldName": "xdm:endUserIDs",
                            "object": {
                              "nodeType": "varRef",
                              "varName": "x"
                            }
                          },
                          "where": {
                            "nodeType": "fnApply",
                            "fnName": "in",
                            "params": [
                              {
                                "nodeType": "varRef",
                                "varName": "id"
                              },
                              {
                                "nodeType": "fieldLookup",
                                "fieldName": "xdm:identities",
                                "object": {
                                  "nodeType": "varRef",
                                  "varName": "p"
                                }
                              }
                            ]
                          }
                        }
                      ]
                    },
                    {
                      "nodeType": "fnApply",
                      "fnName": "=",
                      "params": [
                        {
                          "nodeType": "fieldLookup",
                          "fieldName": "xdm:city",
                          "object": {
                            "nodeType": "fieldLookup",
                            "fieldName": "xdm:geo",
                            "object": {
                              "nodeType": "fieldLookup",
                              "fieldName": "xdm:placecontext",
                              "object": {
                                "nodeType": "varRef",
                                "varName": "x"
                              }
                            }
                          }
                        },
                        {
                          "literalType": "String",
                          "nodeType": "literal",
                          "value": "Tōkyō"
                        }
                      ]
                    }
                  ]
                }
              }
            ]
          }
        ]
      }
    }
  ]
}
```

```json
{
  "nodeType": "select",
  "variables": [
    {
      "nodeType": "varDecl",
      "varName": "o",
      "from": {
        "nodeType": "fnApply",
        "fnName": "modelInstances",
        "params": [
          {
            "nodeType": "literal",
            "literalType": "String",
            "value": "https://ns.adobe.com/experience/offer-management/personalized-offer"
          }
        ]
      },
      "where": {
        "nodeType": "fnApply",
        "fnName": "and",
        "params": [
          {
            "nodeType": "quantification",
            "quantifier": "all",
            "variables": [
              {
                "nodeType": "varDecl",
                "varName": "_",
                "from": {
                  "nodeType": "literal",
                  "literalType": "List",
                  "value": [
                    "uri:com:example:tag-0001",
                    "uri:com:example:tag-0002"
                  ]
                },
                "where": {
                  "nodeType": "fnApply",
                  "fnName": "in",
                  "params": [
                    {
                      "nodeType": "varRef",
                      "varName": "_"
                    },
                    {
                      "nodeType": "fieldLookup",
                      "fieldName": "xdm:tags",
                      "object": {
                        "nodeType": "varRef",
                        "varName": "o"
                      }
                    }
                  ]
                }
              }
            ]
          },
          {
            "nodeType": "quantification",
            "quantifier": "some",
            "variables": [
              {
                "nodeType": "varDecl",
                "varName": "_",
                "from": {
                  "nodeType": "fieldLookup",
                  "fieldName": "xdm:representations",
                  "object": {
                    "nodeType": "varRef",
                    "varName": "o"
                  }
                },
                "where": {
                  "nodeType": "fnApply",
                  "fnName": "=",
                  "params": [
                    {
                      "nodeType": "fieldLookup",
                      "fieldName": "xdm:placement",
                      "object": {
                        "nodeType": "varRef",
                        "varName": "_"
                      }
                    },
                    {
                      "nodeType": "literal",
                      "literalType": "String",
                      "value": "uri:com:example:placement-1001"
                    }
                  ]
                }
              }
            ]
          },
          {
            "nodeType": "fnApply",
            "fnName": "=",
            "params": [
              {
                "nodeType": "fieldLookup",
                "fieldName": "xdm:status",
                "object": {
                  "nodeType": "varRef",
                  "varName": "o"
                }
              },
              {
                "nodeType": "literal",
                "literalType": "String",
                "value": "approved"
              }
            ]
          }
        ]
      }
    }
  ]
}
```


# Filter Expression Tree Definitions

| Property | Type | Group |
|----------|------|-------|
| [fnName](#fnname) | `const` | `https://ns.adobe.com/experience/offer-management/filter-expression#/definitions/function-content-not-equal-to-string` |
| [literalType](#literaltype) | `const` | `https://ns.adobe.com/experience/offer-management/filter-expression#/definitions/literal-query-string-content` |
| [nodeType](#nodetype) | `const` | `https://ns.adobe.com/experience/offer-management/filter-expression#/definitions/literal-query-string-content` |
| [params](#params) | reference | `https://ns.adobe.com/experience/offer-management/filter-expression#/definitions/function-content-not-equal-to-string` |
| [value](#value) | `string` | `https://ns.adobe.com/experience/offer-management/filter-expression#/definitions/literal-query-string-content` |

## fnName


`fnName`
* is optional
* type: `const`
* defined in this schema

The value of this property **must** be equal to:

```json
"notEqualTo"
```





## literalType


`literalType`
* is optional
* type: `const`
* defined in this schema

The value of this property **must** be equal to:

```json
"QueryString"
```





## nodeType


`nodeType`
* is optional
* type: `const`
* defined in this schema

The value of this property **must** be equal to:

```json
"literal"
```





## params


`params`
* is optional
* type: reference
* between `2` and `3` items in the array
* defined in this schema

### params Type


Array type: reference

All items must be of the type:
* []() – `#/definitions/node-content`








## value


`value`
* is optional
* type: `string`
* defined in this schema

### value Type


`string`





