Examples for filters using placement as the constraint
===

Example 1.1
---
All offers that have at least one representation for offer placement "uri:com:example:placement-1001"

```
select o from modelInstances("https://ns.adobe.com/experience/offer-management/personalized-offer") where
  some r from o.xdm:representations where
    r.xdm:placement = "uri:com:example:placement-1001"
```

Also note that the example 1.1 could be written by using the `in` operator because the quantifier is existential quantifier (`some`).
Here, a property path is shown whose steps include an intermediate array property. It is intermediate because in the path additional properties follow. This path evaluates to a list of placement values.
For intermediate array properties, especially for paths that contain multiple array steps, the next element returned is equal to the depth-first traversal of the node tree where the nodes represent the values of the JSON object.

```
select o from modelInstances("https://ns.adobe.com/experience/offer-management/personalized-offer") where
  "uri:com:example:placement-1001" in o.xdm:representation.xdm:placement
```


Example 1.2
---
All offers that have at least one representation referencing an offer placement from one of the list: "uri:com:example:placement-1001", "uri:com:example:placement-1002"
Note that here, compared to example 1.1 the domain of the exists-quantifier (the `some` expression) is the list of literals, one of them must be in one of the referenced placements for the offer to match.

```
select o from modelInstances("https://ns.adobe.com/experience/offer-management/personalized-offer") where
  some p from ["uri:com:example:placement-1001", "uri:com:example:placement-1002"] where
    p in o.xdm:representations.xdm:placement
  )
```

Example 1.3
---
All offers that have at least one representation referencing an offer placement from one of the list: "uri:com:example:placement-1001", "uri:com:example:placement-1002" and have the status 'approved'.
Note the parenthesis to separate the predicate that belongs to the `some` expression from the second part of the predicate that applies to the `select` expression.

```
select o from modelInstances("https://ns.adobe.com/experience/offer-management/personalized-offer") where
  ( some p from ["uri:com:example:placement-1001", "uri:com:example:placement-1002"] where
    p in o.xdm:representations.xdm:placement
  )
  and o.status = "approved"
```


Examples for filters using tags as the constraint
===
Tags in offers are represented as an array of URIs. Each URI references a Tag by its `@id` property

Example 2.1
---
All offers that have at least the one tag "uri:com:example:tag-0001"
Here, the in operator is used to check the containment of a single item in a list of items (tags).

```
select o from modelInstances("https://ns.adobe.com/experience/offer-management/personalized-offer") where
  "uri:com:example:tag-1001" in o.xdm:tags
```

Example 2.2
---
All offers that have at least one of the tags ["uri:com:example:tag-1001", "uri:com:example:tag-1002"]
Conceptually, there is an iterator over the list of literals and the iteration breaks with the first element for which the predicate evaluates to `true`

```
select o from modelInstances("https://ns.adobe.com/experience/offer-management/personalized-offer") where
  some t from ["uri:com:example:tag-1001", "uri:com:example:tag-1002"] where
    t in o.xdm:tags
```

Also note that in this case, we could also evaluate the exists-quantifier by ranging over the offer's tag array and testing, one by one of those tags for containment in the list of literals provided:

```
select o from modelInstances("https://ns.adobe.com/experience/offer-management/personalized-offer") where
  some t from o.xdm:tags where
    t in ["uri:com:example:tag-1001", "uri:com:example:tag-1002"]
```

This works because the not-empty-test for an intersection of two lists commutes.

Example 2.3
---
All offers that have at least all of the tags ["uri:com:example:tag-1001", "uri:com:example:tag-1002"]. Note that offers can have additional tags not tested in this expression
Conceptually, there is an iterator over the list of literals and the iteration breaks with the first element for which the predicate evaluates to `false`, making the overall quantifier `false`. If the iterator completes with all elements evaluating the predicate to `true` then the overall quantifier evaluates to `true`

```
select o from xdm:https://ns.adobe.com/experience/offer-management/offer where
  all t from ["uri:com:example:tag-1001", "uri:com:example:tag-1002"] where
    t in o.xdm:tags
```

