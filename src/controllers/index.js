const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
// const cookieSession = require('cookie-session');

// const user = require('./user');
const home = require('./home')
const getallusers = require('./userControllers/getallusers');
const postnewuser = require('./userControllers/postnewuser');
const updateuser = require('./userControllers/updateuser');
const deleteuser = require('./userControllers/deleteuser');

router.use(bodyParser.urlencoded({ extended: true}));
router.use(bodyParser.json());

router.get('/', home.get);
router.get('/users', getallusers.get);
router.post('/users', postnewuser.post);
router.put('/users/:id', updateuser.put);
router.delete('/users/:id', deleteuser.delete);

module.exports = router;
