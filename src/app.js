const express = require('express');
const app = express();
const exphbs = require('express-handlebars');
const db = require('./db');
const controllers = require('./controllers/');
const path = require('path')

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
app.engine(
  'hbs',
  exphbs({
    extname: 'hbs',
    layoutsDir: path.join(__dirname, 'views', 'layouts'),
    partialsDir: path.join(__dirname, 'views', 'partials'),
    defaultLayout: 'main',
    // helpers
  })
);

app.use(express.static(path.join(__dirname, '..', 'public')));
app.use(controllers);

module.exports = app;