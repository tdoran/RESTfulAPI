const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');

router.use(bodyParser.urlencoded({ extended: true}));
router.use(bodyParser.json());

const User = require('./User');

// CREATES A NEW USER
router.post('/', (req, res) => {
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

});

// RETURNS ALL THE USERS IN THE DATABASE
//the '/' route is mapped to '/users' in app.js
router.get('/', (req, res) => {

    console.log('this is GET req: ', req);
    console.log('this is GET req.body ', req.body);

    User.find({}, (err, users) => {
        if (err) return res.status(500).send("There was a problem finding the users.");
        res.status(200).send(users);
    });
});

// GETS A SINGLE USER FROM THE DATABASE
router.get('/:id', (req, res) => {

    User.findById(req.params.id)
    .then(user => {
        if (!user) return res.status(404).send("No user found.");
        console.log('this is user: ', user);
        res.status(200).send(user);
    })
    .catch(err =>{
        if (err) return res.status(500).send("There was a problem finding the user.");        
    });
});

// DELETES A SINGLE USER FROM THE DATABASE
router.delete('/:id', (req, res) => {

    User.findByIdAndRemove(req.params.id)
    .then(user => {
        if (!user) return res.status(404).send("No user found.");
        console.log('this is user: ', user);
        res.status(200).send(user);
    })
    .catch(err =>{
        if (err) return res.status(500).send("There was a problem finding the user.");        
    });
});

//UPDATES SINGLE USER IN DATABASE
router.put('/:id', (req, res) => {

    User.findByIdAndUpdate(req.params.id, req.body, {new: true})
    .then(user => {
        res.status(200).send(user);
    })
    .catch(err => {
        return res.status(500).send("There was a problem updating the user.");
    })
})

module.exports = router;