var express = require('express');
var router = express.Router();
const {index} = require('../controllers/index')

/* GET home page. */
router.get('/', index);
   

module.exports = router;
