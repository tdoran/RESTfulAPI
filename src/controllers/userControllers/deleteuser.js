const User = require('../../user/User');

// RETURNS ALL THE USERS IN THE DATABASE
exports.delete = (req, res, next) => {

    User.findByIdAndRemove(req.params.id)
    .then(user => {
        if (!user) return res.status(404).send("No user found.");
        console.log('this is user: ', user);
        res.status(200).send(user);
    })
    .catch(err =>{
        if (err) return res.status(500).send("There was a problem finding the user.");        
    });
};