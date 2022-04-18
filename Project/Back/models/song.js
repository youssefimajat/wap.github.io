const songs = [{
    idsong : "1",
    titlesong : 'SONG 1 ',
    releasedatesong : '03/01/1997'
},{
    idsong : "2",
    titlesong : 'SONG 2',
    releasedatesong : '02/04/2003'
},
{
    idsong : "3",
    titlesong : 'SONG 3',
    releasedatesong : '04/08/2004'
}];
module.exports = class Song {
    constructor(idsong, titlesong, releasedatesong) {
        this.idsong = idsong;
        this.titlesong = titlesong;
        this.releasedatesong = releasedatesong;
    }
    static getAll() {
        return songs;
    }
}
