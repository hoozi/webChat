/**
 * @authors : hoozi
 * @webSite : https://github.com/hoozi 
 * @email   : 287036406@qq.com
 * @date    : 2015-05-28 09:48:42
 * @version : 0.0.1
 */
module.exports = function(req, res, next) {
	if(req.session.user) {
		next();
	} else {
		return res.redirect('signin');
	}
}