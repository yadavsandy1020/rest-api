/******
 * Import the required Modules
 * */
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');


// Import routes
const apiRoutes = require('./routes/video-routes');

//Initialize the app
let app = express();


//Body Parser to handle post request data
app.use(bodyParser.urlencoded({
    extended:true
}));

app.use(bodyParser.json());

//db connection
mongoose.connect('mongodb://localhost/playlist');

let db = mongoose.connection;


// Use Api routes in the App
app.use('/api', apiRoutes)

//setup the server PORT
let port =  process.env.PORT || 3001;

// Send message for default URL
app.get('/', (req, res) => res.send('Hello World'));

// Launch app to listen to specified port
app.listen(port, function () {
    console.log("Running RestAPI on port " + port);
});



