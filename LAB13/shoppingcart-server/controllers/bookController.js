const Product = require('../models/books');

//Create
exports.save = (req, res, next) => {
    const book = req.body;
    const savedBook = new Book(null, book.title, book.ISBN, book.publishedDate, book.author).save();
    res.status(201).json(saveBook);
}
// read 
exports.getBooks = (req, res, next) => {
    res.status(200).json(Books.fetchAll());
}
//Update 
exports.update = (req, res, next) => {
    const book = req.body;
    const updateBook = new Book(req.params.bookId, book.ISBN, book.publishedDate, book.author).update();
    res.status(200).json(updateBook);
}
//delete
exports.deleteById = (req, res, next) => {
    Product.deleteById(req.params.bookId);
    res.status(200).end();
}

