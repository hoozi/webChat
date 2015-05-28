/**
 * @authors : hoozi
 * @webSite : https://github.com/hoozi 
 * @email   : 287036406@qq.com
 * @date    : 2015-05-28 09:55:39
 * @version : 0.0.1
 */
var User = require('../query').user
module.exports = function(req, res) {
	var user_id = req.params['id'];
	var user_name = req.params['user_name'];
	var my_id = req.session.user && req.session.user._id;
	User.getUserById(my_id, function(err, user1) {
		if(err) return next(err);
		User.getUserById(user_id, function(err, user2) {
			user2.for_id = my_id;
			user2.save(function(){
				user1.friends.push({id:user_id, userName:user_name});
				user1.save(function(err){
					if(err) return next(err);
					req.session.user.friends = user1.friends;
					res.redirect('/')
				});
			})
		})
		
	})
}