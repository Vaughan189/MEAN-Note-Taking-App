var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
// create express app
var app = express();

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// parse requests of content-type - application/json
app.use(bodyParser.json());
app.use(express.static(__dirname + "../dist"));
// Configuring the database
var dbConfig = require('./config/database.config.js');
var mongoose = require('mongoose');


mongoose.connect(dbConfig.url, { useMongoClient: true });

mongoose.connection.on('error', function() {
    console.log('Could not connect to the database. Exiting now...');
    process.exit();
});
mongoose.connection.open('open', function() {
    console.log("Successfully connected to the database");
});

app.use(cors());
// define a simple route
app.get('/', function(req, res) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
    res.json({ "message": "Welcome to EasyNotes application. Take notes quickly. Organize and keep track of all your notes." });
});

// Require Notes routes
require('./app/routes/note.routes.js')(app);

// listen for requests
app.listen(3000, function() {
    console.log("Server is listening on port 3000");
});