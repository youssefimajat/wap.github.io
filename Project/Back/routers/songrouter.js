const express = require('express');
const songcontroller = require('../controllers/songcontroller');
const router = express.Router();

router.get('/', songcontroller.getAll );
router.get('/search/:title',songcontroller.searchByTitle);

//router.get('/songs/search', usercontroller.getById);

module.exports = router ;