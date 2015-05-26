/**
 * @authors : hoozi
 * @webSite : https://github.com/hoozi 
 * @email   : 287036406@qq.com
 * @date    : 2015-05-26 15:53:22
 * @version : 0.0.1
 */
var bcrypt = require("bcrypt-nodejs");
var salt = bcrypt.genSaltSync(10)
/**
 * 主要用于用户的password加密
 *
 * @param  {String} str
 * @param  {function} cb(error, result)
 * @retrun {function} bcrypt.hash
 */
exports.bHash = function(str,cb) {
	return bcrypt.hash(str,salt,null,cb)
}

/**
 * 主要用于用户的password验证
 *
 * @param  {String} str
 * @param  {String} encrypted
 * @param  {function} cb(error, result)
 * @retrun {function} bcrypt.compare
 */
exports.bCompare = function(data, encrypted, cb) {
	return bcrypt.compare(data, encrypted, cb)
}