/**
 * @authors : hoozi
 * @webSite : https://github.com/hoozi 
 * @email   : 287036406@qq.com
 * @date    : 2015-05-28 09:42:56
 * @version : 0.0.1
 */
var User = require('../query').user
 
module.exports = function(req, res) {
	var my_id = req.session.user && req.session.user._id;
	var my_friends = req.session.user.friends;
	User.getUsers({_id:{'$ne':my_id},for_id:{'$ne':my_id}},function(err, users){
		res.render('users', {users: users})
	})
}