const User = require('../../user/User');
const bcrypt = require('bcrypt');
const cookieSession = require('cookie-session');

// RETURNS ALL THE USERS IN THE DATABASE
exports.post = (req, res, next) => {
    console.log('login controller reached');
    console.log('this is req.body: ', req.body);
    let credentials = req.body;
    
    //get the email and password of the user with the submitted email
    User.findOne({ 'email': credentials.email }, 'email password')
    .then(user => {
        bcrypt.compare(credentials.password, user.password)
        .then(result => {
            if (result == true){
                console.log('login succesfull')
                req.session.loggedin = true;
                // res.status(302);
                // res.render('home', { active : { home : true }, userNames });
                res.end(JSON.stringify('/'));
                // res.redirect('/');
            } else {
                console.log('login failed')
            }
        })
        console.log('this is result of findOne ', user);
        
    })
    .catch(err => {
        console.log(err);
    })
   
    // User.findOne({ 'email': req.body.email }, 'password')
    // .then(userPassword => {
    // })
};


// , function (err, person) {
//   if (err) return handleError(err);
//   // Prints "Space Ghost is a talk show host".
//   console.log('%s %s is a %s.', person.name.first, person.name.last,
//     person.occupation);
// });

    // bcrypt.genSalt(10)
    //     .then(salt => {
    //         bcrypt.hash(req.body.password, salt)
    //             .then(hashed => {
    //                 User.create({
    //                         name: req.body.name,
    //                         email: req.body.email,
    //                         password: hashed
    //                     })
    //                     .then(user => {
    //                         res.status(200).send(user);
    //                     })
    //                     .catch(err => {
    //                         if(err.message.indexOf('E11000') >= 0){
    //                             //NOTE: 
    //                             //need to add xhr to be able to handle response upon form submission (use formData())
                                
    //                             // let duplicateError = 'Email address already registered';
    //                             console.log('user email already exists');
    //                             // res.status(200).send(duplicateError);
    //                         }
    //                         console.log('error: ', err.message);
    //                         next(err);
    //                     })
    //             })
    //     })
