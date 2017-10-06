// Import express and path modules.
var express = require( "express");
var path = require( "path");
// Create the express app.
var app = express();

var theCounter = 0;

// Define the static folder.
app.use(express.static(path.join(__dirname, "./static")));
// Setup ejs templating and define the views folder.
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

// Start Node server listening on port 8000, create server var and put it in listen method
var server = app.listen(8000, function() {
 console.log("listening on port 8000 for epicButtonGame");
});

//get all the routes
var routes = require('./routes/index.js')(app,server,theCounter);