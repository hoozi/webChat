/**
 * @authors : hoozi
 * @webSite : https://github.com/hoozi 
 * @email   : 287036406@qq.com
 * @date    : 2015-05-26 15:52:20
 * @version : 0.0.1
 */
var tools = require('../tools');
var User = require('../query').user;

exports.signup = function(req, res, next) {
	var body = req.body
	   ,login_name = body.login_name
	   ,pass = body.password
	   ,confirm_password = body.confirm_password;
    tools.bHash(pass, function(err, passhash){
    	if(err) return next(err);
    	User.newAndSave(login_name, passhash, function(){
    		res.redirect('/')
    	})
    })
}

exports.signin = function(req, res) {
	
}



