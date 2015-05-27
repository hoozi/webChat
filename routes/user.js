var express = require('express');
var router = express.Router();
var controllers = require('../controllers');
var tools = require('../tools');
//var Session = require('../models').session
/* GET users listing. */
router.get('/user/online', function(req, res) {
	/*Session.find(function(err, user){
		console.log(user.userName);
	})*/
})

//用户注册
.get('/signup', controllers.sign.signup_show)
.post('/signup', tools.validator.signup, controllers.sign.signup)

//用户登录
.get('/signin', controllers.sign.signin_show)
.post('/signin', tools.validator.signin, controllers.sign.signin)

//用户登出
.get('/signout', controllers.sign.signout)

module.exports = router;
