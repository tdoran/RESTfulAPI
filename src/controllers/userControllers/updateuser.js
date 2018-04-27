const User = require('../../user/User');

// RETURNS ALL THE USERS IN THE DATABASE
exports.put = (req, res, next) => {

    User.findByIdAndUpdate(req.params.id, req.body, {new: true})
    .then(user => {
        res.status(200).send(user);
    })
    .catch(err => {
        return res.status(500).send("There was a problem updating the user.");
    })
};