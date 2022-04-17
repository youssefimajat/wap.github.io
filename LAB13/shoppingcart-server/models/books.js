let Books = [];

module.exports = class Book {

    constructor(id, title, ISBN, publishedDate, author) {
        this.id = id;
        this.title = title;
        this.ISBN = ISBN;
        this.publishedDate = publishedDate;
        this.author = author
    }

    //Create
    save() {
        this.id = Math.random().toString();
        Books.push(this);
        return this;
    }
    //read
    static fetchAll() {
        return Books;
    }
    //Updates
    update() {
        const index = Books.findIndex(p => p.id === this.id);
        if (index > -1) {
            Books.splice(index, 1, this);
            return this;
        } else {
            throw new Error('NOT Found');
        }
    }
    //delete


    static deleteById(bookId) {
        const index = Books.findIndex(p => p.id === bookId);
        if (index > -1) {
            Books = Books.filter(p => p.id !== bookId);
        } else {
            throw new Error('NOT Found');
        }
    }

}