const path = require('path');

exports.get = (req, res, next) => {
    // res.sendFile(path.join(__dirname, '..', '..', 'public', 'index.html'));
    res.render('home', { active : { auth : true } });
};
