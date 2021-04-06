
# ECOMMERCE MANAGER

![ecom_design (2)](https://user-images.githubusercontent.com/36516273/113732665-ad143700-96f1-11eb-8208-46c4b1956684.png)

Ecommerce management system build with the help of the [Stripe api](https://stripe.com/docs/api), lets users manage their ecommerce store, by managing products, categorising products, viewing sales in real time and viewing their transactions. 


## Backend

The backend api is build using [Django](https://www.djangoproject.com/) which is linked to the stripe api and is used to handle requests for users.

User Authentication is handled using tokens with the help of [Django Rest Knox](http://james1345.github.io/django-rest-knox/). Once the user is logged in a token is sent to the frontend, when a user log's out the token is destroyed.

## Frontend

 The frontend is build using [React](https://reactjs.org/) with the help of [Redux](https://redux.js.org/) as a state controller. 

 The frontend is compiled using [Babel](https://babeljs.io/).

 Pages are rendered using [Webpack](https://webpack.js.org/) as a bundler.

## Link to Demo
### [Demo](http://ec2-3-83-143-22.compute-1.amazonaws.com/login/)
