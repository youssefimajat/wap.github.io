const song = require('../models/song')

exports.getAll = (req,res,next) => {
    console.log('xxxx',req.body);
    res.status(200).json(song.getAll()); 
};