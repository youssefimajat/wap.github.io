const playlists = ["1"];
const songs = require("./song");
module.exports = class Playlists {
    constructor(idsong, titlesong) {
        this.idsong = idsong;
        this.titlesong = titlesong;
    }

    static getPlayListSong() {
        console.log(playlists)
        return songs.getAll().filter(input => playlists.includes(input.idsong));
    }

    static addSongToPlaylist(id) {
        playlists.push(id);
    }

    static deletefromPlaylist(id) {
        playlists.pop(id);
    }




}

