A marketer intends to track user's interaction with their business and orient their business based on these interactions. For example, if a user visits the bar of the hotel business, it may trigger a beacon event which would then automatically send an immediate offer for the purchase of bar items.
To accomplish this, marketer designs journey and journey versions for its end users.

A journey encapsulates the marketer's intent to engage with the end users.
A journey consists of one or more journey versions where each journey version represents a workflow for the users.
A new user would always enter the latest version of the journey, while old users continue the version on which they currently reside. A user is active on only one of the journey version for the journey.

Each journey version is implemented as a state machine which can contain an entry and an exit step. 
A step is a state in the workflow, where each step has a definition of the actions to be executed when entering the step. 
An action can be an email, SMS, push notifications, etc.

An Event is a trigger coming from a source over HTTP protocol. 
For example, a user entering a hotel lobby can be marked as an Event.

Event rules define when we can move to the next step in this journey version.
The event rules compose flow controls of a journey version.
A step transition can occur by one or more events.
During the processing, we may also need data from external systems, Data entities and Data provider are used to fetch and store data in the journey at runtime. 
This schema (`reportingevent`) represents a data model for capturing events, actions and transitions happening in a journey version.
