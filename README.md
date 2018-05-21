# Assignment 1 - ReactJS app.

Name: David Lanigan

## Overview.
The App is a mock up of a library book system. It is basically a database of books where users can view books, add new books, delete books and modify existing books. Functionality to borrow and return books was started but not completed.

For the initial part of this assignment, there is no back end and the data is held in a JSON file locally. The Add/Delete/Edit functionality works by making REST calls to the JSON file instead of a database.

The reason for the View screen and the Add/Edit screen looking differently is because I wanted to showcase two different ways of displaying the same information. The view component is done using the standard react syntax with HTML and the Add/Edit components are done using a custom grid component. The view individual book component is just there to demonstrate parameterised routing. Note that the Add and Edit components are separate due to a limitation with the control. It doesn't seem to like editing and row selection in the same grid so I just made two.

For the second part of the assignment, I created a server application that hooks the front end with a MongoDB back end via RESTful APIs. The APIs were defined using SWAGGER AND EXPRESS and they talk to a MONGO database via MONGOOSE. I also implemented API unit tests using MOCHA.

The app is also hosted on HEROKU.

## API calls.
  + GET /titles - gets all book titles
  + GET /books - gets all books
  + POST /books - creates a book
  + GET /books/{id} - gets an book by id
  + PUT /books/{id} - modifies a book by id
  + DELETE /books/{id} - deleted a book by id
  + GET /genretypes - gets all genretypes
  + GET /statustypes - gets all statustypes

## User Features.

 + View all Books
 + View an individual Book
 + Add Book
 + Delete Book
 + Modify Book
 + Borrow/Return book is not available. I had started to build the infrastructure around this functionality such as the API for getting book titles and an actual borrow books table, but I never completed it;

## Installation requirements.

+ ReactJS v15.3.0
+ Bootstrap 3
+ create-react-app tool
+ react-bootstrap-table
+ lodash 4.7.15
+ react-dom
+ react-router-dom
+ babel-cli 6.26.0
+ babel-eslint 8.2.3
+ babel-preset-env 1.6.1
+ bluebird 3.5.1
+ body-parser 1.18.2
+ chai 4.1.2
+ chai-as-promised 7.1.1
+ connect 3.2.0
+ cross-env 5.1.5
+ dotenv 5.0.1
+ express 4.16.3
+ express-async-handler 1.1.3
+ js-yaml 3.3.0
+ lodash 4.17.10
+ mocha 5.1.1
+ mongoose 5.0.16
+ nodemon 1.17.3
+ save-dev 2.0.0
+ swagger-tools 0.10.1
+ concurrently 3.5.1

The repo can be cloned from https://github.com/dlanigan1/enterprise-web-assignment
After cloning the repo, You have to do the following to run the app:

1) npm install

2) cd client

3) npm install

4) cd ..

5) npm run start

Th app also lives on heroku at : https://dashboard.heroku.com/apps/secret-river-63213

## Data Model Design.

There are 4 tables in the data model. They are stored in the local mongo database.
The first table is the books table. It contains the list of books. The ID is the unique identifier. This id is a mongo object id.

The statusTypes table is a lookup table of status types.
The genreTypes table is a lookup table of genre types.

The borrowedBooks table is used to determine how many of each book is available to borrow. The idea is that you can have multiple copies of each book in the books table. they will have a common title and author. So, everytime a user borrows a book, the system will increment the counter for that title in the borrowed books table and the book in the book table will be marked as unavailable. The opposite will happen on returning a book. At any time you can see how many copies of each title are available or unavailable by seeing what's in the borrowed books table.

I also add some data validation at the schema level.

### Status types
"statusTypes" : ["available","unavailable"],

### Genre types
"genreTypes" :  ["Crime","Childrens","Military History","Fiction"]

### Books
{
    "id":2,
    "title": "Stalingrad",
    "author": "Antony Beevor",
    "genre": "Military History",
    "summary": "Stalingrad is a narrative history written by Antony Beevor of the battle fought in and around the city of Stalingrad during World War II",
    "status": "available"
},

### Borrowed Books
{
    "id":5,
    "title": "Stalingrad",
    "author": "Antony Beevor",
    "Available": "3",
    "Unavailable": "2"
},

## App Component Design.

![Component design][image9]

## UI Design.

The following images show the various views throughout the system.
### Home Page
![home page][image1]
### About Page
![about page][image2]
### Add Delete Book
![add delete book][image3]
### View All Books
![view books][image4]
### View Particular Book
![view one book][image8]
### Edit Book
![edit book][image5]
### Borrow Book
![borrow book][image6]
### Return Book
![return book][image7]

## Routing.
+ /about/ - displays the about page
+ /viewbooks/ - lists all books
+ /viewbooks/:id - detail view of a particular book
+ /editbooks/ - displays a grid of books for editing
+ /borrowbook/ - redirects to a placeholder page for now. The functionality will be implemented in the next phase.
+ /returnbook/ - redirects to a placeholder page for now. The functionality will be implemented in the next phase.
+ /books/ - displays a grid of books for adding/deleting
+ / - displays the home page

## Extra features

Standard CRUD operations persisting to a MongoDB, but the API can be read and tested online on the SWAGGER website.
The app has been deployed to HEROKU.

## Independent learning.

I researched and implemented the custom data grid control for the edit and add pages along with its associated functionality.
I also had to learn how to implement and run json-server from package.json and I had to learn how to formulate the REST API calls to perform the CRUD operations for the assignment first part.

For the second part I had to research how to design and crate APIs using SWAGGER and how to implement that in my project.

I also had to learn how to host an app containing a MONGODB database on HEROKU.

[image1]: ./homepage.png
[image2]: ./about.png
[image3]: ./addDeletebook.png
[image4]: ./viewbooks.png
[image5]: ./editbook.png
[image6]: ./borrowbook.png
[image7]: ./returnbook.png
[image8]: ./viewonebook.png
[image9]: ./flow.png
