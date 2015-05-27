/**
 * @authors : hoozi
 * @webSite : https://github.com/hoozi 
 * @email   : 287036406@qq.com
 * @date    : 2015-05-27 09:18:02
 * @version : 0.0.1
 */
var validator = require('validator');
var User = require('../query').user

/**
 * 验证用户名、密码
 * @param {String} name 用户名
 * @param {String} pass 密码
 * @return {String} err_msg 错误信息
 */
var _check_name_pass = function(name, pass){
	var err_msg = ""
	var _checkLang = function(str) {
		return !validator.matches(str, /[a-zA-Z0-9_]/g);
	}
	var isEmpty = [name, pass].some(function(field) {
		return !field
	})

	//验证用户名和密码是否填写
	if(!isEmpty) {

		//验证用户名或者密码长度 以及有效性
		if(!validator.isLength(name,6) ||　!validator.isLength(pass,6)) {
			err_msg = '用户名或密码至少为6位！';
		} else {
			if(_checkLang(name) || _checkLang(pass)) {
				err_msg = '用户名或者密码只能由数字、字母、下划线组成！'
			}
		}
	} else {
		err_msg = '信息不完整！';
	}

	return err_msg;
}
exports.signup = function(req, res, next) {
	var body = req.body;
	var login_name = validator.trim(body.login_name);
	var pass = validator.trim(body.password);
	var confirm_pass = validator.trim(body.confirm_password);
	User.getUserByName(login_name, function(err, user) {
		var err_msg = _check_name_pass(login_name, pass)
		//验证两次密码是否一致
		if(!validator.equals(pass, confirm_pass)) {
			err_msg = '两次输入的密码不一致！';
		}
		if(user) {
			return res.render('signup', {err:"用户名已经存在！"});
		}
		if(err_msg) return res.render('signup', {err:err_msg});
		res.locals.login_name = login_name;
		res.locals.pass = pass;
		next()
	})
}
exports.signin = function(req, res, next) {
	var body = req.body;
	var login_name = validator.trim(body.login_name);
	var pass = validator.trim(body.password);
	var err_msg = _check_name_pass(login_name, pass);
	if(err_msg) return res.render('signin', {err:err_msg});
	res.locals.login_name = login_name;
	res.locals.pass = pass;
	return next();
}