// Setup empty JS object to act as endpoint for all routes
projectData = {};

// Require Express to run server and routes
const express = require('express');

// Start up an instance of app
const app = express();

/* Dependencies */
const bodyParser = require('body-parser');
/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());

// Initialize the main project folder
app.use(express.static('website'));

// Setup Server
const port = 8080;
const server = app.listen(port, listening);
function listening() {
    console.log(`server is running using Node on localhost: ${port}`);
};

// add a POST route that adds incoming data
app.post("/weatherData", (req, res) => {
    projectData = req.body;
    res.send(projectData);
});

// Add a GET route that returns the projectData
app.get("/retreiveData", (req, res) => {
    res.send(projectData);
});