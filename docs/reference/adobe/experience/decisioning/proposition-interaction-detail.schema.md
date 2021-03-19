
# Proposition Interaction Details Schema

```
https://ns.adobe.com/experience/decisioning/proposition-interaction-details
```

A proposition interaction is used to report an experience event that relates to a prior decision proposition. The decision proposition is assumed to have contributed to the experience and the unique decision ID is added to the experience event.

| [Abstract](../../../../abstract.md) | [Extensible](../../../../extensions.md) | [Status](../../../../status.md) | [Identifiable](../../../../id.md) | [Custom Properties](../../../../extensions.md) | [Additional Properties](../../../../extensions.md) | Defined In |
|-------------------------------------|-----------------------------------------|---------------------------------|-----------------------------------|------------------------------------------------|----------------------------------------------------|------------|
| Can be instantiated | Yes | Stable | No | Forbidden | Permitted | [adobe/experience/decisioning/proposition-interaction-detail.schema.json](adobe/experience/decisioning/proposition-interaction-detail.schema.json) |
## Schema Hierarchy

* Proposition Interaction Details `https://ns.adobe.com/experience/decisioning/proposition-interaction-details`
  * [Extensibility base schema](../../../datatypes/extensible.schema.md) `https://ns.adobe.com/xdm/common/extensible`
  * [Decision Scope Details](scope-details.schema.md) `https://ns.adobe.com/experience/decisioning/scope-details`
  * [Decision Event Details](decisionevent-details.schema.md) `https://ns.adobe.com/experience/decisioning/decisionevent-details`


## Proposition Interaction Details Examples

```json
{
  "xdm:items": [
    {
      "xdm:id": "ExperienceB",
      "xdm:data": {
        "type": "setHtml",
        "content": "<div class='banner_img d-none d-lg-block'><img src='https://contentviewer.s3.amazonaws.com/helium/women_banner.jpeg?w=780&amp;h=408&amp;crop=1' alt=''>\n</div>",
        "selector": "#root > DIV.react-spectrum-provider:eq(0) > DIV.app-wrapper:eq(0) > DIV.app-content:eq(0) > DIV:nth-of-type(1) > SECTION.banner_part:eq(0)",
        "prehidingSelector": "#root > DIV:nth-of-type(1) > DIV:nth-of-type(1) > DIV:nth-of-type(2) > DIV:nth-of-type(1) > SECTION:nth-of-type(1)"
      }
    }
  ],
  "xdm:id": "AT:eyJhY3Rpdml0eUlkIjoiMzg0NDU5IiwiZXhwZXJpZW5jZUlkIjoiMSJ9",
  "xdm:scope": "home",
  "xdm:scopeDetails": {
    "xdm:activity": {
      "xdm:id": "384459",
      "repo:etag": "8"
    },
    "xdm:experience": {
      "xdm:id": "ExperienceB"
    },
    "xdm:strategies": [
      {
        "xdm:step": "targeting",
        "xdm:algorithmID": "randomuniform",
        "xdm:trafficType": "noncontextual"
      }
    ]
  }
}
```

```json
{
  "xdm:items": [
    {
      "xdm:id": "xcore:personalized-offer:f67bab756ed6ee4",
      "repo:etag": "5",
      "xdm:score": 83,
      "xdm:propositionsTotal": {
        "xdm:value": 948
      }
    },
    {
      "xdm:id": "xcore:personalized-offer:e91ee850a0bb7d9",
      "repo:etag": "3",
      "xdm:score": 12,
      "xdm:propositionsTotal": {
        "xdm:value": 221
      }
    }
  ],
  "xdm:id": "3cc33a7e-13ca-4b19-b25d-c816eff9a70a",
  "xdm:scope": "home-page-banner",
  "xdm:scopeDetails": {
    "xdm:id": "home-page-banner",
    "xdm:placement": {
      "xdm:id": "xcore:offer-placement:c652463157c2aa1",
      "repo:etag": "4",
      "xdm:name": "Home Page Banner"
    },
    "xdm:activity": {
      "xdm:id": "xcore:offer-activity:ebc48132c26ccfc",
      "repo:etag": "8",
      "xdm:name": "Spring 21 Campaign Web"
    },
    "xdm:strategies": [
      {
        "xdm:step": "eligibility",
        "xdm:strategyID": "xcore:eligibility-rule:e5244c22eff29e8",
        "xdm:algorithmID": "pql-rule",
        "xdm:trafficType": "contextual"
      },
      {
        "xdm:step": "ranking",
        "xdm:strategyID": "ranking-strategy:7251468357c2236",
        "xdm:algorithmID": "auto-optimize",
        "xdm:trafficType": "noncontextual"
      }
    ]
  }
}
```


