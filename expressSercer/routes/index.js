var express = require('express');
var router = express.Router(); 
const {makeThing} =  require("../contorllers/indexController")

/* GET home page. */
router.post('/', makeThing)

module.exports = router;
