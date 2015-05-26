var express = require('express');
var router = express.Router();
var User = require('../query').user;
var tools = require('../tools')

/* GET users listing. */
router.get('/', function(req, res) {
	res.send('respond with a resource');
})

//用户注册
.get('/signup', function(req, res){
	res.render('signup');
})
.post('/signup', function(req, res) {
	var body = req.body
	   ,login_name = body.login_name
	   ,pass = body.password
	   ,confirm_password = body.confirm_password;
    tools.bHash(pass, function(err, passhash){
    	if(err) return next(err);
    	User.newAndSeve(login_name, passhash, function(){
    		res.redirect('/')
    	})
    })
})


module.exports = router;
