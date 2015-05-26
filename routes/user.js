var express = require('express');
var router = express.Router();
var controllers = require('../controllers');


/* GET users listing. */
router.get('/', function(req, res) {
	res.send('respond with a resource');
})

//用户注册
.get('/signup', function(req, res){
	res.render('signup');
})
.post('/signup', controllers.sign.signup)


module.exports = router;
