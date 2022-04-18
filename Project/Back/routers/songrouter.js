const express = require('express');
const usercontroller = require('../controllers/songcontroller');
const router = express.Router();

router.get('/', usercontroller.getAll );

module.exports = router ;