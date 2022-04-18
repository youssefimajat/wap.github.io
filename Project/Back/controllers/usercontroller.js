const users = require('../models/users')

exports.login = (req,res,next) => {
    console.log('xxxx',req.body);
    res.status(200).json(users.login(req.body.username , req.body.password )); 
};

