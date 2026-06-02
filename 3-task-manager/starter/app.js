//require('./db/connect'); // Importing the database connection module to establish a connection to MongoDB
const express = require('express');
const app = express();
const tasks = require('./routes/tasks');
const connectDB = require('./db/connect');
require('dotenv').config(); // Importing the dotenv package to load environment variables from a .env file into process.env. This allows us to access the connection string for MongoDB from the environment variables.
const notFound = require('./middleware/not-found'); // Importing the notFound middleware to handle 404 errors for undefined routes
const errorHandlerMiddleware = require('./middleware/error-handler'); // Importing the errorHandlerMiddleware to handle errors in the application

//middleware
app.use(express.json()); //middleware to parse JSON bodies. This allows us to access the data sent in the request body as a JavaScript object using req.body in our route handlers.
app.use(express.urlencoded({extended:true})); //middleware to parse URL-encoded bodies
app.use(express.static('./public')); //middleware to serve static files from the 'public' directory

//routes
app.use('/api/v1/tasks', tasks); //middleware to use the routes defined in the 'routes/tasks.js' file for any requests starting with '/api/v1/tasks'

app.use(notFound); //middleware to handle 404 errors for undefined routes
app.use(errorHandlerMiddleware); //middleware to handle errors in the application


const port=3000;

const start = async()=>{
    try {
        await connectDB(process.env.CONNECTION_STRING); // Establishing a connection to the MongoDB database using the connectDB function imported from the 'db/connect.js' module. This is done before starting the server to ensure that the database connection is established successfully.
        console.log('Connected to MongoDB'); // Logging a message to the console indicating that the connection to MongoDB was successful.
        app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
})
    } catch (error) {
        console.log(error); // If there is an error while connecting to MongoDB, it will be caught and logged to the console.
    }
}

start(); // Calling the start function to initiate the connection to MongoDB before starting the server.

