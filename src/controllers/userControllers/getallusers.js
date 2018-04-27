const User = require('../../user/User');

console.log('getallusers.js reached')
// RETURNS ALL THE USERS IN THE DATABASE
exports.get = (req, res, next) => {
    if (req.session.loggedin === true){
        const allUsers = User.find({});

    allUsers.select('name')
    .then(userNames => {
        res.status(200); 
        res.send(userNames);
        // res.render('home', { active : { auth : true }, userNames });
        
               
    })
    .catch(err => {
        res.status(500).send("There was a problem finding the users.");
    });
    }
    else {
        res.status(200);
        res.end();
    }
    
    // next();
};