const User = require('../user/User');
// const path = require('path');
// const router = express.Router();
// const getallusers = require('./userControllers/getallusers');
console.log('home controller reached')
exports.get = (req, res, next) => {

    if (req.session.loggedin === true){
        console.log('logged in thing reached')
        
    const allUsers = User.find({});

    allUsers.select('name')
    .then(userNames => {
        console.log('userNames: ', userNames);
        res.status(200);
        res.render('home', { active : { home : true }, userNames });
               
    })
    .catch(err => {
        res.status(500).send("There was a problem finding the users.");
    });
    }
    else{
        res.render('auth', { active : { auth : true } });
    }
    
};
