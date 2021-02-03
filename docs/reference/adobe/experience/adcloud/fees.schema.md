
# Advertising Fee Details Schema

```
https://ns.adobe.com/experience/adcloud/fees
```

Adobe Advertising Cloud Fee Details.

| [Abstract](../../../../abstract.md) | [Extensible](../../../../extensions.md) | [Status](../../../../status.md) | [Identifiable](../../../../id.md) | [Custom Properties](../../../../extensions.md) | [Additional Properties](../../../../extensions.md) | Defined In |
|-------------------------------------|-----------------------------------------|---------------------------------|-----------------------------------|------------------------------------------------|----------------------------------------------------|------------|
| Can be instantiated | Yes | Stable | No | Forbidden | Permitted | [adobe/experience/adcloud/fees.schema.json](adobe/experience/adcloud/fees.schema.json) |

## Advertising Fee Details Example
```json
{
  "xdm:DSPMediaFee": 23,
  "xdm:DSPDataFees": 55,
  "xdm:DSPOtherFees": 2212313,
  "xdm:accountMediaFee": 555,
  "xdm:accountDataFees": 35353,
  "xdm:accountOtherFees": 257600311580,
  "xdm:advertiserMediaFee": 301404063528,
  "xdm:advertiserDataFees": 147741280,
  "xdm:advertiserOtherFees": 257600311580,
  "xdm:billableMediaNetSpend": 232434,
  "xdm:totalMediaNetSpend": 344,
  "xdm:billableDataNetSpend": 6676767,
  "xdm:billableOtherNetSpend": 34545,
  "xdm:totalBillableNetSpend": 998,
  "xdm:totalNonBillableNetSpend": 777,
  "xdm:totalNetSpend": 5656875433
}
```

