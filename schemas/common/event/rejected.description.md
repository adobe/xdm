A `rejected event` follows the semantics of the [reject activity in W3C activity streams](https://www.w3.org/TR/activitystreams-vocabulary/#dfn-reject), with one notable difference.
The W3C `reject activity` can be used to express two things:

1.  either an order to reject something
2.  or the observation of a rejection

The XDM `rejected event` is only valid in the latter case, i.e. to express that something (the `object`) has been rejected by someone (the `actor`).
`target` and `origin` have no specific meaning for rejections.

Some examples of the `rejected event` include:

1.  Changes to an asset were rejected by the editor/approver.
2.  A batch processing job was rejected by a service on account of runtime errors that occurred during processing.
3.  A loan application was rejected by a financial institution.
4.  A purchase order was rejected by a firm owing to non payment of previous dues.
