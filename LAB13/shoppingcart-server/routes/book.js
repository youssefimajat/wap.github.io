const express = require('express');
const bookController = require('../controllers/bookController');

const router = express.Router();
//Create
router.post('/', bookController.save);
//read
router.get('/', bookController.getBooks);
//update
router.put('/:bookId', bookController.update);
//delete
router.delete('/:bookId', bookController.deleteById);

module.exports = router;