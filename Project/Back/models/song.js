const songs = [{
    idsong : "1",
    titlesong : 'SONG 1 ',
    releasedatesong : '03/01/1997',
    onlineSource : "https://drive.google.com/uc?export=download&id=1SRsTjdoPvuVHqacDXmnJ62LT8Jk-rSf2",
},{
    idsong : "2",
    titlesong : 'SONG 2',
    releasedatesong : '02/04/2003',
    onlineSource : "https://drive.google.com/uc?export=download&id=1SRsTjdoPvuVHqacDXmnJ62LT8Jk-rSf2",

},
{
    idsong : "3",
    titlesong : 'SONG 3',
    releasedatesong : '04/08/2004',
    onlineSource : "https://drive.google.com/uc?export=download&id=1SRsTjdoPvuVHqacDXmnJ62LT8Jk-rSf2",

}];
module.exports = class Song {
    constructor(idsong, titlesong, releasedatesong,onlineSource) {
        this.idsong = idsong;
        this.titlesong = titlesong;
        this.releasedatesong = releasedatesong;
        this.onlineSource = onlineSource ;
    }
    static getAll() {
        return songs;
    }

    static searchByTitle(title){
        console.log("title",title)
        console.log(songs)
        let list = songs.filter(s => s.titlesong.toLowerCase().includes(title.toLowerCase()));
        console.log(list);
        return list;
    }
}
