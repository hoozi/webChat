/**
 * @authors : hoozi
 * @webSite : https://github.com/hoozi 
 * @email   : 287036406@qq.com
 * @date    : 2015-05-26 16:05:26
 * @version : 0.0.1
 */
 var User = require("../models").user;

/**
 * 根据用户名查找
 * Callback:
 * - err, 数据库异常
 * - user, 用户
 * @param {String} name 用户名
 * @param {Function} cb 回调函数
 */
 exports.getUserByName = function(name, cb) {
 	User.findOne({userName: name}, cb);
 }

 /**
 * 根据用户ID查找
 * Callback:
 * - err, 数据库异常
 * - user, 用户
 * @param {String} id 用户ID
 * @param {Function} cb 回调函数
 */
 exports.getUserById = function(id, cb) {
 	User.findById(id, cb);
 }

  /**
 * 获取所有的用户
 * Callback:
 * - err, 数据库异常
 * - users, 用户列表
 * @param {Function} cb 回调函数
 */
 exports.getUsers = function(query, cb) {
 	if(typeof(query)=='function') {
 		cb = query;
 		query = {};
 	}
 	User.find(query, cb);
 }
 
 /**
 * 添加用户
 * Callback:
 * - err, 数据库异常
 * @param {String} login_name 用户名
 * @param {String} pass 用户密码
 * @param {Function} cb 回调函数
 */
 exports.newAndSave = function(login_name, pass, cb) {
 	var user = new User();
 	user.userName = login_name;
 	user.passWord = pass;
 	user.save(cb);
 }