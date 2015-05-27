/**
 * @authors : hoozi
 * @webSite : https://github.com/hoozi 
 * @email   : 287036406@qq.com
 * @date    : 2015-05-26 15:52:20
 * @version : 0.0.1
 */
var tools = require('../tools');
var bcrypt = tools.bcrypt;
var User = require('../query').user;
var _gen_session = function(user, res) {
  var auth_token = user._id;
  res.cookie('hoozi_chat', auth_token,
    {path: '/', maxAge: 1000 * 60 * 60 * 24 * 30, signed: true, httpOnly: true}); //cookie 有效期30天
}
//显示注册页面
exports.signup_show = function(req, res) {
    res.render('signup');
}

//注册controller
exports.signup = function(req, res, next) {
	var login_name = res.locals.login_name;
    var pass = res.locals.pass;
    bcrypt.bHash(pass, function(err, passhash){
        if(err) return next(err);
        User.newAndSave(login_name, passhash, function(){
            res.redirect('signin')
        })
    })
}

exports.signin_show = function(req, res) {
    res.render('signin');
}

exports.signin = function(req, res) {
	var login_name = res.locals.login_name;
    var pass = res.locals.pass;
    User.getUserByName(login_name, function(err, user) {
        if(user) {
             bcrypt.bCompare(pass, user.passWord, function(err, passed){
                if(passed) {
                    _gen_session(user, res);
                    req.session.user = user;
                    res.redirect('/');
                } else {
                    res.render('signin', {err:"用户名或密码错误！"});
                }
             })
        } else {
             res.render('signin', {err:"用户名或密码错误！"});
        }
    })
}

exports.signout = function(req, res) {
    req.session.destroy();
    res.clearCookie('hoozi_chat', {path:'/'});
    res.redirect('signin');
}



