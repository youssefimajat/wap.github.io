const express = require('express');
const playlistcontroller = require('../controllers/playlistcontroller');
const router = express.Router();

router.get('/', playlistcontroller.getPlayListSong);

router.post('/:idsong', playlistcontroller.addSongToPlaylist);


router.delete('/:idsong',playlistcontroller.deletefromPlaylist);
router.get('/:idsong',playlistcontroller.playMusic);


module.exports = router ;


