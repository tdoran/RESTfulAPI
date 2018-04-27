const express = require('express');
const app = express();
const db = require('./db');
const controllers = require('./controllers/');
const path = require('path')

app.use(express.static(path.join(__dirname, '..', 'public')));
app.use(controllers);

module.exports = app;