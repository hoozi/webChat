var express = require('express');
var router = express.Router();
/* GET home page. */
router.get('/', function(req, res, next) {
  if(!req.session.user) {
  	 return res.redirect('/user/signin');
  }
  res.render('index', { title: 'Express',user:req.session.user });
});

module.exports = router;
