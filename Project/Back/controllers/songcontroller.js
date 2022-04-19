const song = require('../models/song')

exports.getAll = (req,res,next) => {
    // console.log('xxxx',req.body);
    res.status(200).json(song.getAll()); 
};

// exports.searchByTitle = (req,res,next) => {
//     console.log('tttt',req.params);
//     res.status(200).json(playlist.searchByTitle(req.params.title)); 
// };
exports.searchByTitle = async (req,res,next) => {
    console.log(req.params)
    res.status(200).send(song.searchByTitle(req.params.title));
}