Also note that in this case iterating in the quantifier over all the offer's tags would not work because an offer can have additional tags that we skip in our test.
As long as it has *all* the tags we are testing for, ie the literals are a subset, the offer qualifies. The subset test of two lists does not commute.

Example 2.4
---
All offers that have at least all of the tags ["uri:com:example:tag-1001", "uri:com:example:tag-1002"] and have the status 'approved'. This is a combination of Example 2.3 with an additional condition on the offer's status property.

```
select o from modelInstances("https://ns.adobe.com/experience/offer-management/personalized-offer") where
  ( all t from ["uri:com:example:tag-1001", "uri:com:example:tag-1002"] where
    t in o.xdm:tags )
  and o.status = "approved"
```

Example 2.5
---
All offers that have all of the tags ["uri:com:example:tag-1001", "uri:com:example:tag-1002"] - they could have additional ones - and at least one representation for offer placement "uri:com:example:placement-1001" and have the status 'approved'.
This is a combination of Example 2.4 and 1.1.

```
select o from modelInstances("https://ns.adobe.com/experience/offer-management/personalized-offer") where
  ( all _ from ["uri:com:example:tag-1001", "uri:com:example:tag-1002"] where
    _ in o.xdm:tags
  )
  and ( some _ from o.xdm:representations where
    _.xdm:placement = "uri:com:example:placement-1001"
  )
  and o.status = "approved"
```

Note that the scope of the two `_` variables is limited to the predicate of the quantifier where they were declared, but the scope of the variable `o` is ranging across the two quantifiers.
To improve readability, it is encouraged to use different variable names.

Example 2.6
---
All offers from a list of directly selected offers that have at least one representation for offer placement "uri:com:example:placement-1001" and have the status 'approved'.
This is a variation of 2.5 except that the list of offers is not constraint by a list of tags and instead a list of offer `@id` values is used.

```
select o from modelInstances("https://ns.adobe.com/experience/offer-management/personalized-offer") where
  o.xdm:@id in [
    "uri:com:example:offer-10001",
    "uri:com:example:offer-10002",
    "uri:com:example:offer-10004",
    "uri:com:example:offer-10009",
    "uri:com:example:offer-10013",
    "uri:com:example:offer-10005",
    "uri:com:example:offer-10022"]
  and ( some r from o.xdm:representation where
    r.xdm:placement = "uri:com:example:placement-1001"
  )
  and o.status = "approved"
```

Examples for profile expressions
===

Example 3.1
---
All profiles who's person record has a first name 'Dennis' or has a last name 'Kehrig' or has at all experience events happening in Tokyo.
Let's see first how this can be expressed just with the select expression. Note that the `or` connector and the `all` quantifier will not allow us to simply concatenate the profile and experience events variable declarations together as in:

```
 ... p from modelInstances("https://ns.adobe.com/xdm/context/profile"),
     x from modelInstances("https://ns.adobe.com/xdm/context/experienceevent") where ...
```

Here is the correct select expression:

```
select p from modelInstances("https://ns.adobe.com/xdm/context/profile") where
   p.xdm:person.xdm:firstName = "Dennis"
 or
   p.xdm:person.xdm:lastName = "Kehrig"
 or
   (select x from modelInstances("https://ns.adobe.com/xdm/context/experienceevent") where
     (select id from x.xdm:endUserIDs where id in p.xdm:identities) and
     x.xdm:placecontext.xdm:geo.xdm:city = "Köln"
   )
   .count() =
   (select x from modelInstances("https://ns.adobe.com/xdm/context/experienceevent") where
     select id from x.xdm:endUserIDs where id in p.xdm:identities)
```

This can be expressed much more concise when using quantification instead of counting the results with and without the predicate.

```
select p from modelInstances("https://ns.adobe.com/xdm/context/profile") where
    p.xdm:person.xdm:firstName = "Dennis"
  or
    p.xdm:person.xdm:lastName = "Kehrig"
  or
    all x from modelInstances("https://ns.adobe.com/xdm/context/experienceevent") where
      (some id from x.xdm:endUserIDs where id in p.xdm:identities)
    and
      x.xdm:placecontext.xdm:geo.xdm:city = "Köln"
```