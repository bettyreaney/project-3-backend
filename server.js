// load modules
const express = require ('express');
const port = process.env.PORT || '3000';

// load the env vars
require('dotenv').config();

// initilize the app
const app = express();

//connect to DB
require('./config/database');


// app listening
app.listen(port, function(){
    console.log('Express is listening for requests from the browser')
});
