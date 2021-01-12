# Convo-To-Go-App 
This application helps users to prepare and initiate conversations in a wide variety of settings. It provides the user with a set list of events or environments, and based on their input, they will receive a number of relevant questions and conversation starters. New users or visitors will have the ability to access the pre-existing conversation starters. Upon log in, users can input suggestions for new questions and events.

## 1. Working Prototype 
You can access a working prototype of the React app here: https://convo-to-go-client.vercel.app/ and Node app here: https://convo-to-go-server.herokuapp.com/


## 2. User Stories
This app is for two types of users: a visitor and a logged-in user



#### Landing Page
* As a visitor
* I want to understand what I can do with this app (read about, sign up, or log in),
* so I can decide if I want to use it.

#### Login Page
* As a returning register user
* I want to enter my password and username to use this app,
* so I can have access to my account.

#### Sign Up
* As a visitor 
* I want to register to use this app
* so I can create my own conversation starters.

#### Home Page 
* As a logged-in user,
* I want to be able to preview the content of the app,
* so I can start looking for conversation starters.

#### Question Category Page
* As a logged-in user,
* I want to be able to select a category,
* so I can view the corresponding conversation starters.

#### Suggestion Page
* As a logged-in user,
* I want to suggest new events and/or initiaters,
* so that I can access those suggestions.


## 3. Functionality 
The app's functionality includes:
* Every User has the ability to create an account
* Every User has the ability to create a convo 



## 4. Technology 
* Front-End: HTML5, CSS3, JavaScript ES6, React
* Back-End: Node.js, Express.js, Mocha, Chai, RESTful API Endpoints, Postgres
* Development Environment: Heroku, DBeaver

### 5. Wireframes 
(Example) Landing Page
:-------------------------:
![Landing Page](/screenshots/landing-page.png)
Register Page
![Register Page](/screenshots/sign-up.png)
Login Page
![Log In Page](/screenshots/log-in.png)

## 6. Front-end Structure - React Components Map 
* (Example) __Index.js__ (stateless)
    * __App.js__ (stateless) - contains router
        * __LandingPage.js__ (stateful)
            * __Login.js__ (stateful) -
            * __Register.js__ (stateful) -
        * __Navbar.js__ (stateless) -
        * __Homepage.js__ (stateful) -
            * __CreateConvo.js__ (stateful) -
            * __ListOfConvoEvents.js__ (stateful) -
            * __FavoritedEvents.js__ (stateful) -
            * __FavoritedConvos.js__ (stateful) -
        * __SpecificEventConvoList.js__ (stateful) -

## 7. Back-end Structure - Business Objects 
* Users (database table)
    * id (auto-generated)
    * username (email validation)
    * password (at least 8 chars, at least one alpha and a special character validation)
* Questions (database table)
    * id (auto-generated)
    * user_id (from users table)
    * question (text)
    * is_favorited (boolean default false)
    * is_public (boolean default true)
    * min_number_of_people (integer default = 1)
    * ok_for_entertainment (boolean default true)
    * ok_for_exercise (boolean default true)
    * ok_for_travel (boolean default true)
    * ok_for_technology (boolean default true)
    * ok_for_fashion (boolean default true)
    * ok_for_holidays (boolean default true)
    * ok_for_education (boolean default true)
    * ok_for_work (boolean default true)
    * ok_for_food (boolean default true)
    * ok_for_leisure (boolean default true)
    

## 8. API Documentation 
API Documentation details:
* ## 8. API Documentation 
/api
├── /auth    
│   └── POST
│       ├── /login
├── /users
│   └── GET /
│   └── GET /:id
├── /convos
│   └── GET
│       ├── /
│       ├── /:convo_id
│   └── POST
│       ├── /:convo_id
├── /convosbyuserid
│   └── GET
│       ├── /convo/:user_id





## Development Roadmap 
This is v1.0 of the app, but future enhancements are expected to include:
*add more functionality

## How to run it 
Use command line to navigate into the project folder and run the following in terminal

### Local React scripts
* To install the react project ===> npm install
* To run react (on port 3000) ===> npm start
* To run tests ===> npm run test

### Local Node scripts
* To install the node project ===> npm install
* To migrate the database ===> npm run migrate -- 1
* To run Node server (on port 8000) ===> npm run dev
* To run tests ===> npm run test