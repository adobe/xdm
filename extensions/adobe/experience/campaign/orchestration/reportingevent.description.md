A journey refers to the workflow for an end user.
A journey can have multiple versions, where an user can be on any one of the journey version.
A new user would always enter the latest version of the journey, while old users continue the version on which they currently reside.

Each journey can contain an entry and an exit step. 
A step is a state in the Journey, where each step has definition for the actions to be executed when entering the step. 
An action can be an email, SMS, push notifications, etc.

An Event is a trigger coming from a source over HTTP protocol. 
For example an user entering a hotel lobby can be marked as an Event.

Event rules define when we can move to the next step in the journey. 
A step transition can be occur by one or more events. 
During the journey processing, we may also need data from external systems, Data entities and Data provider are used to fetch and store data in the journey on runtime. 
This schema (`reportingevent`) represents a data model for capturing events, actions and transitions happening inside the user journey
