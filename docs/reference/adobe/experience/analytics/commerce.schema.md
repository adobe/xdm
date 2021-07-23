
# Adobe Analytics ExperienceEvent Commerce Mixin Schema

```
https://ns.adobe.com/experience/analytics/commerce
```

Adobe Analytics ExperienceEvent Commerce Mixin.

| [Abstract](../../../../abstract.md) | [Extensible](../../../../extensions.md) | [Status](../../../../status.md) | [Identifiable](../../../../id.md) | [Custom Properties](../../../../extensions.md) | [Additional Properties](../../../../extensions.md) | Defined In |
|-------------------------------------|-----------------------------------------|---------------------------------|-----------------------------------|------------------------------------------------|----------------------------------------------------|------------|
| Can be instantiated | Yes | Stable | No | Forbidden | Permitted | [adobe/experience/analytics/commerce.schema.json](adobe/experience/analytics/commerce.schema.json) |
## Schema Hierarchy

* Adobe Analytics ExperienceEvent Commerce Mixin `https://ns.adobe.com/experience/analytics/commerce`
  * [Extensibility base schema](../../../datatypes/extensible.schema.md) `https://ns.adobe.com/xdm/common/extensible`
  * [Commerce](../../../datatypes/marketing/commerce.schema.md) `https://ns.adobe.com/xdm/context/commerce`


# Adobe Analytics ExperienceEvent Commerce Mixin Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [xdm:commerce](#xdmcommerce) | Commerce | Optional | Adobe Analytics ExperienceEvent Commerce Mixin (this schema) |
| [xdm:productListItems](#xdmproductlistitems) | Adobe Analytics extension to XDM Product List Item | Optional | Adobe Analytics ExperienceEvent Commerce Mixin (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## xdm:commerce
### Commerce

Product returns, warranty registration, and shopping cart/order process.

`xdm:commerce`
* is optional
* type: Commerce
* defined in this schema

### xdm:commerce Type


* [Commerce](../../../datatypes/marketing/commerce.schema.md) – `https://ns.adobe.com/xdm/context/commerce`





## xdm:productListItems
### Product List Items

A list of items representing a product selected by a customer with specific options and pricing that are for that usage context at a specific point of time and may differ from the product record.

`xdm:productListItems`
* is optional
* type: Adobe Analytics extension to XDM Product List Item

* defined in this schema

### xdm:productListItems Type


Array type: Adobe Analytics extension to XDM Product List Item

All items must be of the type:
* [Adobe Analytics extension to XDM Product List Item](productlistitem.schema.md) – `https://ns.adobe.com/experience/analytics/productlistitem`







