var express = require('express');
var router = express.Router();
var User = require('../query').user;
/*var now = Date.now();
	for(var k in app.locals.users) {
		if(now-user[k]>timeout) {
			console.log(k+'超时了！')
		}
	}*/
/* GET home page. */

router.get('/', function(req, res, next) {
  if(!req.session.user) {
  	 return res.redirect('/user/signin');
  }
  User.getUserById(req.session.user._id, function(err, user) {
  	    if(user) {
  	    	var friends = user.friends;
  	    	var now = Date.now();
    			for(var k in global.users) {
    				if(now-global.users[k]<60000) {
              friends.map(function(friend) {
                if(k==friend.id) {
                  return friend["online"] = 1;
                }
              })
    				}
    			}
    			res.render('index', {user:user});
  		}
  })
 
});

module.exports = router;
