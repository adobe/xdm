# Offer Item Schema Changes

## Summary of Changes

This document outlines the changes made to implement versioning and lifecycle status updates for Offer Items in the XDM schema.

## Changes Made

### Offer Item Schema (`extensions/adobe/experience/decisioning/offerItem.schema.json`)

**Added ETag Field:**
- Added `https://ns.adobe.com/experience/decisioning/offeritem/etag` field
- Type: `string`
- Description: "Entity tag for versioning of the offer item. Used for optimistic concurrency control."
- Purpose: Enables versioning and optimistic concurrency control for offer items

**Updated Lifecycle Status:**
- Added `"deleted": "Deleted"` to the lifecycle status enum
- Updated enum values: `["draft", "approved", "archived", "deleted"]`
- Purpose: Allows proper lifecycle management including deletion status

## Technical Details

### ETag Implementation
- ETags are strings that represent the version/state of an entity
- Used for optimistic concurrency control in distributed systems
- Format: Quoted string (e.g., `"abc123def456"`)
- Enables clients to detect conflicts when multiple updates occur simultaneously

### Lifecycle Status Values
- `draft`: Initial state, not yet approved
- `approved`: Reviewed and approved for use
- `archived`: No longer active but preserved
- `deleted`: Marked for deletion (new status)

### Schema Compliance
- All changes follow XDM schema conventions
- Maintains backward compatibility (additive changes only)
- Includes proper metadata (titleId, descriptionId)
- Follows JSON Schema Draft-06 specification

## Usage Examples

### Offer Item with ETag and Draft Status
```json
{
  "https://ns.adobe.com/experience/decisioning/offeritem/etag": "\"abc123def456\"",
  "https://ns.adobe.com/experience/decisioning/offeritem/lifecycleStatus": "draft"
}
```

### Offer Item with Deleted Status
```json
{
  "https://ns.adobe.com/experience/decisioning/offeritem/etag": "\"xyz789uvw012\"",
  "https://ns.adobe.com/experience/decisioning/offeritem/lifecycleStatus": "deleted"
}
```

## Impact

### Positive Impacts
1. **Versioning Support**: ETags enable proper version control and conflict detection
2. **Lifecycle Management**: DELETED status provides complete lifecycle coverage
3. **Backward Compatibility**: All changes are additive and don't break existing implementations

### Considerations
1. **Implementation**: Clients need to handle ETag-based concurrency control
2. **Deletion Strategy**: DELETED status allows for soft deletion vs. hard deletion
3. **Migration**: Existing offer items without ETags will need migration strategy
4. **Validation**: Systems should validate ETag format and lifecycle status values

## Next Steps

1. **Testing**: Validate schema changes with existing test suites
2. **Documentation**: Update API documentation to reflect new fields
3. **Implementation**: Update client libraries to handle ETags and new status
4. **Migration**: Plan migration strategy for existing offer items
5. **Monitoring**: Monitor usage of new fields and status values 