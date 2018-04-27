const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const cookieSession = require('cookie-session');

// const user = require('./user');
const home = require('./home')
const getallusers = require('./userControllers/getallusers');
const loginuser = require('./userControllers/loginuser');
const postnewuser = require('./userControllers/postnewuser');
const updateuser = require('./userControllers/updateuser');
const deleteuser = require('./userControllers/deleteuser');
const error = require('./error');

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true}));

router.use(
    cookieSession({
      name: 'session',
      secret: process.env.SECRET
    })
  );

router.get('/', home.get);
router.post('/login', loginuser.post);
router.get('/users', getallusers.get);
router.post('/users', postnewuser.post);
router.put('/users/:id', updateuser.put);
router.delete('/users/:id', deleteuser.delete);
router.use(error.client);
router.use(error.server);


module.exports = router;
