var express = require('express');
var router = express.Router();
var controllers = require('../controllers');
var tools = require('../tools');
/* GET users listing. */
router.get('/list', tools.holder, controllers.user_list)

.get('/add/:id/:user_name', controllers.add_user)
.get('/online/:id/:since', function(req, res) {
	global.users[req.params['id']]=req.params['since'];
	res.json({'status':1})
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
