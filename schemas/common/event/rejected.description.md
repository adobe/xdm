A `rejected event` follows semantics that are exactly equivalent to the semantics described by the [`reject activity`](https://www.w3.org/TR/activitystreams-vocabulary/#dfn-reject), except for one difference. The `reject activity` can be used in both passive and imperative contexts, however, the `rejected event` can only be used in passive contexts.

The semantics as defined by the `reject activity` are, that the `actor` is rejecting the `object`. And that the `target` and `origin` typically have no defined meaning.

Some examples of the `rejected event` -
1. Changes to an asset were rejected by the editor/approver.
2. A batch processing job was rejected by a service on account of runtime errors that occurred during processing.
3. A loan application was rejected by a financial institution.
4. A purchase order was rejected by a firm owing to non payment of previous dues.