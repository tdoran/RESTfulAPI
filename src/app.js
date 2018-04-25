const express = require('express');
const app = express();
const db = require('./db');

const UserController = require('./user/UserController');
//the '/' route in UserController.js is now mapped to '/users'
app.use('/users', UserController);

module.exports = app;