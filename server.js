// load modules
const express = require ('express');
const port = process.env.PORT || '3001';
const cors = require ('cors');

// initilize the app
const app = express();

// middleware

const morgan = require('morgan');
app.use(cors());
app.use(express.json())

// load the env vars
require('dotenv').config();

//connect to DB
require('./config/database');

app.use('/money', require('./routes/money'))

// app listening
app.listen(port, function(){
    console.log('Express is listening for requests from the browser')
});