# Proposition Interaction Details Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [xdm:decisionEventDetails](#xdmdecisioneventdetails) | Decision Event Details | Optional | Proposition Interaction Details (this schema) |
| [xdm:decisionEventID](#xdmdecisioneventid) | `string` | Optional | Proposition Interaction Details (this schema) |
| [xdm:decisionScope](#xdmdecisionscope) | `string` | Optional | Proposition Interaction Details (this schema) |
| [xdm:decisionScopeDetails](#xdmdecisionscopedetails) | Decision Scope Details | Optional | Proposition Interaction Details (this schema) |
| [xdm:id](#xdmid) | `string` | Optional | Proposition Interaction Details (this schema) |
| [xdm:items](#xdmitems) | Decision Option Details | Optional | Proposition Interaction Details (this schema) |
| [xdm:scope](#xdmscope) | `string` | Optional | Proposition Interaction Details (this schema) |
| [xdm:scopeDetails](#xdmscopedetails) | Decision Scope Details | Optional | Proposition Interaction Details (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## xdm:decisionEventDetails
### Decision Event Details (deprecated)

A snapshot of properties from the decision event when it occured. (deprecated)

`xdm:decisionEventDetails`
* is optional
* type: Decision Event Details
* defined in this schema

### xdm:decisionEventDetails Type


* [Decision Event Details](decisionevent-details.schema.md) – `https://ns.adobe.com/experience/decisioning/decisionevent-details`





## xdm:decisionEventID
### Decision Event Identifier (deprecated)

The unique identifier of the decision event that proposed the 'items' (options). For a given decision request and profile identity the output of the decision is a unique event. If a decision is requested again for the same profile and the output are the same options, it is still considered a different proposition with a unique event ID. Multiple propositions can be associated with the same decision event. See https://ns.adobe.com/experience/decisioning/proposition. (deprecated)

`xdm:decisionEventID`
* is optional
* type: `string`
* defined in this schema

### xdm:decisionEventID Type


`string`






## xdm:decisionScope
### Decision Event Scope (deprecated)

The scope that is associated with the decision. This is the name of the scope that was in the request when the decision was made. See https://ns.adobe.com/experience/decisioning/scope-details.(deprecated)

`xdm:decisionScope`
* is optional
* type: `string`
* defined in this schema

### xdm:decisionScope Type


`string`






## xdm:decisionScopeDetails
### Decision Event Scope Details (deprecated)

A snapshot of properties from the decision scope. This is the state of the scope entity that was used in the decision requst. (deprecated)

`xdm:decisionScopeDetails`
* is optional
* type: Decision Scope Details
* defined in this schema

### xdm:decisionScopeDetails Type


* [Decision Scope Details](scope-details.schema.md) – `https://ns.adobe.com/experience/decisioning/scope-details`





## xdm:id
### Decision Proposition Identifier

The unique identifier of the proposition that originally contained the decision options that are being acted upon (see the corresponding 'items' field in this object). When this identifier is present, direct attribution is given to a unique proposition. If the identifier is missing, the action for the items could not be assiciated with a unique proposition.

`xdm:id`
* is optional
* type: `string`
* defined in this schema

### xdm:id Type


`string`






## xdm:items
### Selected Options

One or more of the previously proposed options that this experience event is related to. Those items were returned as output of the decision for a requested scope and are now part of an interaction. For instance, if the decision returned five proposed videos to watch and the user selected two in a "Save For Later" interaction, then this experience event could record the user's reaction with an event type "custom.savedToWatchLater" and list the two selected videos in the 'items' array.

`xdm:items`
* is optional
* type: Decision Option Details

* defined in this schema

### xdm:items Type


Array type: Decision Option Details

All items must be of the type:
* [Decision Option Details](option-detail.schema.md) – `https://ns.adobe.com/experience/decisioning/option-detail`


  
An item from the proposition's options. See 'selections' of the 'Decision Proposition Detail' mix-in.







## xdm:scope
### Decision Scope

The scope that is associated with the decision. This is the name of the scope that was in the request when the decision was made.

`xdm:scope`
* is optional
* type: `string`
* defined in this schema

### xdm:scope Type


`string`






## xdm:scopeDetails
### Decision Scope Snapshot

A snapshot of properties from the decision scope. This is the state of the scope entity that was used in the decision requst.

`xdm:scopeDetails`
* is optional
* type: Decision Scope Details
* defined in this schema

### xdm:scopeDetails Type


* [Decision Scope Details](scope-details.schema.md) – `https://ns.adobe.com/experience/decisioning/scope-details`




