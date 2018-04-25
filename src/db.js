const mongoose = require('mongoose');
require('env2')('./.env');
const DB_URL = process.env.DB_URL;

mongoose.connect(DB_URL);
