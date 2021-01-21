
# Adobe Experience Platform Implementation Details Schema

```
https://ns.adobe.com/experience/implementations
```

Details the type and version of client implementations for data collection interacting with Adobe Experience Cloud services. Used for debugging and usage analysis.

| [Abstract](../../../abstract.md) | [Extensible](../../../extensions.md) | [Status](../../../status.md) | [Identifiable](../../../id.md) | [Custom Properties](../../../extensions.md) | [Additional Properties](../../../extensions.md) | Defined In |
|----------------------------------|--------------------------------------|------------------------------|--------------------------------|---------------------------------------------|-------------------------------------------------|------------|
| Can be instantiated | Yes | Stable | No | Forbidden | Permitted | [adobe/experience/implementations.schema.json](adobe/experience/implementations.schema.json) |
## Schema Hierarchy

* Adobe Experience Platform Implementation Details `https://ns.adobe.com/experience/implementations`
  * [Extensibility base schema](../../datatypes/extensible.schema.md) `https://ns.adobe.com/xdm/common/extensible`
  * [Implementation details](../../datatypes/industry-verticals/implementationdetails.schema.md) `https://ns.adobe.com/xdm/context/implementationdetails`


# Adobe Experience Platform Implementation Details Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [https://ns.adobe.com/experience/adcloud/implementation](#httpsnsadobecomexperienceadcloudimplementation) | Implementation details | Optional | Adobe Experience Platform Implementation Details (this schema) |
| [https://ns.adobe.com/experience/analytics/implementation](#httpsnsadobecomexperienceanalyticsimplementation) | Implementation details | Optional | Adobe Experience Platform Implementation Details (this schema) |
| [https://ns.adobe.com/experience/idservice/implementation](#httpsnsadobecomexperienceidserviceimplementation) | Implementation details | Optional | Adobe Experience Platform Implementation Details (this schema) |
| [https://ns.adobe.com/xdm/experience/target/implementation](#httpsnsadobecomxdmexperiencetargetimplementation) | Implementation details | Optional | Adobe Experience Platform Implementation Details (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## https://ns.adobe.com/experience/adcloud/implementation
### Client Implementation for Adobe Advertising Cloud

Client details interacting with Adobe Advertising Cloud.

`https://ns.adobe.com/experience/adcloud/implementation`
* is optional
* type: Implementation details
* defined in this schema

### https://ns.adobe.com/experience/adcloud/implementation Type


* [Implementation details](../../datatypes/industry-verticals/implementationdetails.schema.md) – `https://ns.adobe.com/xdm/context/implementationdetails`





## https://ns.adobe.com/experience/analytics/implementation
### Client Implementation for Adobe Analytics

Client details interacting with Adobe Analytics.

`https://ns.adobe.com/experience/analytics/implementation`
* is optional
* type: Implementation details
* defined in this schema

### https://ns.adobe.com/experience/analytics/implementation Type


* [Implementation details](../../datatypes/industry-verticals/implementationdetails.schema.md) – `https://ns.adobe.com/xdm/context/implementationdetails`





## https://ns.adobe.com/experience/idservice/implementation
### Client Implementation for Adobe Visitor Service

Client details interacting with Adobe Experience Cloud ID Service.

`https://ns.adobe.com/experience/idservice/implementation`
* is optional
* type: Implementation details
* defined in this schema

### https://ns.adobe.com/experience/idservice/implementation Type


* [Implementation details](../../datatypes/industry-verticals/implementationdetails.schema.md) – `https://ns.adobe.com/xdm/context/implementationdetails`





## https://ns.adobe.com/xdm/experience/target/implementation
### Client Implementation for Adobe Target

Client details interacting with Adobe Target.

`https://ns.adobe.com/xdm/experience/target/implementation`
* is optional
* type: Implementation details
* defined in this schema

### https://ns.adobe.com/xdm/experience/target/implementation Type


* [Implementation details](../../datatypes/industry-verticals/implementationdetails.schema.md) – `https://ns.adobe.com/xdm/context/implementationdetails`




