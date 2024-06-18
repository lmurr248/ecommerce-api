# E-Commerce API

## _Express, Node, Postgres e-commerce store API_

This app is an e-commerce API where you can:

- Register & login
- View products and add products to the cart
- Submit orders

## Testing the app

- To test the app, download the repository
- Run `npm i` to install dependencies.
- The app uses PostgreSQL. You will need a local database set up and running.
- Create a .env file in the root and connect your database.

#### Example .env:

```sh
DB_DATABASE=e_commerce_store
DB_USER=postgres
DB_PASSWORD=myP@ssword
DB_HOST=localhost
DB_PORT=5432
#SERVER CONFIG
PORT=8000
SESSION_SECRET='your secret'
```

- Once connected, run the SQL in the dbSetup.js file to populate the database tables with sample data.
- To start the app run `npm run start` in the terminal.
- To log in as a demo user, send a POST request to `http://localhost:<PORT>` replacing PORT with the port number specified in your .env file with the request body:
  `{
  "email": "demo@user.com",
  "password": "demo"
}`
- Once logged in you can interact with the api. Use the API documentation to interact with the app.

## Tech

This api was built using:

- Express JS
- Node JS
- Passport JS
