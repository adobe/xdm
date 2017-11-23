Storage Quota is used to manage and monitor storage space consumption at various directories throughout the content repository.
Storage Quota uses two values, *Storage Limit* (`limit`) and *Storage Used* (`usage`). The former represents a limit of storage space allocated in the directory and its descendants. The latter represents the storage space that has been allocated at the current time.
Furthermore, *Storage Quota* can be either *hard* or *soft* via the 'enforcement' property. If a *hard* *Storage Quota* is set, the repository implementation will not allow clients to allocate storage beyond the quota value.
Repository implementations will generate a notification when the allocated space in a part of the repository for which a (hard or soft) enforcement has been defined exceeds a given percentage (e.g. 80%) of the *Storage Quota* value.

The property names (`limit`, `usage`, `enforcement`) where chosen to allow for building out a more generic model that re-uses these property names without having to change `storage_quota` representation later.
