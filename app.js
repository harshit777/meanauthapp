const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const mongoose = require('mongoose');
const config = require('./config/database');

// connnect to database
mongoose.connect();

// On Connection
mongoose.connection.on('connected', () => {
    console.log('Connected to Database' + config.database);
});

// On Error
mongoose.connection.on('error', (err) => {
    console.log('Database error' + confog.database);
});

const app = express();

const users = require('./routes/users');

//port number
const port = 3000;

//Cors Middleware
app.use(cors());

// Set Static folder
app.use(express.static(path.join(__dirname, 'public')));

//Body Parser Middleware
app.use(bodyParser.json());

app.use('/users', users);

//Index Route
app.get('/', (req, res) => {
    res.send('Invalid Endpoint');
});

//Start Server
app.listen(port, () => {
    console.log('Server started on port'  + port);
});