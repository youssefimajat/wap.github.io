const playlist = require('../models/playlist')

exports.getPlayListSong = (req,res,next) => {
    console.log('xxxx',req.body);
    res.status(200).json(playlist.getPlayListSong()); 
};
exports.addSongToPlaylist = (req,res,next) => {
    console.log('xxxx',req.params);
    res.status(200).json(playlist.addSongToPlaylist(req.params.idsong)); 
};


exports.deletefromPlaylist = (req,res,next) => {
    console.log('hhhh',req.params);
    res.status(200).json(playlist.deletefromPlaylist(req.params.idsong)); 
};

exports.playMusic = (req,res,next) =>{
    console.log('playing..', req.params);
    res.send({});
    res.status(200).json(playlist.playMusic(req.params.idsong));
}