# Advertising Fee Details Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [xdm:DSPDataFees](#xdmdspdatafees) | `number` | Optional | Advertising Fee Details (this schema) |
| [xdm:DSPMediaFees](#xdmdspmediafees) | `number` | Optional | Advertising Fee Details (this schema) |
| [xdm:DSPOtherFees](#xdmdspotherfees) | `number` | Optional | Advertising Fee Details (this schema) |
| [xdm:accountDataFees](#xdmaccountdatafees) | `number` | Optional | Advertising Fee Details (this schema) |
| [xdm:accountMediaFees](#xdmaccountmediafees) | `number` | Optional | Advertising Fee Details (this schema) |
| [xdm:accountOtherFees](#xdmaccountotherfees) | `number` | Optional | Advertising Fee Details (this schema) |
| [xdm:advertiserDataFees](#xdmadvertiserdatafees) | `number` | Optional | Advertising Fee Details (this schema) |
| [xdm:advertiserMediaFees](#xdmadvertisermediafees) | `number` | Optional | Advertising Fee Details (this schema) |
| [xdm:advertiserOtherFees](#xdmadvertiserotherfees) | `number` | Optional | Advertising Fee Details (this schema) |
| [xdm:billableDataNetSpend](#xdmbillabledatanetspend) | `number` | Optional | Advertising Fee Details (this schema) |
| [xdm:billableMediaNetSpend](#xdmbillablemedianetspend) | `number` | Optional | Advertising Fee Details (this schema) |
| [xdm:billableOtherNetSpend](#xdmbillableothernetspend) | `number` | Optional | Advertising Fee Details (this schema) |
| [xdm:totalBillableNetSpend](#xdmtotalbillablenetspend) | `number` | Optional | Advertising Fee Details (this schema) |
| [xdm:totalMediaNetSpend](#xdmtotalmedianetspend) | `number` | Optional | Advertising Fee Details (this schema) |
| [xdm:totalNetSpend](#xdmtotalnetspend) | `number` | Optional | Advertising Fee Details (this schema) |
| [xdm:totalNonBillableNetSpend](#xdmtotalnonbillablenetspend) | `number` | Optional | Advertising Fee Details (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## xdm:DSPDataFees
### DSP Data Fees

Data fees billable by DSP.

`xdm:DSPDataFees`
* is optional
* type: `number`
* defined in this schema

### xdm:DSPDataFees Type


`number`






## xdm:DSPMediaFees
### DSP Media Fees

Media fees billable by DSP.

`xdm:DSPMediaFees`
* is optional
* type: `number`
* defined in this schema

### xdm:DSPMediaFees Type


`number`






## xdm:DSPOtherFees
### DSP Other Fees

Other fees billable by DSP.

`xdm:DSPOtherFees`
* is optional
* type: `number`
* defined in this schema

### xdm:DSPOtherFees Type


`number`






## xdm:accountDataFees
### Account Data Fees

Data fees for the account but not billable by DSP.

`xdm:accountDataFees`
* is optional
* type: `number`
* defined in this schema

### xdm:accountDataFees Type


`number`






## xdm:accountMediaFees
### Account Media Fees

Media fees for the account but not billable by DSP.

`xdm:accountMediaFees`
* is optional
* type: `number`
* defined in this schema

### xdm:accountMediaFees Type


`number`






## xdm:accountOtherFees
### Account Other Fees

Other fees for the account but not billable by DSP.

`xdm:accountOtherFees`
* is optional
* type: `number`
* defined in this schema

### xdm:accountOtherFees Type


`number`






## xdm:advertiserDataFees
### Advertiser Data Fees

Other advertiser fees charged to the advertiser from the account.

`xdm:advertiserDataFees`
* is optional
* type: `number`
* defined in this schema

### xdm:advertiserDataFees Type


`number`






## xdm:advertiserMediaFees
### Advertiser Media Fees

Media advertiser fees charged to the advertiser from the account.

`xdm:advertiserMediaFees`
* is optional
* type: `number`
* defined in this schema

### xdm:advertiserMediaFees Type


`number`






## xdm:advertiserOtherFees
### Advertiser Other Fees

Other advertiser fees charged to the advertiser from the account.

`xdm:advertiserOtherFees`
* is optional
* type: `number`
* defined in this schema

### xdm:advertiserOtherFees Type


`number`






## xdm:billableDataNetSpend
### Billable Data Net Spend

The billable net spend for data advertising.

`xdm:billableDataNetSpend`
* is optional
* type: `number`
* defined in this schema

### xdm:billableDataNetSpend Type


`number`






## xdm:billableMediaNetSpend
### Billable Media Net Spend

The billable net spend for media advertising.

`xdm:billableMediaNetSpend`
* is optional
* type: `number`
* defined in this schema

### xdm:billableMediaNetSpend Type


`number`






## xdm:billableOtherNetSpend
### Billable Other Net Spend

The billable net spend for other types of advertising.

`xdm:billableOtherNetSpend`
* is optional
* type: `number`
* defined in this schema

### xdm:billableOtherNetSpend Type


`number`






## xdm:totalBillableNetSpend
### Total Billable Net Spend

The total billable net spend.

`xdm:totalBillableNetSpend`
* is optional
* type: `number`
* defined in this schema

### xdm:totalBillableNetSpend Type


`number`






## xdm:totalMediaNetSpend
### Total Media Net Spend

The total net spend for media advertising.

`xdm:totalMediaNetSpend`
* is optional
* type: `number`
* defined in this schema

### xdm:totalMediaNetSpend Type


`number`






## xdm:totalNetSpend
### Total Net Spend

The total net spend.

`xdm:totalNetSpend`
* is optional
* type: `number`
* defined in this schema

### xdm:totalNetSpend Type


`number`






## xdm:totalNonBillableNetSpend
### Total Non-Billable Net Spend

The total non-billable net spend

`xdm:totalNonBillableNetSpend`
* is optional
* type: `number`
* defined in this schema

### xdm:totalNonBillableNetSpend Type


`number`





