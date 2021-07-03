# Event / Campaigns management / view

http://campaign-app-react.herokuapp.com/

* Shows categories of events in terms of there occurancce
#### Upcoming Campaigns
#### Live Campaigns
#### Past Campaigns

#### Change Campaign info:
* user can change date of event, and even will move to new suitable cateroy/tab

### Tech Stack
#### React 
*Functional componetns
#### Redux 
* State management / maintains the list of events and handle date cange events currently
#### Typescript
#### React Context API
* every data row is wrapped in context provider that gives the information of complete row in component subtree

#### emotion and Styles components
### Modules
#### model
* contains types that are reusable across whole app

#### store
* has `Redux` store and provider subscription API
* provides API for data change function
* scalable to add more actions 

#### components
* Contains reusable components across application

I have done Application architecture and development considering scalability ,modularity and readability.
Feel free to add comment for improvements.


#### TODO:
* Unit test for Date change behaviour (on the way)
* localization by adding one more language
* usage of theming and theme toggle