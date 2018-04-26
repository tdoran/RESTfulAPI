const User = require('../../user/User');

console.log('getallusers.js reached')
// RETURNS ALL THE USERS IN THE DATABASE
exports.get = (req, res, next) => {

    console.log('this is GET req: ', req);
    console.log('this is GET req.body ', req.body);

    User.find({}, (err, users) => {
        if (err) return res.status(500).send("There was a problem finding the users.");
        res.status(200).send(users);
    });
    // next();
};