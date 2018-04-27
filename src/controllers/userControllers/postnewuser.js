const User = require('../../user/User');

// RETURNS ALL THE USERS IN THE DATABASE
exports.post = (req, res, next) => {
    console.log('this is POST req: ', req);
    console.log('this is POST req.body ', req.body);
    User.create({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    }, (err, user) => {
        if (err) return res.status(500).send("There was a problem adding the information to the database.");
        res.status(200).send(user);
    });

};