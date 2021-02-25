# ECOMMERCE MANAGER
Ecommerce management system build with the help of the stripe api, lets users manage their ecommerce store, by managing products, categorising products, viewing sales in real time and viewing their transactions. 


## Backend

The backend api is build using Django which is linked to the stripe api and is used to handle requests for users.

User Authentication is handled using tokens with the help of Django Rest Knox. Once the user is logged in a token is sent to the frontend, when a user log's out the token is destroyed.

## Frontend

 The frontend is build using React with the help of Redux as a state controller. 

 The frontend is compiled using Babel.

 Pages are rendered using webpack as a bundler.