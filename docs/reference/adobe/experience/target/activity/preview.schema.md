
# Activity Preview Parameters Schema

```
https://ns.adobe.com/experience/target/activity/preview
```

Adobe Target activity preview parameters. QA mode/preview mode parameters that were specified in the request, if any.

| [Abstract](../../../../../abstract.md) | [Extensible](../../../../../extensions.md) | [Status](../../../../../status.md) | [Identifiable](../../../../../id.md) | [Custom Properties](../../../../../extensions.md) | [Additional Properties](../../../../../extensions.md) | Defined In |
|----------------------------------------|--------------------------------------------|------------------------------------|--------------------------------------|---------------------------------------------------|-------------------------------------------------------|------------|
| Can be instantiated | Yes | Stable | No | Forbidden | Permitted | [adobe/experience/target/activity/preview.schema.json](adobe/experience/target/activity/preview.schema.json) |

# Activity Preview Parameters Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [xdm:audienceIDsToEvaluateAsFalse](#xdmaudienceidstoevaluateasfalse) | `string[]` | Optional | Activity Preview Parameters (this schema) |
| [xdm:audienceIDsToEvaluateAsTrue](#xdmaudienceidstoevaluateastrue) | `string[]` | Optional | Activity Preview Parameters (this schema) |
| [xdm:forcedExperienceID](#xdmforcedexperienceid) | `string` | Optional | Activity Preview Parameters (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## xdm:audienceIDsToEvaluateAsFalse
### Audience Identifiers to Evaluate as False.

Evaluated as non-matching audience identifiers.

`xdm:audienceIDsToEvaluateAsFalse`
* is optional
* type: `string[]`

* defined in this schema

### xdm:audienceIDsToEvaluateAsFalse Type


Array type: `string[]`

All items must be of the type:
`string`









## xdm:audienceIDsToEvaluateAsTrue
### Audience Identifiers to Evaluate as True.

Evaluated as matching audience identifiers.

`xdm:audienceIDsToEvaluateAsTrue`
* is optional
* type: `string[]`

* defined in this schema

### xdm:audienceIDsToEvaluateAsTrue Type


Array type: `string[]`

All items must be of the type:
`string`









## xdm:forcedExperienceID
### Experience Identifier

Activity experience identifier of previewed experience.

`xdm:forcedExperienceID`
* is optional
* type: `string`
* defined in this schema

### xdm:forcedExperienceID Type


`string`





