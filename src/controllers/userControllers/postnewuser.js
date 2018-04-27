const User = require('../../user/User');
const bcrypt = require('bcrypt');

// RETURNS ALL THE USERS IN THE DATABASE
exports.post = (req, res, next) => {
    bcrypt.genSalt(10)
        .then(salt => {
            bcrypt.hash(req.body.password, salt)
                .then(hashed => {
                    User.create({
                            name: req.body.name,
                            email: req.body.email,
                            password: hashed
                        })
                        .then(user => {
                            res.status(200).send(user);
                        })
                        .catch(err => {
                            if(err.message.indexOf('E11000') >= 0){
                                //NOTE: 
                                //need to add xhr to be able to handle response upon form submission (use formData())
                                
                                // let duplicateError = 'Email address already registered';
                                console.log('user email already exists');
                                // res.status(200).send(duplicateError);
                            }
                            console.log('error: ', err.message);
                            next(err);
                        })
                })
        })
};

// bcrypt.genSalt(10, (err, salt) => {
//     if (err) console.log(err);
//     else {
//       bcrypt.hash(body.data.regPassword, salt, (err, hashed) => {
//         if (err) console.log(err);
//         else {
//           console.log('inside bcrypt.hash!!');
//           userDetails.push(hashed);
//           userDetails.push(salt);

//           checkNewUserExists(userDetails)
//             .then(addNewUser)
//             .then((feedback) => {
//               if (feedback) {
//                 // CREATE USER PROFILE!!!
//                 const token = sign(feedback, process.env.JWT_SECRET);
//                 // add secure when pushing to Heroku
//                 res.writeHead(200, {
//                   'Set-Cookie': `jwt=${token}; HttpOnly; Max-Age=86400`,
//                   'Content-Type': 'text/plain',
//                 });
//                 res.end(JSON.stringify({
//                   message: 'Registration Success!',
//                   route: '/profile',
//                 }));
//               } else {
//                 res.writeHead(200, { 'Content-Type': 'text/html' });
//                 res.end(JSON.stringify({
//                   message: 'Registration failed. Sorry, that email is already in use.',
//                 }));
//               }
//             })
//             .catch(err => console.log(err));
//         }
//       });
//     }
//   });